import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NeighborLinks } from "@/components/neighbor-links";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { Section } from "@/components/section";
import { formatYear } from "@/content/format-date";
import { councilName, getDivisionIds, getDivisionPage, localized } from "@/content/get-history-pages";
import { councilHref, divisionHref, divisionsIndexHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { FatherFacts } from "@/features/history/father-facts";
import { HistoryLinkList } from "@/features/history/history-link-list";
import { EdgeRuler } from "@/features/shell/edge-ruler";
import { currentLocale } from "@/lib/current-locale";

const proseClassName = "m-0 font-body text-prose-mobile font-light text-ink-2 opsz-18 sm:text-prose";

export async function generateStaticParams() {
  return getDivisionIds().map((division) => ({ lang: "es", division }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/history/divisions/[division]">): Promise<Metadata> {
  const { division: id } = await params;
  const locale = await currentLocale();
  const text = getUiText(locale);
  const page = getDivisionPage(id);
  return { title: page ? `${page.item.name[locale]} · ${text.shell.tree.divisions}` : text.site.title };
}

export default async function DivisionRoute({ params }: PageProps<"/[lang]/history/divisions/[division]">) {
  const { division: id } = await params;
  const locale = await currentLocale();
  const page = getDivisionPage(id);
  if (!page) notFound();
  const text = getUiText(locale);
  const labels = text.division;
  const { item, previous, next } = page;
  const first = formatYear({ year: item.year, circa: false });
  const story = localized(item.page, locale);
  const councils = item.relatedCouncils.flatMap((councilId) => {
    const name = councilName(councilId, locale);
    return name ? [{ id: councilId, label: name, href: councilHref(locale, councilId) }] : [];
  });
  const neighbor = (label: string, other: typeof previous) =>
    other ? { label, title: other.name[locale], href: divisionHref(locale, other.id) } : null;
  const sections = [
    { id: "summary", label: labels.summary },
    ...(story ? [{ id: "story", label: labels.story }] : []),
    { id: "sides", label: labels.sides },
    { id: "dates", label: labels.dates },
    ...(councils.length > 0 ? [{ id: "councils", label: labels.councils }] : []),
  ];
  return (
    <PageMain>
      <Breadcrumbs
        label={text.shell.breadcrumb}
        trail={[
          { label: text.shell.tree.history },
          { label: text.shell.tree.divisions, href: divisionsIndexHref(locale) },
        ]}
        current={item.name[locale]}
      />
      <PageHeader id="top" className="mt-10" title={item.name[locale]} />
      <FatherFacts facts={[{ label: labels.facts.years, value: item.endYear ? `${first}–${item.endYear}` : first }]} />
      <Section id="summary" title={labels.summary}>
        <p className={proseClassName}>{item.summary[locale]}</p>
      </Section>
      {story ? (
        <Section id="story" title={labels.story}>
          <div className="flex flex-col gap-4">
            {story.split("\n\n").map((paragraph) => (
              <p key={paragraph} className={proseClassName}>
                {paragraph}
              </p>
            ))}
          </div>
        </Section>
      ) : null}
      <Section id="sides" title={labels.sides}>
        <HistoryLinkList items={item.sides.map((side, index) => ({ id: String(index), label: side[locale] }))} />
      </Section>
      <Section id="dates" title={labels.dates}>
        <HistoryLinkList
          items={item.keyDates.map((date) => ({
            id: `${date.year}-${date.label.es}`,
            label: date.label[locale],
            detail: String(date.year),
          }))}
        />
      </Section>
      {councils.length > 0 ? (
        <Section id="councils" title={labels.councils}>
          <HistoryLinkList items={councils} />
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
