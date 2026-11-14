import { spawnSync } from "node:child_process";
import { join } from "node:path";
import {
  bezierOf,
  camel,
  evaluateLength,
  motionFiles,
  outDir,
  lineHeightStep,
  parseColor,
  pxOf,
  repoRoot,
  readText,
  sameColor,
  skippedVariables,
  Unresolvable,
  viewport,
  webSrc,
} from "./shared.mjs";

if (!process.features.typescript && !process.execArgv.includes("--experimental-strip-types")) {
  const result = spawnSync(process.execPath, ["--experimental-strip-types", "--no-warnings", import.meta.filename], {
    stdio: "inherit",
  });
  process.exit(result.status ?? 1);
}

const tokens = await import(`${join(outDir, "tokens.ts")}?${Date.now()}`);

const css = readText(join(webSrc, "app/globals.css"));
const lines = css.split("\n");
const failures = [];
const warnings = [];
const fail = (message) => failures.push(message);
const warn = (message) => warnings.push(message);

function blockLines(headerPattern, occurrence = 0) {
  const starts = lines.flatMap((line, index) => (headerPattern.test(line) ? [index] : []));
  const start = starts[occurrence];
  if (start === undefined) throw new Error(`block ${headerPattern} not found`);
  let end = start + 1;
  while (end < lines.length && !/^\S/.test(lines[end])) end += 1;
  return lines.slice(start + 1, end);
}
const lineVars = (blockText) => {
  const found = new Map();
  for (const line of blockText) {
    const match = /^\s+(--[a-z0-9*-]+):\s*(.*);\s*$/.exec(line);
    if (match) found.set(match[1], match[2]);
  }
  return found;
};

