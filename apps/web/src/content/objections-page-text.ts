import type { DoctrineId, TraditionId } from "@/content/model/ids";
import { doctrineSubject, traditionName } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@/lib/locale";

export function objectionsPageText(
  locale: Locale,
  doctrine: DoctrineId,
  tradition: TraditionId,
): { title: string; lede: string } {
  const { objectionsPage } = getUiText(locale).doctrine;
  const adjective = traditionName(locale, tradition).toLowerCase();
  const fill = (template: string) =>
    template.replaceAll("{tradition}", adjective).replace("{doctrine}", doctrineSubject(locale, doctrine));
  return { title: fill(objectionsPage.title), lede: fill(objectionsPage.lede) };
}
