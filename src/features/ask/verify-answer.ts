import {
  MAX_FOLLOWUPS,
  MAX_PROSE_WORDS,
  MAX_PROSE_WORDS_BRIEF,
  MAX_QUOTES,
  MAX_QUOTES_BRIEF,
  type ModelAnswer,
  type SearchPlan,
} from "@/lib/ai/contracts";
import { normalize } from "@/lib/ai/normalize";
import { splitSentences } from "@/lib/ai/sentences";
import { verifyQuote } from "@/lib/ai/verify-quote";
import type { PackPassage } from "@/content/ai-search/types";
import { traditionIds, type TraditionId } from "@/content/model/ids";
import { fatherAssignmentHit, verdictHit } from "@/features/ask/lexicon";

export type About = "bible" | "fathers" | "doctrine" | "glossary" | "mine" | `tradition:${TraditionId}`;

export type VerifiedQuote = { quoteId: string; passage: PackPassage; text: string; start: number; end: number };
export type VerifiedWords = {
  tradition: TraditionId;
  passage: PackPassage;
  words: string;
  quote: string;
  start: number;
  end: number;
};
export type QuoteFailure = { passage: string; quote: string; reason: string };

export type Verified = {
  kind: ModelAnswer["kind"];
  sections: { about: About; quotes: VerifiedQuote[] }[];
  words: VerifiedWords[];
  prose: string;
  followups: string[];
  total: number;
  failed: QuoteFailure[];
  removed: { sentence: string; reason: string }[];
  emptiedTraditions: TraditionId[];
  wordsDropped: string[];
};

export type VerifyOptions = { depth: SearchPlan["depth"]; fatherNames: string[][]; language?: "es" | "en" };

