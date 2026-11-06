export type AiRole = "plan" | "answer" | "simplify" | "judge";
export type AiProviderId = "anthropic" | "fake" | "replay";
export type Effort = "low" | "medium" | "high";
export type JsonSchema = Record<string, unknown>;

export type AiUsage = {
  inputTokens: number;
  cachedInputTokens: number;
  cacheWriteTokens: number;
  outputTokens: number;
};

export type AiCallInput = {
  role: AiRole;
  system: string;
  user: string;
  schemaName: string;
  schema: JsonSchema;
  maxTokens: number;
  cacheSystem: boolean;
  signal?: AbortSignal;
  replayKey?: string;
};

export type AiCallResult = {
  json: unknown;
  usage: AiUsage;
  provider: AiProviderId;
  model: string;
  costMicros: number;
  latencyMs: number;
  stopReason: "end" | "max_tokens" | "refusal" | "other";
};

export interface AiProvider {
  readonly id: AiProviderId;
  call(input: AiCallInput): Promise<AiCallResult>;
}

export { getAiProvider } from "@/lib/ai/provider-env";
