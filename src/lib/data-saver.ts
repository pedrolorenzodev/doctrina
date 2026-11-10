type ConnectionInfo = { saveData?: boolean; effectiveType?: string };

const slowConnections = new Set(["slow-2g", "2g", "3g"]);

export function speculativeLoadsAllowed(): boolean {
  const connection = (navigator as Navigator & { connection?: ConnectionInfo }).connection;
  if (connection?.saveData) return false;
  if (connection?.effectiveType && slowConnections.has(connection.effectiveType)) return false;
  return !matchMedia("(prefers-reduced-data: reduce)").matches;
}
