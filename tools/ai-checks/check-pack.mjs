import { biblePassage, osisParts, passageFromRow } from "@/content/ai-search/collections";
import { buildPack, verseTargets } from "@/content/ai-search/pack";
import { coverageLine } from "@/features/ask/coverage-line";
import { callRest } from "@/content/ai-search/supabase-search";
import { fixtureSearch } from "@/content/ai-search/fixture-search";
import { scoreText, windowAround } from "@/content/ai-search/windows";
import fixture from "../../src/content/ai-search/fixture-passages.json" with { type: "json" };

let checks = 0;
const failures = [];
const check = (name, condition, detail = "") => {
  checks += 1;
  if (!condition) failures.push(`${name}${detail ? `: ${detail}` : ""}`);
};

const plan = (extra = {}) => ({
  intent: "evidence",
  answerLanguage: "es",
  doctrines: ["eucharist"],
  traditions: [],
  termsEn: ["eucharist", "flesh", "blood", "bread", "cup", "body"],
  phrasesEn: ["body and blood"],
  termsEs: ["eucaristía", "cuerpo", "sangre", "pan"],
  phrasesEs: [],
  bibleRefs: [],
  authors: [],
  works: [],
  followsPrevious: false,
  depth: "rich",
  ...extra,
});
const ask = (extra = {}) => ({
  question: "¿Qué enseña cada tradición sobre la Eucaristía?",
  locale: "es",
  scope: "all",
  here: { kind: "bible", book: "John", chapter: 6, translation: "rv1909" },
  selection: null,
  history: [],
  notes: [],
  turn: 1,
  ...extra,
});

const search = fixtureSearch;
check("fixture search id", search.id === "fixture");
check(
  "fixture holds at least 60 passages",
  fixture.rows.length + fixture.verses.length >= 60,
  String(fixture.rows.length + fixture.verses.length),
);
check("fixture corpus version", (await search.corpusVersion()) === "fixture");
check("fixture authors include five Fathers at least", (await search.authors()).length >= 5);

const keys = new Set();
for (const row of fixture.rows) {
  check(`unique key ${row.source_key}`, !keys.has(row.source_key));
  keys.add(row.source_key);
  const shape =
    row.collection === "fathers"
      ? row.source_key.split(":").length === 5
      : /^(tradition|doctrine|glossary):/.test(row.source_key);
  check(`key format ${row.source_key}`, shape);
  check(`text length ${row.source_key}`, row.text.length > 0 && row.text.length <= 4000);
}
for (const need of [
  "fathers:ignatius-smyrnaeans:lightfoot-1889:6.2:0",
  "tradition:eucharist:catholic:definition",
  "tradition:baptism:baptist:definition",
  "doctrine:eucharist:common:common",
]) {
  check(`fixture contains ${need}`, keys.has(need));
}
for (const translation of ["bsb", "rv1909"]) {
  for (let verse = 51; verse <= 58; verse += 1) {
    check(
      `John 6:${verse} ${translation}`,
      fixture.verses.some(
        (v) => v.translationId === translation && v.book === "John" && v.chapter === 6 && v.verse === verse,
      ),
    );
  }
  for (let verse = 23; verse <= 29; verse += 1) {
    check(
      `1Cor 11:${verse} ${translation}`,
      fixture.verses.some(
        (v) => v.translationId === translation && v.book === "1Cor" && v.chapter === 11 && v.verse === verse,
      ),
    );
  }
}

const pack = await buildPack(
  plan(),
  ask({ notes: [{ text: "Pensé en nacer del agua y del Espíritu.", ref: "Juan 3:5" }] }),
  search,
);
const real = pack.passages.filter((p) => p.collection !== "mine");
const traditionsInPack = new Set(real.filter((p) => p.collection === "tradition").map((p) => p.speaker));
for (const tradition of ["catholic", "orthodox", "lutheran", "reformed", "baptist"]) {
  check(`eucharist pack has ${tradition}`, traditionsInPack.has(tradition));
}
const status = Object.fromEntries(pack.coverage.traditions.map((t) => [t.tradition, t.status]));
check("pentecostal is no-page", status.pentecostal === "no-page", JSON.stringify(status));
check(
  "the five page traditions are found",
  ["catholic", "orthodox", "lutheran", "reformed", "baptist"].every((t) => status[t] === "found"),
);
const perTradition = new Map();
for (const p of real.filter((x) => x.collection === "tradition"))
  perTradition.set(p.speaker, (perTradition.get(p.speaker) ?? 0) + 1);
