export type RedPiece = { from: number; to: number; red: boolean };

export function splitByRed(from: number, to: number, red: [number, number][] | undefined): RedPiece[] {
  const cuts = new Set<number>([from, to]);
  for (const [start, end] of red ?? []) {
    if (start > from && start < to) cuts.add(start);
    if (end > from && end < to) cuts.add(end);
  }
  const points = [...cuts].sort((a, b) => a - b);
  const pieces: RedPiece[] = [];
  for (let at = 0; at < points.length - 1; at += 1) {
    const start = points[at]!;
    const end = points[at + 1]!;
    pieces.push({ from: start, to: end, red: (red ?? []).some(([a, b]) => a <= start && b >= end) });
  }
  return pieces;
}
