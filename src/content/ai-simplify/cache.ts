import type { ResolvedParagraph } from "@/content/ai-simplify/resolve-address";
import { getAiStore } from "@/content/ai-store/get-ai-store";
import type { SimplificationRow } from "@/content/ai-store/types";
import type { SimplifyAddress, SimplifyResponse } from "@/lib/ai/contracts";
import { simplificationCacheKey } from "@/lib/ai/cache-keys";

export type CacheLookup = { row: SimplificationRow | null; rejections: number };

export function outputLanguage(resolved: ResolvedParagraph): "es" | "en" {
  return resolved.sourceLang;
}

export function simplificationKey(address: SimplifyAddress, resolved: ResolvedParagraph): string {
  return simplificationCacheKey({
    text: resolved.text,
    address,
    sourceLang: resolved.sourceLang,
    outputLang: outputLanguage(resolved),
  });
}

function rejectionsOf(row: SimplificationRow): number {
  const previous = row.checks.rejections;
  return (typeof previous === "number" ? previous : 0) + (row.status === "rejected" ? 1 : 0);
}

export function generatesLive(address: SimplifyAddress): boolean {
  return address.kind === "father";
}

function servable(address: SimplifyAddress, row: SimplificationRow): boolean {
  if (row.status === "rejected") return false;
  return generatesLive(address) || row.status === "reviewed";
}

export async function readSimplification(cacheKey: string, address: SimplifyAddress): Promise<CacheLookup> {
  const row = await getAiStore().getSimplification(cacheKey);
  if (!row) return { row: null, rejections: 0 };
  return { row: servable(address, row) ? row : null, rejections: rejectionsOf(row) };
}

export async function hasStoredSimplification(cacheKey: string): Promise<boolean> {
  const row = await getAiStore().getSimplification(cacheKey);
  return row !== null && row.status !== "rejected";
}

export async function writeSimplification(row: SimplificationRow): Promise<void> {
  await getAiStore().putSimplification(row);
}

export async function countSimplificationHit(cacheKey: string): Promise<void> {
  await getAiStore().countSimplificationHit(cacheKey);
}

export function toSimplifyResponse(row: SimplificationRow, cached: boolean): SimplifyResponse {
  return {
    lang: row.outputLang,
    original: row.original,
    clear: row.clear,
    very: row.very,
    status: row.status === "reviewed" ? "reviewed" : "generated",
    cached,
  };
}