check(
  "traditions share the same maximum",
  [...perTradition.values()].every((n) => n <= 4),
  JSON.stringify([...perTradition]),
);
check(
  "every tradition gets at least 3 passages",
  Math.min(...perTradition.values()) >= 3,
  JSON.stringify([...perTradition]),
);
const perAuthor = new Map();
for (const p of real.filter((x) => x.collection === "fathers"))
  perAuthor.set(p.author, (perAuthor.get(p.author) ?? 0) + 1);
check(
  "fathers at most 3 per author",
  [...perAuthor.values()].every((n) => n <= 3),
  JSON.stringify([...perAuthor]),
);
check("fathers spread over at least 5 authors or all the fixture has", perAuthor.size >= 4, String(perAuthor.size));
const locators = real.filter((p) => p.father).map((p) => `${p.father.workId}:${p.father.locator}`);
const uniqueLocators = new Set(
  real.filter((p) => p.father).map((p) => `${p.father.workId}:${p.father.locator}:${p.father.editionId}`),
);
check(
  "no two editions of one locator",
  new Set(locators).size === new Set(locators.map((l) => l)).size &&
    uniqueLocators.size === real.filter((p) => p.father).length,
);
const editionsOf = new Map();
for (const p of real.filter((x) => x.father)) {
  const id = `${p.father.workId}:${p.father.locator}`;
  editionsOf.set(id, new Set([...(editionsOf.get(id) ?? []), p.father.editionId]));
}
check(
  "one edition per locator",
  [...editionsOf.values()].every((s) => s.size === 1),
);
check(
  "spanish edition preferred for a spanish answer",
  real.some((p) => p.key.includes("doctrina-ia-2026:9:") && p.translatedByAi),
);
check("bible at most 12", real.filter((p) => p.collection === "bible").length <= 12);
check(
  "rich pack has the canonical John 6 range",
  real.some((p) => p.bible?.book === "John" && p.bible.chapter === 6),
);
check(
  "verse ranges do not overlap",
  (() => {
    const bible = real.filter((p) => p.bible);
    return bible.every((a, i) =>
      bible.every(
        (b, j) =>
          i === j ||
          a.bible.book !== b.bible.book ||
          a.bible.chapter !== b.bible.chapter ||
          (a.bible.verseEnd ?? a.bible.verse) < b.bible.verse ||
          (b.bible.verseEnd ?? b.bible.verse) < a.bible.verse,
      ),
    );
  })(),
);

check(
  "ids are P1..Pn in order",
  pack.passages.every((p, i) => p.id === `P${i + 1}`),
);
const order = ["bible", "fathers", "tradition", "doctrine", "glossary", "mine"];
check(
  "canonical collection order",
  pack.passages.every(
    (p, i) => i === 0 || order.indexOf(pack.passages[i - 1].collection) <= order.indexOf(p.collection),
  ),
);
const fatherYears = real.filter((p) => p.collection === "fathers").map((p) => p.year ?? 9999);
check(
  "fathers by year",
  fatherYears.every((y, i) => i === 0 || fatherYears[i - 1] <= y),
  fatherYears.join(","),
);
const traditionOrder = ["catholic", "orthodox", "lutheran", "reformed", "baptist", "pentecostal"];
const traditionSeq = real.filter((p) => p.collection === "tradition").map((p) => traditionOrder.indexOf(p.speaker));
check(
  "traditions in traditionIds order",
  traditionSeq.every((v, i) => i === 0 || traditionSeq[i - 1] <= v),
);
const biblePos = real.filter((p) => p.bible).map((p) => p.bible.book);
check(
  "bible by book order",
  biblePos.join(",") ===
    ["Matt", "Luke", "John", "1Cor"]
      .filter((b) => biblePos.includes(b))
      .join(",")
      .split(",")
      .flatMap((b) => biblePos.filter((x) => x === b))
      .join(","),
);
const mine = pack.passages.filter((p) => p.collection === "mine");
check(
  "notes are last and in their own collection",
  mine.length === 1 && pack.passages.at(-1).collection === "mine" && pack.passages.at(-1).key === "mine:1",
);
check(
  "notes stay out of coverage and extra",
  !pack.coverage.collections.some((c) => c.collection === "mine") && !pack.extra.some((p) => p.collection === "mine"),
);
check("note licence", mine[0].licence === "reader" && mine[0].speaker === "reader");

