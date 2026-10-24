export function nbspBeforeDigits(text: string): string {
  return text.replace(/ (?=\d)/g, " ");
}
