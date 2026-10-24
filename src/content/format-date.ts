import type { DateInfo } from "@/content/model/registry";
import type { Locale } from "@/lib/locale";

const months: Record<Locale, string[]> = {
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

export function formatDate(date: DateInfo, locale: Locale): string {
  const month = date.month ? months[locale][date.month - 1] : undefined;
  let text: string;
  if (month && date.day) text = `${date.day} ${month} ${date.year}`;
  else if (month) text = `${month} ${date.year}`;
  else if (date.yearEnd) text = `${date.year}–${date.yearEnd}`;
  else if (date.alsoYears?.length) text = [date.year, ...date.alsoYears].join("/");
  else text = String(date.year);
  return date.circa ? `c. ${text}` : text;
}
