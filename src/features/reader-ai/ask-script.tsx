"use client";

import { createContext, useContext } from "react";
import { fatherWorkHref } from "@/content/routes";
import type { CitationView } from "@/lib/citation-view";
import type { Locale } from "@/lib/locale";
import {
  isLiveId,
  isPendingLiveId,
  liveAsAnswer,
  liveChipId,
  liveChipLabel,
  type LiveLabels,
  type LiveSnapshot,
} from "@/features/reader-ai/live-answers";
import { quoteViews } from "@/features/reader-ai/quote-views";
import { quotes, type Quote } from "@/features/reader-ai/quotes";
import {
  answers,
  chips,
  exampleHistory,
  routeQuestion,
  suggestionSets,
  traditions,
  type Answer,
  type Opening,
} from "@/features/reader-ai/script";
import type { AskText } from "@/features/reader-ai/text";

export type AskScriptData = {
  id: string;
  answers: Record<string, Answer>;
  chips: Record<string, string>;
  suggestionSets: Record<Opening, { id: string; label: string }[]>;
  exampleHistory: { question: string; date: string }[];
  quotes: Record<string, Quote>;
  traditions: { name: string; quotes: string[] }[];
  route: (question: string) => string;
};

export type AskScript = AskScriptData & {
  answer: (id: string) => Answer;
  quote: (id: string) => Quote;
};

export function makeScript(data: AskScriptData): AskScript {
  return {
    ...data,
    answer: (id) => {
      const found = data.answers[id];
      if (!found) throw new Error(`unknown answer ${id} in script ${data.id}`);
      return found;
    },
    quote: (id) => {
      const found = data.quotes[id];
      if (!found) throw new Error(`unknown quote ${id} in script ${data.id}`);
      return found;
    },
  };
}

const pendingAnswer: Answer = { question: "", scope: "", follow: [] };

const liveAnswers = new WeakMap<object, { labels: LiveLabels; answer: Answer }>();

const sameLabels = (left: LiveLabels, right: LiveLabels) =>
  left.more === right.more &&
  left.retry === right.retry &&
  left.metaCoverage === right.metaCoverage &&
  left.metaMore === right.metaMore;

export function withLiveAnswers(base: AskScript, live: LiveSnapshot, labels: LiveLabels): AskScript {
  const chipLabels: Record<string, string> = { ...base.chips };
  for (const wire of Object.values(live.answers)) {
    wire.followups.forEach((_, index) => {
      chipLabels[liveChipId(wire.answerId, "followup", index)] = liveChipLabel(
        wire,
        { answerId: wire.answerId, action: "followup", index },
        labels,
      );
    });
    if (wire.note) chipLabels[liveChipId(wire.answerId, "note")] = wire.note.suggestion;
    chipLabels[liveChipId(wire.answerId, "more")] = labels.more;
    chipLabels[liveChipId(wire.answerId, "retry")] = labels.retry;
  }
  return {
    ...base,
    chips: chipLabels,
    quotes: { ...base.quotes, ...live.quotes },
    answer: (id) => {
      if (!isLiveId(id)) return base.answer(id);
      if (isPendingLiveId(id)) return pendingAnswer;
      const wire = live.answers[id.slice("live:".length)];
      if (!wire) throw new Error(`unknown live answer ${id} in script ${base.id}`);
      const cached = liveAnswers.get(wire);
      if (cached && sameLabels(cached.labels, labels)) return cached.answer;
      const answer = liveAsAnswer(wire, labels);
      liveAnswers.set(wire, { labels, answer });
      return answer;
    },
    quote: (id) => live.quotes[id] ?? base.quote(id),
  };
}

export const bibleScript = makeScript({
  id: "bible",
  answers,
  chips,
  suggestionSets,
  exampleHistory,
  quotes,
  traditions,
  route: routeQuestion,
});

const AskScriptContext = createContext<AskScript>(bibleScript);

export const AskScriptProvider = AskScriptContext.Provider;

export function useAskScript(): AskScript {
  return useContext(AskScriptContext);
}

export function liveQuoteViews(
  locale: Locale,
  text: AskText["cite"],
  live: LiveSnapshot,
): Record<string, CitationView> {
  const views = quoteViews(locale, text, live.quotes as Record<string, Quote>);
  return Object.fromEntries(
    Object.entries(views).map(([id, view]) => {
      const wire = live.wire[id];
      const href = wire?.father
        ? `${fatherWorkHref(locale, wire.father.workId)}#d-${wire.father.anchor}`
        : (wire?.href ?? null);
      const dated = wire?.date ? { ...view, date: wire.date } : view;
      return [id, href ? { ...dated, fullSource: true, fullSourceHref: href } : dated];
    }),
  );
}
