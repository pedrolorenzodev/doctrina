import {
  MAX_QUOTES,
  PACK_TOKEN_BUDGET,
  PACK_TOKEN_BUDGET_BRIEF,
  WINDOW_CHARS,
  type AskRequest,
  type SearchPlan,
} from "@/lib/ai/contracts";
import {
  bibleLang,
  bibleOrdinal,
  briefQuotas,
  osisParts,
  richQuotas,
  type OsisRef,
} from "@/content/ai-search/collections";
import { buildCoverage } from "@/content/ai-search/coverage";
import type {
  AuthorEntry,
  CorpusSearch,
  EvidencePack,
  PackPassage,
  Passage,
  VerseTarget,
} from "@/content/ai-search/types";
import { fold, quotedShare, scoreText, windowAround } from "@/content/ai-search/windows";
import { getBibleBook } from "@/content/bible-books";
import { bookNames } from "@/content/verse-names";
import { doctrineIds, traditionIds, type DoctrineId, type TraditionId } from "@/content/model/ids";
import type { Locale } from "@/lib/locale";

type Ranked = Passage & { rank: number };

const MIN_RANK = 0.01;
const MIN_EXCERPT_WORDS = 8;
const CHARS_PER_TOKEN = 3.2;
const HEADER_CHARS = 220;
const WINDOW_STEPS = [WINDOW_CHARS, 900, 700, 500];
const FATHER_POOL = 60;
const VERSE_POOL = 12;
const NAMED_AUTHOR_POOL = 12;
const NAMED_CAP = 8;
const NAMED_CAP_BRIEF = 4;
const VERSE_HITS = 60;
const VERSE_RANK = 100;
const TOPIC_WEIGHT = 1;
const BARE_QUOTE_SHARE = 0.6;
const BARE_PENALTY = 1.5;
const VERSE_WORDS = 22;
const ANTE_NICENE_YEAR = 325;
const MAX_VERSE_TARGETS = 4;
const VERSE_QUESTION = /(?<![\p{L}])(?:vers[ií]culos?|cap[ií]tulos?|verses?|chapters?)(?![\p{L}])/iu;
const CHAPTER_QUESTION = /(?<![\p{L}])(?:cap[ií]tulos?|chapters?)(?![\p{L}])/iu;
const BIBLICAL_NAMES = new Set([
  "juan",
  "pedro",
  "pablo",
  "mateo",
  "marcos",
  "lucas",
  "santiago",
  "james",
  "peter",
  "matthew",
]);
const WANTS_ALL = /(?<![\p{L}])(?:tod[oa]s|all|every|exhaustiv\p{L}*)(?![\p{L}])/iu;

const collectionOrder = ["bible", "fathers", "tradition", "doctrine", "glossary", "mine"] as const;

type Allowed = { bible: boolean; fathers: boolean; tradition: boolean; doctrine: boolean; glossary: boolean };

function scopedTo(allowed: Allowed, sources: SearchPlan["sources"]): Allowed {
  if (!sources || sources.length === 0) return allowed;
  const wanted = new Set<string>(sources.map((source) => (source === "traditions" ? "tradition" : source)));
  return {
    bible: allowed.bible && wanted.has("bible"),
    fathers: allowed.fathers && wanted.has("fathers"),
    tradition: allowed.tradition && wanted.has("tradition"),
    doctrine: allowed.doctrine && wanted.has("doctrine"),
    glossary: allowed.glossary && wanted.has("glossary"),
  };
}

function allowedFor(request: AskRequest): Allowed {
  const scope =
    request.scope === "chapter" && request.here.kind === "father"
      ? "work"
      : request.scope === "work" && request.here.kind === "bible"
        ? "chapter"
        : request.scope;
  const none = { bible: false, fathers: false, tradition: false, doctrine: false, glossary: false };
  if (scope === "chapter") return { ...none, bible: true, tradition: true };
  if (scope === "work") return { ...none, fathers: true };
  if (scope === "bible") return { ...none, bible: true };
  if (scope === "fathers") return { ...none, fathers: true };
  return { bible: true, fathers: true, tradition: true, doctrine: true, glossary: true };
}

function chapterOf(request: AskRequest): { book: string; chapter: number } | null {
  const chapterScoped = request.scope === "chapter" || (request.scope === "work" && request.here.kind === "bible");
  return chapterScoped && request.here.kind === "bible"
    ? { book: request.here.book, chapter: request.here.chapter }
    : null;
}

function mainTranslation(request: AskRequest): string {
  if (request.here.kind === "bible") return request.here.translation;
  return request.locale === "es" ? "rv1909" : "bsb";
}

function translationFor(book: string, request: AskRequest): string {
  const entry = getBibleBook(book);
  if (entry?.section === "deuterocanon") return "dra";
  return mainTranslation(request);
}

