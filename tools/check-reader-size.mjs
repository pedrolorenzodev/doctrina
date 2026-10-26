import vm from "node:vm";
import {
  defaultReaderSize,
  readerSizeInitScript,
  readerSizeStorageKey,
  readerSizes,
  steppedReaderSize,
} from "../src/lib/reader-size.ts";

const STORAGE_FAILS = Symbol("storage fails");

const cases = [
  [null, null],
  ["17", "17px"],
  ["29", "29px"],
  ["19", "19px"],
  ["18", null],
  ["huge", null],
  ["", null],
  [STORAGE_FAILS, null],
];

let failures = 0;
const fail = (message) => {
  failures += 1;
  console.error(`FAIL ${message}`);
};

for (const [stored, expected] of cases) {
  const properties = {};
  const sandbox = {
    document: { documentElement: { style: { setProperty: (name, value) => (properties[name] = value) } } },
    localStorage: {
      getItem(key) {
        if (stored === STORAGE_FAILS) throw new Error("storage blocked");
        return key === readerSizeStorageKey ? stored : null;
      },
    },
  };
  vm.runInNewContext(readerSizeInitScript, sandbox);
  const got = properties["--text-reader"] ?? null;
  if (got !== expected) fail(`stored ${String(stored)}: expected ${expected}, got ${got}`);
}

const steps = [
  [19, 1, 21],
  [19, -1, 17],
  [17, -1, 17],
  [29, 1, 29],
  [18, 1, 21],
];
for (const [current, direction, expected] of steps) {
  const got = steppedReaderSize(current, direction);
  if (got !== expected) fail(`step ${current} by ${direction}: expected ${expected}, got ${got}`);
}
if (readerSizes.length !== 7 || readerSizes[0] !== 17 || readerSizes.at(-1) !== 29) fail("seven sizes from 17 to 29");
if (defaultReaderSize !== 19) fail("default size is 19");

if (failures > 0) process.exit(1);
console.log("check-reader-size: ok");
