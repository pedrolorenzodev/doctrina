import { sidePanelBreakpoints } from "@/components/side-panel";
import { scrollOffset, scrollToY } from "@/lib/scroll";

const sheetGap = 16;

export function keepAboveSheet(verse: HTMLElement, from: keyof typeof sidePanelBreakpoints) {
  if (matchMedia(sidePanelBreakpoints[from]).matches) return;
  const sheet = document.querySelector<HTMLElement>("aside[data-side-panel]");
  if (!sheet) return;
  const rect = verse.getBoundingClientRect();
  const needed = rect.bottom - (innerHeight - sheet.offsetHeight - sheetGap);
  if (needed <= 0) return;
  scrollToY(scrollY + Math.max(0, Math.min(needed, rect.top - scrollOffset())));
}
