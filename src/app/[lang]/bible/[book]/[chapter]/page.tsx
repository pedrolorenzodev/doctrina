import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { getBibleBook } from "@/content/bible-books";
import { bibleChapterHref, bookFromSlug, bookSlug } from "@/content/bible-routes";
import { getReadableChapters } from "@/content/get-bible";
import { getBookIndex } from "@/content/get-book-index";
import { getReaderChapter } from "@/content/get-reader-chapter";
import type { ChapterRef } from "@/content/model/bible";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ReaderStream } from "@/features/reader/reader-stream";
import { RedNoticeScript } from "@/features/reader/red-notice-script";
import { ReaderFormatScript } from "@/features/reader/reader-format-script";
import { ReaderSizeScript } from "@/features/reader/reader-size-script";
import { ReaderTextScript } from "@/features/reader/reader-text-script";
import { ReaderStrip } from "@/features/reader/reader-strip";
import { VerseArrival } from "@/features/reader/verse-arrival";
import { TreeToggle } from "@/features/shell/tree-toggle";
import { currentLocale } from "@/lib/current-locale";
import { locales, type Locale } from "@/lib/locale";

export async function generateStaticParams() {
  const perLocale = await Promise.all(
    locales.map(async (lang) => ({ lang, chapters: await getReadableChapters(lang) })),
  );
  return perLocale.flatMap(({ lang, chapters }) =>
    chapters.map(({ book, chapter }) => ({
      lang,
      book: bookSlug(lang, getBibleBook(book)!),
      chapter: String(chapter),
    })),
  );
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
  const hrefOf = (other: ChapterRef | null) => {
    const otherBook = other ? getBibleBook(other.book) : null;
    return other && otherBook ? bibleChapterHref(locale, otherBook, other.chapter) : undefined;
  };
  return {
    title: loaded
      ? text.reader.chapterTitle
          .replace("{book}", loaded.book.names[locale])
          .replace("{chapter}", String(loaded.chapter))
      : text.site.title,
    ...(loaded ? { pagination: { previous: hrefOf(loaded.previous) ?? null, next: hrefOf(loaded.next) ?? null } } : {}),
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
  const books = await getBookIndex(locale);
  const stepOf = (target: { label: string; title: string; href: string } | null) =>
    target
      ? {
          label: target.label,
          href: target.href,
          ariaLabel: labels.stepAria.replace("{label}", target.label).replace("{title}", target.title),
        }
      : null;
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
    <PageMain wideGutter>
      <ReaderSizeScript />
      <ReaderTextScript />
      <ReaderFormatScript />
      <RedNoticeScript />
      <ReaderStrip
        treeToggle={<TreeToggle label={labels.treeToggle} />}
        parallelText={{
          label: labels.parallel.label,
          mode: labels.parallel.mode,
          none: labels.parallel.none,
          below: labels.parallel.below,
          side: labels.parallel.side,
          sideNote: labels.parallel.sideNote,
          list: labels.parallel.list,
        }}
        textText={{
          mark: labels.textOptions.mark,
          label: labels.textOptions.label,
          size: labels.size,
          settings: labels.textOptions.settings,
          formatGroup: labels.textOptions.formatGroup,
          formats: { lines: labels.textOptions.lines, flow: labels.textOptions.flow },
          locked: labels.parallel.locked,
        }}
        pickerText={labels.picker}
        options={views.map(({ id, abbreviation, displayName, language }) => ({
          id,
          abbreviation,
          displayName,
          language,
        }))}
        defaultId={defaultId}
        yourNotes={{ label: labels.yourNotes.button, book: book.id, chapter }}
        bookPicker={{
          text: {
            ...labels.bookPicker,
            chapterOf: text.shell.chapterOf,
            sections: {
              old: text.shell.tree.ot,
              deuterocanon: text.shell.tree.deutero,
              new: text.shell.tree.nt,
            },
          },
          books,
          title: titleOf(book.names[locale], chapter),
          chapterTitle: labels.chapterTitle,
        }}
        neighbors={{
          previous: stepOf(neighbor(labels.previous, loaded.previous)),
          next: stepOf(neighbor(labels.next, loaded.next)),
          previousLabel: labels.previous,
          nextLabel: labels.next,
          stepAria: labels.stepAria,
        }}
      />
      <div className="reader-column mx-auto max-w-reader has-data-[second=side]:max-w-wide">
        <ReaderStream
          key={`${book.id}/${chapter}`}
          initial={loaded}
          chapterTitle={labels.chapterTitle}
          deuteroNotice={labels.deuteroNotice}
          numberingNote={labels.numberingNote}
          firstCrumbs={
            <>
              {/* TODO: «Biblia» and the testament lead to their index pages once those exist */}
              <Breadcrumbs
                label={text.shell.breadcrumb}
                trail={[{ label: text.shell.tree.bible }, { label: sectionLabel }]}
                current={book.names[locale]}
              />
            </>
          }
          firstHeader={<PageHeader id="top" size="reader" title={titleOf(book.names[locale], chapter)} />}
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
            read: labels.read,
            redNotice: labels.redNotice,
            columnHeads: {
              first: labels.picker.label,
              second: labels.parallel.label,
              spanish: labels.picker.spanish,
              english: labels.picker.english,
            },
          }}
        />
        <VerseArrival />
      </div>
    </PageMain>
  );
}
