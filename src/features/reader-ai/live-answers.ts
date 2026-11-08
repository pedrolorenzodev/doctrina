import type { AskMoreResponse, WireAnswer, WireQuote } from "@/lib/ai/contracts";
import type { Quote } from "@/features/reader-ai/quotes";
import type { Answer } from "@/features/reader-ai/script";

export type LiveSnapshot = {
  version: number;
  answers: Readonly<Record<string, WireAnswer>>;
  quotes: Readonly<Record<string, Quote>>;
  wire: Readonly<Record<string, WireQuote>>;
};

export type LiveLabels = { more: string; retry: string; metaCoverage: string; metaMore: string };

export type LiveChip = { answerId: string; action: "followup" | "more" | "retry" | "note"; index: number };

const liveEntryPrefix = "live:";
const chipPattern = /^live:(.+):(f(\d+)|more|retry|note)$/;
const tokenPattern = /\{q:([^}\s]+)\}/g;
const errorPrefix = "error:";

export const noLiveAnswers: LiveSnapshot = { version: 0, answers: {}, quotes: {}, wire: {} };

export const liveId = (answerId: string) => `${liveEntryPrefix}${answerId}`;
export const isLiveId = (id: string) => id.startsWith(liveEntryPrefix);
export const pendingLiveId = (key: number) => `${liveEntryPrefix}pending-${key}`;
export const isPendingLiveId = (id: string) => id.startsWith(`${liveEntryPrefix}pending-`);
export const liveChipId = (answerId: string, action: LiveChip["action"], index = 0) =>
  `${liveEntryPrefix}${answerId}:${action === "followup" ? `f${index}` : action}`;

export function parseLiveChip(chip: string): LiveChip | null {
  const found = chipPattern.exec(chip);
  if (!found?.[1] || !found[2]) return null;
  if (found[2] === "more" || found[2] === "retry" || found[2] === "note")
    return { answerId: found[1], action: found[2], index: 0 };
  return { answerId: found[1], action: "followup", index: Number(found[3]) };
}

const scoped = (answerId: string, id: string) => `${answerId}~${id}`;

function toQuote(wire: WireQuote): Quote {
  const startsWithWho = wire.bible && wire.who !== "" && wire.work.startsWith(`${wire.who} `);
  return {
    who: wire.who,
    work: startsWithWho ? wire.work.slice(wire.who.length + 1) : wire.work,
    text: wire.text,
    edition: wire.edition,
    ...(wire.bible ? { bible: { book: wire.bible.book, chapter: wire.bible.chapter, verse: wire.bible.verse } } : {}),
  };
}

export function scopeAnswer(answer: WireAnswer): WireAnswer {
  const id = answer.answerId;
  const rename = (quote: string) => scoped(id, quote);
  return {
    ...answer,
    blocks: answer.blocks.map((block) => ({ ...block, quote: rename(block.quote) })),
    ...(answer.words ? { words: answer.words.map((row) => ({ ...row, quote: rename(row.quote) })) } : {}),
    ...(answer.prose
      ? { prose: answer.prose.replace(tokenPattern, (_, quote: string) => `{q:${rename(quote)}}`) }
      : {}),
    quotes: Object.fromEntries(
      Object.entries(answer.quotes).map(([quote, wire]) => [rename(quote), { ...wire, id: rename(quote) }]),
    ),
    consulted: answer.consulted.map(rename),
  };
}

export const liveClock = (): number => performance.now();

export function compactForSave(answer: WireAnswer): WireAnswer {
  return {
    ...answer,
    quotes: Object.fromEntries(
      Object.entries(answer.quotes).map(([id, quote]) => {
        const kept: WireQuote = { ...quote };
        delete kept.context;
        return [id, kept];
      }),
    ),
  };
}

let snapshot: LiveSnapshot = noLiveAnswers;
const listeners = new Set<() => void>();

