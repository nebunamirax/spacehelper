import { readFile, writeFile } from "node:fs/promises";

const BASE_URL = "https://www.invader-spotter.art";
const CITIES_URL = `${BASE_URL}/villes.php`;
const LISTING_URL = `${BASE_URL}/listing.php`;
const DATA_FILE = new URL("../data/invaders.json", import.meta.url);

const monthMap = new Map([
  ["janvier", "01"],
  ["fevrier", "02"],
  ["février", "02"],
  ["mars", "03"],
  ["avril", "04"],
  ["mai", "05"],
  ["juin", "06"],
  ["juillet", "07"],
  ["aout", "08"],
  ["août", "08"],
  ["septembre", "09"],
  ["octobre", "10"],
  ["novembre", "11"],
  ["decembre", "12"],
  ["décembre", "12"]
]);

function decodeHtml(value = "") {
  return String(value)
    .replaceAll(/<br\s*\/?>/gi, "\n")
    .replaceAll(/<[^>]+>/g, "")
    .replaceAll("&nbsp;", " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&eacute;", "é")
    .replaceAll("&egrave;", "è")
    .replaceAll("&ecirc;", "ê")
    .replaceAll("&agrave;", "à")
    .replaceAll("&acirc;", "â")
    .replaceAll("&ucirc;", "û")
    .replaceAll("&ugrave;", "ù")
    .replaceAll("&icirc;", "î")
    .replaceAll("&iuml;", "ï")
    .replaceAll("&ocirc;", "ô")
    .replaceAll("&ccedil;", "ç")
    .replaceAll("&Eacute;", "É")
    .replaceAll("&Agrave;", "À")
    .replaceAll("&rsquo;", "'")
    .replaceAll("&lsquo;", "'")
    .replaceAll("&hellip;", "...")
    .replaceAll(/\s+/g, " ")
    .trim();
}

async function fetchText(url, options = {}) {
  const headers = {
    referer: options.referer ?? CITIES_URL,
    "user-agent": "Mozilla/5.0 SpaceHelperUpdater/1.0",
    ...(options.headers ?? {})
  };
  if (options.method === "POST") headers["content-type"] = "application/x-www-form-urlencoded";
  const response = await fetch(url, {
    ...options,
    headers
  });
  if (!response.ok) throw new Error(`HTTP ${response.status} while fetching ${url}`);
  return response.text();
}

function postBody(params) {
  return new URLSearchParams(params).toString();
}

function parseCities(html) {
  const cities = new Map();
  for (const match of html.matchAll(/href='javascript:envoi\("([^"]+)"\)'[^>]*>([^<]+)<\/a>\s*\((\d+)\s*\/\s*(\d+)\)/g)) {
    cities.set(match[1], {
      code: match[1],
      name: decodeHtml(match[2]),
      listedCount: Number(match[3]),
      totalCount: Number(match[4])
    });
  }
  return [...cities.values()].sort((a, b) => a.code.localeCompare(b.code));
}

function parseMaxPage(html) {
  let maxPage = 1;
  for (const match of html.matchAll(/changepage\((\d+)\)/g)) {
    maxPage = Math.max(maxPage, Number(match[1]));
  }
  return maxPage;
}

function normalizeStatus(label) {
  const normalized = label.toLocaleLowerCase("fr-FR");
  if (normalized.includes("ok")) return "ok";
  if (normalized.includes("détruit") || normalized.includes("detruit") || normalized.includes("non visible")) return "destroyed";
  return "check";
}

function normalizeApproximateDate(value) {
  const raw = decodeHtml(value).toLocaleLowerCase("fr-FR");
  const numeric = raw.match(/\b(\d{2})\/(\d{2})\/(\d{4})\b/);
  if (numeric) return `${numeric[3]}-${numeric[2]}-${numeric[1]}`;
  const monthYear = raw.match(/\b([a-zéûôîïàèê]+)\s+(\d{4})\b/i);
  if (monthYear && monthMap.has(monthYear[1])) return `${monthYear[2]}-${monthMap.get(monthYear[1])}`;
  const year = raw.match(/\b(19|20)\d{2}\b/);
  return year ? year[0] : "";
}

