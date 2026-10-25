import "server-only";
import type { DoctrinePage } from "@/content/model/doctrine-page";
import { buildWitnessView, witnessViewId } from "@/content/witness-view";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { CitationView } from "@/lib/citation-view";
import type { Locale } from "@/lib/locale";

export function getDoctrineViews(page: DoctrinePage, locale: Locale): Record<string, CitationView> {
  const text = getUiText(locale);
  const witness = page.witnesses.items.find((item) => item.id === page.legend.witnessId);
  return witness ? { [witnessViewId(witness.id)]: buildWitnessView(witness, locale, text) } : {};
}
