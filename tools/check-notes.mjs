import { clippedQuote, createNote, draftOf, isNote, notesAtVerse, removeNote, saveNoteText } from "../src/lib/notes.ts";

const failures = [];
const check = (name, ok, detail = "") => {
  if (!ok) failures.push(`${name}${detail ? `: ${detail}` : ""}`);
};

const key = { book: "John", chapter: 6, translationId: "rv1909" };
const unit = { scope: "unit", verse: 53, verseTo: 53, from: null, to: null, quote: null };
const words = { scope: "words", verse: 53, verseTo: 55, from: 5, to: 9, quote: "Jesús les dijo" };

let list = [createNote(unit, key, "primera", 10, "a")];
list = [...list, createNote(words, { ...key, translationId: "bsb" }, "segunda", 20, "b")];
list = [...list, createNote({ ...unit, verse: 54, verseTo: 54 }, key, "otra", 5, "c")];

check(
  "notes at a verse are those anchored there, any translation, oldest first",
  notesAtVerse(list, key, 53)
    .map((n) => n.id)
    .join() === "a,b",
);
check("a verse with none gives none", notesAtVerse(list, key, 60).length === 0);
check("another chapter does not show", notesAtVerse(list, { book: "John", chapter: 7 }, 53).length === 0);
check(
  "saving changes the text and the time only",
  (() => {
    const next = saveNoteText(list, "a", "nueva", 99);
    const n = next.find((x) => x.id === "a");
    return (
      n.text === "nueva" &&
      n.updatedAt === 99 &&
      n.createdAt === 10 &&
      next.find((x) => x.id === "b").text === "segunda"
    );
  })(),
);
check(
  "removing takes one note",
  removeNote(list, "b")
    .map((n) => n.id)
    .join() === "a,c",
);
check("a note keeps the translation it was written in", list.find((n) => n.id === "b").translationId === "bsb");
check(
  "a words note keeps its quote and offsets",
  (() => {
    const n = list.find((x) => x.id === "b");
    return n.quote === "Jesús les dijo" && n.from === 5 && n.to === 9 && n.verseTo === 55;
  })(),
);
check("a draft is rebuilt from a note", JSON.stringify(draftOf(list[1])) === JSON.stringify(words));
check("a whole-source note has no draft", draftOf({ ...list[0], scope: "source", verse: null }) === null);
check(
  "a long quote is clipped with an ellipsis",
  clippedQuote("x".repeat(100)).length === 81 && clippedQuote("x".repeat(100)).endsWith("…"),
);
check("a short quote is untouched", clippedQuote("poco") === "poco");
check("a valid note passes", list.every(isNote));
for (const [name, bad] of [
  ["no text", { ...list[0], text: undefined }],
  ["an unknown scope", { ...list[0], scope: "page" }],
  ["a unit note without a verse", { ...list[0], verse: null }],
  ["a string chapter", { ...list[0], chapter: "6" }],
  ["a number quote", { ...list[1], quote: 5 }],
  ["null", null],
])
  check(`the validator rejects ${name}`, !isNote(bad));
check("a source note without a verse is valid", isNote({ ...list[0], scope: "source", verse: null, verseTo: null }));

if (failures.length > 0) {
  for (const failure of failures) console.error(`FAIL ${failure}`);
  process.exit(1);
}
console.log("check-notes: ok");
