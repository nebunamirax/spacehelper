import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(root, "dist");
const outputFile = path.join(outputDir, "space-helper-standalone.html");
const pagesDir = path.join(root, "docs");
const pagesFile = path.join(pagesDir, "index.html");
const noJekyllFile = path.join(pagesDir, ".nojekyll");

const [html, css, invadersData, appJs] = await Promise.all([
  readFile(path.join(root, "index.html"), "utf8"),
  readFile(path.join(root, "styles.css"), "utf8"),
  readFile(path.join(root, "data", "invaders.js"), "utf8"),
  readFile(path.join(root, "src", "app.js"), "utf8")
]);

const inlineCss = `<style>\n${css}\n</style>`;
const inlineData = `<script>\n${invadersData}\n</script>`;
const inlineApp = `<script>\n${appJs}\n</script>`;

const standalone = html
  .replace(/\s*<link rel="stylesheet" href="\.\/styles\.css" \/>\s*/, `\n    ${inlineCss}\n`)
  .replace(/<script\s+defer\s+src="https:\/\/unpkg\.com\/leaflet@1\.9\.4\/dist\/leaflet\.js"/, '<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"')
  .replace(/\s*<script defer src="\.\/data\/invaders\.js"><\/script>\s*/, `\n    ${inlineData}\n`)
  .replace(/\s*<script defer src="\.\/src\/app\.js[^"]*"><\/script>\s*/, `\n    ${inlineApp}\n`);

if (standalone === html) {
  throw new Error("Aucune balise locale n'a été remplacée. Vérifie index.html.");
}

await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, standalone);
await mkdir(pagesDir, { recursive: true });
await writeFile(pagesFile, standalone);
await writeFile(noJekyllFile, "");

console.log(`Standalone généré : ${path.relative(root, outputFile)}`);
console.log(`GitHub Pages généré : ${path.relative(root, pagesFile)}`);