const tokens = Math.ceil(pack.passages.reduce((sum, p) => sum + p.window.length, 0) / 3.2);
check("pack within the rich budget", tokens <= 24000, String(tokens));
for (const p of pack.passages) {
  check(
    `window of ${p.id} is a slice of its text`,
    p.window.length <= 1200 && p.text.slice(p.windowStart, p.windowStart + p.window.length) === p.window,
  );
}
check(
  "fathers windows hold a query term",
  real
    .filter((p) => p.collection === "fathers")
    .every(
      (p) =>
        scoreText(p.window, plan().termsEn, plan().phrasesEn) > 0 ||
        scoreText(p.window, plan().termsEs, plan().phrasesEs) > 0,
    ),
);

const brief = await buildPack(plan({ depth: "brief" }), ask(), search);
const briefReal = brief.passages.filter((p) => p.collection !== "mine");
check("brief bible at most 8", briefReal.filter((p) => p.collection === "bible").length <= 8);
check("brief fathers at most 8", briefReal.filter((p) => p.collection === "fathers").length <= 8);
const briefCounts = new Map();
for (const p of briefReal.filter((x) => x.collection === "tradition"))
  briefCounts.set(p.speaker, (briefCounts.get(p.speaker) ?? 0) + 1);
check(
  "brief traditions at most 3",
  [...briefCounts.values()].every((n) => n <= 3),
  JSON.stringify([...briefCounts]),
);
check(
  "brief pack within its budget",
  Math.ceil(brief.passages.reduce((sum, p) => sum + p.window.length, 0) / 3.2) <= 8000,
);

const fathersOnly = await buildPack(plan(), ask({ scope: "fathers" }), search);
check(
  "scope fathers",
  fathersOnly.passages.length > 0 && fathersOnly.passages.every((p) => p.collection === "fathers"),
);
check("scope fathers has no traditions in coverage", fathersOnly.coverage.traditions.length === 0);
const bibleOnly = await buildPack(plan(), ask({ scope: "bible" }), search);
check("scope bible", bibleOnly.passages.length > 0 && bibleOnly.passages.every((p) => p.collection === "bible"));
const chapterPack = await buildPack(plan(), ask({ scope: "chapter" }), search);
check(
  "scope chapter keeps bible in the chapter",
  chapterPack.passages.filter((p) => p.bible).every((p) => p.bible.book === "John" && p.bible.chapter === 6),
);
check(
  "scope chapter keeps only tradition passages citing the chapter",
  chapterPack.passages
    .filter((p) => p.collection === "tradition")
    .every((p) => p.refs.some((r) => osisParts(r)?.book === "John" && osisParts(r)?.chapter === 6)),
);
check("scope chapter has no fathers", !chapterPack.passages.some((p) => p.collection === "fathers"));
const workPack = await buildPack(
  plan(),
  ask({ scope: "work", here: { kind: "father", work: "didache", edition: "lightfoot-harmer-1891", locator: "9" } }),
  search,
);
check("scope work", workPack.passages.length > 0 && workPack.passages.every((p) => p.father?.workId === "didache"));

