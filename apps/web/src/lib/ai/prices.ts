import { AiError } from "@/lib/ai/errors";
import type { AiUsage } from "@/lib/ai/provider";

export type Price = {
  inputPerMTok: number;
  cachedPerMTok: number;
  cacheWritePerMTok: number;
  outputPerMTok: number;
};

const PRICES: Record<string, Price> = {
  "claude-haiku-5-5": { inputPerMTok: 0.1, cachedPerMTok: 0.01, cacheWritePerMTok: 0.125, outputPerMTok: 0.5 },
  "claude-sonnet-5-5": { inputPerMTok: 2, cachedPerMTok: 0.1, cacheWritePerMTok: 2.5, outputPerMTok: 10 },
  "claude-opus-5-5": { inputPerMTok: 4, cachedPerMTok: 0.2, cacheWritePerMTok: 5, outputPerMTok: 20 },
  fake: { inputPerMTok: 0, cachedPerMTok: 0, cacheWritePerMTok: 0, outputPerMTok: 0 },
};

const HAIKU_LONG_PROMPT: Price = {
  inputPerMTok: 0.5,
  cachedPerMTok: 0.05,
  cacheWritePerMTok: 0.625,
  outputPerMTok: 2.5,
};
const HAIKU_LONG_PROMPT_TOKENS = 100_000;

export function priceOf(model: string): Price | null {
  return PRICES[model] ?? null;
}

export function costMicros(model: string, usage: AiUsage): number {
  const base = priceOf(model);
  if (!base) throw new AiError("ai_misconfigured");
  const promptTokens = usage.inputTokens + usage.cachedInputTokens + usage.cacheWriteTokens;
  const price = model === "claude-haiku-5-5" && promptTokens > HAIKU_LONG_PROMPT_TOKENS ? HAIKU_LONG_PROMPT : base;
  const micros =
    usage.inputTokens * price.inputPerMTok +
    usage.cachedInputTokens * price.cachedPerMTok +
    usage.cacheWriteTokens * price.cacheWritePerMTok +
    usage.outputTokens * price.outputPerMTok;
  return Math.ceil(micros - 1e-9);
}
