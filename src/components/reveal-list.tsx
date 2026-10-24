"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { revealList } from "@/lib/list-motion";

type RevealListProps = {
  className?: string;
  children: ReactNode;
};

export function RevealList({ className, children }: RevealListProps) {
  const list = useRef<HTMLDivElement>(null);
  useEffect(() => (list.current ? revealList(list.current) : undefined), []);
  return (
    <div ref={list} className={className}>
      {children}
    </div>
  );
}
