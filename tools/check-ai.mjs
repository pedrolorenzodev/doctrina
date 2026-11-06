import { readdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const here = fileURLToPath(new URL("./ai-checks/", import.meta.url));
const loader = fileURLToPath(new URL("./register-alias.mjs", import.meta.url));
const files = readdirSync(here)
  .filter((name) => name.endsWith(".mjs"))
  .sort();

for (const name of files) {
  const run = spawnSync(
    process.execPath,
    ["--disable-warning=MODULE_TYPELESS_PACKAGE_JSON", "--import", loader, `${here}${name}`],
    { encoding: "utf8", env: { ...process.env, AI_PROVIDER: "fake", AI_STORE: "memory" } },
  );
  const output = `${run.stdout}${run.stderr}`.trim();
  if (run.status !== 0) {
    console.error(`FAIL ${name}\n${output}`);
    process.exit(1);
  }
  console.log(`${name}: ${output.split("\n").at(-1)}`);
}
console.log(`ai checks: ${files.length} files ok`);
