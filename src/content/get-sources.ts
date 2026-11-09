import { readFileSync } from "node:fs";
import { join } from "node:path";
import { formatDate } from "@/content/format-date";
import { workName, worksByFather } from "@/content/father-work-links";
import { writingWorkIds } from "@/content/father-writing-links";
import { getPublishedFathers } from "@/content/get-fathers";
import { getFatherWorks } from "@/content/get-father-works";
import type { DateInfo, Registry } from "@/content/model/registry";
import { registry } from "@/content/registry/index";
import { sourceDate, sourceTitle } from "@/content/source-labels";
import { fatherWorkHref } from "@/content/routes";
import type { Locale } from "@/lib/locale";

import { sourceKinds, type SourceKind } from "@/content/source-kinds";

type Localized = Record<Locale, string>;
type CatalogueSource = {
  id: string;
  kind: string;
  title: Localized;
  author: Localized;
  date: string;
  year?: number;
  yearEnd?: number;
  edition: { name: string; year?: number; license: string; url?: string };
};
export type SourceEntry = {
  id: string;
  kind: SourceKind;
  title: string;
  titleLang: Locale;
  documentKind: string | null;
  author: string;
  date: string;
  start: number | null;
  end: number | null;
  editions: { bibliography: string; licence: string; href: string | null }[];
  reader: string | null;
};

const aliases: Record<string, string> = {
  ccc: "cec",
  "new-hampshire-1833": "new-hampshire",
  westminster: "wcf",
  "baptist-faith-message": "bfm-2000",
  "apology-augsburg": "apology",
  "smalcald-articles": "smalcald",
  "formula-concord-epitome": "fc-epitome",
  "formula-concord-sd": "fc-sd",
  "philaret-longer-catechism": "philaret",
  "mogila-orthodox-confession": "mogila",
  "westminster-larger-catechism": "wlc",
  "ecclesia-de-eucharistia": "ede",
  "florence-cantate-domino": "florence-cantate",
  "chalcedon-definition": "chalcedon",
};
const readerIds: Record<string, string> = {
  "cyprian-on-the-lapsed": "cyprian-de-lapsis",
  "justin-dialogue": "justin-dialogue-trypho",
  "ambrose-on-the-mysteries": "ambrose-de-mysteriis",
  "chrysostom-hom-hebrews": "chrysostom-homilies-hebrews",
  "chrysostom-hom-john": "chrysostom-homilies-john",
  "augustine-on-christian-doctrine": "augustine-de-doctrina-christiana",
  "athanasius-on-the-incarnation": "athanasius-de-incarnatione",
};
const canonical = (id: string) => aliases[id] ?? id;
const read = (path: string) => JSON.parse(readFileSync(join(process.cwd(), path), "utf8"));
const base = (read("data/raw/v1.json") as { sources: CatalogueSource[] }).sources;
const extra = read("data/site/sources.extra.json") as CatalogueSource[];
const catalogue = new Map(
  [...base, ...extra].filter((source) => source.kind !== "scripture").map((source) => [canonical(source.id), source]),
);
const current: Registry = registry;

function kindOf(kind: string): SourceKind {
  if (sourceKinds.includes(kind as SourceKind)) return kind as SourceKind;
  return "council";
}

function yearsOf(source: Pick<CatalogueSource, "date" | "year" | "yearEnd">): number[] {
  if (source.year !== undefined) return source.year > 0 ? [source.year, source.yearEnd ?? source.year] : [];
  return (source.date.match(/\d{3,4}/g) ?? []).map(Number);
}

const catalogueId = (id: string) =>
  Object.entries(readerIds).find(([, readerId]) => readerId === id)?.[0] ?? canonical(id);

async function sourceIds() {
  return new Set([
    ...catalogue.keys(),
    ...Object.values(current.works)
      .filter((work) => work.kind !== "status-line")
      .map((work) => canonical(work.id)),
    ...(await getFatherWorks()).map((work) => catalogueId(work.id)),
  ]);
}

