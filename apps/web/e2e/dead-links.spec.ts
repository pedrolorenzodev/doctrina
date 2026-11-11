import { expect, test } from "@playwright/test";
import { existsSync } from "node:fs";
import { bibleReferenceHref } from "@/content/bible-routes";
import { shownPassages } from "@/content/doctrine-rules";
import { spanishPages } from "@/content/pages/index";
import { traditionHref } from "@/content/routes";
import { hasCorpus } from "./helpers";

for (const content of Object.values(spanishPages)) {
  test(`${content.doctrine}/${content.tradition}: Scripture titles open the referenced Bible page`, async ({
    page,
  }) => {
    test.skip(!hasCorpus, "Local Bible corpus required");
    await page.goto(traditionHref("es", content.doctrine, content.tradition));
    const links = page.locator("#scripture li > p:first-child a");
    const passages = content.scripture.slice(0, shownPassages);
    await expect(links).toHaveCount(passages.length);
    for (const [index, passage] of passages.entries()) {
      await expect(links.nth(index)).toHaveAttribute("href", bibleReferenceHref("es", passage.refs[0] ?? "")!);
    }
    const destination = await links.first().getAttribute("href");
    await links.first().focus();
    await expect(links.first()).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(destination!);
    await expect(page.locator("main h1")).toBeVisible();
  });
}

for (const doctrine of ["eucaristia", "bautismo", "papado", "sola-scriptura"]) {
  test(`${doctrine}: objection passages navigate to a Bible verse`, async ({ page }) => {
    test.skip(!hasCorpus, "Local Bible corpus required");
    await page.goto(`/es/doctrinas/${doctrine}/catolica/objeciones/ob-1`);
    const references = page.locator("#passages a.link-page");
    expect(await references.count()).toBeGreaterThan(0);
    const hrefs = await references.evaluateAll((links) => links.map((link) => link.getAttribute("href")));
    for (const href of hrefs) expect(href).toMatch(/^\/es\/biblia\/[^/]+\/\d+(?:\/\d+)?$/);
    const destination = hrefs[0]!;
    await references.first().click();
    await expect(page).toHaveURL(destination);
    await expect(page.locator("main h1")).toBeVisible();
  });
}

test("witness author opens the Father page with the keyboard", async ({ page }) => {
  await page.goto("/es/doctrinas/eucaristia");
  const author = page.locator("#w-ew-flesh").getByRole("link", { name: "Ignacio de Antioquía", exact: true });
  await expect(author).toHaveAttribute("href", "/es/historia/padres/ignatius-of-antioch");
  await author.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL("/es/historia/padres/ignatius-of-antioch");
});

for (const [doctrine, witness, council] of [
  ["bautismo", "bw-nicaea-19", "nicaea-1"],
  ["bautismo", "bw-carthage", "carthage-418"],
  ["papado", "pw-nicaea-6", "nicaea-1"],
  ["papado", "pw-chalcedon-28", "chalcedon-451"],
]) {
  test(`${witness}: the early-Christian witness opens its council`, async ({ page }) => {
    await page.goto(`/es/doctrinas/${doctrine}/primeros-cristianos`);
    const link = page.locator(`#early-${witness} h2 a`);
    const destination = `/es/historia/concilios/${council}`;
    await expect(link).toHaveAttribute("href", destination);
    await link.click();
    await expect(page).toHaveURL(destination);
    await expect(page.locator("main h1")).toBeVisible();
  });
}

test("doctrine witness council heading navigates to its entity", async ({ page }) => {
  await page.goto("/es/doctrinas/bautismo");
  await page.locator("#w-bw-carthage").getByRole("link", { name: "Concilio de Cartago", exact: true }).click();
  await expect(page).toHaveURL("/es/historia/concilios/carthage-418");
});

test("timeline writing opens the existing complete work", async ({ page }) => {
  test.skip(!existsSync("../../data/corpus/fathers/1-clement"), "Local Father corpus required");
  await page.goto("/es/historia/linea-de-tiempo#clement-of-rome");
  const panel = page.locator('[data-side-panel][data-open="true"]');
  const link = panel.locator('a[href="/es/historia/obras/1-clement"]');
  await expect(link).toBeVisible();
  await link.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL("/es/historia/obras/1-clement");
});

test("timeline's collected letters open the Father's existing writings list", async ({ page }) => {
  test.skip(!existsSync("../../data/corpus/fathers/ignatius-ephesians"), "Local Father corpus required");
  await page.goto("/es/historia/linea-de-tiempo#ignatius-of-antioch");
  const link = page.locator(
    '[data-side-panel][data-open="true"] a[href="/es/historia/padres/ignatius-of-antioch#works"]',
  );
  await link.click();
  await expect(page).toHaveURL("/es/historia/padres/ignatius-of-antioch#works");
  await expect(page.locator("#works")).toBeInViewport();
});

test("English timeline writings retain English destinations", async ({ page }) => {
  test.skip(!existsSync("../../data/corpus/fathers/1-clement"), "Local Father corpus required");
  await page.goto("/en/history/timeline#clement-of-rome");
  await page.locator('[data-side-panel][data-open="true"] a[href="/en/history/works/1-clement"]').click();
  await expect(page).toHaveURL("/en/history/works/1-clement");
});

for (const [father, work] of [
  ["theophilus-of-antioch", "theophilus-to-autolycus"],
  ["cyril-of-alexandria", "cyril-alexandria-commentary-john"],
]) {
  for (const surface of ["profile", "timeline"]) {
    test(`${father}: the ${surface} writing title opens its available work`, async ({ page }) => {
      test.skip(!existsSync(`../../data/corpus/fathers/${work}`), "Local Father corpus required");
      await page.goto(
        surface === "profile" ? `/es/historia/padres/${father}` : `/es/historia/linea-de-tiempo#${father}`,
      );
      const scope =
        surface === "profile" ? page.locator("#works") : page.locator('[data-side-panel][data-open="true"]');
      const destination = `/es/historia/obras/${work}`;
      await scope.locator(`a[href="${destination}"]`).first().click();
      await expect(page).toHaveURL(destination);
      await expect(page.locator("main h1")).toBeVisible();
    });
  }
}

for (const width of [390, 1440]) {
  test(`witness author receives a pointer click at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/es/doctrinas/eucaristia");
    const author = page.locator("#w-ew-flesh").getByRole("link", { name: "Ignacio de Antioquía", exact: true });
    await author.click();
    await expect(page).toHaveURL("/es/historia/padres/ignatius-of-antioch");
  });
}
