import type { Metadata } from "next";
import { Document } from "@/components/document";
import { getSearchIndex } from "@/content/get-search-index";
import { getSiteTree } from "@/content/get-site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { DrawerProvider } from "@/features/shell/drawer";
import { HashArrival } from "@/features/shell/hash-arrival";
import { SearchDialog } from "@/features/shell/search-dialog";
import { SearchProvider } from "@/components/search-provider";
import { Sidebar } from "@/features/shell/sidebar";
import { TitleEntrance } from "@/features/shell/title-entrance";
import { TreeScript } from "@/features/shell/tree-script";
import { SmoothScroll } from "@/features/shell/smooth-scroll";
import { TopBar } from "@/features/shell/top-bar";
import { currentLocale } from "@/lib/current-locale";
import { locales } from "@/lib/locale";
import "@/app/globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { site } = getUiText(await currentLocale());
  return { title: site.title, description: site.description };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await currentLocale();
  const { shell, search } = getUiText(locale);
  const searchIndex = await getSearchIndex(locale);
  const groups = await getSiteTree(locale);
  const hasTree = groups.length > 0;
  const text = {
    navLabel: shell.navLabel,
    collapseAll: shell.collapseAll,
    expand: shell.expand,
    collapse: shell.collapse,
    chapterGrid: shell.chapterGrid,
    chapterOf: shell.chapterOf,
  };
  return (
    <Document lang={locale}>
      <SmoothScroll />
      <HashArrival />
      <TitleEntrance />
      <DrawerProvider>
        <SearchProvider>
          <a
            href="#content"
            className="fixed top-2 left-2 z-100 -translate-y-20 rounded-6 border border-rule-2 bg-bg flex min-h-11 items-center px-3.5 text-ui-sm font-medium text-ink no-underline transition-transform duration-150 ease-standard focus:translate-y-0"
          >
            {shell.skipToContent}
          </a>
          <TopBar withMenu={hasTree} />
          {hasTree ? (
            <div className="lg:grid lg:grid-shell">
              <TreeScript />
              <Sidebar groups={groups} text={text} />
              {children}
            </div>
          ) : (
            children
          )}
          <SearchDialog entries={searchIndex} text={search} />
        </SearchProvider>
      </DrawerProvider>
    </Document>
  );
}
