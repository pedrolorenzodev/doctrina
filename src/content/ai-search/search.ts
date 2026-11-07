import { fixtureSearch } from "@/content/ai-search/fixture-search";
import { supabaseSearch } from "@/content/ai-search/supabase-search";
import type { CorpusSearch } from "@/content/ai-search/types";

export function getCorpusSearch(): CorpusSearch {
  if (process.env.AI_STORE === "memory" || !process.env.SUPABASE_SECRET_KEY) return fixtureSearch;
  return supabaseSearch;
}
