import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { getFatherWork, getFatherWorks } from "@/content/get-father-works";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ChapterFoot } from "@/features/reader/chapter-foot";
import { FatherStrip } from "@/features/reader/father-strip";
import { FatherText } from "@/features/reader/father-text";
import { ReaderSizeScript } from "@/features/reader/reader-size-script";
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
  return (
    <PageMain wideGutter>
      <ReaderSizeScript />
      <FatherStrip
        text={{
          mark: labels.textOptions.mark,
          label: labels.textOptions.label,
          size: labels.size,
          formatGroup: labels.textOptions.formatGroup,
          formats: { lines: labels.textOptions.lines, flow: labels.textOptions.flow },
          locked: labels.parallel.locked,
        }}
      />
      {/* TODO: «Historia» and «Padres» lead to their index pages once those exist */}
      <Breadcrumbs
        label={text.shell.breadcrumb}
        trail={[{ label: text.shell.tree.history }, { label: text.shell.tree.fathers }]}
        current={work.title}
      />
      <PageHeader id="top" className="mt-9" size="reader" title={work.title} />
      <p className="title-part title-part-2 mt-2.5 mb-0 text-reader-note text-ink-3">{editionLine}</p>
      <FatherText divisions={work.divisions} lang={work.edition.lang} prologue={labels.fatherWork.prologue} />
      <ChapterFoot
        title={labels.foot.title}
        edition={work.edition.bibliography}
        licence={licence ? labels.foot.licence.replace("{licence}", licence) : null}
      />
    </PageMain>
  );
}
