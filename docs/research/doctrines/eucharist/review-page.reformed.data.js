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

const clean = (cell) => cell.replace(/\s*\[verified[^\]]*\]/g, "").replace(/“/g, "«").replace(/”/g, "»").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();

const SECTION = (from, to) => dossier.text.split(from)[1].split(to)[0];
const ROWS = dossier.table(SECTION(`### Afirmaciones doctrinales`, `### Lo que esta posición niega`));
const NEGATIONS = [...SECTION(`### Lo que esta posición niega`, `### Lenguaje histórico`).matchAll(/^- \*\*(¿[^*]+\?)\*\* (.+)$/gm)].map((m) => ({question: m[1], answer: clean(m[2])}));
const HISTORIC = SECTION(`### Lenguaje histórico severo y lectura actual`, `## Por qué`);
const QUOTE = (pattern) => dossier.text.match(pattern)[1];

const WCF = (loc) => cite(`WCF`, loc);
const WCF_SPANISH = (loc, text) => cite(`WCF`, loc, {es: text});

const SHORT_QUOTE = QUOTE(/^> «([^»]+)»\. — WCF 29\.7/m);
const MASS = QUOTE(/«(el sacrificio papal de la misa[^»]+)»/);
const TRANSUBSTANTIATION = QUOTE(/«(ha sido y es, la causa[^»]+)»/);
const STATUS = HISTORIC.match(/\*\*Estado actual:\*\* (.+)/)[1].replace(/\s*\[verified[^\]]*\]\s*$/, "").trim();

SRC.STWCF = {
  kind: `Estado actual`,
  title: `Confesión de Westminster 29.2 y 29.6: estado actual`,
  ed: `Línea de estado actual del sitio, redactada a partir de las constituciones y actas de cada cuerpo reformado.`,
  ex: [{es: STATUS}]
};

const SOURCE_REFS = (cell) => [...cell.matchAll(/\b(WCF|WLC|WSC)\s+(\d+(?:\.\d+)?(?:[–-]\d+)?)/g)].map((m) => cite(m[1], m[2], m[1] === `WCF` && m[2] === `29.7` ? {es: SHORT_QUOTE} : m[1] === `WCF` && m[2] === `29.2` ? {es: MASS} : m[1] === `WCF` && m[2] === `29.6` ? {es: TRANSUBSTANTIATION} : undefined));
const LEAD = (cell) => {
  const parts = [...cell.matchAll(/\b(WCF|WLC|WSC)\s+(\d+(?:\.\d+)?(?:[–-]\d+)?)/g)].map((m) => [m[1], m[2]]);
  const name = {WCF: `la Confesión de Westminster`, WLC: `el Catecismo Mayor de Westminster`, WSC: `el Catecismo Menor de Westminster`};
  return `Según ${parts.map(([work, loc]) => `${name[work]} (${loc})`).join(` y `)}:`;
};
const PLAIN = (text) => text.replace(/\bWCF (\d+\.\d+)/g, `la Confesión de Westminster ($1)`).replace(/\bWLC (\d+)/g, `el Catecismo Mayor ($1)`).replace(/\bWSC (\d+)/g, `el Catecismo Menor ($1)`);

const STD = (basis) => [{cat:`standards`, basis}];

const DEFINITION = {
  text: `${SECTION(`### Respuesta breve`, `### Afirmaciones doctrinales`).split("\n").filter((line) => line.startsWith(`Para los Estándares`))[0].replace(/\s*\(WCF[^)]*\)\s*\[verified[^\]]*\]\s*$/, "")}`,
  grades: STD(`Confesión de Westminster 29.1, 29.5 y 29.7`),
  sources: [WCF(`29.1`), WCF_SPANISH(`29.7`, SHORT_QUOTE), WCF(`29.5`)]
};

const STATUS_ON = [`29.2`, `29.6`];

const QE = [
  ...ROWS.map((row, index) => {
    const refs = SOURCE_REFS(row[2]);
    return {
      id: `QE-${index + 1}`,
      text: `${LEAD(row[2])} ${clean(row[1])}`,
      grades: STD(clean(row[2]).replace(/\bWCF /g, `Confesión de Westminster `).replace(/\bWLC /g, `Catecismo Mayor `).replace(/\bWSC /g, `Catecismo Menor `).replace(/;/g, ` y`)),
      ...(row[0] === `Único sacrificio` ? {status: [`STWCF`]} : {}),
      sources: refs
    };
  }),
  ...NEGATIONS.map((negation, index) => ({
    id: `QE-${ROWS.length + index + 1}`,
    question: negation.question,
    text: PLAIN(negation.answer).replace(/^No\. la /, `No. La `),
    grades: STD(`Confesión de Westminster ${(negation.answer.match(/WCF (\d+\.\d+)/) ?? [])[1] ?? `29`}`),
    ...(negation.question.includes(`cambian de sustancia`) ? {status: [`STWCF`]} : {}),
    sources: SOURCE_REFS(negation.answer)
  }))
];

