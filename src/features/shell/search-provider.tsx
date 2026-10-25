"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { escapePriority, registerEscape } from "@/lib/escape-stack";

type SearchState = {
  open: boolean;
  session: number;
  show: () => void;
  hide: (restoreFocus?: boolean) => void;
};

const SearchContext = createContext<SearchState | null>(null);

const lockClass = "scroll-locked-root";

export function SearchProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(0);
  const opener = useRef<HTMLElement | null>(null);

  const show = useCallback(() => {
    opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSession((current) => current + 1);
    setOpen(true);
  }, []);

  const hide = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) opener.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (!open) show();
      }
    };
    addEventListener("keydown", onKeyDown);
    return () => removeEventListener("keydown", onKeyDown);
  }, [open, show]);

  useEffect(() => {
    if (!open) return;
    const release = registerEscape(escapePriority.search, hide);
    const root = document.documentElement;
    root.style.setProperty("--scrollbar-width", `${innerWidth - root.clientWidth}px`);
    root.classList.add(lockClass);
    return () => {
      release();
      root.classList.remove(lockClass);
      root.style.removeProperty("--scrollbar-width");
    };
  }, [open, hide]);

  const value = useMemo(() => ({ open, session, show, hide }), [open, session, show, hide]);
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export function useSearch(): SearchState {
  const state = useContext(SearchContext);
  if (!state) throw new Error("useSearch outside SearchProvider");
  return state;
}
