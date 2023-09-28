#!/bin/sh

# Parameters
JS_FILE_PATH=$1
CONFIG_FILE_PATH=$2

# Decode and save the private key to a temporary file
echo "$SIGNING_PRIVATE_KEY" | base64 -d > tmp_private_key.pem
echo "SIGNING_PRIVATE_KEY (length): ${#SIGNING_PRIVATE_KEY}"
echo "SIGNING_PRIVATE_KEY: ${SIGNING_PRIVATE_KEY:0:20}..."

# Validate private key
if ! openssl rsa -check -noout -in tmp_private_key.pem > /dev/null 2>&1; then
  echo "Invalid private key."
  rm tmp_private_key.pem
  exit 1
fi

# Generate signature for the provided JS file
SIGNATURE=$(cat $JS_FILE_PATH | openssl dgst -sha512 -sign tmp_private_key.pem | base64 -w 0)

# Extract public key from the temporary private key file
PUBLIC_KEY=$(openssl rsa -pubout -outform DER -in tmp_private_key.pem 2>/dev/null | openssl pkey -pubin -inform DER -outform PEM | tail -n +2 | head -n -1 | tr -d '\n')

echo "PUBLIC_KEY: $PUBLIC_KEY"

# Remove temporary key files
rm tmp_private_key.pem

# Read existing Config JSON into variable
CONFIG_JSON=$(cat $CONFIG_FILE_PATH)

# Update "scriptSignature" and "scriptPublicKey" fields in Config JSON
UPDATED_CONFIG_JSON=$(echo "$CONFIG_JSON" | jq --arg signature "$SIGNATURE" --arg publicKey "$PUBLIC_KEY" '. + {scriptSignature: $signature, scriptPublicKey: $publicKey}')

# Write updated JSON back to Config JSON file
echo "$UPDATED_CONFIG_JSON" > $CONFIG_FILE_PATH
