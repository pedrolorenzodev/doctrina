import { citationDate, fatherWorkDate, type QuoteDate } from "@/content/quote-dating";
import type { Locale } from "@/lib/locale";
import type { Quote } from "@/features/reader-ai/quotes";

const registryCitationOfQuote: Record<string, string> = {
  ccc1336: "CEC1336",
  trent8: "T13can1",
  phil340: "OPhilaret339_340",
  apol10: "LApX_54",
  bfm7: "BFM7",
};

export function scriptQuoteDates(locale: Locale, quotes: Record<string, Quote>): Record<string, QuoteDate> {
  return Object.fromEntries(
    Object.entries(quotes).flatMap(([id, quote]) => {
      const citation = registryCitationOfQuote[id];
      const date = quote.father
        ? fatherWorkDate(quote.father.workId)
        : citation
          ? citationDate(citation, locale)
          : null;
      return date ? [[id, date]] : [];
    }),
  );
}
