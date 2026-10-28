import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { glossaryIndexGroups, glossaryLocales } from "@/content/get-glossary";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { HistoryIndexList } from "@/features/history/history-index-list";
import { currentLocale } from "@/lib/current-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  return { title: getUiText(locale).glossary.title };
}

export default async function GlossaryRoute() {
  const locale = await currentLocale();
  if (!glossaryLocales.includes(locale)) notFound();
  const text = getUiText(locale);
  const labels = text.glossary;
  return (
    <PageMain>
      <Breadcrumbs
        label={text.shell.breadcrumb}
        trail={[{ label: text.shell.tree.reference }]}
        current={labels.title}
      />
      <PageHeader id="top" className="mt-10" title={labels.title} lede={labels.lede} />
      <p className="title-part title-part-2 mt-1 mb-0 text-reader-note text-ink-3">{labels.draft}</p>
      <HistoryIndexList
        groups={glossaryIndexGroups(locale, (id) => labels.doctrines[id])}
        filter={{ label: labels.filter, none: labels.none }}
      />
    </PageMain>
  );
}
