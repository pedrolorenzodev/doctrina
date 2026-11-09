"use client";

import { useCallback, useEffect, useRef } from "react";
import type { AskMoreResponse, AskPhase, AskRequest, WireAnswer } from "@/lib/ai/contracts";
import { aiErrorBody, aiErrorStatus, type AiErrorBody, type AiErrorCode } from "@/lib/ai/errors";
import type { Highlight } from "@/lib/highlights";
import { sameChapter, type ChapterKey, type Note } from "@/lib/notes";

const askRoute = "/api/ai/ask";
const moreRoute = "/api/ai/ask/more";
const timeoutMs = 120_000;
const maxNotes = 20;
const maxNotesChars = 4000;
const maxNoteChars = 1000;
const maxRelated = 6;
const minWord = 4;

const stopWords = new Set(
  (
    "para como pero porque cuando donde sobre entre desde hasta este esta estos estas ese esa esos esas aquel " +
    "aquella que cual cuales quien quienes cuyo muy mas menos tambien solo todo toda todos todas otro otra " +
    "otros otras algo nada hay son fue ser esta estan tiene tienen puede pueden dice dicen " +
    "with that this these those from into onto about which what when where while whose who whom they them " +
    "their there then than have has had been being were was will would could should does did not also only " +
    "very more most some such other each every your yours mine ours"
  ).split(" "),
);

export type AskOutcome =
  { kind: "answer"; answer: WireAnswer } | { kind: "error"; error: AiErrorBody } | { kind: "stopped" };

export type MoreOutcome =
  { kind: "more"; response: AskMoreResponse } | { kind: "error"; error: AiErrorBody } | { kind: "stopped" };

const isCode = (value: unknown): value is AiErrorCode => typeof value === "string" && value in aiErrorStatus;

function failureByStatus(status: number, locale: "es" | "en"): AiErrorBody {
  if (status === 429) return aiErrorBody("ai_rate_limited", locale);
  if (status === 403) return aiErrorBody("ai_bot_check_failed", locale);
  if (status === 504) return aiErrorBody("ai_timeout", locale);
  if (status >= 500) return aiErrorBody("ai_provider_down", locale);
  return aiErrorBody("ai_misconfigured", locale);
}

async function readFailure(response: Response, locale: "es" | "en"): Promise<AiErrorBody> {
  const body: unknown = await response.json().catch(() => null);
  const { code } = (typeof body === "object" && body !== null ? body : {}) as Record<string, unknown>;
  return isCode(code) ? aiErrorBody(code, locale) : failureByStatus(response.status, locale);
}

export type SseEvent = { event: string; data: unknown };

export function parseSse(buffer: string): { events: SseEvent[]; rest: string } {
  const chunks = buffer.split("\n\n");
  const rest = chunks.pop() ?? "";
  const events: SseEvent[] = [];
  for (const chunk of chunks) {
    let event = "message";
    const lines: string[] = [];
    for (const line of chunk.split("\n")) {
      if (line.startsWith("event:")) event = line.slice(6).trim();
      else if (line.startsWith("data:")) lines.push(line.slice(5).trimStart());
    }
    if (lines.length === 0) continue;
    try {
      events.push({ event, data: JSON.parse(lines.join("\n")) });
    } catch {
      continue;
    }
  }
  return { events, rest };
}

const phases: AskPhase[] = ["plan", "search", "read", "write", "check"];
const isPhase = (value: unknown): value is AskPhase => phases.includes(value as AskPhase);

const isAnswer = (value: unknown): value is WireAnswer =>
  typeof value === "object" &&
  value !== null &&
  typeof (value as WireAnswer).answerId === "string" &&
  Array.isArray((value as WireAnswer).blocks) &&
  typeof (value as WireAnswer).quotes === "object";

const isErrorBody = (value: unknown): value is AiErrorBody =>
  typeof value === "object" && value !== null && isCode((value as AiErrorBody).code);

async function readStream(
  response: Response,
  locale: "es" | "en",
  onPhase: (phase: AskPhase) => void,
): Promise<AskOutcome> {
  if (!response.body) return { kind: "error", error: aiErrorBody("ai_provider_down", locale) };
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  for (;;) {
    const { done, value } = await reader.read();
    buffer += decoder.decode(value, { stream: !done }).replace(/\r\n/g, "\n");
    const parsed = parseSse(done ? `${buffer}\n\n` : buffer);
    buffer = parsed.rest;
    for (const { event, data } of parsed.events) {
      if (event === "phase") {
        const phase = (data as { phase?: unknown }).phase;
        if (isPhase(phase)) onPhase(phase);
      } else if (event === "answer" && isAnswer(data)) {
        return { kind: "answer", answer: data };
      } else if (event === "error") {
        return {
          kind: "error",
          error: isErrorBody(data) ? aiErrorBody(data.code, locale) : aiErrorBody("ai_misconfigured", locale),
        };
      }
    }
    if (done) return { kind: "error", error: aiErrorBody("ai_provider_down", locale) };
  }
}

