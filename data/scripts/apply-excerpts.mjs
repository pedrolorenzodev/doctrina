import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { citations } from "@/content/registry/citations";
import { editions } from "@/content/registry/editions";
import { works } from "@/content/registry/works";
import { reviewVocabulary } from "@/content/validate";

const FILES = ["docs/research/sources/citation-excerpts.md", "docs/research/sources/citation-excerpts-2.md"];
const TARGET = "apps/web/src/content/registry/citations.ts";
const TODAY = "2026-11-08";
const WITHHELD = "docs/research/sources/citation-excerpts-withheld.json";
const LANGS = ["es", "en", "la", "de", "el"];
const HOLY_SEE = { cec: 100, cic: 100, sc: 100, "verbum-domini": 100, misal: 50 };
const HOLD_HOLY_SEE = process.argv.includes("--hold-holy-see");
const DRY = process.argv.includes("--dry");

const EDITION_OVERRIDES = {
  "wlc/en": "wcat.en",
  "wsc/en": "wcat.en",
  "wsc/es": "wcf.es",
  "dositheus/en": "robertson.en",
  "mogila/en": "overbeck.en",
  "wlc/es:ai": "site-translation.wlc.es",
  "wsc/es:ai": "site-translation.wsc.es",
  "dositheus/es:ai": "site-translation.dositheus.es",
  "trent/es": "trent.es",
  "sc/es": "sc.es",
};

const TRANSLATION_LEVELS = { official: "official", "printed-original": "printed-original" };

function readRecords() {
  const found = {};
  for (const file of FILES) {
    const text = readFileSync(file, "utf8");
    for (const match of text.matchAll(/```json\n([\s\S]*?)\n```/g)) {
      const record = JSON.parse(match[1]);
      if (record && !Array.isArray(record) && record.id && Array.isArray(record.excerpts)) {
        if (found[record.id]) throw new Error(`duplicate research record ${record.id}`);
        found[record.id] = { record, file };
      }
    }
  }
  return found;
}

function resolveEdition(workId, lang, passage, ai) {
  const raw = passage.edition;
  const known = editions[raw];
  if (known) {
    if (!known.works.includes(workId) || known.lang !== lang) {
      throw new Error(`edition ${raw} does not fit ${workId}/${lang}`);
    }
    return raw;
  }
  const override = EDITION_OVERRIDES[`${workId}/${lang}${ai ? ":ai" : ""}`] ?? EDITION_OVERRIDES[`${workId}/${lang}`];
  if (override) return override;
  const candidates = Object.values(editions).filter((edition) => edition.works.includes(workId) && edition.lang === lang);
  const aiOnly = candidates.filter((edition) => edition.id.startsWith("site-translation."));
  const pool = ai && aiOnly.length ? aiOnly : candidates.filter((edition) => !edition.id.startsWith("site-translation."));
  const usable = pool.length ? pool : candidates;
  if (usable.length !== 1) {
    throw new Error(`cannot resolve the edition of ${workId}/${lang}${ai ? " (ai)" : ""}: ${usable.map((e) => e.id).join(", ") || "none"}`);
  }
  return usable[0].id;
}

function buildPassage(workId, lang, source, englishEdition) {
  const ai = typeof source.translation === "string" && source.translation.startsWith("[traducción de Doctrina asistida por IA]");
  const edition = resolveEdition(workId, lang, source, ai);
  const passage = { text: source.text, edition };
  if (source.edition !== edition) passage.label = source.edition;
  if (source.page) passage.page = source.page;
  if (source.verified) passage.verified = source.verified;
  if (source.translation) {
    const level = ai ? "ai-assisted" : TRANSLATION_LEVELS[source.translation];
    if (level) passage.translation = level;
    if (!level || ai) passage.translationNote = source.translation;
  }
  if (ai && englishEdition) passage.derivedFrom = englishEdition;
  if (source.tag) passage.tag = source.tag;
  if (source.normalisation) passage.normalisation = source.normalisation;
  return passage;
}

