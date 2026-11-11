import { ESLint } from "eslint";

const cases = [
  ["apps/web/src/lib/a.ts", 'import { x } from "@/features/doctrine/x";', "doctrina/layers"],
  ["apps/web/src/lib/a.ts", 'import { x } from "@/components/ui/x";', "doctrina/layers"],
  ["apps/web/src/lib/a.ts", 'import { x } from "@/content/x";', "doctrina/layers"],
  ["apps/web/src/components/ui/a.ts", 'import { x } from "@/features/doctrine/x";', "doctrina/layers"],
  ["apps/web/src/components/ui/a.ts", 'import { x } from "@/content/x";', "doctrina/layers"],
  ["apps/web/src/components/ui/a.ts", 'import { x } from "@/app/x";', "doctrina/layers"],
  ["apps/web/src/content/a.ts", 'import { x } from "@/features/doctrine/x";', "doctrina/layers"],
  ["apps/web/src/content/a.ts", 'import { x } from "@/components/ui/x";', "doctrina/layers"],
  ["apps/web/src/features/doctrine/a.ts", 'import { x } from "@/features/shell/x";', "doctrina/layers"],
  ["apps/web/src/features/doctrine/a.ts", 'import { x } from "@/app/x";', "doctrina/layers"],
  ["apps/web/src/features/doctrine/a.ts", 'export { x } from "@/features/shell/x";', "doctrina/layers"],
  ["apps/web/src/features/doctrine/a.ts", 'const m = import("@/features/shell/x"); m.then(String);', "doctrina/layers"],
  ["apps/web/src/features/doctrine/a.ts", 'import { x } from "../shell/x";', "doctrina/layers"],
  ["apps/web/src/features/doctrine/a.ts", 'import { x } from "./x";', null],
  ["apps/web/src/features/doctrine/a.ts", 'import { x } from "@/features/doctrine/x";', null],
  ["apps/web/src/features/doctrine/a.ts", 'import { x } from "@/content/x";', null],
  ["apps/web/src/features/doctrine/a.ts", 'import { x } from "@/components/ui/x";', null],
  ["apps/web/src/app/[lang]/page.tsx", 'import { x } from "@/features/doctrine/x";', null],
  ["apps/web/src/content/a.ts", 'import { x } from "@/lib/x";', null],
  ["apps/web/src/components/ui/a.tsx", "export const A = () => <p>Hola</p>;", "react/jsx-no-literals"],
  ["apps/web/src/components/ui/a.tsx", 'export const A = () => <p>{"Hola"}</p>;', "react/jsx-no-literals"],
  [
    "apps/web/src/components/ui/a.tsx",
    'export const A = () => <button aria-label="Cerrar" />;',
    "no-restricted-syntax",
  ],
  ["apps/web/src/components/ui/a.tsx", 'export const A = () => <img alt={"Foto"} />;', "no-restricted-syntax"],
  ["apps/web/src/components/ui/a.tsx", "export const A = (p: { t: string }) => <button aria-label={p.t} />;", null],
  ["apps/web/src/components/ui/a.tsx", 'export const A = () => <p className="w-[13px]" />;', "no-restricted-syntax"],
  [
    "apps/web/src/components/ui/a.tsx",
    'export const A = () => <p className="md:bg-[#fff] p-2" />;',
    "no-restricted-syntax",
  ],
  [
    "apps/web/src/components/ui/a.tsx",
    'export const A = () => <p className="[mask-type:luminance]" />;',
    "no-restricted-syntax",
  ],
  [
    "apps/web/src/components/ui/a.tsx",
    'const c = "mt-[2px]"; export const A = () => <p className={c} />;',
    "no-restricted-syntax",
  ],
  ["apps/web/src/components/ui/a.tsx", 'export const A = () => <p className="data-[state=open]:bg-ink p-2" />;', null],
  ["apps/web/src/components/ui/a.tsx", 'export const A = () => <p className="w-(--ruler-x)" />;', null],
  [
    "apps/web/src/components/ui/a.tsx",
    "export const A = (p: { c: string }) => <p className={`bg-${p.c}`} />;",
    "no-restricted-syntax",
  ],
  ["apps/web/src/components/ui/a.tsx", "export const A = (p: { c: string }) => <p className={`p-2 ${p.c}`} />;", null],
  [
    "apps/web/src/components/ui/a.tsx",
    "export const A = () => <p style={{ color: 'red' }} />;",
    "no-restricted-syntax",
  ],
  [
    "apps/web/src/components/ui/a.tsx",
    'export const A = (p: { x: number }) => <p style={{ "--ruler-x": p.x }} />;',
    null,
  ],
  ["apps/web/src/features/doctrine/a.ts", "export const listaDeCitas = [];", "doctrina/english-names"],
  ["apps/web/src/components/ui/a.tsx", "export function BotonCerrar() { return null; }", "doctrina/english-names"],
  ["apps/web/src/content/a.ts", 'export const page = { "titulo": "Eucaristía" };', "doctrina/english-names"],
  [
    "apps/web/src/content/a.ts",
    'export const page = { title: "La posición católica", lang: "es", el: 1, de: 2 };',
    null,
  ],
  ["packages/core/src/a.ts", 'import { useState } from "react";', "no-restricted-imports"],
  ["packages/core/src/a.ts", 'import { x } from "react-dom/client";', "no-restricted-imports"],
  ["packages/core/src/a.ts", 'import { readFileSync } from "node:fs";', "no-restricted-imports"],
  ["packages/core/src/a.ts", 'import { readFileSync } from "fs";', "no-restricted-imports"],
  ["packages/core/src/a.ts", 'import { revalidateTag } from "next/cache";', "no-restricted-imports"],
  ["packages/core/src/a.ts", 'import "server-only";', "no-restricted-imports"],
  ["packages/core/src/a.ts", 'import { View } from "react-native";', "no-restricted-imports"],
  ["packages/core/src/a.ts", 'import { x } from "expo-sqlite";', "no-restricted-imports"],
  ["packages/core/src/a.ts", 'import { x } from "@/lib/x";', "no-restricted-imports"],
  ["packages/core/src/a.ts", 'import { x } from "./x";', "no-restricted-imports"],
  ["packages/core/src/a.ts", 'import { x } from "../x";', "no-restricted-imports"],
  ["packages/core/src/a.ts", 'export const a = localStorage.getItem("a");', "no-restricted-globals"],
  ["packages/core/src/a.ts", "export const a = window.innerWidth;", "no-restricted-globals"],
  ["packages/core/src/a.ts", "export const a = document.title;", "no-restricted-globals"],
  ["packages/core/src/a.ts", "export const a = navigator.language;", "no-restricted-globals"],
  ["packages/core/src/a.ts", "export const a = process.env.A;", "no-restricted-globals"],
  ["packages/core/src/a.ts", "export const a = crypto.randomUUID();", "no-restricted-globals"],
  ["packages/core/src/a.ts", "export const listaDeCitas = [];", "doctrina/english-names"],
  ["packages/core/src/a.ts", 'import { x } from "@doctrina/core/locale"; export const a = x;', null],
  ["packages/core/src/a.ts", 'export const a = setTimeout(() => {}, 1); console.log("a");', null],
];

const eslint = new ESLint();
let failures = 0;

for (const [filePath, code, expected] of cases) {
  const [result] = await eslint.lintText(code, { filePath });
  const ids = (result?.messages ?? []).map((m) => m.ruleId ?? m.message);
  const ours = ids.filter((id) =>
    [
      "doctrina/layers",
      "doctrina/english-names",
      "react/jsx-no-literals",
      "no-restricted-syntax",
      "no-restricted-imports",
      "no-restricted-globals",
    ].includes(id),
  );
  const fatal = (result?.messages ?? []).some((m) => m.fatal);
  const ok = !fatal && (expected ? ours.includes(expected) : ours.length === 0);
  if (!ok) {
    failures += 1;
    console.error(`FAIL ${filePath}: ${code}\n  expected ${expected ?? "no error"}, got ${ids.join(", ") || "none"}`);
  }
}

if (failures > 0) {
  console.error(`${failures} of ${cases.length} lint fixtures failed.`);
  process.exit(1);
}
console.log(`Lint fixtures: ${cases.length} passed.`);
