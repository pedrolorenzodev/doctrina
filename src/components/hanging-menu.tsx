"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
  type Ref,
  type RefObject,
} from "react";
import { createPortal } from "react-dom";
import { escapePriority, registerEscape } from "@/lib/escape-stack";
import { revealMenu } from "@/lib/reveal-motion";

export const MenuHostContext = createContext<HTMLElement | null>(null);

type HangingMenuProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  ref?: Ref<HTMLDivElement>;
  open: boolean;
  onClose: () => void;
  anchor: RefObject<HTMLElement | null>;
  align: "center" | "end";
  className?: string;
  children: ReactNode;
};

const edgeMargin = 8;
const bottomClearance = 12;

export function HangingMenu({
  ref,
  open,
  onClose,
  anchor,
  align,
  className = "",
  children,
  ...rest
}: HangingMenuProps) {
  const menu = useRef<HTMLDivElement | null>(null);
  const shown = useRef(false);
  const host = useContext(MenuHostContext);

  useLayoutEffect(() => {
    const element = menu.current;
    const trigger = anchor.current;
    const bar = host;
    if (!open || !element || !trigger || !bar) return;
    element.hidden = false;
    const barBox = bar.getBoundingClientRect();
    const box = trigger.getBoundingClientRect();
    const width = element.offsetWidth;
    const wanted = align === "end" ? box.right - width : box.left + box.width / 2 - width / 2;
    const left = Math.min(Math.max(wanted, barBox.left + edgeMargin), barBox.right - width - edgeMargin);
    element.style.setProperty("--menu-x", `${Math.round(left - barBox.left)}px`);
    element.style.setProperty("--menu-max", `${Math.max(160, innerHeight - barBox.bottom - bottomClearance)}px`);
    element.hidden = true;
  }, [open, anchor, align, host]);

  useEffect(() => {
    const element = menu.current;
    if (!element || shown.current === open) return;
    shown.current = open;
    revealMenu(element, open);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (menu.current?.contains(target) || anchor.current?.contains(target)) return;
      onClose();
    };
    const release = registerEscape(escapePriority.window, () => {
      onClose();
      anchor.current?.focus({ preventScroll: true });
    });
    document.addEventListener("pointerdown", onPointerDown);
    addEventListener("resize", onClose);
    return () => {
      release();
      document.removeEventListener("pointerdown", onPointerDown);
      removeEventListener("resize", onClose);
    };
  }, [open, onClose, anchor]);

  if (!host) return null;
  return createPortal(
    <div
      ref={(element) => {
        menu.current = element;
        if (typeof ref === "function") ref(element);
        else if (ref) ref.current = element;
      }}
      hidden
      data-lenis-prevent
      className={`absolute top-full left-(--menu-x) z-45 max-h-(--menu-max) overflow-y-auto overscroll-contain rounded-b-8 border border-t-0 border-rule-2 bg-panel shadow-floating ${className}`}
      {...rest}
    >
      {children}
    </div>,
    host,
  );
}
