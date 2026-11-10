import type { ScripturePassage, TraditionPage } from "@/content/model/page";

export function hasApologistQuote(passage: ScripturePassage): boolean {
  return (passage.apologists?.arguments ?? []).some((argument) => argument.quotes.length > 0);
}

export function shownScripture(page: Pick<TraditionPage, "scripture">): ScripturePassage[] {
  return page.scripture.filter(hasApologistQuote);
}
