import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const traditions = ["catholic", "orthodox", "lutheran", "reformed", "baptist"];
const camel = (id) => id.replace(/-(\w)/g, (_, c) => c.toUpperCase());

function witnessEntry(shared, src) {
  const lines = shared.split("\n");
  const start = lines.findIndex((line) => line.startsWith(`**${src} ·`));
  if (start < 0) throw new Error(`no witness entry ${src}`);
  const block = [];
  for (let i = start + 1; i < lines.length && lines[i].trim() !== ""; i++) block.push(lines[i]);
  const spanish = block.find((line) => line.startsWith("Spanish ("));
  if (!spanish) throw new Error(`${src}: no Spanish line`);
  const parts = [...spanish.matchAll(/«([^»]*)»/g)].map((match) => match[1].trim());
  if (parts.length === 0) throw new Error(`${src}: no Spanish quote`);
  return parts.join(" [...] ");
}

function objectionTitles(doctrine, tradition) {
  const file = join(root, "docs/research/doctrines", doctrine, `${tradition}.objections.md`);
  if (!existsSync(file)) throw new Error(`no objections file for ${doctrine}/${tradition}`);
  return [...readFileSync(file, "utf8").matchAll(/^### OB-[\w-]+ · (.+)$/gm)].map((match) => match[1].trim());
}

async function traditionPage(doctrine, tradition) {
  const loaded = await import(pathToFileURL(join(root, "apps/web/src/content/pages", doctrine, `${tradition}.es.ts`)).href);
  return Object.values(loaded)[0];
}

async function answers(doctrine, authored) {
  const items = [];
  for (const entry of authored) {
    const page = await traditionPage(doctrine, entry.tradition);
    let grade;
    if (entry.grade) grade = { grade: entry.grade, basis: entry.basis };
    else {
      const definition = page.authority.grades[entry.gradeId];
      if (!definition) throw new Error(`${doctrine}/${entry.tradition}: no grade ${entry.gradeId}`);
      const { label, definition: text, source } = definition;
      grade = { basis: entry.basis, definition: { label, definition: text, source } };
    }
    const official = page.objections.items.filter((item) => item.layer === "official");
    const objections =
      official.length > 0
        ? official.map((item) => ({ id: item.id }))
        : objectionTitles(doctrine, entry.tradition).map((title) => ({ title }));
    items.push({ tradition: entry.tradition, summary: entry.summary, grade, objections });
  }
  return items;
}

function witnesses(shared, authored) {
  return authored.map(({ src, ...witness }) => {
    const { id, entity, author, work, locator, date, ...rest } = witness;
    return { id, entity, author, work, locator, date, quote: witnessEntry(shared, src), ...rest };
  });
}

function practice(authored) {
  return authored.map((aspect) => ({
    id: aspect.id,
    label: aspect.label,
    cells: Object.fromEntries(
      traditions.map((tradition) => {
        const cell = aspect.cells[tradition];
        if (!cell) throw new Error(`practice ${aspect.id}: no cell for ${tradition}`);
        const [text, label, citations = []] = cell;
        return [tradition, { text, sources: [{ citations, label }] }];
      }),
    ),
  }));
}

function connected(authored) {
  return authored.map(([doctrine, text]) => ({ doctrine, text }));
}

function fingerprint(authored) {
  const marks = authored.map(([year, yearEnd, label, circa]) => ({
    year,
    ...(yearEnd ? { yearEnd } : {}),
    ...(circa ? { circa: true } : {}),
    label,
  }));
  return { marks: marks.sort((a, b) => a.year - b.year || (a.yearEnd ?? 0) - (b.yearEnd ?? 0)) };
}

export async function buildPage(doctrine) {
  const jsonFile = join(root, "data/doctrine", `${doctrine}.02.json`);
  if (existsSync(jsonFile)) return JSON.parse(readFileSync(jsonFile, "utf8"));
  const source = (await import(pathToFileURL(join(root, "data/doctrine", `${doctrine}.02.mjs`)).href)).default;
  const shared = readFileSync(join(root, "docs/research/doctrines", doctrine, "shared.md"), "utf8");
  return {
    doctrine,
    status: "draft",
    lede: source.lede,
    legend: source.legend,
    fingerprint: fingerprint(source.fingerprint),
    common: source.common,
    answers: { subtitle: source.answersSubtitle, items: await answers(doctrine, source.answers) },
    witnesses: { subtitle: source.witnessesSubtitle, historyLink: source.historyLink, items: witnesses(shared, source.witnesses) },
    practice: { subtitle: source.practiceSubtitle, aspects: practice(source.practice) },
    connected: { subtitle: source.connectedSubtitle, items: connected(source.connected) },
  };
}

export function renderPage(doctrine, page) {
  const name = `${camel(doctrine)}Doctrine`;
  const code = [
    'import type { DoctrinePage } from "@doctrina/core/model/doctrine-page";',
    'import type { CitationId } from "@/content/registry/citations";',
    "",
    `export const ${name} = ${JSON.stringify(page)} satisfies DoctrinePage<CitationId>;`,
    "",
  ].join("\n");
  return execFileSync("npx", ["prettier", "--stdin-filepath", "doctrine.es.ts"], { cwd: root, input: code, encoding: "utf8" });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [doctrine, outDir] = process.argv.slice(2);
  if (!doctrine) throw new Error("usage: convert-doctrine.mjs <doctrine> [outDir]");
  const out = join(outDir ?? join(root, "apps/web/src/content/pages"), doctrine);
  mkdirSync(out, { recursive: true });
  writeFileSync(join(out, "doctrine.es.ts"), renderPage(doctrine, await buildPage(doctrine)));
}
