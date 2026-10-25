import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CitationProvider } from "@/components/citation-window/citation-context";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageMain } from "@/components/page-main";
import { Section } from "@/components/section";
import { getObjectionViews } from "@/content/get-objection-views";
import { getObjectorQuotes } from "@/content/get-objector-quotes";
import { getPublishedPages, getTraditionPage } from "@/content/get-tradition-page";
import { doctrineIds, traditionIds, type DoctrineId, type TraditionId } from "@/content/model/ids";
import type { Objection } from "@/content/model/page";
import { officialObjections } from "@/content/official-objections";
import { plainRich } from "@/content/page-views";
import { objectionSlug, objectionsHref, traditionHref } from "@/content/routes";
import { doctrineName, doctrineTitle, traditionName } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { AnswerSection } from "@/features/doctrine/answer-section";
import { ObjectionBox } from "@/features/doctrine/objection-box";
import { ObjectionHeader } from "@/features/doctrine/objection-header";
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
): Promise<{ doctrine: DoctrineId; tradition: TraditionId; objection: Objection } | null> {
  if (!isDoctrine(doctrine) || !isTradition(tradition)) return null;
  const page = await getTraditionPage(doctrine, tradition, locale);
  const objection = page ? officialObjections(page).find((candidate) => objectionSlug(candidate.id) === slug) : null;
  return objection ? { doctrine, tradition, objection } : null;
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
  const { objection } = found;
  const text = getUiText(locale);
  const adjective = traditionName(locale, found.tradition).toLowerCase();
  const quotes = getObjectorQuotes(objection, locale);
  const answerTitle = text.doctrine.objection.answer.replace("{tradition}", adjective);
  return (
    <CitationProvider
      views={getObjectionViews(
        objection,
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
            { label: doctrineName(locale, found.doctrine) },
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
        <EdgeRuler
          label={text.shell.sections}
          sections={[
            { id: "top", label: plainRich(objection.title, locale) },
            { id: "objection", label: text.doctrine.objection.box },
            { id: "answer", label: answerTitle },
          ]}
        />
      </PageMain>
    </CitationProvider>
  );
}
