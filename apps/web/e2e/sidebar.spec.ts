import { expect, test, type Page } from "@playwright/test";
import { hasCorpus, traditionPath, trackElement } from "./helpers";

const branch = 'li[data-id="eucharist"]';
const twisty = `${branch} > [data-row] [data-twisty]`;
const list = `${branch} > ul`;

test("the sidebar is sticky, marks the current page and opens its ancestors", async ({ page }) => {
  await page.goto(traditionPath);
  const aside = page.locator("aside");
  await expect(aside).toHaveCSS("position", "sticky");
  await expect(aside.locator("[aria-current=page]")).toHaveText("Católica");
  await expect(page.locator(twisty)).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(list)).toBeVisible();
  await expect(page.locator("aside nav")).toHaveAttribute("data-lenis-prevent", "true");
});

test("«Despliegue»: close and open animate and end in a consistent state", async ({ page }) => {
  await page.goto(traditionPath);
  const closing = trackElement(page, list, 450);
  await page.locator(twisty).click();
  const frames = await closing;
  expect(frames.some((frame) => frame.height > 0 && frame.height < Math.max(...frames.map((f) => f.height)))).toBe(
    true,
  );
  await expect(page.locator(list)).toBeHidden();
  await expect(page.locator(twisty)).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator(twisty)).toHaveAttribute("aria-label", "Expandir La Eucaristía");
  await page.locator(twisty).click();
  await expect(page.locator(list)).toBeVisible();
  await expect(page.locator(list)).toHaveAttribute("data-open", "true");
  await expect.poll(() => page.locator(list).evaluate((element) => (element as HTMLElement).style.overflow)).toBe("");
});

test("21 quick toggles leave the branch open and every state in agreement", async ({ page }) => {
  await page.goto(traditionPath);
  for (let index = 0; index < 21; index += 1) {
    await page.locator(twisty).click();
    await page.waitForTimeout(index % 3 === 0 ? 10 : 40);
  }
  await page.waitForTimeout(500);
  await expect(page.locator(twisty)).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator(list)).toBeHidden();
  expect(await page.locator(list).evaluate((element) => element.getAnimations({ subtree: true }).length)).toBe(0);
});

test("a parent without a page of its own toggles from its label", async ({ page }) => {
  await page.goto(traditionPath);
  const testament = 'li[data-id="bible/ot"]';
  await expect(page.locator(`${testament} > ul`)).toBeHidden();
  await page.locator(`${testament} > [data-row] [data-label-toggle]`).click();
  await expect(page.locator(`${testament} > ul`)).toBeVisible();
});

test("«Contraer todo menos dónde estoy» keeps the ancestors of the current page", async ({ page }) => {
  await page.goto(traditionPath);
  await page.locator("[data-collapse-all]").click();
  await page.waitForTimeout(400);
  await expect(page.locator(list)).toBeVisible();
});

const baptismPath = "/es/doctrinas/bautismo";
const baptismCatholic = 'li[data-id="baptism/catholic"]';
const baptismCatholicList = `${baptismCatholic} > ul[data-branch]`;
const baptismCatholicLink = `${baptismCatholic} > [data-row] a`;
const baptismCatholicTwisty = `${baptismCatholic} > [data-row] [data-twisty]`;
const baptismTwisty = 'li[data-id="baptism"] > [data-row] [data-twisty]';

async function openBaptism(page: Page) {
  await page.locator(baptismTwisty).click();
  await expect(page.locator(baptismCatholicLink)).toBeVisible();
  await page.waitForTimeout(300);
}

