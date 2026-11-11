import "server-only";
import { bibleChapterHref } from "@/content/bible-routes";
import { getBibleBook } from "@/content/bible-books";
import { getBibleTranslations, getBibleVerse } from "@/content/get-bible";
import { translationMeta, translationOrder } from "@doctrina/core/bible/translation-meta";
import { formatVerseRef } from "@/content/format-verse";
import type { ApologistLayer, ScripturePassage, TraditionPage } from "@doctrina/core/model/page";
import { collectPageViews, verseLink } from "@/content/page-views";
import { passageFocus } from "@/content/passage-focus";
import { shownScripture } from "@/content/shown-passages";
import { registry } from "@/content/registry/index";
import type { CitationView } from "@/lib/citation-view";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { parseInline } from "@doctrina/core/inline-refs";
import type { Locale } from "@doctrina/core/locale";

export type PassageEdition = { id: string; abbreviation: string; name: string; language: Locale };

export type PassageVerse = { n: number; text: Record<string, string>; focus: boolean };

export type PassageBlock = { ref: string; readerHref: string; verses: PassageVerse[] };

export type PassageCore = {
  main: PassageBlock[];
  parallels: PassageBlock[];
  reading: string;
  verseLinks: Record<string, { id: string; label: string }>;
};

export type PassageSummary = { id: string; title: string; short: string };

export type PassagesData = {
  editions: PassageEdition[];
  entries: PassageSummary[];
  first: PassageCore;
  firstApologists: ApologistLayer;
};

const versesBeforeThird = 2;
const titleSeparator = " · ";
const shownInShortTitle = 2;

function slugOf(ref: string): string {
  return ref
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseRef(segment: string): { book: string; chapter: number; from: number; to: number } {
  const [first = "", last] = segment.split("-");
  const [book = "", chapter = "", verse = ""] = first.split(".");
  const lastVerse = last ? last.split(".")[2] : verse;
  return { book, chapter: Number(chapter), from: Number(verse), to: Number(lastVerse) };
}

async function block(
  segment: string,
  editions: PassageEdition[],
  locale: Locale,
  focus: Set<string> = new Set(),
): Promise<PassageBlock> {
  const { book, chapter, from, to } = parseRef(segment);
  const entry = getBibleBook(book);
  if (!entry) throw new Error(`Unknown book in passage ${segment}`);
  const verses: PassageVerse[] = [];
  for (let n = from; n <= to; n += 1) {
    const text: Record<string, string> = {};
    for (const edition of editions) {
      const verse = await getBibleVerse(edition.id, book, chapter, n);
      text[edition.id] = (verse?.text ?? "").replace(/\s+/g, " ").trim();
    }
    verses.push({ n, text, focus: focus.has(`${book}.${chapter}.${n}`) });
  }
  return {
    ref: formatVerseRef([segment], locale),
    readerHref:
      from > versesBeforeThird
        ? `${bibleChapterHref(locale, entry, chapter)}?place=third#v-${from}`
        : bibleChapterHref(locale, entry, chapter),
    verses,
  };
}

async function loadEditions(): Promise<PassageEdition[]> {
  const available = await getBibleTranslations();
  return translationOrder.flatMap((id) => {
    const found = available.find((translation) => translation.id === id);
    const meta = translationMeta[id];
    return found && meta
      ? [{ id, abbreviation: meta.abbreviation, name: meta.displayName, language: found.language }]
      : [];
  });
}

function refLabels(passage: ScripturePassage, locale: Locale): string[] {
  return passage.refs.map((ref) => formatVerseRef([ref], locale));
}

export async function getPassageCore(
  page: TraditionPage,
  index: number,
  locale: Locale,
  loaded?: PassageEdition[],
): Promise<PassageCore | null> {
  const passage = shownScripture(page)[index];
  if (!passage) return null;
  const editions = loaded ?? (await loadEditions());
  const focus = passageFocus(page, passage.refs);
  const main = await Promise.all(passage.refs.map((ref) => block(ref, editions, locale, focus)));
  const parallels = await Promise.all((passage.parallels ?? []).flat().map((ref) => block(ref, editions, locale)));
  const verseLinks: PassageCore["verseLinks"] = {};
  for (const node of parseInline(passage.text)) {
    if (node.kind === "verse") verseLinks[node.osis.join(",")] = verseLink(node.osis, locale);
  }
  return { main, parallels, reading: passage.text, verseLinks };
}

export function getPassageApologists(page: TraditionPage, index: number): ApologistLayer | null {
  return shownScripture(page)[index]?.apologists ?? null;
}

export async function getPassages(page: TraditionPage, locale: Locale): Promise<PassagesData> {
  const editions = await loadEditions();
  const text = getUiText(locale).doctrine.passagesPage;
  const entries: PassageSummary[] = shownScripture(page).map((passage) => {
    const labels = refLabels(passage, locale);
    const extra = labels.length - shownInShortTitle;
    return {
      id: slugOf(passage.refs[0] ?? ""),
      title: labels.join(titleSeparator),
      short:
        labels.length === 1
          ? (labels[0] ?? "")
          : labels.slice(0, shownInShortTitle).join(titleSeparator) +
            (extra > 0 ? ` ${text.andMore.replace("{n}", String(extra))}` : ""),
    };
  });
  const first = await getPassageCore(page, 0, locale, editions);
  const firstApologists = getPassageApologists(page, 0);
  if (!first || !firstApologists)
    throw new Error(`Tradition page without passages with apologists: ${page.doctrine}/${page.tradition}`);
  return { editions, entries, first, firstApologists };
}

export function getPassageViews(page: TraditionPage, locale: Locale): Record<string, CitationView> {
  const onlyPassages: TraditionPage = {
    ...page,
    teach: { ...page.teach, definition: { text: "", grades: [], sources: [] }, statements: [] },
    objections: { ...page.objections, items: [] },
    authority: { ...page.authority, grades: {} },
    life: { intro: [], items: [] },
    why: { intro: [], fathers: [], note: "", closing: "" },
  };
  return collectPageViews(onlyPassages, registry, locale, getUiText(locale));
}
