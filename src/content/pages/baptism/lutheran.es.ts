import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const baptismLutheran = {
  doctrine: "baptism",
  tradition: "lutheran",
  status: "draft",
  title: "La posición luterana",
  lede: "Cómo las confesiones luteranas entienden el bautismo, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan las confesiones luteranas sobre el bautismo, con el lugar que cada texto ocupa en el Libro de Concordia.",
    definition: {
      text: "Para las confesiones luteranas, el bautismo se define así: «Obra el perdón de los pecados, libra de la muerte y del diablo y da la salvación eterna a todos los que lo creen, como dicen las palabras y promesas de Dios».",
      grades: [
        {
          kind: "church",
          grade: "catechism",
          basis: "Catecismo Menor IV (1529)",
        },
      ],
      sources: [
        {
          citations: ["LSCIV_6"],
          label: "Catecismo Menor IV.6",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "el agua y la palabra",
        text: "El Catecismo Menor enseña: «El bautismo no es solamente agua común, sino el agua comprendida en el mandato de Dios y unida a la palabra de Dios».",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo Menor IV (1529)",
          },
        ],
        sources: [
          {
            citations: ["LSCIV_2"],
            label: "Catecismo Menor IV.2",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la gracia y los niños",
        text: "La Confesión de Augsburgo enseña, en su texto latino: «Sobre el bautismo enseñan que es necesario para la salvación, que por el bautismo se ofrece la gracia de Dios y que los niños deben ser bautizados, quienes, ofrecidos a Dios por el bautismo, son recibidos en la gracia de Dios». Y en su texto alemán: «Sobre el bautismo se enseña que es necesario y que por él se ofrece gracia; que también se debe bautizar a los niños, quienes mediante ese bautismo son entregados a Dios y le son agradables».",
        grades: [
          {
            kind: "church",
            grade: "augsburg",
            basis: "art. IX",
          },
        ],
        sources: [
          {
            citations: ["LACIX_1_2"],
            label: "Confesión de Augsburgo IX.1–2",
          },
          {
            citations: ["LACIX"],
            label: "Confesión de Augsburgo IX",
          },
        ],
      },
      {
        id: "QE-3",
        short: "la palabra y la fe",
        text: "El Catecismo Menor enseña: «Ciertamente no lo hace el agua, sino la palabra de Dios que está con el agua y junto a ella, y la fe que confía en esa palabra de Dios en el agua». Y continúa: «Pues sin la palabra de Dios el agua es agua común y no es bautismo; pero con la palabra de Dios es bautismo, es decir, un agua de vida llena de gracia y un baño del nuevo nacimiento en el Espíritu Santo».",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo Menor IV (1529)",
          },
        ],
        sources: [
          {
            citations: ["LSCIV_10"],
            label: "Catecismo Menor IV.10",
          },
        ],
      },
      {
        id: "QE-4",
        short: "la obra de Dios",
        text: "El Catecismo Mayor enseña: «pero el bautismo no es obra nuestra, sino de Dios».",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo Mayor IV",
          },
        ],
        sources: [
          {
            citations: ["LLCIV_35"],
            label: "Catecismo Mayor IV.35",
          },
        ],
      },
      {
        id: "QE-5",
        short: "los niños y la promesa",
        text: "La Apología de la Confesión de Augsburgo enseña: «Pues es completamente cierto que la promesa de salvación pertenece también a los niños pequeños».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Apología IX (1531)",
          },
        ],
        sources: [
          {
            citations: ["LApIX_52"],
            label: "Apología IX.52",
          },
        ],
      },
      {
        id: "QE-6",
        short: "morir y resucitar cada día",
        text: "El Catecismo Menor enseña: «Significa que el viejo Adán en nosotros debe ser ahogado y morir, mediante contrición y arrepentimiento diarios, con todos los pecados y malos deseos; y que, a su vez, salga y resucite cada día un hombre nuevo que viva eternamente ante Dios en justicia y pureza».",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo Menor IV (1529)",
          },
        ],
        sources: [
          {
            citations: ["LSCIV_12"],
            label: "Catecismo Menor IV.12",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Las confesiones luteranas fundan el bautismo en la institución y el mandato de Dios: «El bautismo no es otra cosa que la palabra de Dios en el agua, mandada por su institución» {c:LSAIII_5_1|Esmalcalda III.5.1}.",
      "Y sostienen que la promesa de salvación alcanza también a los niños: «Pues es completamente cierto que la promesa de salvación pertenece también a los niños pequeños» {c:LApIX_52|Apología IX.52}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para las confesiones luteranas, en el bautismo obra Dios y no quien lo administra. El Catecismo Mayor dice: «Pues ser bautizado en el nombre de Dios es ser bautizado por Dios mismo, no por seres humanos» {c:LLCIV_10|Catecismo Mayor IV.10}.",
  },
  scriptureSubtitle: "Los pasajes que las confesiones luteranas citan sobre el bautismo, y cómo los leen.",
  scripture: [
    {
      refs: ["Matt.28.19"],
      text: "El Catecismo Menor funda el bautismo en la institución de Cristo y en el nombre del Padre, del Hijo y del Espíritu Santo (Catecismo Menor IV.3–4).",
    },
    {
      refs: ["Mark.16.16"],
      text: "El Catecismo Menor cita este versículo como la promesa de salvación para quien cree y es bautizado (Catecismo Menor IV.7–8).",
    },
    {
      refs: ["Titus.3.5-Titus.3.7"],
      text: "El Catecismo Menor lo cita para el lavamiento de la regeneración y de la renovación (Catecismo Menor IV.10).",
    },
    {
      refs: ["Rom.6.4"],
      text: "El Catecismo Menor lo cita para la vida nueva que el bautismo significa cada día (Catecismo Menor IV.13–14).",
    },
    {
      refs: ["Matt.28.19"],
      text: "La Apología aplica el mandato de bautizar también a los niños (Apología IX.52).",
    },
    {
      refs: ["Eph.5.26"],
      text: "Los Artículos de Esmalcalda lo citan con la expresión «lavacrum in verbo» (Artículos de Esmalcalda III.5.1).",
    },
    {
      refs: ["Eph.4.5-Eph.4.6"],
      text: "La Confesión de Augsburgo lo cita para la unidad de la fe y del bautismo (art. VII).",
    },
    {
      refs: ["Matt.23.2"],
      text: "La Confesión de Augsburgo lo cita para la eficacia del bautismo aun cuando el ministro es indigno (art. VIII.1–2).",
    },
    {
      refs: ["Mark.16.16"],
      text: "El Catecismo Mayor lo cita para la fe que recibe el tesoro prometido (Catecismo Mayor IV.33–34).",
    },
  ],
  videos: {
    subtitle: "Creadores luteranos explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle:
      "Objeciones a la postura luterana. Abre cada una para leer en profundidad la respuesta de las confesiones luteranas.",
    videosSubtitle: "Creadores luteranos que responden a esta objeción. Los videos se abren en YouTube.",
    order: [],
    items: [],
  },
  life: {
    intro: [
      "Para las confesiones luteranas, el padre de familia enseña el bautismo a los de su casa: el Catecismo Menor dice que debe hacerlo «con sencillez» {c:LSCIV|Catecismo Menor IV}.",
      "El bautismo no se repite: «Por eso el bautismo permanece para siempre» {c:LLCIV_77|Catecismo Mayor IV.77}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "El agua con la palabra",
        text: "El bautismo es agua unida al mandato y a la palabra de Dios.",
        sources: [
          {
            citations: ["LSCIV_2"],
            label: "Catecismo Menor IV.2",
          },
        ],
      },
      {
        id: "CV-2",
        label: "El nombre",
        text: "Se bautiza en el nombre del Padre, del Hijo y del Espíritu Santo.",
        sources: [
          {
            citations: ["LSCIV_4"],
            label: "Catecismo Menor IV.4",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Los niños",
        text: "Se bautiza a los niños: la gracia y la promesa no se les niegan por la edad.",
        sources: [
          {
            citations: ["LACIX"],
            label: "Confesión de Augsburgo IX",
          },
          {
            citations: ["LApIX_52"],
            label: "Apología IX.52",
          },
        ],
      },
      {
        id: "CV-4",
        label: "La fe y la oración",
        text: "Se lleva a los niños con la esperanza y la oración de que Dios les dé fe.",
        sources: [
          {
            citations: ["LLCIV_57"],
            label: "Catecismo Mayor IV.57",
          },
        ],
      },
      {
        id: "CV-5",
        label: "La vida diaria",
        text: "La contrición, el arrepentimiento y la vida nueva se viven cada día.",
        sources: [
          {
            citations: ["LSCIV_12"],
            label: "Catecismo Menor IV.12",
          },
        ],
      },
      {
        id: "CV-6",
        label: "Volver al bautismo",
        text: "Tras el pecado se vuelve al bautismo, no se busca otro lavado.",
        sources: [
          {
            citations: ["LLCIV_77_79"],
            label: "Catecismo Mayor IV.77–79",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Las categorías de autoridad que las propias confesiones luteranas usan para sus textos, con su definición en palabras de las confesiones.",
    grades: {
      scripture: {
        label: "Escritura: única regla y norma",
        definition:
          "«la única regla y norma según la cual deben ser estimados y juzgados todos los dogmas y todos los maestros» son «los escritos proféticos y apostólicos del Antiguo y del Nuevo Testamento» (unicam regulam et normam); «la sola Sagrada Escritura es reconocida como juez, norma y regla», «piedra de toque»",
        source: {
          citations: ["LFCEpRN_1_y_7"],
          label: "Epítome RN 1 y 7",
        },
      },
      confession: {
        label: "Confesión (símbolo)",
        definition:
          "Los demás escritos «no son jueces, como la Sagrada Escritura, sino solo testimonio y declaración de la fe», de cómo se entendió la Escritura en los artículos discutidos; y la doctrina común no ha de fundarse en escritos privados, sino en libros «compuestos, aprobados y recibidos en nombre de las iglesias»",
        source: {
          citations: ["LFCEpRN_8"],
          label: "Epítome RN 8",
        },
      },
      augsburg: {
        label: "Confesión de Augsburgo: «el símbolo de nuestro tiempo»",
        definition:
          "Aceptada «no porque la compusieran nuestros teólogos, sino porque ha sido tomada de la Palabra de Dios»",
        source: {
          citations: ["LFCEpRN_4"],
          label: "Epítome RN 4",
        },
      },
      catechism: {
        label: "Catecismos: «Biblia de los laicos»",
        definition:
          "Los catecismos Menor y Mayor, «en los que está comprendido todo lo que se trata más extensamente en la Sagrada Escritura y es necesario que un cristiano sepa para su salvación»",
        source: {
          citations: ["LFCEpRN_5"],
          label: "Epítome RN 5",
        },
      },
      thesis: {
        label: "Tesis afirmativa / antítesis (condena)",
        definition:
          "La Fórmula de Concordia confiesa «Creemos, enseñamos y confesamos…» y rechaza «Rechazamos y condenamos…»; sus antítesis son el rechazo de la propia tradición, en sus palabras",
        source: {
          citations: ["LFCEpVII"],
          label: "Epítome VII",
        },
      },
      witnesses: {
        label: "Testigos",
        definition:
          "Los Padres y los maestros posteriores «no deben ser recibidos de otro modo ni más allá que como testigos»",
        source: {
          citations: ["LFCEpRN_2"],
          label: "Epítome RN 2",
        },
      },
      adiaphora: {
        label: "Adiáforos (ritos)",
        definition:
          "Ceremonias «ni mandadas ni prohibidas en la Palabra de Dios», que «no son en sí mismas culto divino, ni siquiera parte de él»",
        source: {
          citations: ["LFCEpX_3"],
          label: "Epítome X.3",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
