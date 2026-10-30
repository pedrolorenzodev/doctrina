import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const solaScripturaOrthodox = {
  doctrine: "sola-scriptura",
  tradition: "orthodox",
  status: "draft",
  title: "La posición ortodoxa",
  lede: "Cómo la Iglesia ortodoxa entiende la Escritura y la Tradición, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan los textos ortodoxos sobre la Escritura y la Tradición, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "La Confesión de Dositeo confiesa: «La divina y sagrada Escritura es enseñada por Dios».",
      grades: [
        {
          kind: "church",
          grade: "confession",
          basis: "Confesión de Dositeo, decreto II",
        },
      ],
      sources: [
        {
          citations: ["ODositheusII"],
          label: "Dositeo II",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "los libros inspirados",
        text: "Para el Catecismo extenso de Filareto, la Biblia son ciertos libros escritos por el Espíritu de Dios por medio de hombres santificados por Dios, llamados profetas y apóstoles (pregunta 19); y estos libros merecen atención antes que todos los demás (pregunta 20).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, preguntas 19 y 20",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret19"],
            label: "Filareto, pregunta 19",
          },
          {
            citations: ["OPhilaret20"],
            label: "Filareto, pregunta 20",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la revelación transmitida",
        text: "El Catecismo extenso de Filareto responde que la revelación divina se difunde y se conserva en la verdadera Iglesia por dos canales: la santa tradición y la santa Escritura (pregunta 16).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, pregunta 16",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret16"],
            label: "Filareto, pregunta 16",
          },
        ],
      },
      {
        id: "QE-3",
        short: "qué es la tradición",
        text: "Por santa tradición el Catecismo extenso de Filareto entiende la doctrina de la fe, la ley de Dios, los sacramentos y el ritual, tal como los transmitieron de unos a otros, de generación en generación, de palabra y con el ejemplo, los verdaderos creyentes y adoradores de Dios (pregunta 17); y dice que la Iglesia es su depositaria (pregunta 18).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, preguntas 17 y 18",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret17"],
            label: "Filareto, pregunta 17",
          },
          {
            citations: ["OPhilaret18"],
            label: "Filareto, pregunta 18",
          },
        ],
      },
      {
        id: "QE-4",
        short: "la Escritura conservada",
        text: "Según el Catecismo extenso de Filareto, la Escritura se escribió para que la revelación divina se conservara con más exactitud e inmutabilidad (pregunta 22).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, pregunta 22",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret22"],
            label: "Filareto, pregunta 22",
          },
        ],
      },
      {
        id: "QE-5",
        short: "la tradición y la Escritura",
        text: "El Catecismo extenso de Filareto recibe la tradición que concuerda con la revelación divina y con la santa Escritura, como lo enseña la propia Escritura (pregunta 23).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, pregunta 23",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret23"],
            label: "Filareto, pregunta 23",
          },
        ],
      },
      {
        id: "QE-6",
        short: "la interpretación en la Iglesia",
        text: "La Confesión de Dositeo enseña: «Sin embargo, no de otro modo que como la Iglesia católica la interpretó y la transmitió».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto II",
          },
        ],
        sources: [
          {
            citations: ["ODositheusII"],
            label: "Dositeo II",
          },
        ],
      },
      {
        id: "QE-7",
        short: "los testimonios sobre el canon",
        text: "Los testimonios sobre el canon no se funden: el Catecismo extenso de Filareto (preguntas 31 a 35) y la Confesión de Dositeo (pregunta III) difieren sobre los libros ausentes de la lista hebrea.",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, preguntas 31 a 35",
          },
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, pregunta III",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret31"],
            label: "Filareto, pregunta 31",
          },
          {
            citations: ["ODositheusQuestion_III"],
            label: "Dositeo, pregunta III",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "La Confesión de Dositeo dice: «Pues, siendo uno y el mismo Espíritu Santo el autor de ambas, es ciertamente igual ser enseñado por la Escritura y por la Iglesia católica» {c:ODositheusII|Dositeo II}.",
      "Y el Catecismo extenso de Filareto dice que el instrumento más antiguo y original para difundir la revelación divina es la santa tradición (pregunta 21) {c:OPhilaret21|Filareto, pregunta 21}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para el Catecismo extenso de Filareto, la propia Escritura pide mantenerse firmes en las tradiciones aprendidas, de palabra o por carta (2 Tesalonicenses 2:15; pregunta 23).",
  },
  scriptureSubtitle: "Los pasajes que los textos ortodoxos citan sobre la Escritura y la Tradición, y cómo los leen.",
  scripture: [
    {
      refs: ["1Tim.3.15"],
      text: "El Catecismo extenso lo cita para la Iglesia como depositaria, columna y baluarte de la verdad (Filareto, pregunta 18); la Confesión de Dositeo apoya en la Iglesia su argumento (decreto II).",
    },
    {
      refs: ["2Thess.2.15"],
      text: "El Catecismo extenso lo cita para la tradición enseñada de palabra o por carta (Filareto, pregunta 23).",
    },
    {
      refs: ["Rom.3.2"],
      text: "El Catecismo extenso lo cita para la recepción de los libros del Antiguo Testamento por medio de la Iglesia hebrea (Filareto, pregunta 32).",
    },
    {
      refs: ["Luke.24.44"],
      text: "El Catecismo extenso lo cita para la designación «Ley de Moisés» en su relato de los libros de la Escritura (Filareto, pregunta 37).",
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
      "Para el Catecismo extenso de Filareto, el Salterio es un manual perfecto de oración y alabanza y por eso se usa continuamente en el culto divino de la Iglesia (pregunta 42) {c:OPhilaret42|Filareto, pregunta 42}.",
      "Y la Confesión de Dositeo dice sobre el canon: «Los consideramos libros canónicos y confesamos que son Sagrada Escritura» {c:ODositheusQuestion_III|Dositeo, pregunta III}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "El canon: la confesión griega",
        text: "Tras enumerar los libros, la Confesión de Dositeo dice: «Los consideramos libros canónicos y confesamos que son Sagrada Escritura».",
        sources: [
          {
            citations: ["ODositheusQuestion_III"],
            label: "Dositeo, pregunta III",
          },
        ],
      },
      {
        id: "CV-2",
        label: "El canon: el testimonio ruso",
        text: "El Catecismo extenso de Filareto cuenta los libros del Antiguo Testamento en veintidós, de acuerdo con los judíos y su lista hebrea original (pregunta 31); no incluye el Sirácida y otros libros porque no existen en hebreo (pregunta 34), y dice que fueron destinados a ser leídos por quienes se preparan para ingresar en la Iglesia (pregunta 35).",
        sources: [
          {
            citations: ["OPhilaret31"],
            label: "Filareto, pregunta 31",
          },
          {
            citations: ["OPhilaret34"],
            label: "Filareto, pregunta 34",
          },
          {
            citations: ["OPhilaret35"],
            label: "Filareto, pregunta 35",
          },
        ],
      },
      {
        id: "CV-3",
        label: "La lectura litúrgica",
        text: "El Salterio es un manual perfecto de oración y alabanza, y por eso se usa continuamente en el culto divino de la Iglesia (pregunta 42).",
        sources: [
          {
            citations: ["OPhilaret42"],
            label: "Filareto, pregunta 42",
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
          citations: ["ODositheusII"],
          label: "Dositeo II",
        },
      },
      catechism: {
        label: "Catecismo extenso de Filareto (1839)",
        definition:
          "Catecismo sinodal ruso de 1839, con la numeración de preguntas de Schaff. Su descripción doctrinal no es un relevamiento de todas las Iglesias autocéfalas.",
        source: {
          citations: ["OPhilaret16"],
          label: "Filareto, pregunta 16",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
