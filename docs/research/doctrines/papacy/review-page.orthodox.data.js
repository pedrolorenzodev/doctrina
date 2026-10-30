const ED = {
  percival: `Inglés: Henry R. Percival (ed.), The Seven Ecumenical Councils of the Undivided Church, Nicene and Post-Nicene Fathers, segunda serie, vol. XIV, 1900, pp. 178, 287 y 382. Dominio público.`,
  enc1895: `Griego: Encíclica patriarcal y sinodal de Antimo VII (1895), ed. E. Metallinos, Answer of the Great Church of Constantinople to the Papal Encyclical on Union, Manchester, 1896, pp. 42 y 48. Dominio público.`,
  overbeck: `Inglés: Pedro Mogila, Confesión ortodoxa, ed. Overbeck, 1898 (inglés de 1762), pp. 75–80. Dominio público.`,
  schaff: `Griego: Philip Schaff, The Creeds of Christendom, vol. II, Nueva York, Harper & Brothers, 1877 (ejemplar de 1896), pp. 423–427 (Dositeo). Dominio público. Inglés: Blackmore, en Schaff, The Creeds of Christendom, vol. II, pp. 491–493 (Filareto). Dominio público.`
};

const LINKS = {
  enc1895: {href:`https://archive.org/details/answerofgreatchu0000eust`, label:`Ver el escaneo de Metallinos en archive.org`},
  overbeck: {href:`https://archive.org/details/cu31924029363094`, label:`Ver el escaneo de Overbeck en archive.org`},
  schaff: {href:`https://archive.org/details/creedschristendo02scha`, label:`Ver el escaneo de Schaff en archive.org`}
};

const WORK = {
  Dositheus: {title: (loc) => (loc.startsWith(`Question `) ? `Confesión de Dositeo (Sínodo de Jerusalén), pregunta ${loc.slice(9)}` : `Confesión de Dositeo (Sínodo de Jerusalén), decreto ${loc}`), short: (loc) => (loc.startsWith(`Question `) ? `Dositeo, pregunta ${loc.slice(9)}` : `Dositeo ${loc}`), date: `1672`},
  Mogila: {title: (loc) => `Pedro Mogila, Confesión ortodoxa I, pregunta ${loc}`, short: (loc) => `Mogila, pregunta ${loc}`, date: `1643`, ed: `overbeck`},
  "Constantinople I": {title: (loc) => `Primer Concilio de Constantinopla, canon ${loc}`, short: (loc) => `Constantinopla I, canon ${loc}`, date: `381`, ed: `percival`},
  Chalcedon: {title: (loc) => `Concilio de Calcedonia, canon ${loc}`, short: (loc) => `Calcedonia, canon ${loc}`, date: `451`, ed: `percival`},
  Trullo: {title: (loc) => `Concilio Quinisexto (Trulo), canon ${loc}`, short: (loc) => `Trulo, canon ${loc}`, date: `692`, ed: `percival`},
  "1895 encyclical": {title: (loc) => `Encíclica patriarcal y sinodal de 1895, §${loc}`, short: (loc) => `Encíclica de 1895, §${loc}`, date: `1895`, ed: `enc1895`},
  Philaret: {title: (loc) => `Filareto, Catecismo extenso, pregunta ${loc}`, short: (loc) => `Filareto, pregunta ${loc}`, date: `1839`}
};

const SRC = {};
const LANGKEY = {Greek: `el`, English: `en`, Latin: `la`};

function cite(work, loc, excerpt) {
  const id = `O${work.replace(/\W/g, "")}${loc.replace(/[^\w]/g, "_")}`;
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
  QE1: entriesOf(blockOf(`QE-1`)),
  QE2: entriesOf(blockOf(`QE-2`)),
  QE3: entriesOf(blockOf(`QE-3`)),
  QE4: entriesOf(blockOf(`QE-4`)),
  QE5: entriesOf(blockOf(`QE-5`)),
  QE7: entriesOf(blockOf(`QE-7`)),
  QE8: entriesOf(blockOf(`QE-8`)),
  QE9: entriesOf(blockOf(`QE-9`)),
  PQ1: entriesOf(blockOf(`PQ-1`)),
  PQ2: entriesOf(blockOf(`PQ-2`)),
  PQ4: entriesOf(blockOf(`PQ-4`)),
  PQ6: entriesOf(blockOf(`PQ-6`)),
  BISHOP: entriesOf(between(`### Distinct episcopal service`, `### Where obedience is learned`)),
  OBEY: entriesOf(between(`### Where obedience is learned`, `### The canons' specific scope`))
};

