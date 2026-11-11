import { buildCitationView } from "@/content/citation-view";
import { allFathers } from "@/content/history/all-fathers";
import { writingWorkIds } from "@/content/father-writing-links";
import { registry } from "@/content/registry/index";
import { writingYears } from "@/content/writing-years";
import { en } from "@/content/ui-text/en";
import { es } from "@/content/ui-text/es";
import type { UiText } from "@/content/ui-text/types";
import type { CitationView } from "@/lib/citation-view";
import type { Locale } from "@doctrina/core/locale";

export type QuoteDate = NonNullable<CitationView["date"]>;

const texts: Record<Locale, UiText> = { es, en };
const citationKey = /^tradition:[^:]+:[^:]+:cite:([^:]+):/;

const writingByWork = new Map<string, { date: string; year: number }>();
for (const father of allFathers) {
  (writingWorkIds[father.id] ?? []).forEach((workIds, index) => {
    const writing = father.works[index];
    if (writing) for (const workId of workIds) writingByWork.set(workId, writing);
  });
}

export function fatherWorkDate(workId: string): QuoteDate | null {
  const writing = writingByWork.get(workId);
  if (!writing) return null;
  const { start, end } = writingYears(writing.date, writing.year);
  return { label: writing.date, start, end };
}

export function citationDate(citationId: string, locale: Locale): QuoteDate | null {
  if (!Object.hasOwn(registry.citations, citationId)) return null;
  return buildCitationView(citationId, registry, locale, texts[locale]).date;
}

export function passageDate(
  passage: { key: string; father: { workId: string } | null },
  locale: Locale,
): QuoteDate | null {
  if (passage.father) return fatherWorkDate(passage.father.workId);
  const citation = citationKey.exec(passage.key)?.[1];
  return citation ? citationDate(citation, locale) : null;
}
