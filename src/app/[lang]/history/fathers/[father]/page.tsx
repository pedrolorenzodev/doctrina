import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CitationProvider } from "@/components/citation-window/citation-context";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NeighborLinks } from "@/components/neighbor-links";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { PageLink } from "@/components/ui/page-link";
import { buildFatherTimeline } from "@/content/father-timeline";
import { buildFatherView } from "@/content/father-view";
import { buildDatingViews } from "@/content/father-dating-views";
import { getFatherDating } from "@/content/get-father-dating";
import { getFatherAppearances } from "@/content/get-father-appearances";
import { worksByFather } from "@/content/father-work-links";
import { getFatherWorks } from "@/content/get-father-works";
import { getFather, getFatherNeighbors, getPublishedFathers } from "@/content/get-fathers";
import { fatherHref, fatherWorkHref, timelineHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { EdgeRuler } from "@/features/shell/edge-ruler";
import { FatherAppearsSection } from "@/features/history/father-appears-section";
import { FatherDatingSection } from "@/features/history/father-dating-section";
import { FatherFacts } from "@/features/history/father-facts";
import { FatherTimelineSection } from "@/features/history/father-timeline-section";
import { FatherProfileSection } from "@/features/history/father-profile-section";
import { Section } from "@/components/section";
import { HistoryLinkList } from "@/features/history/history-link-list";
import { FatherWritingsSection } from "@/features/history/father-writings-section";
import { currentLocale } from "@/lib/current-locale";
import { locales } from "@/lib/locale";

export async function generateStaticParams() {
  return locales.flatMap((lang) => getPublishedFathers(lang).map((father) => ({ lang, father: father.id })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/history/fathers/[father]">): Promise<Metadata> {
  const { father: id } = await params;
  const locale = await currentLocale();
  const text = getUiText(locale);
  const father = getFather(id, locale);
  return { title: father ? `${father.name[locale]} · ${text.shell.tree.fathers}` : text.site.title };
}

export default async function FatherRoute({ params }: PageProps<"/[lang]/history/fathers/[father]">) {
  const { father: id } = await params;
  const locale = await currentLocale();
  const father = getFather(id, locale);
  if (!father) notFound();
  const text = getUiText(locale);
  const labels = text.father;
  const view = buildFatherView(father, locale, text);
  const timeline = buildFatherTimeline(father, getPublishedFathers(locale), locale, text);
  const dating = getFatherDating(father.id, locale);
  const appearances = await getFatherAppearances(father.id, locale);
  const readable = (worksByFather(await getFatherWorks(), locale)[father.id] ?? []).map((work) => ({
    id: work.id,
    label: work.label,
    href: fatherWorkHref(locale, work.id),
  }));
  const { previous, next } = getFatherNeighbors(father.id, locale);
  const neighbor = (label: string, other: typeof previous) =>
    other ? { label, title: other.name[locale], href: fatherHref(locale, other.id) } : null;
  const whoLabel = father.kind === "work" ? labels.whatIs : labels.who;
  const count =
    view.writings.length === 1 ? labels.writingsOne : labels.writingsMany.replace("{n}", String(view.writings.length));
  const page = (
    <PageMain>
      {/* TODO: «Historia» and «Padres» lead to their index pages once those exist */}
      <Breadcrumbs
        label={text.shell.breadcrumb}
        trail={[{ label: text.shell.tree.history }, { label: text.shell.tree.fathers }]}
        current={view.name}
      />
      <PageHeader id="top" className="mt-10" title={view.name} />
      <FatherFacts facts={view.headerFacts} />
      <p className="title-part title-part-3 mt-6 mb-0 text-ui-sm">
        <PageLink href={`${timelineHref(locale)}#${father.id}`}>{labels.timelineLink}</PageLink>
      </p>
      <FatherTimelineSection id="time" view={timeline} text={text.timeline} />
      <FatherProfileSection id="who" title={whoLabel} summary={view.summary} facts={view.profileFacts} />
      <FatherWritingsSection
        id="works"
        title={labels.works}
        axisLabel={view.writingsSpan ? `${count}, ${view.writingsSpan.label}` : count}
        span={view.writingsSpan}
        writings={view.writings}
      />
      {readable.length > 0 ? (
        <Section id="read" title={labels.read}>
          <HistoryLinkList items={readable} />
        </Section>
      ) : null}
      {dating ? <FatherDatingSection id="dating" dating={dating} text={text.dating} /> : null}
      <FatherAppearsSection
        id="appears"
        title={labels.appears}
        subtitle={labels.appearsSubtitle}
        groupTitle={labels.inDoctrine}
        appearances={appearances}
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
          { id: "top", label: view.name },
          { id: "time", label: text.timeline.title },
          { id: "who", label: whoLabel },
          ...(view.writings.length > 0 ? [{ id: "works", label: labels.works }] : []),
          ...(readable.length > 0 ? [{ id: "read", label: labels.read }] : []),
          ...(dating ? [{ id: "dating", label: text.dating.title }] : []),
          ...(appearances.length > 0 ? [{ id: "appears", label: labels.appears }] : []),
        ]}
      />
    </PageMain>
  );
  return dating ? (
    <CitationProvider views={buildDatingViews(dating, text.dating)} text={text.citation}>
      {page}
    </CitationProvider>
  ) : (
    page
  );
}
