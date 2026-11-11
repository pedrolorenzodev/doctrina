import { expect, test, type Page } from "@playwright/test";

const strip = "main [data-reader-strip]";
const sections = (page: Page) =>
  page.evaluate(() =>
    [...document.querySelectorAll<HTMLElement>("[data-stream-chapter]")].map((e) => e.dataset.streamChapter),
  );
const scrollToEnd = (page: Page, key: string) =>
  page.evaluate((target) => {
    const section = document.querySelector(`[data-stream-chapter="${target}"]`)!;
    scrollTo(0, section.getBoundingClientRect().bottom + scrollY - innerHeight + 40);
  }, key);

test("scrolling past the end of a chapter continues into the next one without leaving the page", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/biblia/juan/6");
  await page.evaluate(() => ((window as unknown as { stayed: boolean }).stayed = true));
  await scrollToEnd(page, "John/6");
  await expect.poll(() => sections(page)).toContain("John/7");
  await page.evaluate(() => {
    const section = document.querySelector('[data-stream-chapter="John/7"]')!;
    scrollTo(0, section.getBoundingClientRect().top + scrollY - 200);
  });
  await expect(page).toHaveURL(/\/es\/biblia\/juan\/7$/);
  await expect(page).toHaveTitle("Juan 7");
  await expect(page.locator(`${strip} button:has-text("Juan 7")`).first()).toBeVisible();
  expect(await page.evaluate(() => (window as unknown as { stayed?: boolean }).stayed)).toBe(true);
  await expect(page.locator("main")).not.toContainText("Edición y licencia");
});

test("it crosses from one book to the next and back", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/biblia/mateo/28");
  await scrollToEnd(page, "Matt/28");
  await expect.poll(() => sections(page)).toContain("Mark/1");
  await page.evaluate(() => {
    const section = document.querySelector('[data-stream-chapter="Mark/1"]')!;
    scrollTo(0, section.getBoundingClientRect().top + scrollY - 200);
  });
  await expect(page).toHaveURL(/\/es\/biblia\/marcos\/1$/);
  await page.evaluate(() => scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.evaluate(() => scrollTo(0, 400));
  await expect.poll(() => sections(page)).toContain("Mark/1");
});

test("wheeling up at the very top mounts the previous chapter and keeps the reader where they were", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/biblia/juan/6");
  await page.waitForTimeout(500);
  expect(await sections(page)).toEqual(["John/6"]);
  const before = await page
    .locator("main h1")
    .first()
    .evaluate((el) => el.getBoundingClientRect().top);
  await page.mouse.move(700, 450);
  await page.mouse.wheel(0, -120);
  await expect.poll(() => sections(page)).toEqual(["John/5", "John/6"]);
  await page.waitForTimeout(500);
  const after = await page.locator("main h1", { hasText: "Juan 6" }).evaluate((el) => el.getBoundingClientRect().top);
  expect(Math.abs(after - before)).toBeLessThan(130);
});

test("only five chapters stay mounted however far the reader goes", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/biblia/juan/1");
  for (let step = 0; step < 14; step += 1) {
    await page.mouse.wheel(0, 3500);
    await page.waitForTimeout(250);
  }
  const mounted = await sections(page);
  expect(mounted.length).toBeLessThanOrEqual(5);
  expect(mounted.length).toBeGreaterThan(2);
  expect(mounted).not.toContain("John/1");
});

test("the arrow scrolls to the start of the next chapter, mounting it if needed, and the previous one comes back", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/biblia/juan/6");
  await page.evaluate(() => ((window as unknown as { stayed: boolean }).stayed = true));
  await page
    .locator(`${strip} [data-step="next"]`)
    .first()
    .evaluate((el) => (el as HTMLElement).click());
  await expect(page).toHaveURL(/\/es\/biblia\/juan\/7$/);
  const top = await page.locator("main h1", { hasText: "Juan 7" }).evaluate((el) => el.getBoundingClientRect().top);
  expect(top).toBeGreaterThan(100);
  expect(top).toBeLessThan(400);
  await page
    .locator(`${strip} [data-step="previous"]`)
    .first()
    .evaluate((el) => (el as HTMLElement).click());
  await expect(page).toHaveURL(/\/es\/biblia\/juan\/6$/);
  expect(await page.evaluate(() => (window as unknown as { stayed?: boolean }).stayed)).toBe(true);
});

test("the arrow is not offered at Genesis 1 and Revelation 22", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/biblia/genesis/1");
  await expect(page.locator(`${strip} [data-step="previous"]`)).toHaveCount(0);
  await page.goto("/es/biblia/apocalipsis/22");
  await expect(page.locator(`${strip} [data-step="next"]`)).toHaveCount(0);
});

test("the tree marks the chapter being read as the reader scrolls on", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/biblia/juan/6");
  await scrollToEnd(page, "John/6");
  await expect.poll(() => sections(page)).toContain("John/7");
  await page.evaluate(() => {
    const section = document.querySelector('[data-stream-chapter="John/7"]')!;
    scrollTo(0, section.getBoundingClientRect().top + scrollY - 200);
  });
  await expect(page).toHaveURL(/\/es\/biblia\/juan\/7$/);
  const cell = page.locator('aside nav li[data-id="book/John"] a[data-chapter="7"]');
  await expect(cell).toHaveAttribute("aria-current", "page");
  const box = (await cell.boundingBox())!;
  expect(box.y).toBeGreaterThan(0);
  expect(box.y + box.height).toBeLessThan(900);
});
