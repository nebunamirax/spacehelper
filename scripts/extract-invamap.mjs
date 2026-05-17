import { execFileSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { webcrypto } from "node:crypto";

const MAP_URL = "https://invamap.si/map.php";
const OUT_FILE = new URL("../data/invaders.json", import.meta.url);

const CITY_NAMES = new Map([
  ["PA", "Paris"],
  ["NY", "New York"],
  ["LA", "Los Angeles"],
  ["LDN", "London"],
  ["TK", "Tokyo"],
  ["HK", "Hong Kong"],
  ["MARS", "Marseille"],
  ["MIA", "Miami"],
  ["ROM", "Roma"],
  ["BAB", "Biarritz-Anglet-Bayonne"],
  ["DJBA", "Djerba"],
  ["GRN", "Grenoble"],
  ["WN", "Wien"],
  ["POTI", "Potosi"],
  ["SP", "Sao Paulo"],
  ["BGK", "Bangkok"],
  ["LY", "Lyon"],
  ["MAN", "Manchester"],
  ["CLR", "Clermont-Ferrand"],
  ["FTBL", "Fontainebleau"],
  ["BXL", "Bruxelles"],
  ["MPL", "Montpellier"],
  ["VRS", "Versailles"],
  ["AVI", "Avignon"],
  ["BBO", "Bilbao"],
  ["RA", "Ravenna"],
  ["BTA", "Bastia"],
  ["GNV", "Geneve"],
  ["MLGA", "Malaga"],
  ["KLN", "Koln"],
  ["AMS", "Amsterdam"],
  ["RTD", "Rotterdam"],
  ["DJN", "Daejeon"],
  ["SD", "San Diego"],
  ["TLS", "Toulouse"]
]);

function extractConst(html, name) {
  const match = html.match(new RegExp(`const ${name} = '([^']+)'`));
  if (!match) throw new Error(`Missing ${name} in Invamap map page`);
  return match[1];
}

async function decryptAesGcm(base64Blob, keyHex) {
  const raw = Buffer.from(base64Blob, "base64");
  const iv = raw.subarray(0, 12);
  const ciphertext = raw.subarray(12);
  const key = await webcrypto.subtle.importKey(
    "raw",
    Buffer.from(keyHex, "hex"),
    { name: "AES-GCM" },
    false,
    ["decrypt"]
  );
  const plaintext = await webcrypto.subtle.decrypt(
    { name: "AES-GCM", iv, tagLength: 128 },
    key,
    ciphertext
  );
  return JSON.parse(new TextDecoder().decode(plaintext));
}

function normalizeStatus(status) {
  if (status === "OK" || status === "ok") return "ok";
  if (status === "destroyed") return "destroyed";
  return "check";
}

function normalizeInvader(item, pointsMap) {
  const id = item.id || item.name;
  const cityCode = id.includes("_") ? id.split("_")[0] : "";
  return {
    id,
    cityCode,
    city: CITY_NAMES.get(cityCode) || cityCode || "Autre",
    title: id,
    address: "",
    lat: Number(item.obf_lat ?? item.lat ?? item.latitude),
    lon: Number(item.obf_lng ?? item.lng ?? item.longitude ?? item.lon),
    points: Number(pointsMap[id] ?? item.points ?? item.score ?? 0),
    status: normalizeStatus(item.status),
    originalStatus: item.status || "",
    installedAt: "",
    imageUrl: `https://invamap.si/assets/image/SI/${id}_m1.jpg`,
    instagramUrl: `https://www.instagram.com/explore/tags/${id.toLowerCase()}/`,
    sourceUrl: `https://invamap.si/invaders/${id}`,
    note: "Imported from Invamap public map dataset."
  };
}

const html = execFileSync("curl", ["-s", MAP_URL], { encoding: "utf8", maxBuffer: 16 * 1024 * 1024 });
const keyHex = extractConst(html, "ENC_KEY_HEX");
const rawInvaders = await decryptAesGcm(extractConst(html, "LOCAL_DATA_ENC"), keyHex);
const pointsMap = await decryptAesGcm(extractConst(html, "LOCAL_POINTS_ENC"), keyHex);

const invaders = rawInvaders
  .map((item) => normalizeInvader(item, pointsMap))
  .filter((item) => item.id && Number.isFinite(item.lat) && Number.isFinite(item.lon))
  .sort((a, b) => a.id.localeCompare(b.id, "fr", { numeric: true }));

await mkdir(new URL("../data/", import.meta.url), { recursive: true });
await writeFile(
  OUT_FILE,
  `${JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      sourceUrl: MAP_URL,
      count: invaders.length,
      note: "Coordinates are the public coordinates used by Invamap's map page.",
      invaders
    },
    null,
    2
  )}\n`
);

console.log(`Wrote ${invaders.length} invaders to ${OUT_FILE.pathname}`);
