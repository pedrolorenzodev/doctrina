import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CitationProvider } from "@/components/citation-window/citation-context";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NeighborLinks } from "@/components/neighbor-links";
import { PageMain } from "@/components/page-main";
import { Section } from "@/components/section";
import { doctrineCrumb } from "@/content/doctrine-crumb";
import { getObjectionViews } from "@/content/get-objection-views";
import { getObjectionPassages } from "@/content/get-objection-passages";
import { getObjectionSources } from "@/content/get-objection-sources";
import { getObjectorTexts } from "@/content/get-objector-texts";
import { getPublishedPages, getTraditionPage } from "@/content/get-tradition-page";
import { doctrineIds, traditionIds, type DoctrineId, type TraditionId } from "@/content/model/ids";
import type { Objection, TraditionPage } from "@/content/model/page";
import { officialObjections } from "@/content/official-objections";
import { plainRich } from "@/content/page-views";
import { objectionHref, objectionSlug, objectionsHref, traditionHref } from "@/content/routes";
import { objectionsPageText } from "@/content/objections-page-text";
import { doctrineTitle, traditionName } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { AnswerSection } from "@/features/doctrine/answer-section";
import { ObjectionBox } from "@/features/doctrine/objection-box";
import { ObjectionHeader } from "@/features/doctrine/objection-header";
import { ObjectionVideosSection } from "@/features/doctrine/objection-videos-section";
import { OtherObjectionsSection } from "@/features/doctrine/other-objections-section";
import { PassagesSection } from "@/features/doctrine/passages-section";
import { SourcesSection } from "@/features/doctrine/sources-section";
import { EdgeRuler } from "@/features/shell/edge-ruler";
import { currentLocale } from "@/lib/current-locale";
import type { Locale } from "@/lib/locale";

function isDoctrine(value: string): value is DoctrineId {
  return (doctrineIds as readonly string[]).includes(value);
}

function isTradition(value: string): value is TraditionId {
  return (traditionIds as readonly string[]).includes(value);
}

async function findObjection(
  doctrine: string,
  tradition: string,
  slug: string,
  locale: Locale,
): Promise<{ doctrine: DoctrineId; tradition: TraditionId; page: TraditionPage; objection: Objection } | null> {
  if (!isDoctrine(doctrine) || !isTradition(tradition)) return null;
  const page = await getTraditionPage(doctrine, tradition, locale);
  const objection = page ? officialObjections(page).find((candidate) => objectionSlug(candidate.id) === slug) : null;
  return page && objection ? { doctrine, tradition, page, objection } : null;
}

export async function generateStaticParams() {
  const pages = await Promise.all(
    getPublishedPages("es").map(async ({ doctrine, tradition }) => {
      const page = await getTraditionPage(doctrine, tradition, "es");
      return (page ? officialObjections(page) : []).map((objection) => ({
        lang: "es",
        doctrine,
        tradition,
        objection: objectionSlug(objection.id),
      }));
    }),
  );
  return pages.flat();
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/doctrines/[doctrine]/[tradition]/objections/[objection]">): Promise<Metadata> {
  const { doctrine, tradition, objection: slug } = await params;
  const locale = await currentLocale();
  const found = await findObjection(doctrine, tradition, slug, locale);
  if (!found) return { title: getUiText(locale).site.title };
  const { objection } = found;
  return {
    title: `${objection.short ?? plainRich(objection.title, locale)} · ${doctrineTitle(locale, found.doctrine)} · ${traditionName(locale, found.tradition)}`,
  };
}

export default async function ObjectionRoute({
  params,
}: PageProps<"/[lang]/doctrines/[doctrine]/[tradition]/objections/[objection]">) {
  const { doctrine, tradition, objection: slug } = await params;
  const locale = await currentLocale();
  const found = await findObjection(doctrine, tradition, slug, locale);
  if (!found) notFound();
  const { objection, page } = found;
  const text = getUiText(locale);
  const adjective = traditionName(locale, found.tradition).toLowerCase();
  const quotes = getObjectorTexts(objection, locale);
  const sources = getObjectionSources(objection, quotes, locale);
  const passages = getObjectionPassages(objection, locale);
  const official = officialObjections(page);
  const position = official.findIndex((candidate) => candidate.id === objection.id);
  const before = official[position - 1];
  const after = official[position + 1];
  const link = (target: Objection) => objectionHref(locale, found.doctrine, found.tradition, target.id);
  const hasVideos = (objection.videoIds ?? []).length > 0;
  const answerTitle = text.doctrine.objection.answer.replace("{tradition}", adjective);
  return (
    <CitationProvider
      views={getObjectionViews(
        objection,
        official.filter((other) => other.id !== objection.id),
        quotes.map((quote) => quote.id),
        locale,
      )}
      text={text.citation}
    >
      <PageMain>
        <Breadcrumbs
          label={text.shell.breadcrumb}
          trail={[
            { label: text.shell.groupDoctrines },
            doctrineCrumb(locale, found.doctrine),
            {
              label: traditionName(locale, found.tradition),
              href: traditionHref(locale, found.doctrine, found.tradition),
            },
            { label: text.doctrine.objections, href: objectionsHref(locale, found.doctrine, found.tradition) },
          ]}
        />
        <ObjectionHeader
          id="top"
          kicker={text.doctrine.objection.kicker.replace("{tradition}", adjective)}
          title={plainRich(objection.title, locale)}
        />
        <Section id="objection" title={text.doctrine.objection.box}>
          <ObjectionBox objection={objection} quotes={quotes} locale={locale} />
        </Section>
        <AnswerSection id="answer" title={answerTitle} objection={objection} locale={locale} />
        <SourcesSection id="sources" sources={sources} locale={locale} />
        <PassagesSection id="passages" passages={passages} locale={locale} />
        <ObjectionVideosSection id="videos" page={page} objection={objection} locale={locale} />
        <OtherObjectionsSection id="others" page={page} current={objection} locale={locale} />
        <NeighborLinks
          label={text.doctrine.objection.neighbors}
          previous={
            before
              ? {
                  label: text.doctrine.objection.previousObjection,
                  title: plainRich(before.title, locale),
                  href: link(before),
                }
              : {
                  label: text.doctrine.objection.previousAll,
                  title: objectionsPageText(locale, found.doctrine, found.tradition).title,
                  href: objectionsHref(locale, found.doctrine, found.tradition),
                }
          }
          next={
            after
              ? {
                  label: text.doctrine.objection.nextObjection,
                  title: plainRich(after.title, locale),
                  href: link(after),
                }
              : null
          }
        />
        <EdgeRuler
          label={text.shell.sections}
          sections={[
            { id: "top", label: plainRich(objection.title, locale) },
            { id: "objection", label: text.doctrine.objection.box },
            { id: "answer", label: answerTitle },
            ...(sources.answer.length + sources.objector.length > 0
              ? [{ id: "sources", label: text.doctrine.objection.sources }]
              : []),
            ...(passages.answer.length + passages.objector.length > 0
              ? [{ id: "passages", label: text.doctrine.objection.passages }]
              : []),
            ...(hasVideos ? [{ id: "videos", label: text.doctrine.videos }] : []),
            ...(official.length > 1 ? [{ id: "others", label: text.doctrine.objection.otherObjections }] : []),
          ]}
        />
      </PageMain>
    </CitationProvider>
  );
}
