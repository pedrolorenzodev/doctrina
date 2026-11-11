import fs from "node:fs";
import { execFileSync } from "node:child_process";
import { applyPassagesLayer } from "./apologists-load.mjs";
import { FIELDS } from "./dossier-fields.mjs";
import { baptistPassages } from "./baptist-passages.mjs";

const PAGES = new URL("../../apps/web/src/content/pages/", import.meta.url).pathname;
const TOPICS = { "baptism:catholic": "el bautismo", "eucharist:catholic": "la Eucaristía" };
const camel = (id) => id.replace(/-(\w)/g, (_, c) => c.toUpperCase());
const keys = process.argv.slice(2);
const lit = (v) => JSON.stringify(v, null, 1);
const REGISTRY = new URL("../../apps/web/src/content/registry/verses.ts", import.meta.url).pathname;
const rv1909 = JSON.parse(fs.readFileSync(new URL("../corpus/bibles/rv1909.json", import.meta.url).pathname, "utf8"));
const rvKeys = Object.keys(rv1909);
function expandSegment(segment) {
  const [from, to = from] = segment.split("-");
  if (from.split(".").length === 2) return rvKeys.filter((k) => k.startsWith(from + "."));
  const a = rvKeys.indexOf(from);
  const b = rvKeys.indexOf(to);
  if (a < 0 || b < a) throw new Error("verse range not in corpus: " + segment);
  return rvKeys.slice(a, b + 1);
}
const reports = {};
const newVerses = {};
const touched = [];
for (const key of keys) {
  const [doctrine, tradition = "catholic"] = key.split(":");
  const file = `${PAGES}${doctrine}/${tradition}.es.ts`;
  const name = `${camel(doctrine)}${tradition[0].toUpperCase()}${tradition.slice(1)}`;
  const page = (await import(file))[name];
  const topic = FIELDS[`${doctrine}:${tradition}`]?.topic ?? FIELDS[doctrine]?.topic ?? TOPICS[`${doctrine}:${tradition}`];
  if (!topic) throw new Error(`no topic for ${key}`);
  const source = JSON.parse(JSON.stringify(page));
  if (tradition === "baptist") source.scripture = baptistPassages(doctrine);
  const layered = applyPassagesLayer(source, topic);
  for (const passage of layered.page.scripture) for (const ref of passage.refs) for (const verse of expandSegment(ref)) newVerses[verse] = { osis: verse, text: rv1909[verse], edition: "RV1909" };
  reports[key] = layered.report;
  fs.writeFileSync(
    file,
    `import type { TraditionPage } from "@doctrina/core/model/page";\nimport type { CitationId } from "@/content/registry/citations";\n\nexport const ${name} = ${lit(layered.page)} satisfies TraditionPage<CitationId>;\n`,
  );
  touched.push(file);
}
const existing = (await import(REGISTRY)).verses;
const missing = Object.keys(newVerses).filter((k) => !(k in existing));
if (missing.length) {
  const merged = { ...existing, ...Object.fromEntries(missing.map((k) => [k, newVerses[k]])) };
  fs.writeFileSync(REGISTRY, `import type { Verse } from "@doctrina/core/model/registry";\n\nexport const verses = ${lit(merged)} satisfies Record<string, Verse>;\n\nexport type VerseId = keyof typeof verses;\n`);
  touched.push(REGISTRY);
}
if (touched.length) execFileSync("npx", ["prettier", "--write", ...touched], { stdio: "ignore" });
console.log(JSON.stringify(reports, null, 1));
