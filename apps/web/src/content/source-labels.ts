import type { Locale } from "@doctrina/core/locale";

const dates: Record<string, Record<Locale, string>> = {
  "c. 396–397 (Books I–III.35)": { es: "c. 396–397 (libros I–III.35)", en: "c. 396–397 (Books I–III.35)" },
  "c. 4th-5th c.; textus receptus later": {
    es: "c. siglos IV–V; texto recibido posterior",
    en: "c. 4th–5th centuries; received text later",
  },
  "c. 4th c.": { es: "c. siglo IV", en: "c. 4th century" },
  "1830 (approved by the Russian Holy Synod)": {
    es: "1830 (aprobado por el Santo Sínodo ruso)",
    en: "1830 (approved by the Russian Holy Synod)",
  },
  "1640; approved 1642-1643": { es: "1640; aprobado en 1642–1643", en: "1640; approved 1642–1643" },
};

export function sourceDate(label: string, locale: Locale): string {
  return (dates[label]?.[locale] ?? label).replace(/(\d)-(\d)/g, "$1–$2");
}
