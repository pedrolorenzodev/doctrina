import "server-only";
import { bibleReferenceHref } from "@/content/bible-routes";
import type { Objection } from "@/content/model/page";
import { buildVerseView, verseLink } from "@/content/page-views";
import { registry } from "@/content/registry/index";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@doctrina/core/locale";

export type PassageItem = {
  id: string;
  label: string;
  text: string | null;
  href: string | null;
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
    return {
      id: segment,
      label: verseLink([segment], locale).label,
      text: quote || null,
      href: bibleReferenceHref(locale, segment),
    };
  };
  const { answer, objector, objectorNote } = objection.passages;
  return { answer: answer.map(item), objector: objector.map(item), note: objectorNote ?? null };
}
