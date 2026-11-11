import { useEffect, useState } from "react";

const startDelayMs = 200;
const wordMs = 45;

export function useStream(running: boolean, ticks: number, onDone: () => void) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!running) return;
    let timer = 0;
    let current = 0;
    const next = () => {
      current += 1;
      setTick(current);
      if (current >= ticks) {
        onDone();
        return;
      }
      timer = window.setTimeout(next, wordMs);
    };
    timer = window.setTimeout(next, startDelayMs);
    return () => window.clearTimeout(timer);
  }, [running, ticks, onDone]);

  return { tick, reset: () => setTick(0) };
}
