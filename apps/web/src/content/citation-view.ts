import type { CitationView } from "@/lib/citation-view";
import { formatDate } from "@/content/format-date";
import { formatLocator } from "@/content/format-locator";
import type { DocLang } from "@doctrina/core/model/ids";
import type { Excerpt, Passage, Registry } from "@doctrina/core/model/registry";
import type { UiText } from "@/content/ui-text/types";
import { itemName } from "@/content/item-names";
import type { Locale } from "@doctrina/core/locale";

const fallbackOrder: DocLang[] = ["la", "en", "es", "de", "el"];

function pickPassage(excerpts: Excerpt[], locale: Locale): { passage: Passage; lang: DocLang } | null {
  const order: DocLang[] = [locale, ...fallbackOrder.filter((lang) => lang !== locale)];
  for (const excerpt of excerpts) {
    for (const lang of order) {
      const passage = excerpt[lang];
      if (passage) return { passage, lang };
    }
  }
  return null;
}

export function pickQuote(excerpts: Excerpt[], locale: Locale): CitationView["quote"] {
  const picked = pickPassage(excerpts, locale);
  return picked ? { text: picked.passage.text, lang: picked.lang } : null;
}

function aiLabel(excerpts: Excerpt[], locale: Locale): string | null {
  const passage = pickPassage(excerpts, locale)?.passage;
  return passage?.translation === "ai-assisted" && passage.label ? passage.label : null;
}

export function buildCitationView(id: string, registry: Registry, locale: Locale, text: UiText): CitationView {
  const citation = registry.citations[id];
  if (!citation) throw new Error(`Unknown citation ${id}`);
  const work = registry.works[citation.work];
  if (!work) throw new Error(`Unknown work ${citation.work}`);
  const quote = pickQuote(citation.excerpts, locale);
  const quoteLabel = aiLabel(citation.excerpts, locale);
  const locator = formatLocator(citation.locator, locale);
  const dateInfo = citation.date ?? work.date;
  const dateLabel = dateInfo
    ? `${formatDate(dateInfo, locale)}${dateInfo.unconfirmed ? ` (${text.citation.dateUnconfirmed})` : ""}`
    : null;
  const reference = [itemName(work.id, locale) + (locator ? `, ${locator}` : ""), dateLabel].filter(Boolean).join(", ");
  return {
    id,
    kind: text.citation.kind,
    title: null,
    quote,
    quoteLanguage: quote && quote.lang !== locale ? (text.citation.quoteIn[quote.lang as DocLang] ?? null) : null,
    quoteLabel,
    definition: null,
    who: itemName(work.id, locale),
    locator,
    note: null,
    date: dateInfo && dateLabel ? { label: dateLabel, start: dateInfo.year, end: dateInfo.yearEnd ?? null } : null,
    externalLink: citation.link ? { href: citation.link.href, label: citation.link.label } : null,
    copyText: quote ? `«${quote.text}» ${reference}${quoteLabel ? ` (${quoteLabel})` : ""}` : reference,
    fullSource: true,
  };
}
