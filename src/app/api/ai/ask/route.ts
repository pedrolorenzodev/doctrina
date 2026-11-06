import { randomUUID } from "node:crypto";
import fixture from "@/lib/ai/fixtures/wire-answer.es.json";
import { ESTIMATE_MICROS, askRequestSchema, type WireAnswer } from "@/lib/ai/contracts";
import { AiError, aiErrorBody, aiErrorStatus } from "@/lib/ai/errors";
import { sseStream } from "@/lib/ai/sse";
import { guardRequest, settleTicket } from "@/content/ai-guard/guard";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const PHASES = [
  { phase: "plan" },
  { phase: "search", n: 24 },
  { phase: "read" },
  { phase: "write" },
  { phase: "check" },
] as const;

const wait = (ms: number) => new Promise<void>((done) => setTimeout(done, ms));

// TODO(C-SRV): replace this stub with the real chat route.
export async function POST(request: Request): Promise<Response> {
  const raw: unknown = await request.json().catch(() => null);
  const parsed = askRequestSchema.safeParse(raw);
  const locale = (raw as { locale?: unknown } | null)?.locale === "en" ? "en" : "es";
  try {
    if (!parsed.success) throw new AiError("ai_bad_request");
    const ticket = await guardRequest(request, "chat", ESTIMATE_MICROS.chat);
    const input = parsed.data;
    const response = sseStream(async (send) => {
      try {
        for (const phase of PHASES) {
          await wait(300);
          send("phase", phase);
        }
        const answer: WireAnswer = { ...(fixture as WireAnswer), answerId: randomUUID(), question: input.question };
        send("answer", answer);
      } finally {
        await settleTicket(ticket, 0);
      }
    }, locale);
    if (ticket.setCookie) response.headers.append("Set-Cookie", ticket.setCookie);
    return response;
  } catch (error) {
    const code = error instanceof AiError ? error.code : "ai_misconfigured";
    return Response.json(aiErrorBody(code, locale), { status: aiErrorStatus[code] });
  }
}