const spanishQuote = (entries, prefix) => spanishOnly(entries).filter((entry) => entry.id.startsWith(prefix));
const CONFESSION = (basis) => [{cat:`confession`, basis}];
const CATECHISM = (basis) => [{cat:`catechism`, basis}];

SRC.STDOS = {
  kind: `Estado actual`,
  title: `Confesión de Dositeo (Sínodo de Jerusalén), decreto X: estado actual`,
  ed: `Línea de estado actual del sitio, redactada a partir de la nota de estado del dossier (testimonio griego de Schaff; revisión de 1690 según el mapa; Krivoshein).`,
  ex: [{es: `Estado actual: esta cláusula se lee en el testimonio griego de Schaff y el mapa la asocia con la revisión de 1690; Krivoshein atribuye explícitamente esa adición a la tercera edición, Iași 1690. No se cotejaron las ediciones originales.`}]
};

const DEFINITION = {
  text: `Para el Catecismo extenso de Filareto, Jesucristo es la cabeza de la Iglesia y el salvador del cuerpo (pregunta 272).`,
  grades: CATECHISM(`Catecismo extenso de Filareto, pregunta 272`),
  sources: sources(E.DEF)
};

const QE = [
  {id: `QE-1`, text: `${say(`La Confesión de Dositeo enseña:`, spanishQuote(E.QE1, `ODositheus`)[0])}.`, grades: CONFESSION(`Confesión de Dositeo, decreto X`), sources: sources(E.QE1)},
  {id: `QE-2`, text: `El Catecismo extenso de Filareto llama apostólica a la Iglesia porque tiene de los apóstoles, sin interrupción ni cambio, tanto su doctrina como la sucesión de los dones del Espíritu Santo por la imposición de manos consagradas (pregunta 274).`, grades: CATECHISM(`Catecismo extenso de Filareto, pregunta 274`), sources: sources(E.QE2)},
  {id: `QE-3`, text: `Según el Catecismo extenso de Filareto, la jerarquía procede del mismo Jesucristo y de la venida del Espíritu Santo sobre los apóstoles, y desde entonces continúa en sucesión ininterrumpida por la imposición de manos, en el sacramento del Orden (pregunta 277).`, grades: CATECHISM(`Catecismo extenso de Filareto, pregunta 277`), sources: sources(E.QE3)},
  {id: `QE-4`, text: `A la pregunta por qué autoridad jerárquica puede actuar sobre toda la Iglesia católica, el Catecismo extenso de Filareto responde: un Concilio ecuménico (pregunta 278). Y sobre las divisiones principales de la Iglesia: bajo los patriarcas ortodoxos y el Santísimo Sínodo (pregunta 279), formulación histórica de la época sinodal rusa.`, grades: CATECHISM(`Catecismo extenso de Filareto, preguntas 278 y 279`), sources: sources(E.QE4)},
  {id: `QE-5`, text: `${say(`La Confesión de Dositeo enseña:`, spanishQuote(E.QE5, `ODositheus`)[0])}.`, grades: CONFESSION(`Confesión de Dositeo, decreto X`), status: [`STDOS`], sources: sources(E.QE5)},
  {id: `QE-6`, text: `Los cánones conciliares recibidos ordenan las sedes y sus privilegios: Constantinopla I (canon 3), Calcedonia (canon 28) y Trulo (canon 36). Se muestran junto a la confesión sobre Cristo y no en su lugar.`, grades: CONFESSION(`Cánones de Constantinopla I, Calcedonia y Trulo`), sources: [cite(`Constantinople I`, `3`), cite(`Chalcedon`, `28`), cite(`Trullo`, `36`)]},
  {id: `QE-7`, text: `Según el Catecismo extenso de Filareto, la Iglesia nunca apostatará de la fe, ni pecará contra la verdad de la fe, ni caerá en error (pregunta 271).`, grades: CATECHISM(`Catecismo extenso de Filareto, pregunta 271`), sources: sources(E.QE7)},
  {id: `QE-8`, text: `El Primer Concilio de Constantinopla (canon 3) da al obispo de Constantinopla la prerrogativa de honor después del obispo de Roma, porque Constantinopla es la Nueva Roma. El Concilio Quinisexto (canon 36) dice que la sede de Constantinopla tendrá iguales privilegios que la antigua Roma y será segunda después de ella, seguida por Alejandría, Antioquía y Jerusalén.`, grades: CONFESSION(`Constantinopla I, canon 3, y Trulo, canon 36`), sources: sources(E.QE8)},
  {id: `QE-9`, text: `${say(`La encíclica patriarcal y sinodal de 1895 dice:`, spanishQuote(E.QE9, `O1895`)[0])}.`, grades: CONFESSION(`Encíclica patriarcal y sinodal de 1895, §XVIII`), status: [`ST1895~p`], sources: sources(E.QE9)}
];

