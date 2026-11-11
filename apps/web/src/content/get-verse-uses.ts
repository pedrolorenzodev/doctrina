import { formatVerseRef } from "@/content/format-verse";
import { getPublishedPages, getTraditionPage } from "@/content/get-tradition-page";
import type { DoctrineId, TraditionId } from "@doctrina/core/model/ids";
import type { TraditionPage } from "@doctrina/core/model/page";
import { doctrineName } from "@/content/site-tree";
import { traditionHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { bookOrder } from "@/content/verse-names";
import { parseInline } from "@doctrina/core/inline-refs";
import type { Locale } from "@doctrina/core/locale";

export type VerseUse = { id: string; href: string; title: string; context: string };

type Point = [number, number, number];
type Range = { from: Point; to: Point };
type Found = { section: SectionId; ranges: Range[]; passage: string | null };

const sectionIds = ["teach", "why", "scripture", "objections", "life", "authority"] as const;
type SectionId = (typeof sectionIds)[number];

const wholeChapter = 9999;

function pointOf(text: string, last: boolean): Point {
  const [book = "", chapter = "0", verse] = text.split(".");
  return [bookOrder.indexOf(book), Number(chapter), verse === undefined ? (last ? wholeChapter : 0) : Number(verse)];
}

function rangeOf(segment: string): Range {
  const [from = "", to = from] = segment.split("-");
  return { from: pointOf(from, false), to: pointOf(to, true) };
}

const compare = (a: Point, b: Point) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2];

const covers = (range: Range, point: Point) => compare(range.from, point) <= 0 && compare(point, range.to) <= 0;

function stringsIn(value: unknown, into: string[]): string[] {
  if (typeof value === "string") into.push(value);
  else if (Array.isArray(value)) for (const item of value) stringsIn(item, into);
  else if (value && typeof value === "object") for (const item of Object.values(value)) stringsIn(item, into);
  return into;
}

function inlineRanges(value: unknown): Range[] {
  const ranges: Range[] = [];
  for (const text of stringsIn(value, [])) {
    if (!text.includes("{v:")) continue;
    for (const node of parseInline(text)) if (node.kind === "verse") ranges.push(...node.osis.map(rangeOf));
  }
  return ranges;
}

function foundIn(page: TraditionPage, locale: Locale): Found[] {
  const found: Found[] = [];
  for (const section of sectionIds) {
    if (section === "scripture") {
      for (const passage of page.scripture) {
        const refs = [...passage.refs, ...(passage.parallels ?? []).flat()];
        found.push({
          section,
          ranges: [...refs.map(rangeOf), ...inlineRanges(passage.text)],
          passage: formatVerseRef(passage.refs, locale),
        });
      }
      continue;
    }
    found.push({ section, ranges: inlineRanges(page[section]), passage: null });
  }
  return found;
}

type PageUses = { doctrine: DoctrineId; tradition: TraditionId; title: string; found: Found[] };

const cache = new Map<Locale, Promise<PageUses[]>>();

function pagesOf(locale: Locale): Promise<PageUses[]> {
  let pending = cache.get(locale);
  if (!pending) {
    pending = Promise.all(
      getPublishedPages(locale).map(async ({ doctrine, tradition }) => {
        const page = await getTraditionPage(doctrine, tradition, locale);
        return page ? [{ doctrine, tradition, title: page.title, found: foundIn(page, locale) }] : [];
      }),
    ).then((lists) => lists.flat());
    cache.set(locale, pending);
  }
  return pending;
}

export async function getChapterUses(
  locale: Locale,
  book: string,
  chapter: number,
  verses: number[],
): Promise<Record<string, VerseUse[]>> {
  const pages = await pagesOf(locale);
  if (pages.length === 0) return {};
  const text = getUiText(locale);
  const sectionLabel: Record<SectionId, string> = {
    teach: text.doctrine.teach,
    why: text.doctrine.why,
    scripture: text.doctrine.scripture,
    objections: text.doctrine.objections,
    life: text.doctrine.life,
    authority: text.doctrine.authority,
  };
  const result: Record<string, VerseUse[]> = {};
  for (const verse of verses) {
    const point: Point = [bookOrder.indexOf(book), chapter, verse];
    const uses: VerseUse[] = [];
    for (const page of pages) {
      for (const section of sectionIds) {
        const hit = page.found.find(
          (entry) => entry.section === section && entry.ranges.some((range) => covers(range, point)),
        );
        if (!hit) continue;
        const subject = doctrineName(locale, page.doctrine);
        uses.push({
          id: `${page.doctrine}/${page.tradition}/${section}`,
          href: `${traditionHref(locale, page.doctrine, page.tradition)}#${section}`,
          title: `${page.title}, ${sectionLabel[section]}`,
          context: hit.passage
            ? text.reader.panel.uses.inPassage.replace("{doctrine}", subject).replace("{passage}", hit.passage)
            : text.reader.panel.uses.inText.replace("{doctrine}", subject),
        });
      }
    }
    if (uses.length > 0) result[String(verse)] = uses;
  }
  return result;
}
