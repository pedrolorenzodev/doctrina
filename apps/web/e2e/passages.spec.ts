import { expect, test } from "@playwright/test";

const route = "/es/doctrinas/bautismo/catolica/pasajes";

test("the page shows the first passage with its title, the reader link and every edition", async ({ page }) => {
  await page.goto(route);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Los pasajes de la posición católica");
  await expect(page.getByRole("heading", { level: 2 })).toHaveText(/Juan\s3:3–8/);
  await expect(page.getByText("Pasaje 1 de 18")).toBeVisible();
  for (const edition of ["RV1909", "BSB", "KJV", "WEB", "DRA"])
    await expect(page.getByRole("group", { name: "Traducción" }).getByRole("button", { name: edition })).toBeVisible();
  await expect(page.getByRole("link", { name: /Leer en el lector/ })).toHaveAttribute(
    "href",
    /\/biblia\/juan\/3\?place=third#v-3$/,
  );
});

test("changing the translation switches the text and persists in the reader's choice", async ({ page }) => {
  await page.goto(route);
  await page.getByRole("group", { name: "Traducción" }).getByRole("button", { name: "BSB" }).click();
  await expect(page.getByText("Jesus answered").first()).toBeVisible();
  expect(await page.evaluate(() => localStorage.getItem("doctrina-translation"))).toBe("bsb");
});

test("arrows and the boxes change the passage and the hash", async ({ page }) => {
  await page.goto(route);
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("heading", { level: 2 })).toHaveText(/1\sPedro\s3:18–22/);
  expect(await page.evaluate(() => location.hash)).toBe("#1pet-3-18-1pet-3-22");
  await page.getByRole("button", { name: /Pasaje anterior/ }).click();
  await expect(page.getByRole("heading", { level: 2 })).toHaveText(/Juan\s3:3–8/);
});

test("a hash opens that passage", async ({ page }) => {
  await page.goto(`${route}#acts-2-37-acts-2-42`);
  await expect(page.getByRole("heading", { level: 2 })).toHaveText(/Hechos\s2:37–42/);
});

test("the apologists layer is the default and shows quotes with their source", async ({ page }) => {
  await page.goto(`${route}#acts-2-37-acts-2-42`);
  await expect(page.getByText("El argumento, en sus palabras")).toBeVisible();
  await expect(page.getByRole("link", { name: "Ver la fuente" }).first()).toHaveAttribute("target", "_blank");
});

test("the layer tabs read Apologistas then Documentos oficiales, and the first is selected", async ({ page }) => {
  await page.goto(route);
  const tabs = page.getByRole("button", { name: /^(Apologistas|Documentos oficiales)$/ });
  await expect(tabs).toHaveText(["Apologistas", "Documentos oficiales"]);
  await expect(tabs.first()).toHaveAttribute("aria-pressed", "true");
  await expect(tabs.nth(1)).toHaveAttribute("aria-pressed", "false");
  await tabs.nth(1).click();
  await expect(page.getByText("El argumento, en sus palabras")).toHaveCount(0);
  await expect(tabs.nth(1)).toHaveAttribute("aria-pressed", "true");
});

test("every apologist quote says whether its text is the AI Spanish or the original language", async ({ page }) => {
  await page.goto(`${route}#john-3-3-john-3-8`);
  const quotes = page.locator("figure blockquote");
  const labelled = page.locator("figure").filter({ hasText: /Traducido con IA|Cita en su idioma original/ });
  expect(await quotes.count()).toBeGreaterThan(3);
  expect(await labelled.count()).toBe(await quotes.count());
});

