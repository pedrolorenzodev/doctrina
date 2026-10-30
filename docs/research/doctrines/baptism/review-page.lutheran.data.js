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

const NONE = {work: `SC`, loc: `IV`};

const E = {
  QE1: entriesOf(blockOf(`QE-1`), NONE),
  QE2: entriesOf(blockOf(`QE-2`), NONE),
  QE3: entriesOf(blockOf(`QE-3`), NONE),
  QE4: entriesOf(blockOf(`QE-4`), NONE),
  QE5: entriesOf(blockOf(`QE-5`), NONE),
  QE6: entriesOf(blockOf(`QE-6`), NONE),
  DEF: entriesOf(between(`### Definition`, `### QE-1`), {work: `SC`, loc: `IV.6`}),
  PQ1: entriesOf(blockOf(`PQ-1`), NONE),
  PQ3: entriesOf(blockOf(`PQ-3`), NONE),
  HOUSE: entriesOf(between(`### Teaching in the household`, `### Administration and recipients`), NONE),
  REMAINS: entriesOf(between(`### Baptism remains; repentance returns to it`, `## Grado de autoridad`), {work: `LC`, loc: `IV.77`})
};

const sources = (entries) => [...new Map(entries.map((e) => [e.id, [e.id, e.label]])).values()];

const GRADE_LINES = {
  "QE-1": [{cat:`catechism`, basis:`Catecismo Menor IV (1529)`}],
  "QE-2": [{cat:`augsburg`, basis:`art. IX`}],
  "QE-3": [{cat:`catechism`, basis:`Catecismo Menor IV (1529)`}],
  "QE-4": [{cat:`catechism`, basis:`Catecismo Mayor IV`}],
  "QE-5": [{cat:`confession`, basis:`Apología IX (1531)`}],
  "QE-6": [{cat:`catechism`, basis:`Catecismo Menor IV (1529)`}]
};

const DEFINITION = {
  text: `Para las confesiones luteranas, el bautismo se define así: «${E.DEF[0].spanish}».`,
  grades: [{cat:`catechism`, basis:`Catecismo Menor IV (1529)`}],
  sources: sources(E.DEF)
};

const QE = [
  {id: `QE-1`, text: `${say(`El Catecismo Menor enseña:`, E.QE1[0])}.`, entries: E.QE1},
  {id: `QE-2`, text: `${say(`La Confesión de Augsburgo enseña, en su texto latino:`, E.QE2[0])}. ${say(`Y en su texto alemán:`, E.QE2[1])}.`, entries: E.QE2},
  {id: `QE-3`, text: `${say(`El Catecismo Menor enseña:`, E.QE3[0])}. ${say(`Y continúa:`, E.QE3[1])}.`, entries: E.QE3},
  {id: `QE-4`, text: `${say(`El Catecismo Mayor enseña:`, E.QE4[0])}.`, entries: E.QE4},
  {id: `QE-5`, text: `${say(`La Apología de la Confesión de Augsburgo enseña:`, E.QE5[0])}.`, entries: E.QE5},
  {id: `QE-6`, text: `${say(`El Catecismo Menor enseña:`, E.QE6[0])}.`, entries: E.QE6}
].map(({id, text, entries}) => ({id, text, grades: GRADE_LINES[id], sources: sources(entries)}));

const PORQUE = {
  intro: [
    `Las confesiones luteranas fundan el bautismo en la institución y el mandato de Dios: «${E.PQ1[0].spanish}» ${token(E.PQ1[0])}.`,
    `Y sostienen que la promesa de salvación alcanza también a los niños: «${E.QE5[0].spanish}» ${token(E.QE5[0])}.`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `Para las confesiones luteranas, en el bautismo obra Dios y no quien lo administra. El Catecismo Mayor dice: «${E.PQ3[0].spanish}» ${token(E.PQ3[0])}.`
};

const ESCRITURA = [
  {ref: `Mateo 28:19`, d: `El Catecismo Menor funda el bautismo en la institución de Cristo y en el nombre del Padre, del Hijo y del Espíritu Santo (Catecismo Menor IV.3–4).`},
  {ref: `Marcos 16:16`, d: `El Catecismo Menor cita este versículo como la promesa de salvación para quien cree y es bautizado (Catecismo Menor IV.7–8).`},
  {ref: `Tito 3:5-7`, d: `El Catecismo Menor lo cita para el lavamiento de la regeneración y de la renovación (Catecismo Menor IV.10).`},
  {ref: `Romanos 6:4`, d: `El Catecismo Menor lo cita para la vida nueva que el bautismo significa cada día (Catecismo Menor IV.13–14).`},
  {ref: `Mateo 28:19`, d: `La Apología aplica el mandato de bautizar también a los niños (Apología IX.52).`},
  {ref: `Efesios 5:26`, d: `Los Artículos de Esmalcalda lo citan con la expresión «lavacrum in verbo» (Artículos de Esmalcalda III.5.1).`},
  {ref: `Efesios 4:5-6`, d: `La Confesión de Augsburgo lo cita para la unidad de la fe y del bautismo (art. VII).`},
  {ref: `Mateo 23:2`, d: `La Confesión de Augsburgo lo cita para la eficacia del bautismo aun cuando el ministro es indigno (art. VIII.1–2).`},
  {ref: `Marcos 16:16`, d: `El Catecismo Mayor lo cita para la fe que recibe el tesoro prometido (Catecismo Mayor IV.33–34).`}
];

const VIVE = {
  intro: [
    `Para las confesiones luteranas, el padre de familia enseña el bautismo a los de su casa: el Catecismo Menor dice que debe hacerlo «con sencillez» ${token(E.HOUSE[0])}.`,
    `El bautismo no se repite: «${E.REMAINS[0].spanish}» ${token(E.REMAINS[0])}.`
  ],
  items: [
    {id: `CV-1`, l: `El agua con la palabra`, d: `El bautismo es agua unida al mandato y a la palabra de Dios.`, s: [cite(`SC`, `IV.2`)]},
    {id: `CV-2`, l: `El nombre`, d: `Se bautiza en el nombre del Padre, del Hijo y del Espíritu Santo.`, s: [cite(`SC`, `IV.4`)]},
    {id: `CV-3`, l: `Los niños`, d: `Se bautiza a los niños: la gracia y la promesa no se les niegan por la edad.`, s: [cite(`AC`, `IX`), cite(`Ap`, `IX.52`)]},
    {id: `CV-4`, l: `La fe y la oración`, d: `Se lleva a los niños con la esperanza y la oración de que Dios les dé fe.`, s: [cite(`LC`, `IV.57`)]},
    {id: `CV-5`, l: `La vida diaria`, d: `La contrición, el arrepentimiento y la vida nueva se viven cada día.`, s: [cite(`SC`, `IV.12`)]},
    {id: `CV-6`, l: `Volver al bautismo`, d: `Tras el pecado se vuelve al bautismo, no se busca otro lavado.`, s: [cite(`LC`, `IV.77–79`)]}
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
  lede: `Cómo las confesiones luteranas entienden el bautismo, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan las confesiones luteranas sobre el bautismo, con el lugar que cada texto ocupa en el Libro de Concordia.`
};
