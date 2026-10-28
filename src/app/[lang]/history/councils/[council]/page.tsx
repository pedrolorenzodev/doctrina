import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NeighborLinks } from "@/components/neighbor-links";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { PageLink } from "@/components/ui/page-link";
import { formatYear } from "@/content/format-date";
import { getCouncilIds, getCouncilPage, localized } from "@/content/get-history-pages";
import { councilHref, councilsIndexHref, timelineHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { FatherFacts } from "@/features/history/father-facts";
import { FatherProfileSection } from "@/features/history/father-profile-section";
import { EdgeRuler } from "@/features/shell/edge-ruler";
import { currentLocale } from "@/lib/current-locale";

const timelineLastYear = 800;

export async function generateStaticParams() {
  return getCouncilIds().map((council) => ({ lang: "es", council }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/history/councils/[council]">): Promise<Metadata> {
  const { council: id } = await params;
  const locale = await currentLocale();
  const text = getUiText(locale);
  const page = getCouncilPage(id);
  return { title: page ? `${page.item.name[locale]} · ${text.shell.tree.councils}` : text.site.title };
}

export default async function CouncilRoute({ params }: PageProps<"/[lang]/history/councils/[council]">) {
  const { council: id } = await params;
  const locale = await currentLocale();
  const page = getCouncilPage(id);
  if (!page) notFound();
  const text = getUiText(locale);
  const labels = text.council;
  const { item, previous, next } = page;
  const first = formatYear({ year: item.year, circa: item.approx ?? false });
  const date = item.dateNote?.[locale] ?? (item.endYear ? `${first}–${item.endYear}` : first);
  const convokedBy = localized(item.convokedBy, locale);
  const facts = [
    { label: labels.facts.date, value: date },
    { label: labels.facts.place, value: item.place[locale] },
  ];
  const supporting = [
    ...(convokedBy ? [{ label: labels.facts.convokedBy, value: convokedBy }] : []),
    ...(item.canons ? [{ label: labels.facts.canons, value: String(item.canons) }] : []),
  ];
  const neighbor = (label: string, other: typeof previous) =>
    other ? { label, title: other.name[locale], href: councilHref(locale, other.id) } : null;
  return (
    <PageMain>
      {/* TODO: «Historia» leads to its index page once it exists */}
      <Breadcrumbs
        label={text.shell.breadcrumb}
        trail={[
          { label: text.shell.tree.history },
          { label: text.shell.tree.councils, href: councilsIndexHref(locale) },
        ]}
        current={item.name[locale]}
      />
      <PageHeader id="top" className="mt-10" title={item.name[locale]} />
      <FatherFacts facts={facts} />
      {item.year <= timelineLastYear ? (
        <p className="title-part title-part-3 mt-6 mb-0 text-ui-sm">
          <PageLink href={`${timelineHref(locale)}#${item.id}`}>{labels.timelineLink}</PageLink>
        </p>
      ) : null}
      <FatherProfileSection id="decided" title={labels.decided} summary={item.decisions[locale]} facts={supporting} />
      <FatherProfileSection
        id="recognized"
        title={labels.recognized}
        summary={item.recognizedAsEcumenicalBy[locale]}
        facts={[]}
      />
      <NeighborLinks
        label={labels.neighborsLabel}
        className="mt-21"
        previous={neighbor(labels.previous, previous)}
        next={neighbor(labels.next, next)}
      />
      <EdgeRuler
        label={text.shell.sections}
        sections={[
          { id: "top", label: item.name[locale] },
          { id: "decided", label: labels.decided },
          { id: "recognized", label: labels.recognized },
        ]}
      />
    </PageMain>
  );
}
