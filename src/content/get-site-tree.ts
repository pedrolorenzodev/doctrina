import "server-only";
import { getBibleChapterCounts } from "@/content/get-bible";
import { getPublishedDoctrines } from "@/content/get-doctrine-page";
import { worksByFather } from "@/content/father-work-links";
import { getFatherWorks } from "@/content/get-father-works";
import { getPublishedFathers } from "@/content/get-fathers";
import { getPublishedPages } from "@/content/get-tradition-page";
import { registry } from "@/content/registry/index";
import { buildSiteTree, type TreeGroup } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@/lib/locale";

export async function getSiteTree(locale: Locale): Promise<TreeGroup[]> {
  const { shell } = getUiText(locale);
  const sourceTitles = locale === "es" ? Object.values(registry.works).map((work) => work.title) : [];
  const publishedFathers = getPublishedFathers(locale).map((father) => father.id);
  return buildSiteTree(
    locale,
    getPublishedPages(locale),
    getPublishedDoctrines(locale),
    shell,
    sourceTitles,
    publishedFathers,
    await getBibleChapterCounts(locale),
    worksByFather(await getFatherWorks(), locale),
    {
      doctrines: getPublishedDoctrines("es"),
      pairs: getPublishedPages("es").map((page) => `${page.doctrine}/${page.tradition}`),
    },
  );
}
