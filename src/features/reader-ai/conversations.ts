import type { AskPill } from "@/lib/ask-drawer";
import type { AnswerId, Opening } from "@/features/reader-ai/script";

export type SavedEntry = {
  key: number;
  id: AnswerId;
  question: string;
  pill: AskPill | null;
  scopeName: string;
  seconds: number;
};

export type Conversation = { id: string; script: string; opening: Opening; startedAt: string; entries: SavedEntry[] };

const storageKey = "doctrina-ask-conversations";
const keep = 50;

const fresh = (opening: Opening, script: string): Conversation => ({
  id: `c${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
  script,
  opening,
  startedAt: new Date().toISOString(),
  entries: [],
});

let current: Conversation = fresh("chapter", "bible");

function readStored(): Conversation[] {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    return Array.isArray(parsed)
      ? (parsed as Conversation[]).map((saved) => ({ ...saved, script: saved.script ?? "bible" }))
      : [];
  } catch {
    return [];
  }
}

function writeStored(list: Conversation[]): void {
  try {
    localStorage.setItem(storageKey, JSON.stringify(list.slice(0, keep)));
  } catch {
    return;
  }
}

export function currentConversation(): Conversation {
  return current;
}

export function startConversation(opening: Opening, script: string): Conversation {
  current = fresh(opening, script);
  return current;
}

export function openConversation(conversation: Conversation): void {
  current = conversation;
}

export function recordEntry(entry: SavedEntry): void {
  current = { ...current, entries: [...current.entries, entry] };
  writeStored([current, ...readStored().filter((saved) => saved.id !== current.id)]);
}

export function savedConversations(script: string): Conversation[] {
  return readStored().filter((saved) => saved.script === script && saved.entries.length > 0);
}
