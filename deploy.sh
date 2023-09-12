#!/bin/sh
DOCUMENT_ROOT=/var/www/sources

# Take site offline
echo "Taking site offline..."
touch $DOCUMENT_ROOT/maintenance.file

# Swap over the content
echo "Deploying content..."
mkdir -p $DOCUMENT_ROOT/Youtube
cp youtube.png $DOCUMENT_ROOT/Youtube
cp YoutubeConfig.json $DOCUMENT_ROOT/Youtube
cp YoutubeScript.js $DOCUMENT_ROOT/Youtube

# Notify Cloudflare to wipe the CDN cache
echo "Purging Cloudflare cache..."
curl -X POST "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/purge_cache" \
     -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
     -H "Content-Type: application/json" \
     --data '{"files":["https://plugins.grayjay.app/Youtube/youtube.png", "https://plugins.grayjay.app/Youtube/YoutubeConfig.json", "https://plugins.grayjay.app/Youtube/YoutubeScript.js"]}'

# Take site back online
echo "Bringing site back online..."
rm $DOCUMENT_ROOT/maintenance.file