const PORQUE = {
  intro: [
    `Para los Estándares de Westminster, la Cena se funda en la institución de Cristo: él ordenó dar y recibir pan y vino, y vinculó ese acto con el anuncio de su muerte (Confesión 27.1–3 y 29.1).`,
    `Y el signo no reemplaza la realidad espiritual: el pan y el vino conservan su sustancia, pero guardan una relación sacramental tan estrecha con Cristo crucificado que reciben los nombres de su cuerpo y sangre (Confesión 29.5).`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `Para los Estándares de Westminster, la Cena se lee bajo la suficiencia de la ofrenda única de Cristo: la Iglesia proclama, recuerda y agradece esa muerte, sin repetirla ni añadir otra propiciación (Confesión 29.2).`
};

const BOOKS = {Mt: `Mateo`, Mr: `Marcos`, Lc: `Lucas`, Hch: `Hechos`, Heb: `Hebreos`, "1 Co": `1 Corintios`, "2 Co": `2 Corintios`};
const REF = (text) => text.replace(/\b(1 Co|2 Co|Mt|Mr|Lc|Hch|Heb)\b/g, (m) => BOOKS[m]);
const FUNCTION_ROWS = dossier.table(SECTION(`## La Escritura en los Estándares de Westminster`, `### Cómo razona con los textos principales`));
const lowerFirst = (text) => text.charAt(0).toLowerCase() + text.slice(1);

const ESCRITURA = FUNCTION_ROWS.map((row) => ({
  ref: REF(row[1]),
  d: `La Confesión y los Catecismos de Westminster citan estos textos para ${lowerFirst(clean(row[0]))} (${PLAIN(clean(row[2])).replace(/;/g, `;`)}).`
}));

const VIVE = {
  intro: [
    `Para los Estándares de Westminster, quien comulga se examina antes, atiende durante y considera después su conducta (Catecismo Mayor 171–175).`,
    `La Cena se administra repetidamente a quienes tienen edad y capacidad para examinarse (Catecismo Mayor 173 y 177).`
  ],
  items: [
    {id: `CV-1`, l: `Antes`, d: `El comulgante se examina acerca de su unión con Cristo, sus pecados, su conocimiento, su fe, su arrepentimiento, su amor, su perdón y su deseo de Cristo y de nueva obediencia, y renueva esas gracias con meditación y oración; el examen no exige ausencia de dudas (Catecismo Mayor 171–172; Catecismo Menor 97).`, s: [cite(`WLC`, `171–172`), cite(`WSC`, `97`)]},
    {id: `CV-2`, l: `Durante`, d: `La congregación recibe ambos elementos de un ministro de la Palabra; los participantes atienden con reverencia, observan las acciones sacramentales, disciernen el cuerpo del Señor y meditan en su muerte (Confesión 29.3; Catecismo Mayor 169 y 174).`, s: [cite(`WCF`, `29.3`), cite(`WLC`, `169`), cite(`WLC`, `174`)]},
    {id: `CV-3`, l: `Después`, d: `El creyente considera su conducta y el fruto de la celebración; si recibió consuelo, agradece, pide continuidad, vigila contra recaídas, cumple sus votos y persevera en la Cena (Catecismo Mayor 175).`, s: [cite(`WLC`, `175`)]},
    {id: `CV-4`, l: `Admisión y frecuencia`, d: `La Cena se administra repetidamente a quienes tienen edad y capacidad para examinarse; la Iglesia puede excluir a quien permanece ignorante o escandaloso hasta que reciba instrucción y muestre reforma (Confesión 29.8; Catecismo Mayor 173 y 177).`, s: [cite(`WCF`, `29.8`), cite(`WLC`, `173`), cite(`WLC`, `177`)]}
  ]
};

const GRADES = {
  scripture: {label: `Escritura: única regla infalible`, def: `Juez final de toda controversia; la autoridad de la Iglesia es ministerial y declarativa.`, src: cite(`WCF`, `1.10`)[0], srcLabel: `Westminster 1.10`},
  standards: {label: `Estándares subordinados de Westminster`, def: `Vinculan especialmente a los oficiales según la forma de suscripción de cada cuerpo; son falibles y reformables bajo la Escritura.`, src: cite(`WCF`, `31.3–4`)[0], srcLabel: `Westminster 31.3–4`}
};

const OBJ = {};

const META = {
  lede: `Cómo los Estándares de Westminster entienden la Cena del Señor, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan los Estándares de Westminster sobre la Cena del Señor, con el lugar que cada texto ocupa entre ellos.`
};
