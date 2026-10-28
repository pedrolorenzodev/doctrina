import { getBibleBook } from "@/content/bible-books";
import { getReadableChapters } from "@/content/get-bible";
import { getReaderChapter } from "@/content/get-reader-chapter";
import { locales } from "@/lib/locale";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const perLocale = await Promise.all(
    locales.map(async (locale) => ({ locale, chapters: await getReadableChapters(locale) })),
  );
  return perLocale.flatMap(({ locale, chapters }) =>
    chapters.map(({ book, chapter }) => ({ locale, book, chapter: String(chapter) })),
  );
}

export async function GET(_request: Request, { params }: RouteContext<"/api/bible/[locale]/[book]/[chapter]">) {
  const { locale, book, chapter } = await params;
  const number = Number(chapter);
  const known = locales.find((candidate) => candidate === locale);
  if (!known || !getBibleBook(book) || !Number.isInteger(number)) return new Response(null, { status: 404 });
  const loaded = await getReaderChapter(known, book, number);
  if (!loaded) return new Response(null, { status: 404 });
  return Response.json(loaded);
}
