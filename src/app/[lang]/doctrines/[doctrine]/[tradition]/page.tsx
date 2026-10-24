import { notFound } from "next/navigation";
import { CitationProvider } from "@/components/citation-window/citation-context";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { getPageViews } from "@/content/get-page-views";
import { getPublishedPages, getTraditionPage } from "@/content/get-tradition-page";
import { doctrineIds, traditionIds, type DoctrineId, type TraditionId } from "@/content/model/ids";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { TeachSection } from "@/features/doctrine/teach-section";
import { WhySection } from "@/features/doctrine/why-section";
import { EdgeRuler } from "@/features/shell/edge-ruler";
import { currentLocale } from "@/lib/current-locale";

function isDoctrine(value: string): value is DoctrineId {
  return (doctrineIds as readonly string[]).includes(value);
}

function isTradition(value: string): value is TraditionId {
  return (traditionIds as readonly string[]).includes(value);
}

export async function generateStaticParams() {
  return getPublishedPages("es").map(({ doctrine, tradition }) => ({ lang: "es", doctrine, tradition }));
}

export default async function TraditionRoute({ params }: PageProps<"/[lang]/doctrines/[doctrine]/[tradition]">) {
  const { doctrine, tradition } = await params;
  if (!isDoctrine(doctrine) || !isTradition(tradition)) notFound();
  const locale = await currentLocale();
  const page = await getTraditionPage(doctrine, tradition, locale);
  if (!page) notFound();
  const text = getUiText(locale);
  return (
    <CitationProvider views={getPageViews(page, locale)} text={text.citation}>
      <PageMain>
        <PageHeader id="top" title={page.title} lede={page.lede} />
        <TeachSection page={page} locale={locale} />
        <WhySection page={page} locale={locale} />
        <EdgeRuler
          label={text.shell.sections}
          sections={[
            { id: "top", label: page.title },
            { id: "teach", label: text.doctrine.teach },
            { id: "why", label: text.doctrine.why },
          ]}
        />
      </PageMain>
    </CitationProvider>
  );
}
