const openers = new Map<string, () => void>();

export function registerOpener(id: string, open: () => void) {
  openers.set(id, open);
}

export function unregisterOpener(id: string) {
  openers.delete(id);
}

export function openSimplifier(id: string): boolean {
  const open = openers.get(id);
  if (!open) return false;
  open();
  return true;
}
