import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale } from "@/lib/locale";

const robotsBody = "User-agent: *\nDisallow: /\n";
const botIdPathSegment = "149e9513-01fa-4fb0-aad4-566afd725d1b";

function passwordMatches(header: string | null, password: string): boolean {
  if (!header?.startsWith("Basic ")) return false;
  let decoded: string;
  try {
    decoded = atob(header.slice("Basic ".length));
  } catch {
    return false;
  }
  const given = decoded.slice(decoded.indexOf(":") + 1);
  if (given.length !== password.length) return false;
  let difference = 0;
  for (let index = 0; index < password.length; index += 1) {
    difference |= given.charCodeAt(index) ^ password.charCodeAt(index);
  }
  return difference === 0;
}

function isOutsideEveryLocale(pathname: string): boolean {
  const segments = pathname.split("/").filter(Boolean);
  const [first] = segments;
  if (!first || isLocale(first) || first === "api" || first === botIdPathSegment || first.startsWith("_")) return false;
  return !segments[segments.length - 1]!.includes(".");
}

export function proxy(request: NextRequest) {
  const password = process.env.SITE_PASSWORD;
  const noindex = { "X-Robots-Tag": "noindex, nofollow" };
  if (password) {
    if (request.nextUrl.pathname === "/robots.txt") {
      return new NextResponse(robotsBody, { headers: { ...noindex, "Content-Type": "text/plain" } });
    }
    if (!passwordMatches(request.headers.get("authorization"), password)) {
      return new NextResponse("Authentication required", {
        status: 401,
        headers: { ...noindex, "WWW-Authenticate": 'Basic realm="Doctrina", charset="UTF-8"' },
      });
    }
  }
  // GUARD: keeps /fr and /foo on global-not-found, because the [lang] layout cannot set dynamicParams = false (GOTCHAS, lean build).
  const response = isOutsideEveryLocale(request.nextUrl.pathname)
    ? NextResponse.rewrite(new URL("/_not-found", request.url))
    : NextResponse.next();
  if (password) response.headers.set("X-Robots-Tag", noindex["X-Robots-Tag"]);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
