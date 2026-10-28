import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NeighborLinks } from "@/components/neighbor-links";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { Section } from "@/components/section";
import { PageLink } from "@/components/ui/page-link";
import { getFather } from "@/content/get-fathers";
import { councilName, getCurrentIds, getCurrentPage, localized } from "@/content/get-history-pages";
import { councilHref, currentHref, fatherHref, timelineHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { FatherFacts } from "@/features/history/father-facts";
import { EdgeRuler } from "@/features/shell/edge-ruler";
import { currentLocale } from "@/lib/current-locale";

const proseClassName = "m-0 font-body text-prose-mobile font-light text-ink-2 opsz-18 sm:text-prose";

export async function generateStaticParams() {
  return getCurrentIds().map((current) => ({ lang: "es", current }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/history/currents/[current]">): Promise<Metadata> {
  const { current: id } = await params;
  const locale = await currentLocale();
  const text = getUiText(locale);
  const page = getCurrentPage(id);
  return { title: page ? `${page.item.name[locale]} · ${text.shell.tree.heresies}` : text.site.title };
}

export default async function CurrentRoute({ params }: PageProps<"/[lang]/history/currents/[current]">) {
  const { current: id } = await params;
  const locale = await currentLocale();
  const page = getCurrentPage(id);
  if (!page) notFound();
  const text = getUiText(locale);
  const labels = text.current;
  const { item, previous, next } = page;
  const founder = localized(item.founder, locale);
  const facts = [
    { label: labels.facts.period, value: item.period[locale] },
    ...(founder ? [{ label: labels.facts.founder, value: founder }] : []),
  ];
  const councils = item.councils.flatMap((councilId) => {
    const name = councilName(councilId, locale);
    return name ? [{ id: councilId, name }] : [];
  });
  const fathers = item.fathers.flatMap((fatherId) => {
    const father = getFather(fatherId, locale);
    return father ? [{ id: fatherId, name: father.name[locale] }] : [];
  });
  const neighbor = (label: string, other: typeof previous) =>
    other ? { label, title: other.name[locale], href: currentHref(locale, other.id) } : null;
  return (
    <PageMain>
      {/* TODO: «Historia» and «Herejías» lead to their index pages once those exist */}
      <Breadcrumbs
        label={text.shell.breadcrumb}
        trail={[{ label: text.shell.tree.history }, { label: text.shell.tree.heresies }]}
        current={item.name[locale]}
      />
      <PageHeader id="top" className="mt-10" title={item.name[locale]} />
      <FatherFacts facts={facts} />
      <p className="title-part title-part-3 mt-6 mb-0 text-ui-sm">
        <PageLink href={`${timelineHref(locale)}#${item.id}`}>{labels.timelineLink}</PageLink>
      </p>
      <Section id="held" title={labels.held}>
        <p className={proseClassName}>{item.teaching[locale]}</p>
      </Section>
      <Section id="answered" title={labels.answered}>
        <p className={proseClassName}>{item.response[locale]}</p>
      </Section>
      <Section id="story" title={labels.story}>
        <p className={proseClassName}>{item.page[locale]}</p>
      </Section>
      {councils.length > 0 ? (
        <Section id="councils" title={labels.councils}>
          <ul className="m-0 flex list-none flex-col gap-2 p-0 text-ui-sm">
            {councils.map((council) => (
              <li key={council.id}>
                <PageLink href={councilHref(locale, council.id)}>{council.name}</PageLink>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
      {fathers.length > 0 ? (
        <Section id="fathers" title={labels.fathers}>
          <ul className="m-0 flex list-none flex-col gap-2 p-0 text-ui-sm">
            {fathers.map((father) => (
              <li key={father.id}>
                <PageLink href={fatherHref(locale, father.id)}>{father.name}</PageLink>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
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
          { id: "held", label: labels.held },
          { id: "answered", label: labels.answered },
          { id: "story", label: labels.story },
          ...(councils.length > 0 ? [{ id: "councils", label: labels.councils }] : []),
          ...(fathers.length > 0 ? [{ id: "fathers", label: labels.fathers }] : []),
        ]}
      />
    </PageMain>
  );
}
