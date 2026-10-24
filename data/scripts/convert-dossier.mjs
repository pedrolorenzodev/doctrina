import fs from "node:fs";
import vm from "node:vm";
import { WORK_DEFS } from "./dossier-works.mjs";

const ROOT = new URL("../../docs/research/doctrines", import.meta.url).pathname;
const CONTENT = new URL("../../src/content", import.meta.url).pathname;
const BIBLE = new URL("../../data/corpus/bibles/rv1909.json", import.meta.url).pathname;
const DOCTRINES = process.argv.length > 2 ? process.argv.slice(2) : ["eucharist"];
const SHORT = { eucharist: "e", justification: "j", baptism: "b", papacy: "p", "sola-scriptura": "s" };
const rv1909 = JSON.parse(fs.readFileSync(BIBLE, "utf8"));
const rvKeys = Object.keys(rv1909);

const report = {
  conflictingIds: [], mergedIds: 0, renamed: {}, unmatchedWork: [], unparsedLocator: [], unparsedDate: [],
  unparsedPg: [], esFromStatus: 0, verseKeyConflicts: [], editionVariants: {}, bareGroupIds: 0,
  gTokensRewritten: 0, pendingMarkers: 0, titleSuffixStripped: 0, noDate: 0, citations: 0, verseUnparsed: [],
  dateAnomalies: [], whoUnparsed: [], droppedFields: {},
};

function load(d) {
  const src = fs.readFileSync(`${ROOT}/${d}/review-page.data.js`, "utf8");
  const names = [...src.matchAll(/^(?:const|let|var) (\w+)/gm)].map((m) => m[1]);
  const ctx = { document: { createElement: () => ({}), head: { appendChild() {} } }, window: {}, console };
  vm.createContext(ctx);
  vm.runInContext(src + "\n;globalThis.__x={" + names.join(",") + "}", ctx);
  return JSON.parse(JSON.stringify(ctx.__x));
}
const RAW = Object.fromEntries(DOCTRINES.map((d) => [d, load(d)]));

const MONTHS = { ene: 1, feb: 2, mar: 3, abr: 4, may: 5, jun: 6, jul: 7, ago: 8, sep: 9, oct: 10, nov: 11, dic: 12 };
function parseDate(raw) {
  if (raw === undefined || raw === null || raw === "") return undefined;
  let s = String(raw).trim();
  let unconfirmed;
  const um = s.match(/\s*\((sin confirmar[^)]*)\)\s*$/);
  if (um) { unconfirmed = true; s = s.slice(0, um.index).trim(); report.dateAnomalies.push(raw); }
  let m;
  let d;
  if ((m = s.match(/^(\d{1,2}) (\w{3}) (\d{4})$/)) && MONTHS[m[2]]) d = { year: +m[3], month: MONTHS[m[2]], day: +m[1] };
  else if ((m = s.match(/^(\w{3}) (\d{4})$/)) && MONTHS[m[1]]) d = { year: +m[2], month: MONTHS[m[1]] };
  else if ((m = s.match(/^(\d{4})[–-](\d{4})$/))) d = { year: +m[1], yearEnd: +m[2] };
  else if ((m = s.match(/^(\d{4})\/(\d{2,4})$/))) d = { year: +m[1], alsoYears: [m[2].length === 2 ? +(m[1].slice(0, 2) + m[2]) : +m[2]] };
  else if ((m = s.match(/^(\d{4}) y (\d{4})$/))) d = { year: +m[1], alsoYears: [+m[2]] };
  else if ((m = s.match(/^(\d{4})$/))) d = { year: +m[1] };
  else { report.unparsedDate.push(raw); return undefined; }
  if (unconfirmed) d.unconfirmed = unconfirmed;
  return d;
}
const precision = (d) => (d ? (d.day ? 3 : d.month ? 2 : 1) : 0);

function matchWork(title) {
  for (const w of WORK_DEFS) {
    const m = title.match(w.re);
    if (m) return { def: w, rest: title.slice(m[0].length) };
  }
  return null;
}

