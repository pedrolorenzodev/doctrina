import "server-only";
import { formatLocator } from "@/content/format-locator";
import { formatYear } from "@/content/format-date";
import { pickQuote } from "@/content/citation-view";
import type { DocLang } from "@/content/model/ids";
import type { Objection } from "@/content/model/page";
import type { Registry } from "@/content/model/registry";
import { registry } from "@/content/registry/index";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@/lib/locale";

const data: Registry = registry;

export type ObjectorQuote = {
  id: string;
  text: string;
  lang: string;
  languageNote: string | null;
  label: string;
  year: string | null;
};

export function getObjectorQuotes(objection: Objection, locale: Locale): ObjectorQuote[] {
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
        label: locator ? `${work.title}${onlyReference ? " " : ", "}${locator}` : work.title,
        year: date ? formatYear(date) : null,
      },
    ];
  });
}
