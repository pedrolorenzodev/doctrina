import { clampWindow, firstWindowPosition } from "../src/lib/window-position.ts";

const cases = [
  ["inside stays", clampWindow({ x: 300, y: 200 }, { width: 1440, height: 900 }), { x: 300, y: 200 }],
  ["left edge", clampWindow({ x: -50, y: 200 }, { width: 1440, height: 900 }), { x: 8, y: 200 }],
  ["top edge", clampWindow({ x: 300, y: -90 }, { width: 1440, height: 900 }), { x: 300, y: 8 }],
  ["right edge", clampWindow({ x: 5000, y: 200 }, { width: 1440, height: 900 }), { x: 1032, y: 200 }],
  ["bottom keeps 120 visible", clampWindow({ x: 300, y: 5000 }, { width: 1440, height: 900 }), { x: 300, y: 772 }],
  ["shrunk viewport re-clamps", clampWindow({ x: 1000, y: 700 }, { width: 800, height: 500 }), { x: 392, y: 372 }],
  ["viewport narrower than the window", clampWindow({ x: 100, y: 100 }, { width: 300, height: 600 }), { x: 8, y: 100 }],
  ["first position wide", firstWindowPosition({ width: 1440, height: 900 }, 80), { x: 928, y: 120 }],
  ["first position at 900", firstWindowPosition({ width: 900, height: 700 }, 80), { x: 388, y: 120 }],
  ["first position narrow", firstWindowPosition({ width: 800, height: 700 }, 80), { x: 376, y: 120 }],
];

let failures = 0;
for (const [label, got, expected] of cases) {
  if (got.x !== expected.x || got.y !== expected.y) {
    failures += 1;
    console.error(`FAIL ${label}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(got)}`);
  }
}
if (failures > 0) process.exit(1);
console.log(`Window position: ${cases.length} cases passed.`);
