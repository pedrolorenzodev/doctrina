import { access, readFile } from "node:fs/promises";
import { join } from "node:path";
import { bibleVersification, normalizeBibleFile, type BibleRow } from "@/content/bible/normalize-bible";
import type { BibleSource } from "@/content/bible/bible-source";
import { sortChapters } from "@/content/bible/chapter-neighbors";
import { redSpansOf } from "@/content/bible/red-letters";
import type { BibleTranslation, ChapterStructure, ChapterSummary } from "@/content/model/bible";
import type { Locale } from "@/lib/locale";

type StructureEntry = { s: [number, string][]; p: number[] };

type SourceEntry = { id: string; lang: Locale; name: string; licence: string; canon: number };

export function createLocalBibleSource(): BibleSource {
  const manifest = readFile(join(process.cwd(), "data", "sources", "bibles.json"), "utf8")
    .then((text) => JSON.parse(text) as SourceEntry[])
    .then(async (entries) => {
      const present = await Promise.all(
        entries.map((entry) =>
          access(join(process.cwd(), "data", "corpus", "bibles", `${entry.id}.json`)).then(
            () => true,
            () => false,
          ),
        ),
      );
      return entries.filter((_, index) => present[index]);
    });
  const loaded = new Map<string, Promise<BibleRow[]>>();
  const reds = new Map<string, Promise<Record<string, string[]>>>();
  const structures = new Map<string, Promise<Record<string, StructureEntry>>>();

  function structureOf(translationId: string): Promise<Record<string, StructureEntry>> {
    let pending = structures.get(translationId);
    if (!pending) {
      pending = readFile(
        join(process.cwd(), "data", "corpus", "bibles", `${translationId}.structure.json`),
        "utf8",
      ).then(
        (text) => JSON.parse(text) as Record<string, StructureEntry>,
        () => ({}),
      );
      structures.set(translationId, pending);
    }
    return pending;
  }

  function redPhrases(translationId: string): Promise<Record<string, string[]>> {
    let pending = reds.get(translationId);
    if (!pending) {
      pending = readFile(join(process.cwd(), "data", "corpus", "bibles", `${translationId}.red.json`), "utf8").then(
        (text) => JSON.parse(text) as Record<string, string[]>,
        () => ({}),
      );
      reds.set(translationId, pending);
    }
    return pending;
  }

  function rows(translationId: string): Promise<BibleRow[]> {
    let pending = loaded.get(translationId);
    if (!pending) {
      pending = readFile(join(process.cwd(), "data", "corpus", "bibles", `${translationId}.json`), "utf8").then(
        (text) => {
          const { rows: parsed, errors } = normalizeBibleFile(
            translationId,
            JSON.parse(text) as Record<string, string>,
          );
          if (errors.length > 0) throw new Error(errors.slice(0, 5).join("\n"));
          return parsed;
        },
      );
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
      const phrases = await redPhrases(translationId);
      return (await rows(translationId))
        .filter((row) => row.book === book && row.chapter === chapter)
        .map((row) => {
          const spans = redSpansOf(row.text, phrases[`${book}.${chapter}.${row.verse}`] ?? []);
          return spans.length > 0
            ? { verse: row.verse, text: row.text, red: spans }
            : { verse: row.verse, text: row.text };
        })
        .sort((a, b) => a.verse - b.verse);
    },
    async chapterStructure(translationId, book, chapter): Promise<ChapterStructure | null> {
      const entry = (await structureOf(translationId))[`${book}.${chapter}`];
      if (!entry) return null;
      return { sections: entry.s.map(([from, title]) => ({ from, title })), paragraphs: entry.p };
    },
    async verse(translationId, book, chapter, verse) {
      const row = (await rows(translationId)).find(
        (entry) => entry.book === book && entry.chapter === chapter && entry.verse === verse,
      );
      return row ? { verse: row.verse, text: row.text } : null;
    },
  };
}
