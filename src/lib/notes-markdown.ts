const plain = (text: string) => text.replaceAll("\u00a0", " ");

type MarkdownItem = { place: string; text: string; date: string };

export function notesMarkdown(heading: string, items: MarkdownItem[]): string {
  const body = items.map((item) => `## ${plain(item.place)}\n\n${item.text}\n\n${item.date}`).join("\n\n");
  return `# ${heading}\n\n${body}\n`;
}

export function highlightsMarkdown(heading: string, items: MarkdownItem[]): string {
  const body = items.map((item) => `> ${item.text}\n\n${plain(item.place)}`).join("\n\n");
  return `# ${heading}\n\n${body}\n`;
}

export function downloadText(fileName: string, content: string): void {
  const url = URL.createObjectURL(new Blob([content], { type: "text/markdown;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(url);
}
