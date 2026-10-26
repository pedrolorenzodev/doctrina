export type CitationView = {
  id: string;
  kind: string;
  title: string | null;
  subtitle?: string | null;
  quote: { text: string; lang: string } | null;
  quoteLanguage: string | null;
  definition: string | null;
  who: string | null;
  locator: string;
  note: { label: string; text: string } | null;
  date: {
    label: string;
    start: number;
    end: number | null;
    heading?: string;
    markerLabel?: string;
    span?: { from: number; to: number; marks: number[] };
  } | null;
  externalLink: { href: string; label: string } | null;
  copyText: string | null;
  fullSource: boolean;
};
