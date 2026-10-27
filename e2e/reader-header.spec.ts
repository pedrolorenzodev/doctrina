import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const chapter = (book: string, number: number) => `/es/biblia/${book}/${number}`;
const strip = "main [data-reader-strip]";
const step = (direction: "previous" | "next") => `${strip} [data-step="${direction}"]:visible`;
const bookButton = `${strip} button[data-book-picker]`;
const menu = `${strip} [role="dialog"][aria-label="Libro y capítulo"]`;

async function scrollSlowly(page: Page, direction: 1 | -1, steps: number, perStep = 3) {
  for (let at = 0; at < steps; at += 1) {
    await page.evaluate((delta) => window.scrollBy(0, delta), direction * perStep);
    await page.waitForTimeout(14);
  }
}

test("three zones: the chapter arrows at the left, book, chapter and translation in the middle, the tools at the right", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(chapter("juan", 6));
  const bar = (await page.locator(strip).boundingBox())!;
  const previous = (await page.locator(step("previous")).boundingBox())!;
  const centre = (await page.locator(bookButton).boundingBox())!;
  const tools = (await page.locator(strip).getByRole("button", { name: "Texto", exact: true }).boundingBox())!;
  expect(previous.x).toBeLessThan(centre.x);
  expect(centre.x).toBeLessThan(tools.x);
  await expect(page.locator(bookButton)).toContainText("Juan 6");
  await expect(page.locator(`${strip} button[aria-haspopup="listbox"]`)).toContainText("RV1909");
  const middle = await page.evaluate(() => {
    const group = document.querySelector("main [data-reader-strip] button[data-book-picker]")!.parentElement!
      .parentElement!;
    const rect = group.getBoundingClientRect();
    return rect.left + rect.width / 2;
  });
  const inner = await page.evaluate(() => {
    const bar = document.querySelector("main [data-reader-strip] > div")!;
    const style = getComputedStyle(bar);
    const rect = bar.getBoundingClientRect();
    return (rect.left + Number.parseFloat(style.paddingLeft) + rect.right - Number.parseFloat(style.paddingRight)) / 2;
  });
  expect(Math.abs(middle - inner)).toBeLessThan(40);
  expect(bar.width).toBeGreaterThan(900);
});

test("the arrows go to the neighbouring chapters, stay disabled at the ends and carry a tooltip", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(chapter("juan", 6));
  await expect(page.locator(step("previous"))).toHaveAttribute("href", "/es/biblia/juan/5");
  await expect(page.locator(step("next"))).toHaveAttribute("href", "/es/biblia/juan/7");
  await expect(page.locator(step("next"))).toHaveAttribute("aria-label", "Capítulo siguiente: Juan 7");
  await page.goto(chapter("genesis", 1));
  await expect(page.locator(`${strip} [aria-disabled="true"]:visible`)).toHaveCount(0);
  await expect(page.locator(step("previous"))).toHaveCount(0);
  await page.goto(chapter("apocalipsis", 22));
  await expect(page.locator(step("next"))).toHaveCount(0);
  await page.goto(chapter("juan", 6));
  await page.locator(step("next")).click();
  await expect(page).toHaveURL(/\/es\/biblia\/juan\/7$/);
  await expect(page.locator("main h1", { hasText: "Juan 7" })).toBeVisible();
  await expect(page.locator(`${strip} [data-step="previous"]`).first()).toHaveAttribute("href", "/es/biblia/juan/6");
});

test("hovering or focusing an arrow shows «Capítulo anterior» or «Capítulo siguiente» in the site's tooltip style", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(chapter("juan", 6));
  const tip = (direction: "previous" | "next") =>
    page.locator(`${strip} span:has(> [data-step="${direction}"]) > [aria-hidden="true"]`).first();
  await expect(tip("next")).toBeHidden();
  await page.locator(step("next")).hover();
  await expect(tip("next")).toBeVisible();
  await expect(tip("next")).toHaveText("Capítulo siguiente");
  const look = await tip("next").evaluate((element) => {
    const css = getComputedStyle(element);
    return { radius: css.borderTopLeftRadius, size: css.fontSize, bg: css.backgroundColor };
  });
  expect(look.radius).toBe("4px");
  expect(look.bg).not.toBe("rgba(0, 0, 0, 0)");
  await page.mouse.move(10, 400);
  await expect(tip("next")).toBeHidden();
  await page.locator(step("previous")).focus();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Shift+Tab");
  await expect(tip("previous")).toHaveText("Capítulo anterior");
});

