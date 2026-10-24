import { InlineSyntaxError, parseInline, referencesIn } from "../src/lib/inline-refs.ts";

const text = (t) => ({ kind: "text", text: t });

const parses = [
  ["", []],
  ["plain", [text("plain")]],
  [
    "a {c:T21c1|Trento, ses. XXI, cap. 1} b",
    [text("a "), { kind: "citation", ids: ["T21c1"], label: "Trento, ses. XXI, cap. 1" }, text(" b")],
  ],
  [
    "{c:CEC1373,CEC1374|Catecismo 1373-1374}",
    [{ kind: "citation", ids: ["CEC1373", "CEC1374"], label: "Catecismo 1373-1374" }],
  ],
  ["{v:John.6.53,John.6.54}", [{ kind: "verse", osis: ["John.6.53", "John.6.54"] }]],
  ["{s:early-witnesses|Lo que escribieron}", [{ kind: "section", id: "early-witnesses", label: "Lo que escribieron" }]],
  ["{g:transubstantiation}", [{ kind: "glossary", id: "transubstantiation", label: null }]],
  ["{g:real-presence|presencia real}", [{ kind: "glossary", id: "real-presence", label: "presencia real" }]],
  [
    "«{v:Heb.10.14}» y {v:Heb.10.18}.",
    [
      text("«"),
      { kind: "verse", osis: ["Heb.10.14"] },
      text("» y "),
      { kind: "verse", osis: ["Heb.10.18"] },
      text("."),
    ],
  ],
];

const fails = [
  "{c:T21c1}",
  "{c:|label}",
  "{c:A,|label}",
  "{v:John.6.53|label}",
  "{s:a,b|label}",
  "{x:thing|label}",
  "{c:T21c1|label",
  "stray } brace",
  "stray { brace",
  "{c:A|one|two}",
];

let failures = 0;

for (const [source, expected] of parses) {
  const got = JSON.stringify(parseInline(source));
  if (got !== JSON.stringify(expected)) {
    failures += 1;
    console.error(`FAIL parse ${JSON.stringify(source)}\n  expected ${JSON.stringify(expected)}\n  got      ${got}`);
  }
}

for (const source of fails) {
  try {
    parseInline(source);
    failures += 1;
    console.error(`FAIL should throw: ${JSON.stringify(source)}`);
  } catch (error) {
    if (!(error instanceof InlineSyntaxError)) {
      failures += 1;
      console.error(`FAIL wrong error for ${JSON.stringify(source)}: ${error}`);
    }
  }
}

const refs = referencesIn(parseInline("{c:A,B|x} {v:John.6.53} {s:s1|y} {g:g1}"));
if (
  JSON.stringify(refs) !==
  JSON.stringify({ citations: ["A", "B"], verses: ["John.6.53"], sections: ["s1"], glossary: ["g1"] })
) {
  failures += 1;
  console.error(`FAIL referencesIn: ${JSON.stringify(refs)}`);
}

const total = parses.length + fails.length + 1;
if (failures > 0) {
  console.error(`${failures} of ${total} inline reference cases failed.`);
  process.exit(1);
}
console.log(`Inline references: ${total} cases passed.`);
