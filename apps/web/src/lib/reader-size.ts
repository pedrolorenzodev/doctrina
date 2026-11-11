export const readerSizeStorageKey = "doctrina-reader-size";

export const readerSizes = [17, 19, 21, 23, 25, 27, 29] as const;

export const defaultReaderSize = 19;

const sizeProperty = "--text-reader";

export const readerSizeInitScript = `(function(){var s;try{s=localStorage.getItem("${readerSizeStorageKey}")}catch(e){}var n=+s;if([${readerSizes.join(",")}].indexOf(n)>-1)document.documentElement.style.setProperty("${sizeProperty}",n+"px")})()`;

export function readStoredReaderSize(): number {
  try {
    const stored = Number(localStorage.getItem(readerSizeStorageKey));
    return readerSizes.some((size) => size === stored) ? stored : defaultReaderSize;
  } catch {
    return defaultReaderSize;
  }
}

export function storeReaderSize(size: number): void {
  try {
    localStorage.setItem(readerSizeStorageKey, String(size));
  } catch {
    return;
  }
}

export function applyReaderSize(size: number): void {
  document.documentElement.style.setProperty(sizeProperty, `${size}px`);
}

let chosen: number | null = null;

const listeners = new Set<() => void>();

export function subscribeReaderSize(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function currentReaderSize(): number {
  return chosen ?? readStoredReaderSize();
}

export function chooseReaderSize(size: number): void {
  chosen = size;
  storeReaderSize(size);
  applyReaderSize(size);
  listeners.forEach((listener) => listener());
}

export function steppedReaderSize(current: number, direction: -1 | 1): number {
  const index = readerSizes.findIndex((size) => size === current);
  const next = Math.max(
    0,
    Math.min(readerSizes.length - 1, (index < 0 ? readerSizes.indexOf(defaultReaderSize) : index) + direction),
  );
  return readerSizes[next] ?? defaultReaderSize;
}
