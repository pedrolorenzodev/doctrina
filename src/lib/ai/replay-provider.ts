import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { AiError } from "@/lib/ai/errors";
import { replayKey } from "@/lib/ai/cache-keys";
import type { AiCallInput, AiCallResult, AiProvider } from "@/lib/ai/provider";

export class ReplayProvider implements AiProvider {
  readonly id = "replay" as const;

  async call(input: AiCallInput): Promise<AiCallResult> {
    const dir = process.env.AI_REPLAY_DIR;
    if (!dir) throw new AiError("ai_misconfigured");
    const key = input.replayKey ?? replayKey(input);
    try {
      const recorded = JSON.parse(readFileSync(resolve(dir, `${key}.json`), "utf8")) as AiCallResult;
      return { ...recorded, provider: "replay" };
    } catch {
      throw new AiError("ai_provider_down");
    }
  }
}
