import { expect, test } from "@playwright/test";

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
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await page.waitForTimeout(1300);
    await expect(page.locator("main")).not.toContainText(/Borrador:|Draft:/);
  });
}
