const ED = {
  wcf: `Inglés: The Confession of Faith (texto de 1647), Edimburgo, Johnstone, Hunter & Co., 1894. Español: Doctrinas y reglamentos de la Iglesia Presbiteriana, Monterrey, Tipografía del Comercio, 1880 (numeración americana). Dominio público.`
};

const LINKS = {
  wcf: {href:`https://archive.org/details/confessionoffaith00chur`, label:`Ver el escaneo de 1894 en archive.org`},
  wcf1880: {href:`https://archive.org/details/doctrinasyreglam00west`, label:`Ver el escaneo de 1880 en archive.org`}
};

const WORK = {
  WCF: {title:`Confesión de Westminster`, short:`Westminster`, date:`1647`},
  WLC: {title:`Catecismo Mayor de Westminster`, short:`Catecismo Mayor de Westminster`, date:`1647`},
  WSC: {title:`Catecismo Menor de Westminster`, short:`Catecismo Menor de Westminster`, date:`1647`}
};

const SRC = {};

function cite(work, loc, excerpt) {
  const id = `R${work}${loc.replace(/[^\w]/g, "_")}`;
  if (!SRC[id]) SRC[id] = {kind:`Fuente`, title:`${WORK[work].title} ${loc}`, date:WORK[work].date, ed:ED.wcf, url:LINKS.wcf1880, ex:[]};
  if (excerpt && !SRC[id].ex.some((e) => JSON.stringify(e) === JSON.stringify(excerpt))) SRC[id].ex.push(excerpt);
  return [id, `${WORK[work].short} ${loc}`];
}

const FROM = {"from German": `desde el alemán`, "from Latin": `desde el latín`, "from English": `desde el inglés`};

function entriesOf(text, fallback) {
  return dossier.quoteEntries(text).map((entry) => {
    const work = entry.work ?? fallback.work;
    const loc = entry.loc ?? fallback.loc;
    const excerpt = entry.original === null
      ? {es: entry.spanish}
      : entry.spanish === null
        ? {[entry.lang ?? `en`]: entry.original}
        : {[entry.lang ?? `en`]: entry.original, es: entry.spanish, esLv: `ia`, esFrom: FROM[entry.from] ?? `desde el inglés`};
    const [id, label] = cite(work, loc, excerpt);
    return {id, label, spanish: entry.spanish ?? entry.original};
  });
}

const blockOf = (id) => dossier.block(id);
const between = (from, to) => dossier.text.split(from)[1].split(to)[0];
const say = (lead, entry) => `${lead} «${entry.spanish}»`;
const token = (entry) => `{c:${entry.id}|${entry.label}}`;
const sources = (entries) => [...new Map(entries.map((e) => [e.id, [e.id, e.label]])).values()];

const E = {
  DEF: entriesOf(between(`### Definition`, `### QE-1`), {work: `WCF`, loc: `25.1`}),
  QE1: entriesOf(blockOf(`QE-1`), {work: `WCF`, loc: `25.2`}),
  QE2: entriesOf(blockOf(`QE-2`), {work: `WCF`, loc: `25.3`}),
  QE4: entriesOf(blockOf(`QE-4`), {work: `WCF`, loc: `25.6`}),
  QE5: entriesOf(blockOf(`QE-5`), {work: `WCF`, loc: `25.5`}),
  PQ1: entriesOf(blockOf(`PQ-1`), {work: `WSC`, loc: `26`}),
  PQ3: entriesOf(blockOf(`PQ-3`), {work: `WCF`, loc: `30.2`}),
  PQ4: entriesOf(blockOf(`PQ-4`), {work: `WCF`, loc: `30.3`}),
  GOV: entriesOf(between(`### Government in the document's words`, `### Censures and restoration`), {work: `WCF`, loc: `30.1`}),
  CENS: entriesOf(between(`### Censures and restoration`, `### Councils, submission and limits`), {work: `WCF`, loc: `30.4`})
};

const STD = (basis) => [{cat:`standards`, basis}];

