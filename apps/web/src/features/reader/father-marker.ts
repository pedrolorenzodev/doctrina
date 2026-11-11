export function markerLabel(locator: string, markers: Record<string, string>): string {
  return locator.replace(/[a-z]+/g, (word) => markers[word] ?? word);
}
