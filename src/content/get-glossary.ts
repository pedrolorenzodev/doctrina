import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { HistoryIndexGroup } from "@/content/get-history-indexes";
import type { DoctrineId } from "@/content/model/ids";
import { glossaryTermHref } from "@/content/routes";
import type { Locale } from "@/lib/locale";

export type GlossaryTradition = "catholic" | "orthodox" | "lutheran" | "reformed" | "baptist" | "pentecostal";

export type GlossaryEntry = {
  lang: "es" | "en" | "original" | "other";
  quote: string | null;
  source: string | null;
  edition: string | null;
  licence: string | null;
  verified: string[];
  text: string;
  aiTranslated: boolean;
  notFound: boolean;
};

export type GlossaryTerm = {
  id: string;
  group: string;
  name: string;
  usedIn: string;
  doctrines: DoctrineId[];
  divergent: boolean;
  traditions: { tradition: GlossaryTradition; context: string | null; entries: GlossaryEntry[] }[];
  notes: string[];
};

const glossary = JSON.parse(readFileSync(join(process.cwd(), "data/site/glossary.json"), "utf8")) as {
  status: string;
  terms: GlossaryTerm[];
};

const fold = (text: string) => text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export const glossarySlug = (term: GlossaryTerm) =>
  fold(term.name)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const glossaryLocales: Locale[] = ["es"];

export function getGlossaryTerms(): GlossaryTerm[] {
  return [...glossary.terms].sort((a, b) => fold(a.name).localeCompare(fold(b.name), "es"));
}

export function getGlossaryTerm(slug: string): GlossaryTerm | null {
  return glossary.terms.find((term) => glossarySlug(term) === slug) ?? null;
}

export function glossaryIndexGroups(locale: Locale, doctrineName: (id: DoctrineId) => string): HistoryIndexGroup[] {
  const groups: HistoryIndexGroup[] = [];
  for (const term of getGlossaryTerms()) {
    const title = fold(term.name).charAt(0).toUpperCase();
    const row = {
      id: term.id,
      name: term.name,
      href: glossaryTermHref(locale, glossarySlug(term)),
      date: "",
      detail: term.doctrines.map(doctrineName).join(" · "),
    };
    const last = groups[groups.length - 1];
    if (last?.title === title) last.rows.push(row);
    else groups.push({ title, rows: [row] });
  }
  return groups;
}
