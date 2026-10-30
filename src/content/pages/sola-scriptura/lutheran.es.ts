import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const solaScripturaLutheran = {
  doctrine: "sola-scriptura",
  tradition: "lutheran",
  status: "draft",
  title: "La posición luterana",
  lede: "Cómo las confesiones luteranas entienden la Escritura como única regla y norma, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan las confesiones luteranas sobre la Escritura como regla y norma, con el lugar que cada texto ocupa en el Libro de Concordia.",
    definition: {
      text: "La Fórmula de Concordia confiesa: «Creemos, enseñamos y confesamos que la única regla y norma según la cual deben juzgarse y evaluarse todas las doctrinas y todos los maestros son solamente los escritos proféticos y apostólicos del Antiguo y del Nuevo Testamento».",
      grades: [
        {
          kind: "church",
          grade: "scripture",
          basis: "Epítome, Regla y norma 1",
        },
      ],
      sources: [
        {
          citations: ["LFCEpRN_1"],
          label: "Epítome RN 1",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "el juez y la regla",
        text: "La Fórmula de Concordia llama a la Escritura «el único juez, regla y norma».",
        grades: [
          {
            kind: "church",
            grade: "scripture",
            basis: "Epítome, Regla y norma 1 y 7",
          },
        ],
        sources: [
          {
            citations: ["LFCEpRN_7"],
            label: "Epítome RN 7",
          },
        ],
      },
      {
        id: "QE-2",
        short: "los otros escritos",
        text: "La Fórmula de Concordia enseña: «Los demás escritos de maestros antiguos o nuevos, cualquiera sea su nombre, no deben equipararse con la Sagrada Escritura, sino quedar todos juntos sujetos a ella».",
        grades: [
          {
            kind: "church",
            grade: "witnesses",
            basis: "Epítome, Regla y norma 2",
          },
        ],
        sources: [
          {
            citations: ["LFCEpRN_2"],
            label: "Epítome RN 2",
          },
        ],
      },
      {
        id: "QE-3",
        short: "las confesiones como testimonio",
        text: "La Fórmula de Concordia enseña: «Los demás símbolos y escritos citados no son jueces como la Sagrada Escritura, sino solamente testimonio y explicación de la fe».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Epítome, Regla y norma 8",
          },
        ],
        sources: [
          {
            citations: ["LFCEpRN_8"],
            label: "Epítome RN 8",
          },
        ],
      },
      {
        id: "QE-4",
        short: "los símbolos y catecismos",
        text: "La Fórmula de Concordia recibe, junto a la regla de la Escritura, los símbolos Apostólico, Niceno y Atanasiano (Regla y norma 3); la Confesión de Augsburgo inalterada, su Apología y los Artículos de Esmalcalda (Regla y norma 4); y los Catecismos Menor y Mayor, que llama la Biblia de los laicos (Regla y norma 5).",
        grades: [
          {
            kind: "church",
            grade: "catechism",
            basis: "Epítome, Regla y norma 3 a 5",
          },
        ],
        sources: [
          {
            citations: ["LFCEpRN_3"],
            label: "Epítome RN 3",
          },
          {
            citations: ["LFCEpRN_4"],
            label: "Epítome RN 4",
          },
          {
            citations: ["LFCEpRN_5"],
            label: "Epítome RN 5",
          },
        ],
      },
      {
        id: "QE-5",
        short: "quién establece los artículos",
        text: "Los Artículos de Esmalcalda enseñan: «La palabra de Dios debe establecer los artículos de fe, y nadie más, ni siquiera un ángel».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Artículos de Esmalcalda II.2.15",
          },
        ],
        sources: [
          {
            citations: ["LSAII_2_15"],
            label: "Esmalcalda II.2.15",
          },
        ],
      },
      {
        id: "QE-6",
        short: "las explicaciones útiles",
        text: "La Declaración sólida de la Fórmula de Concordia no rechaza «otros libros buenos, útiles y puros, exposiciones de la Sagrada Escritura, refutaciones de errores y explicaciones de los artículos doctrinales».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Declaración sólida, Regla y norma 10",
          },
        ],
        sources: [
          {
            citations: ["LFCSDRN_10"],
            label: "Declaración sólida RN 10",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para la Fórmula de Concordia, la Escritura es «la única piedra de toque» {c:LFCEpRN_7|Epítome RN 7}.",
      "Y explica la autoridad de su forma doctrinal común así: «porque ha sido tomada de la palabra de Dios» {c:LFCSDRN_10|Declaración sólida RN 10}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para las confesiones luteranas, los símbolos y los escritos no son otro juez. La Fórmula de Concordia lo dice así: «Los demás símbolos y escritos citados no son jueces como la Sagrada Escritura, sino solamente testimonio y explicación de la fe» {c:LFCEpRN_8|Epítome RN 8}.",
  },
  scriptureSubtitle: "Los pasajes que las confesiones luteranas citan sobre la Escritura como regla, y cómo los leen.",
  scripture: [
    {
      refs: ["Ps.119.105"],
      text: "La Fórmula de Concordia une su afirmación de la regla con este versículo, la Escritura como lámpara que guía (Epítome, Regla y norma 1).",
    },
    {
      refs: ["Gal.1.8"],
      text: "La Fórmula de Concordia lo une a la regla con la advertencia sobre un anuncio distinto, aun de un ángel (Epítome, Regla y norma 1).",
    },
    {
      refs: ["1Tim.3"],
      text: "La Declaración sólida lo cita para conservar la doctrina pura y refutar a quienes la contradicen (Declaración sólida, Regla y norma 14).",
    },
    {
      refs: ["Titus.1.9"],
      text: "La Declaración sólida lo cita para el mismo oficio de enseñar (Declaración sólida, Regla y norma 14).",
    },
    {
      refs: ["John.10.12", "Jer.15.19"],
      text: "La Declaración sólida los cita para el cuidado del rebaño y para distinguir lo precioso de lo vil (Declaración sólida, Regla y norma 14).",
    },
    {
      refs: ["John.20.21-John.20.23"],
      text: "La Confesión de Augsburgo lo cita para el ministerio del Evangelio y las llaves (art. XXVIII.5–6).",
    },
    {
      refs: ["Mark.16.15"],
      text: "La Confesión de Augsburgo lo cita para la proclamación del Evangelio (art. XXVIII.7).",
    },
    {
      refs: ["Rom.1.16"],
      text: "La Confesión de Augsburgo lo cita para el Evangelio como poder de Dios para salvación (art. XXVIII.9).",
    },
    {
      refs: ["John.18.36", "Luke.12.14"],
      text: "La Confesión de Augsburgo los cita para distinguir el oficio de la Iglesia del oficio civil (art. XXVIII.13–15).",
    },
    {
      refs: ["Phil.3.20", "2Cor.10.4"],
      text: "La Confesión de Augsburgo los cita para la ciudadanía celestial y las armas espirituales (art. XXVIII.16–17).",
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
      "Para las confesiones luteranas, la regla de la Escritura se aplica a toda doctrina y a todo maestro (Epítome, Regla y norma 1).",
      "La Fórmula de Concordia conserva también los libros útiles que explican la Escritura, siempre bajo esa regla (Declaración sólida, Regla y norma 10).",
    ],
    items: [
      {
        id: "CV-1",
        label: "Examinar la enseñanza",
        text: "La regla se aplica a las doctrinas y a los maestros, y la Fórmula conserva las explicaciones útiles bajo la condición que ella establece.",
        sources: [
          {
            citations: ["LFCEpRN_1"],
            label: "Epítome RN 1",
          },
          {
            citations: ["LFCEpRN_7"],
            label: "Epítome RN 7",
          },
          {
            citations: ["LFCSDRN_10"],
            label: "Declaración sólida RN 10",
          },
        ],
      },
      {
        id: "CV-2",
        label: "La Palabra y los sacramentos",
        text: "La Confesión de Augsburgo describe así el poder de la Iglesia: «Esta potestad se ejerce solamente enseñando o predicando la Palabra y administrando los sacramentos, a muchos o a cada uno, según el llamamiento».",
        sources: [
          {
            citations: ["LACXXVIII_8"],
            label: "Confesión de Augsburgo XXVIII.8",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Iglesias, escuelas y casas",
        text: "La Fórmula de Concordia informa que los catecismos fueron «usados públicamente en iglesias, escuelas y casas».",
        sources: [
          {
            citations: ["LFCSDRN_8"],
            label: "Declaración sólida RN 8",
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
