/* eslint-disable @typescript-eslint/no-unused-vars */
import { getAiProvider } from "@/lib/ai/provider";
import { AiError } from "@/lib/ai/errors";
import { dayKey, monthKey } from "@/lib/ai/dates";

export type GuardKind = "chat" | "simplify" | "cached";

export type GuardTicket = {
  visitor: string;
  ipHash: string;
  day: string;
  month: string;
  reservedMicros: number;
  setCookie: string | null;
};

export type AiStatus = { chat: "on" | "off" | "paused"; simplify: "on" | "off" | "paused" };

// TODO(LIM): replace this stub with the real guard.
export async function guardRequest(_request: Request, _kind: GuardKind, _estimateMicros: number): Promise<GuardTicket> {
  if (getAiProvider() === null) throw new AiError("ai_disabled");
  const now = new Date();
  return {
    visitor: "stub",
    ipHash: "stub",
    day: dayKey(now),
    month: monthKey(now),
    reservedMicros: 0,
    setCookie: null,
  };
}

export async function settleTicket(_ticket: GuardTicket, _actualMicros: number): Promise<void> {}

export async function aiStatus(): Promise<AiStatus> {
  const state = getAiProvider() === null ? "off" : "on";
  return { chat: state, simplify: state };
}
