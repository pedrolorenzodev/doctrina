import { createRequire } from "node:module";
import { dirname } from "node:path";

const require = createRequire(import.meta.url);
const packageDir = (name) => dirname(require.resolve(`${name}/package.json`));

export default {
  preset: "jest-expo",
  testMatch: ["**/__tests__/**/*-test.[jt]s?(x)"],
  moduleNameMapper: {
    "^react$": packageDir("react"),
    "^react/(.*)$": `${packageDir("react")}/$1`,
    "^@/assets/(.*)$": "<rootDir>/assets/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
