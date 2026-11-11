import type { ResolvedParagraph } from "@/content/ai-simplify/resolve-address";
import { getAiStore } from "@/content/ai-store/get-ai-store";
import type { SimplificationRow } from "@/content/ai-store/types";
import type { SimplifyAddress, SimplifyResponse } from "@/lib/ai/contracts";
import { generatesLive, sourceTextSha256 } from "@/content/ai-simplify/served";
import { simplificationCacheKey } from "@/lib/ai/cache-keys";

export { generatesLive, sourceTextSha256 };

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

export function isAiChecked(row: SimplificationRow): boolean {
  const fidelity = row.checks.fidelity;
  return (
    row.status === "generated" &&
    typeof fidelity === "object" &&
    fidelity !== null &&
    (fidelity as { passed?: unknown }).passed === true
  );
}

export function isServable(address: SimplifyAddress, row: SimplificationRow, text: string): boolean {
  if (row.status === "rejected") return false;
  if (generatesLive(address)) return true;
  if (row.textSha256 !== sourceTextSha256(text)) return false;
  return row.status === "reviewed" || isAiChecked(row);
}

export async function readSimplification(
  cacheKey: string,
  address: SimplifyAddress,
  text: string,
): Promise<CacheLookup> {
  const row = await getAiStore().getSimplification(cacheKey);
  if (!row) return { row: null, rejections: 0 };
  return { row: isServable(address, row, text) ? row : null, rejections: rejectionsOf(row) };
}

export async function readStoredSimplification(cacheKey: string): Promise<SimplificationRow | null> {
  return getAiStore().getSimplification(cacheKey);
}

export async function writeSimplification(row: SimplificationRow): Promise<void> {
  await getAiStore().putSimplification(row);
}

export async function countSimplificationHit(cacheKey: string): Promise<void> {
  await getAiStore().countSimplificationHit(cacheKey);
}

export function isClearOnly(row: SimplificationRow): boolean {
  const levels = row.checks.levels;
  return Array.isArray(levels) && levels.length === 1 && levels[0] === "clear";
}

export function toSimplifyResponse(row: SimplificationRow, cached: boolean): SimplifyResponse {
  const single = isClearOnly(row) || !generatesLive(row.address);
  return {
    lang: row.outputLang,
    original: row.original,
    clear: row.clear,
    very: row.very,
    status: row.status === "reviewed" ? "reviewed" : "generated",
    cached,
    ...(single ? { levels: ["clear"] as ["clear"] } : {}),
  };
}
