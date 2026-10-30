const ED = {
  overbeck: `Inglés: Pedro Mogila, Confesión ortodoxa, ed. Overbeck, 1898 (inglés de 1762), pp. 75–80. Dominio público.`,
  schaff: `Griego: Philip Schaff, The Creeds of Christendom, vol. II, Nueva York, Harper & Brothers, 1877 (ejemplar de 1896), pp. 423–427 (Dositeo). Dominio público. Inglés: Blackmore, en Schaff, The Creeds of Christendom, vol. II, pp. 491–493 (Filareto). Dominio público.`
};

const LINKS = {
  overbeck: {href:`https://archive.org/details/cu31924029363094`, label:`Ver el escaneo de Overbeck en archive.org`},
  schaff: {href:`https://archive.org/details/creedschristendo02scha`, label:`Ver el escaneo de Schaff en archive.org`}
};

const WORK = {
  Dositheus: {title: (loc) => (loc.startsWith(`Question `) ? `Confesión de Dositeo (Sínodo de Jerusalén), pregunta ${loc.slice(9)}` : `Confesión de Dositeo (Sínodo de Jerusalén), decreto ${loc}`), short: (loc) => (loc.startsWith(`Question `) ? `Dositeo, pregunta ${loc.slice(9)}` : `Dositeo ${loc}`), date: `1672`},
  Mogila: {title: (loc) => `Pedro Mogila, Confesión ortodoxa I, pregunta ${loc}`, short: (loc) => `Mogila, pregunta ${loc}`, date: `1643`, ed: `overbeck`},
  Philaret: {title: (loc) => `Filareto, Catecismo extenso, pregunta ${loc}`, short: (loc) => `Filareto, pregunta ${loc}`, date: `1839`}
};

const SRC = {};
const LANGKEY = {Greek: `el`, English: `en`, Latin: `la`};

function cite(work, loc, excerpt) {
  const id = `O${work}${loc.replace(/[^\w]/g, "_")}`;
  if (!SRC[id]) SRC[id] = {kind:`Fuente`, title: WORK[work].title(loc), date: WORK[work].date, ed: ED[WORK[work].ed ?? `schaff`], url: LINKS[WORK[work].ed ?? `schaff`], ex: []};
  if (excerpt && !SRC[id].ex.some((e) => JSON.stringify(e) === JSON.stringify(excerpt))) SRC[id].ex.push(excerpt);
  return [id, WORK[work].short(loc)];
}

function entriesOf(text) {
  return dossier.boldEntries(text).map((entry) => {
    const excerpt = {[LANGKEY[entry.lang] ?? `en`]: entry.original};
    if (entry.spanish !== null) Object.assign(excerpt, {es: entry.spanish, esLv: `ia`, esFrom: `desde el griego`});
    const [id, label] = cite(entry.work, entry.loc, excerpt);
    return {id, label, original: entry.original, spanish: entry.spanish};
  });
}

const blockOf = (id) => dossier.block(id);
const between = (from, to) => dossier.text.split(from)[1].split(to)[0];
const say = (lead, entry) => `${lead} «${entry.spanish}»`;
const token = (entry) => `{c:${entry.id}|${entry.label}}`;
const sources = (entries) => [...new Map(entries.map((e) => [e.id, [e.id, e.label]])).values()];
const spanishOnly = (entries) => entries.filter((entry) => entry.spanish !== null);

const E = {
  DEF: entriesOf(between(`### Definition`, `### QE-1`)),
  QE6: entriesOf(blockOf(`QE-6`)),
  QE1: entriesOf(blockOf(`QE-1`)),
  QE2: entriesOf(blockOf(`QE-2`)),
  QE3: entriesOf(blockOf(`QE-3`)),
  QE4: entriesOf(blockOf(`QE-4`)),
  QE5: entriesOf(blockOf(`QE-5`)),
  PQ1: entriesOf(blockOf(`PQ-1`)),
  PQ2: entriesOf(blockOf(`PQ-2`)),
  CANON: entriesOf(between(`### Canon: Greek confession`, `### Canon: Russian catechetical witness`)),
  RUSSIAN: entriesOf(between(`### Canon: Russian catechetical witness`, `### Liturgical and catechetical reading`)),
  PSALMS: entriesOf(between(`### Liturgical and catechetical reading`, `### What has not been extracted`))
};

const dositheus = (entries) => spanishOnly(entries).filter((entry) => entry.id.startsWith(`ODositheus`));
const CONFESSION = (basis) => [{cat:`confession`, basis}];
const CATECHISM = (basis) => [{cat:`catechism`, basis}];

const DEFINITION = {
  text: `${say(`La Confesión de Dositeo confiesa:`, dositheus(E.DEF)[0])}.`,
  grades: CONFESSION(`Confesión de Dositeo, decreto II`),
  sources: sources(E.DEF)
};

