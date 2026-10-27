import type { ReaderChapter } from "@/content/get-reader-chapter";

const loaded = new Map<string, Promise<ReaderChapter | null>>();

const keyOf = (book: string, chapter: number) => `${book}/${chapter}`;

export function loadChapter(book: string, chapter: number): Promise<ReaderChapter | null> {
  const key = keyOf(book, chapter);
  let pending = loaded.get(key);
  if (!pending) {
    pending = fetch(`/api/bible/${encodeURIComponent(book)}/${chapter}`).then(
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

export function seedChapter(chapter: ReaderChapter) {
  loaded.set(keyOf(chapter.book.id, chapter.chapter), Promise.resolve(chapter));
}