const NUM = String.raw`\d+[A-Za-z]?(?:\s*(?:[–-]|a)\s*\d+)?(?:(?:,\s*| y )(?:¶\s*)?\d+(?:\.\d+)?(?:[–-]\d+)?)*`;
const RULES = [
  [/^(?:sesión|ses\.)\s+([IVXL]+)\b/, "session"],
  [new RegExp(String.raw`^(?:capítulos|capítulo|caps\.|cap\.)\s+(${NUM})`), "chapter"],
  [new RegExp(String.raw`^(?:cánones|canon|can\.|cann\.)\s+([IVX]*\.?${NUM})`), "canon"],
  [new RegExp(String.raw`^(?:nn\.|n\.)\s*(${NUM})`), "number"],
  [/^art\.\s*([IVX]+(?:\.[A-Z])?|\d+)/, "article"],
  [new RegExp(String.raw`^(?:preguntas|pregunta)\s+(${NUM})`), "question"],
  [/^parte\s+([IVX]+)/, "part"],
  [/^constitución\s+(\d+)/, "constitution"],
  [/^decreto\s+([IVXL]+|\d+)\b/, "decree"],
  [/^\(?decreto\s+(\d+)\)?/, "decree"],
  [new RegExp(String.raw`^¶\s*(${NUM})`), "paragraph"],
  [/^§+\s*([IVX\d]+(?:[–-]\d+)?(?:,\s*\d+)?)/, "section"],
  [new RegExp(String.raw`^([IVX]+(?:\.\d+)+(?:[–-]\d+)?(?:(?:,\s*| y )\d+(?:[–-]\d+)?)*)`), "ref"],
  [new RegExp(String.raw`^(\d+\.\d+(?:[–-]\d+)?(?:(?:,\s*| y )\d+(?:[–-]\d+)?)*)`), "ref"],
  [/^(\d+[A-Z])\b/, "ref"],
  [/^([IVX]+)\b(?!\w)/, "ref"],
  [new RegExp(String.raw`^(${NUM})`), "number"],
];
function parseLocator(rest) {
  let s = rest.replace(/^[\s,]+/, "");
  const quals = [];
  s = s.replace(/\(([^)]*)\)/g, (_, q) => { quals.push(q); return " "; });
  s = s.replace(/«([^»]*)»/g, (_, q) => { quals.push(q); return " "; });
  s = s.replace(/\s+/g, " ").trim();
  const parts = [];
  let guard = 0;
  while (s && guard++ < 20) {
    s = s.replace(/^[\s,;]+|^y\s+/, "");
    if (!s) break;
    let hit = false;
    for (const [re, kind] of RULES) {
      const m = s.match(re);
      if (m) { parts.push({ kind, value: m[1].trim() }); s = s.slice(m[0].length); hit = true; break; }
    }
    if (!hit) {
      const m = s.match(/^([^,]+)/);
      if (/^(cláusula|sobre )/.test(m[1])) quals.push(m[1].trim());
      else parts.push({ kind: "locus", value: m[1].trim() });
      s = s.slice(m[0].length);
    }
  }
  const loc = { parts };
  if (quals.length) loc.qualifier = quals.join("; ");
  return loc;
}

const KIND = { Fuente: "source", "Texto de otra tradición": "other-tradition", "Acuerdo ecuménico": "ecumenical", "Estado actual": "status" };
const TRANSLATION = {
  ayala: "printed-original", sacros: "printed-original", zorita: "printed-original", wcf: "printed-original",
  vat: "official", djes: "official", sbc: "official", ag: "official",
  ia: "ai-assisted", iaAp: "ai-assisted", iaEnc: "ai-assisted", iaOros: "ai-assisted",
  rv1909: "bible-edition", st: "site-statement",
};

function licenceOf(t) {
  if (/Dominio público/i.test(t) && !/Licencia sin confirmar/i.test(t)) return "public-domain";
  if (/Licencia sin confirmar|sin confirmar/i.test(t)) return "unconfirmed";
  if (/©|cita breve/i.test(t)) return "short-quote";
  if (/No es texto de la Iglesia/.test(t)) return "site-authored";
  return "unconfirmed";
}
function splitEdition(key, text) {
  const re = /\b(Latín y castellano|Latín y español|Latín e inglés|Latín|Inglés|Español|Alemán)\s*:/gi;
  const marks = [...text.matchAll(re)];
  if (marks.length < 1) return [{ suffix: "", langs: ["la", "es", "en", "de"], text }];
  const out = [];
  marks.forEach((m, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].index : text.length;
    const label = m[1].toLowerCase();
    const langs = label.startsWith("latín y") ? ["la", "es"] : label === "latín e inglés" ? ["la", "en"] : label === "latín" ? ["la"] : label === "inglés" ? ["en"] : label === "alemán" ? ["de"] : ["es"];
    out.push({ suffix: "." + langs.join(""), langs, text: text.slice(m.index, end).trim() });
  });
  const seen = new Map();
  for (const o of out) { if (seen.has(o.suffix)) { o.suffix += "+"; } seen.set(o.suffix, 1); }
  return out;
}

