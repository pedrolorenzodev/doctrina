import { chooseTreeClosed, isTreeClosed, subscribeTree, treeStorageKey } from "@/lib/tree-visibility";

export type DrawerLayout = "side" | "sheet";

export const drawerMotion = { moveMs: 260, fadeMs: 200, gapPx: 48, sheetGapPx: 40 } as const;
export const sheetHeight = "54dvh";
export const sheetShadow = "0 -14px 34px -22px rgb(0 0 0 / 0.5)";
export const sideQuery = "(min-width: 68.75rem)";

const move = `${drawerMotion.moveMs}ms var(--ease-move)`;
const stripTransitions = `translate 220ms var(--ease-move), transform 220ms var(--ease-move), margin-right 380ms var(--ease-smooth), margin-left ${move}`;

type Shell = { content: HTMLElement; grid: HTMLElement | null; strip: HTMLElement | null; columns: HTMLElement[] };

let hidTree: { stored: string | null } | null = null;
let ownChange = false;
let settle = 0;

function shellParts(): Shell | null {
  const content = document.getElementById("content");
  if (!content) return null;
  let grid = content.parentElement;
  while (grid && getComputedStyle(grid).display !== "grid") grid = grid.parentElement;
  return {
    content,
    grid,
    strip: document.querySelector<HTMLElement>("[data-reader-strip]"),
    columns: [...document.querySelectorAll<HTMLElement>(".reader-column")],
  };
}

function readStored(): string | null {
  try {
    return localStorage.getItem(treeStorageKey);
  } catch {
    return null;
  }
}

function writeStored(value: string | null) {
  try {
    if (value === null) localStorage.removeItem(treeStorageKey);
    else localStorage.setItem(treeStorageKey, value);
  } catch {
    return;
  }
}

function setTree(closed: boolean) {
  ownChange = true;
  chooseTreeClosed(closed);
  ownChange = false;
}

function foldTree() {
  if (hidTree || isTreeClosed()) return;
  hidTree = { stored: readStored() };
  setTree(true);
  writeStored(hidTree.stored);
}

function unfoldTree() {
  if (!hidTree) return;
  const { stored } = hidTree;
  hidTree = null;
  setTree(false);
  writeStored(stored);
}

function withMotion(shell: Shell, animate: boolean) {
  window.clearTimeout(settle);
  const timing = animate ? move : "0s";
  shell.content.style.transition = `padding-left ${timing}, padding-bottom ${timing}`;
  if (shell.grid) shell.grid.style.transition = `grid-template-columns ${timing}`;
  if (shell.strip) shell.strip.style.transition = animate ? stripTransitions : "none";
  for (const column of shell.columns) column.style.transition = `left ${timing}`;
  settle = window.setTimeout(
    () => {
      shell.content.style.transition = "";
      if (shell.grid) shell.grid.style.transition = "";
      if (shell.strip) shell.strip.style.transition = "";
      for (const column of shell.columns) column.style.transition = "";
    },
    animate ? drawerMotion.moveMs + 60 : 0,
  );
}

export function applyDrawerRoom(layout: DrawerLayout | null, animate: boolean): void {
  const shell = shellParts();
  if (!shell) return;
  withMotion(shell, animate);
  const { content, strip, columns } = shell;
  for (const column of columns) column.style.left = layout ? "0px" : "";
  if (layout === "side") {
    foldTree();
    content.style.paddingLeft = `calc(var(--spacing-panel) + ${drawerMotion.gapPx}px)`;
    content.style.paddingBottom = "";
    if (strip) strip.style.marginLeft = `-${drawerMotion.gapPx}px`;
    return;
  }
  unfoldTree();
  content.style.paddingLeft = "";
  if (strip) strip.style.marginLeft = "";
  content.style.paddingBottom = layout === "sheet" ? `calc(${sheetHeight} + ${drawerMotion.sheetGapPx}px)` : "";
}

export function pinColumns(): void {
  for (const column of document.querySelectorAll<HTMLElement>(".reader-column")) {
    column.style.transition = `left ${move}`;
    column.style.left = getComputedStyle(column).left;
  }
}

export function watchTreeReopen(onReopen: () => void): () => void {
  return subscribeTree(() => {
    if (ownChange || !hidTree || isTreeClosed()) return;
    hidTree = null;
    applyDrawerRoom(null, true);
    onReopen();
  });
}
