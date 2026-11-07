import { bibleBooks, getBibleBook } from "@/content/bible-books";
import { bibleVerseHref } from "@/content/bible-routes";
import { translationMeta } from "@/content/bible/translation-meta";
import { workName, worksByFather } from "@/content/father-work-links";
import { writingWorkIds } from "@/content/father-writing-links";
import { allFathers } from "@/content/history/all-fathers";
import type { DoctrineId, TraditionId } from "@/content/model/ids";
import { bookNames } from "@/content/verse-names";
import type { Collection, Licence, Passage, PassageRow, Speaker } from "@/content/ai-search/types";
import type { Locale } from "@/lib/locale";

export const PART_MAX_CHARS = 1800;
export const CUT_ABOVE_CHARS = 2400;

type Quotas = {
  bible: number;
  fathers: number;
  perAuthor: number;
  perTradition: number;
  doctrine: number;
  glossary: number;
  mine: number;
  extra: number;
};

export const richQuotas: Quotas = {
  bible: 12,
  fathers: 16,
  perAuthor: 3,
  perTradition: 4,
  doctrine: 3,
  glossary: 3,
  mine: 6,
  extra: 24,
};

export const briefQuotas: Quotas = {
  bible: 8,
  fathers: 8,
  perAuthor: 2,
  perTradition: 3,
  doctrine: 2,
  glossary: 2,
  mine: 6,
  extra: 24,
};

export const collectionLabels: Record<Collection, Record<Locale, string>> = {
  bible: { es: "Biblia", en: "Bible" },
  fathers: { es: "Padres de la Iglesia", en: "Church Fathers" },
  tradition: { es: "Documentos de las tradiciones", en: "Traditions' documents" },
  doctrine: { es: "Doctrina", en: "Doctrine" },
  glossary: { es: "Glosario", en: "Glossary" },
  mine: { es: "Tus notas", en: "Your notes" },
};

export const traditionLabels: Record<TraditionId, Record<Locale, string>> = {
  catholic: { es: "Iglesia católica", en: "Catholic Church" },
  orthodox: { es: "Iglesia ortodoxa", en: "Orthodox Church" },
  lutheran: { es: "Tradición luterana", en: "Lutheran tradition" },
  reformed: { es: "Tradición reformada", en: "Reformed tradition" },
  baptist: { es: "Tradición bautista", en: "Baptist tradition" },
  pentecostal: { es: "Tradición pentecostal", en: "Pentecostal tradition" },
};

export const doctrineSubjects: Record<DoctrineId, Record<Locale, string>> = {
  eucharist: { es: "la Eucaristía", en: "the Eucharist" },
  justification: { es: "la justificación", en: "justification" },
  baptism: { es: "el bautismo", en: "baptism" },
  papacy: { es: "el papado", en: "the papacy" },
  "sola-scriptura": { es: "Sola Scriptura", en: "Sola Scriptura" },
};

const doctrineSlugs: Record<Locale, Record<DoctrineId, string>> = {
  es: {
    eucharist: "eucaristia",
    justification: "justificacion",
    baptism: "bautismo",
    papacy: "papado",
    "sola-scriptura": "sola-scriptura",
  },
  en: {
    eucharist: "eucharist",
    justification: "justification",
    baptism: "baptism",
    papacy: "papacy",
    "sola-scriptura": "sola-scriptura",
  },
};

const traditionSlugs: Record<Locale, Record<TraditionId, string>> = {
  es: {
    catholic: "catolica",
    orthodox: "ortodoxa",
    lutheran: "luterana",
    reformed: "reformada",
    baptist: "bautista",
    pentecostal: "pentecostal",
  },
  en: {
    catholic: "catholic",
    orthodox: "orthodox",
    lutheran: "lutheran",
    reformed: "reformed",
    baptist: "baptist",
    pentecostal: "pentecostal",
  },
};

const doctrinesSegment: Record<Locale, string> = { es: "doctrinas", en: "doctrines" };
const historySegment: Record<Locale, string> = { es: "historia", en: "history" };
const worksSegment: Record<Locale, string> = { es: "obras", en: "works" };
const glossarySegment: Record<Locale, string> = { es: "glosario", en: "glossary" };

export const divisionAnchor = (locator: string) => `d-${locator.replace(/[^a-zA-Z0-9.-]+/g, "-")}`;

export const hrefs = {
  father: (locale: Locale, workId: string, locator: string) =>
    `/${locale}/${historySegment[locale]}/${worksSegment[locale]}/${workId}#${divisionAnchor(locator)}`,
  tradition: (locale: Locale, doctrine: DoctrineId, tradition: TraditionId) =>
    `/${locale}/${doctrinesSegment[locale]}/${doctrineSlugs[locale][doctrine]}/${traditionSlugs[locale][tradition]}`,
  doctrine: (locale: Locale, doctrine: DoctrineId) =>
    `/${locale}/${doctrinesSegment[locale]}/${doctrineSlugs[locale][doctrine]}`,
  glossary: (locale: Locale, slug: string) => `/${locale}/${glossarySegment[locale]}/${slug}`,
};

