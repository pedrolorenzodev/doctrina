import "server-only";
import { buildFatherView } from "@/content/father-view";
import { formatDate } from "@/content/format-date";
import { getPublishedFathers } from "@/content/get-fathers";
import { getDoctrinePage, getPublishedDoctrines } from "@/content/get-doctrine-page";
import { getTraditionPage } from "@/content/get-tradition-page";
import { traditionIds } from "@/content/model/ids";
import { officialObjections } from "@/content/official-objections";
import { objectionsPageText } from "@/content/objections-page-text";
import { plainRich } from "@/content/page-views";
import {
  earlyChristiansHref,
  fatherHref,
  timelineHref,
  objectionHref,
  objectionsHref,
  doctrineHref,
  traditionHref,
} from "@/content/routes";
import { doctrineName, doctrineSubject, traditionName } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { witnessReference } from "@/content/witness-view";
import type { Locale } from "@/lib/locale";
import { pathSeparator } from "@/lib/punctuation";
import type { SearchEntry } from "@/lib/search-match";

const gap = /\[\.\.\.\]/g;

export async function getSearchIndex(locale: Locale): Promise<SearchEntry[]> {
  const text = getUiText(locale);
  const entries: SearchEntry[] = [];
  const witnessEntries: SearchEntry[] = [];
  for (const doctrine of getPublishedDoctrines(locale)) {
    const doctrinePage = await getDoctrinePage(doctrine, locale);
    if (!doctrinePage) continue;
    const name = doctrineName(locale, doctrine);
    const doctrinePath = [text.shell.groupDoctrines, name].join(pathSeparator);
    const early = earlyChristiansHref(locale, doctrine);
    entries.push(
      {
        id: `doctrine:${doctrine}`,
        title: name,
        path: text.shell.groupDoctrines,
        date: null,
        texts: [doctrinePage.lede],
        quote: false,
        href: doctrineHref(locale, doctrine),
      },
      {
        id: `early:${doctrine}`,
        title: text.shell.tree.earlyChristians,
        path: doctrinePath,
        date: null,
        texts: [text.earlyChristians.lede.replaceAll("{subject}", doctrineSubject(locale, doctrine))],
        quote: false,
        href: early,
      },
    );
    for (const tradition of traditionIds) {
      const page = await getTraditionPage(doctrine, tradition, locale);
      if (!page) continue;
      const traditionLabel = traditionName(locale, tradition);
      entries.push(
        {
          id: `tradition:${doctrine}/${tradition}`,
          title: traditionLabel,
          path: doctrinePath,
          date: null,
          texts: [page.lede],
          quote: false,
          href: traditionHref(locale, doctrine, tradition),
        },
        {
          id: `objections:${doctrine}/${tradition}`,
          title: text.doctrine.objections,
          path: [doctrinePath, traditionLabel].join(pathSeparator),
          date: null,
          texts: [objectionsPageText(locale, doctrine, tradition).lede],
          quote: false,
          href: objectionsHref(locale, doctrine, tradition),
        },
      );
      for (const objection of officialObjections(page)) {
        entries.push({
          id: `objection:${doctrine}/${tradition}/${objection.id}`,
          title: objection.short ?? plainRich(objection.title, locale),
          path: [name, traditionLabel, text.search.objection].join(pathSeparator),
          date: null,
          texts: [plainRich(objection.title, locale), plainRich(objection.synthesis, locale)],
          quote: false,
          href: objectionHref(locale, doctrine, tradition, objection.id),
        });
      }
    }
    for (const witness of doctrinePage.witnesses.items) {
      witnessEntries.push({
        id: `witness:${doctrine}/${witness.id}`,
        title: witnessReference(witness),
        path: [text.shell.tree.fathers, witness.anonymous ? witness.work : witness.author].join(pathSeparator),
        date: formatDate(witness.date, locale),
        texts: [witness.quote.replace(gap, "[…]")],
        quote: true,
        href: `${early}#early-${witness.id}`,
      });
    }
  }
  const fatherEntries = getPublishedFathers(locale).map((father): SearchEntry => {
    const view = buildFatherView(father, locale, text);
    return {
      id: `father:${father.id}`,
      title: view.name,
      path: [text.shell.tree.history, text.shell.tree.fathers].join(pathSeparator),
      date: view.searchDate,
      texts: [view.summary],
      quote: false,
      href: fatherHref(locale, father.id),
    };
  });
  const timelineEntry: SearchEntry = {
    id: "timeline",
    title: text.generalTimeline.title,
    path: text.shell.tree.history,
    date: null,
    texts: [text.generalTimeline.lede.replace("{from}", "30").replace("{to}", "800")],
    quote: false,
    href: timelineHref(locale),
  };
  return [...entries, ...witnessEntries, timelineEntry, ...fatherEntries];
}
