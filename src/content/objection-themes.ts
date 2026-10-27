import { objectionThemeFilterFrom } from "@/content/doctrine-rules";
import type { Objection, ObjectionTheme, TraditionPage } from "@/content/model/page";
import { officialObjections } from "@/content/official-objections";

export type ThemeGroup = { theme: ObjectionTheme; objections: Objection[] };

export type ThemeLayout = "plain" | "headings" | "filter";

export function themeLayout(page: TraditionPage): ThemeLayout {
  if (!page.objections.themes || page.objections.themes.length === 0) return "plain";
  return officialObjections(page).length >= objectionThemeFilterFrom ? "filter" : "headings";
}

export function themeGroups(page: TraditionPage, objections: Objection[]): ThemeGroup[] {
  return (page.objections.themes ?? []).flatMap((theme) => {
    const inTheme = theme.ids.flatMap((id) => objections.filter((objection) => objection.id === id));
    return inTheme.length > 0 ? [{ theme, objections: inTheme }] : [];
  });
}

export function themedOrder(page: TraditionPage, objections: Objection[]): Objection[] {
  return themeLayout(page) === "plain"
    ? objections
    : themeGroups(page, objections).flatMap((group) => group.objections);
}
