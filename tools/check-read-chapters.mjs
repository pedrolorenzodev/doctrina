import { parseReadChapters, readChapterKey } from "../src/lib/read-chapters.ts";

const failures = [];
const check = (name, ok, detail = "") => {
  if (!ok) failures.push(`${name}${detail ? `: ${detail}` : ""}`);
};

check("a key joins book and chapter", readChapterKey("John", 6) === "John.6");
check("valid keys pass", parseReadChapters(["John.6", "1Cor.13", "Ps.150"]).join() === "John.6,1Cor.13,Ps.150");
check("duplicates collapse", parseReadChapters(["John.6", "John.6"]).length === 1);
check("junk is dropped", parseReadChapters(["John.0", "John", ".6", 6, null, "John.6.1", "a b.1"]).length === 0);
check("a non-array is empty", parseReadChapters({}).length === 0 && parseReadChapters(null).length === 0);

if (failures.length > 0) {
  console.error(failures.map((failure) => `FAIL ${failure}`).join("\n"));
  process.exit(1);
}
console.log("read-chapters: ok");
