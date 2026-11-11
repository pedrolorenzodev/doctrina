import type { ReactNode } from "react";
import type { Objection, TraditionPage } from "@/content/model/page";
import { themeGroups, themeLayout, themedOrder } from "@/content/objection-themes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ObjectionList } from "@/features/doctrine/objection-list";
import { ObjectionThemeFilter } from "@/features/doctrine/objection-theme-filter";
import type { Locale } from "@/lib/locale";

type ThemedObjectionListProps = {
  page: TraditionPage;
  locale: Locale;
  objections: Objection[];
  compact?: boolean;
  step?: number;
  trailing?: ReactNode;
  headingAs?: "h2" | "h3";
};

export function ThemedObjectionList({
  page,
  locale,
  objections,
  compact = false,
  step,
  trailing,
  headingAs: Heading = "h3",
}: ThemedObjectionListProps) {
  const text = getUiText(locale).doctrine;
  const common = { doctrine: page.doctrine, tradition: page.tradition, locale, compact };
  const groups = themeGroups(page, objections);
  const layout = groups.length < 2 ? "plain" : themeLayout(page);
  const ordered = layout === "plain" ? objections : themedOrder(page, objections);
  const trailer = trailing ? <div className="mt-5.5">{trailing}</div> : null;

  if (layout === "plain") {
    return (
      <>
        <ObjectionList {...common} objections={step === undefined ? ordered : ordered.slice(0, step)} />
        {trailer}
      </>
    );
  }

  if (layout === "headings") {
    const visible = new Set((step === undefined ? ordered : ordered.slice(0, step)).map((objection) => objection.id));
    return (
      <>
        {groups.map(({ theme, objections: inTheme }) => {
          const shown = inTheme.filter((objection) => visible.has(objection.id));
          return shown.length === 0 ? null : (
            <div key={theme.id} className="mt-7 first:mt-0">
              <Heading className="mb-1.5 text-label font-medium text-ink-3">{theme.name}</Heading>
              <ObjectionList {...common} objections={shown} />
            </div>
          );
        })}
        {trailer}
      </>
    );
  }

  const themeOf = Object.fromEntries(
    groups.flatMap(({ theme, objections: inTheme }) => inTheme.map((o) => [o.id, theme.id])),
  );
  const totals: Record<string, number> = { all: ordered.length };
  for (const { theme, objections: inTheme } of groups) totals[theme.id] = inTheme.length;
  return (
    <ObjectionThemeFilter
      filterLabel={text.objectionTheme.label}
      options={[
        { id: "all", label: text.objectionTheme.all },
        ...groups.map(({ theme }) => ({ id: theme.id, label: theme.name })),
      ]}
      totals={totals}
      step={step ?? null}
      moreLabel={text.showMore}
      trailing={trailing}
    >
      <ObjectionList
        {...common}
        objections={ordered}
        themeOf={themeOf}
        {...(step === undefined ? {} : { hiddenFrom: step })}
      />
    </ObjectionThemeFilter>
  );
}
