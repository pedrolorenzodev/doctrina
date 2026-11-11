import { bibleBooks, getBibleBook, type BibleBook } from "@/content/bible-books";
import { bibleChapterHref } from "@/content/bible-routes";
import { defaultTranslationId } from "@/content/bible/default-translation";
import { formatVerseRef } from "@/content/format-verse";
import { getBibleVerse, getBibleVerseTexts } from "@/content/get-bible";
import { strongNumber } from "@/content/get-chapter-word-view";
import {
  getPlaceWords,
  getLexiconEntry,
  getLexiconShardIds,
  getParseNames,
  getVerseWords,
  getWordOccurrence,
  shardOf,
  wordLanguageOf,
} from "@/content/get-words";
import type { LexiconEntry, VerseWord, WordLanguage, WordOccurrence } from "@doctrina/core/model/words";
import { parseLabel } from "@/content/parse-label";
import type { Locale } from "@doctrina/core/locale";
import { transliterateGreek } from "@doctrina/core/transliterate-greek";

export type WordGroup =
  "gospels" | "acts" | "paul" | "general" | "revelation" | "law" | "history" | "wisdom" | "major" | "minor";

export type BookRow = { id: string; name: string; group: WordGroup; count: number };

export type SenseView = {
  n: string;
  text: string;
  example: { text: string; reference: string; href: string } | null;
  places: { reference: string; href: string }[];
};

export type FormRow = {
  morph: string;
  form: string;
  transliteration: string;
  label: string;
  short: string;
  n: number;
  verses: number | null;
};

export type PlaceForm = { morph: string; form: string; transliteration: string };

export type PlaceVerse = { reference: string; number: number; href: string; text: string; forms: PlaceForm[] };

export type PlaceBook = { id: string; name: string; verses: PlaceVerse[] };

export type NeighborView = {
  id: string;
  word: string;
  transliteration: string;
  gloss: string;
  lemma?: { word: string; transliteration: string; id: string };
};

export type WordPageData = {
  id: string;
  language: WordLanguage;
  lemma: string;
  transliteration: string;
  literal: string;
  literalEnglish: boolean;
  wordClass: string;
  strong: string;
  times: number;
  verses: number;
  genitive: { form: string; transliteration: string } | null;
  books: BookRow[];
  senses: SenseView[];
  entry: string | null;
  hasSenseList: boolean;
  forms: FormRow[];
  places: PlaceBook[] | null;
  edition: string;
  neighbors: { previous: NeighborView | null; next: NeighborView | null };
  verseNeighbors: { place: string; previous: NeighborView | null; next: NeighborView | null } | null;
  from: { label: string; href: string } | null;
};

const placesCap = 1200;

const groupOfBook: Record<string, WordGroup> = {
  Matt: "gospels",
  Mark: "gospels",
  Luke: "gospels",
  John: "gospels",
  Acts: "acts",
  Rom: "paul",
  "1Cor": "paul",
  "2Cor": "paul",
  Gal: "paul",
  Eph: "paul",
  Phil: "paul",
  Col: "paul",
  "1Thess": "paul",
  "2Thess": "paul",
  "1Tim": "paul",
  "2Tim": "paul",
  Titus: "paul",
  Phlm: "paul",
  Heb: "general",
  Jas: "general",
  "1Pet": "general",
  "2Pet": "general",
  "1John": "general",
  "2John": "general",
  "3John": "general",
  Jude: "general",
  Rev: "revelation",
  Gen: "law",
  Exod: "law",
  Lev: "law",
  Num: "law",
  Deut: "law",
  Josh: "history",
  Judg: "history",
  Ruth: "history",
  "1Sam": "history",
  "2Sam": "history",
  "1Kgs": "history",
  "2Kgs": "history",
  "1Chr": "history",
  "2Chr": "history",
  Ezra: "history",
  Neh: "history",
  Esth: "history",
  Job: "wisdom",
  Ps: "wisdom",
  Prov: "wisdom",
  Eccl: "wisdom",
  Song: "wisdom",
  Isa: "major",
  Jer: "major",
  Lam: "major",
  Ezek: "major",
  Dan: "major",
  Hos: "minor",
  Joel: "minor",
  Amos: "minor",
  Obad: "minor",
  Jonah: "minor",
  Mic: "minor",
  Nah: "minor",
  Hab: "minor",
  Zeph: "minor",
  Hag: "minor",
  Zech: "minor",
  Mal: "minor",
};

const caseOrder = "NGDAV";
const numberOrder = "SP";

