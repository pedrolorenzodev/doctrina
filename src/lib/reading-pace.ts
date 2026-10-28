export const readingRule = {
  wordsPerMinute: 238,
  minSeenShare: 0.8,
  minPaceShare: 0.5,
  idleMs: 5000,
  tickMs: 500,
  visibleRatio: 0.9,
};

type Reading = {
  creditedWords: number;
  totalWords: number;
  activeSeconds: number;
  reachedEnd: boolean;
};

export function assessReading({
  creditedWords,
  totalWords,
  activeSeconds,
  reachedEnd,
}: Reading): "none" | "doubt" | "read" {
  if (!reachedEnd || totalWords === 0) return "none";
  const seen = creditedWords / totalWords >= readingRule.minSeenShare;
  const needed = (creditedWords / readingRule.wordsPerMinute) * 60 * readingRule.minPaceShare;
  return seen && activeSeconds >= needed ? "read" : "doubt";
}

export const wordsOf = (text: string): number => text.split(/\s+/).filter((word) => word !== "").length;
