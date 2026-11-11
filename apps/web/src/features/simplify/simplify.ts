import {
  countSimplificationHit,
  generatesLive,
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
import {
  checkSimplification,
  levelSeparation,
  SEPARATION_WITH_MARGIN,
  wordOverlap,
  type CheckReport,
  type SimplifiedLevels,
} from "@/features/simplify/checks";
import { judgeFidelity } from "@/features/simplify/fidelity";
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
const fidelityEnabled = () => process.env.AI_SIMPLIFY_FIDELITY === "on";
const CHUNK_WORDS = 160;
const CANDIDATES = 2;
const ROUNDS = 2;
const MAX_REJECTIONS = 2;
const providerSchema = toProviderSchema(simplificationSchema);
const EMPTY_USAGE: AiUsage = { inputTokens: 0, cachedInputTokens: 0, cacheWriteTokens: 0, outputTokens: 0 };

type Candidate = { original: string[]; levels: SimplifiedLevels };

export class SimplifyFailure extends AiError {
  readonly spent: Omit<Generation, "levels" | "original"> | null;
  readonly onlyLevels: Candidate | null;

  constructor(
    code: AiErrorCode,
    spent: Omit<Generation, "levels" | "original"> | null,
    onlyLevels: Candidate | null = null,
  ) {
    super(code);
    this.spent = spent;
    this.onlyLevels = onlyLevels;
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

export type GenerationOptions = {
  allowIdentity: boolean;
  fidelity?: boolean;
  signal?: AbortSignal;
  whole?: boolean;
  terms?: readonly string[];
  onlyClear?: boolean;
  feedback?: { failures: string[]; previous: SimplifiedLevels | null };
};

type Unit = { sentences: string[]; speaker: string; outputLang: "es" | "en" };

export function chunkSentences(sentences: string[], maxWords = CHUNK_WORDS): string[][] {
  const total = sentences.reduce((sum, sentence) => sum + wordsIn(sentence), 0);
  const parts = Math.max(1, Math.ceil(total / maxWords));
  const target = total / parts;
  const chunks: string[][] = [[]];
  let words = 0;
  for (const sentence of sentences) {
    const current = chunks[chunks.length - 1] ?? [];
    const size = wordsIn(sentence);
    if (current.length > 0 && words + size / 2 > target && chunks.length < parts) {
      chunks.push([sentence]);
      words = size;
    } else {
      current.push(sentence);
      words += size;
    }
  }
  return chunks;
}

const wordsIn = (text: string) => text.split(/\s+/).filter(Boolean).length;

export async function generateSimplification(
  provider: AiProvider,
  resolved: ResolvedParagraph,
  options: GenerationOptions,
): Promise<Generation> {
  const outputLang = outputLanguage(resolved);
  const signal = options.signal ?? AbortSignal.timeout(CALL_TIMEOUT_MS);
  const sentences = splitSentences(resolved.text);
  const chunks = options.whole ? [sentences] : chunkSentences(sentences);
  const unitOptions = { ...options, signal };
  if (chunks.length === 1)
    return generateUnit(provider, { sentences: chunks[0] ?? [], speaker: resolved.speaker, outputLang }, unitOptions);
  const settled = await Promise.allSettled(
    chunks.map((sentences) =>
      generateUnit(provider, { sentences, speaker: resolved.speaker, outputLang }, unitOptions),
    ),
  );
  const spent = settled.map((outcome) =>
    outcome.status === "fulfilled"
      ? outcome.value
      : outcome.reason instanceof SimplifyFailure
        ? outcome.reason.spent
        : null,
  );
  const merged = {
    usage: spent.reduce((total, part) => (part ? addUsage(total, part.usage) : total), EMPTY_USAGE),
    costMicros: spent.reduce((total, part) => total + (part?.costMicros ?? 0), 0),
    latencyMs: Math.max(0, ...spent.map((part) => part?.latencyMs ?? 0)),
    attempts: Math.max(1, ...spent.map((part) => part?.attempts ?? 0)),
    model: spent.find((part) => part?.model)?.model ?? "",
    report: mergeReports(spent.map((part) => part?.report ?? emptyReport())),
  };
  const parts: Candidate[] = [];
  for (const outcome of settled) {
    if (outcome.status === "fulfilled") parts.push(outcome.value);
    else if (outcome.reason instanceof SimplifyFailure && outcome.reason.onlyLevels)
      parts.push(outcome.reason.onlyLevels);
    else {
      const reason: unknown = outcome.reason;
      throw new SimplifyFailure(reason instanceof AiError ? reason.code : "ai_provider_down", merged);
    }
  }
  const whole = {
    original: parts.flatMap((part) => part.original),
    levels: { clear: parts.flatMap((part) => part.levels.clear), very: parts.flatMap((part) => part.levels.very) },
  };
  if (settled.some((outcome) => outcome.status === "rejected")) {
    const separation = levelSeparation(whole.original, whole.levels, outputLang);
    if (separation.length > 0)
      throw new SimplifyFailure("ai_simplify_failed", {
        ...merged,
        report: { ...merged.report, failures: [...merged.report.failures, ...separation] },
      });
    merged.report = { passed: true, failures: [], results: { ...merged.report.results, levels: true } };
  }
  return { ...merged, ...whole };
}

function mergeReports(reports: CheckReport[]): CheckReport {
  const results = { ...emptyReport().results };
  for (const name of Object.keys(results) as (keyof CheckReport["results"])[])
    results[name] = reports.every((report) => report.results[name]);
  return {
    passed: reports.every((report) => report.passed),
    failures: reports.flatMap((report, index) => report.failures.map((failure) => `part ${index + 1}: ${failure}`)),
    results,
  };
}

type Attempt = {
  levels: SimplifiedLevels | null;
  report: CheckReport;
  usage: AiUsage;
  costMicros: number;
  latencyMs: number;
  model: string;
  error: AiErrorCode | null;
};

async function attemptOnce(
  provider: AiProvider,
  unit: Unit,
  options: GenerationOptions,
  signal: AbortSignal,
  feedback: { failures: string[]; previous: SimplifiedLevels | null },
): Promise<Attempt> {
  const { sentences: original, speaker, outputLang } = unit;
  const attempt: Attempt = {
    levels: null,
    report: emptyReport(),
    usage: EMPTY_USAGE,
    costMicros: 0,
    latencyMs: 0,
    model: "",
    error: null,
  };
  const account = (result: AiCallResult) => {
    attempt.usage = addUsage(attempt.usage, result.usage);
    attempt.costMicros += result.costMicros;
    attempt.latencyMs += result.latencyMs;
    attempt.model = result.model;
  };
  const user = simplifyUserMessage({
    sentences: original,
    speaker,
    outputLang,
    failures: feedback.failures,
    previous: feedback.previous,
    ...(options.terms ? { terms: options.terms } : {}),
    ...(options.onlyClear ? { onlyClear: true } : {}),
  });
  let maxTokens = simplifyMaxTokens(original.join(" "));
  let result: AiCallResult | null = null;
  try {
    for (let call = 0; call < 2; call += 1) {
      const input = {
        role: "simplify" as const,
        system: simplifySystemPrompt(outputLang),
        user,
        schemaName: "simplification",
        schema: providerSchema,
        maxTokens,
        cacheSystem: true,
        signal,
      };
      result = await provider.call({ ...input, replayKey: replayKey(input) });
      account(result);
      if (result.stopReason !== "max_tokens") break;
      maxTokens = Math.ceil(maxTokens * 1.5);
    }
  } catch (error) {
    attempt.error = error instanceof AiError ? error.code : "ai_provider_down";
    return attempt;
  }
  if (result?.stopReason === "refusal") {
    attempt.error = "ai_refused";
    return attempt;
  }
  const parsed = simplificationSchema.safeParse(result?.json);
  if (!parsed.success) {
    attempt.report = {
      ...emptyReport(),
      failures: ['shape: the answer must be JSON with "clear" and "very" arrays of strings'],
    };
    return attempt;
  }
  const clear = realign(original, parsed.data.clear);
  const levels = { clear, very: options.onlyClear ? clear : realign(original, parsed.data.very) };
  attempt.levels = levels;
  attempt.report = checkSimplification(original, levels, {
    allowIdentity: options.allowIdentity,
    lang: outputLang,
    ...(options.terms ? { terms: options.terms } : {}),
    ...(options.onlyClear ? { onlyClear: true } : {}),
  });
  if (!attempt.report.passed || !options.fidelity) return attempt;
  try {
    const judged = await judgeFidelity(provider, original, levels, signal, options.onlyClear ?? false);
    account(judged.result);
    attempt.report = {
      passed: judged.failures.length === 0,
      failures: judged.failures,
      results: { ...attempt.report.results, meaning: judged.failures.length === 0 },
    };
  } catch (error) {
    attempt.error = error instanceof AiError ? error.code : "ai_provider_down";
  }
  return attempt;
}

export function realign(original: string[], units: string[]): string[] {
  const sentences = original.length;
  const parts = units.length;
  if (parts <= sentences || parts > 3 * sentences) return units;
  const score = (from: number, to: number, sentence: number) =>
    wordOverlap(units.slice(from, to).join(" "), original[sentence] ?? "");
  const best: number[][] = Array.from({ length: parts + 1 }, () => new Array<number>(sentences + 1).fill(-Infinity));
  const cut: number[][] = Array.from({ length: parts + 1 }, () => new Array<number>(sentences + 1).fill(0));
  best[0]![0] = 0;
  for (let used = 1; used <= parts; used += 1)
    for (let sentence = 1; sentence <= Math.min(sentences, used); sentence += 1)
      for (let from = sentence - 1; from < used; from += 1) {
        const value = (best[from]![sentence - 1] ?? -Infinity) + score(from, used, sentence - 1);
        if (value > (best[used]![sentence] ?? -Infinity)) {
          best[used]![sentence] = value;
          cut[used]![sentence] = from;
        }
      }
  const merged: string[] = [];
  let end = parts;
  for (let sentence = sentences; sentence >= 1; sentence -= 1) {
    const from = cut[end]![sentence] ?? 0;
    merged.unshift(units.slice(from, end).join(" "));
    end = from;
  }
  return merged;
}

const bestOf = (attempts: Attempt[]) =>
  attempts
    .filter((attempt) => attempt.levels && !attempt.error)
    .sort((a, b) => a.report.failures.length - b.report.failures.length)[0] ?? null;

async function generateUnit(provider: AiProvider, unit: Unit, options: GenerationOptions): Promise<Generation> {
  const original = unit.sentences;
  const signal = options.signal ?? AbortSignal.timeout(CALL_TIMEOUT_MS);
  const all: Attempt[] = [];
  let usage = EMPTY_USAGE;
  let costMicros = 0;
  let latencyMs = 0;
  let model = "";
  let rounds = 0;
  let feedback = { failures: options.feedback?.failures ?? [], previous: options.feedback?.previous ?? null };
  const spent = () => ({
    report: bestOf(all)?.report ?? all.at(-1)?.report ?? emptyReport(),
    attempts: rounds,
    usage,
    costMicros,
    latencyMs,
    model,
  });
  for (let round = 1; round <= ROUNDS; round += 1) {
    rounds = round;
    const feedbacks =
      round === 1 || feedback.failures.length === 0
        ? Array.from({ length: CANDIDATES }, () => feedback)
        : [feedback, ...Array.from({ length: CANDIDATES - 1 }, () => ({ failures: [], previous: null }))];
    const attempts = await Promise.all(feedbacks.map((each) => attemptOnce(provider, unit, options, signal, each)));
    for (const attempt of attempts) {
      all.push(attempt);
      usage = addUsage(usage, attempt.usage);
      costMicros += attempt.costMicros;
      model = attempt.model || model;
    }
    latencyMs += Math.max(0, ...attempts.map((attempt) => attempt.latencyMs));
    const winner = attempts.find((attempt) => attempt.levels && !attempt.error && attempt.report.passed);
    if (winner?.levels)
      return {
        original,
        levels: winner.levels,
        report: winner.report,
        attempts: round,
        usage,
        costMicros,
        latencyMs,
        model,
      };
    if (attempts.every((attempt) => attempt.error)) {
      const code = attempts.find((attempt) => attempt.error === "ai_refused") ? "ai_refused" : attempts[0]?.error;
      throw new SimplifyFailure(code ?? "ai_provider_down", spent());
    }
    const best = bestOf(attempts);
    if (best) feedback = { failures: best.report.failures, previous: best.levels };
  }
  const nearlySeparated = options.fidelity
    ? null
    : all.find(
        (attempt) =>
          attempt.levels &&
          !attempt.error &&
          attempt.report.failures.length > 0 &&
          attempt.report.failures.every((failure) => failure.startsWith("levels:")) &&
          levelSeparation(
            original,
            attempt.levels,
            unit.outputLang,
            options.terms ?? [],
            SEPARATION_WITH_MARGIN,
          ).filter((failure) => !options.onlyClear || !failure.includes('"very"')).length === 0,
      );
  if (nearlySeparated?.levels)
    return {
      original,
      levels: nearlySeparated.levels,
      report: {
        passed: true,
        failures: [],
        results: { ...nearlySeparated.report.results, levels: true },
        notes: ["levels: passed with the margin", ...nearlySeparated.report.failures],
      },
      attempts: rounds,
      usage,
      costMicros,
      latencyMs,
      model,
    };
  const onlyLevels = options.fidelity
    ? null
    : all.find(
        (attempt) =>
          attempt.levels &&
          !attempt.error &&
          attempt.report.failures.length > 0 &&
          attempt.report.failures.every((failure) => failure.startsWith("levels:")),
      );
  throw new SimplifyFailure(
    "ai_simplify_failed",
    spent(),
    onlyLevels?.levels ? { original, levels: onlyLevels.levels } : null,
  );
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
      language: false,
      levels: false,
      meaning: false,
    },
  };
}

export function failedCheckNames(report: CheckReport): string[] {
  return [...new Set(report.failures.map((failure) => failure.replace(/^part \d+: /, "").split(":")[0] ?? ""))].filter(
    Boolean,
  );
}

function checksOf(report: CheckReport, attempts: number): Record<string, unknown> {
  return {
    ...report.results,
    failures: report.failures,
    failedChecks: failedCheckNames(report),
    ...(report.notes ? { notes: report.notes } : {}),
    attempts,
  };
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
  return { resolved, cacheKey, provider, cached: await readSimplification(cacheKey, input.address, resolved.text) };
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
  const reservation =
    ESTIMATE_MICROS.simplify * CANDIDATES * chunkSentences(splitSentences(found.resolved.text)).length;
  const ticket: GuardTicket = await guardRequest(request, "simplify", reservation);
  const provider = found.provider;
  let spentMicros = 0;
  try {
    if (!provider) throw new AiError("ai_disabled");
    const generation = await generateSimplification(provider, found.resolved, {
      allowIdentity: provider.id === "fake",
      fidelity: fidelityEnabled() && provider.id !== "fake",
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
    if (spent) console.error(`[ai] simplify ${code}: ${failedCheckNames(spent.report).join(",") || "no checks"}`);
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
    if (!generatesLive(input.address)) throw new AiError("ai_not_simplifiable");
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
