import "server-only";
import { collectTeachViews } from "@/content/teach-views";
import type { TraditionPage } from "@/content/model/page";
import { registry } from "@/content/registry/index";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { CitationView } from "@/lib/citation-view";
import type { Locale } from "@/lib/locale";

export function getTeachViews(page: TraditionPage, locale: Locale): Record<string, CitationView> {
  return collectTeachViews(page, registry, locale, getUiText(locale));
}
