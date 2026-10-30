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

function entriesOf(text, fallback) {
  return dossier.quoteEntries(text).map((entry) => {
    const work = entry.work ?? fallback.work;
    const loc = entry.loc ?? fallback.loc;
    const excerpt = {[entry.lang ?? `de`]: entry.original, es: entry.spanish, esLv: `ia`, esFrom: entry.from === `from Latin` ? `desde el latín` : `desde el alemán`};
    const [id, label] = cite(work, loc, excerpt);
    return {id, label, spanish: entry.spanish};
  });
}

const blockOf = (id) => dossier.block(id);
const between = (from, to) => dossier.text.split(from)[1].split(to)[0];
const say = (lead, entry) => `${lead} «${entry.spanish}»`;
const token = (entry) => `{c:${entry.id}|${entry.label}}`;

const NONE = {work: `FC Ep`, loc: `RN 1`};

const withFallback = (text, fallback) => entriesOf(text, fallback);

const E = {
  DEF: withFallback(between(`### Definition`, `### QE-1`), {work: `FC Ep`, loc: `RN 1`}),
  QE1: withFallback(blockOf(`QE-1`), {work: `FC Ep`, loc: `RN 7`}),
  QE2: withFallback(blockOf(`QE-2`), {work: `FC Ep`, loc: `RN 2`}),
  QE3: withFallback(blockOf(`QE-3`), {work: `FC Ep`, loc: `RN 8`}),
  QE5: withFallback(blockOf(`QE-5`), {work: `SA`, loc: `II.2.15`}),
  QE6: withFallback(blockOf(`QE-6`), {work: `FC SD`, loc: `RN 10`}),
  PQ2: withFallback(blockOf(`PQ-2`), {work: `FC Ep`, loc: `RN 7`}),
  PQ3: withFallback(blockOf(`PQ-3`), {work: `FC SD`, loc: `RN 10`}),
  MINISTRY: withFallback(between(`### Word and sacramental ministry`, `### Churches, schools and homes`), {work: `AC`, loc: `XXVIII.8`}),
  HOMES: withFallback(between(`### Churches, schools and homes`, `### Limits of this account`), {work: `FC SD`, loc: `RN 8`})
};

const sources = (entries) => [...new Map(entries.map((e) => [e.id, [e.id, e.label]])).values()];

const DEFINITION = {
  text: `${say(`La Fórmula de Concordia confiesa:`, E.DEF[0])}.`,
  grades: [{cat:`scripture`, basis:`Epítome, Regla y norma 1`}],
  sources: sources(E.DEF)
};

const QE = [
  {id: `QE-1`, text: `La Fórmula de Concordia llama a la Escritura «${E.QE1[0].spanish}».`, grades: [{cat:`scripture`, basis:`Epítome, Regla y norma 1 y 7`}], sources: sources(E.QE1)},
  {id: `QE-2`, text: `${say(`La Fórmula de Concordia enseña:`, E.QE2[0])}.`, grades: [{cat:`witnesses`, basis:`Epítome, Regla y norma 2`}], sources: sources(E.QE2)},
  {id: `QE-3`, text: `${say(`La Fórmula de Concordia enseña:`, E.QE3[0])}.`, grades: [{cat:`confession`, basis:`Epítome, Regla y norma 8`}], sources: sources(E.QE3)},
  {id: `QE-4`, text: `La Fórmula de Concordia recibe, junto a la regla de la Escritura, los símbolos Apostólico, Niceno y Atanasiano (Regla y norma 3); la Confesión de Augsburgo inalterada, su Apología y los Artículos de Esmalcalda (Regla y norma 4); y los Catecismos Menor y Mayor, que llama la Biblia de los laicos (Regla y norma 5).`, grades: [{cat:`catechism`, basis:`Epítome, Regla y norma 3 a 5`}], sources: [cite(`FC Ep`, `RN 3`), cite(`FC Ep`, `RN 4`), cite(`FC Ep`, `RN 5`)]},
  {id: `QE-5`, text: `${say(`Los Artículos de Esmalcalda enseñan:`, E.QE5[0])}.`, grades: [{cat:`confession`, basis:`Artículos de Esmalcalda II.2.15`}], sources: sources(E.QE5)},
  {id: `QE-6`, text: `La Declaración sólida de la Fórmula de Concordia no rechaza «${E.QE6[0].spanish}».`, grades: [{cat:`confession`, basis:`Declaración sólida, Regla y norma 10`}], sources: sources(E.QE6)}
];

