import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NeighborLinks } from "@/components/neighbor-links";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { Section } from "@/components/section";
import { bibleChapterHref, bibleVerseHref, bookFromSlug } from "@doctrina/core/bible-routes";
import { getVersePage } from "@/content/get-verse-page";
import type { DoctrineId } from "@doctrina/core/model/ids";
import { doctrineName } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { EdgeRuler } from "@/features/shell/edge-ruler";
import { VerseBackScript } from "@/features/verse/verse-back-script";
import { VerseBackStrip } from "@/features/verse/verse-back-strip";
import { VerseCite } from "@/features/verse/verse-cite";
import { VerseCompare } from "@/features/verse/verse-compare";
import { HideWhenNumberingDiffers } from "@/features/verse/verse-differs";
import { VerseEditionProvider } from "@/features/verse/verse-edition";
import { VersePassage } from "@/features/verse/verse-passage";
import { VerseRuler } from "@/features/verse/verse-ruler";
import { VerseTranslationPicker } from "@/features/verse/verse-translation-picker";
import { VerseUsesGroups, VerseUsesSide, type VerseUseGroup } from "@/features/verse/verse-uses";
import { VerseWordsView } from "@/features/verse/verse-words";
import { currentLocale } from "@/lib/current-locale";
import type { Locale } from "@doctrina/core/locale";

export function generateStaticParams() {
  return [];
}

const gospels = ["Matt", "Mark", "Luke", "John"];

async function loadVerse(locale: Locale, bookParam: string, chapterParam: string, verseParam: string) {
  const book = bookFromSlug(locale, bookParam);
  const chapter = Number(chapterParam);
  const verse = Number(verseParam);
  if (!book || !Number.isInteger(chapter) || !Number.isInteger(verse)) return null;
  return getVersePage(locale, book.id, chapter, verse);
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/bible/[book]/[chapter]/[verse]">): Promise<Metadata> {
  const { book, chapter, verse } = await params;
  const locale = await currentLocale();
  const loaded = await loadVerse(locale, book, chapter, verse);
  const text = getUiText(locale);
  return {
    title: loaded
      ? text.reader.verseReference
          .replace("{book}", loaded.book.names[locale])
          .replace("{chapter}", String(loaded.chapter))
          .replace("{verse}", String(loaded.verse))
      : text.site.title,
  };
}

