#!/usr/bin/env bash
set -euo pipefail

# Script to download commonly-used assets locally so the site doesn't load them from CDNs.
# Run from the repository root: bash ./assets/download-assets.sh

ASSETS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
mkdir -p "$ASSETS_DIR"

echo "Downloading assets to $ASSETS_DIR"

curl -Lf -o "$ASSETS_DIR/normalize.min.css" "https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
curl -Lf -o "$ASSETS_DIR/jquery.min.js" "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
# The font CSS from FontLibrary may require manual download or adjustments. This URL may return an HTML wrapper.
curl -Lf -o "$ASSETS_DIR/anka-coder-condensed.css" "https://fontlibrary.org//face/anka-coder-condensed" || true

echo "Done.\n\nNext steps:\n 1) Inspect the downloaded files in $ASSETS_DIR and verify they are valid (especially the font CSS).\n 2) Verify licenses before deploying (these libraries are generally permissive but check each project).\n 3) Make the script executable if you want: chmod +x ./assets/download-assets.sh\n"