const emit = () => listeners.forEach((listener) => listener());

export function subscribeLive(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export const getLive = (): LiveSnapshot => snapshot;

export function putLiveAnswer(raw: WireAnswer): WireAnswer {
  const answer = scopeAnswer(raw);
  snapshot = {
    version: snapshot.version + 1,
    answers: { ...snapshot.answers, [answer.answerId]: answer },
    quotes: {
      ...snapshot.quotes,
      ...Object.fromEntries(Object.entries(answer.quotes).map(([id, wire]) => [id, toQuote(wire)])),
    },
    wire: { ...snapshot.wire, ...answer.quotes },
  };
  emit();
  return answer;
}

export const rootOf = (answerId: string) => answerId.split(":more:")[0] ?? answerId;

export function moreOffset(live: LiveSnapshot, root: string): number {
  return Object.values(live.answers)
    .filter((answer) => answer.kind === "more" && rootOf(answer.answerId) === root)
    .reduce((total, answer) => total + answer.blocks.length, 0);
}

export function moreAsAnswer(
  base: WireAnswer,
  offset: number,
  response: AskMoreResponse,
  question: string,
): WireAnswer {
  return {
    answerId: `${base.answerId}:more:${offset}`,
    kind: "more",
    question,
    scope: base.scope,
    blocks: response.blocks,
    quotes: response.quotes,
    consulted: response.consulted,
    followups: [],
    more: response.more,
    cached: false,
    promptVersion: base.promptVersion,
  };
}

let errorSerial = 0;

export const retryTargets = new Map<string, string | null>();

export function errorAsAnswer(message: string, retry: boolean, question: string, redo: string | null): WireAnswer {
  errorSerial += 1;
  const answerId = `${errorPrefix}${Date.now().toString(36)}-${errorSerial}`;
  if (retry) retryTargets.set(answerId, redo);
  return {
    answerId,
    kind: "not_found",
    question,
    scope: "",
    plain: message,
    blocks: [],
    quotes: {},
    consulted: [],
    followups: retry ? ["retry"] : [],
    more: false,
    fixed: true,
    cached: false,
    promptVersion: "",
  };
}

export const isErrorAnswer = (answer: WireAnswer) => answer.answerId.startsWith(errorPrefix);

export function liveAsAnswer(wire: WireAnswer, labels: LiveLabels): Answer {
  const id = wire.answerId;
  const error = isErrorAnswer(wire);
  const follow = error
    ? wire.followups.map(() => liveChipId(id, "retry"))
    : [
        ...(wire.note ? [liveChipId(id, "note")] : []),
        ...wire.followups.map((_, index) => liveChipId(id, "followup", index)),
        ...(wire.more ? [liveChipId(id, "more")] : []),
      ];
  const meta =
    wire.kind === "more"
      ? labels.metaMore
      : wire.scope && !wire.fixed
        ? labels.metaCoverage.replace("{scope}", wire.scope)
        : undefined;
  return {
    question: wire.question,
    scope: wire.scope,
    ...(wire.blocks.length > 0 ? { blocks: wire.blocks } : {}),
    ...(wire.disputed ? { disputed: wire.disputed } : {}),
    ...(wire.words ? { words: wire.words } : {}),
    ...(wire.prose ? { prose: wire.prose } : {}),
    ...(wire.plain ? { plain: wire.plain } : {}),
    ...(wire.fixed ? { fixed: true } : {}),
    ...(meta ? { meta } : {}),
    consulted: wire.consulted,
    ...(wire.note && !error ? { note: wire.note } : {}),
    follow,
  };
}

export function liveChipLabel(wire: WireAnswer, chip: LiveChip, labels: LiveLabels): string {
  if (chip.action === "more") return labels.more;
  if (chip.action === "retry") return labels.retry;
  if (chip.action === "note") return wire.note?.suggestion ?? "";
  return wire.followups[chip.index] ?? "";
}