export function useAskStream() {
  const controller = useRef<AbortController | null>(null);

  useEffect(
    () => () => {
      controller.current?.abort();
    },
    [],
  );

  const guarded = useCallback(
    async <T>(
      run: (signal: AbortSignal) => Promise<T>,
      locale: "es" | "en",
      fail: (error: AiErrorBody) => T,
      stopped: T,
    ): Promise<T> => {
      controller.current?.abort();
      const own = new AbortController();
      controller.current = own;
      let timedOut = false;
      const timer = window.setTimeout(() => {
        timedOut = true;
        own.abort();
      }, timeoutMs);
      try {
        return await run(own.signal);
      } catch {
        if (timedOut) return fail(aiErrorBody("ai_timeout", locale));
        return own.signal.aborted ? stopped : fail(aiErrorBody("ai_provider_down", locale));
      } finally {
        window.clearTimeout(timer);
        if (controller.current === own) controller.current = null;
      }
    },
    [],
  );

  const ask = useCallback(
    (request: AskRequest, onPhase: (phase: AskPhase) => void): Promise<AskOutcome> =>
      guarded<AskOutcome>(
        async (signal) => {
          const response = await fetch(askRoute, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "text/event-stream" },
            body: JSON.stringify(request),
            signal,
          });
          if (!response.ok) return { kind: "error", error: await readFailure(response, request.locale) };
          return readStream(response, request.locale, onPhase);
        },
        request.locale,
        (error) => ({ kind: "error", error }),
        { kind: "stopped" },
      ),
    [guarded],
  );

  const more = useCallback(
    (answerId: string, offset: number, locale: "es" | "en"): Promise<MoreOutcome> =>
      guarded<MoreOutcome>(
        async (signal) => {
          const response = await fetch(moreRoute, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answerId, offset }),
            signal,
          });
          if (!response.ok) return { kind: "error", error: await readFailure(response, locale) };
          const body: unknown = await response.json().catch(() => null);
          if (typeof body !== "object" || body === null || !Array.isArray((body as AskMoreResponse).blocks))
            return { kind: "error", error: aiErrorBody("ai_misconfigured", locale) };
          return { kind: "more", response: body as AskMoreResponse };
        },
        locale,
        (error) => ({ kind: "error", error }),
        { kind: "stopped" },
      ),
    [guarded],
  );

  const stop = useCallback(() => controller.current?.abort(), []);

  return { ask, more, stop };
}

const plainText = (text: string) => text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function keywords(text: string): Set<string> {
  return new Set(
    plainText(text)
      .split(/[^a-z0-9ñ]+/)
      .filter((word) => word.length >= minWord && !stopWords.has(word)),
  );
}

export type NoteSources = {
  notes: Note[];
  highlights: Highlight[];
  active: ChapterKey;
  question: string;
  refOf: (book: string, chapter: number, verse: number | null) => string;
  highlightText: (highlight: Highlight) => string | null;
};

export type AskNote = AskRequest["notes"][number];

export function pickNotes({ notes, highlights, active, question, refOf, highlightText }: NoteSources): AskNote[] {
  const wanted = keywords(question);
  const related = notes
    .filter((note) => !sameChapter(note, active) && note.text.trim() !== "")
    .map((note) => ({ note, score: [...keywords(note.text)].filter((word) => wanted.has(word)).length }))
    .sort((left, right) => right.score - left.score || right.note.updatedAt - left.note.updatedAt)
    .slice(0, maxRelated)
    .map(({ note }) => note);
  const here = notes
    .filter((note) => sameChapter(note, active) && note.text.trim() !== "")
    .sort((left, right) => (left.verse ?? 0) - (right.verse ?? 0))
    .map((note): AskNote => ({ text: note.text, ref: refOf(note.book, note.chapter, note.verse) }));
  const marked = highlights
    .filter((highlight) => sameChapter(highlight, active))
    .sort((left, right) => left.verse - right.verse)
    .flatMap((highlight): AskNote[] => {
      const text = highlightText(highlight)?.trim();
      return text ? [{ text, ref: refOf(highlight.book, highlight.chapter, highlight.verse) }] : [];
    });
  const elsewhere = related.map((note): AskNote => ({
    text: note.text,
    ref: refOf(note.book, note.chapter, note.verse),
  }));
  const room = maxNotes - elsewhere.length;
  const picked: AskNote[] = [];
  let chars = 0;
  for (const item of [...here, ...marked].slice(0, room).concat(elsewhere)) {
    const text = item.text.slice(0, maxNoteChars);
    if (chars + text.length > maxNotesChars) break;
    chars += text.length;
    picked.push({ text, ref: item.ref });
  }
  return picked;
}
