import { lifeText, type FatherFact } from "@/content/father-life";
import { formatYear } from "@/content/format-date";
import type { FatherWorkRow } from "@/content/father-work-links";
import { writingWorkIds } from "@/content/father-writing-links";
import type { Father } from "@/content/model/history";
import { fatherWorkHref } from "@/content/routes";
import type { UiText } from "@/content/ui-text/types";
import type { Locale } from "@/lib/locale";

export type { FatherFact };

export type FatherWritingView = { id: string; title: string; dateLabel: string; href?: string };

export type FatherView = {
  name: string;
  summary: string;
  headerFacts: FatherFact[];
  profileFacts: FatherFact[];
  writings: FatherWritingView[];
  writingsSpan: { start: number; end: number | null; label: string } | null;
  searchDate: string;
};

const bishopRole = /^(obispo|arzobispo|bishop|archbishop) (?:de |of )(.+)$/i;
const yearRange = /(\d+)\s*[–-]\s*(\d+)/;

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

function writingYears(date: string, year: number): { start: number; end: number | null } {
  const range = yearRange.exec(date);
  return range ? { start: Number(range[1]), end: Number(range[2]) } : { start: year, end: null };
}

type DatedWriting = { id: string; title: string; dateLabel: string };

function writingViews(
  father: Father,
  locale: Locale,
  writings: DatedWriting[],
  corpusWorks: FatherWorkRow[],
): FatherWritingView[] {
  const claimed = new Set<string>();
  const views = writings.flatMap((writing, index): FatherWritingView[] => {
    const rows = (writingWorkIds[father.id]?.[index] ?? []).flatMap(
      (id) => corpusWorks.find((row) => row.id === id) ?? [],
    );
    rows.forEach((row) => claimed.add(row.id));
    if (rows.length === 0) return [writing];
    const [only] = rows;
    if (rows.length === 1 && only) return [{ ...writing, href: fatherWorkHref(locale, only.id) }];
    return rows.map((row) => ({
      id: row.id,
      title: row.label,
      dateLabel: writing.dateLabel,
      href: fatherWorkHref(locale, row.id),
    }));
  });
  const unclaimed = corpusWorks
    .filter((row) => !claimed.has(row.id))
    .map((row) => ({ id: row.id, title: row.label, dateLabel: "", href: fatherWorkHref(locale, row.id) }));
  return [...views, ...unclaimed];
}

export function buildFatherView(
  father: Father,
  locale: Locale,
  text: UiText,
  corpusWorks: FatherWorkRow[] = [],
): FatherView {
  const labels = text.father;
  const role = father.role[locale];
  const bishop = bishopRole.exec(role);
  const roleFact: FatherFact = bishop
    ? { label: labels.bishopOf.replace("{title}", capitalize(bishop[1] ?? "")), value: capitalize(bishop[2] ?? "") }
    : { label: father.kind === "work" ? labels.whatIs : labels.facts.role, value: capitalize(role) };
  const language = capitalize(labels.languages[father.language]);
  const writings = father.works.map((work, index) => ({
    id: `${father.id}-${index}`,
    title: work.title[locale],
    dateLabel: work.date,
    ...writingYears(work.date, work.year),
  }));
  const starts = writings.map((writing) => writing.start);
  const ends = writings.map((writing) => writing.end ?? writing.start);
  const first = Math.min(...starts);
  const last = Math.max(...ends);
  const someCirca = writings.some((writing) => writing.dateLabel.startsWith("c."));
  const life = lifeText(father, locale, text);
  const died = formatYear({ year: father.died, circa: father.approx });
  const born = father.born === null ? labels.facts.unknown : formatYear({ year: father.born, circa: father.approx });
  const dated = father.works[0]?.date ?? died;
  const personFacts: FatherFact[] = [
    ...(life?.header ?? [
      { label: labels.facts.born, value: born },
      { label: labels.facts.died, value: died },
    ]),
    roleFact,
    { label: labels.facts.wroteIn, value: locale === "es" ? language.toLowerCase() : language },
  ];
  const workFacts: FatherFact[] = [
    life ? life.profileDate : { label: labels.workDate, value: dated },
    roleFact,
    { label: labels.language, value: language.toLowerCase() },
  ];
  return {
    name: father.name[locale],
    summary: father.summary[locale],
    headerFacts: father.kind === "work" ? workFacts : personFacts,
    profileFacts: [
      { label: labels.facts.region, value: father.region[locale] },
      { label: labels.language, value: language },
      { label: father.kind === "work" ? labels.workKind : labels.facts.role, value: capitalize(role) },
      life
        ? life.profileDate
        : father.kind === "work"
          ? { label: labels.workDate, value: dated }
          : { label: labels.facts.died, value: died },
    ],
    writings: writingViews(father, locale, writings, corpusWorks),
    writingsSpan:
      writings.length > 0 && Number.isFinite(first)
        ? {
            start: first,
            end: last > first ? last : null,
            label:
              last > first ? `${someCirca ? "c. " : ""}${first}–${last}` : (writings[0]?.dateLabel ?? String(first)),
          }
        : null,
    searchDate: life?.searchDate ?? `† ${died}`,
  };
}
