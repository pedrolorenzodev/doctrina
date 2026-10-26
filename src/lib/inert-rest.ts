export function inertRest(keep: HTMLElement): () => void {
  const changed: HTMLElement[] = [];
  for (const child of Array.from(document.body.children)) {
    if (child === keep || !(child instanceof HTMLElement) || child.inert) continue;
    child.inert = true;
    changed.push(child);
  }
  return () => {
    for (const child of changed) child.inert = false;
  };
}
