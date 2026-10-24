import "server-only";
import type { DoctrineId, TraditionId } from "@/content/model/ids";
import type { TraditionPage } from "@/content/model/page";
import { spanishPages } from "@/content/pages/index";
import { registry } from "@/content/registry/index";
import { validateContent } from "@/content/validate";
import type { Locale } from "@/lib/locale";

const problems = validateContent(registry, spanishPages);
if (problems.length > 0) throw new Error(`Invalid content:\n${problems.slice(0, 20).join("\n")}`);

const pagesByLocale: Record<Locale, Record<string, TraditionPage>> = { es: spanishPages, en: {} };

export async function getTraditionPage(
  doctrine: DoctrineId,
  tradition: TraditionId,
  locale: Locale,
): Promise<TraditionPage | null> {
  return pagesByLocale[locale][`${doctrine}/${tradition}`] ?? null;
}
