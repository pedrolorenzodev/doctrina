import "server-only";
import { getDoctrinePage, getPublishedDoctrines } from "@/content/get-doctrine-page";
import { earlyChristiansHref } from "@/content/routes";
import { doctrineName } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { witnessReference } from "@/content/witness-view";
import type { Locale } from "@/lib/locale";

export type FatherAppearance = { id: string; title: string; note: string; href: string };

export async function getFatherAppearances(fatherId: string, locale: Locale): Promise<FatherAppearance[]> {
  const labels = getUiText(locale).father;
  const appearances: FatherAppearance[] = [];
  for (const doctrine of getPublishedDoctrines(locale)) {
    const page = await getDoctrinePage(doctrine, locale);
    const witnesses = page?.witnesses.items.filter((witness) => witness.entity === fatherId) ?? [];
    const first = witnesses[0];
    if (!first) continue;
    appearances.push({
      id: doctrine,
      title: labels.witnessTitle.replace("{doctrine}", doctrineName(locale, doctrine)),
      note: labels.witnessNote.replace("{reference}", witnesses.map(witnessReference).join("; ")),
      href: `${earlyChristiansHref(locale, doctrine)}#early-${first.id}`,
    });
  }
  return appearances;
}
