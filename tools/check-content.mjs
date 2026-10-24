import { spanishPages } from "@/content/pages/index";
import { registry } from "@/content/registry/index";
import { validateContent } from "@/content/validate";

const errors = validateContent(registry, spanishPages);

if (errors.length > 0) {
  for (const error of errors.slice(0, 40)) console.error(`FAIL ${error}`);
  console.error(`${errors.length} content problems.`);
  process.exit(1);
}

const mutations = [
  [
    "unknown citation in a structured field",
    (r, p) => (p.teach.statements[0].sources[0].citations[0] = "NOPE"),
    "unknown citation NOPE",
  ],
  ["unknown citation in prose", (r, p) => (p.teach.statements[0].text += " {c:NOPE|x}"), "unknown citation NOPE"],
  [
    "unknown verse in prose",
    (r, p) => (p.teach.statements[0].text += " {v:John.99.99}"),
    "verse John.99.99 not in registry",
  ],
  ["unknown verse in a passage", (r, p) => (p.scripture[0].refs[0] = "Gen.99.1"), "verse Gen.99.1 not in registry"],
  ["unknown section", (r, p) => (p.teach.statements[0].text += " {s:nowhere|x}"), "unknown section nowhere"],
  ["glossary token", (r, p) => (p.teach.statements[0].text += " {g:term}"), "no glossary entry term"],
  ["malformed token", (r, p) => (p.teach.statements[0].text += " {c:A}"), "citation without label"],
  ["review language", (r, p) => (p.teach.statements[0].text += " Ver el dosier."), "review language"],
  ["duplicate statement id", (r, p) => (p.teach.statements[1].id = p.teach.statements[0].id), "duplicate id"],
  ["objection missing from the order", (r, p) => p.objections.order.pop(), "missing"],
  ["edition of another work", (r) => (Object.values(r.editions)[0].works = ["trent-nope"]), "unknown work"],
  [
    "passage in the wrong edition",
    (r) => {
      const citation = Object.values(r.citations).find((c) => c.excerpts[0]?.es);
      citation.excerpts[0].es.edition = "nope";
    },
    "unknown edition nope",
  ],
];

let failures = 0;
for (const [label, mutate, expected] of mutations) {
  const r = structuredClone(registry);
  const p = structuredClone(spanishPages);
  mutate(r, p["eucharist/catholic"]);
  const found = validateContent(r, p);
  if (!found.some((message) => message.includes(expected))) {
    failures += 1;
    console.error(
      `FAIL validator missed: ${label} (expected «${expected}», got ${found.length ? found[0] : "nothing"})`,
    );
  }
}
if (failures > 0) process.exit(1);

const citations = Object.keys(registry.citations).length;
const verses = Object.keys(registry.verses).length;
console.log(
  `Content: ${Object.keys(spanishPages).length} page, ${citations} citations, ${verses} verses valid; ${mutations.length} validator fixtures passed.`,
);
