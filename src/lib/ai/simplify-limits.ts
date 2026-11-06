import { SIMPLIFY_MAX_CHARS, SIMPLIFY_MAX_WORDS } from "@/lib/ai/contracts";

export function canSimplify(text: string): boolean {
  if (text.length > SIMPLIFY_MAX_CHARS) return false;
  return text.split(/\s+/).filter(Boolean).length <= SIMPLIFY_MAX_WORDS;
}
