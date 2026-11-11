import { expect, test } from "@playwright/test";
import { hasFathers, hasWords } from "./helpers";

const screens = [
  "/es/glosario",
  "/es/glosario/cisma",
  "/es/palabras/G4561",
  "/en/words/G4561",
  "/es/historia/obras/origen-against-celsus",
  "/en/history/works/origen-against-celsus",
];

for (const path of screens) {
  test(`${path} shows no «Borrador» or «Draft» banner`, async ({ page }) => {
    test.skip(!hasWords && /\/(palabras|words)\//.test(path), "needs the local word-study data");
    test.skip(!hasFathers && /\/(obras|works)\//.test(path), "needs the local Fathers corpus");
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await page.waitForTimeout(1300);
    await expect(page.locator("main")).not.toContainText(/Borrador:|Draft:/);
  });
}
