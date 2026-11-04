"use client";

import { createContext, useContext } from "react";
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
