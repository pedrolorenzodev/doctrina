type Entry = { priority: number; handler: () => void };

const entries = new Set<Entry>();
let listening = false;

function onKeyDown(event: KeyboardEvent) {
  if (event.key !== "Escape" || entries.size === 0) return;
  const top = [...entries].reduce((best, entry) => (entry.priority > best.priority ? entry : best));
  event.preventDefault();
  top.handler();
}

export function registerEscape(priority: number, handler: () => void): () => void {
  const entry = { priority, handler };
  entries.add(entry);
  if (!listening) {
    addEventListener("keydown", onKeyDown);
    listening = true;
  }
  return () => {
    entries.delete(entry);
    if (entries.size === 0) {
      removeEventListener("keydown", onKeyDown);
      listening = false;
    }
  };
}

export const escapePriority = { drawer: 1, panel: 1, window: 2, reader: 3, search: 4 } as const;
