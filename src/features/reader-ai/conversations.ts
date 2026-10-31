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

export type Conversation = { id: string; opening: Opening; startedAt: string; entries: SavedEntry[] };

const storageKey = "doctrina-ask-conversations";
const keep = 50;

const fresh = (opening: Opening): Conversation => ({
  id: `c${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
  opening,
  startedAt: new Date().toISOString(),
  entries: [],
});

let current: Conversation = fresh("chapter");

function readStored(): Conversation[] {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    return Array.isArray(parsed) ? (parsed as Conversation[]) : [];
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

export function startConversation(opening: Opening): Conversation {
  current = fresh(opening);
  return current;
}

export function openConversation(conversation: Conversation): void {
  current = conversation;
}

export function recordEntry(entry: SavedEntry): void {
  current = { ...current, entries: [...current.entries, entry] };
  writeStored([current, ...readStored().filter((saved) => saved.id !== current.id)]);
}

export function savedConversations(): Conversation[] {
  return readStored().filter((saved) => saved.entries.length > 0);
}
