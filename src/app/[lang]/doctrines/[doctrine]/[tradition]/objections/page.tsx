import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CitationProvider } from "@/components/citation-window/citation-context";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { getPageViews } from "@/content/get-page-views";
import { getPublishedPages, getTraditionPage } from "@/content/get-tradition-page";
import { doctrineIds, traditionIds, type DoctrineId, type TraditionId } from "@/content/model/ids";
import { officialObjections } from "@/content/official-objections";
import { traditionHref } from "@/content/routes";
import { doctrineName, doctrineSubject, doctrineTitle, traditionName } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ObjectionList } from "@/features/doctrine/objection-list";
import { TraditionSwitcher } from "@/features/doctrine/tradition-switcher";
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

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/doctrines/[doctrine]/[tradition]/objections">): Promise<Metadata> {
  const { doctrine, tradition } = await params;
  const locale = await currentLocale();
  const { site, doctrine: labels } = getUiText(locale);
  if (!isDoctrine(doctrine) || !isTradition(tradition)) return { title: site.title };
  const page = await getTraditionPage(doctrine, tradition, locale);
  return {
    title: page
      ? `${doctrineTitle(locale, doctrine)} · ${traditionName(locale, tradition)} · ${labels.objections}`
      : site.title,
  };
}

export default async function ObjectionsRoute({
  params,
}: PageProps<"/[lang]/doctrines/[doctrine]/[tradition]/objections">) {
  const { doctrine, tradition } = await params;
  if (!isDoctrine(doctrine) || !isTradition(tradition)) notFound();
  const locale = await currentLocale();
  const page = await getTraditionPage(doctrine, tradition, locale);
  if (!page) notFound();
  const text = getUiText(locale);
  const adjective = traditionName(locale, tradition).toLowerCase();
  const fill = (template: string) =>
    template.replaceAll("{tradition}", adjective).replace("{doctrine}", doctrineSubject(locale, doctrine));
  return (
    <CitationProvider views={getPageViews(page, locale)} text={text.citation}>
      <PageMain>
        <Breadcrumbs
          label={text.shell.breadcrumb}
          trail={[
            { label: text.shell.groupDoctrines },
            { label: doctrineName(locale, doctrine) },
            { label: traditionName(locale, tradition), href: traditionHref(locale, doctrine, tradition) },
          ]}
          current={text.doctrine.objections}
        />
        <TraditionSwitcher
          label={text.shell.traditionLabel}
          hint={text.shell.objectionsHint}
          items={traditionIds.map((id) => ({ id, label: traditionName(locale, id) }))}
          current={tradition}
        />
        <PageHeader
          className="mt-5.5 sm:mt-7.5"
          title={fill(text.doctrine.objectionsPage.title)}
          lede={fill(text.doctrine.objectionsPage.lede)}
        />
        <section aria-label={text.doctrine.objections} className="mt-8 sm:mt-11">
          <div className="max-w-col">
            <ObjectionList
              objections={officialObjections(page)}
              doctrine={doctrine}
              tradition={tradition}
              locale={locale}
            />
          </div>
        </section>
      </PageMain>
    </CitationProvider>
  );
}