const PORQUE = {
  intro: [
    `${say(`La Confesión de Dositeo dice:`, spanishQuote(E.PQ1, `ODositheus`)[0])} ${token(spanishQuote(E.PQ1, `ODositheus`)[0])}.`,
    `Y el Catecismo extenso de Filareto dice que la Iglesia está edificada sobre el fundamento de los apóstoles y profetas, siendo Jesucristo mismo la piedra angular (pregunta 274) ${token(E.PQ2[0])}.`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `${say(`Para la encíclica patriarcal y sinodal de 1895:`, spanishQuote(E.PQ6, `O1895`)[0])} ${token(spanishQuote(E.PQ6, `O1895`)[0])}.`
};

const ESCRITURA = [
  {ref: `Efesios 5:23`, d: `El Catecismo extenso lo cita para Cristo como cabeza y salvador del cuerpo (Filareto, pregunta 272).`},
  {ref: `Efesios 2:19-20`, d: `El Catecismo extenso lo cita para el fundamento apostólico y Cristo como piedra angular (Filareto, pregunta 274).`},
  {ref: `Efesios 4:11-12`, d: `El Catecismo extenso lo cita para los dones y el ministerio para la edificación (Filareto, pregunta 277).`},
  {ref: `2 Tesalonicenses 2:15`, d: `El Catecismo extenso lo cita para mantener la enseñanza apostólica de palabra o por carta (Filareto, pregunta 275).`},
  {ref: `Tito 3:10; 1:10-11`, d: `El Catecismo extenso lo cita para su disciplina frente a la falsa enseñanza (Filareto, pregunta 275).`},
  {ref: `Mateo 18:17`, d: `El Catecismo extenso lo cita para oír a la Iglesia (Filareto, pregunta 275).`},
  {ref: `Gálatas 2:11`, d: `La encíclica de 1895 lo cita en su argumento sobre la corrección de Pedro (encíclica, §XVIII).`}
];

const VIVE = {
  intro: [
    `${say(`Para la Confesión de Dositeo, el obispo se distingue del sacerdote:`, spanishQuote(E.BISHOP, `ODositheus`)[0])} ${token(spanishQuote(E.BISHOP, `ODositheus`)[0])}.`,
    `Para el Catecismo extenso de Filareto, la obediencia se aprende de la Escritura, de los cánones de los santos apóstoles, de los concilios ecuménicos y provinciales, de los santos padres y de los libros de reglas y rúbricas eclesiásticas (pregunta 282) ${token(E.OBEY[0])}.`
  ],
  items: [
    {id: `CV-1`, l: `El servicio episcopal`, d: `${say(`La Confesión de Dositeo dice:`, spanishQuote(E.BISHOP, `ODositheus`)[0])}.`, s: sources(E.BISHOP)},
    {id: `CV-2`, l: `Dónde se aprende la obediencia`, d: `El Catecismo extenso de Filareto dice que se aprende de la Escritura, de los cánones de los santos apóstoles, de los concilios ecuménicos y provinciales, de los santos padres y de los libros de reglas y rúbricas eclesiásticas (pregunta 282).`, s: sources(E.OBEY)}
  ]
};

const GRADES = {
  confession: {label: `Confesión de Dositeo (Jerusalén, 1672)`, def: `Confesión del Sínodo de Jerusalén de 1672. Los cánones de Constantinopla I, Calcedonia y Trulo pertenecen al nivel conciliar del mapa, y la encíclica patriarcal y sinodal de 1895 es una respuesta fechada del patriarca Antimo VII y los firmantes; no es un concilio ecuménico.`, src: cite(`Dositheus`, `X`)[0], srcLabel: `Dositeo X`},
  catechism: {label: `Catecismo extenso de Filareto (1839)`, def: `Catecismo sinodal ruso de 1839, con la numeración de preguntas de Schaff. Su descripción doctrinal no es un relevamiento de todas las Iglesias autocéfalas.`, src: cite(`Philaret`, `272`)[0], srcLabel: `Filareto, pregunta 272`}
};

const OBJ = {};

const META = {
  lede: `Cómo la Iglesia ortodoxa entiende a Cristo como cabeza de la Iglesia y el ministerio, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan los textos ortodoxos sobre la cabeza de la Iglesia y el ministerio, con el lugar que cada texto ocupa entre ellos.`
};
