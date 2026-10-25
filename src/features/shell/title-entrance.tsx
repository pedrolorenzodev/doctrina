"use client";

import { useEffect } from "react";

const longestFontWaitMs = 800;

export function TitleEntrance() {
  useEffect(() => {
    const root = document.documentElement;
    const start = () => root.setAttribute("data-title-ready", "");
    const timer = window.setTimeout(start, longestFontWaitMs);
    document.fonts.ready.then(() => {
      window.clearTimeout(timer);
      start();
    });
    return () => window.clearTimeout(timer);
  }, []);
  return null;
}
