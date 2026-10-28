import { expect, test } from "@playwright/test";
import { horizontalOverflow, trackElement } from "./helpers";

const chapter = (book: string, number: number) => `/es/biblia/${book}/${number}`;
const book = (id: string) => `aside nav li[data-id="book/${id}"]`;
const group = (id: string) => `aside nav li[data-id="bible/${id}"]`;
const cells = (id: string) => `${book(id)} a[data-chapter]`;
const readKey = "doctrina-read-chapters";

test("the three groups carry their book counts and every book its number of chapters", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(chapter("juan", 6));
  const count = (id: string) =>
    page
      .locator(`${group(id)} > [data-row] button`)
      .last()
      .locator("span")
      .last();
  await expect(count("ot")).toHaveText("39");
  await expect(count("deutero")).toHaveText("7");
  await expect(count("nt")).toHaveText("27");
  await expect(page.locator(`${book("John")} > [data-row] button`).last()).toContainText("Juan21");
  await expect(page.locator(`${book("Ps")} > [data-row] button`).last()).toContainText("Salmos150");
  await expect(page.locator(`${book("Ps")} > [data-row] a`)).toHaveCount(0);
});

test("a book's chapters are not in the page until the book is opened; then they unfold in place @webkit", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(chapter("juan", 6));
  await page.evaluate(() => {
    (window as unknown as { stayed: boolean }).stayed = true;
  });
  await expect(page.locator(cells("John"))).toHaveCount(21);
  await page
    .locator(`${group("ot")} > [data-row] button`)
    .last()
    .click();
  await expect(page.locator(cells("Gen"))).toHaveCount(0);
  const frames = trackElement(page, `${book("Gen")} > ul`, 500);
  await page
    .locator(`${book("Gen")} > [data-row] button`)
    .last()
    .click();
  const track = await frames;
  expect(track.some((frame) => frame.height > 0 && frame.height < Math.max(...track.map((f) => f.height)))).toBe(true);
  await expect(page.locator(cells("Gen"))).toHaveCount(50);
  const columns = await page
    .locator(`${book("Gen")} > ul`)
    .evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length);
  expect(columns).toBe(7);
  await page.locator(`${cells("Gen")}[data-chapter="3"]`).click();
  await expect(page).toHaveURL(/\/es\/biblia\/genesis\/3$/);
  await expect(page.locator("main h1").first()).toHaveText("Génesis 3");
  await expect(page.locator(`${cells("Gen")}[data-chapter="3"]`)).toHaveAttribute("aria-current", "page");
  expect(await page.evaluate(() => (window as unknown as { stayed?: boolean }).stayed)).toBe(true);
});

test("the current chapter wears a ring of accent, and the others show the soft fill when hovered", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(chapter("juan", 6));
  const circle = (n: number) => page.locator(`${cells("John")}[data-chapter="${n}"] > span`);
  const accent = await page.evaluate(() =>
    getComputedStyle(document.documentElement).getPropertyValue("--color-accent"),
  );
  expect(await circle(6).evaluate((element) => getComputedStyle(element).boxShadow)).not.toBe("none");
  expect(await circle(6).evaluate((element) => getComputedStyle(element).fontWeight)).toBe("600");
  expect(await circle(7).evaluate((element) => getComputedStyle(element).boxShadow)).toBe("none");
  expect(accent.trim().length).toBeGreaterThan(0);
  const before = await circle(8).evaluate((element) => getComputedStyle(element).backgroundColor);
  await circle(8).hover();
  await expect.poll(() => circle(8).evaluate((element) => getComputedStyle(element).backgroundColor)).not.toBe(before);
});

const offer = "[data-read-offer]:visible";
const markButton = "[data-read-offer] button";

async function dwell(page: import("@playwright/test").Page, seconds: number) {
  for (let second = 0; second < seconds; second += 1) {
    await page.mouse.move(600 + second * 5, 400);
    await page.clock.runFor(1000);
  }
}

async function passThrough(page: import("@playwright/test").Page) {
  await page.locator("[data-read-marker]").first().scrollIntoViewIfNeeded();
  await dwell(page, 9);
}

