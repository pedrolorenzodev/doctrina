import { execFileSync } from "node:child_process";
import { spanishWordsIn } from "./spanish-words.mjs";

const FROZEN = ["docs/research/proposals/", "handoff/", "tmp/"];
const EXTERNAL = [/^docs\/research\/reader-[a-z-]+\/biblia-/];
const SRC_SEGMENT =
  /^(\[{1,2}(\.\.\.)?[a-z]+\]{1,2}|\([a-z0-9-]+\)|@[a-z0-9-]+|\.gitkeep|[a-z0-9]+(-[a-z0-9]+)*(\.[a-z0-9]+)*)$/;

export function problemsOf(path) {
  if (FROZEN.some((prefix) => path.startsWith(prefix))) return [];
  if (EXTERNAL.some((pattern) => pattern.test(path))) return [];
  const problems = [];
  if (/[^\x20-\x7e]/.test(path)) problems.push("non-ASCII characters");
  const spanish = spanishWordsIn(path);
  if (spanish.length > 0) problems.push(`Spanish words: ${spanish.join(", ")}`);
  const appSrc = /^(apps|packages)\/[^/]+\/src\//.exec(path);
  if (appSrc) {
    const bad = path
      .slice(appSrc[0].length)
      .split("/")
      .filter((segment) => !SRC_SEGMENT.test(segment));
    if (bad.length > 0) problems.push(`not kebab-case: ${bad.join(", ")}`);
  }
  return problems;
}

const fixtures = [
  ["apps/web/src/features/doctrine/citation-window.tsx", false],
  ["apps/web/src/app/[lang]/(site)/page.tsx", false],
  ["apps/web/src/app/[lang]/[...slug]/page.tsx", false],
  ["apps/web/src/features/shell/fuente-modal.tsx", true],
  ["apps/web/src/features/shell/CitationWindow.tsx", true],
  ["apps/web/src/components/ui/botón.tsx", true],
  ["apps/web/src/lib/listaDeCitas.ts", true],
  ["docs/research/objeciones.md", true],
  ["data/scripts/build-bibles.mjs", false],
  ["docs/research/proposals/site-clean/fuente.js", false],
];
const wrongFixtures = fixtures.filter(([path, bad]) => problemsOf(path).length > 0 !== bad);
if (wrongFixtures.length > 0) {
  console.error("Name check fixtures failed:", wrongFixtures.map(([path]) => path).join(", "));
  process.exit(1);
}

const listed = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard"], { encoding: "utf8" });
const failures = [...new Set(listed.split("\n").filter(Boolean))]
  .map((path) => [path, problemsOf(path)])
  .filter(([, problems]) => problems.length > 0);

if (failures.length > 0) {
  for (const [path, problems] of failures) console.error(`${path}: ${problems.join("; ")}`);
  console.error(`${failures.length} file names break the English-only rule (AGENTS.md, rule 8).`);
  process.exit(1);
}
console.log(`File names: English only (${fixtures.length} fixtures passed).`);
