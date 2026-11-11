import "server-only";
import { formatDate, formatYear } from "@/content/format-date";
import { formatLocator } from "@/content/format-locator";
import { pickQuote } from "@/content/citation-view";
import type { DocLang } from "@/content/model/ids";
import type { Objection } from "@/content/model/page";
import { itemName } from "@/content/item-names";
import type { Registry } from "@/content/model/registry";
import { registry } from "@/content/registry/index";
import type { SourceRow } from "@/lib/source-row";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@doctrina/core/locale";

const data: Registry = registry;

export type ObjectorText = {
  id: string;
  text: string;
  lang: string;
  languageNote: string | null;
  label: string;
  year: string | null;
  source: SourceRow;
};

export function getObjectorTexts(objection: Objection, locale: Locale): ObjectorText[] {
  const text = getUiText(locale);
  const { shown, more } = objection.objectorTexts;
  return [...shown, ...more].flatMap((id) => {
    const citation = data.citations[id];
    const work = citation ? data.works[citation.work] : undefined;
    if (!citation || !work || citation.kind !== "other-tradition") return [];
    const quote = pickQuote(citation.excerpts, locale);
    if (!quote) return [];
    const locator = formatLocator(citation.locator, locale);
    const onlyReference = citation.locator.parts.every((part) => part.kind === "ref");
    const date = citation.date ?? work.date;
    return [
      {
        id,
        text: quote.text,
        lang: quote.lang,
        languageNote: quote.lang === locale ? null : (text.citation.quoteIn[quote.lang as DocLang] ?? null),
        label: locator
          ? `${itemName(work.id, locale)}${onlyReference ? " " : ", "}${locator}`
          : itemName(work.id, locale),
        year: date ? formatYear(date) : null,
        source: {
          id,
          citationId: id,
          name: itemName(work.id, locale),
          work: locator,
          date: date ? { label: formatDate(date, locale), start: date.year, end: date.yearEnd ?? null } : null,
        },
      },
    ];
  });
}