function buildExcerpt(record, raw) {
  const excerpt = {};
  let englishEdition;
  if (raw.en) {
    const english = buildPassage(record.work, "en", raw.en, undefined);
    englishEdition = english.edition;
    excerpt.en = english;
  }
  if (raw.es) excerpt.es = buildPassage(record.work, "es", raw.es, englishEdition);
  for (const lang of LANGS.slice(2)) if (raw[lang]) excerpt[lang] = buildPassage(record.work, lang, raw[lang], undefined);
  const ordered = {};
  for (const lang of LANGS) if (excerpt[lang]) ordered[lang] = excerpt[lang];
  if (raw.at) ordered.at = raw.at;
  if (raw.note) ordered.note = raw.note;
  const source = {};
  if (raw.sourceURL) source.url = raw.sourceURL;
  if (raw.sourceLocator) source.locator = raw.sourceLocator;
  if (raw.sourceEdition) source.edition = raw.sourceEdition;
  if (raw.checkedAt) source.checkedAt = raw.checkedAt;
  if (raw.tag) source.tag = raw.tag;
  if (raw.verificationAttempt) source.verificationAttempt = raw.verificationAttempt;
  if (Object.keys(source).length) ordered.source = source;
  const corrections = [];
  if (raw.correction) corrections.push({ label: "correction", ...raw.correction });
  for (const [key, label] of [["correctionV1", "correction V1"], ["correctionV2", "correction V2"]]) {
    for (const item of raw[key] ?? []) corrections.push({ label, ...item });
  }
  if (corrections.length) ordered.corrections = corrections;
  return ordered;
}

function researchNotes(record) {
  const skip = new Set(["id", "work", "locator", "excerpts"]);
  const notes = {};
  for (const [key, value] of Object.entries(record)) if (!skip.has(key)) notes[key] = value;
  return notes;
}

function withhold(value, path, id, withheld) {
  if (Array.isArray(value)) return value.map((item, index) => withhold(item, `${path}[${index}]`, id, withheld));
  if (value && typeof value === "object") {
    const kept = {};
    for (const [key, item] of Object.entries(value)) {
      const here = `${path}.${key}`;
      if (typeof item === "string" && reviewVocabulary.test(item)) {
        if (key === "text" || key === "textBefore" || key === "textBeforeCorrection") {
          throw new Error(`${id} ${here}: quoted text matches the review vocabulary, decide by hand`);
        }
        withheld.push({ id, path: here, text: item });
      } else kept[key] = withhold(item, here, id, withheld);
    }
    return kept;
  }
  return value;
}

function wordsOf(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function pageCitations() {
  const pages = {};
  for (const doctrine of readdirSync("apps/web/src/content/pages", { withFileTypes: true })) {
    if (!doctrine.isDirectory()) continue;
    for (const file of readdirSync(`apps/web/src/content/pages/${doctrine.name}`)) {
      if (!file.endsWith(".es.ts")) continue;
      const text = readFileSync(`apps/web/src/content/pages/${doctrine.name}/${file}`, "utf8");
      const ids = new Set();
      for (const match of text.matchAll(/citations:\s*\[([^\]]*)\]/g)) {
        for (const id of match[1].matchAll(/"([^"]+)"/g)) ids.add(id[1]);
      }
      pages[`${doctrine.name}/${file.replace(".es.ts", "")}`] = ids;
    }
  }
  return pages;
}

function spanishWords(excerpts) {
  return (excerpts ?? []).reduce((sum, excerpt) => sum + (excerpt.es ? wordsOf(excerpt.es.text) : 0), 0);
}

function budget(built) {
  const pages = pageCitations();
  const rows = [];
  for (const [page, ids] of Object.entries(pages)) {
    for (const work of Object.keys(HOLY_SEE)) {
      const ofWork = [...ids].filter((id) => citations[id]?.work === work);
      if (!ofWork.length) continue;
      let existing = 0;
      let added = 0;
      const addedIds = [];
      for (const id of ofWork) {
        if (built[id]) {
          added += spanishWords(built[id].excerpts);
          addedIds.push(id);
        } else existing += spanishWords(citations[id].excerpts);
      }
      if (addedIds.length) rows.push({ page, work, cap: HOLY_SEE[work], existing, added, over: existing + added > HOLY_SEE[work], addedIds });
    }
  }
  return rows;
}

function literal(value, indent) {
  return JSON.stringify(value, null, 2).replace(/\n/g, `\n${indent}`);
}

function blockBounds(source, id) {
  const pattern = new RegExp(`\\n  (?:"${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"|${id}): \\{\\n    id: "${id}",`);
  const match = pattern.exec(source);
  if (!match) throw new Error(`citation ${id} not found in ${TARGET}`);
  const start = match.index;
  const end = source.indexOf("\n  },\n", start);
  return [start, end];
}

function replaceExcerpts(source, id, excerpts, research) {
  const [start, end] = blockBounds(source, id);
  const block = source.slice(start, end);
  const emptyLine = "    excerpts: [],";
  let next;
  if (block.includes(emptyLine)) {
    next = block.replace(emptyLine, `    excerpts: ${literal(excerpts, "    ")},`);
  } else {
    const open = block.indexOf("    excerpts: [");
    const close = block.indexOf("\n    ],", open);
    if (open < 0 || close < 0) throw new Error(`cannot find the excerpts array of ${id}`);
    next = block.slice(0, open) + `    excerpts: ${literal(excerpts, "    ")},` + block.slice(close + "\n    ],".length);
  }
  const marker = `\n    excerpts: `;
  const at = next.indexOf(marker);
  const afterExcerpts = next.indexOf("\n    date:", at);
  const insertAt = afterExcerpts > 0 ? afterExcerpts : next.length;
  next = next.slice(0, insertAt) + `\n    research: ${literal(research, "    ")},` + next.slice(insertAt);
  return source.slice(0, start) + next + source.slice(end);
}

