"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { currentPlaceDetail, rememberPlace } from "@/lib/last-place";

const settleMs = 600;

export function LastPlaceRecorder() {
  const pathname = usePathname();

  useEffect(() => {
    const isHome = pathname.split("/").filter(Boolean).length <= 1;
    const save = () => {
      if (isHome) return;
      const detail = currentPlaceDetail();
      rememberPlace({
        href: `${location.pathname}${location.hash}`,
        title: document.title,
        at: Date.now(),
        ...(detail ? { detail } : {}),
      });
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
