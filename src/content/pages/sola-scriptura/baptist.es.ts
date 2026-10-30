import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const solaScripturaBaptist = {
  doctrine: "sola-scriptura",
  tradition: "baptist",
  status: "draft",
  title: "La posición bautista",
  lede: "Cómo la línea de las convenciones bautistas entiende la Escritura, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan la Confesión de New Hampshire y Fe y Mensaje Bautistas sobre la Escritura, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "La Confesión de New Hampshire dice de la Biblia: «la norma suprema por la que deben examinarse toda conducta humana, los credos y las opiniones».",
      grades: [
        {
          kind: "church",
          grade: "confession",
          basis: "Confesión de New Hampshire (1853), art. I",
        },
      ],
      sources: [
        {
          citations: ["BNHI"],
          label: "New Hampshire I",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la norma suprema",
        text: "La Confesión de New Hampshire dice de la Biblia: «la norma suprema por la que deben examinarse toda conducta humana, los credos y las opiniones».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de New Hampshire (1853), art. I",
          },
        ],
        sources: [
          {
            citations: ["BNHI"],
            label: "New Hampshire I",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la revelación y Cristo",
        text: "Para Fe y Mensaje Bautistas, la Biblia fue escrita por personas inspiradas por Dios y es su revelación al ser humano. Dios es su autor, la salvación su fin y la verdad sin mezcla de error su contenido. La Escritura es la norma que examina la conducta, los credos y las opiniones religiosas; toda ella testimonia a Cristo, centro de la revelación divina.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Fe y Mensaje Bautistas (2000), art. I",
          },
        ],
        sources: [
          {
            citations: ["BBFMI"],
            label: "Fe y Mensaje I",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para la Confesión de New Hampshire: «la Santa Biblia fue escrita por personas divinamente inspiradas y es un tesoro perfecto de instrucción celestial» {c:BNHI|New Hampshire I}.",
      "Fe y Mensaje Bautistas da su propia razón, centrada en la revelación divina y en Cristo (art. I) {c:BBFMI|Fe y Mensaje I}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para Fe y Mensaje Bautistas, Dios es el autor de la Biblia, la salvación su fin y la verdad, sin mezcla de error, su contenido (art. I).",
  },
  scriptureSubtitle: "Los pasajes que los textos bautistas citan sobre la Escritura, y cómo los leen.",
  scripture: [
    {
      refs: [
        "Exod.24.4",
        "Deut.4.1-Deut.4.2",
        "Deut.17.19",
        "Josh.8.34",
        "Ps.19.7-Ps.19.10",
        "Ps.119.11",
        "Ps.119.89",
        "Ps.119.105",
        "Ps.119.140",
        "Isa.34.16",
        "Isa.40.8",
        "Jer.15.16",
        "Jer.36.1-Jer.36.32",
        "Matt.5.17-Matt.5.18",
        "Matt.22.29",
        "Luke.21.33",
        "Luke.24.44-Luke.24.46",
        "John.5.39",
        "John.16.13-John.16.15",
        "John.17.17",
        "Acts.2.16",
        "Acts.17.11",
        "Rom.15.4",
        "Rom.16.25-Rom.16.26",
        "2Tim.3.15-2Tim.3.17",
        "Heb.1.1-Heb.1.2",
        "Heb.4.12",
        "1Pet.1.25",
        "2Pet.1.19-2Pet.1.21",
      ],
      text: "Fe y Mensaje Bautistas imprime estos textos junto al artículo sobre la Escritura, sin asignar cada referencia a un argumento no impreso (art. I).",
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
      "Fe y Mensaje Bautistas dice en su preámbulo: «Las confesiones son sólo guías para la interpretación» {c:BBFMpre_mbulo|Fe y Mensaje preámbulo}.",
      "Para ese preámbulo, la Escritura tiene autoridad única para la fe y la práctica; las confesiones guían la interpretación sin autoridad sobre la conciencia, sirven como instrumentos de rendición de cuentas doctrinal y admiten revisión.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Las confesiones como guías",
        text: "El preámbulo de Fe y Mensaje Bautistas dice: «Las confesiones son sólo guías para la interpretación».",
        sources: [
          {
            citations: ["BBFMpre_mbulo"],
            label: "Fe y Mensaje preámbulo",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Leer sin iglesia ni confesión",
        text: "No se afirma una regla de lectura solo privada: el preámbulo une la guía de interpretación, la autoridad de la Escritura y la rendición de cuentas doctrinal.",
        sources: [
          {
            citations: ["BBFMpre_mbulo"],
            label: "Fe y Mensaje preámbulo",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Plan de lectura o versión bíblica universal",
        text: "Los artículos seleccionados no dicen nada sobre un plan de lectura fijo ni sobre una versión bíblica universal.",
        sources: [
          {
            citations: ["BNHI"],
            label: "New Hampshire I",
          },
          {
            citations: ["BBFMI"],
            label: "Fe y Mensaje I",
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
          "Autoridad única para la fe y la práctica en el preámbulo de la convención; norma suprema de examen en la Confesión de New Hampshire I y en Fe y Mensaje Bautistas I.",
        source: {
          citations: ["BBFMI"],
          label: "Fe y Mensaje I",
        },
      },
      confession: {
        label: "Confesiones de la convención",
        definition:
          "La Confesión de New Hampshire de 1853 es una confesión histórica, sin jurisdicción bautista universal. Fe y Mensaje Bautistas 2000, enmendada en 2023, es la declaración de la convención nombrada: guía y rendición de cuentas doctrinal bajo la Escritura, revisable, no infalible ni una norma que obligue la conciencia como la Escritura.",
        source: {
          citations: ["BNHI"],
          label: "New Hampshire I",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
