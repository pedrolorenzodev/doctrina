import type { BibleSource } from "@/content/bible/bible-source";
import { sortChapters } from "@/content/bible/chapter-neighbors";
import { redSpansOf } from "@/content/bible/red-letters";
import type { BibleTranslation, BibleVerse, ChapterStructure, ChapterSummary } from "@/content/model/bible";
import type { Locale } from "@/lib/locale";

const PAGE = 1000;

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
  async function select<Row>(query: string): Promise<Row[]> {
    const rows: Row[] = [];
    for (;;) {
      const response = await fetch(`${url}/rest/v1/${query}&limit=${PAGE}&offset=${rows.length}`, {
        headers: { apikey: publishableKey, Prefer: "count=exact" },
        cache: "force-cache",
      });
      if (!response.ok) throw new Error(`Supabase ${query}: ${response.status} ${await response.text()}`);
      const page = (await response.json()) as Row[];
      rows.push(...page);
      const total = Number(response.headers.get("content-range")?.split("/")[1]);
      if (page.length === 0 || !(rows.length < total)) return rows;
    }
  }

  const key = (value: string | number) => encodeURIComponent(String(value));

  return {
    async translations() {
      const rows = await select<TranslationRow>("translations?select=*&order=id");
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
  };
}
