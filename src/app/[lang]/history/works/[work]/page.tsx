import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { NeighborLinks } from "@/components/neighbor-links";
import { PageMain } from "@/components/page-main";
import { neighborsOfWork, workName } from "@/content/father-work-links";
import { getFatherWork, getFatherWorks } from "@/content/get-father-works";
import { fatherWorkHref, fathersIndexHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ChapterFoot } from "@/features/reader/chapter-foot";
import { FatherStrip } from "@/features/reader/father-strip";
import { FatherBody } from "@/features/reader/father-body";
import { ReaderSizeScript } from "@/features/reader/reader-size-script";
import { ReaderTextScript } from "@/features/reader/reader-text-script";
import { VerseArrival } from "@/features/reader/verse-arrival";
import { TreeToggle } from "@/features/shell/tree-toggle";
import { currentLocale } from "@/lib/current-locale";

export async function generateStaticParams() {
  return (await getFatherWorks()).map((work) => ({ lang: "es", work: work.id }));
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
  const licences: Record<string, string> = labels.licences;
  const licence = licences[work.edition.licence];
  const editionLine = (work.edition.lang === "en" ? labels.fatherWork.editionEn : labels.fatherWork.editionEs)
    .replace("{translator}", work.edition.translator)
    .replace("{year}", String(work.edition.year));
  const { previous, next } = neighborsOfWork(work.id, await getFatherWorks(), locale);
  const neighbor = (label: string, other: typeof previous) =>
    other ? { label, title: other.label, href: fatherWorkHref(locale, other.id) } : null;
  return (
    <PageMain wideGutter>
      <ReaderSizeScript />
      <ReaderTextScript />
      <FatherStrip
        treeToggle={<TreeToggle label={labels.treeToggle} />}
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
        <p className="title-part title-part-2 mt-2.5 mb-0 text-reader-note text-ink-3">{editionLine}</p>
        {work.edition.status === "draft" ? (
          <p className="title-part title-part-2 mt-1 mb-0 text-reader-note text-ink-3">{labels.fatherWork.draft}</p>
        ) : null}
        <FatherBody
          workId={work.id}
          workName={workName(work.id, locale, work.title)}
          title={work.title}
          lang={work.edition.lang}
          prologue={labels.fatherWork.prologue}
          divisions={work.divisions}
          editionTag={`${work.edition.translator}, ${work.edition.year}`}
          locale={locale}
          panel={{
            text: { ...labels.panel, label: labels.fatherWork.panelLabel },
            highlight: labels.highlight,
            notes: labels.notes,
            toolbar: labels.toolbar,
            yourNotes: labels.yourNotes,
            shortCitation: labels.shortCitation,
          }}
        />
        <ChapterFoot
          title={labels.foot.title}
          edition={work.edition.bibliography}
          licence={licence ? labels.foot.licence.replace("{licence}", licence) : null}
        />
        <VerseArrival />
        <NeighborLinks
          label={labels.neighborsLabel}
          className="mt-16"
          previous={neighbor(labels.fatherWork.previous, previous)}
          next={neighbor(labels.fatherWork.next, next)}
        />
      </div>
    </PageMain>
  );
}
