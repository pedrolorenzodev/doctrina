import { existsSync } from "node:fs";
import { defineConfig } from "@playwright/test";

const port = Number(process.env.E2E_PORT ?? 3100);

const hasCorpus = existsSync("../../data/corpus/bibles/rv1909.json");
const hasWords = existsSync("../../data/site/words/manifest.json");
const needsCorpus = ["**/reader-*.spec.ts", "**/father-reader.spec.ts"];
const needsWords = ["**/words-*.spec.ts", "**/reader-panel-words.spec.ts"];

export default defineConfig({
  testDir: "e2e",
  testIgnore: [...(hasCorpus ? [] : needsCorpus), ...(hasWords ? [] : needsWords)],
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  use: { baseURL: `http://localhost:${port}`, trace: "retain-on-failure" },
  webServer: {
    command: `npx next start -p ${port}`,
    url: `http://localhost:${port}/es`,
    reuseExistingServer: !process.env.CI,
    env: {
      ...process.env,
      AI_PROVIDER: process.env.AI_PROVIDER ?? "fake",
      AI_STORE: process.env.AI_STORE ?? "memory",
    },
  },
  projects: [
    { name: "chromium", use: { browserName: "chromium" } },
    { name: "webkit", use: { browserName: "webkit" }, grep: /@webkit/ },
  ],
});
