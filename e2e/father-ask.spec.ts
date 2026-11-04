import { expect, test, type Page } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const smyrnaeans = "/es/historia/obras/ignatius-smyrnaeans";
const strip = "main [data-reader-strip]";
const askButton = `${strip} [data-ask-button]`;
const drawer = "aside[data-ask-drawer]";
const chipRow = "[data-ask-suggestions]";

const open = async (page: Page, path: string, width = 1440, height = 900) => {
  await page.setViewportSize({ width, height });
  await page.goto(path);
  await page.evaluate(() => document.fonts.ready);
};

const click = (page: Page, selector: string) =>
  page.evaluate((target) => {
    [...document.querySelectorAll<HTMLElement>(target)].find((node) => node.offsetParent)?.click();
  }, selector);

const select = async (page: Page, locator: string, words: string) => {
  await page.evaluate(
    ([anchor, text]) => {
      const unit = document.querySelector(`[data-father-text] > div[id="${anchor}"] [data-verse-text]`)!;
      const walker = document.createTreeWalker(unit, NodeFilter.SHOW_TEXT);
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        const at = node.textContent!.indexOf(text as string);
        if (at < 0) continue;
        const range = document.createRange();
        range.setStart(node, at);
        range.setEnd(node, at + (text as string).length);
        getSelection()!.removeAllRanges();
        getSelection()!.addRange(range);
      }
      document.dispatchEvent(new PointerEvent("pointerup", { pointerType: "mouse" }));
    },
    [`d-${locator}`, words],
  );
};

