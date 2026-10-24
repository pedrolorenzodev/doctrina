import vm from "node:vm";
import { themeInitScript, themeStorageKey } from "../src/lib/theme.ts";

const STORAGE_FAILS = Symbol("storage fails");

const cases = [
  [null, false, "light"],
  [null, true, "dark"],
  ["dark", false, "dark"],
  ["light", true, "light"],
  ["sepia", true, "dark"],
  ["sepia", false, "light"],
  [STORAGE_FAILS, true, "dark"],
  [STORAGE_FAILS, false, "light"],
];

let failures = 0;

for (const [stored, prefersDark, expected] of cases) {
  const attributes = {};
  const sandbox = {
    document: { documentElement: { setAttribute: (name, value) => (attributes[name] = value) } },
    localStorage: {
      getItem(key) {
        if (stored === STORAGE_FAILS) throw new Error("storage blocked");
        return key === themeStorageKey ? stored : null;
      },
    },
    matchMedia: (query) => ({ matches: query === "(prefers-color-scheme: dark)" && prefersDark }),
  };
  vm.runInNewContext(themeInitScript, sandbox);
  if (attributes["data-theme"] !== expected) {
    failures += 1;
    const label = stored === STORAGE_FAILS ? "storage fails" : String(stored);
    console.error(
      `FAIL stored ${label}, prefers dark ${prefersDark}: expected ${expected}, got ${attributes["data-theme"]}`,
    );
  }
}

if (failures > 0) {
  console.error(`${failures} of ${cases.length} theme script cases failed.`);
  process.exit(1);
}
console.log(`Theme script: ${cases.length} cases passed.`);
