import type { DoctrineId, TraditionId } from "@/content/model/ids";

export type Collection = "bible" | "fathers" | "tradition" | "doctrine" | "glossary" | "mine";
export type Speaker = "shared" | "site" | "reader" | TraditionId;
export type Licence = "public-domain" | "short-quote" | "unconfirmed" | "site-authored" | "cc0-translation" | "reader";

export type Passage = {
  key: string;
  collection: Collection;
  speaker: Speaker;
  doctrine: DoctrineId | null;
  lang: "es" | "en" | "la" | "de" | "el";
  title: string;
  who: string;
  locatorLabel: string;
  editionLabel: string;
  licence: Licence;
  translatedByAi: boolean;
  maxQuoteWords: number;
  href: string | null;
  refs: string[];
  text: string;
  author: string | null;
  year: number | null;
  father: { workId: string; editionId: string; locator: string } | null;
  bible: { book: string; chapter: number; verse: number; verseEnd: number | null; translationId: string } | null;
};

export type PackPassage = Passage & { id: string; window: string; windowStart: number };

export type Coverage = {
  collections: { collection: Collection; count: number }[];
  traditions: { tradition: TraditionId; status: "found" | "none" | "no-page" }[];
  doctrines: DoctrineId[];
  missingAuthors: string[];
  bibleEdition: string;
  fatherWorks: number;
};

export type EvidencePack = { passages: PackPassage[]; extra: PackPassage[]; coverage: Coverage };

export type PassageQuery = {
  termsEn: string[];
  phrasesEn: string[];
  termsEs: string[];
  phrasesEs: string[];
  collections: Collection[];
  doctrines: DoctrineId[] | null;
  speakers: Speaker[] | null;
  authors: string[] | null;
  works: string[] | null;
  limit: number;
  perGroup: number;
};

export type VerseQuery = {
  lang: "es" | "en";
  terms: string[];
  phrases: string[];
  books: string[] | null;
  chapter: number | null;
  limit: number;
};

export interface CorpusSearch {
  readonly id: "supabase" | "fixture";
  searchPassages(query: PassageQuery): Promise<(Passage & { rank: number })[]>;
  searchVerses(query: VerseQuery): Promise<(Passage & { rank: number })[]>;
  lookupVerses(refs: string[], translationId: string): Promise<Passage[]>;
  traditionPassages(doctrine: DoctrineId): Promise<Passage[]>;
  authors(): Promise<{ id: string; name: string; works: { id: string; title: string }[] }[]>;
  corpusVersion(): Promise<string>;
}
