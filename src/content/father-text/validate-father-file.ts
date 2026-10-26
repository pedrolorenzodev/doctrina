export type FatherFile = {
  work: { id: string; title: string; author: string };
  edition: {
    id: string;
    lang: string;
    translator: string | null;
    year: number | null;
    bibliography: string;
    source: string;
    scan: string | null;
    licence: string;
    retrievedAt: string;
    sha256: string;
    locatorNotes?: string | null;
  };
  divisions: { locator: string; ordinal: number; heading: string | null; text: string }[];
};

const kebab = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const languages = ["en", "es", "la", "el", "de"];

export function validateFatherFile(file: FatherFile, label: string): string[] {
  const errors: string[] = [];
  const fail = (message: string) => errors.push(`${label}: ${message}`);
  if (!kebab.test(file.work?.id ?? "")) fail(`work id "${file.work?.id}" is not kebab-case`);
  if (!file.work?.title || !file.work?.author) fail("work needs a title and an author");
  const edition = file.edition;
  if (!edition || !kebab.test(edition.id ?? "")) fail(`edition id "${edition?.id}" is not kebab-case`);
  if (edition) {
    if (!languages.includes(edition.lang)) fail(`language "${edition.lang}" is not one of ${languages.join(", ")}`);
    if (edition.licence !== "public-domain") fail(`licence is "${edition.licence}", only public-domain is loaded`);
    if (!/^[0-9a-f]{64}$/.test(edition.sha256 ?? "")) fail("sha256 is not 64 hex characters");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(edition.retrievedAt ?? "")) fail("retrievedAt is not a date");
    if (!edition.bibliography || !edition.source) fail("edition needs a bibliography and a source");
  }
  const divisions = file.divisions ?? [];
  if (divisions.length === 0) fail("no divisions");
  const locators = new Set<string>();
  divisions.forEach((division, index) => {
    if (division.ordinal !== index + 1) fail(`division ${index + 1} has ordinal ${division.ordinal}`);
    if (!division.locator) fail(`division ${index + 1} has no locator`);
    if (locators.has(division.locator)) fail(`duplicate locator ${division.locator}`);
    locators.add(division.locator);
    if (!division.text || division.text !== division.text.trim())
      fail(`division ${division.locator} has empty or untrimmed text`);
  });
  return errors;
}
