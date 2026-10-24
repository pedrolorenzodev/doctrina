"use client";

import "lenis/dist/lenis.css";
import type Lenis from "lenis";
import { useEffect } from "react";
import { registerSmoothScroll } from "@/lib/scroll";

export function SmoothScroll() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let instance: Lenis | null = null;
    let starting = false;
    let disposed = false;
    const start = async () => {
      if (reduced.matches || instance || starting) return;
      starting = true;
      const { default: LenisClass } = await import("lenis");
      starting = false;
      if (disposed || reduced.matches || instance) return;
      instance = new LenisClass({
        autoRaf: true,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 1,
        lerp: 0.3,
        anchors: false,
        stopInertiaOnNavigate: true,
        allowNestedScroll: false,
      });
      registerSmoothScroll(instance);
    };
    const stop = () => {
      instance?.destroy();
      instance = null;
      registerSmoothScroll(null);
    };
    const onChange = () => (reduced.matches ? stop() : void start());
    void start();
    reduced.addEventListener("change", onChange);
    return () => {
      disposed = true;
      reduced.removeEventListener("change", onChange);
      stop();
    };
  }, []);
  return null;
}