function parseInvaders(html, fallbackCityCode, cityName) {
  const blocks = html.match(/<td align="left" rowspan="2"[\s\S]*?<\/font><\/td>/g) ?? [];
  return blocks.map((block) => {
    const idMatch = block.match(/<b>([A-Z0-9]+_\d+)\s*\[(\d+)\s*pts\]<\/b>/);
    if (!idMatch) return null;
    const imageMatch = block.match(/<img src="([^"]+)" title="([^"]*)"/);
    const cityMatch = block.match(/lienv\("([^"]+)","[^"]*"\)'>([^<]+)<\/a>/);
    const stateMatch = block.match(/Dernier &eacute;tat connu\s*:\s*<img[^>]+>\s*([^<]+)/);
    const installedMatch = block.match(/Date de pose\s*:\s*([^<]+)/);
    const sourceMatch = block.match(/Date et source\s*:\s*([^<]+)/);
    const id = idMatch[1];
    const cityCode = cityMatch?.[1] || fallbackCityCode || id.split("_")[0];
    return {
      id,
      cityCode,
      city: decodeHtml(cityMatch?.[2] || cityName || cityCode),
      title: decodeHtml(imageMatch?.[2] || id),
      points: Number(idMatch[2]),
      status: normalizeStatus(decodeHtml(stateMatch?.[1] || "")),
      spotterStatusLabel: decodeHtml(stateMatch?.[1] || ""),
      installedAt: normalizeApproximateDate(installedMatch?.[1] || ""),
      spotterInstalledAtLabel: decodeHtml(installedMatch?.[1] || ""),
      spotterUpdatedAt: normalizeApproximateDate(sourceMatch?.[1] || ""),
      spotterUpdateLabel: decodeHtml(sourceMatch?.[1] || ""),
      imageUrl: imageMatch?.[1] ? `${BASE_URL}/${imageMatch[1]}` : "",
      sourceUrl: `${LISTING_URL}#${encodeURIComponent(id)}`
    };
  }).filter(Boolean);
}

async function fetchCityInvaders(city) {
  const first = await fetchText(LISTING_URL, {
    method: "POST",
    referer: CITIES_URL,
    body: postBody({
      ville: city.code,
      arron: "00",
      mode: "lst",
      rang: "10",
      siid: "oui",
      etat: "oui",
      page: "1"
    })
  });
  const pages = parseMaxPage(first);
  const invaders = parseInvaders(first, city.code, city.name);
  for (let page = 2; page <= pages; page += 1) {
    const html = await fetchText(LISTING_URL, {
      method: "POST",
      referer: LISTING_URL,
      body: postBody({
        ville: city.code,
        arron: "00",
        mode: "lst",
        rang: "10",
        siid: "oui",
        etat: "oui",
        page: String(page)
      })
    });
    invaders.push(...parseInvaders(html, city.code, city.name));
  }
  return invaders;
}

function mergeSpotterData(payload, spotterInvaders, cities) {
  const byId = new Map(spotterInvaders.map((invader) => [invader.id, invader]));
  const existingIds = new Set(payload.invaders.map((invader) => invader.id));
  const invaders = payload.invaders.map((invader) => {
    const spotter = byId.get(invader.id);
    if (!spotter) return invader;
    return {
      ...invader,
      city: invader.city && invader.city !== invader.cityCode ? invader.city : spotter.city,
      points: spotter.points || invader.points,
      status: spotter.status || invader.status,
      installedAt: spotter.installedAt || invader.installedAt,
      title: spotter.title && spotter.title !== "---" ? spotter.title : invader.title,
      imageUrl: spotter.imageUrl || invader.imageUrl,
      sourceUrl: invader.sourceUrl || spotter.sourceUrl,
      spotter: {
        sourceUrl: spotter.sourceUrl,
        statusLabel: spotter.spotterStatusLabel,
        installedAtLabel: spotter.spotterInstalledAtLabel,
        lastCheckedAt: spotter.spotterUpdatedAt,
        lastCheckedLabel: spotter.spotterUpdateLabel
      }
    };
  });
  const unmappedInvaders = spotterInvaders
    .filter((invader) => !existingIds.has(invader.id))
    .sort((a, b) => a.id.localeCompare(b.id, "fr", { numeric: true }));
  return {
    ...payload,
    generatedAt: payload.generatedAt || new Date().toISOString(),
    lastUpdatedAt: new Date().toISOString(),
    sources: [
      { name: "Invamap", url: payload.sourceUrl || "https://invamap.si/map.php", role: "coordinates" },
      { name: "Invader Spotter", url: CITIES_URL, role: "status-dates-points" }
    ],
    spotter: {
      scrapedAt: new Date().toISOString(),
      sourceUrl: CITIES_URL,
      cities: cities.length,
      count: spotterInvaders.length,
      matched: invaders.length - payload.invaders.filter((invader) => !byId.has(invader.id)).length,
      unmapped: unmappedInvaders.length
    },
    count: invaders.length,
    unmappedInvaders,
    invaders
  };
}

const selectedCity = process.argv.find((arg) => arg.startsWith("--city="))?.split("=")[1];
const citiesHtml = await fetchText(CITIES_URL);
const cities = parseCities(citiesHtml).filter((city) => !selectedCity || city.code === selectedCity);
if (!cities.length) throw new Error(`Aucune ville trouvée${selectedCity ? ` pour ${selectedCity}` : ""}.`);

const spotterInvaders = [];
for (const city of cities) {
  const invaders = await fetchCityInvaders(city);
  spotterInvaders.push(...invaders);
  console.log(`${city.code}: ${invaders.length}/${city.totalCount}`);
}

const payload = JSON.parse(await readFile(DATA_FILE, "utf8"));
const merged = mergeSpotterData(payload, spotterInvaders, cities);
await writeFile(DATA_FILE, `${JSON.stringify(merged, null, 2)}\n`);
console.log(`Merged ${spotterInvaders.length} Spotter invaders. Matched ${merged.spotter.matched}. Unmapped ${merged.spotter.unmapped}.`);
