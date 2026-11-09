import type { Metadata } from "next";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { SourcesView } from "@/features/sources/sources-view";
import { currentLocale } from "@/lib/current-locale";

export async function generateMetadata(): Promise<Metadata> {
  const text = getUiText(await currentLocale()).sourcesPage;
  return { title: text.title, description: text.lede };
}

export default function SourcesRoute() {
  return <SourcesView />;
}
