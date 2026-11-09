import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";
import {
  DRAFT_MARK,
  CUT_ABOVE_CHARS,
  PART_MAX_CHARS,
  fatherIdsByWork,
  fatherYearOf,
  licenceOfEdition,
  licenceOfGlossary,
  maxQuoteWordsFor,
  speakerOfWork,
  withContractions,
} from "@/content/ai-search/collections";
import { formatLocator } from "@/content/format-locator";
import { formatVerseRef } from "@/content/format-verse";
import { spanishDoctrinePages, spanishPages } from "@/content/pages/index";
import { registry } from "@/content/registry/index";
import { parseInline } from "@/lib/inline-refs";
import { count, credentials, rest, sha256 } from "./supabase-load.mjs";

const ROOT = resolve(import.meta.dirname, "..", "..");
const FATHERS = resolve(ROOT, "data", "corpus", "fathers");
const FATHERS_ES = resolve(ROOT, "data", "corpus", "fathers-es");
const GLOSSARY = resolve(ROOT, "data", "site", "glossary.json");
const BIBLES = resolve(ROOT, "data", "sources", "bibles.json");
const BATCH_ROWS = 500;
const BATCH_BYTES = 900_000;
const STORED_PER_RAW = 1.6;

const fold = (text) => text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const slugOf = (name) =>
  fold(name)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function plainOf(rich) {
  return parseInline(rich)
    .map((node) => {
      if (node.kind === "text") return node.text;
      if (node.kind === "verse") return formatVerseRef(node.osis, "es");
      if (node.kind === "glossary") return node.label ?? node.id;
      return node.label;
    })
    .join("")
    .replace(/[ \t]+/g, " ")
    .trim();
}

function versesOf(rich) {
  return parseInline(rich).flatMap((node) => (node.kind === "verse" ? node.osis : []));
}

function citationsOf(value, found = new Set()) {
  if (typeof value === "string") {
    if (value.includes("{c:")) for (const node of parseInline(value)) if (node.kind === "citation") node.ids.forEach((id) => found.add(id));
  } else if (Array.isArray(value)) {
    for (const item of value) citationsOf(item, found);
  } else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      if (key === "citations" && Array.isArray(item)) item.forEach((id) => typeof id === "string" && found.add(id));
      else citationsOf(item, found);
    }
  }
  return found;
}

function cutAtSentences(paragraph) {
  if (paragraph.length <= CUT_ABOVE_CHARS) return [paragraph];
  const parts = [];
  let rest = paragraph;
  while (rest.length > PART_MAX_CHARS) {
    const window = rest.slice(0, PART_MAX_CHARS);
    const boundary = Math.max(window.lastIndexOf(". "), window.lastIndexOf("? "), window.lastIndexOf("! "), window.lastIndexOf("; "));
    const at = boundary > PART_MAX_CHARS * 0.4 ? boundary + 1 : window.lastIndexOf(" ");
    const cut = at > 0 ? at : PART_MAX_CHARS;
    parts.push(rest.slice(0, cut).trim());
    rest = rest.slice(cut).trim();
  }
  if (rest) parts.push(rest);
  return parts;
}

function readFatherFiles(root) {
  const files = [];
  if (!existsSync(root)) return files;
  for (const work of readdirSync(root).filter((name) => statSync(resolve(root, name)).isDirectory())) {
    for (const name of readdirSync(resolve(root, work)).filter((entry) => entry.endsWith(".json"))) {
      const buffer = readFileSync(resolve(root, work, name));
      files.push({ file: JSON.parse(buffer.toString("utf8")), sha256: sha256(buffer) });
    }
  }
  return files;
}

