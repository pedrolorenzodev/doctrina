import type { Locale } from "@/lib/locale";
import { bibleSegments } from "./bible-segments";
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

const timelineSlugs: Record<Locale, string> = { es: "linea-de-tiempo", en: "timeline" };

const fathersSegments: Record<Locale, string> = { es: "padres", en: "fathers" };
const worksSegments: Record<Locale, string> = { es: "obras", en: "works" };

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

export function timelineHref(locale: Locale): string {
  return `/${locale}/${historySegments[locale]}/${timelineSlugs[locale]}`;
}

export function timelineRoute(locale: Locale): string {
  return `/${locale}/history/timeline`;
}

export function fatherHref(locale: Locale, id: string): string {
  return `/${locale}/${historySegments[locale]}/${fathersSegments[locale]}/${id}`;
}

export function fatherRoute(locale: Locale, id: string): string {
  return `/${locale}/history/fathers/${id}`;
}

const councilsSegments: Record<Locale, string> = { es: "concilios", en: "councils" };
const currentsSegments: Record<Locale, string> = { es: "corrientes", en: "currents" };

const fatherIndexSegments: Record<Locale, string> = { es: "padres", en: "fathers" };
const currentsIndexSegments: Record<Locale, string> = { es: "herejias", en: "heresies" };

export function fathersIndexHref(locale: Locale): string {
  return `/${locale}/${historySegments[locale]}/${fatherIndexSegments[locale]}`;
}

const divisionsSegments: Record<Locale, string> = { es: "divisiones", en: "divisions" };
const reformationSegments: Record<Locale, string> = { es: "reforma", en: "reformation" };

export function divisionsIndexHref(locale: Locale): string {
  return `/${locale}/${historySegments[locale]}/${divisionsSegments[locale]}`;
}

export function reformationIndexHref(locale: Locale): string {
  return `/${locale}/${historySegments[locale]}/${reformationSegments[locale]}`;
}

export function historyIndexRoute(
  locale: Locale,
  segment: "fathers" | "councils" | "currents" | "divisions" | "reformation",
): string {
  return `/${locale}/history/${segment}`;
}

export function divisionHref(locale: Locale, id: string): string {
  return `${divisionsIndexHref(locale)}/${id}`;
}

export function divisionRoute(locale: Locale, id: string): string {
  return `/${locale}/history/divisions/${id}`;
}

export function movementHref(locale: Locale, id: string): string {
  return `${reformationIndexHref(locale)}/${id}`;
}

export function movementRoute(locale: Locale, id: string): string {
  return `/${locale}/history/reformation/${id}`;
}

export function councilsIndexHref(locale: Locale): string {
  return `/${locale}/${historySegments[locale]}/${councilsSegments[locale]}`;
}

export function currentsIndexHref(locale: Locale): string {
  return `/${locale}/${historySegments[locale]}/${currentsIndexSegments[locale]}`;
}

export function councilHref(locale: Locale, id: string): string {
  return `/${locale}/${historySegments[locale]}/${councilsSegments[locale]}/${id}`;
}

export function councilRoute(locale: Locale, id: string): string {
  return `/${locale}/history/councils/${id}`;
}

export function currentHref(locale: Locale, id: string): string {
  return `/${locale}/${historySegments[locale]}/${currentsSegments[locale]}/${id}`;
}

export function currentRoute(locale: Locale, id: string): string {
  return `/${locale}/history/currents/${id}`;
}

export function fatherWorkHref(locale: Locale, id: string): string {
  return `/${locale}/${historySegments[locale]}/${worksSegments[locale]}/${id}`;
}

export function fatherWorkRoute(locale: Locale, id: string): string {
  return `/${locale}/history/works/${id}`;
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
    { source: timelineHref("es"), destination: timelineRoute("es") },
    { source: `/es/${bibleSegments.es}/:book/:chapter`, destination: "/es/bible/:book/:chapter" },
    {
      source: fatherHref("es", ":father"),
      destination: fatherRoute("es", ":father"),
    },
    { source: fatherWorkHref("es", ":work"), destination: fatherWorkRoute("es", ":work") },
    { source: fathersIndexHref("es"), destination: "/es/history/fathers" },
    { source: councilsIndexHref("es"), destination: "/es/history/councils" },
    { source: divisionsIndexHref("es"), destination: "/es/history/divisions" },
    { source: reformationIndexHref("es"), destination: "/es/history/reformation" },
    { source: currentsIndexHref("es"), destination: "/es/history/currents" },
    { source: divisionHref("es", ":division"), destination: divisionRoute("es", ":division") },
    { source: movementHref("es", ":movement"), destination: movementRoute("es", ":movement") },
    { source: councilHref("es", ":council"), destination: councilRoute("es", ":council") },
    { source: currentHref("es", ":current"), destination: currentRoute("es", ":current") },
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
