import "server-only";
import type { CitationView } from "@/lib/citation-view";
import { buildCitationView } from "@/content/citation-view";
import { registry } from "@/content/registry/index";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@/lib/locale";

export function getCitationViews(ids: string[], locale: Locale): Record<string, CitationView> {
  const text = getUiText(locale);
  return Object.fromEntries(ids.map((id) => [id, buildCitationView(id, registry, locale, text)]));
}
