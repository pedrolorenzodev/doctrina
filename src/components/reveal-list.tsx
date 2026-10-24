"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { revealList } from "@/lib/list-motion";

type RevealListProps = {
  as?: "div" | "ul" | "ol";
  className?: string;
  children: ReactNode;
};

export function RevealList({ as: Tag = "div", className, children }: RevealListProps) {
  const list = useRef<HTMLDivElement & HTMLUListElement & HTMLOListElement>(null);
  useEffect(() => (list.current ? revealList(list.current) : undefined), []);
  return (
    <Tag ref={list} className={className}>
      {children}
    </Tag>
  );
}