test("a long quote keeps its paragraphs and the original opens beside it", async ({ page }) => {
  await page.goto(`${route}#john-3-3-john-3-8`);
  const long = page
    .locator("figure blockquote")
    .filter({ hasText: "Las Escrituras enseñan que las personas nacen de nuevo en el bautismo." });
  await expect(long).toBeVisible();
  const lines = await long.evaluate((el) =>
    Math.round(el.getBoundingClientRect().height / parseFloat(getComputedStyle(el).lineHeight)),
  );
  expect(lines).toBeGreaterThan(12);
  const figure = page.locator("figure").filter({
    has: page.locator("blockquote", {
      hasText: "Las Escrituras enseñan que las personas nacen de nuevo en el bautismo.",
    }),
  });
  await figure.getByRole("button", { name: "Leer el original en inglés" }).click();
  await expect(figure.getByText("Scripture teaches people are born again in baptism.").first()).toBeVisible();
});

test("the tree row Pasajes is on and the button of the tradition page leads here", async ({ page }) => {
  await page.goto("/es/doctrinas/bautismo/catolica");
  await page.getByRole("link", { name: /Ver los 18 pasajes/ }).click();
  await expect(page).toHaveURL(/\/pasajes$/);
});

test("no horizontal overflow at 360", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  for (const hash of ["acts-2-37-acts-2-42", "john-3-3-john-3-8"]) {
    await page.goto(`${route}#${hash}`);
    await page.getByRole("button", { name: "Leer el original en inglés" }).first().click();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});

test("«Leer en el lector» lands with the verse as the third visible one", async ({ page }) => {
  await page.goto(`${route}#acts-2-37-acts-2-42`);
  await page.getByRole("link", { name: /Leer en el lector/ }).click();
  await expect(page).toHaveURL(/\/hechos\/2\?place=third#v-37$/);
  await expect(page.locator("#v-37")).toBeVisible();
  await expect
    .poll(async () => page.evaluate(() => Math.round(document.getElementById("v-35")!.getBoundingClientRect().top)))
    .toBeLessThan(160);
  expect(await page.evaluate(() => document.getElementById("v-34")!.getBoundingClientRect().bottom)).toBeLessThan(160);
});

test("hovering a tick of the left ruler swells it and its neighbours like the right-edge ruler", async ({ page }) => {
  await page.goto(route);
  const ticks = page.getByRole("navigation", { name: "Pasajes" }).first().getByRole("button");
  await ticks.nth(5).hover();
  const scale = (index: number) =>
    ticks.nth(index).evaluate((tick) => Number(getComputedStyle(tick.firstElementChild!).getPropertyValue("--k") || 1));
  await expect.poll(() => scale(5)).toBeGreaterThan(4);
  await expect.poll(() => scale(6)).toBeGreaterThan(4);
  await expect(ticks.nth(5).locator("span").nth(1)).toHaveCSS("opacity", "1");
});

test("the left ruler's bars swell smoothly, frame by frame, not in one step", async ({ page }) => {
  await page.goto(route);
  const ticks = page.getByRole("navigation", { name: "Pasajes" }).first().getByRole("button");
  await ticks.nth(2).hover();
  await page.waitForTimeout(400);
  const samples = await ticks.nth(8).evaluate(async (tick) => {
    const bar = tick.firstElementChild!;
    const read = () => new DOMMatrix(getComputedStyle(bar).transform).a;
    const values: number[] = [];
    const root = tick.parentElement!;
    const box = root.getBoundingClientRect();
    root.dispatchEvent(
      new PointerEvent("pointermove", { pointerType: "mouse", clientY: box.top + 8 * 18 + 9, bubbles: true }),
    );
    const start = performance.now();
    while (performance.now() - start < 320) {
      values.push(read());
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    return values;
  });
  const between = samples.filter((value) => value > samples[0]! + 0.1 && value < samples.at(-1)! - 0.1);
  expect(between.length).toBeGreaterThan(3);
  expect(samples.at(-1)).toBeGreaterThan(4);
});

test("the first HTML carries only the first passage: the rest loads on demand", async ({ request }) => {
  const html = await (await request.get(route)).text();
  expect(html).toContain("no naciere de agua");
  expect(html).not.toContain("make disciples of all nations");
  const response = await request.get("/es/doctrines/baptism/catholic/passages/data/4/core");
  expect(response.ok()).toBe(true);
  expect(JSON.stringify(await response.json())).toContain("make disciples of all nations");
  expect((await request.get("/es/doctrines/baptism/catholic/passages/data/999/core")).status()).toBe(404);
});

test("after the idle prefetch the next passage opens at once and nothing moves", async ({ page }) => {
  const shifts = await page.addInitScript(() => {
    (window as unknown as { shift: number }).shift = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as unknown as { value: number; hadRecentInput: boolean }[])
        if (!entry.hadRecentInput) (window as unknown as { shift: number }).shift += entry.value;
    }).observe({ type: "layout-shift", buffered: true });
  });
  void shifts;
  await page.goto(route);
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1500);
  const before = await page.evaluate(() => document.documentElement.scrollHeight);
  const opened = await page.evaluate(
    () =>
      new Promise<number>((resolve) => {
        const first = document.querySelector("h2")?.textContent;
        const start = performance.now();
        new MutationObserver((_records, observer) => {
          const now = document.querySelector("h2")?.textContent;
          if (now && now !== first) {
            observer.disconnect();
            resolve(performance.now() - start);
          }
        }).observe(document.body, { childList: true, subtree: true, characterData: true });
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
      }),
  );
  expect(opened).toBeLessThan(150);
  expect(before).toBeGreaterThan(0);
  expect(await page.evaluate(() => (window as unknown as { shift: number }).shift)).toBeLessThan(0.001);
});

