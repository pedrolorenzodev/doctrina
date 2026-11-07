import { ANSWER_PROMPT_VERSION, type WireAnswer } from "@/lib/ai/contracts";
import { getAiStore } from "@/content/ai-store/get-ai-store";
import type { PackPassage } from "@/content/ai-search/types";

export async function readCachedAnswer(cacheKey: string): Promise<WireAnswer | null> {
  const store = getAiStore();
  const stored = await store.getAnswerByKey(cacheKey);
  if (!stored || stored.promptVersion !== ANSWER_PROMPT_VERSION) return null;
  await store.countAnswerHit(stored.answerId).catch(() => undefined);
  return { ...stored.answer, answerId: stored.answerId, cached: true };
}

export async function saveAnswer(input: {
  cacheKey: string | null;
  locale: "es" | "en";
  models: Record<string, string>;
  corpusVersion: string;
  answer: WireAnswer;
  extra: PackPassage[];
}): Promise<string> {
  return getAiStore().putAnswer({
    cacheKey: input.cacheKey,
    locale: input.locale,
    promptVersion: ANSWER_PROMPT_VERSION,
    models: input.models,
    corpusVersion: input.corpusVersion,
    answer: input.answer,
    pack: input.extra.length > 0 ? { extra: input.extra } : null,
  });
}