const MAX_FOLLOWUP_CHARS = 140;
const REPAIR_SHARE = 0.3;
const TOKEN = /\{(P\d+)\}/g;
const META = /\b(?:pack|paquete de evidencia|evidence pack)\b/iu;
const NOTE_MENTION = /\b(?:tu nota|tus notas|your notes?)\b/iu;
const SENTENCE_END = /[.!?;:](?:["'»”’)\]]*)(?=\s|$)/g;

export const quoteIdOf = (passageId: string) => `q${passageId.replace(/^P/, "")}`;

const wordsOf = (text: string) => text.split(/\s+/).filter(Boolean);
const proseWords = (text: string) => wordsOf(text.replace(TOKEN, " ")).length;

export function aboutOf(passage: PackPassage): About {
  if (passage.collection === "tradition") return `tradition:${passage.speaker as TraditionId}`;
  return passage.collection;
}

export function sectionRank(about: string): number {
  if (about === "bible") return 0;
  if (about === "fathers") return 1;
  if (about.startsWith("tradition:")) {
    const index = traditionIds.indexOf(about.slice("tradition:".length) as TraditionId);
    return 2 + (index < 0 ? traditionIds.length : index) / 10;
  }
  if (about === "doctrine") return 3;
  if (about === "glossary") return 4;
  return 5;
}

function cutToWords(text: string, limit: number): number {
  const prefix = /\S+/g;
  let count = 0;
  let end = 0;
  for (let match = prefix.exec(text); match; match = prefix.exec(text)) {
    count += 1;
    if (count > limit) break;
    end = match.index + match[0].length;
  }
  const head = text.slice(0, end);
  let sentenceEnd = -1;
  for (const match of head.matchAll(SENTENCE_END)) sentenceEnd = (match.index ?? 0) + match[0].length;
  return sentenceEnd > 0 && wordsOf(head.slice(0, sentenceEnd)).length >= 4 ? sentenceEnd : end;
}

export function capSpans(source: string, spans: [number, number][], limit: number): [number, number][] {
  const kept: [number, number][] = [];
  let used = 0;
  for (const [start, end] of spans) {
    const count = wordsOf(source.slice(start, end)).length;
    if (used + count <= limit) {
      kept.push([start, end]);
      used += count;
      continue;
    }
    const room = limit - used;
    if (room >= 4) kept.push([start, start + cutToWords(source.slice(start, end), room)]);
    break;
  }
  return kept;
}

function locate(passage: PackPassage, quote: string): VerifiedQuote | { reason: string } {
  const result = verifyQuote(passage.window, quote);
  if (!result.ok) return { reason: result.reason };
  const window = passage.window.normalize("NFC");
  const spans = capSpans(window, result.spans, passage.maxQuoteWords);
  if (spans.length === 0) return { reason: "over-licence" };
  const text = spans.map(([start, end]) => window.slice(start, end)).join(" […] ");
  const offset = passage.text.slice(0, passage.windowStart).normalize("NFC").length;
  return {
    quoteId: quoteIdOf(passage.id),
    passage,
    text,
    start: offset + (spans[0]?.[0] ?? 0),
    end: offset + (spans.at(-1)?.[1] ?? 0),
  };
}

function verifyWords(model: ModelAnswer, byId: Map<string, PackPassage>, dropped: string[]): VerifiedWords[] {
  if (model.kind !== "disputed") return [];
  const kept: VerifiedWords[] = [];
  for (const raw of model.words) {
    const entry = { ...raw, tradition: raw.tradition.replace(/^tradition:/, "") };
    const passage = byId.get(entry.passage);
    const drop = (reason: string) => dropped.push(`${entry.tradition}:${reason}`);
    if (!passage || passage.collection !== "tradition" || passage.speaker !== entry.tradition) {
      drop("passage");
      continue;
    }
    if (kept.some((item) => item.tradition === entry.tradition)) continue;
    const count = wordsOf(entry.words).length;
    if (count < 2 || count > 8) {
      drop("length");
      continue;
    }
    const quote = locate(passage, entry.quote);
    if ("reason" in quote) {
      drop(`quote-${quote.reason}`);
      continue;
    }
    if (!normalize(quote.text).text.includes(normalize(entry.words).text.replace(/^[\s"'.,;:]+|[\s"'.,;:]+$/g, ""))) {
      drop("words-not-in-quote");
      continue;
    }
    const words = verifyQuote(quote.text, entry.words);
    kept.push({
      tradition: entry.tradition as TraditionId,
      passage,
      words: words.ok ? words.display : entry.words.trim(),
      quote: quote.text,
      start: quote.start,
      end: quote.end,
    });
  }
  return kept;
}

function cleanProse(
  prose: string,
  byId: Map<string, PackPassage>,
  quoted: Set<string>,
  options: VerifyOptions,
  removed: Verified["removed"],
): string {
  const moved = prose.replace(
    /([.!?;])\s*((?:\{P\d+\}\s*)+)/g,
    (_, mark: string, tokens: string) => ` ${tokens.trim()}${mark} `,
  );
  const cap = options.depth === "brief" ? MAX_PROSE_WORDS_BRIEF : MAX_PROSE_WORDS;
  const kept: string[] = [];
  let used = 0;
  for (const raw of splitSentences(moved)) {
    const sentence = raw.replace(TOKEN, (token, id: string) => {
      const passage = byId.get(id);
      const valid = passage && (passage.collection !== "mine" || quoted.has(id));
      return valid ? token : "";
    });
    const ids = [...sentence.matchAll(TOKEN)].map((match) => match[1] ?? "");
    const reason =
      ids.length === 0
        ? "no-citation"
        : ids.some((id) => byId.get(id)?.collection === "mine") &&
            (ids.some((id) => byId.get(id)?.collection !== "mine") || !NOTE_MENTION.test(sentence))
          ? "note-as-source"
          : verdictHit(sentence)
            ? "verdict"
            : META.test(sentence)
              ? "meta"
              : fatherAssignmentHit(sentence, options.fatherNames)
                ? "father-assigned"
                : null;
    if (reason) {
      removed.push({ sentence: raw, reason });
      continue;
    }
    const count = proseWords(sentence);
    if (used + count > cap) {
      removed.push({ sentence: raw, reason: "too-long" });
      break;
    }
    used += count;
    kept.push(sentence.replace(/\s+([.!?;,])/g, "$1").trim());
  }
  return kept.join(" ");
}

function fairCap(quotes: VerifiedQuote[], cap: number): void {
  while (quotes.length > cap) {
    const counts = new Map<string, number>();
    for (const quote of quotes) counts.set(aboutOf(quote.passage), (counts.get(aboutOf(quote.passage)) ?? 0) + 1);
    const largest = [...counts].sort((a, b) => b[1] - a[1] || sectionRank(a[0]) - sectionRank(b[0]))[0]?.[0];
    const index = quotes.map((quote) => aboutOf(quote.passage) as string).lastIndexOf(largest ?? "");
    quotes.splice(index < 0 ? quotes.length - 1 : index, 1);
  }
}

export function verifyAnswer(model: ModelAnswer, passages: PackPassage[], options: VerifyOptions): Verified {
  const byId = new Map(passages.map((passage) => [passage.id, passage]));
  const order = new Map(passages.map((passage, index) => [passage.id, index]));
  const failed: QuoteFailure[] = [];
  const accepted: VerifiedQuote[] = [];
  const seen = new Set<string>();
  const proposedTraditions = new Set<TraditionId>();
  let total = 0;

  for (const section of model.sections) {
    for (const item of section.quotes) {
      total += 1;
      const passage = byId.get(item.passage);
      if (!passage) {
        failed.push({ ...item, reason: "unknown-passage" });
        continue;
      }
      if (passage.collection === "tradition") proposedTraditions.add(passage.speaker as TraditionId);
      if (passage.collection === "mine" && section.about !== "mine") {
        failed.push({ ...item, reason: "note-outside-mine" });
        continue;
      }
      if (seen.has(passage.id)) continue;
      const result = locate(passage, item.quote);
      if ("reason" in result) {
        failed.push({ ...item, reason: result.reason });
        continue;
      }
      seen.add(passage.id);
      accepted.push(result);
    }
  }

  const cap = options.depth === "brief" ? MAX_QUOTES_BRIEF : MAX_QUOTES;
  const ordered = accepted.sort(
    (a, b) =>
      sectionRank(aboutOf(a.passage)) - sectionRank(aboutOf(b.passage)) ||
      (order.get(a.passage.id) ?? 0) - (order.get(b.passage.id) ?? 0),
  );
  fairCap(ordered, cap);
  const sections: Verified["sections"] = [];
  for (const quote of ordered) {
    const about = aboutOf(quote.passage);
    const last = sections.at(-1);
    if (last && last.about === about) last.quotes.push(quote);
    else sections.push({ about, quotes: [quote] });
  }

  const present = new Set(
    ordered.flatMap((quote) => (quote.passage.collection === "tradition" ? [quote.passage.speaker] : [])),
  );
  const emptiedTraditions = [...proposedTraditions].filter((tradition) => !present.has(tradition));

  const removed: Verified["removed"] = [];
  const wordsDropped: string[] = [];
  const quoted = new Set(ordered.map((quote) => quote.passage.id));
  const prose = cleanProse(model.prose, byId, quoted, options, removed);
  const followups = model.followups
    .map((followup) => followup.trim())
    .filter(
      (followup) =>
        followup.length > 0 &&
        followup.length <= MAX_FOLLOWUP_CHARS &&
        !(options.language === "en" && /[¿¡ñáéíóú]/i.test(followup)) &&
        !verdictHit(followup),
    )
    .slice(0, MAX_FOLLOWUPS);

  return {
    kind: model.kind,
    sections,
    words: verifyWords(model, byId, wordsDropped),
    prose,
    followups,
    total,
    failed,
    removed,
    emptiedTraditions,
    wordsDropped,
  };
}

export function needsRepair(verified: Verified): boolean {
  if (verified.kind === "not_found" || verified.total === 0) return false;
  const verifiedCount = verified.sections.reduce((sum, section) => sum + section.quotes.length, 0);
  return (
    verifiedCount === 0 ||
    verified.failed.length / verified.total > REPAIR_SHARE ||
    (verified.kind === "disputed" && verified.emptiedTraditions.length > 0)
  );
}
