"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { rememberPlace } from "@/features/shell/last-place";

const settleMs = 600;

export function LastPlaceRecorder() {
  const pathname = usePathname();

  useEffect(() => {
    const isHome = pathname.split("/").filter(Boolean).length <= 1;
    const save = () => {
      if (isHome) return;
      rememberPlace({ href: `${location.pathname}${location.hash}`, title: document.title, at: Date.now() });
    };
    const timer = window.setTimeout(save, settleMs);
    const onHide = () => {
      if (document.visibilityState === "hidden") save();
    };
    addEventListener("pagehide", save);
    addEventListener("hashchange", save);
    document.addEventListener("visibilitychange", onHide);
    return () => {
      window.clearTimeout(timer);
      removeEventListener("pagehide", save);
      removeEventListener("hashchange", save);
      document.removeEventListener("visibilitychange", onHide);
    };
  }, [pathname]);

  return null;
}
