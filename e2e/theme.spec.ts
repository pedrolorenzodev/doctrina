import { expect, test } from "@playwright/test";

const cases = [
  { stored: null, scheme: "light", expected: "light" },
  { stored: null, scheme: "dark", expected: "dark" },
  { stored: "light", scheme: "dark", expected: "light" },
  { stored: "dark", scheme: "light", expected: "dark" },
] as const;

for (const { stored, scheme, expected } of cases) {
  test(`first paint without page scripts: stored ${stored}, device ${scheme} → ${expected} @webkit`, async ({
    browser,
  }) => {
    const context = await browser.newContext({ colorScheme: scheme });
    if (stored) await context.addInitScript((value) => localStorage.setItem("doctrina-theme", value), stored);
    const page = await context.newPage();
    await page.route("**/_next/static/**/*.js", (route) => route.abort());
    await page.goto("/es", { waitUntil: "domcontentloaded" });
    await expect(page.locator("html")).toHaveAttribute("data-theme", expected);
    const background = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(background).toBe(expected === "dark" ? "rgb(29, 29, 28)" : "rgb(232, 229, 222)");
    await context.close();
  });
}

test("the toggle stores the choice, which survives a reload and a language switch", async ({ page }) => {
  await page.goto("/es");
  await page.locator("header button").last().click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect.poll(() => page.evaluate(() => localStorage.getItem("doctrina-theme"))).toBe("dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("link", { name: "EN", exact: true }).click();
  await page.waitForURL("**/en");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("under reduced motion the theme changes at once and nothing is left switching", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", colorScheme: "light" });
  const page = await context.newPage();
  await page.goto("/es");
  await page.locator("header button").last().click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator("html")).not.toHaveClass(/theme-switching/);
  await context.close();
});
