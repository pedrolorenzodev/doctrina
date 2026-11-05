export function supabaseCorpus(): { url: string; key: string } | null {
  if (process.env.CORPUS_SOURCE !== "supabase") return null;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key)
    throw new Error("CORPUS_SOURCE=supabase needs NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
  return { url, key };
}

export function supabaseWordsCorpus(): { url: string; key: string } | null {
  if (process.env.CORPUS_SOURCE !== "supabase") return null;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key)
    throw new Error("CORPUS_SOURCE=supabase needs NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SECRET_KEY for the word data");
  return { url, key };
}
