"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { scrollToElement } from "@/lib/scroll";

type WordFilters = {
  book: string | null;
  form: string | null;
  setBook: (id: string | null, scroll?: boolean) => void;
  setForm: (id: string | null, scroll?: boolean) => void;
  clear: (key?: "book" | "form") => void;
};

const WordFiltersContext = createContext<WordFilters | null>(null);

export const placesId = "places";

export function WordFiltersProvider({ children }: { children: ReactNode }) {
  const [book, setBookState] = useState<string | null>(null);
  const [form, setFormState] = useState<string | null>(null);

  const toPlaces = useCallback(() => {
    const element = document.getElementById(placesId);
    if (element) scrollToElement(element);
  }, []);
  const setBook = useCallback(
    (id: string | null, scroll = false) => {
      setBookState(id);
      if (scroll && id !== null) toPlaces();
    },
    [toPlaces],
  );
  const setForm = useCallback(
    (id: string | null, scroll = false) => {
      setFormState(id);
      if (scroll && id !== null) toPlaces();
    },
    [toPlaces],
  );
  const clear = useCallback((key?: "book" | "form") => {
    if (key !== "form") setBookState(null);
    if (key !== "book") setFormState(null);
  }, []);
  const value = useMemo(() => ({ book, form, setBook, setForm, clear }), [book, form, setBook, setForm, clear]);
  return <WordFiltersContext.Provider value={value}>{children}</WordFiltersContext.Provider>;
}

export function useWordFilters(): WordFilters {
  const value = useContext(WordFiltersContext);
  if (!value) throw new Error("useWordFilters outside WordFiltersProvider");
  return value;
}
