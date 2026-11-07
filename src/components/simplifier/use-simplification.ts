"use client";

import { useEffect, useRef, useState } from "react";
import type { SimplifyAddress } from "@/lib/ai/contracts";
import { aiErrorStatus, type AiErrorCode } from "@/lib/ai/errors";
import type { Locale } from "@/lib/locale";
import type { SimplifiedEntry, SimplifyStatus } from "@/lib/simplifier-types";

const route = "/api/ai/simplify";
const timeoutMs = 25_000;

export type SimplifyOutcome =
  | { kind: "entry"; entry: SimplifiedEntry; status: SimplifyStatus }
  | { kind: "message"; code: AiErrorCode; retry: boolean };

type EntryOutcome = Extract<SimplifyOutcome, { kind: "entry" }>;

const remembered = new Map<string, EntryOutcome>();
const probed = new Set<string>();

const message = (code: AiErrorCode, retry: boolean): SimplifyOutcome => ({ kind: "message", code, retry });
const isCode = (value: unknown): value is AiErrorCode => typeof value === "string" && value in aiErrorStatus;
const isLines = (value: unknown): value is string[] =>
  Array.isArray(value) && value.length > 0 && value.every((line) => typeof line === "string" && line !== "");

function readEntry(body: unknown): EntryOutcome | null {
  if (typeof body !== "object" || body === null) return null;
  const { lang, original, clear, very, status } = body as Record<string, unknown>;
  if (lang !== "es" && lang !== "en") return null;
  if (!isLines(original) || !isLines(clear) || !isLines(very)) return null;
  if (status !== "generated" && status !== "reviewed") return null;
  return { kind: "entry", entry: { lang, original, clear, very }, status };
}

function failureByStatus(status: number): SimplifyOutcome {
  if (status === 429) return message("ai_rate_limited", true);
  if (status === 403) return message("ai_bot_check_failed", false);
  if (status === 504) return message("ai_timeout", true);
  if (status >= 500) return message("ai_provider_down", true);
  return message("ai_misconfigured", false);
}

async function readFailure(response: Response): Promise<SimplifyOutcome> {
  const body: unknown = await response.json().catch(() => null);
  const { code, retry } = (typeof body === "object" && body !== null ? body : {}) as Record<string, unknown>;
  if (!isCode(code)) return failureByStatus(response.status);
  return message(code, retry === true);
}

async function fetchSimplification(
  address: SimplifyAddress,
  locale: Locale,
  controller: AbortController,
): Promise<SimplifyOutcome | null> {
  let timedOut = false;
  const timer = window.setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);
  try {
    const response = await fetch(route, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, locale }),
      signal: controller.signal,
    });
    if (!response.ok) return await readFailure(response);
    return readEntry(await response.json()) ?? message("ai_misconfigured", false);
  } catch {
    if (timedOut) return message("ai_timeout", true);
    return controller.signal.aborted ? null : message("ai_provider_down", true);
  } finally {
    window.clearTimeout(timer);
  }
}

function toBase64Url(text: string) {
  let binary = "";
  for (const byte of new TextEncoder().encode(text)) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function useSimplification(address: SimplifyAddress, locale: Locale) {
  const [pending, setPending] = useState(false);
  const controller = useRef<AbortController | null>(null);
  const key = `${locale}:${JSON.stringify(address)}`;

  useEffect(
    () => () => {
      controller.current?.abort();
    },
    [],
  );

  const recall = () => remembered.get(key) ?? null;

  const load = async (): Promise<SimplifyOutcome | null> => {
    controller.current?.abort();
    const mine = new AbortController();
    controller.current = mine;
    setPending(true);
    const outcome = await fetchSimplification(address, locale, mine);
    if (controller.current !== mine) return null;
    controller.current = null;
    setPending(false);
    if (outcome?.kind === "entry") remembered.set(key, outcome);
    return outcome;
  };

  const cancel = () => {
    controller.current?.abort();
    controller.current = null;
    setPending(false);
  };

  const prefetch = () => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (remembered.has(key) || probed.has(key) || controller.current) return;
    probed.add(key);
    const query = `address=${toBase64Url(JSON.stringify(address))}&locale=${locale}&cacheOnly=1`;
    fetch(`${route}?${query}`)
      .then(async (response) => {
        if (response.status !== 200) return;
        const found = readEntry(await response.json());
        if (found && !remembered.has(key)) remembered.set(key, found);
      })
      .catch(() => undefined);
  };

  return { pending, recall, load, cancel, prefetch };
}
