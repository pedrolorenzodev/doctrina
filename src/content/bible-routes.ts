import { bibleBooks, type BibleBook } from "@/content/bible-books";
import { bibleSegments } from "@/content/bible-segments";
import type { Locale } from "@/lib/locale";

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

export function bibleChapterHref(locale: Locale, book: BibleBook, chapter: number): string {
  return `/${locale}/${bibleSegments[locale]}/${bookSlug(locale, book)}/${chapter}`;
}

export function bibleBookRoute(locale: Locale, book: BibleBook): string {
  return `/${locale}/bible/${bookSlug(locale, book)}`;
}

export function bookRouteOf(pathname: string): string | null {
  return /^\/[a-z]{2}\/bible\/[^/]+(?=\/\d+$)/.exec(pathname)?.[0] ?? null;
}
