import { CitationProvider } from "@/components/citation-window/citation-context";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { Section } from "@/components/section";
import { translationMeta, translationOrder } from "@/content/bible/translation-meta";
import { bibleBooks, type BibleSection } from "@/content/bible-books";
import { bibleChapterHref } from "@/content/bible-routes";
import { getCitationViews } from "@/content/get-citation-views";
import { getDoctrinePage } from "@/content/get-doctrine-page";
import { getHomeTimeline } from "@/content/get-home-timeline";
import { homeDraftQuestions } from "@/content/home-doctrines";
import { doctrineIds } from "@/content/model/ids";
import { doctrineHref, glossaryHref } from "@/content/routes";
import { doctrineName } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { buildWitnessView, witnessViewId } from "@/content/witness-view";
import { BibleRows } from "@/features/home/bible-rows";
import { DoctrineRows } from "@/features/home/doctrine-rows";
import { HomeFooter } from "@/features/home/home-footer";
import { HomeResume } from "@/features/home/home-resume";
import { MailForm } from "@/features/home/mail-form";
import { MethodSection } from "@/features/home/method-section";
import { YearsExplorer } from "@/features/home/years-explorer";
import { EdgeRuler } from "@/features/shell/edge-ruler";
import { currentLocale } from "@/lib/current-locale";
import { localeHref, locales } from "@/lib/locale";

const councilCitation = "T13c4";
const fathersExample = { doctrine: "eucharist", witness: "ew-flesh", locale: "es" } as const;

const bibleSections: { section: BibleSection; label: "ot" | "deutero" | "nt" }[] = [
  { section: "old", label: "ot" },
  { section: "deuterocanon", label: "deutero" },
  { section: "new", label: "nt" },
];

export default async function Home() {
  const locale = await currentLocale();
  const text = getUiText(locale);
  const { site, home, shell } = text;
  const years = home.years;
  const doctrines = await Promise.all(
    doctrineIds.map(async (id) => {
      const page = await getDoctrinePage(id, locale);
      return {
        id,
        name: doctrineName(locale, id),
        question: page?.lede ?? homeDraftQuestions[locale][id].question,
        href: page ? doctrineHref(locale, id) : null,
      };
    }),
  );
  const editions = translationOrder.map((id) => ({
    id,
    abbreviation: translationMeta[id]!.abbreviation,
    name: translationMeta[id]!.displayName,
  }));
  const bibleRows = bibleSections.map(({ section, label }) => {
    const books = bibleBooks.filter((book) => book.section === section);
    return {
      id: section,
      title: shell.tree[label],
      count: home.bible.books.replace("{n}", String(books.length)),
      href: bibleChapterHref(locale, books[0]!, 1),
    };
  });
  const examplePage = await getDoctrinePage(fathersExample.doctrine, fathersExample.locale);
  const exampleWitness = examplePage?.witnesses.items.find((item) => item.id === fathersExample.witness);
  const views = {
    ...getCitationViews([councilCitation], locale),
    ...(exampleWitness
      ? { [witnessViewId(exampleWitness.id)]: buildWitnessView(exampleWitness, fathersExample.locale, text) }
      : {}),
  };
  const other = locales.find((candidate) => candidate !== locale)!;
  return (
    <CitationProvider views={views} text={text.citation}>
      <PageMain>
        <PageHeader title={site.title} lede={home.lede} />
        <HomeResume here={localeHref(locale)} text={{ label: home.resume, detail: home.resumeDetail }} />
        <section
          id="years"
          aria-labelledby="years-title"
          className="title-part title-part-3 mt-14 max-w-wide scroll-mt-offset"
        >
          <h2 id="years-title" className="m-0 font-head text-title-sm leading-group font-normal text-ink opsz-60">
            {years.title}
          </h2>
          <p className="mt-2.5 mb-0 max-w-155 text-sub text-ink-3">{years.intro}</p>
          <YearsExplorer data={getHomeTimeline(locale)} text={years} />
        </section>
        <Section id="doctrines" title={home.doctrines.title}>
          <p className="m-0 max-w-155 text-sub text-ink-3">{home.doctrines.intro}</p>
          <DoctrineRows doctrines={doctrines} />
        </Section>
        <Section id="bible" title={home.bible.title}>
          <p className="m-0 max-w-155 text-sub text-ink-3">{home.bible.intro}</p>
          <BibleRows editions={editions} rows={bibleRows} />
        </Section>
        <MethodSection
          text={home.method}
          councilView={councilCitation}
          witnessView={witnessViewId(fathersExample.witness)}
        />
        <MailForm text={home.mail} />
        <HomeFooter
          site={site.title}
          glossary={{ label: home.footer.glossary, href: glossaryHref(locale) }}
          sources={home.footer.sources}
          other={{ label: home.footer.other, href: localeHref(other), lang: other }}
        />
        <EdgeRuler
          label={shell.sections}
          sections={[
            { id: "years", label: years.ruler },
            { id: "doctrines", label: home.doctrines.title },
            { id: "bible", label: home.bible.title },
            { id: "method", label: home.method.ruler },
          ]}
        />
      </PageMain>
    </CitationProvider>
  );
}