const registry = { works: {}, editions: {}, citations: {}, verses: {} };
const idMap = Object.fromEntries(DOCTRINES.map((d) => [d, {}]));
const edTexts = {};

function workFor(rawId, s) {
  if (s.kind === "Estado actual") {
    const id = "status-" + rawId.toLowerCase();
    if (!registry.works[id]) registry.works[id] = { id, title: s.title.replace(/: estado actual$/, ""), short: "Estado actual", kind: "status-line", speaker: "site", scheme: [] };
    return { workId: id, rest: "" };
  }
  const mw = matchWork(s.title);
  if (!mw) { report.unmatchedWork.push(rawId + " | " + s.title); return null; }
  const { def, rest } = mw;
  if (!registry.works[def.id]) {
    registry.works[def.id] = Object.fromEntries(Object.entries(def).filter(([key]) => key !== "re"));
  }
  return { workId: def.id, rest };
}

function identity(c) {
  return c.work + "|" + c.locator.parts.map((p) => p.kind + ":" + p.value).join("/");
}

function parsePg(pg) {
  const o = { pages: {}, at: undefined, note: undefined, citedIn: [] };
  if (!pg) return o;
  let s = pg;
  s = s.replace(/(?:Capítulo \d+: )?(?:Fragmentos?|Citados?) citados? en [^.]*\.?|Citado en [^.]*\.?|Cita (?:a Trento|Dei Verbum \d+)[^.]*\.?/gi, (m) => {
    o.citedIn.push(...(m.match(/(?:OB|DO|CV)-\d+[ab]?/g) || []));
    if (!o.citedIn.length) o.citedIn.push(m.trim());
    return "";
  });
  s = s.replace(/"anatema" en el latín; "excomulgado" en la traducción de \d+\.?/, () => { o.note = '"anatema" en el latín; "excomulgado" en la traducción de 1785.'; return ""; });
  s = s.replace(/^Canon (\d+)\.\s*/, (_, n) => { o.at = "canon " + n; return ""; });
  const setPage = (langs, p) => { for (const l of langs) o.pages[l] = p; };
  s = s.replace(/Ayala,\s*pp?\.\s*(≈?[\d–]+)(?:\s*\(escaneo\))?/, (_, p) => { setPage(["la", "es"], p); return ""; });
  s = s.replace(/Waterworth,\s*pp?\.\s*([\d–]+)/, (_, p) => { setPage(["en"], p); return ""; });
  s = s.replace(/Waterworth/, "");
  s = s.replace(/Triglotta,\s*latín p\.\s*([\d–]+)(?:,\s*inglés p\.\s*([\d–]+))?(?:\s*\(OCR\))?/, (_, a, b) => { setPage(["la"], a); if (b) setPage(["en"], b); return ""; });
  s = s.replace(/Latín:\s*Triglot\s*(\d+),\s*pp?\.\s*([\d–]+)/, (_, v, p) => { setPage(["la"], p); return ""; });
  s = s.replace(/Inglés:\s*Schaff II,\s*p\.\s*([\d–]+)/, (_, p) => { setPage(["en"], p); return ""; });
  s = s.replace(/Schaff(?: II)?,\s*pp?\.\s*([\d–]+)(?:\s*\(escaneo\))?/, (_, p) => { setPage(["la", "en"], p); return ""; });
  s = s.replace(/Schroeder,\s*pp?\.\s*([\d–]+)(?: \(latín\))?(?: y (\d+)(?: \(inglés\))?)?/, (_, a, b) => { setPage(["la"], a); if (b) setPage(["en"], b); return ""; });
  s = s.replace(/Sacrosantos,\s*pp?\.\s*([\d–]+)/, (_, p) => { setPage(["es"], p); return ""; });
  s = s.replace(/^\s*[;.]\s*|\s*[;.]\s*$/g, "").replace(/\s*;\s*;\s*/g, "; ").trim();
  s = s.replace(/^[;.\s]+|[;.\s]+$/g, "");
  if (s) {
    if (/^(?:n\.|nn\.|§|¶|DS|[IVX]+\.\d)\s*[\d–.IVX]+(?: \(es\))?(?: \(DS \d+\))?$|^[\dIVX.§¶ –]+$/.test(s)) o.at = o.at ? o.at + "; " + s : s;
    else { o.rest = s; report.unparsedPg.push(s); }
  }
  return o;
}

