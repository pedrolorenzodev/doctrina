"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { CitationWindow } from "@/components/citation-window/citation-window";
import type { CitationWindowText } from "@/components/citation-window/types";
import type { CitationView } from "@/lib/citation-view";
import { firstWindowPosition, type Point } from "@/lib/window-position";
import { scrollOffset } from "@/lib/scroll";

type CitationState = {
  views: Record<string, CitationView>;
  text: CitationWindowText;
  openId: string | null;
  shownId: string | null;
  position: Point | null;
  open: (id: string, trigger: HTMLElement) => void;
  close: () => void;
  remember: (point: Point) => void;
};

const CitationContext = createContext<CitationState | null>(null);

type CitationProviderProps = {
  views: Record<string, CitationView>;
  text: CitationWindowText;
  children: ReactNode;
};

export function CitationProvider({ views, text, children }: CitationProviderProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [shownId, setShownId] = useState<string | null>(null);
  const [position, setPosition] = useState<Point | null>(null);
  const opener = useRef<HTMLElement | null>(null);

  const open = useCallback((id: string, trigger: HTMLElement) => {
    opener.current = trigger;
    setPosition(
      (current) => current ?? firstWindowPosition({ width: innerWidth, height: innerHeight }, scrollOffset()),
    );
    setShownId(id);
    setOpenId(id);
  }, []);

  const close = useCallback(() => {
    setOpenId(null);
    if (opener.current?.isConnected) opener.current.focus({ preventScroll: true });
    opener.current = null;
  }, []);

  const value = useMemo(
    () => ({ views, text, openId, shownId, position, open, close, remember: setPosition }),
    [views, text, openId, shownId, position, open, close],
  );

  return (
    <CitationContext.Provider value={value}>
      {children}
      <CitationWindow />
    </CitationContext.Provider>
  );
}

export function useCitation(): CitationState {
  const state = useContext(CitationContext);
  if (!state) throw new Error("useCitation outside CitationProvider");
  return state;
}
