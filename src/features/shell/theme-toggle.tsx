"use client";

import type { MouseEvent } from "react";
import { IconButton } from "@/components/ui/icon-button";
import { storeTheme, themeSweepEasing, themeSweepMs, type Theme } from "@/lib/theme";

type ThemeToggleProps = {
  toLight: string;
  toDark: string;
};

function sweepKeyframes(button: HTMLElement): string[] {
  const { left, top, width, height } = button.getBoundingClientRect();
  const x = left + width / 2;
  const y = top + height / 2;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  return [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`];
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeToggle({ toLight, toDark }: ThemeToggleProps) {
  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const next: Theme = root.dataset.theme === "dark" ? "light" : "dark";
    storeTheme(next);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !document.startViewTransition) {
      applyTheme(next);
      return;
    }
    const clipPath = sweepKeyframes(event.currentTarget);
    // guard: the theme-switching class and its CSS in globals.css belong together (GOTCHAS, «View transition»)
    root.classList.add("theme-switching");
    const transition = document.startViewTransition(() => applyTheme(next));
    transition.ready.then(
      () =>
        root.animate(
          { clipPath },
          { duration: themeSweepMs, easing: themeSweepEasing, pseudoElement: "::view-transition-new(root)" },
        ),
      () => undefined,
    );
    transition.finished.finally(() => root.classList.remove("theme-switching"));
  }

  return (
    <IconButton onClick={toggle}>
      <span className="sr-only dark:hidden">{toDark}</span>
      <span className="sr-only hidden dark:inline">{toLight}</span>
      <svg
        className="hidden dark:block"
        width="17"
        height="17"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <circle cx="9" cy="9" r="3.4" />
        <path d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.7 3.7l1.4 1.4M12.9 12.9l1.4 1.4M3.7 14.3l1.4-1.4M12.9 5.1l1.4-1.4" />
      </svg>
      <svg
        className="dark:hidden"
        width="16"
        height="16"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <path d="M14.5 11.2A6.5 6.5 0 0 1 6.8 3.5a6.5 6.5 0 1 0 7.7 7.7z" />
      </svg>
    </IconButton>
  );
}
