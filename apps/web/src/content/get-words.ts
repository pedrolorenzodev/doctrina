import { supabaseWordsCorpus } from "@/content/corpus-env";
import type {
  ChapterWords,
  LexiconEntry,
  VerseWord,
  VerseWords,
  WordLanguage,
  WordOccurrence,
} from "@doctrina/core/model/words";
import { createLocalWordsSource } from "@/content/words/local-words-source";
import { createSupabaseWordsSource } from "@/content/words/supabase-words-source";
import { shardOf } from "@doctrina/core/words/shard-of";
import type { WordBrief, WordsSource } from "@/content/words/words-source";

function chooseSource(): WordsSource {
  const remote = supabaseWordsCorpus();
  return remote ? createSupabaseWordsSource(remote.url, remote.key) : createLocalWordsSource();
}

let source: WordsSource | null = null;

function currentSource(): WordsSource {
  source ??= chooseSource();
  return source;
}

export { shardOf };

export function wordLanguageOf(id: string): WordLanguage | null {
  if (id.startsWith("G")) return "grc";
  if (id.startsWith("H")) return "hbo";
  return null;
}

export function getChapterWords(book: string, chapter: number): Promise<ChapterWords | null> {
  if (!/^[0-9A-Za-z]+$/.test(book) || !Number.isInteger(chapter) || chapter < 1) return Promise.resolve(null);
  return currentSource().chapter(book, chapter);
}

export async function getVerseWords(book: string, chapter: number, verse: number): Promise<VerseWords | null> {
  const chapterWords = await getChapterWords(book, chapter);
  return chapterWords?.verses[String(verse)] ?? null;
}

export async function getLexiconEntry(id: string): Promise<LexiconEntry | null> {
  const shard = shardOf(id);
  return shard ? currentSource().lexiconEntry(shard, id) : null;
}

export async function getWordOccurrence(id: string): Promise<WordOccurrence | null> {
  const shard = shardOf(id);
  return shard ? currentSource().occurrence(shard, id) : null;
}

export async function getLexiconShardIds(id: string): Promise<string[]> {
  const shard = shardOf(id);
  return shard ? currentSource().shardIds(shard) : [];
}

export function getParseNames(language: WordLanguage): Promise<Record<string, string>> {
  return currentSource().parseNames(language);
}

export function hasWordData(): Promise<boolean> {
  return currentSource().hasData();
}

export function getWordChapters(): Promise<{ book: string; chapter: number }[]> {
  return currentSource().chapters();
}

export function getLexiconBrief(ids: string[], book: string): Promise<Map<string, WordBrief>> {
  return currentSource().lexiconBrief(ids, book);
}

export function getPlaceWords(id: string, occurrence: WordOccurrence): Promise<Map<string, VerseWord[]>> {
  return currentSource().placeWords(id, occurrence);
}
