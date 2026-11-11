import { biblePassage, fatherIdsByWork, fatherNames, passageFromRow } from "@/content/ai-search/collections";
import type { AuthorEntry, CorpusSearch, Passage, PassageRow } from "@/content/ai-search/types";
import { capPerGroup, rankVerseLinks, type VerseLink } from "@/content/ai-search/verse-links";
import { lookupVerseRefs } from "@/content/ai-search/verse-lookup";
import { workName } from "@/content/father-work-links";
import { AiError } from "@/lib/ai/errors";

const CACHE_MS = 10 * 60 * 1000;
const VERSION_MS = 60 * 1000;
const VERSE_LINKS_MAX = 5000;
const PAGE_ROWS = 1000;
const VERSE_CANDIDATES = 300;
const VERSE_PER_AUTHOR = 8;

const columns =
  "source_key,collection,speaker,doctrine,lang,work_id,edition_id,locator,part,author,year,title,edition_label,licence,translated_by_ai,max_quote_words,href,refs,text";

type Connection = { url: string; key: string };

function connection(): Connection {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) throw new AiError("ai_misconfigured");
  return { url, key };
}

const RETRY_AFTER_MS = 400;

type Fetch = typeof fetch;

export async function callRest<T>(path: string, init?: { body: unknown }, fetchImpl: Fetch = fetch): Promise<T> {
  const { url, key } = connection();
  const once = () =>
    fetchImpl(`${url}/rest/v1/${path}`, {
      method: init ? "POST" : "GET",
      headers: { apikey: key, "Content-Type": "application/json" },
      ...(init ? { body: JSON.stringify(init.body) } : {}),
      cache: "no-store",
    });
  let response: Response;
  try {
    response = await once();
    if (response.status >= 500) {
      console.error(`[ai] search 5xx ${response.status}`);
      await new Promise((resolve) => setTimeout(resolve, RETRY_AFTER_MS));
      response = await once();
      if (response.status >= 500) console.error(`[ai] search 5xx ${response.status}`);
    }
  } catch {
    throw new AiError("ai_provider_down");
  }
  if (!response.ok) throw new AiError(response.status >= 500 ? "ai_provider_down" : "ai_misconfigured");
  return (await response.json()) as T;
}

const call = <T>(path: string, init?: { body: unknown }) => callRest<T>(path, init);

type Ranked = PassageRow & { rank: number };

type VerseHit = { translation_id: string; book: string; chapter: number; verse: number; text: string; rank: number };

const traditionCache = new Map<string, { at: number; rows: PassageRow[] }>();
let authorCache: { at: number; value: AuthorEntry[] } | null = null;
let versionCache: { at: number; value: string } | null = null;

