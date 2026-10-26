import { splitByRed } from "../src/lib/text-pieces.ts";

const failures = [];
const check = (name, ok, detail = "") => {
  if (!ok) failures.push(`${name}${detail ? `: ${detail}` : ""}`);
};
const shape = (pieces) => pieces.map((p) => `${p.from}-${p.to}${p.red ? ":red" : ""}`).join();

check("no red is one plain piece", shape(splitByRed(0, 10, undefined)) === "0-10");
check("red in the middle splits in three", shape(splitByRed(0, 10, [[3, 7]])) === "0-3,3-7:red,7-10");
check("a range inside a bigger red span is all red", shape(splitByRed(4, 6, [[2, 9]])) === "4-6:red");
check("a span that starts before the range is clipped", shape(splitByRed(5, 10, [[2, 7]])) === "5-7:red,7-10");
check("a span beyond the range is clipped", shape(splitByRed(0, 5, [[3, 99]])) === "0-3,3-5:red");
check(
  "two spans leave the gap plain",
  shape(
    splitByRed(0, 10, [
      [1, 3],
      [6, 8],
    ]),
  ) === "0-1,1-3:red,3-6,6-8:red,8-10",
);
check(
  "pieces cover the range without gaps",
  splitByRed(2, 9, [
    [3, 4],
    [6, 8],
  ]).reduce((sum, p) => sum + p.to - p.from, 0) === 7,
);

if (failures.length > 0) {
  console.error(failures.map((failure) => `FAIL ${failure}`).join("\n"));
  process.exit(1);
}
console.log("text-pieces: ok");
