import { createHash } from "node:crypto";
import {
  ANSWER_PROMPT_VERSION,
  PLAN_PROMPT_VERSION,
  SIMPLIFY_PROMPT_VERSION,
  type AskRequest,
  type SimplifyAddress,
} from "@/lib/ai/contracts";
import { modelFor } from "@/lib/ai/models";
import type { AiRole } from "@/lib/ai/provider";

export function sha256(text: string): string {
  return createHash("sha256").update(text).digest("hex");
}

export function normalizeQuestion(question: string): string {
  return question
    .normalize("NFC")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/^[\s?¿!¡.]+|[\s?¿!¡.]+$/g, "")
    .trim();
}

export function hereKey(here: AskRequest["here"]): string {
  return here.kind === "bible"
    ? `bible:${here.book}.${here.chapter}:${here.translation}`
    : `father:${here.work}:${here.edition}`;
}

export function selectionHash(selection: AskRequest["selection"]): string | null {
  return selection ? sha256(selection.text.normalize("NFC")) : null;
}

export function isCacheableAsk(request: AskRequest): boolean {
  return request.turn === 1 && request.history.length === 0 && request.notes.length === 0;
}

export function answerCacheKey(request: AskRequest, corpusVersion: string): string {
  return sha256(
    [
      normalizeQuestion(request.question),
      request.locale,
      request.scope,
      hereKey(request.here),
      selectionHash(request.selection) ?? "-",
      ANSWER_PROMPT_VERSION,
      PLAN_PROMPT_VERSION,
      modelFor("plan").model,
      modelFor("answer").model,
      corpusVersion,
    ].join("|"),
  );
}

export function simplificationCacheKey(input: {
  text: string;
  address: SimplifyAddress;
  sourceLang: "es" | "en";
  outputLang: "es" | "en";
}): string {
  const editionId = input.address.kind === "father" ? input.address.edition : null;
  return sha256(
    [
      sha256(input.text.normalize("NFC")),
      input.address.kind,
      editionId ?? "-",
      input.sourceLang,
      input.outputLang,
      modelFor("simplify").model,
      SIMPLIFY_PROMPT_VERSION,
    ].join("|"),
  );
}

export function replayKey(input: { role: AiRole; schemaName: string; system: string; user: string }): string {
  return sha256([input.role, input.schemaName, input.system, input.user].join("|"));
}
