import type { FatherDating } from "@/content/model/history";
import type { UiText } from "@/content/ui-text/types";
import type { CitationView } from "@/lib/citation-view";

const presentYear = 2026;
const scholarSpan = { from: 1800, to: presentYear, marks: [1800, 1900, presentYear] };

export const scholarViewId = (id: string) => `scholar-${id}`;

export function buildDatingViews(dating: FatherDating, text: UiText["dating"]): Record<string, CitationView> {
  const views: Record<string, CitationView> = {};
  for (const [id, scholar] of Object.entries(dating.scholars)) {
    views[scholarViewId(id)] = {
      id: scholarViewId(id),
      kind: text.whoIs,
      title: scholar.name,
      subtitle: scholar.field,
      quote: null,
      quoteLanguage: null,
      definition: scholar.paragraphs.join("\n\n"),
      who: null,
      locator: "",
      note: null,
      date: scholar.life
        ? {
            label: scholar.life.label,
            start: scholar.life.start,
            end: scholar.life.end ?? presentYear,
            heading: text.lifeLabel,
            markerLabel: scholar.life.marker,
            span: scholarSpan,
          }
        : null,
      externalLink: null,
      copyText: null,
      fullSource: false,
    };
  }
  return views;
}
