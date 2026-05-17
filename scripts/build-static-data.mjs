import { readFile, writeFile } from "node:fs/promises";

const INPUT_FILE = new URL("../data/invaders.json", import.meta.url);
const OUTPUT_FILE = new URL("../data/invaders.js", import.meta.url);

const payload = JSON.parse(await readFile(INPUT_FILE, "utf8"));
const output = `window.SPACEHELPER_INVADERS = ${JSON.stringify(payload, null, 2)};\n`;

await writeFile(OUTPUT_FILE, output);
console.log(`Wrote static data bundle to ${OUTPUT_FILE.pathname}`);