function matchAuthors(wanted: string[], authors: AuthorEntry[]): { ids: string[]; missing: string[] } {
  const ids = new Set<string>();
  const missing: string[] = [];
  for (const raw of wanted) {
    const query = fold(raw).trim();
    if (query.length < 3) continue;
    const found = authors.filter(
      (author) =>
        fold(author.id) === query ||
        [author.name, author.names?.es, author.names?.en].some((name) => {
          const folded = fold(name ?? "");
          return folded.length > 0 && (folded === query || folded.includes(query) || query.includes(folded));
        }),
    );
    if (found.length === 0) missing.push(raw);
    for (const author of found) ids.add(author.id);
  }
  return { ids: [...ids], missing };
}

function matchWorks(wanted: string[], authors: AuthorEntry[]): string[] {
  const ids = new Set<string>();
  for (const raw of wanted) {
    const query = fold(raw).trim();
    if (query.length < 3) continue;
    for (const author of authors) {
      for (const work of author.works) {
        if (fold(work.id) === query || fold(work.title).includes(query)) ids.add(work.id);
      }
    }
  }
  return [...ids];
}

function questionTerms(question: string): string[] {
  return [
    ...new Set(
      fold(question)
        .split(/[^\p{L}\p{N}]+/u)
        .filter((word) => word.length >= 5),
    ),
  ].slice(0, 8);
}

function scoreOf(passage: Passage, plan: SearchPlan, fallback: string[]): number {
  const es = passage.lang === "es";
  const terms = es ? plan.termsEs : plan.termsEn;
  const phrases = es ? plan.phrasesEs : plan.phrasesEn;
  return scoreText(passage.text, terms.length + phrases.length > 0 ? terms : fallback, phrases);
}

const BOOK_MENTION = new RegExp(
  `(?<![\\p{L}])(?:${[...new Set(Object.values(bookNames).flatMap((names) => [names.es, names.en]))]
    .map((name) =>
      fold(name)
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        .replace(/ /g, "\\s?"),
    )
    .join("|")})\\s+\\d`,
  "iu",
);

export function namesPassage(request: AskRequest): boolean {
  return (
    request.selection?.at.kind === "verse" ||
    BOOK_MENTION.test(fold(request.question)) ||
    (request.here.kind === "bible" && VERSE_QUESTION.test(request.question))
  );
}

