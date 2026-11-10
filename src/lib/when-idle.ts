export function whenIdle(task: () => void): () => void {
  if (typeof requestIdleCallback === "function") {
    const handle = requestIdleCallback(task, { timeout: 1500 });
    return () => cancelIdleCallback(handle);
  }
  const handle = setTimeout(task, 300);
  return () => clearTimeout(handle);
}
