import path from "node:path";
import { fileURLToPath } from "node:url";
import { spanishWordsIn } from "./spanish-words.mjs";

const SRC = fileURLToPath(new URL("../src", import.meta.url));

const ALLOWED = {
  app: ["app", "features", "components", "content", "lib"],
  features: ["components", "content", "lib"],
  content: ["content", "lib"],
  components: ["components", "lib"],
  lib: ["lib"],
};

function locate(absolute) {
  const relative = path.relative(SRC, absolute);
  if (relative.startsWith("..") || path.isAbsolute(relative)) return null;
  const [top, second] = relative.split(path.sep);
  if (!top || !(top in ALLOWED)) return null;
  return { layer: top, feature: top === "features" ? second : undefined };
}

function target(specifier, filename) {
  if (specifier.startsWith("@/")) return path.join(SRC, specifier.slice(2));
  if (specifier.startsWith("./")) return path.resolve(path.dirname(filename), specifier);
  return null;
}

const layers = {
  meta: {
    type: "problem",
    messages: {
      parent: "Import with '@/…', not '{{specifier}}'.",
      upward: "'{{from}}' may not import from '{{to}}' (flow: app → features → content | components → lib).",
      crossFeature: "Feature '{{from}}' may not import feature '{{to}}': move the shared code to components/ or lib/.",
    },
    schema: [],
  },
  create(context) {
    const filename = context.filename;
    const from = locate(path.resolve(filename));
    if (!from) return {};

    function check(node) {
      const specifier = node.source?.value;
      if (typeof specifier !== "string") return;
      if (specifier.startsWith("../")) {
        context.report({ node: node.source, messageId: "parent", data: { specifier } });
        return;
      }
      const resolved = target(specifier, filename);
      if (!resolved) return;
      const to = locate(resolved);
      if (!to) return;
      if (from.layer === "features" && to.layer === "features") {
        if (to.feature && to.feature !== from.feature) {
          context.report({
            node: node.source,
            messageId: "crossFeature",
            data: { from: from.feature, to: to.feature },
          });
        }
        return;
      }
      if (!ALLOWED[from.layer].includes(to.layer)) {
        context.report({ node: node.source, messageId: "upward", data: { from: from.layer, to: to.layer } });
      }
    }

    return {
      ImportDeclaration: check,
      ExportNamedDeclaration: check,
      ExportAllDeclaration: check,
      ImportExpression: check,
    };
  },
};

const englishNames = {
  meta: {
    type: "problem",
    messages: {
      spanish:
        "Names are English only (AGENTS.md, rule 8): '{{name}}' contains {{words}}. Spanish goes in string values only.",
    },
    schema: [],
  },
  create(context) {
    function check(node, name) {
      const words = spanishWordsIn(name);
      if (words.length > 0) context.report({ node, messageId: "spanish", data: { name, words: words.join(", ") } });
    }
    return {
      Identifier: (node) => check(node, node.name),
      Property: (node) => {
        if (node.key.type === "Literal" && typeof node.key.value === "string") check(node.key, node.key.value);
      },
    };
  },
};

export const doctrinaPlugin = { rules: { layers, "english-names": englishNames } };