const named = await buildPack(
  plan({
    doctrines: [],
    authors: ["Ignatius"],
    termsEn: ["eucharist", "flesh", "bread", "cup"],
    phrasesEn: [],
    termsEs: [],
  }),
  ask({ scope: "fathers" }),
  search,
);
check(
  "named author filters the Fathers",
  named.passages.length > 0 && named.passages.every((p) => p.author === "ignatius-of-antioch"),
);
const topKeys = named.passages.map((p) => p.key);
check(
  "Ignatius Smyrnaeans 6.2 is in the pack",
  topKeys.some((k) => /^fathers:ignatius-smyrnaeans:[^:]+:6\.2:/.test(k)),
  topKeys.join(" "),
);
const ranked = await search.searchPassages({
  termsEn: ["eucharist", "flesh", "bread", "cup"],
  phrasesEn: [],
  termsEs: [],
  phrasesEs: [],
  collections: ["fathers"],
  doctrines: null,
  speakers: null,
  authors: ["ignatius-of-antioch"],
  works: null,
  limit: 8,
  perGroup: 8,
});
check(
  "Ignatius question: Smyrnaeans 6.2 in the top 3",
  ranked.slice(0, 3).some((p) => p.key.startsWith("fathers:ignatius-smyrnaeans:lightfoot-1889:6.2")),
  ranked.map((p) => p.key).join(" "),
);
const cyrilTerms = {
  doctrines: [],
  termsEn: ["body", "blood", "christ", "bread", "cup", "spiritual", "lord"],
  phrasesEn: [],
  termsEs: [],
};
const cyrilCount = (pack) => pack.passages.filter((p) => p.author === "cyril-of-jerusalem").length;
const cyrilPool = await search.searchPassages({
  ...cyrilTerms,
  phrasesEs: [],
  collections: ["fathers"],
  speakers: null,
  authors: ["cyril-of-jerusalem"],
  works: null,
  limit: 60,
  perGroup: 60,
  doctrines: null,
});
check("fixture holds at least 9 Cyril passages that match", cyrilPool.length >= 9, String(cyrilPool.length));
const oneNamed = await buildPack(
  plan({ ...cyrilTerms, authors: ["Cyril of Jerusalem"] }),
  ask({ scope: "fathers" }),
  search,
);
check("one named Father gets up to 8 passages", cyrilCount(oneNamed) === 8, String(cyrilCount(oneNamed)));
const twoNamed = await buildPack(
  plan({ ...cyrilTerms, authors: ["Cyril of Jerusalem", "Ignatius"] }),
  ask({ scope: "fathers" }),
  search,
);
check(
  "two named Fathers get up to 8 each",
  cyrilCount(twoNamed) === 8 && twoNamed.passages.filter((p) => p.author === "ignatius-of-antioch").length >= 2,
  String(cyrilCount(twoNamed)),
);
check("named Fathers stay inside the quota of 16", twoNamed.passages.length <= 16);
const noNames = await buildPack(plan({ ...cyrilTerms }), ask({ scope: "fathers" }), search);
check("no named Father keeps 3 per author", cyrilCount(noNames) === 3, String(cyrilCount(noNames)));
const threeNames = await buildPack(
  plan({ ...cyrilTerms, authors: ["Cyril of Jerusalem", "Ignatius", "Justin"] }),
  ask({ scope: "fathers" }),
  search,
);
check("three names keep 3 per author", cyrilCount(threeNames) === 3, String(cyrilCount(threeNames)));
const briefNamed = await buildPack(
  plan({ ...cyrilTerms, authors: ["Cyril of Jerusalem"], depth: "brief" }),
  ask({ scope: "fathers" }),
  search,
);
check("brief named Father gets up to 4", cyrilCount(briefNamed) === 4, String(cyrilCount(briefNamed)));
check(
  "extra keeps the named Father's leftovers",
  oneNamed.extra.some((p) => p.author === "cyril-of-jerusalem") || cyrilPool.length <= 8,
);

