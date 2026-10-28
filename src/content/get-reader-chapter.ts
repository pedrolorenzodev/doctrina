import { getBibleBook, type BibleBook } from "@/content/bible-books";
import { defaultTranslationId } from "@/content/bible/default-translation";
import { translationMeta, translationOrder } from "@/content/bible/translation-meta";
import { getBibleChapter, getBibleTranslations } from "@/content/get-bible";
import type { BibleVerse, ChapterRef, ChapterStructure } from "@/content/model/bible";
import type { Locale } from "@/lib/locale";

export type ReaderTranslationView = {
  id: string;
  abbreviation: string;
  displayName: string;
  name: string;
  language: Locale;
  versification: string;
  verses: BibleVerse[];
  structure: ChapterStructure | null;
};

export type ReaderChapter = {
  book: BibleBook;
  chapter: number;
  defaultId: string;
  views: ReaderTranslationView[];
  previous: ChapterRef | null;
  next: ChapterRef | null;
};

export async function getReaderChapter(locale: Locale, bookId: string, chapter: number): Promise<ReaderChapter | null> {
  const book = getBibleBook(bookId);
  if (!book) return null;
  const defaultId = defaultTranslationId(locale, book);
  const translations = await getBibleTranslations();
  const chapters = await Promise.all(
    translations.map((translation) => getBibleChapter(translation.id, book.id, chapter)),
  );
  const views = chapters
    .flatMap((entry) => (entry ? [entry] : []))
    .map((entry): ReaderTranslationView => {
      const meta = translationMeta[entry.translation.id];
      return {
        id: entry.translation.id,
        abbreviation: meta?.abbreviation ?? entry.translation.id,
        displayName: meta?.displayName ?? entry.translation.name,
        name: entry.translation.name,
        language: entry.translation.language,
        versification: entry.translation.versification,
        verses: entry.verses,
        structure: entry.structure,
      };
    })
    .sort((a, b) => translationOrder.findIndex((id) => id === a.id) - translationOrder.findIndex((id) => id === b.id));
  const reference = chapters.find((entry) => entry?.translation.id === defaultId);
  if (!reference) return null;
  return { book, chapter, defaultId, views, previous: reference.previous, next: reference.next };
}
