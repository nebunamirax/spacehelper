import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";

const ARRONDISSEMENTS_URL =
  "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/arrondissements/exports/geojson?lang=fr&timezone=Europe%2FParis";
const DATA_FILE = new URL("../data/invaders.json", import.meta.url);

function pointInRing([x, y], ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    const intersects = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersects) inside = !inside;
  }
  return inside;
}

function pointInPolygon(point, polygon) {
  if (!polygon?.length || !pointInRing(point, polygon[0])) return false;
  return !polygon.slice(1).some((hole) => pointInRing(point, hole));
}

function pointInGeometry(point, geometry) {
  if (geometry.type === "Polygon") return pointInPolygon(point, geometry.coordinates);
  if (geometry.type === "MultiPolygon") return geometry.coordinates.some((polygon) => pointInPolygon(point, polygon));
  return false;
}

const payload = JSON.parse(await readFile(DATA_FILE, "utf8"));
const arrondissements = JSON.parse(execFileSync("curl", ["-s", ARRONDISSEMENTS_URL], { encoding: "utf8" }));
const features = arrondissements.features
  .map((feature) => ({
    code: Number(feature.properties.c_ar),
    label: `${Number(feature.properties.c_ar)}e`,
    name: feature.properties.l_aroff,
    geometry: feature.geometry
  }))
  .sort((a, b) => a.code - b.code);

let matched = 0;
payload.invaders = payload.invaders.map((invader) => {
  if (invader.cityCode !== "PA" && !invader.id?.startsWith("PA_")) return invader;
  const point = [Number(invader.lon), Number(invader.lat)];
  const arrondissement = features.find((feature) => pointInGeometry(point, feature.geometry));
  if (!arrondissement) return { ...invader, city: invader.city || "Paris" };
  matched += 1;
  return {
    ...invader,
    city: "Paris",
    arrondissement: arrondissement.code,
    arrondissementLabel: arrondissement.label,
    arrondissementName: arrondissement.name
  };
});
payload.arrondissementSourceUrl = ARRONDISSEMENTS_URL;
payload.arrondissementMatched = matched;

await writeFile(DATA_FILE, `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Matched ${matched}/${payload.invaders.filter((invader) => invader.cityCode === "PA" || invader.id?.startsWith("PA_")).length} Paris invaders to arrondissements.`);
