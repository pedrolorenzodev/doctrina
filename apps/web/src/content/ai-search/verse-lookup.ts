import { biblePassage, bibleOrdinal, osisParts } from "@/content/ai-search/collections";
import type { Passage } from "@/content/ai-search/types";
import { getBibleVerseTexts } from "@/content/get-bible";
import type { Locale } from "@/lib/locale";

export async function lookupVerseRefs(refs: string[], translationId: string, locale: Locale): Promise<Passage[]> {
  const wanted = refs.flatMap((ref) => {
    const parts = osisParts(ref);
    return parts && parts.verse !== null ? [{ ...parts, verse: parts.verse }] : [];
  });
  if (wanted.length === 0) return [];
  const verseRefs = wanted.flatMap((ref) =>
    Array.from({ length: (ref.verseEnd ?? ref.verse) - ref.verse + 1 }, (_, offset) => ({
      book: ref.book,
      chapter: ref.chapter,
      verse: ref.verse + offset,
    })),
  );
  const texts = await getBibleVerseTexts(translationId, verseRefs);
  const passages = wanted.flatMap((ref) => {
    const last = ref.verseEnd ?? ref.verse;
    const pieces: { verse: number; text: string }[] = [];
    for (let verse = ref.verse; verse <= last; verse += 1) {
      const text = texts.get(`${ref.book}.${ref.chapter}.${verse}`);
      if (text) pieces.push({ verse, text });
    }
    const first = pieces[0];
    const tail = pieces[pieces.length - 1];
    if (!first || !tail) return [];
    const passage = biblePassage(
      {
        translationId,
        book: ref.book,
        chapter: ref.chapter,
        verse: first.verse,
        verseEnd: tail.verse,
        text: pieces.map((piece) => piece.text).join(" "),
      },
      null,
      locale,
    );
    return passage ? [passage] : [];
  });
  return passages.sort(
    (a, b) =>
      (bibleOrdinal.get(a.bible?.book ?? "") ?? 0) - (bibleOrdinal.get(b.bible?.book ?? "") ?? 0) ||
      (a.bible?.chapter ?? 0) - (b.bible?.chapter ?? 0) ||
      (a.bible?.verse ?? 0) - (b.bible?.verse ?? 0),
  );
}
