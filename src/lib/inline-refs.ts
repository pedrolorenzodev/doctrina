export type InlineNode =
  | { kind: "text"; text: string }
  | { kind: "citation"; ids: string[]; label: string }
  | { kind: "verse"; osis: string[] }
  | { kind: "section"; id: string; label: string }
  | { kind: "glossary"; id: string; label: string | null };

export class InlineSyntaxError extends Error {
  constructor(message: string, source: string, position: number) {
    super(`${message} at ${position} in «${source.slice(Math.max(0, position - 20), position + 40)}»`);
    this.name = "InlineSyntaxError";
  }
}

const token = /\{([cvsg]):([^{}|]*)(?:\|([^{}|]*))?\}/gy;

function splitIds(raw: string, source: string, position: number): string[] {
  const ids = raw.split(",").map((id) => id.trim());
  if (ids.some((id) => id === "")) throw new InlineSyntaxError("empty id", source, position);
  return ids;
}

function nodeFor(kind: string, body: string, label: string | undefined, source: string, position: number): InlineNode {
  switch (kind) {
    case "c":
      if (!label) throw new InlineSyntaxError("citation without label", source, position);
      return { kind: "citation", ids: splitIds(body, source, position), label };
    case "v":
      if (label !== undefined) throw new InlineSyntaxError("verse with label", source, position);
      return { kind: "verse", osis: splitIds(body, source, position) };
    case "s": {
      if (!label) throw new InlineSyntaxError("section without label", source, position);
      const [id, ...rest] = splitIds(body, source, position);
      if (id === undefined || rest.length > 0) throw new InlineSyntaxError("section takes one id", source, position);
      return { kind: "section", id, label };
    }
    default: {
      const [id, ...rest] = splitIds(body, source, position);
      if (id === undefined || rest.length > 0) throw new InlineSyntaxError("glossary takes one id", source, position);
      return { kind: "glossary", id, label: label ?? null };
    }
  }
}

export function parseInline(source: string): InlineNode[] {
  const nodes: InlineNode[] = [];
  let cursor = 0;
  while (cursor < source.length) {
    const open = source.slice(cursor).search(/[{}]/);
    if (open === -1) {
      nodes.push({ kind: "text", text: source.slice(cursor) });
      break;
    }
    const start = cursor + open;
    if (start > cursor) nodes.push({ kind: "text", text: source.slice(cursor, start) });
    token.lastIndex = start;
    const match = token.exec(source);
    if (!match) throw new InlineSyntaxError("malformed or stray brace", source, start);
    const [whole, kind, body, label] = match;
    nodes.push(nodeFor(kind ?? "", body ?? "", label, source, start));
    cursor = start + whole.length;
  }
  return nodes;
}

export type InlineReferences = {
  citations: string[];
  verses: string[];
  sections: string[];
  glossary: string[];
};

export function referencesIn(nodes: InlineNode[]): InlineReferences {
  const refs: InlineReferences = { citations: [], verses: [], sections: [], glossary: [] };
  for (const node of nodes) {
    if (node.kind === "citation") refs.citations.push(...node.ids);
    else if (node.kind === "verse") refs.verses.push(...node.osis);
    else if (node.kind === "section") refs.sections.push(node.id);
    else if (node.kind === "glossary") refs.glossary.push(node.id);
  }
  return refs;
}
