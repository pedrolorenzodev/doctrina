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

const earlyChristiansSlugs: Record<Locale, string> = { es: "primeros-cristianos", en: "early-christians" };

const historySegments: Record<Locale, string> = { es: "historia", en: "history" };

const fathersSegments: Record<Locale, string> = { es: "padres", en: "fathers" };

const objectionsSlugs: Record<Locale, string> = { es: "objeciones", en: "objections" };

export function doctrineHref(locale: Locale, doctrine: DoctrineId): string {
  return `/${locale}/${doctrinesSegment[locale]}/${doctrineSlugs[locale][doctrine]}`;
}

export function doctrineRoute(locale: Locale, doctrine: DoctrineId): string {
  return `/${locale}/doctrines/${doctrine}`;
}

export function earlyChristiansHref(locale: Locale, doctrine: DoctrineId): string {
  return `${doctrineHref(locale, doctrine)}/${earlyChristiansSlugs[locale]}`;
}

export function earlyChristiansRoute(locale: Locale, doctrine: DoctrineId): string {
  return `${doctrineRoute(locale, doctrine)}/early-christians`;
}

export function fatherHref(locale: Locale, id: string): string {
  return `/${locale}/${historySegments[locale]}/${fathersSegments[locale]}/${id}`;
}

export function fatherRoute(locale: Locale, id: string): string {
  return `/${locale}/history/fathers/${id}`;
}

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

export function objectionHref(locale: Locale, doctrine: DoctrineId, tradition: TraditionId, id: string): string {
  return `${objectionsHref(locale, doctrine, tradition)}/${objectionSlug(id)}`;
}

export function objectionRoute(locale: Locale, doctrine: DoctrineId, tradition: TraditionId, id: string): string {
  return `${objectionsRoute(locale, doctrine, tradition)}/${objectionSlug(id)}`;
}

export function objectionSlug(id: string): string {
  return id.toLowerCase();
}

export function spanishRewrites() {
  return [
    {
      source: fatherHref("es", ":father"),
      destination: fatherRoute("es", ":father"),
    },
    ...doctrineRewrites(),
  ];
}

function doctrineRewrites() {
  return doctrineIds.flatMap((doctrine) => [
    { source: doctrineHref("es", doctrine), destination: doctrineRoute("es", doctrine) },
    { source: earlyChristiansHref("es", doctrine), destination: earlyChristiansRoute("es", doctrine) },
    ...traditionIds.flatMap((tradition) => [
      {
        source: traditionHref("es", doctrine, tradition),
        destination: traditionRoute("es", doctrine, tradition),
      },
      {
        source: objectionsHref("es", doctrine, tradition),
        destination: objectionsRoute("es", doctrine, tradition),
      },
      {
        source: `${objectionsHref("es", doctrine, tradition)}/:objection`,
        destination: `${objectionsRoute("es", doctrine, tradition)}/:objection`,
      },
    ]),
  ]);
}
