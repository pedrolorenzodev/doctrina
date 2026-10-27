import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow, trackElement } from "./helpers";

const baptism = "/es/doctrines/baptism/catholic";
const eucharist = "/es/doctrines/eucharist/catholic";
const filter = (page: Page, scope = "main") => page.locator(`${scope} [role="group"][aria-label="Tema"]`);
const visibleIds = (page: Page, scope: string) =>
  page.evaluate(
    (root) =>
      [...document.querySelectorAll<HTMLElement>(`${root} ul > li[data-id]`)]
        .filter((item) => !item.hidden)
        .map((item) => item.dataset.id),
    scope,
  );

test("the objections page offers a theme filter; «Todas» lists by theme and a theme keeps only its objections", async ({
  page,
}) => {
  await page.goto(`${baptism}/objections`);
  const group = filter(page);
  await expect(group.locator("button")).toHaveText([
    "Todas",
    "Qué da el bautismo",
    "Después del bautismo",
    "Quién bautiza y cómo",
  ]);
  expect(await visibleIds(page, "main")).toEqual(["OB-1", "OB-2", "OB-4", "OB-5", "OB-3", "OB-6a", "OB-6b"]);
  await group.getByRole("button", { name: "Después del bautismo" }).click();
  await expect.poll(() => visibleIds(page, "main")).toEqual(["OB-4", "OB-5"]);
  await expect(group.getByRole("button", { name: "Después del bautismo" })).toHaveAttribute("aria-pressed", "true");
  await group.getByRole("button", { name: "Todas" }).click();
  await expect.poll(() => visibleIds(page, "main")).toHaveLength(7);
});

test("the Eucharist has its three themes too", async ({ page }) => {
  await page.goto(`${eucharist}/objections`);
  await expect(filter(page).locator("button")).toHaveText([
    "Todas",
    "El sacrificio",
    "La presencia",
    "Cómo se celebra",
  ]);
  await filter(page).getByRole("button", { name: "La presencia" }).click();
  await expect.poll(() => visibleIds(page, "main")).toEqual(["OB-2", "OB-3"]);
});

test("section 03 shows three objections, loads three more, and a theme resets it", async ({ page }) => {
  await page.goto(baptism);
  const section = "#objections";
  expect(await visibleIds(page, section)).toEqual(["OB-1", "OB-2", "OB-4"]);
  const more = page.locator(`${section} button:has-text("Mostrar 3 más")`);
  await expect(more).toBeVisible();
  await expect(page.locator(`${section} a:has-text("Ver las 7 objeciones")`)).toBeVisible();
  await more.click();
  await expect.poll(() => visibleIds(page, section)).toHaveLength(6);
  await expect(page.locator(`${section} button:has-text("Mostrar 1 más")`)).toBeVisible();
  await filter(page, section).getByRole("button", { name: "Quién bautiza y cómo" }).click();
  await expect.poll(() => visibleIds(page, section)).toEqual(["OB-3", "OB-6a", "OB-6b"]);
  await expect(page.locator(`${section} button:has-text("Mostrar")`)).toHaveCount(0);
  await filter(page, section).getByRole("button", { name: "Todas" }).click();
  await expect.poll(() => visibleIds(page, section)).toHaveLength(3);
});

test("the other objections of an objection page are filterable and leave out the current one", async ({ page }) => {
  await page.goto("/es/doctrinas/bautismo/catolica/objeciones/ob-1");
  const section = "#others";
  expect(await visibleIds(page, section)).not.toContain("OB-1");
  expect(await visibleIds(page, section)).toHaveLength(6);
  await filter(page, section).getByRole("button", { name: "Qué da el bautismo" }).click();
  await expect.poll(() => visibleIds(page, section)).toEqual(["OB-2"]);
});

test("the tree groups a tradition's objections under quiet theme headings that are not links", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`${baptism}/objections`);
  await page.locator('aside nav li[data-id="baptism/catholic/objections"] > [data-row] [data-twisty]').click();
  const children = page.locator('aside nav li[data-id="baptism/catholic/objections"] > ul[data-branch] > li');
  await expect(children).toHaveCount(10);
  await expect(page.locator('aside nav li[data-heading]:has-text("Quién bautiza y cómo")')).toBeVisible();
  const kinds = await children.evaluateAll((items) =>
    items.map((item) => (item.hasAttribute("data-heading") ? "heading" : "link")),
  );
  expect(kinds).toEqual(["heading", "link", "link", "heading", "link", "link", "heading", "link", "link", "link"]);
  expect(await page.locator("aside nav li[data-heading] a, aside nav li[data-heading] button").count()).toBe(0);
});

test("on a phone the theme filter stacks, every label on one line, and nothing overflows", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto(`${baptism}/objections`);
  const buttons = await filter(page)
    .locator("button")
    .evaluateAll((items) =>
      items.map((item) => {
        const box = item.getBoundingClientRect();
        return { left: Math.round(box.left), width: Math.round(box.width), height: Math.round(box.height) };
      }),
    );
  expect(new Set(buttons.map((button) => button.left)).size).toBe(1);
  expect(Math.max(...buttons.map((button) => button.height))).toBeLessThan(50);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("choosing a theme shrinks the list in steps, not in one jump, and the kept objections slide", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`${baptism}/objections`);
  const first = (await page.locator("main ul > li[data-id]").first().boundingBox())!;
  const frames = trackElement(page, "main ul.list-none.border-b", 900);
  await filter(page).getByRole("button", { name: "Después del bautismo" }).click();
  const heights = (await frames).map((frame) => Math.round(frame.height));
  const start = heights[0]!;
  const end = heights[heights.length - 1]!;
  expect(end).toBeLessThan(start * 0.6);
  expect(heights.filter((height) => height < start - 20 && height > end + 20).length).toBeGreaterThanOrEqual(3);
  expect(first.height).toBeGreaterThan(0);
});
