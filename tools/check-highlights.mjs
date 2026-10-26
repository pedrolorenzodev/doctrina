import { snapToWords } from "../src/lib/word-snap.ts";
import {
  addHighlight,
  chosenColor,
  colorsIn,
  hasHighlightIn,
  isCovered,
  isHighlight,
  removeRange,
  removeVerse,
  segmentsOf,
} from "../src/lib/highlights.ts";

const failures = [];
const check = (name, ok, detail = "") => {
  if (!ok) failures.push(`${name}${detail ? `: ${detail}` : ""}`);
};

const key = { translationId: "rv1909", book: "John", chapter: 6, verse: 53 };
const other = { ...key, verse: 54 };
const mark = (from, to, color, at = 1) => ({ ...key, from, to, color, at });
const shape = (list, k = key) => segmentsOf(list, k, 100).map((s) => `${s.from}-${s.to}:${s.color ?? "none"}`);

let list = addHighlight([], mark(0, 100, "yellow"));
check("a whole verse is one segment", shape(list).join() === "0-100:yellow");
list = addHighlight(list, mark(20, 40, "green"));
check(
  "a new colour over an old one wins and splits it",
  shape(list).join() === "0-20:yellow,20-40:green,40-100:yellow",
  shape(list).join(),
);
check("the split keeps three distinct ids", new Set(list.map((h) => h.id)).size === 3);
list = addHighlight(list, mark(40, 60, "green"));
check(
  "two of the same colour that touch merge",
  shape(list).join() === "0-20:yellow,20-60:green,60-100:yellow",
  shape(list).join(),
);
list = addHighlight(list, mark(10, 70, "green"));
check(
  "a bigger range of the same colour absorbs the smaller",
  shape(list).join() === "0-10:yellow,10-70:green,70-100:yellow",
  shape(list).join(),
);
list = removeRange(list, key, 30, 50);
check(
  "removing a range cuts it",
  shape(list).join() === "0-10:yellow,10-30:green,30-50:none,50-70:green,70-100:yellow",
  shape(list).join(),
);
check("a verse with two colours has no chosen colour", chosenColor(list, key, 0, 100) === null);
check("the chosen colour is the one inside the range", chosenColor(list, key, 12, 28) === "green");
check(
  "a range with no highlight has none",
  chosenColor(list, key, 31, 49) === null && !hasHighlightIn(list, key, 31, 49),
);
check(
  "a range touching one highlight reports it",
  colorsIn(list, key, 25, 35).join() === "green" && hasHighlightIn(list, key, 25, 35),
);

const mixed = addHighlight(addHighlight([], mark(0, 100, "pink")), { ...other, from: 0, to: 50, color: "sky", at: 2 });
check(
  "verses do not touch each other",
  shape(mixed).join() === "0-100:pink" && shape(mixed, other).join() === "0-50:sky,50-100:none",
  shape(mixed, other).join(),
);
check(
  "removing a verse leaves the others",
  removeVerse(mixed, key).length === 1 && removeVerse(mixed, key)[0].verse === 54,
);

const otherTranslation = addHighlight(addHighlight([], mark(0, 100, "pink")), {
  ...key,
  translationId: "bsb",
  from: 0,
  to: 100,
  color: "green",
  at: 3,
});
check(
  "a highlight stays in its translation",
  chosenColor(otherTranslation, key, 0, 100) === "pink" &&
    chosenColor(otherTranslation, { ...key, translationId: "bsb" }, 0, 100) === "green",
);

check(
  "a shorter text clips a range",
  segmentsOf(addHighlight([], mark(0, 100, "yellow")), key, 40)
    .map((s) => `${s.from}-${s.to}`)
    .join() === "0-40",
);
check(
  "no highlight is one empty segment",
  segmentsOf([], key, 30)
    .map((s) => `${s.from}-${s.to}:${s.color}`)
    .join() === "0-30:null",
);
check("a valid record passes", isHighlight({ ...mark(0, 5, "orange"), id: "x" }));
for (const [name, bad] of [
  ["a colour that does not exist", { ...mark(0, 5, "purple"), id: "x" }],
  ["an empty range", { ...mark(5, 5, "pink"), id: "x" }],
  ["a negative start", { ...mark(-1, 5, "pink"), id: "x" }],
  ["no id", mark(0, 5, "pink")],
  ["a string chapter", { ...mark(0, 5, "pink"), id: "x", chapter: "6" }],
  ["null", null],
])
  check(`the validator rejects ${name}`, !isHighlight(bad));

const covered = addHighlight(addHighlight([], mark(10, 40, "pink")), mark(40, 60, "green"));
check("a range inside two touching highlights is covered", isCovered(covered, key, 20, 50));
check("a range that reaches past a highlight is not", !isCovered(covered, key, 20, 70));
check("a range that starts before a highlight is not", !isCovered(covered, key, 5, 30));
check("a gap breaks the cover", !isCovered(addHighlight(covered, { ...mark(0, 5, "sky") }), key, 0, 50));
check("an empty list covers nothing", !isCovered([], key, 0, 10));

const sample = "Porque mi carne es verdadera comida, y mi sangre es verdadera bebida.";
const snap = (from, to) => JSON.stringify(snapToWords(sample, from, to));
check("a selection inside words grows to whole words", snap(3, 9) === "[0,9]", snap(3, 9));
check("a selection that is already whole words stays", snap(10, 15) === "[10,15]", snap(10, 15));
check("leading and trailing spaces are trimmed", snap(6, 16) === "[7,15]", snap(6, 16));
const comida = sample.indexOf("comida");
check(
  "a selection ending inside a word stops before the comma",
  snap(7, comida + 3) === `[7,${comida + 6}]`,
  snap(7, comida + 3),
);
check("only spaces select nothing", snap(6, 7) === "null", snap(6, 7));
const bebida = sample.indexOf("bebida");
check(
  "the end of the text is respected",
  snap(bebida + 2, 999) === `[${bebida},${sample.length}]`,
  snap(bebida + 2, 999),
);
check("an apostrophe keeps a word together", JSON.stringify(snapToWords("they\u2019re here", 2, 3)) === "[0,7]");
check("accents count as letters", JSON.stringify(snapToWords("Jesús dijo", 3, 4)) === "[0,5]");

if (failures.length > 0) {
  for (const failure of failures) console.error(`FAIL ${failure}`);
  process.exit(1);
}
console.log("check-highlights: ok");
