import { buildCitationView } from "@/content/citation-view";
import { expandSegment, sortedVerseKeys } from "@/content/expand-verses";
import { formatVerseRef } from "@/content/format-verse";
import type { GradeLine, TraditionPage } from "@/content/model/page";
import type { Registry } from "@/content/model/registry";
import type { UiText } from "@/content/ui-text/types";
import { parseInline, referencesIn } from "@/lib/inline-refs";
import type { CitationView } from "@/lib/citation-view";
import type { Locale } from "@/lib/locale";

export function verseViewId(segments: string[]): string {
  return `verse:${segments.join(",")}`;
}

export function verseLink(segments: string[], locale: Locale): { id: string; label: string } {
  return { id: verseViewId(segments), label: formatVerseRef(segments, locale) };
}

export function gradeViewId(statementId: string, index: number): string {
  return `grade:${statementId}:${index}`;
}

export function plainRich(text: string, locale: Locale): string {
  return parseInline(text)
    .map((node) => {
      if (node.kind === "text") return node.text;
      if (node.kind === "citation") return node.label;
      if (node.kind === "verse") return formatVerseRef(node.osis, locale);
      if (node.kind === "section") return node.label;
      return node.label ?? "";
    })
    .join("");
}

export function buildVerseView(segments: string[], registry: Registry, locale: Locale, text: UiText): CitationView {
  const sorted = sortedVerseKeys(Object.keys(registry.verses));
  const verses = segments.flatMap((segment) => expandSegment(segment, sorted));
  const reference = formatVerseRef(segments, locale);
  const quote = verses.map((key) => registry.verses[key]?.text ?? "").join(" ");
  return {
    id: verseViewId(segments),
    kind: text.citation.scriptureKind,
    title: null,
    quote: { text: quote, lang: locale },
    definition: null,
    who: reference,
    locator: "",
    note: null,
    date: null,
    externalLink: null,
    copyText: `«${quote}» ${reference} (${text.citation.scriptureEdition})`,
    fullSource: false,
  };
}

function buildGradeView(
  id: string,
  line: GradeLine,
  page: TraditionPage,
  locale: Locale,
  text: UiText,
): CitationView | null {
  if (line.kind !== "church") return null;
  const grade = page.authority.grades[line.grade];
  return {
    id,
    kind: text.citation.gradeKind,
    title: grade.label,
    quote: null,
    definition: grade.definition ?? null,
    who: grade.sub ?? null,
    locator: grade.source.label,
    note: line.basis ? { label: text.citation.gradeBasis, text: plainRich(line.basis, locale) } : null,
    date: null,
    externalLink: null,
    copyText: null,
    fullSource: false,
  };
}

export function collectPageViews(
  page: TraditionPage,
  registry: Registry,
  locale: Locale,
  text: UiText,
): Record<string, CitationView> {
  const views: Record<string, CitationView> = {};
  const citations = new Set<string>();
  const verses = new Map<string, string[]>();
  const scan = (rich: string) => {
    const refs = referencesIn(parseInline(rich));
    refs.citations.forEach((id) => citations.add(id));
    for (const node of parseInline(rich)) if (node.kind === "verse") verses.set(verseViewId(node.osis), node.osis);
  };
  const { definition, statements } = page.teach;
  scan(definition.text);
  definition.sources.forEach((source) => source.citations.forEach((id) => citations.add(id)));
  for (const statement of statements) {
    scan(statement.text);
    statement.sources.forEach((source) => source.citations.forEach((id) => citations.add(id)));
    statement.grades.forEach((line, index) => {
      if (line.basis) scan(line.basis);
      const id = gradeViewId(statement.id, index);
      const view = buildGradeView(id, line, page, locale, text);
      if (view) views[id] = view;
    });
  }
  page.scripture.forEach((passage) => scan(passage.text));
  page.objections.items.forEach((objection) => scan(objection.synthesis));
  Object.values(page.authority.grades).forEach((grade) => grade.source.citations.forEach((id) => citations.add(id)));
  page.life.intro.forEach(scan);
  for (const item of page.life.items) {
    scan(item.text);
    item.sources.forEach((source) => source.citations.forEach((id) => citations.add(id)));
  }
  const { intro, fathers, closing } = page.why;
  [...intro, closing].forEach(scan);
  fathers.forEach((father) => father.citedIn.citations.forEach((id) => citations.add(id)));
  for (const id of citations) views[id] = buildCitationView(id, registry, locale, text);
  for (const [id, segments] of verses) views[id] = buildVerseView(segments, registry, locale, text);
  return views;
}
