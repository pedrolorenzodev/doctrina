import { AnthropicProvider } from "@/lib/ai/anthropic-provider";
import { FakeProvider } from "@/lib/ai/fake-provider";
import { AiError } from "@/lib/ai/errors";
import type { AiProvider } from "@/lib/ai/provider";
import { ReplayProvider } from "@/lib/ai/replay-provider";

function build(id: string): AiProvider | null {
  switch (id) {
    case "anthropic":
      if (!process.env.ANTHROPIC_API_KEY) throw new AiError("ai_misconfigured");
      return new AnthropicProvider();
    case "fake":
      return new FakeProvider();
    case "replay":
      return new ReplayProvider();
    case "off":
      return null;
    default:
      throw new AiError("ai_misconfigured");
  }
}

export function getAiProvider(): AiProvider | null {
  if (process.env.AI_ENABLED === "off") return null;
  const chosen = process.env.AI_PROVIDER?.trim();
  if (chosen) return build(chosen);
  if (process.env.ANTHROPIC_API_KEY) return build("anthropic");
  return process.env.NODE_ENV !== "production" ? build("fake") : null;
}
