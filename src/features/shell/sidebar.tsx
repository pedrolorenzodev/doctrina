"use client";

import { bookRouteOf } from "@/content/bible-routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import type { TreeGroup, TreeNode } from "@/content/site-tree";
import { ChapterGrid } from "@/components/chapter-grid";
import { useDrawer } from "@/features/shell/drawer";
import { escapePriority, registerEscape } from "@/lib/escape-stack";
import { trapTab } from "@/lib/focus";
import { travelMark, visibleRow } from "@/features/shell/tree-motion";
import { prefersReducedMotion, setBranch } from "@/lib/branch-motion";

type SidebarText = {
  navLabel: string;
  collapseAll: string;
  expand: string;
  collapse: string;
  chapterGrid: string;
  chapterOf: string;
};

type SidebarProps = {
  groups: TreeGroup[];
  text: SidebarText;
};

type TreeIndex = {
  hrefToId: Map<string, string>;
  parentOf: Map<string, string | null>;
};

function indexTree(groups: TreeGroup[]): TreeIndex {
  const index: TreeIndex = { hrefToId: new Map(), parentOf: new Map() };
  const walk = (nodes: TreeNode[], parent: string | null) => {
    for (const node of nodes) {
      index.parentOf.set(node.id, parent);
      if (node.href) index.hrefToId.set(node.href, node.id);
      if (node.route) index.hrefToId.set(node.route, node.id);
      walk(node.children, node.id);
    }
  };
  for (const group of groups) walk(group.nodes, null);
  return index;
}

function ancestorsOf(index: TreeIndex, id: string | null): string[] {
  const ancestors: string[] = [];
  for (let parent = id ? index.parentOf.get(id) : null; parent; parent = index.parentOf.get(parent)) {
    ancestors.push(parent);
  }
  return ancestors;
}

function syncTwisty(item: HTMLElement, open: boolean, text: SidebarText) {
  const twisty = item.querySelector<HTMLElement>(":scope > [data-row] [data-twisty]");
  if (!twisty) return;
  twisty.setAttribute("aria-expanded", String(open));
  twisty.setAttribute("aria-label", (open ? text.collapse : text.expand).replace("{label}", item.dataset.label ?? ""));
}

function setItemOpen(item: HTMLElement, open: boolean, animate: boolean, text: SidebarText) {
  const list = item.querySelector<HTMLElement>(":scope > ul[data-branch]");
  if (!list || (list.dataset.open === "true") === open) return;
  setBranch(list, open, animate);
  syncTwisty(item, open, text);
}

function clearTravelAttributes(nav: HTMLElement) {
  for (const row of nav.querySelectorAll<HTMLElement>("[data-travelling], [data-settling]")) {
    delete row.dataset.travelling;
    delete row.dataset.settling;
  }
}

const currentRowSelector = "[data-row].row-current, [data-chapter][data-current]";

function scrollCurrentIntoPlace(nav: HTMLElement) {
  const row = nav.querySelector<HTMLElement>(currentRowSelector);
  if (row) nav.scrollTop = Math.max(0, row.offsetTop - nav.clientHeight * 0.35);
}

function keepCurrentInView(nav: HTMLElement) {
  const row = nav.querySelector<HTMLElement>(currentRowSelector);
  if (!row) return;
  const rowRect = row.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();
  if (rowRect.top < navRect.top || rowRect.bottom > navRect.bottom) scrollCurrentIntoPlace(nav);
}

const rowClassName =
  "flex min-h-8 items-center gap-0.5 rounded-6 transition-colors duration-150 ease-standard hover:bg-hover pointer-coarse:min-h-11";
const entryClassName =
  "flex min-w-0 flex-1 items-baseline gap-2 py-1.5 pr-2 pl-0.5 text-left text-sidebar text-ink-2 no-underline transition-colors duration-150 ease-standard hover:text-ink data-current:font-medium data-current:text-ink data-trail:text-ink pointer-coarse:py-3";

type TreeItemProps = {
  node: TreeNode;
  currentId: string | null;
  currentIsPage: boolean;
  trail: Set<string>;
  initiallyOpen: Set<string>;
  openedBooks: Set<string>;
  currentChapter: number | null;
  text: SidebarText;
};

