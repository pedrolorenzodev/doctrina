export const treeStorageKey = "doctrina-tree";

export const treeInitScript = `(function(){var t;try{t=localStorage.getItem("${treeStorageKey}")}catch(e){}if(t==="closed")document.documentElement.dataset.tree="closed"})();`;

const listeners = new Set<() => void>();

export function subscribeTree(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function isTreeClosed(): boolean {
  return document.documentElement.dataset.tree === "closed";
}

export function chooseTreeClosed(closed: boolean): void {
  if (closed) document.documentElement.dataset.tree = "closed";
  else delete document.documentElement.dataset.tree;
  try {
    localStorage.setItem(treeStorageKey, closed ? "closed" : "open");
  } catch {
    return;
  } finally {
    listeners.forEach((listener) => listener());
  }
}