test.describe("hiding", () => {
  test("it hides after 48 px of slow scroll down, comes back after 24 px up and is always there at the top", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(chapter("juan", 6));
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(300);
    await expect(page.locator(strip)).toHaveAttribute("data-hidden", "");
    await scrollSlowly(page, -1, 5, 3);
    await expect(page.locator(strip)).toHaveAttribute("data-hidden", "");
    await scrollSlowly(page, -1, 5, 3);
    await expect(page.locator(strip)).not.toHaveAttribute("data-hidden", "");
    await scrollSlowly(page, 1, 8, 3);
    await expect(page.locator(strip)).not.toHaveAttribute("data-hidden", "");
    await scrollSlowly(page, 1, 12, 3);
    await expect(page.locator(strip)).toHaveAttribute("data-hidden", "");
    await page.evaluate(() => window.scrollTo(0, 0));
    await expect(page.locator(strip)).not.toHaveAttribute("data-hidden", "");
  });

  test("it slides in about 220 ms and goes under the top bar", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(chapter("juan", 6));
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.waitForTimeout(300);
    await scrollSlowly(page, -1, 12, 3);
    await expect(page.locator(strip)).not.toHaveAttribute("data-hidden", "");
    await page.waitForTimeout(300);
    await page.evaluate(() => {
      const frames: { t: number; top: number }[] = [];
      (window as unknown as { __strip: typeof frames }).__strip = frames;
      const start = performance.now();
      const tick = () => {
        frames.push({
          t: performance.now() - start,
          top: document.querySelector("main [data-reader-strip]")!.getBoundingClientRect().top,
        });
        if (performance.now() - start < 1600) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    await scrollSlowly(page, 1, 12, 6);
    await page.waitForTimeout(900);
    const frames = await page.evaluate(() => (window as unknown as { __strip: { t: number; top: number }[] }).__strip);
    const rest = frames.find((frame) => frame.t > 50)!.top;
    const moving = frames.filter((frame) => frame.top < rest - 0.5);
    expect(moving.length).toBeGreaterThan(3);
    const end = frames.at(-1)!.top;
    expect(end).toBeLessThan(rest - 40);
    const from = moving[0]!.t;
    const arrived = frames.find((frame) => frame.t >= from && frame.top <= end + 0.5)!;
    expect(arrived.t - from).toBeGreaterThan(100);
    expect(arrived.t - from).toBeLessThan(400);
  });

  test("an open menu or the focus inside keeps it in view; reduced motion makes it instant", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(chapter("juan", 6));
    await page.evaluate(() => window.scrollTo(0, 400));
    await scrollSlowly(page, -1, 12, 3);
    await expect(page.locator(strip)).not.toHaveAttribute("data-hidden", "");
    await page.locator(bookButton).click();
    await expect(page.locator(menu)).toBeVisible();
    await scrollSlowly(page, 1, 30, 3);
    await expect(page.locator(strip)).not.toHaveAttribute("data-hidden", "");
    await page.keyboard.press("Escape");
    await page.locator("main h1").first().click();
    await page.keyboard.press("Shift");
    await page.locator(step("next")).focus();
    await scrollSlowly(page, 1, 30, 3);
    await expect(page.locator(strip)).not.toHaveAttribute("data-hidden", "");
    await page.locator("main h1").first().click();
    await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
    await scrollSlowly(page, 1, 30, 3);
    await expect(page.locator(strip)).toHaveAttribute("data-hidden", "");
    await page.keyboard.press("Shift");
    await page.locator(step("next")).focus();
    await expect(page.locator(strip)).not.toHaveAttribute("data-hidden", "");
  });

  test("under reduced motion the strip has no transition", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(chapter("juan", 6));
    expect(await page.locator(strip).evaluate((element) => getComputedStyle(element).transitionDuration)).toBe("0s");
  });
});

