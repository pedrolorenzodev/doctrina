import type { LocatorKind } from "@/content/model/ids";
import type { Locator } from "@/content/model/registry";
import { nbspBeforeDigits } from "@/lib/locator";
import type { Locale } from "@/lib/locale";

type KindLabel = { one: string; many: string };

const kindLabels: Record<Locale, Record<LocatorKind, KindLabel | null>> = {
  es: {
    part: { one: "parte", many: "partes" },
    session: { one: "ses.", many: "sess." },
    chapter: { one: "cap.", many: "caps." },
    canon: { one: "can.", many: "cann." },
    article: { one: "art.", many: "arts." },
    question: { one: "q.", many: "qq." },
    number: { one: "n.", many: "nn." },
    paragraph: { one: "¶", many: "¶¶" },
    section: { one: "§", many: "§§" },
    constitution: { one: "const.", many: "const." },
    decree: { one: "decreto", many: "decretos" },
    locus: null,
    ref: null,
  },
  en: {
    part: { one: "part", many: "parts" },
    session: { one: "sess.", many: "sess." },
    chapter: { one: "ch.", many: "chs." },
    canon: { one: "can.", many: "cann." },
    article: { one: "art.", many: "arts." },
    question: { one: "q.", many: "qq." },
    number: { one: "no.", many: "nos." },
    paragraph: { one: "¶", many: "¶¶" },
    section: { one: "§", many: "§§" },
    constitution: { one: "const.", many: "const." },
    decree: { one: "decree", many: "decrees" },
    locus: null,
    ref: null,
  },
};

const listOrRange = /[,–-]|\by\b|\band\b/;

export function formatLocator(locator: Locator, locale: Locale): string {
  const parts = locator.parts.map((part) => {
    const label = kindLabels[locale][part.kind];
    if (!label) return part.value;
    return `${listOrRange.test(part.value) ? label.many : label.one} ${part.value}`;
  });
  const text = parts.join(", ");
  return nbspBeforeDigits(locator.qualifier ? `${text} (${locator.qualifier})` : text);
}
