import { datingByFather } from "@/content/history/dating.es";
import type { DatingRow, FatherDating } from "@/content/model/history";
import type { Locale } from "@/lib/locale";

const byDate = (a: DatingRow, b: DatingRow) =>
  a.start - b.start || (a.end ?? a.start) - (b.end ?? b.start) || (a.year ?? 0) - (b.year ?? 0);

export function getFatherDating(id: string, locale: Locale): FatherDating | null {
  const dating = locale === "es" ? datingByFather[id] : undefined;
  return dating ? { ...dating, rows: [...dating.rows].sort(byDate) } : null;
}
