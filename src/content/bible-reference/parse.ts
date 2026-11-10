import {
  type BookId,
  type NameLanguage,
  lookupBookName,
  nameKey,
  ordinalsToDigits,
} from "@/content/bible-reference/names";

export type RawPosition = { chapter: number; verse?: number };

export type RawRange = { start: RawPosition; end?: RawPosition; open?: boolean };

export type RawPassage = {
  book: BookId;
  language: NameLanguage | "both";
  ranges: RawRange[];
};

export type ParseError = "unknown-book" | "bad-locator" | "empty-item" | "unsupported-item" | "cross-book";

export type ParsedPart = { source: string; passage: RawPassage } | { source: string; error: ParseError };

function foldText(text: string): string {
  return text.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/\s+/g, " ").trim();
}

function bookPrefix(text: string): { id: BookId; language: NameLanguage | "both"; length: number } | null {
  for (let length = text.length; length >= 1; length -= 1) {
    const next = text.charAt(length);
    if (next !== "" && /\p{L}/u.test(next)) continue;
    const entry = lookupBookName(nameKey(text.slice(0, length)));
    if (entry) return { id: entry.id, language: entry.language, length };
  }
  return null;
}

function normalizeLocator(text: string): string {
  return text
    .replace(/^[\s.]+/, "")
    .replace(/–/g, "-")
    .replace(/(\d)\s*\.\s*(?=\d)/g, "$1:")
    .replace(/\s*([:-])\s*/g, "$1")
    .replace(/\s*,\s*/g, ",")
    .trim();
}

const chapterOnly = /^(\d+)$/;
const chapterRange = /^(\d+)-(\d+)$/;
const verseOnly = /^(\d+):(\d+)$/;
const verseRange = /^(\d+):(\d+)-(\d+)$/;
const crossChapter = /^(\d+):(\d+)-(\d+):(\d+)$/;
const openEnd = /^(\d+):(\d+)-$/;
const bareVerse = /^(\d+)$/;
const bareVerseRange = /^(\d+)-(\d+)$/;

function parseLocator(locator: string): { ranges: RawRange[] } | { error: ParseError } {
  if (locator === "") return { ranges: [] };
  const items = locator.split(",");
  if (items.some((item) => item === "")) return { error: "empty-item" };
  const [first = "", ...rest] = items;
  const single = rest.length === 0;

  if (chapterOnly.test(first) || chapterRange.test(first)) {
    if (!single) return { error: "unsupported-item" };
    const [, from = "", to] = chapterRange.exec(first) ?? [];
    if (to !== undefined) return { ranges: [{ start: { chapter: Number(from) }, end: { chapter: Number(to) } }] };
    return { ranges: [{ start: { chapter: Number(first) } }] };
  }

  const cross = crossChapter.exec(first);
  if (cross) {
    if (!single) return { error: "unsupported-item" };
    const [, c1 = "", v1 = "", c2 = "", v2 = ""] = cross;
    return {
      ranges: [{ start: { chapter: Number(c1), verse: Number(v1) }, end: { chapter: Number(c2), verse: Number(v2) } }],
    };
  }

  const open = openEnd.exec(first);
  if (open) {
    if (!single) return { error: "unsupported-item" };
    return { ranges: [{ start: { chapter: Number(open[1]), verse: Number(open[2]) }, open: true }] };
  }

  const verse = verseOnly.exec(first);
  const range = verseRange.exec(first);
  if (!verse && !range) return { error: "bad-locator" };
  const chapter = Number((verse ?? range)?.[1]);
  const ranges: RawRange[] = [];
  if (verse) ranges.push({ start: { chapter, verse: Number(verse[2]) } });
  if (range) ranges.push({ start: { chapter, verse: Number(range[2]) }, end: { chapter, verse: Number(range[3]) } });

  for (const item of rest) {
    const bare = bareVerse.exec(item);
    const pair = bareVerseRange.exec(item);
    if (bare) ranges.push({ start: { chapter, verse: Number(bare[1]) } });
    else if (pair)
      ranges.push({ start: { chapter, verse: Number(pair[1]) }, end: { chapter, verse: Number(pair[2]) } });
    else return { error: "unsupported-item" };
  }
  return { ranges };
}

export function parsePart(source: string): ParsedPart {
  const folded = ordinalsToDigits(foldText(source));
  const prefix = bookPrefix(folded);
  if (!prefix) return { source, error: "unknown-book" };
  const locator = folded.slice(prefix.length);
  const repeated = /-\s*([0-9]?\s*\p{L}[\p{L}\s.]*?)\s*(?=\d)/u.exec(locator);
  if (repeated) {
    const named = lookupBookName(nameKey(ordinalsToDigits(repeated[1] ?? "")));
    if (!named || named.id !== prefix.id) return { source, error: "cross-book" };
  }
  const parsed = parseLocator(normalizeLocator(repeated ? locator.replace(repeated[0], "-") : locator));
  if ("error" in parsed) return { source, error: parsed.error };
  return { source, passage: { book: prefix.id, language: prefix.language, ranges: parsed.ranges } };
}

export function parseReferences(text: string): ParsedPart[] {
  const parts: { source: string }[] = [];
  for (const piece of text.split(";")) {
    const items = piece.split(",").map((item) => item.trim());
    items.forEach((item, index) => {
      if (item === "") return;
      const startsNew = /\p{L}/u.test(item) || index === 0 || parts.length === 0;
      if (startsNew) {
        parts.push({ source: item });
        return;
      }
      const last = parts[parts.length - 1];
      if (last) last.source = `${last.source},${item}`;
    });
  }
  return parts.map((part) => parsePart(part.source));
}
