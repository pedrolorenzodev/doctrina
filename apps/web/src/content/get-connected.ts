import "server-only";
import { getPublishedDoctrines } from "@/content/get-doctrine-page";
import { getPublishedPages } from "@/content/get-tradition-page";
import type { ConnectedDoctrine, DoctrinePage } from "@/content/model/doctrine-page";
import type { DoctrineId } from "@/content/model/ids";
import type { Locale } from "@/lib/locale";

export function getConnected(
  page: DoctrinePage,
  locale: Locale,
): { items: ConnectedDoctrine[]; withPage: Set<DoctrineId> } {
  const withPage = new Set(getPublishedDoctrines(locale));
  const published = new Set([...withPage, ...getPublishedPages(locale).map((entry) => entry.doctrine)]);
  return { items: page.connected.items.filter((item) => published.has(item.doctrine)), withPage };
}
