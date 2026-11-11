import "server-only";
import { en } from "@/content/ui-text/en";
import { es } from "@/content/ui-text/es";
import type { UiText } from "@/content/ui-text/types";
import type { Locale } from "@/lib/locale";

const texts: Record<Locale, UiText> = { es, en };

export function getUiText(locale: Locale): UiText {
  return texts[locale];
}
