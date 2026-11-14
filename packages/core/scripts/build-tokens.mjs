import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  bezierOf,
  camel,
  compactBreakpointPx,
  cssOnlyReasons,
  evaluateLength,
  lineHeightStep,
  formatColor,
  outDir,
  parseColor,
  pxOf,
  readText,
  readThemeCss,
  repoRoot,
  roleFontOverrides,
  toMap,
  Unresolvable,
} from "./shared.mjs";
import {
  inferRoleFonts,
  motionConstant,
  readDesignMotion,
  readFontSources,
  readInlineMotion,
  readMotionConstants,
} from "./sources.mjs";

const roundTo = (value, step) => Math.round(value / step) * step;
const clean = (value, digits = 3) => Number(value.toFixed(digits));

const css = readThemeCss();
const rawCss = readText(css.path);
const themeMap = toMap(css.theme);
const darkMap = toMap(css.dark);
const rootMap = toMap(css.root);
const compactMap = toMap(css.compact);
const wideVariables = new Map([...themeMap, ...rootMap]);
const compactVariables = new Map([...wideVariables, ...compactMap]);

const colors = { light: {}, dark: {} };
const colorsWithoutDarkOverride = [];
for (const [name, value] of themeMap) {
  if (!name.startsWith("--color-") || name.includes("*")) continue;
  const key = camel(name.slice(8));
  colors.light[key] = formatColor(value);
}
for (const name of themeMap.keys()) {
  if (!name.startsWith("--color-") || name.includes("*")) continue;
  const key = camel(name.slice(8));
  if (darkMap.has(name)) {
    colors.dark[key] = formatColor(darkMap.get(name));
  } else {
    colors.dark[key] = colors.light[key];
    colorsWithoutDarkOverride.push(key);
  }
}

const roles = new Map();
for (const [name, value] of themeMap) {
  const match = /^--text-(.+?)(?:--(line-height|letter-spacing))?$/.exec(name);
  if (!match) continue;
  const role = roles.get(match[1]) ?? {};
  roles.set(match[1], role);
  if (!match[2]) {
    role.size = pxOf(value);
    if (role.size === null) throw new Error(`${name} is not a px size: ${value}`);
  } else if (match[2] === "line-height") role.ratio = Number(value);
  else role.tracking = Number(value.replace("em", ""));
}

const twinOf = (role) => (role.endsWith("-mobile") && roles.has(role.slice(0, -7)) ? role.slice(0, -7) : null);
const baseRoleNames = [...roles.keys()].filter((role) => !twinOf(role));
const fontStats = inferRoleFonts([...roles.keys()]);

const modeOf = (map) => {
  let best = null;
  let bestCount = 0;
  for (const [key, count] of map) {
    if (key === "inherit" || key === "none") continue;
    if (count > bestCount) {
      best = key;
      bestCount = count;
    }
  }
  return best;
};

const readerWeightDefault = Number(rootMap.get("--reader-weight"));
const familiesWithOpsz = new Set(["head", "body"]);
const modeOfAll = (map, inheritAs) => {
  const merged = new Map();
  for (const [key, count] of map) {
    const resolved = key === "inherit" || key === "none" ? inheritAs : key;
    merged.set(resolved, (merged.get(resolved) ?? 0) + count);
  }
  let best = inheritAs;
  let bestCount = -1;
  for (const [key, count] of merged) {
    if (count > bestCount) {
      best = key;
      bestCount = count;
    }
  }
  return {
    value: best,
    share:
      bestCount /
      Math.max(
        1,
        [...merged.values()].reduce((sum, count) => sum + count, 0),
      ),
  };
};
const fontFor = (role) => {
  const own = fontStats.get(role);
  const twin = twinOf(role);
  const sibling = twin ? fontStats.get(twin) : fontStats.get(`${role}-mobile`);
  const stat = own.count > 0 ? own : (sibling ?? own);
  const explicit = [...stat.family].filter(([key]) => key !== "inherit").reduce((sum, [, count]) => sum + count, 0);
  const explicitFamily = modeOf(stat.family);
  const trusted = stat.count > 0 && explicit / stat.count >= 0.5 && explicitFamily !== null;
  const family = trusted ? explicitFamily : "ui";
  const weight = modeOfAll(stat.weight, 400).value;
  const italic = stat.count > 0 && stat.italic * 2 > stat.count;
  const opszMode = modeOfAll(stat.opsz, null);
  const opsz = familiesWithOpsz.has(family) && opszMode.value !== null && opszMode.share >= 0.5 ? opszMode.value : null;
  const override = roleFontOverrides[role];
  if (override) {
    return {
      family: override.family,
      weight: override.weight === "readerWeight" ? readerWeightDefault : override.weight,
      italic: Boolean(override.italic),
      opsz: override.opsz ?? null,
    };
  }
  return { family, weight, italic, opsz };
};

