import { bookNames } from "@/content/verse-names";
import type { Locale } from "@/lib/locale";

export type BibleSection = "old" | "deuterocanon" | "new";

export type BibleBook = {
  id: string;
  ordinal: number;
  section: BibleSection;
  names: Record<Locale, string>;
};

const deuterocanonNames: Record<string, Record<Locale, string>> = {
  Tob: { es: "Tobías", en: "Tobit" },
  Jdt: { es: "Judit", en: "Judith" },
  Wis: { es: "Sabiduría", en: "Wisdom" },
  Sir: { es: "Eclesiástico", en: "Sirach" },
  Bar: { es: "Baruc", en: "Baruch" },
  "1Macc": { es: "1 Macabeos", en: "1 Maccabees" },
  "2Macc": { es: "2 Macabeos", en: "2 Maccabees" },
};

const protestantIds = Object.keys(bookNames);
const firstNewTestament = protestantIds.indexOf("Matt");

const ordered: { id: string; section: BibleSection; names: Record<Locale, string> }[] = [
  ...protestantIds.slice(0, firstNewTestament).map((id) => ({ id, section: "old" as const, names: bookNames[id]! })),
  ...Object.entries(deuterocanonNames).map(([id, names]) => ({ id, section: "deuterocanon" as const, names })),
  ...protestantIds.slice(firstNewTestament).map((id) => ({ id, section: "new" as const, names: bookNames[id]! })),
];

export const bibleBooks: BibleBook[] = ordered.map((book, index) => ({ ...book, ordinal: index + 1 }));

export function getBibleBook(id: string): BibleBook | undefined {
  return bibleBooks.find((book) => book.id === id);
}

const listNames: Record<string, Record<Locale, string>> = {
  Ps: { es: "Salmos", en: "Psalms" },
};

export function bookListName(book: BibleBook, locale: Locale): string {
  return listNames[book.id]?.[locale] ?? book.names[locale];
}
