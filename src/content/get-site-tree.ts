import "server-only";
import { getPublishedPages } from "@/content/get-tradition-page";
import { registry } from "@/content/registry/index";
import { buildSiteTree, type TreeGroup } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@/lib/locale";

export function getSiteTree(locale: Locale): TreeGroup[] {
  const { shell } = getUiText(locale);
  const sourceTitles = locale === "es" ? Object.values(registry.works).map((work) => work.title) : [];
  return buildSiteTree(locale, getPublishedPages(locale), shell, sourceTitles);
}
