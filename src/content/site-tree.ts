import type { DoctrineId, TraditionId } from "@/content/model/ids";
import { doctrineIds, traditionIds } from "@/content/model/ids";
import { historyIndex } from "@/content/history-index";
import {
  doctrineHref,
  doctrineRoute,
  fatherHref,
  fatherRoute,
  objectionHref,
  objectionRoute,
  objectionsHref,
  objectionsRoute,
  earlyChristiansHref,
  earlyChristiansRoute,
  traditionHref,
  traditionRoute,
} from "@/content/routes";
import { bookNames } from "@/content/verse-names";
import type { Locale } from "@/lib/locale";

export type TreeNode = {
  id: string;
  label: string;
  href: string | null;
  route: string | null;
  children: TreeNode[];
  count?: number | undefined;
};

export type TreeGroup = {
  id: string;
  label: string;
  nodes: TreeNode[];
};

const doctrineNames: Record<Locale, Record<DoctrineId, string>> = {
  es: {
    eucharist: "La Eucaristía",
    justification: "La justificación",
    baptism: "El bautismo",
    papacy: "El papado",
    "sola-scriptura": "Sola Scriptura",
  },
  en: {
    eucharist: "The Eucharist",
    justification: "Justification",
    baptism: "Baptism",
    papacy: "The papacy",
    "sola-scriptura": "Sola Scriptura",
  },
};

const doctrineTitles: Record<Locale, Record<DoctrineId, string>> = {
  es: {
    eucharist: "Eucaristía",
    justification: "Justificación",
    baptism: "Bautismo",
    papacy: "Papado",
    "sola-scriptura": "Sola Scriptura",
  },
  en: {
    eucharist: "Eucharist",
    justification: "Justification",
    baptism: "Baptism",
    papacy: "Papacy",
    "sola-scriptura": "Sola Scriptura",
  },
};

const traditionNames: Record<Locale, Record<TraditionId, string>> = {
  es: {
    catholic: "Católica",
    orthodox: "Ortodoxa",
    lutheran: "Luterana",
    reformed: "Reformada",
    baptist: "Bautista",
    pentecostal: "Pentecostal",
  },
  en: {
    catholic: "Catholic",
    orthodox: "Orthodox",
    lutheran: "Lutheran",
    reformed: "Reformed",
    baptist: "Baptist",
    pentecostal: "Pentecostal",
  },
};

export type PublishedPage = {
  doctrine: DoctrineId;
  tradition: TraditionId;
  objections: { id: string; short: string }[];
};

export type TreeText = {
  groupDoctrines: string;
  tree: Record<
    | "bible"
    | "history"
    | "reference"
    | "passages"
    | "objections"
    | "earlyChristians"
    | "timeline"
    | "fathers"
    | "councils"
    | "heresies"
    | "divisions"
    | "reformation"
    | "glossary"
    | "sources"
    | "ot"
    | "deutero"
    | "nt",
    string
  >;
};

const leaf = (id: string, label: string, count?: number): TreeNode => ({
  id,
  label,
  href: null,
  route: null,
  children: [],
  count,
});

const branch = (id: string, label: string, children: TreeNode[], count?: number): TreeNode => ({
  id,
  label,
  href: null,
  route: null,
  children,
  count,
});

const bookKeys = Object.keys(bookNames);
const firstNewTestamentBook = bookKeys.indexOf("Matt");

