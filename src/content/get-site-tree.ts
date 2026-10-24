import "server-only";
import { getPublishedPages } from "@/content/get-tradition-page";
import { buildSiteTree, type TreeGroup } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@/lib/locale";

export function getSiteTree(locale: Locale): TreeGroup[] {
  return buildSiteTree(locale, getPublishedPages(locale), getUiText(locale).shell.groupDoctrines);
}
