import { expect, test } from "@playwright/test";
import { horizontalOverflow, traditionPath } from "./helpers";

const base = `${traditionPath}/objeciones`;
const first = `${base}/ob-1`;
const neighbors = 'nav[aria-label="Objeciones vecinas"]';

test("«Videos»: the three videos of OB-1 with channel and language, opening YouTube", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  await expect(page.locator("#videos h2")).toHaveText("Videos");
  await expect(page.locator("#videos > div > p")).toHaveText(
    "Creadores católicos que responden a esta objeción. Los videos se abren en YouTube.",
  );
  await expect(page.locator("#videos li")).toHaveCount(3);
  const link = page.locator("#videos li a").first();
  await expect(link).toHaveAttribute("href", "https://www.youtube.com/watch?v=PQRXRs4FNhE");
  await expect(link).toHaveAttribute("target", "_blank");
  await expect(link).toHaveAttribute("lang", "en");
  await expect(page.locator("#videos li").first()).toContainText("Shameless Popery, en inglés");
  await expect(page.locator("#videos li").last()).toContainText("La Fe de la Iglesia, en español");
});

test("an objection without videos shows no «Videos» section and the ruler follows", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${base}/ob-2`);
  await expect(page.locator("#videos")).toHaveCount(0);
  await page.waitForTimeout(1500);
  await expect(page.locator("[data-tick]")).toHaveCount(6);
  await page.goto(first);
  await page.waitForTimeout(1500);
  await expect(page.locator("[data-tick]")).toHaveCount(7);
});

test("«Otras objeciones»: the six others, compact, each opening its page", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  await expect(page.locator("#others h2")).toHaveText("Otras objeciones");
  await expect(page.locator("#others li")).toHaveCount(6);
  const hrefs = await page
    .locator("#others li a")
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
  expect(hrefs).toEqual([5, 2, 3, 4, 6, 7].map((n) => `${base}/ob-${n}`));
  const metrics = await page
    .locator("#others li")
    .first()
    .evaluate((item) => {
      const title = getComputedStyle(item.querySelector("p")!);
      const synthesis = getComputedStyle(item.querySelectorAll("p")[1]!);
      const box = getComputedStyle(item);
      return [title.fontSize, synthesis.fontSize, box.paddingTop, box.paddingBottom];
    });
  expect(metrics).toEqual(["17px", "15px", "14px", "16px"]);
  await page.locator("#others li a").first().click();
  await expect(page).toHaveURL(`${base}/ob-5`);
  await expect(page.locator("#others li")).toHaveCount(6);
});

test("a reference in «Otras objeciones» opens the window", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  const link = page.locator("#others [aria-haspopup]").first();
  await link.scrollIntoViewIfNeeded();
  await link.click();
  await expect(page.locator("[role=dialog]")).toHaveAttribute("data-open", "true");
  await page.keyboard.press("Escape");
  await expect(link).toBeFocused();
});

test("footer on the first objection: all objections on the left, the next on the right", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  const boxes = page.locator(`${neighbors} a`);
  await expect(boxes).toHaveCount(2);
  await expect(boxes.first()).toContainText("Anterior: todas las objeciones");
  await expect(boxes.first()).toContainText("Objeciones a la posición católica");
  await expect(boxes.first()).toHaveAttribute("href", base);
  await expect(boxes.last()).toContainText("Siguiente objeción");
  await expect(boxes.last()).toHaveAttribute("href", `${base}/ob-2`);
  expect(await boxes.last().evaluate((node) => getComputedStyle(node).textAlign)).toBe("right");
  expect(await boxes.first().evaluate((node) => getComputedStyle(node).textAlign)).not.toBe("right");
});

test("footer in the middle names the previous and the next objection", async ({ page }) => {
  await page.goto(`${base}/ob-3`);
  const boxes = page.locator(`${neighbors} a`);
  await expect(boxes.first()).toContainText("Objeción anterior");
  await expect(boxes.first()).toHaveAttribute("href", `${base}/ob-2`);
  await expect(boxes.last()).toHaveAttribute("href", `${base}/ob-4`);
});

test("footer on the last objection has no next box and the previous keeps its column", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${base}/ob-7`);
  const boxes = page.locator(`${neighbors} a`);
  await expect(boxes).toHaveCount(1);
  await expect(boxes).toContainText("Objeción anterior");
  const [box, nav] = await Promise.all([boxes.boundingBox(), page.locator(neighbors).boundingBox()]);
  expect(Math.abs((box?.x ?? 0) - (nav?.x ?? 1))).toBeLessThan(1);
  expect((box?.width ?? 0) < (nav?.width ?? 0) * 0.6).toBe(true);
});

test("on phones the boxes stack, left aligned, with a 16 px gap", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(first);
  const boxes = page.locator(`${neighbors} a`);
  const [a, b] = await Promise.all([boxes.first().boundingBox(), boxes.last().boundingBox()]);
  expect(Math.round((b?.y ?? 0) - ((a?.y ?? 0) + (a?.height ?? 0)))).toBe(16);
  expect(await boxes.last().evaluate((node) => getComputedStyle(node).textAlign)).not.toBe("right");
});

test("hovering a box darkens its border and fills it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  const box = page.locator(`${neighbors} a`).last();
  const before = await box.evaluate((node) => getComputedStyle(node).borderTopColor);
  await box.hover();
  await expect.poll(() => box.evaluate((node) => getComputedStyle(node).borderTopColor)).not.toBe(before);
  expect(await box.evaluate((node) => getComputedStyle(node).backgroundColor)).not.toBe("rgba(0, 0, 0, 0)");
});

test("the group headings keep 30 px above and 4 px below in «Fuentes citadas» and «Pasajes»", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(first);
  for (const id of ["sources", "passages"]) {
    const gaps = await page.evaluate((section) => {
      const headings = [...document.querySelectorAll(`#${section} h3`)];
      const second = headings[1]!.getBoundingClientRect();
      const lastBefore = headings[1]!.previousElementSibling!.getBoundingClientRect();
      const list = headings[1]!.nextElementSibling!.getBoundingClientRect();
      return [Math.round(second.top - lastBefore.bottom), Math.round(list.top - second.bottom)];
    }, id);
    expect(gaps).toEqual([30, 4]);
  }
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`${width}px: the whole page has no horizontal overflow @webkit`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(first);
    expect(await horizontalOverflow(page)).toBe(0);
  });
}

test("Baptism: the last objection has only the previous box", async ({ page }) => {
  await page.goto("/es/doctrinas/bautismo/catolica/objeciones/ob-6b");
  await expect(page.locator(`${neighbors} a`)).toHaveCount(1);
  await page.goto("/es/doctrinas/bautismo/catolica/objeciones/ob-1");
  await expect(page.locator("#videos")).toHaveCount(0);
});