test.describe("Fathers' reader: the AI chat", () => {
  test("«Preguntar» sits at the left of the fixed header with the same inset as the right side", async ({ page }) => {
    await open(page, smyrnaeans);
    await expect(page.locator(askButton)).toHaveText("Preguntar");
    const [left, right] = await page.evaluate(() => {
      const bar = document.querySelector<HTMLElement>("main [data-reader-strip] > div")!.getBoundingClientRect();
      const ask = document
        .querySelector<HTMLElement>("main [data-reader-strip] [data-ask-button]")!
        .getBoundingClientRect();
      const last = [...document.querySelectorAll<HTMLElement>("main [data-reader-strip] button")].filter(
        (node) => node.offsetParent,
      );
      const end = last[last.length - 1]!.getBoundingClientRect();
      return [ask.left - bar.left, bar.right - end.right];
    });
    expect(Math.abs(left! - right!)).toBeLessThanOrEqual(1);
  });

  test("the button opens the drawer, which folds the tree, and the tree and the drawer are never open together", async ({
    page,
  }) => {
    await open(page, smyrnaeans);
    await click(page, askButton);
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
    await expect(page.locator(askButton)).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("html")).toHaveAttribute("data-tree", "closed");
    await page.waitForTimeout(400);
    const box = (await page.locator(drawer).boundingBox())!;
    expect(box).toEqual({ x: 0, y: 56, width: 432, height: 900 - 56 });
    await click(page, 'button[aria-controls="site-sidebar"]');
    await expect(page.locator(drawer)).not.toHaveAttribute("data-open");
    await expect(page.locator("html")).not.toHaveAttribute("data-tree", "closed");
    expect(await horizontalOverflow(page)).toBe(0);
  });

  test("the work's own questions answer with real passages, citing the edition", async ({ page }) => {
    await open(page, smyrnaeans);
    await click(page, askButton);
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
    await page.waitForTimeout(350);
    await expect(page.locator(`${chipRow} button`)).toHaveText([
      "¿Qué dice Ignacio de la eucaristía?",
      "¿Qué dice Ignacio del obispo?",
      "¿Contra quiénes escribe Ignacio?",
    ]);
    await page.locator(`${chipRow} button`).first().click();
    await expect(page.locator("[data-ask-answer] button", { hasText: "Informar un error" })).toBeVisible({
      timeout: 16000,
    });
    await expect(page.locator("[data-ask-answer] blockquote")).toHaveCount(2);
    await expect(page.locator("[data-ask-answer] blockquote").first()).toContainText(
      "no admiten que la eucaristía es la carne de nuestro Salvador Jesucristo",
    );
    const link = page.locator("[data-ask-cite]", { hasText: "A los esmirniotas 6, 2" });
    await link.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await link.hover();
    const card = page.locator("[data-ask-preview]");
    await expect(card).toHaveAttribute("data-open", "true");
    await expect(card).toContainText("En la edición, 6.2");
    await expect(card).toContainText("They abstain from eucharist");
    await link.click();
    const window = page.locator('[role=dialog][aria-labelledby="citation-window-kind"]');
    await expect(window).toHaveAttribute("data-open", "true");
    await expect(window).toContainText("Se abstienen de la eucaristía");
    await expect(window).toContainText("J. B. Lightfoot, 1889");
    await window.getByRole("link", { name: "Abrir la fuente completa" }).click();
    await page.waitForURL(/obras\/ignatius-smyrnaeans#d-6\.2$/);
  });

  test("a free question with no passage says there is no answer, and a pastoral one gets the fixed text", async ({
    page,
  }) => {
    await open(page, "/es/historia/obras/didache");
    await click(page, askButton);
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
    await page.locator(`${drawer} textarea`).fill("¿Cuántos años tenía el autor?");
    await page.keyboard.press("Enter");
    await expect(page.locator("[data-ask-answer]")).toContainText("no hay respuesta", { timeout: 16000 });
  });

  test("a work with no prepared questions says so and offers no chips", async ({ page }) => {
    await open(page, "/es/historia/obras/ambrose-de-fide");
    await click(page, askButton);
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
    await expect(page.locator(`${chipRow} button`)).toHaveCount(0);
    await page.locator(`${drawer} textarea`).fill("¿Qué dice de la fe?");
    await page.keyboard.press("Enter");
    await expect(page.locator("[data-ask-answer]")).toContainText("Todavía no hay respuestas preparadas", {
      timeout: 16000,
    });
  });

  test("«Preguntar» in the selection toolbar opens the drawer with the words as a pill that leads back to the paragraph", async ({
    page,
  }) => {
    await open(page, smyrnaeans);
    await page.evaluate(() =>
      scrollTo(0, document.getElementById("d-8.1")!.getBoundingClientRect().top + scrollY - 300),
    );
    await page.waitForTimeout(400);
    await select(page, "8.1", "Do ye all follow your bishop");
    await page.locator("[role=toolbar][data-open=true]").getByRole("button", { name: "Preguntar" }).click();
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
    const pill = page.locator("[data-ask-foot] div:has(> [data-ask-pill-go])");
    await expect(pill).toContainText("Do ye all follow your bishop");
    await page.evaluate(() => scrollTo(0, 0));
    await page.waitForTimeout(400);
    await pill.locator("[data-ask-pill-go]").click();
    await expect
      .poll(() => page.evaluate(() => Math.round(document.getElementById("d-8.1")!.getBoundingClientRect().top)))
      .toBeLessThan(500);
  });

  test("the chat names the edition in use and follows the switch in the header", async ({ page }) => {
    await open(page, "/es/historia/obras/didache");
    await click(page, askButton);
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
    await expect(page.locator("[data-ask-context]")).toContainText("Joseph Barber Lightfoot");
    await page.locator('main [data-reader-strip] button[aria-haspopup="listbox"]').click();
    await page.getByRole("option", { name: /IA 2026/ }).click();
    await expect(page.locator("[data-ask-context]")).toContainText("Traducción de Doctrina con IA");
  });

  test("a Bible conversation is never shown in the Fathers' reader", async ({ page }) => {
    await open(page, "/es/biblia/juan/6", 1440, 1000);
    await click(page, askButton.replace("main ", ""));
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
    await page.locator(`${chipRow} button`).first().click();
    await expect(page.locator("[data-ask-answer]")).toHaveCount(1);
    await page.goto(smyrnaeans);
    await click(page, askButton);
    await expect(page.locator(drawer)).toHaveAttribute("data-open", "true");
    await expect(page.locator("[data-ask-answer]")).toHaveCount(0);
  });

  test("at 390 px the header keeps its row and the page does not overflow", async ({ page }) => {
    await open(page, smyrnaeans, 390, 844);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });
});
