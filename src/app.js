const cities = [
  { code: "PA", name: "Paris", country: "France", waves: 135, points: 42860, mosaics: 1553, ok: 1138, degraded: 168, lost: 239, hidden: 8, unknown: 0, unlisted: 0, lat: 48.8566, lon: 2.3522 },
  { code: "NY", name: "New York", country: "Etats-Unis", waves: 8, points: 6760, mosaics: 219, ok: 32, degraded: 7, lost: 176, hidden: 3, unknown: 1, unlisted: 0, lat: 40.7128, lon: -74.006 },
  { code: "LA", name: "Los Angeles", country: "Etats-Unis", waves: 10, points: 5810, mosaics: 214, ok: 29, degraded: 3, lost: 181, hidden: 1, unknown: 0, unlisted: 0, lat: 34.0522, lon: -118.2437 },
  { code: "LDN", name: "London", country: "Grande-Bretagne", waves: 20, points: 4120, mosaics: 166, ok: 82, degraded: 17, lost: 64, hidden: 3, unknown: 0, unlisted: 0, lat: 51.5072, lon: -0.1276 },
  { code: "TK", name: "Tokyo", country: "Japon", waves: 6, points: 3240, mosaics: 138, ok: 8, degraded: 5, lost: 123, hidden: 1, unknown: 0, unlisted: 1, lat: 35.6762, lon: 139.6503 },
  { code: "HK", name: "Hong Kong", country: "Chine", waves: 7, points: 4800, mosaics: 132, ok: 20, degraded: 4, lost: 107, hidden: 0, unknown: 1, unlisted: 0, lat: 22.3193, lon: 114.1694 },
  { code: "MARS", name: "Marseille", country: "France", waves: 4, points: 3270, mosaics: 97, ok: 74, degraded: 4, lost: 19, hidden: 0, unknown: 0, unlisted: 0, lat: 43.2965, lon: 5.3698 },
  { code: "MIA", name: "Miami", country: "Etats-Unis", waves: 3, points: 2850, mosaics: 85, ok: 12, degraded: 5, lost: 68, hidden: 0, unknown: 0, unlisted: 0, lat: 25.7617, lon: -80.1918 },
  { code: "ROM", name: "Roma", country: "Italie", waves: 3, points: 2370, mosaics: 75, ok: 57, degraded: 3, lost: 15, hidden: 0, unknown: 0, unlisted: 0, lat: 41.9028, lon: 12.4964 },
  { code: "BAB", name: "Biarritz-Anglet-Bayonne", country: "France", waves: 1, points: 2050, mosaics: 60, ok: 51, degraded: 3, lost: 6, hidden: 0, unknown: 0, unlisted: 0, lat: 43.4832, lon: -1.5586 },
  { code: "DJBA", name: "Djerba", country: "Tunisie", waves: 1, points: 2610, mosaics: 58, ok: 44, degraded: 9, lost: 5, hidden: 0, unknown: 0, unlisted: 0, lat: 33.8076, lon: 10.8451 },
  { code: "GRN", name: "Grenoble", country: "France", waves: 1, points: 570, mosaics: 57, ok: 35, degraded: 8, lost: 14, hidden: 0, unknown: 0, unlisted: 0, lat: 45.1885, lon: 5.7245 },
  { code: "WN", name: "Wien", country: "Autriche", waves: 2, points: 1220, mosaics: 56, ok: 44, degraded: 7, lost: 5, hidden: 0, unknown: 0, unlisted: 0, lat: 48.2082, lon: 16.3738 },
  { code: "POTI", name: "Potosi", country: "Bolivie", waves: 1, points: 2030, mosaics: 53, ok: 39, degraded: 1, lost: 13, hidden: 0, unknown: 0, unlisted: 0, lat: -19.5723, lon: -65.755 },
  { code: "SP", name: "São Paulo", country: "Brésil", waves: 1, points: 2130, mosaics: 52, ok: 13, degraded: 1, lost: 37, hidden: 1, unknown: 0, unlisted: 0, lat: -23.5558, lon: -46.6396 },
  { code: "BGK", name: "Bangkok", country: "Thaïlande", waves: 2, points: 890, mosaics: 51, ok: 28, degraded: 5, lost: 16, hidden: 0, unknown: 2, unlisted: 0, lat: 13.7563, lon: 100.5018 },
  { code: "LY", name: "Lyon", country: "France", waves: 4, points: 640, mosaics: 48, ok: 17, degraded: 5, lost: 26, hidden: 0, unknown: 0, unlisted: 0, lat: 45.764, lon: 4.8357 },
  { code: "MAN", name: "Manchester", country: "Grande-Bretagne", waves: 1, points: 970, mosaics: 47, ok: 20, degraded: 15, lost: 11, hidden: 1, unknown: 0, unlisted: 0, lat: 53.4808, lon: -2.2426 },
  { code: "CLR", name: "Clermont-Ferrand", country: "France", waves: 5, points: 1790, mosaics: 47, ok: 36, degraded: 9, lost: 2, hidden: 0, unknown: 0, unlisted: 0, lat: 45.7772, lon: 3.087 },
  { code: "FTBL", name: "Fontainebleau", country: "France", waves: 7, points: 1590, mosaics: 46, ok: 34, degraded: 4, lost: 8, hidden: 0, unknown: 0, unlisted: 0, lat: 48.4047, lon: 2.7016 },
  { code: "BXL", name: "Bruxelles", country: "Belgique", waves: 2, points: 1210, mosaics: 42, ok: 32, degraded: 3, lost: 7, hidden: 0, unknown: 0, unlisted: 0, lat: 50.8503, lon: 4.3517 },
  { code: "MPL", name: "Montpellier", country: "France", waves: 2, points: 740, mosaics: 42, ok: 34, degraded: 3, lost: 2, hidden: 0, unknown: 3, unlisted: 0, lat: 43.6119, lon: 3.8772 },
  { code: "VRS", name: "Versailles", country: "France", waves: 12, points: 1520, mosaics: 42, ok: 25, degraded: 2, lost: 15, hidden: 0, unknown: 0, unlisted: 0, lat: 48.8049, lon: 2.1204 },
  { code: "AVI", name: "Avignon", country: "France", waves: 1, points: 710, mosaics: 41, ok: 26, degraded: 4, lost: 11, hidden: 0, unknown: 0, unlisted: 0, lat: 43.9493, lon: 4.8055 },
  { code: "BBO", name: "Bilbao", country: "Espagne", waves: 2, points: 1110, mosaics: 40, ok: 22, degraded: 9, lost: 9, hidden: 0, unknown: 0, unlisted: 0, lat: 43.263, lon: -2.935 },
  { code: "RA", name: "Ravenna", country: "Italie", waves: 2, points: 1550, mosaics: 40, ok: 23, degraded: 7, lost: 10, hidden: 0, unknown: 0, unlisted: 0, lat: 44.4184, lon: 12.2035 },
  { code: "BTA", name: "Bastia", country: "France", waves: 1, points: 530, mosaics: 34, ok: 19, degraded: 11, lost: 4, hidden: 0, unknown: 0, unlisted: 0, lat: 42.6973, lon: 9.4509 },
  { code: "GNV", name: "Genève", country: "Suisse", waves: 2, points: 530, mosaics: 33, ok: 7, degraded: 11, lost: 15, hidden: 0, unknown: 0, unlisted: 0, lat: 46.2044, lon: 6.1432 },
  { code: "MLGA", name: "Málaga", country: "Espagne", waves: 1, points: 1020, mosaics: 29, ok: 3, degraded: 2, lost: 24, hidden: 0, unknown: 0, unlisted: 0, lat: 36.7213, lon: -4.4214 },
  { code: "KLN", name: "Köln", country: "Allemagne", waves: 3, points: 670, mosaics: 27, ok: 20, degraded: 3, lost: 4, hidden: 0, unknown: 0, unlisted: 0, lat: 50.9375, lon: 6.9603 },
  { code: "AMS", name: "Amsterdam", country: "Pays-Bas", waves: 1, points: 370, mosaics: 26, ok: 12, degraded: 8, lost: 6, hidden: 0, unknown: 0, unlisted: 0, lat: 52.3676, lon: 4.9041 },
  { code: "RTD", name: "Rotterdam", country: "Pays-Bas", waves: 2, points: 340, mosaics: 26, ok: 18, degraded: 3, lost: 4, hidden: 1, unknown: 0, unlisted: 0, lat: 51.9244, lon: 4.4777 },
  { code: "DJN", name: "Daejeon", country: "Corée-du-Sud", waves: 1, points: 500, mosaics: 23, ok: 16, degraded: 1, lost: 5, hidden: 1, unknown: 0, unlisted: 0, lat: 36.3504, lon: 127.3845 },
  { code: "SD", name: "San Diego", country: "Etats-Unis", waves: 1, points: 700, mosaics: 21, ok: 0, degraded: 0, lost: 21, hidden: 0, unknown: 0, unlisted: 0, lat: 32.7157, lon: -117.1611 },
  { code: "TLS", name: "Toulouse", country: "France", waves: 2, points: 360, mosaics: 11, ok: 5, degraded: 0, lost: 5, hidden: 1, unknown: 0, unlisted: 0, lat: 43.6047, lon: 1.4442 }
];