export function verseTargets(plan: SearchPlan, request: AskRequest): VerseTarget[] {
  const fromPlan = plan.bibleRefs.flatMap((ref): VerseTarget[] => {
    const parts = osisParts(ref);
    if (!parts) return [];
    const from = parts.verse ?? 1;
    return [{ book: parts.book, chapter: parts.chapter, from, to: parts.verseEnd ?? parts.verse ?? 999 }];
  });
  const wholeChapter: VerseTarget[] =
    request.here.kind === "bible" && CHAPTER_QUESTION.test(request.question)
      ? [{ book: request.here.book, chapter: request.here.chapter, from: 1, to: 999 }]
      : [];
  if (fromPlan.length > 0 || wholeChapter.length > 0) {
    const seen = new Set<string>();
    return [...wholeChapter, ...fromPlan]
      .filter((target) => {
        const key = `${target.book}.${target.chapter}.${target.from}.${target.to}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, MAX_VERSE_TARGETS);
  }
  const at = request.selection?.at;
  if (at?.kind === "verse") return [{ book: at.book, chapter: at.chapter, from: at.verse, to: at.verse }];
  if (request.here.kind === "bible" && VERSE_QUESTION.test(request.question)) {
    return [{ book: request.here.book, chapter: request.here.chapter, from: 1, to: 999 }];
  }
  return [];
}

function anchoredFathers(
  hits: (Ranked & { verses: string[] })[][],
  keep: (passage: Ranked) => boolean,
  topical: (passage: Passage) => number = () => 0,
): Ranked[] {
  const best = new Map<string, Ranked>();
  for (const hit of hits.flat()) {
    if (!keep(hit)) continue;
    const division = hit.father ? `${hit.father.workId}:${hit.father.editionId}:${hit.father.locator}` : hit.key;
    const words = hit.text.split(/\s+/).length;
    const repeats =
      quotedShare(hit.text) > BARE_QUOTE_SHARE || hit.verses.length * VERSE_WORDS >= BARE_QUOTE_SHARE * words;
    const bare = hit.collection === "fathers" && repeats ? BARE_PENALTY : 0;
    const ranked = {
      ...hit,
      refs: hit.verses,
      rank: VERSE_RANK + hit.rank + TOPIC_WEIGHT * Math.min(topical(hit), 1) - bare,
    };
    const current = best.get(division);
    if (!current || ranked.rank > current.rank) best.set(division, ranked);
  }
  return [...best.values()].sort((a, b) => b.rank - a.rank);
}

function refsInChapter(refs: string[], book: string, chapter: number): boolean {
  return refs.some((ref) => {
    const parts = osisParts(ref);
    return parts !== null && parts.book === book && parts.chapter === chapter;
  });
}

function pickTradition(rows: Ranked[], quota: number, answerLang: Locale): { chosen: Ranked[]; rest: Ranked[] } {
  const own = rows.filter((row) => !row.key.includes(":cite:"));
  const definition = own.filter((row) => row.key.endsWith(":definition"));
  const statements = own
    .filter((row) => !row.key.endsWith(":definition"))
    .map((row, index) => ({ row, index }))
    .sort((a, b) => b.row.rank - a.row.rank || a.index - b.index)
    .map((entry) => entry.row);
  const excerptsByCite = new Map<string, Ranked>();
  for (const row of rows.filter((entry) => entry.key.includes(":cite:"))) {
    const cite = row.key.split(":").slice(0, -1).join(":");
    const current = excerptsByCite.get(cite);
    const better = !current || (row.lang === answerLang && current.lang !== answerLang);
    if (better) excerptsByCite.set(cite, row);
  }
  const excerpts = [...excerptsByCite.values()]
    .filter((row) => row.text.split(/\s+/).length >= MIN_EXCERPT_WORDS)
    .sort((a, b) => b.rank - a.rank);
  const chosen: Ranked[] = definition.slice(0, 1);
  const statementSlots = Math.max(quota - chosen.length - (excerpts.length > 0 ? 1 : 0), 0);
  chosen.push(...statements.slice(0, statementSlots));
  chosen.push(...excerpts.slice(0, Math.max(quota - chosen.length, 0)));
  if (chosen.length < quota) chosen.push(...statements.slice(statementSlots, statementSlots + quota - chosen.length));
  const taken = new Set(chosen.map((row) => row.key));
  return { chosen, rest: [...statements, ...excerpts].filter((row) => !taken.has(row.key)) };
}

function selectFathers(
  pool: Ranked[],
  quota: number,
  capOf: (author: string) => number,
  answerLang: Locale,
): { chosen: Ranked[]; rest: Ranked[] } {
  const editionPerLocator = new Map<string, string>();
  const byLocator = new Map<string, Ranked[]>();
  for (const passage of pool) {
    if (!passage.father) continue;
    const key = `${passage.father.workId}:${passage.father.locator}`;
    byLocator.set(key, [...(byLocator.get(key) ?? []), passage]);
  }
  for (const [key, candidates] of byLocator) {
    const preferred = candidates.find((candidate) => candidate.lang === answerLang) ?? candidates[0];
    if (preferred?.father) editionPerLocator.set(key, preferred.father.editionId);
  }
  const bestRank = new Map(
    [...byLocator].map(([key, candidates]) => [key, Math.max(...candidates.map((candidate) => candidate.rank))]),
  );
  const unique = pool
    .filter(
      (passage) =>
        passage.father &&
        editionPerLocator.get(`${passage.father.workId}:${passage.father.locator}`) === passage.father.editionId,
    )
    .map((passage) => ({
      ...passage,
      rank: Math.max(passage.rank, bestRank.get(`${passage.father?.workId}:${passage.father?.locator}`) ?? 0),
    }))
    .sort((a, b) => b.rank - a.rank || a.key.localeCompare(b.key));
  const perAuthorList = new Map<string, Ranked[]>();
  for (const passage of unique) {
    const author = passage.author ?? passage.father?.workId ?? passage.key;
    perAuthorList.set(author, [...(perAuthorList.get(author) ?? []), passage]);
  }
  const tiers: Ranked[] = [];
  const deepest = Math.max(0, ...[...perAuthorList].map(([author]) => capOf(author)));
  for (let tier = 0; tier < deepest; tier += 1) {
    const layer = [...perAuthorList].flatMap(([author, list]) => {
      const item = list[tier];
      return item && tier < capOf(author) ? [item] : [];
    });
    tiers.push(...layer.sort((a, b) => b.rank - a.rank));
  }
  const chosen = tiers.slice(0, quota);
  const taken = new Set(chosen.map((passage) => passage.key));
  return { chosen, rest: unique.filter((passage) => !taken.has(passage.key)) };
}

function refKey(ref: OsisRef): string {
  return `${ref.book}.${ref.chapter}.${ref.verse}`;
}

function refString(ref: OsisRef): string {
  return `${refKey(ref)}${ref.verseEnd ? `-${ref.verseEnd}` : ""}`;
}

function covered(ref: OsisRef, kept: OsisRef[]): boolean {
  if (ref.verse === null) return false;
  const first = ref.verse;
  const last = ref.verseEnd ?? ref.verse;
  return kept.some(
    (other) =>
      other.book === ref.book &&
      other.chapter === ref.chapter &&
      other.verse !== null &&
      first <= (other.verseEnd ?? other.verse) &&
      last >= other.verse,
  );
}

function bestPerVerse(hits: Ranked[], request: AskRequest): Ranked[] {
  const right = (hit: Ranked) =>
    hit.bible !== null && hit.bible.translationId === translationFor(hit.bible.book, request);
  const byVerse = new Map<string, Ranked>();
  for (const hit of hits) {
    if (!hit.bible) continue;
    const id = `${hit.bible.book}.${hit.bible.chapter}.${hit.bible.verse}`;
    const current = byVerse.get(id);
    if (!current || (right(hit) && !right(current)) || (right(hit) === right(current) && hit.rank > current.rank)) {
      byVerse.set(id, hit);
    }
  }
  return [...byVerse.values()].sort((a, b) => b.rank - a.rank);
}

async function alignTranslations(hits: Ranked[], request: AskRequest, search: CorpusSearch): Promise<Ranked[]> {
  const aligned = await Promise.all(
    hits.map(async (hit): Promise<Ranked[]> => {
      if (!hit.bible) return [];
      const wanted = translationFor(hit.bible.book, request);
      if (hit.bible.translationId === wanted) return [hit];
      const ref = `${hit.bible.book}.${hit.bible.chapter}.${hit.bible.verse}`;
      const [found] = await search.lookupVerses([ref], wanted, request.locale);
      return found ? [{ ...found, rank: hit.rank }] : [];
    }),
  );
  return aligned.flat();
}

function hitCovered(hit: Passage, kept: OsisRef[]): boolean {
  return hit.bible
    ? covered({ book: hit.bible.book, chapter: hit.bible.chapter, verse: hit.bible.verse, verseEnd: null }, kept)
    : false;
}

function roundRobinRefs(groups: string[][], cap: number, keep: (ref: OsisRef) => boolean): OsisRef[] {
  const kept: OsisRef[] = [];
  const parsed = groups.map((refs) =>
    refs.flatMap((ref) => {
      const parts = osisParts(ref);
      return parts && parts.verse !== null && keep(parts) ? [parts] : [];
    }),
  );
  for (let round = 0; kept.length < cap && round < 40; round += 1) {
    for (const group of parsed) {
      const next = group.find((ref) => !covered(ref, kept));
      if (next && kept.length < cap) kept.push(next);
    }
  }
  return kept;
}

function canonical(passages: Passage[]): Passage[] {
  const rankOfCollection = new Map(collectionOrder.map((name, index) => [name, index]));
  const rankOfTradition = new Map<string, number>(traditionIds.map((name, index) => [name, index]));
  const numeric = (text: string) =>
    text
      .split(/[^0-9]+/)
      .filter(Boolean)
      .map(Number);
  const compareNumbers = (a: number[], b: number[]) => {
    for (let index = 0; index < Math.max(a.length, b.length); index += 1) {
      const difference = (a[index] ?? -1) - (b[index] ?? -1);
      if (difference !== 0) return difference;
    }
    return 0;
  };
  return [...passages].sort((a, b) => {
    const byCollection = (rankOfCollection.get(a.collection) ?? 9) - (rankOfCollection.get(b.collection) ?? 9);
    if (byCollection !== 0) return byCollection;
    if (a.collection === "bible") {
      return (
        (bibleOrdinal.get(a.bible?.book ?? "") ?? 0) - (bibleOrdinal.get(b.bible?.book ?? "") ?? 0) ||
        (a.bible?.chapter ?? 0) - (b.bible?.chapter ?? 0) ||
        (a.bible?.verse ?? 0) - (b.bible?.verse ?? 0) ||
        (a.bible?.translationId ?? "").localeCompare(b.bible?.translationId ?? "")
      );
    }
    if (a.collection === "fathers") {
      return (
        (a.year ?? 9999) - (b.year ?? 9999) ||
        (a.author ?? "").localeCompare(b.author ?? "") ||
        (a.father?.workId ?? "").localeCompare(b.father?.workId ?? "") ||
        compareNumbers(numeric(a.father?.locator ?? ""), numeric(b.father?.locator ?? "")) ||
        a.key.localeCompare(b.key)
      );
    }
    if (a.collection === "tradition") {
      const kind = (passage: Passage) =>
        passage.key.endsWith(":definition") ? 0 : passage.key.includes(":cite:") ? 2 : 1;
      return (
        (rankOfTradition.get(a.speaker) ?? 9) - (rankOfTradition.get(b.speaker) ?? 9) ||
        (a.doctrine ?? "").localeCompare(b.doctrine ?? "") ||
        kind(a) - kind(b) ||
        a.key.localeCompare(b.key)
      );
    }
    return a.key.localeCompare(b.key);
  });
}

function packOf(passages: Passage[], terms: string[], maxChars: number, firstId: number): PackPassage[] {
  return passages.map((passage, index) => ({
    ...passage,
    id: `P${firstId + index}`,
    ...(passage.collection === "mine"
      ? { window: passage.text, windowStart: 0 }
      : windowAround(passage.text, terms, maxChars)),
  }));
}

const tokensOf = (passages: PackPassage[]) =>
  Math.ceil(passages.reduce((sum, passage) => sum + passage.window.length + HEADER_CHARS, 0) / CHARS_PER_TOKEN);

function notePassages(request: AskRequest, plan: SearchPlan, quota: number): Passage[] {
  const terms = [...plan.termsEn, ...plan.termsEs, ...questionTerms(request.question)];
  const phrases = [...plan.phrasesEn, ...plan.phrasesEs];
  const label = request.locale === "es" ? { who: "Tu nota", fallback: "Nota" } : { who: "Your note", fallback: "Note" };
  return request.notes
    .map((note, index) => ({ note, index, score: scoreText(note.text, terms, phrases) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, quota)
    .map(({ note, index }) => ({
      key: `mine:${index + 1}`,
      collection: "mine" as const,
      speaker: "reader" as const,
      doctrine: null,
      lang: request.locale,
      title: note.ref ?? label.fallback,
      who: label.who,
      locatorLabel: note.ref ?? label.who,
      editionLabel: request.locale === "es" ? "Nota del lector." : "The reader's note.",
      licence: "reader" as const,
      translatedByAi: false,
      maxQuoteWords: 200,
      href: null,
      refs: [],
      text: note.text,
      author: null,
      year: null,
      father: null,
      bible: null,
    }));
}

export async function buildPack(plan: SearchPlan, request: AskRequest, search: CorpusSearch): Promise<EvidencePack> {
  const locale = request.locale;
  const brief = plan.depth === "brief";
  const quotas = brief ? briefQuotas : richQuotas;
  const budget = brief ? PACK_TOKEN_BUDGET_BRIEF : PACK_TOKEN_BUDGET;
  const allowed = scopedTo(allowedFor(request), plan.sources);
  const eraOk = (passage: Passage) =>
    plan.era !== "ante-nicene" || (passage.year !== null && passage.year <= ANTE_NICENE_YEAR);
  const chapter = chapterOf(request);
  const fallback = questionTerms(request.question);
  const useFallback = [plan.termsEn, plan.phrasesEn, plan.termsEs, plan.phrasesEs].every((list) => list.length === 0);
  const termsEn = useFallback ? fallback : plan.termsEn;
  const termsEs = useFallback ? fallback : plan.termsEs;
  const allTerms = [...termsEn, ...termsEs, ...plan.phrasesEn, ...plan.phrasesEs];
  const doctrines: DoctrineId[] = plan.doctrines;
  const traditionFilter: TraditionId[] | null = plan.traditions.length > 0 ? plan.traditions : null;

  const authorList = allowed.fathers ? await search.authors() : [];
  const named = matchAuthors(plan.authors, authorList);
  const workIds =
    request.scope === "work" && request.here.kind === "father"
      ? [request.here.work]
      : matchWorks(plan.works, authorList);
  const base = {
    termsEn,
    phrasesEn: plan.phrasesEn,
    termsEs,
    phrasesEs: plan.phrasesEs,
    doctrines: null,
    speakers: null,
    authors: named.ids.length > 0 ? named.ids : null,
    works: workIds.length > 0 ? workIds : null,
    locale,
  };

  const targets = allowed.fathers || allowed.tradition ? verseTargets(plan, request) : [];
  const passageFocus = targets.length > 0 && namesPassage(request);
  const verseTradition = allowed.tradition && passageFocus;
  const [fatherVerseHits, traditionVerseHits, rawFatherPool, traditionRows, doctrineHits, glossaryHits] =
    await Promise.all([
      allowed.fathers
        ? Promise.all(targets.map((target) => search.passagesByVerses(target, "fathers", VERSE_HITS, locale)))
        : Promise.resolve([] as (Ranked & { verses: string[] })[][]),
      verseTradition
        ? Promise.all(targets.map((target) => search.passagesByVerses(target, "tradition", VERSE_HITS, locale)))
        : Promise.resolve([] as (Ranked & { verses: string[] })[][]),
      allowed.fathers
        ? search.searchPassages({
            ...base,
            collections: ["fathers"],
            limit: FATHER_POOL,
            perGroup: named.ids.length > 0 ? NAMED_AUTHOR_POOL : quotas.perAuthor,
          })
        : Promise.resolve([] as Ranked[]),
      allowed.tradition
        ? doctrines.length > 0
          ? Promise.all(doctrines.map((doctrine) => search.traditionPassages(doctrine, locale))).then((lists) =>
              lists.flat().map((passage): Ranked => ({ ...passage, rank: scoreOf(passage, plan, fallback) })),
            )
          : search.searchPassages({
              ...base,
              authors: null,
              works: null,
              speakers: traditionFilter,
              collections: ["tradition"],
              limit: 40,
              perGroup: quotas.perTradition,
            })
        : Promise.resolve([] as Ranked[]),
      allowed.doctrine
        ? search.searchPassages({
            ...base,
            authors: null,
            works: null,
            doctrines: doctrines.length > 0 ? doctrines : null,
            collections: ["doctrine"],
            limit: 6,
            perGroup: 6,
          })
        : Promise.resolve([] as Ranked[]),
      allowed.glossary
        ? search.searchPassages({
            ...base,
            authors: null,
            works: null,
            doctrines: doctrines.length > 0 ? doctrines : null,
            speakers: traditionFilter,
            collections: ["glossary"],
            limit: 8,
            perGroup: 2,
          })
        : Promise.resolve([] as Ranked[]),
    ]);

  const questionWords = new Set(fold(request.question).split(/[^\p{L}]+/u));
  const namedInQuestion = named.ids.filter((id) =>
    authorList.some(
      (author) =>
        author.id === id &&
        [author.name, author.names?.es, author.names?.en].some((name) =>
          fold(name ?? "")
            .split(/[^\p{L}]+/u)
            .some((word) => word.length >= 5 && !BIBLICAL_NAMES.has(word) && questionWords.has(word)),
        ),
    ),
  );
  const anchored = anchoredFathers(
    fatherVerseHits,
    (passage) =>
      (namedInQuestion.length === 0 || (passage.author !== null && namedInQuestion.includes(passage.author))) &&
      eraOk(passage) &&
      (request.scope !== "work" || (passage.father !== null && workIds.includes(passage.father.workId))),
    (passage) => scoreOf(passage, plan, fallback),
  );
  const anchoredKeys = new Set(anchored.map((passage) => passage.key));
  const fatherQuota = anchored.length > 0 && !brief && WANTS_ALL.test(request.question) ? MAX_QUOTES : quotas.fathers;
  const namedCap = brief ? NAMED_CAP_BRIEF : NAMED_CAP;
  const fatherPool = rawFatherPool.filter(eraOk);
  const namedFew = plan.authors.length >= 1 && plan.authors.length <= 2;
  const capOf = (author: string) => (namedFew && named.ids.includes(author) ? namedCap : quotas.perAuthor);
  const anchoredChosen = selectFathers(anchored, fatherQuota, capOf, locale);
  const locatorOf = (passage: Passage) =>
    passage.father ? `${passage.father.workId}:${passage.father.locator}` : passage.key;
  const twins = new Map(
    fatherPool.filter((passage) => passage.lang === locale).map((passage) => [locatorOf(passage), passage]),
  );
  anchoredChosen.chosen = anchoredChosen.chosen.map((passage) => {
    const twin = passage.lang === locale ? undefined : twins.get(locatorOf(passage));
    return twin ? { ...twin, rank: passage.rank } : passage;
  });
  const anchoredLocators = new Set(anchoredChosen.chosen.map(locatorOf));
  const usedByAuthor = new Map<string, number>();
  for (const passage of anchoredChosen.chosen) {
    const author = passage.author ?? passage.father?.workId ?? passage.key;
    usedByAuthor.set(author, (usedByAuthor.get(author) ?? 0) + 1);
  }
  const textChosen = selectFathers(
    fatherPool.filter((passage) => !anchoredKeys.has(passage.key) && !anchoredLocators.has(locatorOf(passage))),
    passageFocus && anchoredChosen.chosen.length > 0 ? 0 : fatherQuota - anchoredChosen.chosen.length,
    (author) => Math.max(capOf(author) - (usedByAuthor.get(author) ?? 0), 0),
    locale,
  );
  const fathers = {
    chosen: [...anchoredChosen.chosen, ...textChosen.chosen],
    rest: [...anchoredChosen.rest, ...textChosen.rest],
  };

  const scopedTradition = verseTradition
    ? anchoredFathers(
        traditionVerseHits,
        (row) => doctrines.length === 0 || doctrines.includes(row.doctrine as DoctrineId),
      ).filter((row) => traditionFilter === null || traditionFilter.includes(row.speaker as TraditionId))
    : traditionRows.filter(
        (row) =>
          !row.key.includes(":scripture:") &&
          (traditionFilter === null || traditionFilter.includes(row.speaker as TraditionId)) &&
          (doctrines.length > 0 || row.rank >= MIN_RANK) &&
          (chapter === null || refsInChapter(row.refs, chapter.book, chapter.chapter)),
      );
  const bySpeaker = new Map<string, Ranked[]>();
  for (const row of scopedTradition) bySpeaker.set(row.speaker, [...(bySpeaker.get(row.speaker) ?? []), row]);
  const traditionChosen: Ranked[] = [];
  const traditionRest: Ranked[] = [];
  const traditionRefGroups: string[][] = [];
  for (const speaker of traditionIds) {
    const rows = bySpeaker.get(speaker);
    if (!rows) continue;
    const picked = verseTradition
      ? { chosen: rows.slice(0, quotas.perTradition), rest: rows.slice(quotas.perTradition) }
      : pickTradition(rows, quotas.perTradition, locale);
    traditionChosen.push(...picked.chosen);
    traditionRest.push(...picked.rest);
    traditionRefGroups.push([...new Set(picked.chosen.flatMap((row) => row.refs))]);
  }

  const doctrineChosen = doctrineHits.filter((hit) => hit.rank >= MIN_RANK).slice(0, quotas.doctrine);
  const doctrineRest = doctrineHits.filter((hit) => !doctrineChosen.includes(hit));
  const glossaryAll = glossaryHits.filter((hit) => hit.rank >= MIN_RANK);
  const glossaryChosen = glossaryAll.slice(0, quotas.glossary);
  const glossaryRest = glossaryAll.slice(quotas.glossary);

  const inScope = (ref: OsisRef) => chapter === null || (ref.book === chapter.book && ref.chapter === chapter.chapter);
  const planRefs = plan.bibleRefs.flatMap((ref) => {
    const parts = osisParts(ref);
    return parts ? [parts] : [];
  });
  const explicitRefs = planRefs.filter((ref) => ref.verse !== null && inScope(ref)).slice(0, quotas.bible);
  const chapterOnly = planRefs.filter((ref) => ref.verse === null);
  const tradCap = Math.max(quotas.bible - explicitRefs.length, 0);
  const tradRefs = allowed.bible
    ? roundRobinRefs(traditionRefGroups, tradCap, (ref) => inScope(ref) && !covered(ref, explicitRefs))
    : [];
  const refList = allowed.bible ? [...explicitRefs, ...tradRefs].slice(0, quotas.bible) : [];

  const verseLang = bibleLang(mainTranslation(request));
  const verseTerms = verseLang === "es" ? termsEs : termsEn;
  const versePhrases = verseLang === "es" ? plan.phrasesEs : plan.phrasesEn;
  const needFts = allowed.bible && (refList.length < (brief ? 3 : 6) || chapterOnly.length > 0 || chapter !== null);
  const verseHits: Ranked[] = needFts
    ? [
        ...(
          await Promise.all([
            ...chapterOnly.map((ref) =>
              search.searchVerses({
                lang: verseLang,
                terms: verseTerms,
                phrases: versePhrases,
                books: [ref.book],
                chapter: ref.chapter,
                limit: 3,
                locale,
              }),
            ),
            search.searchVerses({
              lang: verseLang,
              terms: verseTerms,
              phrases: versePhrases,
              books: chapter ? [chapter.book] : null,
              chapter: chapter ? chapter.chapter : null,
              limit: VERSE_POOL,
              locale,
            }),
          ])
        ).flat(),
      ]
    : [];
  const verseUnique = bestPerVerse(verseHits, request);

  const byTranslation = new Map<string, string[]>();
  for (const ref of refList) {
    const translationId = translationFor(ref.book, request);
    byTranslation.set(translationId, [...(byTranslation.get(translationId) ?? []), refString(ref)]);
  }
  const looked = (
    await Promise.all(
      [...byTranslation].map(([translationId, refs]) => search.lookupVerses(refs, translationId, locale)),
    )
  ).flat();
  const lookedKeys = new Set(looked.map((passage) => passage.key));
  const ftsRoom = Math.max(quotas.bible - looked.length, 0);
  const ftsWanted = refList.length < (brief ? 3 : 6) || chapter !== null ? Math.min(ftsRoom, brief ? 3 : 6) : 0;
  const ftsChosen = await alignTranslations(
    verseUnique
      .filter((hit) => !lookedKeys.has(hit.key) && !hitCovered(hit, refList))
      .slice(0, chapterOnly.length > 0 ? Math.max(ftsWanted, Math.min(ftsRoom, chapterOnly.length * 3)) : ftsWanted),
    request,
    search,
  );
  const bibleChosen: Passage[] = [...looked, ...ftsChosen].slice(0, quotas.bible);
  const bibleRest = verseUnique.filter(
    (hit) =>
      hit.bible !== null &&
      hit.bible.translationId === translationFor(hit.bible.book, request) &&
      !bibleChosen.some((chosen) => chosen.key === hit.key),
  );

  const mine = notePassages(request, plan, quotas.mine);

  const chosenByCollection = {
    glossary: [...glossaryChosen] as Passage[],
    doctrine: [...doctrineChosen] as Passage[],
    fathers: [...fathers.chosen] as Passage[],
    bible: [...bibleChosen],
    tradition: [...traditionChosen] as Passage[],
  };
  const dropped: Passage[] = [];
  const dropOrder: (keyof typeof chosenByCollection)[] = [
    "glossary",
    "doctrine",
    "fathers",
    "fathers",
    "bible",
    "tradition",
  ];
  const assemble = () =>
    canonical([
      ...chosenByCollection.bible,
      ...chosenByCollection.fathers,
      ...chosenByCollection.tradition,
      ...chosenByCollection.doctrine,
      ...chosenByCollection.glossary,
    ]);
  let ordered = assemble();
  let step = 0;
  let windows = WINDOW_STEPS[0] ?? WINDOW_CHARS;
  let pack = packOf([...ordered, ...mine], allTerms, windows, 1);
  while (tokensOf(pack) > budget && step < WINDOW_STEPS.length - 1) {
    step += 1;
    windows = WINDOW_STEPS[step] ?? windows;
    pack = packOf([...ordered, ...mine], allTerms, windows, 1);
  }
  for (let turn = 0; tokensOf(pack) > budget && turn < 200; turn += 1) {
    const kind = dropOrder[turn % dropOrder.length] ?? "fathers";
    const list = chosenByCollection[kind];
    if (kind === "tradition") {
      const counts = new Map<string, number>();
      for (const passage of list) counts.set(passage.speaker, (counts.get(passage.speaker) ?? 0) + 1);
      const fattest = [...counts].sort((a, b) => b[1] - a[1])[0];
      const index = fattest ? list.map((passage): string => passage.speaker).lastIndexOf(fattest[0]) : -1;
      if (index >= 0 && (fattest?.[1] ?? 0) > 1) dropped.push(...list.splice(index, 1));
    } else if (list.length > 0) {
      dropped.push(...list.splice(list.length - 1, 1));
    }
    ordered = assemble();
    pack = packOf([...ordered, ...mine], allTerms, windows, 1);
  }

  const selectedKeys = new Set(pack.map((passage) => passage.key));
  const leftovers: Ranked[] = [
    ...fathers.rest,
    ...bibleRest,
    ...traditionRest,
    ...doctrineRest,
    ...glossaryRest,
    ...dropped.map((passage) => ({ ...passage, rank: 0 })),
  ].filter((passage) => !selectedKeys.has(passage.key));
  const maxByCollection = new Map<string, number>();
  for (const passage of leftovers) {
    maxByCollection.set(passage.collection, Math.max(maxByCollection.get(passage.collection) ?? 0, passage.rank));
  }
  const unseen = new Set<string>();
  const extraPassages = leftovers
    .map((passage) => ({ passage, share: passage.rank / (maxByCollection.get(passage.collection) || 1) }))
    .sort((a, b) => b.share - a.share)
    .flatMap(({ passage }) => {
      if (unseen.has(passage.key)) return [];
      unseen.add(passage.key);
      return [passage];
    })
    .slice(0, quotas.extra);
  const realPassages = pack.filter((passage) => passage.collection !== "mine");
  const extra = packOf(extraPassages, allTerms, WINDOW_CHARS, pack.length + 1);

  const traditionsWithPages = new Set<TraditionId>();
  if (allowed.tradition) {
    const wanted = doctrines.length > 0 ? doctrines : [...doctrineIds];
    const lists = await Promise.all(wanted.map((doctrine) => search.traditionPassages(doctrine, locale)));
    for (const passage of lists.flat()) traditionsWithPages.add(passage.speaker as TraditionId);
  }
  const coverage = buildCoverage({
    passages: realPassages,
    doctrines,
    traditionsWithPages,
    missingAuthors: named.missing,
    bibleEdition: mainTranslation(request),
    fatherWorks: allowed.fathers
      ? workIds.length > 0
        ? workIds.length
        : authorList
            .filter((author) => named.ids.length === 0 || named.ids.includes(author.id))
            .reduce((sum, author) => sum + author.works.length, 0)
      : 0,
  });
  const scopedCoverage = {
    ...coverage,
    searched: (["bible", "fathers", "tradition", "doctrine", "glossary"] as const).filter((name) => allowed[name]),
    ...(targets.length > 0 && (allowed.fathers || verseTradition)
      ? {
          verseSearches: targets.map((target, index) => ({
            target,
            found: anchoredFathers([fatherVerseHits[index] ?? [], traditionVerseHits[index] ?? []], () => true).length,
            collections: [
              ...(allowed.fathers ? (["fathers"] as const) : []),
              ...(verseTradition ? (["tradition"] as const) : []),
            ],
          })),
        }
      : {}),
    traditions: allowed.tradition
      ? coverage.traditions.filter((entry) => traditionFilter === null || traditionFilter.includes(entry.tradition))
      : [],
  };
  return { passages: pack, extra, coverage: scopedCoverage };
}
