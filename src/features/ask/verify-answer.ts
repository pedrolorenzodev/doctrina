import {
  MAX_FOLLOWUPS,
  MAX_PROSE_WORDS,
  MAX_PROSE_WORDS_BRIEF,
  MAX_QUOTES,
  MAX_QUOTES_BRIEF,
  type ModelAnswer,
  type SearchPlan,
} from "@/lib/ai/contracts";
import { splitSentences } from "@/lib/ai/sentences";
import { verifyQuote } from "@/lib/ai/verify-quote";
import type { PackPassage } from "@/content/ai-search/types";
import { scoreText, termStems, tokenize } from "@/content/ai-search/windows";
import { traditionIds, type TraditionId } from "@/content/model/ids";
import { anchoredSpan, bestSpan, sentenceAround, wordCount, wordsSpan, type Span } from "@/features/ask/excerpt";
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
  anchorMisses: number;
  toppedUp: number;
};

export type TopUp = { namedAuthors: boolean; namedTraditions: boolean };

export type VerifyOptions = {
  depth: SearchPlan["depth"];
  fatherNames: string[][];
  language?: "es" | "en";
  terms?: string[];
  phrases?: string[];
  topUp?: TopUp;
};

type Picked = { quote: VerifiedQuote; priority: number };

const RICH_FLOOR = 12;
const TRADITION_MIN = 2;
const TRADITION_MAX = 4;
const FATHER_AUTHORS = 5;
const TOP_UP_PRIORITY = 1000;
const MIN_COVERAGE = 2;
const SHARED_COLLECTIONS: string[] = ["bible", "fathers"];
const MAX_FOLLOWUP_CHARS = 140;
const TOKEN = /\{(P\d+)\}/g;
const META = /\b(?:pack|paquete de evidencia|evidence pack)\b/iu;
const REFERENCE_ABBREVIATION = /(?<![\p{L}\p{N}])(art|arts|n|nn|q|qq|cap|ses|can|sec|secc|vol|cf|p|pp|ca|c)\.\s/giu;
const SHIELD = "\u{E000}";
const NOTE_MENTION = /\b(?:tu nota|tus notas|your notes?)\b/iu;
const LANGUAGE_WORDS = {
  es: new Set("el la los las del que una por con para sobre según dice cita también como pero entre".split(" ")),
  en: new Set("the of and to that for with which says quotes also as but between from his their".split(" ")),
};

export const quoteIdOf = (passageId: string) => `q${passageId.replace(/^P/, "")}`;

const proseWords = (text: string) => wordCount(text.replace(TOKEN, " "));

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

function quoteOf(passage: PackPassage, span: Span): VerifiedQuote | null {
  const window = passage.window.normalize("NFC");
  const text = window.slice(span[0], span[1]).trim();
  if (wordCount(text) < 4 || !verifyQuote(window, text).ok) return null;
  const offset = passage.text.slice(0, passage.windowStart).normalize("NFC").length;
  const start = span[0] + window.slice(span[0], span[1]).indexOf(text);
  return { quoteId: quoteIdOf(passage.id), passage, text, start: offset + start, end: offset + start + text.length };
}

function autoQuote(passage: PackPassage, options: VerifyOptions): VerifiedQuote | null {
  const window = passage.window.normalize("NFC");
  const span = bestSpan(window, options.terms ?? [], options.phrases ?? [], passage.maxQuoteWords);
  return span ? quoteOf(passage, span) : null;
}

function cut(
  passage: PackPassage,
  anchor: string,
  options: VerifyOptions,
): { quote: VerifiedQuote | null; missed: boolean } {
  const window = passage.window.normalize("NFC");
  const span = anchor.trim() ? anchoredSpan(window, anchor, passage.maxQuoteWords) : null;
  const anchored = span ? quoteOf(passage, span) : null;
  if (anchored) return { quote: anchored, missed: false };
  return { quote: autoQuote(passage, options), missed: anchor.trim().length > 0 };
}

