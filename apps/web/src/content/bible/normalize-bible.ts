import { bibleBooks } from "@/content/bible-books";

export const bibleVersification: Record<string, string> = {
  rv1909: "hebrew-chapters-kjv-verses",
  kjv: "kjv",
  bsb: "kjv",
  "web-c": "web",
  dra: "vulgate",
};

const bookAliases: Record<string, Record<string, string>> = {
  "web-c": { EsthGr: "Esth", DanGr: "Dan" },
};

export type BibleRow = { translationId: string; book: string; chapter: number; verse: number; text: string };

const knownBooks = new Set(bibleBooks.map((book) => book.id));

export function normalizeBibleFile(
  translationId: string,
  raw: Record<string, string>,
): { rows: BibleRow[]; errors: string[] } {
  const aliases = bookAliases[translationId] ?? {};
  const rows = new Map<string, BibleRow>();
  const errors: string[] = [];
  for (const [key, text] of Object.entries(raw)) {
    const [rawBook = "", chapter = "", verse = ""] = key.split(".");
    const book = aliases[rawBook] ?? rawBook;
    if (!knownBooks.has(book)) {
      errors.push(`${translationId}: unknown book ${rawBook} in ${key}`);
      continue;
    }
    const id = `${book}.${chapter}.${verse}`;
    if (rows.has(id)) errors.push(`${translationId}: duplicate ${id}`);
    rows.set(id, { translationId, book, chapter: Number(chapter), verse: Number(verse), text });
  }
  return { rows: [...rows.values()], errors };
}
