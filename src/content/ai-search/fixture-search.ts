import fixture from "./fixture-passages.json" with { type: "json" };
import { biblePassage, bibleOrdinal, fatherNames, osisParts, passageFromRow } from "@/content/ai-search/collections";
import type { AuthorEntry, CorpusSearch, Passage, PassageRow } from "@/content/ai-search/types";
import { scoreText } from "@/content/ai-search/windows";
import { workName } from "@/content/father-work-links";
import type { Locale } from "@/lib/locale";

type FixtureVerse = { translationId: string; book: string; chapter: number; verse: number; text: string };

const rows = fixture.rows as PassageRow[];
const verses = fixture.verses as FixtureVerse[];

const MIN_RANK = 0.0001;

function groupLimit<T extends { rank: number }>(items: T[], groupOf: (item: T) => string, perGroup: number): T[] {
  const taken = new Map<string, number>();
  return items.filter((item) => {
    const key = groupOf(item);
    const used = taken.get(key) ?? 0;
    taken.set(key, used + 1);
    return used < Math.max(perGroup, 1);
  });
}

function verseOf(entry: FixtureVerse, locale: Locale): Passage | null {
  return biblePassage({ ...entry, verseEnd: null }, null, locale);
}

export const fixtureSearch: CorpusSearch = {
  id: "fixture",
  async searchPassages(query) {
    const locale = query.locale ?? "es";
    const scored = rows
      .filter(
        (row) =>
          query.collections.includes(row.collection) &&
          (query.doctrines === null || row.doctrine === null || query.doctrines.includes(row.doctrine)) &&
          (query.speakers === null || query.speakers.includes(row.speaker)) &&
          (query.authors === null || (row.author !== null && query.authors.includes(row.author))) &&
          (query.works === null || (row.work_id !== null && query.works.includes(row.work_id))),
      )
      .map((row) => ({
        row,
        rank:
          row.lang === "es"
            ? scoreText(row.text, query.termsEs, query.phrasesEs)
            : scoreText(row.text, query.termsEn, query.phrasesEn),
      }))
      .filter((entry) => entry.rank > MIN_RANK)
      .sort((a, b) => b.rank - a.rank || a.row.source_key.localeCompare(b.row.source_key));
    const limited = groupLimit(scored, (entry) => entry.row.author ?? entry.row.speaker, query.perGroup);
    return limited.slice(0, Math.min(Math.max(query.limit, 1), 60)).map((entry) => ({
      ...passageFromRow(entry.row, locale),
      rank: entry.rank,
    }));
  },
  async searchVerses(query) {
    const locale = query.locale ?? query.lang;
    return verses
      .filter(
        (entry) =>
          (query.lang === "es" ? entry.translationId === "rv1909" : entry.translationId === "bsb") &&
          (query.books === null || query.books.includes(entry.book)) &&
          (query.chapter === null || query.chapter === entry.chapter),
      )
      .map((entry) => ({ entry, rank: scoreText(entry.text, query.terms, query.phrases) }))
      .filter((hit) => hit.rank > MIN_RANK)
      .sort((a, b) => b.rank - a.rank)
      .slice(0, Math.min(Math.max(query.limit, 1), 30))
      .flatMap((hit) => {
        const passage = verseOf(hit.entry, locale);
        return passage ? [{ ...passage, rank: hit.rank }] : [];
      });
  },
  async passagesByVerses() {
    return [];
  },
  async lookupVerses(refs, translationId, locale = "es") {
    const found: Passage[] = [];
    for (const ref of refs) {
      const parts = osisParts(ref);
      if (!parts || parts.verse === null) continue;
      const last = parts.verseEnd ?? parts.verse;
      const texts = verses
        .filter(
          (entry) =>
            entry.translationId === translationId &&
            entry.book === parts.book &&
            entry.chapter === parts.chapter &&
            entry.verse >= (parts.verse ?? 0) &&
            entry.verse <= last,
        )
        .sort((a, b) => a.verse - b.verse);
      const first = texts[0];
      const tail = texts[texts.length - 1];
      if (!first || !tail) continue;
      const passage = biblePassage(
        {
          translationId,
          book: parts.book,
          chapter: parts.chapter,
          verse: first.verse,
          verseEnd: tail.verse,
          text: texts.map((entry) => entry.text).join(" "),
        },
        null,
        locale,
      );
      if (passage) found.push(passage);
    }
    return found.sort(
      (a, b) =>
        (bibleOrdinal.get(a.bible?.book ?? "") ?? 0) - (bibleOrdinal.get(b.bible?.book ?? "") ?? 0) ||
        (a.bible?.chapter ?? 0) - (b.bible?.chapter ?? 0) ||
        (a.bible?.verse ?? 0) - (b.bible?.verse ?? 0),
    );
  },
  async traditionPassages(doctrine, locale = "es") {
    return rows
      .filter((row) => row.collection === "tradition" && row.doctrine === doctrine)
      .map((row) => passageFromRow(row, locale));
  },
  async authors() {
    const byAuthor = new Map<string, AuthorEntry>();
    for (const row of rows) {
      if (row.collection !== "fathers" || !row.author || !row.work_id) continue;
      const names = fatherNames(row.author);
      const entry = byAuthor.get(row.author) ?? {
        id: row.author,
        name: names?.es ?? row.author,
        ...(names ? { names } : {}),
        works: [],
      };
      if (!entry.works.some((work) => work.id === row.work_id)) {
        entry.works.push({ id: row.work_id, title: workName(row.work_id, "es", row.title) });
      }
      byAuthor.set(row.author, entry);
    }
    return [...byAuthor.values()];
  },
  async corpusVersion() {
    return "fixture";
  },
};
