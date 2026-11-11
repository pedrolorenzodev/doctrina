export type SourceRow = {
  id: string;
  citationId: string;
  name: string;
  work: string;
  date: { label: string; start: number; end: number | null } | null;
};
