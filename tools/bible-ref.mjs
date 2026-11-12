import { detectQueryLanguage } from "@doctrina/core/bible-reference/language";
import { parseReferences } from "@doctrina/core/bible-reference/parse";
import { routeFor } from "@doctrina/core/bible-reference/route";
import { resolveReferences } from "@doctrina/core/bible-reference/resolve";
import { versification } from "@doctrina/core/bible-reference/versification";

const text = process.argv[2] ?? "";
const parts = parseReferences(text);
const language = detectQueryLanguage(parts, "es");
const resolved = resolveReferences(parts, versification.rv1909.books);
const passages = resolved.flatMap((part) => ("error" in part ? [] : [part.passage]));
console.log(
  JSON.stringify(
    { text, language, parsed: parts, resolved, route: routeFor(passages, language === "unknown" ? "es" : language) },
    null,
    2,
  ),
);
