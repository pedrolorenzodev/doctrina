import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { bibleVersification, normalizeBibleFile, type BibleRow } from "@/content/bible/normalize-bible";
import type { BibleSource } from "@/content/bible/bible-source";
import { sortChapters } from "@/content/bible/chapter-neighbors";
import type { BibleTranslation, ChapterSummary } from "@/content/model/bible";
import type { Locale } from "@/lib/locale";

type SourceEntry = { id: string; lang: Locale; name: string; licence: string; canon: number };

export function createLocalBibleSource(root: string): BibleSource {
  const manifest = readFile(resolve(root, "data", "sources", "bibles.json"), "utf8").then(
    (text) => JSON.parse(text) as SourceEntry[],
  );
  const loaded = new Map<string, Promise<BibleRow[]>>();

  function rows(translationId: string): Promise<BibleRow[]> {
    let pending = loaded.get(translationId);
    if (!pending) {
      pending = readFile(resolve(root, "data", "corpus", "bibles", `${translationId}.json`), "utf8").then((text) => {
        const { rows: parsed, errors } = normalizeBibleFile(translationId, JSON.parse(text) as Record<string, string>);
        if (errors.length > 0) throw new Error(errors.slice(0, 5).join("\n"));
        return parsed;
      });
      loaded.set(translationId, pending);
    }
    return pending;
  }

  return {
    async translations() {
      return (await manifest).map((entry): BibleTranslation => ({
        id: entry.id,
        language: entry.lang,
        name: entry.name,
        licence: entry.licence,
        versification: bibleVersification[entry.id] ?? "",
        bookCount: entry.canon,
      }));
    },
    async chapterIndex(translationId) {
      const counts = new Map<string, ChapterSummary>();
      for (const row of await rows(translationId)) {
        const key = `${row.book}.${row.chapter}`;
        const entry = counts.get(key) ?? { book: row.book, chapter: row.chapter, verseCount: 0 };
        entry.verseCount += 1;
        counts.set(key, entry);
      }
      return sortChapters([...counts.values()]);
    },
    async chapterVerses(translationId, book, chapter) {
      return (await rows(translationId))
        .filter((row) => row.book === book && row.chapter === chapter)
        .map((row) => ({ verse: row.verse, text: row.text }))
        .sort((a, b) => a.verse - b.verse);
    },
    async verse(translationId, book, chapter, verse) {
      const row = (await rows(translationId)).find(
        (entry) => entry.book === book && entry.chapter === chapter && entry.verse === verse,
      );
      return row ? { verse: row.verse, text: row.text } : null;
    },
  };
}
