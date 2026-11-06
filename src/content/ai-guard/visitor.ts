import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { AiError } from "@/lib/ai/errors";

export const VISITOR_COOKIE = "doctrina_ai";
const COOKIE_MAX_AGE_SECONDS = 30 * 24 * 60 * 60;
const DEV_SECRET = "doctrina-local-development-secret";

function secret(name: "AI_COOKIE_SECRET" | "AI_IP_SALT"): string {
  const value = process.env[name];
  if (value) return value;
  if (process.env.VERCEL === "1") throw new AiError("ai_misconfigured");
  return `${DEV_SECRET}:${name}`;
}

const sign = (id: string) => createHmac("sha256", secret("AI_COOKIE_SECRET")).update(id).digest("base64url");

function readCookie(request: Request, name: string): string | null {
  const header = request.headers.get("cookie");
  if (!header) return null;
  for (const part of header.split(";")) {
    const at = part.indexOf("=");
    if (at > 0 && part.slice(0, at).trim() === name) return part.slice(at + 1).trim();
  }
  return null;
}

function validVisitor(value: string | null): string | null {
  if (!value) return null;
  const dot = value.indexOf(".");
  if (dot <= 0) return null;
  const id = value.slice(0, dot);
  const given = Buffer.from(value.slice(dot + 1));
  const wanted = Buffer.from(sign(id));
  return given.length === wanted.length && timingSafeEqual(given, wanted) ? id : null;
}

export function resolveVisitor(request: Request): { id: string; setCookie: string | null } {
  const existing = validVisitor(readCookie(request, VISITOR_COOKIE));
  if (existing) return { id: existing, setCookie: null };
  const id = randomBytes(16).toString("base64url");
  const attributes = [
    `${VISITOR_COOKIE}=${id}.${sign(id)}`,
    `Max-Age=${COOKIE_MAX_AGE_SECONDS}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
  ];
  if (process.env.NODE_ENV === "production") attributes.push("Secure");
  return { id, setCookie: attributes.join("; ") };
}

export function requestIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function hashIp(request: Request, day: string): string {
  return createHmac("sha256", `${secret("AI_IP_SALT")}${day}`)
    .update(requestIp(request))
    .digest("hex");
}

export function sameOrigin(request: Request): boolean {
  if (request.headers.get("sec-fetch-site") === "cross-site") return false;
  const origin = request.headers.get("origin");
  if (!origin) return true;
  let host: string;
  try {
    host = new URL(origin).host;
  } catch {
    return false;
  }
  const own = [request.headers.get("x-forwarded-host"), request.headers.get("host"), new URL(request.url).host];
  return own.some((candidate) => candidate === host);
}

export function matchesSecret(given: string | null, wanted: string | undefined): boolean {
  if (!given || !wanted) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(wanted);
  return a.length === b.length && timingSafeEqual(a, b);
}
