import "server-only";
import { getPublishedDoctrines } from "@/content/get-doctrine-page";
import { getPublishedPages } from "@/content/get-tradition-page";
import type { ConnectedDoctrine, DoctrinePage } from "@doctrina/core/model/doctrine-page";
import type { DoctrineId } from "@doctrina/core/model/ids";
import type { Locale } from "@doctrina/core/locale";

export function getConnected(
  page: DoctrinePage,
  locale: Locale,
): { items: ConnectedDoctrine[]; withPage: Set<DoctrineId> } {
  const withPage = new Set(getPublishedDoctrines(locale));
  const published = new Set([...withPage, ...getPublishedPages(locale).map((entry) => entry.doctrine)]);
  return { items: page.connected.items.filter((item) => published.has(item.doctrine)), withPage };
}
