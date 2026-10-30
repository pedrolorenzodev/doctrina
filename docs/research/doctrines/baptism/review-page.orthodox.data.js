const ED = {
  schaff: `Griego: Philip Schaff, The Creeds of Christendom, vol. II, Nueva York, Harper & Brothers, 1877 (ejemplar de 1896), pp. 423–427 (Dositeo). Dominio público. Inglés: Blackmore, en Schaff, The Creeds of Christendom, vol. II, pp. 491–493 (Filareto). Dominio público.`
};

const LINKS = {
  schaff: {href:`https://archive.org/details/creedschristendo02scha`, label:`Ver el escaneo de Schaff en archive.org`}
};

const WORK = {
  Dositheus: {title: (loc) => `Confesión de Dositeo (Sínodo de Jerusalén), decreto ${loc}`, short: (loc) => `Dositeo ${loc}`, date: `1672`},
  Philaret: {title: (loc) => `Filareto, Catecismo extenso, pregunta ${loc}`, short: (loc) => `Filareto, pregunta ${loc}`, date: `1839`}
};

const SRC = {};
const LANGKEY = {Greek: `el`, English: `en`, Latin: `la`};

function cite(work, loc, excerpt) {
  const id = `O${work}${loc.replace(/[^\w]/g, "_")}`;
  if (!SRC[id]) SRC[id] = {kind:`Fuente`, title: WORK[work].title(loc), date: WORK[work].date, ed: ED.schaff, url: LINKS.schaff, ex: []};
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
  QE1: entriesOf(blockOf(`QE-1`)),
  QE2: entriesOf(blockOf(`QE-2`)),
  QE3: entriesOf(blockOf(`QE-3`)),
  QE4: entriesOf(blockOf(`QE-4`)),
  QE5: entriesOf(blockOf(`QE-5`)),
  PQ1: entriesOf(blockOf(`PQ-1`)),
  PQ2: entriesOf(blockOf(`PQ-2`)),
  PQ3: entriesOf(blockOf(`PQ-3`)),
  PQ4: entriesOf(blockOf(`PQ-4`)),
  MINISTER: entriesOf(between(`### The appointed minister and necessity`, `### Exorcism and visible signs`)),
  SIGNS: entriesOf(between(`### Exorcism and visible signs`, `### Reception of converts`)),
  PROFESSION: entriesOf(between(`### The profession before baptism`, `### Sponsors afterward`)),
  SPONSORS: entriesOf(between(`### Sponsors afterward`, `### The appointed minister and necessity`))
};

const dositheus = (entries) => spanishOnly(entries).filter((entry) => entry.id.startsWith(`ODositheus`));
const CHARACTER = dossier.block(`QE-5`).match(/\*\*(Para la confesión de Dositeo[^*]+)\*\*/)[1];

const ORT = (basis) => [{cat:`confession`, basis}];
const CAT = (basis) => [{cat:`catechism`, basis}];

const DEFINITION = {
  text: `Para el Catecismo extenso de Filareto, el bautismo es un sacramento en el cual el creyente, sumergido tres veces en agua en el nombre de Dios Padre, Hijo y Espíritu Santo, muere a la vida carnal del pecado y nace de nuevo del Espíritu a una vida espiritual y santa (pregunta 288).`,
  grades: CAT(`Catecismo extenso de Filareto, pregunta 288`),
  sources: sources(E.DEF)
};

const QE = [
  {id: `QE-1`, text: `${say(`La Confesión de Dositeo enseña:`, dositheus(E.QE1)[0])}.`, grades: ORT(`Confesión de Dositeo, decreto XVI`), sources: sources(E.QE1)},
  {id: `QE-2`, text: `${say(`La Confesión de Dositeo enseña:`, dositheus(E.QE2)[0])}. El Catecismo extenso de Filareto responde que el bautismo se administra por inmersión triple en agua, en el nombre del Padre, del Hijo y del Espíritu Santo (pregunta 290).`, grades: [...ORT(`Confesión de Dositeo, decreto XVI`), ...CAT(`Catecismo extenso de Filareto, pregunta 290`)], sources: sources(E.QE2)},
  {id: `QE-3`, text: `${say(`La Confesión de Dositeo enseña:`, dositheus(E.QE3)[0])}.`, grades: ORT(`Confesión de Dositeo, decreto XVI`), sources: sources(E.QE3)},
  {id: `QE-4`, text: `Para el Catecismo extenso de Filareto, los niños se bautizan por la fe de sus padres y padrinos, que además deben enseñarles la fe cuando tengan edad para aprender (pregunta 292).`, grades: CAT(`Catecismo extenso de Filareto, pregunta 292`), sources: sources(E.QE4)},
  {id: `QE-5`, text: `${CHARACTER} El Catecismo extenso de Filareto añade que el bautismo no puede repetirse (pregunta 303) y que después del pecado hay un camino, que es la penitencia (pregunta 306).`, grades: [...ORT(`Confesión de Dositeo, decreto XVI`), ...CAT(`Catecismo extenso de Filareto, preguntas 303 y 306`)], sources: sources(E.QE5)},
  {id: `QE-6`, text: `La Confesión de Dositeo habla de la recepción de quienes recibieron el bautismo con fe deficiente y dice que no se los bautiza de nuevo al adquirir la fe plena (decreto XV).`, grades: ORT(`Confesión de Dositeo, decreto XV`), sources: [cite(`Dositheus`, `XV`)]}
];

