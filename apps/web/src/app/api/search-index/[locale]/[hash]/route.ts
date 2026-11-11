import { getSearchIndexAsset } from "@/content/search-index-asset";
import { locales } from "@doctrina/core/locale";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return Promise.all(locales.map(async (locale) => ({ locale, hash: (await getSearchIndexAsset(locale)).hash })));
}

export async function GET(_request: Request, { params }: RouteContext<"/api/search-index/[locale]/[hash]">) {
  const { locale } = await params;
  const known = locales.find((candidate) => candidate === locale);
  if (!known) return new Response(null, { status: 404 });
  const { json } = await getSearchIndexAsset(known);
  return new Response(json, {
    headers: { "content-type": "application/json", "cache-control": "public, max-age=31536000, immutable" },
  });
}
