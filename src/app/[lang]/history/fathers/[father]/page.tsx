import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NeighborLinks } from "@/components/neighbor-links";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { PageLink } from "@/components/ui/page-link";
import { buildFatherTimeline } from "@/content/father-timeline";
import { buildFatherView } from "@/content/father-view";
import { getFatherAppearances } from "@/content/get-father-appearances";
import { getFather, getFatherNeighbors, getPublishedFathers } from "@/content/get-fathers";
import { fatherHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { EdgeRuler } from "@/features/shell/edge-ruler";
import { FatherAppearsSection } from "@/features/history/father-appears-section";
import { FatherFacts } from "@/features/history/father-facts";
import { FatherTimelineSection } from "@/features/history/father-timeline-section";
import { FatherProfileSection } from "@/features/history/father-profile-section";
import { FatherWritingsSection } from "@/features/history/father-writings-section";
import { currentLocale } from "@/lib/current-locale";

export async function generateStaticParams() {
  return getPublishedFathers("es").map((father) => ({ lang: "es", father: father.id }));
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
  const appearances = await getFatherAppearances(father.id, locale);
  const { previous, next } = getFatherNeighbors(father.id, locale);
  const neighbor = (label: string, other: typeof previous) =>
    other ? { label, title: other.name[locale], href: fatherHref(locale, other.id) } : null;
  const whoLabel = father.kind === "work" ? labels.whatIs : labels.who;
  const count =
    view.writings.length === 1 ? labels.writingsOne : labels.writingsMany.replace("{n}", String(view.writings.length));
  return (
    <PageMain>
      {/* TODO: «Historia» and «Padres» lead to their index pages once those exist */}
      <Breadcrumbs
        label={text.shell.breadcrumb}
        trail={[{ label: text.shell.tree.history }, { label: text.shell.tree.fathers }]}
        current={view.name}
      />
      <PageHeader id="top" className="mt-10" title={view.name} />
      <FatherFacts facts={view.headerFacts} />
      {/* TODO: leads to the entity's life on screen 08 once the timeline exists */}
      <p className="title-part title-part-3 mt-6 mb-0 text-ui-sm">
        <PageLink>{labels.timelineLink}</PageLink>
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
          ...(appearances.length > 0 ? [{ id: "appears", label: labels.appears }] : []),
        ]}
      />
    </PageMain>
  );
}