test("pressing the link of a row with children navigates and unfolds it with «Despliegue»; pressing it again on its own page toggles it", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(baptismPath);
  await openBaptism(page);
  await expect(page.locator(baptismCatholicList)).toBeHidden();
  await expect(page.locator(baptismCatholicTwisty)).toHaveAttribute("aria-expanded", "false");
  await page.evaluate((selector) => {
    const target = document.querySelector(selector) as HTMLElement;
    const seen: number[] = [];
    (window as unknown as { seenTreeAnimations: number[] }).seenTreeAnimations = seen;
    const sample = () => {
      for (const animation of target.getAnimations({ subtree: true })) {
        if (animation.id === "tree") seen.push(Number((animation.effect as KeyframeEffect).getTiming().duration));
      }
      requestAnimationFrame(sample);
    };
    sample();
  }, baptismCatholicList);
  await page.locator(baptismCatholicLink).click();
  await page.waitForTimeout(400);
  const ran = await page.evaluate(() => (window as unknown as { seenTreeAnimations: number[] }).seenTreeAnimations);
  expect(ran).toContain(220);
  await expect(page).toHaveURL(/\/es\/doctrinas\/bautismo\/catolica$/);
  await expect(page.locator(baptismCatholicList)).toBeVisible();
  await expect(page.locator(baptismCatholicList)).toHaveAttribute("data-open", "true");
  await expect(page.locator(baptismCatholicTwisty)).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(baptismCatholicTwisty)).toHaveAttribute("aria-label", "Contraer Católica");
  await expect(page.locator("aside nav [aria-current=page]")).toHaveText("Católica");
  await page.waitForTimeout(400);
  expect(
    await page.locator(baptismCatholicList).evaluate((element) => element.getAnimations({ subtree: true }).length),
  ).toBe(0);
  await page.locator(baptismCatholicLink).click();
  await page.waitForTimeout(400);
  await expect(page).toHaveURL(/\/es\/doctrinas\/bautismo\/catolica$/);
  await expect(page.locator(baptismCatholicList)).toBeHidden();
  await expect(page.locator(baptismCatholicTwisty)).toHaveAttribute("aria-expanded", "false");
  await page.locator(baptismCatholicLink).click();
  await page.waitForTimeout(400);
  await expect(page.locator(baptismCatholicList)).toBeVisible();
  await expect(page.locator(baptismCatholicTwisty)).toHaveAttribute("aria-expanded", "true");
  await page.locator(baptismCatholicTwisty).click();
  await expect(page.locator(baptismCatholicList)).toBeHidden();
  await page.locator(baptismCatholicTwisty).click();
  await expect(page.locator(baptismCatholicList)).toBeVisible();
});

test("Enter on the link of a row with children also unfolds it", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(baptismPath);
  await openBaptism(page);
  await page.locator(baptismCatholicLink).focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/es\/doctrinas\/bautismo\/catolica$/);
  await expect(page.locator(baptismCatholicList)).toBeVisible();
  await expect(page.locator(baptismCatholicList)).toHaveAttribute("data-open", "true");
});

test("a modified click does not unfold the row", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(baptismPath);
  await openBaptism(page);
  await page.locator(baptismCatholicLink).click({ modifiers: ["Shift"] });
  await expect(page.locator(baptismCatholicList)).toBeHidden();
});

test.describe("drawer", () => {
  test.use({ viewport: { width: 390, height: 780 } });

  test("a link with children closes the drawer and finds its branch open the next time", async ({ page }) => {
    await page.goto(baptismPath);
    const menu = page.locator("header button[aria-controls]");
    await menu.click();
    await expect(page.locator("aside")).toHaveAttribute("data-open", "true");
    await openBaptism(page);
    await page.locator(baptismCatholicLink).click();
    await expect(page).toHaveURL(/\/es\/doctrinas\/bautismo\/catolica$/);
    await expect(page.locator("aside")).not.toHaveAttribute("data-open", "true");
    await menu.click();
    await expect(page.locator("aside")).toHaveAttribute("data-open", "true");
    await expect(page.locator(baptismCatholicList)).toBeVisible();
    await expect(page.locator(baptismCatholicTwisty)).toHaveAttribute("aria-expanded", "true");
  });
});

