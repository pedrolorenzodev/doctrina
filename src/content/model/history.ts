export type Localized = { es: string; en: string };

export type FatherWork = { title: Localized; date: string; year: number };

export type Father = {
  id: string;
  kind: "person" | "work";
  name: Localized;
  born: number | null;
  died: number;
  approx: boolean;
  region: Localized;
  language: "greek" | "latin" | "syriac";
  role: Localized;
  works: FatherWork[];
  summary: Localized;
};
