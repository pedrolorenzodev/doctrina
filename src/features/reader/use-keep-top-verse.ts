import { useEffect, type RefObject } from "react";
import { jumpQuietly, scrollOffset } from "@/lib/scroll";

const minShiftPx = 0.5;
const topZonePx = 2;

type Anchor = { id: string; top: number };

export function useKeepTopVerse(root: RefObject<HTMLElement | null>, unitsSelector = ":scope > [id]") {
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    let anchor: Anchor | null = null;
    const record = () => {
      if (scrollY <= topZonePx) {
        anchor = null;
        return;
      }
      const units = [...element.querySelectorAll<HTMLElement>(unitsSelector)];
      const line = scrollOffset();
      let low = 0;
      let high = units.length - 1;
      let found = -1;
      while (low <= high) {
        const middle = (low + high) >> 1;
        if (units[middle]!.getBoundingClientRect().bottom > line) {
          found = middle;
          high = middle - 1;
        } else {
          low = middle + 1;
        }
      }
      const unit = units[found];
      anchor = unit ? { id: unit.id, top: unit.getBoundingClientRect().top } : null;
    };
    const restore = () => {
      if (!anchor) return;
      const unit = document.getElementById(anchor.id);
      if (!unit || !element.contains(unit)) return;
      const shift = unit.getBoundingClientRect().top - anchor.top;
      if (Math.abs(shift) >= minShiftPx) jumpQuietly(scrollY + shift);
    };
    record();
    const observer = new ResizeObserver(restore);
    observer.observe(element);
    observer.observe(document.body);
    addEventListener("scroll", record, { passive: true });
    return () => {
      observer.disconnect();
      removeEventListener("scroll", record);
    };
  }, [root, unitsSelector]);
}
