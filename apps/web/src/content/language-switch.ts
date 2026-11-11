import type { Locale } from "@doctrina/core/locale";
import { localeHref } from "@doctrina/core/locale";
import { swapBibleLocale } from "./bible-routes";
import { doctrineIds, traditionIds, type DoctrineId, type TraditionId } from "./model/ids";
import {
  doctrineHref,
  earlyChristiansHref,
  glossaryHref,
  sourcesHref,
  glossaryTermHref,
  objectionHref,
  objectionsHref,
  passagesHref,
  swapHistoryLocale,
  traditionHref,
  visibleSpanishPath,
  wordHref,
} from "./routes";

export type PageAvailability = {
  glossary: boolean;
  sources?: boolean;
  doctrines: DoctrineId[];
  traditions: { doctrine: DoctrineId; tradition: TraditionId; objections: string[]; passages: boolean }[];
};

export type LanguageAvailability = Record<Locale, PageAvailability>;

const isWithin = (pathname: string, base: string) => pathname === base || pathname.startsWith(`${base}/`);

function doctrinesSwap(pathname: string, from: Locale, to: Locale, target: PageAvailability): string | null {
  const doctrine = doctrineIds.find((id) => isWithin(pathname, doctrineHref(from, id)));
  if (!doctrine || !target.doctrines.includes(doctrine)) return null;
  if (pathname === doctrineHref(from, doctrine)) return doctrineHref(to, doctrine);
  if (pathname === earlyChristiansHref(from, doctrine)) return earlyChristiansHref(to, doctrine);
  const tradition = traditionIds.find((id) => isWithin(pathname, traditionHref(from, doctrine, id)));
  const page = target.traditions.find((entry) => entry.doctrine === doctrine && entry.tradition === tradition);
  if (!tradition || !page) return null;
  if (pathname === traditionHref(from, doctrine, tradition)) return traditionHref(to, doctrine, tradition);
  if (pathname === passagesHref(from, doctrine, tradition))
    return page.passages ? passagesHref(to, doctrine, tradition) : null;
  if (pathname === objectionsHref(from, doctrine, tradition)) return objectionsHref(to, doctrine, tradition);
  const id = page.objections.find((candidate) => pathname === objectionHref(from, doctrine, tradition, candidate));
  return id ? objectionHref(to, doctrine, tradition, id) : null;
}

export function languageSwitchHref(
  current: string,
  from: Locale,
  to: Locale,
  availability: LanguageAvailability,
): string | null {
  if (current === localeHref(from)) return localeHref(to);
  const bible = swapBibleLocale(current, from, to);
  if (bible) return bible;
  const pathname = from === "es" ? visibleSpanishPath(current) : current;
  const swapped = swapHistoryLocale(pathname, from, to);
  if (swapped) return swapped;
  const target = availability[to];
  if (pathname === sourcesHref(from)) return target.sources ? sourcesHref(to) : null;
  if (pathname.startsWith(wordHref(from, ""))) return wordHref(to, pathname.slice(wordHref(from, "").length));
  if (isWithin(pathname, glossaryHref(from)) && target.glossary)
    return pathname === glossaryHref(from)
      ? glossaryHref(to)
      : glossaryTermHref(to, pathname.slice(glossaryHref(from).length + 1));
  return doctrinesSwap(pathname, from, to, target);
}
