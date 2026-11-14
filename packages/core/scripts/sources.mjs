import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { camel, lineOf, motionFiles, readSource, readText, repoRoot, webSrc } from "./shared.mjs";

export function readMotionConstants() {
  const found = [];
  for (const relative of motionFiles) {
    const { text } = readSource(relative);
    const file = `apps/web/src/${relative}`;
    for (const match of text.matchAll(/^(?:export )?const (\w+) = \{([^}]*)\};?$/gm)) {
      const pairs = [...match[2].matchAll(/(\w+):\s*(-?[\d_.]+)/g)];
      const entries = match[2]
        .split(",")
        .map((piece) => piece.trim())
        .filter(Boolean);
      if (pairs.length === 0 || pairs.length !== entries.length) continue;
      found.push({
        file,
        relative,
        line: lineOf(text, match.index),
        name: match[1],
        values: Object.fromEntries(pairs.map((pair) => [pair[1], Number(pair[2].replaceAll("_", ""))])),
      });
    }
    for (const match of text.matchAll(/^(?:export )?const (\w+) = (-?[\d_.]+);/gm)) {
      found.push({
        file,
        relative,
        line: lineOf(text, match.index),
        name: match[1],
        values: { value: Number(match[2].replaceAll("_", "")) },
      });
    }
    for (const match of text.matchAll(/^(?:export )?const (\w+) = "(cubic-bezier\([^"]*\))"/gm)) {
      found.push({ file, relative, line: lineOf(text, match.index), name: match[1], bezier: match[2] });
    }
  }
  return found;
}

export function motionConstant(constants, relative, name) {
  const hit = constants.find((item) => item.relative === relative && item.name === name);
  if (!hit) throw new Error(`motion constant ${name} not found in ${relative}`);
  return hit;
}

export function readInlineMotion() {
  const scroll = readSource("lib/scroll.ts");
  const jump = /Math\.min\((\d+), (\d+) \+ Math\.abs\(distance\) \* ([\d.]+)\)/.exec(scroll.text);
  if (!jump) throw new Error("scroll.ts jump duration formula not found");
  const jumpLine = lineOf(scroll.text, jump.index);
  const lift = readSource("lib/lift-tween.ts");
  const liftEase = /cubicBezier\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/.exec(
    lift.text.slice(lift.text.indexOf("const standardEase")),
  );
  const menu = readSource("lib/reveal-motion.ts");
  const offset = /offset: ([\d.]+)/.exec(menu.text);
  return {
    jump: { maxMs: Number(jump[1]), baseMs: Number(jump[2]), perPxMs: Number(jump[3]), line: jumpLine },
    liftEase: liftEase ? [1, 2, 3, 4].map((index) => Number(liftEase[index])) : null,
    liftEaseLine: lineOf(lift.text, lift.text.indexOf("const standardEase")),
    menuOffset: offset ? { value: Number(offset[1]), line: lineOf(menu.text, offset.index) } : null,
  };
}

