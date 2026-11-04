import fs from "node:fs";

const DATA = new URL("../passages/translations/", import.meta.url).pathname;
const [, , kind, batchFile, outFile] = process.argv;
if (!["quotes", "titles"].includes(kind) || !batchFile || !outFile) {
  console.error("Usage: node merge-translations.mjs quotes|titles <batch.json> <translated.json>");
  process.exit(1);
}
const batch = JSON.parse(fs.readFileSync(batchFile, "utf8"));
const out = JSON.parse(fs.readFileSync(outFile, "utf8"));
const target = `${DATA}${kind}.json`;
const store = fs.existsSync(target) ? JSON.parse(fs.readFileSync(target, "utf8")) : {};
const numbers = (s) => (s.match(/\d+/g) ?? []).sort().join(",");
const problems = [];
let merged = 0;
for (const { key, text } of batch) {
  const es = out[key];
  if (typeof es !== "string" || !es.trim()) { problems.push(`${key}: missing`); continue; }
  if (kind === "quotes") {
    if (es.split("\n\n").length !== text.split("\n\n").length) { problems.push(`${key}: paragraphs ${text.split("\n\n").length} -> ${es.split("\n\n").length}`); continue; }
    const ratio = es.split(/\s+/).length / text.split(/\s+/).length;
    if (ratio < 0.8 || ratio > 1.6) { problems.push(`${key}: length ratio ${ratio.toFixed(2)}`); continue; }
    if (numbers(text) !== numbers(es)) problems.push(`${key}: numbers differ (kept, check)`);
  }
  store[key] = es;
  merged += 1;
}
fs.mkdirSync(DATA, { recursive: true });
fs.writeFileSync(target, JSON.stringify(Object.fromEntries(Object.entries(store).sort(([a], [b]) => a.localeCompare(b))), null, 1));
console.log(`${kind}: merged ${merged} of ${batch.length}; problems: ${problems.length ? "\n" + problems.join("\n") : "none"}`);