test.describe("drawer", () => {
  test.use({ viewport: { width: 390, height: 780 } });

  test("closed, it cannot be reached with the keyboard", async ({ page }) => {
    await page.goto(traditionPath);
    await expect(page.locator("aside")).toHaveCSS("visibility", "hidden");
    await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
    for (let index = 0; index < 8; index += 1) {
      await page.keyboard.press("Tab");
      expect(await page.evaluate(() => Boolean(document.activeElement?.closest("aside")))).toBe(false);
    }
  });

  test("it slides with a translate transition, not at once", async ({ page }) => {
    await page.goto(traditionPath);
    const transitions = await page.evaluate(
      () =>
        new Promise<string[]>((resolve) => {
          (document.querySelector("header button[aria-controls]") as HTMLElement).click();
          requestAnimationFrame(() =>
            requestAnimationFrame(() =>
              resolve(
                document
                  .querySelector("aside")!
                  .getAnimations()
                  .map((animation) => (animation as CSSTransition).transitionProperty),
              ),
            ),
          );
        }),
    );
    expect(transitions).toContain("translate");
    await page.waitForTimeout(350);
    expect((await trackElement(page, "aside", 50)).at(-1)?.left).toBe(0);
  });

  test("Esc, the scrim and a link close it; focus goes back to the menu button", async ({ page }) => {
    await page.goto(traditionPath);
    const menu = page.locator("header button[aria-controls]");
    await menu.click();
    await expect(page.locator("aside")).toHaveAttribute("data-open", "true");
    await expect(menu).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(page.locator("aside")).not.toHaveAttribute("data-open", "true");
    await expect(menu).toBeFocused();
    await menu.click();
    await page.mouse.click(370, 400);
    await expect(page.locator("aside")).not.toHaveAttribute("data-open", "true");
  });

  test("Tab stays inside the open drawer", async ({ page, browserName }) => {
    test.skip(browserName === "webkit", "WebKit does not Tab to buttons by default");
    await page.goto(traditionPath);
    await page.locator("header button[aria-controls]").click();
    for (let index = 0; index < 8; index += 1) {
      await page.keyboard.press("Tab");
      expect(await page.evaluate(() => Boolean(document.activeElement?.closest("aside")))).toBe(true);
    }
  });

  test("growing to desktop closes it and shrinking back finds it closed", async ({ page }) => {
    await page.goto(traditionPath);
    await page.locator("header button[aria-controls]").click();
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.locator("aside")).toHaveCSS("position", "sticky");
    await page.setViewportSize({ width: 390, height: 780 });
    await expect(page.locator("aside")).not.toHaveAttribute("data-open", "true");
  });
});

test("four groups with the counts of history and only the published pages, their Objeciones and objections as links", async ({
  page,
}) => {
  test.skip(!hasCorpus, "needs the local corpus");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  await expect(page.locator("aside nav p:not(li p)")).toHaveText(["Doctrinas", "Biblia", "Historia", "Consulta"]);
  const counts = await page
    .locator("aside nav li[data-id^='history/'] > [data-row] span.tabular-nums")
    .allTextContents();
  expect(counts).toEqual(["56", "41", "18", "10", "20"]);
  await expect(page.locator('aside nav a:not([href*="/obras/"])')).toHaveCount(234);
  await expect(page.locator("aside nav a[aria-current=page]")).toHaveCount(1);
});

test("the branches hold the real entries: 56 Fathers, 27 New Testament books, 7 objections under Católica", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const children = (id: string) => page.locator(`aside nav li[data-id="${id}"] > ul > li`);
  await expect(children("history/fathers")).toHaveCount(56);
  await expect(children("bible/nt")).toHaveCount(27);
  await expect(children("bible/ot")).toHaveCount(39);
  await expect(children("bible/deutero")).toHaveCount(7);
  await expect(children("eucharist/catholic/objections")).toHaveCount(10);
  await expect(page.locator('aside nav li[data-id="eucharist/catholic/objections"] > ul a')).toHaveCount(7);
  await expect(page.locator('aside nav li[data-id="eucharist/pentecostal"]')).toHaveAttribute("data-soon", "");
  await expect(children("eucharist/pentecostal")).toHaveCount(0);
});

