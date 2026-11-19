#!/bin/sh
set -eu

sh "$(dirname "$0")/publish-r2.sh" YoutubeUnstable YoutubeUnstableConfig.json YoutubeConfig.json YoutubeScript.js youtubeAlt.png
