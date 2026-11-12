import type { BibleBook } from "@doctrina/core/bible-books";
import { getChapterWordView, type WordLexiconView, type WordView } from "@/content/get-chapter-word-view";
import { getChapterUses, type VerseUse } from "@/content/get-verse-uses";
import { getReaderChapter } from "@/content/get-reader-chapter";
import type { WordLanguage } from "@doctrina/core/model/words";
import type { Locale } from "@doctrina/core/locale";

export type VerseNeighbor = { verse: number; text: string };

export type VerseEdition = {
  id: string;
  abbreviation: string;
  displayName: string;
  language: Locale;
  versification: string;
  verseCount: number;
  text: string;
  previous: VerseNeighbor | null;
  next: VerseNeighbor | null;
};

export type VerseWords = {
  language: WordLanguage;
  words: WordView[];
  lexicon: Record<string, WordLexiconView>;
};

export type VersePageData = {
  book: BibleBook;
  chapter: number;
  verse: number;
  defaultId: string;
  editions: VerseEdition[];
  words: VerseWords | null;
  uses: VerseUse[];
  previous: number | null;
  next: number | null;
};

export async function getVersePage(
  locale: Locale,
  bookId: string,
  chapter: number,
  verse: number,
): Promise<VersePageData | null> {
  const loaded = await getReaderChapter(locale, bookId, chapter);
  if (!loaded) return null;
  const reference = loaded.views.find((view) => view.id === loaded.defaultId);
  if (!reference?.verses.some((entry) => entry.verse === verse)) return null;
  const editions = loaded.views.flatMap((view): VerseEdition[] => {
    const at = view.verses.findIndex((entry) => entry.verse === verse);
    const entry = view.verses[at];
    if (!entry) return [];
    const neighbor = (index: number): VerseNeighbor | null => {
      const other = view.verses[index];
      return other ? { verse: other.verse, text: other.text } : null;
    };
    return [
      {
        id: view.id,
        abbreviation: view.abbreviation,
        displayName: view.displayName,
        language: view.language,
        versification: view.versification,
        verseCount: view.verses.length,
        text: entry.text,
        previous: neighbor(at - 1),
        next: neighbor(at + 1),
      },
    ];
  });
  const wordView = await getChapterWordView(locale, bookId, chapter);
  const words = wordView?.verses[String(verse)] ?? [];
  const uses = (await getChapterUses(locale, bookId, chapter, [verse]))[String(verse)] ?? [];
  const numbers = reference.verses.map((entry) => entry.verse);
  const at = numbers.indexOf(verse);
  return {
    book: loaded.book,
    chapter,
    verse,
    defaultId: loaded.defaultId,
    editions,
    words:
      wordView && words.length > 0
        ? {
            language: wordView.language,
            words,
            lexicon: Object.fromEntries(
              words.flatMap((word) => {
                const entry = wordView.lexicon[word.lexicon];
                return entry ? [[word.lexicon, entry] as const] : [];
              }),
            ),
          }
        : null,
    uses,
    previous: numbers[at - 1] ?? null,
    next: numbers[at + 1] ?? null,
  };
}