const futureInvaderShape = {
  id: "PA_000",
  cityCode: "PA",
  label: "Optionnel au MVP",
  approximateArea: "Quartier ou zone large, pas d'adresse exacte",
  instagramUrl: "",
  viability: {
    score: 0,
    votes: 0,
    lastConfirmedAt: ""
  },
  notes: []
};

const futureUserFeatures = {
  inventory: {
    storage: "local-first, puis compte utilisateur",
    fields: ["invaderId", "flashedAt", "flashStatus", "personalNote", "photoProofUrl"],
    goal: "Marquer les invaders déjà flashés, à refaire, ou ignorés."
  },
  walkPlanner: {
    storage: "local-first, exportable en JSON",
    fields: ["walkId", "name", "orderedInvaderIds", "startPoint", "estimatedDistance", "notes"],
    goal: "Composer une liste d'invaders pour préparer une balade optimisée."
  }
};

let parisInvaders = [
  {
    id: "PA_01",
    title: "Ground zero",
    address: "4 Passage de la Main-d'Or, 75011 Paris",
    lat: 48.85399,
    lon: 2.37536,
    points: 10,
    status: "destroyed",
    installedAt: "1998-01-15",
    instagramUrl: "https://www.instagram.com/explore/tags/pa_01/",
    sourceUrl: "https://www.atlasobscura.com/places/invader-ground-zero",
    note: "Localisation publique documentée ; l'oeuvre historique n'est plus visible."
  },
  {
    id: "PA_341",
    title: "Rue de Thorigny",
    address: "24 Rue de Thorigny, 75003 Paris",
    lat: 48.85976,
    lon: 2.36263,
    points: 20,
    status: "ok",
    installedAt: "",
    instagramUrl: "https://www.instagram.com/explore/tags/pa_341/",
    sourceUrl: "https://mapstr.com/place/lmo1WQtwDn",
    note: "Adresse publique repérée dans Mapstr."
  },
  {
    id: "PA_967",
    title: "Quai de Grenelle",
    address: "1 Quai de Grenelle, 75015 Paris",
    lat: 48.8552,
    lon: 2.2893,
    points: 30,
    status: "check",
    installedAt: "",
    instagramUrl: "https://www.instagram.com/explore/tags/pa_967/",
    sourceUrl: "https://mapstr.com/place/4x3uGPit1M",
    note: "Adresse publique repérée dans Mapstr ; statut à confirmer sur place."
  },
  {
    id: "PA_1432",
    title: "Place Igor-Stravinsky",
    address: "Place Igor-Stravinsky, 75004 Paris",
    lat: 48.85978,
    lon: 2.35154,
    points: 100,
    status: "ok",
    installedAt: "2019",
    instagramUrl: "https://www.instagram.com/explore/tags/pa_1432/",
    sourceUrl: "https://www.reddit.com/r/streetart/comments/1k71dci",
    note: "Grand format public près du Centre Pompidou."
  },
  {
    id: "PA_1500",
    title: "Centre Pompidou",
    address: "Centre Pompidou, Place Georges-Pompidou, 75004 Paris",
    lat: 48.86064,
    lon: 2.35225,
    points: 100,
    status: "ok",
    installedAt: "2024-01-25",
    instagramUrl: "https://www.instagram.com/explore/tags/pa_1500/",
    sourceUrl: "https://invamap.si/invaders/PA_1500",
    note: "Invader #1500 in Paris."
  }
];
const seedParisInvaders = parisInvaders;

const parisBounds = {
  west: 2.224,
  east: 2.47,
  south: 48.815,
  north: 48.902
};

const state = {
  query: "",
  filter: "all",
  inventoryFilter: "all",
  cityFilter: "",
  arrondissementFilter: "all",
  pointsFilter: "all",
  sort: "id",
  selectedCode: null,
  databaseSource: "intégrée",
  baseNeedsSave: false,
  preserveMapViewport: false,
  openSelectedPopup: false,
  renderFrame: null,
  recentInventoryChange: null,
  userLocation: null,
  locationPending: false,
  showLabels: false
};

const els = {
  filterMenu: document.querySelector(".filter-menu"),
  searchInput: document.querySelector("#searchInput"),
  clearSearchButton: document.querySelector("#clearSearchButton"),
  chips: [...document.querySelectorAll("[data-filter]")],
  inventoryChips: [...document.querySelectorAll("[data-inventory-filter]")],
  resetButton: document.querySelector("#resetButton"),
  resetFiltersButton: document.querySelector("#resetFiltersButton"),
  importInventoryButton: document.querySelector("#importInventoryButton"),
  importInventoryInput: document.querySelector("#importInventoryInput"),
  exportInventoryButton: document.querySelector("#exportInventoryButton"),
  importBaseButton: document.querySelector("#importBaseButton"),
  importBaseInput: document.querySelector("#importBaseInput"),
  saveBaseButton: document.querySelector("#saveBaseButton"),
  databaseInfo: document.querySelector("#databaseInfo"),
  sortSelect: document.querySelector("#sortSelect"),
  citySelect: document.querySelector("#citySelect"),
  arrondissementSelect: document.querySelector("#arrondissementSelect"),
  pointsSelect: document.querySelector("#pointsSelect"),
  visibleCount: document.querySelector("#visibleCount"),
  inventoryFlashed: document.querySelector("#inventoryFlashed"),
  inventoryTodo: document.querySelector("#inventoryTodo"),
  mapCanvas: document.querySelector("#mapCanvas"),
  mapTitle: document.querySelector("#mapTitle"),
  mapSubtitle: document.querySelector("#mapSubtitle"),
  showLabels: document.querySelector("#showLabels"),
  locateButton: document.querySelector("#locateButton"),
  cityList: document.querySelector("#cityList"),
  detailPanel: document.querySelector("#detailPanel"),
  feedbackToast: document.querySelector("#feedbackToast"),
  template: document.querySelector("#cityCardTemplate")
};