const EDKEY = {};
function editionFor(d, ex, edString, workId) {
  const raw = RAW[d];
  const key = Object.entries(raw.ED).find(([, v]) => v === edString)?.[0] || workId;
  EDKEY[edString] = key;
  return key;
}
function ensureEditions(key, text, workId) {
  const prior = edTexts[key];
  if (!prior) edTexts[key] = new Set();
  edTexts[key].add(text);
  const longest = [...edTexts[key]].sort((a, b) => b.length - a.length)[0];
  const parts = splitEdition(key, longest);
  const ids = [];
  for (const p of parts) {
    for (const lang of p.langs) {
      let id = key + "." + lang;
      while (ids.includes(id)) id += "+";
      const works = [...new Set([...(registry.editions[id]?.works ?? []), workId])];
      registry.editions[id] = { id, works, lang, bibliography: p.text, licence: licenceOf(longest) };
      ids.push(id);
    }
  }
  report.editionVariants[key] = edTexts[key].size;
  return ids;
}
function editionIdForLang(key, lang) {
  const all = Object.keys(registry.editions).filter((id) => id.startsWith(key + "."));
  return all.find((id) => registry.editions[id].lang === lang);
}

function convertCitation(d, rawId, s) {
  const wf = workFor(rawId, s);
  if (!wf) return null;
  const isStatus = s.kind === "Estado actual";
  let loc = isStatus ? { parts: [] } : parseLocator(wf.rest);
  if (!isStatus && !loc.parts.length && registry.works[wf.workId].scheme.length) report.unparsedLocator.push(rawId + " | " + s.title);
  const date = isStatus ? undefined : parseDate(s.date);
  if (!date && !isStatus) report.noDate++;
  const edKey = editionFor(d, null, s.ed, wf.workId);
  ensureEditions(edKey, s.ed, wf.workId);
  const excerpts = (s.ex || []).map((e) => {
    const pg = parsePg(e.pg);
    const ex = {};
    for (const lang of ["la", "es", "en", "de"]) {
      if (e[lang] === undefined) continue;
      let edId = editionIdForLang(edKey, lang);
      if (!edId) {
        edId = "site-translation." + wf.workId + "." + lang;
        report.siteTranslationEditions = (report.siteTranslationEditions || 0) + 1;
        registry.editions[edId] = { id: edId, works: [wf.workId], lang, bibliography: "Translation made for this site; no published edition in this language.", licence: "site-authored" };
      }
      const p = { text: e[lang], edition: edId };
      if (pg.pages[lang]) p.page = pg.pages[lang];
      if (lang === "es") {
        const tl = TRANSLATION[e.esLv];
        if (tl) p.translation = tl;
        if (e.esFrom) {
          if (/^Estado actual/.test(e.esFrom)) { ex.note = e.esFrom; report.esFromStatus++; }
          else if (tl === "ai-assisted") p.derivedFrom = e.esFrom;
          else ex.note = ex.note ? ex.note + " " + e.esFrom : e.esFrom;
        }
      }
      ex[lang] = p;
    }
    if (pg.at) ex.at = pg.at;
    if (pg.note) ex.note = ex.note ? ex.note + " " + pg.note : pg.note;
    if (pg.rest) ex.note = ex.note ? ex.note + " " + pg.rest : pg.rest;
    if (pg.citedIn.length) ex.citedIn = pg.citedIn;
    return ex;
  });
  const c = { id: rawId, work: wf.workId, kind: KIND[s.kind], locator: loc, excerpts };
  if (date) c.date = date;
  if (s.url) c.link = { href: s.url.href, label: s.url.label };
  return c;
}

