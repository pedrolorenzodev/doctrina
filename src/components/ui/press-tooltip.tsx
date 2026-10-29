"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Tooltip } from "@/components/ui/tooltip";

type PressTooltipProps = {
  label: string;
  align?: "center" | "start" | "end";
  className?: string;
  children: ReactNode;
};

const pressedMs = 2200;

export function PressTooltip({ label, align = "start", className, children }: PressTooltipProps) {
  const [pressed, setPressed] = useState(false);
  const timer = useRef(0);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  function press() {
    setPressed(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setPressed(false), pressedMs);
  }
  return (
    <Tooltip label={label} align={align} open={pressed} {...(className ? { className } : {})}>
      <span onClick={press} className="contents">
        {children}
      </span>
    </Tooltip>
  );
}