const editionName: Record<Locale, string> = { es: "Reina-Valera 1909", en: "Berean Standard Bible" };

function partIndex(word: VerseWord, language: WordLanguage, id: string): number {
  const parts = language === "grc" ? word.s.split(" + ") : word.s.split("/");
  return parts.indexOf(id);
}

function formOf(word: VerseWord, language: WordLanguage): string {
  return (language === "hbo" ? word.g.replace(/\//g, "") : word.g).normalize("NFC");
}

function morphOf(word: VerseWord, language: WordLanguage, index: number): string {
  const parts = language === "grc" ? word.m.split(" + ") : word.m.split("/");
  return parts[index] ?? word.m;
}

async function scanVerses(id: string, language: WordLanguage, occurrence: WordOccurrence) {
  const rows = new Map<
    string,
    { book: string; chapter: number; verse: number; forms: { form: string; morph: string; t: string }[] }
  >();
  for (const [key, words] of await getPlaceWords(id, occurrence)) {
    const [book = "", chapter = "0", verse = "0"] = key.split(".");
    const found: { form: string; morph: string; t: string }[] = [];
    for (const word of words) {
      const index = partIndex(word, language, id);
      if (index >= 0) found.push({ form: formOf(word, language), morph: morphOf(word, language, index), t: word.t });
    }
    rows.set(key, { book, chapter: Number(chapter), verse: Number(verse), forms: found });
  }
  return rows;
}

function transliterationOfForm(
  form: string,
  language: WordLanguage,
  scan: Awaited<ReturnType<typeof scanVerses>> | null,
): string {
  if (language === "grc") return transliterateGreek(form);
  for (const row of scan?.values() ?? []) {
    const found = row.forms.find((entry) => entry.form === form.normalize("NFC"));
    if (found) return found.t.replace(/\.?\//g, "-");
  }
  return "";
}

function sortForms(rows: FormRow[]): FormRow[] {
  const noun = rows.every((row) => /^[A-Z]+-[NGDAV][SP]/.test(row.morph));
  if (!noun) return [...rows].sort((a, b) => b.n - a.n || a.morph.localeCompare(b.morph));
  const key = (row: FormRow) => {
    const match = /^[A-Z]+-([NGDAV])([SP])/.exec(row.morph);
    return [caseOrder.indexOf(match?.[1] ?? ""), numberOrder.indexOf(match?.[2] ?? "")] as const;
  };
  return [...rows].sort((a, b) => {
    const [ac = 0, an = 0] = key(a);
    const [bc = 0, bn = 0] = key(b);
    return an - bn || ac - bc || b.n - a.n;
  });
}

async function sensesOf(
  entry: LexiconEntry,
  language: WordLanguage,
  locale: Locale,
  bookOf: (osis: string) => BibleBook | undefined,
): Promise<SenseView[]> {
  const verseHref = (book: BibleBook, chapter: number, verse: number) =>
    `${bibleChapterHref(locale, book, chapter)}#v-${verse}`;
  const place = (osis: string) => {
    const [bookId = "", chapter = "0", verse = "0"] = osis.split(".");
    const book = bookOf(bookId);
    return book
      ? { reference: formatVerseRef([osis], locale), href: verseHref(book, Number(chapter), Number(verse)) }
      : null;
  };
  const exampleOf = async (osis: string | undefined) => {
    if (!osis) return null;
    const [bookId = "", chapter = "0", verse = "0"] = osis.split(".");
    const book = bookOf(bookId);
    if (!book) return null;
    const found = await getBibleVerse(defaultTranslationId(locale, book), bookId, Number(chapter), Number(verse));
    const where = place(osis);
    return found && where ? { text: found.text.replace(/\s+/g, " ").trim(), ...where } : null;
  };
  if (language === "hbo" || !entry.senses || entry.senses.length === 0) return [];
  const list = entry.senses;
  const leaves = list.filter((sense, index) => {
    const next = list[index + 1];
    return !next || next.level <= sense.level;
  });
  return Promise.all(
    leaves.map(async (sense) => ({
      n: sense.n,
      text: sense.text,
      example: await exampleOf(sense.refs[0]),
      places: sense.refs.flatMap((osis) => place(osis) ?? []),
    })),
  );
}

function lexiconOrder(a: string, b: string): number {
  const number = (id: string) => Number(/\d+/.exec(id)?.[0] ?? 0);
  return number(a) - number(b) || a.localeCompare(b);
}

async function neighborsOf(id: string): Promise<{ previous: string | null; next: string | null }> {
  const shard = shardOf(id);
  if (!shard) return { previous: null, next: null };
  const letter = shard.slice(0, 1);
  const index = Number(shard.slice(1));
  const own = (await getLexiconShardIds(id)).sort(lexiconOrder);
  const at = own.indexOf(id);
  let previous = own[at - 1] ?? null;
  let next = own[at + 1] ?? null;
  for (let step = 1; step <= 5 && !previous; step += 1) {
    const ids = (await getLexiconShardIds(`${letter}${(index - step) * 100}`)).sort(lexiconOrder);
    previous = ids.at(-1) ?? null;
  }
  for (let step = 1; step <= 5 && !next; step += 1) {
    const ids = (await getLexiconShardIds(`${letter}${(index + step) * 100}`)).sort(lexiconOrder);
    next = ids[0] ?? null;
  }
  return { previous, next };
}

async function neighborView(id: string | null, locale: Locale, formWord?: string, formTransliteration?: string) {
  if (!id) return null;
  const entry = await getLexiconEntry(id);
  if (!entry) return null;
  return {
    id,
    word: formWord ?? entry.lemma.normalize("NFC"),
    transliteration: formTransliteration ?? entry.tr,
    gloss: locale === "es" ? (entry.glossEs ?? entry.gloss) : entry.gloss,
  } satisfies NeighborView;
}

function parseFrom(from: string | undefined): { book: BibleBook; chapter: number; verse: number } | null {
  const match = /^([0-9A-Za-z]+)\.(\d+)\.(\d+)$/.exec(from ?? "");
  const book = match?.[1] ? getBibleBook(match[1]) : null;
  return book && match?.[2] && match[3] ? { book, chapter: Number(match[2]), verse: Number(match[3]) } : null;
}

export async function getWordPage(locale: Locale, id: string, fromParam?: string): Promise<WordPageData | null> {
  const language = wordLanguageOf(id);
  const [entry, occurrence] = await Promise.all([getLexiconEntry(id), getWordOccurrence(id)]);
  if (!language || !entry || !occurrence) return null;
  const books: BookRow[] = bibleBooks.flatMap((book) => {
    const group = groupOfBook[book.id];
    if (!group || (language === "grc" ? book.section !== "new" : book.section !== "old")) return [];
    return [
      {
        id: book.id,
        name: book.names[locale].replace(/^(\d) /, "$1\u00a0"),
        group,
        count: occurrence.b[book.id]?.length ?? 0,
      },
    ];
  });
  const parseNames = await getParseNames(language);
  const bookOf = (osis: string) => getBibleBook(osis);
  const senses = await sensesOf(entry, language, locale, bookOf);

  const formsByMorph = new Map<string, { forms: Map<string, number>; n: number }>();
  for (const [form, morphs] of Object.entries(occurrence.fm)) {
    for (const [morph, n] of Object.entries(morphs)) {
      const row = formsByMorph.get(morph) ?? { forms: new Map(), n: 0 };
      row.forms.set(form, (row.forms.get(form) ?? 0) + n);
      row.n += n;
      formsByMorph.set(morph, row);
    }
  }
  const listable = occurrence.v <= placesCap;
  const scan = listable ? await scanVerses(id, language, occurrence) : null;
  const verseCountByMorph = new Map<string, number>();
  if (scan) {
    for (const row of scan.values()) {
      for (const morph of new Set(row.forms.map((entryForm) => entryForm.morph)))
        verseCountByMorph.set(morph, (verseCountByMorph.get(morph) ?? 0) + 1);
    }
  }
  const labelOf = (morph: string) => parseLabel(parseNames[morph] ?? parseNames[`H${morph}`] ?? "", locale) || morph;
  const forms = sortForms(
    [...formsByMorph.entries()].map(([morph, row]) => {
      const form = [...row.forms.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "";
      return {
        morph,
        form: language === "hbo" ? form.normalize("NFC") : form.normalize("NFC"),
        transliteration: transliterationOfForm(form, language, scan),
        label: labelOf(morph),
        short: labelOf(morph).split(", ").slice(1).join(", ").toLowerCase() || labelOf(morph).toLowerCase(),
        n: row.n,
        verses: scan ? (verseCountByMorph.get(morph) ?? 0) : null,
      } satisfies FormRow;
    }),
  );

  let places: PlaceBook[] | null = null;
  if (scan) {
    const result: PlaceBook[] = [];
    const wanted = new Map<string, { book: string; chapter: number; verse: number }[]>();
    for (const row of scan.values()) {
      const entry = getBibleBook(row.book);
      if (!entry) continue;
      const translationId = defaultTranslationId(locale, entry);
      wanted.set(translationId, [
        ...(wanted.get(translationId) ?? []),
        { book: row.book, chapter: row.chapter, verse: row.verse },
      ]);
    }
    const texts = new Map<string, string>();
    await Promise.all(
      [...wanted.entries()].map(async ([translationId, refs]) => {
        for (const [key, text] of await getBibleVerseTexts(translationId, refs)) texts.set(key, text);
      }),
    );
    for (const row of books) {
      const verses: PlaceVerse[] = [];
      for (const ref of occurrence.b[row.id] ?? []) {
        const [chapter = "0", verse = "0"] = ref.split(".");
        const found = scan.get(`${row.id}.${chapter}.${verse}`);
        const book = getBibleBook(row.id);
        if (!found || !book) continue;
        verses.push({
          reference: `${chapter}:${verse}`,
          number: Number(verse),
          href: `${bibleChapterHref(locale, book, Number(chapter))}#v-${verse}`,
          text: (texts.get(`${row.id}.${Number(chapter)}.${Number(verse)}`) ?? "").replace(/\s+/g, " ").trim(),
          forms: found.forms
            .filter(
              (entryForm, at, all) =>
                all.findIndex((other) => other.form === entryForm.form && other.morph === entryForm.morph) === at,
            )
            .map((entryForm) => ({
              morph: entryForm.morph,
              form: entryForm.form,
              transliteration:
                language === "grc" ? transliterateGreek(entryForm.form) : entryForm.t.replace(/\.?\//g, "-"),
            })),
        });
      }
      if (verses.length > 0) result.push({ id: row.id, name: row.name, verses });
    }
    places = result;
  }

  const genitive =
    language === "grc"
      ? ([...formsByMorph.entries()]
          .filter(([morph]) => /^N-GS|^A-GS/.test(morph))
          .sort((a, b) => b[1].n - a[1].n)
          .map(([, row]) => [...row.forms.entries()].sort((a, b) => b[1] - a[1])[0]?.[0])[0] ?? null)
      : null;

  const adjacent = await neighborsOf(id);
  const [previous, next] = await Promise.all([
    neighborView(adjacent.previous, locale),
    neighborView(adjacent.next, locale),
  ]);

  const from = parseFrom(fromParam);
  let verseNeighbors: WordPageData["verseNeighbors"] = null;
  let fromLink: WordPageData["from"] = null;
  if (from) {
    const place = formatVerseRef([`${from.book.id}.${from.chapter}.${from.verse}`], locale);
    fromLink = { label: place, href: `${bibleChapterHref(locale, from.book, from.chapter)}#v-${from.verse}` };
    const verse = await getVerseWords(from.book.id, from.chapter, from.verse);
    const words = verse?.words ?? [];
    const at = words.findIndex((word) => partIndex(word, language, id) >= 0);
    if (at >= 0) {
      const around = async (word: VerseWord | undefined) => {
        if (!word) return null;
        const lexicon =
          language === "grc" ? (word.s.split(" + ")[0] ?? "") : (word.r ?? word.s.split("/").at(-1) ?? "");
        const base = await neighborView(lexicon, locale);
        if (!base) return null;
        return {
          id: lexicon,
          word: formOf(word, language),
          transliteration: word.t,
          gloss: base.gloss,
          lemma: { word: base.word, transliteration: base.transliteration, id: lexicon },
        } satisfies NeighborView;
      };
      verseNeighbors = { place, previous: await around(words[at - 1]), next: await around(words[at + 1]) };
    }
  }

  const gloss = locale === "es" ? (entry.glossEs ?? entry.gloss) : entry.gloss;
  return {
    id,
    language,
    lemma: entry.lemma.normalize("NFC"),
    transliteration: entry.tr,
    literal: gloss,
    literalEnglish: locale === "es" && !entry.glossEs,
    wordClass: parseLabel(entry.pos, locale).toLowerCase(),
    strong: strongNumber(id),
    times: occurrence.n,
    verses: occurrence.v,
    genitive: genitive ? { form: genitive.normalize("NFC"), transliteration: transliterateGreek(genitive) } : null,
    books,
    senses,
    entry: entry.def,
    hasSenseList: senses.length > 0,
    forms,
    places,
    edition: editionName[locale],
    neighbors: { previous, next },
    verseNeighbors,
    from: fromLink,
  };
}