export const bibleLicence: Record<string, Licence> = {
  rv1909: "public-domain",
  bsb: "cc0-translation",
  kjv: "public-domain",
  "web-c": "public-domain",
  dra: "public-domain",
};

export function maxQuoteWordsFor(licence: Licence): number {
  if (licence === "short-quote" || licence === "unconfirmed") return 40;
  if (licence === "site-authored") return 60;
  return 80;
}

const licenceWords: Record<Licence, Record<Locale, string>> = {
  "public-domain": { es: "Dominio público.", en: "Public domain." },
  "cc0-translation": { es: "Dominio público.", en: "Public domain." },
  "short-quote": { es: "Cita breve con enlace a la fuente.", en: "Short quote with a link to the source." },
  unconfirmed: { es: "Licencia sin confirmar; cita breve.", en: "Licence unconfirmed; short quote." },
  "site-authored": { es: "Texto de Doctrina.", en: "Doctrina's own text." },
  reader: { es: "Nota del lector.", en: "The reader's note." },
};

const draftWords: Record<Locale, string> = { es: "Borrador sin verificar.", en: "Unverified draft." };

export const DRAFT_MARK = " [draft]";

export function bibleTranslationName(translationId: string): string {
  return translationMeta[translationId]?.displayName ?? translationId.toUpperCase();
}

export function bibleLang(translationId: string): "es" | "en" {
  return translationId === "rv1909" ? "es" : "en";
}

const fatherByAuthor = new Map(allFathers.map((father) => [father.id, father]));

export function fatherNames(authorId: string): { es: string; en: string } | null {
  const father = fatherByAuthor.get(authorId);
  return father ? { es: father.name.es, en: father.name.en } : null;
}

export function fatherName(authorId: string | null, locale: Locale): string | null {
  if (!authorId) return null;
  return fatherNames(authorId)?.[locale] ?? null;
}

const writingYearOf = new Map<string, number>();
for (const [fatherId, writings] of Object.entries(writingWorkIds)) {
  const father = fatherByAuthor.get(fatherId);
  writings.forEach((workIds, index) => {
    const year = father?.works[index]?.year;
    if (year !== undefined) for (const workId of workIds) writingYearOf.set(workId, year);
  });
}

export function fatherYearOf(workId: string, authorId: string | null): number | null {
  const own = writingYearOf.get(workId);
  if (own !== undefined) return own;
  const father = authorId ? fatherByAuthor.get(authorId) : undefined;
  return father ? father.died : null;
}

export function fatherIdsByWork(works: { id: string; author: string; title: string }[]): Map<string, string> {
  const grouped = worksByFather(works, "es");
  const byWork = new Map<string, string>();
  for (const [fatherId, rows] of Object.entries(grouped)) for (const row of rows) byWork.set(row.id, fatherId);
  return byWork;
}

export function speakerOfWork(workSpeaker: string): Speaker | null {
  return (Object.keys(traditionLabels) as string[]).includes(workSpeaker) ? (workSpeaker as TraditionId) : null;
}

export function licenceOfEdition(licence: string): Exclude<Licence, "reader"> {
  if (licence === "public-domain" || licence === "short-quote" || licence === "unconfirmed") return licence;
  if (licence === "site-authored" || licence === "cc0-translation") return licence;
  return "unconfirmed";
}

export function licenceOfGlossary(text: string | null): Exclude<Licence, "reader"> {
  const lower = (text ?? "").toLowerCase();
  if (lower.includes("public domain") || lower.includes("dominio público")) return "public-domain";
  if (lower.includes("short quote")) return "short-quote";
  return "unconfirmed";
}

function editionLabelOf(row: PassageRow, locale: Locale): string {
  const draft = row.edition_label.endsWith(DRAFT_MARK);
  const base = draft ? row.edition_label.slice(0, -DRAFT_MARK.length) : row.edition_label;
  const tail = [licenceWords[row.licence][locale], draft ? draftWords[locale] : ""].filter(Boolean).join(" ");
  return `${base}. ${tail}`;
}