const theme = lineVars(blockLines(/^@theme \{/));
const themeInline = lineVars(blockLines(/^@theme inline \{/));
const root = lineVars(blockLines(/^:root \{/));
const dark = lineVars(blockLines(/^\[data-theme="dark"\] \{/));
const compactStart = lines.findIndex(
  (line, index) => line === "@media (width < 40rem) {" && lines[index + 1] === "  :root {",
);
const compact = lineVars(lines.slice(compactStart + 2, compactStart + 8));
const variables = new Map([...theme, ...root]);
const compactVariables = new Map([...variables, ...compact]);

const skipped = new Map(skippedVariables.map((item) => [item.name, item.reason]));
const emitted = new Set();
const claim = (name) => {
  emitted.add(name);
};
const eq = (name, actual, expected) => {
  if (JSON.stringify(actual) !== JSON.stringify(expected))
    fail(`${name}: tokens.ts has ${JSON.stringify(actual)}, CSS gives ${JSON.stringify(expected)}`);
};

for (const name of skipped.keys()) {
  if (![...theme.keys(), ...themeInline.keys(), ...root.keys(), ...dark.keys()].includes(name))
    fail(`skipped variable ${name} no longer exists in the CSS (stale skip entry)`);
}

const colorKey = (name) => camel(name.slice(8));
const noDark = [];
for (const [name, value] of theme) {
  if (!name.startsWith("--color-") || name.includes("*")) continue;
  const key = colorKey(name);
  if (!(key in tokens.colors.light)) {
    fail(`${name}: missing in colors.light`);
    continue;
  }
  if (!sameColor(tokens.colors.light[key], value)) fail(`${name}: light ${tokens.colors.light[key]} != ${value}`);
  claim(name);
  if (dark.has(name)) {
    if (!sameColor(tokens.colors.dark[key], dark.get(name)))
      fail(`${name}: dark ${tokens.colors.dark[key]} != ${dark.get(name)}`);
  } else {
    noDark.push(key);
    if (!sameColor(tokens.colors.dark[key], value)) fail(`${name}: no dark override, dark must equal light`);
  }
}
eq("colorsWithoutDarkOverride", [...tokens.colorsWithoutDarkOverride].sort(), noDark.sort());
for (const [name] of dark) {
  if (name.startsWith("--color-")) {
    if (!theme.has(name)) fail(`${name}: dark override of a colour that @theme does not define`);
    claim(name);
  }
}
for (const key of Object.keys(tokens.colors.light)) {
  if (!(key in tokens.colors.dark)) fail(`colors.dark.${key} missing`);
  for (const mode of ["light", "dark"])
    if (!parseColor(tokens.colors[mode][key])) fail(`colors.${mode}.${key} is not a parseable colour`);
}

const roleVars = new Map();
for (const [name, value] of theme) {
  const match = /^--text-(.+?)(?:--(line-height|letter-spacing))?$/.exec(name);
  if (!match) continue;
  const entry = roleVars.get(match[1]) ?? {};
  roleVars.set(match[1], entry);
  if (!match[2]) entry.size = pxOf(value);
  else if (match[2] === "line-height") entry.ratio = Number(value);
  else entry.tracking = Number(value.replace("em", ""));
  claim(name);
}
for (const [role, data] of roleVars) {
  const isTwin = role.endsWith("-mobile") && roleVars.has(role.slice(0, -7));
  const key = camel(isTwin ? role.slice(0, -7) : role);
  const actual = isTwin ? tokens.typeCompact[key] : tokens.type[key];
  if (!actual) {
    fail(`--text-${role}: missing in ${isTwin ? "typeCompact" : "type"}`);
    continue;
  }
  eq(`--text-${role} fontSize`, actual.fontSize, data.size);
  if (data.ratio === undefined) {
    if (actual.lineHeight !== undefined) fail(`--text-${role}: lineHeight emitted but CSS has none`);
  } else {
    if (actual.lineHeight === undefined) fail(`--text-${role}: lineHeight missing`);
    else if (Math.abs(actual.lineHeight - data.size * data.ratio) > lineHeightStep / 2 + 1e-9)
      fail(
        `--text-${role}: lineHeight ${actual.lineHeight} is not ${data.size} x ${data.ratio} within ${lineHeightStep / 2}`,
      );
  }
  if (data.tracking === undefined) {
    if (actual.letterSpacing !== undefined) fail(`--text-${role}: letterSpacing emitted but CSS has none`);
  } else if (Math.abs((actual.letterSpacing ?? NaN) - data.tracking * data.size) > 0.001)
    fail(`--text-${role}: letterSpacing ${actual.letterSpacing} != ${data.tracking} x ${data.size}`);
  if (!(actual.fontFamily in tokens.fontFamilies))
    fail(`--text-${role}: fontFamily ${actual.fontFamily} is not in fontFamilies`);
  const faceKey = `${actual.fontFamily}-${actual.fontWeight}${actual.fontStyle === "italic" ? "-italic" : ""}`;
  if (!(faceKey in tokens.fontFaces)) fail(`--text-${role}: face ${faceKey} missing in fontFaces`);
}
const twinCount = [...roleVars.keys()].filter(
  (role) => role.endsWith("-mobile") && roleVars.has(role.slice(0, -7)),
).length;
eq("type role count", Object.keys(tokens.type).length, roleVars.size - twinCount);

for (const [name, value] of theme) {
  if (name.startsWith("--leading-")) {
    eq(name, tokens.leading[camel(name.slice(10))], value === "normal" ? null : Number(value));
    claim(name);
  } else if (name.startsWith("--radius-")) {
    eq(name, tokens.radii[name.slice(9)], pxOf(value));
    claim(name);
  } else if (name.startsWith("--spacing-") || name.startsWith("--container-")) {
    const namespace = name.startsWith("--spacing-") ? "spacing" : "containers";
    const key = camel(name.slice(name.startsWith("--spacing-") ? 10 : 12));
    const px = pxOf(value);
    if (px !== null) eq(name, tokens[namespace][key], px);
    else {
      const entry = tokens.cssOnly[camel(name.slice(2))];
      if (!entry) fail(`${name}: css-only value missing in cssOnly`);
      else {
        eq(`${name} css`, entry.css, value);
        let expected = null;
        try {
          expected = Math.round(evaluateLength(value, compactVariables, viewport) * 100) / 100;
        } catch (error) {
          if (!(error instanceof Unresolvable)) throw error;
        }
        eq(`${name} at390x844`, entry.at390x844, expected);
        if (expected === null && !entry.reason) fail(`${name}: unresolved at 390 without a reason`);
      }
    }
    claim(name);
  } else if (name.startsWith("--ease-")) {
    eq(name, tokens.easing[camel(name.slice(7))], bezierOf(value));
    claim(name);
  } else if (name.startsWith("--shadow-")) {
    const entry = tokens.shadows[camel(name.slice(9))];
    if (!entry) fail(`${name}: missing in shadows`);
    else checkShadow(name, value, entry);
    claim(name);
  }
}
for (const [name, value] of compact) {
  if (!name.startsWith("--spacing-")) continue;
  eq(`${name} (compact)`, tokens.spacingCompact[camel(name.slice(10))], pxOf(value));
  if (!theme.has(name)) fail(`${name}: compact override of a variable @theme does not define`);
}
for (const [name, value] of themeInline) {
  if (!name.startsWith("--font-")) continue;
  const entry = tokens.fontFamilies[name.slice(7)];
  if (!entry) fail(`${name}: missing in fontFamilies`);
  else eq(`${name} web variable`, entry.web, /var\((--font-[a-z-]+)\)/.exec(value)[1]);
  claim(name);
}
for (const [name, value] of root) {
  if (skipped.has(name)) continue;
  if (name === "--texture-opacity") eq(name, tokens.texture.light.opacity, Number(value));
  else if (name === "--wall-ink-opacity") eq(name, tokens.texture.light.inkOpacity, Number(value));
  else if (name === "--wall-ink-blend") eq(name, tokens.texture.light.inkBlend, value);
  else if (name === "--reader-weight") eq(name, tokens.readerWeightDefault, Number(value));
  else {
    fail(`${name}: in :root and neither emitted nor skipped`);
    continue;
  }
  claim(name);
}
for (const [name, value] of dark) {
  if (name.startsWith("--color-") || skipped.has(name)) continue;
  if (name === "--texture-opacity") eq(name, tokens.texture.dark.opacity, Number(value));
  else if (name === "--wall-ink-opacity") eq(name, tokens.texture.dark.inkOpacity, Number(value));
  else if (name === "--wall-ink-blend") eq(name, tokens.texture.dark.inkBlend, value);
  else {
    fail(`${name}: in the dark block and neither emitted nor skipped`);
    continue;
  }
  claim(name);
}
for (const name of [...theme.keys(), ...themeInline.keys(), ...root.keys(), ...dark.keys()]) {
  if (name.includes("*") || emitted.has(name) || skipped.has(name)) continue;
  fail(`${name}: neither emitted nor listed as skipped`);
}

function layersOf(text) {
  const parts = [];
  let depth = 0;
  let begin = 0;
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === "(") depth += 1;
    else if (text[i] === ")") depth -= 1;
    else if (text[i] === "," && depth === 0) {
      parts.push(text.slice(begin, i).trim());
      begin = i + 1;
    }
  }
  parts.push(text.slice(begin).trim());
  return parts;
}
function checkShadow(name, value, entry) {
  for (const mode of ["light", "dark"]) {
    const map = mode === "dark" ? new Map([...theme, ...dark]) : theme;
    const expected = layersOf(value).map((layer) =>
      layer.replace(/var\((--color-[a-z0-9-]+)\)/g, (_, variable) => map.get(variable)),
    );
    const emittedLayers = layersOf(entry.boxShadow[mode]);
    if (expected.length !== emittedLayers.length) {
      fail(`${name} (${mode}): ${expected.length} layers in CSS, ${emittedLayers.length} emitted`);
      continue;
    }
    expected.forEach((layer, index) => {
      const split = (text) => {
        const inset = /^inset\s/.test(text);
        const body = text.replace(/^inset\s+/, "");
        const color = /(rgba?\([^)]*\)|#[0-9a-fA-F]{6})\s*$/.exec(body);
        const numbers = body
          .slice(0, color.index)
          .trim()
          .split(/\s+/)
          .map((item) => parseFloat(item));
        while (numbers.length < 4) numbers.push(0);
        return { inset, numbers, color: color[1] };
      };
      const a = split(layer);
      const b = split(emittedLayers[index]);
      if (
        a.inset !== b.inset ||
        JSON.stringify(a.numbers) !== JSON.stringify(b.numbers) ||
        !sameColor(a.color, b.color)
      )
        fail(`${name} (${mode}) layer ${index}: ${emittedLayers[index]} != ${layer}`);
    });
  }
}

const motionText = new Map(motionFiles.map((file) => [file, readText(join(webSrc, file))]));
const motionHaystack = [...motionText.values()].join("\n");
for (const [group, values] of Object.entries(tokens.motion)) {
  for (const [key, value] of Object.entries(values)) {
    const patterns = [
      new RegExp(`\\b${key}:\\s*${value}\\b`),
      new RegExp(`=\\s*${value}(?:;|\\b)`),
      new RegExp(`\\b${value}\\b`),
    ];
    if (!patterns.some((pattern) => pattern.test(motionHaystack)))
      fail(`motion.${group}.${key} = ${value} not found in the motion files`);
  }
}
for (const [name, tuple] of Object.entries(tokens.easing)) {
  const text = `cubic-bezier(${tuple.join(", ")})`;
  if (
    !css.includes(text) &&
    !motionHaystack.includes(text) &&
    !readText(join(webSrc, "features/reader/panel-sections.tsx")).includes(text)
  )
    fail(`easing.${name} ${text} not found in the CSS or motion files`);
}

const scale = new Set(tokens.durations.scale);
for (const [group, values] of Object.entries(tokens.motion)) {
  for (const [key, value] of Object.entries(values)) {
    if (/^(stepMs|staggerMs)$/.test(key)) {
      if (!Object.values(tokens.staggers).includes(value))
        warn(`motion.${group}.${key} = ${value} ms is not in DESIGN.md's staggers`);
      continue;
    }
    if (/^(perPxMs|maxMs)$/.test(key)) continue;
    if (/Ms$|^ms$/.test(key) && !scale.has(value) && !Object.values(tokens.durations).includes(value))
      warn(`motion.${group}.${key} = ${value} ms is not in DESIGN.md's duration scale`);
    if (/Px$/.test(key) && !Object.values(tokens.distances).includes(value))
      warn(`motion.${group}.${key} = ${value} px is not a DESIGN.md distance`);
  }
}
const stepCap = tokens.staggers.maxSteps;
for (const [group, values] of Object.entries(tokens.motion))
  if ("maxSteps" in values && values.maxSteps !== stepCap)
    warn(`motion.${group}.maxSteps ${values.maxSteps} differs from DESIGN.md cap ${stepCap}`);

const designText = readText(join(repoRoot, "docs/DESIGN.md"));
const { readDesignMotion } = await import("./sources.mjs");
const design = readDesignMotion();
if (design.z.unmapped.length) fail(`DESIGN.md z-layers without a name in zLabelKeys: ${design.z.unmapped.join(", ")}`);
eq("z", tokens.z, design.z.layers);
for (const [group, map] of [
  ["durations", tokens.durations],
  ["staggers", tokens.staggers],
  ["distances", tokens.distances],
]) {
  for (const [key, value] of Object.entries(map)) {
    const numbers = Array.isArray(value) ? value : [value];
    for (const number of numbers) {
      const text = String(number).replace(/^0\./, ".");
      if (!new RegExp(`(^|[^\\d.])${text.replace(".", "\\.")}([^\\d]|$)`).test(designText))
        fail(`${group}.${key} = ${number} does not appear in docs/DESIGN.md`);
    }
  }
}

const skippedCount = skipped.size;
console.log(
  `emitted ${emitted.size} distinct CSS variables (colours ${Object.keys(tokens.colors.light).length}, type roles ${Object.keys(tokens.type).length} + ${Object.keys(tokens.typeCompact).filter((key) => tokens.typeCompact[key] !== tokens.type[key]).length} compact twins), skipped ${skippedCount}: ${[...skipped.keys()].join(", ")}`,
);
console.log(`dark has no override for: ${tokens.colorsWithoutDarkOverride.join(", ")}`);
for (const message of warnings) console.log(`warning: ${message}`);
if (failures.length) {
  for (const message of failures) console.error(`FAIL ${message}`);
  console.error(`${failures.length} failure(s)`);
  process.exit(1);
}
console.log(
  `OK: every variable of @theme, the dark block and :root is emitted or skipped with a reason; ${warnings.length} warning(s)`,
);
