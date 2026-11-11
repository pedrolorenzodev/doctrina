import "server-only";
import type { DoctrineId, TraditionId } from "@/content/model/ids";
import type { TraditionPage } from "@/content/model/page";
import { spanishPages } from "@/content/pages/index";
import { shownScripture } from "@/content/shown-passages";
import { registry } from "@/content/registry/index";
import { validateContent } from "@/content/validate";
import type { Locale } from "@doctrina/core/locale";

const problems = validateContent(registry, spanishPages);
if (problems.length > 0) throw new Error(`Invalid content:\n${problems.slice(0, 20).join("\n")}`);

const pagesByLocale: Record<Locale, Record<string, TraditionPage>> = { es: spanishPages, en: {} };

export function getPublishedPages(locale: Locale): {
  doctrine: DoctrineId;
  tradition: TraditionId;
  objections: { id: string; short: string }[];
  themes: { id: string; name: string; ids: string[] }[];
  hasPassages: boolean;
}[] {
  return Object.values(pagesByLocale[locale]).map((page) => ({
    doctrine: page.doctrine,
    tradition: page.tradition,
    objections: page.objections.items.flatMap((objection) =>
      objection.layer === "official" && objection.short ? [{ id: objection.id, short: objection.short }] : [],
    ),
    themes: page.objections.themes ?? [],
    hasPassages: page.passages !== undefined && shownScripture(page).length > 0,
  }));
}

export function builtTraditions(doctrine: DoctrineId): TraditionId[] {
  return getPublishedPages("es").flatMap((page) => (page.doctrine === doctrine ? [page.tradition] : []));
}

export async function getTraditionPage(
  doctrine: DoctrineId,
  tradition: TraditionId,
  locale: Locale,
): Promise<TraditionPage | null> {
  return pagesByLocale[locale][`${doctrine}/${tradition}`] ?? null;
}
