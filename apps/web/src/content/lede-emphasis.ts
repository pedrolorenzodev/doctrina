import type { DoctrineId, TraditionId } from "@doctrina/core/model/ids";
import type { Locale } from "@doctrina/core/locale";

type EmphasisMap = Partial<Record<DoctrineId, Partial<Record<TraditionId, string>>>>;

const spanish: EmphasisMap = {
  eucharist: {
    catholic: "Eucaristía",
    orthodox: "Eucaristía",
    lutheran: "Santa Cena",
    reformed: "Cena del Señor",
    baptist: "Cena del Señor",
  },
  baptism: {
    catholic: "bautismo",
    orthodox: "bautismo",
    lutheran: "bautismo",
    reformed: "bautismo",
    baptist: "bautismo",
  },
  papacy: {
    catholic: "papa",
    orthodox: "cabeza de la Iglesia",
    lutheran: "papado",
    reformed: "papado",
    baptist: "gobierno",
  },
  "sola-scriptura": {
    catholic: "solo la Escritura",
    orthodox: "Escritura",
    lutheran: "Escritura",
    reformed: "Escritura",
    baptist: "Escritura",
  },
};

export function ledeEmphasis(locale: Locale, doctrine: DoctrineId, tradition: TraditionId): string | undefined {
  return locale === "es" ? spanish[doctrine]?.[tradition] : undefined;
}
