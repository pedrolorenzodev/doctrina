import { useSyncExternalStore } from "react";
import { getSecondChoice, noSecond, subscribeSecondTranslation, type SecondChoice } from "@/lib/second-translation";

export function useSecondTranslation(ids: string[], firstId: string): SecondChoice {
  const stored = useSyncExternalStore(subscribeSecondTranslation, getSecondChoice, () => noSecond);
  return stored.id !== null && stored.id !== firstId && ids.includes(stored.id) ? stored : noSecond;
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
