export type NumberedChapter = { id: string; versification: string; verseCount: number };

export function numberingDiffers(selected: NumberedChapter, reference: NumberedChapter, book: string): boolean {
  if (selected.id === reference.id) return false;
  if (selected.verseCount !== reference.verseCount) return true;
  return book === "Ps" && selected.versification !== reference.versification;
}
