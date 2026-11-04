import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { NeighborLinks } from "@/components/neighbor-links";
import { PageMain } from "@/components/page-main";
import { neighborsOfWork, workName } from "@/content/father-work-links";
import { getFatherWork, getFatherWorks, type FatherWork } from "@/content/get-father-works";
import { getSpanishFatherWork } from "@/content/get-father-works-es";
import { fatherWorkHref, fathersIndexHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ByFatherEdition } from "@/features/reader/by-father-edition";
import { ChapterFoot } from "@/features/reader/chapter-foot";
import { FatherStrip } from "@/features/reader/father-strip";
import { FatherBody } from "@/features/reader/father-body";
import { FatherAsk } from "@/features/reader-ai/father-ask";
import { fatherAskText } from "@/features/reader-ai/text";
import { ReaderSizeScript } from "@/features/reader/reader-size-script";
import { ReaderTextScript } from "@/features/reader/reader-text-script";
import { VerseArrival } from "@/features/reader/verse-arrival";
import { currentLocale } from "@/lib/current-locale";
import { locales } from "@/lib/locale";

export async function generateStaticParams() {
  const works = await getFatherWorks();
  return locales.flatMap((lang) => works.map((work) => ({ lang, work: work.id })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/history/works/[work]">): Promise<Metadata> {
  const { work: id } = await params;
  const locale = await currentLocale();
  const work = await getFatherWork(id);
  return { title: work ? work.title : getUiText(locale).site.title };
}

export default async function FatherWorkRoute({ params }: PageProps<"/[lang]/history/works/[work]">) {
  const { work: id } = await params;
  const locale = await currentLocale();
  const work = await getFatherWork(id);
  if (!work) notFound();
  const text = getUiText(locale);
  const labels = text.reader;
  const ask = fatherAskText(locale);
  const licences: Record<string, string> = labels.licences;
  const spanish = await getSpanishFatherWork(id);
  const editionLine = (edition: FatherWork["edition"]) =>
    (edition.lang === "en" ? labels.fatherWork.editionEn : labels.fatherWork.editionEs)
      .replace("{translator}", edition.translator)
      .replace("{year}", String(edition.year));
  const firstTranslator = work.edition.translator.split(/,| and /)[0] ?? work.edition.translator;
  const surname = firstTranslator.trim().split(" ").pop() ?? firstTranslator;
  const panel = {
    text: { ...labels.panel, label: labels.fatherWork.panelLabel },
    highlight: labels.highlight,
    notes: labels.notes,
    toolbar: { ...labels.toolbar, ask: ask.ask },
    yourNotes: labels.yourNotes,
    shortCitation: labels.shortCitation,
  };
  const placeOf = (division: { locator: string }) =>
    division.locator === "prologue" ? labels.fatherWork.prologue : division.locator;
  const editionView = (edition: FatherWork, ai: boolean, partial: boolean) => {
    const licence = licences[edition.edition.licence];
    const first = edition.divisions[0];
    const last = edition.divisions[edition.divisions.length - 1];
    return (
      <>
        <p className="title-part title-part-2 mt-2.5 mb-0 text-reader-note text-ink-3">
          {editionLine(edition.edition)}
        </p>
        {ai ? (
          <p className="title-part title-part-2 mt-1 mb-0 text-reader-note text-ink-3">
            {labels.fatherWork.aiTranslation}
            {partial && first && last
              ? ` · ${labels.fatherWork.partial.replace("{first}", placeOf(first)).replace("{last}", placeOf(last))}`
              : ""}
          </p>
        ) : edition.edition.status === "draft" ? (
          <p className="title-part title-part-2 mt-1 mb-0 text-reader-note text-ink-3">{labels.fatherWork.draft}</p>
        ) : null}
        <FatherBody
          workId={edition.id}
          editionKey={ai ? edition.edition.id : edition.id}
          simplified={!ai}
          workName={workName(edition.id, locale, edition.title)}
          title={edition.title}
          lang={edition.edition.lang}
          prologue={labels.fatherWork.prologue}
          divisions={edition.divisions}
          editionTag={`${edition.edition.translator}, ${edition.edition.year}`}
          locale={locale}
          panel={panel}
        />
        <ChapterFoot
          title={labels.foot.title}
          edition={edition.edition.bibliography}
          licence={licence ? labels.foot.licence.replace("{licence}", licence) : null}
        />
      </>
    );
  };
  const pickerOptions = [
    ...(spanish
      ? [
          {
            id: "es",
            abbreviation: labels.fatherWork.aiAbbreviation.replace("{year}", String(spanish.edition.year)),
            displayName: labels.fatherWork.aiName,
            language: "es" as const,
          },
        ]
      : []),
    {
      id: "en",
      abbreviation: `${surname} ${work.edition.year}`,
      displayName: firstTranslator,
      language: "en" as const,
    },
  ];
  const { previous, next } = neighborsOfWork(work.id, await getFatherWorks(), locale);
  const neighbor = (label: string, other: typeof previous) =>
    other ? { label, title: other.label, href: fatherWorkHref(locale, other.id) } : null;
  return (
    <PageMain wideGutter>
      <ReaderSizeScript />
      <ReaderTextScript />
      <FatherStrip
        yourNotes={{ label: labels.yourNotes.button, book: work.id, chapter: 1 }}
        text={{
          mark: labels.textOptions.mark,
          label: labels.textOptions.label,
          size: labels.size,
          settings: labels.textOptions.settings,
          formatGroup: labels.textOptions.formatGroup,
          formats: { lines: labels.textOptions.lines, flow: labels.textOptions.flow },
          locked: labels.parallel.locked,
        }}
        ask={{ label: ask.ask, keyHint: ask.keyHint }}
        picker={{
          text: { label: labels.picker.label, spanish: labels.picker.spanish, english: labels.picker.english },
          options: pickerOptions,
          defaultId: "en",
        }}
      />
      <div className="mx-auto max-w-reader">
        {/* TODO: «Historia» leads to its index page once it exists */}
        <Breadcrumbs
          label={text.shell.breadcrumb}
          trail={[
            { label: text.shell.tree.history },
            { label: text.shell.tree.fathers, href: fathersIndexHref(locale) },
          ]}
          current={work.title}
        />
        <PageHeader id="top" className="mt-9" size="reader" title={work.title} />
        <ByFatherEdition
          defaultId="en"
          editions={[
            { id: "en", node: editionView(work, false, false) },
            ...(spanish ? [{ id: "es", node: editionView(spanish, true, spanish.partial) }] : []),
          ]}
        />
        <VerseArrival />
        <NeighborLinks
          label={labels.neighborsLabel}
          className="mt-16"
          previous={neighbor(labels.fatherWork.previous, previous)}
          next={neighbor(labels.fatherWork.next, next)}
        />
      </div>
      <FatherAsk
        locale={locale}
        text={ask}
        workId={work.id}
        workName={workName(work.id, locale, work.title)}
        editions={pickerOptions.map((option) => ({ id: option.id, name: option.displayName }))}
        citationText={text.citation}
      />
    </PageMain>
  );
}
