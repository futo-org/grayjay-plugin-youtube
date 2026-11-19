#!/bin/sh
set -eu

if [ "$#" -lt 5 ]; then
    echo "Usage: $0 PREFIX CONFIG_INPUT CONFIG_NAME SCRIPT_INPUT ICON_INPUT [ASSET_SOURCE:DESTINATION ...]" >&2
    exit 2
fi

prefix=$1
config_input=$2
config_name=$3
script_input=$4
icon_input=$5
shift 5

case "$prefix" in
    ''|/*|*..*|*[!a-zA-Z0-9_/-]*) echo "Invalid plugin prefix" >&2; exit 2 ;;
esac
case "$config_name" in
    ''|*/*|*..*) echo "Invalid config filename" >&2; exit 2 ;;
esac

: "${PLUGIN_R2_BUCKET:?Set the dedicated plugin R2 bucket}"
: "${CF_R2_ACCOUNT_ID:?Set the Cloudflare R2 account ID}"
: "${CF_R2_ACCESS_KEY_ID:?Set the plugin bucket access key}"
: "${CF_R2_SECRET_ACCESS_KEY:?Set the plugin bucket secret key}"
: "${SIGNING_PRIVATE_KEY:?Set the existing plugin signing key}"
: "${CLOUDFLARE_ZONE_ID:?Set the plugin hostname zone ID}"
: "${CLOUDFLARE_API_TOKEN:?Set the cache purge token}"

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
workspace=$(mktemp -d)
trap 'rm -rf "$workspace"' EXIT
trap 'exit 1' HUP INT TERM

script_name=$(basename "$script_input")
icon_name=$(basename "$icon_input")
case "$icon_name" in
    *.png) icon_type="image/png" ;;
    *.jpg|*.jpeg) icon_type="image/jpeg" ;;
    *.svg) icon_type="image/svg+xml" ;;
    *.webp) icon_type="image/webp" ;;
    *.gif) icon_type="image/gif" ;;
    *) echo "Unsupported icon type" >&2; exit 2 ;;
esac
cp "$config_input" "$workspace/$config_name"
cp "$script_input" "$workspace/$script_name"
cp "$icon_input" "$workspace/$icon_name"

config_url="https://plugins.grayjay.app/$prefix/$config_name"
# Preserve the existing stable/dev channel mapping in the staged config.
jq --arg url "$config_url" '.sourceUrl = $url' "$workspace/$config_name" > "$workspace/source.tmp"
mv "$workspace/source.tmp" "$workspace/$config_name"

# Keep the existing signer and key, isolated from the source checkout.
(cd "$workspace" && sh "$repo_root/sign.sh" "$script_name" "$config_name")
jq -er '.scriptSignature' "$workspace/$config_name" | base64 -d > "$workspace/signature.bin"
jq -er '.scriptPublicKey' "$workspace/$config_name" | base64 -d > "$workspace/public.der"
openssl pkey -pubin -inform DER -in "$workspace/public.der" -out "$workspace/public.pem"
openssl dgst -sha512 -verify "$workspace/public.pem" \
    -signature "$workspace/signature.bin" "$workspace/$script_name" > /dev/null

# Configs may be cached independently: each one must reference immutable bytes.
script_hash=$(sha256sum "$workspace/$script_name" | cut -d ' ' -f 1)
icon_hash=$(sha256sum "$workspace/$icon_name" | cut -d ' ' -f 1)
published_script="${script_name%.*}.$script_hash.${script_name##*.}"
published_icon="${icon_name%.*}.$icon_hash.${icon_name##*.}"
mv "$workspace/$script_name" "$workspace/$published_script"
mv "$workspace/$icon_name" "$workspace/$published_icon"
jq --arg script "./$published_script" --arg icon "./$published_icon" \
    '.scriptUrl = $script | .iconUrl = $icon' "$workspace/$config_name" \
    > "$workspace/config.tmp"
mv "$workspace/config.tmp" "$workspace/$config_name"

upload() {
    AWS_ACCESS_KEY_ID="$CF_R2_ACCESS_KEY_ID" \
    AWS_SECRET_ACCESS_KEY="$CF_R2_SECRET_ACCESS_KEY" \
    AWS_DEFAULT_REGION=auto \
    aws s3 cp "$workspace/$1" "s3://$PLUGIN_R2_BUCKET/$prefix/$1" \
        --endpoint-url "https://$CF_R2_ACCOUNT_ID.r2.cloudflarestorage.com" \
        --only-show-errors --cache-control "$2" --content-type "$3"
}

upload "$published_script" "public, max-age=31536000, immutable" "application/javascript; charset=utf-8"
upload "$published_icon" "public, max-age=31536000, immutable" "$icon_type"

# Keep additional runtime assets at the paths expected by the signed script.
printf '%s\n' "$config_url" > "$workspace/purge-urls.txt"
for asset in "$@"; do
    asset_source=${asset%%:*}
    asset_destination=${asset#*:}
    case "$asset_destination" in
        ''|/*|*..*) echo "Invalid asset destination" >&2; exit 2 ;;
    esac
    mkdir -p "$workspace/$(dirname "$asset_destination")"
    if [ -d "$asset_source" ]; then
        mkdir -p "$workspace/$asset_destination"
        cp -R "$asset_source/." "$workspace/$asset_destination/"
    else
        cp "$asset_source" "$workspace/$asset_destination"
    fi
    find "$workspace/$asset_destination" -type f > "$workspace/asset-files.txt"
    while IFS= read -r asset_file; do
        asset_key=${asset_file#"$workspace/"}
        case "$asset_key" in
            *.xcf) continue ;; # GIMP source artwork is not a runtime asset.
            *.png) asset_type="image/png" ;;
            *.svg) asset_type="image/svg+xml" ;;
            *.jpg|*.jpeg) asset_type="image/jpeg" ;;
            *.webp) asset_type="image/webp" ;;
            *.json) asset_type="application/json; charset=utf-8" ;;
            *.js) asset_type="application/javascript; charset=utf-8" ;;
            *.css) asset_type="text/css; charset=utf-8" ;;
            *) asset_type="application/octet-stream" ;;
        esac
        upload "$asset_key" "public, max-age=60, must-revalidate" "$asset_type"
        printf '%s\n' "https://plugins.grayjay.app/$prefix/$asset_key" >> "$workspace/purge-urls.txt"
    done < "$workspace/asset-files.txt"
done

# Publish the config only after all referenced objects have been uploaded.
upload "$config_name" "public, max-age=60, must-revalidate" "application/json; charset=utf-8"

purge_body=$(jq -Rsc '{files: (split("\n") | map(select(length > 0)))}' "$workspace/purge-urls.txt")
curl --fail --silent --show-error \
    -X POST "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/purge_cache" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H "Content-Type: application/json" --data "$purge_body" \
    > "$workspace/purge-response.json"
jq -e '.success == true' "$workspace/purge-response.json" > /dev/null
echo "Published $config_url"
