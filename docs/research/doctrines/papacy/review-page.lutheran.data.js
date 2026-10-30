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

const NONE = {work: `Tr`, loc: `60`};

const E = {
  DEF: entriesOf(between(`### Definition`, `### QE-1`), NONE),
  QE1: entriesOf(blockOf(`QE-1`), NONE),
  QE3: entriesOf(blockOf(`QE-3`), NONE),
  QE5: entriesOf(blockOf(`QE-5`), NONE),
  PQ1: entriesOf(blockOf(`PQ-1`), NONE),
  PQ3: entriesOf(blockOf(`PQ-3`), NONE),
  PQ4: entriesOf(blockOf(`PQ-4`), NONE),
  DISC: entriesOf(between(`### Discipline and restoration`, `### Government and equality of office`), NONE)
};

const sources = (entries) => [...new Map(entries.map((e) => [e.id, [e.id, e.label]])).values()];

SRC.STSA = {
  kind: `Estado actual`,
  title: `Artículos de Esmalcalda y Fórmula de Concordia: estado actual`,
  ed: `Línea de estado actual del sitio, redactada a partir de la constitución de cada cuerpo luterano (LCMS, ELCA).`,
  ex: [{es: readOtherDossier(`eucharist`, `lutheran`).lineQuote(readOtherDossier(`eucharist`, `lutheran`).block(`QE-7`), `Estado actual`)}]
};

const DEFINITION = {
  text: `${say(`El Tratado sobre el poder y la primacía del papa confiesa:`, E.DEF[0])}.`,
  grades: [{cat:`confession`, basis:`Tratado 60 (1537)`}],
  sources: sources(E.DEF)
};

const QE = [
  {id: `QE-1`, text: `${say(`El Tratado sobre el poder y la primacía del papa enseña:`, E.QE1[0])}.`, grades: [{cat:`confession`, basis:`Tratado 61 (1537)`}], sources: sources(E.QE1)},
  {id: `QE-2`, text: `La Confesión de Augsburgo llama poder de las llaves, o poder de los obispos según el Evangelio, al mandato de Dios de predicar, perdonar y retener los pecados y administrar los sacramentos (art. XXVIII.5).`, grades: [{cat:`augsburg`, basis:`art. XXVIII`}], sources: [cite(`AC`, `XXVIII.5`)]},
  {id: `QE-3`, text: `${say(`El Tratado enseña:`, E.QE3[0])}.`, grades: [{cat:`confession`, basis:`Tratado 24 (1537)`}], sources: sources(E.QE3)},
  {id: `QE-4`, text: `El Tratado sostiene que el obispo de Roma no es superior por derecho divino a los demás obispos y pastores (Tratado 7). Los Artículos de Esmalcalda niegan que el papa sea la cabeza de toda la Iglesia por derecho divino, atribuyen esa jefatura a Jesucristo y lo describen como obispo y pastor de Roma y de quienes se le unen (II.4.1).`, grades: [{cat:`confession`, basis:`Tratado 7 y Artículos de Esmalcalda II.4.1`}], sources: [cite(`Tr`, `7`), cite(`SA`, `II.4.1`)]},
  {id: `QE-5`, text: `${say(`Los Artículos de Esmalcalda, en su formulación histórica, afirman:`, E.QE5[0])}.`, grades: [{cat:`confession`, basis:`Artículos de Esmalcalda II.4.10`}], status: [`STSA`], sources: sources(E.QE5)},
  {id: `QE-6`, text: `Los Artículos de Esmalcalda consideran como hipótesis una cabeza elegida por autoridad humana, por la paz y la unidad, con las limitaciones y críticas que ellos mismos señalan (II.4.7–9). La suscripción individual de Melanchthon da su propia formulación condicionada, de derecho humano; ninguna de las dos se toma como la enseñanza de toda la colección.`, grades: [{cat:`confession`, basis:`Artículos de Esmalcalda II.4.7–9`}], sources: [cite(`SA`, `II.4.7–9`)]}
];

