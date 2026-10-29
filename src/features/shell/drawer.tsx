"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from "react";
import { usePathname } from "next/navigation";
import { isHomePath } from "@/lib/locale";

type DrawerState = {
  open: boolean;
  setOpen: (open: boolean) => void;
  menuRef: RefObject<HTMLButtonElement | null>;
  home: boolean;
  homeTreeOpen: boolean;
  setHomeTreeOpen: (open: boolean) => void;
  arriving: boolean;
};

const DrawerContext = createContext<DrawerState | null>(null);

const arrivalMs = 400;

export function DrawerProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [seenPath, setSeenPath] = useState(pathname);
  const [open, setOpenState] = useState(false);
  const [homeTreeOpen, setHomeTreeOpen] = useState(false);
  const [arriving, setArriving] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const home = isHomePath(pathname);

  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpenState(false);
    setHomeTreeOpen(false);
    setArriving(true);
  }

  useEffect(() => {
    if (!arriving) return;
    const timer = window.setTimeout(() => setArriving(false), arrivalMs);
    return () => clearTimeout(timer);
  }, [arriving]);

  useEffect(() => {
    const desktop = matchMedia("(min-width: 64rem)");
    const close = () => setOpenState(false);
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  const value = useMemo(
    () => ({ open, setOpen: setOpenState, menuRef, home, homeTreeOpen, setHomeTreeOpen, arriving }),
    [open, home, homeTreeOpen, arriving],
  );
  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
}

export function useDrawer(): DrawerState {
  const state = useContext(DrawerContext);
  if (!state) throw new Error("useDrawer outside DrawerProvider");
  return state;
}
