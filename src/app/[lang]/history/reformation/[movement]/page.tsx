import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NeighborLinks } from "@/components/neighbor-links";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { Section } from "@/components/section";
import { formatYear } from "@/content/format-date";
import { getMovementIds, getMovementPage, movementName } from "@/content/get-history-pages";
import { movementHref, reformationIndexHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { FatherFacts } from "@/features/history/father-facts";
import { HistoryLinkList } from "@/features/history/history-link-list";
import { EdgeRuler } from "@/features/shell/edge-ruler";
import { currentLocale } from "@/lib/current-locale";
import { locales } from "@/lib/locale";

const proseClassName = "m-0 font-body text-prose-mobile font-light text-ink-2 opsz-18 sm:text-prose";

export async function generateStaticParams() {
  return locales.flatMap((lang) => getMovementIds().map((movement) => ({ lang, movement })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/history/reformation/[movement]">): Promise<Metadata> {
  const { movement: id } = await params;
  const locale = await currentLocale();
  const text = getUiText(locale);
  const page = getMovementPage(id);
  return { title: page ? `${page.item.name[locale]} · ${text.shell.tree.reformation}` : text.site.title };
}

export default async function MovementRoute({ params }: PageProps<"/[lang]/history/reformation/[movement]">) {
  const { movement: id } = await params;
  const locale = await currentLocale();
  const page = getMovementPage(id);
  if (!page) notFound();
  const text = getUiText(locale);
  const labels = text.movement;
  const { item, previous, next } = page;
  const link = (otherId: string) => {
    const name = movementName(otherId, locale);
    return name ? [{ id: otherId, label: name, href: movementHref(locale, otherId) }] : [];
  };
  const origin = item.from ? link(item.from) : [];
  const influences = item.influences.flatMap(link);
  const neighbor = (label: string, other: typeof previous) =>
    other ? { label, title: other.name[locale], href: movementHref(locale, other.id) } : null;
  const sections = [
    { id: "summary", label: labels.summary },
    { id: "little", label: labels.littleKnown },
    ...(item.keyFigures.length > 0 ? [{ id: "figures", label: labels.figures }] : []),
    ...(item.keyDocuments.length > 0 ? [{ id: "documents", label: labels.documents }] : []),
    ...(origin.length > 0 ? [{ id: "from", label: labels.from }] : []),
    ...(influences.length > 0 ? [{ id: "influences", label: labels.influences }] : []),
  ];
  return (
    <PageMain>
      <Breadcrumbs
        label={text.shell.breadcrumb}
        trail={[
          { label: text.shell.tree.history },
          { label: text.shell.tree.reformation, href: reformationIndexHref(locale) },
        ]}
        current={item.name[locale]}
      />
      <PageHeader id="top" className="mt-10" title={item.name[locale]} />
      <FatherFacts
        facts={[
          { label: labels.facts.year, value: formatYear({ year: item.year, circa: item.approx }) },
          { label: labels.facts.kind, value: labels.kinds[item.kind] },
        ]}
      />
      <Section id="summary" title={labels.summary}>
        <p className={proseClassName}>{item.summary[locale]}</p>
      </Section>
      <Section id="little" title={labels.littleKnown}>
        <p className={proseClassName}>{item.littleKnown[locale]}</p>
      </Section>
      {item.keyFigures.length > 0 ? (
        <Section id="figures" title={labels.figures}>
          <HistoryLinkList
            items={item.keyFigures.map((figure) => ({
              id: figure.name.es,
              label: figure.name[locale],
              detail: figure.dates,
            }))}
          />
        </Section>
      ) : null}
      {item.keyDocuments.length > 0 ? (
        <Section id="documents" title={labels.documents}>
          <HistoryLinkList
            items={item.keyDocuments.map((document) => ({
              id: document.title.es,
              label: document.title[locale],
              detail: String(document.year),
            }))}
          />
        </Section>
      ) : null}
      {origin.length > 0 ? (
        <Section id="from" title={labels.from}>
          <HistoryLinkList items={origin} />
        </Section>
      ) : null}
      {influences.length > 0 ? (
        <Section id="influences" title={labels.influences}>
          <HistoryLinkList items={influences} />
        </Section>
      ) : null}
      <NeighborLinks
        label={labels.neighborsLabel}
        className="mt-21"
        previous={neighbor(labels.previous, previous)}
        next={neighbor(labels.next, next)}
      />
      <EdgeRuler label={text.shell.sections} sections={[{ id: "top", label: item.name[locale] }, ...sections]} />
    </PageMain>
  );
}
