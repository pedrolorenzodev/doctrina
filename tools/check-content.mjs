import { fathers } from "@/content/history/fathers";
import { spanishDoctrinePages, spanishPages } from "@/content/pages/index";
import { registry } from "@/content/registry/index";
import { validateContent } from "@/content/validate";
import { validateDoctrinePages } from "@/content/validate-doctrine";
import { validateFathers } from "@/content/validate-history";

const errors = [
  ...validateContent(registry, spanishPages),
  ...validateDoctrinePages(registry, spanishDoctrinePages, spanishPages),
];

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
  [
    "a theme with an unknown objection",
    (r, p) => p.objections.themes[0].ids.push("OB-99"),
    "OB-99 is not an official objection",
  ],
  [
    "an objection in two themes",
    (r, p) => p.objections.themes[1].ids.push(p.objections.themes[0].ids[0]),
    "sits in 2 themes",
  ],
  ["an objection in no theme", (r, p) => p.objections.themes[0].ids.shift(), "sits in 0 themes"],
  ["duplicate theme id", (r, p) => (p.objections.themes[1].id = p.objections.themes[0].id), "duplicate theme"],
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
const doctrineMutations = [
  ["a legend witness that does not exist", (r, p) => (p.legend.witnessId = "nope"), "unknown witness nope"],
  ["marks out of date order", (r, p) => (p.fingerprint.marks[1].year = 1), "out of date order"],
  ["a mark ending before it starts", (r, p) => (p.fingerprint.marks[0].yearEnd = 10), "yearEnd must follow year"],
  ["duplicate tradition", (r, p) => (p.answers.items[1].tradition = "catholic"), "duplicate tradition"],
  [
    "unknown objection id",
    (r, p) => (p.answers.items[0].objections[0] = { id: "OB-99" }),
    "unknown official objection OB-99",
  ],
  [
    "a published tradition with an inline title",
    (r, p) => (p.answers.items[0].objections[0] = { title: "x" }),
    "links its objections by id",
  ],
  ["a published objection left out", (r, p) => p.answers.items[0].objections.pop(), "objection OB-7 is missing"],
  [
    "a grade the page lacks",
    (r, p) => (p.answers.items[0].grade = { grade: "nope", basis: "x" }),
    "the page has no grade nope",
  ],
  ["witnesses out of date order", (r, p) => (p.witnesses.items[2].date = { year: 1 }), "out of date order"],
  ["duplicate witness id", (r, p) => (p.witnesses.items[1].id = p.witnesses.items[0].id), "duplicate id"],
  [
    "a quote that is not in its paragraph",
    (r, p) => (p.witnesses.items[1].paragraph = "Otro texto."),
    "the quote is not inside its paragraph",
  ],
  [
    "a witness tied to an unknown history entity",
    (r, p) => (p.witnesses.items[0].entity = "nobody"),
    "unknown history entity nobody",
  ],
  ["a practice cell missing", (r, p) => delete p.practice.aspects[0].cells.baptist, "no cell for baptist"],
  [
    "a practice cell for a tradition without answer",
    (r, p) => (p.practice.aspects[0].cells.pentecostal = p.practice.aspects[0].cells.baptist),
    "which has no answer",
  ],
  [
    "unknown citation in a practice source",
    (r, p) => (p.practice.aspects[0].cells.catholic.sources[0].citations[0] = "NOPE"),
    "unknown citation NOPE",
  ],
  ["a doctrine connected to itself", (r, p) => (p.connected.items[0].doctrine = "eucharist"), "connected to itself"],
  ["glossary token", (r, p) => (p.common.text += " {g:term}"), "no glossary entry term"],
  ["review language", (r, p) => (p.common.text += " Ver el dosier."), "review language"],
];

for (const [label, mutate, expected] of doctrineMutations) {
  const p = structuredClone(spanishDoctrinePages);
  mutate(registry, p.eucharist);
  const found = validateDoctrinePages(registry, p, spanishPages);
  if (!found.some((message) => message.includes(expected))) {
    failures += 1;
    console.error(
      `FAIL doctrine validator missed: ${label} (expected «${expected}», got ${found.length ? found[0] : "nothing"})`,
    );
  }
}
const fatherMutations = [
  ["a duplicate father id", (list) => (list[1].id = list[0].id), "duplicate id"],
  ["an id that is not a slug", (list) => (list[0].id = "Not A Slug"), "the id is the URL slug"],
  ["an empty summary", (list) => (list[0].summary.es = " "), "an empty text"],
  ["born after died", (list) => (list[3].born = list[3].died + 1), "born must precede died"],
  ["a father with no writings", (list) => (list[0].works = []), "no writings"],
  ["a writing date with no year", (list) => (list[0].works[0].date = "sin fecha"), "has no year"],
];
for (const [label, mutate, expected] of fatherMutations) {
  const list = structuredClone(fathers);
  mutate(list);
  const found = validateFathers(list);
  if (!found.some((message) => message.includes(expected))) {
    failures += 1;
    console.error(`FAIL father validator missed: ${label} (expected «${expected}», got ${found[0] ?? "nothing"})`);
  }
}
if (validateFathers(fathers).length > 0) {
  failures += 1;
  console.error(`FAIL the real fathers are invalid: ${validateFathers(fathers)[0]}`);
}
if (failures > 0) process.exit(1);

const citations = Object.keys(registry.citations).length;
const verses = Object.keys(registry.verses).length;
console.log(
  `Content: ${Object.keys(spanishPages).length} pages, ${Object.keys(spanishDoctrinePages).length} doctrine page, ${fathers.length} fathers, ${citations} citations, ${verses} verses valid; ${mutations.length + doctrineMutations.length + fatherMutations.length} validator fixtures passed.`,
);
