import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NeighborLinks } from "@/components/neighbor-links";
import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import { getBibleBook } from "@/content/bible-books";
import { bibleChapterHref, bookFromSlug, bookSlug } from "@/content/bible-routes";
import { defaultTranslationId } from "@/content/bible/default-translation";
import { getBibleChapter, getReadableChapters } from "@/content/get-bible";
import type { ChapterRef } from "@/content/model/bible";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ChapterFoot } from "@/features/reader/chapter-foot";
import { ChapterText } from "@/features/reader/chapter-text";
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
  if (!book || !Number.isInteger(number) || locale !== "es") return null;
  const chapter = await getBibleChapter(defaultTranslationId(locale, book), book.id, number);
  return chapter ? { book, chapter } : null;
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
          .replace("{chapter}", String(loaded.chapter.chapter))
      : text.site.title,
  };
}

export default async function ChapterRoute({ params }: PageProps<"/[lang]/bible/[book]/[chapter]">) {
  const { book: bookParam, chapter: chapterParam } = await params;
  const locale = await currentLocale();
  const loaded = await loadChapter(locale, bookParam, chapterParam);
  if (!loaded) notFound();
  const { book, chapter } = loaded;
  const text = getUiText(locale);
  const labels = text.reader;
  const sectionLabel = text.shell.tree[book.section === "old" ? "ot" : book.section === "new" ? "nt" : "deutero"];
  const titleOf = (name: string, number: number) =>
    labels.chapterTitle.replace("{book}", name).replace("{chapter}", String(number));
  const licences: Record<string, string> = labels.licences;
  const licence = licences[chapter.translation.id];
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
      {/* TODO: «Biblia» and the testament lead to their index pages once those exist */}
      <Breadcrumbs
        label={text.shell.breadcrumb}
        trail={[{ label: text.shell.tree.bible }, { label: sectionLabel }]}
        current={book.names[locale]}
      />
      <PageHeader id="top" className="mt-9" size="reader" title={titleOf(book.names[locale], chapter.chapter)} />
      <p className="title-part title-part-2 mt-2.5 mb-0 text-reader-note text-ink-3">{chapter.translation.name}</p>
      {book.section === "deuterocanon" && locale === "es" ? (
        <p className="title-part title-part-3 mt-5.5 mb-0 max-w-140 text-reader-note text-ink-3">
          {labels.deuteroNotice}
        </p>
      ) : null}
      <ChapterText verses={chapter.verses} lang={chapter.translation.language} />
      <ChapterFoot
        title={labels.foot.title}
        edition={chapter.translation.name}
        licence={licence ? labels.foot.licence.replace("{licence}", licence) : null}
      />
      <NeighborLinks
        label={labels.neighborsLabel}
        className="mt-16"
        previous={neighbor(labels.previous, chapter.previous)}
        next={neighbor(labels.next, chapter.next)}
      />
    </PageMain>
  );
}
