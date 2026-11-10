import type { NameLanguage } from "@/content/bible-reference/names";

export const translationDefaults = {
  es: "rv1909",
  en: "bsb",
  deuterocanon: "dra",
} as const satisfies Record<NameLanguage | "deuterocanon", string>;