const QE = [
  {id: `QE-1`, text: `Para el Catecismo extenso de Filareto, la Biblia son ciertos libros escritos por el Espíritu de Dios por medio de hombres santificados por Dios, llamados profetas y apóstoles (pregunta 19); y estos libros merecen atención antes que todos los demás (pregunta 20).`, grades: CATECHISM(`Catecismo extenso de Filareto, preguntas 19 y 20`), sources: [...sources(E.QE1), cite(`Philaret`, `20`)]},
  {id: `QE-2`, text: `El Catecismo extenso de Filareto responde que la revelación divina se difunde y se conserva en la verdadera Iglesia por dos canales: la santa tradición y la santa Escritura (pregunta 16).`, grades: CATECHISM(`Catecismo extenso de Filareto, pregunta 16`), sources: sources(E.QE2)},
  {id: `QE-3`, text: `Por santa tradición el Catecismo extenso de Filareto entiende la doctrina de la fe, la ley de Dios, los sacramentos y el ritual, tal como los transmitieron de unos a otros, de generación en generación, de palabra y con el ejemplo, los verdaderos creyentes y adoradores de Dios (pregunta 17); y dice que la Iglesia es su depositaria (pregunta 18).`, grades: CATECHISM(`Catecismo extenso de Filareto, preguntas 17 y 18`), sources: [...sources(E.QE3), cite(`Philaret`, `18`)]},
  {id: `QE-4`, text: `Según el Catecismo extenso de Filareto, la Escritura se escribió para que la revelación divina se conservara con más exactitud e inmutabilidad (pregunta 22).`, grades: CATECHISM(`Catecismo extenso de Filareto, pregunta 22`), sources: sources(E.QE4)},
  {id: `QE-5`, text: `El Catecismo extenso de Filareto recibe la tradición que concuerda con la revelación divina y con la santa Escritura, como lo enseña la propia Escritura (pregunta 23).`, grades: CATECHISM(`Catecismo extenso de Filareto, pregunta 23`), sources: sources(E.QE5)},
  {id: `QE-6`, text: `${say(`La Confesión de Dositeo enseña:`, dositheus(E.QE6)[0])}.`, grades: CONFESSION(`Confesión de Dositeo, decreto II`), sources: sources(E.QE6)},
  {id: `QE-7`, text: `Los testimonios sobre el canon no se funden: el Catecismo extenso de Filareto (preguntas 31 a 35) y la Confesión de Dositeo (pregunta III) difieren sobre los libros ausentes de la lista hebrea.`, grades: [...CATECHISM(`Catecismo extenso de Filareto, preguntas 31 a 35`), ...CONFESSION(`Confesión de Dositeo, pregunta III`)], sources: [cite(`Philaret`, `31`), ...sources(E.CANON)]}
];

const PORQUE = {
  intro: [
    `${say(`La Confesión de Dositeo dice:`, dositheus(E.PQ1)[0])} ${token(dositheus(E.PQ1)[0])}.`,
    `Y el Catecismo extenso de Filareto dice que el instrumento más antiguo y original para difundir la revelación divina es la santa tradición (pregunta 21) ${token(E.PQ2[0])}.`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `Para el Catecismo extenso de Filareto, la propia Escritura pide mantenerse firmes en las tradiciones aprendidas, de palabra o por carta (2 Tesalonicenses 2:15; pregunta 23).`
};

const ESCRITURA = [
  {ref: `1 Timoteo 3:15`, d: `El Catecismo extenso lo cita para la Iglesia como depositaria, columna y baluarte de la verdad (Filareto, pregunta 18); la Confesión de Dositeo apoya en la Iglesia su argumento (decreto II).`},
  {ref: `2 Tesalonicenses 2:15`, d: `El Catecismo extenso lo cita para la tradición enseñada de palabra o por carta (Filareto, pregunta 23).`},
  {ref: `Romanos 3:2`, d: `El Catecismo extenso lo cita para la recepción de los libros del Antiguo Testamento por medio de la Iglesia hebrea (Filareto, pregunta 32).`},
  {ref: `Lucas 24:44`, d: `El Catecismo extenso lo cita para la designación «Ley de Moisés» en su relato de los libros de la Escritura (Filareto, pregunta 37).`}
];

const VIVE = {
  intro: [
    `Para el Catecismo extenso de Filareto, el Salterio es un manual perfecto de oración y alabanza y por eso se usa continuamente en el culto divino de la Iglesia (pregunta 42) ${token(E.PSALMS[0])}.`,
    `${say(`Y la Confesión de Dositeo dice sobre el canon:`, dositheus(E.CANON)[0])} ${token(dositheus(E.CANON)[0])}.`
  ],
  items: [
    {id: `CV-1`, l: `El canon: la confesión griega`, d: `${say(`Tras enumerar los libros, la Confesión de Dositeo dice:`, dositheus(E.CANON)[0])}.`, s: sources(E.CANON)},
    {id: `CV-2`, l: `El canon: el testimonio ruso`, d: `El Catecismo extenso de Filareto cuenta los libros del Antiguo Testamento en veintidós, de acuerdo con los judíos y su lista hebrea original (pregunta 31); no incluye el Sirácida y otros libros porque no existen en hebreo (pregunta 34), y dice que fueron destinados a ser leídos por quienes se preparan para ingresar en la Iglesia (pregunta 35).`, s: sources(E.RUSSIAN)},
    {id: `CV-3`, l: `La lectura litúrgica`, d: `El Salterio es un manual perfecto de oración y alabanza, y por eso se usa continuamente en el culto divino de la Iglesia (pregunta 42).`, s: sources(E.PSALMS)}
  ]
};

const GRADES = {
  confession: {label: `Confesión de Dositeo (Jerusalén, 1672)`, def: `Confesión del Sínodo de Jerusalén de 1672. Pedro Mogila tiene la aprobación patriarcal de su revisión griega del 11 de marzo de 1643, limitada al griego y no a toda traducción posterior.`, src: cite(`Dositheus`, `II`)[0], srcLabel: `Dositeo II`},
  catechism: {label: `Catecismo extenso de Filareto (1839)`, def: `Catecismo sinodal ruso de 1839, con la numeración de preguntas de Schaff. Su descripción doctrinal no es un relevamiento de todas las Iglesias autocéfalas.`, src: cite(`Philaret`, `16`)[0], srcLabel: `Filareto, pregunta 16`}
};

const OBJ = {};

const META = {
  lede: `Cómo la Iglesia ortodoxa entiende la Escritura y la Tradición, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan los textos ortodoxos sobre la Escritura y la Tradición, con el lugar que cada texto ocupa entre ellos.`
};
