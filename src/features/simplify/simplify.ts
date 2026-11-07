import {
  countSimplificationHit,
  outputLanguage,
  readSimplification,
  simplificationKey,
  toSimplifyResponse,
  writeSimplification,
  type CacheLookup,
} from "@/content/ai-simplify/cache";
import { resolveAddress, type ResolvedParagraph } from "@/content/ai-simplify/resolve-address";
import { seedFixture } from "@/content/ai-simplify/seed-fixtures";
import { guardRequest, settleTicket, type GuardTicket } from "@/content/ai-guard/guard";
import { getAiStore } from "@/content/ai-store/get-ai-store";
import type { AiRequestLog, SimplificationRow } from "@/content/ai-store/types";
import { checkSimplification, type CheckReport, type SimplifiedLevels } from "@/features/simplify/checks";
import { simplifyMaxTokens, simplifySystemPrompt, simplifyUserMessage } from "@/features/simplify/prompt";
import { replayKey, sha256 } from "@/lib/ai/cache-keys";
import {
  ESTIMATE_MICROS,
  SIMPLIFY_PROMPT_VERSION,
  simplificationSchema,
  toProviderSchema,
  type SimplifyRequest,
  type SimplifyResponse,
} from "@/lib/ai/contracts";
import { AiError, type AiErrorCode, type AiOutcome } from "@/lib/ai/errors";
import { getAiProvider, type AiCallResult, type AiProvider, type AiUsage } from "@/lib/ai/provider";
import { splitSentences } from "@/lib/ai/sentences";

export type SimplifyOutcome = { body: SimplifyResponse | null; error: AiErrorCode | null; setCookie: string | null };

export type Generation = {
  original: string[];
  levels: SimplifiedLevels;
  report: CheckReport;
  attempts: number;
  usage: AiUsage;
  costMicros: number;
  latencyMs: number;
  model: string;
};

const CALL_TIMEOUT_MS = 25_000;
const MAX_REJECTIONS = 2;
const providerSchema = toProviderSchema(simplificationSchema);
const EMPTY_USAGE: AiUsage = { inputTokens: 0, cachedInputTokens: 0, cacheWriteTokens: 0, outputTokens: 0 };

export class SimplifyFailure extends AiError {
  readonly spent: Omit<Generation, "levels" | "original"> | null;

  constructor(code: AiErrorCode, spent: Omit<Generation, "levels" | "original"> | null) {
    super(code);
    this.spent = spent;
  }
}

function addUsage(total: AiUsage, usage: AiUsage): AiUsage {
  return {
    inputTokens: total.inputTokens + usage.inputTokens,
    cachedInputTokens: total.cachedInputTokens + usage.cachedInputTokens,
    cacheWriteTokens: total.cacheWriteTokens + usage.cacheWriteTokens,
    outputTokens: total.outputTokens + usage.outputTokens,
  };
}