export function passageFromRow(row: PassageRow, locale: Locale): Passage {
  const draft = row.edition_label.endsWith(DRAFT_MARK);
  const common = {
    key: row.source_key,
    collection: row.collection,
    speaker: row.speaker,
    doctrine: row.doctrine,
    lang: row.lang,
    licence: row.licence,
    translatedByAi: row.translated_by_ai,
    maxQuoteWords: row.max_quote_words,
    refs: row.refs,
    text: row.text,
    author: row.author,
    year: row.year,
    editionLabel: editionLabelOf(row, locale),
    ...(draft ? { draft: true } : {}),
  };
  if (row.collection === "fathers") {
    const workId = row.work_id ?? "";
    const title = workName(workId, locale, row.title);
    const locator = row.locator ?? "";
    return {
      ...common,
      title,
      who: fatherName(row.author, locale) ?? title,
      locatorLabel: `${title} ${locator}`.trim(),
      href: hrefs.father(locale, workId, locator),
      father: { workId, editionId: row.edition_id ?? "", locator },
      bible: null,
    };
  }
  const speaker = row.speaker;
  const isTradition = (Object.keys(traditionLabels) as string[]).includes(speaker);
  const tradition = isTradition ? (speaker as TraditionId) : null;
  const isExcerpt = row.source_key.includes(":cite:");
  const locator = row.locator;
  let href: string | null = null;
  if (row.collection === "tradition" && tradition && row.doctrine)
    href = hrefs.tradition(locale, row.doctrine, tradition);
  else if (row.collection === "doctrine" && row.doctrine) href = hrefs.doctrine(locale, row.doctrine);
  else if (row.collection === "glossary") href = hrefs.glossary(locale, row.source_key.split(":")[1] ?? "");
  const who = isExcerpt || !tradition ? row.title : traditionLabels[tradition][locale];
  const locatorLabel =
    isExcerpt && locator
      ? `${row.title}, ${locator}`
      : row.collection === "glossary"
        ? (locator ?? row.title)
        : row.title;
  return { ...common, title: row.title, who, locatorLabel, href, father: null, bible: null };
}

export function bibleKey(translationId: string, book: string, chapter: number, verse: number, verseEnd: number | null) {
  return `bible:${translationId}:${book}.${chapter}.${verse}${verseEnd && verseEnd !== verse ? `-${verseEnd}` : ""}`;
}

export function biblePassage(
  input: { translationId: string; book: string; chapter: number; verse: number; verseEnd: number | null; text: string },
  doctrine: DoctrineId | null,
  locale: Locale,
): Passage | null {
  const book = getBibleBook(input.book);
  if (!book) return null;
  const lang = bibleLang(input.translationId);
  const name = bookNames[input.book]?.[locale] ?? book.names[locale];
  const end = input.verseEnd && input.verseEnd !== input.verse ? `–${input.verseEnd}` : "";
  const label = `${name} ${input.chapter}:${input.verse}${end}`;
  const licence = bibleLicence[input.translationId] ?? "unconfirmed";
  return {
    key: bibleKey(input.translationId, input.book, input.chapter, input.verse, input.verseEnd),
    collection: "bible",
    speaker: "shared",
    doctrine,
    lang,
    title: label,
    who: name,
    locatorLabel: label,
    editionLabel: `${bibleTranslationName(input.translationId)}. ${licenceWords[licence][locale]}`,
    licence,
    translatedByAi: false,
    maxQuoteWords: maxQuoteWordsFor(licence),
    href: bibleVerseHref(locale, book, input.chapter, input.verse),
    refs: [],
    text: input.text,
    author: null,
    year: null,
    father: null,
    bible: {
      book: input.book,
      chapter: input.chapter,
      verse: input.verse,
      verseEnd: input.verseEnd && input.verseEnd !== input.verse ? input.verseEnd : null,
      translationId: input.translationId,
    },
  };
}

export function relabel(passage: Passage, locale: Locale): Passage {
  if (passage.collection === "bible" && passage.bible) {
    return (
      biblePassage(
        { ...passage.bible, verseEnd: passage.bible.verseEnd, text: passage.text },
        passage.doctrine,
        locale,
      ) ?? passage
    );
  }
  return passage;
}

export const bibleOrdinal = new Map(bibleBooks.map((book) => [book.id, book.ordinal]));

export const MAX_VERSE_SPAN = 8;

export type OsisRef = { book: string; chapter: number; verse: number | null; verseEnd: number | null };

export function osisParts(ref: string): OsisRef | null {
  const [startText = "", endText] = ref.trim().split("-");
  const start = /^([1-3]?[A-Za-z]+)\.(\d+)(?:\.(\d+))?$/.exec(startText);
  if (!start) return null;
  const [, book = "", chapterText = "", verseText] = start;
  if (!getBibleBook(book)) return null;
  const chapter = Number(chapterText);
  if (verseText === undefined) return { book, chapter, verse: null, verseEnd: null };
  const verse = Number(verseText);
  let verseEnd: number | null = null;
  if (endText !== undefined) {
    const pieces = endText.split(".");
    const numbers = pieces.filter((piece) => /^\d+$/.test(piece)).map(Number);
    const endBook = /^[1-3]?[A-Za-z]/.test(pieces[0] ?? "") ? pieces[0] : book;
    const last = numbers[numbers.length - 1];
    if (pieces.length === 1 && last !== undefined) verseEnd = last;
    else if (last !== undefined && numbers[numbers.length - 2] === chapter && endBook === book) verseEnd = last;
    else verseEnd = verse + MAX_VERSE_SPAN - 1;
  }
  if (verseEnd !== null) verseEnd = Math.min(verseEnd, verse + MAX_VERSE_SPAN - 1);
  return { book, chapter, verse, verseEnd: verseEnd !== null && verseEnd > verse ? verseEnd : null };
}