const PORQUE = {
  intro: [
    `Para el Catecismo extenso de Filareto, el bautismo se funda en el mandato del Cristo resucitado a los apóstoles de ir, enseñar a todas las naciones y bautizarlas en el nombre del Padre, del Hijo y del Espíritu Santo (pregunta 289) ${token(E.PQ1[0])}.`,
    `${say(`Y la Confesión de Dositeo cita la palabra del Señor:`, dositheus(E.PQ2)[0])} ${token(dositheus(E.PQ2)[0])}.`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `${say(`Para la Confesión de Dositeo, los niños también necesitan el bautismo:`, dositheus(E.PQ3)[0])} ${token(dositheus(E.PQ3)[0])}.`
};

const ESCRITURA = [
  {ref: `Juan 3:5`, d: `El Catecismo extenso de Filareto y la Confesión de Dositeo lo citan para el nacimiento de agua y de Espíritu, cada uno con su propia redacción (Filareto, pregunta 288; Dositeo, decreto XVI).`},
  {ref: `Hechos 19:4`, d: `El Catecismo extenso lo cita para el bautismo de arrepentimiento de Juan y la fe en el que había de venir (Filareto, pregunta 289).`},
  {ref: `Mateo 28:19`, d: `El Catecismo extenso lo cita para el mandato del Cristo resucitado y el nombre trino (Filareto, pregunta 289).`},
  {ref: `Hechos 2:38`, d: `El Catecismo extenso lo cita para el arrepentimiento, el bautismo, la remisión y el don del Espíritu (Filareto, pregunta 291).`},
  {ref: `Marcos 16:16`, d: `El Catecismo extenso lo cita para la fe y el bautismo (Filareto, pregunta 291).`},
  {ref: `Colosenses 2:11-12`, d: `El Catecismo extenso lo cita para la circuncisión y la sepultura con Cristo en el bautismo (Filareto, pregunta 294).`},
  {ref: `Efesios 2:2`, d: `El Catecismo extenso lo cita para explicar el exorcismo (Filareto, pregunta 296).`},
  {ref: `Marcos 16:17`, d: `El Catecismo extenso lo cita para la invocación en el nombre de Cristo (Filareto, pregunta 297).`},
  {ref: `Mateo 16:24`, d: `El Catecismo extenso lo cita para la cruz dada al bautizado y el discipulado (Filareto, pregunta 301).`},
  {ref: `2 Pedro 2:20`, d: `El Catecismo extenso lo cita como advertencia sobre el pecado después del bautismo (Filareto, pregunta 305).`}
];

const VIVE = {
  intro: [
    `Para el Catecismo extenso de Filareto, antes del bautismo se pide arrepentimiento y fe, y por eso se recita el Credo (pregunta 291) ${token(E.PROFESSION[0])}.`,
    `${say(`Y la Confesión de Dositeo dice quién bautiza:`, dositheus(E.MINISTER)[0])} ${token(dositheus(E.MINISTER)[0])}.`
  ],
  items: [
    {id: `CV-1`, l: `La profesión antes del bautismo`, d: `Se piden arrepentimiento y fe, y por eso antes del bautismo se recita el Credo.`, s: sources(E.PROFESSION)},
    {id: `CV-2`, l: `Los padrinos después`, d: `Los padrinos responden ante la Iglesia por la fe del bautizado y, después del bautismo, se encargan de él para afirmarlo en la fe.`, s: sources(E.SPONSORS)},
    {id: `CV-3`, l: `Quién bautiza`, d: `${say(`La Confesión de Dositeo dice:`, dositheus(E.MINISTER)[0])}.`, s: sources(E.MINISTER)},
    {id: `CV-4`, l: `El exorcismo`, d: `El Catecismo extenso explica que el exorcismo obra en el nombre de Jesucristo, invocado con oración y fe (pregunta 297).`, s: [cite(`Philaret`, `297`)]},
    {id: `CV-5`, l: `El vestido blanco`, d: `El vestido blanco significa la pureza del alma y de la vida cristiana (pregunta 300).`, s: [cite(`Philaret`, `300`)]},
    {id: `CV-6`, l: `La procesión con luz`, d: `La procesión alrededor de la pila con una luz significa la alegría espiritual unida a la iluminación espiritual (pregunta 302).`, s: [cite(`Philaret`, `302`)]}
  ]
};

const GRADES = {
  confession: {label: `Confesión de Dositeo (Jerusalén, 1672)`, def: `Confesión del Sínodo de Jerusalén de 1672. Pedro Mogila tiene la aprobación patriarcal de su revisión griega del 11 de marzo de 1643, limitada al griego y no a toda traducción posterior.`, src: cite(`Dositheus`, `XVI`)[0], srcLabel: `Dositeo XVI`},
  catechism: {label: `Catecismo extenso de Filareto (1839)`, def: `Catecismo sinodal ruso de 1839, con la numeración de preguntas de Schaff. Su descripción doctrinal no es un relevamiento de todas las Iglesias autocéfalas.`, src: cite(`Philaret`, `288`)[0], srcLabel: `Filareto, pregunta 288`}
};

const OBJ = {};

const META = {
  lede: `Cómo la Iglesia ortodoxa entiende el bautismo, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan los textos ortodoxos sobre el bautismo, con el lugar que cada texto ocupa entre ellos.`
};