const records = readRecords();
const empties = Object.values(citations).filter((citation) => citation.excerpts.length === 0).map((citation) => citation.id);
const repairs = ["T13c7", "T13can9"];
const report = { applied: [], held: [], repaired: [], appended: [], replaced: [], disagreements: [], missing: [] };
const built = {};
const withheld = [];

for (const id of [...empties, ...repairs]) {
  const entry = records[id];
  if (!entry) {
    report.missing.push(id);
    continue;
  }
  const { record } = entry;
  const registry = citations[id];
  const registryLocator = registry.locator.parts.map((part) => part.value).join(" ");
  if (record.work !== registry.work) report.disagreements.push(`${id}: work ${record.work} in the research, ${registry.work} in the registry`);
  if (record.locator !== registryLocator) {
    report.disagreements.push(`${id}: locator «${record.locator}» in the research, «${registryLocator}» in the registry (kept the registry's)`);
  }
  if (record.proposedEditionUpdate) {
    const existing = editions[record.proposedEditionUpdate.id];
    report.disagreements.push(
      `${id}: the research proposes edition ${record.proposedEditionUpdate.id} («${record.proposedEditionUpdate.bibliography.slice(0, 80)}…»); the registry has ${existing ? `«${existing.bibliography}»` : "no such edition"} (kept the registry's edition, proposal stored in research.proposedEditionUpdate)`,
    );
  }
  const holySee = HOLY_SEE[registry.work] !== undefined;
  if (holySee && HOLD_HOLY_SEE && empties.includes(id)) {
    report.held.push({ id, reason: "Holy See quotation budget not allocated (--hold-holy-see)" });
    continue;
  }
  const excerpts = record.excerpts.map((raw) => buildExcerpt(record, raw));
  let final = excerpts;
  if (repairs.includes(id)) {
    const notes = record.excerpts.map((raw) => raw.note ?? "").join(" ");
    if (/alongside|not as a replacement/i.test(notes)) {
      final = [...registry.excerpts, ...excerpts];
      report.appended.push(id);
    } else {
      const before = registry.excerpts.map((excerpt) => excerpt.es?.text ?? excerpt.en?.text ?? "").filter(Boolean);
      for (const excerpt of excerpts) {
        excerpt.corrections = [
          ...(excerpt.corrections ?? []),
          { label: "repair", date: TODAY, source: `${entry.file} (record ${id})`, what: "excerpt replaced by the research repair", textBefore: before },
        ];
      }
      report.replaced.push(id);
    }
  }
  const clean = withhold({ excerpts: final, research: researchNotes(record) }, id, id, withheld);
  built[id] = { excerpts: clean.excerpts, research: clean.research, repair: repairs.includes(id) };
}

let source = readFileSync(TARGET, "utf8");
for (const [id, item] of Object.entries(built)) {
  if (!item.repair) report.applied.push(id);
  else report.repaired.push(id);
  if (!DRY) source = replaceExcerpts(source, id, item.excerpts, item.research);
}
const rows = budget(built);
if (!DRY) {
  writeFileSync(TARGET, source);
  writeFileSync(WITHHELD, `${JSON.stringify(withheld, null, 2)}\n`);
  execFileSync("npx", ["prettier", "--write", TARGET], { stdio: "ignore" });
}

const byWork = {};
for (const id of report.applied) byWork[citations[id].work] = (byWork[citations[id].work] ?? 0) + 1;
console.log(JSON.stringify({ empties: empties.length, applied: report.applied.length, repaired: report.repaired, appended: report.appended, replaced: report.replaced, held: report.held, missing: report.missing, appliedByWork: byWork }, null, 1));
console.log(`WITHHELD from the registry (kept in ${WITHHELD}): ${withheld.length} strings`);
console.log("DISAGREEMENTS");
for (const line of report.disagreements) console.log(`- ${line}`);
console.log("HOLY SEE BUDGET (page, work, cap, existing words in citation windows, words added, over)");
for (const row of rows) console.log(`${row.page}\t${row.work}\tcap ${row.cap}\texisting ${row.existing}\tadded ${row.added}\t${row.over ? "OVER" : "ok"}\t${row.addedIds.join(",")}`);
void works;
