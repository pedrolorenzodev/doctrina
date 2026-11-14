import { readdirSync } from "node:fs";
import { defineConfig, globalIgnores } from "eslint/config";
import expoConfig from "eslint-config-expo/flat.js";
import { doctrinaPlugin } from "../../tools/eslint-plugin-doctrina.mjs";
import { mobileRules } from "./eslint-rules.mjs";

const HEX_COLOR = String.raw`/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/`;
const FUNCTION_COLOR = String.raw`/^(rgb|hsl|hwb|lab|lch|oklab|oklch)a?\(/`;
const NAMED_COLOR = String.raw`/^(white|black|red|green|blue|yellow|orange|purple|pink|gray|grey|brown|cyan|magenta)$/`;

const features = readdirSync(new URL("./src/features", import.meta.url), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

const NO_PARENT_IMPORTS = {
  group: ["../*", "..", "../**"],
  message: "Import with '@/…', not a parent path.",
};

const layer = (files, forbidden, message) => ({
  files,
  rules: {
    "no-restricted-imports": ["error", { patterns: [NO_PARENT_IMPORTS, { group: forbidden, message }] }],
  },
});

export default defineConfig([
  ...expoConfig,
  globalIgnores([".expo/**", "dist/**", "ios/**", "android/**", "expo-env.d.ts", "node_modules/**"]),
  {
    linterOptions: { reportUnusedDisableDirectives: "error" },
  },
  {
    files: ["**/*.{ts,tsx,js,jsx,mjs}"],
    plugins: { doctrina: doctrinaPlugin, mobile: mobileRules },
    rules: {
      "doctrina/english-names": "error",
      "mobile/no-comments": "error",
    },
  },
  {
    files: ["app/**/*.{ts,tsx}", "src/**/*.{ts,tsx}", "__tests__/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": ["error", { patterns: [NO_PARENT_IMPORTS] }],
    },
  },
  {
    files: ["app/**/*.{ts,tsx}", "src/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: `Literal[value=${HEX_COLOR}], Literal[value=${FUNCTION_COLOR}], Literal[value=${NAMED_COLOR}], TemplateElement[value.raw=${FUNCTION_COLOR}]`,
          message: "No literal colours: read them from the theme (useTheme().colors).",
        },
      ],
    },
  },
  {
    files: ["app/**/*.tsx", "src/**/*.tsx"],
    rules: {
      "react/jsx-no-literals": ["error", { noStrings: true, ignoreProps: true, allowedStrings: [" "] }],
    },
  },
  layer(
    ["src/lib/**/*.{ts,tsx}"],
    ["@/app/*", "@/features/*", "@/components/*"],
    "lib is the lowest layer: it may import only lib.",
  ),
  layer(
    ["src/components/**/*.{ts,tsx}"],
    ["@/app/*", "@/features/*"],
    "components may import only components and lib (flow: app → features → components → lib).",
  ),
  ...features.map((feature) =>
    layer(
      [`src/features/${feature}/**/*.{ts,tsx}`],
      ["@/app/*", ...features.filter((other) => other !== feature).map((other) => `@/features/${other}/*`)],
      "a feature may import only components, lib and itself.",
    ),
  ),
]);
