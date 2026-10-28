import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { bibleBooks } from "@/content/bible-books";
import { bibleVersification, normalizeBibleFile } from "@/content/bible/normalize-bible";
import { validateFatherFile } from "@/content/father-text/validate-father-file";

const ROOT = resolve(import.meta.dirname, "..", "..");
const BIBLES = resolve(ROOT, "data", "corpus", "bibles");
const FATHERS = resolve(ROOT, "data", "corpus", "fathers");
const EXPORT = resolve(ROOT, "data", "corpus", "export");
const SOURCES = resolve(ROOT, "data", "sources", "bibles.json");
const BATCH = 1000;

const args = process.argv.slice(2);
const load = args.includes("--load");
const fathers = args.includes("--fathers");
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

function readOptional(name) {
  const path = resolve(BIBLES, name);
  return existsSync(path) ? readFileSync(path) : null;
}

function readTranslation(source) {
  const buffer = readFileSync(resolve(BIBLES, `${source.id}.json`));
  const structureBuffer = readOptional(`${source.id}.structure.json`);
  const redBuffer = readOptional(`${source.id}.red.json`);
  const structureOf = structureBuffer ? JSON.parse(structureBuffer.toString("utf8")) : {};
  const redOf = redBuffer ? JSON.parse(redBuffer.toString("utf8")) : {};
  const { rows, errors } = normalizeBibleFile(source.id, JSON.parse(buffer.toString("utf8")));
  const verses = rows.map((row) => ({
    translation_id: row.translationId,
    book: row.book,
    chapter: row.chapter,
    verse: row.verse,
    text: row.text,
    red: redOf[`${row.book}.${row.chapter}.${row.verse}`] ?? null,
  }));
  const known = new Set(rows.map((row) => `${row.book}.${row.chapter}`));
  const skipped = [];
  const structure = Object.entries(structureOf).flatMap(([key, entry]) => {
    if (!known.has(key)) {
      skipped.push(key);
      return [];
    }
    const at = key.lastIndexOf(".");
    return [
      {
        translation_id: source.id,
        book: key.slice(0, at),
        chapter: Number(key.slice(at + 1)),
        sections: entry.s,
        paragraphs: entry.p,
      },
    ];
  });
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
  if (skipped.length > 0) console.log(`${source.id}: ${skipped.length} structure entries skipped, not chapters of the edition (${skipped.slice(0, 3).join(", ")}…)`);
  const digest = sha256(Buffer.concat([buffer, structureBuffer ?? Buffer.alloc(0), redBuffer ?? Buffer.alloc(0)]));
  return { verses, chapters: [...chapters.values()], structure, books: books.size, sha256: digest, errors };
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

function exportCsv(translations, chapters, verses, structure) {
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
    toCsv(
      ["translation_id", "book", "chapter", "verse", "text", "red"],
      verses.map((row) => ({ ...row, red: row.red ? arrayLiteral(row.red) : "" })),
    ),
  );
  writeFileSync(
    resolve(EXPORT, "chapter_structure.csv"),
    toCsv(
      ["translation_id", "book", "chapter", "sections", "paragraphs"],
      structure.map((row) => ({
        ...row,
        sections: JSON.stringify(row.sections),
        paragraphs: `{${row.paragraphs.join(",")}}`,
      })),
    ),
  );
}

function arrayLiteral(values) {
  return `{${values.map((value) => `"${String(value).replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`).join(",")}}`;
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
    await rest(client, `chapter_structure?translation_id=eq.${source.id}`, { method: "DELETE" });
    await rest(client, `chapters?translation_id=eq.${source.id}`, { method: "DELETE" });
    await rest(client, `verses?translation_id=eq.${source.id}`, { method: "DELETE" });
  }
  await upsert(client, "translations", "id", [translationRow(source)]);
  await upsert(client, "verses", "translation_id,book,chapter,verse", parsed.verses);
  await upsert(client, "chapters", "translation_id,book,chapter", parsed.chapters);
  await upsert(client, "chapter_structure", "translation_id,book,chapter", parsed.structure);
  const after = await count(client, `verses?translation_id=eq.${source.id}`);
  if (after !== parsed.verses.length) throw new Error(`${source.id}: ${after} verses in the database, expected ${parsed.verses.length}`);
  await upsert(client, "corpus_manifest", "id", [
    { id: source.id, kind: "bible", sha256: parsed.sha256, row_count: parsed.verses.length },
  ]);
  console.log(`${source.id}: loaded ${after} verses`);
}

async function runBibles() {
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
      parsed.flatMap((entry) => entry.structure),
    );
    console.log(`dry run: CSV written to ${EXPORT}; nothing sent`);
  } else {
    const client = credentials();
    await upsert(client, "books", "id", bookRows);
    for (const entry of parsed) await loadTranslation(client, entry.source, entry);
  }
}

