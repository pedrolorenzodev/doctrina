import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const papacyLutheran = {
  doctrine: "papacy",
  tradition: "lutheran",
  status: "draft",
  title: "La posición luterana",
  lede: "Cómo las confesiones luteranas entienden el ministerio y el papado, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan las confesiones luteranas sobre el ministerio y el papado, con el lugar que cada texto ocupa en el Libro de Concordia.",
    definition: {
      text: "El Tratado sobre el poder y la primacía del papa confiesa: «El evangelio atribuye a quienes presiden las iglesias el mandato de enseñar el evangelio, perdonar los pecados y administrar los sacramentos».",
      grades: [
        {
          kind: "church",
          grade: "confession",
          basis: "Tratado 60 (1537)",
        },
      ],
      sources: [
        {
          citations: ["LTr60"],
          label: "Tratado 60",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "el ministerio común",
        text: "El Tratado sobre el poder y la primacía del papa enseña: «que esta potestad es común por derecho divino a todos los que presiden las iglesias, ya se los llame pastores, presbíteros u obispos».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Tratado 61 (1537)",
          },
        ],
        sources: [
          {
            citations: ["LTr61"],
            label: "Tratado 61",
          },
        ],
      },
      {
        id: "QE-2",
        short: "el oficio del Evangelio",
        text: "La Confesión de Augsburgo llama poder de las llaves, o poder de los obispos según el Evangelio, al mandato de Dios de predicar, perdonar y retener los pecados y administrar los sacramentos (art. XXVIII.5).",
        grades: [
          {
            kind: "church",
            grade: "augsburg",
            basis: "art. XXVIII",
          },
        ],
        sources: [
          {
            citations: ["LACXXVIII_5"],
            label: "Confesión de Augsburgo XXVIII.5",
          },
        ],
      },
      {
        id: "QE-3",
        short: "las llaves de la Iglesia",
        text: "El Tratado enseña: «Por tanto, atribuye las llaves a la iglesia de manera principal e inmediata, así como por esa misma razón la iglesia tiene de manera principal el derecho de llamar».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Tratado 24 (1537)",
          },
        ],
        sources: [
          {
            citations: ["LTr24"],
            label: "Tratado 24",
          },
        ],
      },
      {
        id: "QE-4",
        short: "la superioridad del papa",
        text: "El Tratado sostiene que el obispo de Roma no es superior por derecho divino a los demás obispos y pastores (Tratado 7). Los Artículos de Esmalcalda niegan que el papa sea la cabeza de toda la Iglesia por derecho divino, atribuyen esa jefatura a Jesucristo y lo describen como obispo y pastor de Roma y de quienes se le unen (II.4.1).",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Tratado 7 y Artículos de Esmalcalda II.4.1",
          },
        ],
        sources: [
          {
            citations: ["LTr7"],
            label: "Tratado 7",
          },
          {
            citations: ["LSAII_4_1"],
            label: "Esmalcalda II.4.1",
          },
        ],
      },
      {
        id: "QE-5",
        short: "la designación de Anticristo",
        text: "Los Artículos de Esmalcalda, en su formulación histórica, afirman: «que el papa es el verdadero Anticristo o adversario de Cristo, que se ha puesto y elevado por encima y en contra de Cristo, porque pretende no dejar que los cristianos se salven sin su poder, que sin embargo nada es, ni está ordenado ni mandado por Dios».",
        status: ["STSA~pl"],
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Artículos de Esmalcalda II.4.10",
          },
        ],
        sources: [
          {
            citations: ["LSAII_4_10"],
            label: "Esmalcalda II.4.10",
          },
        ],
      },
      {
        id: "QE-6",
        short: "los arreglos humanos",
        text: "Los Artículos de Esmalcalda consideran como hipótesis una cabeza elegida por autoridad humana, por la paz y la unidad, con las limitaciones y críticas que ellos mismos señalan (II.4.7–9). La suscripción individual de Melanchthon da su propia formulación condicionada, de derecho humano; ninguna de las dos se toma como la enseñanza de toda la colección.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Artículos de Esmalcalda II.4.7–9",
          },
        ],
        sources: [
          {
            citations: ["LSAII_4_7_9"],
            label: "Esmalcalda II.4.7–9",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para el Tratado, Cristo envió por igual a los apóstoles: «Cristo envía por igual a los apóstoles, sin distinción, cuando dice: Como me envió el Padre, así también yo os envío» {c:LTr9|Tratado 9}.",
      "Y en las palabras dirigidas a Pedro, el Tratado ve a Pedro representando a la asamblea de los apóstoles: «En todos esos dichos Pedro representa a toda la asamblea de los apóstoles» {c:LTr23|Tratado 23}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Sobre Mateo 16, el Tratado dice: «ciertamente la iglesia no está edificada sobre la autoridad de un hombre, sino sobre el ministerio de aquella confesión que Pedro había hecho, en la cual proclama que Jesús es el Cristo, el Hijo de Dios» {c:LTr25|Tratado 25}.",
  },
  scriptureSubtitle:
    "Los pasajes que las confesiones luteranas citan sobre el ministerio y el papado, y cómo los leen.",
  scripture: [
    {
      refs: ["Luke.22.25"],
      text: "El Tratado lo cita para contraponer el servicio común al dominio entre los apóstoles (Tratado 8).",
    },
    {
      refs: ["Matt.18.2"],
      text: "El Tratado lo cita en la disputa sobre quién es el mayor, con el niño como ejemplo (Tratado 8).",
    },
    {
      refs: ["John.20.21"],
      text: "El Tratado lo cita para el envío igual de los apóstoles (Tratado 9).",
    },
    {
      refs: ["Gal.2.7"],
      text: "El Tratado lo cita para el llamamiento de Pablo y su relación con Pedro (Tratado 10).",
    },
    {
      refs: ["1Cor.3.6"],
      text: "El Tratado lo cita para los ministros y la iglesia (Tratado 11).",
    },
    {
      refs: ["Matt.16.18-Matt.16.19"],
      text: "El Tratado lo cita para Pedro, la roca, las llaves y la confesión (Tratado 22–25).",
    },
    {
      refs: ["John.21.15"],
      text: "El Tratado nombra «Apacienta mis ovejas» entre los textos disputados (Tratado 22).",
    },
    {
      refs: ["Matt.18.18"],
      text: "El Tratado lo cita para el encargo en plural junto a la palabra dirigida a uno (Tratado 23).",
    },
    {
      refs: ["John.20.23"],
      text: "El Tratado lo cita para las llaves dadas a todos los apóstoles (Tratado 23).",
    },
    {
      refs: ["Matt.18.19"],
      text: "El Tratado lo cita para las llaves que pertenecen a la iglesia (Tratado 24).",
    },
    {
      refs: ["2Thess.2.4"],
      text: "Los Artículos de Esmalcalda lo citan en la designación histórica de Anticristo (II.4.10–11).",
    },
    {
      refs: ["Titus.1.5"],
      text: "El Tratado lo cita, por medio de Jerónimo, para obispos y presbíteros (Tratado 62).",
    },
    {
      refs: ["John.20.21-John.20.23", "Mark.16.15"],
      text: "La Confesión de Augsburgo los cita para el ministerio del Evangelio y las llaves (art. XXVIII.5–7).",
    },
    {
      refs: ["Rom.1.16"],
      text: "La Confesión de Augsburgo lo cita para el Evangelio como poder de Dios para salvación (art. XXVIII.9).",
    },
    {
      refs: ["John.18.36", "Luke.12.14"],
      text: "La Confesión de Augsburgo los cita para distinguir el oficio de la Iglesia del oficio civil (art. XXVIII.13–15).",
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
      "Para las confesiones luteranas, el poder de la Iglesia se ejerce enseñando y predicando la Palabra y administrando los sacramentos, según el llamamiento (Confesión de Augsburgo XXVIII.8).",
      "El Tratado añade la jurisdicción: «además, jurisdicción, es decir, el mandato de excomulgar a quienes tienen delitos conocidos y de absolver nuevamente a quienes se arrepienten» {c:LTr60|Tratado 60}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Enseñar y administrar los sacramentos",
        text: "El poder de la Iglesia se ejerce enseñando o predicando la Palabra y administrando los sacramentos, según el llamamiento.",
        sources: [
          {
            citations: ["LACXXVIII_8"],
            label: "Confesión de Augsburgo XXVIII.8",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Disciplina y restauración",
        text: "El Tratado describe la jurisdicción así: «además, jurisdicción, es decir, el mandato de excomulgar a quienes tienen delitos conocidos y de absolver nuevamente a quienes se arrepienten».",
        sources: [
          {
            citations: ["LTr60"],
            label: "Tratado 60",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Gobierno e igualdad de oficio",
        text: "El Tratado atribuye el poder a quienes presiden las iglesias, se los llame pastores, presbíteros u obispos.",
        sources: [
          {
            citations: ["LTr61"],
            label: "Tratado 61",
          },
        ],
      },
      {
        id: "CV-4",
        label: "El juicio de la Iglesia",
        text: "El Tratado llama a los juicios sinodales juicios de la Iglesia y no de los pontífices, y habla de juzgar y decidir desde la Palabra de Dios.",
        sources: [
          {
            citations: ["LTr56"],
            label: "Tratado 56",
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