const exKey = (e) => (e.es?.text || e.la?.text || e.en?.text || e.de?.text || "").slice(0, 60);
function mergeInto(prior, c) {
  report.mergedIds++;
  const have = new Set(prior.excerpts.map(exKey));
  for (const e of c.excerpts) if (!have.has(exKey(e))) prior.excerpts.push(e);
  if (precision(c.date) > precision(prior.date)) prior.date = c.date;
  if (!prior.link && c.link) prior.link = c.link;
}

for (const d of DOCTRINES) {
  for (const [rawId, s] of Object.entries(RAW[d].SRC)) {
    const c = convertCitation(d, rawId, s);
    if (!c) continue;
    report.citations++;
    let id = rawId;
    const prior = registry.citations[id];
    if (prior) {
      if (identity(prior) === identity(c)) { mergeInto(prior, c); idMap[d][rawId] = id; continue; }
      report.conflictingIds.push(`${rawId}: ${prior.work} ${JSON.stringify(prior.locator.parts)} vs ${d} ${c.work} ${JSON.stringify(c.locator.parts)}`);
      id = `${rawId}~${SHORT[d]}`;
      c.id = id;
      report.renamed[d] = (report.renamed[d] || 0) + 1;
    }
    idMap[d][rawId] = id;
    registry.citations[id] = c;
  }
}

const mapCid = (d, id) => idMap[d][id] ?? id;

const BOOKS = {
  "Génesis": "Gen", "Éxodo": "Exod", "Levítico": "Lev", "Job": "Job", "Salmo": "Ps", "Salmos": "Ps", "Proverbios": "Prov", "Isaías": "Isa",
  "Ezequiel": "Ezek", "Lamentaciones": "Lam", "Oseas": "Hos", "Zacarías": "Zech", "Malaquías": "Mal", "Mateo": "Matt", "Marcos": "Mark",
  "Lucas": "Luke", "Juan": "John", "Hechos": "Acts", "Romanos": "Rom", "1 Corintios": "1Cor", "2 Corintios": "2Cor", "Gálatas": "Gal",
  "Efesios": "Eph", "Filipenses": "Phil", "Colosenses": "Col", "1 Tesalonicenses": "1Thess", "2 Tesalonicenses": "2Thess", "1 Timoteo": "1Tim",
  "2 Timoteo": "2Tim", "Tito": "Titus", "Hebreos": "Heb", "Santiago": "Jas", "1 Pedro": "1Pet", "2 Pedro": "2Pet", "1 Juan": "1John",
  "Judas": "Jude", "Apocalipsis": "Rev",
};
function refToOsis(ref) {
  ref = ref.replace(/\s*\(([^)]*\d+:\d+[^)]*)\)/g, "; $1");
  const segs = [];
  let book = null;
  for (let part of ref.split(/;\s*/)) {
    part = part.trim();
    let m = part.match(/^((?:\d\s)?[A-Za-zÁÉÍÓÚáéíóúñÑ]+)\s+(\d+.*)$/);
    let rest;
    if (m && BOOKS[m[1]]) { book = BOOKS[m[1]]; rest = m[2]; }
    else if (/^\d+/.test(part) && book) rest = part;
    else { report.verseUnparsed.push(ref); return null; }
    let chap = null;
    const items = rest.split(/,\s*/);
    for (const it of items) {
      let mm;
      if ((mm = it.match(/^(\d+):(\d+)(?:[–-](\d+):(\d+))?(?:[–-](\d+))?$/))) {
        chap = +mm[1];
        if (mm[3]) segs.push(`${book}.${mm[1]}.${mm[2]}-${book}.${mm[3]}.${mm[4]}`);
        else if (mm[5]) segs.push(`${book}.${mm[1]}.${mm[2]}-${book}.${mm[1]}.${mm[5]}`);
        else segs.push(`${book}.${mm[1]}.${mm[2]}`);
      } else if ((mm = it.match(/^(\d+)(?:[–-](\d+))?$/))) {
        if (chap === null) { segs.push(`${book}.${mm[1]}` + (mm[2] ? `-${book}.${mm[2]}` : "")); chap = null; }
        else segs.push(mm[2] ? `${book}.${chap}.${mm[1]}-${book}.${chap}.${mm[2]}` : `${book}.${chap}.${mm[1]}`);
      } else { report.verseUnparsed.push(ref); return null; }
    }
  }
  return segs.join(",");
}

