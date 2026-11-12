import { bibleBooks, bookListName, type BibleSection } from "@doctrina/core/bible-books";
import { bibleChapterBase } from "@doctrina/core/bible-routes";
import { getBibleChapterCounts } from "@/content/get-bible";
import type { Locale } from "@doctrina/core/locale";

export type BookEntry = {
  id: string;
  name: string;
  title: string;
  section: BibleSection;
  base: string;
  chapters: number;
};

export async function getBookIndex(locale: Locale): Promise<BookEntry[]> {
  const counts = await getBibleChapterCounts(locale);
  return bibleBooks.flatMap((book) => {
    const chapters = counts.get(book.id);
    if (!chapters) return [];
    return [
      {
        id: book.id,
        name: bookListName(book, locale),
        title: book.names[locale],
        section: book.section,
        base: bibleChapterBase(locale, book),
        chapters,
      },
    ];
  });
}
