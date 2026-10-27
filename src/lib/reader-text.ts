export const readerTextStorageKey = "doctrina-reader-text";

export const readerWeights = [200, 300, 400, 500, 600] as const;
export const readerLeadings = [1.45, 1.55, 1.66, 1.8, 1.95] as const;
export const readerMeasures = [560, 640, 720, 800, 880] as const;

export type ReaderText = { weight: number; leading: number; measure: number; justify: boolean };

export const defaultReaderText: ReaderText = { weight: 300, leading: 1.66, measure: 720, justify: false };

const defaultMeasureIndex = readerMeasures.indexOf(720);

export const readerTextInitScript = `(function(){var t;try{t=JSON.parse(localStorage.getItem("${readerTextStorageKey}"))}catch(e){}if(!t)return;var d=document.documentElement,s=d.style;if([${readerWeights.join(",")}].indexOf(t.weight)>-1)s.setProperty("--reader-weight",t.weight);if([${readerLeadings.join(",")}].indexOf(t.leading)>-1)s.setProperty("--text-reader--line-height",t.leading);var m=[${readerMeasures.join(",")}].indexOf(t.measure);if(m>-1){s.setProperty("--reader-measure",t.measure+"px");if(m>${defaultMeasureIndex})d.dataset.readerWider=m-${defaultMeasureIndex}}if(t.justify===true)d.dataset.readerJustify=""})();`;

function pick<T extends number>(list: readonly T[], value: unknown, fallback: T): T {
  return list.find((item) => item === value) ?? fallback;
}

export function parseReaderText(raw: string | null): ReaderText {
  if (!raw) return defaultReaderText;
  try {
    const parsed = JSON.parse(raw) as Partial<ReaderText> | null;
    if (typeof parsed !== "object" || parsed === null) return defaultReaderText;
    return {
      weight: pick(readerWeights, parsed.weight, defaultReaderText.weight),
      leading: pick(readerLeadings, parsed.leading, defaultReaderText.leading),
      measure: pick(readerMeasures, parsed.measure, defaultReaderText.measure),
      justify: parsed.justify === true,
    };
  } catch {
    return defaultReaderText;
  }
}

export function applyReaderText(value: ReaderText): void {
  const root = document.documentElement;
  root.style.setProperty("--reader-weight", String(value.weight));
  root.style.setProperty("--text-reader--line-height", String(value.leading));
  root.style.setProperty("--reader-measure", `${value.measure}px`);
  const wider = readerMeasures.indexOf(value.measure as (typeof readerMeasures)[number]) - defaultMeasureIndex;
  if (wider > 0) root.dataset.readerWider = String(wider);
  else delete root.dataset.readerWider;
  if (value.justify) root.dataset.readerJustify = "";
  else delete root.dataset.readerJustify;
}

export function steppedValue<T extends number>(list: readonly T[], current: T, direction: -1 | 1): T {
  const index = list.indexOf(current);
  return list[Math.max(0, Math.min(list.length - 1, index + direction))] ?? current;
}

let cache: { raw: string | null; value: ReaderText } | null = null;
let chosen: ReaderText | null = null;

const listeners = new Set<() => void>();

export function subscribeReaderText(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function currentReaderText(): ReaderText {
  if (chosen) return chosen;
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(readerTextStorageKey);
  } catch {
    raw = null;
  }
  if (!cache || cache.raw !== raw) cache = { raw, value: parseReaderText(raw) };
  return cache.value;
}

function storeReaderText(value: ReaderText): void {
  try {
    localStorage.setItem(readerTextStorageKey, JSON.stringify(value));
  } catch {
    return;
  }
}

export function chooseReaderText(change: Partial<ReaderText>): void {
  chosen = { ...currentReaderText(), ...change };
  storeReaderText(chosen);
  applyReaderText(chosen);
  listeners.forEach((listener) => listener());
}