function prose(d, t) {
  if (t && typeof t === "object" && !Array.isArray(t) && "t" in t) { report.objectProse = (report.objectProse || 0) + 1; t = t.t; }
  if (typeof t !== "string") return t;
  return t
    .replace(/\{c:([^}|]*)\|([^}]*)\}/g, (_, ids, label) => `{c:${ids.split(",").map((i) => mapCid(d, i.trim())).join(",")}|${label}}`)
    .replace(/\{v:([^}]*)\}/g, (m, ref) => { const o = refToOsis(ref); return o ? `{v:${o}}` : m; })
    .replace(/\{g:Lo que escribieron los primeros cristianos\}/g, () => { report.gTokensRewritten++; return "{s:early-witnesses|Lo que escribieron los primeros cristianos}"; });
}

const TRAD_WORDS = [["católic", "catholic"], ["ortodox", "orthodox"], ["luteran", "lutheran"], ["reformad", "reformed"], ["bautist", "baptist"], ["pentecostal", "pentecostal"], ["Asambleas de Dios", "pentecostal"], ["Oros", "orthodox"], ["Confesión de Westminster", "reformed"]];
function parseWho(who) {
  const traditions = [];
  const head = who.split(/\.\s|\. /)[0];
  for (const [w, t] of TRAD_WORDS) if (new RegExp(w, "i").test(head) && !traditions.includes(t)) traditions.push(t);
  if (!traditions.length) report.whoUnparsed.push(who.slice(0, 80));
  return { traditions, line: who };
}

const GRADE_ID = { dogma: "dogma", definitiva: "definitive", magisterio: "magisterium", disciplina: "discipline" };
function grade(d, g) {
  if (GRADE_ID[g.cat]) return { kind: "church", grade: GRADE_ID[g.cat], ...(g.basis ? { basis: prose(d, g.basis) } : {}) };
  const reason = { trento: "taught-by-council", concilio: "taught-by-council", vat1: "taught-by-council", catecismo: "taught-by-catechism", acuerdo: "ecumenical-agreement", sinGrado: "undeclared", sinGradoPropio: "no-own-grade" }[g.cat];
  if (!reason) throw new Error("unknown grade category " + g.cat);
  return { kind: "unclassified", reason, ...(g.basis ? { basis: prose(d, g.basis) } : {}) };
}
const srcRef = (d, pair) => { report.bareGroupIds += pair[0].includes(",") ? 1 : 0; return { citations: pair[0].split(",").map((i) => mapCid(d, i.trim())), label: pair[1] }; };

function parseFatherAttr(attr) {
  const m = attr.match(/^(.+?), (.+?) \((.+)\), en$/);
  if (!m) throw new Error("father attribution not understood: " + attr);
  const [, author, work, when] = m;
  const [datePart, ...qualifiers] = when.split(/, (?=según)/);
  const body = datePart.replace(/^predicada en /, "");
  const circa = /^c\. /.test(body);
  const years = body.replace(/^c\. /, "").match(/^(\d{3,4})(?:[–-](\d{3,4}))?$/);
  if (!years) throw new Error("father date not understood: " + attr);
  const date = { year: +years[1], ...(years[2] ? { yearEnd: +years[2] } : {}), ...(circa ? { circa: true } : {}), ...(qualifiers.length ? { attribution: qualifiers.join(", ") } : {}) };
  return { author, work, date };
}

