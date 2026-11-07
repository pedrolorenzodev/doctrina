import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fatherRows, traditionRows } from "./load-ai-passages.mjs";
import { credentials, rest } from "./supabase-load.mjs";

const ROOT = resolve(import.meta.dirname, "..", "..");
const BIBLES = resolve(ROOT, "data", "corpus", "bibles");
const GRAM = 4;
const COMMON_GRAM_VERSES = 6;
const ONE_RUN_WORDS = 7;
const LONG_RUN_WORDS = 10;
const MIN_COVERAGE = 0.25;
const RARE_GRAM_VERSES = 4;
const TWO_RUN_WORDS = 8;
const HEADING_SCORE = 0.9;
const QUOTE_WEIGHT = 0.8;
const BATCH = 2000;
const NEW_TESTAMENT = new Set(
  "Matt Mark Luke John Acts Rom 1Cor 2Cor Gal Eph Phil Col 1Thess 2Thess 1Tim 2Tim Titus Phlm Heb Jas 1Pet 2Pet 1John 2John 3John Jude Rev".split(" "),
);


const BOOKS = [
  ["Gen", ["Gen", "Genesis", "Gén", "Génesis"]],
  ["Exod", ["Ex", "Exod", "Exodus", "Éx", "Éxodo"]],
  ["Lev", ["Lev", "Leviticus", "Levítico"]],
  ["Num", ["Num", "Numbers", "Núm", "Números"]],
  ["Deut", ["Deut", "Deuteronomy", "Dt", "Deuteronomio"]],
  ["Josh", ["Josh", "Joshua", "Jos", "Josué"]],
  ["Judg", ["Judg", "Judges", "Jue", "Jueces"]],
  ["Ruth", ["Ruth", "Rut"]],
  ["1Sam", ["1 Sam", "1 Samuel"]],
  ["2Sam", ["2 Sam", "2 Samuel"]],
  ["1Kgs", ["1 Kings", "1 Kgs", "1 Re", "1 Reyes"]],
  ["2Kgs", ["2 Kings", "2 Kgs", "2 Re", "2 Reyes"]],
  ["Job", ["Job"]],
  ["Ps", ["Ps", "Psa", "Psalm", "Psalms", "Sal", "Salmo", "Salmos"]],
  ["Prov", ["Prov", "Proverbs", "Pr", "Proverbios"]],
  ["Eccl", ["Eccl", "Eccles", "Ecclesiastes", "Ecl", "Eclesiastés"]],
  ["Song", ["Cant", "Song", "Cantares"]],
  ["Isa", ["Isa", "Isaiah", "Is", "Isaías"]],
  ["Jer", ["Jer", "Jeremiah", "Jeremías"]],
  ["Lam", ["Lam", "Lamentations", "Lamentaciones"]],
  ["Ezek", ["Ezek", "Ezekiel", "Ez", "Ezequiel"]],
  ["Dan", ["Dan", "Daniel", "Dn"]],
  ["Hos", ["Hos", "Hosea", "Os", "Oseas"]],
  ["Joel", ["Joel"]],
  ["Amos", ["Amos", "Amós"]],
  ["Jonah", ["Jonah", "Jonás"]],
  ["Mic", ["Mic", "Micah", "Miqueas"]],
  ["Hab", ["Hab", "Habakkuk", "Habacuc"]],
  ["Zech", ["Zech", "Zechariah", "Zac", "Zacarías"]],
  ["Mal", ["Mal", "Malachi", "Malaquías"]],
  ["Matt", ["Matt", "Mat", "Matthew", "Mt", "Mateo"]],
  ["Mark", ["Mark", "Mar", "Mc", "Mr", "Marcos"]],
  ["Luke", ["Luke", "Luk", "Lc", "Lucas"]],
  ["John", ["John", "Joh", "Jn", "Juan"]],
  ["Acts", ["Acts", "Hch", "Hechos"]],
  ["Rom", ["Rom", "Romans", "Ro", "Romanos"]],
  ["1Cor", ["1 Cor", "1 Corinthians", "1 Co", "1 Corintios"]],
  ["2Cor", ["2 Cor", "2 Corinthians", "2 Co", "2 Corintios"]],
  ["Gal", ["Gal", "Galatians", "Gál", "Gálatas"]],
  ["Eph", ["Eph", "Ephesians", "Ef", "Efesios"]],
  ["Phil", ["Phil", "Philippians", "Flp", "Filipenses"]],
  ["Col", ["Col", "Colossians", "Colosenses"]],
  ["1Thess", ["1 Thess", "1 Thessalonians", "1 Tes", "1 Tesalonicenses"]],
  ["2Thess", ["2 Thess", "2 Thessalonians", "2 Tes", "2 Tesalonicenses"]],
  ["1Tim", ["1 Tim", "1 Timothy", "1 Ti", "1 Timoteo"]],
  ["2Tim", ["2 Tim", "2 Timothy", "2 Ti", "2 Timoteo"]],
  ["Titus", ["Tit", "Titus", "Tito"]],
  ["Phlm", ["Philem", "Philemon", "Flm", "Filemón"]],
  ["Heb", ["Heb", "Hebrews", "Hebreos"]],
  ["Jas", ["Jas", "James", "Stg", "Santiago"]],
  ["1Pet", ["1 Pet", "1 Peter", "1 Pe", "1 Pedro"]],
  ["2Pet", ["2 Pet", "2 Peter", "2 Pe", "2 Pedro"]],
  ["1John", ["1 John", "1 Jn", "1 Juan"]],
  ["2John", ["2 John", "2 Jn", "2 Juan"]],
  ["3John", ["3 John", "3 Jn", "3 Juan"]],
  ["Jude", ["Jude", "Judas"]],
  ["Rev", ["Rev", "Revelation", "Apoc", "Apocalypse", "Ap", "Apocalipsis"]],
];

