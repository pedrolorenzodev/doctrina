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