export function fatherRows() {
  const englishFiles = readFatherFiles(FATHERS);
  const spanishFiles = readFatherFiles(FATHERS_ES);
  const workList = englishFiles.map(({ file }) => ({ id: file.work.id, author: file.work.author, title: file.work.title }));
  const fatherOfWork = fatherIdsByWork(workList);
  const rows = [];
  for (const { file } of [...englishFiles, ...spanishFiles]) {
    const { work, edition } = file;
    const author = fatherOfWork.get(work.id) ?? null;
    const year = fatherYearOf(work.id, author);
    const draft = edition.status === "draft";
    const translatedByAi = Boolean(edition.translatedFrom);
    const base = [edition.translator, edition.year].filter(Boolean).join(", ");
    for (const division of file.divisions) {
      const paragraphs = division.text
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
        .flatMap(cutAtSentences);
      paragraphs.forEach((text, part) => {
        rows.push({
          source_key: `fathers:${work.id}:${edition.id}:${division.locator}:${part}`,
          collection: "fathers",
          speaker: "shared",
          doctrine: null,
          lang: edition.lang,
          work_id: work.id,
          edition_id: edition.id,
          locator: division.locator,
          part,
          author,
          year,
          title: work.title,
          edition_label: `${base}${draft ? DRAFT_MARK : ""}`,
          licence: licenceOfEdition(edition.licence),
          translated_by_ai: translatedByAi,
          max_quote_words: maxQuoteWordsFor(licenceOfEdition(edition.licence)),
          href: null,
          refs: [],
          text,
        });
      });
    }
  }
  return { rows, files: [...englishFiles, ...spanishFiles].map((entry) => entry.sha256).sort() };
}

const subjects = {
  eucharist: "la Eucaristía",
  justification: "la justificación",
  baptism: "el bautismo",
  papacy: "el papado",
  "sola-scriptura": "Sola Scriptura",
};

function excerptRows(page, citationIds) {
  const rows = [];
  for (const id of [...citationIds].sort()) {
    const citation = registry.citations[id];
    if (!citation || citation.kind !== "source") continue;
    const work = registry.works[citation.work];
    if (!work || speakerOfWork(work.speaker) !== page.tradition) continue;
    const locator = formatLocator(citation.locator, "es");
    citation.excerpts.forEach((excerpt, index) => {
      for (const lang of ["es", "en"]) {
        const passage = excerpt[lang];
        if (!passage?.text) continue;
        const edition = registry.editions[passage.edition];
        const licence = licenceOfEdition(edition?.licence ?? "unconfirmed");
        rows.push({
          source_key: `tradition:${page.doctrine}:${page.tradition}:cite:${id}:${index}:${lang}`,
          collection: "tradition",
          speaker: page.tradition,
          doctrine: page.doctrine,
          lang,
          work_id: null,
          edition_id: passage.edition,
          locator: locator || null,
          part: null,
          author: null,
          year: citation.date?.year ?? work.date?.year ?? null,
          title: work.title,
          edition_label: edition?.bibliography ?? passage.edition,
          licence,
          translated_by_ai: passage.translation === "ai-assisted",
          max_quote_words: maxQuoteWordsFor(licence),
          href: null,
          refs: [],
          text: passage.text.trim(),
        });
      }
    });
  }
  return rows;
}

export function traditionRows() {
  const rows = [];
  for (const page of Object.values(spanishPages)) {
    const base = {
      collection: "tradition",
      speaker: page.tradition,
      doctrine: page.doctrine,
      lang: "es",
      work_id: null,
      edition_id: null,
      locator: null,
      part: null,
      author: null,
      year: null,
      edition_label: "Doctrina, páginas de tradición" + (page.status === "draft" ? DRAFT_MARK : ""),
      licence: "site-authored",
      translated_by_ai: false,
      max_quote_words: maxQuoteWordsFor("site-authored"),
      href: null,
    };
    const scriptureRefs = page.scripture.flatMap((passage) => passage.refs);
    const definition = page.teach.definition;
    rows.push({
      ...base,
      source_key: `tradition:${page.doctrine}:${page.tradition}:definition`,
      title: withContractions(`Definición de ${subjects[page.doctrine]}`),
      refs: [...new Set([...versesOf(definition.text), ...scriptureRefs])],
      text: plainOf(definition.text),
    });
    for (const statement of page.teach.statements) {
      rows.push({
        ...base,
        source_key: `tradition:${page.doctrine}:${page.tradition}:${statement.id}`,
        title: statement.short,
        refs: [...new Set(versesOf(statement.text))],
        text: plainOf(statement.text),
      });
    }
    page.scripture.forEach((passage, index) => {
      const text = plainOf(passage.text);
      if (!text) return;
      rows.push({
        ...base,
        source_key: `tradition:${page.doctrine}:${page.tradition}:scripture:${index}`,
        title: formatVerseRef(passage.refs, "es"),
        refs: [...new Set(passage.refs)],
        text,
      });
    });
    rows.push(...excerptRows(page, citationsOf(page)));
  }
  return rows;
}

