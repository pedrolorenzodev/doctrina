import { AiError } from "@/lib/ai/errors";
import type { AiRole, Effort } from "@/lib/ai/provider";

const DEFAULTS: Record<AiRole, { env: string; model: string; effort: Effort }> = {
  plan: { env: "AI_MODEL_PLAN", model: "claude-haiku-5-5", effort: "low" },
  answer: { env: "AI_MODEL_ANSWER", model: "claude-haiku-5-5", effort: "medium" },
  simplify: { env: "AI_MODEL_SIMPLIFY", model: "claude-haiku-5-5", effort: "low" },
  judge: { env: "AI_MODEL_JUDGE", model: "claude-haiku-5-5", effort: "low" },
};

const EFFORTS: readonly string[] = ["low", "medium", "high"];

export function modelFor(role: AiRole): { model: string; effort: Effort } {
  const fallback = DEFAULTS[role];
  const value = process.env[fallback.env]?.trim();
  if (!value) return { model: fallback.model, effort: fallback.effort };
  const [model, effort] = value.split("@");
  if (!model) throw new AiError("ai_misconfigured");
  if (effort === undefined) return { model, effort: fallback.effort };
  if (!EFFORTS.includes(effort)) throw new AiError("ai_misconfigured");
  return { model, effort: effort as Effort };
}
