import vm from "node:vm";
import {
  defaultReaderText,
  parseReaderText,
  readerLeadings,
  readerMeasures,
  readerTextInitScript,
  readerTextStorageKey,
  readerWeights,
  steppedValue,
} from "../src/lib/reader-text.ts";

const STORAGE_FAILS = Symbol("storage fails");

let failures = 0;
const fail = (message) => {
  failures += 1;
  console.error(`FAIL ${message}`);
};

function run(stored) {
  const properties = {};
  const dataset = {};
  const sandbox = {
    document: {
      documentElement: { style: { setProperty: (name, value) => (properties[name] = String(value)) }, dataset },
    },
    localStorage: {
      getItem(key) {
        if (stored === STORAGE_FAILS) throw new Error("storage blocked");
        return key === readerTextStorageKey ? stored : null;
      },
    },
  };
  vm.runInNewContext(readerTextInitScript, sandbox);
  return { properties, dataset };
}

const empty = [null, "", "nope", "null", "[]", "{}", STORAGE_FAILS];
for (const stored of empty) {
  const { properties, dataset } = run(stored);
  if (Object.keys(properties).length > 0 || Object.keys(dataset).length > 0)
    fail(`stored ${String(stored)} changed the page`);
}

const full = run(JSON.stringify({ weight: 500, leading: 1.95, measure: 880, justify: true }));
const wanted = { "--reader-weight": "500", "--text-reader--line-height": "1.95", "--reader-measure": "880px" };
for (const [name, value] of Object.entries(wanted)) {
  if (full.properties[name] !== value) fail(`${name}: expected ${value}, got ${full.properties[name]}`);
}
if (String(full.dataset.readerWider) !== "2")
  fail(`880 px should set data-reader-wider 2, got ${full.dataset.readerWider}`);
if (!("readerJustify" in full.dataset)) fail("justify was not applied");

const narrow = run(JSON.stringify({ measure: 560 }));
if (narrow.properties["--reader-measure"] !== "560px" || "readerWider" in narrow.dataset)
  fail("560 px must not be marked wider");

const unknown = run(JSON.stringify({ weight: 777, leading: 3, measure: 1000, justify: "yes" }));
if (Object.keys(unknown.properties).length > 0 || Object.keys(unknown.dataset).length > 0)
  fail("unknown values must be ignored");

for (const raw of [null, "{", '{"weight":777}', '{"justify":"yes"}', "5"]) {
  const value = parseReaderText(raw);
  const known =
    readerWeights.includes(value.weight) &&
    readerLeadings.includes(value.leading) &&
    readerMeasures.includes(value.measure) &&
    typeof value.justify === "boolean";
  if (!known) fail(`parseReaderText(${raw}) returned a value outside the steps`);
}
if (parseReaderText(null) !== defaultReaderText) fail("no stored value must give the default");

for (const [list, from, direction, to] of [
  [readerWeights, 300, 1, 400],
  [readerWeights, 200, -1, 200],
  [readerWeights, 600, 1, 600],
  [readerMeasures, 720, 1, 800],
  [readerMeasures, 560, -1, 560],
  [readerLeadings, 1.66, -1, 1.55],
]) {
  const got = steppedValue(list, from, direction);
  if (got !== to) fail(`steppedValue ${from} ${direction}: expected ${to}, got ${got}`);
}

if (failures > 0) process.exit(1);
console.log("Reader text settings: cases passed.");
