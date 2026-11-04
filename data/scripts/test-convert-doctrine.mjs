import { buildPage } from "./convert-doctrine.mjs";
import { eucharistDoctrine } from "../../src/content/pages/eucharist/doctrine.es.ts";

const allowed = ["presides", "bread-and-wine", "leftovers"];
const built = await buildPage("eucharist");
const before = JSON.parse(JSON.stringify(eucharistDoctrine));
const changed = [];
for (const key of Object.keys(built)) {
  if (key === "practice" || key === "connected") continue;
  if (JSON.stringify(built[key]) !== JSON.stringify(before[key])) changed.push(key);
}
built.practice.aspects.forEach((aspect, index) => {
  const old = before.practice.aspects[index];
  if (old.id !== aspect.id || old.label !== aspect.label) changed.push(`practice.${aspect.id}`);
  for (const tradition of Object.keys(aspect.cells)) {
    const same = JSON.stringify(aspect.cells[tradition]) === JSON.stringify(old.cells[tradition]);
    if (!same && !allowed.includes(aspect.id)) changed.push(`practice.${aspect.id}.${tradition}`);
  }
});
const connected = built.connected.items.map((item, index) => [item.doctrine, JSON.stringify(item) !== JSON.stringify(before.connected.items[index])]);
for (const [doctrine, differs] of connected) if (differs && doctrine !== "baptism") changed.push(`connected.${doctrine}`);
if (changed.length > 0) {
  console.error(`unexpected changes: ${changed.join(", ")}`);
  process.exit(1);
}
console.log("convert-doctrine: only the three corrected Eucharist cells and its Baptism connected sentence differ");
