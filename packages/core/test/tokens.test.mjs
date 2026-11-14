import { spawnSync } from "node:child_process";
import { join } from "node:path";

const scripts = join(import.meta.dirname, "../scripts");
const steps = [
  ["tokens.ts matches the CSS it was generated from", "build-tokens.mjs", ["--check"]],
  ["tokens.ts passes the coverage and round-trip check", "check-tokens.mjs", []],
];

let failed = false;
for (const [name, script, args] of steps) {
  const result = spawnSync(process.execPath, [join(scripts, script), ...args], { encoding: "utf8" });
  if (result.status !== 0) {
    failed = true;
    console.error(`FAIL ${name}\n${result.stdout}${result.stderr}`);
  }
}

if (failed) process.exit(1);
