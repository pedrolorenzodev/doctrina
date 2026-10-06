import { readFileSync } from "node:fs";

const input = JSON.parse(readFileSync(0, "utf8"));
const command = input?.tool_input?.command ?? "";

const gitPrefix = String.raw`(?:^|[\s;&|(])git(?:\s+-C\s+\S+|\s+-c\s+\S+|\s+--[\w-]+(?:=\S+)?)*\s+`;

const blockedSubcommands = [
  String.raw`commit\b`,
  String.raw`push\b`,
  String.raw`merge\b`,
  String.raw`rebase\b`,
  String.raw`reset\b`,
  String.raw`tag\b`,
  String.raw`cherry-pick\b`,
  String.raw`revert\b`,
  String.raw`am\b`,
  String.raw`commit-tree\b`,
  String.raw`update-ref\b`,
  String.raw`filter-branch\b`,
  String.raw`filter-repo\b`,
  String.raw`replace\b`,
  String.raw`clean\s+(?:\S+\s+)*-\w*f`,
  String.raw`branch\s+(?:\S+\s+)*-\w*D`,
  String.raw`checkout\s+(?:--\s+)?\.(?:\s|$)`,
  String.raw`restore\b`,
  String.raw`stash\s+(?:drop|clear)\b`,
];

const blocked = blockedSubcommands.some((sub) =>
  new RegExp(gitPrefix + sub).test(command),
);

if (blocked) {
  process.stderr.write(
    "Blocked by AGENTS.md (Git, rule 1): the agent never writes git history or discards work. " +
      "Read-only git (status, diff, log, show) is allowed. Hand Pedro the commit message and the list of touched files instead.\n",
  );
  process.exit(2);
}
