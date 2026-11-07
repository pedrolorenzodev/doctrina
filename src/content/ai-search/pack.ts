import {
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
import type { AuthorEntry, CorpusSearch, EvidencePack, PackPassage, Passage } from "@/content/ai-search/types";
import { fold, scoreText, windowAround } from "@/content/ai-search/windows";
import { getBibleBook } from "@/content/bible-books";
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

const collectionOrder = ["bible", "fathers", "tradition", "doctrine", "glossary", "mine"] as const;

type Allowed = { bible: boolean; fathers: boolean; tradition: boolean; doctrine: boolean; glossary: boolean };

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
  const allowed = allowedFor(request);
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

  const [fatherPool, traditionRows, doctrineHits, glossaryHits] = await Promise.all([
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

  const namedCap = brief ? NAMED_CAP_BRIEF : NAMED_CAP;
  const namedFew = plan.authors.length >= 1 && plan.authors.length <= 2;
  const fathers = selectFathers(
    fatherPool,
    quotas.fathers,
    (author) => (namedFew && named.ids.includes(author) ? namedCap : quotas.perAuthor),
    locale,
  );

  const scopedTradition = traditionRows.filter(
    (row) =>
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
    const picked = pickTradition(rows, quotas.perTradition, locale);
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
    traditions: allowed.tradition
      ? coverage.traditions.filter((entry) => traditionFilter === null || traditionFilter.includes(entry.tradition))
      : [],
  };
  return { passages: pack, extra, coverage: scopedCoverage };
}
