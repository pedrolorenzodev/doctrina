import type { BibleSource } from "@/content/bible/bible-source";
import { sortChapters } from "@doctrina/core/bible/chapter-neighbors";
import { redSpansOf } from "@doctrina/core/bible/red-letters";
import type { BibleTranslation, BibleVerse, ChapterStructure, ChapterSummary } from "@doctrina/core/model/bible";
import { createSupabaseSelect } from "@/content/supabase-rest";
import type { Locale } from "@doctrina/core/locale";

const REF_CHUNK = 80;

type VerseRow = { verse: number; text: string; red: string[] | null };

type StructureRow = { sections: [number, string][]; paragraphs: number[] };

type TranslationRow = {
  id: string;
  language: Locale;
  name: string;
  licence: string;
  versification: string;
  book_count: number;
};

export function createSupabaseBibleSource(url: string, publishableKey: string): BibleSource {
  const select = createSupabaseSelect(url, publishableKey, "corpus-bible");

  const key = (value: string | number) => encodeURIComponent(String(value));

  return {
    async translations() {
      const rows = await select<TranslationRow>("translations?select=*&order=ordinal");
      return rows.map((row): BibleTranslation => ({
        id: row.id,
        language: row.language,
        name: row.name,
        licence: row.licence,
        versification: row.versification,
        bookCount: row.book_count,
      }));
    },
    async chapterIndex(translationId) {
      const rows = await select<{ book: string; chapter: number; verse_count: number }>(
        `chapters?translation_id=eq.${key(translationId)}&select=book,chapter,verse_count&order=book,chapter`,
      );
      return sortChapters(
        rows.map((row): ChapterSummary => ({ book: row.book, chapter: row.chapter, verseCount: row.verse_count })),
      );
    },
    async chapterVerses(translationId, book, chapter) {
      const rows = await select<VerseRow>(
        `verses?translation_id=eq.${key(translationId)}&book=eq.${key(book)}&chapter=eq.${chapter}&select=verse,text,red&order=verse`,
      );
      return rows.map((row): BibleVerse => {
        const spans = redSpansOf(row.text, row.red ?? []);
        return spans.length > 0
          ? { verse: row.verse, text: row.text, red: spans }
          : { verse: row.verse, text: row.text };
      });
    },
    async chapterStructure(translationId, book, chapter): Promise<ChapterStructure | null> {
      const [row] = await select<StructureRow>(
        `chapter_structure?translation_id=eq.${key(translationId)}&book=eq.${key(book)}&chapter=eq.${chapter}&select=sections,paragraphs`,
      );
      return row
        ? { sections: row.sections.map(([from, title]) => ({ from, title })), paragraphs: row.paragraphs }
        : null;
    },
    async verse(translationId, book, chapter, verse) {
      const [row] = await select<BibleVerse>(
        `verses?translation_id=eq.${key(translationId)}&book=eq.${key(book)}&chapter=eq.${chapter}&verse=eq.${verse}&select=verse,text`,
      );
      return row ?? null;
    },
    async verseTexts(translationId, refs) {
      const found = new Map<string, string>();
      const chunks: (typeof refs)[] = [];
      for (let start = 0; start < refs.length; start += REF_CHUNK) chunks.push(refs.slice(start, start + REF_CHUNK));
      await Promise.all(
        chunks.map(async (chunk) => {
          const filter = chunk
            .map((ref) => `and(book.eq.${key(ref.book)},chapter.eq.${ref.chapter},verse.eq.${ref.verse})`)
            .join(",");
          const rows = await select<{ book: string; chapter: number; verse: number; text: string }>(
            `verses?translation_id=eq.${key(translationId)}&or=(${filter})&select=book,chapter,verse,text`,
          );
          for (const row of rows) found.set(`${row.book}.${row.chapter}.${row.verse}`, row.text);
        }),
      );
      return found;
    },
  };
}
