import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { getFatherWorks } from "@/content/get-father-works";
import { catalogue, readerIds } from "@/content/source-catalogue";
import { allFathers } from "@/content/history/all-fathers";
import { writingWorkIds } from "@/content/father-writing-links";
import { registry } from "@/content/registry/index";
import { quotes as scriptedQuotes } from "@/features/reader-ai/quotes";

const LOCALES = ["es", "en"];
const FATHER_ENTITY_WORKS = {
  didache: "didache",
  "epistle-of-barnabas": "barnabas",
  "shepherd-of-hermas": "shepherd-hermas",
  "epistle-to-diognetus": "epistle-diognetus",
};
const OWNERS = [
  "apps/web/src/content/item-names.ts",
  "apps/web/src/content/registry/",
  "apps/web/src/content/history/fathers.ts",
  "apps/web/src/content/history/",
  "apps/web/src/features/reader-ai/quotes.ts",
  "apps/web/src/content/pages/",
  "apps/web/src/content/words/",
];

export function problemsOf({
  statusIds,
  records,
  known,
  hasCorpus,
  registryIds,
  corpusAuthors,
  registryTitles,
  fatherNames,
  writingTitles,
  councils,
  scriptedQuotes,
  sourceFiles,
}) {
  const problems = [];
  const ids = Object.keys(records);
  for (const id of known) if (!records[id]) problems.push(`${id}: no canonical name in data/site/names.json`);
  if (hasCorpus)
    for (const id of ids) if (!known.has(id)) problems.push(`${id}: canonical name for an item that does not exist`);
  for (const id of ids) {
    const record = records[id];
    for (const locale of LOCALES)
      if (typeof record.name?.[locale] !== "string" || !record.name[locale].trim())
        problems.push(`${id}: missing ${locale} name`);
    if (record.short) {
      if (hasCorpus ? !corpusAuthors[id] : registryIds.has(id))
        problems.push(`${id}: a short name is only allowed on a Father's work (it needs its author beside it)`);
      for (const locale of LOCALES)
        if (record.short[locale] === record.name[locale])
          problems.push(`${id}: short name equals the full name (${locale})`);
    }
  }
  for (const locale of LOCALES) {
    const byName = new Map();
    for (const id of ids.filter((id) => !statusIds.has(id) && (hasCorpus || known.has(id)))) {
      const name = records[id].name?.[locale];
      if (!name) continue;
      const key = `${corpusAuthors[id] ?? ""}|${name}`;
      (byName.get(key) ?? byName.set(key, []).get(key)).push(id);
    }
    for (const [key, same] of byName)
      if (same.length > 1) problems.push(`${locale}: the name "${key.split("|")[1]}" belongs to ${same.join(", ")}`);
    for (const id of ids) {
      const short = records[id].short?.[locale];
      if (short && ids.some((other) => other !== id && records[other].name?.[locale] === short))
        problems.push(`${id}: short name "${short}" is the full name of another item`);
    }
  }
  for (const [id, title] of Object.entries(registryTitles))
    if (records[id] && records[id].name.es !== title)
      problems.push(`registry work ${id}: title "${title}" differs from the canonical "${records[id].name.es}"`);
  for (const [entityId, workId] of Object.entries(FATHER_ENTITY_WORKS)) {
    const entity = fatherNames[entityId];
    if (entity && records[workId] && (entity.es !== records[workId].name.es || entity.en !== records[workId].name.en))
      problems.push(
        `Father page ${entityId}: name "${entity.es}" differs from the canonical "${records[workId].name.es}"`,
      );
  }
  for (const [key, title] of Object.entries(writingTitles)) {
    const workId = key.split("#")[1];
    const record = records[workId];
    if (record && (title.es !== record.name.es || title.en !== record.name.en))
      problems.push(
        `writing ${key.split("#")[0]} lists "${title.es}" but the canonical name of ${workId} is "${record.name.es}"`,
      );
  }
  for (const id of ids) {
    const entity = records[id].entity;
    const council = entity ? councils[entity] : null;
    if (entity && !council) problems.push(`${id}: entity ${entity} does not exist in history.json`);
    else if (council && (council.es !== records[id].name.es || council.en !== records[id].name.en))
      problems.push(`${id}: name differs from the council page "${council.es}"`);
  }
  for (const [quoteId, quote] of Object.entries(scriptedQuotes))
    if (quote.sourceId && records[quote.sourceId] && quote.who !== records[quote.sourceId].name.es)
      problems.push(
        `scripted quote ${quoteId}: "${quote.who}" differs from the canonical "${records[quote.sourceId].name.es}"`,
      );
  const names = new Set(
    ids
      .flatMap((id) => LOCALES.map((locale) => records[id].name?.[locale]))
      .filter((name) => name && name.length >= 12),
  );
  for (const [path, text] of Object.entries(sourceFiles))
    for (const match of text.matchAll(/(["'`])((?:\\.|(?!\1)[^\\\n])+)\1/g))
      if (names.has(match[2]))
        problems.push(`${path}: the name "${match[2]}" is written in code; read it from names.json (itemName)`);
  return problems;
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (/\.(ts|tsx)$/.test(entry)) out.push(path);
  }
  return out;
}

const records = JSON.parse(readFileSync("data/site/names.json", "utf8"));
const corpus = await getFatherWorks();
const known = new Set([
  ...Object.keys(registry.works),
  ...corpus.map((work) => work.id),
  ...[...catalogue.keys()].filter((id) => !Object.hasOwn(readerIds, id)),
]);
const corpusAuthors = Object.fromEntries(corpus.map((work) => [work.id, work.author]));
const history = JSON.parse(readFileSync("data/site/history.json", "utf8"));
const writingTitles = {};
for (const father of allFathers)
  (writingWorkIds[father.id] ?? []).forEach((workIds, index) => {
    if (workIds.length === 1 && father.works[index])
      writingTitles[`${father.id}#${workIds[0]}`] = father.works[index].title;
  });
const model = {
  scriptedQuotes,
  statusIds: new Set(
    Object.values(registry.works)
      .filter((work) => work.kind === "status-line")
      .map((work) => work.id),
  ),
  records,
  known,
  hasCorpus: corpus.length > 0,
  registryIds: new Set(Object.keys(registry.works)),
  corpusAuthors,
  registryTitles: Object.fromEntries(Object.values(registry.works).map((work) => [work.id, work.title])),
  fatherNames: Object.fromEntries(allFathers.map((father) => [father.id, father.name])),
  writingTitles,
  councils: Object.fromEntries(history.councils.map((council) => [council.id, council.name])),
  sourceFiles: Object.fromEntries(
    walk("apps/web/src")
      .filter((path) => !OWNERS.some((owner) => path.startsWith(owner)))
      .map((path) => [path, readFileSync(path, "utf8")]),
  ),
};

const clone = () => {
  const copy = structuredClone({
    ...model,
    known: [...model.known],
    statusIds: [],
    registryIds: [...model.registryIds],
    sourceFiles: {},
  });
  return { ...copy, known: new Set(copy.known), statusIds: new Set(), registryIds: new Set(copy.registryIds) };
};
const fixtures = [
  ["a work without a canonical name", (m) => delete m.records.trent, "no canonical name"],
  ["a missing English name", (m) => (m.records.trent.name.en = ""), "missing en name"],
  [
    "two items with one name",
    (m) => (m.records["small-catechism"].name.es = m.records["large-catechism"].name.es),
    "belongs to",
  ],
  [
    "a short name on a non-Father work",
    (m) => (m.records.trent.short = { es: "Trento", en: "Trent" }),
    "only allowed on a Father's work",
  ],
  [
    "a short name that is another item's name",
    (m) => (m.records["ignatius-ephesians"].short.es = m.records.trent.name.es),
    "full name of another item",
  ],
  ["a registry title that drifted", (m) => (m.registryTitles.trent = "Trento"), "differs from the canonical"],
  [
    "a Father page name that drifted",
    (m) => (m.fatherNames["shepherd-of-hermas"].es = "El Pastor"),
    "differs from the canonical",
  ],
  ["a writing title that drifted", (m) => (m.writingTitles["clement-of-rome#1-clement"].es = "1 Clemente"), "lists"],
  ["a council name that drifted", (m) => (m.councils.trent.es = "Trento"), "differs from the council page"],
  ["a scripted quote name that drifted", (m) => (m.scriptedQuotes.phil340.who = "Filareto de Moscú"), "scripted quote"],
  [
    "a name written in code",
    (m) => (m.sourceFiles = { "apps/web/src/features/x.tsx": `const label = "${m.records.trent.name.es}";` }),
    "written in code",
  ],
];
const wrong = fixtures.filter(([, mutate, expected]) => {
  const copy = clone();
  mutate(copy);
  return !problemsOf(copy).some((problem) => problem.includes(expected));
});
if (wrong.length > 0) {
  console.error("Name check fixtures failed to fail:", wrong.map(([title]) => title).join("; "));
  process.exit(1);
}
const problems = problemsOf(model);
if (problems.length > 0) {
  for (const problem of problems.slice(0, 40)) console.error(`FAIL ${problem}`);
  console.error(`${problems.length} name problems (docs/features/names-coherence.md).`);
  process.exit(1);
}
console.log(`Names: ${Object.keys(records).length} canonical records, ${fixtures.length} fixtures failed as expected.`);
