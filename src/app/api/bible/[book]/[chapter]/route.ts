import { getBibleBook } from "@/content/bible-books";
import { getReadableChapters } from "@/content/get-bible";
import { getReaderChapter } from "@/content/get-reader-chapter";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const chapters = await getReadableChapters("es");
  return chapters.map(({ book, chapter }) => ({ book, chapter: String(chapter) }));
}

export async function GET(_request: Request, { params }: RouteContext<"/api/bible/[book]/[chapter]">) {
  const { book, chapter } = await params;
  const number = Number(chapter);
  if (!getBibleBook(book) || !Number.isInteger(number)) return new Response(null, { status: 404 });
  const loaded = await getReaderChapter("es", book, number);
  if (!loaded) return new Response(null, { status: 404 });
  return Response.json(loaded);
}
