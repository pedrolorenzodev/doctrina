"use client";

import { useDrawer } from "@/features/shell/drawer";

export function MenuButton({ label }: { label: string }) {
  const { open, setOpen, menuRef } = useDrawer();
  return (
    <button
      ref={menuRef}
      type="button"
      aria-label={label}
      aria-expanded={open}
      aria-controls="site-sidebar"
      onClick={() => setOpen(!open)}
      className="-ml-2 grid size-10 cursor-pointer place-items-center rounded-6 transition-colors duration-150 ease-standard hover:bg-hover pointer-coarse:size-11 lg:hidden"
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
    </button>
  );
}
