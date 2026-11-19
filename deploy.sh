#!/bin/sh
set -eu

sh "$(dirname "$0")/publish-r2.sh" Youtube YoutubeConfig.json YoutubeConfig.json YoutubeScript.js youtube.png