const PORQUE = {
  intro: [
    `Para la Fórmula de Concordia, la Escritura es «${E.PQ2[0].spanish}» ${token(E.PQ2[0])}.`,
    `Y explica la autoridad de su forma doctrinal común así: «${E.PQ3[0].spanish}» ${token(E.PQ3[0])}.`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `Para las confesiones luteranas, los símbolos y los escritos no son otro juez. ${say(`La Fórmula de Concordia lo dice así:`, E.QE3[0])} ${token(E.QE3[0])}.`
};

const ESCRITURA = [
  {ref: `Salmo 119:105`, d: `La Fórmula de Concordia une su afirmación de la regla con este versículo, la Escritura como lámpara que guía (Epítome, Regla y norma 1).`},
  {ref: `Gálatas 1:8`, d: `La Fórmula de Concordia lo une a la regla con la advertencia sobre un anuncio distinto, aun de un ángel (Epítome, Regla y norma 1).`},
  {ref: `1 Timoteo 3`, d: `La Declaración sólida lo cita para conservar la doctrina pura y refutar a quienes la contradicen (Declaración sólida, Regla y norma 14).`},
  {ref: `Tito 1:9`, d: `La Declaración sólida lo cita para el mismo oficio de enseñar (Declaración sólida, Regla y norma 14).`},
  {ref: `Juan 10:12; Jeremías 15:19`, d: `La Declaración sólida los cita para el cuidado del rebaño y para distinguir lo precioso de lo vil (Declaración sólida, Regla y norma 14).`},
  {ref: `Juan 20:21-23`, d: `La Confesión de Augsburgo lo cita para el ministerio del Evangelio y las llaves (art. XXVIII.5–6).`},
  {ref: `Marcos 16:15`, d: `La Confesión de Augsburgo lo cita para la proclamación del Evangelio (art. XXVIII.7).`},
  {ref: `Romanos 1:16`, d: `La Confesión de Augsburgo lo cita para el Evangelio como poder de Dios para salvación (art. XXVIII.9).`},
  {ref: `Juan 18:36; Lucas 12:14`, d: `La Confesión de Augsburgo los cita para distinguir el oficio de la Iglesia del oficio civil (art. XXVIII.13–15).`},
  {ref: `Filipenses 3:20; 2 Corintios 10:4`, d: `La Confesión de Augsburgo los cita para la ciudadanía celestial y las armas espirituales (art. XXVIII.16–17).`}
];

const VIVE = {
  intro: [
    `Para las confesiones luteranas, la regla de la Escritura se aplica a toda doctrina y a todo maestro (Epítome, Regla y norma 1).`,
    `La Fórmula de Concordia conserva también los libros útiles que explican la Escritura, siempre bajo esa regla (Declaración sólida, Regla y norma 10).`
  ],
  items: [
    {id: `CV-1`, l: `Examinar la enseñanza`, d: `La regla se aplica a las doctrinas y a los maestros, y la Fórmula conserva las explicaciones útiles bajo la condición que ella establece.`, s: [cite(`FC Ep`, `RN 1`), cite(`FC Ep`, `RN 7`), cite(`FC SD`, `RN 10`)]},
    {id: `CV-2`, l: `La Palabra y los sacramentos`, d: `${say(`La Confesión de Augsburgo describe así el poder de la Iglesia:`, E.MINISTRY[0])}.`, s: sources(E.MINISTRY)},
    {id: `CV-3`, l: `Iglesias, escuelas y casas`, d: `La Fórmula de Concordia informa que los catecismos fueron «${E.HOMES[0].spanish}».`, s: sources(E.HOMES)}
  ]
};

const clean = (cell) => cell
  .replace(/`\[[^`]*\]`/g, "")
  .replace(/\s*\((?:added|corrected|decided|merged)[^)]*\)/g, "")
  .replace(/\*/g, "")
  .replace(/\s+/g, " ")
  .trim();

const AUTH = readOtherDossier(`eucharist`, `lutheran`);
const AUTH_ROWS = AUTH.table(AUTH.section(6).split("**Grade of each text quoted:**")[0]);

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
  lede: `Cómo las confesiones luteranas entienden la Escritura como única regla y norma, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan las confesiones luteranas sobre la Escritura como regla y norma, con el lugar que cada texto ocupa en el Libro de Concordia.`
};
