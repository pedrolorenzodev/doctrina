import { useEffect, useState, type RefObject } from "react";

export function useStuck(ref: RefObject<HTMLElement | null>, threshold = 4): boolean {
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const top = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--spacing-top")) || 0;
    const measure = () => setStuck(element.getBoundingClientRect().top <= top() + 0.5 && scrollY > threshold);
    measure();
    addEventListener("scroll", measure, { passive: true });
    addEventListener("resize", measure);
    return () => {
      removeEventListener("scroll", measure);
      removeEventListener("resize", measure);
    };
  }, [ref, threshold]);
  return stuck;
}
