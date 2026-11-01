import { expect, test, type Page } from "@playwright/test";

const chapter = "/es/biblia/juan/6";
const askButton = "button[data-ask-button]:visible";
const menuButton = "header button[aria-controls='site-sidebar']";

async function room(page: Page) {
  return page.evaluate(() => {
    const visible = (element: Element | null) => {
      if (!element) return false;
      const box = element.getBoundingClientRect();
      return (
        getComputedStyle(element).visibility !== "hidden" && box.width > 0 && box.right > 0 && box.left < innerWidth
      );
    };
    const content = document.getElementById("content");
    const style = content ? getComputedStyle(content) : null;
    return {
      drawer: document.querySelector("[data-ask-drawer]")?.hasAttribute("data-open") ?? false,
      tree: visible(document.getElementById("site-sidebar")),
      paddingLeft: parseFloat(style?.paddingLeft ?? "0"),
      paddingBottom: parseFloat(style?.paddingBottom ?? "0"),
    };
  });
}

async function settled(page: Page) {
  await page.waitForTimeout(700);
  return room(page);
}

test.describe("desktop", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  for (const treeStart of ["closed", "open"] as const) {
    test(`the tree and the ask drawer take turns, with the tree ${treeStart} at the start`, async ({ page }) => {
      if (treeStart === "closed") await page.addInitScript(() => localStorage.setItem("doctrina-tree", "closed"));
      await page.goto(chapter);
      await page.waitForTimeout(800);
      const start = await room(page);
      expect(start.drawer).toBe(false);
      expect(start.tree).toBe(treeStart === "open");

      await page.locator(askButton).click();
      const asking = await settled(page);
      expect(asking).toMatchObject({ drawer: true, tree: false });
      expect(asking.paddingLeft).toBeGreaterThan(400);

      await page.locator(menuButton).click();
      const back = await settled(page);
      expect(back).toMatchObject({ drawer: false, tree: true, paddingLeft: start.paddingLeft });

      await page.locator(menuButton).click();
      await page.locator(askButton).click();
      expect(await settled(page)).toMatchObject({ drawer: true, tree: false });
      await page.keyboard.press("Escape");
      expect(await settled(page)).toMatchObject({ drawer: false, paddingLeft: start.paddingLeft });
    });
  }

  test("leaving for the home with the drawer open and coming back keeps the room the text gives it", async ({
    page,
  }) => {
    await page.goto(chapter);
    await page.waitForTimeout(800);
    await page.locator(askButton).click();
    const before = await settled(page);
    expect(before.paddingLeft).toBeGreaterThan(400);
    await page.locator("header a").first().click();
    await page.waitForTimeout(1200);
    await page.goBack();
    await page.waitForTimeout(1500);
    expect(await room(page)).toEqual(before);
  });
});

test.describe("tablet, where the drawer is a sheet beside a docked tree", () => {
  test.use({ viewport: { width: 1050, height: 900 } });

  test("opening the sheet folds the tree, and opening the tree closes the sheet", async ({ page }) => {
    await page.goto(chapter);
    await page.waitForTimeout(800);
    await page.locator(askButton).click();
    expect(await settled(page)).toMatchObject({ drawer: true, tree: false });
    await page.locator(menuButton).click();
    expect(await settled(page)).toMatchObject({ drawer: false, tree: true });
  });
});

test.describe("phone", () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true });

  test("the tree overlay and the ask sheet are never open together", async ({ page }) => {
    await page.goto(chapter);
    await page.waitForTimeout(800);
    await page.keyboard.press("/");
    expect(await settled(page)).toMatchObject({ drawer: true, tree: false });
    await page.locator(menuButton).click();
    expect(await settled(page)).toMatchObject({ drawer: false, tree: true });
    await page.keyboard.press("/");
    expect(await settled(page)).toMatchObject({ drawer: true, tree: false });
  });
});
