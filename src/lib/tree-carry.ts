export const treeCarryKey = "doctrina-tree-carry";

const maxAgeMs = 10000;
const hideFallbackMs = 1500;

export type TreeCarry = { to: string; open: string[]; scroll: number; at: number };

export const treeCarryInitScript = `(function(){try{var c=JSON.parse(sessionStorage.getItem("${treeCarryKey}")||"null");if(c&&c.to===location.pathname&&Date.now()-c.at<${maxAgeMs}){var r=document.documentElement;r.dataset.treeCarry="1";setTimeout(function(){delete r.dataset.treeCarry},${hideFallbackMs})}}catch(e){}})();`;

export function saveTreeCarry(to: string): void {
  const nav = document.querySelector<HTMLElement>("#site-sidebar nav");
  if (!nav) return;
  const open = [...nav.querySelectorAll<HTMLElement>("li[data-id]")]
    .filter((item) => item.querySelector(":scope > ul[data-branch][data-open='true']"))
    .map((item) => item.dataset.id ?? "");
  const carry: TreeCarry = { to, open, scroll: nav.scrollTop, at: Date.now() };
  try {
    sessionStorage.setItem(treeCarryKey, JSON.stringify(carry));
  } catch {
    return;
  }
}

function takeTreeCarry(): TreeCarry | null {
  try {
    const raw = sessionStorage.getItem(treeCarryKey);
    sessionStorage.removeItem(treeCarryKey);
    const carry = raw ? (JSON.parse(raw) as TreeCarry) : null;
    return carry && carry.to === location.pathname && Date.now() - carry.at < maxAgeMs ? carry : null;
  } catch {
    return null;
  }
}

let carryOfThisPage: TreeCarry | null | undefined;

export function pageTreeCarry(): TreeCarry | null {
  carryOfThisPage ??= takeTreeCarry();
  return carryOfThisPage;
}

export const subscribeNever = () => () => undefined;
