import fs from "node:fs";
import { quoteKey } from "./apologists-md.mjs";
import { matchSections } from "./apologists-match.mjs";
import { overlaps, versesOfOsis } from "./passage-refs.mjs";

const ROOT = new URL("../../", import.meta.url).pathname;
const DATA = `${ROOT}data/passages/`;
const [, , outDir, wordsPerBatch = "4500", ...only] = process.argv;
const readJson = (f) => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : {});
const done = readJson(`${DATA}translations/quotes.json`);
const doneTitles = readJson(`${DATA}translations/titles.json`);

const core = {};
let current = null;
for (const line of fs.readFileSync(`${ROOT}docs/research/doctrines/scripture-lists/core-sets.md`, "utf8").split("\n")) {
  const h = /^## (\S+) · (\S+)/.exec(line);
  if (h) { current = `${h[1]}:${h[2]}`; core[current] = []; continue; }
  const row = /^\| (\d+) \| ([^|]+)\|/.exec(line);
  if (row && current) core[current].push({ rank: +row[1], verses: versesOfOsis([...row[2].matchAll(/`([^`]+)`/g)].map((m) => m[1])) });
}
const order = ["baptism:catholic", "eucharist:catholic", "papacy:catholic", "sola-scriptura:catholic", "baptism:lutheran", "baptism:reformed", "baptism:orthodox", "eucharist:lutheran", "eucharist:reformed", "eucharist:orthodox", "papacy:lutheran", "papacy:reformed", "papacy:orthodox", "sola-scriptura:lutheran", "sola-scriptura:reformed", "sola-scriptura:orthodox", "baptism:baptist", "eucharist:baptist", "papacy:baptist", "sola-scriptura:baptist"];
const quotes = [];
const titles = new Map();
const seen = new Set();
for (const key of order) {
  if (only.length && !only.includes(key)) continue;
  const [d, t] = key.split(":");
  const file = `${DATA}apologists/${d}-${t}.json`;
  if (!fs.existsSync(file)) continue;
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const pageSrc = fs.readFileSync(`${ROOT}src/content/pages/${d}/${t}.es.ts`, "utf8");
  const scripture = [...pageSrc.slice(pageSrc.indexOf("  scripture: [")).matchAll(/^\s{4}\{\n\s+refs: \[([^\]]*)\]/gm)].map((m) => ({ refs: m[1].replace(/["\s]/g, "").split(",").filter(Boolean) }));
  const { perPassage } = matchSections(data.sections, scripture, d, d);
  const ranked = perPassage.map((matches, i) => {
    const hit = (core[key] ?? []).filter((c) => overlaps(c.verses, versesOfOsis(scripture[i].refs))).map((c) => c.rank);
    return { i, matches, rank: hit.length ? Math.min(...hit) : 99 };
  }).sort((a, b) => a.rank - b.rank || a.i - b.i);
  for (const { matches, rank, i } of ranked)
    for (const { arguments: list } of matches)
      for (const a of list) {
        if (!titles.has(a.title) && !doneTitles[quoteKey(a.title)]) titles.set(a.title, key);
        for (const q of a.quotes) {
          if (seen.has(q.key) || done[q.key]) continue;
          seen.add(q.key);
          quotes.push({ key: q.key, page: key, passage: i + 1, rank, words: q.text.split(/\s+/).length, text: q.text });
        }
      }
}
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/titles.json`, JSON.stringify([...titles.keys()].map((text) => ({ key: quoteKey(text), text })), null, 1));
const batches = [];
let batch = [], words = 0;
for (const q of quotes) {
  if (batch.length && words + q.words > +wordsPerBatch) { batches.push(batch); batch = []; words = 0; }
  batch.push(q); words += q.words;
}
if (batch.length) batches.push(batch);
batches.forEach((b, n) => fs.writeFileSync(`${outDir}/batch-${String(n + 1).padStart(2, "0")}.json`, JSON.stringify(b.map(({ key, text }) => ({ key, text })), null, 1)));
fs.writeFileSync(`${outDir}/index.json`, JSON.stringify(batches.map((b, n) => ({ batch: n + 1, quotes: b.length, words: b.reduce((s, q) => s + q.words, 0), first: `${b[0].page}#${b[0].passage}`, last: `${b.at(-1).page}#${b.at(-1).passage}` })), null, 1));
console.log(`titles ${titles.size}, quotes ${quotes.length}, words ${quotes.reduce((s, q) => s + q.words, 0)}, batches ${batches.length}`);