const desktopFilterQuery = window.matchMedia("(min-width: 900px)");

const numberFormat = new Intl.NumberFormat("fr-FR");
const INVENTORY_STORAGE_KEY = "spacehelper_inventory_v1";
const BASE_STORAGE_KEY = "spacehelper_base_v2";
const FILTERS_STORAGE_KEY = "spacehelper_filters_v1";
let map;
let markerLayer;
let userLayer;
let selectedMarker;
let mapResizeObserver;
let mapCanvasRenderer;
let currentMapInvaders = [];
let inventory = loadInventory();

function statusTotals(city) {
  return {
    ok: city.ok,
    degraded: city.degraded,
    lost: city.lost + city.hidden,
    unknown: city.unknown + city.unlisted
  };
}

function checkCount(city) {
  const totals = statusTotals(city);
  return totals.degraded + totals.lost + totals.unknown;
}

function okRate(city) {
  return city.mosaics ? Math.round((city.ok / city.mosaics) * 100) : 0;
}

function project(lon, lat) {
  const x = ((lon - parisBounds.west) / (parisBounds.east - parisBounds.west)) * 100;
  const y = ((parisBounds.north - lat) / (parisBounds.north - parisBounds.south)) * 100;
  return { x, y };
}

function invaderStatusLabel(status) {
  if (status === "ok") return "OK";
  if (status === "destroyed") return "Détruit";
  return "À vérifier";
}

function loadInventory() {
  try {
    const saved = JSON.parse(localStorage.getItem(INVENTORY_STORAGE_KEY) || "{}");
    return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
  } catch (error) {
    return {};
  }
}

function saveInventory() {
  localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventory));
}

function savedFiltersPayload() {
  return {
    query: state.query,
    filter: state.filter,
    inventoryFilter: state.inventoryFilter,
    cityFilter: state.cityFilter,
    arrondissementFilter: state.arrondissementFilter,
    pointsFilter: state.pointsFilter,
    sort: state.sort,
    showLabels: state.showLabels
  };
}

