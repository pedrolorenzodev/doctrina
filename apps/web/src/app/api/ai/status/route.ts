import { aiStatus } from "@/content/ai-guard/guard";

export const dynamic = "force-dynamic";
export const maxDuration = 10;

export async function GET(): Promise<Response> {
  return Response.json(await aiStatus(), { headers: { "Cache-Control": "private, max-age=30" } });
}
