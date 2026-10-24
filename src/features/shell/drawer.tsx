"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from "react";
import { usePathname } from "next/navigation";

type DrawerState = {
  open: boolean;
  setOpen: (open: boolean) => void;
  menuRef: RefObject<HTMLButtonElement | null>;
};

const DrawerContext = createContext<DrawerState | null>(null);

export function DrawerProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const open = openedAt === pathname;

  useEffect(() => {
    const desktop = matchMedia("(min-width: 64rem)");
    const close = () => setOpenedAt(null);
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  const value = useMemo(
    () => ({ open, setOpen: (next: boolean) => setOpenedAt(next ? pathname : null), menuRef }),
    [open, pathname],
  );
  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
}

export function useDrawer(): DrawerState {
  const state = useContext(DrawerContext);
  if (!state) throw new Error("useDrawer outside DrawerProvider");
  return state;
}
