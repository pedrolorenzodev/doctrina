const holdMs = 2000;

let current: { element: HTMLElement; timer: number } | null = null;

export function markArrival(element: HTMLElement): void {
  if (current) {
    clearTimeout(current.timer);
    current.element.removeAttribute("data-marked");
  }
  element.dataset.marked = "";
  const timer = window.setTimeout(() => {
    element.removeAttribute("data-marked");
    current = null;
  }, holdMs);
  current = { element, timer };
}

export function clearArrival(): void {
  if (!current) return;
  clearTimeout(current.timer);
  current.element.removeAttribute("data-marked");
  current = null;
}
