import type { CitationKind, DocLang, LocatorKind, WorkKind, TraditionId } from "@doctrina/core/model/ids";

export type LinkRef = {
  href: string;
  label: string;
};

export type DateInfo = {
  year: number;
  yearEnd?: number;
  month?: number;
  day?: number;
  alsoYears?: number[];
  circa?: boolean;
  attribution?: string;
  unconfirmed?: boolean;
};

export type LocatorPart = {
  kind: LocatorKind;
  value: string;
};

export type Locator = {
  parts: LocatorPart[];
  qualifier?: string;
};

export type Speaker = TraditionId | "ecumenical" | "site";

export type Work = {
  id: string;
  title: string;
  short: string;
  kind: WorkKind;
  speaker: Speaker;
  // TODO: fill from the dossiers once they state each work's original language
  originalLang?: DocLang;
  scheme: readonly LocatorKind[];
  date?: DateInfo;
};

export type Licence = "public-domain" | "short-quote" | "unconfirmed" | "site-authored";

export type Edition = {
  id: string;
  works: string[];
  lang: DocLang;
  bibliography: string;
  licence: Licence;
  access?: string;
  scan?: LinkRef;
};

export type TranslationLevel = "printed-original" | "official" | "ai-assisted" | "bible-edition" | "site-statement";

export type Verification = "scan" | "ocr" | "page" | "secondary";

export type Passage = {
  text: string;
  edition: string;
  page?: string;
  verified?: Verification;
  translation?: TranslationLevel;
  derivedFrom?: string;
  label?: string;
  translationNote?: string;
  tag?: string;
  normalisation?: string;
};

export type ExcerptSource = {
  url?: string;
  locator?: string;
  edition?: string;
  checkedAt?: string;
  tag?: string;
  verificationAttempt?: string;
};

export type ExcerptCorrection = {
  label: string;
  date?: string;
  source?: string;
  what?: string;
  check?: string;
  textBefore?: string | string[];
  textBeforeCorrection?: string;
};

export type Excerpt = {
  la?: Passage;
  es?: Passage;
  en?: Passage;
  de?: Passage;
  el?: Passage;
  at?: string;
  note?: string;
  citedIn?: string[];
  source?: ExcerptSource;
  corrections?: ExcerptCorrection[];
};

export type Citation = {
  id: string;
  work: string;
  kind: CitationKind;
  locator: Locator;
  date?: DateInfo;
  excerpts: Excerpt[];
  research?: Record<string, unknown>;
  link?: LinkRef;
};

export type Verse = {
  osis: string;
  text: string;
  edition: "RV1909";
};

export type Registry = {
  works: Record<string, Work>;
  editions: Record<string, Edition>;
  citations: Record<string, Citation>;
  verses: Record<string, Verse>;
};
