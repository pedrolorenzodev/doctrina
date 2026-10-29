import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CitationProvider } from "@/components/citation-window/citation-context";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { doctrineCrumb } from "@/content/doctrine-crumb";
import { getPageViews } from "@/content/get-page-views";
import { getPassages } from "@/content/get-passages";
import { builtTraditions, getPublishedPages, getTraditionPage } from "@/content/get-tradition-page";
import { doctrineIds, traditionIds, type DoctrineId, type TraditionId } from "@/content/model/ids";
import { traditionHref } from "@/content/routes";
import { doctrineTitle, traditionName } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { TraditionSwitcher } from "@/features/doctrine/tradition-switcher";
import { PassagesView } from "@/features/passages/passages-view";
import { currentLocale } from "@/lib/current-locale";

function isDoctrine(value: string): value is DoctrineId {
  return (doctrineIds as readonly string[]).includes(value);
}

function isTradition(value: string): value is TraditionId {
  return (traditionIds as readonly string[]).includes(value);
}

export async function generateStaticParams() {
  return getPublishedPages("es")
    .filter((page) => page.hasPassages)
    .map(({ doctrine, tradition }) => ({ lang: "es", doctrine, tradition }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/doctrines/[doctrine]/[tradition]/passages">): Promise<Metadata> {
  const { doctrine, tradition } = await params;
  const locale = await currentLocale();
  const text = getUiText(locale);
  if (!isDoctrine(doctrine) || !isTradition(tradition)) return { title: text.site.title };
  return {
    title: `${text.shell.tree.passages} · ${doctrineTitle(locale, doctrine)} · ${traditionName(locale, tradition)}`,
  };
}

export default async function PassagesRoute({
  params,
}: PageProps<"/[lang]/doctrines/[doctrine]/[tradition]/passages">) {
  const { doctrine, tradition } = await params;
  if (!isDoctrine(doctrine) || !isTradition(tradition)) notFound();
  const locale = await currentLocale();
  const page = await getTraditionPage(doctrine, tradition, locale);
  if (!page?.passages) notFound();
  const text = getUiText(locale);
  const data = await getPassages(page, locale);
  return (
    <CitationProvider views={getPageViews(page, locale)} text={text.citation}>
      <PageMain>
        <Breadcrumbs
          label={text.shell.breadcrumb}
          trail={[
            { label: text.shell.groupDoctrines },
            doctrineCrumb(locale, doctrine),
            { label: traditionName(locale, tradition), href: traditionHref(locale, doctrine, tradition) },
          ]}
          current={text.shell.tree.passages}
        />
        <TraditionSwitcher
          label={text.shell.traditionLabel}
          hint={text.shell.traditionHint}
          soon={text.shell.soon}
          items={traditionIds.map((id) => ({
            id,
            label: traditionName(locale, id),
            available: builtTraditions(doctrine).includes(id),
          }))}
          current={tradition}
        />
        <PageHeader
          id="top"
          className="mt-5.5 sm:mt-7.5"
          title={page.passages.title}
          lede={page.passages.lede}
          emphasis={doctrineTitle(locale, doctrine)}
        />
        <PassagesView
          data={data}
          defaultEdition={locale === "es" ? "rv1909" : "bsb"}
          labels={page.passages}
          text={text.doctrine.passagesPage}
        />
      </PageMain>
    </CitationProvider>
  );
}
