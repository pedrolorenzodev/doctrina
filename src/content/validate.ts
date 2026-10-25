import type { TraditionPage } from "@/content/model/page";
import type { Registry } from "@/content/model/registry";
import { InlineSyntaxError, parseInline, referencesIn } from "@/lib/inline-refs";

export const sectionIds: readonly string[] = ["early-witnesses"];

export const reviewVocabulary =
  /\bdosier(es)?\b|\bwave-1\b|open-tags|\.md\b|sin confirmar|verificaci[oó]n|\bpendiente\b|mapa (luterano|reformado)/i;

export function* walkStrings(value: unknown, path: string): Generator<[string, string]> {
  if (typeof value === "string") yield [path, value];
  else if (Array.isArray(value)) for (const [i, item] of value.entries()) yield* walkStrings(item, `${path}[${i}]`);
  else if (value && typeof value === "object")
    for (const [key, item] of Object.entries(value)) yield* walkStrings(item, `${path}.${key}`);
}

export function missingVerses(segment: string, verses: Registry["verses"]): string[] {
  const [from = "", to = from] = segment.split("-");
  const [book, chapter, first] = from.split(".");
  const [lastBook, lastChapter, last] = to.split(".");
  if (first === undefined) return Object.keys(verses).some((key) => key.startsWith(`${from}.`)) ? [] : [from];
  if (book !== lastBook) return [segment];
  if (chapter !== lastChapter || last === undefined) return [from, to].filter((key) => !(key in verses));
  const missing: string[] = [];
  for (let n = Number(first); n <= Number(last); n += 1) {
    const key = `${book}.${chapter}.${n}`;
    if (!(key in verses)) missing.push(key);
  }
  return missing;
}

export function validateContent(registry: Registry, pages: Record<string, TraditionPage>): string[] {
  const errors: string[] = [];
  const fail = (where: string, message: string) => errors.push(`${where}: ${message}`);

  for (const [id, edition] of Object.entries(registry.editions)) {
    for (const work of edition.works) if (!(work in registry.works)) fail(`editions.${id}`, `unknown work ${work}`);
  }

  for (const [id, citation] of Object.entries(registry.citations)) {
    if (!(citation.work in registry.works)) fail(`citations.${id}`, `unknown work ${citation.work}`);
    for (const [i, excerpt] of citation.excerpts.entries()) {
      for (const lang of ["la", "es", "en", "de", "el"] as const) {
        const passage = excerpt[lang];
        if (!passage) continue;
        const edition = registry.editions[passage.edition];
        if (!edition) fail(`citations.${id}.excerpts[${i}].${lang}`, `unknown edition ${passage.edition}`);
        else if (!edition.works.includes(citation.work))
          fail(`citations.${id}.excerpts[${i}].${lang}`, "edition of another work");
        else if (edition.lang !== lang) fail(`citations.${id}.excerpts[${i}].${lang}`, `edition is in ${edition.lang}`);
      }
    }
  }

  for (const [name, source] of Object.entries(registry)) {
    for (const [where, text] of walkStrings(source, name)) {
      if (reviewVocabulary.test(text)) fail(where, `review language «${text.slice(0, 60)}»`);
    }
  }

  for (const [name, page] of Object.entries(pages)) {
    const cited = new Set<string>();
    const note = (id: string, where: string) => {
      if (!(id in registry.citations)) fail(where, `unknown citation ${id}`);
      cited.add(id);
    };
    const refsOf = (where: string, refs: { citations: string[] }) => refs.citations.forEach((id) => note(id, where));

    const { teach, why, objections, life, authority } = page;
    refsOf(`${name}.teach.definition.sources`, { citations: teach.definition.sources.flatMap((s) => s.citations) });
    for (const statement of teach.statements)
      statement.sources.forEach((s) => refsOf(`${name}.teach.${statement.id}`, s));
    why.fathers.forEach((father, i) => refsOf(`${name}.why.fathers[${i}]`, father.citedIn));
    life.items.forEach((item) => item.sources.forEach((s) => refsOf(`${name}.life.${item.id}`, s)));
    for (const grade of [...Object.values(authority.grades), ...Object.values(authority.other)])
      refsOf(`${name}.authority.${grade.label}`, grade.source);
    for (const objection of objections.items) {
      const where = `${name}.objections.${objection.id}`;
      objection.objectorTexts.shown.forEach((id) => note(id, where));
      objection.objectorTexts.more.forEach((id) => note(id, where));
      objection.sourcesCited.forEach((group) => group.citations.forEach((id) => note(id, where)));
      if (objection.titleStatus) note(objection.titleStatus, where);
      for (const id of objection.videoIds ?? [])
        if (!page.videos.items.some((video) => video.id === id)) fail(where, `unknown video ${id}`);
      for (const segment of [...objection.passages.answer, ...objection.passages.objector])
        for (const key of missingVerses(segment, registry.verses)) fail(where, `verse ${key} not in registry`);
    }
    for (const passage of page.scripture)
      for (const segment of passage.refs)
        for (const key of missingVerses(segment, registry.verses))
          fail(`${name}.scripture`, `verse ${key} not in registry`);

    const ids = (items: { id: string }[], what: string) => {
      const seen = new Set<string>();
      for (const { id } of items) {
        if (seen.has(id)) fail(`${name}.${what}`, `duplicate id ${id}`);
        seen.add(id);
      }
    };
    ids(teach.statements, "statements");
    ids(objections.items, "objections");
    ids(life.items, "life");
    const orderIds = new Set(objections.order);
    for (const { id } of objections.items) if (!orderIds.has(id)) fail(`${name}.objections.order`, `${id} missing`);
    for (const id of orderIds)
      if (!objections.items.some((item) => item.id === id)) fail(`${name}.objections.order`, `unknown ${id}`);

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
