const yearRange = /(\d+)\s*[–-]\s*(\d+)/;

export function writingYears(date: string, year: number): { start: number; end: number | null } {
  const range = yearRange.exec(date);
  return range ? { start: Number(range[1]), end: Number(range[2]) } : { start: year, end: null };
}
