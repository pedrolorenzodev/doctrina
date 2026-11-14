import { ESLint } from "eslint";

const eslint = new ESLint({ cwd: import.meta.dirname + "/.." });

const fixtures = [
  ["src/lib/a.ts", 'import { x } from "@/components/x";\nexport const y = x;\n', "no-restricted-imports"],
  ["src/lib/a.ts", 'import { loadEnv } from "@/lib/env";\nexport const y = loadEnv;\n', null],
  [
    "src/components/a.tsx",
    'import { x } from "@/features/technical-check/x";\nexport const y = x;\n',
    "no-restricted-imports",
  ],
  ["src/components/a.tsx", 'import { loadEnv } from "@/lib/env";\nexport const y = loadEnv;\n', null],
  ["src/features/technical-check/a.ts", 'import { x } from "@/app/x";\nexport const y = x;\n', "no-restricted-imports"],
  ["src/features/technical-check/a.ts", 'import { x } from "../x";\nexport const y = x;\n', "no-restricted-imports"],
  ["src/features/technical-check/a.ts", 'import { Icon } from "@/components/icon";\nexport const y = Icon;\n', null],
  ["src/lib/a.ts", 'export const colour = "#fff";\n', "no-restricted-syntax"],
  ["src/lib/a.ts", 'export const colour = "rgba(0, 0, 0, 0.5)";\n', "no-restricted-syntax"],
  ["src/lib/a.ts", 'export const colour = "white";\n', "no-restricted-syntax"],
  ["src/lib/a.ts", 'export const colour = "transparent";\n', null],
  ["src/lib/a.ts", "// explains the value\nexport const y = 1;\n", "mobile/no-comments"],
  ["src/lib/a.ts", "// TODO wire the storage\nexport const y = 1;\n", null],
  ["src/lib/a.ts", "// guard: keep in sync with the CSS\nexport const y = 1;\n", null],
  ["src/lib/a.ts", "export const fuenteModal = 1;\n", "doctrina/english-names"],
  [
    "src/components/a.tsx",
    'import { Text } from "react-native";\nexport const A = () => <Text>hola</Text>;\n',
    "react/jsx-no-literals",
  ],
];

let failed = 0;
for (const [filePath, text, expected] of fixtures) {
  const [result] = await eslint.lintText(text, { filePath });
  const rules = result.messages.map((message) => message.ruleId);
  const ok = expected === null ? rules.length === 0 : rules.includes(expected);
  if (!ok) {
    failed += 1;
    console.error(`FAIL ${filePath} expected ${expected ?? "no problems"}, got ${rules.join(", ") || "none"}`);
  }
}

if (failed > 0) process.exit(1);
console.log(`Mobile lint rules: ${fixtures.length} fixtures passed.`);