function applySavedFilters() {
  try {
    const saved = JSON.parse(localStorage.getItem(FILTERS_STORAGE_KEY) || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return;

    if (typeof saved.query === "string") state.query = saved.query;
    if (["all", "ok", "check", "destroyed"].includes(saved.filter)) state.filter = saved.filter;
    if (["all", "todo", "flashed", "ignored"].includes(saved.inventoryFilter)) state.inventoryFilter = saved.inventoryFilter;
    if (typeof saved.cityFilter === "string") state.cityFilter = saved.cityFilter === "all" ? "" : saved.cityFilter;
    if (typeof saved.arrondissementFilter === "string") state.arrondissementFilter = saved.arrondissementFilter;
    if (["all", "10", "20", "30", "40", "50", "100"].includes(saved.pointsFilter)) state.pointsFilter = saved.pointsFilter;
    if (["id", "points", "status", "address"].includes(saved.sort)) state.sort = saved.sort;
    if (typeof saved.showLabels === "boolean") state.showLabels = saved.showLabels;
  } catch (error) {
    localStorage.removeItem(FILTERS_STORAGE_KEY);
  }
}

function saveFilters() {
  localStorage.setItem(FILTERS_STORAGE_KEY, JSON.stringify(savedFiltersPayload()));
}

function clearSavedFilters() {
  localStorage.removeItem(FILTERS_STORAGE_KEY);
}

function loadBaseOverride() {
  try {
    const raw = localStorage.getItem(BASE_STORAGE_KEY);
    if (!raw) return null;
    const payload = JSON.parse(raw);
    const imported = importedInvadersFromPayload(payload);
    if (!Array.isArray(imported)) return null;
    const normalized = imported.map(normalizeImportedInvader).filter((invader) =>
      invader.id && Number.isFinite(invader.lat) && Number.isFinite(invader.lon)
    );
    return normalized.length ? normalized : null;
  } catch (error) {
    return null;
  }
}

function saveBaseOverride(invaders) {
  localStorage.setItem(
    BASE_STORAGE_KEY,
    JSON.stringify({
      type: "space-helper-base",
      importedAt: new Date().toISOString(),
      invaders
    })
  );
}

function inventoryStatus(invaderOrId) {
  const id = typeof invaderOrId === "string" ? invaderOrId : invaderOrId.id;
  const status = inventory[id]?.status;
  return ["flashed", "todo", "ignored"].includes(status) ? status : "untracked";
}

function inventoryStatusLabel(status) {
  if (status === "flashed") return "Flashé";
  if (status === "todo") return "À flasher";
  if (status === "ignored") return "Ignoré";
  return "À flasher";
}

function nextInventoryStatus(status) {
  if (status === "flashed") return "ignored";
  if (status === "ignored") return "todo";
  return "flashed";
}

function effectiveInventoryStatus(invader) {
  const recent = state.recentInventoryChange;
  if (recent?.id === invader.id) return recent.status;
  return inventoryStatus(invader);
}

function scheduleRender() {
  if (state.renderFrame) window.cancelAnimationFrame(state.renderFrame);
  state.renderFrame = window.requestAnimationFrame(() => {
    state.renderFrame = window.requestAnimationFrame(() => {
      state.renderFrame = null;
      render();
    });
  });
}

function setInventoryStatus(invaderId, status) {
  if (status === "untracked") {
    delete inventory[invaderId];
  } else if (["flashed", "todo", "ignored"].includes(status)) {
    const previous = inventory[invaderId] ?? {};
    inventory[invaderId] = {
      ...previous,
      invaderId,
      status,
      flashedAt: status === "flashed" ? previous.flashedAt || new Date().toISOString() : previous.flashedAt || "",
      updatedAt: new Date().toISOString()
    };
  }

  saveInventory();
  state.preserveMapViewport = true;
  state.recentInventoryChange = { id: invaderId, status, at: Date.now() };
  showFeedback(invaderId, status);
  scheduleRender();
  window.clearTimeout(state.recentInventoryChangeTimer);
  state.recentInventoryChangeTimer = window.setTimeout(() => {
    if (state.recentInventoryChange?.id !== invaderId) return;
    state.recentInventoryChange = null;
    state.preserveMapViewport = true;
    scheduleRender();
  }, 950);
}

function showFeedback(invaderId, status) {
  const label = inventoryStatusLabel(status);
  showToast(`${invaderId} : ${label}`);
}

function showToast(message) {
  els.feedbackToast.textContent = message;
  els.feedbackToast.classList.add("is-visible");
  window.clearTimeout(state.feedbackTimer);
  state.feedbackTimer = window.setTimeout(() => {
    els.feedbackToast.classList.remove("is-visible");
  }, 1500);
}

function inventoryCounts() {
  return parisInvaders.reduce(
    (acc, item) => {
      const status = inventoryStatus(item);
      if (status === "flashed") acc.flashed += 1;
      else if (status === "ignored") acc.ignored += 1;
      else acc.todo += 1;
      return acc;
    },
    { flashed: 0, todo: 0, ignored: 0 }
  );
}

function invaderCity(invader) {
  return invader.city || invader.cityCode || invader.id?.split("_")[0] || "Autre";
}

function citySummaries() {
  const byCity = new Map();
  parisInvaders.forEach((invader) => {
    const city = invaderCity(invader);
    const current = byCity.get(city) || {
      city,
      count: 0,
      points: 0,
      latTotal: 0,
      lonTotal: 0,
      ok: 0,
      check: 0,
      destroyed: 0
    };
    current.count += 1;
    current.points += invader.points;
    current.latTotal += invader.lat;
    current.lonTotal += invader.lon;
    current.ok += invader.status === "ok" ? 1 : 0;
    current.check += invader.status === "check" ? 1 : 0;
    current.destroyed += invader.status === "destroyed" ? 1 : 0;
    byCity.set(city, current);
  });

  return [...byCity.values()]
    .map((city) => ({
      ...city,
      lat: city.latTotal / city.count,
      lon: city.lonTotal / city.count
    }))
    .sort((a, b) => b.count - a.count || a.city.localeCompare(b.city, "fr"));
}

function invaderArrondissement(invader) {
  if (invader.arrondissement !== "" && invader.arrondissement != null && Number.isFinite(Number(invader.arrondissement))) {
    return String(Number(invader.arrondissement));
  }
  const postcode = String(invader.address ?? "").match(/\b750(0[1-9]|1[0-9]|20)\b/);
  return postcode ? String(Number(postcode[1])) : "";
}

function invaderArrondissementLabel(invader) {
  if ((invader.cityCode || invader.id?.split("_")[0]) !== "PA") return invaderCity(invader);
  const arrondissement = invaderArrondissement(invader);
  if (!arrondissement) return "Hors Paris";
  return invader.arrondissementLabel || `${arrondissement}e`;
}

function pointColor(invader) {
  if (invader.status === "ok") return "#2f8f5b";
  if (invader.status === "destroyed") return "#e94b35";
  return "#e1a928";
}

function initMap() {
  if (map || !window.L) return Boolean(map);

  map = L.map(els.mapCanvas, {
    center: [48.8566, 2.3522],
    zoom: 4,
    minZoom: 2,
    maxZoom: 19,
    zoomControl: true
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  markerLayer = L.layerGroup().addTo(map);
  userLayer = L.layerGroup().addTo(map);
  mapCanvasRenderer = L.canvas({ padding: 0.5 });
  map.on("zoomend", () => {
    if (!state.cityFilter || !currentMapInvaders.length) return;
    renderMap(currentMapInvaders, true);
  });
  window.addEventListener("resize", () => map.invalidateSize());
  mapResizeObserver = new ResizeObserver(() => map.invalidateSize());
  mapResizeObserver.observe(els.mapCanvas);
  new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      setTimeout(() => map.invalidateSize(), 50);
      setTimeout(() => map.invalidateSize(), 350);
    }
  }).observe(els.mapCanvas);
  requestAnimationFrame(() => map.invalidateSize());
  setTimeout(() => map.invalidateSize(), 250);
  return true;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function invaderImageUrl(invader) {
  return invader.imageUrl || `https://invamap.si/assets/image/SI/${encodeURIComponent(invader.id)}_m1.jpg`;
}

function externalUrl(value) {
  const url = String(value ?? "").trim();
  return /^https?:\/\//i.test(url) ? url : "";
}

function popupHtml(invader) {
  const imageUrl = invaderImageUrl(invader);
  const personalStatus = effectiveInventoryStatus(invader);
  const flashAction = personalStatus === "flashed" ? "todo" : "flashed";
  const flashLabel = personalStatus === "flashed" ? "Remettre à flasher" : "Marquer flashé";
  return `
    <article class="invader-popup">
      <div class="popup-preview">
        <img
          src="${escapeHtml(imageUrl)}"
          alt="Aperçu ${escapeHtml(invader.id)}"
          referrerpolicy="no-referrer"
          onerror="this.closest('.popup-preview').classList.add('is-missing'); this.remove();"
        />
        <span>Aperçu à compléter</span>
      </div>
      <div class="popup-body">
        <strong>${escapeHtml(invader.id)}</strong>
        <small>${escapeHtml(invaderStatusLabel(invader.status))} · ${numberFormat.format(invader.points)} pts</small>
        <small class="inventory-label">${escapeHtml(inventoryStatusLabel(personalStatus))}</small>
        <p>${escapeHtml(invader.title)}</p>
        <p>${escapeHtml(invader.address)}</p>
        <button
          class="popup-inventory-button${personalStatus === "flashed" ? " is-active" : ""}"
          data-map-inventory-id="${escapeHtml(invader.id)}"
          data-map-inventory-status="${flashAction}"
          type="button"
        >
          ${flashLabel}
        </button>
      </div>
    </article>
  `;
}

function previewPopupInventoryStatus(button, status) {
  const label = inventoryStatusLabel(status);
  const nextStatus = status === "flashed" ? "todo" : "flashed";
  button.textContent = status === "flashed" ? "Remettre à flasher" : "Marquer flashé";
  button.dataset.mapInventoryStatus = nextStatus;
  button.classList.toggle("is-active", status === "flashed");
  button.closest(".popup-body")?.querySelector(".inventory-label")?.replaceChildren(document.createTextNode(label));
}

function markerIcon(invader) {
  const personalStatus = effectiveInventoryStatus(invader);
  const isRecent = state.recentInventoryChange?.id === invader.id;
  return L.divIcon({
    className: "invader-marker-shell",
    html: `
      <div class="map-point-marker inventory-${personalStatus}${invader.id === state.selectedCode ? " is-selected" : ""}${isRecent ? " is-marking" : ""}" style="--color:${pointColor(invader)}">
        <span>${escapeHtml(invader.id)}</span>
      </div>
    `,
    iconSize: [76, 42],
    iconAnchor: [14, 14],
    popupAnchor: [0, -12]
  });
}

function clusterIcon(cluster) {
  return L.divIcon({
    className: "cluster-marker-shell",
    html: `
      <div class="map-cluster-marker" style="--cluster-ring:${Math.round(5 + Math.min(1, cluster.count / 80) * 8)}px">
        <strong>${numberFormat.format(cluster.count)}</strong>
        <span>${numberFormat.format(cluster.points)} pts</span>
      </div>
    `,
    iconSize: [58, 58],
    iconAnchor: [29, 29],
    popupAnchor: [0, -28]
  });
}

function clusterPopupHtml(cluster) {
  return `
    <article class="city-popup">
      <strong>${numberFormat.format(cluster.count)} invaders</strong>
      <small>${numberFormat.format(cluster.points)} pts</small>
      <p>Zoome ou clique pour détailler cette zone.</p>
    </article>
  `;
}

function clusterCellSize() {
  const zoom = map?.getZoom() ?? 12;
  if (zoom >= 16) return 0;
  if (zoom >= 15) return 34;
  if (zoom >= 14) return 46;
  if (zoom >= 13) return 62;
  if (zoom >= 12) return 78;
  if (zoom >= 11) return 96;
  return 118;
}

function clusterInvaders(invaders) {
  const cellSize = clusterCellSize();
  if (!cellSize || invaders.length < 80) {
    return invaders.map((invader) => ({ type: "single", invader }));
  }

  const clusters = new Map();
  invaders.forEach((invader) => {
    const point = map.latLngToLayerPoint([invader.lat, invader.lon]);
    const key = `${Math.floor(point.x / cellSize)}:${Math.floor(point.y / cellSize)}`;
    const cluster = clusters.get(key) ?? {
      type: "cluster",
      invaders: [],
      count: 0,
      points: 0,
      latTotal: 0,
      lonTotal: 0
    };
    cluster.invaders.push(invader);
    cluster.count += 1;
    cluster.points += invader.points;
    cluster.latTotal += invader.lat;
    cluster.lonTotal += invader.lon;
    clusters.set(key, cluster);
  });

  return [...clusters.values()].flatMap((cluster) => {
    if (cluster.count === 1) return [{ type: "single", invader: cluster.invaders[0] }];
    return [{
      ...cluster,
      lat: cluster.latTotal / cluster.count,
      lon: cluster.lonTotal / cluster.count
    }];
  });
}

function zoomToCluster(cluster) {
  const bounds = L.latLngBounds(cluster.invaders.map((invader) => [invader.lat, invader.lon]));
  if (bounds.isValid() && bounds.getNorthEast().distanceTo(bounds.getSouthWest()) > 18) {
    map.fitBounds(bounds, { padding: [64, 64], maxZoom: Math.min(map.getZoom() + 3, 17) });
    return;
  }
  map.setView([cluster.lat, cluster.lon], Math.min(map.getZoom() + 3, 18), { animate: true });
}

function cityMarkerIcon(city) {
  return L.divIcon({
    className: "city-marker-shell",
    html: `
      <div class="city-map-marker">
        <strong>${escapeHtml(city.city)}</strong>
        <span>${numberFormat.format(city.count)}</span>
      </div>
    `,
    iconSize: [120, 46],
    iconAnchor: [60, 23],
    popupAnchor: [0, -22]
  });
}

function cityPopupHtml(city) {
  return `
    <article class="city-popup">
      <strong>${escapeHtml(city.city)}</strong>
      <small>${numberFormat.format(city.count)} invaders · ${numberFormat.format(city.points)} pts</small>
      <p>${numberFormat.format(city.ok)} OK · ${numberFormat.format(city.check)} à vérifier · ${numberFormat.format(city.destroyed)} détruits</p>
    </article>
  `;
}

function userLocationIcon() {
  return L.divIcon({
    className: "user-location-marker-shell",
    html: `
      <div class="user-location-marker" aria-label="Ma position">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>
    `,
    iconSize: [54, 42],
    iconAnchor: [27, 21],
    popupAnchor: [0, -24]
  });
}

function canvasMarker(invader) {
  const personalStatus = effectiveInventoryStatus(invader);
  const color = personalStatus === "flashed" ? "#8dff66" : personalStatus === "ignored" ? "#93a4c7" : pointColor(invader);
  const isSelected = invader.id === state.selectedCode;
  return L.circleMarker([invader.lat, invader.lon], {
    renderer: mapCanvasRenderer,
    radius: isSelected ? 8 : 5,
    stroke: true,
    color: isSelected ? "#ffe45f" : "#ffffff",
    weight: isSelected ? 2 : 1,
    opacity: personalStatus === "ignored" ? 0.45 : 0.9,
    fill: true,
    fillColor: color,
    fillOpacity: personalStatus === "ignored" ? 0.38 : 0.72
  });
}

function getVisibleInvaders() {
  const normalizedQuery = state.query.trim().toLocaleLowerCase("fr-FR");
  return parisInvaders
    .filter((invader) => {
      const personalStatus = inventoryStatus(invader);
      const searchable = `${invader.id} ${invader.title} ${invader.address} ${invader.status} ${invader.note} ${inventoryStatusLabel(personalStatus)}`.toLocaleLowerCase("fr-FR");
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      const matchesFilter =
        state.filter === "all" ||
        invader.status === state.filter ||
        (state.filter === "check" && invader.status === "check");
      const matchesInventory =
        state.inventoryFilter === "all" ||
        personalStatus === state.inventoryFilter ||
        (state.inventoryFilter === "todo" && personalStatus === "untracked");
      const matchesCity = Boolean(state.cityFilter) && invaderCity(invader) === state.cityFilter;
      const arrondissement = invaderArrondissement(invader);
      const matchesArrondissement =
        state.arrondissementFilter === "all" ||
        (state.arrondissementFilter === "unknown" && !arrondissement) ||
        arrondissement === state.arrondissementFilter;
      const matchesPoints = state.pointsFilter === "all" || invader.points === Number(state.pointsFilter);
      const matchesVisibleFilters = matchesQuery && matchesFilter && matchesInventory && matchesCity && matchesArrondissement && matchesPoints;
      const keepForAnimation =
        state.recentInventoryChange?.id === invader.id &&
        matchesQuery &&
        matchesFilter &&
        matchesCity &&
        matchesArrondissement &&
        matchesPoints;
      return matchesVisibleFilters || keepForAnimation;
    })
    .sort((a, b) => {
      if (state.sort === "points") return b.points - a.points || a.id.localeCompare(b.id, "fr", { numeric: true });
      if (state.sort === "status") return a.status.localeCompare(b.status, "fr") || a.id.localeCompare(b.id, "fr", { numeric: true });
      if (state.sort === "address") return a.address.localeCompare(b.address, "fr");
      return a.id.localeCompare(b.id, "fr", { numeric: true });
    });
}

function renderStats(visibleInvaders) {
  const totals = visibleInvaders.reduce(
    (acc, invader) => {
      acc.points += invader.points;
      acc.ok += invader.status === "ok" ? 1 : 0;
      acc.check += invader.status === "check" ? 1 : 0;
      return acc;
    },
    { points: 0, ok: 0, check: 0 }
  );

  els.visibleCount.textContent = numberFormat.format(visibleInvaders.length);

  const personal = inventoryCounts();
  els.inventoryFlashed.textContent = numberFormat.format(personal.flashed);
  els.inventoryTodo.textContent = numberFormat.format(personal.todo);
  if (els.databaseInfo) {
    const saveHint = state.baseNeedsSave ? "Base importée, export conseillé." : "Import/export JSON disponible.";
    els.databaseInfo.textContent = `${numberFormat.format(parisInvaders.length)} invaders. Base ${state.databaseSource}. ${saveHint}`;
  }
  if (els.locateButton) {
    els.locateButton.disabled = state.locationPending;
    els.locateButton.textContent = state.locationPending
      ? "Recherche..."
      : state.userLocation
        ? "Recentrer"
        : "Ma position";
  }
  renderMapContext(visibleInvaders);
}

function renderMapContext(visibleInvaders) {
  const title = state.cityFilter || "Choisir une ville";
  const arrondissementLabel =
    state.arrondissementFilter === "all"
      ? ""
      : state.arrondissementFilter === "unknown"
        ? " - Hors Paris"
        : ` - ${state.arrondissementFilter}e`;
  const pointsLabel = state.pointsFilter === "all" ? "" : ` - ${state.pointsFilter} pts`;
  els.mapTitle.textContent = title;
  els.mapSubtitle.textContent = state.cityFilter
    ? `${numberFormat.format(visibleInvaders.length)} invaders visibles${arrondissementLabel}${pointsLabel}`
    : `${numberFormat.format(citySummaries().length)} villes disponibles`;
}

function renderMap(visibleInvaders, preserveViewport = false) {
  if (!initMap()) {
    els.mapCanvas.innerHTML = '<p class="map-fallback">La carte interactive n\'a pas pu charger Leaflet.</p>';
    return;
  }

  currentMapInvaders = state.cityFilter ? visibleInvaders : [];
  els.mapCanvas.classList.toggle("hide-labels", !state.showLabels);
  markerLayer.clearLayers();
  userLayer.clearLayers();
  selectedMarker = null;
  const bounds = [];

  if (!state.cityFilter) {
    citySummaries().forEach((city) => {
      const marker = L.marker([city.lat, city.lon], {
        icon: cityMarkerIcon(city),
        title: city.city,
        zIndexOffset: city.count
      });
      marker.bindPopup(cityPopupHtml(city), {
        closeButton: true,
        className: "city-popup-shell",
        maxWidth: 260,
        minWidth: 220
      });
      marker.on("click", () => selectMapCity(city.city));
      marker.addTo(markerLayer);
      bounds.push([city.lat, city.lon]);
    });

    if (bounds.length && !preserveViewport) {
      map.fitBounds(bounds, { padding: [48, 48], maxZoom: 5 });
      requestAnimationFrame(() => map.invalidateSize());
      setTimeout(() => map.invalidateSize(), 350);
    } else {
      requestAnimationFrame(() => map.invalidateSize());
    }
    return;
  }

  clusterInvaders(visibleInvaders).forEach((item) => {
    if (item.type === "cluster") {
      const marker = L.marker([item.lat, item.lon], {
        icon: clusterIcon(item),
        title: `${item.count} invaders`,
        zIndexOffset: Math.min(item.count, 500)
      });
      marker.bindPopup(clusterPopupHtml(item), {
        closeButton: true,
        className: "city-popup-shell",
        maxWidth: 260,
        minWidth: 220
      });
      marker.on("click", () => zoomToCluster(item));
      marker.addTo(markerLayer);
      item.invaders.forEach((invader) => bounds.push([invader.lat, invader.lon]));
      return;
    }

    const { invader } = item;
    const isSelected = invader.id === state.selectedCode;
    const marker = L.marker([invader.lat, invader.lon], { icon: markerIcon(invader), title: invader.id });
    marker.bindPopup(popupHtml(invader), {
      closeButton: true,
      className: "invader-popup-shell",
      maxWidth: 300,
      minWidth: 260
    });
    marker.on("click", () => selectCity(invader.id));
    marker.addTo(markerLayer);
    if (isSelected) selectedMarker = marker;
    bounds.push([invader.lat, invader.lon]);
  });

  if (state.userLocation) {
    const userMarker = L.marker([state.userLocation.lat, state.userLocation.lon], {
      icon: userLocationIcon(),
      title: "Ma position",
      zIndexOffset: 1000
    });
    userMarker
      .bindPopup(
        `<strong>Ma position</strong><br><small>Précision : ${numberFormat.format(Math.round(state.userLocation.accuracy))} m</small>`,
        { className: "user-location-popup", maxWidth: 220 }
      )
      .addTo(userLayer);
  }

  const selected = visibleInvaders.find((invader) => invader.id === state.selectedCode);
  if (state.userLocation && preserveViewport === "user") {
    map.setView([state.userLocation.lat, state.userLocation.lon], Math.max(map.getZoom(), 17), { animate: true });
    requestAnimationFrame(() => map.invalidateSize());
  } else if (selected && !preserveViewport) {
    if (!selectedMarker) state.openSelectedPopup = true;
    map.setView([selected.lat, selected.lon], Math.max(map.getZoom(), 17), { animate: false });
    requestAnimationFrame(() => {
      map.invalidateSize();
      selectedMarker?.openPopup();
    });
    setTimeout(() => map.invalidateSize(), 350);
  } else if (bounds.length && !preserveViewport) {
    map.fitBounds(bounds, { padding: [42, 42], maxZoom: 15 });
    requestAnimationFrame(() => map.invalidateSize());
    setTimeout(() => map.invalidateSize(), 350);
  } else if (preserveViewport) {
    requestAnimationFrame(() => {
      map.invalidateSize();
      if (state.openSelectedPopup) selectedMarker?.openPopup();
      state.openSelectedPopup = false;
    });
  }
}

function previewListInventoryStatus(card, button, status) {
  const displayStatus = status === "untracked" ? "todo" : status;
  const label = inventoryStatusLabel(displayStatus);
  card.classList.remove("inventory-untracked", "inventory-todo", "inventory-flashed", "inventory-ignored");
  card.classList.add(`inventory-${displayStatus}`, "is-marking");
  button.textContent = label;
  button.dataset.status = displayStatus;
  card.querySelector(".city-score small").textContent = label;
}

function renderList(visibleInvaders) {
  els.cityList.replaceChildren();

  if (!visibleInvaders.length) {
    els.cityList.innerHTML = `<p class="empty">${state.cityFilter ? "Aucun invader ne correspond aux filtres." : "Choisis une ville dans le menu ou sur la carte."}</p>`;
    return;
  }

  visibleInvaders.forEach((invader) => {
    const personalStatus = effectiveInventoryStatus(invader);
    const imageUrl = invaderImageUrl(invader);
    const card = els.template.content.firstElementChild.cloneNode(true);
    const thumb = card.querySelector(".city-thumb");
    const thumbImage = thumb.querySelector("img");
    const displayStatus = personalStatus === "untracked" ? "todo" : personalStatus;
    card.classList.toggle("is-selected", invader.id === state.selectedCode);
    card.classList.toggle("is-marking", state.recentInventoryChange?.id === invader.id);
    card.classList.add(`inventory-${displayStatus}`);
    thumbImage.src = imageUrl;
    thumbImage.alt = `Aperçu ${invader.id}`;
    thumbImage.referrerPolicy = "no-referrer";
    thumbImage.addEventListener("error", () => {
      thumb.classList.add("is-missing");
      thumbImage.remove();
    });
    card.querySelector(".city-code").textContent = invader.id.replace("PA_", "PA ");
    card.querySelector(".city-main strong").textContent = invader.title;
    card.querySelector(".city-main small").textContent = `${invaderArrondissementLabel(invader)} · ${invader.address || invaderCity(invader)}`;
    card.querySelector(".city-score").innerHTML = `
      <strong>${numberFormat.format(invader.points)} pts</strong>
      <small>${escapeHtml(inventoryStatusLabel(personalStatus))}</small>
    `;
    const flashToggle = card.querySelector("[data-list-status-toggle]");
    flashToggle.textContent = inventoryStatusLabel(personalStatus);
    flashToggle.dataset.status = displayStatus;
    flashToggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const nextStatus = nextInventoryStatus(personalStatus);
      state.selectedCode = invader.id;
      previewListInventoryStatus(card, flashToggle, nextStatus);
      setInventoryStatus(invader.id, nextStatus);
    });
    card.addEventListener("click", () => selectCity(invader.id));
    els.cityList.append(card);
  });
}

