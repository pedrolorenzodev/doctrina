import { useSyncExternalStore } from "react";

type Viewport = { width: number; height: number };

function subscribe(callback: () => void) {
  addEventListener("resize", callback);
  return () => removeEventListener("resize", callback);
}

const snapshot = () => `${innerWidth}x${innerHeight}`;
const serverSnapshot = () => "1440x900";

export function useViewport(): Viewport {
  const [width = 0, height = 0] = useSyncExternalStore(subscribe, snapshot, serverSnapshot).split("x").map(Number);
  return { width, height };
}

export function useMediaQuery(query: string, serverValue: boolean): boolean {
  return useSyncExternalStore(
    (callback) => {
      const media = matchMedia(query);
      media.addEventListener("change", callback);
      return () => media.removeEventListener("change", callback);
    },
    () => matchMedia(query).matches,
    () => serverValue,
  );
}
