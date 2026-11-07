import type { z } from "zod";
import {
  modelAnswerSchema,
  toProviderSchema,
  type AskRequest,
  type ModelAnswer,
  type SearchPlan,
} from "@/lib/ai/contracts";
import { replayKey } from "@/lib/ai/cache-keys";
import { AiError } from "@/lib/ai/errors";
import type { AiCallInput, AiProvider, AiUsage } from "@/lib/ai/provider";
import type { PackPassage } from "@/content/ai-search/types";
import { SECOND_READING, answerSystem } from "@/features/ask/prompts";

export type Meter = {
  costMicros: number;
  usage: Record<string, AiUsage>;
  latencyMs: Record<string, number>;
  models: Record<string, string>;
};

export const newMeter = (): Meter => ({ costMicros: 0, usage: {}, latencyMs: {}, models: {} });

export const ANSWER_MAX_TOKENS = { rich: 8000, brief: 2500 } as const;
const ANSWER_TIMEOUT_MS = 40_000;
const answerProviderSchema = toProviderSchema(modelAnswerSchema);

function addUsage(meter: Meter, label: string, usage: AiUsage): void {
  const before = meter.usage[label];
  meter.usage[label] = before
    ? {
        inputTokens: before.inputTokens + usage.inputTokens,
        cachedInputTokens: before.cachedInputTokens + usage.cachedInputTokens,
        cacheWriteTokens: before.cacheWriteTokens + usage.cacheWriteTokens,
        outputTokens: before.outputTokens + usage.outputTokens,
      }
    : usage;
}

export async function callModel<T>(
  provider: AiProvider,
  meter: Meter,
  label: string,
  input: Omit<AiCallInput, "signal" | "replayKey">,
  schema: z.ZodType<T>,
  timeoutMs: number,
): Promise<T> {
  let maxTokens = input.maxTokens;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const signal = AbortSignal.timeout(timeoutMs);
    const started = Date.now();
    let result;
    try {
      result = await provider.call({ ...input, maxTokens, signal, replayKey: replayKey(input) });
    } catch (error) {
      if (signal.aborted) throw new AiError("ai_timeout");
      throw error instanceof AiError ? error : new AiError("ai_provider_down");
    } finally {
      meter.latencyMs[label] = (meter.latencyMs[label] ?? 0) + (Date.now() - started);
    }
    meter.costMicros += result.costMicros;
    meter.models[input.role] = result.model;
    addUsage(meter, label, result.usage);
    if (result.stopReason === "refusal") throw new AiError("ai_refused");
    if (result.stopReason === "max_tokens" && attempt === 0) {
      maxTokens = Math.ceil(maxTokens * 1.5);
      continue;
    }
    if (result.stopReason !== "end") throw new AiError("ai_provider_down");
    const parsed = schema.safeParse(result.json);
    if (!parsed.success) throw new AiError("ai_provider_down");
    return parsed.data;
  }
  throw new AiError("ai_provider_down");
}

const escapeAttribute = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const safeBody = (text: string) => text.replace(/<\/?passage/gi, (found) => found.replace("<", "< "));

function attributesOf(passage: PackPassage): Record<string, string | number | null> {
  if (passage.collection === "mine") {
    return { id: passage.id, collection: "mine", source: "reader-note", ref: passage.locatorLabel };
  }
  return {
    id: passage.id,
    collection: passage.collection,
    speaker: passage.collection === "tradition" || passage.collection === "glossary" ? passage.speaker : null,
    who: passage.who,
    work: passage.title,
    locator: passage.locatorLabel,
    date: passage.year,
    edition: passage.editionLabel,
    lang: passage.lang,
    licence: passage.licence,
    maxQuoteWords: passage.maxQuoteWords,
  };
}

export function formatPassage(passage: PackPassage): string {
  const attributes = Object.entries(attributesOf(passage))
    .filter(([, value]) => value !== null && value !== "")
    .map(([name, value]) => `${name}="${escapeAttribute(String(value))}"`)
    .join(" ");
  return `<passage ${attributes}>\n${safeBody(passage.window)}\n</passage>`;
}

export function answerUser(request: AskRequest, plan: SearchPlan, passages: PackPassage[]): string {
  const previous = request.history.at(-1)?.question;
  return [
    `intent: ${plan.intent}`,
    `depth: ${plan.depth}`,
    `answerLanguage: ${plan.answerLanguage}`,
    `question: ${request.question}`,
    `passagesInPack: ${passages.filter((passage) => passage.collection !== "mine").length}`,
    ...(previous ? [`previousQuestion: ${previous}`] : []),
    "",
    ...passages.map(formatPassage),
  ].join("\n");
}

function answerInput(plan: SearchPlan, user: string): Omit<AiCallInput, "signal" | "replayKey"> {
  return {
    role: "answer",
    system: answerSystem(plan.answerLanguage),
    user,
    schemaName: "model_answer",
    schema: answerProviderSchema,
    maxTokens: ANSWER_MAX_TOKENS[plan.depth],
    cacheSystem: true,
  };
}

export function runAnswer(
  provider: AiProvider,
  meter: Meter,
  request: AskRequest,
  plan: SearchPlan,
  passages: PackPassage[],
): Promise<ModelAnswer> {
  const input = answerInput(plan, answerUser(request, plan, passages));
  return callModel(provider, meter, "answer", input, modelAnswerSchema, ANSWER_TIMEOUT_MS);
}

export function runSecondReading(
  provider: AiProvider,
  meter: Meter,
  request: AskRequest,
  plan: SearchPlan,
  passages: PackPassage[],
): Promise<ModelAnswer> {
  const sources = passages.filter((passage) => passage.collection !== "mine").length;
  const user = [answerUser(request, plan, passages), "", SECOND_READING.replace("{n}", String(sources))].join("\n");
  return callModel(provider, meter, "reread", answerInput(plan, user), modelAnswerSchema, ANSWER_TIMEOUT_MS);
}
