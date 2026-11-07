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
  draft?: boolean;
};

export type PassageRow = {
  source_key: string;
  collection: Exclude<Collection, "mine">;
  speaker: Exclude<Speaker, "reader">;
  doctrine: DoctrineId | null;
  lang: Passage["lang"];
  work_id: string | null;
  edition_id: string | null;
  locator: string | null;
  part: number | null;
  author: string | null;
  year: number | null;
  title: string;
  edition_label: string;
  licence: Exclude<Licence, "reader">;
  translated_by_ai: boolean;
  max_quote_words: number;
  href: string | null;
  refs: string[];
  text: string;
};

export type AuthorEntry = {
  id: string;
  name: string;
  names?: { es: string; en: string };
  works: { id: string; title: string }[];
};

export type PackPassage = Passage & { id: string; window: string; windowStart: number };

export type VerseTarget = { book: string; chapter: number; from: number; to: number };

export type Coverage = {
  collections: { collection: Collection; count: number }[];
  verseSearches?: { target: VerseTarget; found: number; collections: ("fathers" | "tradition")[] }[];
  searched?: Collection[];
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
  locale?: "es" | "en";
};

export type VerseQuery = {
  lang: "es" | "en";
  terms: string[];
  phrases: string[];
  books: string[] | null;
  chapter: number | null;
  limit: number;
  locale?: "es" | "en";
};

export interface CorpusSearch {
  readonly id: "supabase" | "fixture";
  searchPassages(query: PassageQuery): Promise<(Passage & { rank: number })[]>;
  searchVerses(query: VerseQuery): Promise<(Passage & { rank: number })[]>;
  lookupVerses(refs: string[], translationId: string, locale?: "es" | "en"): Promise<Passage[]>;
  passagesByVerses(
    target: VerseTarget,
    collection: "fathers" | "tradition",
    limit: number,
    locale?: "es" | "en",
  ): Promise<(Passage & { rank: number; verses: string[] })[]>;
  traditionPassages(doctrine: DoctrineId, locale?: "es" | "en"): Promise<Passage[]>;
  authors(): Promise<AuthorEntry[]>;
  corpusVersion(): Promise<string>;
}