const PORQUE = {
  intro: [
    `Para el Tratado, Cristo envió por igual a los apóstoles: «${E.PQ1[0].spanish}» ${token(E.PQ1[0])}.`,
    `Y en las palabras dirigidas a Pedro, el Tratado ve a Pedro representando a la asamblea de los apóstoles: «${E.PQ3[0].spanish}» ${token(E.PQ3[0])}.`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `Sobre Mateo 16, el Tratado dice: «${E.PQ4[0].spanish}» ${token(E.PQ4[0])}.`
};

const ESCRITURA = [
  {ref: `Lucas 22:25`, d: `El Tratado lo cita para contraponer el servicio común al dominio entre los apóstoles (Tratado 8).`},
  {ref: `Mateo 18:2`, d: `El Tratado lo cita en la disputa sobre quién es el mayor, con el niño como ejemplo (Tratado 8).`},
  {ref: `Juan 20:21`, d: `El Tratado lo cita para el envío igual de los apóstoles (Tratado 9).`},
  {ref: `Gálatas 2:7`, d: `El Tratado lo cita para el llamamiento de Pablo y su relación con Pedro (Tratado 10).`},
  {ref: `1 Corintios 3:6`, d: `El Tratado lo cita para los ministros y la iglesia (Tratado 11).`},
  {ref: `Mateo 16:18-19`, d: `El Tratado lo cita para Pedro, la roca, las llaves y la confesión (Tratado 22–25).`},
  {ref: `Juan 21:15`, d: `El Tratado nombra «Apacienta mis ovejas» entre los textos disputados (Tratado 22).`},
  {ref: `Mateo 18:18`, d: `El Tratado lo cita para el encargo en plural junto a la palabra dirigida a uno (Tratado 23).`},
  {ref: `Juan 20:23`, d: `El Tratado lo cita para las llaves dadas a todos los apóstoles (Tratado 23).`},
  {ref: `Mateo 18:19`, d: `El Tratado lo cita para las llaves que pertenecen a la iglesia (Tratado 24).`},
  {ref: `2 Tesalonicenses 2:4`, d: `Los Artículos de Esmalcalda lo citan en la designación histórica de Anticristo (II.4.10–11).`},
  {ref: `Tito 1:5`, d: `El Tratado lo cita, por medio de Jerónimo, para obispos y presbíteros (Tratado 62).`},
  {ref: `Juan 20:21-23; Marcos 16:15`, d: `La Confesión de Augsburgo los cita para el ministerio del Evangelio y las llaves (art. XXVIII.5–7).`},
  {ref: `Romanos 1:16`, d: `La Confesión de Augsburgo lo cita para el Evangelio como poder de Dios para salvación (art. XXVIII.9).`},
  {ref: `Juan 18:36; Lucas 12:14`, d: `La Confesión de Augsburgo los cita para distinguir el oficio de la Iglesia del oficio civil (art. XXVIII.13–15).`}
];

const VIVE = {
  intro: [
    `Para las confesiones luteranas, el poder de la Iglesia se ejerce enseñando y predicando la Palabra y administrando los sacramentos, según el llamamiento (Confesión de Augsburgo XXVIII.8).`,
    `El Tratado añade la jurisdicción: «${E.DISC[0].spanish}» ${token(E.DISC[0])}.`
  ],
  items: [
    {id: `CV-1`, l: `Enseñar y administrar los sacramentos`, d: `El poder de la Iglesia se ejerce enseñando o predicando la Palabra y administrando los sacramentos, según el llamamiento.`, s: [cite(`AC`, `XXVIII.8`)]},
    {id: `CV-2`, l: `Disciplina y restauración`, d: `${say(`El Tratado describe la jurisdicción así:`, E.DISC[0])}.`, s: sources(E.DISC)},
    {id: `CV-3`, l: `Gobierno e igualdad de oficio`, d: `El Tratado atribuye el poder a quienes presiden las iglesias, se los llame pastores, presbíteros u obispos.`, s: [cite(`Tr`, `61`)]},
    {id: `CV-4`, l: `El juicio de la Iglesia`, d: `El Tratado llama a los juicios sinodales juicios de la Iglesia y no de los pontífices, y habla de juzgar y decidir desde la Palabra de Dios.`, s: [cite(`Tr`, `56`)]}
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
  lede: `Cómo las confesiones luteranas entienden el ministerio y el papado, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan las confesiones luteranas sobre el ministerio y el papado, con el lugar que cada texto ocupa en el Libro de Concordia.`
};
