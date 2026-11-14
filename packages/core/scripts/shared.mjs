import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";

export const repoRoot = resolve(import.meta.dirname, "../../..");
export const webSrc = join(repoRoot, "apps/web/src");
export const outDir = resolve(import.meta.dirname, "../src");

export const viewport = { width: 390, height: 844 };
export const compactBreakpointPx = 640;
export const lineHeightStep = 1;

export const motionFiles = [
  "lib/list-motion.ts",
  "lib/keyed-flip.ts",
  "lib/block-motion.ts",
  "lib/branch-motion.ts",
  "lib/reveal-motion.ts",
  "lib/fold-box.ts",
  "lib/lift-tween.ts",
  "lib/scroll.ts",
  "lib/theme.ts",
  "features/shell/tree-motion.ts",
  "features/reader/panel-sections.tsx",
];

export const skippedVariables = [
  {
    name: "--texture-image",
    reason:
      "SVG data URI of the wall noise; the app tiles a pre-rendered PNG per theme (filter parameters are emitted in `texture`)",
  },
  { name: "--external-mark", reason: "SVG data URI for a CSS mask; the app draws the arrow with react-native-svg" },
  {
    name: "--wall-ink-blend",
    reason:
      "CSS mix-blend-mode keyword; React Native has no equivalent blend for the ink-fill texture (open question in README)",
  },
  { name: "--reader-measure", reason: "alias of --container-col (720px); a CSS-only column cap, a phone is narrower" },
];

export const cssOnlyReasons = {
  "--container-measure":
    "62ch needs the glyph advance of '0' in the reader font; at 390 px the column is the screen width minus padding, so the cap never applies",
  "--container-descriptor": "56ch: same as --container-measure; the cap never applies at 390 px",
  "--container-argument-title": "40ch: same as --container-measure; the cap never applies at 390 px",
  "--spacing-simplifier-ring": "calc(0.5lh - 11px) depends on the computed line height of the element it is applied to",
};

export const fontsToUse = {
  head: "head",
  body: "body",
  ui: "ui",
  greek: "greek",
  hebrew: "hebrew",
};

export function readText(path) {
  return readFileSync(path, "utf8");
}

export function stripComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, "");
}

export function camel(name) {
  return name.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase());
}

export function lineOf(text, index) {
  let line = 1;
  for (let i = 0; i < index; i += 1) if (text.charCodeAt(i) === 10) line += 1;
  return line;
}

