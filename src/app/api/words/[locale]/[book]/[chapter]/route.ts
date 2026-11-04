import { getChapterWordView } from "@/content/get-chapter-word-view";
import { getWordChapters } from "@/content/get-words";
import { locales } from "@/lib/locale";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const chapters = await getWordChapters();
  return locales.flatMap((locale) => chapters.map(({ book, chapter }) => ({ locale, book, chapter: String(chapter) })));
}

export async function GET(_request: Request, { params }: RouteContext<"/api/words/[locale]/[book]/[chapter]">) {
  const { locale, book, chapter } = await params;
  const number = Number(chapter);
  const known = locales.find((candidate) => candidate === locale);
  if (!known || !Number.isInteger(number)) return new Response(null, { status: 404 });
  const view = await getChapterWordView(known, book, number);
  if (!view) return new Response(null, { status: 404 });
  return Response.json(view);
}
