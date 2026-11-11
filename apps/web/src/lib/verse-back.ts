export const verseBackKey = "doctrina-verse-back";

export type VerseBack = { href: string; label: string };

const listeners = new Set<() => void>();

export const verseBackInitScript = `(function(){try{if(sessionStorage.getItem("${verseBackKey}"))document.documentElement.dataset.verseBack=""}catch(e){}})();`;

function read(): string {
  try {
    return sessionStorage.getItem(verseBackKey) ?? "";
  } catch {
    return "";
  }
}

export function subscribeVerseBack(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export const currentVerseBack = read;

export const serverVerseBack = () => "";

export function parseVerseBack(raw: string): VerseBack | null {
  if (!raw) return null;
  try {
    const value: unknown = JSON.parse(raw);
    if (typeof value !== "object" || value === null) return null;
    const { href, label } = value as Record<string, unknown>;
    return typeof href === "string" && typeof label === "string" ? { href, label } : null;
  } catch {
    return null;
  }
}

export function rememberVerseBack(back: VerseBack): void {
  try {
    sessionStorage.setItem(verseBackKey, JSON.stringify(back));
  } catch {
    return;
  }
  document.documentElement.dataset.verseBack = "";
  listeners.forEach((listener) => listener());
}

export function clearVerseBack(): void {
  try {
    sessionStorage.removeItem(verseBackKey);
  } catch {
    return;
  }
  delete document.documentElement.dataset.verseBack;
  listeners.forEach((listener) => listener());
}
