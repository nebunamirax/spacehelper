#!/usr/bin/env sh
set -eu

cd "$(dirname "$0")/.."

echo "1/3 Enrichissement Invader Spotter..."
node scripts/enrich-invader-spotter.mjs

echo "2/3 Génération data/invaders.js..."
node scripts/build-static-data.mjs

echo "3/3 Génération standalone et GitHub Pages..."
./scripts/build-standalone.sh

echo "Actualisation légère terminée."
