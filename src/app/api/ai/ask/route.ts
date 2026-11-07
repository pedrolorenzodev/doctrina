import { askRequestSchema } from "@/lib/ai/contracts";
import { AiError, aiErrorBody, aiErrorStatus } from "@/lib/ai/errors";
import { sseStream } from "@/lib/ai/sse";
import { answerQuestion, openAsk } from "@/features/ask/ask";

export const dynamic = "force-dynamic";
export const maxDuration = 120;

export async function POST(request: Request): Promise<Response> {
  const raw: unknown = await request.json().catch(() => null);
  const parsed = askRequestSchema.safeParse(raw);
  const locale = (raw as { locale?: unknown } | null)?.locale === "en" ? "en" : "es";
  try {
    if (!parsed.success) throw new AiError("ai_bad_request");
    const input = parsed.data;
    const opened = await openAsk(request, input);
    const response = sseStream((send) => answerQuestion(input, opened, send), locale);
    if (opened.ticket.setCookie) response.headers.append("Set-Cookie", opened.ticket.setCookie);
    return response;
  } catch (error) {
    const code = error instanceof AiError ? error.code : "ai_misconfigured";
    return Response.json(aiErrorBody(code, locale), { status: aiErrorStatus[code] });
  }
}
