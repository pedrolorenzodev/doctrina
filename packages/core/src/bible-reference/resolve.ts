import type { BookId, NameLanguage } from "@doctrina/core/bible-reference/names";
import type { ParseError, ParsedPart, RawPassage, RawRange } from "@doctrina/core/bible-reference/parse";

export type VersesPerChapter = Record<BookId, number[]>;

export type Position = { chapter: number; verse: number };

export type Span = { from: Position; to: Position };

export type PassageKind = "book" | "chapters" | "verses";

export type ResolvedPassage = {
  book: BookId;
  language: NameLanguage | "both";
  kind: PassageKind;
  spans: Span[];
  duplicate: boolean;
};

export type ResolveError = "book-not-in-translation" | "chapter-out-of-range" | "verse-out-of-range" | "reversed-range";

export type ResolvedPart =
  { source: string; passage: ResolvedPassage } | { source: string; error: ParseError | ResolveError };

class ResolveFailure extends Error {
  code: ResolveError;

  constructor(code: ResolveError) {
    super(code);
    this.code = code;
  }
}

function resolveRange(range: RawRange, counts: number[]): { kind: "chapters" | "verses"; spans: Span[] } {
  const chapters = counts.length;
  const { start, end } = range;

  if (start.verse === undefined) {
    const first = start.chapter;
    const last = end?.chapter ?? first;
    if (first < 1 || last < first) throw new ResolveFailure("reversed-range");
    if (chapters === 1 && end === undefined && first > 1) {
      return resolveRange({ start: { chapter: 1, verse: first } }, counts);
    }
    if (last > chapters) throw new ResolveFailure("chapter-out-of-range");
    const spans: Span[] = [];
    for (let chapter = first; chapter <= last; chapter += 1) {
      spans.push({ from: { chapter, verse: 1 }, to: { chapter, verse: counts[chapter - 1] ?? 0 } });
    }
    return { kind: "chapters", spans };
  }

  const from = start.verse;
  const chapter = start.chapter;
  if (chapter < 1 || chapter > chapters) throw new ResolveFailure("chapter-out-of-range");
  const lastVerseOfChapter = counts[chapter - 1] ?? 0;
  if (from < 1 || from > lastVerseOfChapter) throw new ResolveFailure("verse-out-of-range");

  if (range.open) {
    return { kind: "verses", spans: [{ from: { chapter, verse: from }, to: { chapter, verse: lastVerseOfChapter } }] };
  }

  const toChapter = end?.chapter ?? chapter;
  const toVerse = end?.verse ?? from;
  if (toChapter < chapter || (toChapter === chapter && toVerse < from)) throw new ResolveFailure("reversed-range");
  if (toChapter > chapters) throw new ResolveFailure("chapter-out-of-range");
  if (toVerse < 1 || toVerse > (counts[toChapter - 1] ?? 0)) throw new ResolveFailure("verse-out-of-range");
  return { kind: "verses", spans: [{ from: { chapter, verse: from }, to: { chapter: toChapter, verse: toVerse } }] };
}

function resolvePassage(passage: RawPassage, structure: VersesPerChapter): ResolvedPassage {
  const counts = structure[passage.book];
  if (!counts) throw new ResolveFailure("book-not-in-translation");

  if (passage.ranges.length === 0) {
    return {
      book: passage.book,
      language: passage.language,
      kind: "book",
      spans: [{ from: { chapter: 1, verse: 1 }, to: { chapter: 1, verse: counts[0] ?? 0 } }],
      duplicate: false,
    };
  }

  const spans: Span[] = [];
  let kind: "chapters" | "verses" = "verses";
  for (const range of passage.ranges) {
    const resolved = resolveRange(range, counts);
    spans.push(...resolved.spans);
    if (resolved.kind === "chapters") kind = "chapters";
  }
  return { book: passage.book, language: passage.language, kind, spans, duplicate: false };
}

export function passageKey(passage: ResolvedPassage): string {
  return JSON.stringify([passage.book, passage.spans]);
}

export function resolveReferences(parts: ParsedPart[], structure: VersesPerChapter): ResolvedPart[] {
  const seen = new Set<string>();
  return parts.map((part): ResolvedPart => {
    if ("error" in part) return { source: part.source, error: part.error };
    try {
      const passage = resolvePassage(part.passage, structure);
      const key = passageKey(passage);
      passage.duplicate = seen.has(key);
      seen.add(key);
      return { source: part.source, passage };
    } catch (error) {
      if (error instanceof ResolveFailure) return { source: part.source, error: error.code };
      throw error;
    }
  });
}
