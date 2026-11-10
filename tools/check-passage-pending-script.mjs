import vm from "node:vm";
import { passagePendingScript } from "../src/features/passages/passage-pending.ts";

const ids = ["first-passage", "second-passage", "third</script>passage"];

const cases = [
  ["", false],
  ["#", false],
  ["#first-passage", false],
  ["#second-passage", true],
  ["#third</script>passage", true],
  ["#%73econd-passage", true],
  ["#unknown", false],
  ["#top", false],
  ["#%E0%A4%A", false],
];

let failures = 0;

for (const [hash, expected] of cases) {
  const dataset = {};
  const timers = [];
  const sandbox = {
    document: { documentElement: { dataset } },
    location: { hash },
    setTimeout: (callback, ms) => timers.push({ callback, ms }),
  };
  vm.runInNewContext(passagePendingScript(ids), sandbox);
  const marked = "passagePending" in dataset;
  if (marked !== expected) {
    failures += 1;
    console.error(`FAIL hash ${JSON.stringify(hash)}: expected marked ${expected}, got ${marked}`);
  }
  if (marked) {
    if (timers.length !== 1 || timers[0].ms > 10000) {
      failures += 1;
      console.error(`FAIL hash ${JSON.stringify(hash)}: the safety timer is missing or too long`);
    } else {
      timers[0].callback();
      if ("passagePending" in dataset) {
        failures += 1;
        console.error(`FAIL hash ${JSON.stringify(hash)}: the safety timer did not clear the mark`);
      }
    }
  } else if (timers.length > 0) {
    failures += 1;
    console.error(`FAIL hash ${JSON.stringify(hash)}: an unmarked page set a timer`);
  }
}

if (passagePendingScript(ids).includes("</script>")) {
  failures += 1;
  console.error("FAIL the script text can close its own tag");
}

if (failures > 0) process.exit(1);
console.log(`passage pending script: ${cases.length} cases ok`);
