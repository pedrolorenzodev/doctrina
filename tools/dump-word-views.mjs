import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { getChapterWordView } from "@/content/get-chapter-word-view";
import { getWordPage } from "@/content/get-word-page";

const out = process.argv[2];
if (!out) throw new Error("usage: dump-word-views.mjs <out.json>");

const dir = resolve(import.meta.dirname, "..", "data", "site", "words", "occurrences");
const entries = readdirSync(dir)
  .sort()
  .flatMap((name) => Object.entries(JSON.parse(readFileSync(resolve(dir, name), "utf8"))));
const listable = entries.filter(([, entry]) => entry.v <= 1200);
const largest = listable.toSorted((a, b) => b[1].v - a[1].v).slice(0, 6);
const every = listable.filter((_, index) => index % 400 === 0);
const unlisted = entries.filter(([, entry]) => entry.v > 1200).slice(0, 4);
const ids = [
  ...new Set(
    ["G4561", "G3056", "G2316", "G0976", ...largest, ...every, ...unlisted].map((item) =>
      Array.isArray(item) ? item[0] : item,
    ),
  ),
];

const chapters = [
  ["John", 6],
  ["Gen", 1],
  ["Ps", 119],
  ["Rom", 8],
  ["Isa", 53],
  ["Matt", 5],
  ["Rev", 12],
];

const result = { pages: {}, chapters: {} };
for (const locale of ["es", "en"]) {
  for (const id of ids) result.pages[`${locale}:${id}`] = await getWordPage(locale, id);
  for (const [book, chapter] of chapters)
    result.chapters[`${locale}:${book}.${chapter}`] = await getChapterWordView(locale, book, chapter);
}
writeFileSync(out, JSON.stringify(result));
console.log(`${ids.length} words × 2 locales and ${chapters.length} chapters × 2 locales written`);
