import { allFathers } from "@/content/history/all-fathers";
import type { Father } from "@/content/model/history";
import { validateFathers } from "@/content/validate-history";
import type { Locale } from "@/lib/locale";

const problems = validateFathers(allFathers);
if (problems.length > 0) throw new Error(`Invalid history content:\n${problems.slice(0, 20).join("\n")}`);

const fathersByLocale: Record<Locale, Father[]> = { es: allFathers, en: allFathers };

export function getPublishedFathers(locale: Locale): Father[] {
  return fathersByLocale[locale];
}

export function getFather(id: string, locale: Locale): Father | null {
  return fathersByLocale[locale].find((father) => father.id === id) ?? null;
}

export function getFatherNeighbors(id: string, locale: Locale): { previous: Father | null; next: Father | null } {
  const list = fathersByLocale[locale];
  const index = list.findIndex((father) => father.id === id);
  return { previous: list[index - 1] ?? null, next: list[index + 1] ?? null };
}
