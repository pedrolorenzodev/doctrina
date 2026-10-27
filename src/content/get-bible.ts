import { bibleBooks, getBibleBook } from "@/content/bible-books";
import type { BibleSource } from "@/content/bible/bible-source";
import { chapterNeighbors } from "@/content/bible/chapter-neighbors";
import { createLocalBibleSource } from "@/content/bible/local-source";
import { defaultTranslationId } from "@/content/bible/default-translation";
import { createSupabaseBibleSource } from "@/content/bible/supabase-source";
import type { BibleChapter, BibleTranslation, BibleVerse, ChapterRef, ChapterSummary } from "@/content/model/bible";
import type { Locale } from "@/lib/locale";

function chooseSource(): BibleSource {
  if (process.env.CORPUS_SOURCE !== "supabase") return createLocalBibleSource();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key)
    throw new Error("CORPUS_SOURCE=supabase needs NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
  return createSupabaseBibleSource(url, key);
}

let source: BibleSource | null = null;
const chapterIndexes = new Map<string, Promise<ChapterSummary[]>>();

function currentSource(): BibleSource {
  source ??= chooseSource();
  return source;
}

function chapterIndex(translationId: string): Promise<ChapterSummary[]> {
  let pending = chapterIndexes.get(translationId);
  if (!pending) {
    pending = getBibleTranslations().then((available) =>
      available.some((entry) => entry.id === translationId) ? currentSource().chapterIndex(translationId) : [],
    );
    chapterIndexes.set(translationId, pending);
  }
  return pending;
}

export function getBibleTranslations(): Promise<BibleTranslation[]> {
  return currentSource().translations();
}

export async function getBibleChapter(
  translationId: string,
  book: string,
  chapter: number,
): Promise<BibleChapter | null> {
  const translation = (await getBibleTranslations()).find((entry) => entry.id === translationId);
  if (!translation) return null;
  const neighbors = chapterNeighbors(await chapterIndex(translationId), { book, chapter });
  if (!neighbors) return null;
  const [verses, structure] = await Promise.all([
    currentSource().chapterVerses(translationId, book, chapter),
    currentSource().chapterStructure(translationId, book, chapter),
  ]);
  return { translation, book, chapter, verses, structure, ...neighbors };
}

export function getBibleVerse(
  translationId: string,
  book: string,
  chapter: number,
  verse: number,
): Promise<BibleVerse | null> {
  return currentSource().verse(translationId, book, chapter, verse);
}

export function getBibleChapterIndex(translationId: string): Promise<ChapterSummary[]> {
  return chapterIndex(translationId);
}

export async function getReadableChapters(locale: Locale): Promise<ChapterRef[]> {
  const translationIds = new Set(bibleBooks.map((book) => defaultTranslationId(locale, book)));
  const chapters: ChapterRef[] = [];
  for (const id of translationIds) {
    for (const { book, chapter } of await chapterIndex(id)) {
      const entry = getBibleBook(book);
      if (entry && defaultTranslationId(locale, entry) === id) chapters.push({ book, chapter });
    }
  }
  return chapters;
}

export async function getBibleChapterCounts(locale: Locale): Promise<Map<string, number>> {
  const counts = new Map<string, number>();
  for (const { book, chapter } of await getReadableChapters(locale)) {
    counts.set(book, Math.max(counts.get(book) ?? 0, chapter));
  }
  return counts;
}