export function matchBrace(text, openIndex) {
  let depth = 0;
  let quote = null;
  for (let i = openIndex; i < text.length; i += 1) {
    const char = text[i];
    if (quote) {
      if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") quote = char;
    else if (char === "{") depth += 1;
    else if (char === "}") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  throw new Error(`unbalanced brace at ${openIndex}`);
}

export function findBlocks(css, headerPattern) {
  const flags = headerPattern.flags.includes("g") ? headerPattern.flags : `${headerPattern.flags}g`;
  const pattern = new RegExp(headerPattern.source, flags);
  const blocks = [];
  for (let match = pattern.exec(css); match; match = pattern.exec(css)) {
    const open = match.index + match[0].lastIndexOf("{");
    const close = matchBrace(css, open);
    blocks.push({ start: match.index, body: css.slice(open + 1, close) });
  }
  return blocks;
}

export function parseDeclarations(body) {
  const declarations = [];
  let depth = 0;
  let quote = null;
  let begin = 0;
  const push = (end) => {
    const piece = body.slice(begin, end).trim();
    begin = end + 1;
    if (!piece.startsWith("--")) return;
    const colon = piece.indexOf(":");
    declarations.push({ name: piece.slice(0, colon).trim(), value: piece.slice(colon + 1).trim() });
  };
  for (let i = 0; i < body.length; i += 1) {
    const char = body[i];
    if (quote) {
      if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") quote = char;
    else if (char === "(" || char === "{") depth += 1;
    else if (char === ")" || char === "}") depth -= 1;
    else if (char === ";" && depth === 0) push(i);
  }
  push(body.length);
  return declarations;
}

export function readThemeCss() {
  const path = join(webSrc, "app/globals.css");
  const css = stripComments(readText(path));
  const theme = findBlocks(css, /^@theme\s*\{/m)[0];
  const themeInline = findBlocks(css, /^@theme inline\s*\{/m)[0];
  const root = findBlocks(css, /^:root\s*\{/m)[0];
  const dark = findBlocks(css, /^\[data-theme="dark"\]\s*\{/m)[0];
  const compactMedia = findBlocks(css, /^@media \(width < 40rem\)\s*\{/m).find((block) =>
    /:root\s*\{/.test(block.body),
  );
  const compactRoot = findBlocks(compactMedia.body, /:root\s*\{/)[0];
  return {
    path,
    theme: parseDeclarations(theme.body),
    themeInline: parseDeclarations(themeInline.body),
    root: parseDeclarations(root.body),
    dark: parseDeclarations(dark.body),
    compact: parseDeclarations(compactRoot.body),
  };
}

export function toMap(declarations) {
  return new Map(declarations.map(({ name, value }) => [name, value]));
}

export function parseColor(value) {
  const text = value.trim().toLowerCase();
  const hex = /^#([0-9a-f]{6})$/.exec(text);
  if (hex) {
    const n = parseInt(hex[1], 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255, a: 1 };
  }
  const rgb = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[/,]\s*([\d.]+)\s*)?\)$/.exec(text);
  if (rgb)
    return { r: Number(rgb[1]), g: Number(rgb[2]), b: Number(rgb[3]), a: rgb[4] === undefined ? 1 : Number(rgb[4]) };
  return null;
}

export function formatColor(value) {
  const text = value.trim().toLowerCase();
  if (/^#[0-9a-f]{6}$/.test(text)) return text;
  const color = parseColor(text);
  if (!color) throw new Error(`unsupported colour ${value}`);
  return color.a === 1 && !/[/,]/.test(text)
    ? `rgb(${color.r}, ${color.g}, ${color.b})`
    : `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
}

export function sameColor(a, b) {
  const x = parseColor(a);
  const y = parseColor(b);
  return Boolean(x && y && x.r === y.r && x.g === y.g && x.b === y.b && Math.abs(x.a - y.a) < 1e-9);
}

export class Unresolvable extends Error {}

export function evaluateLength(expression, variables, size = viewport) {
  const units = { px: 1, rem: 16, vw: size.width / 100, vh: size.height / 100, dvh: size.height / 100 };
  const source = expression.trim();
  let position = 0;
  const peek = () => source[position];
  const skip = () => {
    while (/\s/.test(source[position] ?? "")) position += 1;
  };
  const expect = (char) => {
    skip();
    if (source[position] !== char) throw new Unresolvable(`expected ${char} in ${expression}`);
    position += 1;
  };

  function number() {
    const match = /^-?(?:\d+\.?\d*|\.\d+)/.exec(source.slice(position));
    if (!match) throw new Unresolvable(`cannot parse ${expression}`);
    position += match[0].length;
    const unit = /^[a-z]+/.exec(source.slice(position));
    if (!unit) return Number(match[0]);
    position += unit[0].length;
    if (!(unit[0] in units)) throw new Unresolvable(`unit ${unit[0]}`);
    return Number(match[0]) * units[unit[0]];
  }

  function args() {
    const list = [];
    expect("(");
    for (;;) {
      list.push(sum());
      skip();
      if (peek() === ",") {
        position += 1;
        continue;
      }
      break;
    }
    expect(")");
    return list;
  }

  function factor() {
    skip();
    const word = /^[a-z-]+(?=\()/.exec(source.slice(position));
    if (word) {
      position += word[0].length;
      if (word[0] === "var") {
        expect("(");
        skip();
        const name = /^--[a-z0-9-]+/.exec(source.slice(position))[0];
        position += name.length;
        expect(")");
        const raw = variables.get(name);
        if (raw === undefined) throw new Unresolvable(`undefined ${name}`);
        return evaluateLength(raw, variables, size);
      }
      if (word[0] === "calc") {
        expect("(");
        const value = sum();
        expect(")");
        return value;
      }
      const list = args();
      if (word[0] === "min") return Math.min(...list);
      if (word[0] === "max") return Math.max(...list);
      if (word[0] === "clamp") return Math.min(Math.max(list[1], list[0]), list[2]);
      throw new Unresolvable(`function ${word[0]}`);
    }
    if (peek() === "(") {
      position += 1;
      const value = sum();
      expect(")");
      return value;
    }
    return number();
  }

  function product() {
    let value = factor();
    for (;;) {
      skip();
      if (peek() === "*") {
        position += 1;
        value *= factor();
      } else if (peek() === "/") {
        position += 1;
        value /= factor();
      } else return value;
    }
  }

  function sum() {
    let value = product();
    for (;;) {
      skip();
      if (peek() === "+") {
        position += 1;
        value += product();
      } else if (peek() === "-") {
        position += 1;
        value -= product();
      } else return value;
    }
  }

  const result = sum();
  skip();
  if (position < source.length) throw new Unresolvable(`trailing ${source.slice(position)} in ${expression}`);
  return result;
}

export function pxOf(value) {
  const match = /^(-?(?:\d+\.?\d*|\.\d+))px$/.exec(value.trim());
  return match ? Number(match[1]) : null;
}

export function bezierOf(text) {
  const match = /cubic-bezier\(\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*\)/.exec(text);
  return match ? [1, 2, 3, 4].map((index) => Number(match[index])) : null;
}

export function readSource(relative) {
  const path = join(webSrc, relative);
  return { path, relative, text: readText(path) };
}

export const roleFontOverrides = {
  display: {
    family: "head",
    weight: 300,
    opsz: 72,
    why: "DESIGN.md §2 row display; classes live in a map in components/page-header.tsx",
  },
  "display-mobile": { family: "head", weight: 300, opsz: 72, why: "same as display" },
  objection: {
    family: "head",
    weight: 300,
    opsz: 72,
    why: "DESIGN.md §2 row display (04 h1); components/page-header.tsx",
  },
  "objection-mobile": { family: "head", weight: 300, opsz: 72, why: "same as objection" },
  "reader-title": {
    family: "head",
    weight: "readerWeight",
    opsz: 60,
    why: "page-header.tsx size reader uses font-reader-title, clamp(200, var(--reader-weight), 500) in globals.css",
  },
  "reader-title-mobile": { family: "head", weight: "readerWeight", opsz: 60, why: "same as reader-title" },
  reader: { family: "body", weight: "readerWeight", why: "chapter-text.tsx uses font-reader = var(--reader-weight)" },
  defn: { family: "head", weight: 300, opsz: 24, why: "DESIGN.md §2 row defn" },
  "defn-mobile": { family: "head", weight: 300, opsz: 24, why: "same as defn" },
  passage: {
    family: "body",
    weight: 500,
    opsz: 18,
    why: "DESIGN.md §2 row list-title; objection-list.tsx:40, scripture-section.tsx:33",
  },
  "passage-compact": {
    family: "body",
    weight: 500,
    opsz: 18,
    why: "objection-list.tsx:40 (compact title of a passage)",
  },
  "search-quote": { family: "head", weight: 300, italic: true, why: "features/shell/search-dialog.tsx:67" },
  "word-title": {
    family: "greek",
    weight: 400,
    why: "set by the lang attribute (globals.css [lang=grc]/[lang=hbo]); words/[word]/page.tsx:198",
  },
  "word-title-mobile": { family: "greek", weight: 400, why: "same as word-title" },
  "word-original": {
    family: "greek",
    weight: 400,
    why: "lang attribute decides greek or hebrew; features/reader/panel-words.tsx:165",
  },
  "word-form": {
    family: "greek",
    weight: 400,
    why: "lang attribute decides greek or hebrew; features/words/form-rows.tsx:23",
  },
  "word-card-original": {
    family: "greek",
    weight: 400,
    why: "lang attribute decides greek or hebrew; features/reader/panel-words.tsx:81",
  },
  "verse-tile": {
    family: "greek",
    weight: 400,
    why: "lang attribute decides greek or hebrew; features/verse/verse-words.tsx:158",
  },
  "source-name": {
    family: "ui",
    weight: 500,
    why: "DESIGN.md §5 dated source list: name weight 500 (history-index-list.tsx:102)",
  },
};
