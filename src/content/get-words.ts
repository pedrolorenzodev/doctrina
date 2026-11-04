import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ChapterWords, LexiconEntry, VerseWords, WordLanguage, WordOccurrence } from "@/content/model/words";

type MorphTable = { greek: Record<string, string>; hebrew: Record<string, string> };

const wordsDir = () => join(process.cwd(), "data", "site", "words");

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

export function wordLanguageOf(id: string): WordLanguage | null {
  if (id.startsWith("G")) return "grc";
  if (id.startsWith("H")) return "hbo";
  return null;
}

export function shardOf(id: string): string | null {
  const match = /^([GH])(\d+)[A-Z]?$/.exec(id);
  if (!match?.[1] || !match[2]) return null;
  return `${match[1]}${String(Math.floor(Number(match[2]) / 100)).padStart(3, "0")}`;
}

export function getChapterWords(book: string, chapter: number): Promise<ChapterWords | null> {
  if (!/^[0-9A-Za-z]+$/.test(book) || !Number.isInteger(chapter) || chapter < 1) return Promise.resolve(null);
  return readJson<ChapterWords>(`verses/${book}/${chapter}.json`);
}

export async function getVerseWords(book: string, chapter: number, verse: number): Promise<VerseWords | null> {
  const chapterWords = await getChapterWords(book, chapter);
  return chapterWords?.verses[String(verse)] ?? null;
}

export async function getLexiconEntry(id: string): Promise<LexiconEntry | null> {
  const shard = shardOf(id);
  if (!shard) return null;
  const entries = await readJson<Record<string, LexiconEntry>>(`lexicon/${shard}.json`);
  return entries?.[id] ?? null;
}

export async function getWordOccurrence(id: string): Promise<WordOccurrence | null> {
  const shard = shardOf(id);
  if (!shard) return null;
  const entries = await readJson<Record<string, WordOccurrence>>(`occurrences/${shard}.json`);
  return entries?.[id] ?? null;
}

export async function getLexiconShardIds(id: string): Promise<string[]> {
  const shard = shardOf(id);
  if (!shard) return [];
  const entries = await readJson<Record<string, LexiconEntry>>(`lexicon/${shard}.json`);
  return entries ? Object.keys(entries) : [];
}

export async function getParseNames(language: WordLanguage): Promise<Record<string, string>> {
  const table = await readJson<MorphTable>("morph.json");
  return (language === "grc" ? table?.greek : table?.hebrew) ?? {};
}

export async function hasWordData(): Promise<boolean> {
  return (await readJson<unknown>("manifest.json")) !== null;
}

export async function getWordChapters(): Promise<{ book: string; chapter: number }[]> {
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
}
