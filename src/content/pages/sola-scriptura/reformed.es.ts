import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const solaScripturaReformed = {
  doctrine: "sola-scriptura",
  tradition: "reformed",
  status: "draft",
  title: "La posición reformada",
  lede: "Cómo los Estándares de Westminster entienden la Escritura como regla, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan los Estándares de Westminster sobre la Escritura como regla, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "La Confesión de Westminster dice, al enumerar los libros de ambos Testamentos: «Todos estos fueron dados por la inspiracion de Dios para ser la regla de la fé y de la práctica.».",
      grades: [
        {
          kind: "church",
          grade: "standards",
          basis: "Confesión de Westminster 1.2",
        },
      ],
      sources: [
        {
          citations: ["RWCF1_2"],
          label: "Westminster 1.2",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la autoridad divina",
        text: "La Confesión de Westminster enseña: «La autoridad de las Sagradas Escrituras, la que hace que deben creerse y obedecerse, no depende del testimonio de ningun hombre ó iglesia cualquiera que fuera, sino enteramente del de Dios, quien es su autor; porque El es la misma verdad; por esto deben ser recibidas porque son la palabra de Dios.».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 1.4",
          },
        ],
        sources: [
          {
            citations: ["RWCF1_4"],
            label: "Westminster 1.4",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la suficiencia",
        text: "La Confesión de Westminster enseña: «Todo el consejo de Dios, tocante á todas las cosas necesarias para su propia gloria y para la salvacion, fé y vida del hombre; es ó expresamente expuesto en las Escrituras ó se puede deducir de ellas por buena y necesaria consecuencia; y á esta revelacion de su voluntad, nada se puede, ni se debe, añadir nunca, ni por nuevas revelaciones del Espíritu, ni por las tradiciones de los hombres.». Y conserva la iluminación interna del Espíritu: «la iluminacion interna del Espíritu de Dios, es necesaria á fin de que se entiendan de una manera salvadora, las cosas reveladas en la palabra». Y las circunstancias del culto y del gobierno: «hay algunas circunstancias tocante al culto de Dios y al gobierno de la iglesia, comunes á las acciones y sociedades humanas, que deben arreglarse conforme á la luz de la naturaleza y la prudencia cristiana, guardándose siempre las reglas generales de la palabra».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 1.6",
          },
        ],
        sources: [
          {
            citations: ["RWCF1_6"],
            label: "Westminster 1.6",
          },
        ],
      },
      {
        id: "QE-3",
        short: "la claridad",
        text: "La Confesión de Westminster enseña: «Las cosas reveladas en las Escrituras, considerándolas en su naturaleza, no son todas igualmente claras, ni se entienden igualmente por todos». Y añade su cualificación afirmativa: «las cosas que necesariamente tienen que saberse, creerse y guardarse para conseguir la salvacion, son propuestas y declaradas en uno ú otro lugar de las Escrituras, tan claramente, que no solo los eruditos, sino aun los que no lo son, pueden alcanzar un conocimiento suficiente de ellas, por el debido uso de los medios ordinarios».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 1.7",
          },
        ],
        sources: [
          {
            citations: ["RWCF1_7"],
            label: "Westminster 1.7",
          },
        ],
      },
      {
        id: "QE-4",
        short: "la Escritura que se interpreta a sí misma",
        text: "La Confesión de Westminster enseña: «La misma Escritura es la regla infalible para interpretarse á sí misma; y por tanto, cuando hay una cuestion respecto del sentido verdadero y pleno de cualquier pasaje; cuyo significado no es multíplice, sino uno solo, se puede buscar y establecer segun otros textos que hablan con mas claridad.».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 1.9",
          },
        ],
        sources: [
          {
            citations: ["RWCF1_9"],
            label: "Westminster 1.9",
          },
        ],
      },
      {
        id: "QE-5",
        short: "el juez supremo",
        text: "La Confesión de Westminster enseña: «El Espíritu Santo, que habla en las Escrituras, el Juez Supremo, por quien toda controversia religiosa tiene que decidirse y por quien tambien todos los decretos de los concilios, las opiniones de los escritores antiguos, y las doctrinas de los hombres y de los espíritus particulares tienen que determinarse, y en su fallo ó sentencia, podemos descansar confiadamente.».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 1.10",
          },
        ],
        sources: [
          {
            citations: ["RWCF1_10"],
            label: "Westminster 1.10",
          },
        ],
      },
      {
        id: "QE-6",
        short: "el canon y las lenguas originales",
        text: "La Confesión de Westminster enumera los libros del Antiguo y del Nuevo Testamento (1.2) y llama a los libros comúnmente titulados Apócrifos escritos humanos y no parte del canon (1.3). Y dice: «la iglesia tiene que apelar finalmente á los originales en esos idiomas en toda controversia».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 1.2, 1.3 y 1.8",
          },
        ],
        sources: [
          {
            citations: ["RWCF1_2"],
            label: "Westminster 1.2",
          },
          {
            citations: ["RWCF1_3"],
            label: "Westminster 1.3",
          },
          {
            citations: ["RWCF1_8"],
            label: "Westminster 1.8",
          },
        ],
      },
      {
        id: "QE-7",
        short: "la traducción y el acceso",
        text: "La Confesión de Westminster enseña: «la Biblia debe traducirse en la lengua vulgar de todas las naciones á que pueda venir».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 1.8",
          },
        ],
        sources: [
          {
            citations: ["RWCF1_8"],
            label: "Westminster 1.8",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para la Confesión de Westminster, Dios quiso ponerlo todo por escrito: «para mejor conservar y propagar la verdad, y para el mejor consuelo y establecimiento de la iglesia contra la corrupcion de la carne, la malicia de Satanás y del mundo, le plugo ponerlo todo en escrito» {c:RWCF1_1|Westminster 1.1}.",
      "Y reconoce el testimonio de la iglesia, pero la persuasión viene de otra parte: «El testimonio de la iglesia puede mover é inducirnos á guardar para las Sagradas Escrituras una estimacion alta y reverencial» {c:RWCF1_5|Westminster 1.5}. La Confesión la ubica en «la obra interior del Espíritu Santo, quien dá testimonio juntamente con la palabra divina, y por ella á nuestros corazones» {c:RWCF1_5|Westminster 1.5}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para el Catecismo Menor de Westminster, la Escritura es la única regla: «La palabra de Dios que se contiene en las Escrituras del Antiguo y del Nuevo Testamento, es la única regla que ha dado Dios para enseñarnos como hemos de glorificarle y gozar de El.» {c:RWSC2|Catecismo Menor de Westminster 2}.",
  },
  scriptureSubtitle:
    "Los pasajes que los Estándares de Westminster citan sobre la Escritura como regla, y cómo los leen.",
  scripture: [
    {
      refs: ["Rom.1.19-Rom.1.20", "Rom.1.32", "Rom.2.1", "Rom.2.14-Rom.2.15"],
      text: "La Confesión de Westminster lo cita para los límites de la revelación natural (Confesión 1.1).",
    },
    {
      refs: ["1Cor.1.21", "1Cor.2.13-1Cor.2.14"],
      text: "La Confesión de Westminster lo cita para el conocimiento salvador (Confesión 1.1).",
    },
    {
      refs: ["Heb.1.1-Heb.1.2"],
      text: "La Confesión de Westminster lo cita para los modos antiguos de hablar Dios y el Hijo (Confesión 1.1).",
    },
    {
      refs: ["Luke.1.3-Luke.1.4", "Rom.15.4"],
      text: "La Confesión de Westminster lo cita para la escritura, la certeza y el consuelo (Confesión 1.1).",
    },
    {
      refs: ["Isa.8.20", "Rev.22.18"],
      text: "La Confesión de Westminster lo cita para el testimonio escrito (Confesión 1.1).",
    },
    {
      refs: ["2Tim.3.15", "2Pet.1.19"],
      text: "La Confesión de Westminster lo cita para la necesidad de la Escritura (Confesión 1.1).",
    },
    {
      refs: ["Eph.2.20", "Rev.22.18-Rev.22.19", "2Tim.3.16"],
      text: "La Confesión de Westminster lo cita para la regla escrita inspirada (Confesión 1.2).",
    },
    {
      refs: ["Luke.24.27", "Luke.24.44", "2Pet.1.21"],
      text: "La Confesión de Westminster lo cita para el límite del canon (Confesión 1.3).",
    },
    {
      refs: ["2Tim.3.16", "1John.5.9", "1Thess.2.13"],
      text: "La Confesión de Westminster lo cita para la autoridad divina (Confesión 1.4).",
    },
    {
      refs: ["1Tim.3.15"],
      text: "La Confesión de Westminster lo cita para el testimonio de la iglesia (Confesión 1.5).",
    },
    {
      refs: ["1John.2.20", "1John.2.27", "John.16.13-John.16.14", "1Cor.2.10-1Cor.2.11"],
      text: "La Confesión de Westminster lo cita para el testimonio del Espíritu (Confesión 1.5).",
    },
    {
      refs: ["2Tim.3.16-2Tim.3.17", "Gal.1.8", "2Thess.2.2"],
      text: "La Confesión de Westminster lo cita para la suficiencia y las adiciones (Confesión 1.6).",
    },
    {
      refs: ["John.6.45", "1Cor.2.9-1Cor.2.10", "1Cor.2.12"],
      text: "La Confesión de Westminster lo cita para la iluminación salvadora (Confesión 1.6).",
    },
    {
      refs: ["1Cor.11.13-1Cor.11.14", "1Cor.14.26", "1Cor.14.40"],
      text: "La Confesión de Westminster lo cita para las circunstancias y el orden (Confesión 1.6).",
    },
    {
      refs: ["2Pet.3.15-2Pet.3.16", "Ps.119.105", "Ps.119.130"],
      text: "La Confesión de Westminster lo cita para la dificultad y la claridad (Confesión 1.7).",
    },
    {
      refs: ["Ps.19.7-Ps.19.8", "Ps.19.11"],
      text: "La Confesión de Westminster lo cita para la sabiduría y el entendimiento (Confesión 1.7).",
    },
    {
      refs: ["Matt.5.18"],
      text: "La Confesión de Westminster lo cita para el texto original (Confesión 1.8).",
    },
    {
      refs: ["Isa.8.20", "Acts.15.15", "John.5.46"],
      text: "La Confesión de Westminster lo cita para la apelación en las controversias (Confesión 1.8).",
    },
    {
      refs: ["John.5.39"],
      text: "La Confesión de Westminster lo cita para leer y escudriñar (Confesión 1.8).",
    },
    {
      refs: ["1Cor.14.6", "1Cor.14.9", "1Cor.14.11-1Cor.14.12", "1Cor.14.24", "1Cor.14.27-1Cor.14.28"],
      text: "La Confesión de Westminster lo cita para la lengua inteligible (Confesión 1.8).",
    },
    {
      refs: ["Col.3.16", "Rom.15.4"],
      text: "La Confesión de Westminster lo cita para el culto y la esperanza (Confesión 1.8).",
    },
    {
      refs: ["Acts.15.15", "John.5.46"],
      text: "La Confesión de Westminster lo cita para la Escritura que interpreta la Escritura (Confesión 1.9).",
    },
    {
      refs: ["Matt.22.29", "Matt.22.31", "Eph.2.20"],
      text: "La Confesión de Westminster lo cita para el juez supremo (Confesión 1.10).",
    },
    {
      refs: ["Acts.28.25"],
      text: "La Confesión de Westminster lo cita para el Espíritu que habla por la Escritura (Confesión 1.10).",
    },
    {
      refs: ["Eph.2.20", "Acts.17.11", "1Cor.2.5", "2Cor.1.24"],
      text: "La Confesión de Westminster lo cita para los concilios como ayuda (Confesión 31.4, numeración histórica).",
    },
    {
      refs: ["Acts.17.11"],
      text: "El Catecismo Mayor lo cita para la lectura diligente (Catecismo Mayor 157).",
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
      "Para los Estándares de Westminster, las Escrituras se leen «con deseo de conocer, creer y obedecer la voluntad de Dios revelada en ellas» {c:RWLC157|Catecismo Mayor de Westminster 157}.",
      "La palabra de Dios se predica solo por quienes están dotados y llamados a ese oficio: «La palabra de Dios debe ser predicada solamente por quienes están suficientemente dotados y también debidamente aprobados y llamados a ese oficio» {c:RWLC158|Catecismo Mayor de Westminster 158}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Leer la Escritura",
        text: "El pueblo tiene derecho y parte en las Escrituras y debe leerlas y escudriñarlas con temor de Dios (Confesión 1.8); y por sí mismos y con sus familias; para este fin, las Sagradas Escrituras han de traducirse del original a las lenguas comunes (Catecismo Mayor 156).",
        sources: [
          {
            citations: ["RWCF1_8"],
            label: "Westminster 1.8",
          },
          {
            citations: ["RWLC156"],
            label: "Catecismo Mayor de Westminster 156",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Cómo leerla",
        text: "El Catecismo Mayor dice: «Las Sagradas Escrituras deben leerse con alta y reverente estima de ellas».",
        sources: [
          {
            citations: ["RWLC157"],
            label: "Catecismo Mayor de Westminster 157",
          },
        ],
      },
      {
        id: "CV-3",
        label: "La predicación",
        text: "El Catecismo Mayor dice: «La palabra de Dios debe ser predicada solamente por quienes están suficientemente dotados y también debidamente aprobados y llamados a ese oficio».",
        sources: [
          {
            citations: ["RWLC158"],
            label: "Catecismo Mayor de Westminster 158",
          },
        ],
      },
      {
        id: "CV-4",
        label: "Oír y recibir",
        text: "El Catecismo Mayor prescribe oír con diligencia, preparación y oración, examinar lo oído por la Escritura, recibirlo con fe y amor, meditarlo y dar fruto en la vida.",
        sources: [
          {
            citations: ["RWLC160"],
            label: "Catecismo Mayor de Westminster 160",
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
          "El Espíritu Santo, que habla en las Escrituras, es el Juez supremo por quien toda controversia religiosa tiene que decidirse (Confesión 1.10); la Escritura es la única regla (Catecismo Menor 2).",
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