function setSelectOptions(select, options, selectedValue, fallbackValue = "all") {
  const currentValue = selectedValue ?? select.value ?? fallbackValue;
  const optionsKey = options.map((option) => `${option.value}:${option.label}`).join("|");
  const nextValue = options.some((option) => option.value === currentValue) ? currentValue : fallbackValue;

  if (select.dataset.optionsKey !== optionsKey) {
    select.replaceChildren(
      ...options.map((option) => {
        const element = document.createElement("option");
        element.value = option.value;
        element.textContent = option.label;
        return element;
      })
    );
    select.dataset.optionsKey = optionsKey;
  }

  if (select.value !== nextValue) {
    select.value = nextValue;
  }
}

function renderLocationFilters() {
  if (els.citySelect) {
    const cities = [...new Set(parisInvaders.map(invaderCity))].sort((a, b) => a.localeCompare(b, "fr"));
    setSelectOptions(
      els.citySelect,
      [{ value: "", label: "Choisir une ville" }, ...cities.map((city) => ({ value: city, label: city }))],
      state.cityFilter,
      ""
    );
    state.cityFilter = els.citySelect.value || "";
  }

  const arrondissements = [...new Set(parisInvaders.map(invaderArrondissement).filter(Boolean))]
    .map(Number)
    .sort((a, b) => a - b)
    .map(String);
  const hasUnknown = parisInvaders.some((invader) => !invaderArrondissement(invader));
  setSelectOptions(
    els.arrondissementSelect,
    [
      { value: "all", label: "Tous" },
      ...arrondissements.map((arrondissement) => ({ value: arrondissement, label: `${arrondissement}e` })),
      ...(hasUnknown ? [{ value: "unknown", label: "Hors Paris" }] : [])
    ],
    state.arrondissementFilter
  );
  state.arrondissementFilter = els.arrondissementSelect.value || "all";
}

