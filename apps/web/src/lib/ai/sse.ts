import { aiErrorBody } from "@/lib/ai/errors";

export type SseSend = (event: string, data: unknown) => void;

export function sseStream(run: (send: SseSend) => Promise<void>, locale: "es" | "en" = "es"): Response {
  const encoder = new TextEncoder();
  let closed = false;
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send: SseSend = (event, data) => {
        if (closed) return;
        controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
      };
      try {
        await run(send);
      } catch {
        send("error", aiErrorBody("ai_misconfigured", locale));
      } finally {
        if (!closed) controller.close();
        closed = true;
      }
    },
    cancel() {
      closed = true;
    },
  });
  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
    },
  });
}
