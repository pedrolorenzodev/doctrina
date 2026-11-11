import "server-only";
import { getPublishedDoctrines } from "@/content/get-doctrine-page";
import type { DoctrineId } from "@/content/model/ids";
import { doctrineHref } from "@/content/routes";
import { doctrineName } from "@/content/site-tree";
import type { Locale } from "@/lib/locale";

export function doctrineCrumb(locale: Locale, doctrine: DoctrineId): { label: string; href?: string } {
  const label = doctrineName(locale, doctrine);
  return getPublishedDoctrines(locale).includes(doctrine) ? { label, href: doctrineHref(locale, doctrine) } : { label };
}
