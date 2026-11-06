import { AiError } from "@/lib/ai/errors";
import type { AiStore } from "@/content/ai-store/types";

function unavailable(): never {
  throw new AiError("ai_misconfigured");
}

// TODO(LIM): replace this stub with the real Supabase store.
export class SupabaseAiStore implements AiStore {
  settings = async () => unavailable();
  take = async () => unavailable();
  reserve = async () => unavailable();
  settle = async () => unavailable();
  spend = async () => unavailable();
  getSimplification = async () => unavailable();
  putSimplification = async () => unavailable();
  countSimplificationHit = async () => unavailable();
  getAnswerByKey = async () => unavailable();
  getAnswer = async () => unavailable();
  putAnswer = async () => unavailable();
  countAnswerHit = async () => unavailable();
  logRequest = async () => unavailable();
  markAlert = async () => unavailable();
  cleanup = async () => unavailable();
}