function buildPage(d) {
  const x = RAW[d];
  const osisList = (refs) => refs.flatMap((r) => (refToOsis(r) ?? "").split(",")).filter(Boolean);
  const objItems = x.OB_ORDER.map((id) => {
    const o = x.OBJ[id];
    const debate = id.startsWith("DO-");
    let title = o.title;
    if (/ — Frecuente en el debate$/.test(title)) { title = title.replace(/ — Frecuente en el debate$/, ""); report.titleSuffixStripped++; }
    const answer = [];
    let pending = false;
    for (const p of o.answer) {
      if (typeof p === "string") {
        if (/Respuesta apologética pendiente/.test(p)) {
          pending = true; report.pendingMarkers++;
          if (p.length < 400 && !/\{c:/.test(p)) continue;
          report.pendingMarkerInsideRealAnswer = (report.pendingMarkerInsideRealAnswer || 0) + 1;
        }
        answer.push({ type: "p", text: prose(d, p) });
      } else { if (Array.isArray(p.bq)) report.arrayQuotes = (report.arrayQuotes || 0) + 1; answer.push({ type: "quote", text: [].concat(p.bq), attribution: prose(d, p.attr) }); }
    }
    const out = {
      id, layer: debate ? "debate" : "official", title: prose(d, title), synthesis: prose(d, o.syn),
      raisedBy: parseWho(o.who),
      objectorTexts: { shown: o.own.lead.map((i) => mapCid(d, i)), more: o.own.more.map((i) => mapCid(d, i)) },
      answer,
      sourcesCited: o.fuentes.map((f) => ({ citations: f.ids.split(",").map((i) => mapCid(d, i.trim())), name: f.name, dates: [parseDate(f.date)].filter(Boolean) })),
      passages: { answer: osisList(o.pasajes.resp || []), objector: osisList(o.pasajes.obj || []) },
    };
    if (o.pasajes.objNote) out.passages.objectorNote = prose(d, o.pasajes.objNote);
    if (pending) out.apologeticAnswer = "pending";
    return out;
  });
  const other = {};
  const grades = {};
  for (const [k, g] of Object.entries(x.GRADES)) {
    const def = { label: g.label, ...(g.sub ? { sub: g.sub } : {}), ...(g.def ? { definition: g.def } : {}), source: { citations: g.src.split(",").map((i) => mapCid(d, i.trim())), label: g.srcLabel } };
    if (GRADE_ID[k]) grades[GRADE_ID[k]] = def; else other[k] = def;
  }
  const page = {
    doctrine: d, tradition: "catholic", status: "draft", lede: x.META.lede,
    teach: {
      subtitle: x.META.ensenaSub,
      definition: { text: prose(d, x.DEFINITION.text), grades: x.DEFINITION.grades.map((g) => grade(d, g)), sources: x.DEFINITION.sources.map((p) => srcRef(d, p)) },
      statements: x.QE.map((q) => ({ id: q.id, text: prose(d, q.text), grades: q.grades.map((g) => grade(d, g)), sources: q.sources.map((p) => srcRef(d, p)) })),
    },
    why: {
      intro: x.PORQUE.intro.map((t) => prose(d, t)),
      fathers: x.PORQUE.fathers.map((f) => ({ lead: f.lead, quote: f.quote, ...parseFatherAttr(f.attr), citedIn: { citations: f.src.split(",").map((i) => mapCid(d, i.trim())), label: f.srcLabel } })),
      note: prose(d, x.PORQUE.note), closing: prose(d, x.PORQUE.closing),
    },
    scripture: x.ESCRITURA.map((e) => { const osis = refToOsis(e.ref); if (!osis) throw new Error("scripture ref not understood: " + e.ref); return { refs: osis.split(","), text: prose(d, e.d) }; }),
    objections: { order: x.OB_ORDER, ...(x.OB_LIST_NOTE ? { silentTraditions: prose(d, x.OB_LIST_NOTE) } : {}), items: objItems },
    life: { intro: x.VIVE.intro.map((t) => prose(d, t)), items: x.VIVE.items.map((i) => ({ id: i.id, label: i.l, text: prose(d, i.d), sources: i.s.map((p) => srcRef(d, p)) })) },
    authority: { grades, other },
  };
  return page;
}

const pages = Object.fromEntries(DOCTRINES.map((d) => [d, buildPage(d)]));

const SCRUBS = [
  [/\s*\.?\s*Sin español en el dosier\.?/g, ""],
  [/Edición que cita el dosier:/g, "Edición citada:"],
  [/\(el libro no se comprobó\)/g, "(libro no consultado)"],
  [/Fuentes del dosier: t/g, "T"],
  [/; la PCA usa ese texto \(mapa reformado;[^)]*\)/g, ""],
  [/ \(confianza media-alta;[^)]*\)/g, ""],
  [/ \(línea de Pasajes del dosier\)/g, ""],
  [/ \((?:entera )?en OB-\d+\)/g, ""],
  [/Fuentes del dosier: mapa luterano §1\.2 \(([^)]*)\)\./g, "$1."],
  [/Fuentes del dosier: seguimiento del 2026-10-20 de wave-1-open-checks\.md \(([^)]*)\)\. Sin retractación sinodal localizada \(open-tags-verification\.md, fila 5 de la Eucaristía\)\./g, "$1. Sin retractación sinodal localizada."],
];
function scrubDeep(value) {
  if (typeof value === "string") return SCRUBS.reduce((text, [pattern, to]) => text.replace(pattern, to), value).trim();
  if (Array.isArray(value)) return value.map(scrubDeep);
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      const next = scrubDeep(v);
      if (k === "note" && (next === "" || /^Cita de Trento, en la respuesta a DO-\d+$/.test(next))) continue;
      out[k] = next;
    }
    return out;
  }
  return value;
}
for (const key of Object.keys(registry)) registry[key] = scrubDeep(registry[key]);
for (const d of Object.keys(pages)) pages[d] = scrubDeep(pages[d]);