function TreeItem({
  node,
  currentId,
  currentIsPage,
  trail,
  initiallyOpen,
  openedBooks,
  currentChapter,
  text,
}: TreeItemProps) {
  const chapters = node.chapters;
  const hasChildren = node.children.length > 0 || chapters !== undefined;
  const isCurrentBook = chapters !== undefined && node.id === currentId;
  const isCurrent = node.id === currentId && !chapters;
  const open = initiallyOpen.has(node.id);
  const flags = {
    "data-current": isCurrent || undefined,
    "data-trail": trail.has(node.id) || isCurrentBook || undefined,
  };
  return (
    <li data-id={node.id} data-label={node.label}>
      <div data-row className={isCurrent ? `${rowClassName} row-current` : rowClassName}>
        {hasChildren ? (
          <button
            type="button"
            data-twisty
            aria-expanded={open}
            aria-label={(open ? text.collapse : text.expand).replace("{label}", node.label)}
            className="group/twisty grid h-7 w-5.5 flex-none cursor-pointer place-items-center rounded-5 text-ink-3 pointer-coarse:h-11 pointer-coarse:w-11"
          >
            <svg
              className="transition-transform duration-150 ease-standard group-aria-expanded/twisty:rotate-90"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M3.5 1.5 7 5l-3.5 3.5" />
            </svg>
          </button>
        ) : (
          <span className="w-5.5 flex-none" aria-hidden="true" />
        )}
        {node.href ? (
          <Link
            href={node.href}
            aria-current={isCurrent ? (currentIsPage ? "page" : "true") : undefined}
            className={entryClassName}
            {...flags}
          >
            <span>{node.label}</span>
            {node.count ? <span className="ml-auto text-ui-2xs text-ink-3 tabular-nums">{node.count}</span> : null}
          </Link>
        ) : (
          <button type="button" data-label-toggle className={`${entryClassName} cursor-pointer`} {...flags}>
            <span>{node.label}</span>
            {node.count ? <span className="ml-auto text-ui-2xs text-ink-3 tabular-nums">{node.count}</span> : null}
          </button>
        )}
      </div>
      {chapters ? (
        <ul
          data-branch
          data-open={String(open)}
          hidden={!open}
          aria-label={text.chapterGrid.replace("{book}", node.label)}
          className="-mr-1.5 -ml-2 grid grid-cols-7 gap-y-0.5 px-1.5 pt-1 pb-3 max-lg:grid-cols-5 max-lg:gap-y-1"
        >
          {isCurrentBook || openedBooks.has(node.id) ? (
            <ChapterGrid
              bookId={node.id.replace("book/", "")}
              bookName={chapters.name}
              base={chapters.base}
              count={chapters.count}
              currentChapter={isCurrentBook ? currentChapter : null}
              labelTemplate={text.chapterOf}
            />
          ) : null}
        </ul>
      ) : hasChildren ? (
        <ul data-branch data-open={String(open)} hidden={!open} className="ml-3.25 border-l border-rule pl-2">
          {node.children.map((child) => (
            <TreeItem
              key={child.id}
              node={child}
              currentId={currentId}
              currentIsPage={currentIsPage}
              trail={trail}
              initiallyOpen={initiallyOpen}
              openedBooks={openedBooks}
              currentChapter={currentChapter}
              text={text}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export function Sidebar({ groups, text }: SidebarProps) {
  const pathname = usePathname();
  const { open, setOpen, menuRef } = useDrawer();
  const index = useMemo(() => indexTree(groups), [groups]);
  const bookRoute = bookRouteOf(pathname);
  const currentId = index.hrefToId.get(pathname) ?? (bookRoute ? (index.hrefToId.get(bookRoute) ?? null) : null);
  const currentIsPage = index.hrefToId.has(pathname);
  const trail = useMemo(() => new Set(ancestorsOf(index, currentId)), [index, currentId]);
  const currentBookId = bookRoute ? currentId : null;
  const currentChapter = bookRoute ? Number(pathname.split("/").pop()) || null : null;
  const [initiallyOpen] = useState(() => new Set(currentBookId ? [...trail, currentBookId] : trail));
  const [openedBooks, setOpenedBooks] = useState<Set<string>>(() => new Set());
  const navRef = useRef<HTMLElement>(null);
  const asideRef = useRef<HTMLElement>(null);
  const previousId = useRef(currentId);
  const cancelTravel = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (navRef.current) scrollCurrentIntoPlace(navRef.current);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const from = previousId.current;
    previousId.current = currentId;
    if (from === currentId) return;
    cancelTravel.current?.();
    cancelTravel.current = null;
    clearTravelAttributes(nav);
    for (const id of [...ancestorsOf(index, currentId), ...(currentBookId ? [currentBookId] : [])]) {
      const item = nav.querySelector<HTMLElement>(`li[data-id="${CSS.escape(id)}"]`);
      if (item) setItemOpen(item, true, false, text);
    }
    keepCurrentInView(nav);
    if (!from || !currentId || prefersReducedMotion()) return;
    const fromRow = visibleRow(nav, from);
    const toRow = visibleRow(nav, currentId);
    const currentRow = nav.querySelector<HTMLElement>("[data-row].row-current");
    if (!fromRow || !toRow || !currentRow || fromRow === toRow) return;
    currentRow.dataset.travelling = "";
    cancelTravel.current = travelMark(nav, fromRow, toRow, () => {
      currentRow.dataset.settling = "";
      delete currentRow.dataset.travelling;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          delete currentRow.dataset.settling;
        }),
      );
    });
  }, [currentId, currentBookId, index, text]);

  useEffect(() => {
    if (!open) return;
    const nav = navRef.current;
    const aside = asideRef.current;
    if (nav) scrollCurrentIntoPlace(nav);
    aside?.querySelector<HTMLElement>("a[href], button")?.focus();
    const release = registerEscape(escapePriority.drawer, () => {
      setOpen(false);
      menuRef.current?.focus();
    });
    const onKey = (event: KeyboardEvent) => {
      if (aside) trapTab(event, aside);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      release();
      window.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen, menuRef]);

  function onClick(event: MouseEvent<HTMLElement>) {
    const target = event.target as HTMLElement;
    const nav = navRef.current;
    if (!nav) return;
    const toggle = target.closest<HTMLElement>("[data-twisty], [data-label-toggle]");
    if (toggle) {
      const item = toggle.closest<HTMLElement>("li");
      const list = item?.querySelector<HTMLElement>(":scope > ul[data-branch]");
      if (item && list) {
        const id = item.dataset.id ?? "";
        const opening = list.dataset.open !== "true";
        if (opening && id.startsWith("book/") && !openedBooks.has(id)) {
          flushSync(() => setOpenedBooks((previous) => new Set(previous).add(id)));
        }
        setItemOpen(item, opening, true, text);
      }
      return;
    }
    if (target.closest("[data-collapse-all]")) {
      const keep = new Set([...ancestorsOf(index, currentId), ...(currentBookId ? [currentBookId] : [])]);
      for (const item of nav.querySelectorAll<HTMLElement>("li[data-id]")) {
        setItemOpen(item, keep.has(item.dataset.id ?? ""), true, text);
      }
    }
  }

  function closeDrawer() {
    setOpen(false);
    menuRef.current?.focus();
  }

  return (
    <>
      <div
        aria-hidden="true"
        data-open={open || undefined}
        onClick={closeDrawer}
        className="pointer-events-none fixed inset-0 z-59 bg-scrim opacity-0 transition-opacity duration-240 ease-standard data-open:pointer-events-auto data-open:opacity-100 lg:hidden"
      />
      <aside
        ref={asideRef}
        id="site-sidebar"
        data-open={open || undefined}
        className="fixed inset-y-0 left-0 z-60 w-drawer -translate-x-full bg-bg drawer-motion max-lg:invisible max-lg:texture-layer data-open:visible data-open:translate-x-0 lg:sticky lg:top-top lg:bottom-auto lg:left-auto lg:z-auto lg:h-below-top lg:w-auto lg:translate-x-0 lg:bg-transparent tree-hide"
      >
        <nav
          ref={navRef}
          aria-label={text.navLabel}
          data-lenis-prevent
          onClick={onClick}
          className="relative h-full overflow-y-auto border-r border-rule pt-5 pr-3.5 pb-10 pl-4.5 scrollbar-rule lg:w-sidebar lg:pt-5.5"
        >
          <div className="-mt-1.5 mb-2 flex justify-end">
            <button
              type="button"
              data-collapse-all
              className="cursor-pointer rounded-5 px-1.5 py-1 text-ui-2xs text-ink-3 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11"
            >
              {text.collapseAll}
            </button>
          </div>
          {groups.map((group) => (
            <div key={group.id} className="mb-5.5">
              <p className="mb-1.5 ml-2 text-label font-medium text-ink-3">{group.label}</p>
              <ul>
                {group.nodes.map((node) => (
                  <TreeItem
                    key={node.id}
                    node={node}
                    currentId={currentId}
                    currentIsPage={currentIsPage}
                    trail={trail}
                    initiallyOpen={initiallyOpen}
                    openedBooks={openedBooks}
                    currentChapter={currentChapter}
                    text={text}
                  />
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
