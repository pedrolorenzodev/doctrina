import type { DoctrinePage } from "@/content/model/doctrine-page";
import type { TraditionPage } from "@/content/model/page";
import type { Registry } from "@/content/model/registry";
import { missingVerses, reviewVocabulary, sectionIds, walkStrings } from "@/content/validate";
import { fathers } from "@/content/history/fathers";
import { highlightParagraph } from "@/content/witness-paragraph";
import { InlineSyntaxError, parseInline, referencesIn } from "@/lib/inline-refs";

export function validateDoctrinePages(
  registry: Registry,
  doctrinePages: Record<string, DoctrinePage>,
  pages: Record<string, TraditionPage>,
): string[] {
  const errors: string[] = [];
  const fail = (where: string, message: string) => errors.push(`${where}: ${message}`);

  for (const [name, page] of Object.entries(doctrinePages)) {
    if (name !== page.doctrine) fail(name, `keyed under ${name} but is the page of ${page.doctrine}`);
    const note = (id: string, where: string) => {
      if (!(id in registry.citations)) fail(where, `unknown citation ${id}`);
    };

    if (!page.witnesses.items.some((witness) => witness.id === page.legend.witnessId))
      fail(`${name}.legend`, `unknown witness ${page.legend.witnessId}`);

    const { marks } = page.fingerprint;
    if (marks.length === 0) fail(`${name}.fingerprint`, "no marks");
    marks.forEach((mark, index) => {
      const where = `${name}.fingerprint[${index}]`;
      const previous = marks[index - 1];
      if (previous && mark.year < previous.year) fail(where, `${mark.year} is out of date order`);
      if (mark.yearEnd !== undefined && mark.yearEnd <= mark.year) fail(where, "yearEnd must follow year");
    });

    if (page.common.questions.length === 0) fail(`${name}.common`, "no questions");

    const traditions = new Set<string>();
    for (const answer of page.answers.items) {
      const where = `${name}.answers.${answer.tradition}`;
      if (traditions.has(answer.tradition)) fail(where, "duplicate tradition");
      traditions.add(answer.tradition);
      const published = pages[`${page.doctrine}/${answer.tradition}`];
      if ("grade" in answer.grade) {
        const grade = answer.grade.grade;
        if (!published) fail(where, `grade ${grade} needs the published page of ${answer.tradition}`);
        else if (!published.authority.grades[grade]) fail(where, `the page has no grade ${grade}`);
      } else answer.grade.definition.source.citations.forEach((id) => note(id, where));
      if (answer.objections.length === 0) fail(where, "no objections");
      const linked: string[] = [];
      for (const objection of answer.objections) {
        if (!("id" in objection)) {
          if (published) fail(where, "a published tradition links its objections by id");
          continue;
        }
        linked.push(objection.id);
        const target = published?.objections.items.find((item) => item.id === objection.id);
        if (!target || target.layer !== "official") fail(where, `unknown official objection ${objection.id}`);
      }
      if (published) {
        const official = published.objections.items.flatMap((item) => (item.layer === "official" ? [item.id] : []));
        for (const id of official) if (!linked.includes(id)) fail(where, `objection ${id} is missing`);
      }
    }

    const witnessIds = new Set<string>();
    page.witnesses.items.forEach((witness, index) => {
      const where = `${name}.witnesses.${witness.id}`;
      if (witnessIds.has(witness.id)) fail(where, "duplicate id");
      witnessIds.add(witness.id);
      const previous = page.witnesses.items[index - 1];
      if (previous && witness.date.year < previous.date.year) fail(where, "out of date order");
      if (witness.quote.trim() === "") fail(where, "empty quote");
      if (witness.entity !== undefined && !fathers.some((father) => father.id === witness.entity))
        fail(where, `unknown history entity ${witness.entity}`);
      if (witness.paragraph !== undefined && !highlightParagraph(witness.paragraph, witness.quote))
        fail(where, "the quote is not inside its paragraph");
    });

    const aspectIds = new Set<string>();
    for (const aspect of page.practice.aspects) {
      const where = `${name}.practice.${aspect.id}`;
      if (aspectIds.has(aspect.id)) fail(where, "duplicate id");
      aspectIds.add(aspect.id);
      for (const tradition of traditions) if (!(tradition in aspect.cells)) fail(where, `no cell for ${tradition}`);
      for (const [tradition, cell] of Object.entries(aspect.cells)) {
        if (!traditions.has(tradition)) fail(where, `cell for ${tradition}, which has no answer`);
        cell.sources.forEach((source) => source.citations.forEach((id) => note(id, `${where}.${tradition}`)));
      }
    }

    const connected = new Set<string>();
    for (const item of page.connected.items) {
      if (item.doctrine === page.doctrine) fail(`${name}.connected`, "a doctrine connected to itself");
      if (connected.has(item.doctrine)) fail(`${name}.connected`, `duplicate ${item.doctrine}`);
      connected.add(item.doctrine);
    }

    for (const [where, text] of walkStrings(page, name)) {
      if (reviewVocabulary.test(text)) fail(where, `review language «${text.slice(0, 60)}»`);
      let refs;
      try {
        refs = referencesIn(parseInline(text));
      } catch (error) {
        if (error instanceof InlineSyntaxError) fail(where, error.message);
        else throw error;
        continue;
      }
      refs.citations.forEach((id) => note(id, where));
      for (const segment of refs.verses)
        for (const key of missingVerses(segment, registry.verses)) fail(where, `verse ${key} not in registry`);
      refs.sections.forEach((id) => sectionIds.includes(id) || fail(where, `unknown section ${id}`));
      refs.glossary.forEach((id) => fail(where, `no glossary entry ${id}`));
    }
  }
  return errors;
}
