import { getPublishedDoctrines } from "@/content/get-doctrine-page";
import { glossaryLocales } from "@/content/get-glossary";
import { getPublishedPages } from "@/content/get-tradition-page";
import type { LanguageAvailability, PageAvailability } from "@/content/language-switch";
import type { Locale } from "@/lib/locale";

function availabilityIn(locale: Locale): PageAvailability {
  return {
    glossary: glossaryLocales.includes(locale),
    doctrines: getPublishedDoctrines(locale),
    traditions: getPublishedPages(locale).map((page) => ({
      doctrine: page.doctrine,
      tradition: page.tradition,
      objections: page.objections.map((objection) => objection.id),
      passages: page.hasPassages,
    })),
  };
}

export function getLanguageAvailability(): LanguageAvailability {
  return { es: availabilityIn("es"), en: availabilityIn("en") };
}
