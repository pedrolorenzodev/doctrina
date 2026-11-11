import { getPassageApologists, getPassageCore } from "@/content/get-passages";
import { shownScripture } from "@/content/shown-passages";
import { getPublishedPages, getTraditionPage } from "@/content/get-tradition-page";
import { doctrineIds, traditionIds, type DoctrineId, type TraditionId } from "@/content/model/ids";
import { isLocale } from "@/lib/locale";
import { leanBuild } from "@/lib/lean-build";

type PassageDataContext = {
  params: Promise<{ lang: string; doctrine: string; tradition: string; n: string; part: string }>;
};

export async function generateStaticParams() {
  if (leanBuild) return [];
  const out: { lang: string; doctrine: string; tradition: string; n: string; part: string }[] = [];
  for (const { doctrine, tradition } of getPublishedPages("es").filter((page) => page.hasPassages)) {
    const page = await getTraditionPage(doctrine, tradition, "es");
    shownScripture(page ?? { scripture: [] }).forEach((_passage, index) => {
      const base = { lang: "es", doctrine, tradition, n: String(index + 1) };
      out.push({ ...base, part: "core" }, { ...base, part: "apologists" });
    });
  }
  return out;
}

export async function GET(_request: Request, { params }: PassageDataContext) {
  const { lang, doctrine, tradition, n, part } = await params;
  if (
    !isLocale(lang) ||
    !(doctrineIds as readonly string[]).includes(doctrine) ||
    !(traditionIds as readonly string[]).includes(tradition) ||
    !/^\d+$/.test(n)
  )
    return new Response(null, { status: 404 });
  const page = await getTraditionPage(doctrine as DoctrineId, tradition as TraditionId, lang);
  const index = Number(n) - 1;
  if (!page?.passages) return new Response(null, { status: 404 });
  const body =
    part === "core"
      ? await getPassageCore(page, index, lang)
      : part === "apologists"
        ? getPassageApologists(page, index)
        : null;
  if (!body) return new Response(null, { status: 404 });
  return Response.json(body);
}