export function doctrineRows() {
  const rows = [];
  for (const page of Object.values(spanishDoctrinePages)) {
    const base = {
      collection: "doctrine",
      speaker: "site",
      doctrine: page.doctrine,
      lang: "es",
      work_id: null,
      edition_id: null,
      locator: null,
      part: null,
      author: null,
      year: null,
      edition_label: "Doctrina, páginas de doctrina" + (page.status === "draft" ? DRAFT_MARK : ""),
      licence: "site-authored",
      translated_by_ai: false,
      max_quote_words: maxQuoteWordsFor("site-authored"),
      href: null,
      refs: [],
    };
    rows.push({
      ...base,
      source_key: `doctrine:${page.doctrine}:common:common`,
      title: `Lo que todas las tradiciones comparten sobre ${subjects[page.doctrine]}`,
      text: plainOf(page.common.text),
    });
    for (const item of page.connected.items) {
      rows.push({
        ...base,
        source_key: `doctrine:${page.doctrine}:connected:${item.doctrine}`,
        title: `${subjects[page.doctrine]} y ${subjects[item.doctrine]}`.replace(/^./, (first) => first.toUpperCase()),
        text: plainOf(item.text),
      });
    }
  }
  return rows;
}

export function glossaryRows() {
  const glossary = JSON.parse(readFileSync(GLOSSARY, "utf8"));
  const rows = [];
  for (const term of glossary.terms) {
    const slug = slugOf(term.name);
    for (const entry of term.traditions) {
      const usable = entry.entries.filter((item) => !item.notFound && item.quote && (item.lang === "es" || item.lang === "en"));
      const seen = new Set();
      for (const item of usable) {
        if (seen.has(item.lang)) continue;
        seen.add(item.lang);
        const licence = licenceOfGlossary(item.licence);
        const first = seen.size === 1;
        rows.push({
          source_key: `glossary:${slug}:${entry.tradition}${first ? "" : `:${item.lang}`}`,
          collection: "glossary",
          speaker: entry.tradition,
          doctrine: term.doctrines[0] ?? null,
          lang: item.lang,
          work_id: null,
          edition_id: null,
          locator: item.source ?? entry.context ?? null,
          part: null,
          author: null,
          year: null,
          title: term.name,
          edition_label: `${item.edition ?? "Glosario de Doctrina"}${DRAFT_MARK}`,
          licence,
          translated_by_ai: item.aiTranslated === true,
          max_quote_words: maxQuoteWordsFor(licence),
          href: null,
          refs: [],
          text: item.quote.replace(/^[«"“]+|[»"”]+$/g, "").trim(),
        });
      }
    }
  }
  return rows.filter((row) => row.text.length > 0);
}

export function buildAllRows() {
  const fathers = fatherRows();
  const editorial = [...traditionRows(), ...doctrineRows(), ...glossaryRows()];
  const rows = [...fathers.rows, ...editorial];
  const keys = new Set();
  for (const row of rows) {
    if (keys.has(row.source_key)) throw new Error(`duplicate source_key ${row.source_key}`);
    keys.add(row.source_key);
    if (row.text.length > 4000) throw new Error(`text over 4000 characters at ${row.source_key}`);
    if (!row.text) throw new Error(`empty text at ${row.source_key}`);
  }
  const bibleHashes = JSON.parse(readFileSync(BIBLES, "utf8")).map((source) => source.sha256);
  const editorialHash = sha256(Buffer.from(JSON.stringify(editorial)));
  const corpusVersion = sha256(Buffer.from([...fathers.files, ...bibleHashes, editorialHash].join("|"))).slice(0, 16);
  return { rows, corpusVersion };
}

