import type { BibleBook } from "@doctrina/core/bible-books";
import { translationDefaults } from "@doctrina/core/bible/translation-defaults";
import type { Locale } from "@doctrina/core/locale";

export function defaultTranslationId(locale: Locale, book: BibleBook): string {
  if (book.section === "deuterocanon") return translationDefaults.deuterocanon;
  return locale === "es" ? translationDefaults.es : translationDefaults.en;
}