test("nothing is marked by itself: 8 s on the last paragraphs offer the button, pressing it marks, with undo", async ({
  page,
}) => {
  await page.clock.install();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(chapter("juan", 6));
  const mark = `${cells("John")}[data-chapter="6"]`;
  await page.locator("[data-read-marker]").first().scrollIntoViewIfNeeded();
  await dwell(page, 5);
  await expect(page.locator(offer)).toHaveCount(0);
  await dwell(page, 5);
  await expect(page.locator(offer)).toBeVisible();
  await expect(page.locator(mark)).not.toHaveAttribute("data-read", "true");
  await expect(page.locator(markButton)).toHaveAccessibleName("Marcar como leído");
  await page.locator(markButton).click();
  await expect(page.locator(mark)).toHaveAttribute("data-read", "true");
  expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!), readKey)).toEqual(["John.6"]);
  await expect(page.getByRole("status").filter({ hasText: "Capítulo marcado como leído." })).toBeVisible();
  await page.getByRole("button", { name: "Deshacer" }).click();
  await expect(page.locator(mark)).not.toHaveAttribute("data-read", "true");
  await dwell(page, 3);
  await expect(page.locator(offer)).toHaveCount(0);
  await dwell(page, 6);
  await page.locator(markButton).click();
  await page.reload();
  await expect(page.locator(mark)).toHaveAttribute("data-read", "true");
  await expect(page.locator(`${cells("John")}[data-chapter="7"]`)).not.toHaveAttribute("data-read", "true");
});

test("the button fades when the reader leaves the last paragraphs and returns only after a new wait", async ({
  page,
}) => {
  await page.clock.install();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(chapter("juan", 6));
  await passThrough(page);
  await expect(page.locator(offer)).toBeVisible();
  await page.evaluate(() => window.scrollBy(0, -2500));
  await dwell(page, 1);
  await expect(page.locator(markButton)).toBeHidden();
  await page.locator("[data-read-marker]").first().scrollIntoViewIfNeeded();
  await dwell(page, 4);
  await expect(page.locator(offer)).toHaveCount(0);
  await dwell(page, 6);
  await expect(page.locator(offer)).toBeVisible();
});

test("the circle grows into LEÍDO on hover and floats centred at the bottom of the reading column", async ({
  page,
}) => {
  await page.clock.install();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(chapter("juan", 6));
  await passThrough(page);
  const button = page.locator(markButton);
  const idle = (await button.boundingBox())!;
  expect(idle.width).toBeCloseTo(36, 0);
  expect(idle.y + idle.height).toBeCloseTo(900 - 24, 0);
  const column = (await page.locator("[data-read-marker]").first().boundingBox())!;
  expect(Math.abs(idle.x + idle.width / 2 - (column.x + column.width / 2))).toBeLessThan(2);
  await button.hover();
  await expect.poll(async () => (await button.boundingBox())!.width).toBeGreaterThan(70);
  await expect(button.locator("span")).toHaveText("Leído");
});

test("a chapter short enough to fit the screen is not marked just by opening", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1600 });
  await page.goto(chapter("2-juan", 1));
  await page.waitForTimeout(1500);
  await expect(page.locator(`${cells("2John")}[data-chapter="1"]`)).not.toHaveAttribute("data-read", "true");
});

test("a damaged or blocked store leaves the tree working", async ({ page }) => {
  await page.clock.install();
  await page.addInitScript((key) => localStorage.setItem(key, '["John.0",{"x":1},"junk"]'), readKey);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(chapter("juan", 6));
  await expect(page.locator(`${cells("John")}[data-read]`)).toHaveCount(0);
  await page.evaluate(() => {
    Storage.prototype.setItem = () => {
      throw new Error("blocked");
    };
  });
  await passThrough(page);
  await page.locator(markButton).click();
  await expect(page.locator(`${cells("John")}[data-chapter="6"]`)).toHaveAttribute("data-read", "true");
});

test("keyboard: Tab reaches the chapters and Enter opens one", async ({ page, browserName }) => {
  test.skip(browserName === "webkit", "WebKit does not Tab to links by default");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(chapter("juan", 6));
  await page.locator(`${cells("John")}[data-chapter="5"]`).focus();
  await page.keyboard.press("Tab");
  await expect(page.locator(`${cells("John")}[data-chapter="6"]`)).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.locator(`${cells("John")}[data-chapter="7"]`)).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/es\/biblia\/juan\/7$/);
});

test.describe("phone", () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true });

  test("the drawer shows five columns of 44 px or larger targets, with no horizontal scroll", async ({ page }) => {
    await page.goto(chapter("juan", 6));
    await page.locator("header button[aria-controls]").click();
    await expect(page.locator("#site-sidebar")).toHaveAttribute("data-open", "true");
    const columns = await page
      .locator(`${book("John")} > ul`)
      .evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length);
    expect(columns).toBe(5);
    for (const n of [1, 5, 21]) {
      const box = (await page.locator(`${cells("John")}[data-chapter="${n}"]`).boundingBox())!;
      expect(box.width).toBeGreaterThanOrEqual(44);
      expect(box.height).toBeGreaterThanOrEqual(44);
    }
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
    await page.locator(`${cells("John")}[data-chapter="7"]`).tap();
    await expect(page).toHaveURL(/\/es\/biblia\/juan\/7$/);
    await expect(page.locator("#site-sidebar")).not.toHaveAttribute("data-open", "true");
  });
});
