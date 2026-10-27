import { scrollToLayoutPosition } from "@/lib/scroll";

export function goToUnit(id: string): void {
  const element = document.getElementById(id);
  if (!element) return;
  history.replaceState(null, "", `#${id}`);
  dispatchEvent(new HashChangeEvent("hashchange"));
  scrollToLayoutPosition(element);
}
