import type { Metadata } from "next";
import { Document } from "@/components/document";
import { getSiteTree } from "@/content/get-site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { DrawerProvider } from "@/features/shell/drawer";
import { Sidebar } from "@/features/shell/sidebar";
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
  const { shell } = getUiText(locale);
  const groups = getSiteTree(locale);
  const hasTree = groups.length > 0;
  const text = {
    navLabel: shell.navLabel,
    collapseAll: shell.collapseAll,
    expand: shell.expand,
    collapse: shell.collapse,
  };
  return (
    <Document lang={locale}>
      <SmoothScroll />
      <DrawerProvider>
        <TopBar withMenu={hasTree} />
        {hasTree ? (
          <div className="lg:grid lg:grid-shell">
            <Sidebar groups={groups} text={text} />
            {children}
          </div>
        ) : (
          children
        )}
      </DrawerProvider>
    </Document>
  );
}
