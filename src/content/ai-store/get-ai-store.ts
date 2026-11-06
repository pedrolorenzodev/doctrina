import { getMemoryStore } from "@/content/ai-store/memory-store";
import { SupabaseAiStore } from "@/content/ai-store/supabase-store";
import type { AiStore } from "@/content/ai-store/types";

let supabaseStore: SupabaseAiStore | null = null;

export function getAiStore(): AiStore {
  if (process.env.AI_STORE === "memory" || !process.env.SUPABASE_SECRET_KEY) return getMemoryStore();
  supabaseStore ??= new SupabaseAiStore();
  return supabaseStore;
}