function syncFilterControls() {
  els.filterMenu?.classList.toggle("has-city-filter", Boolean(state.cityFilter));
  els.chips.forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.filter === state.filter);
  });
  els.inventoryChips.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.inventoryFilter === state.inventoryFilter);
  });
  if (els.citySelect && document.activeElement !== els.citySelect) {
    els.citySelect.value = state.cityFilter;
  }
  if (document.activeElement !== els.arrondissementSelect) {
    els.arrondissementSelect.value = state.arrondissementFilter;
  }
  if (document.activeElement !== els.pointsSelect) {
    els.pointsSelect.value = state.pointsFilter;
  }
}

function renderDetail(visibleInvaders) {
  const selected = state.selectedCode ? parisInvaders.find((invader) => invader.id === state.selectedCode) : null;
  if (!selected) {
    els.detailPanel.innerHTML = `
      <section class="roadmap empty-detail">
        <h3>${state.cityFilter ? "Aucune sélection" : "Choisir une ville"}</h3>
        <p>${state.cityFilter ? "Choisis un invader dans la liste ou sur la carte pour voir ses infos." : "Sélectionne une ville sur la carte pour charger ses invaders."}</p>
      </section>
    `;
    return;
  }

  const mapsUrl = `https://www.openstreetmap.org/?mlat=${selected.lat}&mlon=${selected.lon}#map=18/${selected.lat}/${selected.lon}`;
  const googleUrl = `https://www.google.com/maps/search/?api=1&query=${selected.lat},${selected.lon}`;
  const imageUrl = invaderImageUrl(selected);
  const links = [
    ["OpenStreetMap", mapsUrl],
    ["Google Maps", googleUrl],
    ["Image", imageUrl],
    ["Instagram", externalUrl(selected.instagramUrl)],
    ["Source", externalUrl(selected.sourceUrl)]
  ].filter(([, url]) => url);

  els.detailPanel.innerHTML = `
    <div class="detail-head">
      <div>
        <p class="section-label">${invaderStatusLabel(selected.status)}</p>
        <h2>${selected.id}</h2>
      </div>
      <span class="detail-code">${selected.points}</span>
    </div>

    <div class="detail-metrics">
      <div><strong>${numberFormat.format(selected.points)}</strong><span>points</span></div>
      <div><strong>${selected.lat.toFixed(4)}</strong><span>latitude</span></div>
      <div><strong>${selected.lon.toFixed(4)}</strong><span>longitude</span></div>
    </div>

    <section class="roadmap">
      <h3>${selected.title}</h3>
      <div class="detail-preview">
        <img
          src="${escapeHtml(imageUrl)}"
          alt="Aperçu ${escapeHtml(selected.id)}"
          referrerpolicy="no-referrer"
          onerror="this.closest('.detail-preview').classList.add('is-missing'); this.remove();"
        />
        <span>Aperçu à compléter</span>
      </div>
      <p>${selected.address}</p>
      <p>${selected.note}</p>
    </section>

    <section class="roadmap">
      <h3>Liens</h3>
      <p class="link-row">
        ${links.map(([label, url]) => `<a href="${escapeHtml(url)}" data-external-link target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`).join("")}
      </p>
    </section>
  `;
}

