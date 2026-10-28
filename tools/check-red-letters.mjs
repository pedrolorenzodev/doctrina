import { redSpansOf } from "../src/content/bible/red-letters.ts";

const failures = [];
const check = (name, ok, detail = "") => {
  if (!ok) failures.push(`${name}${detail ? `: ${detail}` : ""}`);
};
const shape = (text, spans) => spans.map(([from, to]) => text.slice(from, to));

const verse = "Jesus said to them, “I am the bread of life. Whoever comes to me will not be hungry.”";
check(
  "a phrase with odd spacing is found in the text",
  shape(verse, redSpansOf(verse, ["“ I am the bread of life. Whoever comes to me will not be hungry.”"])).join() ===
    "“I am the bread of life. Whoever comes to me will not be hungry.”",
);

const two = "But he said to them, “It is I. Don’t be afraid.”";
check(
  "two phrases split by a space become one span",
  shape(two, redSpansOf(two, ["“ It is I.", "Don’ t be afraid.”"])).join() === "“It is I. Don’t be afraid.”",
);

const apart = "He said, “Go.” Then they went, and he said, “Stay.”";
check("two phrases apart stay two spans", shape(apart, redSpansOf(apart, ["“ Go.”", "“ Stay.”"])).length === 2);

const supplied = "Blessed [are] the poor in spirit: for theirs is the kingdom of heaven.";
check(
  "supplied words in brackets do not break the match",
  shape(
    supplied,
    redSpansOf(supplied, ["Blessed are the poor in spirit: for theirs is the kingdom of heaven."]),
  ).join() === supplied,
);

check("a phrase that is not there is skipped", redSpansOf(verse, ["Something else entirely"]).length === 0);
check("an empty list gives no span", redSpansOf(verse, []).length === 0);
check(
  "spans are offsets into the original text",
  redSpansOf(two, ["Don’ t be afraid.”"])[0]?.[0] === two.indexOf("Don’t"),
);

if (failures.length > 0) {
  console.error(failures.map((failure) => `FAIL ${failure}`).join("\n"));
  process.exit(1);
}
console.log("red-letters: ok");