test("the official documents tab of the shown passage is ready before the click", async ({ page }) => {
  await page.goto(`${route}#acts-2-37-acts-2-42`);
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1500);
  await page.getByRole("button", { name: "Documentos oficiales" }).click();
  await expect(page.getByText("El argumento, en sus palabras")).toHaveCount(0);
});

test("a deep link to a passage far down the list lands on it with its quotes", async ({ page }) => {
  await page.goto("/es/doctrines/sola-scriptura/baptist/passages#2tim-3-14-2tim-3-17");
  await expect(page.getByRole("heading", { level: 2 })).toHaveText(/2\sTimoteo\s3:14–17/);
  await expect(page.getByText(/Pasaje \d+ de 24/)).toBeVisible();
  await page.goto("/es/doctrines/baptism/catholic/passages#acts-2-37-acts-2-42");
  await expect(page.getByText("El argumento, en sus palabras")).toBeVisible();
});

test("a deep link to a passage without apologists lands on the first shown one", async ({ page }) => {
  await page.goto("/es/doctrinas/bautismo/luterana/pasajes#eph-5-26");
  await expect(page.getByText("Pasaje 1 de 6")).toBeVisible();
  await expect(page.getByText("El argumento, en sus palabras")).toBeVisible();
});

test("every passage of the pager has at least one apologist quote", async ({ page, request }) => {
  for (const [doctrine, tradition, total] of [
    ["sola-scriptura", "baptist", 24],
    ["papacy", "lutheran", 1],
  ] as const) {
    await page.goto(`/es/doctrines/${doctrine}/${tradition}/passages`);
    await expect(page.getByText(`Pasaje 1 de ${total}`)).toBeVisible();
    for (let n = 1; n <= total; n += 1) {
      const body = (await (
        await request.get(`/es/doctrines/${doctrine}/${tradition}/passages/data/${n}/apologists`)
      ).json()) as {
        arguments: { quotes: unknown[] }[];
      };
      expect(body.arguments.some((argument) => argument.quotes.length > 0)).toBe(true);
    }
    expect((await request.get(`/es/doctrines/${doctrine}/${tradition}/passages/data/${total + 1}/core`)).status()).toBe(
      404,
    );
  }
});

test("the tradition page counts only the shown passages", async ({ page }) => {
  await page.goto("/es/doctrinas/papado/luterana");
  await expect(page.getByRole("link", { name: /Ver los 1 pasajes/ })).toBeVisible();
});

test("at 390 the layer tabs, the first quote and the neighbours fit", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/es/doctrines/sola-scriptura/baptist/passages");
  await expect(page.getByRole("button", { name: "Apologistas" })).toHaveAttribute("aria-pressed", "true");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
