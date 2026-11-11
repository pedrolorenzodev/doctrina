import type { BibleBook } from "@/content/bible-books";
import { translationDefaults } from "@/content/bible/translation-defaults";
import type { Locale } from "@/lib/locale";

export function defaultTranslationId(locale: Locale, book: BibleBook): string {
  if (book.section === "deuterocanon") return translationDefaults.deuterocanon;
  return locale === "es" ? translationDefaults.es : translationDefaults.en;
}
