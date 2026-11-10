import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { TraditionPage } from "@/content/model/page";

type FocusEntry = { refs: string[]; focus: string[]; status: "proposed" | "confirmed" };

const byPage = new Map<string, FocusEntry[]>();

function entriesOf(page: Pick<TraditionPage, "doctrine" | "tradition">): FocusEntry[] {
  const key = `${page.doctrine}-${page.tradition}`;
  const cached = byPage.get(key);
  if (cached) return cached;
  let entries: FocusEntry[] = [];
  try {
    const file = join(process.cwd(), "data/passages/focus", `${key}.json`);
    entries = (JSON.parse(readFileSync(file, "utf8")) as { passages: FocusEntry[] }).passages;
  } catch {
    entries = [];
  }
  byPage.set(key, entries);
  return entries;
}

export function passageFocus(page: Pick<TraditionPage, "doctrine" | "tradition">, refs: string[]): Set<string> {
  const entry = entriesOf(page).find((candidate) => JSON.stringify(candidate.refs) === JSON.stringify(refs));
  return new Set(entry?.focus ?? []);
}
