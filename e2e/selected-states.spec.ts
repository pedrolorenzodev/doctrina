import { expect, test, type Page } from "@playwright/test";

const tradition = "/es/doctrinas/eucaristia/catolica";

async function probe(page: Page, property: "backgroundColor" | "color", token: string) {
  return page.evaluate(
    ([prop, variable]) => {
      const element = document.createElement("i");
      element.style.setProperty(prop === "color" ? "color" : "background-color", `var(${variable})`);
      document.body.append(element);
      const value = getComputedStyle(element)[prop as "color"];
      element.remove();
      return value;
    },
    [property, token] as const,
  );
}

for (const scheme of ["light", "dark"] as const) {
  test.describe(`selected states, ${scheme}`, () => {
    test.use({ colorScheme: scheme, viewport: { width: 1440, height: 900 } });

    test("the current tradition tab is lifted: the fill of the translation picker and a grey hairline", async ({
      page,
    }) => {
      await page.goto(tradition);
      const tab = page.locator("button[data-label][data-current]");
      const style = await tab.evaluate((element) => {
        const css = getComputedStyle(element);
        return {
          fill: css.backgroundColor,
          outline: css.outlineStyle,
          shadow: css.boxShadow,
        };
      });
      expect(style.fill).toBe(await probe(page, "backgroundColor", "--color-card"));
      expect(style.outline).toBe("none");
      expect(style.shadow).toBe(`${await probe(page, "backgroundColor", "--color-rule-2")} 0px 0px 0px 1px inset`);
    });

    test("a pressed toggle button is lifted too, with the same grey hairline and no accent border", async ({
      page,
    }) => {
      await page.goto("/es/biblia/juan/6");
      const toggle = page.locator("button[aria-pressed]", { hasText: "Preguntar" }).first();
      await toggle.click();
      await expect(toggle).toHaveAttribute("aria-pressed", "true");
      const card = await probe(page, "backgroundColor", "--color-card");
      await expect.poll(() => toggle.evaluate((element) => getComputedStyle(element).backgroundColor)).toBe(card);
      const style = await toggle.evaluate((element) => {
        const css = getComputedStyle(element);
        return { shadow: css.boxShadow, outline: css.outlineStyle };
      });
      expect(style.shadow).toBe(`${await probe(page, "backgroundColor", "--color-rule-2")} 0px 0px 0px 1px inset`);
      expect(style.outline).toBe("none");
    });

    test("the pressed segment sits on an ink pad with the wall layer and the label in the page colour", async ({
      page,
    }) => {
      await page.goto(tradition);
      const group = page.locator('[role="group"][data-ready]').first();
      await group.scrollIntoViewIfNeeded();
      const pad = group.locator("[data-slide-indicator]");
      const pressed = group.locator('button[aria-pressed="true"]');
      const style = await pad.evaluate((element) => {
        const layer = getComputedStyle(element, "::before");
        return {
          fill: getComputedStyle(element).backgroundColor,
          layerImage: layer.backgroundImage.startsWith("url("),
          layerBlend: layer.mixBlendMode,
        };
      });
      expect(style.fill).toBe(await probe(page, "backgroundColor", "--color-ink"));
      expect(style.layerImage).toBe(true);
      expect(style.layerBlend).toBe(scheme === "light" ? "screen" : "multiply");
      expect(await pressed.evaluate((element) => getComputedStyle(element).color)).toBe(
        await probe(page, "color", "--color-bg"),
      );
      expect(await pressed.evaluate((element) => getComputedStyle(element, "::before").display)).toBe("none");
    });

    test("changing page leaves exactly one short mark in the tree at every frame while it travels", async ({
      page,
    }) => {
      await page.goto(tradition);
      await page.waitForTimeout(800);
      await page.evaluate(() => {
        const visibleMarks = () => {
          let count = document.querySelector("[data-mark]") ? 1 : 0;
          for (const row of document.querySelectorAll("[data-row].row-current")) {
            if (!row.hasAttribute("data-travelling") && getComputedStyle(row, "::before").opacity === "1") count++;
          }
          return count;
        };
        const frames: number[] = [];
        const start = performance.now();
        const sample = () => {
          frames.push(visibleMarks());
          if (performance.now() - start < 1200) requestAnimationFrame(sample);
        };
        requestAnimationFrame(sample);
        (window as unknown as { frames: number[] }).frames = frames;
      });
      await page
        .locator("nav [data-row] a", { hasText: /^Ortodoxa/ })
        .first()
        .click();
      await page.waitForTimeout(1300);
      const frames = await page.evaluate(() => (window as unknown as { frames: number[] }).frames);
      expect(frames.length).toBeGreaterThan(30);
      expect(frames.filter((count) => count !== 1)).toEqual([]);
    });

    test("the current tree row carries only the short ink dash", async ({ page }) => {
      await page.goto(tradition);
      const row = page.locator("[data-row].row-current");
      const style = await row.evaluate((element) => {
        const dash = getComputedStyle(element, "::before");
        return {
          width: dash.width,
          height: dash.height,
          dash: dash.backgroundColor,
          fill: getComputedStyle(element).backgroundColor,
          shadow: getComputedStyle(element).boxShadow,
        };
      });
      expect(style.width).toBe("2px");
      expect(style.height).toBe("14px");
      expect(style.dash).toBe(await probe(page, "backgroundColor", "--color-ink"));
      expect(style.fill).toBe("rgba(0, 0, 0, 0)");
      expect(style.shadow).toBe("none");
    });
  });
}

