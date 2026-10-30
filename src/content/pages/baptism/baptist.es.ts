import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const baptismBaptist = {
  doctrine: "baptism",
  tradition: "baptist",
  status: "draft",
  title: "La posición bautista",
  lede: "Cómo la línea de las convenciones bautistas entiende el bautismo, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan la Confesión de New Hampshire y Fe y Mensaje Bautistas sobre el bautismo, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "La Confesión de New Hampshire dice: «El bautismo cristiano es la inmersión en agua de un creyente, en el nombre del Padre [y] del Hijo y del Espíritu Santo».",
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
    statements: [
      {
        id: "QE-1",
        short: "la inmersión del creyente",
        text: "La Confesión de New Hampshire enseña: «El bautismo cristiano es la inmersión en agua de un creyente, en el nombre del Padre [y] del Hijo y del Espíritu Santo».",
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
      {
        id: "QE-2",
        short: "obediencia, vida nueva y resurrección",
        text: "Para Fe y Mensaje Bautistas, el bautismo es la inmersión de un creyente en el nombre del Padre, del Hijo y del Espíritu Santo. Simboliza su fe en Cristo crucificado, sepultado y resucitado, su muerte al pecado, la sepultura de la vida anterior y una vida nueva en Cristo. También testimonia su fe en la resurrección final de los muertos.",
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
        id: "QE-3",
        short: "la membresía y la Cena",
        text: "Para Fe y Mensaje Bautistas, como ordenanza de la iglesia, el bautismo es requisito para los privilegios de la membresía y para la Cena del Señor.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Fe y Mensaje Bautistas (2000), art. VII",
          },
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de New Hampshire (1853), art. XIV",
          },
        ],
        sources: [
          {
            citations: ["BBFMVII"],
            label: "Fe y Mensaje VII",
          },
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
      "Para la Confesión de New Hampshire, el bautismo sirve «para manifestar, en un emblema solemne y hermoso, nuestra fe en el Salvador crucificado, sepultado y resucitado» {c:BNHXIV|New Hampshire XIV}.",
      "Y lo hace «con su efecto en nuestra muerte al pecado y resurrección a una vida nueva» {c:BNHXIV|New Hampshire XIV}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para Fe y Mensaje Bautistas, el bautismo simboliza la fe en Cristo crucificado, sepultado y resucitado, la muerte al pecado, la vida nueva y el testimonio de la resurrección final (art. VII).",
  },
  scriptureSubtitle: "Los pasajes que los textos bautistas citan sobre el bautismo, y cómo los leen.",
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
      text: "Fe y Mensaje Bautistas imprime estos textos junto al artículo sobre el bautismo y la Cena, sin asignar versículos a cada cláusula (art. VII).",
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
      "Para la Confesión de New Hampshire y Fe y Mensaje Bautistas, el bautismo es para un creyente, por inmersión en agua, en el nombre del Padre, del Hijo y del Espíritu Santo (New Hampshire XIV; Fe y Mensaje VII).",
      "Los artículos seleccionados no fijan una edad numérica, la duración de una preparación, un lugar ni un calendario: la palabra «creyente» no establece una edad numérica.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Quién lo recibe",
        text: "Un creyente.",
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
        label: "Materia, modo y nombre",
        text: "Inmersión en agua, en el nombre del Padre, del Hijo y del Espíritu Santo.",
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
        label: "Qué expresa",
        text: "La fe y el simbolismo de la vida nueva; el artículo vigente nombra además el testimonio de la resurrección final.",
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
        id: "CV-4",
        label: "La iglesia y la Cena",
        text: "El bautismo es requisito previo para la relación con la iglesia y para la Cena.",
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
        id: "CV-5",
        label: "Quién bautiza",
        text: "Los artículos seleccionados sobre el bautismo no dicen nada acerca de quién lo administra.",
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
          "En la formulación del preámbulo de Fe y Mensaje Bautistas, la Escritura es la única autoridad para la fe y la práctica.",
        source: {
          citations: ["BBFMVII"],
          label: "Fe y Mensaje VII",
        },
      },
      confession: {
        label: "Confesiones de la convención",
        definition:
          "La Confesión de New Hampshire de 1853 es una confesión histórica revisada, sin jurisdicción bautista universal ni adopción regional actual inferida. Fe y Mensaje Bautistas 2000, enmendada en 2023, es la declaración adoptada por la convención nombrada: guía y rendición de cuentas doctrinal bajo la Escritura, revisable, sin reclamar finalidad, infalibilidad ni autoridad sobre la conciencia; no es un magisterio bautista mundial.",
        source: {
          citations: ["BNHXIV"],
          label: "New Hampshire XIV",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
