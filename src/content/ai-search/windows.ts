import { WINDOW_CHARS } from "@/lib/ai/contracts";

const stopwords = new Set([
  "the",
  "and",
  "for",
  "that",
  "with",
  "this",
  "from",
  "are",
  "was",
  "his",
  "her",
  "not",
  "but",
  "had",
  "who",
  "you",
  "que",
  "los",
  "las",
  "una",
  "con",
  "por",
  "del",
  "para",
  "como",
  "sus",
  "pero",
  "son",
  "fue",
  "más",
]);

const suffixes = [
  "ciones",
  "iones",
  "ation",
  "ación",
  "ción",
  "mente",
  "ments",
  "ment",
  "ing",
  "ed",
  "es",
  "s",
  "ly",
  "as",
  "os",
  "a",
  "o",
  "e",
];

export const fold = (text: string) => text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export function stemWord(word: string): string {
  const base = fold(word);
  for (const suffix of suffixes) {
    if (base.length - suffix.length >= 4 && base.endsWith(suffix)) return base.slice(0, base.length - suffix.length);
  }
  return base;
}

export function tokenize(text: string): string[] {
  return fold(text)
    .split(/[^\p{L}\p{N}]+/u)
    .filter((word) => word.length >= 2 && !stopwords.has(word))
    .map(stemWord);
}

export function termStems(terms: string[], phrases: string[]): { words: string[]; phrases: string[][] } {
  return {
    words: [...new Set(terms.flatMap((term) => tokenize(term)))],
    phrases: phrases.map((phrase) => tokenize(phrase)).filter((stems) => stems.length > 0),
  };
}

export function scoreText(text: string, terms: string[], phrases: string[]): number {
  const query = termStems(terms, phrases);
  if (query.words.length === 0 && query.phrases.length === 0) return 0;
  const stems = tokenize(text);
  if (stems.length === 0) return 0;
  const counts = new Map<string, number>();
  for (const stem of stems) counts.set(stem, (counts.get(stem) ?? 0) + 1);
  let score = 0;
  for (const word of query.words) score += Math.min(counts.get(word) ?? 0, 3);
  for (const phrase of query.phrases) {
    for (let at = 0; at + phrase.length <= stems.length; at += 1) {
      if (phrase.every((stem, offset) => stems[at + offset] === stem)) {
        score += 2 * phrase.length;
        break;
      }
    }
  }
  return score / (1 + Math.log(stems.length));
}

function firstMatch(text: string, terms: string[]): number {
  const lower = fold(text);
  let best = -1;
  for (const term of terms) {
    for (const word of fold(term).split(/[^\p{L}\p{N}]+/u)) {
      if (word.length < 4 || stopwords.has(word)) continue;
      const needle = word.length > 5 ? word.slice(0, word.length - 2) : word;
      const at = lower.indexOf(needle);
      if (at !== -1 && (best === -1 || at < best)) best = at;
    }
  }
  return best;
}

export type Window = { window: string; windowStart: number };

export function windowAround(text: string, terms: string[], maxChars: number = WINDOW_CHARS): Window {
  if (text.length <= maxChars) return { window: text, windowStart: 0 };
  const match = firstMatch(text, terms);
  let start = match === -1 ? 0 : Math.max(0, match - Math.floor(maxChars / 3));
  if (start > 0 && /\S/.test(text.charAt(start - 1))) {
    const space = text.slice(start).search(/\s/);
    start = space === -1 ? start : start + space + 1;
  }
  let end = Math.min(text.length, start + maxChars);
  if (end < text.length && /\S/.test(text.charAt(end))) {
    const space = text.lastIndexOf(" ", end);
    const newline = text.lastIndexOf("\n", end);
    const cut = Math.max(space, newline);
    if (cut > start) end = cut;
  }
  while (start < end && /\s/.test(text.charAt(start))) start += 1;
  while (end > start && /\s/.test(text.charAt(end - 1))) end -= 1;
  return { window: text.slice(start, end), windowStart: start };
}
