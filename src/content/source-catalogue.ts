import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "@/lib/locale";

type Localized = Record<Locale, string>;
export type CatalogueSource = {
  id: string;
  kind: string;
  title: Localized;
  author: Localized;
  date: string;
  year?: number;
  yearEnd?: number;
  edition: { name: string; year?: number; license: string; url?: string };
};
export const aliases: Record<string, string> = {
  ccc: "cec",
  "new-hampshire-1833": "new-hampshire",
  westminster: "wcf",
  "baptist-faith-message": "bfm-2000",
  "apology-augsburg": "apology",
  "smalcald-articles": "smalcald",
  "formula-concord-epitome": "fc-epitome",
  "formula-concord-sd": "fc-sd",
  "philaret-longer-catechism": "philaret",
  "mogila-orthodox-confession": "mogila",
  "westminster-larger-catechism": "wlc",
  "ecclesia-de-eucharistia": "ede",
  "florence-cantate-domino": "florence-cantate",
  "chalcedon-definition": "chalcedon",
};
export const readerIds: Record<string, string> = {
  "cyprian-on-the-lapsed": "cyprian-de-lapsis",
  "justin-dialogue": "justin-dialogue-trypho",
  "ambrose-on-the-mysteries": "ambrose-de-mysteriis",
  "chrysostom-hom-hebrews": "chrysostom-homilies-hebrews",
  "chrysostom-hom-john": "chrysostom-homilies-john",
  "augustine-on-christian-doctrine": "augustine-de-doctrina-christiana",
  "athanasius-on-the-incarnation": "athanasius-de-incarnatione",
};
export const canonical = (id: string) => aliases[id] ?? id;
const read = (path: string) => JSON.parse(readFileSync(join(process.cwd(), path), "utf8"));
const base = (read("data/raw/v1.json") as { sources: CatalogueSource[] }).sources;
const extra = read("data/site/sources.extra.json") as CatalogueSource[];
export const catalogue = new Map(
  [...base, ...extra].filter((source) => source.kind !== "scripture").map((source) => [canonical(source.id), source]),
);
