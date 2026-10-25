import "server-only";
import { collectObjectionViews } from "@/content/page-views";
import type { Objection } from "@/content/model/page";
import { registry } from "@/content/registry/index";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { CitationView } from "@/lib/citation-view";
import type { Locale } from "@/lib/locale";

export function getObjectionViews(
  objection: Objection,
  others: Objection[],
  quoteIds: string[],
  locale: Locale,
): Record<string, CitationView> {
  return collectObjectionViews(objection, others, quoteIds, registry, locale, getUiText(locale));
}
