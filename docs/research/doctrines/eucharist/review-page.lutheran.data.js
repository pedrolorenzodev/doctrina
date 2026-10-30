const ED = {
  triglot: `Concordia Triglotta, St. Louis, CPH, 1921 (alemán, latín, inglés; inglés según bookofconcord.org). Dominio público.`
};

const LINKS = {
  boc: {href:`https://bookofconcord.org`, label:`Leer en bookofconcord.org`}
};

const WORK = {
  AC: {title:`Confesión de Augsburgo`, short:`Confesión de Augsburgo`, date:`25 jun 1530`},
  Ap: {title:`Apología de la Confesión de Augsburgo`, short:`Apología`, date:`1531`},
  SA: {title:`Artículos de Esmalcalda`, short:`Esmalcalda`, date:`1537`},
  Tr: {title:`Tratado sobre el poder y la primacía del papa`, short:`Tratado`, date:`1537`},
  SC: {title:`Catecismo Menor (Lutero)`, short:`Catecismo Menor`, date:`1529`},
  LC: {title:`Catecismo Mayor (Lutero)`, short:`Catecismo Mayor`, date:`1529`},
  "FC Ep": {title:`Fórmula de Concordia, Epítome`, short:`Epítome`, date:`1577`},
  "FC SD": {title:`Fórmula de Concordia, Declaración Sólida`, short:`Declaración sólida`, date:`1577`}
};

const SRC = {};

function cite(work, loc, excerpt) {
  const id = `L${work.replace(/\W/g, "")}${loc.replace(/[^\w]/g, "_")}`;
  if (!SRC[id]) SRC[id] = {kind:`Fuente`, title:`${WORK[work].title} ${loc}`, date:WORK[work].date, ed:ED.triglot, url:LINKS.boc, ex:[]};
  if (excerpt && !SRC[id].ex.some((e) => JSON.stringify(e) === JSON.stringify(excerpt))) SRC[id].ex.push(excerpt);
  return [id, `${WORK[work].short} ${loc}`];
}

function sourcesOf(blockId) {
  const seen = new Set();
  return dossier.citationsOf(dossier.block(blockId)).map((c) => cite(c.work, c.loc, c.excerpt)).filter(([id]) => !seen.has(id) && seen.add(id));
}

