import "server-only";
import { createHash } from "node:crypto";
import { getSearchIndex } from "@/content/get-search-index";
import type { Locale } from "@/lib/locale";

export type SearchIndexAsset = { json: string; hash: string; url: string };

const assets = new Map<Locale, Promise<SearchIndexAsset>>();

async function buildAsset(locale: Locale): Promise<SearchIndexAsset> {
  const json = JSON.stringify(await getSearchIndex(locale));
  const hash = createHash("sha256").update(json).digest("hex").slice(0, 12);
  return { json, hash, url: `/api/search-index/${locale}/${hash}` };
}

export function getSearchIndexAsset(locale: Locale): Promise<SearchIndexAsset> {
  let pending = assets.get(locale);
  if (!pending) {
    pending = buildAsset(locale);
    assets.set(locale, pending);
  }
  return pending;
}
