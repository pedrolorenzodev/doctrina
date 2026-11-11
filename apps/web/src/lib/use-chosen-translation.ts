import { useSyncExternalStore } from "react";
import { currentTranslationChoice, subscribeTranslationChoice } from "@/lib/translation-choice";

export function useChosenTranslation(ids: string[], defaultId: string): string {
  const stored = useSyncExternalStore(subscribeTranslationChoice, currentTranslationChoice, () => null);
  return stored && ids.includes(stored) ? stored : defaultId;
}