export async function generateSimplification(
  provider: AiProvider,
  resolved: ResolvedParagraph,
  options: { allowIdentity: boolean; signal?: AbortSignal },
): Promise<Generation> {
  const outputLang = outputLanguage(resolved);
  const original = splitSentences(resolved.text);
  const system = simplifySystemPrompt(outputLang);
  const signal = options.signal ?? AbortSignal.timeout(CALL_TIMEOUT_MS);
  let failures: string[] = [];
  let usage = EMPTY_USAGE;
  let costMicros = 0;
  let latencyMs = 0;
  let model = "";
  let report: CheckReport | null = null;
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    const user = simplifyUserMessage({ sentences: original, speaker: resolved.speaker, outputLang, failures });
    let maxTokens = simplifyMaxTokens(resolved.text);
    let result: AiCallResult | null = null;
    for (let call = 0; call < 2; call += 1) {
      const input = {
        role: "simplify" as const,
        system,
        user,
        schemaName: "simplification",
        schema: providerSchema,
        maxTokens,
        cacheSystem: true,
        signal,
      };
      try {
        result = await provider.call({ ...input, replayKey: replayKey(input) });
      } catch (error) {
        const code = error instanceof AiError ? error.code : "ai_provider_down";
        throw new SimplifyFailure(code, {
          report: report ?? emptyReport(),
          attempts: attempt,
          usage,
          costMicros,
          latencyMs,
          model,
        });
      }
      usage = addUsage(usage, result.usage);
      costMicros += result.costMicros;
      latencyMs += result.latencyMs;
      model = result.model;
      if (result.stopReason !== "max_tokens") break;
      maxTokens = Math.ceil(maxTokens * 1.5);
    }
    if (result?.stopReason === "refusal")
      throw new SimplifyFailure("ai_refused", {
        report: report ?? emptyReport(),
        attempts: attempt,
        usage,
        costMicros,
        latencyMs,
        model,
      });
    const parsed = simplificationSchema.safeParse(result?.json);
    report = parsed.success
      ? checkSimplification(original, parsed.data, { allowIdentity: options.allowIdentity })
      : { ...emptyReport(), failures: ['shape: the answer must be JSON with "clear" and "very" arrays of strings'] };
    if (parsed.success && report.passed)
      return { original, levels: parsed.data, report, attempts: attempt, usage, costMicros, latencyMs, model };
    failures = report.failures;
  }
  throw new SimplifyFailure("ai_simplify_failed", {
    report: report ?? emptyReport(),
    attempts: 2,
    usage,
    costMicros,
    latencyMs,
    model,
  });
}

function emptyReport(): CheckReport {
  return {
    passed: false,
    failures: [],
    results: {
      shape: false,
      length: false,
      numbers: false,
      quotes: false,
      names: false,
      scripts: false,
      claims: false,
    },
  };
}

function checksOf(report: CheckReport, attempts: number): Record<string, unknown> {
  return { ...report.results, failures: report.failures, attempts };
}

async function logRequest(
  row: Omit<AiRequestLog, "route" | "intent" | "doctrines" | "quotesTotal" | "quotesFailed" | "answerId" | "question">,
): Promise<void> {
  try {
    await getAiStore().logRequest({
      route: "simplify",
      intent: null,
      doctrines: null,
      quotesTotal: null,
      quotesFailed: null,
      answerId: null,
      question: null,
      ...row,
    });
  } catch {
    console.error("[ai] simplify request log failed");
  }
}

type Found = { resolved: ResolvedParagraph; cacheKey: string; provider: AiProvider | null; cached: CacheLookup };

async function find(input: SimplifyRequest): Promise<Found> {
  const resolved = await resolveAddress(input.address, input.locale);
  if (!resolved.simplifiable) throw new AiError("ai_not_simplifiable");
  const cacheKey = simplificationKey(input.address, resolved);
  const provider = getAiProvider();
  await seedFixture(provider, input.address, resolved, cacheKey);
  return { resolved, cacheKey, provider, cached: await readSimplification(cacheKey) };
}

function codeOf(error: unknown): AiErrorCode {
  if (error instanceof AiError) return error.code;
  console.error("[ai] simplify failed with an unexpected error");
  return "ai_misconfigured";
}

async function serveHit(
  request: Request,
  input: SimplifyRequest,
  found: Found,
  row: SimplificationRow,
): Promise<SimplifyOutcome> {
  const ticket = await guardRequest(request, "cached", 0);
  try {
    await countSimplificationHit(found.cacheKey);
    await logRequest({
      locale: input.locale,
      outcome: "cache_hit",
      promptVersion: row.promptVersion,
      models: { simplify: row.model },
      usage: null,
      costMicros: 0,
      latencyMs: null,
      repaired: null,
      cacheHit: true,
      checks: null,
    });
    return { body: toSimplifyResponse(row, true), error: null, setCookie: ticket.setCookie };
  } finally {
    await settleTicket(ticket, 0);
  }
}

