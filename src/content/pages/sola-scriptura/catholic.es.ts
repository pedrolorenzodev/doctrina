import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const solaScripturaCatholic = {
  doctrine: "sola-scriptura",
  tradition: "catholic",
  status: "draft",
  title: "La posición católica",
  lede: "Qué responde la Iglesia católica a la pregunta «¿solo la Escritura?», con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que la Iglesia católica enseña sobre la Escritura y la Tradición, con el grado de autoridad que le corresponde según las categorías de la Iglesia.",
    definition: {
      text: "¿Solo la Escritura? «[…] la Iglesia no deriva solamente de la Sagrada Escritura su certeza acerca de todas las verdades reveladas.» {c:DV9|Concilio Vaticano II, Constitución dogmática Dei Verbum, n. 9, 1965}",
      grades: [],
      sources: [
        {
          citations: ["DV9"],
          label: "Dei Verbum 9, el número entero",
        },
        {
          citations: ["CEC82"],
          label: "Catecismo 82",
        },
        {
          citations: ["T4dec"],
          label: "Trento, ses. IV",
        },
        {
          citations: ["UR21"],
          label: "Unitatis redintegratio 21",
        },
        {
          citations: ["UUS79"],
          label: "Ut unum sint 79",
        },
      ],
    },
    statements: [
      {
        id: "Definición",
        short: "la Escritura y la Tradición",
        text: "Para la Iglesia católica, la Sagrada Tradición y la Sagrada Escritura «constituyen un solo depósito sagrado de la palabra de Dios, confiado a la Iglesia» (Dei Verbum 10), y «se han de recibir y venerar ambas con un mismo espíritu de piedad» (Dei Verbum 9). Considera la Escritura, «juntamente con la Sagrada Tradición, como la regla suprema de su fe» (Dei Verbum 21), y enseña que el Magisterio «no está sobre la palabra de Dios, sino que la sirve» (Dei Verbum 10).",
        grades: [],
        sources: [
          {
            citations: ["DV9"],
            label: "Dei Verbum 9",
          },
          {
            citations: ["DV10"],
            label: "Dei Verbum 10",
          },
          {
            citations: ["DV21"],
            label: "Dei Verbum 21",
          },
          {
            citations: ["T4dec"],
            label: "Trento, ses. IV",
          },
        ],
      },
      {
        id: "QE-1",
        short: "la revelación en Cristo",
        text: "La revelación de Dios culmina en Cristo, y no hay que esperar otra revelación pública. Cristo mandó a los apóstoles predicar el Evangelio, «fuente de toda la verdad salvadora». Ellos lo transmitieron de dos maneras: de palabra, con su ejemplo y sus instituciones, y por escrito, bajo la inspiración del Espíritu Santo. Para que el Evangelio se conservara vivo, dejaron como sucesores a los obispos.",
        grades: [
          {
            kind: "church",
            grade: "magisterium",
            basis:
              "concilio ecuménico, para {c:DV7|Dei Verbum 7} tal como está redactado. El contenido repite Trento (ses. IV: «fuente de toda verdad conducente á nuestra salvacion, y regla de costumbres») y el Vaticano I ({c:DF2rev|Dei Filius, cap. 2}); la frase de Trento lleva el grado de su decreto (QE-2)",
          },
        ],
        sources: [
          {
            citations: ["DV7"],
            label: "Dei Verbum 7",
          },
          {
            citations: ["DV4"],
            label: "Dei Verbum 4",
          },
          {
            citations: ["CEC66"],
            label: "Catecismo 66",
          },
          {
            citations: ["CEC76"],
            label: "Catecismo 76",
          },
          {
            citations: ["CEC83"],
            label: "Catecismo 83",
          },
          {
            citations: ["T4dec"],
            label: "Trento, ses. IV",
          },
        ],
      },
      {
        id: "QE-2",
        short: "cómo se transmite la revelación",
        text: "La Escritura es la palabra de Dios puesta por escrito bajo la inspiración del Espíritu Santo; la Tradición transmite íntegra a los sucesores de los apóstoles la palabra de Dios que Cristo y el Espíritu confiaron a los apóstoles. Las dos brotan «de la misma divina fuente», forman «un solo depósito sagrado de la palabra de Dios» y se reciben «con un mismo espíritu de piedad».",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "que «esta verdad y disciplina están contenidas en los libros escritos, y en las tradiciones no escritas», y que el sínodo los «recibe, y venera con igual afecto de piedad y reverencia»: definido por Trento (ses. IV, decreto con anatema contra quien «despreciáre á sabiendas y con ánimo deliberado las mencionadas tradiciones», {c:T4anat|Ayala p. 43}) y declarado por el Vaticano I ({c:DF2rev|Dei Filius, cap. 2}, «secundum universalis Ecclesiae fidem»); la Iglesia no lo ha clasificado por separado",
          },
          {
            kind: "church",
            grade: "magisterium",
            basis:
              "concilio ecuménico: que Escritura y Tradición brotan «de la misma divina fuente» y forman «un solo depósito sagrado de la palabra de Dios» ({c:DV9,DV10|Dei Verbum 9–10})",
          },
        ],
        sources: [
          {
            citations: ["DV9"],
            label: "Dei Verbum 9",
          },
          {
            citations: ["DV10"],
            label: "Dei Verbum 10",
          },
          {
            citations: ["CEC82"],
            label: "Catecismo 82",
          },
          {
            citations: ["CEC83"],
            label: "Catecismo 83",
          },
          {
            citations: ["T4dec"],
            label: "Trento, ses. IV",
          },
          {
            citations: ["T4anat"],
            label: "Trento, ses. IV, anatema",
          },
          {
            citations: ["DF2rev"],
            label: "Dei Filius, cap. 2",
          },
          {
            citations: ["CIC750", "PF1989"],
            label: "Código de Derecho Canónico, can. 750 §1; Professio fidei (1989)",
          },
          {
            citations: ["PFT2"],
            label: "Professio fidei Tridentina II",
          },
        ],
      },
      {
        id: "QE-3",
        short: "el depósito de la fe",
        text: "La Tradición y la Escritura forman «un solo depósito sagrado de la palabra de Dios, confiado a la Iglesia», y en su conservación «prelados y fieles colaboran estrechamente» (Dei Verbum 10). La totalidad de los fieles «no puede equivocarse cuando cree», y lo manifiesta «mediante el sentido sobrenatural de la fe de todo el pueblo»; con ese sentido de la fe el Pueblo de Dios se adhiere a la fe «guiado en todo por el sagrado Magisterio» (Lumen gentium 12). Pero el oficio de interpretar auténticamente la palabra de Dios, escrita o transmitida, está confiado solo al Magisterio vivo de la Iglesia: el Papa y los obispos en comunión con él. Ese Magisterio «no está sobre la palabra de Dios, sino que la sirve, enseñando solamente lo que le ha sido confiado». Escritura, Tradición y Magisterio están unidos de tal modo «que no tiene consistencia el uno sin el otro».",
        grades: [
          {
            kind: "unclassified",
            reason: "taught-by-council",
            basis:
              "(ses. IV, {c:T4use|decreto sobre la edición y el uso}) y declarado por el Vaticano I ({c:DF2int|Dei Filius, cap. 2}, «idem Decretum renovantes […] declaramus»): que en fe y costumbres el verdadero sentido de la Escritura es el «que le ha dado y dá la santa madre Iglesia, á la que privativamente toca determinar el verdadero sentido», y no contra el unánime consentimiento de los Padres; ningún canon le pone anatema; la Iglesia no lo ha clasificado por separado",
          },
          {
            kind: "church",
            grade: "magisterium",
            basis:
              "concilio ecuménico: la redacción de {c:DV10|Dei Verbum 10} («no está sobre la palabra de Dios, sino que la sirve») y {c:LG12|Lumen gentium 12} sobre el sentido de la fe",
          },
        ],
        sources: [
          {
            citations: ["DV10"],
            label: "Dei Verbum 10",
          },
          {
            citations: ["LG12"],
            label: "Lumen gentium 12",
          },
          {
            citations: ["T4use"],
            label: "Trento, ses. IV, decreto sobre la edición y el uso",
          },
          {
            citations: ["DF2int"],
            label: "Dei Filius, cap. 2",
          },
          {
            citations: ["PFT3"],
            label: "Professio fidei Tridentina III",
          },
          {
            citations: ["CEC85", "CEC87"],
            label: "Catecismo 85, 87",
          },
          {
            citations: ["CEC9193"],
            label: "Catecismo 91–93",
          },
        ],
      },
      {
        id: "QE-4",
        short: "el canon de la Escritura",
        text: "Fue la Tradición apostólica la que hizo discernir a la Iglesia qué escritos forman la lista de los libros santos, el «canon». Comprende 46 libros del Antiguo Testamento (45 si se cuentan Jeremías y Lamentaciones como uno) y 27 del Nuevo, entre ellos Tobías, Judit, Sabiduría, Eclesiástico, Baruc y los dos libros de los Macabeos; todos ellos «enteros, con todas sus partes» (Concilio de Trento, ses. IV; lo renovó el Vaticano I, _Dei Filius_, can. II.4).",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "la lista de los libros, «enteros, con todas sus partes»: definido por Trento (ses. IV, lista con anatema, {c:T4anat|Ayala p. 43}) y por el Vaticano I ({c:DFcII4|Dei Filius, can. II.4}); la Iglesia no lo ha clasificado por separado",
          },
          {
            kind: "church",
            grade: "magisterium",
            basis:
              "concilio ecuménico: que la Iglesia conoce el canon por la Tradición ({c:DV8|Dei Verbum 8}; lo repite {c:CEC120|Catecismo 120})",
          },
        ],
        sources: [
          {
            citations: ["CEC120"],
            label: "Catecismo 120",
          },
          {
            citations: ["CEC138"],
            label: "Catecismo 138",
          },
          {
            citations: ["DV8"],
            label: "Dei Verbum 8",
          },
          {
            citations: ["T4list", "T4anat"],
            label: "Trento, ses. IV",
          },
          {
            citations: ["DFcII4"],
            label: "Dei Filius, can. II.4",
          },
        ],
      },
      {
        id: "QE-5",
        short: "la inspiración de los libros",
        text: "Los libros del Antiguo y del Nuevo Testamento son sagrados y canónicos porque, escritos bajo la inspiración del Espíritu Santo, tienen a Dios como autor. No lo son porque la Iglesia los haya aprobado después. Dios se valió de hombres que usaron sus propias facultades, de modo que escribieron «como verdaderos autores, todo y sólo lo que El quería».",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "que los libros son inspirados y tienen a Dios por autor: definido por el Vaticano I ({c:DFcII4|Dei Filius, can. II.4}: «aut eos divinitus inspíralos [sic: inspiratos] esse negaverit; anathema sit», como lo imprime vatican.va); la Iglesia no lo ha clasificado por separado",
          },
          {
            kind: "unclassified",
            reason: "taught-by-council",
            basis:
              "(cap. 2), sin canon: que no lo son por una aprobación posterior de la Iglesia ({c:DF2can|Dei Filius, cap. 2}); la Iglesia no lo ha clasificado por separado",
          },
          {
            kind: "church",
            grade: "magisterium",
            basis: "concilio ecuménico: lo que dice {c:DV11|Dei Verbum 11} de los autores humanos",
          },
        ],
        sources: [
          {
            citations: ["DF2can"],
            label: "Dei Filius, cap. 2",
          },
          {
            citations: ["DFcII4"],
            label: "Dei Filius, can. II.4",
          },
          {
            citations: ["DV11"],
            label: "Dei Verbum 11",
          },
          {
            citations: ["CEC105"],
            label: "Catecismo 105",
          },
        ],
      },
      {
        id: "QE-6",
        short: "la verdad de la Escritura",
        text: "Como todo lo que afirman los autores inspirados lo afirma el Espíritu Santo, los libros de la Escritura «enseñan firmemente, con fidelidad y sin error, la verdad que Dios quiso consignar en las sagradas letras para nuestra salvación».",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "así lo clasifica la {c:CDF98|Congregación para la Doctrina de la Fe} (1998, §11: «la inerrancia de los textos sagrados inspirados», nota 30: DS 3293; Dei Verbum 11)",
          },
        ],
        sources: [
          {
            citations: ["DV11"],
            label: "Dei Verbum 11",
          },
          {
            citations: ["CEC107"],
            label: "Catecismo 107",
          },
          {
            citations: ["PD"],
            label: "Providentissimus Deus",
          },
          {
            citations: ["VD19"],
            label: "Verbum Domini 19",
          },
          {
            citations: ["CDF98"],
            label: "Congregación para la Doctrina de la Fe (1998), §11",
          },
        ],
      },
      {
        id: "QE-7",
        short: "cómo interpretar la Escritura",
        text: "Para entender la Escritura hay que buscar lo que los autores sagrados quisieron decir, atendiendo a su tiempo, su cultura y los «géneros literarios». Y como está inspirada, hay que leerla «con el mismo Espíritu con que se escribió»: atendiendo a la unidad de toda la Escritura, a la Tradición viva de toda la Iglesia y a la analogía de la fe. El juicio último corresponde a la Iglesia.",
        grades: [
          {
            kind: "church",
            grade: "magisterium",
            basis:
              "concilio ecuménico, {c:DV12|Dei Verbum 12}; la última frase repite Trento (ses. IV) y Dei Filius (cap. 2), según la nota 10 de Dei Verbum 12 («Denzinger 1788 (3007)»), y su grado está en QE-3",
          },
        ],
        sources: [
          {
            citations: ["DV12"],
            label: "Dei Verbum 12",
          },
          {
            citations: ["CEC112"],
            label: "Catecismo 112–118",
          },
          {
            citations: ["CEC113"],
            label: "Catecismo 113",
          },
          {
            citations: ["DAS"],
            label: "Divino afflante Spiritu",
          },
          {
            citations: ["VD29"],
            label: "Verbum Domini 29",
          },
        ],
      },
      {
        id: "QE-8",
        short: "la veneración de las Escrituras",
        text: "La Iglesia ha venerado siempre las Escrituras «al igual que el mismo Cuerpo del Señor» y las considera, «juntamente con la Sagrada Tradición, como la regla suprema de su fe». Toda su predicación debe nutrirse de la Escritura y regirse por ella; el estudio de la Escritura es «como el alma de la Sagrada Teología»; y quiere que los fieles tengan «amplio acceso» a ella, en traducciones fieles hechas «sobre todo de los textos primitivos», porque «el desconocimiento de las Escrituras es desconocimiento de Cristo».",
        grades: [
          {
            kind: "church",
            grade: "magisterium",
            basis: "concilio ecuménico ({c:DV21,DV22,DV24,DV25|Dei Verbum 21–25})",
          },
        ],
        sources: [
          {
            citations: ["DV21"],
            label: "Dei Verbum 21",
          },
          {
            citations: ["DV22"],
            label: "Dei Verbum 22",
          },
          {
            citations: ["DV24"],
            label: "Dei Verbum 24",
          },
          {
            citations: ["DV25"],
            label: "Dei Verbum 25",
          },
          {
            citations: ["CEC108"],
            label: "Catecismo 108",
          },
          {
            citations: ["CEC133"],
            label: "Catecismo 133",
          },
          {
            citations: ["VD7"],
            label: "Verbum Domini 7",
          },
        ],
      },
      {
        id: "QE-9",
        short: "el progreso de la Tradición",
        text: "La Tradición que viene de los apóstoles «progresa en la Iglesia con la asistencia del Espíritu Santo»: crece la comprensión de lo transmitido, por la contemplación y el estudio de los creyentes, por su experiencia espiritual y por la predicación de los obispos. Pero no se añade nada al depósito: el sentido de los dogmas que la Iglesia declaró una vez «ha de conservarse siempre» (Vaticano I, _Dei Filius_, cap. 4; traducción asistida por IA desde el latín, sin revisar por Pedro).",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "que nunca se puede dar a un dogma un sentido distinto del que entendió la Iglesia: definido por el Vaticano I ({c:DFcIV3|Dei Filius, can. IV.3}); la Iglesia no lo ha clasificado por separado",
          },
          {
            kind: "church",
            grade: "magisterium",
            basis: "concilio ecuménico: el crecimiento en la comprensión ({c:DV8|Dei Verbum 8})",
          },
        ],
        sources: [
          {
            citations: ["DV8"],
            label: "Dei Verbum 8",
          },
          {
            citations: ["DF4"],
            label: "Dei Filius, cap. 4",
          },
          {
            citations: ["DFcIV3"],
            label: "Dei Filius, can. IV.3",
          },
          {
            citations: ["CEC94"],
            label: "Catecismo 94",
          },
          {
            citations: ["CEC66"],
            label: "Catecismo 66",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "La Iglesia católica da sus razones con la Escritura y con la historia de cómo se transmitió el Evangelio. Cristo mandó a los apóstoles predicar el Evangelio «á toda criatura», «como fuente de toda verdad conducente á nuestra salvacion» {c:T4dec|Trento, ses. IV}; los apóstoles lo transmitieron de palabra y por escrito, y dejaron sucesores {c:DV7|Dei Verbum 7}; piden a los fieles «que conserven las tradiciones que han aprendido o de palabra o por escrito» {c:DV8|Dei Verbum 8}; y la Iglesia conoció por la Tradición qué libros forman la Escritura {c:DV8|Dei Verbum 8}.",
    ],
    fathers: [
      {
        lead: "El Catecismo cita a san Agustín:",
        quote: ["No creería en el Evangelio, si no me moviera a ello la autoridad de la Iglesia católica"],
        author: "San Agustín",
        work: "Contra epistulam Manichaei quam vocant fundamenti 5, 6",
        date: {
          year: 396,
        },
        citedIn: {
          citations: ["CEC119"],
          label: "Catecismo 119",
        },
      },
      {
        lead: "Y un adagio de los Padres, con Orígenes:",
        quote: [
          "La sagrada Escritura está más en el corazón de la Iglesia que en la materialidad de los libros escritos",
          "En efecto, la Iglesia encierra en su Tradición la memoria viva de la Palabra de Dios, y el Espíritu Santo le da la interpretación espiritual de la Escritura",
        ],
        author: "Adagio sin autor en el Catecismo; Orígenes",
        work: "Homilías sobre el Levítico (Homiliae in Leviticum) 5, 5",
        date: {
          year: 239,
          yearEnd: 245,
          circa: true,
        },
        citedIn: {
          citations: ["CEC113"],
          label: "Catecismo 113",
        },
      },
    ],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para la Iglesia católica, la Tradición, la Escritura y el Magisterio «están entrelazados y unidos de tal forma que no tiene consistencia el uno sin el otro» {c:DV10|Dei Verbum 10}: por eso no saca «exclusivamente de la Escritura la certeza de todo lo revelado» {c:CEC82|Catecismo 82}, aunque la tiene, junto con la Tradición, por «la regla suprema de su fe» {c:DV21|Dei Verbum 21}.",
  },
  scriptureSubtitle:
    "Los pasajes que los documentos católicos citan sobre la Escritura y la Tradición, y cómo los leen.",
  scripture: [
    {
      refs: ["Matt.28.19-Matt.28.20", "Mark.16.15"],
      text: "Para la Iglesia católica, Cristo mandó: «predicad el evangelio á toda criatura» {v:Mark.16.15}, y prometió: «yo estoy con vosotros todos los días, hasta el fin del mundo» {v:Matt.28.20}; por eso el Evangelio se transmite primero por la predicación viva {c:DV7|Dei Verbum 7} {c:CEC80|Catecismo 80}.",
    },
    {
      refs: ["2Thess.2.15"],
      text: "Los apóstoles piden a los fieles «que conserven las tradiciones que han aprendido o de palabra o por escrito»: Dei Verbum lo lee como la orden de conservar lo recibido por las dos vías {c:DV8|Dei Verbum 8}.",
    },
    {
      refs: ["Jude.1.3"],
      text: "Para la Iglesia católica, «la fe transmitida a los santos de una vez para siempre» se guarda sin añadirle nada; lo que crece es su comprensión {c:DV8|Dei Verbum 8} {c:CEC171|Catecismo 171}.",
    },
    {
      refs: ["1Tim.3.15"],
      text: "El Catecismo lee aquí a la Iglesia como «columna y fundamento de la verdad», que guarda la memoria de las palabras de Cristo y transmite la confesión de fe de los apóstoles {c:CEC171|Catecismo 171}.",
    },
    {
      refs: ["1Tim.6.20", "2Tim.1.12-2Tim.1.14"],
      text: "El Catecismo lee el «depósito» como lo contenido en la Tradición y en la Escritura, confiado por los apóstoles al conjunto de la Iglesia {c:CEC84|Catecismo 84}.",
    },
    {
      refs: ["Luke.10.16"],
      text: "«El que a vosotros escucha a mí me escucha»: por eso los fieles reciben las enseñanzas de sus pastores {c:CEC87|Catecismo 87}.",
    },
    {
      refs: ["Acts.2.42"],
      text: "Fiel al depósito, todo el pueblo santo, unido a sus pastores, «persevera constantemente en la doctrina de los Apóstoles y en la comunión, en la fracción del pan y en las oraciones» {c:CEC84,DV10|Catecismo 84, citando Dei Verbum 10}.",
    },
    {
      refs: ["Luke.2.19", "Luke.2.51"],
      text: "La comprensión de lo transmitido crece por «la contemplación y el estudio de los creyentes, que las meditan en su corazón» {c:DV8|Dei Verbum 8, que remite a Lucas 2:19, 51}.",
    },
    {
      refs: ["Col.3.16"],
      text: "Dei Verbum 8 cita este versículo para decir que, por la Tradición, el Espíritu Santo hace «que la palabra de Cristo habite en ellos abundantemente» {c:DV8|Dei Verbum 8}.",
    },
    {
      refs: ["John.20.31", "2Tim.3.16-2Tim.3.17", "2Pet.1.19-2Pet.1.21", "2Pet.3.15-2Pet.3.16"],
      text: "«Toda la Escritura es divinamente inspirada y útil para enseñar…»: la Iglesia lo lee como la fe apostólica en la inspiración de los libros, que por eso tienen a Dios por autor {c:DV11|Dei Verbum 11}.",
    },
    {
      refs: ["1Thess.2.13", "Heb.4.12", "Acts.20.32"],
      text: "En la Escritura la Iglesia «no recibe solamente una palabra humana, sino lo que es realmente: la Palabra de Dios», que es «viva y eficaz» {c:CEC104|Catecismo 104} {c:DV21|Dei Verbum 21}.",
    },
    {
      refs: ["Luke.24.45", "Luke.24.25-Luke.24.27", "Luke.24.44-Luke.24.46"],
      text: "Para que la Escritura no quede en letra muerta, Cristo, por el Espíritu Santo, «nos abra el espíritu a la inteligencia de las mismas»; la Escritura se lee desde Cristo, su centro {c:CEC108,CEC112|Catecismo 108, 112}.",
    },
    {
      refs: ["Rom.12.6"],
      text: "«La analogía de la fe»: la coherencia de las verdades de la fe entre sí, criterio para leer cada pasaje {c:CEC114|Catecismo 114}.",
    },
    {
      refs: ["1John.2.20-1John.2.27", "John.16.13"],
      text: "Todos los fieles han recibido la unción del Espíritu que los conduce a la verdad completa: el sentido de la fe de todo el pueblo {c:CEC9193|Catecismo 91–93}.",
    },
    {
      refs: ["Heb.1.1-Heb.1.2"],
      text: "Dios, que habló muchas veces por los profetas, «nos habló por su Hijo»: en Cristo la revelación está completa {c:DV4|Dei Verbum 4} {c:DF2rev|Vaticano I, Dei Filius, cap. 2}.",
    },
    {
      refs: ["Phil.3.8"],
      text: "«El sublime conocimiento de Jesucristo» se aprende con la lectura frecuente de la Escritura: «el desconocimiento de las Escrituras es desconocimiento de Cristo» {c:DV25|Dei Verbum 25}.",
    },
    {
      refs: ["Matt.18.20"],
      text: "Cristo está presente en su palabra: «cuando se lee en la Iglesia la Sagrada Escritura, es El quien habla» {c:SC7|Sacrosanctum Concilium 7}.",
    },
  ],
  videos: {
    subtitle: "Creadores católicos explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle: "Objeciones a la postura católica. Abre cada una para leer en profundidad la respuesta católica.",
    videosSubtitle: "Creadores católicos que responden a esta objeción. Los videos se abren en YouTube.",
    order: ["OB-1", "OB-2", "OB-3", "OB-4", "OB-5", "OB-6", "OB-7"],
    items: [
      {
        id: "OB-1",
        layer: "official",
        short: "Solo la Escritura es regla y norma",
        title: "Solo la Escritura es regla y norma; los Padres, los concilios y la Tradición son testigos, no jueces",
        synthesis:
          "Solo los escritos de los profetas y apóstoles son la regla por la que se juzga toda doctrina y todo maestro. Los Padres y los concilios merecen respeto, pero son testigos de cómo se entendió la Escritura, no una segunda norma: «Mas aun si nosotros ó un ángel del cielo os anunciare otro evangelio del que os hemos anunciado, sea anatema» {v:Gal.1.8}. Poner la Tradición a la par de la Escritura le quita a la Palabra de Dios su lugar de juez único.",
        raisedBy: {
          traditions: ["lutheran", "reformed"],
          line: "Suelen plantearla luteranos y reformados.",
        },
        objectorTexts: {
          shown: ["FCEP1", "FCEP2", "FCEP7", "FCEP8"],
          more: ["SA2215", "WLC3", "WSC2"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, la Escritura es, «juntamente con la Sagrada Tradición», «la regla suprema de su fe»: el Concilio Vaticano II dice que la Iglesia «siempre las ha considerado y considera» así, y que «toda la predicación eclesiástica, como la misma religión cristiana, se nutra de la Sagrada Escritura, y se rija por ella» {c:DV21|Dei Verbum 21}. Juan Pablo II propone como tema que el diálogo debe estudiar más a fondo «las relaciones entre la sagrada Escritura, suprema autoridad en materia de fe, y la sagrada Tradición, interpretación indispensable de la palabra de Dios» {c:UUS79|Ut unum sint 79}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la Tradición y la Escritura no son dos normas que compiten: «surgiendo ambas de la misma divina fuente, se funden en cierto modo y tienden a un mismo fin» {c:DV9|Dei Verbum 9}. El Catecismo dice que la Tradición de la que habla «es la que viene de los apóstoles y transmite lo que éstos recibieron de las enseñanzas y del ejemplo de Jesús y lo que aprendieron por el Espíritu Santo» {c:CEC83|Catecismo 83}. El Concilio dice de los Padres: «Las enseñanzas de los Santos Padres testifican la presencia viva de esta tradición» {c:DV8|Dei Verbum 8}.",
          },
          {
            type: "p",
            text: "Dei Verbum 9 dice también: «de donde se sigue que la Iglesia no deriva solamente de la Sagrada Escritura su certeza acerca de todas las verdades reveladas. Por eso se han de recibir y venerar ambas con un mismo espíritu de piedad» {c:DV9|Dei Verbum 9}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la misma Escritura se reconoce como tal por la Tradición: «Por esta Tradición conoce la Iglesia el Canon íntegro de los libros sagrados, y la misma Sagrada Escritura se va conociendo en ella más a fondo y se hace incesantemente operativa» {c:DV8|Dei Verbum 8}. El Catecismo dice que «el depósito» de la fe, «contenido en la sagrada Tradición y en la sagrada Escritura fue confiado por los Apóstoles al conjunto de la Iglesia» {c:CEC84|Catecismo 84}.",
          },
          {
            type: "p",
            text: "El Concilio enseña también sobre quién interpreta auténticamente la palabra de Dios: «el oficio de interpretar auténticamente la palabra de Dios escrita o transmitida ha sido confiado únicamente al Magisterio vivo de la Iglesia», y «este Magisterio, evidentemente, no está sobre la palabra de Dios, sino que la sirve, enseñando solamente lo que le ha sido confiado» {c:DV10|Dei Verbum 10}. El Catecismo resume la relación entre los tres: «La santa Tradición, la sagrada Escritura y el Magisterio de la Iglesia, según el plan prudente de Dios, están unidos y ligados, de modo que ninguno puede subsistir sin los otros» {c:CEC95|Catecismo 95}.",
          },
          {
            type: "p",
            text: "Trento, sesión IV: el sínodo «recibe, y venera con igual afecto de piedad y reverencia, todos los libros del viejo y nuevo Testamento, pues Dios es el unico autor de ambos, así como las mencionadas tradiciones pertenecientes á la fe y á las costumbres», y concluye: «Si alguno pues no reconociere por sagrados, y canónicos estos libros, enteros, con todas sus partes […]; y despreciáre á sabiendas y con ánimo deliberado las mencionadas tradiciones; sea excomulgado» {c:T4dec,T4anat|Trento, ses. IV, decreto sobre las Escrituras canónicas}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["T4dec", "T4anat"],
            name: "Concilio de Trento, ses. IV, decreto sobre las Escrituras canónicas",
            dates: [],
          },
          {
            citations: ["DV8", "DV9", "DV10", "DV21"],
            name: "Concilio Vaticano II, Dei Verbum 8, 9, 10, 21",
            dates: [
              {
                year: 1965,
                month: 11,
                day: 18,
              },
            ],
          },
          {
            citations: ["UUS79"],
            name: "Juan Pablo II, Ut unum sint 79",
            dates: [
              {
                year: 1995,
                month: 5,
                day: 25,
              },
            ],
          },
          {
            citations: ["CEC83", "CEC84", "CEC95"],
            name: "Catecismo de la Iglesia Católica 83, 84, 95",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: [
            "Ps.119.105",
            "Gal.1.8",
            "2Tim.3.16",
            "2Pet.1.19-2Pet.1.21",
            "Eph.2.20",
            "Rev.22.18-Rev.22.19",
            "Isa.8.20",
            "Luke.16.29",
            "Luke.16.31",
            "Gal.1.8-Gal.1.9",
            "2Tim.3.15-2Tim.3.16",
            "1John.1.3-1John.1.4",
          ],
          objectorNote:
            "Salmo 119:105 y Gálatas 1:8: Fórmula de Concordia. De 2 Timoteo 3:16 a 2 Timoteo 3:15-16: Catecismo Mayor de Westminster 3. 2 Timoteo 3:16, Efesios 2:20 y 1 Juan 1:3-4: Catecismo Menor 2. Las repeticiones entre textos se muestran una vez. Judas 3 y 2 Pedro 1:20-21 (Asambleas de Dios, 2015) salieron con su texto el 2026-10-21.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-2",
        layer: "official",
        short: "La suficiencia de la Escritura",
        title:
          "La Escritura basta: todo lo necesario para la fe y la salvación está escrito, y nada se le ha de añadir por tradiciones de hombres",
        synthesis:
          "Dios quiso poner por escrito toda su voluntad para conservarla sin corrupción, y los modos anteriores de revelarse ya cesaron. Todo lo necesario para la fe y la salvación está dicho en la Escritura o se deduce de ella «por buena y necesaria consecuencia»; la Escritura hace que «el hombre de Dios sea perfecto, enteramente instruído para toda buena obra» {v:2Tim.3.17}. Por eso no se le debe añadir nada, ni por nuevas revelaciones ni por tradiciones humanas; aunque la comprensión salvadora de lo revelado necesita «la iluminacion interna del Espíritu de Dios», y las circunstancias del culto y del gobierno de la iglesia se ordenan «conforme á la luz de la naturaleza y la prudencia cristiana», guardando las reglas generales de la palabra.",
        raisedBy: {
          traditions: ["reformed"],
          line: "Suelen plantearla reformados.",
        },
        objectorTexts: {
          shown: ["WCF16"],
          more: ["WCF11"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, la revelación pública está completa en Cristo: el Concilio enseña que «no hay que esperar ya ninguna revelación pública antes de la gloriosa manifestación de nuestro Señor Jesucristo» {c:DV4|Dei Verbum 4}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, lo recibido de Cristo se transmitió desde el principio por dos caminos. El Catecismo dice: «La transmisión del Evangelio, según el mandato del Señor, se hizo de dos maneras: — oralmente: 'los Apóstoles, con su predicación, sus ejemplos, sus instituciones, transmitieron de palabra lo que habían aprendido de las obras y palabras de Cristo y lo que el Espíritu Santo les enseñó'; — por escrito: 'los mismos Apóstoles y los varones apostólicos pusieron por escrito el mensaje de la salvación inspirados por el Espíritu Santo'» {c:CEC76,DV7|Catecismo 76, citando Dei Verbum 7}. El Concilio dice que los mismos apóstoles «amonestan a los fieles que conserven las tradiciones que han aprendido o de palabra o por escrito» {c:DV8|Dei Verbum 8}. Y el Catecismo recuerda que «la primera generación de cristianos no tenía aún un Nuevo Testamento escrito, y el Nuevo Testamento mismo atestigua el proceso de la Tradición viva» {c:CEC83|Catecismo 83}.",
          },
          {
            type: "p",
            text: "El Concilio cita {v:2Tim.3.16-2Tim.3.17} con estas palabras: «toda la Escritura es divinamente inspirada y útil para enseñar, para argüir, para corregir, para educar en la justicia, a fin de que el hombre de Dios sea perfecto y equipado para toda obra buena» {c:DV11|Dei Verbum 11}. Y enseña que «lo que enseñaron los Apóstoles encierra todo lo necesario para que el Pueblo de Dios viva santamente y aumente su fe, y de esta forma la Iglesia, en su doctrina, en su vida y en su culto perpetúa y transmite a todas las generaciones todo lo que ella es, todo lo que cree» {c:DV8|Dei Verbum 8}. Dei Verbum 9 dice también: «la Iglesia no deriva solamente de la Sagrada Escritura su certeza acerca de todas las verdades reveladas» {c:DV9|Dei Verbum 9}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la Tradición apostólica no es una tradición de hombres: «la Sagrada Tradición transmite íntegramente a los sucesores de los Apóstoles la palabra de Dios, a ellos confiada por Cristo Señor y por el Espíritu Santo» {c:DV9|Dei Verbum 9}. El Catecismo dice que de ella «es preciso distinguir» las «tradiciones» «teológicas, disciplinares, litúrgicas o devocionales nacidas en el transcurso del tiempo en las Iglesias locales», y que «sólo a la luz de la gran Tradición aquéllas pueden ser mantenidas, modificadas o también abandonadas bajo la guía del Magisterio de la Iglesia» {c:CEC83|Catecismo 83}.",
          },
          {
            type: "p",
            text: "Trento, sesión IV, enseña que «esta verdad y disciplina están contenidas en los libros escritos, y en las tradiciones no escritas, que recibidas de boca del mismo Cristo por los Apóstoles, ó enseñadas por los mismos Apóstoles inspirados por el Espíritu Santo, han llegado como de mano en mano hasta nosotros», y concluye: «Si alguno […] despreciáre á sabiendas y con ánimo deliberado las mencionadas tradiciones; sea excomulgado» {c:T4dec,T4anat|Trento, ses. IV, decreto sobre las Escrituras canónicas}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["T4dec", "T4anat"],
            name: "Concilio de Trento, ses. IV, decreto sobre las Escrituras canónicas",
            dates: [],
          },
          {
            citations: ["DV4", "DV7", "DV8", "DV9", "DV11"],
            name: "Concilio Vaticano II, Dei Verbum 4, 7, 8, 9, 11",
            dates: [
              {
                year: 1965,
                month: 11,
                day: 18,
              },
            ],
          },
          {
            citations: ["CEC76", "CEC83"],
            name: "Catecismo de la Iglesia Católica 76, 83",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
        ],
        passages: {
          answer: ["2Thess.2.15", "2Tim.3.16-2Tim.3.17"],
          objector: [
            "2Tim.3.15-2Tim.3.17",
            "Gal.1.8-Gal.1.9",
            "2Thess.2.2",
            "Heb.1.1-Heb.1.2",
            "Prov.22.19-Prov.22.21",
            "Luke.1.3-Luke.1.4",
            "Rom.15.4",
            "Matt.4.4",
            "Matt.4.7",
            "Matt.4.10",
            "Isa.8.19-Isa.8.20",
            "2Pet.1.19",
            "John.6.45",
            "1Cor.2.9-1Cor.2.12",
            "1Cor.11.13-1Cor.11.14",
            "1Cor.14.26",
            "1Cor.14.40",
          ],
          objectorNote:
            "Textos de prueba de Westminster 1.1 y 1.6; la ficha de 1.1 imprime además Romanos 2:14-15; 1:19-20, 32; Salmo 19:1-3; Romanos 2:1; 1 Corintios 1:21; 2:13-14; Hebreos 1:1.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-3",
        layer: "official",
        short: "Las tradiciones de los hombres",
        title:
          "«En vano me honran, enseñando como doctrinas, mandamientos de hombres»: las tradiciones humanas no obligan la conciencia",
        synthesis:
          "Cristo reprochó a los fariseos honrar a Dios con «mandamientos de hombres» {v:Matt.15.9}. Las tradiciones humanas no obligan la conciencia como si fueran necesarias para la salvación. Los luteranos admiten los ritos que sirven al buen orden en la Iglesia, pero enseñan que quien enseña que con ellos se merece la gracia oscurece el Evangelio, y que no es pecado mortal quebrantar tales ordenanzas; los reformados, que «solo Dios es el Señor de la conciencia» {c:WCF202|Westminster 20.2}.",
        raisedBy: {
          traditions: ["lutheran", "reformed"],
          line: "Suelen plantearla luteranos y reformados.",
        },
        objectorTexts: {
          shown: ["AC15"],
          more: ["AC28_34", "SA315", "STLUT~s", "WCF202"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, la Tradición que se recibe como palabra de Dios «es la que viene de los apóstoles y transmite lo que éstos recibieron de las enseñanzas y del ejemplo de Jesús y lo que aprendieron por el Espíritu Santo». El Catecismo dice que de ella «es preciso distinguir» las «tradiciones» «teológicas, disciplinares, litúrgicas o devocionales nacidas en el transcurso del tiempo en las Iglesias locales», y que «sólo a la luz de la gran Tradición aquéllas pueden ser mantenidas, modificadas o también abandonadas bajo la guía del Magisterio de la Iglesia» {c:CEC83|Catecismo 83}.",
          },
          {
            type: "p",
            text: "Trento recibe con igual afecto de piedad y reverencia que los libros sagrados «las mencionadas tradiciones pertenecientes á la fe y á las costumbres, como que fueron dictadas verbalmente por Jesu-Cristo, ó por el Espíritu Santo, y conservadas perpetuamente sin interrupcion en la iglesia Católica» {c:T4dec|Trento, ses. IV}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la gracia de la justificación no se merece: Trento enseña que somos justificados gratuitamente «en quanto ninguna de las cosas que preceden á la justificacion, sea la fe, ó sean las obras, merecen la gracia de la justificacion: porque si es gracia, ya no proviene de las obras: de otro modo, como dice el Apostol: la gracia no seria gracia» {c:T6c8|Trento, ses. VI, cap. 8}.",
          },
          {
            type: "p",
            text: "Sobre sus propios mandamientos, el Catecismo dice: «Los mandamientos de la Iglesia se sitúan en la línea de una vida moral referida a la vida litúrgica y que se alimenta de ella. El carácter obligatorio de estas leyes positivas promulgadas por la autoridad eclesiástica tiene por fin garantizar a los fieles el mínimo indispensable en el espíritu de oración y en el esfuerzo moral, en el crecimiento del amor de Dios y del prójimo» {c:CEC2041|Catecismo 2041}. Sobre la participación en la Eucaristía de los días de precepto, el Catecismo dice: «los fieles están obligados a participar en la Eucaristía los días de precepto, a no ser que estén excusados por una razón seria (por ejemplo, enfermedad, el cuidado de niños pequeños) o dispensados por su pastor propio (cf CIC can. 1245). Los que deliberadamente faltan a esta obligación cometen un pecado grave» {c:CEC2181|Catecismo 2181}.",
          },
          {
            type: "quote",
            text: [
              "Si alguno dixere, que el hombre justificado, por perfecto que sea, no está obligado á observar los mandamientos de Dios y de la Iglesia, sino solo á creer; como si el Evangelio fuese una mera y absoluta promesa de la salvacion eterna sin la condicion de guardar los mandamientos; sea excomulgado.",
            ],
            attribution: "{c:T6c20|Trento, sesión VI, canon 20}",
          },
        ],
        sourcesCited: [
          {
            citations: ["CEC83", "CEC2041", "CEC2181"],
            name: "Catecismo de la Iglesia Católica 83, 2041, 2181",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["T4dec", "T6c8", "T6c20"],
            name: "Concilio de Trento, ses. IV y ses. VI, cap. 8 y can. 20",
            dates: [],
          },
        ],
        passages: {
          answer: [],
          objector: [
            "Matt.15.13-Matt.15.14",
            "Acts.15.10",
            "2Cor.13.10",
            "Col.2.16-Col.2.23",
            "Titus.1.14",
            "Matt.15.9",
          ],
          objectorNote:
            "De Mateo 15:13-14 a Tito 1:14: Confesión de Augsburgo XXVIII; Mateo 15:9 y Tito 1:14: Artículos de Esmalcalda III.15. Los textos de prueba de Westminster 20.2 no se leyeron (verificador D7c). 1 Timoteo 4:1-3 salió de esta línea con la Apología XV el 2026-10-21.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-4",
        layer: "official",
        short: "Quién da autoridad a la Escritura",
        title: "La autoridad de la Escritura no depende del testimonio de ningún hombre ni de ninguna Iglesia",
        synthesis:
          "La Escritura tiene autoridad porque es palabra de Dios, no porque la Iglesia la apruebe. El testimonio de la Iglesia puede movernos a estimarla, pero la certeza de que es palabra de Dios viene de la obra interior del Espíritu Santo, que da testimonio por la Palabra en nuestros corazones. Si la autoridad de la Escritura dependiera de la Iglesia, la Iglesia estaría por encima de la Palabra.",
        raisedBy: {
          traditions: ["reformed"],
          line: "Suelen plantearla reformados.",
        },
        objectorTexts: {
          shown: ["WCF14"],
          more: ["WCF15", "WLC4"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, la Escritura tiene autoridad porque viene de Dios: el Catecismo dice «Dios es el autor de la Sagrada Escritura», y cita al Concilio: «La santa madre Iglesia, según la fe de los Apóstoles, reconoce que todos los libros del Antiguo y del Nuevo Testamento, con todas sus partes, son sagrados y canónicos, en cuanto que, escritos por inspiración del Espíritu Santo, tienen a Dios como autor, y como tales han sido confiados a la Iglesia» {c:CEC105,DV11|Catecismo 105, citando Dei Verbum 11}.",
          },
          {
            type: "p",
            text: "El Concilio enseña también que para creer «es necesaria la gracia de Dios, que proviene y ayuda, a [sic] los auxilios internos del Espíritu Santo, el cual mueve el corazón y lo convierte a Dios, abre los ojos de la mente y da 'a todos la suavidad en el aceptar y creer la verdad'» {c:DV5|Dei Verbum 5}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la Tradición es la que da a conocer qué libros son Escritura: «La Tradición apostólica hizo discernir a la Iglesia qué escritos constituyen la lista de los Libros Santos» {c:CEC120|Catecismo 120}, y «por esta Tradición conoce la Iglesia el Canon íntegro de los libros sagrados» {c:DV8|Dei Verbum 8}. El Catecismo, al hablar del juicio de la Iglesia sobre la Escritura, cita a san Agustín (_Réplica a la carta de Manes llamada «del fundamento»_, 396): «No creería en el Evangelio, si no me moviera a ello la autoridad de la Iglesia católica» {c:CEC119|Catecismo 119}.",
          },
          {
            type: "p",
            text: "El Concilio Vaticano I enseña que la Iglesia tiene los libros por sagrados y canónicos «no porque, compuestos por solo ingenio humano, hayan sido después aprobados por su autoridad; ni solamente porque contengan la revelación sin error; sino porque, escritos por inspiración del Espíritu Santo, tienen a Dios por autor, y como tales han sido entregados a la Iglesia» {c:DF2can|Dei Filius, cap. 2; traducción asistida por IA desde el latín, sin revisar por Pedro}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["DF2can"],
            name: "Concilio Vaticano I, Dei Filius, cap. 2",
            dates: [
              {
                year: 1870,
                month: 4,
                day: 24,
              },
            ],
          },
          {
            citations: ["DV5", "DV8"],
            name: "Concilio Vaticano II, Dei Verbum 5, 8",
            dates: [
              {
                year: 1965,
                month: 11,
                day: 18,
              },
            ],
          },
          {
            citations: ["CEC105", "CEC119", "CEC120"],
            name: "Catecismo de la Iglesia Católica 105, 119, 120 (san Agustín, Contra epistulam Manichaei quam vocant fundamenti 5, 6, como lo imprime el Catecismo)",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: [
            "2Pet.1.19",
            "2Pet.1.21",
            "2Tim.3.16",
            "1John.5.9",
            "1Thess.2.13",
            "1Tim.3.15",
            "1John.2.20",
            "1John.2.27",
            "John.16.13-John.16.14",
            "1Cor.2.10-1Cor.2.12",
            "Isa.59.21",
            "Hos.8.12",
            "1Cor.2.6-1Cor.2.7",
            "1Cor.2.13",
            "Ps.119.18",
            "Ps.119.129",
            "Ps.12.6",
            "Ps.119.140",
            "Acts.10.43",
            "Acts.26.22",
            "Rom.3.19",
            "Rom.3.27",
            "Acts.18.28",
            "Heb.4.12",
            "Jas.1.18",
            "Ps.19.7-Ps.19.9",
            "Rom.15.4",
            "Acts.20.32",
            "John.20.31",
          ],
          objectorNote:
            "Hasta Isaías 59:21: Westminster 1.4–1.5; desde Oseas 8:12: Catecismo Mayor de Westminster 4 (que repite Juan 16:13-14 y 1 Juan 2:20, 27). Las repeticiones se muestran una vez.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-5",
        layer: "official",
        short: "La Escritura se interpreta a sí misma",
        title:
          "La Escritura se interpreta a sí misma; su juez supremo es el Espíritu que habla en ella, y los concilios y los obispos pueden errar",
        synthesis:
          "La regla infalible para interpretar la Escritura es la Escritura misma, y el juez supremo de toda controversia es el Espíritu Santo que habla en ella. Los sínodos y concilios deciden «ministerialmente» las controversias, y sus decretos, «cuando concuerden con la palabra de Dios, deben recibirse con reverencia y sumision»; y las iglesias deben obedecer a los obispos que enseñan conforme al Evangelio. Pero todos los concilios pueden errar y muchos han errado; por eso no son la regla de la fe sino una ayuda, los fieles examinan lo que se enseña, como los de Berea, que recibieron la palabra «escudriñando cada día las Escrituras, si estas cosas eran así» {v:Acts.17.11}, y no se obedece a los obispos si enseñan contra el Evangelio.",
        raisedBy: {
          traditions: ["lutheran", "reformed", "baptist"],
          line: "Suelen plantearla reformados, luteranos y bautistas.",
        },
        objectorTexts: {
          shown: ["WCF19", "WCF110"],
          more: ["WCF313", "WCF314", "AC28_21", "BFMpre2000"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, cada pasaje se lee a la luz de toda la Escritura: el Concilio enseña que la Escritura «hay que leerla e interpretarla con el mismo Espíritu con que se escribió», y que por eso «hay que atender no menos diligentemente al contenido y a la unidad de toda la Sagrada Escritura, teniendo en cuanta [sic] la Tradición viva de toda la Iglesia y la analogía de la fe» {c:DV12|Dei Verbum 12}. El Catecismo explica el segundo de esos criterios: «la Iglesia encierra en su Tradición la memoria viva de la Palabra de Dios, y el Espíritu Santo le da la interpretación espiritual de la Escritura» {c:CEC113|Catecismo 113}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, «el oficio de interpretar auténticamente la palabra de Dios escrita o transmitida ha sido confiado únicamente al Magisterio vivo de la Iglesia» {c:DV10|Dei Verbum 10}, «es decir, a los obispos en comunión con el sucesor de Pedro, el obispo de Roma» {c:CEC85|Catecismo 85}. El Catecismo dice que los fieles, «recordando la palabra de Cristo a sus Apóstoles: 'El que a vosotros escucha a mí me escucha' (Lc 10,16; cf. LG 20), reciben con docilidad las enseñanzas y directrices que sus pastores les dan de diferentes formas» {c:CEC87|Catecismo 87}.",
          },
          {
            type: "p",
            text: "El Concilio dice también que «este Magisterio, evidentemente, no está sobre la palabra de Dios, sino que la sirve, enseñando solamente lo que le ha sido confiado» {c:DV10|Dei Verbum 10}. Y el Catecismo enseña, con el Concilio, que «la totalidad de los fieles [...] no puede equivocarse en la fe», cuando «desde los obispos hasta el último de los laicos cristianos» muestran «su consentimiento en cuestiones de fe y de moral» {c:CEC92,LG12|Catecismo 92, citando Lumen gentium 12}.",
          },
          {
            type: "p",
            text: "Sobre los concilios, el Concilio Vaticano II enseña que, aunque «cada uno de los Prelados no goce por si de la prerrogativa de la infalibilidad», los obispos, «reunidos en concilio ecuménico, son para la Iglesia universal los maestros y jueces de la fe y costumbres, a cuyas definiciones hay que adherirse con la sumisión de la fe», y que esa infalibilidad «se extiende tanto cuanto abarca el depósito de la Revelación, que debe ser custodiado santamente y expresado con fidelidad» {c:LG25|Lumen gentium 25}. El Código de Derecho Canónico fija el límite: «Ninguna doctrina se considera definida infaliblemente si no consta así de modo manifiesto» {c:CIC749|can. 749 § 3}.",
          },
          {
            type: "p",
            text: "Sobre la fe y la conciencia, el Concilio enseña «que el hombre, al creer, debe responder voluntariamente a Dios, y que, por tanto, nadie debe ser forzado a abrazar la fe contra su voluntad» {c:DH10|Dignitatis humanae 10}.",
          },
          {
            type: "quote",
            text: [
              "Decreta ademas, con el fin de contener los ingenios insolentes, que ningnno [sic] fiado en su propia sabiduria, se atreva á interpretar la misma sagrada Escritura en cosas pertenecientes á la fe, ó á las costumbres que miran á la propagacion de la doctrina cristiana, violentando la sagrada Escritura para apoyar sus dictámenes, contra el sentido que le ha dado y dá la santa madre Iglesia, á la que privativamente toca determinar el verdadero sentido, é interpretacion de las sagradas letras; ni tampoco contra el unánime consentimiento de los santos PP. […]",
            ],
            attribution:
              "{c:T4use|Trento, sesión IV, decreto sobre la edición y el uso de los libros sagrados} (renovado por el Vaticano I, {c:DF2int|Dei Filius, cap. 2})",
          },
        ],
        sourcesCited: [
          {
            citations: ["T4use"],
            name: "Concilio de Trento, ses. IV, decreto sobre la edición y el uso de los libros sagrados",
            dates: [],
          },
          {
            citations: ["DF2int"],
            name: "Concilio Vaticano I, Dei Filius, cap. 2",
            dates: [
              {
                year: 1870,
                month: 4,
                day: 24,
              },
            ],
          },
          {
            citations: ["DV10", "DV12"],
            name: "Concilio Vaticano II, Dei Verbum 10, 12",
            dates: [
              {
                year: 1965,
                month: 11,
                day: 18,
              },
            ],
          },
          {
            citations: ["LG25"],
            name: "Concilio Vaticano II, Lumen gentium 25",
            dates: [
              {
                year: 1964,
                month: 11,
                day: 21,
              },
            ],
          },
          {
            citations: ["DH10"],
            name: "Concilio Vaticano II, Dignitatis humanae 10",
            dates: [
              {
                year: 1965,
                month: 12,
                day: 7,
              },
            ],
          },
          {
            citations: ["CEC85", "CEC87", "CEC92", "LG12", "CEC113"],
            name: "Catecismo de la Iglesia Católica 85, 87, 92 (Lumen gentium 12), 113",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["CIC749"],
            name: "Código de Derecho Canónico, can. 749 § 3",
            dates: [
              {
                year: 1983,
              },
            ],
          },
        ],
        passages: {
          answer: ["Luke.10.16"],
          objector: [
            "2Pet.1.20-2Pet.1.21",
            "Acts.15.15-Acts.15.16",
            "Matt.22.29",
            "Matt.22.31",
            "Eph.2.20",
            "Acts.28.25",
            "Acts.15.15",
            "Acts.15.19",
            "Acts.15.24",
            "Acts.15.27-Acts.15.31",
            "Acts.16.4",
            "Matt.18.17-Matt.18.20",
            "Acts.17.11",
            "1Cor.2.5",
            "2Cor.1.24",
            "Luke.10.16",
            "Matt.7.15",
            "Gal.1.8",
            "2Cor.13.8",
          ],
          objectorNote:
            "2 Pedro 1:20-21 y Hechos 15:15-16: Westminster 1.9; Mateo 22:29, 31, Efesios 2:20 y Hechos 28:25: 1.10; Hechos 15:15, 19, 24, 27-31, Hechos 16:4 y Mateo 18:17-20: 31.3; Hechos 17:11, 1 Corintios 2:5 y 2 Corintios 1:24 (con Efesios 2:20): 31.4; de Lucas 10:16 a 2 Corintios 13:8: Confesión de Augsburgo XXVIII. Los de Westminster 1.7 (2 Pedro 3:16; Salmo 119:105, 130) salieron con su texto el 2026-10-21.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-6",
        layer: "official",
        short: "Los libros apócrifos",
        title: "Los libros llamados apócrifos no son Escritura",
        synthesis:
          "Los libros llamados apócrifos no son de inspiración divina, no forman parte del canon de la Escritura y no tienen autoridad en la Iglesia de Dios: se usan como cualquier otro escrito humano. La Confesión imprime como textos de prueba Lucas 24:27, 44; Romanos 3:2 y 2 Pedro 1:21.",
        raisedBy: {
          traditions: ["reformed"],
          line: "Suelen plantearla reformados.",
        },
        objectorTexts: {
          shown: ["WCF13"],
          more: ["WCF12"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, el canon se conoce por la Tradición: «La Tradición apostólica hizo discernir a la Iglesia qué escritos constituyen la lista de los Libros Santos» {c:CEC120|Catecismo 120}, y «por esta Tradición conoce la Iglesia el Canon íntegro de los libros sagrados» {c:DV8|Dei Verbum 8}.",
          },
          {
            type: "p",
            text: "El Catecismo dice que esa lista «comprende para el Antiguo Testamento 46 escritos (45 si se cuentan Jr y Lm como uno solo), y 27 para el Nuevo», y la da por nombre, entre ellos «Tobías, Judit, Ester, los dos libros de los Macabeos», «la Sabiduría, el Eclesiástico» y «Baruc», remitiendo al llamado Decreto de Dámaso, al Concilio de Florencia (1442) y al de Trento {c:CEC120|Catecismo 120}. El Catecismo añade: «El Antiguo Testamento es una parte de la sagrada Escritura de la que no se puede prescindir. Sus libros son divinamente inspirados y conservan un valor permanente» {c:CEC121|Catecismo 121}.",
          },
          {
            type: "p",
            text: "El Concilio Vaticano II recuerda que la Iglesia «ya desde sus principios, tomó como suya la antiquísima versión griega del Antiguo Testamento, llamada de los Setenta» {c:DV22|Dei Verbum 22}.",
          },
          {
            type: "p",
            text: "El Concilio Vaticano I enseña: «Si alguno no recibe como sagrados y canónicos los libros de la sagrada Escritura, íntegros con todas sus partes, tal como los enumeró el santo Sínodo de Trento, o niega que hayan sido divinamente inspirados, sea anatema» {c:DFcII4|Dei Filius, can. II.4; traducción asistida por IA desde el latín, sin revisar por Pedro}.",
          },
          {
            type: "quote",
            text: [
              "Si alguno pues no reconociere por sagrados, y canónicos estos libros, enteros, con todas sus partes, como ha sido costumbre leerlos en la Iglesia Católica, y se hallan en la antigua version latina llamada Vulgata; y despreciáre á sabiendas y con ánimo deliberado las mencionadas tradiciones; sea excomulgado.",
            ],
            attribution: "{c:T4anat|Trento, sesión IV}",
          },
        ],
        sourcesCited: [
          {
            citations: ["T4list", "T4anat"],
            name: "Concilio de Trento, ses. IV",
            dates: [],
          },
          {
            citations: ["DFcII4"],
            name: "Concilio Vaticano I, Dei Filius, can. II.4",
            dates: [
              {
                year: 1870,
                month: 4,
                day: 24,
              },
            ],
          },
          {
            citations: ["DV8", "DV22"],
            name: "Concilio Vaticano II, Dei Verbum 8, 22",
            dates: [
              {
                year: 1965,
                month: 11,
                day: 18,
              },
            ],
          },
          {
            citations: ["CEC120", "CEC121"],
            name: "Catecismo de la Iglesia Católica 120, 121",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: [
            "Luke.16.29",
            "Luke.16.31",
            "Eph.2.20",
            "Rev.22.18-Rev.22.19",
            "2Tim.3.16",
            "Luke.24.27",
            "Luke.24.44",
            "Rom.3.2",
            "2Pet.1.21",
          ],
          objectorNote: "Los cuatro primeros: Westminster 1.2; los demás: 1.3.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-7",
        layer: "official",
        short: "El texto auténtico y la traducción",
        title: "El texto auténtico es el hebreo y el griego, y la Escritura debe traducirse a la lengua de cada pueblo",
        synthesis:
          "Lo que Dios inspiró directamente fue el Antiguo Testamento en hebreo y el Nuevo en griego; por eso solo esos textos son «auténticos», y a ellos se debe apelar en toda controversia, no a una traducción. Y como todo el pueblo de Dios tiene derecho a las Escrituras y el mandato de leerlas, deben traducirse a la lengua de cada nación.",
        raisedBy: {
          traditions: ["reformed"],
          line: "Suelen plantearla reformados.",
        },
        objectorTexts: {
          shown: ["WCF18"],
          more: [],
        },
        answer: [
          {
            type: "p",
            text: "Pío XII explicó el alcance del decreto de Trento sobre la Vulgata: «solamente se refiere a la Iglesia latina y al uso público de la misma Escritura, y no disminuye, sin género de duda, en modo alguno, la autoridad y valor de los textos originales», y esa autenticidad «no se llama con nombre primario crítica, sino más bien jurídica» {c:DAS|Divino afflante Spiritu}. Da también la razón del decreto: el largo uso de la Vulgata en las iglesias demuestra «que la misma está en absoluto inmune de todo error en materia de fe y costumbres», y su autoridad «de ninguna manera prohíbe —antes por el contrario, hoy más bien exige— que esta misma doctrina se compruebe y confirme por los textos primitivos». El mismo documento dice que el decreto de Trento no prohíbe «que, para uso y provecho de los fieles de Cristo […] se hagan versiones en las lenguas vulgares, y eso aun tomándolas de los textos originales».",
          },
          {
            type: "p",
            text: "El Concilio Vaticano II dice que «es conveniente que los cristianos tengan amplio acceso ala [sic] Sagrada Escritura» y que la Iglesia procura «que se redacten traducciones aptas y fieles en varias lenguas, sobre todo de los textos primitivos de los sagrados libros», incluso «con la colaboración de los hermanos separados» {c:DV22|Dei Verbum 22}; y exhorta «a todos los cristianos» a la «lectura frecuente de las divinas Escrituras» {c:DV25|Dei Verbum 25}. El Código de Derecho Canónico pide que las traducciones a la lengua vernácula estén aprobadas y «vayan acompañadas de las notas aclaratorias necesarias y suficientes» {c:CIC825|can. 825 § 1}.",
          },
          {
            type: "quote",
            text: [
              "Considerando ademas de esto el mismo sacrosanto Concilio, que se podrá seguir mucha utilidad á la Iglesia de Dios, si se declara qué edicion de la sagrada Escritura se ha de tener por autentica entre todas las ediciones latinas que corren; establece y declara, que se tenga por tal en las lecciones públicas, disputas, sermones y exposiciones, esta misma antigua edicion Vulgata, aprobada en la Iglesia por el largo uso de tantos siglos; y que ninguno, por ningun pretexto, se atreva ó presuma despreciarla.",
            ],
            attribution: "{c:T4vulg|Trento, sesión IV, decreto sobre la edición y el uso de los libros sagrados}",
          },
        ],
        sourcesCited: [
          {
            citations: ["T4vulg"],
            name: "Concilio de Trento, ses. IV, decreto sobre la edición y el uso de los libros sagrados",
            dates: [],
          },
          {
            citations: ["DAS"],
            name: "Pío XII, Divino afflante Spiritu",
            dates: [
              {
                year: 1943,
                month: 9,
                day: 30,
              },
            ],
          },
          {
            citations: ["DV22", "DV25"],
            name: "Concilio Vaticano II, Dei Verbum 22, 25",
            dates: [
              {
                year: 1965,
                month: 11,
                day: 18,
              },
            ],
          },
          {
            citations: ["CIC825"],
            name: "Código de Derecho Canónico, can. 825",
            dates: [
              {
                year: 1983,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: [
            "Matt.5.18",
            "Isa.8.20",
            "Acts.15.15",
            "John.5.39",
            "John.5.46",
            "1Cor.14.6-1Cor.14.28",
            "Col.3.16",
            "Rom.15.4",
          ],
          objectorNote: "Textos de prueba de Westminster 1.8: la ficha de 1.8 imprime 14:6, 9, 11, 12, 24, 27, 28.",
        },
      },
    ],
  },
  life: {
    intro: [
      "Para la Iglesia católica, la Escritura se recibe sobre todo en la liturgia, donde, enseña el Concilio, Cristo «está presente en su palabra, pues cuando se lee en la Iglesia la Sagrada Escritura, es El quien habla» {c:SC7|Sacrosanctum Concilium 7}. En cada misa se lee la Escritura; en las misas de domingos y fiestas de precepto con concurso del pueblo «debe haber homilía» {c:CIC767|Código de Derecho Canónico, can. 767}; el Concilio pidió que en un período de años se lean al pueblo «las partes más significativas de la Sagrada Escritura» {c:SC51|Sacrosanctum Concilium 51}.",
      "La Iglesia exhorta además a todos los fieles a la «lectura frecuente de las divinas Escrituras» {c:DV25|Dei Verbum 25}, acompañada de oración, y quiere que la catequesis y la predicación se funden en la Escritura, la Tradición, la liturgia y el Magisterio {c:CIC760|can. 760}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Liturgia de la Palabra",
        text: "En la liturgia «la importancia de la Sagrada Escritura es sumamente grande»: de ella se toman las lecturas, los salmos, y de ella están «penetrados» las oraciones e himnos {c:SC24|Sacrosanctum Concilium 24}. Para la Iglesia, Cristo «está presente en su palabra» cuando se lee {c:SC7|Sacrosanctum Concilium 7}.",
        sources: [],
      },
      {
        id: "CV-2",
        label: "Más Escritura en la misa",
        text: "El Concilio pidió que «se lean al pueblo las partes más significativas de la Sagrada Escritura» en un período determinado de años, y una lectura «más abundante, más variada y más apropiada» en las celebraciones {c:SC51,SC35|Sacrosanctum Concilium 51, 35}.",
        sources: [],
      },
      {
        id: "CV-3",
        label: "La homilía",
        text: "En la homilía se exponen, «partiendo del texto sagrado, los misterios de la fe y las normas de vida cristiana». En las misas de domingos y fiestas de precepto con concurso del pueblo «debe haber homilía, y no se puede omitir sin causa grave»; la hace un sacerdote o un diácono {c:CIC767|Código de Derecho Canónico, can. 767}.",
        sources: [],
      },
      {
        id: "CV-4",
        label: "Lectura y oración personal",
        text: "La Iglesia «recomienda insistentemente a todos sus fieles […] la lectura asidua de la Escritura», y pide que la acompañe la oración, «pues a Dios hablamos cuando oramos, a Dios escuchamos cuando leemos sus palabras» {c:CEC2653|Catecismo 2653}. Benedicto XVI describe la _lectio divina_ en pasos: lectura, meditación, oración y contemplación {c:VD87|Verbum Domini 87}.",
        sources: [],
      },
      {
        id: "CV-5",
        label: "Biblias con aprobación y notas",
        text: "Los libros de la Escritura solo pueden publicarse si los aprobó la Sede Apostólica o la Conferencia Episcopal; las traducciones a la lengua vernácula necesitan la misma aprobación y deben ir «acompañadas de las notas aclaratorias necesarias y suficientes» {c:CIC825|Código de Derecho Canónico, can. 825 § 1}.",
        sources: [],
      },
      {
        id: "CV-6",
        label: "Catequesis y predicación",
        text: "El ministerio de la palabra «se debe fundar en la sagrada Escritura, en la Tradición, en la liturgia, en el magisterio y en la vida de la Iglesia» {c:CIC760|Código de Derecho Canónico, can. 760}; el estudio de la Escritura «ha de ser como el alma de la Sagrada Teología» {c:DV24|Dei Verbum 24}.",
        sources: [],
      },
      {
        id: "CV-7",
        label: "La profesión de fe",
        text: "Quienes asumen ciertos oficios en la Iglesia profesan, con el Credo: «Creo, también, con fe firme, todo aquello que se contiene en la Palabra de Dios escrita o transmitida por la Tradición, y que la Iglesia propone para ser creído, como divinamente revelado» {c:PF1989|Professio fidei, 1989, primer apartado}.",
        sources: [
          {
            citations: ["CIC833"],
            label: "can. 833",
          },
        ],
      },
      {
        id: "CV-8",
        label: "Escuchar juntos la Escritura",
        text: "Para la Iglesia, «escuchar y meditar juntos las Escrituras nos hace vivir una comunión real, aunque todavía no plena» con los demás cristianos {c:VD46|Verbum Domini 46}; el Concilio llama a las Escrituras «instrumentos preciosos» para la unidad en el diálogo {c:UR21|Unitatis redintegratio 21} y admite traducciones hechas con los hermanos separados {c:DV22|Dei Verbum 22}.",
        sources: [],
      },
      {
        id: "CV-9",
        label: "Veneración del libro",
        text: "La Iglesia «ha venerado siempre las Sagradas Escrituras al igual que el mismo Cuerpo del Señor» {c:DV21|Dei Verbum 21}; el Catecismo dice que el Evangelio ocupa en la Iglesia un lugar único, del que da testimonio «la veneración de que lo rodea la liturgia» {c:CEC127|Catecismo 127}.",
        sources: [],
      },
    ],
  },
  authority: {
    subtitle:
      "Qué significa, para la Iglesia católica, que una enseñanza sea dogma, doctrina definitiva, magisterio auténtico o disciplina.",
    grades: {
      dogma: {
        label: "Dogma",
        sub: "de fe divina y católica",
        definition:
          "Se ha de creer con fe divina y católica todo aquello que se contiene en la palabra de Dios escrita o transmitida por tradición, es decir, en el único depósito de la fe encomendado a la Iglesia, y que además es propuesto como revelado por Dios, ya sea por el magisterio solemne de la Iglesia, ya por su magisterio ordinario y universal",
        source: {
          citations: ["CIC750"],
          label: "Código de Derecho Canónico, can. 750 §1",
        },
      },
      definitive: {
        label: "Doctrina definitiva",
        definition:
          "Se han de aceptar y retener firmemente todas y cada una de las cosas sobre la doctrina de la fe y las costumbres propuestas de modo definitivo por el magisterio de la Iglesia",
        source: {
          citations: ["CIC750"],
          label: "Código de Derecho Canónico, can. 750 §2",
        },
      },
      magisterium: {
        label: "Magisterio auténtico",
        definition: "asentimiento religioso del entendimiento y de la voluntad, sin que llegue a ser de fe",
        source: {
          citations: ["CIC752"],
          label: "Código de Derecho Canónico, can. 752",
        },
      },
      discipline: {
        label: "Disciplina",
        definition:
          "Las decisiones magisteriales en materia de disciplina, aunque no estén garantizadas por el carisma de la infalibilidad, no están desprovistas de la asistencia divina y requieren la adhesión de los fieles.",
        source: {
          citations: ["DVER17"],
          label: "Donum veritatis 17",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
