import { getBibleBook } from "@/content/bible-books";
import type { ChapterRef, ChapterSummary } from "@/content/model/bible";

function bookOrdinal(book: string): number {
  return getBibleBook(book)?.ordinal ?? Number.MAX_SAFE_INTEGER;
}

export function sortChapters(chapters: ChapterSummary[]): ChapterSummary[] {
  return [...chapters].sort((a, b) => bookOrdinal(a.book) - bookOrdinal(b.book) || a.chapter - b.chapter);
}

export function chapterNeighbors(
  sorted: ChapterSummary[],
  at: ChapterRef,
): { previous: ChapterRef | null; next: ChapterRef | null } | null {
  const index = sorted.findIndex((entry) => entry.book === at.book && entry.chapter === at.chapter);
  if (index < 0) return null;
  const pick = (entry: ChapterSummary | undefined): ChapterRef | null =>
    entry ? { book: entry.book, chapter: entry.chapter } : null;
  return { previous: pick(sorted[index - 1]), next: pick(sorted[index + 1]) };
}