function readFatherFiles() {
  const files = [];
  const errors = [];
  if (!existsSync(FATHERS)) return { files, errors: [`${FATHERS} does not exist`] };
  for (const work of readdirSync(FATHERS).filter((name) => statSync(resolve(FATHERS, name)).isDirectory())) {
    if (only.length > 0 && !only.includes(work)) continue;
    for (const name of readdirSync(resolve(FATHERS, work)).filter((entry) => entry.endsWith(".json"))) {
      const buffer = readFileSync(resolve(FATHERS, work, name));
      const file = JSON.parse(buffer.toString("utf8"));
      errors.push(...validateFatherFile(file, `${work}/${name}`));
      files.push({ file, label: `${work}/${name}`, sha256: sha256(buffer) });
    }
  }
  return { files, errors };
}

const workRow = ({ work }) => ({ id: work.id, title: work.title, author: work.author });

const editionRow = ({ work, edition }) => ({
  work_id: work.id,
  id: edition.id,
  language: edition.lang,
  translator: edition.translator ?? "",
  year: edition.year ?? "",
  bibliography: edition.bibliography,
  source_url: edition.source,
  scan_url: edition.scan ?? "",
  licence: edition.licence,
  retrieved_on: edition.retrievedAt,
  source_sha256: edition.sha256,
  locator_notes: edition.locatorNotes ?? "",
});

const divisionRows = ({ work, edition, divisions }) =>
  divisions.map((division) => ({
    work_id: work.id,
    edition_id: edition.id,
    locator: division.locator,
    ordinal: division.ordinal,
    heading: division.heading ?? "",
    text: division.text,
  }));

const nullable = (row) => Object.fromEntries(Object.entries(row).map(([key, value]) => [key, value === "" ? null : value]));

async function loadFatherEdition(client, entry) {
  const { file, label } = entry;
  const manifestId = `father:${file.work.id}/${file.edition.id}`;
  const [previous] = await (await rest(client, `corpus_manifest?id=eq.${encodeURIComponent(manifestId)}&select=sha256`)).json();
  const where = `work_id=eq.${encodeURIComponent(file.work.id)}&edition_id=eq.${encodeURIComponent(file.edition.id)}`;
  const loaded = await count(client, `divisions?${where}`);
  if (previous?.sha256 === entry.sha256 && loaded === file.divisions.length) {
    console.log(`${label}: unchanged, ${loaded} divisions already loaded`);
    return;
  }
  if (previous && previous.sha256 !== entry.sha256) await rest(client, `divisions?${where}`, { method: "DELETE" });
  await upsert(client, "works", "id", [workRow(file)]);
  await upsert(client, "editions", "work_id,id", [nullable(editionRow(file))]);
  await upsert(client, "divisions", "work_id,edition_id,locator", divisionRows(file).map(nullable));
  const after = await count(client, `divisions?${where}`);
  if (after !== file.divisions.length) throw new Error(`${label}: ${after} divisions in the database, expected ${file.divisions.length}`);
  await upsert(client, "corpus_manifest", "id", [{ id: manifestId, kind: "father", sha256: entry.sha256, row_count: after }]);
  console.log(`${label}: loaded ${after} divisions`);
}

async function runFathers() {
  const { files, errors } = readFatherFiles();
  for (const entry of files) console.log(`${entry.label}: ${entry.file.divisions.length} divisions, sha256 ${entry.sha256.slice(0, 12)}`);
  if (files.length === 0) errors.push("no normalized Father files found");
  if (errors.length > 0) {
    for (const error of errors.slice(0, 30)) console.error(`FAIL ${error}`);
    process.exit(1);
  }
  if (!load) {
    mkdirSync(EXPORT, { recursive: true });
    const works = [...new Map(files.map(({ file }) => [file.work.id, workRow(file)])).values()];
    writeFileSync(resolve(EXPORT, "works.csv"), toCsv(["id", "title", "author"], works));
    writeFileSync(
      resolve(EXPORT, "editions.csv"),
      toCsv(
        ["work_id", "id", "language", "translator", "year", "bibliography", "source_url", "scan_url", "licence", "retrieved_on", "source_sha256", "locator_notes"],
        files.map(({ file }) => editionRow(file)),
      ),
    );
    writeFileSync(
      resolve(EXPORT, "divisions.csv"),
      toCsv(["work_id", "edition_id", "locator", "ordinal", "heading", "text"], files.flatMap(({ file }) => divisionRows(file))),
    );
    console.log(`dry run: CSV written to ${EXPORT}; nothing sent`);
    return;
  }
  const client = credentials();
  for (const entry of files) await loadFatherEdition(client, entry);
}

if (fathers) await runFathers();
else await runBibles();
