import { fatherWorkHref } from "@/content/routes";
import type { QuoteDate } from "@/content/quote-dating";
import type { CitationView } from "@/lib/citation-view";
import type { Locale } from "@doctrina/core/locale";
import type { Quote } from "@/features/reader-ai/quotes";
import type { AskText } from "@/features/reader-ai/text";

export function quoteViews(
  locale: Locale,
  text: AskText["cite"],
  quotes: Record<string, Quote>,
  dates: Record<string, QuoteDate> = {},
): Record<string, CitationView> {
  return Object.fromEntries(
    Object.entries(quotes)
      .filter(([, quote]) => !quote.bible)
      .map(([id, quote]) => {
        const view: CitationView = {
          id,
          kind: text.window,
          title: null,
          quote: { text: quote.text, lang: "es" },
          quoteLanguage: null,
          definition: null,
          who: quote.who,
          locator: quote.work,
          note: { label: text.edition, text: quote.edition },
          date: dates[id] ?? null,
          externalLink: null,
          copyText: `«${quote.text}» ${quote.who}, ${quote.work}`,
          fullSource: Boolean(quote.father),
          ...(quote.father
            ? { fullSourceHref: `${fatherWorkHref(locale, quote.father.workId)}#d-${quote.father.anchor}` }
            : {}),
        };
        return [id, view];
      }),
  );
}
