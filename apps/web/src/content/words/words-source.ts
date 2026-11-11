import type { ChapterWords, LexiconEntry, VerseWord, WordLanguage, WordOccurrence } from "@doctrina/core/model/words";

export type WordBrief = { lemma: string; tr: string; n: number; verses: number };

export type WordsSource = {
  chapter(book: string, chapter: number): Promise<ChapterWords | null>;
  lexiconEntry(shard: string, id: string): Promise<LexiconEntry | null>;
  occurrence(shard: string, id: string): Promise<WordOccurrence | null>;
  shardIds(shard: string): Promise<string[]>;
  parseNames(language: WordLanguage): Promise<Record<string, string>>;
  lexiconBrief(ids: string[], book: string): Promise<Map<string, WordBrief>>;
  placeWords(id: string, occurrence: WordOccurrence): Promise<Map<string, VerseWord[]>>;
  hasData(): Promise<boolean>;
  chapters(): Promise<{ book: string; chapter: number }[]>;
};
