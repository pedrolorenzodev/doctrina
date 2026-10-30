const ED = {
  overbeck: `Inglés: Pedro Mogila, Confesión ortodoxa, ed. Overbeck, 1898 (inglés de 1762), pp. 75–80. Dominio público.`,
  schaff: `Griego: Philip Schaff, The Creeds of Christendom, vol. II, Nueva York, Harper & Brothers, 1877 (ejemplar de 1896), pp. 423–427 (Dositeo). Dominio público. Inglés: Blackmore, en Schaff, The Creeds of Christendom, vol. II, pp. 491–493 (Filareto). Dominio público.`
};

const LINKS = {
  overbeck: {href:`https://archive.org/details/cu31924029363094`, label:`Ver el escaneo de Overbeck en archive.org`},
  schaff: {href:`https://archive.org/details/creedschristendo02scha`, label:`Ver el escaneo de Schaff en archive.org`}
};

const WORK = {
  Dositheus: {title: (loc) => `Confesión de Dositeo (Sínodo de Jerusalén), decreto ${loc}`, short: (loc) => `Dositeo ${loc}`, date: `1672`},
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

const BLOCK = (from, to) => between(from, to);

const E = {
  DEF: entriesOf(between(`### Definition`, `### QE-1`)),
  QE1: entriesOf(blockOf(`QE-1`)),
  QE2: entriesOf(blockOf(`QE-2`)),
  QE3: entriesOf(blockOf(`QE-3`)),
  QE4: entriesOf(blockOf(`QE-4`)),
  QE5: entriesOf(blockOf(`QE-5`)),
  QE6: entriesOf(blockOf(`QE-6`)),
  PQ1: entriesOf(blockOf(`PQ-1`)),
  PQ2: entriesOf(blockOf(`PQ-2`)),
  PREP: entriesOf(BLOCK(`### Preparation of elements and faithful`, `### Examination, penitence, fasting and prayer`)),
  EXAM: entriesOf(BLOCK(`### Examination, penitence, fasting and prayer`, `### Frequency`)),
  FREQ: entriesOf(BLOCK(`### Frequency`, `### Participation without communion`)),
  PART: entriesOf(BLOCK(`### Participation without communion`, `### Honour and ordained celebration`)),
  HONOUR: entriesOf(BLOCK(`### Honour and ordained celebration`, `### Recensions and canonical directions`))
};

const dositheus = (entries) => spanishOnly(entries).filter((entry) => entry.id.startsWith(`ODositheus`));
const CONFESSION = (basis) => [{cat:`confession`, basis}];
const CATECHISM = (basis) => [{cat:`catechism`, basis}];
const STATUS_TEXT = dossier.block(`PQ-5`).match(/\*\*Estado del lenguaje histórico:\*\* (.*)/)[1];

SRC.STORT = {
  kind: `Estado actual`,
  title: `Confesión de Dositeo (Sínodo de Jerusalén): estado actual`,
  ed: `Línea de estado actual del sitio, redactada a partir de la suscripción histórica del Sínodo de Jerusalén (Schaff, p. 444).`,
  ex: [{es: STATUS_TEXT}]
};

const DEFINITION = {
  text: `${say(`La Confesión de Dositeo confiesa:`, dositheus(E.DEF)[0])}.`,
  grades: CONFESSION(`Confesión de Dositeo, decreto XVII`),
  sources: sources(E.DEF)
};

const QE = [
  {id: `QE-1`, text: `${say(`La Confesión de Dositeo enseña:`, dositheus(E.QE1)[0])}.`, grades: CONFESSION(`Confesión de Dositeo, decreto XVII`), sources: sources(E.QE1)},
  {id: `QE-2`, text: `${say(`La Confesión de Dositeo enseña:`, dositheus(E.QE2)[0])}.`, grades: CONFESSION(`Confesión de Dositeo, decreto XVII`), sources: sources(E.QE2)},
  {id: `QE-3`, text: `${say(`La Confesión de Dositeo enseña:`, dositheus(E.QE3)[0])}.`, grades: CONFESSION(`Confesión de Dositeo, decreto XVII`), sources: sources(E.QE3)},
  {id: `QE-4`, text: `${say(`La Confesión de Dositeo enseña:`, dositheus(E.QE4)[0])}.`, grades: CONFESSION(`Confesión de Dositeo, decreto XVII`), sources: sources(E.QE4)},
  {id: `QE-5`, text: `${say(`La Confesión de Dositeo enseña:`, dositheus(E.QE5)[0])}.`, grades: CONFESSION(`Confesión de Dositeo, decreto XVII`), sources: sources(E.QE5)},
  {id: `QE-6`, text: `${say(`La Confesión de Dositeo enseña:`, dositheus(E.QE6)[0])}. El Catecismo extenso de Filareto añade que el término no define el modo, que Dios conoce (preguntas 339 y 340).`, grades: [...CONFESSION(`Confesión de Dositeo, decreto XVII`), ...CATECHISM(`Catecismo extenso de Filareto, preguntas 339 y 340`)], status: [`STORT`], sources: sources(E.QE6)},
  {id: `QE-7`, text: `Pedro Mogila, en su Confesión ortodoxa (I.106–107), es el segundo testimonio confesional del siglo XVII y no una paráfrasis de Dositeo.`, grades: CONFESSION(`Confesión ortodoxa de Pedro Mogila I.106–107`), sources: [cite(`Mogila`, `106`), cite(`Mogila`, `107`)]}
];

const PORQUE = {
  intro: [
    `${say(`La Confesión de Dositeo transmite las palabras de Cristo:`, dositheus(E.PQ1)[0])} ${token(dositheus(E.PQ1)[0])}.`,
    `Y el Catecismo extenso de Filareto añade la invocación del Espíritu Santo y la bendición de los dones, el pan y el vino ofrecidos (pregunta 338) ${token(E.PQ2[0])}.`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `Para el Catecismo extenso de Filareto, quien comulga se une estrechamente con Jesucristo y participa de la vida eterna (pregunta 342), y la comunión significa que, siendo muchos, somos un solo pan y un solo cuerpo (pregunta 329).`
};

const ESCRITURA = [
  {ref: `Mateo 26:26-28`, d: `El Catecismo extenso lo cita para las palabras de la institución antes de la invocación (Filareto, pregunta 338); la Confesión de Dositeo transmite esas palabras (decreto XVII).`},
  {ref: `1 Corintios 10:17`, d: `El Catecismo extenso lo cita para un solo pan y un solo cuerpo (Filareto, pregunta 329).`},
  {ref: `1 Corintios 11:28-29`, d: `El Catecismo extenso lo cita para el examen y la recepción indigna (Filareto, pregunta 341).`},
  {ref: `Juan 6:54, 56`, d: `El Catecismo extenso lo cita para la unión con Cristo y la vida eterna (Filareto, pregunta 342).`},
  {ref: `Lucas 22:19`, d: `El Catecismo extenso lo cita para la oración, la fe y el recuerdo de quienes asisten sin comulgar (Filareto, pregunta 344).`},
  {ref: `1 Corintios 11:26`, d: `El Catecismo extenso lo cita para la continuación hasta la venida de Cristo (Filareto, pregunta 350).`},
  {ref: `Juan 19:34; 20:29`, d: `Mogila lo cita para el agua y la sangre, y para la fe y la vista (Mogila I.107).`}
];

const VIVE = {
  intro: [
    `Para el Catecismo extenso de Filareto, primero se preparan los elementos, luego los fieles y por último se consagra el sacramento (pregunta 323) ${token(E.PREP[0])}.`,
    `${say(`Y la Confesión de Dositeo dice:`, dositheus(E.HONOUR)[0])} ${token(dositheus(E.HONOUR)[0])}.`
  ],
  items: [
    {id: `CV-1`, l: `Preparar los elementos`, d: `Se prepara primero el pan, que es leudado, puro y de trigo (preguntas 323 y 328).`, s: sources(E.PREP)},
    {id: `CV-2`, l: `Examen, penitencia, ayuno y oración`, d: `Quien comulga debe examinar su conciencia ante Dios y limpiarla del pecado por la penitencia, con la ayuda del ayuno y de la oración (pregunta 341).`, s: sources(E.EXAM)},
    {id: `CV-3`, l: `La frecuencia, según el catecismo histórico`, d: `El catecismo ruso del siglo XIX llama a quienes quieren vivir religiosamente a confesarse con su padre espiritual y comulgar cuatro veces al año, o incluso cada mes, y exige a todos comulgar por lo menos una vez al año (pregunta 343).`, s: sources(E.FREQ)},
    {id: `CV-4`, l: `Participar sin comulgar`, d: `Quienes no comulgan pueden y deben participar en la Liturgia por la oración y la fe, y sobre todo por el recuerdo continuo de nuestro Señor Jesucristo (pregunta 344).`, s: sources(E.PART)},
    {id: `CV-5`, l: `La adoración`, d: `${say(`La Confesión de Dositeo dice:`, dositheus(E.HONOUR)[0])}.`, s: sources(E.HONOUR)}
  ]
};

const GRADES = {
  confession: {label: `Confesión de Dositeo (Jerusalén, 1672)`, def: `Confesión del Sínodo de Jerusalén de 1672. Pedro Mogila tiene la aprobación patriarcal de su revisión griega del 11 de marzo de 1643, limitada al griego y no a toda traducción posterior.`, src: cite(`Dositheus`, `XVII`)[0], srcLabel: `Dositeo XVII`},
  catechism: {label: `Catecismo extenso de Filareto (1839)`, def: `Catecismo sinodal ruso de 1839, con la numeración de preguntas de Schaff. Su descripción doctrinal no es un relevamiento de todas las Iglesias autocéfalas.`, src: cite(`Philaret`, `338`)[0], srcLabel: `Filareto, pregunta 338`}
};

const OBJ = {};

const META = {
  lede: `Cómo la Iglesia ortodoxa entiende la Eucaristía, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan los textos ortodoxos sobre la Eucaristía, con el lugar que cada texto ocupa entre ellos.`
};
