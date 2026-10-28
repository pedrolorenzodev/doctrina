import { expect, test } from "@playwright/test";
import { horizontalOverflow } from "./helpers";

const rows = "main ul li:not([data-id^=group-])";

const indexes = [
  ["/es/historia/padres", "Padres", 56],
  ["/es/historia/concilios", "Concilios", 41],
  ["/es/historia/herejias", "Herejías", 18],
  ["/es/historia/divisiones", "Divisiones", 10],
  ["/es/historia/reforma", "Reforma y ramas", 20],
] as const;

for (const [path, title, count] of indexes) {
  test(`${title}: a title, a short intro, rows by century and every item listed`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator("h1")).toHaveText(title);
    await expect(page.locator(rows)).toHaveCount(count);
    await expect(page.locator("main h3").first()).toHaveText(/^Siglo [IVX]+$/);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });
}

test("the filter appears from 30 items, narrows the rows and the century titles, and says when nothing matches", async ({
  page,
}) => {
  await page.goto("/es/historia/concilios");
  const filter = page.getByRole("searchbox", { name: "Filtrar por nombre" });
  await filter.fill("trento");
  await expect(page.locator(rows)).toHaveCount(1);
  await expect(page.locator("main h3")).toHaveCount(1);
  await filter.fill("zzzz");
  await expect(page.locator("main")).toContainText("Nada coincide con «zzzz».");
  await filter.fill("");
  await expect(page.locator(rows)).toHaveCount(41);
  await page.goto("/es/historia/herejias");
  await expect(page.getByRole("searchbox")).toHaveCount(0);
});

test("filtering moves the rows as a list change: leaving rows fade as ghosts, the rest slide", async ({ page }) => {
  await page.goto("/es/historia/concilios");
  const filter = page.getByRole("searchbox", { name: "Filtrar por nombre" });
  await filter.fill("nicea");
  const motion = await page.evaluate(() => ({
    ghosts: document.querySelectorAll("main .flip-ghosts > *").length,
    running: document
      .querySelector("main ul")!
      .getAnimations({ subtree: true })
      .filter((animation) => animation.id === "flip").length,
  }));
  expect(motion.ghosts).toBeGreaterThan(0);
  expect(motion.running).toBeGreaterThan(0);
  await expect(page.locator("main .flip-ghosts > *")).toHaveCount(0);
});

test("the rows lead to their pages and the sidebar entries lead to the indexes", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/concilios");
  await page.getByRole("link", { name: "Primer Concilio de Nicea" }).click();
  await expect(page).toHaveURL("/es/historia/concilios/nicaea-1");
  await page.getByRole("link", { name: /^Herejías/ }).click();
  await expect(page).toHaveURL("/es/historia/herejias");
});
