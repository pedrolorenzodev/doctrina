export function shardOf(id: string): string | null {
  const match = /^([GH])(\d+)[A-Z]?$/.exec(id);
  if (!match?.[1] || !match[2]) return null;
  return `${match[1]}${String(Math.floor(Number(match[2]) / 100)).padStart(3, "0")}`;
}
