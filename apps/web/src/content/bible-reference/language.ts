import type { NameLanguage } from "@/content/bible-reference/names";
import type { ParsedPart } from "@/content/bible-reference/parse";
import { translationDefaults } from "@/content/bible/translation-defaults";

export function detectQueryLanguage(parts: ParsedPart[], fallback?: NameLanguage): NameLanguage | "unknown" {
  let es = 0;
  let en = 0;
  for (const part of parts) {
    if ("error" in part) continue;
    if (part.passage.language === "es") es += 1;
    if (part.passage.language === "en") en += 1;
  }
  if (es > en) return "es";
  if (en > es) return "en";
  return fallback ?? "unknown";
}

export function translationForLanguage(language: NameLanguage): string {
  return translationDefaults[language];
}
