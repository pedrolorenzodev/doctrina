import { readFileSync, writeFileSync } from "node:fs";

const history = JSON.parse(readFileSync("data/site/history.json", "utf8"));
const events = history.events.map((event) => ({
  id: event.id,
  kind: event.kind,
  year: event.year,
  endYear: event.endYear ?? null,
  approx: Boolean(event.approx),
  label: event.label,
}));
const councils = history.councils.map((council) => ({
  id: council.id,
  name: council.name,
  year: council.year,
  endYear: council.endYear ?? null,
  approx: Boolean(council.approx),
  ecumenical: council.ecumenical,
  recognizedBy: council.recognizedAsEcumenicalBy,
  place: council.place,
  dateNote: council.dateNote ?? null,
  decisions: council.decisions,
}));
const heresies = history.heresies.map((heresy) => ({
  id: heresy.id,
  name: heresy.name,
  startYear: heresy.startYear,
  endYear: heresy.endYear,
  teaching: heresy.teaching,
  fathers: heresy.fathers,
}));

const out = `import type { Council, Heresy, HistoryEvent } from "@/content/model/history";

export const historyEvents: HistoryEvent[] = ${JSON.stringify(events, null, 2)};

export const councils: Council[] = ${JSON.stringify(councils, null, 2)};

export const heresies: Heresy[] = ${JSON.stringify(heresies, null, 2)};
`;
writeFileSync("src/content/history/timeline-sources.ts", out);
console.log(`${events.length} events, ${councils.length} councils, ${heresies.length} heresies`);
