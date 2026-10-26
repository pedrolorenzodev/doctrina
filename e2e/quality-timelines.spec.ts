import { expect, test, devices, type Page } from "@playwright/test";

const pages: [string, string, (page: Page) => Promise<void>][] = [
  [
    "08 with the sheet open",
    "/es/historia/linea-de-tiempo#polycarp-of-smyrna",
    async (page) => {
      await expect(page.locator("aside[data-side-panel]")).toBeVisible();
      await page.waitForTimeout(500);
    },
  ],
  ["08 closed", "/es/historia/linea-de-tiempo", async () => {}],
  [
    "a Father's page with the strip showing",
    "/es/historia/padres/ignatius-of-antioch",
    async (page) => {
      await page.evaluate(() =>
        scrollTo(0, document.querySelector("#time")!.getBoundingClientRect().top + scrollY - 70),
      );
      await page.locator('#time button[data-entry="justin-martyr"]').tap();
      await page.waitForTimeout(500);
    },
  ],
  [
    "the dating list expanded",
    "/es/historia/padres/ignatius-of-antioch",
    async (page) => {
      await page.getByRole("button", { name: /Mostrar las 7/ }).tap();
      await page.waitForTimeout(700);
    },
  ],
];

for (const [name, path, act] of pages) {
  test(`every interactive element of ${name} is at least 44 px on a touch phone`, async ({ browser }) => {
    const context = await browser.newContext({ ...devices["iPhone 13"] });
    const page = await context.newPage();
    await page.goto(path);
    await page.waitForTimeout(800);
    await act(page);
    const small = await page.evaluate(() => {
      const found: string[] = [];
      for (const element of document.querySelectorAll("a[href], button, summary, input, select, [role=button]")) {
        const rect = element.getBoundingClientRect();
        if (!rect.width || !rect.height || getComputedStyle(element).visibility === "hidden") continue;
        if (element.closest("[data-open=false], [hidden]")) continue;
        const before = getComputedStyle(element, "::before");
        const pseudo = before.content !== "none" && before.position === "absolute";
        const hitHeight = pseudo ? parseFloat(before.height) : 0;
        const hitWidth = pseudo ? parseFloat(before.width) : 0;
        if (Math.max(rect.height, hitHeight) < 43.5 || Math.max(rect.width, hitWidth) < 43.5) {
          found.push(
            `${element.tagName} ${(element.textContent ?? "").trim().slice(0, 24)} ${Math.round(rect.width)}x${Math.round(rect.height)}`,
          );
        }
      }
      return found;
    });
    expect(small).toEqual([]);
    await context.close();
  });
}
