import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const eucharistOrthodox = {
  doctrine: "eucharist",
  tradition: "orthodox",
  status: "draft",
  title: "La posición ortodoxa",
  lede: "Cómo la Iglesia ortodoxa entiende la Eucaristía, con sus propias fuentes.",
  teach: {
    subtitle: "Lo que enseñan los textos ortodoxos sobre la Eucaristía, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "La Confesión de Dositeo confiesa: «El santísimo misterio de la sagrada Eucaristía, que antes colocamos cuarto en el orden, es aquel que el Señor entregó la noche en que se entregaba a sí mismo por la vida del mundo».",
      grades: [
        {
          kind: "church",
          grade: "confession",
          basis: "Confesión de Dositeo, decreto XVII",
        },
      ],
      sources: [
        {
          citations: ["ODositheusXVII"],
          label: "Dositeo XVII",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "el cuerpo y la sangre",
        text: "La Confesión de Dositeo enseña: «Sino verdadera y realmente, de modo que después de la consagración del pan y del vino el pan se cambia, se transustancia, se transforma, se convierte en el mismo cuerpo verdadero del Señor […]».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVII",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVII"],
            label: "Dositeo XVII",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la sustancia y las apariencias",
        text: "La Confesión de Dositeo enseña: «Después de la consagración del pan y del vino ya no permanece la sustancia del pan y del vino, sino el cuerpo mismo y la sangre misma del Señor bajo la apariencia y figura del pan y del vino; es decir, bajo los accidentes del pan».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVII",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVII"],
            label: "Dositeo XVII",
          },
        ],
      },
      {
        id: "QE-3",
        short: "Cristo entero en cada porción",
        text: "La Confesión de Dositeo enseña: «Sino al Señor Cristo entero, totalmente, según la sustancia, con alma y divinidad, es decir, perfecto Dios y perfecto hombre».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVII",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVII"],
            label: "Dositeo XVII",
          },
        ],
      },
      {
        id: "QE-4",
        short: "la recepción y su fruto",
        text: "La Confesión de Dositeo enseña: «A los piadosos y dignos les procura remisión de los pecados y vida eterna; a los impíos e indignos, condenación y castigo eterno».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVII",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVII"],
            label: "Dositeo XVII",
          },
        ],
      },
      {
        id: "QE-5",
        short: "el sacrificio por vivos y difuntos",
        text: "La Confesión de Dositeo enseña: «Es un sacrificio verdadero y propiciatorio, ofrecido por todos los piadosos vivos y difuntos y para beneficio de todos […]».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVII",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVII"],
            label: "Dositeo XVII",
          },
        ],
      },
      {
        id: "QE-6",
        short: "el término y el modo",
        text: "La Confesión de Dositeo enseña: «Con la palabra transustanciación no se significa el modo por el que el pan y el vino se transforman en el cuerpo y la sangre del Señor […]». El Catecismo extenso de Filareto añade que el término no define el modo, que Dios conoce (preguntas 339 y 340).",
        status: ["STORT~eo"],
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVII",
          },
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, preguntas 339 y 340",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVII"],
            label: "Dositeo XVII",
          },
          {
            citations: ["OPhilaret339_340"],
            label: "Filareto, pregunta 339–340",
          },
        ],
      },
      {
        id: "QE-7",
        short: "el testimonio de Mogila",
        text: "Pedro Mogila, en su Confesión ortodoxa (I.106–107), es el segundo testimonio confesional del siglo XVII y no una paráfrasis de Dositeo.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión ortodoxa de Pedro Mogila I.106–107",
          },
        ],
        sources: [
          {
            citations: ["OMogila106"],
            label: "Mogila, pregunta 106",
          },
          {
            citations: ["OMogila107"],
            label: "Mogila, pregunta 107",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "La Confesión de Dositeo transmite las palabras de Cristo: «Pues tomó pan, lo bendijo y lo dio a sus santos discípulos y apóstoles diciendo: tomen, coman; esto es mi cuerpo» {c:ODositheusXVII|Dositeo XVII}.",
      "Y el Catecismo extenso de Filareto añade la invocación del Espíritu Santo y la bendición de los dones, el pan y el vino ofrecidos (pregunta 338) {c:OPhilaret338|Filareto, pregunta 338}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para el Catecismo extenso de Filareto, quien comulga se une estrechamente con Jesucristo y participa de la vida eterna (pregunta 342), y la comunión significa que, siendo muchos, somos un solo pan y un solo cuerpo (pregunta 329).",
  },
  scriptureSubtitle: "Los pasajes que los textos ortodoxos citan sobre la Eucaristía, y cómo los leen.",
  scripture: [
    {
      refs: ["Matt.26.26-Matt.26.28"],
      text: "El Catecismo extenso lo cita para las palabras de la institución antes de la invocación (Filareto, pregunta 338); la Confesión de Dositeo transmite esas palabras (decreto XVII).",
    },
    {
      refs: ["1Cor.10.17"],
      text: "El Catecismo extenso lo cita para un solo pan y un solo cuerpo (Filareto, pregunta 329).",
    },
    {
      refs: ["1Cor.11.28-1Cor.11.29"],
      text: "El Catecismo extenso lo cita para el examen y la recepción indigna (Filareto, pregunta 341).",
    },
    {
      refs: ["John.6.54", "John.6.56"],
      text: "El Catecismo extenso lo cita para la unión con Cristo y la vida eterna (Filareto, pregunta 342).",
    },
    {
      refs: ["Luke.22.19"],
      text: "El Catecismo extenso lo cita para la oración, la fe y el recuerdo de quienes asisten sin comulgar (Filareto, pregunta 344).",
    },
    {
      refs: ["1Cor.11.26"],
      text: "El Catecismo extenso lo cita para la continuación hasta la venida de Cristo (Filareto, pregunta 350).",
    },
    {
      refs: ["John.19.34", "John.20.29"],
      text: "Mogila lo cita para el agua y la sangre, y para la fe y la vista (Mogila I.107).",
    },
  ],
  videos: {
    subtitle: "Creadores ortodoxos explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle:
      "Objeciones a la postura ortodoxa. Abre cada una para leer en profundidad la respuesta de los textos ortodoxos.",
    videosSubtitle: "Creadores ortodoxos que responden a esta objeción. Los videos se abren en YouTube.",
    order: [],
    items: [],
  },
  life: {
    intro: [
      "Para el Catecismo extenso de Filareto, primero se preparan los elementos, luego los fieles y por último se consagra el sacramento (pregunta 323) {c:OPhilaret323|Filareto, pregunta 323}.",
      "Y la Confesión de Dositeo dice: «Pues una es la adoración de la santa Trinidad y del cuerpo y la sangre del Señor» {c:ODositheusXVII|Dositeo XVII}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Preparar los elementos",
        text: "Se prepara primero el pan, que es leudado, puro y de trigo (preguntas 323 y 328).",
        sources: [
          {
            citations: ["OPhilaret323"],
            label: "Filareto, pregunta 323",
          },
          {
            citations: ["OPhilaret328"],
            label: "Filareto, pregunta 328",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Examen, penitencia, ayuno y oración",
        text: "Quien comulga debe examinar su conciencia ante Dios y limpiarla del pecado por la penitencia, con la ayuda del ayuno y de la oración (pregunta 341).",
        sources: [
          {
            citations: ["OPhilaret341"],
            label: "Filareto, pregunta 341",
          },
        ],
      },
      {
        id: "CV-3",
        label: "La frecuencia, según el catecismo histórico",
        text: "El catecismo ruso del siglo XIX llama a quienes quieren vivir religiosamente a confesarse con su padre espiritual y comulgar cuatro veces al año, o incluso cada mes, y exige a todos comulgar por lo menos una vez al año (pregunta 343).",
        sources: [
          {
            citations: ["OPhilaret343"],
            label: "Filareto, pregunta 343",
          },
        ],
      },
      {
        id: "CV-4",
        label: "Participar sin comulgar",
        text: "Quienes no comulgan pueden y deben participar en la Liturgia por la oración y la fe, y sobre todo por el recuerdo continuo de nuestro Señor Jesucristo (pregunta 344).",
        sources: [
          {
            citations: ["OPhilaret344"],
            label: "Filareto, pregunta 344",
          },
        ],
      },
      {
        id: "CV-5",
        label: "La adoración",
        text: "La Confesión de Dositeo dice: «Pues una es la adoración de la santa Trinidad y del cuerpo y la sangre del Señor».",
        sources: [
          {
            citations: ["ODositheusXVII"],
            label: "Dositeo XVII",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Las categorías de autoridad que los propios textos ortodoxos reconocen para sus textos, con su definición en palabras de los textos.",
    grades: {
      confession: {
        label: "Confesión de Dositeo (Jerusalén, 1672)",
        definition:
          "Confesión del Sínodo de Jerusalén de 1672. Pedro Mogila tiene la aprobación patriarcal de su revisión griega del 11 de marzo de 1643, limitada al griego y no a toda traducción posterior.",
        source: {
          citations: ["ODositheusXVII"],
          label: "Dositeo XVII",
        },
      },
      catechism: {
        label: "Catecismo extenso de Filareto (1839)",
        definition:
          "Catecismo sinodal ruso de 1839, con la numeración de preguntas de Schaff. Su descripción doctrinal no es un relevamiento de todas las Iglesias autocéfalas.",
        source: {
          citations: ["OPhilaret338"],
          label: "Filareto, pregunta 338",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
