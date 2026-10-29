import { expect, test } from "@playwright/test";
import { hasCorpus, horizontalOverflow } from "./helpers";

const menu = "header [aria-controls='site-sidebar']";

test("on the desktop the home opens the same tree as every page, closed on arrival", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es");
  const sidebar = page.locator("#site-sidebar");
  await expect(sidebar).toBeHidden();
  await expect(page.locator(menu)).toHaveAttribute("aria-expanded", "false");
  await page.locator(menu).click();
  await expect(sidebar).toBeVisible();
  await expect(page.locator(menu)).toHaveAttribute("aria-expanded", "true");
  await expect.poll(async () => Math.round((await sidebar.boundingBox())?.width ?? 0)).toBe(272);
  await expect.poll(async () => Math.round((await page.locator("#content").boundingBox())?.x ?? 0)).toBe(272);
  await page.locator(menu).click();
  await expect(sidebar).toBeHidden();
  expect(await horizontalOverflow(page)).toBe(0);
});

test("on the phone the menu opens the drawer on the home, as everywhere", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/es");
  const sidebar = page.locator("#site-sidebar");
  await page.locator(menu).click();
  await expect.poll(async () => (await sidebar.boundingBox())?.x).toBe(0);
  await page.keyboard.press("Escape");
  await expect(sidebar).toBeHidden();
  await expect(page.locator(menu)).toBeFocused();
});

test("the menu shows on every page and closes the tree for every page but the home", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/padres");
  const sidebar = page.locator("#site-sidebar");
  await expect(sidebar).toBeVisible();
  await expect(page.locator(menu)).toBeVisible();
  await page.locator(menu).click();
  await expect(sidebar).toBeHidden();
  await page.goto("/es/historia/concilios");
  await expect(sidebar).toBeHidden();
  await page.locator(menu).click();
  await expect(sidebar).toBeVisible();
  await page.goto("/es/historia/padres");
  await expect(sidebar).toBeVisible();
});

test("going to the home from a page folds the tree away quickly (200 ms) and leaves it closed", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/padres");
  await expect(page.locator("#site-sidebar")).toBeVisible();
  const durations = await page.evaluate(
    () =>
      new Promise<string[]>((resolve) => {
        const seen: string[] = [];
        let arrived = 0;
        const tick = () => {
          const shell = document.querySelector<HTMLElement>("[data-shell]")!;
          if (shell.dataset.home) {
            arrived ||= performance.now();
            seen.push(getComputedStyle(shell).transitionDuration);
          }
          if (!arrived || performance.now() - arrived < 700) requestAnimationFrame(tick);
          else resolve(seen);
        };
        document.querySelector<HTMLAnchorElement>("header a[href='/es']")!.click();
        requestAnimationFrame(tick);
      }),
  );
  expect(durations[0]).toBe("0.2s");
  expect(durations.at(-1)).toBe("0.36s");
  await expect(page.locator("#site-sidebar")).toBeHidden();
});

test("coming back to the home finds the drawer closed even if it was left open there", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/es");
  await page.locator(menu).click();
  await page.locator("#site-sidebar a[href='/es/historia/padres']").click();
  await expect(page).toHaveURL(/padres$/);
  await page.locator("header a[href='/es']").click();
  await expect(page).toHaveURL(/\/es$/);
  await expect(page.locator("#site-sidebar")).toBeHidden();
});

test("«Contraer todo menos dónde estoy» is an icon whose label shows after a second of hover", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/padres");
  const button = page.getByRole("button", { name: "Contraer todo menos dónde estoy" });
  await expect(button).toBeVisible();
  await expect(button.locator("svg")).toHaveCount(1);
  const tip = button.locator("xpath=..").locator("span[aria-hidden='true']");
  expect(await tip.evaluate((element) => Number(getComputedStyle(element).opacity))).toBe(0);
  await button.hover();
  expect(await tip.evaluate((element) => getComputedStyle(element).transitionDelay)).toBe("1s");
  await expect
    .poll(() => tip.evaluate((element) => Number(getComputedStyle(element).opacity)), { timeout: 3000 })
    .toBe(1);
  await expect(tip).toHaveText("Contraer todo menos dónde estoy");
  const box = (await tip.boundingBox())!;
  const tree = (await page.locator("#site-sidebar").boundingBox())!;
  expect(box.x + box.width).toBeLessThanOrEqual(tree.x + tree.width);
});

test("the tree's first group sits on the same line as the breadcrumb", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  for (const path of ["/es/historia/padres", "/es/doctrinas/eucaristia"]) {
    await page.goto(path);
    const crumb = (await page.locator("#content nav[aria-label='Ruta']").boundingBox())!;
    const label = (await page.locator("#site-sidebar p", { hasText: /^Doctrinas$/ }).boundingBox())!;
    expect(Math.abs(label.y - crumb.y)).toBeLessThan(1);
  }
});

test("the header is the site's name and its line, as in the proposal", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es");
  const title = page.locator("#content h1");
  await expect(title).toHaveText("Doctrina");
  await expect(page.locator("#content header p")).toHaveText(
    "Qué cree cada tradición cristiana, por qué, y cada fuente primaria.",
  );
  const box = await title.boundingBox();
  expect(box?.x).toBe(64);
  expect(box?.y).toBe(90);
  await expect(page.locator("#content a.resume-row")).toHaveCount(0);
});

test("«Seguir donde dejaste» shows the chapter, the day and where the reader was", async ({ page }) => {
  test.skip(!hasCorpus, "needs the Bible corpus");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/biblia/juan/6");
  await page.locator("#v-53").scrollIntoViewIfNeeded();
  await page.evaluate(() => document.getElementById("v-53")?.scrollIntoView());
  await page.waitForTimeout(700);
  await page.goto("/es");
  const row = page.locator("#content a.resume-row");
  await expect(row).toHaveAttribute("href", "/es/biblia/juan/6");
  await expect(row.locator("> span").nth(0)).toHaveText("Juan 6");
  await expect(row.locator("> span").nth(1)).toHaveText("hoy");
  await expect(row.locator("> span").nth(2)).toHaveText(/^Reina-Valera 1909, desde el versículo 5\d$/);
  await expect(page.getByText("Seguir donde dejaste", { exact: true })).toBeVisible();
  const box = await row.boundingBox();
  expect(box?.y).toBeCloseTo(251.9, 0);
  expect(box?.height).toBeCloseTo(76, 0);
});
