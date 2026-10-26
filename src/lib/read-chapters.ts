export const readChapterKey = (book: string, chapter: number) => `${book}.${chapter}`;

const keyPattern = /^[0-9A-Za-z]{2,12}\.[1-9][0-9]{0,3}$/;

export function parseReadChapters(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  const keys = raw.filter((item): item is string => typeof item === "string" && keyPattern.test(item));
  return [...new Set(keys)];
}