export default async function VerseRoute({ params }: PageProps<"/[lang]/bible/[book]/[chapter]/[verse]">) {
  const { book: bookParam, chapter: chapterParam, verse: verseParam } = await params;
  const locale = await currentLocale();
  const data = await loadVerse(locale, bookParam, chapterParam, verseParam);
  if (!data) notFound();
  const { book, chapter, verse } = data;
  const text = getUiText(locale);
  const labels = text.versePage;
  const bookName = book.names[locale];
  const reference = text.reader.verseReference
    .replace("{book}", bookName)
    .replace("{chapter}", String(chapter))
    .replace("{verse}", String(verse));
  const sectionLabel = text.shell.tree[book.section === "old" ? "ot" : book.section === "new" ? "nt" : "deutero"];
  const kicker = gospels.includes(book.id)
    ? labels.kickerGospel.replace("{book}", bookName)
    : labels.kickerBook.replace("{book}", bookName).replace("{chapter}", String(chapter));
  const chapterLabel = labels.crumbChapter.replace("{chapter}", String(chapter));
  const chapterHref = bibleChapterHref(locale, book, chapter);
  const base = chapterHref;
  const neighborOf = (label: string, number: number | null) =>
    number === null
      ? null
      : {
          label,
          title: text.reader.verseReference
            .replace("{book}", bookName)
            .replace("{chapter}", String(chapter))
            .replace("{verse}", String(number)),
          href: bibleVerseHref(locale, book, chapter, number),
        };
  const groups: VerseUseGroup[] = [];
  for (const use of data.uses) {
    const label = doctrineName(locale, use.id.split("/")[0] as DoctrineId);
    const group = groups.find((entry) => entry.label === label);
    if (group) group.items.push(use);
    else groups.push({ label, items: [use] });
  }
  const hasUses = data.uses.length > 0;
  const wordsTitle = data.words?.language === "hbo" ? labels.words.titleHebrew : labels.words.titleGreek;
  const entry = (id: string, label: string) => ({ id, label });

  return (
    <PageMain rail>
      <div>
        <div className="rail:mx-auto rail:max-w-wide">
          <VerseBackScript />
          <VerseEditionProvider editions={data.editions} defaultId={data.defaultId} book={book.id}>
            <div className="mb-5">
              <Breadcrumbs
                label={text.shell.breadcrumb}
                trail={[
                  { label: text.shell.tree.bible },
                  { label: sectionLabel },
                  { label: bookName },
                  { label: chapterLabel, href: chapterHref },
                ]}
                current={`${chapter}:${verse}`}
              />
            </div>
            <VerseBackStrip text={labels.back} />
            <div className="mt-5.5 sm:mt-7.5">
              <p className="title-part title-part-1 m-0 mb-2 text-ui-xs text-ink-3">{kicker}</p>
              <PageHeader title={reference} />
            </div>
            <div className="verse-grid">
              <VersePassage
                text={labels}
                picker={<VerseTranslationPicker text={text.reader.picker} />}
                verse={verse}
                base={base}
                chapterHref={`${chapterHref}#v-${verse}`}
                chapterTitle={text.reader.chapterTitle
                  .replace("{book}", bookName)
                  .replace("{chapter}", String(chapter))}
                numberingNote={text.reader.numberingNote}
              />
              <aside
                aria-label={labels.cite.title}
                className="mt-12 hidden self-start border-l border-rule pl-5.5 verse-wide:col-start-2 verse-wide:row-start-1 verse-wide:block"
              >
                <h2 className="m-0 mb-2.5 font-head text-verse-side-title font-normal text-ink opsz-30">
                  {labels.cite.title}
                </h2>
                <VerseCite text={labels.cite} reference={reference} />
                {hasUses ? (
                  <HideWhenNumberingDiffers>
                    <div className="mt-13.75">
                      <h2 className="m-0 mb-2.5 font-head text-verse-side-title font-normal text-ink opsz-30">
                        {labels.uses.title}
                      </h2>
                      <VerseUsesSide items={data.uses} text={labels.uses} />
                    </div>
                  </HideWhenNumberingDiffers>
                ) : null}
              </aside>
            </div>
            {data.words ? (
              <VerseWordsView
                locale={locale}
                book={book.id}
                bookName={bookName}
                chapter={chapter}
                verse={verse}
                words={data.words}
                text={text.reader.panel.words}
                title={wordsTitle}
                subtitle={labels.words.subtitle}
              />
            ) : null}
            <VerseCompare
              text={{
                ...labels.compare,
                languageSpanish: text.reader.panel.sections.spanish,
                languageEnglish: text.reader.panel.sections.english,
              }}
            />
            <div className="verse-wide:hidden">
              {hasUses ? (
                <HideWhenNumberingDiffers>
                  <Section id="uses" title={labels.uses.title} subtitle={labels.uses.subtitle}>
                    <VerseUsesGroups groups={groups} />
                  </Section>
                </HideWhenNumberingDiffers>
              ) : null}
              <Section id="cite" title={labels.cite.title}>
                <VerseCite text={labels.cite} reference={reference} />
              </Section>
            </div>
            {data.previous !== null || data.next !== null ? (
              <NeighborLinks
                label={labels.passageNav}
                previous={neighborOf(labels.previous, data.previous)}
                next={neighborOf(labels.next, data.next)}
                className="mt-21"
              />
            ) : null}
            <VerseRuler
              Ruler={EdgeRuler}
              label={text.shell.sections}
              translation={entry("translation", labels.translation)}
              words={data.words ? entry("words", wordsTitle) : null}
              compare={entry("compare", labels.compare.title)}
              uses={hasUses ? entry("uses", labels.uses.title) : null}
              cite={entry("cite", labels.cite.title)}
            />
          </VerseEditionProvider>
        </div>
      </div>
    </PageMain>
  );
}