export function buildSiteTree(
  locale: Locale,
  published: PublishedPage[],
  publishedDoctrines: DoctrineId[],
  text: TreeText,
  sourceTitles: string[],
  publishedFathers: string[],
): TreeGroup[] {
  const doctrineNodes = doctrineIds.map((doctrine) => ({
    ...branch(doctrine, doctrineNames[locale][doctrine], [
      {
        ...leaf(`${doctrine}/early-christians`, text.tree.earlyChristians),
        href: publishedDoctrines.includes(doctrine) ? earlyChristiansHref(locale, doctrine) : null,
        route: publishedDoctrines.includes(doctrine) ? earlyChristiansRoute(locale, doctrine) : null,
      },
      ...traditionIds.map((tradition) => {
        const page = published.find(
          (candidate) => candidate.doctrine === doctrine && candidate.tradition === tradition,
        );
        const id = `${doctrine}/${tradition}`;
        const children = [
          leaf(`${id}/passages`, text.tree.passages),
          {
            ...branch(
              `${id}/objections`,
              text.tree.objections,
              (page?.objections ?? []).map((objection) => ({
                ...leaf(`${id}/objections/${objection.id}`, objection.short),
                href: objectionHref(locale, doctrine, tradition, objection.id),
                route: objectionRoute(locale, doctrine, tradition, objection.id),
              })),
            ),
            href: page ? objectionsHref(locale, doctrine, tradition) : null,
            route: page ? objectionsRoute(locale, doctrine, tradition) : null,
          },
        ];
        return {
          id,
          label: traditionNames[locale][tradition],
          href: page ? traditionHref(locale, doctrine, tradition) : null,
          route: page ? traditionRoute(locale, doctrine, tradition) : null,
          children,
        };
      }),
    ]),
    href: publishedDoctrines.includes(doctrine) ? doctrineHref(locale, doctrine) : null,
    route: publishedDoctrines.includes(doctrine) ? doctrineRoute(locale, doctrine) : null,
  }));
  const book = (key: string) => leaf(`book/${key}`, bookNames[key]?.[locale] ?? key);
  const { counts, fathers } = historyIndex;
  return [
    { id: "doctrines", label: text.groupDoctrines, nodes: doctrineNodes },
    {
      id: "bible",
      label: text.tree.bible,
      nodes: [
        branch("bible/ot", text.tree.ot, bookKeys.slice(0, firstNewTestamentBook).map(book)),
        leaf("bible/deutero", text.tree.deutero),
        branch("bible/nt", text.tree.nt, bookKeys.slice(firstNewTestamentBook).map(book)),
      ],
    },
    {
      id: "history",
      label: text.tree.history,
      nodes: [
        leaf("history/timeline", text.tree.timeline),
        branch(
          "history/fathers",
          text.tree.fathers,
          fathers.map((father) => ({
            ...leaf(`history/fathers/${father.id}`, father[locale]),
            ...(publishedFathers.includes(father.id)
              ? { href: fatherHref(locale, father.id), route: fatherRoute(locale, father.id) }
              : {}),
          })),
          counts.fathers,
        ),
        leaf("history/councils", text.tree.councils, counts.councils),
        leaf("history/heresies", text.tree.heresies, counts.heresies),
        leaf("history/divisions", text.tree.divisions, counts.divisions),
        leaf("history/reformation", text.tree.reformation, counts.reformation),
      ],
    },
    {
      id: "reference",
      label: text.tree.reference,
      nodes: [
        leaf("reference/glossary", text.tree.glossary),
        branch(
          "reference/sources",
          text.tree.sources,
          sourceTitles.map((title, index) => leaf(`reference/sources/${index}`, title)),
        ),
      ],
    },
  ];
}

const doctrineSubjects: Record<Locale, Record<DoctrineId, string>> = {
  es: {
    eucharist: "la Eucaristía",
    justification: "la justificación",
    baptism: "el bautismo",
    papacy: "el papado",
    "sola-scriptura": "Sola Scriptura",
  },
  en: {
    eucharist: "the Eucharist",
    justification: "justification",
    baptism: "baptism",
    papacy: "the papacy",
    "sola-scriptura": "Sola Scriptura",
  },
};

export function doctrineSubject(locale: Locale, doctrine: DoctrineId): string {
  return doctrineSubjects[locale][doctrine];
}

export function doctrineName(locale: Locale, doctrine: DoctrineId): string {
  return doctrineNames[locale][doctrine];
}

export function traditionName(locale: Locale, tradition: TraditionId): string {
  return traditionNames[locale][tradition];
}

export function doctrineTitle(locale: Locale, doctrine: DoctrineId): string {
  return doctrineTitles[locale][doctrine];
}
