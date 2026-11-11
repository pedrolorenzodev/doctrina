import "server-only";
import { collectPageViews } from "@/content/page-views";
import type { TraditionPage } from "@/content/model/page";
import { registry } from "@/content/registry/index";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { CitationView } from "@/lib/citation-view";
import type { Locale } from "@/lib/locale";

export function getPageViews(page: TraditionPage, locale: Locale): Record<string, CitationView> {
  return collectPageViews(page, registry, locale, getUiText(locale));
}