async function generate(request: Request, input: SimplifyRequest, found: Found): Promise<SimplifyOutcome> {
  if (found.cached.rejections >= MAX_REJECTIONS) throw new AiError("ai_not_simplifiable");
  const ticket: GuardTicket = await guardRequest(request, "simplify", ESTIMATE_MICROS.simplify);
  const provider = found.provider;
  let spentMicros = 0;
  try {
    if (!provider) throw new AiError("ai_disabled");
    const generation = await generateSimplification(provider, found.resolved, {
      allowIdentity: provider.id === "fake",
    });
    spentMicros = generation.costMicros;
    const row: SimplificationRow = {
      cacheKey: found.cacheKey,
      address: input.address,
      textSha256: sha256(found.resolved.text.normalize("NFC")),
      sourceLang: found.resolved.sourceLang,
      outputLang: outputLanguage(found.resolved),
      model: generation.model,
      promptVersion: SIMPLIFY_PROMPT_VERSION,
      original: generation.original,
      clear: generation.levels.clear,
      very: generation.levels.very,
      status: "generated",
      checks: { ...checksOf(generation.report, generation.attempts), rejections: found.cached.rejections },
      tokensIn: generation.usage.inputTokens + generation.usage.cachedInputTokens + generation.usage.cacheWriteTokens,
      tokensOut: generation.usage.outputTokens,
      costMicros: generation.costMicros,
    };
    await writeSimplification(row);
    await logRequest({
      locale: input.locale,
      outcome: "ok",
      promptVersion: SIMPLIFY_PROMPT_VERSION,
      models: { simplify: generation.model },
      usage: { simplify: generation.usage },
      costMicros: generation.costMicros,
      latencyMs: { simplify: generation.latencyMs },
      repaired: generation.attempts > 1,
      cacheHit: false,
      checks: row.checks,
    });
    return { body: toSimplifyResponse(row, false), error: null, setCookie: ticket.setCookie };
  } catch (error) {
    const code = codeOf(error);
    const spent = error instanceof SimplifyFailure ? error.spent : null;
    spentMicros = spent?.costMicros ?? spentMicros;
    await logRequest({
      locale: input.locale,
      outcome: code satisfies AiOutcome,
      promptVersion: SIMPLIFY_PROMPT_VERSION,
      models: spent?.model ? { simplify: spent.model } : null,
      usage: spent ? { simplify: spent.usage } : null,
      costMicros: spentMicros,
      latencyMs: spent ? { simplify: spent.latencyMs } : null,
      repaired: spent ? spent.attempts > 1 : null,
      cacheHit: false,
      checks: spent ? checksOf(spent.report, spent.attempts) : null,
    });
    return { body: null, error: code, setCookie: ticket.setCookie };
  } finally {
    await settleTicket(ticket, spentMicros);
  }
}

export async function simplifyParagraph(request: Request, input: SimplifyRequest): Promise<SimplifyOutcome> {
  try {
    const found = await find(input);
    if (found.cached.row) return await serveHit(request, input, found, found.cached.row);
    return await generate(request, input, found);
  } catch (error) {
    return { body: null, error: codeOf(error), setCookie: null };
  }
}

export async function cachedSimplification(request: Request, input: SimplifyRequest): Promise<SimplifyOutcome> {
  let ticket: GuardTicket | null = null;
  try {
    ticket = await guardRequest(request, "cached", 0);
    const found = await find(input).catch((error: unknown) => {
      if (error instanceof AiError && (error.code === "ai_not_found" || error.code === "ai_not_simplifiable"))
        return null;
      throw error;
    });
    const row = found?.cached.row ?? null;
    return { body: row ? toSimplifyResponse(row, true) : null, error: null, setCookie: ticket.setCookie };
  } catch (error) {
    return { body: null, error: codeOf(error), setCookie: ticket?.setCookie ?? null };
  } finally {
    if (ticket) await settleTicket(ticket, 0);
  }
}