const typeEntry = (role) => {
  const data = roles.get(role);
  const font = fontFor(role);
  const entry = { fontSize: data.size };
  if (data.ratio !== undefined) entry.lineHeight = roundTo(data.size * data.ratio, lineHeightStep);
  if (data.tracking !== undefined) entry.letterSpacing = clean(data.tracking * data.size);
  entry.fontFamily = font.family;
  entry.fontWeight = font.weight;
  if (font.italic) entry.fontStyle = "italic";
  if (font.opsz !== null) entry.opsz = font.opsz;
  return entry;
};

const type = Object.fromEntries(baseRoleNames.map((role) => [camel(role), typeEntry(role)]));
const compactOverrides = Object.fromEntries(
  [...roles.keys()].filter((role) => twinOf(role)).map((role) => [camel(twinOf(role)), typeEntry(role)]),
);

const leading = {};
for (const [name, value] of themeMap) {
  if (!name.startsWith("--leading-")) continue;
  leading[camel(name.slice(10))] = value === "normal" ? null : Number(value);
}

const radii = {};
for (const [name, value] of themeMap) {
  if (!name.startsWith("--radius-")) continue;
  radii[name.slice(9)] = pxOf(value);
}

const spacing = {};
const containers = {};
const cssOnly = {};
const spacingCompact = {};
const classify = (name, value, target, namespaceLength) => {
  const key = camel(name.slice(namespaceLength));
  const px = pxOf(value);
  if (px !== null) {
    target[key] = px;
    return;
  }
  let at390 = null;
  let reason = cssOnlyReasons[name] ?? null;
  try {
    at390 = clean(evaluateLength(value, compactVariables), 2);
  } catch (error) {
    if (!(error instanceof Unresolvable)) throw error;
    reason ??= error.message;
  }
  const entry = { css: value, at390x844: at390 };
  if (reason) entry.reason = reason;
  cssOnly[camel(name.slice(2))] = entry;
};
for (const [name, value] of themeMap) {
  if (name.startsWith("--spacing-")) classify(name, value, spacing, 10);
  else if (name.startsWith("--container-")) classify(name, value, containers, 12);
}
for (const [name, value] of compactMap) {
  if (!name.startsWith("--spacing-")) continue;
  spacingCompact[camel(name.slice(10))] = pxOf(value);
}
const readerOffset = /:root:has\(\[data-reader-strip\]\)\s*\{\s*(--spacing-scroll-offset):\s*([^;]+);/.exec(rawCss);
if (readerOffset) {
  cssOnly.spacingScrollOffsetReaderStrip = {
    css: readerOffset[2].trim(),
    at390x844: clean(evaluateLength(readerOffset[2], compactVariables), 2),
    reason: "applies only on pages with a reader strip; wide value is strip 51 + arrival 33 = 84",
  };
}

const textureUtility = /@utility texture-page \{[\s\S]*?\n\}/.exec(rawCss)?.[0] ?? "";
const decode = (themeMapOfTheme) =>
  decodeURIComponent(
    themeMapOfTheme
      .get("--texture-image")
      .replace(/^url\("data:image\/svg\+xml;utf8,/, "")
      .replace(/"\)$/, ""),
  );
const textureOf = (map, baseMap) => {
  const svg = decode(map.has("--texture-image") ? map : baseMap);
  const attr = (name) => Number(new RegExp(`${name}="([\\d.]+)"`).exec(svg)[1]);
  return {
    opacity: Number(map.get("--texture-opacity") ?? baseMap.get("--texture-opacity")),
    inkOpacity: Number(map.get("--wall-ink-opacity") ?? baseMap.get("--wall-ink-opacity")),
    inkBlend: map.get("--wall-ink-blend") ?? baseMap.get("--wall-ink-blend"),
    baseFrequency: attr("baseFrequency"),
    numOctaves: attr("numOctaves"),
    seed: attr("seed"),
    surfaceScale: attr("surfaceScale"),
    elevation: attr("elevation"),
    azimuth: attr("azimuth"),
    tilePx: 420,
  };
};
if (!/background-size:\s*420px 420px/.test(textureUtility)) throw new Error("texture tile size changed");
if (!/mix-blend-mode:\s*multiply/.test(textureUtility)) throw new Error("texture blend changed");
const texture = { pageBlend: "multiply", light: textureOf(rootMap, rootMap), dark: textureOf(darkMap, rootMap) };

const motionConstants = readMotionConstants();
const inlineMotion = readInlineMotion();
const design = readDesignMotion();

const easing = {};
for (const [name, value] of themeMap) {
  if (!name.startsWith("--ease-")) continue;
  easing[camel(name.slice(7))] = bezierOf(value);
}
const exitEase = motionConstant(motionConstants, "features/reader/panel-sections.tsx", "exitEase");
easing.exit = bezierOf(exitEase.bezier);
const sweepEase = motionConstant(motionConstants, "lib/theme.ts", "themeSweepEasing");
easing.sweep = bezierOf(sweepEase.bezier);

const cssKeywordEasing = { easeIn: [0.42, 0, 1, 1], easeOut: [0, 0, 0.58, 1], easeInOut: [0.42, 0, 0.58, 1] };
const scrollEasing = "inOutCubic";

const motion = {};
const motionPick = (name, relative, constName) => {
  const hit = motionConstant(motionConstants, relative, constName);
  motion[name] = hit.values.value !== undefined ? { ms: hit.values.value } : hit.values;
};
motionPick("listReveal", "lib/list-motion.ts", "reveal");
motionPick("listFlip", "lib/list-motion.ts", "flip");
motionPick("keyedFlip", "lib/keyed-flip.ts", "motion");
motionPick("blockFlip", "lib/block-motion.ts", "motion");
motionPick("branchEnter", "lib/branch-motion.ts", "enter");
motionPick("branchExit", "lib/branch-motion.ts", "exit");
motionPick("menuEnter", "lib/reveal-motion.ts", "enter");
motionPick("menuExit", "lib/reveal-motion.ts", "exit");
motionPick("fold", "lib/fold-box.ts", "foldMs");
motionPick("lift", "lib/lift-tween.ts", "durationMs");
motionPick("treeMark", "features/shell/tree-motion.ts", "markTravelMs");
motionPick("themeSweep", "lib/theme.ts", "themeSweepMs");
motionPick("scrollQuiet", "lib/scroll.ts", "quietMs");
motion.panelSections = {
  exitMs: motionConstant(motionConstants, "features/reader/panel-sections.tsx", "exitMs").values.value,
  enterMs: motionConstant(motionConstants, "features/reader/panel-sections.tsx", "enterMs").values.value,
  shiftPx: motionConstant(motionConstants, "features/reader/panel-sections.tsx", "shiftPx").values.value,
};
motion.menuClip = { openOffset: inlineMotion.menuOffset.value };
motion.scrollJump = {
  baseMs: inlineMotion.jump.baseMs,
  perPxMs: inlineMotion.jump.perPxMs,
  maxMs: inlineMotion.jump.maxMs,
};

const durations = { scale: design.durations.scale, ...design.durations.named, ...design.durations.timers };
const staggers = design.staggers.values;
const distances = design.distances.values;

const z = design.z.layers;

const splitTopLevel = (text) => {
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
};

const shadowLayer = (layer, theme) => {
  const resolved = layer.replace(/var\((--color-[a-z0-9-]+)\)/g, (_, name) =>
    theme === "dark" ? (darkMap.get(name) ?? themeMap.get(name)) : themeMap.get(name),
  );
  const inset = /^inset\s+/.test(resolved);
  const rest = resolved.replace(/^inset\s+/, "");
  const colorMatch = /(rgba?\([^)]*\)|#[0-9a-fA-F]{6})\s*$/.exec(rest);
  const lengths = rest
    .slice(0, colorMatch.index)
    .trim()
    .split(/\s+/)
    .map((item) => pxOf(item.endsWith("px") ? item : `${item}px`));
  const [offsetX, offsetY, blurRadius = 0, spreadRadius = 0] = lengths;
  const color = formatColor(colorMatch[1]);
  const object = { offsetX, offsetY, blurRadius, spreadRadius, color };
  if (inset) object.inset = true;
  const text = `${inset ? "inset " : ""}${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`;
  return { object, text };
};

const shadows = {};
for (const [name, value] of themeMap) {
  if (!name.startsWith("--shadow-")) continue;
  const key = camel(name.slice(9));
  const layers = splitTopLevel(value);
  const perTheme = {};
  for (const theme of ["light", "dark"]) perTheme[theme] = layers.map((layer) => shadowLayer(layer, theme));
  const themed = JSON.stringify(perTheme.light) !== JSON.stringify(perTheme.dark);
  const single = layers.length === 1 && !perTheme.light[0].object.inset;
  const first = perTheme.light[0].object;
  const alpha = parseColor(first.color)?.a ?? 1;
  const legacy = single
    ? {
        ios: {
          shadowColor: `rgb(${parseColor(first.color).r}, ${parseColor(first.color).g}, ${parseColor(first.color).b})`,
          shadowOffset: { width: first.offsetX, height: first.offsetY },
          shadowOpacity: alpha,
          shadowRadius: clean(first.blurRadius / 2, 2),
        },
        approximate: first.spreadRadius !== 0,
      }
    : null;
  shadows[key] = {
    boxShadow: {
      light: perTheme.light.map((item) => item.text).join(", "),
      dark: perTheme.dark.map((item) => item.text).join(", "),
    },
    boxShadowList: { light: perTheme.light.map((item) => item.object), dark: perTheme.dark.map((item) => item.object) },
    themed,
    legacy,
  };
}

const fontSources = readFontSources();
const fontFamilies = {};
const roleOfVariable = {};
for (const [name, value] of css.themeInline.map(({ name, value }) => [name, value])) {
  if (!name.startsWith("--font-")) continue;
  const first = /var\((--font-[a-z-]+)\)/.exec(value)[1];
  roleOfVariable[first] = name.slice(7);
}
for (const { name, value } of css.themeInline) {
  if (!name.startsWith("--font-")) continue;
  const role = name.slice(7);
  const pieces = splitTopLevel(value);
  const stack = pieces.map((piece) => {
    const variable = /^var\((--font-[a-z-]+)\)$/.exec(piece);
    return variable ? fontSources[variable[1]].family : piece;
  });
  const web = /var\((--font-[a-z-]+)\)/.exec(pieces[0])[1];
  const source = fontSources[web];
  fontFamilies[role] = {
    family: source.family,
    stack,
    web,
    axes: source.axes,
    weights: source.weights,
    styles: source.styles,
    subsets: source.subsets,
  };
}

const fontFaces = {};
const addFace = (family, weight, style) => {
  const key = `${family}-${weight}${style === "italic" ? "-italic" : ""}`;
  fontFaces[key] = { family, weight, style, file: null };
};
for (const entry of [...Object.values(type), ...Object.values(compactOverrides)])
  addFace(entry.fontFamily, entry.fontWeight, entry.fontStyle ?? "normal");
addFace("greek", 400, "normal");
addFace("hebrew", 400, "normal");
const faceKeys = Object.keys(fontFaces).sort((a, b) => a.localeCompare(b));
const sortedFaces = Object.fromEntries(faceKeys.map((key) => [key, fontFaces[key]]));

const tokens = {
  colors,
  colorsWithoutDarkOverride,
  type,
  typeCompact: { __spread: "type", ...compactOverrides },
  leading,
  fontFamilies,
  fontFaces: sortedFaces,
  radii,
  spacing,
  spacingCompact: { __spread: "spacing", ...spacingCompact },
  containers,
  cssOnly,
  z,
  shadows,
  texture,
  readerWeightDefault,
  easing,
  cssKeywordEasing,
  scrollEasing,
  durations,
  staggers,
  distances,
  motion,
  compactBreakpointPx,
};

const identifier = /^[A-Za-z_$][\w$]*$/;
const keyText = (key) => (identifier.test(key) || /^\d+$/.test(key) ? key : JSON.stringify(key));
function serialize(value, depth = 0) {
  const pad = "  ".repeat(depth + 1);
  const end = "  ".repeat(depth);
  if (value === null) return "null";
  if (Array.isArray(value)) return `[${value.map((item) => serialize(item, depth + 1)).join(", ")}]`;
  if (typeof value === "object") {
    const lines = Object.entries(value).map(([key, item]) =>
      key === "__spread" ? `...${item}` : `${keyText(key)}: ${serialize(item, depth + 1)}`,
    );
    return `{\n${lines.map((line) => `${pad}${line},`).join("\n")}\n${end}}`;
  }
  return JSON.stringify(value);
}

const names = Object.keys(tokens);
const body = names
  .map((name) => {
    const constant = ["scrollEasing", "compactBreakpointPx", "readerWeightDefault"].includes(name) ? "" : " as const";
    return `export const ${name} = ${serialize(tokens[name])}${constant};`;
  })
  .join("\n\n");
const typesBlock = [
  "export type ColorName = keyof typeof colors.light;",
  "export type TypeRole = keyof typeof type;",
  "export type FontFamilyKey = keyof typeof fontFamilies;",
  "export type EasingName = keyof typeof easing;",
].join("\n");
const header =
  "// guard: generated by packages/core/scripts/build-tokens.mjs from the web globals.css; edit the CSS and rerun it";
let output = `${header}\n\n${body}\n\n${typesBlock}\n`;
try {
  output = execFileSync(
    join(repoRoot, "node_modules/.bin/prettier"),
    ["--config", join(repoRoot, ".prettierrc.json"), "--stdin-filepath", "tokens.ts"],
    { input: output },
  ).toString();
} catch {
  process.stderr.write("prettier not available: tokens.ts left unformatted\n");
}
const target = join(outDir, "tokens.ts");
if (process.argv.includes("--check")) {
  if (readFileSync(target, "utf8") !== output) {
    console.error("packages/core/src/tokens.ts is stale: run `node packages/core/scripts/build-tokens.mjs`");
    process.exit(1);
  }
} else {
  writeFileSync(target, output);
}

const roleCount = Object.keys(type).length;
const emitted = {
  colors: Object.keys(colors.light).length,
  typeRoles: roleCount,
  compactTwins: Object.keys(compactOverrides).length,
  leading: Object.keys(leading).length,
  radii: Object.keys(radii).length,
  spacing: Object.keys(spacing).length,
  containers: Object.keys(containers).length,
  cssOnly: Object.keys(cssOnly).length,
  z: Object.keys(z).length,
  shadows: Object.keys(shadows).length,
  easing: Object.keys(easing).length,
  motionGroups: Object.keys(motion).length,
  fontFaces: Object.keys(sortedFaces).length,
};
console.log(JSON.stringify(emitted));
