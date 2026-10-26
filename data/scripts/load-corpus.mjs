import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { bibleBooks } from "@/content/bible-books";
import { bibleVersification, normalizeBibleFile } from "@/content/bible/normalize-bible";

const ROOT = resolve(import.meta.dirname, "..", "..");
const BIBLES = resolve(ROOT, "data", "corpus", "bibles");
const EXPORT = resolve(ROOT, "data", "corpus", "export");
const SOURCES = resolve(ROOT, "data", "sources", "bibles.json");
const BATCH = 1000;

const args = process.argv.slice(2);
const load = args.includes("--load");
const only = args.filter((arg) => !arg.startsWith("--"));

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

function csvField(value) {
  const text = String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function toCsv(columns, rows) {
  return [columns.join(","), ...rows.map((row) => columns.map((column) => csvField(row[column])).join(","))].join("\n") + "\n";
}

function readTranslation(source) {
  const buffer = readFileSync(resolve(BIBLES, `${source.id}.json`));
  const { rows, errors } = normalizeBibleFile(source.id, JSON.parse(buffer.toString("utf8")));
  const verses = rows.map((row) => ({
    translation_id: row.translationId,
    book: row.book,
    chapter: row.chapter,
    verse: row.verse,
    text: row.text,
  }));
  const books = new Set(verses.map((row) => row.book));
  if (verses.length !== source.verses) errors.push(`${source.id}: ${verses.length} verses, manifest says ${source.verses}`);
  if (books.size !== source.canon) errors.push(`${source.id}: ${books.size} books, manifest says ${source.canon}`);
  const chapters = new Map();
  for (const row of verses) {
    const key = `${row.book}.${row.chapter}`;
    const entry = chapters.get(key) ?? { translation_id: source.id, book: row.book, chapter: row.chapter, verse_count: 0 };
    entry.verse_count += 1;
    chapters.set(key, entry);
  }
  return { verses, chapters: [...chapters.values()], books: books.size, sha256: sha256(buffer), errors };
}

function translationRow(source) {
  return {
    id: source.id,
    language: source.lang,
    name: source.name,
    licence: source.licence,
    versification: bibleVersification[source.id],
    book_count: source.canon,
    source_url: source.url,
    source_sha256: source.sha256,
    retrieved_on: source.downloaded,
  };
}

const bookRows = bibleBooks.map((book) => ({
  id: book.id,
  ordinal: book.ordinal,
  section: book.section,
  name_es: book.names.es,
  name_en: book.names.en,
}));

function exportCsv(translations, chapters, verses) {
  mkdirSync(EXPORT, { recursive: true });
  writeFileSync(resolve(EXPORT, "books.csv"), toCsv(["id", "ordinal", "section", "name_es", "name_en"], bookRows));
  writeFileSync(
    resolve(EXPORT, "translations.csv"),
    toCsv(
      ["id", "language", "name", "licence", "versification", "book_count", "source_url", "source_sha256", "retrieved_on"],
      translations,
    ),
  );
  writeFileSync(resolve(EXPORT, "chapters.csv"), toCsv(["translation_id", "book", "chapter", "verse_count"], chapters));
  writeFileSync(
    resolve(EXPORT, "verses.csv"),
    toCsv(["translation_id", "book", "chapter", "verse", "text"], verses),
  );
}

function credentials() {
  try {
    process.loadEnvFile(resolve(ROOT, ".env.local"));
  } catch {}
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) throw new Error("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SECRET_KEY must be set in .env.local");
  return { url, key };
}

async function rest({ url, key }, path, { method = "GET", body, prefer } = {}) {
  const response = await fetch(`${url}/rest/v1/${path}`, {
    method,
    headers: {
      apikey: key,
      "Content-Type": "application/json",
      ...(prefer ? { Prefer: prefer } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) throw new Error(`${method} ${path}: ${response.status} ${await response.text()}`);
  return response;
}

async function upsert(client, table, conflict, rows) {
  for (let start = 0; start < rows.length; start += BATCH) {
    await rest(client, `${table}?on_conflict=${conflict}`, {
      method: "POST",
      body: rows.slice(start, start + BATCH),
      prefer: "resolution=merge-duplicates,return=minimal",
    });
  }
}

async function count(client, query) {
  const response = await rest(client, query, { method: "HEAD", prefer: "count=exact" });
  return Number(response.headers.get("content-range").split("/")[1]);
}

async function loadTranslation(client, source, parsed) {
  const manifestRows = await (await rest(client, `corpus_manifest?id=eq.${source.id}&select=sha256,row_count`)).json();
  const [previous] = manifestRows;
  const loaded = await count(client, `verses?translation_id=eq.${source.id}`);
  if (previous?.sha256 === parsed.sha256 && loaded === parsed.verses.length) {
    console.log(`${source.id}: unchanged, ${loaded} verses already loaded`);
    return;
  }
  if (previous && previous.sha256 !== parsed.sha256) {
    await rest(client, `chapters?translation_id=eq.${source.id}`, { method: "DELETE" });
    await rest(client, `verses?translation_id=eq.${source.id}`, { method: "DELETE" });
  }
  await upsert(client, "translations", "id", [translationRow(source)]);
  await upsert(client, "verses", "translation_id,book,chapter,verse", parsed.verses);
  await upsert(client, "chapters", "translation_id,book,chapter", parsed.chapters);
  const after = await count(client, `verses?translation_id=eq.${source.id}`);
  if (after !== parsed.verses.length) throw new Error(`${source.id}: ${after} verses in the database, expected ${parsed.verses.length}`);
  await upsert(client, "corpus_manifest", "id", [
    { id: source.id, kind: "bible", sha256: parsed.sha256, row_count: parsed.verses.length },
  ]);
  console.log(`${source.id}: loaded ${after} verses`);
}

const sources = JSON.parse(readFileSync(SOURCES, "utf8")).filter((source) => only.length === 0 || only.includes(source.id));
if (sources.length === 0) throw new Error(`no translation matches ${only.join(", ")}`);

const parsed = sources.map((source) => ({ source, ...readTranslation(source) }));
const errors = parsed.flatMap((entry) => entry.errors);
for (const entry of parsed) console.log(`${entry.source.id}: ${entry.verses.length} verses, ${entry.books} books, sha256 ${entry.sha256.slice(0, 12)}`);
if (errors.length > 0) {
  for (const error of errors.slice(0, 30)) console.error(`FAIL ${error}`);
  process.exit(1);
}

if (!load) {
  exportCsv(
    sources.map(translationRow),
    parsed.flatMap((entry) => entry.chapters),
    parsed.flatMap((entry) => entry.verses),
  );
  console.log(`dry run: CSV written to ${EXPORT}; nothing sent`);
} else {
  const client = credentials();
  await upsert(client, "books", "id", bookRows);
  for (const entry of parsed) await loadTranslation(client, entry.source, entry);
}
