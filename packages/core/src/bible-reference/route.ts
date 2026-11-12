import { bibleBooks, getBibleBook } from "@doctrina/core/bible-books";
import { bibleChapterHref } from "@doctrina/core/bible-routes";
import { bibleSegments } from "@doctrina/core/bible-segments";
import type { BookId, NameLanguage } from "@doctrina/core/bible-reference/names";
import type { ParsedPart, RawRange } from "@doctrina/core/bible-reference/parse";
import type { Position, ResolvedPassage } from "@doctrina/core/bible-reference/resolve";
import { translationForLanguage } from "@doctrina/core/bible-reference/language";

export type ReaderRoute = {
  kind: "reader";
  href: string;
  translation: string;
  book: BookId;
  chapter: number;
  verse: number | null;
  wholeBook: boolean;
};

export type StackRoute = {
  kind: "stack";
  href: string;
  translation: string;
  tokens: string[];
};

export type Route = ReaderRoute | StackRoute | null;

const stackSegment: Record<NameLanguage, string> = { es: "leer", en: "read" };

const bookByToken = new Map(bibleBooks.map((book) => [book.id.toLowerCase(), book.id]));

function sameChapter(from: Position, to: Position): boolean {
  return from.chapter === to.chapter;
}

export function passageToken(passage: ResolvedPassage): string {
  const id = passage.book.toLowerCase();
  const first = passage.spans[0];
  const last = passage.spans[passage.spans.length - 1];
  if (!first || !last) throw new Error(`empty passage ${passage.book}`);
  if (passage.kind !== "verses") {
    return first.from.chapter === last.to.chapter
      ? `${id}.${first.from.chapter}`
      : `${id}.${first.from.chapter}-${last.to.chapter}`;
  }
  if (passage.spans.length === 1 && !sameChapter(first.from, first.to)) {
    return `${id}.${first.from.chapter}.${first.from.verse}-${first.to.chapter}.${first.to.verse}`;
  }
  if (passage.spans.some((span) => !sameChapter(span.from, first.from)))
    throw new Error(`mixed chapters in ${passage.book}`);
  const verses = passage.spans
    .map((span) => (span.from.verse === span.to.verse ? `${span.from.verse}` : `${span.from.verse}-${span.to.verse}`))
    .join(",");
  return `${id}.${first.from.chapter}.${verses}`;
}

export function parseRouteTokens(tokens: string): ParsedPart[] {
  return tokens
    .split(";")
    .map((source) => source.trim())
    .filter((source) => source !== "")
    .map((source): ParsedPart => {
      const match = /^([0-9a-z]+)\.(.+)$/.exec(source);
      const book = match ? bookByToken.get(match[1] ?? "") : undefined;
      if (!match || !book) return { source, error: "unknown-book" };
      const rest = match[2] ?? "";
      const ranges = rangesOf(rest);
      if (!ranges) return { source, error: "bad-locator" };
      return { source, passage: { book, language: "both", ranges } };
    });
}

function rangesOf(rest: string): RawRange[] | null {
  const chapter = /^(\d+)$/.exec(rest);
  if (chapter) return [{ start: { chapter: Number(chapter[1]) } }];
  const chapters = /^(\d+)-(\d+)$/.exec(rest);
  if (chapters) return [{ start: { chapter: Number(chapters[1]) }, end: { chapter: Number(chapters[2]) } }];
  const cross = /^(\d+)\.(\d+)-(\d+)\.(\d+)$/.exec(rest);
  if (cross) {
    return [
      {
        start: { chapter: Number(cross[1]), verse: Number(cross[2]) },
        end: { chapter: Number(cross[3]), verse: Number(cross[4]) },
      },
    ];
  }
  const verses = /^(\d+)\.(\d+(?:-\d+)?(?:,\d+(?:-\d+)?)*)$/.exec(rest);
  if (!verses) return null;
  const chapterNumber = Number(verses[1]);
  return (verses[2] ?? "").split(",").map((item): RawRange => {
    const [from = "", to] = item.split("-");
    return to === undefined
      ? { start: { chapter: chapterNumber, verse: Number(from) } }
      : { start: { chapter: chapterNumber, verse: Number(from) }, end: { chapter: chapterNumber, verse: Number(to) } };
  });
}

export function routeFor(passages: ResolvedPassage[], language: NameLanguage): Route {
  const active = passages.filter((passage) => !passage.duplicate);
  const translation = translationForLanguage(language);
  if (active.length === 0) return null;

  const [only] = active;
  const onlySpan = only?.spans[0];
  if (only && active.length === 1 && onlySpan && only.spans.length === 1) {
    const book = getBibleBook(only.book);
    const { from, to } = onlySpan;
    if (book && only.kind === "book") {
      return {
        kind: "reader",
        href: bibleChapterHref(language, book, 1),
        translation,
        book: book.id,
        chapter: 1,
        verse: null,
        wholeBook: true,
      };
    }
    if (book && only.kind === "chapters" && sameChapter(from, to)) {
      return {
        kind: "reader",
        href: bibleChapterHref(language, book, from.chapter),
        translation,
        book: book.id,
        chapter: from.chapter,
        verse: null,
        wholeBook: false,
      };
    }
    if (book && only.kind === "verses" && sameChapter(from, to)) {
      const href = `${bibleChapterHref(language, book, from.chapter)}#v-${from.verse}`;
      return {
        kind: "reader",
        href,
        translation,
        book: book.id,
        chapter: from.chapter,
        verse: from.verse,
        wholeBook: false,
      };
    }
  }

  const tokens = active.map(passageToken);
  return {
    kind: "stack",
    href: `/${language}/${bibleSegments[language]}/${stackSegment[language]}?p=${tokens.join(";")}`,
    translation,
    tokens,
  };
}
