import Anthropic from "@anthropic-ai/sdk";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { AiError } from "@/lib/ai/errors";
import { replayKey } from "@/lib/ai/cache-keys";
import { modelFor } from "@/lib/ai/models";
import { costMicros } from "@/lib/ai/prices";
import type { AiCallInput, AiCallResult, AiProvider } from "@/lib/ai/provider";

let client: Anthropic | null = null;

function getClient(): Anthropic {
  client ??= new Anthropic({ maxRetries: 1 });
  return client;
}

function mapError(error: unknown): AiError {
  if (error instanceof AiError) return error;
  if (error instanceof Anthropic.APIUserAbortError) return new AiError("ai_timeout");
  if (error instanceof Anthropic.APIError) {
    const type = (error.error as { error?: { type?: string } } | undefined)?.error?.type;
    if (error.status === 402 || type === "billing_error") {
      console.error("[ai] provider credit exhausted");
      return new AiError("ai_budget_exhausted");
    }
    if (error.status === 429) return new AiError("ai_provider_busy");
    if (error.status === 400 || error.status === 401 || error.status === 403 || error.status === 404)
      return new AiError("ai_misconfigured");
    return new AiError("ai_provider_down");
  }
  return new AiError("ai_provider_down");
}

function record(key: string, result: AiCallResult): void {
  const dir = process.env.AI_RECORD_DIR;
  if (!dir) return;
  mkdirSync(resolve(dir), { recursive: true });
  writeFileSync(resolve(dir, `${key}.json`), JSON.stringify(result));
}

function stopReasonOf(reason: string | null): AiCallResult["stopReason"] {
  if (reason === "end_turn" || reason === "stop_sequence") return "end";
  if (reason === "max_tokens") return "max_tokens";
  if (reason === "refusal") return "refusal";
  return "other";
}

export class AnthropicProvider implements AiProvider {
  readonly id = "anthropic" as const;

  async call(input: AiCallInput): Promise<AiCallResult> {
    const { model, effort } = modelFor(input.role);
    const started = Date.now();
    let response: Anthropic.Message;
    try {
      response = await getClient().messages.create(
        {
          model,
          max_tokens: input.maxTokens,
          system: [
            {
              type: "text",
              text: input.system,
              ...(input.cacheSystem ? { cache_control: { type: "ephemeral" as const } } : {}),
            },
          ],
          messages: [{ role: "user", content: input.user }],
          output_config: { effort, format: { type: "json_schema", schema: input.schema } },
        },
        input.signal ? { signal: input.signal } : undefined,
      );
    } catch (error) {
      throw mapError(error);
    }
    const stopReason = stopReasonOf(response.stop_reason);
    const usage = {
      inputTokens: response.usage.input_tokens,
      cachedInputTokens: response.usage.cache_read_input_tokens ?? 0,
      cacheWriteTokens: response.usage.cache_creation_input_tokens ?? 0,
      outputTokens: response.usage.output_tokens,
    };
    const text = response.content.find((block) => block.type === "text");
    let json: unknown = null;
    if (stopReason === "end" && text && text.type === "text") {
      try {
        json = JSON.parse(text.text);
      } catch {
        throw new AiError("ai_provider_down");
      }
    }
    const result: AiCallResult = {
      json,
      usage,
      provider: "anthropic",
      model,
      costMicros: costMicros(model, usage),
      latencyMs: Date.now() - started,
      stopReason,
    };
    record(input.replayKey ?? replayKey(input), result);
    return result;
  }
}
