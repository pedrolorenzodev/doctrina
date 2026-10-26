import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NeighborLinks } from "@/components/neighbor-links";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { getBibleBook } from "@/content/bible-books";
import { bibleChapterHref, bookFromSlug, bookSlug } from "@/content/bible-routes";
import { getReadableChapters } from "@/content/get-bible";
import { getReaderChapter } from "@/content/get-reader-chapter";
import type { ChapterRef } from "@/content/model/bible";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ReaderBody } from "@/features/reader/reader-body";
import { ReaderSizeScript } from "@/features/reader/reader-size-script";
import { ReaderStrip } from "@/features/reader/reader-strip";
import { VerseArrival } from "@/features/reader/verse-arrival";
import { currentLocale } from "@/lib/current-locale";
import type { Locale } from "@/lib/locale";

export async function generateStaticParams() {
  const chapters = await getReadableChapters("es");
  return chapters.map(({ book, chapter }) => ({
    lang: "es",
    book: bookSlug("es", getBibleBook(book)!),
    chapter: String(chapter),
  }));
}

async function loadChapter(locale: Locale, bookParam: string, chapterParam: string) {
  const book = bookFromSlug(locale, bookParam);
  const number = Number(chapterParam);
  if (!book || !Number.isInteger(number)) return null;
  return getReaderChapter(locale, book.id, number);
}

export async function generateMetadata({ params }: PageProps<"/[lang]/bible/[book]/[chapter]">): Promise<Metadata> {
  const { book, chapter } = await params;
  const locale = await currentLocale();
  const loaded = await loadChapter(locale, book, chapter);
  const text = getUiText(locale);
  return {
    title: loaded
      ? text.reader.chapterTitle
          .replace("{book}", loaded.book.names[locale])
          .replace("{chapter}", String(loaded.chapter))
      : text.site.title,
  };
}

export default async function ChapterRoute({ params }: PageProps<"/[lang]/bible/[book]/[chapter]">) {
  const { book: bookParam, chapter: chapterParam } = await params;
  const locale = await currentLocale();
  const loaded = await loadChapter(locale, bookParam, chapterParam);
  if (!loaded) notFound();
  const { book, chapter, views, defaultId } = loaded;
  const text = getUiText(locale);
  const labels = text.reader;
  const sectionLabel = text.shell.tree[book.section === "old" ? "ot" : book.section === "new" ? "nt" : "deutero"];
  const titleOf = (name: string, number: number) =>
    labels.chapterTitle.replace("{book}", name).replace("{chapter}", String(number));
  const licenceTexts: Record<string, string> = labels.licences;
  const licences = Object.fromEntries(
    views.map((view) => {
      const licence = licenceTexts[view.id];
      return [view.id, licence ? labels.foot.licence.replace("{licence}", licence) : null];
    }),
  );
  const neighbor = (label: string, other: ChapterRef | null) => {
    const otherBook = other ? getBibleBook(other.book) : null;
    return other && otherBook
      ? {
          label,
          title: titleOf(otherBook.names[locale], other.chapter),
          href: bibleChapterHref(locale, otherBook, other.chapter),
        }
      : null;
  };
  return (
    <PageMain>
      <ReaderSizeScript />
      <ReaderStrip
        sizeText={labels.size}
        pickerText={labels.picker}
        options={views.map(({ id, abbreviation, displayName, language }) => ({
          id,
          abbreviation,
          displayName,
          language,
        }))}
        defaultId={defaultId}
        yourNotes={{ label: labels.yourNotes.button, book: book.id, chapter }}
      />
      {/* TODO: «Biblia» and the testament lead to their index pages once those exist */}
      <Breadcrumbs
        label={text.shell.breadcrumb}
        trail={[{ label: text.shell.tree.bible }, { label: sectionLabel }]}
        current={book.names[locale]}
      />
      <PageHeader id="top" className="mt-9" size="reader" title={titleOf(book.names[locale], chapter)} />
      <ReaderBody
        views={views}
        licences={licences}
        defaultId={defaultId}
        bookId={book.id}
        deuteroNotice={book.section === "deuterocanon" ? labels.deuteroNotice : null}
        numberingNote={labels.numberingNote}
        footTitle={labels.foot.title}
        panel={{
          locale,
          notes: labels.notes,
          text: labels.panel,
          highlight: labels.highlight,
          bookName: book.names[locale],
          chapter,
          verseReference: labels.verseReference,
          shortCitation: labels.shortCitation,
          verseRange: labels.verseRange,
          toolbar: labels.toolbar,
          yourNotes: labels.yourNotes,
        }}
      />
      <VerseArrival />
      <NeighborLinks
        label={labels.neighborsLabel}
        className="mt-16"
        previous={neighbor(labels.previous, loaded.previous)}
        next={neighbor(labels.next, loaded.next)}
      />
    </PageMain>
  );
}
