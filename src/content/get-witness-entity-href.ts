import "server-only";
import { getFather } from "@/content/get-fathers";
import { getCouncilPage } from "@/content/get-history-pages";
import type { Witness } from "@/content/model/doctrine-page";
import { councilHref, fatherHref } from "@/content/routes";
import type { Locale } from "@/lib/locale";

const witnessCouncils: Record<string, string> = {
  "bw-nicaea-19": "nicaea-1",
  "bw-carthage": "carthage-418",
  "pw-nicaea-6": "nicaea-1",
  "pw-chalcedon-28": "chalcedon-451",
};

export function getWitnessEntityHref(witness: Witness, locale: Locale): string | null {
  if (witness.entity && getFather(witness.entity, locale)) return fatherHref(locale, witness.entity);
  const council = witnessCouncils[witness.id];
  return council && getCouncilPage(council) ? councilHref(locale, council) : null;
}
