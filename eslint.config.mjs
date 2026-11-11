import { builtinModules } from "node:module";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { doctrinaPlugin } from "./tools/eslint-plugin-doctrina.mjs";

const ARBITRARY_VALUE = String.raw`/(^|\s)(\S*-\[[^\]\s]*\]|\S*\[[a-z-]+:[^\]\s]*\])(?=\s|$)/`;
const TEXT_ATTRIBUTES = String.raw`/^(alt|title|placeholder|label|aria-label|aria-description|aria-roledescription|aria-valuetext|aria-placeholder)$/`;

const NODE_BUILTINS = builtinModules.filter((name) => !name.startsWith("_"));
const BROWSER_GLOBALS = [
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "navigator",
  "location",
  "addEventListener",
  "removeEventListener",
  "process",
  "crypto",
];

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    settings: { next: { rootDir: "apps/web/" } },
  },
  {
    linterOptions: { reportUnusedDisableDirectives: "error" },
  },
  {
    files: ["apps/web/src/**/*.{ts,tsx,js,jsx,mjs}"],
    plugins: { doctrina: doctrinaPlugin },
    rules: {
      "doctrina/layers": "error",
      "doctrina/english-names": "error",
    },
  },
  {
    files: ["packages/core/src/**/*.ts"],
    plugins: { doctrina: doctrinaPlugin },
    rules: {
      "doctrina/english-names": "error",
      "no-restricted-imports": [
        "error",
        {
          paths: NODE_BUILTINS.map((name) => ({ name, message: "core is framework-free: no Node built-ins." })),
          patterns: [
            { group: ["node:*"], message: "core is framework-free: no Node built-ins." },
            {
              group: ["react", "react/*", "react-dom", "react-dom/*", "next", "next/*", "server-only"],
              message: "core never imports React, Next or server-only.",
            },
            {
              group: ["react-native", "react-native/*", "expo", "expo-*", "expo/*"],
              message: "core never imports React Native or Expo.",
            },
            { group: ["@/*", "@doctrina/web", "@doctrina/web/*"], message: "core never imports an app." },
            { group: ["./*", "../*"], message: "Inside core, import by package name: '@doctrina/core/<module>'." },
          ],
        },
      ],
      "no-restricted-globals": [
        "error",
        ...BROWSER_GLOBALS.map((name) => ({ name, message: "core has no DOM, Node or storage globals." })),
      ],
    },
  },
  {
    files: ["apps/web/src/**/*.tsx"],
    rules: {
      "react/jsx-no-literals": ["error", { noStrings: true, ignoreProps: true, allowedStrings: [" "] }],
      "no-restricted-syntax": [
        "error",
        {
          selector: `JSXAttribute[name.name=${TEXT_ATTRIBUTES}] > Literal, JSXAttribute[name.name=${TEXT_ATTRIBUTES}] > JSXExpressionContainer > :matches(Literal, TemplateLiteral)`,
          message: "UI text comes from the es/en dictionaries, not literals.",
        },
        {
          selector: `Literal[value=${ARBITRARY_VALUE}], TemplateElement[value.raw=${ARBITRARY_VALUE}]`,
          message: "No Tailwind arbitrary values: add a named token in globals.css (@theme).",
        },
        {
          selector: String.raw`JSXAttribute[name.name="className"] TemplateElement[value.raw=/[a-z0-9]-$/]`,
          message: "No class names built from variables: Tailwind only sees complete class strings.",
        },
        {
          selector: String.raw`JSXAttribute[name.name="style"] > JSXExpressionContainer > ObjectExpression > :matches(SpreadElement, Property:not([key.value=/^--/]))`,
          message: "style={{}} only carries runtime CSS custom properties ('--name'); styles go in className.",
        },
      ],
    },
  },
  globalIgnores([
    "apps/web/.next/**",
    ".vercel/**",
    "out/**",
    "build/**",
    "apps/web/next-env.d.ts",
    "tmp/**",
    "handoff/**",
    "docs/**",
    "tools/review-page/**",
  ]),
]);

export default eslintConfig;
