import { spanishPages } from "@/content/pages/index";
import { loadFocus, validateFocus } from "../data/scripts/passage-focus-data.mjs";

const passage = (refs) => ({ refs, text: "" });
const fixtures = [
  [
    "a valid entry",
    [passage(["John.3.3-John.3.8"])],
    { passages: [{ refs: ["John.3.3-John.3.8"], focus: ["John.3.5"], status: "proposed" }] },
    null,
  ],
  [
    "a confirmed none",
    [passage(["John.3.3-John.3.8"])],
    { passages: [{ refs: ["John.3.3-John.3.8"], focus: [], status: "confirmed" }] },
    null,
  ],
  [
    "a verse outside the refs",
    [passage(["John.3.3-John.3.8"])],
    { passages: [{ refs: ["John.3.3-John.3.8"], focus: ["John.3.16"], status: "proposed" }] },
    "outside the passage",
  ],
  [
    "three verses in one block",
    [passage(["John.3.3-John.3.8"])],
    { passages: [{ refs: ["John.3.3-John.3.8"], focus: ["John.3.3", "John.3.4", "John.3.5"], status: "proposed" }] },
    "more than 2",
  ],
  [
    "a single-verse passage",
    [passage(["Titus.3.5"])],
    { passages: [{ refs: ["Titus.3.5"], focus: ["Titus.3.5"], status: "proposed" }] },
    "single-verse block",
  ],
  [
    "a whole block",
    [passage(["Mark.16.15-Mark.16.16"])],
    { passages: [{ refs: ["Mark.16.15-Mark.16.16"], focus: ["Mark.16.15", "Mark.16.16"], status: "proposed" }] },
    "every verse",
  ],
  [
    "an unknown passage",
    [passage(["John.3.3-John.3.8"])],
    { passages: [{ refs: ["John.3.1-John.3.2"], focus: ["John.3.1"], status: "proposed" }] },
    "not a passage",
  ],
  [
    "a bad status",
    [passage(["John.3.3-John.3.8"])],
    { passages: [{ refs: ["John.3.3-John.3.8"], focus: ["John.3.5"], status: "draft" }] },
    "status draft",
  ],
  [
    "an empty proposal",
    [passage(["John.3.3-John.3.8"])],
    { passages: [{ refs: ["John.3.3-John.3.8"], focus: [], status: "proposed" }] },
    "not confirmed",
  ],
  [
    "a duplicate",
    [passage(["John.3.3-John.3.8"])],
    {
      passages: [
        { refs: ["John.3.3-John.3.8"], focus: ["John.3.5"], status: "proposed" },
        { refs: ["John.3.3-John.3.8"], focus: ["John.3.4"], status: "proposed" },
      ],
    },
    "twice",
  ],
];

const failures = [];
for (const [name, scripture, data, expected] of fixtures) {
  const errors = validateFocus("fixture", scripture, data);
  if (expected === null && errors.length > 0) failures.push(`fixture «${name}» should pass: ${errors.join("; ")}`);
  if (expected !== null && !errors.some((e) => e.includes(expected)))
    failures.push(`fixture «${name}» should fail with «${expected}», got: ${errors.join("; ") || "nothing"}`);
}

let entries = 0;
for (const [pageKey, page] of Object.entries(spanishPages)) {
  if (!page.scripture) continue;
  const key = pageKey.replace("/", ":");
  const data = loadFocus(key);
  entries += data.passages.length;
  for (const error of validateFocus(key, page.scripture, data)) failures.push(error);
}

if (failures.length > 0) {
  for (const failure of failures.slice(0, 40)) console.error(`FAIL ${failure}`);
  console.error(`${failures.length} passage focus problems.`);
  process.exit(1);
}
console.log(`passage focus ok; entries: ${entries}`);