function selectCity(code) {
  state.selectedCode = code;
  render();
}

function selectMapCity(city) {
  state.cityFilter = city;
  state.arrondissementFilter = "all";
  state.selectedCode = null;
  state.preserveMapViewport = false;
  if (els.citySelect) els.citySelect.value = city;
  saveFilters();
  render();
}

function syncFilterMenuMode() {
  if (!els.filterMenu) return;
  if (desktopFilterQuery.matches) {
    els.filterMenu.open = true;
  }
}

function locateUser() {
  if (!navigator.geolocation) {
    window.alert("La géolocalisation n'est pas disponible dans ce navigateur.");
    return;
  }

  state.locationPending = true;
  render();
  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.userLocation = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        accuracy: position.coords.accuracy || 0,
        updatedAt: new Date().toISOString()
      };
      state.locationPending = false;
      state.preserveMapViewport = "user";
      render();
      showToast("Position ajoutée à la carte");
    },
    (error) => {
      state.locationPending = false;
      render();
      window.alert(error.message || "Impossible de récupérer ta position.");
    },
    {
      enableHighAccuracy: true,
      timeout: 12000,
      maximumAge: 60000
    }
  );
}

function downloadJson(filename, payload) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function exportInventory() {
  const payload = {
    type: "space-helper-inventory",
    exportedAt: new Date().toISOString(),
    inventory
  };
  downloadJson("space-helper-flashs.json", payload);
}

function exportBase() {
  const payload = {
    type: "space-helper-base",
    exportedAt: new Date().toISOString(),
    source: "Base locale Invamap importée ou générée hors navigateur",
    cities,
    invaders: parisInvaders,
    futureInvaderShape,
    futureUserFeatures
  };
  downloadJson("space-helper-base-invaders.json", payload);
  state.baseNeedsSave = false;
  render();
  showToast("Base exportée en JSON");
}

function importedInvadersFromPayload(payload) {
  if (Array.isArray(payload)) return payload;
  return payload?.invaders || payload?.parisInvaders || [];
}

function inferCityCode(invader) {
  return String(invader.cityCode ?? invader.id?.split("_")[0] ?? "").trim();
}

function normalizeImportedInvader(invader) {
  const id = String(invader.id ?? "").trim();
  const cityCode = inferCityCode({ ...invader, id });
  return {
    id,
    cityCode,
    title: String(invader.title ?? id).trim(),
    address: String(invader.address ?? "").trim(),
    lat: Number(invader.lat),
    lon: Number(invader.lon),
    points: Number(invader.points ?? 0),
    status: ["ok", "check", "destroyed"].includes(invader.status) ? invader.status : "check",
    installedAt: String(invader.installedAt ?? ""),
    city: String(invader.city ?? cityCode ?? "Autre"),
    arrondissement: invader.arrondissement ? Number(invader.arrondissement) : "",
    arrondissementLabel: String(invader.arrondissementLabel ?? ""),
    arrondissementName: String(invader.arrondissementName ?? ""),
    imageUrl: String(invader.imageUrl ?? ""),
    instagramUrl: String(invader.instagramUrl ?? ""),
    sourceUrl: String(invader.sourceUrl ?? ""),
    note: String(invader.note ?? "")
  };
}

function normalizeImportedInventory(importedInventory) {
  if (!importedInventory || typeof importedInventory !== "object" || Array.isArray(importedInventory)) {
    return {};
  }

  return Object.entries(importedInventory).reduce((acc, [key, value]) => {
    if (!value || typeof value !== "object") return acc;
    const invaderId = String(value.invaderId ?? key).trim();
    const status = String(value.status ?? value.flashStatus ?? "").trim();
    if (!invaderId || !["flashed", "todo", "ignored"].includes(status)) return acc;
    acc[invaderId] = {
      invaderId,
      status,
      flashedAt: String(value.flashedAt ?? ""),
      updatedAt: String(value.updatedAt ?? new Date().toISOString())
    };
    return acc;
  }, {});
}

