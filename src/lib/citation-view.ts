export type CitationView = {
  id: string;
  kind: string;
  quote: { text: string; lang: string } | null;
  who: string;
  locator: string;
  date: { label: string; start: number; end: number | null } | null;
  externalLink: { href: string; label: string } | null;
  copyText: string;
};
