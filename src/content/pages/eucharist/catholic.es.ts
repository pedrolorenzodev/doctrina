import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const eucharistCatholic = {
  doctrine: "eucharist",
  tradition: "catholic",
  status: "draft",
  title: "La posición católica",
  lede: "Cómo la Iglesia católica entiende la Eucaristía, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que la Iglesia católica enseña sobre la Eucaristía, con el grado de autoridad que le corresponde según las categorías de la Iglesia.",
    definition: {
      text: "Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo, instituido en la última Cena para hacer presente el sacrificio de la cruz hasta que él vuelva, y a la vez el banquete en el que se recibe a Cristo mismo.",
      grades: [
        {
          kind: "church",
          grade: "magisterium",
          basis: "Vaticano II; su afirmación del sacrificio repite un dogma de Trento (QE-3)",
        },
      ],
      sources: [
        {
          citations: ["SC47"],
          label: "Sacrosanctum Concilium 47",
        },
        {
          citations: ["CEC1323"],
          label: "Catecismo 1323",
        },
        {
          citations: ["CEC1382"],
          label: "Catecismo 1382",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        text: "En la Eucaristía, después de la consagración, está contenido verdadera, real y sustancialmente Cristo entero: su cuerpo y su sangre, con su alma y su divinidad. No está solo como en un signo o una figura. La Iglesia la llama presencia «real» por excelencia, no porque las otras presencias de Cristo (en su Palabra, en la oración de la Iglesia, en los sacramentos) no sean reales.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis: "así lo clasifica la {c:CDF11,CDF5|Congregación para la Doctrina de la Fe (1998, §11)}",
          },
        ],
        sources: [
          {
            citations: ["T13c1"],
            label: "Trento, ses. XIII, cap. 1",
          },
          {
            citations: ["T13can1"],
            label: "Trento, ses. XIII, can. 1",
          },
          {
            citations: ["CEC1373", "CEC1374"],
            label: "Catecismo 1373–1374",
          },
          {
            citations: ["SC7"],
            label: "Sacrosanctum Concilium 7",
          },
        ],
      },
      {
        id: "QE-2",
        text: "Por la consagración, toda la sustancia del pan se convierte en la sustancia del cuerpo de Cristo y toda la sustancia del vino en la de su sangre; del pan y del vino quedan solo las especies (lo que se ve, se toca y se gusta). La Iglesia llama a este cambio «transubstanciación».",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis: "definido por Trento (ses. XIII, cap. 4 y can. 2); la Iglesia no lo ha clasificado por separado",
          },
        ],
        sources: [
          {
            citations: ["T13c4"],
            label: "Trento, ses. XIII, cap. 4",
          },
          {
            citations: ["T13can2"],
            label: "Trento, ses. XIII, can. 2",
          },
          {
            citations: ["LAT1"],
            label: "Letrán IV, const. 1",
          },
          {
            citations: ["MF10", "MF24", "MF46"],
            label: "Mysterium fidei 10, 24, 46",
          },
          {
            citations: ["CEC1376"],
            label: "Catecismo 1376",
          },
        ],
      },
      {
        id: "QE-3",
        text: "La Misa es un sacrificio verdadero y propio: sacrificio de acción de gracias y de alabanza al Padre, y memorial de la Pascua de Cristo. No es otro sacrificio distinto del de la cruz: la víctima y el que ofrece son los mismos, Cristo, y solo cambia el modo de ofrecerse, que ahora es incruento. Por eso la Iglesia enseña que es también propiciatorio y que puede ofrecerse por vivos y difuntos.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis: "así lo clasifica la {c:CDF11|Congregación para la Doctrina de la Fe (1998, §11)}",
          },
        ],
        sources: [
          {
            citations: ["T22c1"],
            label: "Trento, ses. XXII, cap. 1",
          },
          {
            citations: ["T22c2"],
            label: "Trento, ses. XXII, cap. 2",
          },
          {
            citations: ["T22can"],
            label: "Trento, ses. XXII, cann. 1, 3 y 4",
          },
          {
            citations: ["CEC1360"],
            label: "Catecismo 1360–1362",
          },
          {
            citations: ["CEC1366b"],
            label: "Catecismo 1366–1367",
          },
          {
            citations: ["EdE12"],
            label: "Ecclesia de Eucharistia 12",
          },
        ],
      },
      {
        id: "QE-4",
        text: "Bajo la especie del pan y bajo la del vino está Cristo entero, y también en cada parte de cada una: partir la hostia no divide a Cristo. Por eso quien comulga solo con el pan recibe a Cristo entero.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "definido por Trento (ses. XIII, can. 3; ses. XXI, can. 3); la Iglesia no lo ha clasificado por separado",
          },
        ],
        sources: [
          {
            citations: ["T13c3"],
            label: "Trento, ses. XIII, cap. 3",
          },
          {
            citations: ["T21c3"],
            label: "Trento, ses. XXI, cap. 3 y can. 3",
          },
          {
            citations: ["CEC1377"],
            label: "Catecismo 1377",
          },
        ],
      },
      {
        id: "QE-5",
        text: "Como Cristo mismo está presente, a la Eucaristía se le da el culto de adoración que se debe solo a Dios. Por eso se la guarda en el sagrario, se la lleva a los enfermos, se la expone para la adoración y se la lleva en procesión.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis: "definido por Trento (ses. XIII, cann. 6–7); la Iglesia no lo ha clasificado por separado",
          },
        ],
        sources: [
          {
            citations: ["T13c5"],
            label: "Trento, ses. XIII, cap. 5",
          },
          {
            citations: ["T13can6"],
            label: "Trento, ses. XIII, can. 6",
          },
          {
            citations: ["T13c6"],
            label: "Trento, ses. XIII, cap. 6",
          },
          {
            citations: ["CEC1378"],
            label: "Catecismo 1378",
          },
        ],
      },
      {
        id: "QE-6",
        text: "Para la Iglesia católica, con las palabras «haced esto en memoria de mí» {v:Luke.22.19}, Cristo hizo sacerdotes a los apóstoles y les mandó ofrecer su cuerpo y su sangre. Por eso solo un sacerdote válidamente ordenado, obispo o presbítero, puede consagrar la Eucaristía.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
          },
        ],
        sources: [
          {
            citations: ["T22can2"],
            label: "Trento, ses. XXII, can. 2",
          },
          {
            citations: ["LAT1"],
            label: "Letrán IV, const. 1",
          },
          {
            citations: ["CIC900"],
            label: "Código de Derecho Canónico, can. 900",
          },
          {
            citations: ["CEC1411"],
            label: "Catecismo 1411",
          },
        ],
      },
      {
        id: "QE-7",
        text: "Ningún mandato divino obliga a los fieles a comulgar con las dos especies, porque bajo cualquiera de ellas se recibe a Cristo entero. Comulgar solo con el pan es una ley de la Iglesia, que ella puede cambiar; hoy, en el rito latino, se permite también la comunión bajo las dos especies; en los ritos orientales católicos es la forma habitual (Catecismo 1390).",
        grades: [
          {
            kind: "church",
            grade: "dogma",
          },
          {
            kind: "church",
            grade: "discipline",
          },
        ],
        sources: [
          {
            citations: ["T21can1"],
            label: "Trento, ses. XXI, can. 1",
          },
          {
            citations: ["T21c2"],
            label: "Trento, ses. XXI, cap. 2",
          },
          {
            citations: ["SC55"],
            label: "Sacrosanctum Concilium 55",
          },
          {
            citations: ["CIC925"],
            label: "Código de Derecho Canónico, can. 925",
          },
          {
            citations: ["CEC1390"],
            label: "Catecismo 1390",
          },
        ],
      },
      {
        id: "QE-8",
        text: "Comulgar une más a Cristo, perdona los pecados veniales y preserva de los graves. No está ordenada a perdonar los pecados mortales: para eso está la confesión. Quien tiene conciencia de pecado grave debe confesarse antes de comulgar, salvo que haya un motivo grave y no pueda confesarse; en ese caso debe hacer un acto de contrición perfecta, con el propósito de confesarse cuanto antes.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
          },
          {
            kind: "church",
            grade: "discipline",
          },
        ],
        sources: [
          {
            citations: ["T13c2"],
            label: "Trento, ses. XIII, cap. 2",
          },
          {
            citations: ["T13can5"],
            label: "Trento, ses. XIII, can. 5",
          },
          {
            citations: ["T13c7", "T13can11"],
            label: "Trento, ses. XIII, cap. 7 y can. 11",
          },
          {
            citations: ["CEC1457"],
            label: "Catecismo 1457",
          },
          {
            citations: ["CEC1395", "CEC1416"],
            label: "Catecismo 1395, 1416",
          },
        ],
      },
      {
        id: "QE-9",
        text: "Para la Iglesia católica, la Eucaristía es «fuente y cumbre de toda la vida cristiana» y «hace la Iglesia»: quienes la reciben se unen más a Cristo y, por eso, Cristo los une entre sí en un solo cuerpo (Catecismo 1396). Por la misma razón enseña que celebrarla «no puede ser el punto de partida de la comunión, que la presupone previamente» (Ecclesia de Eucharistia 35). Reconoce en las Iglesias ortodoxas verdaderos sacramentos, y sobre todo el sacerdocio y la Eucaristía; con las comunidades nacidas de la Reforma no admite la intercomunión. Distingue de la intercomunión el caso de una necesidad espiritual grave, en el que puede darse la comunión a otros cristianos que comparten la fe católica sobre este sacramento (Catecismo 1401; Ecclesia de Eucharistia 45).",
        grades: [
          {
            kind: "church",
            grade: "magisterium",
          },
          {
            kind: "church",
            grade: "discipline",
          },
        ],
        sources: [
          {
            citations: ["LG11"],
            label: "Lumen gentium 11",
          },
          {
            citations: ["CEC1396", "EdE26"],
            label: "Catecismo 1396",
          },
          {
            citations: ["EdE35", "EdE38"],
            label: "Ecclesia de Eucharistia 35, 38",
          },
          {
            citations: ["CEC1399", "CEC1400"],
            label: "Catecismo 1399–1400",
          },
          {
            citations: ["CEC1401", "EdE45"],
            label: "Catecismo 1401; Ecclesia de Eucharistia 45",
          },
          {
            citations: ["CIC844"],
            label: "Código de Derecho Canónico, can. 844",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "La Iglesia católica funda esta enseñanza, ante todo, en las palabras de Cristo en la última Cena, tomadas en su sentido propio: «Esto es mi cuerpo». {c:T13c1,T13c4|Trento, ses. XIII, caps. 1 y 4}",
      "Las lee junto con el discurso del pan de vida (Juan 6) y con las palabras «que por vosotros es dado» y «derramada por muchos», que muestran un sacrificio {v:Luke.22.19} {v:Matt.26.28}. {c:EdE16|Ecclesia de Eucharistia 16} {c:CEC1336|Catecismo 1336} {c:CEC1365|Catecismo 1365} {c:EdE12|Ecclesia de Eucharistia 12} {c:T22c1|Trento, ses. XXII, cap. 1}",
      "Y sostiene que la Iglesia siempre lo creyó así. {c:T13c4|Trento, ses. XIII, cap. 4}",
    ],
    fathers: [
      {
        lead: "El Catecismo cita a san Juan Crisóstomo:",
        quote: [
          "No es el hombre quien hace que las cosas ofrecidas se conviertan en Cuerpo y Sangre de Cristo, sino Cristo mismo que fue crucificado por nosotros. El sacerdote, figura de Cristo, pronuncia estas palabras, pero su eficacia y su gracia provienen de Dios. Esto es mi Cuerpo, dice. Esta palabra transforma las cosas ofrecidas.",
        ],
        author: "San Juan Crisóstomo",
        work: "Homilías sobre la traición de Judas",
        date: {
          year: 388,
          attribution: "según Baur",
        },
        citedIn: {
          citations: ["CEC1375"],
          label: "Catecismo 1375",
        },
      },
      {
        lead: "El Catecismo cita a san Ambrosio:",
        quote: [
          "Estemos bien persuadidos de que esto no es lo que la naturaleza ha producido, sino lo que la bendición ha consagrado, y de que la fuerza de la bendición supera a la de la naturaleza, porque por la bendición la naturaleza misma resulta cambiada.",
          "La palabra de Cristo, que pudo hacer de la nada lo que no existía, ¿no podría cambiar las cosas existentes en lo que no eran todavía?",
        ],
        author: "San Ambrosio",
        work: "Sobre los misterios",
        date: {
          year: 387,
          yearEnd: 391,
          circa: true,
        },
        citedIn: {
          citations: ["CEC1375"],
          label: "Catecismo 1375",
        },
      },
    ],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para la Iglesia católica, Juan 6 no admite una lectura metafórica: ante el asombro de los oyentes, Jesús se ve obligado, dice Juan Pablo II, «a recalcar la verdad objetiva de sus palabras»: «Mi carne es verdadera comida y mi sangre verdadera bebida» {v:John.6.55}. Y concluye: «No se trata de un alimento metafórico» {c:EdE16|Ecclesia de Eucharistia 16}.",
  },
  scripture: [
    {
      refs: ["Matt.26.26-Matt.26.28", "Mark.14.22-Mark.14.24", "Luke.22.19-Luke.22.20", "1Cor.11.23-1Cor.11.26"],
      text: "Para la Iglesia católica, «esto es mi cuerpo… esto es mi sangre» {v:Matt.26.26,Matt.26.28} se lee en su sentido propio: Cristo dio a los apóstoles su propio cuerpo y su propia sangre {c:T13c1|Trento, ses. XIII, cap. 1}. «Que por vosotros es dado» {v:Luke.22.19} y «derramada por muchos para remisión de los pecados» {v:Matt.26.28} muestran que es un sacrificio {c:CEC1365|Catecismo 1365}.",
    },
    {
      refs: ["Luke.22.19"],
      text: "Para la Iglesia católica, con estas palabras Cristo hizo sacerdotes a los apóstoles y les mandó ofrecer su cuerpo y su sangre {c:T22can2|Trento, ses. XXII, can. 2}. El memorial no es solo recordar: es la celebración litúrgica que hace presente lo que recuerda {c:CEC1341|Catecismo 1341, 1363}.",
    },
    {
      refs: ["John.6.51-John.6.58", "John.6.60-John.6.69"],
      text: "Para la Iglesia católica, el discurso del pan de vida prepara la institución de la Eucaristía {c:CEC1338|Catecismo 1338}. Ante el asombro de los oyentes, Jesús «recalca la verdad objetiva de sus palabras»: «mi carne es verdadera comida» {v:John.6.55}; por eso, según {c:EdE16|Ecclesia de Eucharistia 16}, no es «un alimento metafórico». Trento, por su parte, usa Juan 6 «segun las varias interpretaciones de los santos Padres y doctores» {c:T21c1|ses. XXI, cap. 1}.",
    },
    {
      refs: ["1Cor.10.16-1Cor.10.17"],
      text: "«La copa de bendición que bendecimos, ¿no es la comunión de la sangre de Cristo?» {v:1Cor.10.16}. Para la Iglesia católica, la Eucaristía une a Cristo y, por eso, une entre sí a los que comulgan en un solo cuerpo, la Iglesia {c:CEC1396|Catecismo 1396}.",
    },
    {
      refs: ["1Cor.10.21"],
      text: "Pablo contrapone la «mesa del Señor» a la «mesa de los demonios», donde se comían sacrificios; Trento entiende en ambos casos «mesa» como altar.",
    },
    {
      refs: ["1Cor.11.26"],
      text: "Comer este pan y beber esta copa es anunciar la muerte del Señor hasta que vuelva: la Eucaristía mira a la cruz y a la venida final {c:T13c2|Trento, ses. XIII, cap. 2}.",
    },
    {
      refs: ["1Cor.11.27-1Cor.11.29"],
      text: "Quien come este pan o bebe esta copa del Señor indignamente «será culpado del cuerpo y de la sangre del Señor» {v:1Cor.11.27}. Para la Iglesia católica, por eso hay que examinarse, y quien tiene conciencia de pecado grave debe confesarse antes de comulgar {c:CEC1385|Catecismo 1385}.",
    },
    {
      refs: ["Mal.1.11"],
      text: "El «presente limpio» que «en todo lugar se ofrece» al nombre de Dios «entre las gentes» {v:Mal.1.11} es, para Trento, la Misa {c:T22c1|ses. XXII, cap. 1}.",
    },
    {
      refs: ["Gen.14.18", "Ps.110.4"],
      text: "«Tú eres sacerdote para siempre según el orden de Melchîsedech» {v:Ps.110.4}, que ofreció pan y vino {v:Gen.14.18}; la Iglesia católica ve en ese gesto una figura de su propia ofrenda {c:CEC1333|Catecismo 1333}.",
    },
    {
      refs: ["Heb.7.11-Heb.7.27", "Heb.9.12-Heb.9.14", "Heb.9.27"],
      text: "Hebreos dice que Cristo se ofreció una sola vez y que su sacerdocio no termina; Trento concluye que en la última Cena dejó un sacrificio visible que hace presente ese único sacrificio, sin repetirlo {c:T22c1|ses. XXII, cap. 1}.",
    },
    {
      refs: ["Exod.12", "1Cor.5.7"],
      text: "Jesús instituyó la Eucaristía en la cena pascual: celebrada la Pascua antigua, instituyó la nueva, él mismo inmolado bajo signos visibles {c:T22c1|Trento, ses. XXII, cap. 1} {c:CEC1340|Catecismo 1340}.",
    },
    {
      refs: ["Heb.1.6", "Ps.97.7", "Matt.2.11", "Matt.28.17"],
      text: "Al mismo Dios presente en el sacramento lo adoraron los ángeles, los magos y los apóstoles en Galilea: por eso se le da culto de adoración {c:T13c5|Trento, ses. XIII, cap. 5}.",
    },
    {
      refs: ["1Cor.4.1", "1Cor.11.34"],
      text: "Pablo pide que se tenga a los apóstoles por «dispensadores de los misterios de Dios» {v:1Cor.4.1}; para Trento, por eso la Iglesia puede regular cómo se dan los sacramentos, sin tocar su sustancia {c:T21c2|ses. XXI, cap. 2}.",
    },
    {
      refs: ["Acts.2.42", "Acts.2.46", "Acts.20.7"],
      text: "Desde el principio los cristianos perseveraban «en el partimiento del pan» {v:Acts.2.42} y se reunían «á partir el pan» «el día primero de la semana» {v:Acts.20.7} {c:CEC1342|Catecismo 1342–1343}.",
    },
  ],
  objections: {
    order: ["OB-1", "OB-2", "OB-3", "OB-4", "OB-5", "OB-6", "OB-7", "DO-1", "DO-2"],
    silentTraditions:
      "Los textos que hablan por los bautistas en Doctrina (Fe y Mensaje Bautistas 2000, art. VII; Confesión de New Hampshire 1853, art. XIV) presentan la Cena como símbolo y memorial y no formulan objeciones a la doctrina católica; lo mismo la Declaración de Verdades Fundamentales de las Asambleas de Dios, art. 6.",
    items: [
      {
        id: "OB-1",
        layer: "official",
        title: "Si Cristo se ofreció «una vez para siempre», la Misa no puede ser un sacrificio",
        synthesis:
          "Hebreos dice que Cristo no se ofreció «muchas veces» sino una vez, que «con una sola ofrenda hizo perfectos para siempre á los santificados» y que «donde hay remisión de éstos, no hay más ofrenda por pecado» {v:Heb.9.25-Heb.9.26} {v:Heb.10.14,Heb.10.18}. La muerte de Cristo es el único sacrificio propiciatorio; la Cena puede ser un sacrificio de alabanza y acción de gracias de los ya reconciliados, pero no uno que reconcilie con Dios. Si la Misa es un sacrificio propiciatorio que se ofrece cada día por vivos y difuntos, o repite la cruz o le añade algo que la cruz no hizo.",
        raisedBy: {
          traditions: ["lutheran", "reformed"],
          line: "Suelen plantearla reformados y luteranos.",
        },
        objectorTexts: {
          shown: ["WCF292", "STWCF"],
          more: ["AP24a", "AC24", "SA221", "STSA"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, el sacrificio de la cruz fue uno y para siempre. El Concilio de Trento abre su doctrina sobre la Misa diciendo que Cristo «se había de ofrecer á sí mismo á Dios Padre, una vez, por medio de la muerte en el ara de la cruz, para obrar desde ella la redencion eterna» {c:T22c1|Trento, ses. XXII, cap. 1}. El Catecismo dice: «el sacrificio que Cristo ofreció de una vez para siempre en la cruz, permanece siempre actual» {c:CEC1364|Catecismo 1364}, que remite a {v:Heb.7.25-Heb.7.27}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la Misa no es un segundo sacrificio. Trento enseña: «la hostia es una misma, uno el mismo que ahora ofrece por el ministerio de los sacerdotes, que el que entonces se ofreció á sí mismo en la cruz, con sola la diferencia del modo de ofrecerse» {c:T22c2|ses. XXII, cap. 2}. El Catecismo lo resume: «El sacrificio de Cristo y el sacrificio de la Eucaristía son, pues, un único sacrificio» {c:CEC1367|Catecismo 1367}. Juan Pablo II escribe: «La Misa hace presente el sacrificio de la Cruz, no se le añade y no lo multiplica. Lo que se repite es su celebración memorial, la «manifestación memorial» (memorialis demonstratio), por la cual el único y definitivo sacrificio redentor de Cristo se actualiza siempre en el tiempo» {c:EdE12|Ecclesia de Eucharistia 12}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, ese único sacrificio se hace presente porque el sacerdocio de Cristo no terminó en la cruz. Trento enseña que ese sacerdocio «no habia de acabarse con su muerte», y que en la última Cena Cristo dejó a la Iglesia «un sacrificio visible, segun requiere la condicion de los hombres, en el que se representase el sacrificio cruento que por una vez se habia de hacer en la cruz, y permaneciese su memoria hasta el fin del mundo, y se aplicase su saludable virtud á la remision de los pecados que cotidianamente cometemos» {c:T22c1|ses. XXII, cap. 1} {v:Heb.7.24}. El Catecismo explica cómo un acontecimiento único puede estar presente sin repetirse: «todos los demás acontecimientos suceden una vez, y luego pasan y son absorbidos por el pasado. El misterio pascual de Cristo, por el contrario, no puede permanecer solamente en el pasado, pues por su muerte destruyó a la muerte, y todo lo que Cristo es y todo lo que hizo y padeció por los hombres participa de la eternidad divina y domina así todos los tiempos y en ellos se mantiene permanentemente presente» {c:CEC1085|Catecismo 1085}. Y dice en qué sentido la Eucaristía es sacrificio: «porque representa (= hace presente) el sacrificio de la cruz, porque es su memorial y aplica su fruto» {c:CEC1366|Catecismo 1366}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la Misa es sacrificio en sentido propio, y también de alabanza. Juan Pablo II: «la Eucaristía es sacrificio en sentido propio y no sólo en sentido genérico, como si se tratara del mero ofrecimiento de Cristo a los fieles como alimento espiritual» {c:EdE13|Ecclesia de Eucharistia 13}. El Catecismo la llama a la vez «sacrificio de acción de gracias al Padre» y «sacrificio de alabanza» {c:CEC1360|Catecismo 1360–1361}, y enseña que en ella «el sacrificio de Cristo se hace también el sacrificio de los miembros de su Cuerpo» {c:CEC1368|Catecismo 1368}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la Misa es propiciatoria porque en ella está el mismo Cristo de la cruz. Trento enseña: «por quanto en este divino sacrificio que se hace en la Misa, se contiene, y sacrifica incruentamente aquel mismo Cristo que se ofreció por una vez cruentamente en el ara de la cruz; enseña el santo Concilio, que este sacrificio es con toda verdad propiciatorio» {c:T22c2|ses. XXII, cap. 2} {c:CEC1367|citado en Catecismo 1367}. Sus frutos son los de la cruz: «Los frutos por cierto de aquella oblacion cruenta, se logran abundantisimamente por esta incruenta: tan lejos está que esta derogue de modo alguno á aquella» {c:T22c2|cap. 2}. Y se reciben «si nos acercamos al Señor contritos y penitentes, si con sincero corazon, y recta fe, si con temor y reverencia» {c:T22c2|cap. 2}.",
          },
          {
            type: "quote",
            text: [
              "Si alguno dixere, que se comete blasfemia contra el santisimo sacrificio que Cristo consumó en la cruz, por el sacrificio de la Misa; ó que por este se deroga á aquel; sea excomulgado.",
            ],
            attribution: "{c:T22can|Trento, sesión XXII, canon 4}",
          },
        ],
        sourcesCited: [
          {
            citations: ["T22c1", "T22c2", "T22can"],
            name: "Concilio de Trento, sesión XXII, caps. 1–2, can. 4",
            dates: [
              {
                year: 1562,
                month: 9,
                day: 17,
              },
            ],
          },
          {
            citations: ["EdE12", "EdE13"],
            name: "Juan Pablo II, Ecclesia de Eucharistia 12–13",
            dates: [
              {
                year: 2003,
                month: 4,
                day: 17,
              },
            ],
          },
          {
            citations: ["CEC1085", "CEC1360", "CEC1364", "CEC1366", "CEC1367", "CEC1368"],
            name: "Catecismo de la Iglesia Católica 1085, 1360, 1361, 1364, 1366, 1367, 1368",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
        ],
        passages: {
          answer: ["Heb.7.24", "Heb.7.25-Heb.7.27"],
          objector: [
            "Heb.7.23-Heb.7.24",
            "Heb.7.27",
            "Heb.9.22",
            "Heb.9.25-Heb.9.26",
            "Heb.9.28",
            "Heb.10.4",
            "Heb.10.10",
            "Heb.10.11-Heb.10.12",
            "Heb.10.14",
            "Heb.10.18",
            "Isa.53.10",
            "Mal.1.11",
          ],
          objectorNote:
            "Textos que citan la Confesión de Westminster 29.2, la Confesión de Augsburgo XXIV.24–27 y la Apología XXIV.22–23. Malaquías 1:11 se lee de dos modos: Trento, ses. XXII, cap. 1, y Apología XXIV.31–32.",
        },
      },
      {
        id: "OB-2",
        layer: "official",
        title: "Pablo lo sigue llamando «pan»: lo consagrado sigue siendo pan",
        synthesis:
          "Después de la consagración Pablo lo sigue llamando «pan» {v:1Cor.10.16} {v:1Cor.11.26-1Cor.11.28}: el pan sigue siendo pan en su sustancia, y enseñar que su sustancia desaparece no concuerda con la Escritura. Los reformados añaden que el cuerpo de Cristo está en el cielo {v:Acts.3.21} y que la transubstanciación va «aun contra el sentido y razon comunes» y «destruye la naturaleza del sacramento» {c:WCF296|Confesión de Westminster 29.6}.",
        raisedBy: {
          traditions: ["lutheran", "reformed"],
          line: "Suelen plantearla reformados y luteranos.",
        },
        objectorTexts: {
          shown: ["SA365"],
          more: ["WCF296", "STWCF", "FCEP722"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, la conversión se funda en las palabras de Cristo. Trento enseña: «por quanto dixo Jesu-Cristo nuestro Redentor, que era verdaderamente su cuerpo lo que ofrecia bajo la especie de pan; ha creido por lo mismo perpetuamente la Iglesia de Dios, y lo mismo declara ahora de nuevo este mismo santo Concilio, que por la consagracion del pan y del vino, se convierte toda la substancia del pan en la substancia del cuerpo de nuestro señor Jesu-Cristo, y toda la substancia del vino en la substancia de su sangre» {c:T13c4|Trento, ses. XIII, cap. 4} {v:Matt.26.26} {c:CEC1376|citado en Catecismo 1376}. El Catecismo Romano razona sobre la misma frase: si allí quedara la sustancia del pan, «parece que de ningun modo se podria decir con verdad: Esto es mi cuerpo» {c:CR38|Catecismo Romano, parte II, cap. 4, n. 38}. Pablo VI enseña que Cristo «no se hace presente en este sacramento sino por la conversión de toda la sustancia del pan en su cuerpo y de toda la sustancia del vino en su sangre» {c:MF46|Mysterium fidei 46}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, que Pablo lo siga llamando «pan» no contradice la conversión. El Catecismo Romano responde que «no debe estrañarse que la Eucaristía se llame pan, aun despues de la consagracion», porque «conserva la figura de pan» y «todavía retiene natural virtud de alimentar», y porque «es costumbre de las Escrituras sagradas llamar las cosas segun lo que parecen»: así llama «varones» a los ángeles que vio Abraham y a los dos que aparecieron en la Ascensión {c:CR40|Catecismo Romano, parte II, cap. 4, n. 40} {v:Gen.18.2} {v:Acts.1.10}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, lo que cambia no es lo que se ve. Pablo VI: «bajo dichas especies ya no existe lo que antes había, sino una cosa completamente diversa; y esto no tan sólo por el juicio de la fe de la Iglesia, sino por la realidad objetiva, puesto que, convertida la sustancia o naturaleza del pan y del vino en el cuerpo y en la sangre de Cristo, no queda ya nada del pan y del vino, sino tan sólo las especies» {c:MF46|Mysterium fidei 46}. Por eso, dice el Catecismo citando a santo Tomás, esta presencia «no se conoce por los sentidos, […] sino sólo por la fe, la cual se apoya en la autoridad de Dios» {c:CEC1381|Catecismo 1381}. Y el signo no se destruye: «los signos del pan y del vino siguen significando también la bondad de la creación» {c:CEC1333|Catecismo 1333}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la conversión no se reduce a un cambio de significado. Pablo VI rechaza «discutir sobre el misterio de la transustanciación sin referirse a la admirable conversión de toda la sustancia del pan en el cuerpo de Cristo y de toda la sustancia del vino en su sangre, […] de modo que se limitan ellos tan sólo a lo que llaman transignificación y transfinalización» {c:MF11|Mysterium fidei 11}, y enseña que las fórmulas de Trento «expresan conceptos no ligados a una determinada forma de cultura ni a una determinada fase de progreso científico, ni a una u otra escuela teológica» {c:MF24|Mysterium fidei 24}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, que el cuerpo de Cristo esté en el cielo no lo impide. Trento: «no hay en efecto repugnancia en que el mismo Cristo nuestro Salvador esté siempre sentado en el cielo á la diestra del Padre, segun el modo natural de existir, y que al mismo tiempo nos asista sacramentalmente con su presencia, y en su propia substancia en otros muchos lugares», con un modo de existir que «apenas lo podemos declarar con palabras», pero que «es posible á Dios» {c:T13c1|Trento, ses. XIII, cap. 1}. Pablo VI precisa que bajo las especies «Cristo todo entero está presente en su realidad física, aun corporalmente, pero no a la manera que los cuerpos están en un lugar» {c:MF46|Mysterium fidei 46}.",
          },
          {
            type: "quote",
            text: [
              "Si alguno dixere, que en el sacrosanto Sacramento de la Eucaristia queda substancia de pan y de vino juntamente con el cuerpo y sangre de nuestro señor Jesu-Cristo; y negare aquella admirable y singular conversion de toda la substancia del pan en el cuerpo, y de toda la substancia del vino en la sangre, permaneciendo solamente las especies de pan y vino; conversion que la Iglesia Católica propisimamente llama Transubstanciacion; sea excomulgado.",
            ],
            attribution: "{c:T13can2|Trento, sesión XIII, canon 2}",
          },
        ],
        sourcesCited: [
          {
            citations: ["T13c1", "T13c4", "T13can2"],
            name: "Concilio de Trento, sesión XIII, caps. 1 y 4, can. 2",
            dates: [
              {
                year: 1551,
                month: 10,
                day: 11,
              },
            ],
          },
          {
            citations: ["CR38", "CR40"],
            name: "Catecismo Romano, parte II, cap. 4, nn. 38 y 40",
            dates: [
              {
                year: 1566,
              },
            ],
          },
          {
            citations: ["MF11", "MF24", "MF46"],
            name: "Pablo VI, Mysterium fidei 11, 24, 46",
            dates: [
              {
                year: 1965,
                month: 9,
                day: 3,
              },
            ],
          },
          {
            citations: ["CEC1333", "CEC1376", "CEC1381"],
            name: "Catecismo de la Iglesia Católica 1333, 1376, 1381",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
        ],
        passages: {
          answer: ["Matt.26.26", "Gen.18.2", "Acts.1.10"],
          objector: ["1Cor.10.16", "1Cor.11.26-1Cor.11.28", "Acts.3.21", "Luke.24.6", "Luke.24.39"],
          objectorNote:
            "Hechos 3:21 y Lucas 24:6, 39: solo reformados (textos que cita la Confesión de Westminster 29.6).",
        },
      },
      {
        id: "OB-3",
        layer: "official",
        title: "Cristo dijo «Tomad, comed»: guardar, exponer y adorar la hostia va más allá de lo que mandó",
        synthesis:
          "Cristo dio el pan para que se tome y se coma («Tomad, comed», {v:Matt.26.26}). Guardarlo, exponerlo y llevarlo en procesión para adorarlo es usar el sacramento para algo que Cristo no mandó, y dirigir la adoración a lo que, a la vista, son pan y vino. Para los reformados, adorar los elementos es idolatría {c:WCF294,WCF296|Westminster 29.4, 29.6}.",
        raisedBy: {
          traditions: ["lutheran", "reformed"],
          line: "Suelen plantearla reformados y luteranos.",
        },
        objectorTexts: {
          shown: ["WCF294"],
          more: ["FCSD7", "AC2212"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, lo que se adora es Cristo, no el pan. Trento enseña que al sacramento se le da «el culto de latría que se debe al mismo Dios», porque «creemos que está presente en él aquel mismo Dios» a quien adoraron los ángeles, los magos y los apóstoles {c:T13c5|Trento, ses. XIII, cap. 5} {v:Heb.1.6} {v:Matt.2.11}. El Catecismo lo dice así: «Puesto que Cristo mismo está presente en el Sacramento del Altar es preciso honrarlo con culto de adoración» {c:CEC1418|Catecismo 1418}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, que se haya instituido para comerlo no impide adorarlo. Trento: «Ni se le debe tributar menos adoracion con el pretexto de que fue instituido por Cristo nuestro señor para recibirle» {c:T13c5|ses. XIII, cap. 5}. Benedicto XVI responde a esta misma objeción: «Una objeción difundida entonces se basaba, por ejemplo, en la observación de que el Pan eucarístico no habría sido dado para ser contemplado, sino para ser comido. En realidad, a la luz de la experiencia de oración de la Iglesia, dicha contraposición se mostró carente de todo fundamento.» Y añade: «la adoración eucarística no es sino la continuación obvia de la celebración eucarística, la cual es en sí misma el acto más grande de adoración de la Iglesia. Recibir la Eucaristía significa adorar al que recibimos» {c:SCa66|Sacramentum caritatis 66}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la presencia no depende del momento en que se come: «comienza en el momento de la consagración y dura todo el tiempo que subsistan las especies eucarísticas» {c:CEC1377|Catecismo 1377}, y Trento rechaza que Cristo esté «solo en el uso, mientras que se recibe» {c:T13can4|ses. XIII, can. 4}. Pablo VI enseña que «no se puede proponer y aceptar la opinión, según la cual en las hostias consagradas, que quedan después de celebrado el santo sacrificio de la misa, ya no se halla presente Nuestro Señor Jesucristo» {c:MF11|Mysterium fidei 11}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, guardar la Eucaristía tiene un fin y una historia. Trento: es una costumbre «tan antigua […] que ya se conocia en el siglo en que se celebró el concilio Niceno» {c:T13c6|ses. XIII, cap. 6}. El Catecismo: «El sagrario (tabernáculo) estaba primeramente destinado a guardar dignamente la Eucaristía para que pudiera ser llevada a los enfermos y ausentes fuera de la misa. Por la profundización de la fe en la presencia real de Cristo en su Eucaristía, la Iglesia tomó conciencia del sentido de la adoración silenciosa del Señor presente bajo las especies eucarísticas» {c:CEC1379|Catecismo 1379}. Juan Pablo II subraya que este culto «está estrechamente unido a la celebración del Sacrificio eucarístico» y que la presencia en las especies que se conservan «deriva de la celebración del Sacrificio y tiende a la comunión sacramental y espiritual» {c:EdE25|Ecclesia de Eucharistia 25}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, esa adoración empieza dentro de la misma Misa: «En la liturgia de la misa expresamos nuestra fe en la presencia real de Cristo bajo las especies de pan y de vino, entre otras maneras, arrodillándonos o inclinándonos profundamente en señal de adoración al Señor» {c:CEC1378|Catecismo 1378}, y se prolonga fuera de ella: «conservando con el mayor cuidado las hostias consagradas, presentándolas a los fieles para que las veneren con solemnidad, llevándolas en procesión en medio de la alegría del pueblo» {c:MF56|Mysterium fidei 56} {c:CEC1378|citado en Catecismo 1378}.",
          },
          {
            type: "quote",
            text: [
              "Si alguno dixere, que en el santo Sacramento de la Eucaristía no se debe adorar á Cristo hijo unigenito de Dios con el culto de latría, ni aun con el externo; y que por lo mismo, ni se debe venerar con peculiar y festiva celebridad; ni ser conducido solemnemente en procesiones, segun el loable y universal rito y costumbre de la santa Iglesia; ó que no se debe exponer públicamente al pueblo para que le adore, y que los que le adoran son idólatras; sea excomulgado.",
            ],
            attribution: "{c:T13can6|Trento, sesión XIII, canon 6}",
          },
        ],
        sourcesCited: [
          {
            citations: ["T13c5", "T13c6", "T13can4", "T13can6"],
            name: "Concilio de Trento, sesión XIII, caps. 5–6, cann. 4 y 6",
            dates: [
              {
                year: 1551,
                month: 10,
                day: 11,
              },
            ],
          },
          {
            citations: ["CEC1377", "CEC1378", "CEC1379", "CEC1418"],
            name: "Catecismo de la Iglesia Católica 1377, 1378, 1379, 1418",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["MF11", "MF56"],
            name: "Pablo VI, Mysterium fidei 11, 56",
            dates: [
              {
                year: 1965,
                month: 9,
                day: 3,
              },
            ],
          },
          {
            citations: ["EdE25"],
            name: "Juan Pablo II, Ecclesia de Eucharistia 25",
            dates: [
              {
                year: 2003,
                month: 4,
                day: 17,
              },
            ],
          },
          {
            citations: ["SCa66"],
            name: "Benedicto XVI, Sacramentum caritatis 66",
            dates: [
              {
                year: 2007,
                month: 2,
                day: 22,
              },
            ],
          },
        ],
        passages: {
          answer: ["Heb.1.6", "Matt.2.11"],
          objector: ["Matt.26.26", "Matt.15.9"],
        },
      },
      {
        id: "OB-4",
        layer: "official",
        title: "Cristo dijo «Bebed de ella todos»: negar el cáliz a los laicos cambia lo que él instituyó",
        synthesis:
          "De la copa Jesús dijo «Bebed de él todos» {v:Matt.26.27}, y la Iglesia antigua dio las dos especies a todos durante siglos. Dar a los laicos solo el pan cambia la institución de Cristo y los priva de algo que él mandó.",
        raisedBy: {
          traditions: ["orthodox", "lutheran", "reformed"],
          line: "Suelen plantearla luteranos, reformados y ortodoxos.",
        },
        objectorTexts: {
          shown: ["AC22"],
          more: ["ENC11", "ST1895", "AP22", "WCF294"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, ningún precepto divino obliga a los laicos a recibir las dos especies. Trento enseña que, aunque Cristo instituyó el sacramento «en las especies de pan y vino, y lo dió á sus Apóstoles», esa institución no establece «la obligacion de que todos los fieles cristianos deban recibir […] una y otra especie» {c:T21c1|Trento, ses. XXI, cap. 1}. El concilio recuerda que en Juan 6 el mismo Señor que dijo «si no comiereis la carne del hijo del hombre, ni bebiereis su sangre, no tendréis vida» dijo también «si alguno comiere de este pan, vivirá eternamente» {c:T21c1|ses. XXI, cap. 1} {v:John.6.53,John.6.51,John.6.58}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la razón de fondo es que Cristo está entero en cada especie. Trento: «se recibe en cada una sola de las especies á Cristo todo entero, y un verdadero Sacramento», y quien recibe una sola no queda «defraudado» de «ninguna gracia necesaria para conseguir la salvacion» {c:T21c3|ses. XXI, cap. 3}. El Catecismo: «Gracias a la presencia sacramental de Cristo bajo cada una de las especies, la comunión bajo la sola especie de pan ya hace que se reciba todo el fruto de gracia propio de la Eucaristía» {c:CEC1390|Catecismo 1390}. Y: «Cristo está todo entero presente en cada una de las especies y todo entero en cada una de sus partes» {c:CEC1377|Catecismo 1377}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la comunión con el pan solo es una ley de la Iglesia, no de Cristo. Trento reconoce que «desde los principios de la religion cristiana» fue «freqüente» comulgar con las dos especies, y presenta la comunión con el pan solo como una «ley» que la Iglesia aprobó «movida de graves y justas causas», y que puede regular porque administra los sacramentos «salva siempre la esencia de ellos» {c:T21c2|ses. XXI, cap. 2} {v:1Cor.4.1} {v:1Cor.11.34}. Hoy la Iglesia permite la comunión bajo las dos especies: el Concilio Vaticano II dispuso que, «manteniendo firmes los principios dogmáticos declarados por el Concilio de Trento, la comunión bajo ambas especies puede concederse en los casos que la Sede Apostólica determine» {c:SC55|Sacrosanctum Concilium 55}; el Código manda: «Adminístrese la sagrada comunión bajo la sola especie del pan o, de acuerdo con las leyes litúrgicas, bajo las dos especies» {c:CIC925|can. 925}; y el Catecismo, citando el Misal Romano, reconoce que «la comunión tiene una expresión más plena por razón del signo cuando se hace bajo las dos especies», y que esta «es la forma habitual de comulgar en los ritos orientales» {c:CEC1390|Catecismo 1390}.",
          },
          {
            type: "quote",
            text: [
              "Si alguno dixere, que no tuvo la santa Iglesia católica causas ni razones justas para dar la comunion solo en la especie de pan á los legos, así como á los clerigos que no celebran; ó que erró en esto; sea excomulgado.",
            ],
            attribution: "{c:T21can2|Trento, sesión XXI, canon 2}",
          },
        ],
        sourcesCited: [
          {
            citations: ["T21c1", "T21c2", "T21c3", "T21can2"],
            name: "Concilio de Trento, sesión XXI, caps. 1–3, can. 2",
            dates: [
              {
                year: 1562,
                month: 7,
                day: 16,
              },
            ],
          },
          {
            citations: ["SC55"],
            name: "Concilio Vaticano II, Sacrosanctum Concilium 55",
            dates: [
              {
                year: 1963,
                month: 12,
                day: 4,
              },
            ],
          },
          {
            citations: ["CIC925"],
            name: "Código de Derecho Canónico, can. 925",
            dates: [
              {
                year: 1983,
              },
            ],
          },
          {
            citations: ["CEC1377", "CEC1390"],
            name: "Catecismo de la Iglesia Católica 1377, 1390",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
        ],
        passages: {
          answer: ["John.6.51", "John.6.53", "John.6.58", "1Cor.4.1", "1Cor.11.34"],
          objector: ["Matt.26.27", "1Cor.11.27-1Cor.11.28"],
        },
      },
      {
        id: "OB-5",
        layer: "official",
        title: "Misas privadas y misas por los difuntos: la Cena convertida en una obra que vale por sí sola",
        synthesis:
          "Cristo instituyó la Cena para que la comunidad comulgue y los creyentes reciban con fe el perdón. Misas sin comulgantes, multiplicadas y aplicadas a cambio de dinero por vivos y difuntos, hacen de ella una obra que valdría por el solo hecho de celebrarse, sin la fe de quien la recibe. Y la Cena se instituyó para los vivos: aplicarla por los difuntos no tiene testimonio ni mandato en la Escritura.",
        raisedBy: {
          traditions: ["lutheran", "reformed"],
          line: "Suelen plantearla luteranos y reformados.",
        },
        objectorTexts: {
          shown: ["AC24b"],
          more: ["AP24b", "SA2212", "WCF2924", "STWCF"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, que un sacramento obre _ex opere operato_ no significa que obre sin fe. El Catecismo define: «los sacramentos obran ex opere operato (según las palabras mismas del Concilio: «por el hecho mismo de que la acción es realizada»), es decir, en virtud de la obra salvífica de Cristo, realizada de una vez por todas», y añade: «Sin embargo, los frutos de los sacramentos dependen también de las disposiciones del que los recibe» {c:CEC1128|Catecismo 1128}. Trento dice de la Misa que sus frutos se alcanzan «si nos acercamos al Señor contritos y penitentes, si con sincero corazon, y recta fe, si con temor y reverencia» {c:T22c2|ses. XXII, cap. 2}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, lo deseable es que los fieles comulguen en cada Misa. Trento: «Quisiera por cierto el sacrosanto Concilio que todos los fieles que asistiesen á las Misas comulgasen en ellas, no solo espiritualmente, sino recibiendo tambien sacramentalmente la Eucaristía» {c:T22c6|ses. XXII, cap. 6}. Pero no condena las misas en que solo comulga el sacerdote, porque «se deben tambien tener con toda verdad por comunes de todos; parte porque el pueblo comulga espiritualmente en ellas, y parte porque se celebran por un ministro público de la Iglesia, no solo por sí, sino por todos los fieles que son miembros del cuerpo de Cristo» {c:T22c6|cap. 6}. Pablo VI: «toda misa, aunque sea celebrada privadamente por un sacerdote, no es acción privada, sino acción de Cristo y de la Iglesia, la cual, en el sacrifico que ofrece, aprende a ofrecerse a sí misma como sacrificio universal, y aplica a la salvación del mundo entero la única e infinita virtud redentora del sacrificio de la Cruz» {c:MF32|Mysterium fidei 32}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la Misa se ofrece también por los difuntos. Trento enseña que se ofrece, «segun la tradicion de los Apóstoles, por los que han muerto en Cristo sin estar plenamente purgados» {c:T22c2|ses. XXII, cap. 2}. El Catecismo: «El Sacrificio Eucarístico es también ofrecido por los fieles difuntos «que han muerto en Cristo y todavía no están plenamente purificados» […], para que puedan entrar en la luz y la paz de Cristo» {c:CEC1371|Catecismo 1371}, y cita las _Catequesis mistagógicas_ atribuidas a san Cirilo de Jerusalén (c. 350–390): «Presentando a Dios nuestras súplicas por los que han muerto, aunque fuesen pecadores […], presentamos a Cristo inmolado por nuestros pecados, haciendo propicio para ellos y para nosotros al Dios amigo de los hombres» {c:CEC1371|Catecismo 1371}. Y resume: «En cuanto sacrificio, la Eucaristía es ofrecida también en reparación de los pecados de los vivos y los difuntos» {c:CEC1414|Catecismo 1414}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, el dinero no compra la Misa. El mismo Concilio de Trento mandó a los obispos prohibir «las condiciones de pagas de qualquiera especie, los contratos» por la celebración de misas y las cobranzas que «no distan mucho del pecado de Simonía», y desterrar «el abuso de decir cierto número de Misas con determinado número de luces, inventado mas bien por espíritu de supersticion que de verdadera religion» {c:T22decr|Trento, ses. XXII, decreto sobre lo que se ha de observar en la celebración de la Misa}. Hoy el Código manda: «En materia de ofrendas de Misas, evítese hasta la más pequeña apariencia de negociación o comercio» {c:CIC947|can. 947}, y recomienda a los sacerdotes celebrar «por las intenciones de los fieles, sobre todo de los necesitados, aunque no reciban ninguna ofrenda» {c:CIC945|can. 945 §2}.",
          },
          {
            type: "quote",
            text: [
              "Si alguno dixere, que las Misas en que solo el sacerdote comulga sacramentalmente, son ilícitas, y que por esta causa se deben abrogar; sea excomulgado.",
              "Si alguno dixere, que el sacrificio de la Misa […] solo aprovecha al que lo recibe; y que no se debe ofrecer por los vivos, ni por los difuntos, por los pecados, penas, satisfacciones, ni otras necesidades; sea excomulgado.",
            ],
            attribution: "{c:T22can8,T22can|Trento, sesión XXII, cánones 8 y 3}",
          },
        ],
        sourcesCited: [
          {
            citations: ["CEC1128", "CEC1371", "CEC1414"],
            name: "Catecismo de la Iglesia Católica 1128, 1371 (con las Catequesis mistagógicas atribuidas a san Cirilo de Jerusalén, c. 350–390), 1414",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["T22c2", "T22c6", "T22can8", "T22can", "T22decr"],
            name: "Concilio de Trento, sesión XXII, caps. 2 y 6, cann. 3 y 8, y decreto sobre la celebración de la Misa",
            dates: [
              {
                year: 1562,
                month: 9,
                day: 17,
              },
            ],
          },
          {
            citations: ["MF32"],
            name: "Pablo VI, Mysterium fidei 32",
            dates: [
              {
                year: 1965,
                month: 9,
                day: 3,
              },
            ],
          },
          {
            citations: ["CIC945", "CIC947"],
            name: "Código de Derecho Canónico, cann. 945 §2 y 947",
            dates: [
              {
                year: 1983,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: ["1Cor.11.27", "1Cor.11.33", "Matt.15.9"],
          objectorNote: "Confesión de Augsburgo XXIV.12, 39; Artículos de Esmalcalda II.2.2.",
        },
      },
      {
        id: "OB-6",
        layer: "official",
        title: "Los dones se consagran por la invocación del Espíritu Santo, no solo por las palabras de Cristo",
        synthesis:
          "En las liturgias antiguas, de Oriente y también de Roma y las Galias, los dones se consagran con la oración que invoca al Espíritu Santo, la epíclesis. Atribuir la consagración solo a las palabras «Esto es mi cuerpo» fue una innovación posterior de la Iglesia latina.",
        raisedBy: {
          traditions: ["orthodox"],
          line: "Suelen plantearla ortodoxos.",
        },
        objectorTexts: {
          shown: ["ENC10", "ST1895"],
          more: ["MOG107"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, la conversión es obra de la palabra de Cristo y del Espíritu Santo a la vez. El Catecismo: «En el corazón de la celebración de la Eucaristía se encuentran el pan y el vino que, por las palabras de Cristo y por la invocación del Espíritu Santo, se convierten en el Cuerpo y la Sangre de Cristo» {c:CEC1333|Catecismo 1333}. Y en el relato de la institución, «la fuerza de las palabras y de la acción de Cristo y el poder del Espíritu Santo hacen sacramentalmente presentes bajo las especies de pan y de vino su Cuerpo y su Sangre» {c:CEC1353|Catecismo 1353}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la epíclesis pertenece al centro de la Eucaristía. En ella «la Iglesia pide al Padre que envíe su Espíritu Santo (o el poder de su bendición (cf Plegaria Eucarística I o Canon romano, 90; Misal Romano) sobre el pan y el vino, para que se conviertan por su poder, en el Cuerpo y la Sangre de Jesucristo», y el Canon romano tiene esta invocación {c:CEC1353,MISAL|Catecismo 1353, que cita la Plegaria eucarística I}. «Junto con la Anámnesis, la Epíclesis es el centro de toda celebración sacramental, y muy particularmente de la Eucaristía», y el Catecismo cita a san Juan Damasceno, _Exposición de la fe_ (comienzos del siglo VIII): «el Espíritu Santo irrumpe y realiza aquello que sobrepasa toda palabra y todo pensamiento» {c:CEC1106|Catecismo 1106}. El Misal Romano lo dice en su Ordenación general: «la Iglesia, por medio de determinadas invocaciones, implora la fuerza del Espíritu Santo para que los dones que han presentado los hombres queden consagrados, es decir, se conviertan en el Cuerpo y Sangre de Cristo […]» {c:OGMR|Ordenación General del Misal Romano 79c, citada en Sacramentum caritatis 48}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, palabra y Espíritu no se separan. Benedicto XVI: la anáfora, «junto con las palabras pronunciadas por Cristo en la última Cena, contiene la epíclesis, como invocación al Padre para que haga descender el don del Espíritu a fin de que el pan y el vino se conviertan en el cuerpo y la sangre de Jesucristo» {c:SCa13|Sacramentum caritatis 13}, y pide contemplar «la profunda unidad de la anáfora, entre la invocación del Espíritu Santo y el relato de la institución» {c:SCa48|Sacramentum caritatis 48}. El mismo documento cita las _Catequesis_ atribuidas a san Cirilo de Jerusalén (c. 350–390): «invocamos a Dios misericordioso para que mande su Santo Espíritu sobre las ofrendas que están ante nosotros, para que Él convierta el pan en cuerpo de Cristo y el vino en sangre de Cristo» {c:SCa13|Sacramentum caritatis 13}. Y el Catecismo, que los Padres afirmaron «la eficacia de la Palabra de Cristo y de la acción del Espíritu Santo para obrar esta conversión», citando a san Juan Crisóstomo (_Homilías sobre la traición de Judas_, predicada en 388, según Baur): «Esto es mi Cuerpo, dice. Esta palabra transforma las cosas ofrecidas» {c:CEC1375|Catecismo 1375}. Por eso, entre los signos esenciales, nombra juntos el pan y el vino «sobre los cuales es invocada la bendición del Espíritu Santo» y las palabras de la consagración que el sacerdote pronuncia {c:CEC1412|Catecismo 1412}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, las palabras de la institución son parte constitutiva de la plegaria, pero no exigen una sola forma de recitarlas: la Congregación para la Doctrina de la Fe concluyó en 2001, con la aprobación de Juan Pablo II, que la anáfora de Addai y Mari, usada «sin una recitación del relato de la institución», «puede considerarse válida», porque las palabras de la institución están presentes en ella «no de modo narrativo coherente y _ad litteram_, sino de modo eucológico disperso» {c:PCPCU|Consejo Pontificio para la Promoción de la Unidad de los Cristianos, Orientaciones para la admisión a la Eucaristía entre la Iglesia caldea y la Iglesia asiria de Oriente, 2001} (traducción asistida por IA, sin revisar por Pedro, desde el inglés).",
          },
          {
            type: "quote",
            text: [
              "la forma de este sacramento son las palabras del Salvador con las que realizó este sacramento; pues el sacerdote, hablando en la persona de Cristo, realiza este sacramento. Por la fuerza de esas mismas palabras, la sustancia del pan se convierte en el cuerpo de Cristo, y la sustancia del vino en su sangre.",
            ],
            attribution: "{c:FLOexs|Concilio de Florencia, decreto para los armenios (Exsultate Deo, 1439)}",
          },
        ],
        sourcesCited: [
          {
            citations: ["CEC1106", "CEC1333", "CEC1353", "CEC1375", "CEC1412"],
            name: "Catecismo de la Iglesia Católica 1106 (con san Juan Damasceno, Exposición de la fe, comienzos del s. VIII), 1333, 1353, 1375 (con san Juan Crisóstomo), 1412",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["MISAL", "OGMR"],
            name: "Misal Romano, Plegaria eucarística I (citada en Catecismo 1353) y Ordenación General del Misal Romano (citada en Sacramentum caritatis 48)",
            dates: [],
          },
          {
            citations: ["SCa13", "SCa48"],
            name: "Benedicto XVI, Sacramentum caritatis 13, 48 (con las Catequesis atribuidas a san Cirilo de Jerusalén, c. 350–390)",
            dates: [
              {
                year: 2007,
                month: 2,
                day: 22,
              },
            ],
          },
          {
            citations: ["PCPCU"],
            name: "Consejo Pontificio para la Promoción de la Unidad de los Cristianos, Orientaciones",
            dates: [
              {
                year: 2001,
                month: 7,
                day: 20,
              },
            ],
          },
          {
            citations: ["FLOexs"],
            name: "Concilio de Florencia, Exsultate Deo",
            dates: [
              {
                year: 1439,
                month: 11,
                day: 22,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: ["Matt.26.26-Matt.26.28"],
          objectorNote: "Citado por la encíclica.",
        },
      },
      {
        id: "OB-7",
        layer: "official",
        title: "Durante mil años se consagró con pan fermentado: el ázimo es una innovación latina",
        synthesis:
          "Durante más de mil años, en Oriente y en Occidente, la Iglesia celebró la Eucaristía con pan fermentado, a ejemplo del Salvador. El pan ázimo de la Iglesia latina es una innovación del siglo XI.",
        raisedBy: {
          traditions: ["orthodox"],
          line: "Suelen plantearla ortodoxos.",
        },
        objectorTexts: {
          shown: ["ENC9", "ST1895"],
          more: [],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, el pan ázimo es disciplina de la Iglesia latina, no una condición de la Eucaristía. Su Código pide pan «exclusivamente de trigo y hecho recientemente» {c:CIC924|can. 924} y, en cuanto a la levadura, usar pan ázimo «según la antigua tradición de la Iglesia latina» {c:CIC926|can. 926}; y ese Código rige solo para ella: «Los cánones de este Código son sólo para la Iglesia latina» {c:CIC1|can. 1}. El Catecismo nombra como signo esencial el «pan de trigo», sin mencionar la levadura {c:CEC1412|Catecismo 1412}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, las Iglesias orientales conservan su propia disciplina. El Concilio Vaticano II declaró «que las Iglesias de Oriente, como las de Occidente, gozan del derecho y deber de regirse según sus respectivas disciplinas peculiares, como lo exijan su venerable antigüedad» {c:OE5|Orientalium Ecclesiarum 5}, y les dijo: «Sepan y tengan por seguro todos los orientales, que pueden y deben conservar siempre sus legítimos ritos litúrgicos y su disciplina» {c:OE6|Orientalium Ecclesiarum 6}.",
          },
          {
            type: "quote",
            text: [
              "el cuerpo de Cristo se consagra verdaderamente en pan de trigo ázimo o fermentado, y los sacerdotes deben consagrar el cuerpo del Señor en uno u otro, cada uno según la costumbre de su Iglesia, occidental u oriental.",
            ],
            attribution: "{c:FLOlae|Concilio de Florencia, decreto de unión con los griegos (Laetentur caeli, 1439)}",
          },
        ],
        sourcesCited: [
          {
            citations: ["CIC1", "CIC924", "CIC926"],
            name: "Código de Derecho Canónico, cann. 1, 924 y 926",
            dates: [
              {
                year: 1983,
              },
            ],
          },
          {
            citations: ["CEC1412"],
            name: "Catecismo de la Iglesia Católica 1412",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["OE5", "OE6"],
            name: "Concilio Vaticano II, Orientalium Ecclesiarum 5–6",
            dates: [
              {
                year: 1964,
              },
            ],
          },
          {
            citations: ["FLOlae"],
            name: "Concilio de Florencia, Laetentur caeli",
            dates: [
              {
                year: 1439,
                month: 7,
                day: 6,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: [],
        },
      },
      {
        id: "DO-1",
        layer: "debate",
        title: "«La carne nada aprovecha»: Jesús habla en sentido espiritual",
        synthesis:
          "Jesús mismo dijo: «El espíritu es el que da vida; la carne nada aprovecha: las palabras que yo os he hablado, son espíritu, y son vida» {v:John.6.63}. Comer su carne y beber su sangre no puede ser comer carne de verdad: es creer en él, o recibirlo espiritualmente.",
        raisedBy: {
          traditions: ["reformed"],
          line: "Desde la tradición reformada se objeta que, si «la carne nada aprovecha» (Juan 6:63), Jesús no habla de comer su carne de verdad. Para la Confesión de Westminster, los fieles reciben a Cristo «no carnal y corporalmente, sino espiritualmente» (29.7).",
        },
        objectorTexts: {
          shown: ["WCF297"],
          more: [],
        },
        answer: [
          {
            type: "p",
            text: "El Catecismo recuerda cómo se recibió el primer anuncio de la Eucaristía: «El primer anuncio de la Eucaristía dividió a los discípulos, igual que el anuncio de la pasión los escandalizó: «Es duro este lenguaje, ¿quién puede escucharlo?» (Jn 6,60). La Eucaristía y la cruz son piedras de escándalo. Es el mismo misterio» {c:CEC1336|Catecismo 1336}.",
          },
          {
            type: "p",
            text: "Juan Pablo II, en la audiencia general del 13 de septiembre de 1989, cita el versículo: ««El espíritu es el que da vida: la carne no sirve para nada. Las palabras que os he dicho son espíritu y son vida» (Jn 6, 63)», y dice: «Los oyentes de Jesús entendieron de modo «material» aquel primer anuncio eucarístico. El Maestro quiso en seguida precisar que su contenido sólo podía aclararse y entenderse por obra del «Espíritu que da vida». En la Eucaristía Cristo nos da su cuerpo y su sangre como alimento y bebida, bajo las especies del pan y del vino […]. Solamente en virtud del Espíritu, que da vida, el alimento y la bebida eucarísticos pueden obrar en nosotros la «comunión», es decir, la unión salvífica con el Cristo crucificado y glorificado» {c:JP89|n. 4}.",
          },
          {
            type: "p",
            text: "Juan Pablo II, en la audiencia del 30 de enero de 1991: «Tanto la palabra como el sacramento tienen vida y eficacia operativa por el Espíritu Santo» {c:JP91|n. 6}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, ese alimento es Cristo mismo, presente de verdad. El Catecismo: en el Santísimo Sacramento están ««contenidos verdadera, real y substancialmente el Cuerpo y la Sangre junto con el alma y la divinidad de nuestro señor Jesucristo, y, por consiguiente, Cristo entero»» {c:CEC1374|Catecismo 1374, citando a Trento}.",
          },
          {
            type: "quote",
            text: [
              "Si alguno negáre, que en el santisimo Sacramento de la Eucaristia se contiene verdadera, real y substancialmente el cuerpo y la sangre juntamente con el alma y divinidad de nuestro señor Jesu-Cristo, y por conseqüencia todo Cristo; sino por el contrario dixere, que solamente está en él como en señal, ó en figura, ó virtualmente; sea excomulgado.",
            ],
            attribution: "{c:T13can1|Trento, sesión XIII, canon 1}",
          },
        ],
        sourcesCited: [
          {
            citations: ["JP89", "JP91"],
            name: "Juan Pablo II, audiencias generales del 13 sep 1989 (n. 4) y del 30 ene 1991 (n. 6)",
            dates: [
              {
                year: 1989,
                alsoYears: [1991],
              },
            ],
          },
          {
            citations: ["CEC1336", "CEC1374"],
            name: "Catecismo de la Iglesia Católica 1336, 1374",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["T13can1"],
            name: "Concilio de Trento, sesión XIII, canon 1",
            dates: [
              {
                year: 1551,
                month: 10,
                day: 11,
              },
            ],
          },
        ],
        passages: {
          answer: ["John.6.60", "John.6.63", "John.6.67-John.6.68"],
          objector: ["John.6.63"],
        },
        apologeticAnswer: "pending",
      },
      {
        id: "DO-2",
        layer: "debate",
        title: "«Dios prohibió beber sangre»",
        synthesis:
          "Dios prohibió a Israel comer sangre, «porque la vida de toda carne es su sangre» {v:Lev.17.14}, y los apóstoles lo repitieron para los gentiles: «Que os abstengáis de cosas sacrificadas á ídolos, y de sangre, y de ahogado, y de fornicación» {v:Acts.15.29}. Beber la sangre de Cristo contradice lo que Dios prohibió.",
        raisedBy: {
          traditions: [],
          line: "Se objeta que la Escritura prohíbe beber sangre: a Israel, «No comeréis la sangre de ninguna carne» (Levítico 17:14), y a los gentiles convertidos, que se aparten «de ahogado, y de sangre» (Hechos 15:20).",
        },
        objectorTexts: {
          shown: [],
          more: [],
        },
        answer: [
          {
            type: "p",
            text: "El Catecismo enseña que Jesús dio plenitud a la ley sobre los alimentos: «Yendo más lejos, Jesús da plenitud a la Ley sobre la pureza de los alimentos, tan importante en la vida cotidiana judía, manifestando su sentido «pedagógico» (cf. Ga 3, 24) por medio de una interpretación divina: «Todo lo que de fuera entra en el hombre no puede hacerle impuro […] —así declaraba puros todos los alimentos—»» {c:CEC582|Catecismo 582, citando Mc 7,18-21}.",
          },
          {
            type: "p",
            text: "El Catecismo recoge las palabras del Señor sobre este mismo sacramento: ««En verdad, en verdad os digo: si no coméis la carne del Hijo del hombre, y no bebéis su sangre, no tendréis vida en vosotros» (Jn 6,53)», como «invitación urgente a recibirle en el sacramento de la Eucaristía» {c:CEC1384|Catecismo 1384}.",
          },
          {
            type: "quote",
            text: [
              "[La Iglesia] afirma que la diferencia de la ley mosaica entre alimentos puros e impuros pertenece a lo ceremonial, que pasó al surgir el Evangelio y dejó de ser eficaz. Dice también que aquella prohibición de los apóstoles, de lo inmolado a los ídolos, de la sangre y de lo sofocado (Hch 15,29), convenía a aquel tiempo […]. Pero cuando la religión cristiana se extendió hasta el punto de que en ella no aparece ningún judío carnal, sino que todos, pasando a la Iglesia, convienen en los mismos ritos y ceremonias del Evangelio, creyendo que todo es puro para los puros (Tt 1,15), cesando la causa de aquella prohibición apostólica cesó también su efecto. Por eso declara que no se ha de condenar la naturaleza de ningún alimento […]",
            ],
            attribution:
              "{c:FLOcd|Concilio de Florencia, bula Cantate Domino (4 de febrero de 1442, sesión XI, unión con los coptos y los etíopes)}",
          },
        ],
        sourcesCited: [
          {
            citations: ["CEC582", "CEC1384"],
            name: "Catecismo de la Iglesia Católica 582, 1384",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["FLOcd"],
            name: "Concilio de Florencia, Cantate Domino",
            dates: [
              {
                year: 1442,
                month: 2,
                day: 4,
              },
            ],
          },
        ],
        passages: {
          answer: ["Mark.7.18-Mark.7.21", "John.6.53", "Acts.15.29", "Titus.1.15"],
          objector: ["Lev.17.10-Lev.17.14", "Acts.15.20", "Acts.15.29"],
        },
        apologeticAnswer: "pending",
      },
    ],
  },
  life: {
    intro: [
      "La Eucaristía se celebra en la Misa. Los católicos tienen la obligación de participar en ella los domingos y las demás fiestas de precepto, y deben comulgar al menos una vez al año, en tiempo pascual {c:CIC1247,CIC920|Código de Derecho Canónico, cann. 1247 y 920}. Pero la Iglesia no se queda en ese mínimo: «recomienda vivamente a los fieles recibir la santa Eucaristía los domingos y los días de fiesta, o con más frecuencia aún, incluso todos los días» {c:CEC1389|Catecismo 1389}.",
      "Solo un sacerdote válidamente ordenado preside y consagra {c:CIC900|can. 900}. La Iglesia pide comulgar en gracia de Dios: quien tiene conciencia de pecado grave se confiesa antes {c:CIC916|can. 916}. Como, para la Iglesia, Cristo sigue presente mientras duran las especies, las hostias consagradas se guardan en el sagrario, desde donde se llevan a los enfermos y ante el que se reza y se adora {c:CIC938,CIC941|cann. 938–941} {c:CEC1378,CEC1379|Catecismo 1378–1379}.",
    ],
    items: [
      {
        id: "CV-0",
        label: "La Misa: Palabra y Eucaristía",
        text: "La celebración tiene «dos grandes momentos que forman una unidad básica»: la liturgia de la Palabra, «con las lecturas, la homilía y la oración universal», y la liturgia eucarística, «con la presentación del pan y del vino, la acción de gracias consecratoria y la comunión»; juntas constituyen «un solo acto de culto».",
        sources: [
          {
            citations: ["CEC1346"],
            label: "Catecismo 1346",
          },
        ],
      },
      {
        id: "CV-1",
        label: "Misa del domingo",
        text: "«El domingo y las demás fiestas de precepto los fieles tienen obligación de participar en la Misa.»",
        sources: [
          {
            citations: ["CIC1247"],
            label: "Código de Derecho Canónico, can. 1247",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Comunión frecuente; mínimo anual",
        text: "La Iglesia recomienda comulgar cada vez que se participa en la Misa, incluso a diario; obliga a hacerlo «por lo menos una vez al año», «durante el tiempo pascual, a no ser que por causa justa se cumpla en otro tiempo dentro del año».",
        sources: [
          {
            citations: ["CEC1389", "CEC1417"],
            label: "Catecismo 1388–1389, 1417",
          },
          {
            citations: ["CIC920"],
            label: "can. 920",
          },
          {
            citations: ["T13can9"],
            label: "Trento, ses. XIII, can. 9",
          },
        ],
      },
      {
        id: "CV-3",
        label: "En gracia de Dios",
        text: "«Quien tenga conciencia de hallarse en pecado grave, no celebre la Misa ni comulgue el Cuerpo del Señor sin acudir antes a la confesión sacramental, a no ser que concurra un motivo grave y no haya oportunidad de confesarse», y en ese caso debe hacer un acto de contrición perfecta con propósito de confesarse cuanto antes.",
        sources: [
          {
            citations: ["CIC916"],
            label: "can. 916",
          },
          {
            citations: ["CEC1385", "CEC1415"],
            label: "Catecismo 1385, 1415",
          },
          {
            citations: ["T13c7"],
            label: "Trento, ses. XIII, cap. 7",
          },
        ],
      },
      {
        id: "CV-4",
        label: "Ayuno eucarístico",
        text: "Abstenerse de comida y bebida «al menos desde una hora antes de la sagrada comunión, a excepción sólo del agua y de las medicinas»; los mayores, los enfermos y quienes los cuidan quedan exentos.",
        sources: [
          {
            citations: ["CIC919"],
            label: "can. 919",
          },
          {
            citations: ["CEC1387"],
            label: "Catecismo 1387",
          },
        ],
      },
      {
        id: "CV-5",
        label: "Primera comunión",
        text: "Los niños que han llegado al uso de razón, con preparación y «previa confesión sacramental»; deben poder recibir el Cuerpo del Señor «con fe y devoción».",
        sources: [
          {
            citations: ["CIC913"],
            label: "cann. 913–914",
          },
        ],
      },
      {
        id: "CV-6",
        label: "Quién preside",
        text: "«Sólo el sacerdote válidamente ordenado es ministro capaz de confeccionar el sacramento de la Eucaristía, actuando en la persona de Cristo.» Cristo mismo «es quien preside invisiblemente toda celebración eucarística»; el obispo o el presbítero preside «actuando in persona Christi capitis».",
        sources: [
          {
            citations: ["CIC900"],
            label: "can. 900",
          },
          {
            citations: ["CEC1348"],
            label: "Catecismo 1348",
          },
        ],
      },
      {
        id: "CV-7",
        label: "Pan y vino",
        text: "Pan «exclusivamente de trigo y hecho recientemente»; vino «natural, del fruto de la vid», con «un poco de agua»; en la Iglesia latina, pan ázimo «según la antigua tradición de la Iglesia latina».",
        sources: [
          {
            citations: ["CIC924"],
            label: "cann. 924 y 926",
          },
          {
            citations: ["T22c7"],
            label: "Trento, ses. XXII, cap. 7",
          },
          {
            citations: ["FLOexs"],
            label: "Concilio de Florencia, Exsultate Deo",
          },
        ],
      },
      {
        id: "CV-8",
        label: "Una o dos especies",
        text: "Se comulga con el pan solo o, según las leyes litúrgicas, con las dos especies; bajo cualquiera se recibe a Cristo entero.",
        sources: [
          {
            citations: ["CIC925"],
            label: "can. 925",
          },
          {
            citations: ["CEC1390"],
            label: "Catecismo 1390",
          },
          {
            citations: ["T21c3"],
            label: "Trento, ses. XXI, cap. 3",
          },
        ],
      },
      {
        id: "CV-9",
        label: "Quién puede comulgar",
        text: "En principio, los católicos; con condiciones, los fieles de las Iglesias orientales que lo piden espontáneamente y están bien dispuestos; otros cristianos solo en peligro de muerte u otra necesidad grave, si «profesen la fe católica respecto a esos sacramentos».",
        sources: [
          {
            citations: ["CIC844"],
            label: "can. 844",
          },
          {
            citations: ["CEC1399", "CEC1400", "CEC1401"],
            label: "Catecismo 1399–1401",
          },
        ],
      },
      {
        id: "CV-10",
        label: "El sagrario",
        text: "La Eucaristía se reserva «en un solo sagrario», en un lugar «verdaderamente noble», ante el que «ha de lucir constantemente una lámpara especial, con la que se indique y honre la presencia de Cristo».",
        sources: [
          {
            citations: ["CIC938"],
            label: "cann. 938 y 940",
          },
          {
            citations: ["CEC1379"],
            label: "Catecismo 1379",
          },
        ],
      },
      {
        id: "CV-11",
        label: "Adoración y procesiones",
        text: "Exposición del Santísimo (no durante la Misa) y, donde el obispo lo juzgue posible, procesión por las calles «sobre todo en la solemnidad del Cuerpo y Sangre de Cristo».",
        sources: [
          {
            citations: ["CIC941"],
            label: "cann. 941 y 944",
          },
          {
            citations: ["CEC1378"],
            label: "Catecismo 1378",
          },
          {
            citations: ["MF56"],
            label: "Mysterium fidei 56",
          },
        ],
      },
      {
        id: "CV-12",
        label: "Viático",
        text: "A quien está en peligro de muerte se le da la comunión como Viático, aunque haya comulgado ese mismo día.",
        sources: [
          {
            citations: ["CIC921"],
            label: "can. 921",
          },
        ],
      },
      {
        id: "CV-13",
        label: "Misa por vivos y difuntos",
        text: "«El sacerdote tiene facultad para aplicar la Misa por cualesquiera, tanto vivos como difuntos.»",
        sources: [
          {
            citations: ["CIC901"],
            label: "can. 901",
          },
          {
            citations: ["T22c2"],
            label: "Trento, ses. XXII, cap. 2",
          },
          {
            citations: ["CEC1371"],
            label: "Catecismo 1371",
          },
        ],
      },
    ],
  },
  authority: {
    grades: {
      dogma: {
        label: "Dogma",
        sub: "de fe divina y católica",
        definition:
          "Se ha de creer con fe divina y católica todo aquello que se contiene en la palabra de Dios escrita o transmitida por tradición […] y que además es propuesto como revelado por Dios, ya sea por el magisterio solemne de la Iglesia, ya por su magisterio ordinario y universal",
        source: {
          citations: ["CIC750"],
          label: "Código de Derecho Canónico, can. 750 §1",
        },
      },
      definitive: {
        label: "Doctrina definitiva",
        definition:
          "Se han de aceptar y retener firmemente todas y cada una de las cosas sobre la doctrina de la fe y las costumbres propuestas de modo definitivo por el magisterio de la Iglesia",
        source: {
          citations: ["CIC750"],
          label: "Código de Derecho Canónico, can. 750 §2",
        },
      },
      magisterium: {
        label: "Magisterio auténtico",
        definition:
          "Se ha de prestar un asentimiento religioso del entendimiento y de la voluntad, sin que llegue a ser de fe, a la doctrina que el Sumo Pontífice o el Colegio de los Obispos, en el ejercicio de su magisterio auténtico, enseñan acerca de la fe y de las costumbres",
        source: {
          citations: ["CIC752"],
          label: "Código de Derecho Canónico, can. 752",
        },
      },
      discipline: {
        label: "Disciplina",
        definition:
          "Las decisiones magisteriales en materia de disciplina, aunque no estén garantizadas por el carisma de la infalibilidad, no están desprovistas de la asistencia divina y requieren la adhesión de los fieles.",
        source: {
          citations: ["DV17"],
          label: "Donum veritatis 17",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