test("entries without a page are pressable and do nothing; branches still open", async ({ page }) => {
  test.skip(!hasCorpus, "needs the local corpus");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(traditionPath);
  const url = page.url();
  const sources = page.locator('aside nav li[data-id="reference/sources"] a');
  await expect(sources).toHaveAttribute("href", "/es/fuentes");
  expect(page.url()).toBe(url);
  const nt = page.locator('aside nav li[data-id="bible/nt"]');
  await nt.locator("> [data-row] button").first().click();
  await expect(nt.locator("> ul")).toBeVisible();
  await page.locator('aside nav li[data-id="book/Matt"] > [data-row] button').first().click();
  await expect(page.locator('aside nav li[data-id="book/Matt"] a[data-chapter="1"]')).toHaveAttribute(
    "href",
    "/es/biblia/mateo/1",
  );
});

test("switching language keeps the tree as it was: the branches opened or closed by hand and the scroll", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/padres/origen");
  const nav = page.locator("#site-sidebar nav");
  const twisty = (label: string) => nav.locator(`li[data-label="${label}"] > [data-row] [data-twisty]`);
  const branchOf = (id: string) => nav.locator(`li[data-id="${id}"] > ul[data-branch]`);
  const idOf = (label: string) => nav.locator(`li[data-label="${label}"]`).first().getAttribute("data-id");
  const testament = (await idOf("Antiguo Testamento"))!;
  const fathers = (await idOf("Padres"))!;
  await twisty("Nuevo Testamento").click();
  await twisty("Juan").click();
  const john = (await idOf("Juan"))!;
  await expect(branchOf(john).locator("a, button").first()).toBeVisible();
  await twisty("Antiguo Testamento").click();
  await twisty("Padres").click();
  await expect(branchOf(testament)).toHaveAttribute("data-open", "true");
  await expect(branchOf(fathers)).toHaveAttribute("data-open", "false");
  await nav.evaluate((element) => {
    element.scrollTop = 140;
  });
  const before = await nav.evaluate((element) => element.scrollTop);
  await page.getByRole("link", { name: "EN", exact: true }).click();
  await expect(page).toHaveURL("/en/history/fathers/origen");
  await expect(branchOf(testament)).toHaveAttribute("data-open", "true");
  await expect(branchOf(fathers)).toHaveAttribute("data-open", "false");
  await expect(branchOf(john)).toHaveAttribute("data-open", "true");
  await expect(branchOf(john).locator("a, button").first()).toBeVisible();
  expect(Math.abs((await nav.evaluate((element) => element.scrollTop)) - before)).toBeLessThanOrEqual(1);
  await expect(page.locator("html")).not.toHaveAttribute("data-tree-carry", /.*/);
});

const historySections = [
  { id: "history/councils", count: 41, es: "/es/historia/concilios", en: "/en/history/councils" },
  { id: "history/heresies", count: 18, es: "/es/historia/herejias", en: "/en/history/currents" },
  { id: "history/divisions", count: 10, es: "/es/historia/divisiones", en: "/en/history/divisions" },
  { id: "history/reformation", count: 20, es: "/es/historia/reforma", en: "/en/history/reformation" },
] as const;

