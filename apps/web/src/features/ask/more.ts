import type { AskMoreResponse, WireQuote } from "@/lib/ai/contracts";
import { AiError } from "@/lib/ai/errors";
import { getAiStore } from "@/content/ai-store/get-ai-store";
import { blocksOf, leadSlice, wireQuote } from "@/features/ask/map-answer";
import { aboutOf, quoteIdOf } from "@/features/ask/verify-answer";

export const MORE_PAGE = 8;

export async function askMore(answerId: string, offset: number): Promise<AskMoreResponse> {
  const stored = await getAiStore().getAnswer(answerId);
  if (!stored?.pack) throw new AiError("ai_not_found");
  const extra = stored.pack.extra.filter((passage) => passage.collection !== "mine");
  const page = extra.slice(offset, offset + MORE_PAGE);
  const quotes: Record<string, WireQuote> = {};
  for (const passage of page) quotes[quoteIdOf(passage.id)] = wireQuote(passage, leadSlice(passage), stored.locale);
  return {
    blocks: blocksOf(
      page.map((passage) => ({ id: quoteIdOf(passage.id), about: aboutOf(passage) })),
      stored.locale,
    ),
    quotes,
    consulted: page.map((passage) => quoteIdOf(passage.id)),
    more: offset + MORE_PAGE < extra.length,
  };
}