test.describe("book and chapter menu", () => {
  test("it lists the 73 books in three groups, marks the current one and hangs from the header's line", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(chapter("juan", 6));
    await expect(page.locator(menu)).toBeHidden();
    await page.locator(bookButton).click();
    await expect(page.locator(menu)).toBeVisible();
    await expect(page.locator(bookButton)).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator(`${menu} button`)).toHaveCount(73);
    await expect(page.locator(`${menu} [aria-current="true"]`)).toHaveText("Juan");
    await expect(page.locator(menu)).toContainText("Libros deuterocanónicos");
    await expect(page.locator(`${menu} button:has-text("Salmos")`)).toHaveCount(1);
    await page.waitForTimeout(350);
    const gap = await page.evaluate(
      () =>
        document
          .querySelector('main [data-reader-strip] [role="dialog"][aria-label="Libro y capítulo"]')!
          .getBoundingClientRect().top -
        document.querySelector("main [data-reader-strip]")!.getBoundingClientRect().bottom,
    );
    expect(Math.abs(gap)).toBeLessThanOrEqual(0.5);
    await page.keyboard.press("Escape");
    await expect(page.locator(menu)).toBeHidden();
    await expect(page.locator(bookButton)).toBeFocused();
  });

  test("choosing a book shows its chapters; a chapter goes there and the sidebar follows", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(chapter("juan", 6));
    await page.locator(bookButton).click();
    await page.locator(`${menu} button:has-text("Génesis")`).click();
    await expect(page.locator(`${menu} a[data-chapter]`)).toHaveCount(50);
    await expect(page.locator(menu)).toContainText("50 capítulos");
    await page.locator(`${menu} button:has-text("Libros")`).click();
    await expect(page.locator(`${menu} button`)).toHaveCount(73);
    await page.locator(`${menu} button:has-text("Génesis")`).click();
    await page.locator(`${menu} a[data-chapter="3"]`).click();
    await expect(page).toHaveURL(/\/es\/biblia\/genesis\/3$/);
    await expect(page.locator(bookButton)).toContainText("Génesis 3");
    await expect(page.locator(menu)).toBeHidden();
    await expect(page.locator('aside nav a[data-chapter="3"][aria-current=page]')).toHaveCount(1);
  });

  test("the current chapter wears the ring in the menu too", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(chapter("juan", 6));
    await page.locator(bookButton).click();
    await page.locator(`${menu} button:has-text("Juan")`).first().click();
    await expect(page.locator(`${menu} a[data-chapter="6"]`)).toHaveAttribute("aria-current", "page");
    expect(
      await page
        .locator(`${menu} a[data-chapter="6"] > span`)
        .evaluate((element) => getComputedStyle(element).boxShadow),
    ).not.toBe("none");
  });
});

test.describe("phone", () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true });

  test("the arrows flank the book and translation; the menu fits the screen; nothing overflows", async ({ page }) => {
    await page.goto(chapter("juan", 6));
    await expect(page.locator(step("previous"))).toHaveCount(1);
    await expect(page.locator(step("next"))).toHaveCount(1);
    const previous = (await page.locator(step("previous")).boundingBox())!;
    const pill = (await page.locator(bookButton).boundingBox())!;
    const next = (await page.locator(step("next")).boundingBox())!;
    expect(previous.x + previous.width).toBeLessThanOrEqual(pill.x);
    expect(pill.x + pill.width).toBeLessThanOrEqual(next.x + 1);
    expect(previous.width).toBeGreaterThanOrEqual(43);
    await expect(page.locator(strip).getByRole("button", { name: "Texto", exact: true })).toBeVisible();
    await page.locator(bookButton).tap();
    await expect(page.locator(menu)).toBeVisible();
    await page.waitForTimeout(350);
    const box = (await page.locator(menu).boundingBox())!;
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(390);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });
});
