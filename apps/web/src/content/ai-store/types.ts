import type { AiUsage } from "@/lib/ai/provider";
import type { AiOutcome } from "@/lib/ai/errors";
import type { SimplifyAddress, WireAnswer } from "@/lib/ai/contracts";
import type { PackPassage } from "@/content/ai-search/types";

export type AiSettings = {
  enabled: boolean;
  chatEnabled: boolean;
  simplifyEnabled: boolean;
  corpusVersion: string | null;
};

export type SpendState = { reservedMicros: number; spentMicros: number };

export type SimplificationRow = {
  cacheKey: string;
  address: SimplifyAddress;
  textSha256: string;
  sourceLang: "es" | "en";
  outputLang: "es" | "en";
  model: string;
  promptVersion: string;
  original: string[];
  clear: string[];
  very: string[];
  status: "generated" | "reviewed" | "rejected";
  checks: Record<string, unknown>;
  tokensIn: number;
  tokensOut: number;
  costMicros: number;
};

export type StoredPack = { extra: PackPassage[] };

export type StoredAnswer = {
  answerId: string;
  cacheKey: string | null;
  locale: "es" | "en";
  promptVersion: string;
  models: Record<string, string>;
  corpusVersion: string;
  answer: WireAnswer;
  pack: StoredPack | null;
};

export type AiRequestLog = {
  route: "ask" | "ask-more" | "simplify" | "eval";
  locale: "es" | "en" | null;
  outcome: AiOutcome;
  intent: string | null;
  doctrines: string[] | null;
  promptVersion: string | null;
  models: Record<string, string> | null;
  usage: Record<string, AiUsage> | null;
  costMicros: number;
  latencyMs: Record<string, number> | null;
  quotesTotal: number | null;
  quotesFailed: number | null;
  repaired: boolean | null;
  cacheHit: boolean;
  answerId: string | null;
  question: string | null;
  checks: Record<string, unknown> | null;
};

export interface AiStore {
  settings(): Promise<AiSettings>;
  take(day: string, bucket: string, key: string, limit: number): Promise<boolean>;
  reserve(
    day: string,
    month: string,
    estimateMicros: number,
    dailyCapMicros: number,
    monthlyCapMicros: number,
  ): Promise<boolean>;
  settle(day: string, month: string, reservedMicros: number, actualMicros: number): Promise<void>;
  spend(day: string, month: string): Promise<{ day: SpendState; month: SpendState }>;
  getSimplification(cacheKey: string): Promise<SimplificationRow | null>;
  putSimplification(row: SimplificationRow): Promise<void>;
  countSimplificationHit(cacheKey: string): Promise<void>;
  getAnswerByKey(cacheKey: string): Promise<StoredAnswer | null>;
  getAnswer(answerId: string): Promise<StoredAnswer | null>;
  putAnswer(row: Omit<StoredAnswer, "answerId">): Promise<string>;
  countAnswerHit(answerId: string): Promise<void>;
  logRequest(row: AiRequestLog): Promise<void>;
  markAlert(name: string, period: string): Promise<boolean>;
  cleanup(): Promise<void>;
}
