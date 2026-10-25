"use client";

import type { ReactNode } from "react";
import { showItem } from "@/lib/show-item";

type StatementLinkProps = {
  id: string;
  children: ReactNode;
};

export function StatementLink({ id, children }: StatementLinkProps) {
  return (
    <a
      href={`#${id}`}
      onClick={(event) => {
        event.preventDefault();
        showItem(id);
      }}
      className="link-example hit-44"
    >
      {children}
    </a>
  );
}
