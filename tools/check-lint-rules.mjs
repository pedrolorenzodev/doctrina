import { ESLint } from "eslint";

const cases = [
  ["src/lib/a.ts", 'import { x } from "@/features/doctrine/x";', "doctrina/layers"],
  ["src/lib/a.ts", 'import { x } from "@/components/ui/x";', "doctrina/layers"],
  ["src/lib/a.ts", 'import { x } from "@/content/x";', "doctrina/layers"],
  ["src/components/ui/a.ts", 'import { x } from "@/features/doctrine/x";', "doctrina/layers"],
  ["src/components/ui/a.ts", 'import { x } from "@/content/x";', "doctrina/layers"],
  ["src/components/ui/a.ts", 'import { x } from "@/app/x";', "doctrina/layers"],
  ["src/content/a.ts", 'import { x } from "@/features/doctrine/x";', "doctrina/layers"],
  ["src/content/a.ts", 'import { x } from "@/components/ui/x";', "doctrina/layers"],
  ["src/features/doctrine/a.ts", 'import { x } from "@/features/shell/x";', "doctrina/layers"],
  ["src/features/doctrine/a.ts", 'import { x } from "@/app/x";', "doctrina/layers"],
  ["src/features/doctrine/a.ts", 'export { x } from "@/features/shell/x";', "doctrina/layers"],
  ["src/features/doctrine/a.ts", 'const m = import("@/features/shell/x"); m.then(String);', "doctrina/layers"],
  ["src/features/doctrine/a.ts", 'import { x } from "../shell/x";', "doctrina/layers"],
  ["src/features/doctrine/a.ts", 'import { x } from "./x";', null],
  ["src/features/doctrine/a.ts", 'import { x } from "@/features/doctrine/x";', null],
  ["src/features/doctrine/a.ts", 'import { x } from "@/content/x";', null],
  ["src/features/doctrine/a.ts", 'import { x } from "@/components/ui/x";', null],
  ["src/app/[lang]/page.tsx", 'import { x } from "@/features/doctrine/x";', null],
  ["src/content/a.ts", 'import { x } from "@/lib/x";', null],
  ["src/components/ui/a.tsx", "export const A = () => <p>Hola</p>;", "react/jsx-no-literals"],
  ["src/components/ui/a.tsx", 'export const A = () => <p>{"Hola"}</p>;', "react/jsx-no-literals"],
  ["src/components/ui/a.tsx", 'export const A = () => <button aria-label="Cerrar" />;', "no-restricted-syntax"],
  ["src/components/ui/a.tsx", 'export const A = () => <img alt={"Foto"} />;', "no-restricted-syntax"],
  ["src/components/ui/a.tsx", "export const A = (p: { t: string }) => <button aria-label={p.t} />;", null],
  ["src/components/ui/a.tsx", 'export const A = () => <p className="w-[13px]" />;', "no-restricted-syntax"],
  ["src/components/ui/a.tsx", 'export const A = () => <p className="md:bg-[#fff] p-2" />;', "no-restricted-syntax"],
  [
    "src/components/ui/a.tsx",
    'export const A = () => <p className="[mask-type:luminance]" />;',
    "no-restricted-syntax",
  ],
  [
    "src/components/ui/a.tsx",
    'const c = "mt-[2px]"; export const A = () => <p className={c} />;',
    "no-restricted-syntax",
  ],
  ["src/components/ui/a.tsx", 'export const A = () => <p className="data-[state=open]:bg-ink p-2" />;', null],
  ["src/components/ui/a.tsx", 'export const A = () => <p className="w-(--ruler-x)" />;', null],
  [
    "src/components/ui/a.tsx",
    "export const A = (p: { c: string }) => <p className={`bg-${p.c}`} />;",
    "no-restricted-syntax",
  ],
  ["src/components/ui/a.tsx", "export const A = (p: { c: string }) => <p className={`p-2 ${p.c}`} />;", null],
  ["src/components/ui/a.tsx", "export const A = () => <p style={{ color: 'red' }} />;", "no-restricted-syntax"],
  ["src/components/ui/a.tsx", 'export const A = (p: { x: number }) => <p style={{ "--ruler-x": p.x }} />;', null],
  ["src/features/doctrine/a.ts", "export const listaDeCitas = [];", "doctrina/english-names"],
  ["src/components/ui/a.tsx", "export function BotonCerrar() { return null; }", "doctrina/english-names"],
  ["src/content/a.ts", 'export const page = { "titulo": "Eucaristía" };', "doctrina/english-names"],
  ["src/content/a.ts", 'export const page = { title: "La posición católica", lang: "es", el: 1, de: 2 };', null],
];

const eslint = new ESLint();
let failures = 0;

for (const [filePath, code, expected] of cases) {
  const [result] = await eslint.lintText(code, { filePath });
  const ids = (result?.messages ?? []).map((m) => m.ruleId ?? m.message);
  const ours = ids.filter((id) =>
    ["doctrina/layers", "doctrina/english-names", "react/jsx-no-literals", "no-restricted-syntax"].includes(id),
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
