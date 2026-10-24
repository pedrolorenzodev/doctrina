import type { DoctrineId, TraditionId } from "@/content/model/ids";
import { doctrineIds, traditionIds } from "@/content/model/ids";
import { traditionHref, traditionRoute } from "@/content/routes";
import type { Locale } from "@/lib/locale";

export type TreeNode = {
  id: string;
  label: string;
  href: string | null;
  route: string | null;
  children: TreeNode[];
};

export type TreeGroup = {
  id: string;
  label: string;
  nodes: TreeNode[];
};

type PublishedPage = { doctrine: DoctrineId; tradition: TraditionId };

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

export function buildSiteTree(locale: Locale, published: PublishedPage[], doctrinesLabel: string): TreeGroup[] {
  const doctrineNodes: TreeNode[] = [];
  for (const doctrine of doctrineIds) {
    const children: TreeNode[] = [];
    for (const tradition of traditionIds) {
      if (!published.some((page) => page.doctrine === doctrine && page.tradition === tradition)) continue;
      children.push({
        id: `${doctrine}/${tradition}`,
        label: traditionNames[locale][tradition],
        href: traditionHref(locale, doctrine, tradition),
        route: traditionRoute(locale, doctrine, tradition),
        children: [],
      });
    }
    if (children.length > 0) {
      doctrineNodes.push({ id: doctrine, label: doctrineNames[locale][doctrine], href: null, route: null, children });
    }
  }
  return doctrineNodes.length > 0 ? [{ id: "doctrines", label: doctrinesLabel, nodes: doctrineNodes }] : [];
}
