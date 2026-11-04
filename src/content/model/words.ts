export type WordLanguage = "grc" | "hbo";

export type VerseWord = {
  g: string;
  p: string;
  t: string;
  s: string;
  m: string;
  en: string;
  es?: string;
  var?: string;
  l?: string;
  lt?: string;
  r?: string;
  ty?: string;
};

export type OmittedWord = { g: string; t: string; en: string; es?: string; eds: string[]; after: string | null };

export type VerseWords = {
  words: VerseWord[];
  omitted?: OmittedWord[];
  heb?: string;
};

export type ChapterWords = { book: string; chapter: number; lang: WordLanguage; verses: Record<string, VerseWords> };

export type LexiconSense = { n: string; level: number; text: string; refs: string[]; i: number };

export type LexiconEntry = {
  lemma: string;
  tr: string;
  strong: string;
  pos: string;
  gloss: string;
  glossEs?: string;
  def: string | null;
  as: boolean;
  formOf: string | null;
  n: number;
  nAny: number;
  senses?: LexiconSense[];
  sensesLead?: string | null;
  sensesSyn?: string | null;
  sensesLeadRefs?: string[];
  defId?: string;
  defMatch?: string;
  defSource?: string;
};

export type WordOccurrence = {
  n: number;
  nAny: number;
  v: number;
  b: Record<string, string[]>;
  f: Record<string, number>;
  fm: Record<string, Record<string, number>>;
};
