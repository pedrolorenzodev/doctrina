"use client";

import { useSyncExternalStore } from "react";
import { IconButton } from "@/components/ui/icon-button";
import { useDrawer } from "@/features/shell/drawer";
import { chooseTreeClosed, isTreeClosed, subscribeTree } from "@/lib/tree-visibility";

const desktopQuery = "(min-width: 64rem)";

const subscribeDesktop = (listener: () => void) => {
  const query = matchMedia(desktopQuery);
  query.addEventListener("change", listener);
  return () => query.removeEventListener("change", listener);
};

export function MenuButton({ label }: { label: string }) {
  const { open, setOpen, menuRef, home, homeTreeOpen, setHomeTreeOpen } = useDrawer();
  const closed = useSyncExternalStore(subscribeTree, isTreeClosed, () => false);
  const desktop = useSyncExternalStore(
    subscribeDesktop,
    () => matchMedia(desktopQuery).matches,
    () => true,
  );
  const shown = desktop ? (home ? homeTreeOpen : !closed) : open;

  function toggle() {
    if (!matchMedia(desktopQuery).matches) setOpen(!open);
    else if (home) setHomeTreeOpen(!homeTreeOpen);
    else chooseTreeClosed(!closed);
  }

  return (
    <span className="-ml-2">
      <IconButton
        ref={menuRef}
        size="md"
        tone="primary"
        aria-label={label}
        aria-expanded={shown}
        aria-controls="site-sidebar"
        onClick={toggle}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M3 6h14M3 10h14M3 14h14" />
        </svg>
      </IconButton>
    </span>
  );
}
