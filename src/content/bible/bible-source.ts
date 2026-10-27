import type { BibleTranslation, BibleVerse, ChapterStructure, ChapterSummary } from "@/content/model/bible";

export type BibleSource = {
  translations(): Promise<BibleTranslation[]>;
  chapterIndex(translationId: string): Promise<ChapterSummary[]>;
  chapterVerses(translationId: string, book: string, chapter: number): Promise<BibleVerse[]>;
  chapterStructure(translationId: string, book: string, chapter: number): Promise<ChapterStructure | null>;
  verse(translationId: string, book: string, chapter: number, verse: number): Promise<BibleVerse | null>;
};
