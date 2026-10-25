import type { Locale } from "@/lib/locale";
import { doctrineIds, traditionIds, type DoctrineId, type TraditionId } from "./model/ids";

const doctrineSlugs: Record<Locale, Record<DoctrineId, string>> = {
  es: {
    eucharist: "eucaristia",
    justification: "justificacion",
    baptism: "bautismo",
    papacy: "papado",
    "sola-scriptura": "sola-scriptura",
  },
  en: {
    eucharist: "eucharist",
    justification: "justification",
    baptism: "baptism",
    papacy: "papacy",
    "sola-scriptura": "sola-scriptura",
  },
};

const traditionSlugs: Record<Locale, Record<TraditionId, string>> = {
  es: {
    catholic: "catolica",
    orthodox: "ortodoxa",
    lutheran: "luterana",
    reformed: "reformada",
    baptist: "bautista",
    pentecostal: "pentecostal",
  },
  en: {
    catholic: "catholic",
    orthodox: "orthodox",
    lutheran: "lutheran",
    reformed: "reformed",
    baptist: "baptist",
    pentecostal: "pentecostal",
  },
};

const doctrinesSegment: Record<Locale, string> = { es: "doctrinas", en: "doctrines" };

const objectionsSlugs: Record<Locale, string> = { es: "objeciones", en: "objections" };

export function traditionHref(locale: Locale, doctrine: DoctrineId, tradition: TraditionId): string {
  return `/${locale}/${doctrinesSegment[locale]}/${doctrineSlugs[locale][doctrine]}/${traditionSlugs[locale][tradition]}`;
}

export function traditionRoute(locale: Locale, doctrine: DoctrineId, tradition: TraditionId): string {
  return `/${locale}/doctrines/${doctrine}/${tradition}`;
}

export function objectionsHref(locale: Locale, doctrine: DoctrineId, tradition: TraditionId): string {
  return `${traditionHref(locale, doctrine, tradition)}/${objectionsSlugs[locale]}`;
}

export function objectionsRoute(locale: Locale, doctrine: DoctrineId, tradition: TraditionId): string {
  return `${traditionRoute(locale, doctrine, tradition)}/objections`;
}

export function spanishRewrites() {
  return doctrineIds.flatMap((doctrine) =>
    traditionIds.flatMap((tradition) => [
      {
        source: traditionHref("es", doctrine, tradition),
        destination: traditionRoute("es", doctrine, tradition),
      },
      {
        source: objectionsHref("es", doctrine, tradition),
        destination: objectionsRoute("es", doctrine, tradition),
      },
    ]),
  );
}
