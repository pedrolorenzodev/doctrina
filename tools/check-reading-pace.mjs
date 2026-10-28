import { assessReading } from "../src/lib/reading-pace.ts";

const failures = [];
const check = (name, actual, expected) => {
  if (actual !== expected) failures.push(`${name}: expected ${expected}, got ${actual}`);
};

check(
  "no end, no verdict",
  assessReading({ creditedWords: 250, totalWords: 252, activeSeconds: 90, reachedEnd: false }),
  "none",
);
check(
  "reading at a normal pace to the end is read",
  assessReading({ creditedWords: 252, totalWords: 252, activeSeconds: 60, reachedEnd: true }),
  "read",
);
check(
  "half the normal time still counts",
  assessReading({ creditedWords: 252, totalWords: 252, activeSeconds: 32, reachedEnd: true }),
  "read",
);
check(
  "scrolling through in five seconds is a doubt",
  assessReading({ creditedWords: 252, totalWords: 252, activeSeconds: 5, reachedEnd: true }),
  "doubt",
);
check(
  "arriving at the end from the middle is a doubt",
  assessReading({ creditedWords: 100, totalWords: 252, activeSeconds: 60, reachedEnd: true }),
  "doubt",
);
check(
  "an empty chapter gives no verdict",
  assessReading({ creditedWords: 0, totalWords: 0, activeSeconds: 0, reachedEnd: true }),
  "none",
);

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log("reading pace: ok");