test.describe("menus", () => {
  test.use({ colorScheme: "light", viewport: { width: 1440, height: 900 } });

  const sliders = [
    {
      name: "the Aa menu's alignment",
      open: 'button[aria-haspopup="dialog"]:has-text("Aa")',
      group: '[role="group"]:has(button:has-text("Justificada"))',
      option: "Justificada",
    },
    {
      name: "the second translation's «how to read it»",
      open: "button[aria-pressed][aria-haspopup]",
      group: '[role="group"]:has(button:has-text("Debajo"))',
      option: "Debajo",
    },
  ];

  for (const slider of sliders) {
    test(`${slider.name} has one pad that slides to the chosen option and never disappears`, async ({ page }) => {
      await page.goto("/es/biblia/juan/6");
      await page.waitForTimeout(800);
      await page.locator(slider.open).first().click();
      const group = page.locator(slider.group).first();
      const pad = group.locator("[data-slide-indicator]");
      await expect(pad).toHaveCount(1);
      await expect.poll(() => pad.evaluate((element) => element.getBoundingClientRect().width)).toBeGreaterThan(0);
      await pad.evaluate((element) => {
        const xs: number[] = [];
        const start = performance.now();
        const sample = () => {
          xs.push(element.isConnected ? Math.round(element.getBoundingClientRect().x) : -1);
          if (performance.now() - start < 700) requestAnimationFrame(sample);
        };
        requestAnimationFrame(sample);
        (window as unknown as { xs: number[] }).xs = xs;
      });
      await group.getByRole("button", { name: slider.option }).click();
      await page.waitForTimeout(800);
      const xs = await page.evaluate(() => (window as unknown as { xs: number[] }).xs);
      const distinct = [...new Set(xs)];
      expect(distinct).not.toContain(-1);
      expect(distinct.length).toBeGreaterThan(3);
      expect(distinct).toEqual([...distinct].sort((a, b) => a - b));
      const padX = await pad.evaluate((element) => Math.round(element.getBoundingClientRect().x));
      const optionX = await group
        .getByRole("button", { name: slider.option })
        .evaluate((element) => Math.round(element.getBoundingClientRect().x));
      expect(Math.abs(padX - optionX)).toBeLessThanOrEqual(1);
    });
  }

  test("switching the theme with the Aa menu open closes it completely before the sweep starts", async ({ page }) => {
    await page.goto("/es/biblia/juan/6");
    await page.waitForTimeout(800);
    await page.locator('button[aria-haspopup="dialog"]:has-text("Aa")').first().click();
    await expect(page.locator("[data-menu-scroll]:visible").first()).toBeVisible();
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      const original = document.startViewTransition.bind(document);
      const holder = window as unknown as { atSwitch: { running: number; open: number } | null };
      holder.atSwitch = null;
      document.startViewTransition = (callback) => {
        holder.atSwitch = {
          running: document.getAnimations().filter((animation) => animation.id === "menu").length,
          open: [...document.querySelectorAll("[data-menu-scroll]")].filter(
            (element) => element.parentElement && !element.parentElement.hidden,
          ).length,
        };
        return original(callback);
      };
    });
    await page.locator("header button").last().click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    expect(await page.evaluate(() => (window as unknown as { atSwitch: unknown }).atSwitch)).toEqual({
      running: 0,
      open: 0,
    });
  });
});
