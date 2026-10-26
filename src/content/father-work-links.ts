import type { Locale } from "@/lib/locale";

type WorkLink = { fatherId: string; names: Record<Locale, string> };

const workLinks: Record<string, WorkLink> = {
  "1-clement": { fatherId: "clement-of-rome", names: { es: "1 Clemente", en: "1 Clement" } },
  barnabas: { fatherId: "epistle-of-barnabas", names: { es: "Carta de Bernabé", en: "Epistle of Barnabas" } },
  didache: { fatherId: "didache", names: { es: "Didajé", en: "Didache" } },
  "epistle-diognetus": {
    fatherId: "epistle-to-diognetus",
    names: { es: "Carta a Diogneto", en: "Epistle to Diognetus" },
  },
  "ignatius-ephesians": { fatherId: "ignatius-of-antioch", names: { es: "A los Efesios", en: "To the Ephesians" } },
  "ignatius-magnesians": { fatherId: "ignatius-of-antioch", names: { es: "A los Magnesios", en: "To the Magnesians" } },
  "ignatius-trallians": { fatherId: "ignatius-of-antioch", names: { es: "A los Tralianos", en: "To the Trallians" } },
  "ignatius-romans": { fatherId: "ignatius-of-antioch", names: { es: "A los Romanos", en: "To the Romans" } },
  "ignatius-philadelphians": {
    fatherId: "ignatius-of-antioch",
    names: { es: "A los Filadelfios", en: "To the Philadelphians" },
  },
  "ignatius-smyrnaeans": {
    fatherId: "ignatius-of-antioch",
    names: { es: "A los Esmirniotas", en: "To the Smyrnaeans" },
  },
  "ignatius-polycarp": { fatherId: "ignatius-of-antioch", names: { es: "A Policarpo", en: "To Polycarp" } },
  "papias-fragments": {
    fatherId: "papias-of-hierapolis",
    names: { es: "Fragmentos", en: "Fragments" },
  },
  "polycarp-philippians": {
    fatherId: "polycarp-of-smyrna",
    names: { es: "A los Filipenses", en: "To the Philippians" },
  },
  "shepherd-hermas": { fatherId: "shepherd-of-hermas", names: { es: "El Pastor", en: "The Shepherd" } },
};

export type FatherWorkRow = { id: string; label: string };

export function worksByFather(workIds: string[], locale: Locale): Record<string, FatherWorkRow[]> {
  const grouped: Record<string, FatherWorkRow[]> = {};
  for (const id of workIds) {
    const link = workLinks[id];
    if (!link) continue;
    (grouped[link.fatherId] ??= []).push({ id, label: link.names[locale] });
  }
  return grouped;
}
