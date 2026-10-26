import type { BibleBook } from "@/content/bible-books";
import type { Locale } from "@/lib/locale";

export function defaultTranslationId(locale: Locale, book: BibleBook): string {
  if (book.section === "deuterocanon") return "dra";
  return locale === "es" ? "rv1909" : "bsb";
}
