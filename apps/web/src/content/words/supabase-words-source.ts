import type { ChapterWords, LexiconEntry, VerseWord, WordLanguage, WordOccurrence } from "@doctrina/core/model/words";
import { createSupabaseSelect } from "@/content/supabase-rest";
import type { WordBrief, WordsSource } from "@/content/words/words-source";

const BRIEF_CHUNK = 150;

type OccurrenceRow = {
  n: number;
  n_any: number;
  verse_count: number;
  forms: Record<string, number>;
  form_morph: Record<string, Record<string, number>>;
};

export function createSupabaseWordsSource(url: string, secretKey: string): WordsSource {
  const select = createSupabaseSelect(url, secretKey, "corpus-words");
  const key = (value: string | number) => encodeURIComponent(String(value));

  return {
    async chapter(book, chapter) {
      const [row] = await select<{ lang: ChapterWords["lang"]; verses: ChapterWords["verses"] }>(
        `word_chapters?book=eq.${key(book)}&chapter=eq.${chapter}&select=lang,verses`,
      );
      return row ? { book, chapter, lang: row.lang, verses: row.verses } : null;
    },
    async lexiconEntry(_shard, id) {
      const [row] = await select<{ entry: LexiconEntry }>(`word_lexicon?id=eq.${key(id)}&select=entry`);
      return row?.entry ?? null;
    },
    async occurrence(_shard, id): Promise<WordOccurrence | null> {
      const [[row], places] = await Promise.all([
        select<OccurrenceRow>(`word_occurrences?id=eq.${key(id)}&select=n,n_any,verse_count,forms,form_morph`),
        select<{ book: string; refs: string[] }>(`word_places?id=eq.${key(id)}&select=book,refs&order=book_order`),
      ]);
      if (!row) return null;
      return {
        n: row.n,
        nAny: row.n_any,
        v: row.verse_count,
        b: Object.fromEntries(places.map((place) => [place.book, place.refs])),
        f: row.forms,
        fm: row.form_morph,
      };
    },
    async shardIds(shard) {
      const rows = await select<{ id: string }>(`word_lexicon?shard=eq.${key(shard)}&select=id&order=id`);
      return rows.map((row) => row.id);
    },
    async parseNames(language: WordLanguage) {
      const [row] = await select<{ names: Record<string, string> }>(
        `word_parse_names?language=eq.${language}&select=names`,
      );
      return row?.names ?? {};
    },
    async lexiconBrief(ids, book) {
      const found = new Map<string, WordBrief>();
      for (let start = 0; start < ids.length; start += BRIEF_CHUNK) {
        const list = ids
          .slice(start, start + BRIEF_CHUNK)
          .filter((id) => /^[A-Za-z0-9]+$/.test(id))
          .join(",");
        if (!list) continue;
        const [entries, places] = await Promise.all([
          select<{ id: string; lemma: string; tr: string; n: string }>(
            `word_lexicon?id=in.(${list})&select=id,lemma:entry->>lemma,tr:entry->>tr,n:entry->>n`,
          ),
          select<{ id: string; ref_count: number }>(
            `word_places?id=in.(${list})&book=eq.${key(book)}&select=id,ref_count`,
          ),
        ]);
        const counts = new Map(places.map((place) => [place.id, place.ref_count]));
        for (const entry of entries)
          found.set(entry.id, {
            lemma: entry.lemma,
            tr: entry.tr,
            n: Number(entry.n),
            verses: counts.get(entry.id) ?? 0,
          });
      }
      return found;
    },
    async placeWords(id) {
      const rows = await select<{ book: string; chapter: number; verse: number; words: VerseWord[] | null }>(
        `rpc/word_scan?p_id=${key(id)}`,
        5000,
      );
      return new Map(rows.map((row) => [`${row.book}.${row.chapter}.${row.verse}`, row.words ?? []]));
    },
    async hasData() {
      return (await select<{ id: string }>("word_manifest?id=eq.words&select=id")).length > 0;
    },
    chapters() {
      return select<{ book: string; chapter: number }>("word_chapters?select=book,chapter&order=book,chapter");
    },
  };
}