for (const lang of ["es", "en"] as const) {
  test(`the four history sections are branches with one link per entity (${lang})`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(lang === "es" ? "/es/historia/padres" : "/en/history/fathers");
    for (const section of historySections) {
      const item = page.locator(`aside nav li[data-id="${section.id}"]`);
      await expect(item.locator("> ul > li")).toHaveCount(section.count);
      await expect(item.locator("> ul > li > [data-row] a")).toHaveCount(section.count);
      await expect(item.locator("> [data-row] span.tabular-nums")).toHaveText(String(section.count));
      await expect(item.locator("> [data-row] a")).toHaveAttribute("href", section[lang]);
      await expect(item.locator("> [data-row] [data-twisty]")).toHaveAttribute("aria-expanded", "false");
      await expect(item.locator("> ul")).toBeHidden();
    }
  });
}

test("the children keep the order of the index page", async ({ page }) => {
  await page.goto("/es/historia/concilios");
  const inIndex = await page
    .locator("main ul li:not([data-id^=group-]) a")
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
  const inTree = await page
    .locator('aside nav li[data-id="history/councils"] > ul > li > [data-row] a')
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
  expect(inTree).toEqual(inIndex);
});

test("an entity page opens its section, marks its row and the trail; the breadcrumb agrees", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/concilios/nicaea-1");
  const councils = page.locator('aside nav li[data-id="history/councils"]');
  await expect(councils.locator("> ul")).toBeVisible();
  await expect(councils.locator("> [data-row] [data-twisty]")).toHaveAttribute("aria-expanded", "true");
  await expect(councils.locator("> [data-row] a")).toHaveAttribute("data-trail", "true");
  const current = page.locator("aside nav a[aria-current=page]");
  await expect(current).toHaveCount(1);
  await expect(current).toHaveAttribute("href", "/es/historia/concilios/nicaea-1");
  await expect(page.locator('aside nav li[data-id="history/heresies"] > ul')).toBeHidden();
  await expect(page.locator('main nav a[href="/es/historia/concilios"]').first()).toHaveText("Concilios");
  await expect(councils.locator("> [data-row] a")).toHaveAttribute("href", "/es/historia/concilios");
  const box = await current.boundingBox();
  const nav = await page.locator("aside nav").boundingBox();
  expect(box && nav && box.y >= nav.y && box.y + box.height <= nav.y + nav.height).toBe(true);
  const place = await page.locator("aside nav [data-row].row-current").evaluate((row) => {
    const scroller = row.closest("nav")!;
    return (row as HTMLElement).offsetTop - scroller.scrollTop - scroller.clientHeight * 0.35;
  });
  expect(Math.abs(place)).toBeLessThanOrEqual(2);
});

test("the biggest section opens with «Despliegue»: its height grows and settles, no animation is left", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/padres");
  const councils = 'li[data-id="history/councils"] > ul';
  const opening = trackElement(page, councils, 450);
  await page.locator('li[data-id="history/councils"] > [data-row] [data-twisty]').click();
  const frames = await opening;
  const heights = frames.map((frame) => frame.height);
  expect(heights.some((height) => height > 0 && height < Math.max(...heights))).toBe(true);
  await expect(page.locator(councils)).toHaveAttribute("data-open", "true");
  await page.waitForTimeout(500);
  expect(await page.locator(councils).evaluate((element) => element.getAnimations({ subtree: true }).length)).toBe(0);
  await page.locator('li[data-id="history/councils"] > [data-row] [data-twisty]').click();
  await expect(page.locator(councils)).toBeHidden();
});

test("pressing a section link unfolds its children; a child link navigates and takes the mark", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/padres");
  const heresies = page.locator('aside nav li[data-id="history/heresies"]');
  await heresies.locator("> [data-row] a").click();
  await expect(page).toHaveURL("/es/historia/herejias");
  await expect(heresies.locator("> ul")).toBeVisible();
  await expect(heresies.locator("> ul")).toHaveAttribute("data-open", "true");
  await heresies.locator("> [data-row] a").click();
  await page.waitForTimeout(400);
  await expect(heresies.locator("> ul")).toBeHidden();
  await heresies.locator("> [data-row] a").click();
  await page.waitForTimeout(400);
  await expect(heresies.locator("> ul")).toBeVisible();
  await heresies.locator("> ul > li").nth(2).locator("> [data-row] a").click();
  await expect(page).toHaveURL(/\/es\/historia\/corrientes\/.+/);
  await expect(page.locator("aside nav a[aria-current=page]")).toHaveCount(1);
  await expect(heresies.locator("> ul")).toHaveAttribute("data-open", "true");
  await expect(heresies.locator("> ul > li").nth(2).locator("> [data-row]")).toHaveClass(/row-current/);
});

