import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CitationLink } from "@/components/citation-window/citation-link";
import { CitationProvider } from "@/components/citation-window/citation-context";
import { NeighborLinks } from "@/components/neighbor-links";
import { PageMain } from "@/components/page-main";
import { Section } from "@/components/section";
import { PageLink } from "@/components/ui/page-link";
import { getWordPage, type NeighborView, type WordGroup, type WordPageData } from "@/content/get-word-page";
import { wordHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { EdgeRuler } from "@/features/shell/edge-ruler";
import { BookRows } from "@/features/words/book-rows";
import { FormRows } from "@/features/words/form-rows";
import { OriginalEntry } from "@/features/words/original-entry";
import { OriginalWord } from "@/features/words/original-word";
import { PlacesList } from "@/features/words/places-list";
import { SensesList } from "@/features/words/senses-list";
import { TransliterationScript } from "@/features/words/transliteration-script";
import { TransliterationSwitch } from "@/features/words/transliteration-switch";
import { WordFiltersProvider } from "@/features/words/word-filters";
import { currentLocale } from "@/lib/current-locale";
import type { CitationView } from "@/lib/citation-view";
import type { Locale } from "@doctrina/core/locale";

const dataSource = "https://github.com/STEPBible/STEPBible-Data";
const sourceId = "word-source";

const columns: Record<"grc" | "hbo", WordGroup[][]> = {
  grc: [
    ["gospels", "acts", "paul"],
    ["general", "revelation"],
  ],
  hbo: [
    ["law", "history", "wisdom"],
    ["major", "minor"],
  ],
};

const capitalised = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const quoteOpen = "\u00ab";
const quoteClose = "\u00bb";
const comma = ", ";

function neighborBox(locale: Locale, label: string, view: NeighborView | null, fromLemma: string) {
  if (!view) return null;
  const language = view.id.startsWith("G") ? "grc" : "hbo";
  const gloss = `${quoteOpen}${view.gloss}${quoteClose}`;
  return {
    label,
    href: wordHref(locale, view.id),
    title: (
      <>
        <OriginalWord text={view.word} transliteration={view.transliteration} language={language} />
        {view.lemma ? (
          <>
            {comma}
            {fromLemma.split("{lemma}")[0]}
            <OriginalWord text={view.lemma.word} transliteration={view.lemma.transliteration} language={language} />
          </>
        ) : null}
        {comma}
        {gloss}
      </>
    ),
  };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/words/[word]">): Promise<Metadata> {
  const { word } = await params;
  const locale = await currentLocale();
  const data = await getWordPage(locale, word);
  return { title: data ? data.lemma : getUiText(locale).site.title };
}

export default async function WordRoute({ params, searchParams }: PageProps<"/[lang]/words/[word]">) {
  const { word } = await params;
  const query = await searchParams;
  const locale = await currentLocale();
  const from = typeof query.from === "string" ? query.from : undefined;
  const data = await getWordPage(locale, word, from);
  if (!data) notFound();
  const text = getUiText(locale);
  const labels = text.wordPage;
  const greek = data.language === "grc";
  const testament = greek ? text.shell.tree.nt : text.shell.tree.ot;
  const timesLine = data.times === 1 ? labels.facts.timesOne : labels.facts.times.replace("{n}", String(data.times));
  const versesLine =
    data.verses === 1 ? labels.facts.inVerse : labels.facts.inVerses.replace("{n}", String(data.verses));
  const source: CitationView = {
    id: sourceId,
    kind: labels.sourceKicker,
    title: null,
    quote: null,
    quoteLanguage: null,
    definition: null,
    who: greek ? labels.sourceWho : labels.sourceWhoHebrew,
    locator: labels.sourceWork,
    note: {
      label: labels.sourceKicker,
      text: labels.sourceNote
        .replace("{word}", data.lemma)
        .replace("{strong}", data.id)
        .replace("{times}", timesLine)
        .replace("{verses}", versesLine.replace(/^(en|in) /, "")),
    },
    date: null,
    externalLink: { href: dataSource, label: labels.sourceLink },
    copyText: null,
    fullSource: false,
  };
  const formsNote = (greek ? labels.forms.noteNew : labels.forms.noteOld).split("{source}");
  const facts: { term: string; value: React.ReactNode }[] = [
    { term: labels.facts.literal, value: <span lang={data.literalEnglish ? "en" : undefined}>{data.literal}</span> },
    { term: labels.facts.wordClass, value: data.wordClass },
    {
      term: greek ? labels.facts.countNew : labels.facts.countOld,
      value: (
        <>
          <CitationLink id={sourceId} kind="source">
            {timesLine}
          </CitationLink>{" "}
          <span className="text-ui-base text-ink-3">{versesLine}</span>
        </>
      ),
    },
    ...(data.genitive
      ? [
          {
            term: labels.facts.genitive,
            value: (
              <OriginalWord text={data.genitive.form} transliteration={data.genitive.transliteration} language="grc" />
            ),
          },
        ]
      : []),
    { term: labels.facts.strong, value: <span className="font-ui text-ui-base text-ink-2">{data.strong}</span> },
  ];
  const lede = `${capitalised(data.literal)}.`;
  const place = data.verseNeighbors?.place ?? null;
  const previous = place
    ? neighborBox(
        locale,
        labels.neighbors.previousIn.replace("{place}", place),
        data.verseNeighbors?.previous ?? null,
        labels.neighbors.fromLemma,
      )
    : neighborBox(locale, labels.neighbors.previous, data.neighbors.previous, labels.neighbors.fromLemma);
  const next = place
    ? neighborBox(
        locale,
        labels.neighbors.nextIn.replace("{place}", place),
        data.verseNeighbors?.next ?? null,
        labels.neighbors.fromLemma,
      )
    : neighborBox(locale, labels.neighbors.next, data.neighbors.next, labels.neighbors.fromLemma);
  const meansTag = greek ? labels.means.tagGreek : labels.means.tagHebrew;
  const edition = data.edition;
  const senses =
    data.senses.length > 0 ? data.senses : data.entry ? [{ n: "", text: data.entry, example: null, places: [] }] : [];
  const sections = [
    { id: "top", label: data.lemma },
    { id: "where", label: labels.where.title },
    { id: "means", label: labels.means.title },
    ...(data.forms.length > 0 ? [{ id: "forms", label: labels.forms.title }] : []),
    { id: "places", label: labels.places.title },
    { id: "fathers", label: labels.fathers.title },
  ];
  const noteGreek = (greek ? labels.means.noteGreek : labels.means.noteHebrew).replace("{edition}", edition);

  return (
    <CitationProvider views={{ [sourceId]: source }} text={text.citation}>
      <TransliterationScript />
      <WordFiltersProvider>
        <PageMain rail>
          <div className="mb-10 flex max-w-col flex-wrap items-center justify-between gap-x-6 gap-y-2.5">
            <Breadcrumbs
              label={text.shell.breadcrumb}
              trail={[{ label: text.shell.tree.bible }, { label: testament }]}
              current={<OriginalWord text={data.lemma} language={data.language} />}
            />
            <TransliterationSwitch label={labels.transliteration} />
          </div>
          {data.from ? (
            <p className="-mt-5.5 mb-7 max-w-col text-btn text-ink-3">
              {labels.cameFrom.split("{place}")[0]}
              <PageLink href={data.from.href}>{data.from.label}</PageLink>
              {labels.cameFrom.split("{place}")[1]}
            </p>
          ) : null}
          <header id="top" className="max-w-col">
            <p className="title-part title-part-1 m-0 mb-2.5 text-ui-xs text-ink-3">
              {greek ? labels.kickerGreek : labels.kickerHebrew}
            </p>
            <h1 className="title-part title-part-1 m-0 flex flex-wrap items-baseline gap-x-5.5 gap-y-1 font-head font-light text-ink">
              <span lang={data.language} className="text-word-title-mobile font-normal sm:text-word-title">
                {data.lemma}
              </span>
              <span
                data-transliteration=""
                className="font-head text-word-romanized-mobile font-light text-ink-2 italic opsz-36 sm:text-word-romanized"
              >
                {data.transliteration}
              </span>
            </h1>
            <p className="title-part title-part-2 m-0 mt-3.5 font-head text-lede-mobile font-light text-ink-2 italic opsz-36 sm:text-lede">
              {lede}
            </p>
            <dl className="title-part title-part-3 word-fact-row m-0 mt-6.5 p-0">
              {facts.map((fact) => (
                <div key={fact.term} className="min-w-0">
                  <dt className="m-0 mb-0.75 text-label text-ink-3">{fact.term}</dt>
                  <dd className="m-0 font-body text-entity tabular-nums text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <Section id="where" title={labels.where.title} wide>
            <p className="m-0 mt-4.5 font-head text-section-heading font-normal text-ink opsz-24">
              {greek ? labels.where.corpusNew : labels.where.corpusOld}
            </p>
            <p className="m-0 mt-1 mb-5.5 text-ui-xs text-ink-3">{labels.where.subtitle}</p>
            <BookRows
              columns={columns[data.language].map((group) =>
                group.map((id) => ({ id, label: labels.where.groups[id] })),
              )}
              books={data.books}
            />
            <p className="m-0 mt-3.5 text-ui-xs text-ink-3">{labels.where.tip}</p>
          </Section>

          <Section
            id="means"
            title={labels.means.title}
            subtitle={greek ? labels.means.subtitleGreek : labels.means.subtitleHebrew}
          >
            {senses.length > 0 ? (
              <SensesList
                senses={senses}
                tag={meansTag}
                senseLabel={labels.means.sense}
                placesLabel={labels.means.places}
                placesOneLabel={labels.means.placesOne}
              />
            ) : (
              <p className="m-0 text-ui-sm text-ink-3">{labels.means.none}</p>
            )}
            <p className="m-0 mt-4 max-w-160 text-ui-xs leading-normal text-ink-3">{noteGreek}</p>
            {greek && data.hasSenseList && data.entry ? (
              <OriginalEntry entry={data.entry} show={labels.means.original} hide={labels.means.hideOriginal} />
            ) : null}
          </Section>

          {data.forms.length > 0 ? (
            <Section
              id="forms"
              title={labels.forms.title}
              subtitle={(data.forms.length === 1 ? labels.forms.subtitleOne : labels.forms.subtitle).replace(
                "{n}",
                String(data.forms.length),
              )}
            >
              <FormRows
                forms={data.forms}
                language={data.language}
                text={{ viewMany: labels.forms.viewMany, viewOne: labels.forms.viewOne }}
              />
              <p className="m-0 mt-4 max-w-160 text-ui-xs leading-normal text-ink-3">
                {formsNote[0]}
                <CitationLink id={sourceId} kind="source">
                  {greek ? labels.forms.source : labels.forms.sourceOld}
                </CitationLink>
                {formsNote[1]}
              </p>
            </Section>
          ) : null}

          <Section id="places" title={labels.places.title} wide>
            <p className="m-0 mb-4 text-btn leading-normal text-ink-3">
              {(data.verses === 1 ? labels.places.statusOne : greek ? labels.places.statusNew : labels.places.statusOld)
                .replace("{n}", String(data.verses))
                .replace("{edition}", edition)}
            </p>
            {data.places ? (
              <>
                <PlacesList
                  places={data.places}
                  forms={data.forms}
                  language={data.language}
                  total={data.verses}
                  text={labels.places}
                />
                <p className="m-0 mt-3.5 max-w-175 text-ui-xs leading-normal text-ink-3">
                  {locale === "es" ? labels.places.note : labels.places.noteEnglish}
                </p>
              </>
            ) : (
              <p className="m-0 max-w-160 text-ui-sm leading-normal text-ink-2">
                {labels.places.tooMany.replace("{n}", String(data.verses))}
              </p>
            )}
          </Section>

          <Section id="fathers" title={labels.fathers.title} subtitle={labels.fathers.subtitle}>
            {/* TODO: quotes from the Greek Fathers Doctrina cites, with the word marked; the corpus has no original-language Father texts yet */}
            <span />
          </Section>

          {previous || next ? (
            <NeighborLinks label={labels.neighbors.label} previous={previous} next={next} className="mt-21" wide />
          ) : null}
          <EdgeRuler label={labels.sections} sections={sections} />
        </PageMain>
      </WordFiltersProvider>
    </CitationProvider>
  );
}

export type { WordPageData };
