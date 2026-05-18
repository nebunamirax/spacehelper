#!/usr/bin/env sh
set -eu

cd "$(dirname "$0")/.."

echo "1/4 Extraction Invamap..."
node scripts/extract-invamap.mjs

echo "2/4 Enrichissement Invader Spotter..."
node scripts/enrich-invader-spotter.mjs

echo "3/4 Génération data/invaders.js..."
node scripts/build-static-data.mjs

echo "4/4 Génération standalone et GitHub Pages..."
./scripts/build-standalone.sh

echo "Base mise à jour."