const ROMAN = { i: 1, v: 5, x: 10, l: 50, c: 100 };
const romanValue = (text) => {
  let total = 0;
  const digits = [...text.toLowerCase()].map((char) => ROMAN[char]);
  digits.forEach((value, index) => {
    total += value < (digits[index + 1] ?? 0) ? -value : value;
  });
  return total;
};

const escape = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const spellings = new Map();
for (const [osis, names] of BOOKS) {
  for (const name of names) {
    const ordinal = /^([123]) (.+)$/.exec(name);
    if (ordinal) {
      const roman = ["", "I", "II", "III"][Number(ordinal[1])];
      for (const prefix of [ordinal[1], roman, `${roman}.`]) spellings.set(`${prefix} ${ordinal[2]}`.toLowerCase(), osis);
    } else spellings.set(name.toLowerCase(), osis);
  }
}
const bookAlternation = [...spellings.keys()]
  .sort((a, b) => b.length - a.length)
  .map((name) => escape(name).replace(/ /g, "\\s?"))
  .join("|");
const REFERENCE = new RegExp(
  `(?<![\\p{L}\\p{N}])(${bookAlternation})\\.?\\s*([ivxlc]+|\\d{1,3})(?:\\.\\s?|:\\s?|,\\s?|\\s)(\\d{1,3})((?:\\s?[-–—]\\s?\\d{1,3})?(?:\\s?,\\s?\\d{1,3}(?:\\s?[-–—]\\s?\\d{1,3})?)*)`,
  "giu",
);

export function explicitReferences(text, verseExists) {
  const found = [];
  for (const match of text.matchAll(REFERENCE)) {
    const osis = spellings.get(match[1].replace(/\s+/g, " ").toLowerCase()) ??
      spellings.get(match[1].replace(/\s+/g, "").toLowerCase());
    if (!osis) continue;
    const chapterText = match[2];
    const roman = /^[ivxlc]+$/i.test(chapterText);
    if (roman && chapterText !== chapterText.toLowerCase() && chapterText !== chapterText.toUpperCase()) continue;
    const chapter = roman ? romanValue(chapterText) : Number(chapterText);
    const first = Number(match[3]);
    const ranges = [[first, first]];
    const tail = match[4] ?? "";
    const rangeEnd = /^\s?[-–—]\s?(\d{1,3})/.exec(tail);
    if (rangeEnd) ranges[0][1] = Math.max(first, Number(rangeEnd[1]));
    for (const extra of tail.matchAll(/,\s?(\d{1,3})(?:\s?[-–—]\s?(\d{1,3}))?/g)) {
      const from = Number(extra[1]);
      ranges.push([from, Math.max(from, Number(extra[2] ?? from))]);
    }
    for (const [from, to] of ranges) {
      if (!verseExists(osis, chapter, from)) continue;
      let last = from;
      while (last < to && verseExists(osis, chapter, last + 1)) last += 1;
      found.push({ book: osis, chapter, from, to: last });
    }
  }
  return found;
}

