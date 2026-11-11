export type FatherDivision = { locator: string; ordinal: number; heading?: string | null; text: string };

export type FatherEdition = {
  id: string;
  lang: "es" | "en";
  translator: string;
  year: number;
  bibliography: string;
  licence: string;
  status?: string;
};

export type FatherWorkSummary = {
  id: string;
  title: string;
  author: string;
  edition: FatherEdition;
};

export type FatherWork = FatherWorkSummary & { divisions: FatherDivision[] };

export type SpanishFatherFile = {
  work: { id: string; title: string; author: string };
  edition: FatherEdition & { translatedFrom: { editionId: string } };
  divisions: FatherDivision[];
};

export type FatherSource = {
  works(): Promise<FatherWorkSummary[]>;
  work(id: string): Promise<FatherWork | null>;
  spanishFile(id: string): Promise<SpanishFatherFile | null>;
};
