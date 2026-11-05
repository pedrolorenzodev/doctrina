import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const robotsBody = "User-agent: *\nDisallow: /\n";

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

export function proxy(request: NextRequest) {
  const password = process.env.SITE_PASSWORD;
  if (!password) return NextResponse.next();
  const noindex = { "X-Robots-Tag": "noindex, nofollow" };
  if (request.nextUrl.pathname === "/robots.txt") {
    return new NextResponse(robotsBody, { headers: { ...noindex, "Content-Type": "text/plain" } });
  }
  if (!passwordMatches(request.headers.get("authorization"), password)) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { ...noindex, "WWW-Authenticate": 'Basic realm="Doctrina", charset="UTF-8"' },
    });
  }
  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", noindex["X-Robots-Tag"]);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