test("«Contraer todo menos dónde estoy» keeps the open section of an entity page and closes the others", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/concilios/nicaea-1");
  await page.locator('aside nav li[data-id="history/divisions"] > [data-row] [data-twisty]').click();
  await expect(page.locator('aside nav li[data-id="history/divisions"] > ul')).toBeVisible();
  await page.locator("[data-collapse-all]").click();
  await page.waitForTimeout(500);
  await expect(page.locator('aside nav li[data-id="history/councils"] > ul')).toBeVisible();
  await expect(page.locator('aside nav li[data-id="history/divisions"] > ul')).toBeHidden();
});

test("switching language on an entity page keeps its section open and its row marked", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/es/historia/reforma");
  await page.locator('aside nav li[data-id="history/reformation"] > [data-row] [data-twisty]').click();
  await page.waitForTimeout(400);
  await page.locator('aside nav li[data-id="history/reformation"] > ul > li a').first().click();
  await expect(page).toHaveURL(/\/es\/historia\/reforma\/.+/);
  const href = new URL(page.url()).pathname.split("/").pop();
  await page.getByRole("link", { name: "EN", exact: true }).click();
  await expect(page).toHaveURL(`/en/history/reformation/${href}`);
  const section = page.locator('aside nav li[data-id="history/reformation"]');
  await expect(section.locator("> ul")).toHaveAttribute("data-open", "true");
  await expect(page.locator("aside nav a[aria-current=page]")).toHaveAttribute(
    "href",
    `/en/history/reformation/${href}`,
  );
});

test.describe("drawer with a history section", () => {
  test.use({ viewport: { width: 390, height: 780 } });

  test("opening it puts the current row of a long branch at 35 % of the drawer", async ({ page }) => {
    await page.goto("/es/historia/concilios/nicaea-1");
    await page.locator("header button[aria-controls]").click();
    await expect(page.locator("aside")).toHaveAttribute("data-open", "true");
    await page.waitForTimeout(500);
    const place = await page.locator("aside nav [data-row].row-current").evaluate((row) => {
      const scroller = row.closest("nav")!;
      return (row as HTMLElement).offsetTop - scroller.scrollTop - scroller.clientHeight * 0.35;
    });
    expect(Math.abs(place)).toBeLessThanOrEqual(2);
  });

  test("a child link closes the drawer; reopened, the section is open and the row marked", async ({ page }) => {
    await page.goto("/es/historia/padres");
    const menu = page.locator("header button[aria-controls]");
    await menu.click();
    await expect(page.locator("aside")).toHaveAttribute("data-open", "true");
    const divisions = page.locator('aside nav li[data-id="history/divisions"]');
    await divisions.locator("> [data-row] [data-twisty]").click();
    await expect(divisions.locator("> ul > li").first()).toBeVisible();
    await page.waitForTimeout(300);
    await divisions.locator("> ul > li").first().locator("> [data-row] a").click();
    await expect(page).toHaveURL(/\/es\/historia\/divisiones\/.+/);
    await expect(page.locator("aside")).not.toHaveAttribute("data-open", "true");
    await menu.click();
    await expect(page.locator("aside")).toHaveAttribute("data-open", "true");
    await expect(divisions.locator("> ul")).toBeVisible();
    await expect(divisions.locator("> ul > li").first().locator("> [data-row]")).toHaveClass(/row-current/);
  });
});
