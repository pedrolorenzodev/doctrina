import { parseAddress } from "@/content/ai-simplify/resolve-address";
import { cachedSimplification, simplifyParagraph, type SimplifyOutcome } from "@/features/simplify/simplify";
import { AiError, aiErrorBody, aiErrorStatus, type AiErrorCode } from "@/lib/ai/errors";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

type Locale = "es" | "en";

const localeOf = (value: unknown): Locale => (value === "en" ? "en" : "es");

function reply(outcome: SimplifyOutcome, locale: Locale, empty: number): Response {
  const response = outcome.error
    ? Response.json(aiErrorBody(outcome.error, locale, "simplify"), { status: aiErrorStatus[outcome.error] })
    : outcome.body
      ? Response.json(outcome.body)
      : new Response(null, { status: empty });
  response.headers.set("Cache-Control", "no-store");
  if (outcome.setCookie) response.headers.append("Set-Cookie", outcome.setCookie);
  return response;
}

function refused(error: unknown, locale: Locale): Response {
  const code: AiErrorCode = error instanceof AiError ? error.code : "ai_bad_request";
  return reply({ body: null, error: code, setCookie: null }, locale, 400);
}

export async function POST(request: Request): Promise<Response> {
  const raw = (await request.json().catch(() => null)) as { address?: unknown; locale?: unknown } | null;
  const locale = localeOf(raw?.locale);
  try {
    if (raw?.locale !== "es" && raw?.locale !== "en") throw new AiError("ai_bad_request");
    const address = parseAddress(raw.address);
    return reply(await simplifyParagraph(request, { address, locale }), locale, 500);
  } catch (error) {
    return refused(error, locale);
  }
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const locale = localeOf(url.searchParams.get("locale"));
  try {
    if (url.searchParams.get("cacheOnly") !== "1") throw new AiError("ai_bad_request");
    const encoded = url.searchParams.get("address") ?? "";
    let raw: unknown = null;
    try {
      raw = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8"));
    } catch {
      throw new AiError("ai_bad_request");
    }
    const address = parseAddress(raw);
    return reply(await cachedSimplification(request, { address, locale }), locale, 204);
  } catch (error) {
    return refused(error, locale);
  }
}
