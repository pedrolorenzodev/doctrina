import { supabaseCorpus } from "@/content/corpus-env";
import type { FatherSource, FatherWork, FatherWorkSummary } from "@/content/father-text/father-types";
import { createLocalFatherSource } from "@/content/father-text/local-father-source";
import { createSupabaseFatherSource } from "@/content/father-text/supabase-father-source";

export type { FatherDivision, FatherWork, FatherWorkSummary } from "@/content/father-text/father-types";

function chooseSource(): FatherSource {
  const remote = supabaseCorpus();
  return remote ? createSupabaseFatherSource(remote.url, remote.key) : createLocalFatherSource();
}

let source: FatherSource | null = null;

export function currentFatherSource(): FatherSource {
  source ??= chooseSource();
  return source;
}

let listed: Promise<FatherWorkSummary[]> | null = null;

export function getFatherWorks(): Promise<FatherWorkSummary[]> {
  listed ??= currentFatherSource().works();
  return listed;
}

export function getFatherWork(id: string): Promise<FatherWork | null> {
  return currentFatherSource().work(id);
}
