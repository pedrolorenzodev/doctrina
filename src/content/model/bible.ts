import type { Locale } from "@/lib/locale";

export type BibleTranslation = {
  id: string;
  language: Locale;
  name: string;
  licence: string;
  versification: string;
  bookCount: number;
};

export type BibleVerse = { verse: number; text: string };

export type ChapterRef = { book: string; chapter: number };

export type ChapterSummary = ChapterRef & { verseCount: number };

export type BibleChapter = ChapterRef & {
  translation: BibleTranslation;
  verses: BibleVerse[];
  previous: ChapterRef | null;
  next: ChapterRef | null;
};
