import { defaultLocale, isHomePath, isLocale, localeHref, locales } from "@doctrina/core/locale";

const failures = [];
const check = (name, ok) => {
  if (!ok) failures.push(name);
};

check("locales are es and en", locales.join(",") === "es,en");
check("default locale is es", defaultLocale === "es");
check("isLocale accepts es and en", isLocale("es") && isLocale("en"));
check("isLocale rejects others", !isLocale("fr") && !isLocale("") && !isLocale("ES"));
check("localeHref builds the home", localeHref("en") === "/en");
check("localeHref builds a path", localeHref("es", "/biblia") === "/es/biblia");
check("isHomePath accepts both homes", isHomePath("/es") && isHomePath("/en"));
check("isHomePath rejects deeper paths", !isHomePath("/es/biblia") && !isHomePath("/"));

if (failures.length > 0) {
  console.error(failures.map((f) => `FAIL ${f}`).join("\n"));
  process.exit(1);
}
console.log("Core locale checks: 8 passed.");
