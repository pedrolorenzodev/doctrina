import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const eucharistBaptist = {
  doctrine: "eucharist",
  tradition: "baptist",
  status: "draft",
  title: "La posición bautista",
  lede: "Cómo la línea de las convenciones bautistas entiende la Cena del Señor, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan la Confesión de New Hampshire y Fe y Mensaje Bautistas sobre la Cena del Señor, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "Según Fe y Mensaje Bautistas (art. VII), los miembros de la iglesia participan del pan y del fruto de la vid para recordar la muerte del Redentor y anticipar su segunda venida. La misma sección presenta el bautismo como requisito previo a la Cena. Es la formulación de este documento de la convención, sin atribuirla a todas las familias bautistas.",
      grades: [
        {
          kind: "church",
          grade: "confession",
          basis: "Fe y Mensaje Bautistas (2000), art. VII",
        },
      ],
      sources: [
        {
          citations: ["BBFMVII"],
          label: "Fe y Mensaje VII",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "el acto de obediencia",
        text: "Fe y Mensaje Bautistas llama a la Cena un «acto simbólico de obediencia», en el que los miembros de la iglesia participan del pan y del fruto de la vid para recordar la muerte del Redentor y anticipar su segunda venida.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Fe y Mensaje Bautistas (2000), art. VII",
          },
        ],
        sources: [
          {
            citations: ["BBFMVII"],
            label: "Fe y Mensaje VII",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la conmemoración conjunta",
        text: "La Confesión de New Hampshire enseña: «mediante el uso [sagrado] del pan y del vino, han de conmemorar juntos el amor de Cristo en su muerte; precedido siempre de un solemne examen de sí mismos».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de New Hampshire (1853), art. XIV",
          },
        ],
        sources: [
          {
            citations: ["BNHXIV"],
            label: "New Hampshire XIV",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para Fe y Mensaje Bautistas, la Cena une una acción de obediencia con el recuerdo de la muerte del Redentor y la espera de su retorno (art. VII) {c:BBFMVII|Fe y Mensaje VII}.",
      "Para la Confesión de New Hampshire, es una conmemoración conjunta del amor de Cristo en su muerte, en la participación de los miembros de la iglesia y precedida del examen solemne de uno mismo (art. XIV) {c:BNHXIV|New Hampshire XIV}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Los artículos seleccionados ofrecen estos fines y sus textos de apoyo; no ofrecen una argumentación extensa sobre la sustancia, el alimento espiritual ni otras posiciones eucarísticas.",
  },
  scriptureSubtitle: "Los pasajes que los textos bautistas citan sobre la Cena del Señor, y cómo los leen.",
  scripture: [
    {
      refs: [
        "Matt.3.13-Matt.3.17",
        "Matt.26.26-Matt.26.30",
        "Matt.28.19-Matt.28.20",
        "Mark.1.9-Mark.1.11",
        "Mark.14.22-Mark.14.26",
        "Luke.3.21-Luke.3.22",
        "Luke.22.19-Luke.22.20",
        "John.3.23",
        "Acts.2.41-Acts.2.42",
        "Acts.8.35-Acts.8.39",
        "Acts.16.30-Acts.16.33",
        "Acts.20.7",
        "Rom.6.3-Rom.6.5",
        "1Cor.10.16",
        "1Cor.10.21",
        "1Cor.11.23-1Cor.11.29",
        "Col.2.12",
      ],
      text: "Fe y Mensaje Bautistas imprime estos textos junto al artículo sobre el bautismo y la Cena; su ubicación no asigna cada versículo a la Cena (art. VII).",
    },
  ],
  videos: {
    subtitle: "Creadores bautistas explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle:
      "Objeciones a la postura bautista. Abre cada una para leer en profundidad la respuesta de los textos bautistas.",
    videosSubtitle: "Creadores bautistas que responden a esta objeción. Los videos se abren en YouTube.",
    order: [],
    items: [],
  },
  life: {
    intro: [
      "Para Fe y Mensaje Bautistas y la Confesión de New Hampshire, participan de la Cena los miembros de la iglesia, y el bautismo la precede (New Hampshire XIV; Fe y Mensaje VII).",
      "Estas son prescripciones de los documentos, no estadísticas sobre congregaciones observadas.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Participantes y bautismo",
        text: "La participación corresponde a los miembros de la iglesia y el bautismo precede a la Cena; no se deduce una restricción adicional a los miembros de una sola congregación local.",
        sources: [
          {
            citations: ["BNHXIV"],
            label: "New Hampshire XIV",
          },
          {
            citations: ["BBFMVII"],
            label: "Fe y Mensaje VII",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Los elementos",
        text: "La Confesión de New Hampshire nombra pan y vino; Fe y Mensaje Bautistas, en 1963 y 2000, nombra pan y fruto de la vid.",
        sources: [
          {
            citations: ["BNHXIV"],
            label: "New Hampshire XIV",
          },
          {
            citations: ["BBFMVII"],
            label: "Fe y Mensaje VII",
          },
        ],
      },
      {
        id: "CV-3",
        label: "La acción y su fin",
        text: "Los miembros comen y beben en un acto simbólico de obediencia, memoria y anticipación (Fe y Mensaje VII).",
        sources: [
          {
            citations: ["BBFMVII"],
            label: "Fe y Mensaje VII",
          },
        ],
      },
      {
        id: "CV-4",
        label: "La preparación",
        text: "La Confesión de New Hampshire requiere el examen solemne de uno mismo (art. XIV).",
        sources: [
          {
            citations: ["BNHXIV"],
            label: "New Hampshire XIV",
          },
        ],
      },
      {
        id: "CV-5",
        label: "La frecuencia",
        text: "Ninguno de los cuatro artículos completos seleccionados fija una frecuencia numérica.",
        sources: [
          {
            citations: ["BNHXIV"],
            label: "New Hampshire XIV",
          },
          {
            citations: ["BBFMVII"],
            label: "Fe y Mensaje VII",
          },
        ],
      },
      {
        id: "CV-6",
        label: "Quién preside y cómo se distribuye",
        text: "Estos artículos no dan una rúbrica detallada sobre quién preside, cómo se distribuye ni la reserva.",
        sources: [
          {
            citations: ["BNHXIV"],
            label: "New Hampshire XIV",
          },
          {
            citations: ["BBFMVII"],
            label: "Fe y Mensaje VII",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Las categorías de autoridad que los propios textos bautistas se aplican, con su definición en palabras de los textos.",
    grades: {
      scripture: {
        label: "Escritura: autoridad única",
        definition:
          "La Escritura es la autoridad para la fe y la práctica, según el preámbulo de Fe y Mensaje Bautistas.",
        source: {
          citations: ["BBFMVII"],
          label: "Fe y Mensaje VII",
        },
      },
      confession: {
        label: "Confesiones de la convención",
        definition:
          "Según su preámbulo, una confesión expresa el consenso de un cuerpo bautista para orientar; puede revisarse, no es infalible y no añade condiciones de salvación. La Confesión de New Hampshire de 1853 es una confesión histórica, sin que cada cuerpo bautista actual la suscriba.",
        source: {
          citations: ["BNHXIV"],
          label: "New Hampshire XIV",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