export function summarize(rows) {
  const groups = new Map();
  let chars = 0;
  for (const row of rows) {
    chars += row.text.length;
    const key = `${row.collection}/${row.speaker}`;
    groups.set(key, (groups.get(key) ?? 0) + 1);
  }
  const byCollection = new Map();
  for (const row of rows) byCollection.set(row.collection, (byCollection.get(row.collection) ?? 0) + 1);
  return { groups: [...groups].sort(), byCollection: [...byCollection].sort(), megabytes: chars / 1_000_000 };
}

function* batches(rows) {
  let batch = [];
  let bytes = 0;
  for (const row of rows) {
    const size = JSON.stringify(row).length;
    if (batch.length > 0 && (batch.length >= BATCH_ROWS || bytes + size > BATCH_BYTES)) {
      yield batch;
      batch = [];
      bytes = 0;
    }
    batch.push(row);
    bytes += size;
  }
  if (batch.length > 0) yield batch;
}

async function existingKeys(client) {
  const keys = [];
  for (let offset = 0; ; offset += 1000) {
    const page = await (await rest(client, `ai_passages?select=source_key&order=id&limit=1000&offset=${offset}`)).json();
    keys.push(...page.map((row) => row.source_key));
    if (page.length < 1000) return keys;
  }
}

function onlyCollections() {
  const flag = process.argv.find((arg) => arg.startsWith("--collections="));
  return flag ? flag.slice("--collections=".length).split(",") : null;
}

async function load(rows, corpusVersion) {
  const client = credentials();
  try {
    await rest(client, "ai_passages?select=id&limit=1");
  } catch (error) {
    throw new Error(`ai_passages is not reachable (migration 20261106100100 applied?): ${error.message.slice(0, 160)}`);
  }
  const only = onlyCollections();
  const inScope = (key) => only === null || only.includes(key.split(":")[0]);
  const wanted = new Set(rows.map((row) => row.source_key));
  const stale = (await existingKeys(client)).filter((key) => inScope(key) && !wanted.has(key));
  const sent = rows.filter((row) => inScope(row.source_key));
  let written = 0;
  for (const batch of batches(sent.map((row) => ({ ...row, corpus_version: corpusVersion })))) {
    await rest(client, "ai_passages?on_conflict=source_key", {
      method: "POST",
      body: batch,
      prefer: "resolution=merge-duplicates,return=minimal",
    });
    written += batch.length;
    if (written % 5000 < BATCH_ROWS) console.log(`  upserted ${written} / ${sent.length}`);
  }
  for (let start = 0; start < stale.length; start += 40) {
    const list = stale
      .slice(start, start + 40)
      .map((key) => `"${key.replaceAll('"', '\\"')}"`)
      .join(",");
    await rest(client, `ai_passages?source_key=in.(${encodeURIComponent(list)})`, { method: "DELETE" });
  }
  await rest(client, "ai_settings?id=eq.1", { method: "PATCH", body: { corpus_version: corpusVersion } });
  const after = await count(client, "ai_passages?select=id");
  if (after !== rows.length) throw new Error(`${after} rows in the database, expected ${rows.length}`);
  console.log(`loaded ${written} rows, deleted ${stale.length} vanished keys, corpus_version ${corpusVersion}`);
}

async function main() {
  const { rows, corpusVersion } = buildAllRows();
  const summary = summarize(rows);
  console.log(`rows: ${rows.length}, raw text ${summary.megabytes.toFixed(1)} MB, corpus_version ${corpusVersion}`);
  for (const [collection, total] of summary.byCollection) console.log(`  ${collection}: ${total}`);
  for (const [group, total] of summary.groups) console.log(`    ${group}: ${total}`);
  console.log(`estimated table and indexes: ~${(summary.megabytes * STORED_PER_RAW).toFixed(0)} MB`);
  if (!process.argv.includes("--load")) {
    console.log("dry run: nothing sent");
    return;
  }
  await load(rows, corpusVersion);
}

if (import.meta.main) await main();