async function importInventoryData(file) {
  const raw = await file.text();
  const payload = JSON.parse(raw);
  const importedInventory = payload.inventory ?? payload;
  const normalized = normalizeImportedInventory(importedInventory);
  if (!Object.keys(normalized).length) {
    throw new Error("Le JSON ne contient aucun statut flash valide.");
  }

  inventory = normalized;
  saveInventory();
  state.preserveMapViewport = true;
  render();
  showToast("Statuts flash importés");
}

async function importBaseData(file) {
  const raw = await file.text();
  const payload = JSON.parse(raw);
  const imported = importedInvadersFromPayload(payload);
  if (!Array.isArray(imported)) {
    throw new Error("Le JSON doit être un tableau ou contenir une clé invaders.");
  }

  const normalized = imported.map(normalizeImportedInvader).filter((invader) =>
    invader.id && Number.isFinite(invader.lat) && Number.isFinite(invader.lon)
  );
  if (!normalized.length) {
    throw new Error("Aucun invader valide trouvé. Champs requis : id, lat, lon.");
  }

  parisInvaders = normalized;
  saveBaseOverride(normalized);
  state.databaseSource = "importée";
  state.baseNeedsSave = true;
  if (state.selectedCode && !parisInvaders.some((invader) => invader.id === state.selectedCode)) {
    state.selectedCode = null;
  }
  render();
  showToast(`Base importée : ${numberFormat.format(normalized.length)} invaders`);
}

function reset() {
  state.query = "";
  state.filter = "all";
  state.inventoryFilter = "all";
  state.cityFilter = "";
  state.arrondissementFilter = "all";
  state.pointsFilter = "all";
  state.sort = "id";
  state.selectedCode = null;
  state.showLabels = parisInvaders.length <= 200;
  els.searchInput.value = "";
  els.clearSearchButton.classList.remove("is-visible");
  els.sortSelect.value = "id";
  els.showLabels.checked = state.showLabels;
  clearSavedFilters();
  render();
  showToast("Filtres réinitialisés");
}

function render() {
  const preserveViewport = state.preserveMapViewport;
  syncFilterMenuMode();
  renderLocationFilters();
  syncFilterControls();
  const visibleInvaders = getVisibleInvaders();
  if (state.selectedCode && !visibleInvaders.some((invader) => invader.id === state.selectedCode)) {
    state.selectedCode = null;
  }
  renderStats(visibleInvaders);
  renderMap(visibleInvaders, preserveViewport);
  renderList(visibleInvaders);
  renderDetail(visibleInvaders);
  state.preserveMapViewport = false;
}

function syncFormValuesFromState() {
  els.searchInput.value = state.query;
  els.clearSearchButton.classList.toggle("is-visible", Boolean(state.query.trim()));
  els.sortSelect.value = state.sort;
  els.showLabels.checked = state.showLabels;
}

async function loadGeneratedData() {
  const storedBase = loadBaseOverride();
  if (storedBase?.length) {
    applyInvadersData({ invaders: storedBase }, "importée");
    return;
  }

  const staticPayload = window.SPACEHELPER_INVADERS;
  if (importedInvadersFromPayload(staticPayload).length) {
    applyInvadersData(staticPayload, "intégrée");
    return;
  }

  try {
    const response = await fetch("./data/invaders.json", { cache: "no-store" });
    if (!response.ok) return;
    const payload = await response.json();
    applyInvadersData(payload, "chargée");
  } catch (error) {
    parisInvaders = seedParisInvaders;
    state.databaseSource = "secours";
  }
}

function applyInvadersData(payload, source = "intégrée") {
  const imported = importedInvadersFromPayload(payload);
  if (!Array.isArray(imported) || !imported.length) return;
  parisInvaders = imported.map(normalizeImportedInvader);
  state.databaseSource = source;
  applySavedFilters();
  syncFormValuesFromState();
  if (parisInvaders.length > 200) {
    state.showLabels = false;
    els.showLabels.checked = false;
  }
  if (!parisInvaders.some((invader) => invader.id === state.selectedCode)) {
    state.selectedCode = null;
  }
  render();
}

els.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  els.clearSearchButton.classList.toggle("is-visible", Boolean(state.query.trim()));
  saveFilters();
  render();
});

els.searchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  state.query = "";
  els.searchInput.value = "";
  els.clearSearchButton.classList.remove("is-visible");
  saveFilters();
  render();
});

els.clearSearchButton.addEventListener("click", () => {
  state.query = "";
  els.searchInput.value = "";
  els.clearSearchButton.classList.remove("is-visible");
  els.searchInput.focus();
  saveFilters();
  render();
});

els.chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    state.filter = chip.dataset.filter;
    els.chips.forEach((item) => item.classList.toggle("is-active", item === chip));
    saveFilters();
    render();
  });
});

els.inventoryChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    state.inventoryFilter = chip.dataset.inventoryFilter;
    saveFilters();
    render();
  });
});

els.citySelect?.addEventListener("change", (event) => {
  state.cityFilter = event.target.value;
  state.arrondissementFilter = "all";
  state.selectedCode = null;
  saveFilters();
  render();
});

els.arrondissementSelect.addEventListener("change", (event) => {
  state.arrondissementFilter = event.target.value;
  saveFilters();
  render();
});

els.pointsSelect.addEventListener("change", (event) => {
  state.pointsFilter = event.target.value;
  saveFilters();
  render();
});

els.sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  saveFilters();
  render();
});

els.showLabels.addEventListener("change", (event) => {
  state.showLabels = event.target.checked;
  state.preserveMapViewport = true;
  saveFilters();
  render();
});
els.locateButton.addEventListener("click", locateUser);
desktopFilterQuery.addEventListener("change", syncFilterMenuMode);
syncFilterMenuMode();
syncFormValuesFromState();

els.filterMenu?.addEventListener("toggle", () => {
  if (els.filterMenu.open || !desktopFilterQuery.matches) return;
  requestAnimationFrame(() => {
    els.filterMenu.open = true;
  });
});

els.resetButton.addEventListener("click", reset);
els.resetFiltersButton?.addEventListener("click", reset);
els.exportInventoryButton.addEventListener("click", exportInventory);
els.importInventoryButton.addEventListener("click", () => els.importInventoryInput.click());
els.importInventoryInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;

  try {
    await importInventoryData(file);
  } catch (error) {
    window.alert(error.message);
  } finally {
    event.target.value = "";
  }
});
els.saveBaseButton.addEventListener("click", exportBase);
els.importBaseButton.addEventListener("click", () => els.importBaseInput.click());
els.importBaseInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;

  try {
    await importBaseData(file);
  } catch (error) {
    window.alert(error.message);
  } finally {
    event.target.value = "";
  }
});

els.detailPanel.addEventListener("click", (event) => {
  const link = event.target.closest("[data-external-link]");
  if (!link) return;
  event.preventDefault();
  window.open(link.href, "_blank", "noopener,noreferrer");
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-map-inventory-status]");
  if (!button) return;
  event.preventDefault();
  event.stopPropagation();
  const nextStatus = button.dataset.mapInventoryStatus;
  state.selectedCode = button.dataset.mapInventoryId;
  state.openSelectedPopup = true;
  previewPopupInventoryStatus(button, nextStatus);
  setInventoryStatus(button.dataset.mapInventoryId, nextStatus);
}, true);

render();
loadGeneratedData();
