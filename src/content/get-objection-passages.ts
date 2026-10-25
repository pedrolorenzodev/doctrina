import "server-only";
import type { Objection } from "@/content/model/page";
import { buildVerseView, verseLink } from "@/content/page-views";
import { registry } from "@/content/registry/index";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@/lib/locale";

export type PassageItem = {
  id: string;
  label: string;
  text: string | null;
};

export type ObjectionPassages = {
  answer: PassageItem[];
  objector: PassageItem[];
  note: string | null;
};

export function getObjectionPassages(objection: Objection, locale: Locale): ObjectionPassages {
  const text = getUiText(locale);
  const item = (segment: string): PassageItem => {
    const quote = buildVerseView([segment], registry, locale, text).quote?.text.trim();
    return { id: segment, label: verseLink([segment], locale).label, text: quote || null };
  };
  const { answer, objector, objectorNote } = objection.passages;
  return { answer: answer.map(item), objector: objector.map(item), note: objectorNote ?? null };
}
