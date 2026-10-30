import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const papacyOrthodox = {
  doctrine: "papacy",
  tradition: "orthodox",
  status: "draft",
  title: "La posición ortodoxa",
  lede: "Cómo la Iglesia ortodoxa entiende a Cristo como cabeza de la Iglesia y el ministerio, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan los textos ortodoxos sobre la cabeza de la Iglesia y el ministerio, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "Para el Catecismo extenso de Filareto, Jesucristo es la cabeza de la Iglesia y el salvador del cuerpo (pregunta 272).",
      grades: [
        {
          kind: "church",
          grade: "catechism",
          basis: "Catecismo extenso de Filareto, pregunta 272",
        },
      ],
      sources: [
        {
          citations: ["OPhilaret272"],
          label: "Filareto, pregunta 272",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "Cristo gobierna por sus ministros",
        text: "La Confesión de Dositeo enseña: «El mismo Señor nuestro Jesucristo es cabeza y él mismo, teniendo el timón del gobierno de la Iglesia, la dirige por medio de los santos padres».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto X",
          },
        ],
        sources: [
          {
            citations: ["ODositheusX"],
            label: "Dositeo X",
          },
        ],
      },
      {
        id: "QE-2",
        short: "el ministerio apostólico",
        text: "El Catecismo extenso de Filareto llama apostólica a la Iglesia porque tiene de los apóstoles, sin interrupción ni cambio, tanto su doctrina como la sucesión de los dones del Espíritu Santo por la imposición de manos consagradas (pregunta 274).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, pregunta 274",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret274"],
            label: "Filareto, pregunta 274",
          },
        ],
      },
      {
        id: "QE-3",
        short: "el origen de la jerarquía",
        text: "Según el Catecismo extenso de Filareto, la jerarquía procede del mismo Jesucristo y de la venida del Espíritu Santo sobre los apóstoles, y desde entonces continúa en sucesión ininterrumpida por la imposición de manos, en el sacramento del Orden (pregunta 277).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, pregunta 277",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret277"],
            label: "Filareto, pregunta 277",
          },
        ],
      },
      {
        id: "QE-4",
        short: "la autoridad sobre toda la Iglesia",
        text: "A la pregunta por qué autoridad jerárquica puede actuar sobre toda la Iglesia católica, el Catecismo extenso de Filareto responde: un Concilio ecuménico (pregunta 278). Y sobre las divisiones principales de la Iglesia: bajo los patriarcas ortodoxos y el Santísimo Sínodo (pregunta 279), formulación histórica de la época sinodal rusa.",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, preguntas 278 y 279",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret278"],
            label: "Filareto, pregunta 278",
          },
          {
            citations: ["OPhilaret279"],
            label: "Filareto, pregunta 279",
          },
        ],
      },
      {
        id: "QE-5",
        short: "la cláusula del hombre mortal",
        text: "La Confesión de Dositeo enseña: «Porque un hombre mortal no puede ser cabeza universal y perpetua».",
        status: ["STDOS~po"],
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto X",
          },
        ],
        sources: [
          {
            citations: ["ODositheusX"],
            label: "Dositeo X",
          },
        ],
      },
      {
        id: "QE-6",
        short: "el primado canónico",
        text: "Los cánones conciliares recibidos ordenan las sedes y sus privilegios: Constantinopla I (canon 3), Calcedonia (canon 28) y Trulo (canon 36). Se muestran junto a la confesión sobre Cristo y no en su lugar.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Cánones de Constantinopla I, Calcedonia y Trulo",
          },
        ],
        sources: [
          {
            citations: ["OConstantinopleI3"],
            label: "Constantinopla I, canon 3",
          },
          {
            citations: ["OChalcedon28"],
            label: "Calcedonia, canon 28",
          },
          {
            citations: ["OTrullo36"],
            label: "Trulo, canon 36",
          },
        ],
      },
      {
        id: "QE-7",
        short: "la preservación de la Iglesia",
        text: "Según el Catecismo extenso de Filareto, la Iglesia nunca apostatará de la fe, ni pecará contra la verdad de la fe, ni caerá en error (pregunta 271).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, pregunta 271",
          },
        ],
        sources: [
          {
            citations: ["OPhilaret271"],
            label: "Filareto, pregunta 271",
          },
        ],
      },
      {
        id: "QE-8",
        short: "el orden de las sedes",
        text: "El Primer Concilio de Constantinopla (canon 3) da al obispo de Constantinopla la prerrogativa de honor después del obispo de Roma, porque Constantinopla es la Nueva Roma. El Concilio Quinisexto (canon 36) dice que la sede de Constantinopla tendrá iguales privilegios que la antigua Roma y será segunda después de ella, seguida por Alejandría, Antioquía y Jerusalén.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Constantinopla I, canon 3, y Trulo, canon 36",
          },
        ],
        sources: [
          {
            citations: ["OConstantinopleI3"],
            label: "Constantinopla I, canon 3",
          },
          {
            citations: ["OTrullo36"],
            label: "Trulo, canon 36",
          },
        ],
      },
      {
        id: "QE-9",
        short: "la respuesta de 1895 sobre la infalibilidad",
        text: "La encíclica patriarcal y sinodal de 1895 dice: «La Iglesia ortodoxa oriental y católica de Cristo, fuera del Hijo y Verbo de Dios que se hizo hombre de manera inefable, no conoce a ningún otro que haya sido infalible sobre la tierra».",
        status: ["ST1895~p"],
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Encíclica patriarcal y sinodal de 1895, §XVIII",
          },
        ],
        sources: [
          {
            citations: ["O1895encyclicalXVIII"],
            label: "Encíclica de 1895, §XVIII",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "La Confesión de Dositeo dice: «Es manifiesto que el gran misterio y dignidad del episcopado se transmite por sucesión hasta nosotros» {c:ODositheusX|Dositeo X}.",
      "Y el Catecismo extenso de Filareto dice que la Iglesia está edificada sobre el fundamento de los apóstoles y profetas, siendo Jesucristo mismo la piedra angular (pregunta 274) {c:OPhilaret274|Filareto, pregunta 274}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para la encíclica patriarcal y sinodal de 1895: «En cuestiones graves que requerían la autoridad de la Iglesia universal se apelaba a un Concilio Ecuménico, que era y es el único tribunal supremo en la Iglesia universal» {c:O1895encyclicalXVI|Encíclica de 1895, §XVI}.",
  },
  scriptureSubtitle:
    "Los pasajes que los textos ortodoxos citan sobre la cabeza de la Iglesia y el ministerio, y cómo los leen.",
  scripture: [
    {
      refs: ["Eph.5.23"],
      text: "El Catecismo extenso lo cita para Cristo como cabeza y salvador del cuerpo (Filareto, pregunta 272).",
    },
    {
      refs: ["Eph.2.19-Eph.2.20"],
      text: "El Catecismo extenso lo cita para el fundamento apostólico y Cristo como piedra angular (Filareto, pregunta 274).",
    },
    {
      refs: ["Eph.4.11-Eph.4.12"],
      text: "El Catecismo extenso lo cita para los dones y el ministerio para la edificación (Filareto, pregunta 277).",
    },
    {
      refs: ["2Thess.2.15"],
      text: "El Catecismo extenso lo cita para mantener la enseñanza apostólica de palabra o por carta (Filareto, pregunta 275).",
    },
    {
      refs: ["Titus.3.10", "Titus.1.10-Titus.1.11"],
      text: "El Catecismo extenso lo cita para su disciplina frente a la falsa enseñanza (Filareto, pregunta 275).",
    },
    {
      refs: ["Matt.18.17"],
      text: "El Catecismo extenso lo cita para oír a la Iglesia (Filareto, pregunta 275).",
    },
    {
      refs: ["Gal.2.11"],
      text: "La encíclica de 1895 lo cita en su argumento sobre la corrección de Pedro (encíclica, §XVIII).",
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
      "Para la Confesión de Dositeo, el obispo se distingue del sacerdote: «El sacerdote conserva en sí la potestad y gracia del sacerdocio que ha recibido; el obispo también la comunica a otros» {c:ODositheusX|Dositeo X}.",
      "Para el Catecismo extenso de Filareto, la obediencia se aprende de la Escritura, de los cánones de los santos apóstoles, de los concilios ecuménicos y provinciales, de los santos padres y de los libros de reglas y rúbricas eclesiásticas (pregunta 282) {c:OPhilaret282|Filareto, pregunta 282}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "El servicio episcopal",
        text: "La Confesión de Dositeo dice: «El sacerdote conserva en sí la potestad y gracia del sacerdocio que ha recibido; el obispo también la comunica a otros».",
        sources: [
          {
            citations: ["ODositheusX"],
            label: "Dositeo X",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Dónde se aprende la obediencia",
        text: "El Catecismo extenso de Filareto dice que se aprende de la Escritura, de los cánones de los santos apóstoles, de los concilios ecuménicos y provinciales, de los santos padres y de los libros de reglas y rúbricas eclesiásticas (pregunta 282).",
        sources: [
          {
            citations: ["OPhilaret282"],
            label: "Filareto, pregunta 282",
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
          "Confesión del Sínodo de Jerusalén de 1672. Los cánones de Constantinopla I, Calcedonia y Trulo pertenecen al nivel conciliar del mapa, y la encíclica patriarcal y sinodal de 1895 es una respuesta fechada del patriarca Antimo VII y los firmantes; no es un concilio ecuménico.",
        source: {
          citations: ["ODositheusX"],
          label: "Dositeo X",
        },
      },
      catechism: {
        label: "Catecismo extenso de Filareto (1839)",
        definition:
          "Catecismo sinodal ruso de 1839, con la numeración de preguntas de Schaff. Su descripción doctrinal no es un relevamiento de todas las Iglesias autocéfalas.",
        source: {
          citations: ["OPhilaret272"],
          label: "Filareto, pregunta 272",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
