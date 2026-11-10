import { expect, test, type Page } from "@playwright/test";

const chapter = "/es/biblia/juan/6";
const neighbours = ["/api/bible/es/John/5", "/api/bible/es/John/7"];

function watch(page: Page) {
  const seen: string[] = [];
  page.on("request", (request) => {
    const { pathname, search } = new URL(request.url());
    seen.push(`${pathname}${search}`);
  });
  return seen;
}

function reportConnection(page: Page, connection: { saveData?: boolean; effectiveType?: string }) {
  return page.addInitScript((value) => {
    Object.defineProperty(navigator, "connection", { value, configurable: true });
  }, connection);
}

test("on a normal connection the two neighbours' data loads once the page is idle, and nothing else of theirs", async ({
  page,
}) => {
  const seen = watch(page);
  await page.goto(chapter);
  await expect.poll(() => neighbours.every((path) => seen.includes(path))).toBe(true);
  expect(seen.filter((path) => path.startsWith("/api/bible/"))).toEqual(neighbours);
  expect(seen.filter((path) => /^\/es\/biblia\/juan\/[57]\?_rsc/.test(path))).toEqual([]);
});

test("the neighbours are not prefetched under saveData or on a slow connection", async ({ browser }) => {
  for (const connection of [{ saveData: true }, { effectiveType: "3g" }, { effectiveType: "slow-2g" }]) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await reportConnection(page, connection);
    const seen = watch(page);
    await page.goto(chapter);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2500);
    expect(
      seen.filter((path) => path.startsWith("/api/bible/")),
      JSON.stringify(connection),
    ).toEqual([]);
    await context.close();
  }
});

test("stepping to the next chapter still works when nothing was prefetched", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await reportConnection(page, { saveData: true });
  await page.goto(chapter);
  await page.locator("a[data-step=next]").first().click();
  await expect(page.locator('[data-stream-chapter="John/7"]')).toBeVisible();
  await context.close();
});
