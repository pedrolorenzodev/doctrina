import "server-only";
import { bibleChapterHref } from "@/content/bible-routes";
import { getBibleBook } from "@/content/bible-books";
import { getBibleTranslations, getBibleVerse } from "@/content/get-bible";
import { translationMeta, translationOrder } from "@/content/bible/translation-meta";
import { formatVerseRef } from "@/content/format-verse";
import type { ApologistLayer, TraditionPage } from "@/content/model/page";
import { verseLink } from "@/content/page-views";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { parseInline } from "@/lib/inline-refs";
import type { Locale } from "@/lib/locale";

export type PassageEdition = { id: string; abbreviation: string; name: string; language: Locale };

export type PassageVerse = { n: number; text: Record<string, string> };

export type PassageBlock = { ref: string; readerHref: string; verses: PassageVerse[] };

export type PassageEntry = {
  id: string;
  title: string;
  short: string;
  main: PassageBlock[];
  parallels: PassageBlock[];
  reading: string;
  verseLinks: Record<string, { id: string; label: string }>;
  apologists: ApologistLayer | null;
};

export type PassagesData = { editions: PassageEdition[]; entries: PassageEntry[] };

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

async function block(segment: string, editions: PassageEdition[], locale: Locale): Promise<PassageBlock> {
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
    verses.push({ n, text });
  }
  return {
    ref: formatVerseRef([segment], locale),
    readerHref: `${bibleChapterHref(locale, entry, chapter)}#v-${from}`,
    verses,
  };
}

export async function getPassages(page: TraditionPage, locale: Locale): Promise<PassagesData> {
  const available = await getBibleTranslations();
  const editions = translationOrder.flatMap((id) => {
    const found = available.find((translation) => translation.id === id);
    const meta = translationMeta[id];
    return found && meta
      ? [{ id, abbreviation: meta.abbreviation, name: meta.displayName, language: found.language }]
      : [];
  });
  const text = getUiText(locale).doctrine.passagesPage;
  const entries: PassageEntry[] = [];
  for (const passage of page.scripture) {
    const main = await Promise.all(passage.refs.map((ref) => block(ref, editions, locale)));
    const parallels = await Promise.all((passage.parallels ?? []).flat().map((ref) => block(ref, editions, locale)));
    const verseLinks: PassageEntry["verseLinks"] = {};
    for (const node of parseInline(passage.text)) {
      if (node.kind === "verse") verseLinks[node.osis.join(",")] = verseLink(node.osis, locale);
    }
    const first = main[0];
    const extra = main.length - shownInShortTitle;
    entries.push({
      id: slugOf(passage.refs[0] ?? ""),
      title: main.map((entry) => entry.ref).join(titleSeparator),
      short:
        main.length === 1 && first
          ? first.ref
          : main
              .slice(0, shownInShortTitle)
              .map((entry) => entry.ref)
              .join(titleSeparator) + (extra > 0 ? ` ${text.andMore.replace("{n}", String(extra))}` : ""),
      main,
      parallels,
      reading: passage.text,
      verseLinks,
      apologists: passage.apologists ?? null,
    });
  }
  return { editions, entries };
}