const wordsOf = (text) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[[\]]/g, "")
    .split(/[^a-z0-9ñ]+/u)
    .filter(Boolean);

function gramsOf(words) {
  const grams = [];
  for (let index = 0; index + GRAM <= words.length; index += 1) grams.push(words.slice(index, index + GRAM).join(" "));
  return grams;
}

function loadBible(id) {
  return JSON.parse(readFileSync(resolve(BIBLES, `${id}.json`), "utf8"));
}

export function bibleIndex(ids) {
  const owners = new Map();
  const length = new Map();
  for (const id of ids) {
    for (const [key, text] of Object.entries(loadBible(id))) {
      if (id === "dra" && !NEW_TESTAMENT.has(key.split(".")[0])) continue;
      const words = wordsOf(text);
      length.set(key, Math.max(length.get(key) ?? 0, words.length));
      for (const gram of new Set(gramsOf(words))) {
        const keys = owners.get(gram);
        if (!keys) owners.set(gram, new Set([key]));
        else if (keys.size <= COMMON_GRAM_VERSES) keys.add(key);
      }
    }
  }
  for (const [gram, keys] of owners) if (keys.size > COMMON_GRAM_VERSES) owners.delete(gram);
  return { owners, length };
}

export function quotedVerses(text, index) {
  const positions = new Map();
  gramsOf(wordsOf(text)).forEach((gram, at) => {
    const keys = index.owners.get(gram);
    if (!keys || keys.size > RARE_GRAM_VERSES) return;
    for (const key of keys) {
      const list = positions.get(key);
      if (!list) positions.set(key, [at]);
      else if (list.at(-1) !== at) list.push(at);
    }
  });
  const found = [];
  for (const [key, list] of positions) {
    let runs = 0;
    let words = 0;
    let longest = 0;
    let runLength = 0;
    list.forEach((at, index) => {
      if (index > 0 && at === list[index - 1] + 1) runLength += 1;
      else {
        if (runLength > 0) words += runLength + GRAM - 1;
        longest = Math.max(longest, runLength + GRAM - 1);
        runs += 1;
        runLength = 1;
      }
    });
    words += runLength + GRAM - 1;
    longest = Math.max(longest, runLength + GRAM - 1);
    const coverage = Math.min(1, words / Math.max(index.length.get(key) ?? words, 1));
    const oneRun = longest >= ONE_RUN_WORDS && (coverage >= MIN_COVERAGE || longest >= LONG_RUN_WORDS);
    const twoRuns = runs >= 2 && words >= TWO_RUN_WORDS && coverage >= MIN_COVERAGE;
    if (!oneRun && !twoRuns) continue;
    const [book, chapter, verse] = key.split(".");
    found.push({ book, chapter: Number(chapter), from: Number(verse), to: Number(verse), score: coverage });
  }
  return found;
}

export function osisRanges(refs, verseExists) {
  return refs.flatMap((ref) => {
    const [start = "", end] = ref.split("-");
    const [book, chapterText, verseText] = start.split(".");
    const chapter = Number(chapterText);
    if (!book || !chapter) return [];
    const from = verseText ? Number(verseText) : 1;
    let to = end ? Number(end.split(".").at(-1)) : verseText ? from : 1;
    if (!verseText) while (verseExists(book, chapter, to + 1)) to += 1;
    return verseExists(book, chapter, from) ? [{ book, chapter, from, to: Math.max(from, to) }] : [];
  });
}

