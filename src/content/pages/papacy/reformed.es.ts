import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const papacyReformed = {
  doctrine: "papacy",
  tradition: "reformed",
  status: "draft",
  title: "La posición reformada",
  lede: "Cómo los Estándares de Westminster entienden la Iglesia, su gobierno y el papado, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan los Estándares de Westminster sobre la Iglesia, su gobierno y el papado, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "La Confesión de Westminster describe así la iglesia universal e invisible: «que han sido, ó son, ó serán reunidos en uno y sometidos á Cristo la cabeza de la Iglesia; y esta es la esposa, la plenitud de El quien llena todas las cosas en todos».",
      grades: [
        {
          kind: "church",
          grade: "standards",
          basis: "Confesión de Westminster 25.1",
        },
      ],
      sources: [
        {
          citations: ["RWCF25_1"],
          label: "Westminster 25.1",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la iglesia visible",
        text: "La Confesión de Westminster nombra la iglesia visible: «el reino del Señor Jesu-Cristo [...] la casa y familia de Dios».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 25.2",
          },
        ],
        sources: [
          {
            citations: ["RWCF25_2"],
            label: "Westminster 25.2",
          },
        ],
      },
      {
        id: "QE-2",
        short: "el ministerio de la Iglesia",
        text: "La Confesión de Westminster enseña: «A esta iglesia católica visible, Cristo ha dado el ministerio, los oráculos, y las ordenanzas de Dios; para juntar y perfeccionar á los santos, en la vida presente, hasta el fin del mundo, haciéndoles suficientes para este fin, segun su promesa, por su presencia y Espíritu.».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 25.3",
          },
        ],
        sources: [
          {
            citations: ["RWCF25_3"],
            label: "Westminster 25.3",
          },
        ],
      },
      {
        id: "QE-3",
        short: "el gobierno de la Iglesia",
        text: "La Confesión de Westminster enseña: «El Señor Jesus, como Rey y Cabeza de su iglesia, ha establecido en ella un gobierno regido por oficiales eclesiásticos distintos del magistrado civil.».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 30.1",
          },
        ],
        sources: [
          {
            citations: ["RWCF30_1"],
            label: "Westminster 30.1",
          },
        ],
      },
      {
        id: "QE-4",
        short: "el rechazo de una cabeza papal",
        text: "La Confesión de Westminster, en su texto histórico, enseña: «No hay otra cabeza de la iglesia sino el Señor Jesu-Cristo [...] Ni puede el papa de Roma ser la cabeza de ella en ningun sentido; pues es aquel anti-cristo, aquel inícuo, é hijo de perdicion, que se ensalza en la iglesia contra Cristo, y contra todo lo que se llama Dios».",
        status: ["STWCF~p"],
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 25.6",
          },
        ],
        sources: [
          {
            citations: ["RWCF25_6"],
            label: "Westminster 25.6",
          },
        ],
      },
      {
        id: "QE-5",
        short: "la Iglesia que permanece y puede errar",
        text: "La Confesión de Westminster dice de las iglesias más puras: «están expuestas á errar en doctrina y práctica». Y dice: «siempre habrá una iglesia en la tierra, para adorar á Dios conforme á su voluntad».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 25.5",
          },
        ],
        sources: [
          {
            citations: ["RWCF25_5"],
            label: "Westminster 25.5",
          },
        ],
      },
      {
        id: "QE-6",
        short: "sínodos y concilios",
        text: "La Confesión de Westminster, en su numeración histórica, atribuye a los sínodos y concilios la determinación ministerial de controversias, casos de conciencia, culto y gobierno, con sumisión a lo que concuerde con la Palabra de Dios (31.3), y dice que pueden errar (31.4).",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 31.3 y 31.4, numeración histórica",
          },
        ],
        sources: [
          {
            citations: ["RWCF31_3"],
            label: "Westminster 31.3",
          },
          {
            citations: ["RWCF31_4"],
            label: "Westminster 31.4",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para el Catecismo Menor de Westminster, Cristo ejerce su oficio de Rey: «Cristo ejecuta el oficio de Rey sujetándonos á sí mismo, rigiendo y defendiéndonos, y restringiendo y venciendo á todos sus enemigos y los nuestros.» {c:RWSC26|Catecismo Menor de Westminster 26}.",
      "Y la Confesión dice de los oficiales de la iglesia: «A estos oficiales, son entregadas las llaves del reino de los cielos, en virtud de lo cual, tienen poder para retener y remitir pecados; para cerrar aquel reino contra los impenitentes, por la palabra y por las censuras; y para abrirlo á los pecadores arrepentidos, por el ministerio del evangelio, y por la remocion de las censuras, segun exigen las circunstancias.» {c:RWCF30_2|Westminster 30.2}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Sobre la disciplina, la Confesión de Westminster dice: «Las censuras eclesiásticas son necesarias para corregir y hacer volver sobre sus pasos á los hermanos que ofenden; para impedir que otros cometan semejantes ofensas; para reivindicar el honor de Cristo, y la santa profesion del evangelio» {c:RWCF30_3|Westminster 30.3}.",
  },
  scriptureSubtitle:
    "Los pasajes que los Estándares de Westminster citan sobre la Iglesia, su gobierno y el papado, y cómo los leen.",
  scripture: [
    {
      refs: ["Eph.1.10", "Eph.1.22-Eph.1.23"],
      text: "La Confesión de Westminster lo cita para la reunión y la jefatura (Confesión 25.1).",
    },
    {
      refs: ["Col.1.18"],
      text: "La Confesión de Westminster lo cita para Cristo como cabeza (Confesión 25.1 y 25.6).",
    },
    {
      refs: ["Eph.5.23", "Eph.5.27", "Eph.5.32"],
      text: "La Confesión de Westminster lo cita para la iglesia como esposa y cuerpo (Confesión 25.1).",
    },
    {
      refs: ["1Cor.1.2", "1Cor.12.12-1Cor.12.13"],
      text: "La Confesión de Westminster lo cita para la iglesia visible en muchos lugares y un solo cuerpo (Confesión 25.2).",
    },
    {
      refs: ["Eph.4.11-Eph.4.13"],
      text: "La Confesión de Westminster lo cita para el ministerio y la perfección de los santos (Confesión 25.3).",
    },
    {
      refs: ["Isa.59.21", "Matt.28.19-Matt.28.20"],
      text: "La Confesión de Westminster lo cita para el Espíritu, la palabra y la comisión que continúa (Confesión 25.3).",
    },
    {
      refs: ["1Cor.13.12", "Matt.13.24-Matt.13.30", "Matt.13.47"],
      text: "La Confesión de Westminster lo cita para la falibilidad y la mezcla (Confesión 25.5).",
    },
    {
      refs: ["Matt.16.18"],
      text: "La Confesión de Westminster lo cita para la permanencia de la iglesia (Confesión 25.5).",
    },
    {
      refs: ["Eph.1.22"],
      text: "La Confesión de Westminster lo cita para la jefatura de Cristo (Confesión 25.6).",
    },
    {
      refs: ["Matt.23.8-Matt.23.10"],
      text: "La Confesión de Westminster lo cita para el rechazo de otra cabeza (Confesión 25.6).",
    },
    {
      refs: ["2Thess.2.3-2Thess.2.5"],
      text: "La Confesión de Westminster lo cita para la cláusula histórica sobre el Anticristo (Confesión 25.6).",
    },
    {
      refs: ["Isa.9.6-Isa.9.7"],
      text: "La Confesión de Westminster lo cita para el gobierno de Cristo (Confesión 30.1).",
    },
    {
      refs: ["1Tim.5.17", "1Thess.5.12"],
      text: "La Confesión de Westminster lo cita para los oficiales y el gobierno (Confesión 30.1).",
    },
    {
      refs: ["1Cor.12.28", "Ps.2.6-Ps.2.9", "John.18.36"],
      text: "La Confesión de Westminster lo cita para los oficios y el reino de Cristo (Confesión 30.1).",
    },
    {
      refs: ["Matt.16.19", "Matt.18.17-Matt.18.18"],
      text: "La Confesión de Westminster lo cita para las llaves y la disciplina (Confesión 30.2).",
    },
    {
      refs: ["John.20.21-John.20.23", "2Cor.2.6-2Cor.2.8"],
      text: "La Confesión de Westminster lo cita para la remisión y la restauración (Confesión 30.2).",
    },
    {
      refs: ["1Cor.5", "1Tim.5.20"],
      text: "La Confesión de Westminster lo cita para los fines de la disciplina (Confesión 30.3).",
    },
    {
      refs: ["Acts.15.15", "Acts.15.19", "Acts.15.24", "Acts.15.27-Acts.15.31", "Acts.16.4", "Matt.18.17-Matt.18.20"],
      text: "La Confesión de Westminster lo cita para las determinaciones ministeriales (Confesión 31.3, numeración histórica).",
    },
    {
      refs: ["Eph.2.20", "Acts.17.11", "1Cor.2.5", "2Cor.1.24"],
      text: "La Confesión de Westminster lo cita para los concilios falibles como ayuda (Confesión 31.4, numeración histórica).",
    },
  ],
  videos: {
    subtitle: "Creadores reformados explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle:
      "Objeciones a la postura reformada. Abre cada una para leer en profundidad la respuesta de los Estándares de Westminster.",
    videosSubtitle: "Creadores reformados que responden a esta objeción. Los videos se abren en YouTube.",
    order: [],
    items: [],
  },
  life: {
    intro: [
      "Para los Estándares de Westminster, el gobierno de la Iglesia es este: «El Señor Jesus, como Rey y Cabeza de su iglesia, ha establecido en ella un gobierno regido por oficiales eclesiásticos distintos del magistrado civil.» {c:RWCF30_1|Westminster 30.1}.",
      "Y la Confesión prescribe la disciplina: «primero de la amonestacion, y en seguida, de la suspension del culpable del sacramento de la cena del Señor por algun tiempo, y despues de la excomunion de la iglesia, segun la naturaleza del delito de la persona» {c:RWCF30_4|Westminster 30.4}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "El gobierno de la Iglesia",
        text: "La Confesión de Westminster dice: «El Señor Jesus, como Rey y Cabeza de su iglesia, ha establecido en ella un gobierno regido por oficiales eclesiásticos distintos del magistrado civil.».",
        sources: [
          {
            citations: ["RWCF30_1"],
            label: "Westminster 30.1",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Censuras y restauración",
        text: "La Confesión de Westminster prescribe: «primero de la amonestacion, y en seguida, de la suspension del culpable del sacramento de la cena del Señor por algun tiempo, y despues de la excomunion de la iglesia, segun la naturaleza del delito de la persona».",
        sources: [
          {
            citations: ["RWCF30_2"],
            label: "Westminster 30.2",
          },
          {
            citations: ["RWCF30_4"],
            label: "Westminster 30.4",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Concilios, sumisión y límites",
        text: "La Confesión histórica prescribe decisiones sobre controversias, conciencia, culto y gobierno (31.3), las califica con la posibilidad de error (31.4) y limita su asunto propio a lo eclesiástico (31.5).",
        sources: [
          {
            citations: ["RWCF31_3"],
            label: "Westminster 31.3",
          },
          {
            citations: ["RWCF31_4"],
            label: "Westminster 31.4",
          },
          {
            citations: ["RWCF31_5"],
            label: "Westminster 31.5",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Las categorías de autoridad que los propios Estándares de Westminster aplican a sus textos, con su definición en palabras de los Estándares.",
    grades: {
      scripture: {
        label: "Escritura: juez supremo",
        definition:
          "El Espíritu Santo, que habla en las Escrituras, es el Juez supremo por quien toda controversia religiosa tiene que decidirse (Confesión 1.10).",
        source: {
          citations: ["RWCF1_10"],
          label: "Westminster 1.10",
        },
      },
      standards: {
        label: "Estándares de Westminster",
        definition:
          "La Confesión y los Catecismos de Westminster son normas subordinadas a la Escritura: los concilios pueden errar y ayudan a la fe sin constituir su regla (Confesión 31.4); sus determinaciones, si concuerdan con la Escritura, se reciben con reverencia y sumisión (Confesión 31.3).",
        source: {
          citations: ["RWCF31_3_4"],
          label: "Westminster 31.3–4",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
