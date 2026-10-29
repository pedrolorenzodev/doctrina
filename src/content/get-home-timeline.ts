import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { formatYear } from "@/content/format-date";
import { councilHref, divisionHref, fatherHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@/lib/locale";

type Localized = { es: string; en: string };

type History = {
  fathers: {
    id: string;
    kind: "person" | "work";
    name: Localized;
    born: number | null;
    died: number;
    approx: boolean;
    role: Localized;
  }[];
  councils: {
    id: string;
    name: Localized;
    year: number;
    approx?: boolean;
    ecumenicalStatus: string;
    place: Localized;
  }[];
  divisions: { id: string; name: Localized; year: number; endYear?: number }[];
};

export type YearsFather = {
  id: string;
  name: string;
  start: number;
  end: number;
  date: string;
  detail: string;
  href: string;
};
export type YearsCouncil = {
  id: string;
  name: string;
  year: number;
  seven: boolean;
  date: string;
  detail: string;
  href: string;
};
export type YearsDivision = { id: string; name: string; year: number; end: number; date: string; href: string };
export type YearsData = { fathers: YearsFather[]; councils: YearsCouncil[]; divisions: YearsDivision[] };

const history = JSON.parse(readFileSync(join(process.cwd(), "data/site/history.json"), "utf8")) as History;

const workLead = 25;
const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export function getHomeTimeline(locale: Locale): YearsData {
  const text = getUiText(locale).home.years;
  const fathers = history.fathers.map((father): YearsFather => {
    const died = formatYear({ year: father.died, circa: father.approx });
    const circa = father.approx ? "c. " : "";
    const date =
      father.kind === "work"
        ? died
        : father.born
          ? `${circa}${father.born}–${father.died}`
          : text.died.replace("{date}", died);
    return {
      id: father.id,
      name: father.name[locale],
      start: father.born ?? father.died - workLead,
      end: father.died,
      date,
      detail: capitalize(father.role[locale]),
      href: fatherHref(locale, father.id),
    };
  });
  const councils = history.councils.map((council): YearsCouncil => {
    const seven = council.ecumenicalStatus === "seven";
    const place = council.place[locale];
    return {
      id: council.id,
      name: council.name[locale],
      year: council.year,
      seven,
      date: formatYear({ year: council.year, circa: council.approx ?? false }),
      detail: seven ? `${place}${place ? ". " : ""}${text.ecumenical}` : place,
      href: councilHref(locale, council.id),
    };
  });
  const divisions = history.divisions.map((division): YearsDivision => ({
    id: division.id,
    name: division.name[locale],
    year: division.year,
    end: division.endYear ?? division.year,
    date: division.endYear ? `${division.year}–${division.endYear}` : String(division.year),
    href: divisionHref(locale, division.id),
  }));
  return { fathers, councils, divisions };
}
