import type { Metadata } from "next";
import { Document } from "@/components/document";
import { getUiText } from "@/content/ui-text/get-ui-text";
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
  return <Document lang={await currentLocale()}>{children}</Document>;
}
