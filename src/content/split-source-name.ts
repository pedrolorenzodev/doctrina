export function splitSourceName(name: string): { name: string; work: string } {
  const cuts = [name.indexOf(", "), name.search(/ \d/)].filter((index) => index >= 0);
  if (cuts.length === 0) return { name, work: "" };
  const cut = Math.min(...cuts);
  return { name: name.slice(0, cut), work: name.slice(cut).replace(/^, /, "").trim() };
}