const DEFINITION = {
  text: `${say(`La Confesión de Westminster describe así la iglesia universal e invisible:`, E.DEF[0])}.`,
  grades: STD(`Confesión de Westminster 25.1`),
  sources: sources(E.DEF)
};

const QE = [
  {id: `QE-1`, text: `${say(`La Confesión de Westminster nombra la iglesia visible:`, E.QE1[0])}.`, grades: STD(`Confesión de Westminster 25.2`), sources: sources(E.QE1)},
  {id: `QE-2`, text: `${say(`La Confesión de Westminster enseña:`, E.QE2[0])}.`, grades: STD(`Confesión de Westminster 25.3`), sources: sources(E.QE2)},
  {id: `QE-3`, text: `${say(`La Confesión de Westminster enseña:`, E.GOV[0])}.`, grades: STD(`Confesión de Westminster 30.1`), sources: sources(E.GOV)},
  {id: `QE-4`, text: `${say(`La Confesión de Westminster, en su texto histórico, enseña:`, E.QE4[0])}.`, grades: STD(`Confesión de Westminster 25.6`), status: [`STWCF~p`], sources: sources(E.QE4)},
  {id: `QE-5`, text: `${say(`La Confesión de Westminster dice de las iglesias más puras:`, E.QE5[0])}. ${say(`Y dice:`, E.QE5[1])}.`, grades: STD(`Confesión de Westminster 25.5`), sources: sources(E.QE5)},
  {id: `QE-6`, text: `La Confesión de Westminster, en su numeración histórica, atribuye a los sínodos y concilios la determinación ministerial de controversias, casos de conciencia, culto y gobierno, con sumisión a lo que concuerde con la Palabra de Dios (31.3), y dice que pueden errar (31.4).`, grades: STD(`Confesión de Westminster 31.3 y 31.4, numeración histórica`), sources: [cite(`WCF`, `31.3`), cite(`WCF`, `31.4`)]}
];