function verifyWords(model: ModelAnswer, byId: Map<string, PackPassage>, dropped: string[]): VerifiedWords[] {
  if (model.kind !== "disputed") return [];
  const kept: VerifiedWords[] = [];
  for (const raw of model.words) {
    const tradition = raw.tradition.replace(/^tradition:/, "");
    const passage = byId.get(raw.passage);
    const drop = (reason: string) => dropped.push(`${tradition}:${reason}`);
    if (!passage || passage.collection !== "tradition" || passage.speaker !== tradition) {
      drop("passage");
      continue;
    }
    if (kept.some((item) => item.tradition === tradition)) continue;
    const count = wordCount(raw.words);
    if (count < 2 || count > 8) {
      drop("length");
      continue;
    }
    const window = passage.window.normalize("NFC");
    const inner = wordsSpan(window, raw.words);
    const around = inner ? sentenceAround(window, inner, passage.maxQuoteWords) : null;
    const quote = around ? quoteOf(passage, around) : null;
    if (!inner || !quote) {
      drop("words-not-in-passage");
      continue;
    }
    kept.push({
      tradition: tradition as TraditionId,
      passage,
      words: window.slice(inner[0], inner[1]),
      quote: quote.text,
      start: quote.start,
      end: quote.end,
    });
  }
  return kept;
}