const clean = (cell) => cell
  .replace(/`\[[^`]*\]`/g, "")
  .replace(/\s*\((?:added|corrected|decided|merged)[^)]*\)/g, "")
  .replace(/\*/g, "")
  .replace(/\s+/g, " ")
  .trim();

function siteCell(cell) {
  const text = clean(cell);
  if (!text.startsWith("«")) return text;
  let depth = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "«") depth++;
    else if (text[i] === "»" && --depth === 0) return text.slice(1, i);
  }
  return text;
}

function unwrap(cell) {
  const text = clean(cell);
  if (!text.startsWith("«")) return text;
  let depth = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "«") depth++;
    else if (text[i] === "»" && --depth === 0) return i === text.length - 1 ? text.slice(1, -1) : text;
  }
  return text;
}

const BOOK = {
  "1 Co": "1 Corintios", "2 Co": "2 Corintios", Mt: "Mateo", Mc: "Marcos", Lc: "Lucas", Jn: "Juan", Hch: "Hechos", Ro: "Romanos",
  Ef: "Efesios", Col: "Colosenses", Heb: "Hebreos", Is: "Isaías", Mal: "Malaquías", Lv: "Levítico", Sal: "Salmo", Gn: "Génesis"
};

const cleanRef = (ref) => ref
  .replace(/\s*\([^)]*\)/g, "")
  .replace(/\b(1 Co|2 Co|Mt|Mc|Lc|Jn|Hch|Ro|Ef|Col|Heb|Is|Mal|Lv|Sal|Gn)\b/g, (m) => BOOK[m]);

const QE_IDS = [`QE-1`, `QE-2`, `QE-3+4`, `QE-5`, `QE-6`, `QE-7`, `QE-8`, `QE-9`, `QE-10`];
const QUESTION_FORM = [`QE-7`, `QE-8`, `QE-9`];

const QE_GRADES = {
  "QE-1": [{cat:`augsburg`, basis:`art. X (1530); repetido en la Apología y como tesis afirmativa de la Fórmula de Concordia`}],
  "QE-2": [{cat:`thesis`, basis:`Epítome VII.7 y Declaración sólida VII`}],
  "QE-3+4": [{cat:`thesis`, basis:`Epítome VII.2, 15 y 16, y antítesis VII.42`}, {cat:`confession`, basis:`Artículos de Esmalcalda III.6.1 (1537)`}],
  "QE-5": [{cat:`thesis`, basis:`Epítome VII.8–9`}, {cat:`catechism`, basis:`Catecismo Mayor V`}],
  "QE-6": [{cat:`catechism`, basis:`Catecismo Menor VI (1529) y Catecismo Mayor V`}],
  "QE-7": [{cat:`confession`, basis:`Artículos de Esmalcalda III.6.5`}, {cat:`thesis`, basis:`antítesis, Epítome VII.22 y Declaración sólida VII.108`}],
  "QE-8": [{cat:`augsburg`, basis:`art. XXIV`}, {cat:`confession`, basis:`Apología XXIV (1531)`}, {cat:`thesis`, basis:`antítesis, Epítome VII.23`}],
  "QE-9": [{cat:`thesis`, basis:`Declaración sólida VII.83–87 (doctrina) y antítesis, VII.108 y 126 y Epítome VII.40`}],
  "QE-10": [{cat:`augsburg`, basis:`art. XXII`}, {cat:`confession`, basis:`Apología XXII y Artículos de Esmalcalda III.6.2–4`}, {cat:`thesis`, basis:`antítesis, Epítome VII.24`}]
};

const DEFINITION_BLOCK = dossier.section(1).split("### Statements")[0];

const DEFINITION = {
  text: dossier.siteText(DEFINITION_BLOCK, `Texto para el sitio \\(borrador\\), definición`),
  grades: [{cat:`catechism`, basis:`Catecismo Menor VI (1529)`}],
  sources: [cite(`SC`, `VI.1–2`, dossier.languageQuotes(DEFINITION_BLOCK))]
};

const QE = QE_IDS.map((id) => ({
  id,
  text: dossier.siteText(dossier.block(id), QUESTION_FORM.includes(id) ? `Respuesta` : `Texto para el sitio`),
  grades: QE_GRADES[id],
  sources: sourcesOf(id)
}));

const WHY_BLOCK = dossier.section(2);

const PORQUE = {
  intro: [dossier.siteText(WHY_BLOCK, `Texto para el sitio \\(borrador\\), introducción`)],
  fathers: [],
  note: dossier.lineQuote(dossier.block(`PQ-5`), `Note for the site`).replace(`Lo que escribieron los primeros cristianos`, `{g:Lo que escribieron los primeros cristianos}`),
  closing: dossier.siteText(WHY_BLOCK, `Texto para el sitio \\(borrador\\), frase de cierre`)
};

const ESCRITURA = dossier.table(dossier.section(3)).map((r) => ({ref: cleanRef(r[0]), d: siteCell(r[2])}));

function sourcesInCell(cell) {
  const out = [];
  for (const m of cell.matchAll(/(AC|Ap|SA|Tr|SC|LC|FC Ep|FC SD|SD)\s+([IVX]+(?:\.[^;(`]*)?)/g)) {
    const loc = m[2].replace(/\s+$/, "");
    if (loc) out.push(cite(m[1] === `SD` ? `FC SD` : m[1], loc));
  }
  return out;
}

const LIFE_BLOCK = dossier.section(5);

const VIVE = {
  intro: dossier.quotedParagraphs(LIFE_BLOCK).filter((p) => p.trim()),
  items: dossier.table(LIFE_BLOCK).map((r) => ({id: r[0], l: unwrap(r[1]), d: siteCell(r[2]), s: sourcesInCell(r[3])}))
};

const AUTH_ROWS = dossier.table(dossier.section(6).split("**Grade of each text quoted:**")[0]);

const AUTH_CITES = [
  [`scripture`, `FC Ep`, `RN 1 y 7`],
  [`confession`, `FC Ep`, `RN 8`],
  [`augsburg`, `FC Ep`, `RN 4`],
  [`catechism`, `FC Ep`, `RN 5`],
  [`thesis`, `FC Ep`, `VII`],
  [`witnesses`, `FC Ep`, `RN 2`],
  [`adiaphora`, `FC Ep`, `X.3`]
];

const GRADES = Object.fromEntries(AUTH_CITES.map(([cat, work, loc], i) => {
  const [id, label] = cite(work, loc);
  return [cat, {label: clean(AUTH_ROWS[i][0]), def: clean(AUTH_ROWS[i][1]), src: id, srcLabel: label}];
}));

const OBJ = {};

const META = {
  lede: `Cómo las confesiones luteranas entienden la Santa Cena, con sus propias fuentes.`,
  ensenaSub: dossier.siteText(dossier.section(1), `Texto para el sitio \\(borrador\\), subtítulo de la sección`)
};
