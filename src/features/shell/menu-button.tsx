"use client";

import { IconButton } from "@/components/ui/icon-button";
import { useDrawer } from "@/features/shell/drawer";

export function MenuButton({ label }: { label: string }) {
  const { open, setOpen, menuRef } = useDrawer();
  return (
    <IconButton
      ref={menuRef}
      size="md"
      tone="primary"
      aria-label={label}
      aria-expanded={open}
      aria-controls="site-sidebar"
      onClick={() => setOpen(!open)}
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
  );
}