export async function getSourceCount(): Promise<number> {
  return (await sourceIds()).size;
}

export async function getSources(locale: Locale): Promise<SourceEntry[]> {
  const corpus = await getFatherWorks();
  const readable = new Map(corpus.map((work) => [catalogueId(work.id), work]));
  const grouped = worksByFather(corpus, locale);
  const fathers = getPublishedFathers(locale);
  const ids = await sourceIds();
  return [...ids]
    .map((id): SourceEntry => {
      const source = catalogue.get(id);
      const work = current.works[id];
      const full = readable.get(id);
      const father = full ? fathers.find((father) => grouped[father.id]?.some((row) => row.id === full.id)) : null;
      const author = full
        ? fathers.find((entry) => entry.id === (full.author === "hippolytus" ? "hippolytus-of-rome" : full.author))
        : null;
      const writingIndex =
        full && father ? (writingWorkIds[father.id]?.findIndex((ids) => ids.includes(full.id)) ?? -1) : -1;
      const writing = writingIndex >= 0 ? father?.works[writingIndex] : null;
      const citations = Object.values(current.citations).filter((citation) => citation.work === id);
      const dates: DateInfo[] = work?.date
        ? [work.date]
        : citations.flatMap((citation) => (citation.date ? [citation.date] : []));
      const recordedDates = [...new Set(dates.map((date) => formatDate(date, locale)))];
      const years = source
        ? yearsOf(source)
        : dates.length
          ? dates.flatMap((date) => [date.year, date.yearEnd ?? date.year, ...(date.alsoYears ?? [])])
          : writing
            ? yearsOf({
                date: writing.date,
                year: Number(/(\d+)\s*[–-]\s*\d+/.exec(writing.date)?.[1]) || writing.year,
                yearEnd: Number(/\d+\s*[–-]\s*(\d+)/.exec(writing.date)?.[1]) || writing.year,
              })
            : [];
      const used = new Set(
        citations.flatMap((citation) =>
          citation.excerpts.flatMap((excerpt) =>
            Object.values(excerpt).flatMap((passage: unknown) =>
              typeof passage === "object" && passage !== null && "edition" in passage ? [String(passage.edition)] : [],
            ),
          ),
        ),
      );
      const editions: SourceEntry["editions"] = [
        ...new Map(
          Object.values(current.editions)
            .filter((edition) => used.has(edition.id))
            .map((edition) => [
              edition.bibliography,
              {
                bibliography: edition.bibliography,
                licence: edition.licence,
                href: edition.scan?.href ?? edition.access ?? null,
              },
            ]),
        ).values(),
      ];
      if (editions.length === 0 && source)
        editions.push({
          bibliography: [source.edition.name, source.edition.year].filter(Boolean).join(", "),
          licence: source.edition.license,
          href: source.edition.url ?? null,
        });
      if (full && !editions.some((edition) => edition.bibliography === full.edition.bibliography))
        editions.push({ bibliography: full.edition.bibliography, licence: full.edition.licence, href: null });
      const title =
        source?.title[locale] ??
        (full ? workName(full.id, locale, full.title) : sourceTitle(id, work?.title ?? id, locale));
      return {
        id,
        kind: kindOf(
          source?.kind === "papal" ? "council" : (source?.kind ?? work?.kind ?? (full ? "church-father" : "council")),
        ),
        title,
        titleLang: full && title === full.title ? full.edition.lang : locale,
        documentKind: work?.kind ?? null,
        author: source?.author[locale] ?? author?.name[locale] ?? "",
        date: source
          ? sourceDate(source.date, locale)
          : recordedDates.join("; ") || (writing ? sourceDate(writing.date, locale) : ""),
        start: years.length ? Math.min(...years) : null,
        end: years.length ? Math.max(...years) : null,
        editions,
        reader: full ? fatherWorkHref(locale, full.id) : null,
      };
    })
    .sort((a, b) => (a.start ?? Infinity) - (b.start ?? Infinity) || a.title.localeCompare(b.title, locale));
}