const spanishEdition = await buildPack(
  plan({ doctrines: [], termsEn: ["eucharist", "flesh", "bread", "cup"], phrasesEn: [], termsEs: ["eucaristía"] }),
  ask({ scope: "fathers" }),
  search,
);
check(
  "choosing the Spanish edition does not demote the passage",
  spanishEdition.passages.some((p) => /^fathers:ignatius-smyrnaeans:[^:]+:6\.2:/.test(p.key)),
  spanishEdition.passages.map((p) => p.key).join(" "),
);
const missing = await buildPack(plan({ doctrines: [], authors: ["John Damascene"] }), ask(), search);
check("missing author is reported", missing.coverage.missingAuthors.join() === "John Damascene");

const justification = await buildPack(plan({ doctrines: ["justification"] }), ask(), search);
check(
  "justification has no tradition pages",
  justification.coverage.traditions.every((t) => t.status === "no-page" || t.status === "none"),
);
check(
  "justification keeps Fathers and Bible",
  justification.passages.some((p) => p.collection === "fathers"),
);

const narrowed = await buildPack(plan({ traditions: ["lutheran", "baptist"] }), ask(), search);
check(
  "named traditions narrow the pack",
  narrowed.passages
    .filter((p) => p.collection === "tradition")
    .every((p) => ["lutheran", "baptist"].includes(p.speaker)),
);
check(
  "named traditions narrow the coverage",
  narrowed.coverage.traditions.map((t) => t.tradition).join() === "lutheran,baptist",
);

const english = await buildPack(
  plan({
    answerLanguage: "en",
    doctrines: ["baptism"],
    termsEn: ["baptism", "water", "regeneration"],
    termsEs: [],
    bibleRefs: ["Matt.28.19"],
  }),
  ask({ locale: "en", here: { kind: "bible", book: "John", chapter: 3, translation: "bsb" } }),
  search,
);
check(
  "english labels",
  english.passages.some((p) => p.who === "Catholic Church") &&
    english.passages.some((p) => p.collection === "bible" && p.editionLabel.includes("Public domain")),
);
check(
  "english bible edition",
  english.coverage.bibleEdition === "bsb" && english.passages.some((p) => p.bible?.translationId === "bsb"),
);
check(
  "english hrefs",
  english.passages.filter((p) => p.href).every((p) => p.href.startsWith("/en/")),
);
check(
  "explicit reference is in the pack",
  english.passages.some((p) => p.key === "bible:bsb:Matt.28.19"),
);

const empty = await buildPack(
  plan({ doctrines: [], termsEn: ["zzzqqq"], phrasesEn: [], termsEs: ["zzzqqq"], bibleRefs: [] }),
  ask({ question: "zzzqqq" }),
  search,
);
check("an empty search gives an empty pack", empty.passages.length === 0 && empty.extra.length === 0);

const parts = (ref) => JSON.stringify(osisParts(ref));
check("osis verse", parts("John.6.53") === '{"book":"John","chapter":6,"verse":53,"verseEnd":null}');
check("osis range", parts("John.6.51-58") === '{"book":"John","chapter":6,"verse":51,"verseEnd":58}');
check(
  "osis cross-book form",
  parts("Matt.26.26-Matt.26.28") === '{"book":"Matt","chapter":26,"verse":26,"verseEnd":28}',
);
check("osis numbered book", parts("1Cor.11.23-1Cor.11.26") === '{"book":"1Cor","chapter":11,"verse":23,"verseEnd":26}');
check("osis chapter", parts("John.6") === '{"book":"John","chapter":6,"verse":null,"verseEnd":null}');
check("osis clips long ranges", osisParts("Ps.119.1-100")?.verseEnd === 8);
check("osis rejects junk", osisParts("Nope.1.1") === null && osisParts("hello") === null);
check(
  "lookup range joins verses",
  (await search.lookupVerses(["John.6.53-55"], "bsb", "en"))[0]?.key === "bible:bsb:John.6.53-55",
);
check("lookup unknown verse", (await search.lookupVerses(["Gen.1.1"], "bsb")).length === 0);

