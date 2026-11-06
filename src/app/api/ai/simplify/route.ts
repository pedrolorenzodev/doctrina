import { addressId, simplifyAddressSchema, simplifyRequestSchema, type SimplifyResponse } from "@/lib/ai/contracts";
import { AiError, aiErrorBody, aiErrorStatus } from "@/lib/ai/errors";
import { ESTIMATE_MICROS } from "@/lib/ai/contracts";
import { getSimplifiedText } from "@/content/simplified-texts";
import { guardRequest, settleTicket, type GuardTicket } from "@/content/ai-guard/guard";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

type Locale = "es" | "en";

function failure(error: unknown, locale: Locale, ticket: GuardTicket | null): Response {
  const code = error instanceof AiError ? error.code : "ai_misconfigured";
  const response = Response.json(aiErrorBody(code, locale, "simplify"), { status: aiErrorStatus[code] });
  if (ticket?.setCookie) response.headers.append("Set-Cookie", ticket.setCookie);
  return response;
}

function respond(address: Parameters<typeof addressId>[0], cached: boolean): SimplifyResponse {
  const entry = getSimplifiedText(addressId(address));
  if (!entry) throw new AiError("ai_not_found");
  return {
    lang: entry.lang,
    original: entry.original,
    clear: entry.clear,
    very: entry.very,
    status: "generated",
    cached,
  };
}

// TODO(S-SRV): replace this stub with the real simplifier route.
export async function POST(request: Request): Promise<Response> {
  let locale: Locale = "es";
  let ticket: GuardTicket | null = null;
  try {
    const raw: unknown = await request.json().catch(() => null);
    if ((raw as { locale?: unknown } | null)?.locale === "en") locale = "en";
    const parsed = simplifyRequestSchema.safeParse(raw);
    if (!parsed.success) throw new AiError("ai_bad_request");
    locale = parsed.data.locale;
    ticket = await guardRequest(request, "simplify", ESTIMATE_MICROS.simplify);
    const response = Response.json(respond(parsed.data.address, false));
    if (ticket.setCookie) response.headers.append("Set-Cookie", ticket.setCookie);
    return response;
  } catch (error) {
    return failure(error, locale, ticket);
  } finally {
    if (ticket) await settleTicket(ticket, 0);
  }
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const locale: Locale = url.searchParams.get("locale") === "en" ? "en" : "es";
  try {
    if (url.searchParams.get("cacheOnly") !== "1") throw new AiError("ai_bad_request");
    const raw = url.searchParams.get("address");
    if (!raw) throw new AiError("ai_bad_request");
    const address = simplifyAddressSchema.safeParse(JSON.parse(Buffer.from(raw, "base64url").toString("utf8")));
    if (!address.success) throw new AiError("ai_bad_request");
    try {
      return Response.json(respond(address.data, true));
    } catch {
      return new Response(null, { status: 204 });
    }
  } catch (error) {
    return failure(error instanceof SyntaxError ? new AiError("ai_bad_request") : error, locale, null);
  }
}
