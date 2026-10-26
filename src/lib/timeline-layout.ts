export type LayoutItem = {
  id: string;
  start: number;
  end: number;
  leadStart: number | null;
  birthUnknown: boolean;
  isRange: boolean;
};

export type Scale = { from: number; to: number; width: number };

export type PlacedItem = {
  id: string;
  left: number;
  right: number;
  labelLeft: number;
};

const unknownBirthLead = 30;
const pointRadius = 5;
const rowGap = 14;
const spanTail = 6;

export function percentOf(scale: Scale, year: number): number {
  const clamped = Math.max(scale.from, Math.min(scale.to, year));
  return ((clamped - scale.from) / (scale.to - scale.from)) * 100;
}

export function pixelsOf(scale: Scale, year: number): number {
  return (percentOf(scale, year) / 100) * scale.width;
}

export function placeItem(scale: Scale, item: LayoutItem, labelWidth: number): PlacedItem {
  const isPoint = !item.isRange && !item.birthUnknown && item.leadStart === null && item.start === item.end;
  const first = pixelsOf(scale, item.leadStart ?? item.start);
  const last = pixelsOf(scale, Math.min(item.end, scale.to));
  const lead = item.birthUnknown ? unknownBirthLead : 0;
  const pointPad = isPoint ? pointRadius : 0;
  const start = Math.max(0, first - lead - pointPad);
  const fits = start + labelWidth <= scale.width;
  const labelStart = fits ? start : Math.max(0, last + pointPad - labelWidth);
  const left = Math.min(labelStart, start);
  const right = Math.min(scale.width, Math.max(labelStart + labelWidth, last + spanTail));
  return { id: item.id, left, right, labelLeft: labelStart - left };
}

export function packRows(placed: PlacedItem[], gap = rowGap): PlacedItem[][] {
  const rows: { end: number; items: PlacedItem[] }[] = [];
  for (const item of [...placed].sort((a, b) => a.left - b.left)) {
    const row = rows.find((candidate) => candidate.end + gap <= item.left);
    if (row) {
      row.items.push(item);
      row.end = item.right;
    } else {
      rows.push({ end: item.right, items: [item] });
    }
  }
  return rows.map((row) => row.items);
}
