import "server-only";
import type { DoctrineId } from "@/content/model/ids";
import type { DoctrinePage } from "@/content/model/doctrine-page";
import { spanishDoctrinePages, spanishPages } from "@/content/pages/index";
import { registry } from "@/content/registry/index";
import { validateDoctrinePages } from "@/content/validate-doctrine";
import type { Locale } from "@/lib/locale";

const problems = validateDoctrinePages(registry, spanishDoctrinePages, spanishPages);
if (problems.length > 0) throw new Error(`Invalid doctrine content:\n${problems.slice(0, 20).join("\n")}`);

const doctrinePagesByLocale: Record<Locale, Record<string, DoctrinePage>> = { es: spanishDoctrinePages, en: {} };

export async function getDoctrinePage(doctrine: DoctrineId, locale: Locale): Promise<DoctrinePage | null> {
  return doctrinePagesByLocale[locale][doctrine] ?? null;
}

export function getPublishedDoctrines(locale: Locale): DoctrineId[] {
  return Object.values(doctrinePagesByLocale[locale]).map((page) => page.doctrine);
}
