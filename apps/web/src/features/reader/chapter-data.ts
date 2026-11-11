import type { ReaderChapter } from "@/content/get-reader-chapter";
import type { Locale } from "@/lib/locale";

const loaded = new Map<string, Promise<ReaderChapter | null>>();

const keyOf = (locale: Locale, book: string, chapter: number) => `${locale}/${book}/${chapter}`;

export function loadChapter(locale: Locale, book: string, chapter: number): Promise<ReaderChapter | null> {
  const key = keyOf(locale, book, chapter);
  let pending = loaded.get(key);
  if (!pending) {
    pending = fetch(`/api/bible/${locale}/${encodeURIComponent(book)}/${chapter}`).then(
      (response) => (response.ok ? (response.json() as Promise<ReaderChapter>) : null),
      () => null,
    );
    loaded.set(key, pending);
    pending.then((value) => {
      if (!value) loaded.delete(key);
    });
  }
  return pending;
}

export function seedChapter(locale: Locale, chapter: ReaderChapter) {
  loaded.set(keyOf(locale, chapter.book.id, chapter.chapter), Promise.resolve(chapter));
}
