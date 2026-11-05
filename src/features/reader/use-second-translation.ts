import { useSyncExternalStore } from "react";
import {
  bibleSecondStore,
  noSecond,
  type SecondChoice,
  type SecondChoiceStore,
  type SecondMode,
} from "@/lib/second-translation";

export function useSecondTranslation(
  ids: string[],
  firstId: string,
  store: SecondChoiceStore = bibleSecondStore,
): SecondChoice {
  const stored = useSyncExternalStore(store.subscribe, store.get, () => noSecond);
  return stored.id !== null && stored.id !== firstId && ids.includes(stored.id) ? stored : noSecond;
}

export function useSecondMode(store: SecondChoiceStore = bibleSecondStore): SecondMode {
  return useSyncExternalStore(
    store.subscribe,
    () => store.get().mode,
    () => noSecond.mode,
  );
}

const sideQuery = "(min-width: 68.75rem)";

const subscribeSideRoom = (listener: () => void) => {
  const query = matchMedia(sideQuery);
  query.addEventListener("change", listener);
  return () => query.removeEventListener("change", listener);
};

export function useSideRoom(): boolean {
  return useSyncExternalStore(
    subscribeSideRoom,
    () => matchMedia(sideQuery).matches,
    () => false,
  );
}