export function readDesignMotion() {
  const path = join(repoRoot, "docs/DESIGN.md");
  const text = readText(path);
  const rowOf = (label) => {
    const match = new RegExp(`^\\| ${label} \\|(.*?)\\|(.*)\\|\\s*$`, "m").exec(text);
    if (!match) throw new Error(`DESIGN.md row ${label} not found`);
    return { value: match[1], line: lineOf(text, match.index) };
  };
  const durationsRow = rowOf("durations");
  const [scalePart, timersPart] = durationsRow.value.split("reader timers:");
  const scale = [...scalePart.replace(/`[^`]*`/g, "").matchAll(/\d+/g)]
    .map((match) => Number(match[0]))
    .filter((n) => n !== 0);
  const named = {};
  const fast = /(\d+) \(`fast`\)/.exec(scalePart);
  const mid = /(\d+) \(`mid`\)/.exec(scalePart);
  if (fast) named.fast = Number(fast[1]);
  if (mid) named.mid = Number(mid[1]);
  const timers = {};
  for (const match of timersPart.replace(/\bms\b/, "").matchAll(/(\d+) \(([^)]+)\)/g)) {
    timers[camel(match[2].trim().toLowerCase().replaceAll(" ", "-").replaceAll("«", "").replaceAll("»", ""))] = Number(
      match[1],
    );
  }
  const staggersRow = rowOf("staggers");
  const staggers = {};
  for (const match of staggersRow.value.matchAll(/(\d+) \(([^)]+)\)/g)) {
    for (const label of match[2].split(","))
      staggers[camel(label.trim().toLowerCase().replaceAll(" ", "-"))] = Number(match[1]);
  }
  const cap = /cap (\d+) steps/.exec(staggersRow.value);
  if (cap) staggers.maxSteps = Number(cap[1]);
  const distancesRow = rowOf("distances");
  const distances = {};
  for (const match of distancesRow.value.matchAll(/(\d+)px \(([^)]+)\)/g)) {
    for (const label of match[2].split(","))
      distances[camel(label.trim().toLowerCase().replaceAll(" ", "-"))] = Number(match[1]);
  }
  const exitScale = /exit scale (\.?[\d.]+)/.exec(distancesRow.value);
  if (exitScale) distances.exitScale = Number(exitScale[1]);
  return {
    path,
    durations: { scale, named, timers, line: durationsRow.line },
    staggers: { values: staggers, line: staggersRow.line },
    distances: { values: distances, line: distancesRow.line },
    z: readZLayers(text),
  };
}

export const zLabelKeys = {
  "page texture": "pageTexture",
  frame: "frame",
  "09 cue": "timelineCue",
  "09 fixed strip": "timelineStrip",
  "living ruler": "livingRuler",
  switcher: "switcher",
  "edge ruler": "edgeRuler",
  "reader-page back strip": "readerBackStrip",
  "side panel (page)": "sidePanel",
  "top bar": "topBar",
  "reader-page bar": "readerBar",
  "translation list": "translationList",
  "drawer scrim": "drawerScrim",
  drawer: "drawer",
  "window scrim": "windowScrim",
  "citation window": "citationWindow",
  reader: "reader",
  "side panel (inside the reader)": "readerSidePanel",
  "selection toolbar": "selectionToolbar",
  search: "search",
  "undo bar": "undoBar",
  "delete dialog": "deleteDialog",
};

function readZLayers(text) {
  const start = text.indexOf("Z-layers (");
  const end = text.indexOf("\n", start);
  const line = lineOf(text, start);
  const sentence = text.slice(text.indexOf("):", start) + 2, end).replace(/\(the drawer starts[^)]*\)/, "");
  const layers = {};
  const unmapped = [];
  for (const piece of sentence.split(/\s[·/]\s/)) {
    const match = /^\s*(.*?) (\d+)\.?\s*$/.exec(piece);
    if (!match) {
      unmapped.push(piece.trim());
      continue;
    }
    const key = zLabelKeys[match[1].trim()];
    if (!key) unmapped.push(match[1].trim());
    else layers[key] = Number(match[2]);
  }
  return { layers, unmapped, line };
}

export function readFontSources() {
  const text = readText(join(webSrc, "lib/fonts.ts"));
  const families = {};
  for (const match of text.matchAll(/const (\w+) = (\w+)\(\{([^}]*)\}\)/g)) {
    const body = match[3];
    const variable = /variable: "(--[\w-]+)"/.exec(body)?.[1];
    families[variable] = {
      family: match[2].replaceAll("_", " "),
      axes: [...(/axes: \[([^\]]*)\]/.exec(body)?.[1] ?? "").matchAll(/"(\w+)"/g)].map((item) => item[1]),
      weights: /weight: \[([^\]]*)\]/.test(body)
        ? [...(/weight: \[([^\]]*)\]/.exec(body)?.[1] ?? "").matchAll(/"(\d+)"/g)].map((item) => Number(item[1]))
        : "variable",
      styles: [...(/style: \[([^\]]*)\]/.exec(body)?.[1] ?? '"normal"').matchAll(/"(\w+)"/g)].map((item) => item[1]),
      subsets: [...(/subsets: \[([^\]]*)\]/.exec(body)?.[1] ?? "").matchAll(/"(\w+)"/g)].map((item) => item[1]),
    };
  }
  return families;
}

const weightClasses = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export function inferRoleFonts(roleNames) {
  const known = new Set(roleNames);
  const stats = new Map(
    [...known].map((role) => [role, { count: 0, family: new Map(), weight: new Map(), italic: 0, opsz: new Map() }]),
  );
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const path = join(dir, name);
      if (statSync(path).isDirectory()) walk(path);
      else if (/\.(tsx?)$/.test(name)) scan(readText(path));
    }
  };
  const bump = (map, key) => map.set(key, (map.get(key) ?? 0) + 1);
  const scan = (text) => {
    for (const line of text.split("\n")) {
      if (!/\btext-/.test(line)) continue;
      for (const literal of line.matchAll(/(["'`])((?:(?!\1).)*)\1/g)) {
        const classes = literal[2].split(/\s+/);
        const roles = new Set();
        for (const token of classes) {
          const bare = token.slice(token.lastIndexOf(":") + 1);
          if (!bare.startsWith("text-")) continue;
          const role = bare.slice(5);
          if (known.has(role)) roles.add(role);
        }
        if (roles.size === 0) continue;
        let family = null;
        let weight = null;
        let italic = false;
        let opsz = null;
        for (const token of classes) {
          const bare = token.slice(token.lastIndexOf(":") + 1);
          const familyMatch = /^font-(head|body|ui|greek|hebrew)$/.exec(bare);
          if (familyMatch) family = familyMatch[1];
          const weightMatch = /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/.exec(bare);
          if (weightMatch) weight = weightClasses[weightMatch[1]];
          if (bare === "italic") italic = true;
          const opszMatch = /^opsz-(\d+)$/.exec(bare);
          if (opszMatch) opsz = Number(opszMatch[1]);
        }
        for (const role of roles) {
          const stat = stats.get(role);
          stat.count += 1;
          bump(stat.family, family ?? "inherit");
          bump(stat.weight, weight ?? "inherit");
          if (italic) stat.italic += 1;
          bump(stat.opsz, opsz ?? "none");
        }
      }
    }
  };
  walk(webSrc);
  return stats;
}
