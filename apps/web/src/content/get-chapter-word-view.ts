import { getBibleBook } from "@doctrina/core/bible-books";
import { getChapterWords, getLexiconBrief, getParseNames } from "@/content/get-words";
import { parseLabel } from "@/content/parse-label";
import type { VerseWord, WordLanguage } from "@doctrina/core/model/words";
import type { Locale } from "@doctrina/core/locale";

export type WordView = {
  g: string;
  t: string;
  gloss: string;
  english: boolean;
  parse: string;
  strong: string;
  lexicon: string;
};

export type WordLexiconView = {
  lemma: string;
  transliteration: string;
  times: number;
  verses: number;
};

export type ChapterWordView = {
  language: WordLanguage;
  verses: Record<string, WordView[]>;
  lexicon: Record<string, WordLexiconView>;
};

const angle = /[<>]/g;

function glossOf(word: VerseWord, language: WordLanguage, locale: Locale): { text: string; english: boolean } {
  const clean = (text: string) =>
    (language === "hbo" ? text.replace(/\s*\/\s*/g, " ") : text).replace(angle, "").trim();
  if (locale === "es" && word.es) return { text: clean(word.es), english: false };
  return { text: clean(word.en), english: locale === "es" };
}

function lexiconIdOf(word: VerseWord, language: WordLanguage): string {
  if (language === "hbo") return word.r ?? word.s.split("/").at(-1) ?? word.s;
  return word.s.split(" + ")[0] ?? word.s;
}

export function strongNumber(id: string): string {
  return id.replace(/^([GH])0+/, "$1").replace(/[A-Z]$/, "");
}

export async function getChapterWordView(
  locale: Locale,
  bookId: string,
  chapter: number,
): Promise<ChapterWordView | null> {
  const book = getBibleBook(bookId);
  const data = await getChapterWords(bookId, chapter);
  if (!book || !data) return null;
  const parseNames = await getParseNames(data.lang);
  const lexicon: Record<string, WordLexiconView> = {};
  const verses: Record<string, WordView[]> = {};
  const ids = new Set<string>();
  for (const verse of Object.values(data.verses)) for (const word of verse.words) ids.add(lexiconIdOf(word, data.lang));
  const briefs = await getLexiconBrief([...ids], bookId);
  for (const id of ids) {
    const brief = briefs.get(id);
    if (!brief) continue;
    lexicon[id] = {
      lemma: brief.lemma.normalize("NFC"),
      transliteration: brief.tr,
      times: brief.n,
      verses: brief.verses,
    };
  }
  for (const [number, verse] of Object.entries(data.verses)) {
    verses[number] = verse.words.map((word) => {
      const gloss = glossOf(word, data.lang, locale);
      const id = lexiconIdOf(word, data.lang);
      return {
        g: word.g.replace(/\//g, "").normalize("NFC"),
        t: data.lang === "hbo" ? word.t.replace(/\.\//g, "-").replace(/\//g, "-") : word.t,
        gloss: gloss.text,
        english: gloss.english,
        parse: parseLabel(parseNames[word.m] ?? "", locale),
        strong: word.s,
        lexicon: id,
      };
    });
  }
  return { language: data.lang, verses, lexicon };
}

export async function getChapterWordCounts(bookId: string, chapter: number): Promise<Record<string, number>> {
  const data = await getChapterWords(bookId, chapter);
  if (!data) return {};
  return Object.fromEntries(Object.entries(data.verses).map(([number, verse]) => [number, verse.words.length]));
}
