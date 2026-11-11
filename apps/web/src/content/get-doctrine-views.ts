import "server-only";
import { buildCitationView } from "@/content/citation-view";
import { getTraditionPage } from "@/content/get-tradition-page";
import type { DoctrinePage } from "@/content/model/doctrine-page";
import type { GradeDefinition } from "@/content/model/page";
import { buildGradeDefinitionView } from "@/content/page-views";
import { registry } from "@/content/registry/index";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { buildWitnessView, witnessViewId } from "@/content/witness-view";
import type { CitationView } from "@/lib/citation-view";
import type { Locale } from "@/lib/locale";

export function answerGradeViewId(tradition: string): string {
  return `answer-grade:${tradition}`;
}

export async function getDoctrineViews(page: DoctrinePage, locale: Locale): Promise<Record<string, CitationView>> {
  const text = getUiText(locale);
  const views: Record<string, CitationView> = {};
  for (const witness of page.witnesses.items)
    views[witnessViewId(witness.id)] = buildWitnessView(witness, locale, text);
  for (const aspect of page.practice.aspects)
    for (const cell of Object.values(aspect.cells))
      for (const source of cell.sources)
        for (const id of source.citations) views[id] = buildCitationView(id, registry, locale, text);
  for (const answer of page.answers.items) {
    let definition: GradeDefinition | undefined;
    if ("grade" in answer.grade) {
      const published = await getTraditionPage(page.doctrine, answer.tradition, locale);
      definition = published?.authority.grades[answer.grade.grade];
    } else definition = answer.grade.definition;
    if (definition) {
      const id = answerGradeViewId(answer.tradition);
      views[id] = buildGradeDefinitionView(id, definition, null, text);
    }
  }
  return views;
}
