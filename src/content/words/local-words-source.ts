import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ChapterWords, LexiconEntry, VerseWord, WordLanguage, WordOccurrence } from "@/content/model/words";
import { shardOf } from "@/content/words/shard-of";
import type { WordBrief, WordsSource } from "@/content/words/words-source";

type MorphTable = { greek: Record<string, string>; hebrew: Record<string, string> };

const wordsDir = () => join(process.cwd(), "data", "site", "words");

export function createLocalWordsSource(): WordsSource {
  const files = new Map<string, Promise<unknown>>();

  function readJson<T>(path: string): Promise<T | null> {
    let pending = files.get(path);
    if (!pending) {
      pending = readFile(join(wordsDir(), path), "utf8").then(
        (text) => JSON.parse(text) as unknown,
        () => null,
      );
      files.set(path, pending);
    }
    return pending as Promise<T | null>;
  }

  return {
    chapter: (book, chapter) => readJson<ChapterWords>(`verses/${book}/${chapter}.json`),
    async lexiconEntry(shard, id) {
      const entries = await readJson<Record<string, LexiconEntry>>(`lexicon/${shard}.json`);
      return entries?.[id] ?? null;
    },
    async occurrence(shard, id) {
      const entries = await readJson<Record<string, WordOccurrence>>(`occurrences/${shard}.json`);
      return entries?.[id] ?? null;
    },
    async shardIds(shard) {
      const entries = await readJson<Record<string, LexiconEntry>>(`lexicon/${shard}.json`);
      return entries ? Object.keys(entries) : [];
    },
    async parseNames(language: WordLanguage) {
      const table = await readJson<MorphTable>("morph.json");
      return (language === "grc" ? table?.greek : table?.hebrew) ?? {};
    },
    async lexiconBrief(ids, book) {
      const found = new Map<string, WordBrief>();
      await Promise.all(
        ids.map(async (id) => {
          const shard = shardOf(id);
          if (!shard) return;
          const [entries, occurrences] = await Promise.all([
            readJson<Record<string, LexiconEntry>>(`lexicon/${shard}.json`),
            readJson<Record<string, WordOccurrence>>(`occurrences/${shard}.json`),
          ]);
          const entry = entries?.[id];
          if (entry)
            found.set(id, {
              lemma: entry.lemma,
              tr: entry.tr,
              n: entry.n,
              verses: occurrences?.[id]?.b[book]?.length ?? 0,
            });
        }),
      );
      return found;
    },
    async placeWords(_id, occurrence) {
      const wanted: { book: string; chapter: string; verse: string }[] = [];
      for (const [book, refs] of Object.entries(occurrence.b)) {
        for (const ref of refs) {
          const [chapter = "0", verse = "0"] = ref.split(".");
          wanted.push({ book, chapter, verse });
        }
      }
      const chapters = new Map<string, Promise<ChapterWords | null>>();
      for (const { book, chapter } of wanted) {
        const key = `${book}.${chapter}`;
        if (!chapters.has(key)) chapters.set(key, readJson<ChapterWords>(`verses/${book}/${chapter}.json`));
      }
      const found = new Map<string, VerseWord[]>();
      for (const { book, chapter, verse } of wanted) {
        const data = await chapters.get(`${book}.${chapter}`);
        if (data) found.set(`${book}.${chapter}.${Number(verse)}`, data.verses[String(Number(verse))]?.words ?? []);
      }
      return found;
    },
    async hasData() {
      return (await readJson<unknown>("manifest.json")) !== null;
    },
    async chapters() {
      const books = await readdir(join(wordsDir(), "verses")).catch(() => []);
      const perBook = await Promise.all(
        books.map(async (book) => {
          const names = await readdir(join(wordsDir(), "verses", book)).catch(() => []);
          return names.flatMap((name) => {
            const chapter = Number(name.replace(".json", ""));
            return Number.isInteger(chapter) ? [{ book, chapter }] : [];
          });
        }),
      );
      return perBook.flat();
    },
  };
}
