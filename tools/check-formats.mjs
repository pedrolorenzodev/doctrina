import { formatDate } from "@/content/format-date";
import { formatLocator } from "@/content/format-locator";
import { splitSourceName } from "@/content/split-source-name";
import { timelineSpan } from "@/lib/timeline-span";

const nb = (text) => text.replace(/ /g, " ");

const locators = [
  [
    {
      parts: [
        { kind: "session", value: "XXI" },
        { kind: "chapter", value: "1" },
      ],
    },
    "es",
    `ses. XXI, cap.${nb(" 1")}`,
  ],
  [{ parts: [{ kind: "canon", value: "1, 3 y 4" }] }, "es", `cann.${nb(" 1,")}${nb(" 3")} y${nb(" 4")}`],
  [{ parts: [{ kind: "canon", value: "913–914" }] }, "es", `cann.${nb(" 913–914")}`],
  [{ parts: [{ kind: "number", value: "1375" }] }, "es", `n.${nb(" 1375")}`],
  [{ parts: [{ kind: "number", value: "1375" }] }, "en", `no.${nb(" 1375")}`],
  [{ parts: [{ kind: "ref", value: "XXIV.31–32" }] }, "es", "XXIV.31–32"],
  [{ parts: [{ kind: "section", value: "X" }] }, "es", "§ X"],
  [{ parts: [{ kind: "chapter", value: "7" }], qualifier: "nota 3" }, "es", `cap.${nb(" 7")} (nota${nb(" 3")})`],
  [{ parts: [] }, "es", ""],
];

const dates = [
  [{ year: 1562, month: 9, day: 17 }, "es", "17 sep 1562"],
  [{ year: 1562, month: 9, day: 17 }, "en", "17 Sep 1562"],
  [{ year: 1848, month: 5 }, "es", "may 1848"],
  [{ year: 1311, yearEnd: 1312 }, "es", "1311–1312"],
  [{ year: 387, yearEnd: 391, circa: true }, "es", "c. 387–391"],
  [{ year: 1992, alsoYears: [1997] }, "es", "1992/1997"],
  [{ year: 388, attribution: "según Baur" }, "es", "388"],
  [{ year: 1895 }, "es", "1895"],
];

const sourceNames = [
  ["Concilio de Trento, sesión XXII, caps. 1–2, can. 4", "Concilio de Trento", "sesión XXII, caps. 1–2, can. 4"],
  ["Juan Pablo II, Ecclesia de Eucharistia 12–13", "Juan Pablo II", "Ecclesia de Eucharistia 12–13"],
  ["Catecismo de la Iglesia Católica 1085, 1360, 1361", "Catecismo de la Iglesia Católica", "1085, 1360, 1361"],
  ["Código de Derecho Canónico, can. 925", "Código de Derecho Canónico", "can. 925"],
  ["Concilio de Florencia, Exsultate Deo", "Concilio de Florencia", "Exsultate Deo"],
  ["Catecismo", "Catecismo", ""],
];

const spans = [
  [[1530, 1647, 1562, 2003], { from: 1500, to: 2026, marks: [1500, 1600, 1700, 1800, 1900, 2026] }],
  [[1215, 1547, 1992], { from: 1200, to: 2026, marks: [1200, 1400, 1600, 1800, 2026] }],
];

let failures = 0;
for (const [locator, locale, expected] of locators) {
  const got = formatLocator(locator, locale);
  if (got !== expected) {
    failures += 1;
    console.error(
      `FAIL locator ${JSON.stringify(locator)} ${locale}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(got)}`,
    );
  }
}
for (const [date, locale, expected] of dates) {
  const got = formatDate(date, locale);
  if (got !== expected) {
    failures += 1;
    console.error(`FAIL date ${JSON.stringify(date)} ${locale}: expected ${expected}, got ${got}`);
  }
}
for (const [name, expectedName, expectedWork] of sourceNames) {
  const got = splitSourceName(name);
  if (got.name !== expectedName || got.work !== expectedWork) {
    failures += 1;
    console.error(`FAIL source name ${name}: got ${JSON.stringify(got)}`);
  }
}
for (const [years, expected] of spans) {
  const got = timelineSpan(years);
  if (JSON.stringify(got) !== JSON.stringify(expected)) {
    failures += 1;
    console.error(`FAIL span ${years}: got ${JSON.stringify(got)}`);
  }
}
if (failures > 0) process.exit(1);
console.log(`Formats: ${locators.length + dates.length + sourceNames.length + spans.length} cases passed.`);