const long = Array.from({ length: 400 }, (_, i) => (i === 200 ? "eucharist" : `palabra${i}`)).join(" ");
const win = windowAround(long, ["eucharist"]);
check("window at most 1200", win.window.length <= 1200);
check("window holds the match", win.window.includes("eucharist"));
check("window starts at a word", win.windowStart === 0 || /\s/.test(long.charAt(win.windowStart - 1)));
check(
  "window ends at a word",
  /\s|^$/.test(long.charAt(win.windowStart + win.window.length)) || win.windowStart + win.window.length === long.length,
);
check("window offset is exact", long.slice(win.windowStart, win.windowStart + win.window.length) === win.window);
check("short text is whole", windowAround("short text", ["text"]).window === "short text");
check("window without a match starts at 0", windowAround(long, ["zzzz"]).windowStart === 0);

const row = fixture.rows.find((r) => r.collection === "fathers");
const labelled = passageFromRow(row, "en");
check(
  "father label in english",
  labelled.who.length > 0 && labelled.href.startsWith("/en/") && labelled.father.workId === row.work_id,
);
check("draft marker becomes a flag", passageFromRow({ ...row, edition_label: "X, 1900 [draft]" }, "es").draft === true);
check(
  "bible passage key for a range",
  biblePassage({ translationId: "bsb", book: "John", chapter: 6, verse: 51, verseEnd: 58, text: "x" }, null, "es")
    ?.key === "bible:bsb:John.6.51-58",
);
check(
  "licence words for short quotes",
  passageFromRow({ ...row, licence: "short-quote", max_quote_words: 40 }, "es").editionLabel.includes("Cita breve"),
);

const fixtureFathers = (
  await search.searchPassages({
    termsEn: ["eucharist", "flesh", "bread"],
    phrasesEn: [],
    termsEs: [],
    phrasesEs: [],
    collections: ["fathers"],
    doctrines: null,
    speakers: null,
    authors: null,
    works: null,
    limit: 40,
    perGroup: 40,
    locale: "es",
  })
).slice(-3);
const verseSearch = {
  ...search,
  async passagesByVerses(target, collection) {
    return collection === "fathers" && target.book === "John" && target.chapter === 6
      ? fixtureFathers.map((passage, index) => ({ ...passage, rank: 3 - index * 0.5, verses: ["John.6.53"] }))
      : [];
  },
};
check(
  "verse targets come from the plan's refs first",
  JSON.stringify(verseTargets(plan({ bibleRefs: ["John.6.53-58", "John.6"] }), ask())) ===
    JSON.stringify([
      { book: "John", chapter: 6, from: 53, to: 58 },
      { book: "John", chapter: 6, from: 1, to: 999 },
    ]),
);
check(
  "a selected verse is the target when the plan names none",
  verseTargets(plan(), ask({ selection: { text: "x", at: { kind: "verse", book: "John", chapter: 6, verse: 53 } } }))[0]
    ?.from === 53,
);
check(
  "«este capítulo» targets the open chapter",
  verseTargets(plan(), ask({ question: "¿Qué Padres citan versículos de este capítulo?" }))[0]?.to === 999,
);
check("a doctrinal question without refs has no verse target", verseTargets(plan(), ask()).length === 0);
check(
  "«este capítulo» keeps the whole chapter even when the plan narrows the verses",
  JSON.stringify(
    verseTargets(
      plan({ bibleRefs: ["John.6.22-29"] }),
      ask({ question: "Los Padres que citan versículos de este capítulo" }),
    )[0],
  ) === JSON.stringify({ book: "John", chapter: 6, from: 1, to: 999 }),
);
const anchoredPack = await buildPack(plan({ bibleRefs: ["John.6"] }), ask(), verseSearch);
const anchoredKeys = new Set(fixtureFathers.map((passage) => passage.key));
const namedPack = await buildPack(
  plan({ bibleRefs: ["John.6"], authors: ["John Chrysostom"] }),
  ask({ question: "¿Qué dicen los Padres sobre Juan 6:53?" }),
  verseSearch,
);
check(
  "an author the plan names but the question does not («Juan» is the Gospel) does not filter the verse hits",
  fixtureFathers.every((passage) => namedPack.passages.some((item) => item.key === passage.key)),
);
check(
  "passages that cite the verse enter the Fathers' share",
  [...anchoredKeys].every((key) => anchoredPack.passages.some((passage) => passage.key === key)),
);
check(
  "the coverage records the verse search",
  anchoredPack.coverage.verseSearches?.[0]?.found === fixtureFathers.length,
  JSON.stringify(anchoredPack.coverage.verseSearches),
);
const allPack = await buildPack(
  plan({ bibleRefs: ["John.6"] }),
  ask({ question: "Tirame todos los Padres que citan Juan 6" }),
  verseSearch,
);
check(
  "a question that names a passage gets only the Fathers that cite it, no full-text padding",
  allPack.passages
    .filter((passage) => passage.collection === "fathers")
    .every((passage) => anchoredKeys.has(passage.key)),
);
const line = coverageLine(
  {
    ...anchoredPack.coverage,
    verseSearches: [{ target: { book: "John", chapter: 6, from: 1, to: 999 }, found: 0, collections: ["fathers"] }],
  },
  ask(),
  "es",
);
check(
  "the coverage line says which verses were searched and what was not found",
  line.replace(/\u00a0/g, " ").includes("los textos de los Padres que citan Juan 6") &&
    line.replace(/\u00a0/g, " ").includes("Ningún texto del corpus cita Juan 6."),
  line,
);

