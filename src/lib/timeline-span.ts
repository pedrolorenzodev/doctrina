export type TimelineSpan = { from: number; to: number; marks: number[] };

const presentYear = 2026;
const century = 100;

export function timelineSpan(years: number[]): TimelineSpan {
  const from = Math.floor(Math.min(...years) / century) * century;
  const step = presentYear - from > 600 ? 2 * century : century;
  const marks = [from];
  for (let mark = from + step; mark < presentYear - step / 2; mark += step) marks.push(mark);
  marks.push(presentYear);
  return { from, to: presentYear, marks };
}
