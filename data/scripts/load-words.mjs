import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { count, credentials, rest, sha256, upsert } from "./supabase-load.mjs";

const ROOT = resolve(import.meta.dirname, "..", "..");
const WORDS = resolve(ROOT, "data", "site", "words");
const load = process.argv.includes("--load");

function names(dir) {
  return readdirSync(dir)
    .filter((name) => name.endsWith(".json"))
    .sort();
}

function readJson(path) {
  const buffer = readFileSync(path);
  return { value: JSON.parse(buffer.toString("utf8")), buffer };
}

function digest(buffers) {
  return sha256(Buffer.concat(buffers));
}

function chapterDataset() {
  const rows = [];
  const buffers = [];
  const books = readdirSync(resolve(WORDS, "verses")).sort();
  for (const book of books) {
    for (const name of names(resolve(WORDS, "verses", book))) {
      const { value, buffer } = readJson(resolve(WORDS, "verses", book, name));
      buffers.push(buffer);
      rows.push({ book, chapter: Number(name.replace(".json", "")), lang: value.lang, verses: value.verses });
    }
  }
  return { tables: { word_chapters: rows }, sha256: digest(buffers), rows: rows.length, conflict: { word_chapters: "book,chapter" } };
}

function lexiconDataset() {
  const rows = [];
  const buffers = [];
  for (const name of names(resolve(WORDS, "lexicon"))) {
    const { value, buffer } = readJson(resolve(WORDS, "lexicon", name));
    buffers.push(buffer);
    const shard = name.replace(".json", "");
    for (const [id, entry] of Object.entries(value)) rows.push({ id, shard, entry });
  }
  return { tables: { word_lexicon: rows }, sha256: digest(buffers), rows: rows.length, conflict: { word_lexicon: "id" } };
}

function occurrenceDataset() {
  const occurrences = [];
  const places = [];
  const buffers = [];
  for (const name of names(resolve(WORDS, "occurrences"))) {
    const { value, buffer } = readJson(resolve(WORDS, "occurrences", name));
    buffers.push(buffer);
    for (const [id, entry] of Object.entries(value)) {
      occurrences.push({ id, n: entry.n, n_any: entry.nAny, verse_count: entry.v, forms: entry.f, form_morph: entry.fm });
      Object.entries(entry.b).forEach(([book, refs], order) => places.push({ id, book_order: order, book, refs }));
    }
  }
  return {
    tables: { word_occurrences: occurrences, word_places: places },
    sha256: digest(buffers),
    rows: occurrences.length,
    conflict: { word_occurrences: "id", word_places: "id,book_order" },
  };
}

function smallDataset() {
  const morph = readJson(resolve(WORDS, "morph.json"));
  const glosses = readJson(resolve(WORDS, "glosses-es.json"));
  const manifest = readJson(resolve(WORDS, "manifest.json"));
  const parseNames = Object.entries(morph.value).map(([language, table]) => ({
    language: language === "greek" ? "grc" : "hbo",
    names: table,
  }));
  const glossRows = Object.entries(glosses.value.es).map(([english, spanish]) => ({ english, spanish }));
  const docs = [
    { id: "words", doc: manifest.value },
    { id: "glosses-es", doc: { status: glosses.value.status } },
  ];
  return {
    tables: { word_parse_names: parseNames, word_glosses_es: glossRows, word_manifest: docs },
    sha256: digest([morph.buffer, glosses.buffer, manifest.buffer]),
    rows: parseNames.length + glossRows.length + docs.length,
    conflict: { word_parse_names: "language", word_glosses_es: "english", word_manifest: "id" },
  };
}

const datasets = {
  chapters: chapterDataset,
  lexicon: lexiconDataset,
  occurrences: occurrenceDataset,
  small: smallDataset,
};

const filterColumn = {
  word_chapters: "book",
  word_lexicon: "id",
  word_occurrences: "id",
  word_places: "id",
  word_parse_names: "language",
  word_glosses_es: "english",
  word_manifest: "id",
};

async function loadDataset(client, name, dataset) {
  const manifestId = `words:${name}`;
  const [previous] = await (await rest(client, `corpus_manifest?id=eq.${manifestId}&select=sha256,row_count`)).json();
  const sizes = Object.fromEntries(
    await Promise.all(
      Object.keys(dataset.tables).map(async (table) => [table, await count(client, `${table}?select=${filterColumn[table]}`)]),
    ),
  );
  const expected = Object.fromEntries(Object.entries(dataset.tables).map(([table, rows]) => [table, rows.length]));
  if (previous?.sha256 === dataset.sha256 && JSON.stringify(sizes) === JSON.stringify(expected)) {
    console.log(`${name}: unchanged, ${JSON.stringify(expected)} already loaded`);
    return;
  }
  if (previous) for (const table of Object.keys(dataset.tables)) await rest(client, `${table}?${filterColumn[table]}=not.is.null`, { method: "DELETE" });
  for (const [table, rows] of Object.entries(dataset.tables)) await upsert(client, table, dataset.conflict[table], rows);
  for (const table of Object.keys(dataset.tables)) {
    const after = await count(client, `${table}?select=${filterColumn[table]}`);
    if (after !== expected[table]) throw new Error(`${name}: ${table} has ${after} rows, expected ${expected[table]}`);
  }
  await upsert(client, "corpus_manifest", "id", [{ id: manifestId, kind: "words", sha256: dataset.sha256, row_count: dataset.rows }]);
  console.log(`${name}: loaded ${JSON.stringify(expected)}`);
}

if (!existsSync(resolve(WORDS, "manifest.json"))) throw new Error(`${WORDS} has no manifest.json`);
const only = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
const chosen = Object.entries(datasets).filter(([name]) => only.length === 0 || only.includes(name));
const built = chosen.map(([name, build]) => [name, build()]);
for (const [name, dataset] of built) {
  console.log(`${name}: ${JSON.stringify(Object.fromEntries(Object.entries(dataset.tables).map(([table, rows]) => [table, rows.length])))}, sha256 ${dataset.sha256.slice(0, 12)}`);
}
if (!load) console.log("dry run: nothing sent");
else {
  const client = credentials();
  for (const [name, dataset] of built) await loadDataset(client, name, dataset);
}
