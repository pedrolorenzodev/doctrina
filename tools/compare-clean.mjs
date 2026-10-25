import { chromium } from "playwright";

const [, , ourRoute, referencePage, ...pairs] = process.argv;
if (!ourRoute || !referencePage || pairs.length === 0) {
  console.error(
    'Usage: npm run compare -- <our route> <reference page> "<name>|<reference selector>|<our selector>" ...',
  );
  console.error('Example: npm run compare -- /es/doctrinas/eucaristia/catolica s03.html "title|h1|main h1"');
  console.error(
    "Needs the build on OUR_BASE (default http://localhost:3100) and the clean site served on REFERENCE_BASE",
  );
  console.error(
    "(default http://localhost:8099: `python3 -m http.server 8099` inside docs/research/proposals/site-clean).",
  );
  process.exit(1);
}

const ourBase = process.env.OUR_BASE ?? "http://localhost:3100";
const referenceBase = process.env.REFERENCE_BASE ?? "http://localhost:8099";
const properties = [
  "fontSize",
  "lineHeight",
  "fontWeight",
  "fontStyle",
  "color",
  "backgroundColor",
  "marginTop",
  "marginBottom",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "borderTopWidth",
  "borderBottomWidth",
  "borderTopLeftRadius",
  "display",
  "fontVariationSettings",
];
const specs = pairs.map((pair) => pair.split("|"));

const browser = await chromium.launch();
for (const [width, scheme] of [
  [1440, "light"],
  [1440, "dark"],
  [390, "light"],
]) {
  const measure = async (url, selectorIndex) => {
    const page = await browser.newPage({ viewport: { width, height: 1100 }, colorScheme: scheme });
    await page.goto(url, { waitUntil: "networkidle" });
    if (scheme === "dark") await page.evaluate(() => document.documentElement.setAttribute("data-theme", "dark"));
    await page.evaluate(() => document.fonts.ready);
    const result = await page.evaluate(
      ([selectors, names, props]) =>
        names.map((name, index) => {
          const element = document.querySelector(selectors[index]);
          if (!element) return [name, null];
          const style = getComputedStyle(element);
          const box = element.getBoundingClientRect();
          const out = {};
          for (const property of props) out[property] = style[property];
          out.width = Math.round(box.width);
          out.height = Math.round(box.height);
          out.x = Math.round(box.left);
          return [name, out];
        }),
      [specs.map((spec) => spec[selectorIndex]), specs.map((spec) => spec[0]), properties],
    );
    await page.close();
    return Object.fromEntries(result);
  };
  const reference = await measure(`${referenceBase}/${referencePage}`, 1);
  const ours = await measure(`${ourBase}${ourRoute}`, 2);
  console.log(`== ${width} ${scheme}`);
  for (const name of Object.keys(reference)) {
    const a = reference[name];
    const b = ours[name];
    if (!a || !b) {
      console.log(name, "missing", a ? "" : "reference", b ? "" : "ours");
      continue;
    }
    const differences = Object.keys(a)
      .filter((property) => a[property] !== b[property])
      .map((property) => `${property}: ${a[property]} | ${b[property]}`);
    console.log(name, differences.length ? differences.join("; ") : "equal");
  }
}
await browser.close();