function expandSegment(segment) {
  const [from, to = from] = segment.split("-");
  const rest = (key) => key.split(".").length;
  if (rest(from) === 2) {
    const keys = rvKeys.filter((k) => k.startsWith(from + "."));
    if (!keys.length) throw new Error("chapter not in corpus: " + segment);
    return keys;
  }
  const a = rvKeys.indexOf(from);
  const b = rvKeys.indexOf(to);
  if (a < 0 || b < a) throw new Error("verse range not in corpus: " + segment);
  return rvKeys.slice(a, b + 1);
}
const segments = new Set();
for (const page of Object.values(pages)) {
  const json = JSON.stringify(page);
  for (const m of json.matchAll(/\{v:([^}]+)\}/g)) m[1].split(",").forEach((x) => segments.add(x));
  page.scripture.forEach((e) => e.refs.forEach((x) => segments.add(x)));
  page.objections.items.forEach((o) => [...o.passages.answer, ...o.passages.objector].forEach((x) => segments.add(x)));
}
for (const segment of segments) for (const key of expandSegment(segment)) registry.verses[key] = { osis: key, text: rv1909[key], edition: "RV1909" };

const lit = (v) => JSON.stringify(v, null, 1);
const camel = (id) => id.replace(/-(\w)/g, (_, c) => c.toUpperCase());
fs.mkdirSync(`${CONTENT}/registry`, { recursive: true });
const registryFile = (name, type, ids) =>
  fs.writeFileSync(
    `${CONTENT}/registry/${name}.ts`,
    `import type { ${type} } from "@/content/model/registry";\n\nexport const ${name} = ${lit(registry[name])} satisfies Record<string, ${type}>;\n\nexport type ${ids} = keyof typeof ${name};\n`,
  );
registryFile("works", "Work", "WorkId");
registryFile("editions", "Edition", "EditionId");
registryFile("citations", "Citation", "CitationId");
registryFile("verses", "Verse", "VerseId");
for (const d of DOCTRINES) {
  fs.mkdirSync(`${CONTENT}/pages/${d}`, { recursive: true });
  fs.writeFileSync(
    `${CONTENT}/pages/${d}/catholic.es.ts`,
    `import type { TraditionPage } from "@/content/model/page";\nimport type { CitationId } from "@/content/registry/citations";\n\nexport const ${camel(d)}Catholic = ${lit(pages[d])} satisfies TraditionPage<CitationId>;\n`,
  );
}

const cnt = (a) => (Array.isArray(a) ? a.length : a);
console.log(Object.entries(report).map(([k, v]) => `${k}: ${typeof v === "object" && !Array.isArray(v) ? JSON.stringify(v) : cnt(v)}`).join("\n"));
console.log("registry:", Object.keys(registry.works).length, "works,", Object.keys(registry.editions).length, "editions,", Object.keys(registry.citations).length, "citations,", Object.keys(registry.verses).length, "verses");
