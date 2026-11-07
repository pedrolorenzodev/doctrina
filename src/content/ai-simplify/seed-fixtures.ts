import { outputLanguage } from "@/content/ai-simplify/cache";
import type { ResolvedParagraph } from "@/content/ai-simplify/resolve-address";
import { getAiStore } from "@/content/ai-store/get-ai-store";
import { getMemoryStore, seedSimplifications } from "@/content/ai-store/memory-store";
import { getSimplifiedText } from "@/content/simplified-texts";
import { addressId, SIMPLIFY_PROMPT_VERSION, type SimplifyAddress } from "@/lib/ai/contracts";
import { sha256 } from "@/lib/ai/cache-keys";
import type { AiProvider } from "@/lib/ai/provider";

const flat = (text: string) => text.replace(/\s+/g, " ").trim();

export async function seedFixture(
  provider: AiProvider | null,
  address: SimplifyAddress,
  resolved: ResolvedParagraph,
  cacheKey: string,
): Promise<boolean> {
  if (provider?.id !== "fake" || getAiStore() !== getMemoryStore()) return false;
  const store = getMemoryStore();
  if (store.simplifications.has(cacheKey)) return false;
  const entry = getSimplifiedText(addressId(address));
  if (!entry || entry.lang !== outputLanguage(resolved)) return false;
  if (!resolved.text.startsWith(flat(entry.original.join(" ")))) return false;
  seedSimplifications([
    {
      cacheKey,
      address,
      textSha256: sha256(resolved.text.normalize("NFC")),
      sourceLang: resolved.sourceLang,
      outputLang: entry.lang,
      model: "fixture",
      promptVersion: SIMPLIFY_PROMPT_VERSION,
      original: entry.original,
      clear: entry.clear,
      very: entry.very,
      status: "reviewed",
      checks: { seeded: true },
      tokensIn: 0,
      tokensOut: 0,
      costMicros: 0,
    },
  ]);
  return true;
}
