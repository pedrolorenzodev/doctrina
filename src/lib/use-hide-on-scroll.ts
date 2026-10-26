import { useEffect, useState, type RefObject } from "react";

const hideAfter = 48;
const showAfter = 24;
const topZone = 4;

export function useHideOnScroll(ref: RefObject<HTMLElement | null>): boolean {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let last = scrollY;
    let direction = 0;
    let travelled = 0;
    const pinned = () => element.matches(":focus-within") || element.querySelector('[aria-expanded="true"]') !== null;
    const onScroll = () => {
      const y = Math.max(0, scrollY);
      const delta = y - last;
      last = y;
      if (y <= topZone || pinned()) {
        direction = 0;
        travelled = 0;
        setHidden(false);
        return;
      }
      if (delta === 0) return;
      const sign = delta > 0 ? 1 : -1;
      if (sign !== direction) {
        direction = sign;
        travelled = 0;
      }
      travelled += Math.abs(delta);
      if (sign > 0 && travelled >= hideAfter && y > element.offsetHeight) setHidden(true);
      else if (sign < 0 && travelled >= showAfter) setHidden(false);
    };
    const onFocusIn = () => setHidden(false);
    addEventListener("scroll", onScroll, { passive: true });
    element.addEventListener("focusin", onFocusIn);
    return () => {
      removeEventListener("scroll", onScroll);
      element.removeEventListener("focusin", onFocusIn);
    };
  }, [ref]);

  return hidden;
}
