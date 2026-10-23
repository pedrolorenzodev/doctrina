import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { doctrinaPlugin } from "./tools/eslint-plugin-doctrina.mjs";

const ARBITRARY_VALUE = String.raw`/(^|\s)(\S*-\[[^\]\s]*\]|\S*\[[a-z-]+:[^\]\s]*\])(?=\s|$)/`;
const TEXT_ATTRIBUTES = String.raw`/^(alt|title|placeholder|label|aria-label|aria-description|aria-roledescription|aria-valuetext|aria-placeholder)$/`;

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    linterOptions: { reportUnusedDisableDirectives: "error" },
  },
  {
    files: ["src/**/*.{ts,tsx,js,jsx,mjs}"],
    plugins: { doctrina: doctrinaPlugin },
    rules: {
      "doctrina/layers": "error",
      "doctrina/english-names": "error",
    },
  },
  {
    files: ["src/**/*.tsx"],
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
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "tmp/**",
    "handoff/**",
    "docs/**",
    "tools/review-page/**",
  ]),
]);

export default eslintConfig;