export function linksOf(row, context) {
  const links = new Map();
  const put = (ref, kind, score) => {
    const id = `${ref.book}.${ref.chapter}.${ref.from}.${kind}`;
    const current = links.get(id);
    if (!current || current.score < score) links.set(id, { ...ref, kind, score: Math.round(score * 100) / 100 });
  };
  for (const ref of explicitReferences(row.text, context.verseExists)) put(ref, "cites", 1);
  if (!row.source_key.endsWith(":definition")) {
    for (const ref of osisRanges(row.refs ?? [], context.verseExists)) put(ref, "cites", 1);
  }
  for (const ref of explicitReferences(context.heading ?? "", context.verseExists)) put(ref, "cites", HEADING_SCORE);
  const index = row.lang === "es" ? context.spanish : context.english;
  for (const ref of quotedVerses(row.text, index)) put(ref, "quotes", QUOTE_WEIGHT * ref.score);
  return [...links.values()];
}

function headingsByDivision() {
  const map = new Map();
  for (const folder of ["fathers", "fathers-es"]) {
    const root = resolve(ROOT, "data", "corpus", folder);
    for (const work of readdirSync(root).filter((name) => statSync(resolve(root, name)).isDirectory())) {
      for (const file of readdirSync(resolve(root, work)).filter((name) => name.endsWith(".json"))) {
        const data = JSON.parse(readFileSync(resolve(root, work, file), "utf8"));
        for (const division of data.divisions) {
          map.set(`${data.work.id}:${data.edition.id}:${division.locator}`, division.heading ?? "");
        }
      }
    }
  }
  return map;
}

export function buildLinks() {
  const kjv = loadBible("kjv");
  const verseExists = (book, chapter, verse) => `${book}.${chapter}.${verse}` in kjv;
  const english = bibleIndex(["kjv", "dra"]);
  const spanish = bibleIndex(["rv1909"]);
  const headings = headingsByDivision();
  const rows = [...fatherRows().rows, ...traditionRows()];
  const out = [];
  for (const row of rows) {
    const division = row.source_key.split(":").slice(1, 4).join(":");
    for (const link of linksOf(row, { verseExists, english, spanish, heading: headings.get(division) })) {
      out.push({ source_key: row.source_key, ...link });
    }
  }
  return { rows, links: out };
}

async function passageIds(client) {
  const ids = new Map();
  for (let offset = 0; ; offset += 1000) {
    const page = await (
      await rest(client, `ai_passages?select=id,source_key&collection=in.(fathers,tradition)&order=id&limit=1000&offset=${offset}`)
    ).json();
    for (const row of page) ids.set(row.source_key, row.id);
    if (page.length < 1000) break;
  }
  return ids;
}

async function load(links) {
  const client = credentials();
  const ids = await passageIds(client);
  const records = links.flatMap((link) => {
    const id = ids.get(link.source_key);
    return id
      ? [{ passage_id: id, book: link.book, chapter: link.chapter, verse_from: link.from, verse_to: link.to, kind: link.kind, score: link.score }]
      : [];
  });
  await rest(client, "ai_scripture_links?passage_id=gte.0", { method: "DELETE" });
  for (let at = 0; at < records.length; at += BATCH) {
    await rest(client, "ai_scripture_links", { method: "POST", body: records.slice(at, at + BATCH), prefer: "return=minimal" });
  }
  console.log(`loaded ${records.length} links (${links.length - records.length} without a passage id)`);
}

async function main() {
  const started = Date.now();
  const { rows, links } = buildLinks();
  const byKind = links.reduce((sum, link) => ({ ...sum, [link.kind]: (sum[link.kind] ?? 0) + 1 }), {});
  const passages = new Set(links.map((link) => link.source_key)).size;
  console.log(
    `${rows.length} passages · ${links.length} links (${JSON.stringify(byKind)}) · ${passages} passages with a link · ${Math.round((Date.now() - started) / 1000)} s`,
  );
  const dump = process.argv.find((arg) => arg.startsWith("--dump="));
  if (dump) writeFileSync(dump.slice("--dump=".length), JSON.stringify(links));
  if (!process.argv.includes("--load")) {
    console.log("dry run: nothing sent");
    return;
  }
  await load(links);
}

if (process.argv[1] === import.meta.filename) await main();
