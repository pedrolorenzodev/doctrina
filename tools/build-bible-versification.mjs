import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const corpusDir = join(root, "data", "corpus", "bibles");
const outFile = join(root, "apps", "web", "src", "content", "bible-reference", "versification.ts");

export const translationIds = ["rv1909", "kjv", "bsb", "dra", "web-c"];

const bookAliases = { "web-c": { EsthGr: "Esth", DanGr: "Dan" } };

export function countVersification(translationId, raw) {
  const aliases = bookAliases[translationId] ?? {};
  const chapters = new Map();
  const seen = new Set();
  for (const key of Object.keys(raw)) {
    const [rawBook, chapterText, verseText] = key.split(".");
    const book = aliases[rawBook] ?? rawBook;
    const id = `${book}.${chapterText}.${verseText}`;
    if (seen.has(id)) throw new Error(`${translationId}: duplicate ${id}`);
    seen.add(id);
    const chapter = Number(chapterText);
    const verse = Number(verseText);
    if (!Number.isInteger(chapter) || !Number.isInteger(verse)) throw new Error(`${translationId}: bad key ${key}`);
    if (!chapters.has(book)) chapters.set(book, new Map());
    const bookChapters = chapters.get(book);
    bookChapters.set(chapter, Math.max(bookChapters.get(chapter) ?? 0, verse));
  }
  const books = {};
  const gaps = {};
  for (const [book, bookChapters] of chapters) {
    const numbers = [...bookChapters.keys()].sort((a, b) => a - b);
    if (numbers.some((number, index) => number !== index + 1))
      throw new Error(`${translationId}: ${book} chapters have gaps`);
    books[book] = numbers.map((number) => bookChapters.get(number));
    numbers.forEach((chapter) => {
      const absent = [];
      for (let verse = 1; verse <= bookChapters.get(chapter); verse += 1) {
        if (!seen.has(`${book}.${chapter}.${verse}`) && !seen.has(`${rawBookOf(aliases, book)}.${chapter}.${verse}`))
          absent.push(verse);
      }
      if (absent.length > 0) gaps[`${book}.${chapter}`] = absent;
    });
  }
  return { books, gaps };
}

function rawBookOf(aliases, book) {
  return Object.keys(aliases).find((raw) => aliases[raw] === book) ?? book;
}

function main() {
  const output = {};
  for (const id of translationIds) {
    const file = join(corpusDir, `${id}.json`);
    if (!existsSync(file)) {
      console.log(`${id}: corpus missing, skipped`);
      continue;
    }
    output[id] = countVersification(id, JSON.parse(readFileSync(file, "utf8")));
    console.log(
      `${id}: ${Object.keys(output[id].books).length} books, ${Object.keys(output[id].gaps).length} chapters with gaps`,
    );
  }
  writeFileSync(
    outFile,
    `export const versification: Record<string, { books: Record<string, number[]>; gaps: Record<string, number[]> }> = ${JSON.stringify(output)};\n`,
    "utf8",
  );
}

if (process.argv[1] === new URL(import.meta.url).pathname) main();
