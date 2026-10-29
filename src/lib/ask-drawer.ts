export type AskPill = { reference: string; text: string };

type AskDrawerState = { open: boolean; pill: AskPill | null; focus: boolean; serial: number };

let state: AskDrawerState = { open: false, pill: null, focus: false, serial: 0 };
const listeners = new Set<() => void>();

function set(next: Partial<AskDrawerState>) {
  state = { ...state, ...next, serial: state.serial + 1 };
  listeners.forEach((listener) => listener());
}

export const closedAskDrawer: AskDrawerState = { open: false, pill: null, focus: false, serial: 0 };

export function subscribeAskDrawer(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getAskDrawer(): AskDrawerState {
  return state;
}

export function openAskDrawer({ pill = null, focus = false }: { pill?: AskPill | null; focus?: boolean } = {}): void {
  set({ open: true, pill, focus });
}

export function closeAskDrawer(): void {
  if (state.open) set({ open: false, pill: null, focus: false });
}

export function toggleAskDrawer(): void {
  if (state.open) closeAskDrawer();
  else openAskDrawer();
}

export function clearAskPill(): void {
  if (state.pill) set({ pill: null });
}
