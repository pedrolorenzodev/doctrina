import { formatDate } from "@/content/format-date";
import type { Witness } from "@/content/model/doctrine-page";
import type { UiText } from "@/content/ui-text/types";
import type { CitationView } from "@/lib/citation-view";
import type { Locale } from "@/lib/locale";

const startsLikeNumber = /^[0-9IVXL]/;

export function witnessViewId(id: string): string {
  return `w:${id}`;
}

export function witnessReference(witness: Witness): string {
  return `${witness.work}${startsLikeNumber.test(witness.locator) ? " " : ", "}${witness.locator}`;
}

export function buildWitnessView(witness: Witness, locale: Locale, text: UiText): CitationView {
  const dateLabel = formatDate(witness.date, locale);
  return {
    id: witnessViewId(witness.id),
    kind: text.citation.kind,
    title: null,
    quote: { text: witness.quote, lang: locale },
    quoteLanguage: null,
    definition: null,
    who: witness.author,
    locator: witnessReference(witness),
    note: null,
    date: { label: dateLabel, start: witness.date.year, end: witness.date.yearEnd ?? null },
    externalLink: null,
    copyText: `«${witness.quote}» ${witness.author}, ${witnessReference(witness)}, ${dateLabel}`,
    fullSource: true,
  };
}
