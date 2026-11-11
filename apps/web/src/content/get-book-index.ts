import { bibleBooks, bookListName, type BibleSection } from "@/content/bible-books";
import { bibleChapterBase } from "@/content/bible-routes";
import { getBibleChapterCounts } from "@/content/get-bible";
import type { Locale } from "@/lib/locale";

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
