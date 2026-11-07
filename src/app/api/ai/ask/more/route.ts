import { askMoreRequestSchema } from "@/lib/ai/contracts";
import { AiError, aiErrorBody, aiErrorStatus } from "@/lib/ai/errors";
import { guardRequest } from "@/content/ai-guard/guard";
import { getAiStore } from "@/content/ai-store/get-ai-store";
import { askMore } from "@/features/ask/more";

export const dynamic = "force-dynamic";
export const maxDuration = 10;

export async function POST(request: Request): Promise<Response> {
  const raw: unknown = await request.json().catch(() => null);
  const parsed = askMoreRequestSchema.safeParse(raw);
  const locale = (raw as { locale?: unknown } | null)?.locale === "en" ? "en" : "es";
  const started = Date.now();
  let outcome: "ok" | AiError["code"] = "ok";
  try {
    if (!parsed.success) throw new AiError("ai_bad_request");
    const ticket = await guardRequest(request, "cached", 0);
    const response = Response.json(await askMore(parsed.data.answerId, parsed.data.offset));
    if (ticket.setCookie) response.headers.append("Set-Cookie", ticket.setCookie);
    return response;
  } catch (error) {
    const code = error instanceof AiError ? error.code : "ai_misconfigured";
    outcome = code;
    return Response.json(aiErrorBody(code, locale), { status: aiErrorStatus[code] });
  } finally {
    await getAiStore()
      .logRequest({
        route: "ask-more",
        locale: null,
        outcome,
        intent: null,
        doctrines: null,
        promptVersion: null,
        models: null,
        usage: null,
        costMicros: 0,
        latencyMs: { total: Date.now() - started },
        quotesTotal: null,
        quotesFailed: null,
        repaired: null,
        cacheHit: true,
        answerId: parsed.success ? parsed.data.answerId : null,
        question: null,
        checks: null,
      })
      .catch(() => undefined);
  }
}