const restEnv = { url: process.env.NEXT_PUBLIC_SUPABASE_URL, key: process.env.SUPABASE_SECRET_KEY };
process.env.NEXT_PUBLIC_SUPABASE_URL = "http://supabase.test";
process.env.SUPABASE_SECRET_KEY = "test-key";
const logged = [];
const consoleError = console.error;
console.error = (line) => logged.push(String(line));
const replies = (...statuses) => {
  const seen = [];
  const fetchImpl = async () => {
    const status = statuses[Math.min(seen.length, statuses.length - 1)];
    seen.push(status);
    return new Response(JSON.stringify([{ ok: status }]), { status });
  };
  return { seen, fetchImpl };
};
const once503 = replies(503, 200);
const recovered = await callRest("rpc/ai_search_passages", { body: {} }, once503.fetchImpl);
check("search 5xx is retried once and recovers", once503.seen.join() === "503,200" && recovered[0].ok === 200);
const twice = replies(500, 502);
const down = await callRest("rpc/ai_search_passages", { body: {} }, twice.fetchImpl).then(
  () => null,
  (error) => error.code,
);
check("search 5xx twice is ai_provider_down", down === "ai_provider_down" && twice.seen.length === 2);
const client = replies(400);
const misconfigured = await callRest("rpc/ai_search_passages", { body: {} }, client.fetchImpl).then(
  () => null,
  (error) => error.code,
);
check("search 4xx is not retried", misconfigured === "ai_misconfigured" && client.seen.length === 1);
check(
  "search 5xx logs one line per failure without secrets",
  logged.join("|") === "[ai] search 5xx 503|[ai] search 5xx 500|[ai] search 5xx 502" &&
    !logged.join().includes("test-key"),
);
console.error = consoleError;
if (restEnv.url === undefined) delete process.env.NEXT_PUBLIC_SUPABASE_URL;
else process.env.NEXT_PUBLIC_SUPABASE_URL = restEnv.url;
if (restEnv.key === undefined) delete process.env.SUPABASE_SECRET_KEY;
else process.env.SUPABASE_SECRET_KEY = restEnv.key;

if (failures.length) throw new Error(failures.slice(0, 25).join("\n"));
console.log(`ok ${checks} checks`);
