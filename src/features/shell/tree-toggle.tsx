"use client";

import { useSyncExternalStore } from "react";
import { Tooltip } from "@/components/ui/tooltip";
import { useDrawer } from "@/features/shell/drawer";
import { chooseTreeClosed, isTreeClosed, subscribeTree } from "@/lib/tree-visibility";

const desktopQuery = "(min-width: 64rem)";

const subscribeDesktop = (listener: () => void) => {
  const query = matchMedia(desktopQuery);
  query.addEventListener("change", listener);
  return () => query.removeEventListener("change", listener);
};

export function TreeToggle({ label }: { label: string }) {
  const { open, setOpen } = useDrawer();
  const closed = useSyncExternalStore(subscribeTree, isTreeClosed, () => false);
  const desktop = useSyncExternalStore(
    subscribeDesktop,
    () => matchMedia(desktopQuery).matches,
    () => true,
  );
  const shown = desktop ? !closed : open;
  return (
    <Tooltip label={label}>
      <button
        type="button"
        aria-label={label}
        aria-pressed={shown}
        aria-controls="site-sidebar"
        data-tree-toggle=""
        onClick={() => (desktop ? chooseTreeClosed(!closed) : setOpen(!open))}
        className="inline-grid size-8.5 cursor-pointer place-items-center rounded-6 text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent aria-pressed:bg-accent-weak aria-pressed:text-accent pointer-coarse:size-11"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="2" y="3" width="12" height="10" rx="2" />
          <path d="M6 3v10" />
        </svg>
      </button>
    </Tooltip>
  );
}
