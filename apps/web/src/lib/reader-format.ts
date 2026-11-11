export const readerFormatStorageKey = "doctrina-reader-format";

export const readerFormats = ["lines", "flow"] as const;

export type ReaderFormat = (typeof readerFormats)[number];

export const defaultReaderFormat: ReaderFormat = "lines";

export const readerFormatInitScript = `(function(){var f;try{f=localStorage.getItem("${readerFormatStorageKey}")}catch(e){}if(f==="flow")document.documentElement.dataset.readerFormat="flow"})();`;

export function readStoredReaderFormat(): ReaderFormat {
  try {
    const stored = localStorage.getItem(readerFormatStorageKey);
    return readerFormats.find((format) => format === stored) ?? defaultReaderFormat;
  } catch {
    return defaultReaderFormat;
  }
}

export function applyReaderFormat(format: ReaderFormat): void {
  if (format === "flow") document.documentElement.dataset.readerFormat = "flow";
  else delete document.documentElement.dataset.readerFormat;
}

let chosen: ReaderFormat | null = null;

const listeners = new Set<() => void>();

export function subscribeReaderFormat(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function currentReaderFormat(): ReaderFormat {
  return chosen ?? readStoredReaderFormat();
}

export function chooseReaderFormat(format: ReaderFormat): void {
  chosen = format;
  try {
    localStorage.setItem(readerFormatStorageKey, format);
  } catch {
    chosen = format;
  }
  applyReaderFormat(format);
  listeners.forEach((listener) => listener());
}
