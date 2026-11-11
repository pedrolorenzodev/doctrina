import { normalize, type Normalized } from "@/lib/ai/normalize";
import { quotedShare, scoreText } from "@/content/ai-search/windows";

export type Span = [number, number];

const SENTENCE_END = /[.!?;:](?:["'»”’)\]]*)(?=\s|$)/g;
const STRONG_END = /[.!?;](?:["'»”’)\]]*)(?=\s|$)/g;
const REFERENCE_ABBREVIATION = /(?:^|[\s(])(?:art|arts|n|nn|q|qq|cap|ses|can|sec|vol|cf|pp|ca|c)\.$/iu;
const ELLIPSIS = /\s*(?:\[\s*(?:…|\.\.\.)\s*\]|…|\.\.\.)\s*/;
const EDGES = /^[\s"'.,;:\-]+|[\s"'.,;:\-]+$/g;
const MIN_QUOTE_WORDS = 4;
const MIN_ANCHOR_WORDS = 2;
const SNAP_WORDS = 45;
const AUTO_WORDS = 70;
const LEAD_ADVANTAGE = 1.5;
const QUOTED_SENTENCE = 0.6;
const QUOTED_DISCOUNT = 0.5;
const QUOTED_IN_SPAN = 0.2;

const wordsOf = (text: string) => text.split(/\s+/).filter(Boolean);
export const wordCount = (text: string) => wordsOf(text).length;

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
  return sentenceEnd > 0 && wordCount(head.slice(0, sentenceEnd)) >= MIN_QUOTE_WORDS ? sentenceEnd : end;
}

export function capSpans(source: string, spans: Span[], limit: number): Span[] {
  const kept: Span[] = [];
  let used = 0;
  for (const [start, end] of spans) {
    const count = wordCount(source.slice(start, end));
    if (used + count <= limit) {
      kept.push([start, end]);
      used += count;
      continue;
    }
    const room = limit - used;
    if (room >= MIN_QUOTE_WORDS) kept.push([start, start + cutToWords(source.slice(start, end), room)]);
    break;
  }
  return kept;
}

function ends(text: string): number[] {
  return [...text.matchAll(STRONG_END)]
    .filter(
      (match) => !REFERENCE_ABBREVIATION.test(text.slice(Math.max(0, (match.index ?? 0) - 6), (match.index ?? 0) + 1)),
    )
    .map((match) => (match.index ?? 0) + match[0].length);
}

function sentenceSpans(text: string): Span[] {
  const spans: Span[] = [];
  let start = 0;
  for (const end of [...ends(text), text.length]) {
    const from = start + (text.slice(start, end).length - text.slice(start, end).trimStart().length);
    if (end > from && /\S/.test(text.slice(from, end))) spans.push([from, end]);
    start = end;
  }
  return spans;
}

function snapStart(text: string, at: number): number {
  const before = ends(text).filter((end) => end <= at);
  const boundary = before.at(-1) ?? 0;
  if (wordCount(text.slice(boundary, at)) > SNAP_WORDS) return at;
  let start = boundary;
  while (start < at && /\s/.test(text.charAt(start))) start += 1;
  return start;
}

function snapEnd(text: string, at: number): number {
  const after = ends(text).find((end) => end >= at);
  if (after === undefined) return wordCount(text.slice(at)) <= SNAP_WORDS ? text.trimEnd().length : at;
  return wordCount(text.slice(at, after)) <= SNAP_WORDS ? after : at;
}

function sourceIndex(norm: Normalized, normalizedAt: number): number {
  return norm.map[normalizedAt] ?? norm.source.length;
}

function normalizedIndex(norm: Normalized, sourceAt: number): number {
  const index = norm.map.findIndex((position) => position >= sourceAt);
  return index < 0 ? norm.text.length : index;
}

function findAnchor(norm: Normalized, raw: string, fromSource: number): Span | null {
  const needle = normalize(raw).text.replace(EDGES, "");
  if (wordCount(needle) < MIN_ANCHOR_WORDS) return null;
  const at = norm.text.indexOf(needle, normalizedIndex(norm, fromSource));
  if (at < 0) return null;
  const start = sourceIndex(norm, at);
  const last = sourceIndex(norm, at + needle.length - 1);
  return [start, last + (Array.from(norm.source.slice(last))[0]?.length ?? 1)];
}

function capped(text: string, span: Span, maxWords: number): Span | null {
  const [kept] = capSpans(text, [span], maxWords);
  if (!kept || wordCount(text.slice(kept[0], kept[1])) < MIN_QUOTE_WORDS) return null;
  return kept;
}

export function withCommentary(text: string, span: Span | null, maxWords: number): Span | null {
  let current = span;
  while (current && quotedShare(text.slice(current[0], current[1])) > QUOTED_SENTENCE) {
    const from = current;
    const next = ends(text).find((end) => end > from[1]);
    const longer = next === undefined ? null : capped(text, [from[0], next], maxWords);
    if (!longer || longer[1] <= from[1]) break;
    current = longer;
  }
  return current;
}

export function anchoredSpan(text: string, anchor: string, maxWords: number): Span | null {
  const segments = anchor
    .split(ELLIPSIS)
    .map((segment) => segment.trim())
    .filter(Boolean);
  const first = segments[0];
  if (!first) return null;
  const norm = normalize(text);
  const head = findAnchor(norm, first, 0);
  if (!head) return null;
  const last = segments.length > 1 ? findAnchor(norm, segments.at(-1) ?? "", head[1]) : null;
  const start = snapStart(text, head[0]);
  const end = snapEnd(text, last ? last[1] : head[1]);
  return withCommentary(text, capped(text, [start, end], maxWords), maxWords);
}

export function wordsSpan(text: string, words: string): Span | null {
  return findAnchor(normalize(text), words, 0);
}

export function sentenceAround(text: string, inner: Span, maxWords: number): Span | null {
  const start = snapStart(text, inner[0]);
  const end = snapEnd(text, inner[1]);
  const whole = capped(text, [start, end], maxWords);
  if (whole && whole[1] >= inner[1]) return whole;
  return capped(text, [inner[0], end], maxWords);
}

function quotedMask(text: string): boolean[] {
  const mask = new Array<boolean>(text.length).fill(false);
  for (const match of text.matchAll(/“[^”]*”|«[^»]*»/g)) {
    for (let at = match.index ?? 0; at < (match.index ?? 0) + match[0].length; at += 1) mask[at] = true;
  }
  return mask;
}

export function bestSpan(text: string, terms: string[], phrases: string[], maxWords: number): Span | null {
  const sentences = sentenceSpans(text);
  if (sentences.length === 0) return null;
  const target = Math.min(maxWords, AUTO_WORDS);
  const inQuote = quotedMask(text);
  const shareOf = (start: number, end: number) => {
    let letters = 0;
    let inside = 0;
    for (let at = start; at < end; at += 1) {
      if (!/\p{L}/u.test(text.charAt(at))) continue;
      letters += 1;
      if (inQuote[at]) inside += 1;
    }
    return letters === 0 ? 0 : inside / letters;
  };
  const quoted = sentences.map(([start, end]) => shareOf(start, end) > QUOTED_SENTENCE);
  const scores = sentences.map(
    ([start, end], index) => scoreText(text.slice(start, end), terms, phrases) * (quoted[index] ? QUOTED_DISCOUNT : 1),
  );
  let best = 0;
  scores.forEach((score, index) => {
    if (score > (scores[best] ?? 0) * LEAD_ADVANTAGE && score > (scores[best] ?? 0)) best = index;
  });
  let first = best;
  let last = best;
  const words = (from: number, to: number) => wordCount(text.slice(sentences[from]![0], sentences[to]![1]));
  const quotes = (from: number, to: number) => shareOf(sentences[from]![0], sentences[to]![1]) > QUOTED_IN_SPAN;
  while (last + 1 < sentences.length && words(first, last + 1) <= (quotes(first, last) ? maxWords : target)) last += 1;
  while (first > 0 && words(first, last) < 15 && words(first - 1, last) <= target) first -= 1;
  if (first > 0 && quoted[first - 1] && words(first - 1, last) <= maxWords) first -= 1;
  return withCommentary(text, capped(text, [sentences[first]![0], sentences[last]![1]], maxWords), maxWords);
}