export const supabaseSearch: CorpusSearch = {
  id: "supabase",
  async searchPassages(query) {
    const locale = query.locale ?? "es";
    const rows = await call<Ranked[]>("rpc/ai_search_passages", {
      body: {
        p_terms_en: query.termsEn,
        p_phrases_en: query.phrasesEn,
        p_terms_es: query.termsEs,
        p_phrases_es: query.phrasesEs,
        p_collections: query.collections,
        p_doctrines: query.doctrines,
        p_speakers: query.speakers,
        p_authors: query.authors,
        p_works: query.works,
        p_limit: query.limit,
        p_per_group: query.perGroup,
      },
    });
    return rows.map((row) => ({ ...passageFromRow(row, locale), rank: row.rank }));
  },
  async searchVerses(query) {
    const locale = query.locale ?? query.lang;
    const rows = await call<VerseHit[]>("rpc/ai_search_verses", {
      body: {
        p_lang: query.lang,
        p_terms: query.terms,
        p_phrases: query.phrases,
        p_books: query.books,
        p_chapter: query.chapter,
        p_limit: query.limit,
      },
    });
    return rows.flatMap((row) => {
      const passage = biblePassage(
        {
          translationId: row.translation_id,
          book: row.book,
          chapter: row.chapter,
          verse: row.verse,
          verseEnd: null,
          text: row.text,
        },
        null,
        locale,
      );
      return passage ? [{ ...passage, rank: row.rank }] : [];
    });
  },
  async passagesByVerses(target, collection, limit, locale = "es") {
    const links: VerseLink[] = [];
    for (let offset = 0; offset < VERSE_LINKS_MAX; offset += PAGE_ROWS) {
      const page = await call<VerseLink[]>(
        `ai_scripture_links?select=passage_id,verse_from,kind,score,ai_passages!inner(collection)&ai_passages.collection=eq.${collection}&book=eq.${encodeURIComponent(target.book)}&chapter=eq.${target.chapter}&verse_from=lte.${target.to}&verse_to=gte.${target.from}&order=passage_id,verse_from,kind&limit=${PAGE_ROWS}&offset=${offset}`,
      );
      links.push(...page);
      if (page.length < PAGE_ROWS) break;
    }
    const ranked = rankVerseLinks(links);
    if (ranked.length === 0) return [];
    const chunks: number[][] = [];
    for (let at = 0; at < ranked.length; at += VERSE_CANDIDATES) {
      chunks.push(ranked.slice(at, at + VERSE_CANDIDATES).map((entry) => entry.passageId));
    }
    const rows = (
      await Promise.all(
        chunks.map((ids) =>
          call<(PassageRow & { id: number })[]>(
            `ai_passages?select=id,${columns}&collection=eq.${collection}&id=in.(${ids.join(",")})`,
          ),
        ),
      )
    ).flat();
    const byId = new Map(rows.map((row) => [row.id, row]));
    const hits = ranked.flatMap((entry) => {
      const row = byId.get(entry.passageId);
      return row
        ? [
            {
              ...passageFromRow(row, locale),
              rank: entry.rank,
              verses: entry.verses.map((verse) => `${target.book}.${target.chapter}.${verse}`),
            },
          ]
        : [];
    });
    return capPerGroup(hits, (hit) => hit.author ?? hit.father?.workId ?? hit.speaker, VERSE_PER_AUTHOR, limit);
  },
  lookupVerses(refs, translationId, locale = "es") {
    return lookupVerseRefs(refs, translationId, locale);
  },
  async traditionPassages(doctrine, locale = "es") {
    const cached = traditionCache.get(doctrine);
    let rows = cached && Date.now() - cached.at < CACHE_MS ? cached.rows : null;
    if (!rows) {
      rows = await call<PassageRow[]>(
        `ai_passages?collection=eq.tradition&doctrine=eq.${encodeURIComponent(doctrine)}&select=${columns}&order=id&limit=1000`,
      );
      traditionCache.set(doctrine, { at: Date.now(), rows });
    }
    return rows.map((row): Passage => passageFromRow(row, locale));
  },
  async authors() {
    if (authorCache && Date.now() - authorCache.at < CACHE_MS) return authorCache.value;
    const works = await call<{ id: string; title: string; author: string }[]>(
      "works?select=id,title,author&limit=1000",
    );
    const byWork = fatherIdsByWork(works);
    const byAuthor = new Map<string, AuthorEntry>();
    for (const work of works) {
      const author = byWork.get(work.id);
      if (!author) continue;
      const names = fatherNames(author);
      const entry = byAuthor.get(author) ?? {
        id: author,
        name: names?.es ?? author,
        ...(names ? { names } : {}),
        works: [],
      };
      entry.works.push({ id: work.id, title: workName(work.id, "es", work.title) });
      byAuthor.set(author, entry);
    }
    const value = [...byAuthor.values()];
    authorCache = { at: Date.now(), value };
    return value;
  },
  async corpusVersion() {
    if (versionCache && Date.now() - versionCache.at < VERSION_MS) return versionCache.value;
    const [row] = await call<{ corpus_version: string | null }[]>("ai_settings?select=corpus_version&id=eq.1");
    const value = row?.corpus_version ?? "unversioned";
    versionCache = { at: Date.now(), value };
    return value;
  },
};