function languageOf(text: string): "es" | "en" | null {
  const counts = { es: 0, en: 0 };
  for (const word of text.toLowerCase().match(/\p{L}+/gu) ?? []) {
    if (LANGUAGE_WORDS.es.has(word)) counts.es += 1;
    if (LANGUAGE_WORDS.en.has(word)) counts.en += 1;
  }
  if (counts.es + counts.en < 6) return null;
  if (counts.es >= 3 * counts.en) return "es";
  if (counts.en >= 3 * counts.es) return "en";
  return null;
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
  const found = languageOf(moved.replace(/«[^»]*»|"[^"]*"|“[^”]*”/g, " "));
  if (options.language && found && found !== options.language) {
    removed.push({ sentence: prose, reason: "language" });
    return "";
  }
  const cap = options.depth === "brief" ? MAX_PROSE_WORDS_BRIEF : MAX_PROSE_WORDS;
  const kept: string[] = [];
  let used = 0;
  const shielded = moved.replace(REFERENCE_ABBREVIATION, (_, word: string) => `${word}${SHIELD} `);
  for (const piece of splitSentences(shielded)) {
    const raw = piece.replaceAll(SHIELD, ".");
    const sentence = raw.replace(TOKEN, (token, id: string) => {
      const passage = byId.get(id);
      const valid = passage && quoted.has(id);
      return valid ? token : "";
    });
    const ids = [...sentence.matchAll(TOKEN)].map((match) => match[1] ?? "");
    const cited = [...raw.matchAll(TOKEN)].map((match) => match[1] ?? "").filter((id) => byId.has(id));
    const reason =
      ids.length === 0
        ? "no-citation"
        : cited.some((id) => byId.get(id)?.collection === "mine") &&
            (cited.some((id) => byId.get(id)?.collection !== "mine") || !NOTE_MENTION.test(sentence))
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

function fairCap(quotes: Picked[], cap: number): void {
  while (quotes.length > cap) {
    const counts = new Map<string, number>();
    for (const { quote } of quotes) counts.set(aboutOf(quote.passage), (counts.get(aboutOf(quote.passage)) ?? 0) + 1);
    const largest = [...counts].sort((a, b) => b[1] - a[1] || sectionRank(a[0]) - sectionRank(b[0]))[0]?.[0];
    let worst = -1;
    quotes.forEach((picked, index) => {
      if (aboutOf(picked.quote.passage) !== largest) return;
      if (worst < 0 || picked.priority > (quotes[worst]?.priority ?? 0)) worst = index;
    });
    quotes.splice(worst < 0 ? quotes.length - 1 : worst, 1);
  }
}

function eligible(passage: PackPassage, cited: Set<string>, options: VerifyOptions): boolean {
  if (passage.collection === "mine") return false;
  if (passage.collection === "tradition") return true;
  if (passage.bible && cited.has(`${passage.bible.book}.${passage.bible.chapter}.${passage.bible.verse}`)) return true;
  return scoreText(passage.window, options.terms ?? [], options.phrases ?? []) > 0;
}

function allowedByFocus(passage: PackPassage, focus: TopUp): boolean {
  if (!focus.namedAuthors && !focus.namedTraditions) return true;
  if (passage.collection === "bible" || passage.collection === "fathers") return true;
  if (passage.collection === "tradition") return focus.namedTraditions;
  return false;
}

function citedVerses(passages: PackPassage[]): Set<string> {
  const cited = new Set<string>();
  for (const passage of passages) {
    if (passage.collection !== "tradition") continue;
    for (const ref of passage.refs) {
      const [book, chapter, verse] = ref.split(/[.-]/);
      if (book && chapter && verse) cited.add(`${book}.${chapter}.${verse}`);
    }
  }
  return cited;
}

function topUp(accepted: Picked[], passages: PackPassage[], options: VerifyOptions, focus: TopUp): number {
  const taken = new Set(accepted.map(({ quote }) => quote.passage.id));
  const cited = citedVerses(passages);
  const query = termStems(options.terms ?? [], options.phrases ?? []);
  const coverage = new Map<string, number>();
  const score = (passage: PackPassage): number => {
    const known = coverage.get(passage.id);
    if (known !== undefined) return known;
    const stems = tokenize(passage.window);
    const present = new Set(stems);
    const joined = ` ${stems.join(" ")} `;
    const value =
      query.words.filter((word) => present.has(word)).length +
      MIN_COVERAGE * query.phrases.filter((phrase) => joined.includes(` ${phrase.join(" ")} `)).length;
    coverage.set(passage.id, value);
    return value;
  };
  const chosen = new Set(accepted.map(({ quote }) => quote.passage.collection));
  const median = (scores: number[]) => [...scores].sort((a, b) => a - b)[Math.floor((scores.length - 1) / 2)] ?? 0;
  const bar = new Map<string, number>();
  for (const collection of SHARED_COLLECTIONS) {
    bar.set(collection, median(passages.filter((passage) => passage.collection === collection).map(score)));
  }
  for (const collection of chosen) {
    bar.set(
      collection,
      median(
        accepted
          .filter(({ quote }) => quote.passage.collection === collection)
          .map(({ quote }) => score(quote.passage)),
      ),
    );
  }
  const pool = passages.filter(
    (passage) =>
      !taken.has(passage.id) &&
      (chosen.has(passage.collection) || SHARED_COLLECTIONS.includes(passage.collection)) &&
      allowedByFocus(passage, focus) &&
      eligible(passage, cited, options),
  );
  let added = 0;
  const add = (passage: PackPassage): boolean => {
    if (taken.has(passage.id)) return false;
    taken.add(passage.id);
    const quote = autoQuote(passage, options);
    if (!quote) return false;
    accepted.push({ quote, priority: TOP_UP_PRIORITY + added });
    added += 1;
    return true;
  };
  const countOf = (about: string) => accepted.filter(({ quote }) => aboutOf(quote.passage) === about).length;

  const traditionPool = pool.filter((passage) => passage.collection === "tradition");
  const speakers = [...new Set(traditionPool.map((passage) => passage.speaker))];
  if (speakers.length > 0) {
    const counts = [...new Set([...speakers, ...accepted.map(({ quote }) => quote.passage.speaker)])]
      .filter((speaker) => traditionIds.includes(speaker as TraditionId))
      .map((speaker) => countOf(`tradition:${speaker}`));
    const target = Math.min(TRADITION_MAX, Math.max(TRADITION_MIN, ...counts));
    for (const speaker of speakers) {
      for (const passage of traditionPool.filter((item) => item.speaker === speaker)) {
        if (countOf(`tradition:${speaker}`) >= target) break;
        add(passage);
      }
    }
  }

  const strong = (passage: PackPassage) => score(passage) >= Math.max(MIN_COVERAGE, bar.get(passage.collection) ?? 0);
  const fathersPool = pool.filter((passage) => passage.collection === "fathers" && passage.author && strong(passage));
  const authorsOf = (list: { author: string | null }[]) => new Set(list.map((item) => item.author ?? ""));
  const shownAuthors = authorsOf(
    accepted.filter(({ quote }) => quote.passage.collection === "fathers").map(({ quote }) => quote.passage),
  );
  const wantAuthors = Math.min(FATHER_AUTHORS, new Set([...shownAuthors, ...authorsOf(fathersPool)]).size);
  const bestByAuthor = [...authorsOf(fathersPool)]
    .filter((author) => !shownAuthors.has(author))
    .map((author) => fathersPool.filter((passage) => passage.author === author).sort((a, b) => score(b) - score(a))[0])
    .filter((passage): passage is PackPassage => Boolean(passage))
    .sort((a, b) => score(b) - score(a));
  for (const passage of bestByAuthor) {
    if (shownAuthors.size >= wantAuthors) break;
    if (add(passage)) shownAuthors.add(passage.author ?? "");
  }

  const floor = Math.min(RICH_FLOOR, accepted.length + pool.filter(strong).length);
  const groups = ["bible", "fathers", "doctrine", "glossary"].map((collection) =>
    pool
      .filter((passage) => passage.collection === collection && !taken.has(passage.id) && strong(passage))
      .sort((a, b) => score(b) - score(a)),
  );
  for (let round = 0; accepted.length < floor && groups.some((list) => list.length > round); round += 1) {
    for (const list of groups) {
      if (accepted.length >= floor) break;
      const passage = list[round];
      if (passage) add(passage);
    }
  }
  return added;
}

export function verifyAnswer(model: ModelAnswer, passages: PackPassage[], options: VerifyOptions): Verified {
  const byId = new Map(passages.map((passage) => [passage.id, passage]));
  const order = new Map(passages.map((passage, index) => [passage.id, index]));
  const failed: QuoteFailure[] = [];
  const accepted: Picked[] = [];
  const seen = new Set<string>();
  const proposedTraditions = new Set<TraditionId>();
  let total = 0;
  let anchorMisses = 0;

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
      seen.add(passage.id);
      const { quote, missed } = cut(passage, item.quote, options);
      if (missed) anchorMisses += 1;
      if (!quote) {
        failed.push({ ...item, reason: "nothing-to-quote" });
        continue;
      }
      accepted.push({ quote, priority: accepted.length });
    }
  }

  const toppedUp =
    options.topUp && options.depth === "rich" && model.kind !== "not_found"
      ? topUp(accepted, passages, options, options.topUp)
      : 0;

  const wordsDropped: string[] = [];
  const words = verifyWords(model, byId, wordsDropped);
  fairCap(accepted, (options.depth === "brief" ? MAX_QUOTES_BRIEF : MAX_QUOTES) - words.length);
  const ordered = accepted
    .map(({ quote }) => quote)
    .sort(
      (a, b) =>
        sectionRank(aboutOf(a.passage)) - sectionRank(aboutOf(b.passage)) ||
        (order.get(a.passage.id) ?? 0) - (order.get(b.passage.id) ?? 0),
    );
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
  const quoted = new Set(ordered.map((quote) => quote.passage.id));
  const prose = cleanProse(model.prose, byId, quoted, options, removed);
  const followups = model.followups
    .map((followup) => followup.trim())
    .filter(
      (followup) =>
        followup.length > 0 &&
        followup.length <= MAX_FOLLOWUP_CHARS &&
        !(options.language === "en" && /[¿¡ñáéíóú]/i.test(followup)) &&
        !META.test(followup) &&
        !verdictHit(followup),
    )
    .slice(0, MAX_FOLLOWUPS);

  return {
    kind: model.kind,
    sections,
    words,
    prose,
    followups,
    total,
    failed,
    removed,
    emptiedTraditions,
    wordsDropped,
    anchorMisses,
    toppedUp,
  };
}
