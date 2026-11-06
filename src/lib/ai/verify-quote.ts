import { normalize } from "@/lib/ai/normalize";

export type VerifyFailure = "too-short" | "not-found" | "gap-too-long" | "too-many-segments";
export type VerifyResult =
  { ok: true; spans: [number, number][]; display: string } | { ok: false; reason: VerifyFailure };

const ELLIPSIS = /\s*(?:\[\s*(?:…|\.\.\.)\s*\]|…|\.\.\.)\s*/;
const EDGES = /^[\s"'.,;:\-]+|[\s"'.,;:\-]+$/g;
const MIN_WORDS = 4;
const MAX_SEGMENTS = 2;
const MAX_GAP_CHARS = 400;

const wordCount = (text: string) => text.split(/\s+/).filter(Boolean).length;

export function verifyQuote(passage: string, quote: string): VerifyResult {
  const segments = quote
    .split(ELLIPSIS)
    .map((segment) => segment.trim())
    .filter(Boolean);
  if (segments.length === 0) return { ok: false, reason: "too-short" };
  if (segments.length > MAX_SEGMENTS) return { ok: false, reason: "too-many-segments" };
  const needles = segments.map((segment) => normalize(segment).text.replace(EDGES, ""));
  if (needles.some((needle) => wordCount(needle) < MIN_WORDS)) return { ok: false, reason: "too-short" };
  const haystack = normalize(passage);
  const spans: [number, number][] = [];
  let from = 0;
  for (const needle of needles) {
    const at = haystack.text.indexOf(needle, from);
    if (at < 0) return { ok: false, reason: "not-found" };
    if (spans.length > 0 && at - from > MAX_GAP_CHARS) return { ok: false, reason: "gap-too-long" };
    const start = haystack.map[at] ?? 0;
    const last = haystack.map[at + needle.length - 1] ?? start;
    const end = last + Array.from(haystack.source.slice(last))[0]!.length;
    spans.push([start, end]);
    from = at + needle.length;
  }
  return {
    ok: true,
    spans,
    display: spans.map(([start, end]) => haystack.source.slice(start, end)).join(" […] "),
  };
}
