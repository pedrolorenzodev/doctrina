import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const catholic = "/es/doctrines/eucharist/catholic";
const tabs = 'nav[aria-label="Tradición"]';
const tabTip = `${tabs} [aria-hidden="true"].pointer-events-none`;

const fingerTap = async (page: Page, selector: string) => {
  await page.locator(selector).first().scrollIntoViewIfNeeded();
  const box = await page.locator(selector).first().boundingBox();
  await page.touchscreen.tap(box!.x + box!.width / 2, box!.y + box!.height / 2);
};

test("the tree marks every doctrine and tradition without a screen as under construction, with no way to expand them", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(catholic);
  const soon = page.locator("aside li[data-soon]");
  for (const label of ["La justificación", "Pentecostal", "Fuentes"]) {
    await expect(soon.filter({ hasText: label }).first()).toBeAttached();
  }
  await expect(page.locator('aside li[data-id="justification"] [data-twisty]')).toHaveCount(0);
  await expect(page.locator('aside li[data-id="eucharist/catholic"]')).not.toHaveAttribute("data-soon");
  await expect(page.locator('aside li[data-id="eucharist"]')).not.toHaveAttribute("data-soon");
  const pentecostal = soon.filter({ hasText: "Pentecostal" }).first().locator("button");
  await expect(pentecostal).toHaveAttribute("aria-disabled", "true");
  await pentecostal.hover();
  await expect(soon.filter({ hasText: "Pentecostal" }).first().getByText("En construcción")).toBeVisible();
});

test("the tradition tabs mute the traditions without a page and say why on hover and on touch", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(catholic);
  await expect(page.locator(`${tabs} button[aria-disabled="true"]`)).toHaveCount(1);
  await expect(page.locator(`${tabs} button[aria-current="page"]`)).toHaveText("Católica");
  await page.locator(`${tabs} button[aria-disabled="true"]`).first().hover();
  await expect(page.locator(tabTip)).toHaveCSS("opacity", "1");
  await expect(page.locator(tabTip)).toHaveText("En construcción");
  await page.mouse.move(700, 500);
  await expect(page.locator(tabTip)).toHaveCount(0);
});

test("on touch a tap on a muted tab shows the message for about two seconds and nothing overflows", async ({
  browser,
}) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true });
  const page = await context.newPage();
  await page.goto(catholic);
  await fingerTap(page, `${tabs} button[aria-disabled="true"]`);
  await expect(page.locator(tabTip)).toHaveCSS("opacity", "1");
  await expect(page.locator(tabTip)).toHaveCount(0, { timeout: 4000 });
  expect(await horizontalOverflow(page)).toBe(0);
  await context.close();
});

test("the home mutes the doctrines without a page and the Fuentes link, and keeps the Eucaristía row live", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es");
  const muted = page.locator('main button[aria-disabled="true"]');
  await expect(muted).toHaveText([/La justificación/, /El bautismo/, /El papado/, /Sola Scriptura/, /Fuentes/]);
  await expect(page.locator('main a[href="/es/doctrinas/eucaristia"]').first()).toBeVisible();
});

test("a screen built in one language counts as built in the other: the English tree does not mute the Eucharist", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/en");
  await expect(page.locator('aside li[data-id="eucharist"]')).not.toHaveAttribute("data-soon");
  await expect(page.locator('aside li[data-id="justification"]')).toHaveAttribute("data-soon", "");
});
