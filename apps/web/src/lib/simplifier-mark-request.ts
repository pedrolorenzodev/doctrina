const expiresAfterMs = 25000;

let pending: { id: string; selected: string; at: number } | null = null;

export function requestSimplifierMark(id: string, selected: string): void {
  pending = { id, selected, at: Date.now() };
}

export function takeSimplifierMark(id: string): string | null {
  const request = pending;
  pending = null;
  if (!request || request.id !== id || request.selected === "" || Date.now() - request.at > expiresAfterMs) return null;
  return request.selected;
}
