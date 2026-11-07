import { ANSWER_PROMPT_VERSION, type AnswerKind, type WireAnswer, type WireQuote } from "@/lib/ai/contracts";
import type { Locale } from "@/lib/locale";
import { getBibleBook } from "@/content/bible-books";
import { bibleChapterHref } from "@/content/bible-routes";
import { collectionLabels, traditionLabels } from "@/content/ai-search/collections";
import type { PackPassage } from "@/content/ai-search/types";
import type { TraditionId } from "@/content/model/ids";
import { fixedTexts } from "@/features/ask/fixed-texts";
import { capSpans, quoteIdOf, type About, type Verified } from "@/features/ask/verify-answer";

const CONTEXT_CHARS = 200;

export function sectionHead(about: About | string, locale: Locale): string {
  if (about.startsWith("tradition:")) {
    const tradition = about.slice("tradition:".length) as TraditionId;
    return traditionLabels[tradition]?.[locale] ?? tradition;
  }
  return collectionLabels[about as keyof typeof collectionLabels]?.[locale] ?? about;
}

function editionOf(passage: PackPassage, locale: Locale): string {
  if (!passage.translatedByAi) return passage.editionLabel;
  return `${locale === "es" ? "Traducido con IA." : "Translated with AI."} ${passage.editionLabel}`;
}

function hrefOf(passage: PackPassage, locale: Locale): string | undefined {
  const book = passage.bible ? getBibleBook(passage.bible.book) : undefined;
  if (passage.bible && book) {
    return `${bibleChapterHref(locale, book, passage.bible.chapter)}#v-${passage.bible.verse}`;
  }
  return passage.href ?? undefined;
}

export function wireQuote(
  passage: PackPassage,
  slice: { text: string; start: number; end: number },
  locale: Locale,
): WireQuote {
  const full = passage.text.normalize("NFC");
  const href = hrefOf(passage, locale);
  const before = full.slice(Math.max(0, slice.start - CONTEXT_CHARS), slice.start);
  const after = full.slice(slice.end, slice.end + CONTEXT_CHARS);
  return {
    id: quoteIdOf(passage.id),
    key: passage.key,
    who: passage.who,
    work: passage.locatorLabel,
    text: slice.text,
    edition: editionOf(passage, locale),
    translatedByAi: passage.translatedByAi,
    speaker: passage.speaker,
    ...(passage.father
      ? {
          father: {
            workId: passage.father.workId,
            at: passage.father.locator,
            anchor: passage.father.locator,
            original: "",
          },
        }
      : {}),
    ...(passage.bible
      ? {
          bible: {
            book: passage.bible.book,
            chapter: passage.bible.chapter,
            verse: passage.bible.verse,
            ...(passage.bible.verseEnd !== null ? { verseEnd: passage.bible.verseEnd } : {}),
          },
        }
      : {}),
    ...(href ? { href } : {}),
    context: { before, after },
  };
}

export function leadSlice(passage: PackPassage): { text: string; start: number; end: number } {
  const window = passage.window.normalize("NFC");
  const [span] = capSpans(window, [[0, window.length]], Math.max(passage.maxQuoteWords, 4));
  const end = span?.[1] ?? window.length;
  const offset = passage.text.slice(0, passage.windowStart).normalize("NFC").length;
  return { text: window.slice(0, end), start: offset, end: offset + end };
}

export function blocksOf(quotes: { id: string; about: string }[], locale: Locale): WireAnswer["blocks"] {
  return quotes.map((quote, index) =>
    index === 0 || quotes[index - 1]?.about !== quote.about
      ? { quote: quote.id, head: sectionHead(quote.about, locale) }
      : { quote: quote.id },
  );
}

type MapInput = {
  verified: Verified;
  passages: PackPassage[];
  question: string;
  scope: string;
  locale: Locale;
  more: boolean;
};

export function mapAnswer(input: MapInput): WireAnswer {
  const { verified, passages, locale } = input;
  const quotes: Record<string, WireQuote> = {};
  for (const passage of passages) {
    if (passage.collection !== "mine") quotes[quoteIdOf(passage.id)] = wireQuote(passage, leadSlice(passage), locale);
  }
  const ordered = verified.sections.flatMap((section) =>
    section.quotes.map((quote) => ({ id: quote.quoteId, about: section.about, quote })),
  );
  for (const { quote } of ordered) quotes[quote.quoteId] = wireQuote(quote.passage, quote, locale);
  const notFound = verified.kind === "not_found" || ordered.length === 0;
  const kind: AnswerKind = notFound ? "not_found" : verified.kind;
  const prose = notFound ? "" : verified.prose.replace(/\{(P\d+)\}/g, (_, id: string) => `{q:${quoteIdOf(id)}}`);
  const words =
    kind === "disputed"
      ? verified.words.map((entry) => ({
          tradition: traditionLabels[entry.tradition][locale],
          source: entry.passage.locatorLabel,
          words: entry.words,
          quote: entry.quote,
        }))
      : [];
  return {
    answerId: "",
    kind,
    question: input.question,
    scope: input.scope,
    ...(notFound ? { plain: fixedTexts.notFound[locale] } : {}),
    ...(kind === "disputed" ? { disputed: fixedTexts.disputed[locale] } : {}),
    ...(words.length > 0 ? { words } : {}),
    blocks: notFound ? [] : blocksOf(ordered, locale),
    ...(prose ? { prose } : {}),
    quotes,
    consulted: passages.filter((passage) => passage.collection !== "mine").map((passage) => quoteIdOf(passage.id)),
    followups: notFound ? [] : verified.followups,
    more: input.more,
    cached: false,
    promptVersion: ANSWER_PROMPT_VERSION,
  };
}

export function fixedAnswer(kind: "pastoral" | "out_of_scope", question: string, locale: Locale): WireAnswer {
  return {
    answerId: "",
    kind,
    question,
    scope: "",
    plain: fixedTexts[kind === "pastoral" ? "pastoral" : "outOfScope"][locale],
    blocks: [],
    quotes: {},
    consulted: [],
    followups: [],
    more: false,
    fixed: true,
    cached: false,
    promptVersion: ANSWER_PROMPT_VERSION,
  };
}
