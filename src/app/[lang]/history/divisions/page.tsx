import type { Metadata } from "next";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { HistoryIndexView } from "@/features/history/history-index-view";
import { currentLocale } from "@/lib/current-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  const text = getUiText(locale);
  return { title: text.shell.tree.divisions };
}

export default function Route() {
  return <HistoryIndexView kind="divisions" />;
}
