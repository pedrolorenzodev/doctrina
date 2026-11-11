import type { ChapterWordView } from "@/content/get-chapter-word-view";
import type { Locale } from "@doctrina/core/locale";

const requests = new Map<string, Promise<ChapterWordView | null>>();
const loaded = new Map<string, ChapterWordView>();

const keyOf = (locale: Locale, book: string, chapter: number) => `${locale}/${book}/${chapter}`;

export function loadChapterWords(locale: Locale, book: string, chapter: number): Promise<ChapterWordView | null> {
  const key = keyOf(locale, book, chapter);
  let pending = requests.get(key);
  if (!pending) {
    pending = fetch(`/api/words/${locale}/${encodeURIComponent(book)}/${chapter}`).then(
      (response) => (response.ok ? (response.json() as Promise<ChapterWordView>) : null),
      () => null,
    );
    requests.set(key, pending);
    void pending.then((value) => {
      if (value) loaded.set(key, value);
      else requests.delete(key);
    });
  }
  return pending;
}

export function loadedChapterWords(locale: Locale, book: string, chapter: number): ChapterWordView | null {
  return loaded.get(keyOf(locale, book, chapter)) ?? null;
}