const PORQUE = {
  intro: [
    `Para el Catecismo Menor de Westminster, Cristo ejerce su oficio de Rey: «${E.PQ1[0].spanish}» ${token(E.PQ1[0])}.`,
    `Y la Confesión dice de los oficiales de la iglesia: «${E.PQ3[0].spanish}» ${token(E.PQ3[0])}.`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `Sobre la disciplina, la Confesión de Westminster dice: «${E.PQ4[0].spanish}» ${token(E.PQ4[0])}.`
};

const ESCRITURA = [
  {ref: `Efesios 1:10, 22-23`, d: `La Confesión de Westminster lo cita para la reunión y la jefatura (Confesión 25.1).`},
  {ref: `Colosenses 1:18`, d: `La Confesión de Westminster lo cita para Cristo como cabeza (Confesión 25.1 y 25.6).`},
  {ref: `Efesios 5:23, 27, 32`, d: `La Confesión de Westminster lo cita para la iglesia como esposa y cuerpo (Confesión 25.1).`},
  {ref: `1 Corintios 1:2; 12:12-13`, d: `La Confesión de Westminster lo cita para la iglesia visible en muchos lugares y un solo cuerpo (Confesión 25.2).`},
  {ref: `Efesios 4:11-13`, d: `La Confesión de Westminster lo cita para el ministerio y la perfección de los santos (Confesión 25.3).`},
  {ref: `Isaías 59:21; Mateo 28:19-20`, d: `La Confesión de Westminster lo cita para el Espíritu, la palabra y la comisión que continúa (Confesión 25.3).`},
  {ref: `1 Corintios 13:12; Mateo 13:24-30, 47`, d: `La Confesión de Westminster lo cita para la falibilidad y la mezcla (Confesión 25.5).`},
  {ref: `Mateo 16:18`, d: `La Confesión de Westminster lo cita para la permanencia de la iglesia (Confesión 25.5).`},
  {ref: `Efesios 1:22`, d: `La Confesión de Westminster lo cita para la jefatura de Cristo (Confesión 25.6).`},
  {ref: `Mateo 23:8-10`, d: `La Confesión de Westminster lo cita para el rechazo de otra cabeza (Confesión 25.6).`},
  {ref: `2 Tesalonicenses 2:3-5`, d: `La Confesión de Westminster lo cita para la cláusula histórica sobre el Anticristo (Confesión 25.6).`},
  {ref: `Isaías 9:6-7`, d: `La Confesión de Westminster lo cita para el gobierno de Cristo (Confesión 30.1).`},
  {ref: `1 Timoteo 5:17; 1 Tesalonicenses 5:12`, d: `La Confesión de Westminster lo cita para los oficiales y el gobierno (Confesión 30.1).`},
  {ref: `1 Corintios 12:28; Salmo 2:6-9; Juan 18:36`, d: `La Confesión de Westminster lo cita para los oficios y el reino de Cristo (Confesión 30.1).`},
  {ref: `Mateo 16:19; 18:17-18`, d: `La Confesión de Westminster lo cita para las llaves y la disciplina (Confesión 30.2).`},
  {ref: `Juan 20:21-23; 2 Corintios 2:6-8`, d: `La Confesión de Westminster lo cita para la remisión y la restauración (Confesión 30.2).`},
  {ref: `1 Corintios 5; 1 Timoteo 5:20`, d: `La Confesión de Westminster lo cita para los fines de la disciplina (Confesión 30.3).`},
  {ref: `Hechos 15:15, 19, 24, 27-31; 16:4; Mateo 18:17-20`, d: `La Confesión de Westminster lo cita para las determinaciones ministeriales (Confesión 31.3, numeración histórica).`},
  {ref: `Efesios 2:20; Hechos 17:11; 1 Corintios 2:5; 2 Corintios 1:24`, d: `La Confesión de Westminster lo cita para los concilios falibles como ayuda (Confesión 31.4, numeración histórica).`}
];

const VIVE = {
  intro: [
    `${say(`Para los Estándares de Westminster, el gobierno de la Iglesia es este:`, E.GOV[0])} ${token(E.GOV[0])}.`,
    `${say(`Y la Confesión prescribe la disciplina:`, E.CENS[0])} ${token(E.CENS[0])}.`
  ],
  items: [
    {id: `CV-1`, l: `El gobierno de la Iglesia`, d: `${say(`La Confesión de Westminster dice:`, E.GOV[0])}.`, s: sources(E.GOV)},
    {id: `CV-2`, l: `Censuras y restauración`, d: `${say(`La Confesión de Westminster prescribe:`, E.CENS[0])}.`, s: [cite(`WCF`, `30.2`), ...sources(E.CENS)]},
    {id: `CV-3`, l: `Concilios, sumisión y límites`, d: `La Confesión histórica prescribe decisiones sobre controversias, conciencia, culto y gobierno (31.3), las califica con la posibilidad de error (31.4) y limita su asunto propio a lo eclesiástico (31.5).`, s: [cite(`WCF`, `31.3`), cite(`WCF`, `31.4`), cite(`WCF`, `31.5`)]}
  ]
};

const GRADES = {
  scripture: {label: `Escritura: juez supremo`, def: `El Espíritu Santo, que habla en las Escrituras, es el Juez supremo por quien toda controversia religiosa tiene que decidirse (Confesión 1.10).`, src: cite(`WCF`, `1.10`)[0], srcLabel: `Westminster 1.10`},
  standards: {label: `Estándares de Westminster`, def: `La Confesión y los Catecismos de Westminster son normas subordinadas a la Escritura: los concilios pueden errar y ayudan a la fe sin constituir su regla (Confesión 31.4); sus determinaciones, si concuerdan con la Escritura, se reciben con reverencia y sumisión (Confesión 31.3).`, src: cite(`WCF`, `31.3–4`)[0], srcLabel: `Westminster 31.3–4`}
};

const OBJ = {};

const META = {
  lede: `Cómo los Estándares de Westminster entienden la Iglesia, su gobierno y el papado, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan los Estándares de Westminster sobre la Iglesia, su gobierno y el papado, con el lugar que cada texto ocupa entre ellos.`
};
