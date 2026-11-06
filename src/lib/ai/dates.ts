const TIME_ZONE = "America/Argentina/Buenos_Aires";

const formatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function parts(now: Date): { year: string; month: string; day: string } {
  const found = Object.fromEntries(formatter.formatToParts(now).map((part) => [part.type, part.value]));
  return { year: found.year ?? "", month: found.month ?? "", day: found.day ?? "" };
}

export function dayKey(now: Date = new Date()): string {
  const { year, month, day } = parts(now);
  return `${year}-${month}-${day}`;
}

export function monthKey(now: Date = new Date()): string {
  const { year, month } = parts(now);
  return `${year}-${month}`;
}
