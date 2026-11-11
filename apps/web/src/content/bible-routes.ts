import { bibleBooks, getBibleBook, type BibleBook } from "@/content/bible-books";
import { bibleSegments } from "@/content/bible-segments";
import type { Locale } from "@doctrina/core/locale";

function slugify(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function bookSlug(locale: Locale, book: BibleBook): string {
  return slugify(book.names[locale]);
}

export function bookFromSlug(locale: Locale, slug: string): BibleBook | null {
  return bibleBooks.find((book) => bookSlug(locale, book) === slug) ?? null;
}

export function bibleChapterBase(locale: Locale, book: BibleBook): string {
  return `/${locale}/${bibleSegments[locale]}/${bookSlug(locale, book)}`;
}

export function bibleChapterHref(locale: Locale, book: BibleBook, chapter: number): string {
  return `${bibleChapterBase(locale, book)}/${chapter}`;
}

export function bibleVerseHref(locale: Locale, book: BibleBook, chapter: number, verse: number): string {
  return `${bibleChapterHref(locale, book, chapter)}/${verse}`;
}

export function bibleReferenceHref(locale: Locale, reference: string): string | null {
  const start = reference.split("-")[0] ?? "";
  const [id = "", chapter = "", verse] = start.split(".");
  const book = getBibleBook(id);
  if (!book || !/^\d+$/.test(chapter) || Number(chapter) < 1) return null;
  if (verse === undefined) return bibleChapterHref(locale, book, Number(chapter));
  if (!/^\d+$/.test(verse) || Number(verse) < 1) return null;
  return bibleVerseHref(locale, book, Number(chapter), Number(verse));
}

export function bibleBookRoute(locale: Locale, book: BibleBook): string {
  return `/${locale}/bible/${bookSlug(locale, book)}`;
}

export function bookRouteOf(pathname: string): string | null {
  const match = /^\/([a-z]{2})\/(?:bible|biblia)\/([^/]+)\/\d+(?:\/\d+)?$/.exec(pathname);
  return match ? `/${match[1]}/bible/${match[2]}` : null;
}

export function swapBibleLocale(pathname: string, from: Locale, to: Locale): string | null {
  const match = /^\/[a-z]{2}\/(?:bible|biblia)\/([^/]+)\/(\d+)(?:\/(\d+))?$/.exec(pathname);
  const book = match?.[1] ? bookFromSlug(from, match[1]) : null;
  if (!book || !match?.[2]) return null;
  return match[3]
    ? bibleVerseHref(to, book, Number(match[2]), Number(match[3]))
    : bibleChapterHref(to, book, Number(match[2]));
}
