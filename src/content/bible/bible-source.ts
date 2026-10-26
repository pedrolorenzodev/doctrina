import type { BibleTranslation, BibleVerse, ChapterSummary } from "@/content/model/bible";

export type BibleSource = {
  translations(): Promise<BibleTranslation[]>;
  chapterIndex(translationId: string): Promise<ChapterSummary[]>;
  chapterVerses(translationId: string, book: string, chapter: number): Promise<BibleVerse[]>;
  verse(translationId: string, book: string, chapter: number, verse: number): Promise<BibleVerse | null>;
};
