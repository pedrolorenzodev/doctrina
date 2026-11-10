import { expect, test } from "@playwright/test";

const pages: [string, string, string, number][] = [
  ["bautismo", "catolica", "Juan 3:3–8", 18],
  ["bautismo", "luterana", "Mateo 28:18–20", 6],
  ["bautismo", "reformada", "Mateo 28:18–20", 19],
  ["bautismo", "ortodoxa", "Juan 3:3–8", 2],
  ["bautismo", "bautista", "Hechos 8:35–39", 17],
  ["eucaristia", "catolica", "Juan 6:51–58 · Juan 6:60–69", 12],
  ["eucaristia", "luterana", "Mateo 26:26–28 · Marcos 14:22–24 · Lucas 22:19–20 · 1 Corintios 11:23–25", 4],
  ["eucaristia", "reformada", "Mateo 26:26–28 · Marcos 14:22–24 · Lucas 22:19–20 · 1 Corintios 11:23–26", 7],
  ["eucaristia", "ortodoxa", "Juan 6:54 · Juan 6:56", 5],
  ["eucaristia", "bautista", "Mateo 26:26–30 · Marcos 14:22–26 · Lucas 22:17–20 · 1 Corintios 11:23–29", 5],
  ["papado", "catolica", "Mateo 16:13–20", 14],
  ["papado", "luterana", "Mateo 16:13–20", 1],
  ["papado", "reformada", "Mateo 16:13–20 · Mateo 18:15–20", 12],
  ["papado", "ortodoxa", "Gálatas 2:11", 3],
  ["papado", "bautista", "Mateo 16:13–20", 23],
  ["sola-scriptura", "catolica", "2 Tesalonicenses 2:13–15", 17],
  ["sola-scriptura", "luterana", "Gálatas 1:8", 1],
  ["sola-scriptura", "reformada", "2 Timoteo 3:14–17 · 1 Juan 5:9 · 1 Tesalonicenses 2:13", 19],
  ["sola-scriptura", "ortodoxa", "2 Tesalonicenses 2:13–15", 2],
  ["sola-scriptura", "bautista", "2 Timoteo 3:14–17", 24],
];

for (const [doctrine, tradition, first, total] of pages) {
  test(`${doctrine}/${tradition} opens on its agreed first passage and shows ${total} passages`, async ({ page }) => {
    await page.goto(`/es/doctrinas/${doctrine}/${tradition}/pasajes`);
    const heading = await page.getByRole("heading", { level: 2 }).innerText();
    expect(heading.replace(/\s+/g, " ")).toBe(first);
    await expect(page.getByText(`Pasaje 1 de ${total}`)).toBeVisible();
  });
}
