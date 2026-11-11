import type { TraditionPage } from "@doctrina/core/model/page";
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
              "concilio ecuménico, para {c:DV7|Dei Verbum 7} tal como está redactado. El contenido repite Trento (ses. IV: «fuente de toda verdad conducente á nuestra salvacion, y regla de costumbres») y el Vaticano I ({c:DF2rev|Dei Filius, cap. 2}); la frase de Trento lleva el grado de su decreto",
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
      refs: ["2Thess.2.13-2Thess.2.15"],
      text: "Los apóstoles piden a los fieles «que conserven las tradiciones que han aprendido o de palabra o por escrito»: Dei Verbum lo lee como la orden de conservar lo recibido por las dos vías {c:DV8|Dei Verbum 8}.",
      apologists: {
        arguments: [
          {
            title:
              "Pablo les manda mantener las tradiciones que enseñó «de palabra o por carta». Solo la cita de Akin expone el argumento de que la palabra de Dios viene en forma oral y escrita; Heschmeyer recita el versículo; el resumen de Broussard responde a una objeción (la lectura de White, que lo entiende como un cuerpo cerrado)",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "Sola Scriptura: Trying Something New",
                outlet: "The Jimmy Akin Podcast",
                date: "10 de febrero de 2025",
                locator:
                  "20 párrafos: del párrafo que empieza «So if Protestants want to have a basis for…» al que termina «…And Austin at least partly acknowledges this.»",
                url: "https://www.catholic.com/audio/tjap/sola-scriptura-trying-something-new",
                text: "Entonces, si los protestantes quieren tener una base para estas creencias, necesitarían reconocer la realidad continua y el carácter vinculante de la Tradición apostólica.\n\nLa actitud de la Escritura es distinta\n\nSurge otro problema cuando leemos el contenido de las mismas Escrituras. Y eso es algo que deberíamos hacer. Quiero decir, si vas a proponer un principio de interpretación, al menos debería ser coherente con el contenido del texto para el que lo propones.\n\nPor ejemplo, si propongo que interpretemos la palabra griega artos como “pan” o “alimento”, entonces los pasajes donde esa palabra aparece en la Biblia griega —o al menos la mayoría— deberían tener sentido cuando la interpretamos de esa manera.\n\nAsí que, si debemos sostener que las Escrituras son nuestra guía más confiable de la revelación de Dios en la historia, ¿encontramos que las Escrituras mismas defienden esa actitud?\n\nNo, no la encontramos.\n\nCiertamente no encontramos esa actitud en el Antiguo Testamento. Fue dado en una era de revelación activa, en la que Dios con frecuencia daba nueva revelación, y no hay pasajes que indiquen que las presentaciones escritas de esa revelación tuvieran más autoridad que las orales. Si un profeta te decía algo, era tan confiable como si lo hubiera escrito para ti.\n\nLo mismo ocurre en el Nuevo Testamento. Esta también fue una era de revelación activa, y aunque hay pasajes del Nuevo Testamento que reconocen la autoridad de las presentaciones escritas de la revelación del Antiguo Testamento, no hay pasajes en el Nuevo Testamento que indiquen que las presentaciones escritas de la revelación tengan más autoridad que las orales. En el Nuevo Testamento, las nuevas revelaciones que llegaron por medio de Jesús eran tan autoritativas como cualquier cosa que se hubiera puesto por escrito.\n\nLo importante —tanto en el Antiguo como en el Nuevo Testamento— es que algo es palabra de Dios, y no hay indicio de que la palabra de Dios gane más autoridad por estar escrita. Por lo tanto, no encontramos en ninguna de las dos colecciones de la Escritura pasajes que respalden la sola Escritura tal como Austin la ha definido.\n\nLa Escritura respalda otro sistema\n\nDe hecho, encontramos lo contrario, porque hay pasajes —particularmente en el Nuevo Testamento— que indican que debemos adherirnos a la palabra de Dios sin importar si nos llega de forma oral o escrita. Así, en 2 Tesalonicenses 2:15, san Pablo dice:\n\nAsí que, hermanos, manténganse firmes y conserven las tradiciones que se les enseñaron por nosotros, ya sea de palabra o por carta nuestra (2 Tesalonicenses 2:15).\n\nEncontramos además evidencia de un magisterio divinamente guiado, que resuelve las cuestiones en disputa cuando había opiniones diferentes sobre cómo debía interpretarse la revelación. Así, en Gálatas 2:1-2, Pablo escribe:\n\nLuego, después de catorce años, subí otra vez a Jerusalén con Bernabé, llevando también a Tito conmigo. Subí a causa de una revelación (Gálatas 1:1-2).\n\nPablo luego ofrece su relato del concilio de Jerusalén registrado en Hechos 15, y el hecho de que Pablo subiera a causa de una revelación indica que Dios quiso que el concilio de Jerusalén se celebrara, y por eso dio una revelación que lo dispuso.\n\nEsto implicaba naturalmente que Dios guiaría al concilio, lo cual se confirma por la manera en que quienes estuvieron en él lo consideraron. Así, los padres del concilio escribieron a las iglesias que:\n\nAl Espíritu Santo y a nosotros nos ha parecido bien no imponerles más carga que estos requisitos (Hechos 15:28).\n\nFíjense cómo pusieron al Espíritu Santo en primer lugar. “Al Espíritu Santo y a nosotros nos ha parecido bien.” Entendieron, por lo tanto, que el Espíritu Santo guiaba su concilio y sus resultados, lo que significa un magisterio divinamente guiado.\n\nVemos entonces que los cristianos del Nuevo Testamento usaban un sistema que incorporaba la Escritura, la Tradición apostólica y un magisterio divinamente guiado como autoridades.\n\nY Austin reconoce esto, al menos en parte.",
                original:
                  "So if Protestants want to have a basis for these beliefs, they would need to acknowledge the ongoing reality and binding nature of apostolic Tradition.\n\nScripture’s Attitude Is Different\n\nAnother problem emerges when we read the content of the Scriptures themselves. And that’s something we should do. I mean, if you’re going to propose an interpretive principle, it ought to at least be consistent with the content of the text for which you propose to use it.\n\nFor example, if I propose that we interpret the Greek word artos to mean bread or food, then the passages where that word is used in the Greek Bible—or at least most of them—ought to make sense when we interpret it in that way.\n\nSo if we are supposed to hold that the Scriptures are our most reliable guide to God’s revelation in history, do we find the Scriptures themselves advocating that attitude?\n\nNo, we don’t.\n\nWe certainly don’t find that attitude in the Old Testament. It was given in an age of active revelation in which God was frequently giving new revelation, and there are no passages indicating that written presentations of that revelation were more authoritative than oral presentations of it. If a prophet told you something, it was just as reliable as if he wrote it down for you.\n\nThe same thing is true in the New Testament. This was also an age of active revelation, and while there are New Testament passages that acknowledge the authority of written presentations of Old Testament revelation, there are no passages in the New Testament indicating that written presentations of revelations are more authoritative than oral presentations. In the New Testament, the new revelations that came through Jesus were just as authoritative as anything that had been written down.\n\nWhat’s important—in both the Old and the New Testaments—is that something is God’s word, and there is no indication that God’s word gains more authority by being written down. We thus do not find any passages in either collection of Scripture supporting sola scriptura as Austin has defined it.\n\nScripture Endorses a Different System\n\nIn fact, we find the contrary, because there are passages—particularly in the New Testament—that indicate we should adhere to God’s word regardless of whether it is communicated to us in oral or written form. Thus in 2 Thessalonians 2:15, St. Paul says:\n\nSo then, brothers, stand firm and hold to the traditions that you were taught by us, either by our spoken word or by our letter (2 Thessalonians 2:15).\n\nWe further find evidence of a divinely guided teaching authority or Magisterium to settle disputed questions when there were different opinions on how revelation should be interpreted. Thus in Galatians 2:1-2, Paul writes:\n\nThen after fourteen years I went up again to Jerusalem with Barnabas, taking Titus along with me. I went up because of a revelation (Galatians 1:1-2).\n\nPaul then offers his account of the council of Jerusalem recorded in Acts 15, and the fact Paul went up because of a revelation indicates that God willed that the Jerusalem Council take place, and so he gave a revelation directing that it be held.\n\nThis naturally implied that God would be guiding the council, which is confirmed by how those at the council regarded it. Thus the council fathers wrote to the churches that:\n\nIt has seemed good to the Holy Spirit and to us to lay on you no greater burden than these requirements (Acts 15:28).\n\nNotice how they put the Holy Spirit in the first place. “It has seemed good to the Holy Spirit and to us.” They thus understood the Holy Spirit to be guiding their council and its results, meaning a divinely guided Magisterium.\n\nWe thus see that the Christians in the New Testament were using a system that incorporated Scripture, apostolic Tradition, and a divinely guided Magisterium as authorities.\n\nAnd Austin at least partly acknowledges this.",
                translation: "ai-assisted",
              },
              {
                speaker: "Karlo Broussard",
                work: "Are Catholics STILL Wrong About Paul’s Traditions?",
                outlet: "Dr. Karlo",
                date: "13 de agosto de 2026",
                locator:
                  "1 párrafo: del párrafo que empieza «In this episode, Karlo Broussard examines another one of…» al que termina «…and fails to fit the context of the passage.»",
                url: "https://www.catholic.com/audio/drk/are-catholics-still-wrong-about-pauls-traditions",
                text: "En este episodio, Karlo Broussard examina otro de los argumentos de James White contra la apelación católica a 2 Tesalonicenses 2:15, donde Pablo ordena a los creyentes mantenerse firmes en las tradiciones enseñadas “de palabra o por carta”. Sostengo que la afirmación de White —que esas tradiciones orales eran un cuerpo cerrado y completo de revelación, idéntico a la Escritura— presupone lo que debe demostrar, contradice la creencia de que la revelación continuó hasta la muerte del último apóstol, y no encaja con el contexto del pasaje.",
                original:
                  "In this episode, Karlo Broussard examines another one of James White’s arguments against the Catholic appeal to 2 Thessalonians 2:15, where Paul commands believers to hold fast to traditions taught “by word or by letter.” I argue that White’s claim—that these oral traditions were a closed, completed body of revelation identical to Scripture—begs the question, conflicts with the belief that revelation continued until the death of the last apostle, and fails to fit the context of the passage.",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                work: "7 Bible Verses That DON'T Prove Sola Scriptura",
                outlet: "Shameless Popery",
                date: "19 de diciembre de 2024",
                locator:
                  "4 párrafos: del párrafo que empieza «Because if it wasn’t true, then clearly the author…» al que termina «…falsely purporting to claim to be by St. Paul.»",
                url: "https://www.catholic.com/audio/sp/un-biblical-teachings-vs-sola-scriptura",
                text: "Porque si no fuera verdad, es claro que el autor no estaría enseñando solis scriptura, porque no estaría enseñando una falsedad. Entonces, al pensar en 2 Timoteo 3:16-17, una de dos cosas es verdad. Una: san Pablo afirma que todo lo que necesitamos es la Escritura, y entonces estaría enseñando lo que en ese momento era una falsa enseñanza, solo scriptura, porque sabemos que solo scriptura no era verdad mientras él escribía. O dos: él no está enseñando solo scriptura, y si Pablo no enseña solo scriptura en 2 Timoteo 3:16-17, no tomes ese como el texto principal en el que te apoyas para intentar probar solo scriptura. Bueno, pasemos a lo siguiente. Así que, como digo, sin duda es, con diferencia, el pasaje número uno que veo que los protestantes usan para intentar probar soul. La Escritura y el hecho de que se aferran a un solo pasaje, y un pasaje que no enseña soul.\n\nEl S script, cuando lo lees con cuidado otra vez, debería ser una señal de alarma, pero no es el único pasaje que he visto. Así que vayamos al que probablemente es el segundo más citado y a menudo mal usado. Es Marcos 7:8-9, cuando Jesús reprende a los fariseos por poner sus tradiciones por encima del mandamiento de Dios. Ahora, el error aquí creo que es tan obvio que ni siquiera voy a dar una refutación extensa, porque creo que es muy simple. Jesús habla claramente de la tradición de los hombres, de la tradición humana, y la llama tu tradición; pero la afirmación católica no es que todas las tradiciones sean buenas, ni que la tradición humana esté al mismo nivel que los mandamientos de Dios o al mismo nivel que la Escritura. La afirmación católica es más bien que hay tradiciones que no son humanas, que no tienen origen humano sino divino, y puedes pensarlo de una manera muy simple.\n\nEn 2 Tesalonicenses, capítulo 2, san Pablo advierte a los tesalonicenses que no crean las falsas enseñanzas que circulan tanto de palabra como por carta, por una epístola que pretende venir de nosotros. Sería incorrecto decir que, bueno, como Pablo menosprecia algunas epístolas, entonces todas las epístolas son malas. Esa sería una conclusión claramente falsa. No se puede pasar de “hay algunas malas tradiciones” a “todas las tradiciones son malas”, ni siquiera a “todas las tradiciones están por debajo de la Escritura”. Del mismo modo, no se puede pasar de “algunas epístolas son malas” a “por lo tanto todas las epístolas son malas”. No se sigue lógicamente. En cambio, san Pablo recuerda a los tesalonicenses —y volveremos a este pasaje más adelante— que se mantengan firmes y conserven las tradiciones que se les enseñaron por nosotros, ya sea de palabra o por epístola. Así que, si ayuda, puedes pensarlo así: cuando el texto bíblico se refiere a otros textos como escrituras, la palabra que se usa allí significa literalmente simplemente escritos.\n\nEso es lo que significa escritura. Nosotros usamos la palabra escritura para decir escrito sagrado. El Nuevo Testamento no lo hace; simplemente usa una palabra que genéricamente significa escritos, claramente. No todos los escritos son sagrados. Están los escritos sagrados, que son los que san Pablo menciona en 2 Timoteo, capítulo 3, pero también hay escritos humanos. Algunos son buenos. Piensa en todas las grandes obras teológicas que te gustan y que pueden ayudarte en tu vida espiritual. Piensa en libros no religiosos que siguen siendo buenos para cualquier cantidad de otros propósitos. No estamos menospreciando otros escritos. Así que esos están en una especie de nivel intermedio. Son buenos escritos humanos. No están al mismo nivel que la Escritura, pero son buenos. Y por debajo de eso, está lo perverso. Es como las falsas enseñanzas que circulan, que falsamente pretenden ser de san Pablo.",
                original:
                  "Because if it wasn’t true, then clearly the author isn’t teaching solis scriptura because they wouldn’t be teaching a false teaching. So as you’re thinking about two Timothy three 16 to 17, either one of two things is true. Either one St. Paul is claiming all we need is scripture. Therefore he’s teaching what was then a false teaching solo scriptura because we know solo scriptura wasn’t true While he’s writing or second he’s not teaching solo scriptura, and if Paul isn’t teaching solo scriptura in two Timothy three 16 to 17, don’t have that be the primary text you lean on to try to prove solo scriptura. Okay, let’s move on. So that as I say, is without a doubt far and away the number one passage I see Protestants rely on to try to prove soul. The scripture and the fact that they’re looking to one passage and a passage that doesn’t teach soul.\n\nThe S script when you actually carefully read it again should be a red flag, but it’s not the only passage I’ve seen. So let’s turn to the one that is probably the second most often cited and often misused one. This is Mark chapter seven, verses eight to nine when Jesus rebukes the Pharisees for elevating their traditions over the commandment of God. Now the error here I think is so obvious that I’m not even going to give you a lengthy kind of takedown because I think it is very simple. Jesus is clearly speaking of the tradition of men or manmade tradition and refers to it as your tradition, but the Catholic claim is not that all traditions are good, nor is it that manmade tradition is on the same level as God’s commands or on the same level as scripture. The Catholic claim is instead that there are traditions which aren’t manmade, that they’re not of human origin, they’re of divine origin, and you can think about this in a really simple way.\n\nIn Second Thessalonians chapter two, St. Paul warns the Thessalonians not to believe false teachings which are being circulated both by word or by letter, by epistle purporting to be from us. It would be wrong to say that, okay, well because Paul is demean some epistles, therefore all epistles are bad. That would be very clearly a false conclusion to draw from them. You can’t go from, there are some bad traditions to all traditions are bad or even all traditions are below scripture. Likewise, you can’t go from some epistles are bad to therefore all epistles are bad. It doesn’t fall logically. Instead, St. Paul reminds the Thessalonians, and we’re going to get back to this passage later, but he reminds them in Second Thessalonians to stand firm and hold to the traditions which you were taught by us either by word of mouth or by epistle. So if it helps, you can think about it like this when the biblical text refer to other texts as scriptures, the word being used there literally just means writing.\n\nThat’s what scripture means. We use the word scripture to mean like sacred writing. The New Testament doesn’t, it just uses a word that generically means writings clearly. Not all writings are sacred. You have the sacred writings. These are the ones St. Paul’s talked about in a second Timothy chapter three, but you’ve also got manmade writing. These are, some of them are good. Think that all the great theological works that you like that may help you in your spiritual life. Think about non-religious books that are still good for any number of other purposes. We’re not bashing other writing. So those are in that kind of middle tier. They’re good manmade writings. They’re not on the same level of scripture though, but they’re good. And then beneath that, you have wicked. It’s like the false teachings going around falsely purporting to claim to be by St. Paul.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Las tradiciones apostólicas obligan sea que se transmitan de palabra o por carta",
            quotes: [
              {
                speaker: "Dr. Brant Pitre",
                work: "Jesus and the Traditions of Men (Mark 7) Explained",
                outlet: "Catholic Productions",
                date: "24 de abril de 2019",
                locator: "Fragmento que empieza «But then there are certain traditions»",
                url: "https://catholicproductions.com/blogs/blog/jesus-and-the-traditions-of-men",
                text: "Pero luego hay ciertas tradiciones que son vinculantes. Así que, de nuevo, interpretamos: cada vez que miramos un pasaje de la Biblia, lo interpretamos en contexto, y en 2 Tesalonicenses 2:15 Pablo dice a los cristianos: “manténganse firmes y aférrense a las tradiciones”, paradosis, la misma palabra que usa Jesús, “que han aprendido de nosotros, ya sea de palabra o por carta”. Así que san Pablo, inspirado por el Espíritu Santo, dice en otro lugar del Nuevo Testamento que de hecho sí tenemos que guardar las tradiciones, ya sean escritas u orales, siempre que vengan de los apóstoles. Así que la tradición apostólica tiene que conservarse. En esencia, lo que está pasando aquí es que tenemos que distinguir entre una tradición de hombres que contradice la Palabra de Dios, y eso Jesús lo condena, y una tradición apostólica que está guiada por el Espíritu Santo y se entrega a la Iglesia como vinculante, ya sea en forma escrita u oral. Esas tradiciones tenemos que guardarlas, ¿verdad?",
                original:
                  "But then there are certain traditions which are binding. And so again we interpret, whenever we look at a passage in the Bible, we interpret it in context and in 2 Thessalonians 2:15, Paul says to the Christians, “stand firm and hold fast to the traditions,” paradosis, same word Jesus uses, “which you have heard from us, whether by word of mouth or by letter.” So St. Paul, inspired by the Holy Spirit, elsewhere in the New Testament says we actually do have to keep the traditions, whether they’re written or they’re oral, as long as they’re from the apostles. So apostolic tradition has to be kept. So in essence, what's going on here is we need to make the distinction between a tradition of men which contradicts the word of God, Jesus condemns that, and an apostolic tradition which is guided by the Holy Spirit and given to the church as binding, whether in written or oral form. Those traditions we have to keep, right.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Tim.3.14-1Tim.3.16"],
      text: "El Catecismo lee aquí a la Iglesia como «columna y fundamento de la verdad», que guarda la memoria de las palabras de Cristo y transmite la confesión de fe de los apóstoles {c:CEC171|Catecismo 171}.",
      apologists: {
        arguments: [
          {
            title: "La Iglesia es «columna y baluarte de la verdad»",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "The Biblical Case for Infallibility",
                outlet: "Shameless Popery",
                date: "21 de marzo de 2024",
                locator:
                  "4 párrafos: del párrafo que empieza «Now that gives us a little clearer sense of…» al que termina «…and him having one body, but this is important.»",
                url: "https://www.catholic.com/audio/sp/the-biblical-case-for-infallibility",
                text: "Ahora eso nos da una idea un poco más clara de cómo se ve la unidad. Es a la vez una unidad de afecto y una unidad de creencia. Es decir, realmente creemos las mismas cosas. Estamos unidos en las cuestiones de la verdad. No basta con decir: “Bueno, acordemos no estar de acuerdo”. Eso no es unidad, ni en el sentido cristiano ni en el sentido bíblico; pero también es una unidad del corazón. No nos destruimos unos a otros, nos importamos unos por otros, nos edificamos mutuamente. Hay una verdadera afinidad ahí. Son ambas cosas. Necesitamos tanto la unidad del corazón como la unidad de la mente, y la gente a menudo enfatiza una con exclusión de la otra, o simplemente ignora ambas. Así que tienes esos versículos que señalan estas cosas como positivas, pero no es solo algo triste. También tienes los versículos que advierten qué pasa si no hacemos esto. Uno de los ejemplos más claros es Gálatas 5, cuando san Pablo enumera las obras de la carne.\n\nAhora tal vez pienses en la carne como pecado sexual o algo así, pero para Pablo la carne simplemente significa seguirse a uno mismo en lugar de seguir a Dios. Por eso da muchos ejemplos como enemistad, contienda, disensiones, espíritu de partido; en otras palabras, todas esas veces en que nos volvemos muy orgullosos y obstinados, y tenemos las peleas internas, el desgarro de la iglesia y el trabajar unos contra otros. Todas esas cosas él las describe como obras de la carne, y luego advierte que quienes hacen tales cosas no heredarán el reino de Dios. Así que espero que esto quede abundantemente claro: deberías preocuparte por la unidad cristiana, tanto porque hace buena la vida como porque Jesús ora por ella, y Pablo la ruega, y también porque si trabajas contra ella puedes arruinar tu propia salvación. Esas son razones para cuidar la unidad. No es algo negociable, no es que si por casualidad estás unido, qué bien. No. Jesús pudo haber hecho cualquier cantidad de cosas en la última Cena.\n\nHizo muy pocas, y una de las cosas que hace es orar por nosotros, y lo único por lo que ora por nosotros es la unidad. Podemos agregar una razón más por la que esto importa, porque no es solo que nos traigamos destrucción espiritual, sino que sin unidad la iglesia es destruida. Ya vimos esto de una manera en Juan 17: Jesús habla de cómo necesitamos esta unidad para la difusión del evangelio. Pero también puedes pensarlo así: en 1 Timoteo 3, san Pablo describe qué significa ser cristiano y dice: “Si me demoro, te escribo estas instrucciones para que sepas cómo debe comportarse uno en la casa de Dios.” Bueno, ¿qué es la casa de Dios? Es la iglesia, el Dios vivo, columna y baluarte de la verdad. Ahora quiero que pienses en esto un segundo. Este es un tema que creo que mucha gente entiende mal.\n\nSi le preguntaras a un cristiano común qué es la columna y baluarte de la verdad, quizá diría que Jesús, quizá diría que la Biblia; creo que muchos no dirían que la iglesia. Pero en la visión bíblica, la iglesia es precisamente eso. Es la casa de Dios y es la columna y el baluarte de la verdad. Pero aquí está el peligro: como dice Jesús en Marcos 3, todo reino dividido contra sí mismo no puede permanecer, y si una casa está dividida contra sí misma, esa casa no podrá permanecer. Eso es cierto de la casa de Dios. Si la casa de Dios no es una, se derrumba. Esta es una de las razones por las que creemos que hay una sola Iglesia santa, católica y apostólica, porque si hubiera dos y enseñaran cosas distintas, la casa de Dios se derrumbaría. Así que solo hay una verdadera iglesia si hemos de creer todo lo que Jesús enseñó. Eso, de nuevo, creo que se va a volver más obvio a medida que avancemos y veamos a Jesús hablando de establecer una sola iglesia y de tener un solo cuerpo, pero esto es importante.",
                original:
                  "Now that gives us a little clearer sense of what unity looks like. It is both a unity of affection and a unity of belief. That is we actually believe the same things. We’re united on the issues of the truth. We don’t just, “Hey, agree to disagree.” That’s not unity, not in the Christian sense, not in the biblical sense, but it’s also a unity of heart. We’re not tearing each other down, we’re caring about each other, we’re building each other up. There’s a true affinity there. It’s both things. We need both the unity of heart and unity of mind, and people often will emphasize one to the exclusion of the other or we’ll just ignore both. So you have those verses pointing to these as positives, but it’s not just sad. You also have the verses warning what happens if you don’t do this? So one of the clearest examples of this is in Galatians five when St. Paul is listing the works of the flesh.\n\nNow you might think of the flesh as like sexual sin or something like that, but for Paul, the flesh just means following yourself rather than following God. And so he gives plenty of examples like enmity, strife, dissension, party spirit, in other words, all those times where we become really proud and headstrong and we have the infighting and the tearing apart of the church and the working against one another. All of those things he describes as works of the flesh and then he warns that those who do such things shall not inherit the kingdom of God. So hopefully this abundantly clear, you should care about Christian unity both because it makes life good and because Jesus prays for it and Paul begs for it and also because if you work against it, you can ruin your own salvation. And so those are reasons to care about unity. It’s not a negotiable, it’s not if you happen to be unified, great. No, Jesus could have done any number of things at the last Supper.\n\nHe does precious few and one of the things he does is praise for us and the only thing he prays for us is for unity. We can add one more issue to why this matters though, because it’s not just that we’ll bring about spiritual destruction upon ourselves is that without unity, the church is destroyed. Now, we already saw this in one way, John 17, Jesus talks about how we need this unity for the spread of the gospel. But you can also think about it in this way, one Timothy 3, st. Paul is describing what does it look like to be a Christian and he says, “If I’m delayed, I’m giving you these instructions so you may know how one ought to behave in the household of God.” Well, what’s the household of God? It’s the church, the living God, the pillar and bulwark of the truth. Now, I want you to think about this for a second. This is an issue I think a lot of people get wrong.\n\nIf you were to ask an ordinary Christian what’s the pillar and bulwark of the truth, they might say Jesus, they might say the Bible, think many of them would not say the church. But in the biblical view, the church is precisely that. It is the household of God and it is the pillar and bulwark of the truth. But here’s the danger, as Jesus says in Mark chapter three, A kingdom divided against itself cannot stand, and if a house is divided against itself, that house will not be able to stand. That’s true of the household of God. If the household of God is not one, it collapses. This is one of the reasons we believe that there is one holy Catholic and apostolic church because if there were two and they taught different things, the household of God would collapse. So there’s only one true church if we’re to believe everything Jesus has taught there that again, I think will become more obvious as we go and we see Jesus talking about establishing one church and him having one body, but this is important.",
                translation: "ai-assisted",
              },
              {
                speaker: "Trent Horn",
                work: 'Refuting Papal Myths - "The Papacy is Unbiblical and Unhistorical"',
                outlet: "Catholic Answers Magazine",
                date: "21 de septiembre de 2015",
                locator:
                  "12 párrafos: del párrafo que empieza «As Pope Francis travels through the United States during…» al que termina «…founded the Church in Rome and later died there.»",
                url: "https://www.catholic.com/magazine/online-edition/refuting-papal-myths-the-papacy-is-unbiblical-and-unhistorical",
                text: "Mientras el papa Francisco viaja por Estados Unidos durante su visita al Congreso Mundial de las Familias en Pensilvania, es de esperar que críticos de todo tipo lo denuncien a él y a su oficio. Por eso esta semana publicaremos una serie de artículos que refutan estos perniciosos mitos sobre el oficio del papado, así como sobre quienes lo han ocupado.\n\nMito #1 – El papado no se encuentra en la Biblia.\n\nEs cierto que la palabra papado no aparece en la Biblia, pero tampoco aparecen allí las palabras Trinidad o Biblia. Este argumento supone que toda doctrina cristiana está descrita explícitamente en la Biblia, aunque esta misma enseñanza no se encuentre en la Escritura. Los católicos creen, en cambio, que la revelación divina procede de la Palabra de Dios dada en forma escrita (la Sagrada Escritura) y en forma oral (la Sagrada Tradición), y ambas dan testimonio de la existencia del papado. Según la Escritura, Cristo fundó una Iglesia visible que nunca dejaría de existir y tenía autoridad para enseñar y disciplinar a los creyentes (ver Mt 16:18-19, 18:17). San Pablo nos dice que esta Iglesia es “columna y fundamento de la verdad” (1 Tm 3:15) y que fue edificada sobre “el fundamento de los apóstoles” (Ef 2:20). Pablo también nos dice que la Iglesia tendría una jerarquía compuesta por diáconos (1 Tm 2:8-13); presbíteros, de donde viene la palabra inglesa priest (1 Tm 5:17); y obispos (1 Tm 3:1-7).\n\nPablo incluso instruyó a uno de estos obispos, Tito, para que designara presbíteros en la isla de Creta (Tito 1:5). En el año 110 d. C., san Ignacio de Antioquía dijo a sus lectores:\n\n“Sigan al obispo, como Jesucristo sigue al Padre, y al presbiterio como a los apóstoles; y respeten a los diáconos, por ser institución de Dios. Que nadie haga nada relacionado con la Iglesia sin el obispo.” (Letter to the Smyrnaeans, 8)\n\nA diferencia de los apóstoles, la Iglesia de Cristo existiría para todas las edades, así que los apóstoles transmitieron a sus sucesores la autoridad para atar y desatar la doctrina (ver Mateo 18:18), perdonar pecados (ver Juan 20:23) y hablar en nombre de Cristo (ver Lucas 10:16). Hechos 1:20, por ejemplo, registra cómo, tras la muerte de Judas, Pedro proclamó que el oficio de Judas (en griego, su episcopado) sería transferido a un sucesor digno. En 1 Timoteo 5:22, Pablo advirtió a Timoteo que “no se apresure en la imposición de manos” al designar nuevos líderes en la iglesia.\n\nA finales del siglo I, Clemente de Roma, que según la antigua tradición fue ordenado por el propio Pedro, escribió:\n\n“Nuestros apóstoles supieron, por medio de nuestro Señor Jesucristo, que habría disputas por el oficio de obispo . . . [por eso hicieron preparativos para que] . . . si murieran, otros hombres aprobados sucedieran a su ministerio” (Letter to the Corinthians 44:1–3).\n\nAsí como la autoridad de los apóstoles pasó a sus sucesores, la autoridad de Pedro como líder de los apóstoles y roca sobre la que se edificó la Iglesia (Mt 16:18) pasó a su sucesor. Este hombre heredó las llaves del reino de los cielos (Mt 16:19) y el deber de Pedro de pastorear el rebaño de Cristo (ver Juan 21:15-17). El sucesor de Pedro es el pastor de la Iglesia de Cristo y un padre espiritual para los hijos del Señor (1 Cor. 4:15), lo que explica el título que con el tiempo recibió su oficio, papa, que viene de la palabra latina para padre.\n\nMito #2 – El obispo de Roma no tenía autoridad especial en la Iglesia primitiva. ¡Pedro ni siquiera estuvo nunca en Roma!\n\nTanto el Nuevo Testamento como los Padres de la Iglesia primitiva dan testimonio de que Pedro estuvo en Roma. Al final de su primera carta, Pedro dice que escribe desde “Babilonia” (5:13), que era un código habitual para Roma, porque ambos imperios fueron perseguidores implacables del pueblo de Dios (ver Apocalipsis 17-18; Oxford Dictionary of the Popes, 6).\n\nEn palabras del erudito protestante D.A. Carson, Pedro estuvo “en Roma alrededor del año 63 (la fecha probable de 1 Pedro). Eusebio sugiere que Pedro estuvo en Roma durante el reinado de Claudio, que murió en el 54 (H.E. 2.14.6)” (An Introduction to the New Testament, 180). Pedro quizá no siempre estuvo presente en Roma (lo que explicaría por qué Pablo no lo menciona en su carta a los Romanos), pero existe una tradición sólida según la cual Pedro fundó la Iglesia en Roma y luego murió allí.",
                original:
                  "As Pope Francis travels through the United States during his visit to the World Congress of Families in Pennsylvania, expect critics of all stripes to be denouncing him and his office. That’s why this week we will be publishing a series of posts that refute these pernicious myths about the office of the Papacy as well as those who have held that office.\n\nMyth #1 – The papacy is not found in the Bible.\n\nIt’s true the word papacy is not in the Bible, but neither are the words Trinity or Bible found there. This argument assumes that all Christian doctrine is explicitly described in the Bible, even though this teaching itself is not found in Scripture. Catholics believe, on the other hand, that divine revelation comes from God’s word given to us in written form (Sacred Scripture) and oral form (Sacred Tradition), both of which testify to the existence of the papacy. According to Scripture, Christ founded a visible Church that would never go out of existence and had authority to teach and discipline believers (see Matt. 16:18-19, 18:17). St. Paul tells us this Church is “the pillar and foundation of truth” (1 Tim. 3:15) and it was built on “the foundation of the apostles” (Eph. 2:20). Paul also tells us the Church would have a hierarchy composed of deacons (1 Tim. 2:8-13); presbyters, from where we get the English word priest (1 Tim. 5:17); and bishops (1 Tim. 3:1-7).\n\nPaul even instructed one of these bishops, Titus, to appoint priests on the island of Crete (Titus 1:5). In A.D. 110, St. Ignatius of Antioch told his readers,\n\n“Follow the bishop, even as Jesus Christ does the Father, and the presbytery as you would the apostles; and reverence the deacons, as being the institution of God. Let no man do anything connected with the Church without the bishop.” (Letter to the Smyrnaeans, 8)\n\nUnlike the apostles, Christ’s Church would exist for all ages, so the apostle’s passed on to their successors the authority to bind and loose doctrine (see Matt. 18:18), forgive sins (see John 20:23), and speak on behalf of Christ (see Luke 10:16). Acts 1:20, for example, records how after Judas’s death Peter proclaimed that Judas’s office (or, in Greek, his bishoporic) would be transferred to a worthy successor. In 1 Timothy 5:22, Paul warned Timothy to “not be hasty in the laying on of hands” when he appointed new leaders in the church.\n\nAt the end of the first century, Clement of Rome, who according to ancient tradition was ordained by Peter himself, wrote,\n\n“Our apostles knew through our Lord Jesus Christ that there would be strife for the office of bishop . . . [so they made preparations that] . . . if they should die, other approved men should succeed to their ministry” (Letter to the Corinthians 44:1–3).\n\nJust as the apostles’ authority was passed on their successors, Peter’s authority as the leader of the apostles and the rock on whom the Church was built (Matt 16:18) was passed on to his successor. This man inherited the keys to the kingdom of heaven (Matt. 16:19) and Peter’s duty to shepherd Christ’s flock (see John 21:15-17). Peter’s successor was the pastor of Christ’s church and a spiritual father to the Lord’s children (1 Cor. 4:15), thus explaining his offices future title pope, which comes from papa, the Latin word for father.\n\nMyth #2 – The Bishop of Rome had no special authority in the early Church. Peter was never even in Rome!\n\nBoth the New Testament and the early Church Fathers testify to Peter being in Rome. At the end of his first letter, Peter says he is writing from “Babylon” (5:13), which was a common code word for Rome, because both empires were lavish persecutors of God’s people (see Rev. 17-18; Oxford Dictionary of the Popes, 6).\n\nIn the words of Protestant scholar D.A. Carson, Peter was “in Rome about 63 (the probable date of 1 Peter). Eusebius implies that Peter was in Rome during the reign of Claudius, who died in 54 (H.E. 2.14.6)” (An Introduction to the New Testament, 180). Peter may not have always been present in Rome (which would explain why Paul does not address him in his epistle to the Romans), but there is a solid tradition that Peter founded the Church in Rome and later died there.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["John.20.31", "2Tim.3.14-2Tim.3.17", "2Pet.1.19-2Pet.1.21", "2Pet.3.15-2Pet.3.16"],
      text: "«Toda la Escritura es divinamente inspirada y útil para enseñar…»: la Iglesia lo lee como la fe apostólica en la inspiración de los libros, que por eso tienen a Dios por autor {c:DV11|Dei Verbum 11}.",
      apologists: {
        arguments: [
          {
            title: "«Útil» no es «suficiente»; el versículo se lee en su contexto",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "Sola Scriptura and 2 Timothy 3:16–17",
                outlet: "A Daily Defense, catholic.com",
                date: "26 de junio de 2023",
                locator:
                  "7 párrafos: del párrafo que empieza «There are multiple problems with this challenge.…» al que termina «…after Paul and all the other apostles were dead.»",
                url: "https://www.catholic.com/audio/ddp/sola-scriptura-and-2-timothy-316-17",
                text: "Este desafío tiene varios problemas.\n\nPrimero, pasa graphē normalmente se traduciría como “toda Escritura” (pasa significa generalmente “cada” más que “todo” delante de un sustantivo en singular como graphē). “Toda Escritura” se referiría a cada libro individual de la Escritura. Además, en la Biblia, la palabra “escritura” (en singular) se refiere a un libro o pasaje individual. Los libros inspirados, tomados en conjunto, son “las Escrituras” (en plural), no “la Escritura”. Pero Pablo no puede querer decir que cada libro individual basta para la doctrina. Si no, se podría hacer teología con “solo Génesis”, “solo Isaías”, y así sucesivamente.\n\nSegundo, Pablo dice que los libros son útiles para ciertos fines, entre ellos la enseñanza. Pero ser útil solo significa que algo aporta una contribución, no que sea única y exclusivamente suficiente.\n\nTercero, aunque las Escrituras contribuyen al propósito de que el hombre de Dios sea “perfecto, equipado para toda buena obra”, no son lo único que necesita. También necesita santidad, los carismas del Espíritu Santo, la comprensión correcta de los textos, etc. Los textos no bastan por sí solos.\n\nCuarto, la sola Escritura solo habría sido aplicable después de la muerte de los apóstoles (ver Día 5), pero Pablo no le está diciendo a Timoteo algo nuevo, pensado para aplicarse solo después de su muerte. Le está diciendo algo que era verdadero entonces y lo había sido siempre. Enuncia este principio inmediatamente después de recordarle a Timoteo que conocía las sagradas Escrituras (en plural) desde niño (v. 15). Esto se refería al Antiguo Testamento, y el principio de Pablo era verdadero cuando solo existía el Antiguo Testamento, antes de que se escribiera cualquier libro del Nuevo.\n\nLos cristianos que vivían antes de que se escribiera cualquier libro del Nuevo Testamento seguían obligados a aceptar los elementos de la fe cristiana que no se encuentran en el Antiguo Testamento. No se volvieron obligatorios solo al ser escritos (2 Timoteo 2:15).\n\nEs probable que 2 Timoteo no haya sido el último libro del Nuevo Testamento escrito, y sin embargo Pablo esperaba que Timoteo aplicara el principio de inmediato, sin esperar a que Pablo y todos los demás apóstoles hubieran muerto.",
                original:
                  "There are multiple problems with this challenge.\n\nFirst, pasa graphē ordinarily would be translated “every scripture” (pasa generally means “every” rather than “all” before a singular noun like graphē). “Every scripture” would be a reference to each individual book of Scripture. Further, in the Bible the word “scripture” (singular) refers to an individual book or passage. The inspired books as a whole are “the scriptures” (plural), not “scripture.” But Paul couldn’t mean each individual book is sufficient for doctrine. Otherwise, you could do theology by “Genesis alone,” “Isaiah alone,” and so forth.\n\nSecond, Paul says the books are useful toward certain goals, includ- ing teaching. But being useful merely means that something makes a contribution—not that it is uniquely and exclusively sufficient.\n\nThird, although the scriptures contribute to the goal of making the man of God “complete, equipped for every good work,” they aren’t the only things he needs. He also needs holiness, the charisms of the Holy Spirit, the correct understanding of the texts, and so on. The texts are not sufficient by themselves.\n\nFourth, sola scriptura would only have been applicable after the apostles’ deaths (see Day 5), but Paul is not telling Timothy something new and meant to apply only after his death. He is saying something that was true then and had been true all along. He articulates this principle immediately after reminding Timothy that he had known the sacred scriptures (plural) from his youth (v. 15). This referred to the Old Testament, and Paul’s principle was true when only the Old Testament existed, before any New Testament books were written.\n\nChristians living before any New Testament book was penned were still obliged to accept the elements of the Christian faith not found in the Old Testament. They didn’t only become obligatory upon being written (2 Tim. 2:15).\n\nIt is likely 2 Timothy was not the last New Testament book written, yet Paul expected Timothy to apply the principle immediately—not wait until after Paul and all the other apostles were dead.",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                work: "Why I Don't Believe in Sola Scriptura",
                outlet: "Shameless Popery",
                date: "9 de febrero de 2023",
                locator:
                  "5 párrafos: del párrafo que empieza «That doesn’t work. And here’s why that doesn’t work.…» al que termina «…Timothy. We’ve already seen that in the last point.»",
                url: "https://www.catholic.com/audio/sp/why-i-dont-believe-in-sola-scriptura",
                text: "Eso no funciona. Y aquí está la razón. Según la Confesión de Fe de Westminster, como ya hemos comentado, todo el consejo de Dios respecto de todas las cosas necesarias para su propia gloria, la salvación del hombre, la fe y la vida, está contenido en la Escritura, ya sea implícita o explícitamente. Bien, la sola Escritura ciertamente cae dentro de esa categoría. Está claramente relacionada con la gloria de Dios, con la salvación del hombre y con la fe y la vida cristiana. Y sin embargo este principio no está en la Biblia. Así que la pregunta es: si hay un principio que gobierna cómo glorificamos a Dios, cómo somos salvos, cómo es nuestra fe y cómo vivimos, ese principio, según la Confesión de Fe de Westminster, tiene que estar en la Biblia, o ser una deducción necesaria a partir de ella, una parte implícita de la Biblia de la que se pueda deducir fácilmente.\n\nBueno, se ve el problema. Así que esto significa que la sola Escritura tiene que ser bíblica para ser verdadera. Y, por supuesto, esto tiene sentido, ¿verdad? Recuerden de nuevo la cita de B. B. Warfield que mencioné al principio: esta es la piedra angular del protestantismo universal. Es una doctrina, y sobre ella se sostiene el protestantismo; y es falsa. Esta es una de las doctrinas más importantes en cuanto a lo que divide a católicos y protestantes. Si hubiera una doctrina mayor que divide a la Iglesia entre católicos y protestantes, y los protestantes señalaran: ustedes, los católicos, tienen esta doctrina que no se encuentra en la Biblia, y nosotros respondiéramos: ¿y qué importa? No creo que un protestante de la sola Escritura diría: sí, esa es una respuesta suficiente. Creo que diría: bueno, debería importar.\n\nY, de manera análoga, los católicos pueden responder: bueno, si ese es el criterio que ustedes aplican, su propia enseñanza también debe medirse con ese criterio, ¿verdad? Es lógico. La sola Escritura tiene que encontrarse en la Biblia. Y aquí está el problema: no se encuentra. Nada en la Biblia, leído en su contexto propio, la enseña. Voy a examinar solo algunos de los versículos más citados, y en cada caso creo que verás que están sacados de contexto. Primero, 2 Timoteo 3 dice que toda Escritura es inspirada por Dios, o, más literalmente, que toda Escritura es soplada por Dios. Este pasaje se cita bastante para decir: ¡ajá!, esto prueba que la sola Escritura es necesaria. Pero veámoslo en su contexto, y creo que verás que este versículo se saca de contexto.\n\nSan Pablo le habla a Timoteo y le dice que persevere en lo que aprendió y firmemente creyó, sabiendo de quién lo aprendió, y que desde niño conoce las sagradas letras, que pueden instruirlo para la salvación mediante la fe en Cristo Jesús. Piensa un momento en eso. Timoteo creció conociendo sagradas escrituras capaces de llevar a una fe salvadora en Jesucristo. ¿Qué escrituras eran esas? ¿Era el Nuevo Testamento? No. El Nuevo Testamento no existía en la infancia de Timoteo. Se estaba escribiendo literalmente mientras Pablo le escribía esta carta. No se había escrito una generación antes. Se escriba cuando se escriba 2 Timoteo, no es una generación posterior al Nuevo Testamento.\n\nAsí que, cuando Pablo le recuerda a Timoteo las Escrituras que leyó de niño, se refiere muy claramente al Antiguo Testamento. Entonces, quien diga que él afirma que esto es todo lo que se necesita tendría que decir, al parecer, que basta con el Antiguo Testamento. No necesitamos en absoluto el Nuevo Testamento, porque el Antiguo basta para llevarnos a una fe salvadora en Jesús. Y eso claramente no es lo que dice Pablo. Así que, al leerlo en contexto, te das cuenta de que no, él no enseña la sola Escritura. La segunda razón por la que sabemos que no la enseña es: porque la sola Escritura no era verdadera en vida de Pablo ni en vida de Timoteo. Eso ya lo vimos en el punto anterior.",
                original:
                  "That doesn’t work. And here’s why that doesn’t work. According to the Westminster Confession of Faith, as we have already discussed, the whole council of God concerning all things necessary for his own glory, man’s salvation, faith and life are either implicitly or explicitly in scripture. Well, sola scriptura certainly falls within that category. It is clearly related to the glory of God, to man’s salvation, to faith in Christian living. And yet this principle is not in the Bible. So the question is, if there’s a principle governing how we glorify God, how we’re saved, what our faith looks like and how we live, that principle according to the Westminster Confession of Faith has got to be in the Bible or else a necessary deduction from the Bible, an implicit part of the Bible you could easily deduce from.\n\nWell, you can see the problem there. So this means sola scriptura has to be biblical to be true. And of course this makes sense, right? Again, remember the B. B. Warfield quote I mentioned in the very beginning, this is the cornerstone of universal Protestantism. This is a doctrine, and on it, Protestantism stand is it’s a false. This is about as big a doctrine as it gets in terms of the doctrines dividing Catholics and Protestants. If there was a major church dividing doctrine between Catholics and Protestants and Protestants pointed out, hey, you Catholics have this doctrine that’s not found in the Bible, and we just said, who cares? I don’t think a sola scriptura Protestant would say, yeah, that’s a good enough answer. I think they’d say, well, it should be.\n\nAnd so likewise, Catholics can turn around and say, okay, if that’s the standard you’re going to hold Catholic teaching too, your own teaching should be held to that standard as well, right? It just makes sense. Sola scriptura needs to be found in the Bible. And here’s the problem, it isn’t. Nothing in the Bible read in its proper context, teaches it. I’m going to look at just a few of the most common verses cited to, and in each case I think you’ll see they’re taken out of context. First, 2 Timothy 3 says that all scripture is inspired by God, or you can say, all scripture is God breathed more literally. And this passage gets cited too quite a lot to say, aha, this proved scripture alone is necessary. But let’s give it in its context, and I think you’ll see that this verse is being ripped out of context.\n\nSt. Paul is talking to Timothy and he tells him to continue in what you’ve learned and have firmly believed, knowing from whom you learned it, and how from childhood you have been acquainted with the sacred writings which are able to instruct you for salvation through faith in Christ Jesus. Think about that for a moment. Timothy grew up knowing sacred writings that were capable of leading to a saving faith in Jesus Christ. What sacred writings were those? Was that the New Testament? No. The New Testament hadn’t been written in Timothy’s childhood. It was being actively written literally as Paul is writing this letter to him. It’s not written a generation earlier. However you date 2 Timothy, it’s not a generation after the New Testament.\n\nSo when Paul is reminding Timothy of the scriptures he read as a kid, he’s very clearly referring to the Old Testament scriptures. So anyone who says that, he’s saying this is all you need, would logically have to say, it would seem, that all we need is the Old Testament. We don’t need the New Testament at all, because the Old Testament is enough to lead us to a saving faith in Jesus. And that is clearly not what Paul is saying. And so when you read it in context, you realize, no, he’s not teaching sola scriptura. The second reason we know he is not teaching sola scriptura is why? Because sola scriptura wasn’t true in the lifetime of Paul or in the lifetime of Timothy. We’ve already seen that in the last point.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Luke.10.16"],
      text: "«El que a vosotros escucha a mí me escucha»: por eso los fieles reciben las enseñanzas de sus pastores {c:CEC87|Catecismo 87}.",
      apologists: {
        arguments: [
          {
            title: "«El que a vosotros oye, a mí me oye»: Cristo dio autoridad docente a los ministros de su Iglesia",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "Cafeteria Christianity",
                outlet: "A Daily Defense, catholic.com",
                date: "8 de octubre de 2023",
                locator:
                  "6 párrafos: del párrafo que empieza «This may be an attractive proposition in our individualistic…» al que termina «…we cannot simply pick and choose our own beliefs.»",
                url: "https://www.catholic.com/audio/ddp/cafeteria-christianity",
                text: "Puede ser una propuesta atractiva en nuestra era individualista, pero no era la visión de Jesús.\n\nSi vas a ser cristiano, eso significa escuchar a Jesucristo, y él estableció una Iglesia, no una cafetería. No se nos permite escoger y elegir nuestras creencias como escogemos platos en una línea de servicio.\n\nEsto se evidencia en la manera en que Jesús enseña. En el Sermón del Monte, retoma una y otra vez las interpretaciones comunes de la ley judía y las corrige con su propia autoridad, usando la fórmula: “Ustedes han oído... pero yo les digo...” (Mateo 5:21-22, 27-28, 31-32, 33-34, 38-39, 43-44). La autoridad con la que enseñaba fue notable incluso en su propio tiempo: “La multitud quedaba asombrada de su enseñanza, porque les enseñaba como quien tiene autoridad, y no como sus escribas” (Mateo 7:28-29; cf. Marcos 1:22, Lucas 4:32).\n\nJesús es el Mesías y el Hijo de Dios. Su enseñanza está respaldada por autoridad divina —“Mi enseñanza no es mía, sino del que me envió” (Juan 7:16)— y no es un cristiano fiel quien rechaza lo que Cristo enseñó. Eso tiene implicaciones, porque Cristo no se guardó esta autoridad para sí mismo. Dio autoridad para enseñar a los ministros que puso al frente de su Iglesia, diciéndoles: “El que a ustedes escucha, a mí me escucha, y el que a ustedes rechaza, a mí me rechaza, y el que me rechaza a mí, rechaza al que me envió” (Lucas 10:16).\n\nAdemás les prometió: “Cuando venga el Espíritu de verdad, él los guiará a toda la verdad” (Juan 16:13), y declaró: “Me ha sido dada toda autoridad en el cielo y en la tierra. Vayan, pues, y hagan discípulos de todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo, enseñándoles a observar todo lo que les he mandado; y yo estoy con ustedes siempre, hasta el fin de los tiempos” (Mateo 28:18-20).\n\nAsí, Jesús dotó a su Iglesia con la autoridad de enseñar hasta el fin del mundo, y si queremos ser seguidores de Jesús, no podemos simplemente escoger nuestras propias creencias.",
                original:
                  "This may be an attractive proposition in our individualistic age, but it wasn’t Jesus’ view.\n\nIf you’re going to be a Christian, that means listening to Jesus Christ, and he set up a Church, not a cafeteria. We aren’t allowed to pick and choose our beliefs like we pick and choose dishes in a serving line.\n\nThis is evident from the way Jesus teaches. In the Sermon on the Mount, he repeatedly takes on common interpretations of Jewish law and corrects them by his own authority, using the formula, “You have heard . . . but I say . . .” (Matt. 5:21–22, 27–28, 31–32, 33–34, 38–39, 43–44). The authority with which he taught was remarkable even in his own day: “The crowds were astonished at his teaching, for he taught them as one who had authority, and not as their scribes” (Matt. 7:28–29; cf. Mark 1:22, Luke 4:32).\n\nJesus is the Messiah and the Son of God. His teaching is backed by divine authority—“My teaching is not mine, but his who sent me” (John 7:16)—and one is not a faithful Christian if one rejects what Christ taught. That has implications, because Christ did not keep this authority to himself. He gave teaching authority to the ministers he put in charge of his Church, telling them: “He who hears you hears me, and he who rejects you rejects me, and he who rejects me rejects him who sent me” (Luke 10:16).\n\nHe further promised them, “When the Spirit of truth comes, he will guide you into all the truth” (John 16:13), and he declared: “All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you; and lo, I am with you always, to the close of the age” (Matt. 28:18–20).\n\nJesus thus invested his Church with the authority to teach until the end of the world, and if we want to be Jesus’ followers, we cannot simply pick and choose our own beliefs.",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                work: "Why I Don't Believe in Sola Scriptura",
                outlet: "Shameless Popery",
                date: "9 de febrero de 2023",
                locator:
                  "5 párrafos: del párrafo que empieza «What time do we celebrate our service? What does…» al que termina «…It is the authority that has the final say.”»",
                url: "https://www.catholic.com/audio/sp/why-i-dont-believe-in-sola-scriptura",
                text: "¿A qué hora celebramos nuestro culto? ¿Cómo es nuestro culto? Todas esas preguntas: alguien tiene que pasar de lo que lee en la página a poner esa visión en práctica de alguna manera concreta dentro de la iglesia. Así que la Confesión de Westminster deja bastante claro que esta no es la única autoridad, pero sí es una clase especial de autoridad, y la única de esa clase especial. Espero que quede claro. La otra fuente que revisé es el doctor Matthew Barrett. Una razón es que él es claro y bueno sobre la sola scriptura. Otra es que enseña en MBTs, que es donde yo estaba dando la charla. Quería decir: miren, aquí hay alguien que enseña, creo que sobre todo a los estudiantes de posgrado, pero no es que haya elegido a un tipo raro cualquiera de la calle; es uno de sus propios profesores, y miren cómo lo explica.\n\nY dice: para Lutero y los reformadores, la sola scriptura significaba que solo la Escritura, por ser la palabra inspirada de Dios, es nuestra autoridad inerrante, suficiente y final para la iglesia. Ahí hay cuatro afirmaciones. Solo la Biblia es la palabra inspirada de Dios, solo la Biblia es inerrante, solo la Biblia es suficiente y solo la Biblia es la autoridad final dentro del cristianismo. Y esos cuatro puntos son justamente donde católicos y protestantes vamos a discrepar. Porque no creemos que la palabra inspirada de Dios sea solo la Biblia. Creemos que la palabra inspirada de Dios, o mejor dicho la palabra de Dios, es ante todo Jesucristo. Si uno quiere conocer la revelación de Dios, no es el Antiguo Testamento, no es el Nuevo Testamento, ni siquiera es un libro: la revelación plena de Dios es Jesús, y la Escritura lo presenta claramente así. Podemos entrar en eso.\n\nPero también discrepamos en la inerrancia y la suficiencia. No vemos en ningún lugar de la Escritura que Dios diga: este libro es todo lo que necesitas. De hecho, vemos varios pasajes que apuntan bastante claramente a que no es todo lo que necesitas. Hay algo más que necesitas. Y se nos remite a la iglesia y se nos remite a la tradición. Además, parece haber promesas de al menos cierta clase particular de errancia para la iglesia: «El que los escucha a ustedes me escucha, y el que los rechaza me rechaza. Y el que me rechaza rechaza al que me envió». Esas afirmaciones que hace Jesús sobre la predicación de la iglesia sugieren que hay algo más que eso. Y de hecho, si uno lee la Biblia, sobre todo el libro de los Hechos, ve varios momentos en que las proclamaciones orales son también inspiradas y, por supuesto, sin error, es decir, inerrantes.\n\nTodo esto quiere decir que vamos a discrepar en esas cuatro cosas. Pero es una buena descripción de lo que significa la sola scriptura. Ah, y no mencioné que Barrett dice que solo la Biblia es la autoridad final dentro del cristianismo. Nosotros decimos que no: la tradición y el magisterio también son autoridades finales, y vamos a ver por qué. Pero la segunda de las cinco preguntas que quería hacer: la sola scriptura, a la que a veces se llama solo scriptura, y que Barrett va a llamar nuda scriptura. Barrett lo explica así. Dice: “La autoridad es una mala palabra en nuestros días de individualismo a ultranza, pero la Biblia trata todo sobre autoridad.” Amén, hermano. En eso estamos de acuerdo. De hecho, la sola scriptura significa que la Biblia es nuestra autoridad principal, suprema y última. Fíjense, sin embargo, que no dije que la Biblia sea nuestra única autoridad.\n\nY dice: “La sola scriptura se confunde demasiado fácilmente hoy con la nuda scriptura: la idea de que no deberíamos tener más credo que la Biblia. Quienes cantan este mantra creen que los credos, las confesiones, las voces de la tradición y quienes ocupan oficios eclesiásticos no tienen autoridad alguna en la iglesia. Pero esa no era la posición de los reformadores, y no debe equipararse con la sola scriptura.” Hasta aquí, en realidad, estoy de acuerdo, porque como acabamos de ver, la Confesión de Westminster y el mismo Barrett son muy claros en que, al decir que las Biblias son la autoridad final, no dicen que sean la única autoridad. En cambio, él dice: “Solo scriptura reconoce que hay otras autoridades importantes para el cristiano, autoridades que deben ser escuchadas y seguidas. Sin embargo, la Escritura sola es nuestra autoridad final. Es la autoridad que gobierna y rige sobre todas las demás autoridades. Es la autoridad que tiene la última palabra.”",
                original:
                  "What time do we celebrate our service? What does our service look like? All of those questions, someone has to actually go from what they’re reading on the page to implementing that vision in some kind of corporate way. So Westminster’s actually pretty clear this is not the only authority, but it is a special kind of authority and is the only of that special kind of authority. So hopefully that’s clear. The other source I looked at is Dr. Matthew Barrett. And one reason is because he’s good and clear on sola scriptura. Another is he teaches at MBTs, which is where I was speaking. I wanted to say, well, look, here’s someone that’s teaching, I think he largely teaches the grad students, but someone who I’m not just choosing some weirdo off the street, one of your own professors, here’s how he explains it.\n\nAnd he says, for Luther and the reformers, sola scriptura meant that only scripture, because it is God’s inspired word, is our inerrant sufficient and final authority for the church. There’s four claims being made there. Only the Bible is God’s inspired word, only the Bible is inerrant, only the Bible is sufficient and only the Bible is a final authority within Christianity. And those arguments, those four points are really where Catholics and Protestants are going to disagree. Because we don’t believe that God’s inspired word is only the Bible. We think God’s inspired word or God’s word we should say, is first and foremost Jesus Christ. That if you want to know the revelation of God, it’s not the Old Testament, it’s not the New Testament, it’s not a book at all, the full revelation of God is Jesus and scripture clearly presents this. We can get into that.\n\nBut another area we disagree is in terms of the inerrancy and the sufficiency. We don’t see anywhere in scripture where God says, this book is all you need. And in fact, we see several places in scripture that point pretty clearly to this is not all you need. There’s something else you need. And we’re pointed to the church and we’re pointed to tradition. Additionally there seems to be these promises of at least particular kinds of an errancy for the church, that he who hears you hears me, and he who rejects you rejects me. And he who rejects me rejects the one who sent me. Those claims that Jesus makes suggest about the preaching done by the church. Point to there being something more than that. And in fact, we could say when you read the Bible, particularly when you’re reading say the Book of Acts, you see several moments where oral proclamations are also both inspired and of course in errant, meaning without error.\n\nAll that’s to say we’re going to disagree on those four things. But that’s a good description of what is meant by sola scriptura. And oh yeah, I didn’t mention, Barrett says only the Bible is a final authority within Christianity. We’re going to say no, tradition and magisterium are also final authorities, and we’ll get to why. But the second of the five questions I wanted to ask, sola scriptura, what’s sometimes called solo scriptura, what Barrett’s going to call nuda scriptura. Barrett explains it like this. He says, “Authority is a bad word in our day of rugged individualism, but the Bible is all about authority.” Amen, brother. We agree there. In fact, sola scriptura means that the Bible is our chief supreme and ultimate authority. Notice however that I didn’t say the Bible is our only authority.\n\nAnd he says, “Sola scriptura is too easily confused today with nuda scriptura. The view that we should have no creed but the Bible. Those who sing this mantra believe that creeds, confessions, the voices of tradition and those who hold ecclesiastical offices carrying no authority in the church. But this was not the reformer’s position, nor should it be equated with sola scriptura.” Now, so far I actually agree, because as we just saw, the Westminster confession, Barrett himself, are really clear that in saying that the Bibles are final authority, they’re not saying the Bibles are only authority. Instead he says, “Solo scriptura acknowledges that there are other important authorities for the Christian, authorities that should be listened to and followed. Nonetheless, scripture alone is our final authority. It is the authority that rules over and governs all other authorities. It is the authority that has the final say.”",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.28.18-Matt.28.20", "Mark.16.15"],
      text: "Para la Iglesia católica, Cristo mandó: «predicad el evangelio á toda criatura» {v:Mark.16.15}, y prometió: «yo estoy con vosotros todos los días, hasta el fin del mundo» {v:Matt.28.20}; por eso el Evangelio se transmite primero por la predicación viva {c:DV7|Dei Verbum 7} {c:CEC80|Catecismo 80}.",
      apologists: {
        arguments: [
          {
            title: "La Gran Comisión es la base bíblica de la autoridad docente de la Iglesia (Akin)",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "Magisterium",
                outlet: "Catholic Answers Magazine",
                date: "13 de enero de 2019",
                locator:
                  "13 párrafos: del párrafo que empieza «Second, the term refers to those who exercise this…» al que termina «…for the Doctrine of the Faith, Donum Veritatis 24).»",
                url: "https://www.catholic.com/magazine/print-edition/magisterium",
                text: "Segundo, el término se refiere a quienes ejercen esta autoridad docente, es decir, al papa y a los obispos que enseñan en comunión con él. Colectivamente se los llama “Magisterio”, como en “el Magisterio ha enseñado infaliblemente que Dios es Trinidad”.\n\nTercero, el término puede referirse a un cuerpo particular de enseñanzas proclamadas con autoridad. Este uso aparece en frases como: “Humanae Vitae pertenece al magisterio de san Pablo VI”. Además de estos tres usos básicos, se encuentran con frecuencia frases relacionadas. Una de ellas es “magisterio ordinario”. Se refiere a la enseñanza ordinaria de los papas y obispos en el ejercicio de su ministerio.\n\nSin embargo, a veces enseñan de una manera especialmente solemne, que se denomina acto del magisterio extraordinario. En el caso de los papas, este término se reserva únicamente para los casos en que un papa define infaliblemente una verdad. Todas las demás enseñanzas papales se llaman “ordinarias”.\n\nEl término “magisterio extraordinario” también se usa para los concilios ecuménicos. Sin embargo, los autores difieren en su empleo. Algunos lo usan para referirse a cualquier enseñanza de un concilio ecuménico, mientras que otros lo usan solo para los casos en que un concilio ecuménico define infaliblemente algo.\n\nLos obispos individuales no son capaces de ejercer el magisterio extraordinario de la Iglesia. Todas sus enseñanzas, por necesidad, pertenecen a su magisterio ordinario.\n\nRecientemente, los documentos magisteriales han comenzado a referirse al “magisterio ordinario y universal” de la Iglesia. Esto alude a los obispos del mundo que enseñan en comunión con el papa fuera de un concilio ecuménico. (El calificativo “universal” se añade para indicar que interviene el episcopado mundial, no solo la enseñanza de obispos individuales.)\n\nAunque los obispos individuales no son capaces de ejercer la infalibilidad de la Iglesia, el magisterio ordinario y universal sí puede hacerlo. Así, en 1994, san Juan Pablo II confirmó que el hecho de que las mujeres no puedan ser ordenadas sacerdotes ya había sido enseñado por el magisterio ordinario y universal.\n\nUn último término que conviene mencionar es “magisterio auténtico”. Puede resultar engañoso para los hablantes de inglés, porque en inglés authentic suele significar “genuino”, en oposición a “falso”. Sin embargo, el latín authenticum aquí significa “con autoridad”. Así, una enseñanza pertenece al magisterio auténtico de la Iglesia si ha sido enseñada con autoridad.\n\nUna base bíblica para la autoridad docente de la Iglesia se encuentra en la Gran Comisión tal como la dio Jesús: “Id, pues, y haced discípulos a todas las naciones… enseñándoles a guardar todas las cosas que os he mandado” (Mt 28:19-20). También se refleja en la misión de la Iglesia de ser “columna y baluarte de la verdad” en el mundo (1 Tm 3:15).\n\nEl Magisterio puede ejercer su autoridad docente de muchas maneras, y normalmente lo hace en sus documentos oficiales. Las entrevistas con papas y obispos, al no ser documentos oficiales de la Iglesia, normalmente no implican ejercicio del magisterio. Tampoco los libros que papas y obispos publican como personas privadas (por ejemplo, la serie Jesús de Nazaret de Benedicto XVI o El poder del silencio, del cardenal Robert Sarah), aunque a menudo contengan referencias a cosas que la Iglesia ha enseñado con autoridad.\n\nCuando habla oficialmente, el Magisterio puede ejercer su autoridad en distintos grados. En el nivel más bajo, el Magisterio puede simplemente proponer una idea a la consideración de los fieles sin imponerla con autoridad. En el nivel más alto, el Magisterio puede enseñar infaliblemente una verdad, obligando a los fieles a creerla o sostenerla de manera definitiva. También puede ejercer cualquier grado de autoridad entre estos niveles.\n\nUn error particular que hay que evitar es pensar que, por el hecho de que algo no haya sido enseñado infaliblemente, es opcional. No es así: hay que reconocer el grado de autoridad con que el Magisterio lo ha enseñado.\n\nAl considerar la autoridad que tienen las afirmaciones de los documentos magisteriales, hay que hacer una evaluación cuidadosa. El grado de autoridad “se hace claro por la naturaleza de los documentos, por la insistencia con que se repite una enseñanza y por la misma manera en que se expresa” (Congregación para la Doctrina de la Fe, Donum Veritatis 24).",
                original:
                  "Second, the term refers to those who exercise this teaching authority—in other words, to the pope and the bishops teaching in union with him. Collectively, they are referred to as the “Magisterium,” as in “the Magisterium has infallibly taught that God is a Trinity.”\n\nThird, the term can refer to a particular body of teachings that have been authoritatively proclaimed. This usage appears in statements like, “Humanae Vitae belongs to the magisterium of St. Paul VI.” In addition to these three basic uses, one often encounters related phrases. One of these is “ordinary magisterium.” This refers to the ordinary teaching of the popes and bishops as they conduct their ministry.\n\nHowever, sometimes they teach in an especially solemn way that is referred to as an act of the extraordinary magisterium. In the case of popes, this term is reserved only for instances when a pope infallibly defines a truth. All other instances of papal teaching are termed “ordinary.”\n\nThe term “extraordinary magisterium” is also used for ecumenical councils. However, authors differ in the way they employ it. Some authors use extraordinary magisterium to refer to any teaching of an ecumenical council, while others use it only for instances where an ecumenical council infallibly defines something.\n\nIndividual bishops are not capable of exercising the Church’s extraordinary magisterium. All of their teachings, by necessity, belong to its ordinary magisterium.\n\nRecently, magisterial documents have begun to refer to the “ordinary and universal magisterium” of the Church. This is a reference to the bishops of the world teaching in union with the pope outside of an ecumenical council. (The qualifier “universal” is added to indicate that the worldwide episcopate is involved, not just the teaching of individual bishops.)\n\nWhile individual bishops are not capable of exercising the Church’s infallibility, the ordinary and universal magisterium can do so. Thus, in 1994, St. John Paul II confirmed that the fact women cannot be ordained as priests had already been taught by the ordinary and universal magisterium.\n\nA final term that should be mentioned is “authentic magisterium.” This can be misleading to English speakers, because in our language authentic generally means “genuine” as opposed to “fake.” However, the Latin word authenticum here means “authoritative.” A teaching thus belongs to the Church’s authentic magisterium if it has been authoritatively taught.\n\nA biblical basis for the Church’s teaching authority is found in the Great Commission as it was given by Jesus: “Go therefore and make disciples of all nations . . . teaching them to observe all that I have commanded you” (Matt. 28:19-20). It is also reflected in the Church’s mission to be “the pillar and bulwark of the truth” in the world (1 Tim. 3:15).\n\nThe Magisterium can exercise its teaching authority in many ways, and it typically does so in its official documents. Interviews with popes and bishops, not being official Church documents, typically do not involve an exercise of the magisterium. Neither do books that popes and bishops publish as private individuals (e.g., Benedict XVI’s Jesus of Nazareth series or Cardinal Robert Sarah’s The Power of Silence), though they often contain references to things that the Church has authoritatively taught.\n\nWhen it does speak officially, the Magisterium can exercise its authority in different degrees. At the low end, the Magisterium may merely propose an idea for the consideration of the faithful without imposing it authoritatively. At the high end, the Magisterium may infallibly teach a truth, binding the faithful to definitively believe or hold it. It can also exercise any degree of authority between these levels.\n\nA particular mistake to be avoided is thinking that, just because something has not been taught infallibly, it is optional. This is not the case, and the degree of authority with which the Magisterium has taught must be recognized.\n\nWhen considering the authority that statements in magisterial documents have, one must make a careful assessment. The degree of authority “becomes clear from the nature of the documents, the insistence with which a teaching is repeated, and the very way in which it is expressed” (Congregation for the Doctrine of the Faith, Donum Veritatis 24).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "La comisión llama a los hijos adoptivos de Dios a observar todo lo que Jesús mandó",
            quotes: [
              {
                speaker: "Scott Hahn",
                work: "Family of Love: Scott Hahn Reflects on the Solemnity of the Holy Trinity",
                outlet: "St. Paul Center",
                date: "Sin fecha indicada",
                locator: "Párrafos que empiezan «In Jesus, God’s word took flesh»",
                url: "https://stpaulcenter.com/posts/family-of-love-scott-hahn-reflects-on-the-solemnity-of-the-holy-trinity",
                text: "En Jesús, la Palabra de Dios se hizo carne como hijo de Abraham (ver Mateo 1:1). Y Jesús revela en el Evangelio de hoy que el único Dios es Padre, Hijo y Espíritu, y que desea hacer suyos a todos los pueblos. Así como sacó a Israel de Egipto, Dios nos liberó de la esclavitud, dice Pablo en la Epístola de hoy. Así como adoptó a Israel (ver Romanos 9:4), nos da el Espíritu por el cual podemos conocerlo como “Padre nuestro”. Como herederos de Dios, recibimos hoy los encargos de Moisés y de Jesús. Debemos fijar nuestro corazón en Él y observar todo lo que nos ha mandado. La Eucaristía es su promesa: que estará con nosotros hasta el fin, que nos librará de la muerte para vivir para siempre en la tierra prometida de su reino.",
                original:
                  "In Jesus, God’s word took flesh as a son of Abraham (see Matthew 1:1). And Jesus reveals in the Gospel today that the one God is Father, Son, and Spirit, and that He desires to make all people His own. As He led Israel out of Egypt, God freed us from slavery, Paul says in today’s Epistle. As He adopted Israel (see Romans 9:4), He gives us the Spirit by which we can know Him as “Our Father.” As God’s heirs, we receive the commissions of Moses and Jesus today. We are to fix our hearts on Him, and to observe all that He has commanded. The Eucharist is His pledge—that He will be with us until the end, that He will deliver us from death to live forever in the promised land of His kingdom.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Jude.1.3"],
      text: "Para la Iglesia católica, «la fe transmitida a los santos de una vez para siempre» se guarda sin añadirle nada; lo que crece es su comprensión {c:DV8|Dei Verbum 8} {c:CEC171|Catecismo 171}.",
      apologists: {
        arguments: [
          {
            title:
              "«Una vez dada a los santos» no significa que toda la revelación esté en la Escritura; Judas tendría que ser el último libro, y lo demás caería",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "Faith Delivered “Once For All”",
                outlet: "The Jimmy Akin Podcast",
                date: "7 de abril de 2026",
                locator:
                  "25 párrafos: del párrafo que empieza «In Episode 74 of The Jimmy Akin Podcast, I…» al que termina «…in two, with the latter part not being Scripture.»",
                url: "https://www.catholic.com/audio/tjap/faith-delivered-once-for-all",
                text: "En el episodio 74 de The Jimmy Akin Podcast te mostré tres enseñanzas que nuestros amigos protestantes aceptan, aunque en ninguna parte se enseñan en la Biblia y, por tanto, deben basarse en la Tradición apostólica.\n\nPero los protestantes suelen tener versículos que, según ellos, prueban la sola Escritura, y uno de ellos es el pasaje en que Judas afirma que la fe fue entregada de una vez para siempre a los santos.\n\nComo veremos, esto no prueba lo que ellos necesitan, pero comencemos por mirar la afirmación en su contexto.\n\nEn los versículos 3 y 4 del libro, Judas dice:\n\nAmados, al tener gran interés en escribirles acerca de nuestra salvación común, me vi en la necesidad de escribirles exhortándolos a luchar por la fe que fue transmitida de una vez para siempre a los santos.\n\nPorque se han colado en secreto algunos que desde hace mucho tiempo estaban destinados a esta condenación: personas impías que convierten en libertinaje la gracia de nuestro Dios y niegan a nuestro único Dueño y Señor, Jesucristo.\n\nSegún el texto griego, los estudiosos han entendido en general que Judas quería decir que, aunque había tenido el deseo de escribir a sus destinatarios sobre “nuestra salvación común”, consideró necesario dejar de lado ese plan porque se habían infiltrado ciertas personas impías que pervierten la gracia de nuestro Dios en libertinaje.\n\nPor eso les escribe una carta distinta, en la que advierte a sus destinatarios contra esas personas impías.\n\nPara nuestro propósito, la parte clave es la exhortación de Judas “a luchar por la fe que fue entregada de una vez para siempre a los santos”.\n\nEsta es la parte que interesa a los defensores de la sola Escritura: si la fe ha sido entregada de una vez para siempre a los santos, ¿significa esto que toda la enseñanza cristiana ya ha sido revelada y puesta en la Escritura, y que por tanto no debe haber nueva revelación pública?\n\nHay varios problemas con esta idea.\n\n¿No es el último libro?\n\nEn primer lugar, si Judas dijera que toda la revelación pública ha terminado, entonces, dado que la Escritura es en sí misma revelación pública, el libro de Judas tendría que ser el último libro de la Escritura en escribirse.\n\nSi la Escritura contiene revelación pública y todo ha sido comunicado, entonces no quedaría nada por comunicar después de Judas, así que Judas tendría que ser el último libro de la Biblia escrito.\n\nPero no sabemos eso en absoluto.\n\nLos estudiosos difieren sobre cuándo se escribió el libro de Judas. Muchos sostienen que se escribió en los años 90 d. C., pero no sabemos cuándo.\n\nMi propia estimación es que se escribió hacia el 64-65 d. C., aunque podría haber sido más tarde.\n\nLo cierto es que no conocemos su fecha con seguridad. Tampoco podemos establecer las fechas exactas de muchos libros del Nuevo Testamento, así que no sabemos cuál fue el último.\n\nPor ejemplo, si, como suele suponerse, el Apocalipsis fue el último libro escrito, entonces Judas nos obligaría a expulsar el Apocalipsis del canon, junto con cualquier otro libro escrito después de Judas.\n\nNo es la última parte del libro\n\nHay otro problema con la idea de que Judas dice que la revelación pública está cerrada: sería hablar de ello como algo ocurrido en el pasado, como un acto completado.\n\nObserva que dice que la fe ha sido “entregada” de una vez para siempre: tiempo pasado.\n\nComo veremos más abajo, esto ocurrió hace bastante tiempo, pero incluso si lo dejáramos de lado, en el momento en que Judas dijo que la fe había sido entregada de una vez para siempre, ese habría sido el último fragmento de revelación pública, si él estuviera hablando del cierre de la revelación pública.\n\nSi la fe ha sido entregada de una vez para siempre —de manera completa— a los santos, entonces el momento más tardío posible para esa entrega sería el momento en que Judas lo dijo.\n\nEsto significaría que todos los versículos posteriores de Judas no formarían parte de la revelación pública, de modo que habría que partir el libro de Judas en dos, y la parte final no sería Escritura.",
                original:
                  "In Episode 74 of The Jimmy Akin Podcast, I showed you three teachings that our Protestant friends accept, even though they are nowhere taught in the Bible and thus must be based on apostolic Tradition.\n\nBut Protestants commonly have verses that they think prove sola scriptura, and one of them is where Jude states that the Faith has been once for all delivered to the saints.\n\nAs we’ll see, this does not prove what they need it to, but let’s begin by looking at the statement in context.\n\nIn verses 3 and 4 of the book, Jude states:\n\nBeloved, being very eager to write to you of our common salvation, I found it necessary to write appealing to you to contend for the faith which was once for all delivered to the saints.\n\nFor admission has been secretly gained by some who long ago were designated for this condemnation, ungodly persons who pervert the grace of our God into licentiousness and deny our only Master and Lord, Jesus Christ\n\nBased on the Greek text, scholars have generally understood Jude to mean that although he had been eager to write his audience concerning “our common salvation,” he found it necessary to set that plan aside because they had been infiltrated by certain ungodly people who pervert the grace of our God into licentiousness.\n\nTherefore, he is writing them a different letter, in which he warns his audience against the ungodly people.\n\nFor our purposes, the key part is Jude’s exhortation “to contend for the faith which was once for all delivered to the saints.”\n\nThis is the part that interests advocates of sola scriptura: If the Faith has been delivered once for all to the saints, does this mean that the whole of Christian teaching has been revealed and put in Scripture, and so there is to be no new public revelation?\n\nThere are a number of problems with this idea.\n\nNot the Last Book?\n\nFirst off, if Jude were saying that all public revelation had ended, then—since Scripture is itself public revelation—the book of Jude itself would have to be the last book of Scripture to be penned.\n\nIf Scripture contains public revelation and it’s all been communicated, then there would be nothing left to communicate after Jude, so Jude would have to be the last book of the Bible written.\n\nBut we don’t know that at all.\n\nScholars differ on when the book of Jude was written. Many scholars hold that it was written in the A.D. 90s, but we don’t know when.\n\nMy own estimate is that it was written around A.D. 64-65, though it could have been later.\n\nThe fact is, we don’t know its date with confidence. Neither can we establish the exact dates of many books of the New Testament, so we don’t know which was last.\n\nFor example, if—as often supposed—Revelation was the last book to be written, then Jude would require us to eject Revelation from the canon, as well as any other books written later than Jude.\n\nNot the Last Part of the Book\n\nThere’s another problem with the idea that Jude is saying that public revelation is closed, which is that it would be speaking of this as having happened in the past—as a completed act.\n\nNotice that he says it has been “delivered” once for all”—past tense.\n\nAs we’ll see below, this happened quite some time in the past, but even if we ignored that, the moment that Jude said that the faith had been delivered once for all, that would have been the last bit of public revelation—if he was speaking about the closing of public revelation.\n\nIf the Faith has been delivered once for all—in a complete manner—to the saints, then the latest possible moment for that delivery would be the moment Jude said that.\n\nThis would mean that all of the subsequent verses in Jude would not be part of public revelation, so you’d have to cut the book of Jude in two, with the latter part not being Scripture.",
                translation: "ai-assisted",
              },
              {
                speaker: "Karlo Broussard",
                work: "Sacred Tradition—Overstepping Boundaries?",
                outlet: "Dr. Karlo",
                date: "18 de marzo de 2026",
                locator:
                  "12 párrafos: del párrafo que empieza «Let no one deceive you in any way; for…» al que termina «…in The First Epistle to the Corinthians (pages 167-170).»",
                url: "https://www.catholic.com/audio/drk/sacred-tradition-overstepping-boundaries",
                text: "Que nadie los engañe de ninguna manera, porque ese día no llegará sin que antes venga la rebelión y se revele el hombre de la iniquidad, el hijo de perdición, que se opone y se levanta contra todo lo que se llama dios o es objeto de culto, de modo que se sienta en el templo de Dios proclamando que él mismo es Dios. ¿No recuerdan que, cuando todavía estaba con ustedes, les dije esto? Y ustedes saben qué lo detiene ahora para que se manifieste en su tiempo.\n\nAhora, fíjate en esa última línea: “Y ustedes saben qué lo detiene ahora”. Pablo enumera esto junto a los demás detalles sobre el “hombre de la iniquidad” (v. 3), y les recuerda que se lo enseñó en persona (v. 5). Pero aquí viene lo bueno: en sus escritos nunca identifica qué es esa fuerza “que lo detiene”. Así que claramente hubo enseñanzas que transmitió oralmente y que no llegaron a la Escritura, lo cual demuestra que es falsa la afirmación de Geisler y MacKenzie de que “no hay evidencia de que toda la revelación que Dios les dio [a los apóstoles] para expresar no fuera inscripturada en los veintisiete libros del Nuevo Testamento”.\n\nAquí, un protestante podría objetar que no sirve de nada apelar a este detalle sobre el hombre de la iniquidad, porque ni siquiera los católicos afirman saber de qué habla Pablo. Así que, según se sostiene, no es algo que Dios haya querido que conozcamos como parte de la revelación divina. Solo las cosas que Dios quiere que conozcamos, sigue el argumento, son idénticas a los escritos sagrados.\n\nEsto no responde a mi argumento. Sin embargo, desplaza el objetivo.\n\nPartimos de la afirmación de que lo que los apóstoles predicaron como revelación divina es idéntico a los escritos sagrados. Ahora la afirmación es que todo lo que Dios quiso que supiéramos como revelado divinamente es idéntico a los escritos sagrados.\n\nPero esto también queda refutado por algunas de las propias creencias de los protestantes. Un ejemplo obvio es la creencia de que la revelación pública terminó con la muerte del último apóstol. ¿En ningún lugar de la Biblia dice: “Cuando muera el último apóstol, la revelación divina cesará”?\n\nY si un protestante intenta apelar a Judas 3 —“la fe [ha sido] entregada de una vez para siempre a los santos”—, eso crea un problema nuevo. Porque si ese versículo significa que todo ya había sido plenamente entregado en ese momento, entonces tendrían que descartar el resto de Judas, o al menos todo lo escrito después del versículo 3. Pero, por supuesto, ningún protestante va a hacer eso.\n\nAsí que los protestantes sí creen en una tradición oral apostólica que no es idéntica a los escritos sagrados, y eso refuta su afirmación de que solo lo que Dios quiere que creamos como revelado divinamente es idéntico a los escritos sagrados.\n\nAsí que, para resumir: no solo no hay evidencia de que todo lo que los apóstoles enseñaron oralmente terminó en la Escritura, sino que además tenemos evidencia positiva de que la tradición oral y la Escritura no son idénticas.\n\nBien, volvamos ahora al contraargumento original de 1 Corintios 4:6. Hay una última cosa que decir en respuesta: la objeción supone que “lo que está escrito” se refiere a toda la Biblia, pero eso no está claro en el texto.\n\nIncluso destacados eruditos protestantes como Gordon Fee admiten que es difícil precisar qué quiso decir Pablo con “lo que está escrito”. En la página 170 de su libro The First Epistle to the Corinthians, que forma parte de la New International Commentary on the New Testament, Fee dice que la frase es “tan oscura que [los estudiosos] desesperan de encontrar su significado”.\n\nPermíteme repasar algunas de las ideas que la gente ha propuesto sobre lo que Pablo podría querer decir con “más allá de lo que está escrito”. Estas se basan en las obras de Joseph A. Fitzmyer en First Corinthians: A New Translation (páginas 215-216) y de Gordon Fee en The First Epistle to the Corinthians (páginas 167-170).",
                original:
                  "Let no one deceive you in any way; for that day will not come, unless the rebellion comes first, and the man of lawlessness is revealed, the son of perdition, who opposes and exalts himself against every so-called god or object of worship, so that he takes his seat in the temple of God, proclaiming himself to be God. Do you not remember that when I was still with you I told you this? And you know what is restraining him now so that he may be revealed in his time.\n\nNow, notice that last line: “And you know what is restraining him now.” Paul lists this right alongside the other details about the “man of lawlessness” (v.3), and he reminds them that he taught them these things in person (v.5). But here’s the kicker: he never actually identifies in his writings what that “restraining” force is. So clearly, there are teachings he passed on orally that didn’t make it into Scripture, thereby proving false Geisler and MacKenzie’s claim that “there is no evidence that all the revelation God gave [the apostles] to express was not inscripturated in the twenty-seven books of the New Testament.”\n\nHere, a Protestant might counter that it does no good to appeal to this detail about the man of lawlessness because not even Catholics profess to know what Paul’s talking about. Thus, so it’s argued, it’s not something that God willed for us to know as part of divine revelation. Only those things that God wills for us to know, the argument continues, are identical to the sacred writings.\n\nThis does dodge my response. However, it shifts the target.\n\nWe started with the claim that what the apostles preached as divine revelation is identical to the sacred writings. Now, the claim is that whatever God intended for us to know as divinely revealed is identical to the sacred writings.\n\nBut this is proven false as well by some of Protestants’ own beliefs. One obvious example is the belief that public revelation ended with the death of the last apostle. Nowhere in the Bible does it ever say, “When the last apostle dies, divine revelation will cease”?\n\nAnd if a Protestant tries to appeal to Jude 3—“the Faith [has been] once for all delivered to the saints”—well, that creates a new problem. Because if that verse means everything was already fully delivered at that point, then they’d have to toss out the rest of Jude, or at least everything written after verse 3. But of course, no Protestant is going to do that.\n\nSo, Protestants actually do believe an apostolic oral tradition that is not identical to the sacred writings, thereby disproving their contention that only what God wills for us to believe as divinely revealed is identical to the sacred writings.\n\nSo, to sum it up: not only is there no evidence that everything the apostles taught orally ended up in Scripture, but we actually have positive evidence that oral tradition and Scripture are not identical.\n\nOkay, let’s now get back to the original counter argument from 1 Corinthians 4:6. There’s one last thing to say in response—the objection assumes “what is written” refers to the whole Bible, but that’s not actually clear from the text.\n\nEven respected Protestant scholars like Gordon Fee admit that it’s tough to pin down what Paul meant by “what is written.” On page 170 of his book The First Epistle to the Corinthians, which is part of the New International Commentary on the New Testament, Fee says that the phrase is “so obscure that [scholars] despair of finding its meaning.”\n\nLet me run through some of the ideas people have proposed for what Paul might mean by “beyond what is written.” These are based on the works of Joseph A. Fitzmyer in First Corinthians: A New Translation (pages 215-216) and Gordon Fee in The First Epistle to the Corinthians (pages 167-170).",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Tim.6.20", "2Tim.1.12-2Tim.1.14"],
      text: "El Catecismo lee el «depósito» como lo contenido en la Tradición y en la Escritura, confiado por los apóstoles al conjunto de la Iglesia {c:CEC84|Catecismo 84}.",
      apologists: {
        arguments: [
          {
            title:
              "El depósito de la fe se cerró con los últimos apóstoles y es más amplio que los 66 libros; Tradición y Escritura forman parte de él (Horn, Heschmeyer, Broussard). Ninguno de los tres cita 1 Timoteo 6:20 ni 2 Timoteo 1:12–14 en las líneas citadas",
            quotes: [
              {
                speaker: "Trent Horn",
                work: "Protestant Traditions You Won't Find in the Bible",
                outlet: "Catholic Answers Magazine",
                date: "6 de noviembre de 2017",
                locator:
                  "6 párrafos: del párrafo que empieza «Protestants claim that the word of God is confined…» al que termina «…Historical Study of the Doctrine of Final Punishment, 13.»",
                url: "https://www.catholic.com/magazine/online-edition/protestant-traditions-you-wont-find-in-the-bible",
                text: "Los protestantes afirman que la palabra de Dios está confinada a lo que se registra en la Escritura, y que no se dio ninguna nueva revelación después de que se escribieron los últimos libros de la Biblia. Los católicos coinciden en que la revelación pública, o depósito de la fe, cesó después de la muerte del último hombre apostólico (esto incluye a los apóstoles y a sus colaboradores, como Marcos y Lucas). No estamos de acuerdo, sin embargo, con la idea de que esta verdad pueda conocerse solo por la Escritura. Los protestantes que son escépticos de la Tradición sagrada deberían preguntarse por qué creen en el cese de la revelación divina, ya que la Escritura no aborda explícitamente esta cuestión.\n\nAlgunos han sostenido que esta verdad se describe en Judas 3, que habla de “la fe que fue una vez y para siempre entregada a los santos”, pero este versículo por sí solo no puede sostener la afirmación de que la revelación pública ha cesado. El apologista protestante John MacArthur dice que la palabra griega traducida como “entregada” en este versículo “se refiere a un acto completado en el pasado, sin ningún elemento continuo”. También dice que la frase “una vez para siempre” (griego, hapax) significa que “no hace falta añadir nada a la fe que ha sido entregada ‘una vez para siempre’”. Esto significaría que la fe fue entregada antes de que Judas escribiera, lo que implica que Judas y su enseñanza sobre el cese de la revelación pública no habrían formado parte de ese depósito original de la fe.\n\nLos argumentos a partir de Judas 3 también confunden “entregar la fe” con la revelación pública. Jesús entregó “la fe” una vez y para siempre a los apóstoles, pero la revelación pública de esa fe continuó durante décadas después de sus interacciones con ellos, mientras se escribía el Nuevo Testamento. No hay evidencia bíblica explícita de que esta revelación cesara después de la muerte del último apóstol (ni de que no haya continuado durante siglos en lugar de décadas).\n\nLos católicos coinciden con los protestantes en que esta revelación pública cesó en la Iglesia apostólica. El Catecismo dice que “no se debe esperar ninguna nueva revelación pública antes de la gloriosa manifestación de nuestro Señor Jesucristo” (66). Pero los católicos creen esta verdad sobre la base de la confiabilidad del Magisterio, que preserva la palabra de Dios en sus formas escrita (Escritura) y no escrita (Tradición), y no, como tendrían que creer los protestantes, sobre la base de la enseñanza clara de la Biblia sola.\n\nAsí que cuando los protestantes preguntan: “¿Dónde está eso en la Biblia?”, podrías responder con caridad: “¿Dónde dice la Biblia que todo lo que creemos como cristianos debe encontrarse en la Biblia?”. Luego podrías ofrecerles compartir otras creencias protestantes comunes que tienen sus raíces no en la Escritura, sino en tradiciones, tanto sagradas como humanas.\n\n[1] The Fire That Consumes: A Biblical and Historical Study of the Doctrine of Final Punishment, 13.",
                original:
                  "Protestants claim that the word of God is confined to what is recorded in Scripture and that no new revelation was given after the last books of the Bible were written. Catholics agree that public revelation, or the deposit of faith, ceased after the death of the last apostolic man (this includes the apostles and their associates like Mark and Luke). We disagree, however, with the idea that this truth can be known from Scripture alone. Protestants who are skeptical of Sacred Tradition should ask why they believe in the cessation of divine revelation, since Scripture does not explicitly address this issue.\n\nSome have argued that this truth is described in Jude 3, which speaks of “the faith which was once for all delivered to the saints,” but this verse on its own cannot support the claim that public revelation has ceased. Protestant apologist John MacArthur says that the Greek word translated “delivered” in this verse “refers to an act completed in the past with no continuing element.” He also says the phrase “once for all” (Greek, hapax) means “nothing needs to be added to the faith that has been delivered ‘once for all.’” This would mean that the “faith” had been delivered before Jude was written, which means Jude and its teaching about the cessation of public revelation would not have been a part of that original deposit of faith.\n\nArguments from Jude 3 also confuse “delivering the faith” with public revelation. Jesus gave “the faith” once and for all to the apostles, but the public revelation of that faith continued for decades after Jesus’ interactions with them during the writing of the New Testament. There isn’t any explicit biblical evidence that this revelation ceased after the death of the last apostle (or that it didn’t continue for centuries rather than decades).\n\nCatholics agree with Protestants that this public revelation did cease in the apostolic Church. The Catechism says that “no new public revelation is to be expected before the glorious manifestation of our Lord Jesus Christ” (66). But Catholics believe this truth based on the trustworthiness of the Magisterium, which preserves God’s word in both its written (Scripture) and unwritten (Tradition) forms—not, as Protestants would have to believe, based on the clear teaching of the Bible alone.\n\nSo when Protestants ask, “Where is that in the Bible?”, you might charitably ask in reply, “Where does the Bible say everything we believe as Christians must be found in the Bible?” Then you could offer to share with them some other common Protestant beliefs that have their roots not in Scripture but in traditions—both sacred and human.\n\n[1] The Fire That Consumes: A Biblical and Historical Study of the Doctrine of Final Punishment, 13.",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                work: "Will Rejecting Marian Dogmas Send You To Hell?",
                outlet: "Shameless Popery",
                date: "28 de julio de 2026",
                locator:
                  "5 párrafos: del párrafo que empieza «So as we’ve already seen, for something to be…» al que termina «…want to say, yes, there is this dogmatic authority.»",
                url: "https://www.catholic.com/audio/sp/will-rejecting-marian-dogmas-send-you-to-hell",
                text: "Así que, como ya vimos, para que algo sea un dogma tiene que provenir realmente del depósito de la fe. Gavin piensa que la asunción de María no está realmente en el depósito de la fe, pero al menos reconozcamos que en eso no discrepamos. Ahora, discrepamos en un par de cosas. Discrepamos, primero, en si el depósito de la fe son solo los 66 libros de la Biblia protestante. Y discrepamos, segundo, en si la asunción de María está contenida en el depósito de la fe. Pero a nivel de principio, católicos y protestantes en realidad coincidimos en que los dogmas deben estar enraizados en el depósito de la fe. Donde discrepamos es en lo otro que él señala correctamente: que en el protestantismo el dogma es reformable. El dogma puede cambiar porque la autoridad humana que reconoce el dogma puede equivocarse. Del lado católico somos muy claros: como el dogma está divina y formalmente revelado, es, como tal, irreformable.\n\nTiene autoridad divina. Esto va a ser una diferencia muy importante para entender por qué hay más dogma en la Iglesia católica. Y así, como señala Gavin con razón, hay más anatemas, porque tenemos la autoridad para saber realmente qué cosas pueden y no pueden ser creídas por todos. Existe un cuerpo capaz de dirimir esas cuestiones. Y ese cuerpo simplemente no existe en el protestantismo. Incluso cuando cuerpos más pequeños, como una denominación, anuncian qué cosas creen correctas, no tienen la clase de autoridad necesaria para declarar hereje a cualquiera que no esté de acuerdo con ellos. Voy a profundizar un poco más en eso, pero primero quiero dejar que Herman Bavink explique la distinción, porque lo hace bien. Dice que el dogma que confiesa la iglesia y que el dogmático desarrolla no es idéntico a la verdad absoluta de Dios misma. Ni siquiera la Iglesia católica romana se atreve a afirmar eso.\n\nY señala que, cuando hablamos de la infalibilidad del Papa, no creemos que esto sea lo mismo que la inspiración apostólica. Ahora bien, yo explicaría aquí que lo que pensamos que es distinto es que, con la inspiración apostólica, pueden añadirse al depósito de la fe cosas que antes no estaban. Los apóstoles pueden darte información dogmática nueva a la que no tenías acceso previo. Puedes conocer milagros de Jesús o enseñanzas de la fe, o algo así, que no se habían enseñado antes y que de otro modo no habrían sido conocibles. Eso no es lo que sucede. Aunque los protestantes a veces caricaturizan así la visión católica, los católicos no creemos que podamos hacer eso con el dogma. Otra vez: esa no es un área real en la que católicos y protestantes discrepen.\n\nAsí que no pensamos en el dogma como una nueva Escritura, algo de ese tipo. Y reconocemos que la manera en que algo se expresa, incluso si es perfectamente verdadero y dogmático en ese sentido, puede haber más cosas que también sean verdaderas. No sostenemos que estas sean revelaciones exhaustivas, ni que estén inspiradas divinamente en cuanto a la forma en que están redactadas. Están protegidas del error. Y así, lo que se define dogmáticamente se conoce, de hecho, con autoridad divina, y por eso merece el asentimiento de fe. Hacemos un acto de fe en los dogmas al hacer un hecho. Dicho de otra manera: cuando crees en Jesús, no solo crees que hubo un hombre llamado Jesús. Crees en las afirmaciones que hace sobre quién es y en las enseñanzas que imparte. Y así, con un dogma, esto es parte de lo que estás creyendo. Eso va a ser fundamental para entenderlo.\n\nBien. Volviendo a Herman babbing, sin embargo. Dice que en la teología católica queda menos espacio para la pregunta de hasta qué punto la verdad de Dios ha encontrado una expresión plenamente adecuada en el dogma de la iglesia. Puedes imaginar que podríamos usar más definición dogmática en el área X, Y, Z. Nunca vas a tener menos dogma. No vamos a decir: “Ay, no, dijimos algo falso”. Pero siempre hay espacio para decir que podríamos definir más plenamente esta área. Mientras que en el lado protestante, en palabras de Daving, dice esto: sobre la base de los supuestos protestantes, sin embargo, esto es mucho más el caso. Pues aquí, la guía del Espíritu Santo prometida a la iglesia no excluye la posibilidad del error humano. Así que esta es la tensión en la que creo que se encuentra el protestantismo. Por un lado, quieren decir que sí, que hay esta autoridad dogmática.",
                original:
                  "So as we’ve already seen, for something to be a dogma, it has to actually come from the deposit of faith. Gavin thinks that the assumption of Mary isn’t really in the deposit of faith, but at least recognize that we don’t disagree on that. Now, we disagree on a couple things here. We disagree, number one, on whether the deposit of faith is just the 66 books of the Protestant Bible. And we disagree number two on whether the assumption of Mary is contained in the deposit of faith. But at the level of principle, Catholics and Protestants actually agree that dogmas have to be rooted in the deposit of faith. Where we disagree is on the other thing he highlights correctly, which is that in Protestantism, dogma’s reformable. Dogma can change because the human authority recognizing dogma can err. On the Catholic side, we’re very clear because dogma is divinely and formally revealed, it is as such irreformable.\n\nIt carries divine authority. This is going to be a really important difference to understand why there’s more dogma in the Catholic church. And thus, as Gavin points out rightly, more anathemas, because we have the authority to actually know which things can and can’t be believed by everyone. There is a body capable of adjudicating those questions. And that body just doesn’t really exist in Protestantism. And even when smaller bodies like a denomination announce which things they think are correct, they don’t carry the kind of authority necessary to declare anyone who disagrees with them a heretic. I’ll get into that a little more, but first I want to let Herman Bavink kind of highlight the distinction because he does a good job here. He says the dogma of the church confesses and the dogmatician develops is not identical to the absolute truth of God itself. Not even the Roman Catholic church dares to make that claim.\n\nAnd he makes a point that when we talk about the infallibility of the Pope, we don’t think this is the same as apostolic inspiration. Now I would explain here, what we think is different is with apostolic inspiration, you can have things added to the deposit of faith that were not there before. The apostles can give you new dogmatic information that you had no prior access to. You can learn about miracles of Jesus or teachings of the faith or something like this that were not previously taught and wouldn’t have been knowable otherwise. That’s not what’s happening. Even if Protestants sometimes caricature the Catholic view that way, Catholics don’t think we can do that with dogma. Again, that’s not an actual area where Catholics and Protestants disagree.\n\nSo we don’t think of dogma as new scripture, something like this. And we recognize that the way something is expressed, even if it is perfectly true and dogmatic in that sense, there might be more things that are also true. We don’t claim these are like exhaustive revelations or that they’re divinely inspired in terms of how things are worded. They’re protected from error. And so what is dogmatically defined is in fact known with divine authority. And so it deserves the ascent of faith. We make an act of faith in dogmas by making a fact. In other words, like this, when you believe in Jesus, you don’t just believe that there was a guy named Jesus. You believe in claims he makes about who he is and teachings that he teaches. And so with a dogma, this is part of what it is you’re believing. That’s going to be critical to understand.\n\nOkay. Going back to Herman babbing though. He says in Catholic theology, there’s less room left for the question of how far the truth of God has found fully adequate expression in the church’s dogma. You can imagine we could really use more dogmatic definition in area X, Y, Z. You’re never going to have less dogma. We’re not going to say, oh no, we said something that was false. But there’s always room to say we could more fully define this area. Whereas on the Protestant side, in Daving’s words, he says this, on the basis of Protestant assumptions, however, this is much more the case. For here, the guidance of the Holy Spirit promised to the church does not exclude the possibility of human error. So this is the tension Protestantism, I think, finds itself in. On the one hand, they want to say, yes, there is this dogmatic authority.",
                translation: "ai-assisted",
              },
              {
                speaker: "Karlo Broussard",
                work: "Where Catholics Go Wrong in Critiquing Sola Scriptura",
                outlet: "Dr. Karlo",
                date: "2 de febrero de 2026",
                locator:
                  "2 párrafos: del párrafo que empieza «Yeah, great question. My response is those apostolic traditions…» al que termina «…has come from the apostles. Does that make sense?»",
                url: "https://www.catholic.com/audio/drk/where-catholics-go-wrong-in-critiquing-sola-scriptura",
                text: "Sí, buena pregunta. Mi respuesta es que esas tradiciones apostólicas que acabo de exponer, seguro, son las de que no habrá nueva revelación pública, ninguna nueva Escritura inspirada. Son creencias del mismo nivel que, digamos, la Inmaculada Concepción y la asunción corporal de María; así como la Inmaculada Concepción o la asunción se creen, como católicos, parte integrante del sagrado depósito de la fe, ya sea en la tradición o en la Escritura, así también la creencia de que no habrá nuevos apóstoles, ninguna nueva revelación pública, ninguna nueva Escritura inspirada, es parte del sagrado depósito de la fe, ya sea en la tradición o en la Escritura. Y por eso tienen el mismo valor en relación con la autoridad vinculante que tienen sobre nuestras conciencias como cristianos. Así que ambas son necesarias para creer como parte del sagrado depósito de la fe, lo que significa que en los dos casos, si hago un acto positivo de la voluntad, con pleno conocimiento y consentimiento deliberado para decir que no, entonces estoy rechazando una parte del sagrado depósito de la fe.\n\nEntonces, las graves consecuencias que se seguirían son las mismas en ambos casos. Ahora bien, por supuesto, eso plantea la pregunta que tú mencionaste: ¿y qué pasa si alguien tiene una idea distinta del can in it? Bueno, objetivamente hablando, lo articularíamos como católicos como un rechazo de lo que nos han dado los apóstoles. Si esa persona es culpable de tal rechazo cuando comparezca ante el tribunal de Cristo, esa es otra pregunta, y solo Dios podrá juzgar si el individuo es culpable o no por su decisión equivocada de rechazar lo que sabemos que proviene de los apóstoles. ¿Tiene sentido?",
                original:
                  "Yeah, great question. My response is those apostolic traditions that I just articulated for sure, that there will be no new public revelation, no new inspired scripture. Those are beliefs that are of the same level as say the immaculate conception and Mary’s bodily assumption just as the immaculate conception of the assumption or believed as Catholics to be part and parcel of the sacred deposit of faith, whether in tradition or in scripture sold to the belief that there will be no new apostles, no new public revelation, no new inspired scripture or part of the sacred deposit of faith, whether in tradition or in scripture. And so they’re of equal value in relation to the binding authority that they have on our consciences as Christians. So both are necessary to believe as part of the sacred deposit of faith, which means in both cases, if I make a positive act of the will with full knowledge and deliberate consent to say no, well then I’m rejecting a part of the sacred deposit of faith.\n\nSo the severe consequences that would follow are the same in both cases. Now of course, that raises the question as you brought up, well, what if somebody has a different idea of the can in it? Well, objectively speaking, we would articulate that as a Catholic as a rejection of what has been given to us by the apostles, whether that individual is culpable for such a rejection when he stands before the judgment seat of Christ, that’s a different question, and only God’s going to be able to judge that, whether the individual is culpable or not, for his erroneous decision to reject that which we know has come from the apostles. Does that make sense?",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.2.42"],
      text: "Fiel al depósito, todo el pueblo santo, unido a sus pastores, «persevera constantemente en la doctrina de los Apóstoles y en la comunión, en la fracción del pan y en las oraciones» {c:CEC84,DV10|Catecismo 84, citando Dei Verbum 10}.",
      apologists: {
        arguments: [
          {
            title:
              "Hechos 2:42: los primeros creyentes se dedicaban a la enseñanza de los apóstoles, en comunión con ellos (Heschmeyer); Horn añade que una sucesión de autoridad conservó esa enseñanza",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "Is the Bible “Self-Attesting,” or Do We Need the Church?",
                outlet: "Shameless Popery",
                date: "20 de julio de 2023",
                locator:
                  "4 párrafos: del párrafo que empieza «Now that is an interesting line because it’s not…» al que termina «…that is a really bad understanding of spiritual gifts.»",
                url: "https://www.catholic.com/audio/sp/is-the-bible-self-attesting-or-do-we-need-the-church",
                text: "Ahora bien, esa es una línea interesante porque no queda del todo claro en el texto si son solo los apóstoles los que hablan en lenguas o si son los 120. Eso puede ser una pista de que son los apóstoles, porque Jesús tiene muchos seguidores no galileos, pero las personas que los oyen hablar en lenguas parecen ser galileas. Aun así, no podemos decirlo con seguridad solo con la evidencia. Sabemos que hay 120 personas reunidas, pero luego sabemos en el versículo 14 que Pedro aparece de pie junto a los once. Así que hay 12 apóstoles: Pedro y 11 más. Y alza la voz y predica la primera homilía o sermón de Pentecostés. Dice: “Hombres de Judea y todos los que habitan en Jerusalén, sepan esto y presten oído a mis palabras”. Y predica, inspirado por el Espíritu Santo, una homilía asombrosa, y al final de ella, sus oyentes quedan compungidos de corazón y le dicen a Pedro y al resto de los apóstoles: “Hermanos, ¿y qué haremos?”.\n\nPedro les dice: “Arrepiéntanse y bautícense, cada uno de ustedes, en el nombre de Jesucristo para el perdón de sus pecados, y recibirán el don del Espíritu Santo”. Ese es un versículo bastante interesante sobre el bautismo y su papel en la salvación, y también sobre la promesa del bautismo, el don del Espíritu Santo. Pedro dice: “Esta promesa es para ustedes y para sus hijos”. También es interesante para los debates sobre el bautismo: “¿Oh, deben bautizarse los bebés? ¿Deben bautizarse los niños?”. Aparentemente, por lo que dice Pedro, sí. Pero, de todos modos, ese no es el punto de este episodio, así que lo dejaremos para otra ocasión. Pedro sigue adelante, da testimonio con muchas otras palabras y los exhorta, diciendo: “Sálvense de esta generación torcida”. Y luego, el versículo 41: “Los que recibieron la palabra de Pedro fueron bautizados, y aquel día se les añadieron unas 3000 almas”. ¿Añadidas a qué? Añadidas a la Iglesia.\n\nSabemos esto porque el versículo siguiente dice que se dedicaban a la enseñanza de los apóstoles y a la comunión, a la fracción del pan y a las oraciones. Ahora bien, la fracción del pan es la forma en que Lucas describe la Eucaristía, así que están entrando en comunión con los apóstoles. Están entrando en la comunión fraterna. En resumen, cuando viene el Espíritu Santo, no viene de esa manera salvaje e individualista. A veces tenemos la impresión, creo, sobre todo cuando se habla de cosas como el don de lenguas, de que es algo salvaje, caótico y desordenado, pero en la presentación de Hechos 2 no es en absoluto así. El don de lenguas orienta a los oyentes hacia un sermón que están por escuchar, que proclama a Jesús y conduce a su conversión. ¿Y quién da el sermón? San Pedro, el líder de los apóstoles, el que puede ser descrito como “Pedro y los once”, en lugar de decir simplemente uno de los doce. Si dices Buddy Holly in the Crickets, tienes una buena pista de quién es el cantante principal.\n\nAsí que Pedro, el cantante principal de los apóstoles, todo lo que quiero decir es que cuando viene el Espíritu Santo, viene de manera ordenada. Sí, hay dones espirituales derramados sobre todos, pero eso no te aparta de la Iglesia institucionalmente organizada. Te acerca a ella. Lo vemos en la forma en que el Espíritu Santo obra aquí y en la forma en que obra también en el ministerio sacramental del bautismo al final de Hechos 2. Tienes este derramamiento carismático muy emocionante al comienzo de Hechos 2, y un derramamiento sacramental del Espíritu Santo al final de Hechos 2. Pero en ambos casos, está orientado hacia la unidad con la Iglesia, no alejado de ella. Esto es muy importante porque la manera en que Calvino interpreta esta guía interna del Espíritu Santo es como algo que tengo para mí mismo, aparte de la Iglesia, lo que vuelve innecesaria la Iglesia, y eso es una comprensión muy mala de los dones espirituales.",
                original:
                  "Now that is an interesting line because it’s not entirely clear from the text whether it’s just the apostles speaking in tongues or whether it’s all of the 120, and that may be a clue that it’s the apostles because Jesus has plenty of non-Galilean followers, but the people they’re hearing speaking in tongues appear to be Galileans. Nevertheless, we can’t say for sure on the basis of the evidence alone. We know there are 120 people gathered, but then we know in verse 14 that Peter is described as standing with the 11. So there’s 12 apostles, Peter and 11 others, and he lifts up his voice and he preaches the first Pentecost homily or sermon. He says, “Men of Judea and all who dwell in Jerusalem, let this be known to you and give ear to my words.” And he preaches, inspired by the Holy Spirit, an amazing homily, and at the end of it, his listeners are cut to the heart, and they say to Peter and the rest of the apostles, “Brethren, and what shall we do?”\n\nPeter says to them, “Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins, and you shall receive the gift of the Holy Spirit.” That’s a pretty interesting verse about baptism and its role in salvation, and also the promise of baptism, the gift of the Holy Spirit. Peter says, “This promise is to you and to your children.” Also interesting for baptismal debates, “Oh, should infants be baptized? Should children be baptized?” Seemingly, from what Peter’s saying, yes. But nevertheless, that’s not the point of this episode, so we’ll leave that for another time. Peter goes on and testifies with many other words and exhorts them, saying, “Save yourselves from this crooked generation.” And then verse 41, “Those who received Peter’s word were baptized, and they were added that day about 3000 souls.” Added to what? Added to the church.\n\nWe know this because the next verse says they devoted themselves to the apostles teaching and fellowship, to the breaking of bread and the prayers. Now the breaking of bread is the way Luke describes the Eucharist, and so they’re entering into communion with the apostles. They’re entering into fellowship. So all that’s to say, when the Holy Spirit comes, it’s not in this wild, individualistic way. We sometimes have the mental impression, I think. When you have, especially, things like the gift of tongues, that it’s wild and chaotic and disorderly, but in the presentation in Acts 2, that’s not at all. The gift of tongues is orienting the listeners towards a sermon they’re about to hear proclaiming Jesus and leading to their conversion. Who’s the sermon by? It’s by St. Peter, the leader of the apostles, the one who can be described as Peter and the 11, instead of just saying one of the 12, if you say Buddy Holly in the Crickets, you’ve got a good clue who the lead singer is.\n\nSo Peter, the lead singer of the apostles, all that’s to say is, when the Holy Spirit comes, He comes in an orderly way. Yes, there are spiritual gifts poured out on everybody, but that doesn’t draw you away from the institutionally organized church. It draws you towards it. We see that in the way the Holy Spirit works here and in the way he works also in the sacramental ministry of baptism at the end of Acts 2. You have this really exciting what’s called charismatic outpouring in the beginning of Acts 2, you have a sacramental outpouring of the Holy Spirit at the end of Acts 2. But in both cases, it’s oriented towards unity with the church, not oriented away from it. This is really important because the way Calvin is interpreting this internal guidance of the Holy Spirit, it’s just something I have for myself apart from the church, making the church unnecessary, and that is a really bad understanding of spiritual gifts.",
                translation: "ai-assisted",
              },
              {
                speaker: "Trent Horn",
                work: "What You Need to Know About the Reality of the Church and Ecumenism",
                outlet: "Catholic Answers Magazine",
                date: "28 de marzo de 2017",
                locator:
                  "7 párrafos: del párrafo que empieza «There are very early accounts of this hierarchy in…» al que termina «…great amen that are still said at Mass today.»",
                url: "https://www.catholic.com/magazine/online-edition/what-you-need-to-know-about-the-reality-of-the-church-and-ecumenism",
                text: "Hay relatos muy tempranos de esta jerarquía en los textos de los primeros autores cristianos. En el año 110 d. C., san Ignacio de Antioquía les dijo a sus lectores: Seguid al obispo como Jesucristo sigue al Padre, y al presbiterio como a los apóstoles; y respetad a los diáconos como institución de Dios. Que nadie haga nada relacionado con la Iglesia sin el obispo (Letter to the Smyrnaeans).\n\nA finales del siglo I, el cuarto papa, Clemente I, recordó a los cristianos de la ciudad de Corinto la sucesión apostólica, diciendo:\n\nNuestros apóstoles sabían, por medio de nuestro Señor Jesucristo, que habría disputas por el cargo de obispo. Por eso, habiendo recibido un conocimiento perfecto, designaron a los ya mencionados y luego añadieron la disposición de que, si morían, otros hombres aprobados los sucedieran en su ministerio (Letter to the Corinthians, 44:1–3).\n\nTanto el Nuevo Testamento como los registros de la Iglesia primitiva muestran que esta sucesión de autoridad permitió a la Iglesia conservar las enseñanzas originales de los apóstoles. Por ejemplo, el libro de los Hechos describe cómo los miembros de la Iglesia “perseveraban en la enseñanza de los apóstoles y en la comunión, en la fracción del pan y en las oraciones” (Hechos 2:42). El Didache, un catecismo del siglo I, exhorta a los cristianos a: “Reúnanse el día del Señor, partan el pan y ofrezcan la Eucaristía; pero antes confiesen sus faltas, para que su sacrificio sea puro” (Didache, 14).\n\nEn el siglo II, san Justino Mártir escribió sobre la Misa y sobre cómo los reunidos “ofrecen oraciones fervorosas en común por nosotros mismos, por la persona bautizada [iluminada] y por todos los demás en todo lugar”, y que después “se saludan con un beso”. Luego, el que preside toma el pan y el vino y hace lo siguiente:\n\n[Él] da alabanza y gloria al Padre del universo, por el nombre del Hijo y del Espíritu Santo, y da gracias extensamente por habernos considerado dignos de recibir estas cosas de sus manos. Y cuando ha concluido las oraciones y las acciones de gracias, todo el pueblo presente expresa su asentimiento diciendo Amén (First Apology, 65).\n\nLa descripción de Justino se corresponde con las oraciones de los fieles, el beso de la paz, la oración de acción de gracias y el gran Amén que todavía se dicen en la Misa de hoy.",
                original:
                  "There are very early accounts of this hierarchy in the texts of early Christian authors. In A.D. 110, St. Ignatius of Antioch told his readers: Follow the bishop, even as Jesus Christ does the Father, and the presbytery as you would the apostles; and reverence the deacons, as being the institution of God. Let no man do anything connected with the Church without the bishop (Letter to the Smyrnaeans).\n\nAt the end of the first century, the fourth pope, Clement I, reminded the Christians in the city of Corinth about apostolic succession, saying:\n\nOur apostles knew through our Lord Jesus Christ that there would be strife for the office of bishop. For this reason, therefore, having received perfect foreknowledge, they appointed those who have already been mentioned and afterwards added the further provision that, if they should die, other approved men should succeed to their ministry (Letter to the Corinthians, 44:1–3).\n\nBoth the New Testament and the records of the early Church show that this succession of authority has enabled the Church to preserve the apostles’ original teachings. For example, the book of Acts describes how the members of the Church “held steadfastly to the apostles’ teaching and fellowship, to the breaking of the bread and to the prayers” (Acts 2:42). The Didache, a first-century catechism, exhorts Christians to “Assemble on the Lord’s day, and break bread and offer the Eucharist; but first make confession of your faults, so that your sacrifice may be a pure one” (Didache, 14).\n\nIn the second century, St. Justin Martyr wrote about the Mass and how the assembled “offer hearty prayers in common for ourselves and for the baptized [illuminated] person, and for all others in every place,” and after that, they “salute one another with a kiss.” The presider then takes bread and wine and does the following:\n\n[He] gives praise and glory to the Father of the universe, through the name of the Son and of the Holy Ghost, and offers thanks at considerable length for our being counted worthy to receive these things at his hands. And when he has concluded the prayers and thanksgivings, all the people present express their assent by saying Amen (First Apology, 65).\n\nJustin’s description corresponds to the prayers of the faithful, the kiss of peace, the prayer of thanksgiving, and the great amen that are still said at Mass today.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.18.20"],
      text: "Cristo está presente en su palabra: «cuando se lee en la Iglesia la Sagrada Escritura, es El quien habla» {c:SC7|Sacrosanctum Concilium 7}.",
      apologists: {
        arguments: [
          {
            title: "La autoridad vinculante de la Iglesia se ejerce en comunión con Cristo, reunida en su nombre",
            quotes: [
              {
                speaker: "Scott Hahn",
                work: "To Win Them Back: Scott Hahn Reflects on the Twenty-Third Sunday in Ordinary Time",
                outlet: "St. Paul Center",
                date: "Sin fecha indicada",
                locator: "Párrafos que empiezan «As Ezekiel is appointed watchman»",
                url: "https://stpaulcenter.com/posts/to-win-them-back-scott-hahn-reflects-on-the-twenty-third-sunday-in-ordinary-time",
                text: "Así como Ezequiel es designado centinela de la casa de Israel en la primera lectura de hoy, así Jesús, en el Evangelio de hoy, establece a sus discípulos como guardianes del nuevo Israel de Dios, la Iglesia (ver Gálatas 6:16). También establece procedimientos para tratar el pecado y las violaciones de la fe, basándose en las normas de disciplina prescritas por Moisés para Israel (ver Levítico 19:17–20; Deuteronomio 19:13). Los jefes del nuevo Israel, sin embargo, reciben poderes extraordinarios, semejantes a los dados a Pedro (ver Mateo 16:19). Tienen el poder de atar y desatar, de perdonar los pecados y de reconciliar a los pecadores en su nombre (ver Juan 20:21–23). Pero los poderes que Él da a los apóstoles y a sus sucesores dependen de su comunión con Él. Así como Ezequiel solo debe enseñar lo que oye decir a Dios, así los discípulos deben reunirse en su nombre, orar y buscar la voluntad de nuestro Padre celestial.",
                original:
                  "As Ezekiel is appointed watchman over the house of Israel in today’s first Reading, so Jesus in the Gospel today establishes His disciples as guardians of the new Israel of God, the Church (see Galatians 6:16). He also puts in place procedures for dealing with sin and breaches of the faith, building on rules of discipline prescribed by Moses for Israel (see Leviticus 19:17–20; Deuteronomy 19:13). The heads of the new Israel, however, receive extraordinary powers—similar to those given to Peter (see Matthew 16:19). They have the power to bind and loose, to forgive sins and to reconcile sinners in His name (see John 20:21–23). But the powers He gives the Apostles and their successors depend on their communion with Him. As Ezekiel is only to teach what he hears God saying, so the disciples are to gather in His name and to pray and seek the will of our heavenly Father.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Pitre dice que Mt 18:19–20 suele sacarse de contexto como promesa de que cualquier dos cristianos que estén de acuerdo en la oración serán escuchados; en el contexto, Jesús sigue hablando a los apóstoles sobre atar y desatar, de modo que el sentido principal es el poder de la oración apostólica, y lo aplica a los obispos reunidos en concilio ecuménico (Vaticano II, Trento), que toman decisiones vinculantes sobre fe, moral y disciplina y son «los dos o tres que se han reunido en el nombre de Jesús»",
            quotes: [
              {
                speaker: "Dr. Brant Pitre",
                work: "Apostolic Authority: Binding and Loosing Explained | Dr. Brant Pitre",
                outlet: "Catholic Productions",
                date: "19 de junio de 2020",
                locator: "Minutos 3:14 a 4:34",
                url: "https://www.youtube.com/watch?v=Jbn_ARzLngc&t=194s",
                text: "Y donde dos o tres se reúnan en mi nombre, allí estoy yo en medio de ellos. Ahora bien, a veces la gente podría sacar esto de contexto y simplemente decir: Bueno, si dos cristianos están de acuerdo en algo y oran por ello, entonces debería suceder, ¿no? Bueno, no. Eso no es exactamente lo que Jesús está señalando en el contexto aquí. Él sigue hablando a los apóstoles sobre la autoridad de atar y desatar que tienen. Y aquí lo que realmente quiere decir, su significado principal en el contexto, es sobre el poder de la oración apostólica. Sobre el poder de la oración de dos de sus apóstoles cuando están de acuerdo en algo, ¿no? O cuando le piden algo al Señor. Es una oración particularmente poderosa porque Jesús les está dando esta autoridad especial dentro de la iglesia. Y aquí se puede pensar, por ejemplo, en la oración de los obispos, en comunión unos con otros, en un concilio ecuménico. ¿Qué es lo tan importante de un concilio ecuménico como el Vaticano II o el Concilio de Trento? Bueno, es porque los sucesores de los apóstoles se han reunido para orar y para tomar decisiones vinculantes para la iglesia sobre asuntos de fe y de moral, así como sobre asuntos de disciplina, ¿no? Ellos son los dos o tres que se han reunido en el nombre de Jesús. Y cuando se reúnen en el nombre de Jesús, Él está presente en sus apóstoles de una manera especial, de una manera poderosa, con autoridad.",
                original:
                  "And where two or three are gathered in my name, there I am in the midst of them. Now, sometimes people might take this out of context and just say, Well, if two Christians agree on anything and they pray about it, then it should happen, right? Well, no. That's not exactly what Jesus is getting at in context here. He's still talking to the apostles about the binding and loosing authority that they have. And here what he's really getting at, its primary meaning in context, is about the power of apostolic prayer. About the power of the prayer of two of his apostles when they agree on something, right? Or when they ask the Lord something. That is a particularly powerful prayer because Jesus is giving them this special authority within the church. And you can think here about the prayer of bishops, for example, in communion with one another at an ecumenical council. What's so important about an ecumenical council like Vatican II or the Council of Trent? Well, it's because the successors of the apostles have gathered together to pray and to make binding decisions for the church on matters of faith and morals, as well as matters of discipline, right? They are the two or three who have gathered in the name of Jesus. And when they gather in the name of Jesus, He's present in his apostles in a special way, in a powerful way, in an authoritative way.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Luke.2.19", "Luke.2.51"],
      text: "La comprensión de lo transmitido crece por «la contemplación y el estudio de los creyentes, que las meditan en su corazón» {c:DV8|Dei Verbum 8, que remite a Lucas 2:19, 51}.",
      apologists: {
        arguments: [
          {
            title: "El Evangelio de Lucas se nutre de la tradición oral de María (Lucas 2:19, 2:51)",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "Mark and Luke Not Eyewitnesses",
                outlet: "A Daily Defense",
                date: "13 de febrero de 2023",
                locator:
                  "5 párrafos: del párrafo que empieza «You don’t have to be an eyewitness to write…» al que termina «…pondering them in her heart” (Luke 2:19, cf. 2:51).»",
                url: "https://www.catholic.com/audio/ddp/mark-and-luke-not-eyewitnesses",
                text: "No hace falta ser testigo ocular para escribir una biografía precisa.\n\nHoy en día los biógrafos no tienen que haber conocido a la persona sobre la que escriben. Ni siquiera tienen que haber vivido en la misma época que su biografiado. Piensen en todas las biografías recientes de Abraham Lincoln. Ningún autor moderno fue testigo ocular de Lincoln, y, sin embargo, nadie desestima sus biografías por eso. Lo que importa es que el biógrafo tenga acceso a fuentes confiables, y tanto Marcos como Lucas las tuvieron.\n\nSegún Juan el Presbítero, una figura del siglo I que probablemente fue uno de los autores del Nuevo Testamento y a la que a veces se identifica con el apóstol Juan, Marcos fue intérprete de Pedro (cf. 1 Pedro 5:13) y escribió su Evangelio basándose en su conocimiento de la predicación de Pedro (ver Eusebio, Church History 3:39:14–15). Dada la inusual prominencia de Pedro en el Evangelio de Marcos, los estudiosos en general han aceptado que esto es correcto. Richard Bauckham incluso ha argumentado que Marcos usa un recurso literario conocido como inclusio para señalar que Pedro está detrás de la información de su Evangelio (ver Jesus and the Eyewitnesses, capítulos 6–7). Por lo tanto, Marcos se basa en testimonio ocular.\n\nDe manera similar, Lucas nos informa al comienzo de su Evangelio que la información que contiene fue «transmitida por quienes desde el principio fueron testigos oculares y ministros de la palabra» (Lucas 1:2). Incluso podemos saber de qué testigos oculares proviene buena parte de la información. Primero, Lucas usó a Marcos como una de sus fuentes, así que parte de su material vino de Pedro a través de Marcos. Segundo, Lucas pasó varios años con Pablo en Roma (Hechos 28:16, 30), donde Pedro también pasó la última parte de su ministerio. Así, Pedro fue una fuente importante para Hechos 1–12 (ver día 26), y es probable que Lucas también haya tomado parte del material de su Evangelio directamente de Pedro.\n\nTambién podemos detectar otras fuentes. Por ejemplo, Lucas conserva tradiciones derivadas de la Virgen María, y lo señala al notar cómo María «guardaba todas estas cosas, meditándolas en su corazón» (Lucas 2:19; cf. 2:51).",
                original:
                  "You don’t have to be an eyewitness to write an accurate biography.\n\nToday biographers don’t have to know the person they are writing about. They don’t even have to be alive at the same time as their subject. Consider all the recent biographies of Abraham Lincoln. No modern authors were eyewitnesses of Lincoln, yet people don’t dis- count their biographies on that basis. What matters is that a biographer has access to reliable sources, and both Mark and Luke did.\n\nAccording to the first-century figure John the Presbyter, who was likely one of the authors of the New Testament and who is sometimes identified as the apostle John, Mark served as Peter’s interpreter (cf. 1 Peter 5:13) and wrote his Gospel based on his knowledge of Peter’s preaching (see Eusebius, Church History 3:39:14–15). Based on the un- usual prominence of Peter in Mark’s Gospel, scholars have generally agreed that this is correct. Richard Bauckham has even argued that Mark uses a literary device known as inclusio to signal the fact that Peter stands behind the information in his Gospel (see Jesus and the Eye- witnesses, chapters 6–7). Mark is thus based on eyewitness testimony.\n\nSimilarly, Luke informs us at the beginning of his Gospel that the information in it was “delivered to us by those who from the beginning were eyewitnesses and ministers of the word” (Luke 1:2). We can even tell which eyewitnesses much of the information came from. First, Luke used Mark as one of his sources, so some of his material came from Peter through Mark. Second, Luke spent several years with Paul in Rome (Acts 28:16, 30), where Peter also spent the later part of his ministry. Peter thus served as a major source for Acts 1–12 (see Day 26), and Luke likely derived some of the material in his Gospel directly from Peter as well.\n\nWe can also detect other sources. For example, Luke preserves traditions derived from the Virgin Mary, and he signals this by noting how Mary “kept all these things, pondering them in her heart” (Luke 2:19, cf. 2:51).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "María muestra cómo guardar y meditar la palabra",
            quotes: [
              {
                speaker: "Scott Hahn",
                work: "Children of God: Scott Hahn Reflects on the Feast of Mary, Mother of God",
                outlet: "St. Paul Center",
                date: "Sin fecha indicada",
                locator: "Párrafos que empiezan «This is the good news of great joy»",
                url: "https://stpaulcenter.com/posts/children-of-god-scott-hahn-reflects-on-the-feast-of-mary-mother-of-god",
                text: "Esta es la buena noticia de gran alegría que los pastores dan a conocer hoy en Belén (ver Lucas 2:10). Como los pastores, también nosotros debemos apresurarnos hoy a encontrar a Jesús con María y José, para glorificar a Dios por sus bendiciones. Y como María, debemos guardar su palabra y meditarla, dejándola habitar abundantemente en nuestros corazones (ver Colosenses 3:16).",
                original:
                  "This is the good news of great joy that the shepherds make known in Bethlehem today (see Luke 2:10). Like the shepherds, we too should make haste today to find Jesus with Mary and Joseph, to glorify God for His blessings. And like Mary, we should keep His word and reflect upon it, letting it dwell richly in our hearts (see Colossians 3:16).",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Thess.2.13", "Heb.4.12", "Acts.20.32"],
      text: "En la Escritura la Iglesia «no recibe solamente una palabra humana, sino lo que es realmente: la Palabra de Dios», que es «viva y eficaz» {c:CEC104|Catecismo 104} {c:DV21|Dei Verbum 21}.",
      apologists: {
        arguments: [
          {
            title:
              "«La palabra de Dios» no siempre es la Escritura: 1 Tesalonicenses 2:13 llama palabra de Dios a la predicación de los apóstoles (Heschmeyer, Horn)",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "7 Bible Verses That DON'T Prove Sola Scriptura",
                outlet: "Shameless Popery",
                date: "19 de diciembre de 2024",
                locator:
                  "4 párrafos: del párrafo que empieza «And so if you’re someone who believes in soul…» al que termina «…which you were taught by us by letter alone.»",
                url: "https://www.catholic.com/audio/sp/un-biblical-teachings-vs-sola-scriptura",
                text: "Así que si tú crees en el alma de la Escritura, ten cuidado con eso. Y en cualquier caso, cada vez que veas que alguien presenta una evidencia, presta mucha atención. ¿Dice “las Escrituras escritas”, o solo dice “revelación” o “palabra de Dios”? Porque todo el debate es si toda la revelación de Dios puede confinarse a la sola Escritura, o si se señalan cosas y se habla de la bondad de la revelación. No pruebes que estás asumiendo una conclusión, porque eso se convierte en un argumento circular. Como dije antes, mi objetivo aquí no es darte un montón de pasajes que refuten la alma de la Escritura, ni mostrar que puedes confiar en la tradición, en la Iglesia católica o en cosas así. Alguien que es ortodoxo, alguien que es copto, podría aceptar fácilmente todo lo que estoy diciendo aquí. Mi punto es mucho más acotado: los versículos que veo que los protestantes usan para respaldar la solos scriptura simplemente no lo dicen.\n\nEstán obviamente sacados de contexto. Cuando los lees en su contexto bíblico, no dicen nada parecido a lo que sus defensores los retuercen para que signifiquen. Sin embargo, sería negligente de mi parte si no señalara al menos un par de lugares en los que solo s scriptura parece estar positivamente excluida, parece ser directamente rechazada. El primero está en 1 Tesalonicenses, capítulo 2, donde san Pablo elogia a los tesalonicenses porque, cuando recibieron la palabra de Dios que oyeron de nosotros, la aceptaron no como palabra de hombres, sino como lo que realmente es: palabra de Dios, que actúa en ustedes, los que creen. Así que si asocias la palabra de Dios solo con la palabra escrita de Dios, bueno, ahí tienes tu evidencia bíblica de que estás equivocado: la palabra de Dios, al menos en el momento en que el Nuevo Testamento usa la expresión en su sentido neotestamentario.\n\nNo incluye solo la transmisión escrita de la revelación. También incluye la transmisión oral de la revelación. Así que cuando les citas a los católicos todos esos pasajes sobre cómo tenemos que aferrarnos a la palabra de Dios y, por lo tanto, deberíamos tener solo la Escritura, bueno, la respuesta obvia es 1 Tesalonicenses 2:13: la palabra de Dios es más grande que la Biblia. La palabra de Dios es más grande que la revelación escrita. Ahora, un protestante podría responder: bueno, vale, era más grande que la Biblia en el momento en que se escribió 1 Tesalonicenses, pero quizá la Biblia la alcanzó. Quizá con el tiempo toda la palabra de Dios quedó escrita en las Escrituras. Esa es justamente la afirmación que soul s scriptura intenta probar. Pero no puedes simplemente asumirla y luego razonar hacia atrás desde ahí. Necesitas dar alguna evidencia bíblica. Y nada en la Biblia dice que lo único que encontramos en ella son esas indicaciones claras de que la palabra de Dios es más grande que la Biblia sola.\n\nDe hecho, sé que ya lo he mencionado antes, pero en 2 Tesalonicenses san Pablo vuelve a dirigirse a los tesalonicenses y les recuerda que se mantengan firmes en las tradiciones que recibieron de él, junto con las que se les enseñaron “de palabra o por carta”. Así que, una vez más, ves que él no dice que las únicas tradiciones vinculantes sean las escritas, las que son solo bíblicas. Además, afirma que son también las que se transmitieron de palabra. Ahora bien, hay un par de cosas que señalar. Primero, si Solis Spector fuera algo en lo que san Pablo creyera, nunca habría dicho eso. Así que claramente no lo creía, porque sabemos que no era cierto en el momento en que escribía. Recuerda la prueba que propuse antes. Segundo, si pensara que la palabra escrita es todo lo que necesitaban, simplemente habría dicho: manténganse firmes y aférrense a las tradiciones que les enseñamos, que recibieron de nosotros solamente por carta.",
                original:
                  "And so if you’re someone who believes in soul of scripture, watch out for that. And in either case, whenever you see someone present a piece of evidence, pay careful attention. Does it say the written scriptures or does it just say revelation or the word of God? Because the whole debate is the entirety of God’s revelation can confine to scripture alone and pointing to things, talking about the goodness of revelation. Don’t prove that you’re assuming a conclusion becomes a circular argument. As I said before, my goal here is not to give you a bunch of passages disproving so scripture or to show that you can trust tradition or the Catholic church or anything like that. Someone who is orthodox, someone who is Coptic could easily accept everything I’m saying here. My point is much narrower. The verses that I see Protestants use to support solos scriptura simply don’t.\n\nThey’re obviously taken out of context When you read them in their biblical context, they don’t say anything like their proponents are kind of twisting them to mean. Nevertheless, I would be remiss if I didn’t at least point out a couple of places in which solo s scriptura seems to be positively precluded seems to be directly sort of rejected. The first is from First Thessalonians chapter two in which St Paul praises the Thessalonians that when you receive the word of God, which you heard from us, you accepted it not as the word of men, but as what it really is the word of God, which is at work and you believe it. So if you’re someone who associates the word of God with just the written word of God, well you have your biblical evidence that you are mistaken the word of God, at least at the time the New Testament is being used in its New Testament usage.\n\nIt does not include only the written transmission of revelation. It also includes the oral transmission of revelation. So when you cite to Catholics all of these passages about how we need to hold to the word of God and therefore we should have scripture alone, well, the obvious counter is one Thessalonians two 13, which the word of God is bigger than the Bible. The word of God is bigger than written revelation. Now, a Protestant could respond, well, okay, it was bigger than the Bible at the time one Thessalonians is written, but maybe the Bible caught up to it. Maybe eventually all of the word of God is written down in the scriptures. That is the very claim soul s scriptura is trying to prove. But you can’t just assume that and then work backwards from there. You need to give some biblical evidence. And nothing in the Bible says that the only things we find in the Bible are these clear indications that the word of God is bigger than the Bible alone.\n\nIn fact, I know I’ve mentioned this before, but Second Thessalonians St. Paul goes back to the Thessalonians and reminds them to hold to the traditions which they received from them with those which you were taught by us, either by word of mouth or by letter. So once again, you see that he’s not saying that the only binding traditions are in written form, they’re just the biblical traditions. He’s also claiming they’re the ones transmitted by word of mouth. Now, a couple things to point out there. If Solis Spector was something St. Paul believed in, he would never have said that. So clearly he didn’t first because we know it wasn’t true at the time he’s writing. Remember the earlier test I proposed, but second, if he thought the written word is all they needed, he would’ve just said, stand firm and hold to the traditions, which you were taught by us by letter alone.",
                translation: "ai-assisted",
              },
              {
                speaker: "Trent Horn",
                work: "The Bible Blitzkrieg",
                outlet: "Catholic Answers Magazine",
                date: "18 de marzo de 2024",
                locator:
                  "9 párrafos: del párrafo que empieza «As Jerome shows us, any heretic can string along…» al que termina «…error, and Scripture is without error (Dei Verbum 11).»",
                url: "https://www.catholic.com/magazine/online-edition/the-bible-blitzkrieg",
                text: "Como nos muestra Jerónimo, cualquier hereje puede encadenar citas bíblicas y decir que tiene razón. Por ejemplo, puedes encontrar literatura de los Testigos de Jehová que cita decenas de pasajes que, según los Testigos, muestran que Jesús no es verdaderamente divino. Tu amigo protestante les diría con razón que, al revisar cada uno de esos versículos por separado, se ve que ninguno de ellos refuta la divinidad de Cristo. Solo necesita ver que lo mismo vale cuando repasamos las decenas de versículos bíblicos que citó como evidencia contra el catolicismo.\n\nEn muchos de estos casos descubro que los versículos citados no son solo interpretaciones incorrectas, sino interpretaciones irrelevantes. El versículo no tiene nada que ver con el tema que se está discutiendo. Por ejemplo, al defender la sola scriptura, los protestantes suelen citar pasajes bíblicos que afirman la bondad y la utilidad de la Escritura. Pero la sola scriptura no es la afirmación de que la Escritura es buena. Es la afirmación de que la Escritura es la única fuente que contiene toda la doctrina cristiana.\n\nUn caballero con el que me encontré incluyó una serie de citas que incluían Hebreos 4:12. Entonces le dije que leyera despacio el pasaje: “Porque la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos, y penetra hasta partir el alma y el espíritu, las coyunturas y los tuétanos, y discierne los pensamientos y las intenciones del corazón.”\n\nLe pregunté dónde decía ese versículo algo sobre que la Escritura sea la única regla infalible de fe o que contenga toda la doctrina cristiana. Admitió que no lo decía. Entonces le pregunté: “¿Y dónde dice este pasaje algo sobre la Escritura?”. Respondió: “Bueno, dice ‘la palabra de Dios’.”\n\n“Claro”, le dije, “pero la palabra de Dios y la Escritura no son idénticas. 1 Tesalonicenses 2:13 dice que la predicación de los apóstoles era ‘la palabra de Dios’, así que ‘palabra de Dios’ no siempre significa Escritura. En algunos casos se refiere a Jesús, la Palabra hecha carne, que es de lo que habla Hebreos 4:12. Habla de la palabra viva, y lo sabemos porque el versículo siguiente dice: ‘Y no hay cosa creada que no sea manifiesta delante de sus ojos; antes bien, todas las cosas están desnudas y abiertas ante los ojos de aquel con quien tenemos que ver.’”\n\nEn ese momento, el caballero se quedó tan sorprendido de haber malinterpretado el pasaje durante tanto tiempo que se mostró más receptivo a mi preocupación de que había cometido errores similares en los demás pasajes que citó en defensa de sus argumentos contra el catolicismo.\n\nCuando te enfrentes a una blitzkrieg bíblica, recuerda que esto no es una guerra de verdad. Puedes pedir un descanso para buscar esos versículos y volver a responder a tu interlocutor con tus pensamientos. Puedes recordarle que estudiar versículos bíblicos siempre es mejor que tirar versículos bíblicos. Además, san Pedro nos recuerda que la Escritura contiene pasajes difíciles que la gente puede malinterpretar para su propia perdición (2 Pedro 3:16), así que conviene consultar fuentes autorizadas para averiguar qué pueden significar esos versículos y, como mínimo, qué no pueden significar de ninguna manera.\n\nEsto puede ser útil, porque algunos protestantes operan bajo la idea errónea de que a los católicos les está prohibido leer o interpretar la Biblia por su cuenta. Pueden citar el Concilio Vaticano II, que dijo: “La tarea de interpretar auténticamente la palabra de Dios, ya sea escrita o transmitida, ha sido confiada exclusivamente al oficio de enseñanza vivo de la Iglesia” (Dei Verbum 10).\n\nPero la Iglesia solo ha definido infaliblemente el significado de un puñado de pasajes bíblicos. La Iglesia concede a los estudiosos de la Biblia un amplio margen para interpretar el sentido literal y espiritual de los textos bíblicos, siempre que sigan la indicación del concilio de estar atentos a la “analogía de la fe” e interpretar los textos a la luz de toda la revelación divina (CCC 114). Así, por ejemplo, un intérprete bíblico no podría concluir que un pasaje de la Biblia enseña que María dio a luz a otros hijos o que Cristo no es plenamente divino, ya que la Iglesia ha enseñado infaliblemente que esas creencias son erróneas, y la Escritura no tiene error (Dei Verbum 11).",
                original:
                  "As Jerome shows us, any heretic can string along biblical citations and say he is correct. You can find Jehovah’s Witness literature, for example, that cites dozens of passages that, according to the Witnesses, show that Jesus is not truly divine. Your Protestant friend would rightly tell them that when each of those verses is reviewed one at a time, you can see that none of them disproves the deity of Christ. He just needs to see that the same is true when we go through the dozens of Bible verses he has cited as evidence against Catholicism.\n\nI find in many of these instances that the cited verses aren’t just incorrect interpretations; they are irrelevant interpretations. The verse has nothing to do with the topic being discussed. For example, when defending sola scriptura, Protestants often cite biblical passages that affirm the goodness and utility of Scripture. But sola scriptura isn’t the claim that Scripture is good. It’s the claim that Scripture is the only source that contains all Christian doctrine.\n\nOne gentleman I encountered included a string of citations that included Hebrews 4:12. I then said he should slowly read the passage: “For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and spirit, of joints and marrow, and discerning the thoughts and intentions of the heart.”\n\nI asked him where that verse says anything about Scripture being the only infallible rule of faith or containing all Christian doctrine. He admitted it didn’t. Then I asked him, “And where does this passage say anything about Scripture?” He said, “Well, it says ‘the word of God.’”\n\n“Right,” I told him, “but the word of God and Scripture aren’t identical. First Thessalonians 2:13 says the preaching of the apostles was ‘the word of God,’ so ‘word of God’ doesn’t always mean Scripture. In some cases, it’s talking about Jesus, the Word made flesh, which is what Hebrews 4:12 is talking about. It’s talking about the living word, and we know that because the very next verse says, ‘And before him no creature is hidden, but all are open and laid bare to the eyes of him with whom we have to do.’”\n\nAt this point, the gentleman was so startled at having misunderstood the passage for so long that he was more receptive to my concern that he had made similar errors in the other passages he cited in defense of his arguments against Catholicism.\n\nWhen you are faced with a Bible blitzkrieg, remember that this isn’t an actual war. You’re allowed to ask for a break so you can look up these verses and get back to your interlocutor with your thoughts. You can remind him that studying Bible verses is always better than slinging Bible verses. Moreover, St. Peter reminds us that Scripture contains difficult passages that people can misunderstand to their own destruction (2 Pet. 3:16), so you want to consult authoritative sources to find out what these verses might mean and, at the least, what they absolutely cannot mean.\n\nThis can be helpful, because some Protestants operate under the mistaken assumption that Catholics are prohibited from reading or interpreting the Bible for themselves. They might cite the Second Vatican Council, which said, “The task of authentically interpreting the word of God, whether written or handed on, has been entrusted exclusively to the living teaching office of the Church” (Dei Verbum 10).\n\nBut the Church has infallibly defined the meaning of only a handful of biblical passages. The Church allows biblical scholars a wide degree of latitude in interpreting the literal and spiritual meaning of biblical texts, provided that they follow the council’s direction to be attentive to the “analogy of faith” and interpret the texts in light of all divine revelation (CCC 114). So, for example, a biblical interpreter could not conclude that a particular Bible passage teaches that Mary gave birth to other children or that Christ is not fully divine, since the Church has infallibly taught that those beliefs are in error, and Scripture is without error (Dei Verbum 11).",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Luke.24.25-Luke.24.27", "Luke.24.44-Luke.24.46"],
      text: "Para que la Escritura no quede en letra muerta, Cristo, por el Espíritu Santo, «nos abra el espíritu a la inteligencia de las mismas»; la Escritura se lee desde Cristo, su centro {c:CEC108,CEC112|Catecismo 108, 112}.",
      apologists: {
        arguments: [
          {
            title:
              "Los apóstoles son instruidos sobre cómo los profetas dan testimonio de Cristo, y luego enseñan a la Iglesia",
            quotes: [
              {
                speaker: "Scott Hahn",
                work: "Seeing and Believing: Scott Hahn Reflects on Easter Sunday",
                outlet: "St. Paul Center",
                date: "Sin fecha indicada",
                locator: "Párrafos que empiezan «Chosen to be His “witnesses,»",
                url: "https://stpaulcenter.com/posts/seeing-and-believing-scott-hahn-reflects-on-easter-sunday",
                text: "Elegidos para ser sus “testigos”, dice la Primera Lectura de hoy, los Apóstoles fueron “comisionados… para predicar… y dar testimonio” de todo lo que habían visto: desde su unción con el Espíritu Santo en el Jordán hasta la tumba vacía. Más allá de su propia experiencia, fueron instruidos en los misterios de la economía divina, el plan de salvación de Dios: para saber cómo “todos los profetas dan testimonio” de Él (ver Lucas 24:27, 44). Ahora podían “entender las Escrituras”, podían enseñarnos lo que Él les había dicho: que Él era “la piedra que los edificadores desecharon”, y que el Salmo de hoy profetiza su Resurrección y exaltación (ver Lucas 20:17; Mateo 21:42; Hechos 4:11).",
                original:
                  "Chosen to be His “witnesses,” today’s First Reading tells us, the Apostles were “commissioned . . . to preach . . . and testify” to all that they had seen—from His anointing with the Holy Spirit at the Jordan to the empty tomb. More than their own experience, they were instructed in the mysteries of the divine economy, God’s saving plan—to know how “all the prophets bear witness” to Him (see Luke 24:27, 44). Now they could “understand the Scripture,” could teach us what He had told them—that He was “the Stone which the builders rejected,” that today’s Psalm prophesies His Resurrection and exaltation (see Luke 20:17; Matthew 21:42; Acts 4:11).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Cristo abre el entendimiento de los discípulos a la interpretación de todas las Escrituras",
            quotes: [
              {
                speaker: "Fr. John Waiss",
                work: "Must We Prove the Assumption from the Bible?",
                outlet: "Catholic Answers",
                date: "15 de agosto de 2025",
                locator: "Párrafos que empiezan «Later, when Jesus rose,»",
                url: "https://www.catholic.com/magazine/online-edition/must-we-prove-the-assumption-from-the-bible",
                text: "Más tarde, cuando Jesús resucitó de entre los muertos, como los discípulos “no [todavía] conocían la escritura, que él debía resucitar de entre los muertos” (Juan 20:9), se les apareció para explicarles la Escritura. Lo hizo primero con los discípulos que viajaban a Emaús: “¡Oh insensatos, y tardos de corazón para creer todo lo que los profetas han dicho! ¿No era necesario que el Cristo padeciera estas cosas y entrara en su gloria?” Y comenzando por Moisés y todos los profetas, les interpretó en todas las escrituras las cosas referentes a sí mismo. . . . Entonces se les abrieron los ojos y lo reconocieron; y él desapareció de su vista. Y se dijeron el uno al otro: “¿No ardía nuestro corazón en nosotros cuando nos hablaba en el camino, cuando nos abría las escrituras?” (Lucas 24:25-27, 31-32). También tuvo que hacerlo con los apóstoles, para abrir “su entendimiento para comprender las escrituras” (Lucas 24:45). Pero parece que no les cita solo uno o dos pasajes, sino “todas las escrituras” “comenzando por Moisés y todos los profetas”.",
                original:
                  "Later, when Jesus rose from the dead, as the disciples “did not [yet] know the scripture, that he must rise from the dead” (John 20:9), he appeared to them to explain Scripture to them. He did it first with the disciples traveling to Emmaus: “O foolish men, and slow of heart to believe all that the prophets have spoken! Was it not necessary that the Christ should suffer these things and enter into his glory?” And beginning with Moses and all the prophets, he interpreted to them in all the scriptures the things concerning himself. . . . And their eyes were opened and they recognized him; and he vanished out of their sight. They said to each other, “Did not our hearts burn within us while he talked to us on the road, while he opened to us the scriptures?” (Luke 24:25-27, 31-32). He had to do it with the apostles, too, to open “their minds to understand the scriptures” (Luke 24:45). But he seems to quote not just one or two passages to them, but “all the scriptures” “beginning with Moses and all the prophets.”",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Rom.12.6"],
      text: "«La analogía de la fe»: la coherencia de las verdades de la fe entre sí, criterio para leer cada pasaje {c:CEC114|Catecismo 114}.",
      apologists: {
        arguments: [
          {
            title:
              "La interpretación debe guardar la «analogía de la fe» (CEC 114): la coherencia de las verdades de la fe (Horn, Akin). Ninguna de las dos líneas citadas menciona Romanos 12:6",
            quotes: [
              {
                speaker: "Trent Horn",
                work: "The Bible Blitzkrieg",
                outlet: "Catholic Answers Magazine",
                date: "18 de marzo de 2024",
                locator:
                  "10 párrafos: del párrafo que empieza «I asked him where that verse says anything about…» al que termina «…Ages. It wasn’t an original part of the Bible.»",
                url: "https://www.catholic.com/magazine/online-edition/the-bible-blitzkrieg",
                text: "Le pregunté en qué parte de ese versículo se dice que la Escritura es la única regla infalible de fe o que contiene toda la doctrina cristiana. Admitió que no lo decía. Entonces le pregunté: “¿Y en qué parte de este pasaje se dice algo sobre la Escritura?”. Me respondió: “Bueno, dice ‘la palabra de Dios’.”\n\n“Correcto”, le dije, “pero la palabra de Dios y la Escritura no son idénticas. 1 Tesalonicenses 2:13 dice que la predicación de los apóstoles era ‘la palabra de Dios’, así que ‘palabra de Dios’ no siempre significa Escritura. En algunos casos habla de Jesús, la Palabra hecha carne, que es de lo que habla Hebreos 4:12. Es la palabra viva, y lo sabemos porque el versículo siguiente dice: ‘Y no hay criatura alguna oculta delante de él, sino que todas están descubiertas y expuestas a los ojos de aquel con quien tenemos que ver.’”\n\nEn ese momento, el caballero estaba tan sorprendido de haber malinterpretado el pasaje durante tanto tiempo que quedó más receptivo a mi preocupación de que hubiera cometido errores parecidos en los otros pasajes que citaba para defender sus argumentos contra el catolicismo.\n\nCuando te enfrentes a un blitzkrieg bíblico, recuerda que esto no es una guerra de verdad. Tienes derecho a pedir un descanso para buscar estos versículos y volver a tu interlocutor con tus ideas. Puedes recordarle que estudiar versículos bíblicos siempre es mejor que lanzar versículos bíblicos. Además, san Pedro nos recuerda que las Escrituras contienen pasajes difíciles que la gente puede malinterpretar para su propia perdición (2 Pedro 3:16), así que conviene consultar fuentes autorizadas para averiguar qué significan estos versículos y, como mínimo, qué de ninguna manera pueden significar.\n\nEsto puede ser útil, porque algunos protestantes operan bajo el supuesto equivocado de que los católicos tienen prohibido leer e interpretar la Biblia por sí mismos. Podrían citar el Concilio Vaticano II, que dijo: “La tarea de interpretar auténticamente la palabra de Dios, escrita o transmitida, ha sido confiada exclusivamente al oficio de enseñanza vivo de la Iglesia” (Dei Verbum 10).\n\nPero la Iglesia ha definido infaliblemente el sentido de solo un puñado de pasajes bíblicos. La Iglesia concede a los estudiosos de la Biblia un amplio margen para interpretar el sentido literal y el espiritual de los textos bíblicos, siempre que sigan la indicación del concilio de atender a la “analogía de la fe” e interpretar los textos a la luz de toda la revelación divina (CCC 114). Así, por ejemplo, un intérprete bíblico no podría concluir que un pasaje determinado enseña que María tuvo otros hijos o que Cristo no es plenamente Dios, ya que la Iglesia ha enseñado infaliblemente que esas creencias son erróneas, y la Escritura está libre de error (Dei Verbum 11).\n\nPor último, no te desanimes si tu amigo protestante conoce más citas bíblicas que tú.\n\nScott Hahn, profesor de teología en la Universidad Franciscana de Steubenville, dijo una vez que los protestantes conocen la Biblia como el cartero conoce el barrio. El cartero sabe que los Johnson viven en Maplewood Street 123, así que si tiene que llevarles el correo sabe qué calles seguir para llegar. Del mismo modo, los protestantes que tienen una profunda pasión por entender la Biblia pueden citar el capítulo y el versículo exactos de un pasaje.\n\nLos católicos, en cambio, conocen la Biblia como los niños conocen un barrio. Puede que no sepan que los Johnson viven en Maplewood Street 123, pero sí saben que viven en lo alto de la colina, junto a la casa con la vieja cerca verde y el perro que ladra. Pueden llevarte al mismo lugar, pero de una manera menos directa.\n\nLos católicos conocen muchísima Escritura. Aunque no lean la Biblia, la escuchan en la misa, y pueden leer pasajes bíblicos en devocionarios y libros de oración católicos. Puede que no sepan citar versículos, pero la convención de capítulos y versículos que usamos para citar estos pasajes surgió recién en la Edad Media. No formaba parte original de la Biblia.",
                original:
                  "I asked him where that verse says anything about Scripture being the only infallible rule of faith or containing all Christian doctrine. He admitted it didn’t. Then I asked him, “And where does this passage say anything about Scripture?” He said, “Well, it says ‘the word of God.’”\n\n“Right,” I told him, “but the word of God and Scripture aren’t identical. First Thessalonians 2:13 says the preaching of the apostles was ‘the word of God,’ so ‘word of God’ doesn’t always mean Scripture. In some cases, it’s talking about Jesus, the Word made flesh, which is what Hebrews 4:12 is talking about. It’s talking about the living word, and we know that because the very next verse says, ‘And before him no creature is hidden, but all are open and laid bare to the eyes of him with whom we have to do.’”\n\nAt this point, the gentleman was so startled at having misunderstood the passage for so long that he was more receptive to my concern that he had made similar errors in the other passages he cited in defense of his arguments against Catholicism.\n\nWhen you are faced with a Bible blitzkrieg, remember that this isn’t an actual war. You’re allowed to ask for a break so you can look up these verses and get back to your interlocutor with your thoughts. You can remind him that studying Bible verses is always better than slinging Bible verses. Moreover, St. Peter reminds us that Scripture contains difficult passages that people can misunderstand to their own destruction (2 Pet. 3:16), so you want to consult authoritative sources to find out what these verses might mean and, at the least, what they absolutely cannot mean.\n\nThis can be helpful, because some Protestants operate under the mistaken assumption that Catholics are prohibited from reading or interpreting the Bible for themselves. They might cite the Second Vatican Council, which said, “The task of authentically interpreting the word of God, whether written or handed on, has been entrusted exclusively to the living teaching office of the Church” (Dei Verbum 10).\n\nBut the Church has infallibly defined the meaning of only a handful of biblical passages. The Church allows biblical scholars a wide degree of latitude in interpreting the literal and spiritual meaning of biblical texts, provided that they follow the council’s direction to be attentive to the “analogy of faith” and interpret the texts in light of all divine revelation (CCC 114). So, for example, a biblical interpreter could not conclude that a particular Bible passage teaches that Mary gave birth to other children or that Christ is not fully divine, since the Church has infallibly taught that those beliefs are in error, and Scripture is without error (Dei Verbum 11).\n\nFinally, don’t get discouraged if your Protestant friend knows more biblical citations than you do.\n\nScott Hahn, a professor of theology at the Franciscan University of Steubenville, once said that Protestants know the Bible the way a mailman knows the neighborhood. The mailman knows that the Johnsons live at 123 Maplewood Street, and so if he needs to get the mail to them, he knows which streets to follow to get there. In the same way, Protestants who have a deep passion for understanding the Bible can cite a biblical passage’s exact chapter and verse.\n\nCatholics, on the other hand, know the Bible the way  kids know a neighborhood. They may not know that the Johnsons live at 123 Maplewood Street, but they do know that the Johnsons live on the top of the hill next to the house with the old green fence and the barking dog. They can get you to the same place, but in a less direct way.\n\nCatholics know a lot of Scripture. Even if they don’t read the Bible, they hear the Bible at Mass, and they might read biblical passages in Catholic devotionals and prayer books. They may not be able to cite Scripture verses, but the chapters-and-verses convention we use to cite these passages came into existence only in the Middle Ages. It wasn’t an original part of the Bible.",
                translation: "ai-assisted",
              },
              {
                speaker: "Jimmy Akin",
                work: "The Limits of Scripture Interpretation",
                outlet: "Catholic Answers Magazine",
                date: "1 de enero de 2001",
                locator:
                  "14 párrafos: del párrafo que empieza «The second criteria was that “the living tradition of…» al que termina «…any of the four factors circumscribing the interpreter’s liberty»",
                url: "https://www.catholic.com/magazine/print-edition/the-limits-of-scripture-interpretation",
                text: "El segundo criterio era que “la tradición viva de toda la Iglesia debe tenerse en cuenta” al interpretar la Escritura (ibid.). Esto establece de manera general un límite que el Vaticano I expresó más concretamente:\n\n“En materia de fe y costumbres, que afecta a la edificación de la doctrina cristiana, debe tenerse por verdadero sentido de la Sagrada Escritura aquel que la santa Madre Iglesia ha sostenido y sostiene, a quien corresponde juzgar el verdadero sentido e interpretación de las Sagradas Escrituras. Por tanto, a nadie le es lícito interpretar la misma Sagrada Escritura contra este sentido ni contra el consentimiento unánime de los Padres” (De Filius 2).\n\nLa “tradición viva de toda la Iglesia” a la que se refiere el Vaticano II incluye ambos elementos que menciona el Vaticano II: el juicio de la Iglesia y el de los Padres sobre la interpretación de la Escritura. Ninguno de estos dos elementos debe violarse al buscar establecer el sentido de la Escritura.\n\nEn el primer aspecto, no debe violarse el juicio del magisterio de la Iglesia. Como al evaluar las declaraciones eclesiásticas en general, debe tenerse en cuenta la fuerza con la que se ha propuesto el juicio de la Iglesia. La forma más alta de aprobación eclesiástica respecto de la interpretación de un versículo sería que el magisterio definiera infaliblemente su sentido, o una parte de él. Esto se ha hecho en un pequeño número de casos.\n\nHasta donde he podido documentar, sólo siete pasajes de la Escritura han tenido su sentido parcialmente (no totalmente) definido por el magisterio extraordinario. Estas definiciones fueron hechas por el Concilio de Trento:\n\n(1) La referencia a “nacido de agua y del Espíritu” en Juan 3:5 sí incluye la idea del bautismo.\n\n(2–3) Al decirles a los apóstoles “Haced esto [la Eucaristía] en memoria de mí” en Lucas 22:19 y 1 Corintios 11:24, Jesús constituyó sacerdotes a los apóstoles.\n\n(4–5) En Mateo 18:18 y Juan 20:22–23, Jesús sí confirió a los apóstoles un poder de perdonar pecados, y no todos comparten este poder.\n\n(6) Romanos 5:12 se refiere a la realidad del pecado original.\n\n(7) Los presbíteros mencionados en Santiago 5:14 son ordenados y no simplemente miembros ancianos de la comunidad cristiana.\n\nEn el segundo aspecto —que no debe violarse el juicio de los Padres de la Iglesia—, nuevamente, el estándar para considerar una violación es bastante estrecho. Sólo cuando los Padres hablan con “consentimiento unánime” su interpretación es obligatoria. Cuando no hablan con unanimidad —como ocurre en la gran mayoría de los versículos— entonces hay libertad de interpretación.\n\nFinalmente, el tercer criterio limitante que nombró el Vaticano II es que el exegeta debe también tener en cuenta “la armonía que existe entre los elementos de la fe” (DV 12), que el Catecismo expresa diciendo que el exegeta debe “estar atento a la analogía de la fe… [es decir,] la coherencia de las verdades de la fe entre sí y dentro de todo el plan de la revelación” (CCC 114). Esto significa que la Escritura no puede interpretarse de un modo que contradiga lo que es teológicamente cierto.\n\nAdemás de estos límites definidos para las interpretaciones bíblicas permisibles, hay también influencias que deberían aplicarse al proceso de interpretar la Escritura. Si otros libros de la Escritura probablemente —aunque no con certeza— enseñan algo, eso debería influir en la forma en que se lee un libro dado. Si el magisterio se inclina hacia una interpretación particular pero no la ha propuesto infaliblemente, eso debería tener influencia. Lo mismo vale para los Padres de la Iglesia cuando hablan con algo que se acerca a la unanimidad, pero aún no la alcanza.\n\nLa libertad del intérprete de la Escritura sigue siendo amplia. Teniendo en cuenta debidamente los factores que influyen en la exégesis adecuada, el intérprete bíblico católico tiene la libertad de adoptar cualquier interpretación de un pasaje que no sea excluida con certeza por otros pasajes de la Escritura, por el juicio del magisterio, por los Padres de la Iglesia o por la analogía de la fe. Es mucha libertad, ya que sólo algunas interpretaciones serán excluidas con certeza por alguno de los cuatro factores que circunscriben la libertad del intérprete",
                original:
                  "The second criteria was that “the living tradition of the whole Church must be taken into account” when interpreting Scripture (ibid.). This states in a general way a limit that was more concretely expressed at Vatican I:\n\n“In matters of faith and morals, affecting the building up of Christian doctrine, that is to be held as the true sense of holy Scripture which holy mother the Church has held and holds, to whom it belongs to judge the true sense and interpretation of holy Scriptures. Therefore no one is allowed to interpret the same sacred Scripture contrary to this sense or contrary to the unanimous consent of the Fathers” (De Filius 2).\n\nThe “living tradition of the whole Church” referred to by Vatican II includes both of the items mentioned by Vatican II—the judgment of Church and that of the Fathers regarding the interpretation of Scripture. Both of these elements must not be violated when seeking to establish the meaning of Scripture.\n\nIn the first regard, the judgment of the Church’s magisterium must not be violated. As when evaluating ecclesiastical statements in general, the strength with which the Church’s judgment has been proposed must be taken into account. The highest form of Church approbation regarding the interpretation of a verse would be for the magisterium to infallibly define the sense of the verse—or a part of its sense. This has been done in a small number of cases.\n\nAs far as I have been able to document, only seven passages of Scripture have had their senses partially (not fully) defined by the extraordinary magisterium. These definitions were made by the Council of Trent:\n\n(1) The reference being “born of water and the Spirit” in John 3:5 does include the idea of baptism.\n\n(2–3) In telling the apostles “Do this [the Eucharist] in memory of me” in Luke 22:19 and 1 Corinthians 11:24, Jesus appointed the apostles priests.\n\n(4–5) In Matthew 18:18 and John 20:22–23, Jesus did confer a power on the apostles to forgive sins, and not everyone shares this power.\n\n(6) Romans 5:12 refers to the reality of original sin.\n\n(7) The presbyters referred to in James 5:14 are ordained and not simply elder members of the Christian community.\n\nIn the second regard—that the judgment of the Church Fathers must not be violated—again the standard set for violation is rather narrow. Only when the Fathers speak with “unanimous consent” is their interpretation mandated. When they do not speak with unanimity—as is the case in the great majority of verses—then there is liberty of interpretation.\n\nFinally, the third limiting criterion named by Vatican II was that the exegete must also take into account “the harmony which exists between elements of the faith” (DV 12), which the Catechism expresses by stating that the exegete must “be attentive to the analogy of faith. . . . [i.e.,] the coherence of the truths of faith among themselves and within the whole plan of revelation” (CCC 114). This means that Scripture cannot be interpreted in a way that contradicts what is theologically certain.\n\nIn addition to these definite boundaries to permissible biblical interpretations, there are also influences that should apply to the process of interpreting Scripture. If other books of Scripture probably—though not certainly—teach something, then that should influence the way a given book is read. If the magisterium leans toward but has not infallibly proposed a particular interpretation, that should have an influence. The same goes for the Church Fathers when they speak with something approaching but not yet at unanimity.\n\nThe liberty of the Scripture interpreter remains extensive. Taking due consideration of the factors that influence proper exegesis, the Catholic Bible interpreter has the liberty to adopt any interpretation of a passage that is not excluded with certainty by other passages of Scripture, by the judgment of the magisterium, by the Church Fathers, or by the analogy of faith. That is a great deal of liberty, as only a few interpretations will be excluded with certainty by any of the four factors circumscribing the interpreter’s liberty",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1John.2.20-1John.2.27", "John.16.13"],
      text: "Todos los fieles han recibido la unción del Espíritu que los conduce a la verdad completa: el sentido de la fe de todo el pueblo {c:CEC9193|Catecismo 91–93}.",
      apologists: {
        arguments: [
          {
            title:
              "El Espíritu de verdad prometido en la Última Cena guiará a «ustedes» a toda la verdad, y «probablemente» ese «ustedes» es la Iglesia (Heschmeyer, con reservas)",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "Protestants Are Wrong About Mary's Assumption. Here's Why:",
                outlet: "Shameless Popery",
                date: "15 de agosto de 2024",
                locator:
                  "4 párrafos: del párrafo que empieza «They’re both biblically supported from this depiction in Revelation…» al que termina «…as Pope declared that Mary was assumed into heaven.»",
                url: "https://www.catholic.com/audio/sp/protestants-are-wrong-about-marys-assumption-heres-why",
                text: "Ambas tienen respaldo bíblico en esta descripción del capítulo 12 del Apocalipsis. Pero si eso es correcto, apunta claramente a la idea de que María fue llevada al cielo, ¿no? Y lo apunta con claridad cuando lo combinas con las imágenes conectadas del arca y el templo. ¿De acuerdo? El octavo argumento es que María es la encarnación de la Iglesia. Por eso no tienes que elegir entre que María va delante de nosotros como señal de adónde debemos ir, ¿verdad? Por eso Pius 12 puede decir que su asunción al cielo debería darnos más esperanza en nuestra resurrección corporal, porque nosotros la vamos a seguir. Ella es, por decirlo así, la cristiana modelo. Esto no es una cosa nueva del catolicismo. San Ambrosio, el gran predicador de Milán que convirtió a san Agustín, habla de cómo María es esposa y virgen, y es inmaculada porque es imagen de la Iglesia, sin permanecer, y sin embargo esposa como virgen.\n\nEs concebida por el Espíritu como virgen. Nos trae al mundo sin los dolores del parto, de modo que podemos hablar con la madre virgen de la Iglesia y con la madre virgen de María. Así que lo que decimos de una lo podemos decir de la otra, y por eso, como digo, Pius dice que es nuestra esperanza que la creencia en la asunción corporal de María al cielo haga más firme nuestra creencia en la resurrección y la vuelva más eficaz. Así que quien oiga esto como algo idolátrico o blasfemo no toma en serio las buenas promesas que Dios tiene reservadas para nosotros. Ella está experimentando de antemano lo que nosotros vamos a experimentar, en cierta forma, el último día. ¿De acuerdo? El noveno argumento es el testimonio de las iglesias apostólicas. Esto no es una cosa rara del catolicismo. Los ortodoxos lo creen. Los cristianos coptos también lo creen. Todo lo que quiero decir es que todo el que existe desde antes de los 1500 lo cree.\n\nAhora bien, esto no es solo un argumento de la historia, no es solo un argumento de autoridad. Es un argumento que teológicamente tenemos que tomar muy en serio. En la Última Cena, Jesús dice: cuando venga el Espíritu de verdad, los guiará a toda la verdad. Ahora bien, ¿quiénes son ese «ustedes»? Bueno, probablemente la Iglesia. Entiendo que alguien diga: no confío en la autoridad de la Iglesia católica romana, o lo que sea. Pero si vas a decir no solo que la Iglesia católica se equivocó, sino que la Iglesia católica, la ortodoxa y la copta, de modo que ninguna iglesia de la tierra recibió algo tan importante como la asunción de María, ¿verdad? Porque todas están de acuerdo en esto hasta la Reforma. Si tu postura es que nadie recibió una doctrina cristiana importante, ¿en qué sentido es verdadero Juan 1613? ¿Y en qué sentido el Espíritu de verdad nos lleva a la plenitud de la verdad?\n\nSi todos podemos estar equivocados, sea lo que sea que pienses que significa Juan 16, 13, seguro al menos significa que no todos nos equivocamos en las doctrinas del cristianismo. Y sin embargo, si vas a negar la asunción de María, tendrías que decir que durante siglos todos entendieron mal esta doctrina hasta la Reforma. Y si eso es cierto, lo he mencionado antes, pero imagínense: si alguien llegara y dijera: soy musulmán, pero creo que todos los musulmanes anteriores a mí entendieron mal el Corán, que en realidad significa algo radicalmente distinto. Alguien con razón le respondería: no sé qué quieres decir cuando te llamas musulmán. Igualmente, si eres cristiano y dices que todos los cristianos hasta los 1500 entendieron mal el cristianismo, no sé qué quieres decir cuando te llamas cristiano, porque te estás cortando de la continuidad histórica del cristianismo. Eres seguidor de Cristo, bien, pero lo has reinterpretado para que signifique algo radicalmente distinto de lo que cualquiera antes de ti entendió por eso. No lo digo para atacar a nadie, sino para decir: si vas a afirmar que toda la Iglesia cristiana se equivocó en todas estas cosas, eso es un problema serio. Eso lleva al punto final, que en realidad creo que es el argumento definitivo: el papa Pius 12, por su autoridad como papa, declaró que María fue asumida al cielo.",
                original:
                  "They’re both biblically supported from this depiction in Revelation chapter 12. But if that’s right, that certainly points to the idea that Mary’s been taken up into heaven, doesn’t it? And it certainly points to that when you combine that with the connected images of the ark and the temple. Alright? The eighth argument is that Mary is the embodiment of the church. This is why you don’t have to choose that Mary goes before us as a sign of where we are to go, right? This is why Pius 12 can say that her being assumed into heaven should give us greater hope for our bodily resurrection because we are going to follow. She’s kind of the model Christian. This is not some newfangled Catholic thing. St. Ambrose, the great preacher of Milan who converted St. Augustine talks about how Mary is a wife and virgin and she’s spotless because she’s an image of the church without staying and yet a spouse as virgin.\n\nShe’s conceived by the spirit as virgin. She brings us forth without the pangs of labor that we can talk with the church’s virgin mother and Mary’s virgin mother. So what we say about the one we can say about the other, so therefore, as I say, Pius says, it is our hope that belief in Mary’s bodily assumption to heaven will make our belief in our resurrection stronger and render it more effective. So anyone who hears this as somehow idolatrous or blasphemous doesn’t take seriously the good promises God has in store for us. This is she’s getting to experience early what we’ll experience a version of on the last day. Alright? The ninth argument is the witness of the apostolic churches. This is not just some weird Catholic thing. The Orthodox believe this. The Coptic Christians believe this as well. All that’s to say is everyone who’s been around longer than the 15 hundreds believes this.\n\nNow, that’s not just an argument from history, that’s that’s not just an argument from authority. This is an argument that theologically we need to take very seriously. At the last supper, Jesus says, when the spirit of truth comes, he will guide you into all the truth. Now, who’s that you? Well, probably the church. Now I understand if you say, I don’t trust the authority of the Roman Catholic Church, whatever, but if you are going to say not just that the Catholic church got this wrong, but the Catholic Church and the Orthodox and the Coptic so that no church on Earth got something as important as the assumption of Mary, right? Because they all agree on this until the Reformation, if your position is that nobody got an important Christian doctrine, right? In what sense is John 1613 true? And what sense is the spirit of truth leading us into the fullness of truth?\n\nIf we can all be wrong, whatever you think John 16, 13 means, surely it at least means we are not all wrong on the doctrines of Christianity. And yet if you’re to deny the assumption of Mary, you’d have to say for centuries, everybody got this doctrine wrong until the Reformation. And if that’s true, I mean I’ve mentioned this before, but imagine, look, if you came along and said, I’m a Muslim, but I think all Muslims before me have misunderstood the Quran, it actually means something radically different. Someone would reasonably look at you and say, I don’t know what you mean when you say you’re a Muslim. Likewise, if you’re a Christian, you say all the Christians until the 15 hundreds got Christianity wrong. I don’t know what you mean by calling yourself Christian because you’re cutting yourself off from the historical continuity of Christianity. You’re a follower of Christ fine, but you’ve reinterpreted that to mean something radically different than what anyone before you took that to mean. I don’t say that to attack anybody, but to say, if you’re going to say the entire Christian Church got all these things wrong, that’s a serious problem. That then leads to the final point, which I actually think is the ultimate argument, which is that Pope Pius 12 by his authority as Pope declared that Mary was assumed into heaven.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "La frase de Juan «no tienen necesidad de que nadie les enseñe» no niega una autoridad de enseñanza: el contexto advierte contra los falsos maestros y dice a los lectores que retengan lo que oyeron desde el principio",
            quotes: [
              {
                speaker: "Karlo Broussard",
                work: "John’s First Letter to the Protestants?",
                outlet: "Catholic Answers Magazine",
                date: "13 de septiembre de 2016",
                locator:
                  "13 párrafos: del párrafo que empieza «For example, he seems to teach the Protestant doctrine…» al que termina «…the living teaching authority and not apart from them.»",
                url: "https://www.catholic.com/magazine/online-edition/johns-first-letter-to-the-protestants",
                text: "Por ejemplo, parece enseñar la doctrina protestante del testimonio interior del Espíritu y negar la necesidad de un magisterio (una autoridad viva que enseña): “No tienen necesidad de que nadie les enseñe; como su unción les enseña sobre todas las cosas” (1 Juan 2:27).\n\nAdemás, aparentemente afirma la doctrina protestante de que una persona puede tener certeza de su salvación: “Les escribo esto a ustedes, que creen en el nombre del Hijo de Dios, para que sepan que tienen vida eterna” (1 Juan 5:13). ¿Los católicos se han equivocado todo este tiempo al llamarla epístola católica? ¿Deberían retractarse y empezar a llamarla epístola protestante?\n\nAquí va el motivo por el que no.\n\nSolo yo y el Espíritu Santo\n\nEmpecemos con 1 Juan 2:27.\n\nSabemos que Juan no puede estar rechazando un magisterio vivo, porque tres versículos antes había instruido a sus lectores a “dejar que lo que oyeron desde el principio permanezca en ustedes” y “si lo que oyeron desde el principio permanece en ustedes, también ustedes permanecerán en el Hijo y en el Padre” (1 Juan 2:24). Si Juan quisiera que los cristianos siguieran solo el testimonio del Espíritu —que es a lo que se refiere cuando habla de “la unción” en el versículo 27—, se estaría contradiciendo en el versículo 24. La instrucción de dejar que lo oído permanezca en ellos implica que recibieron enseñanza de hombres.\n\nOtra razón por la que sabemos que Juan no rechaza la necesidad de un magisterio es que, dos capítulos más adelante, les indica que escuchar a los apóstoles es el criterio para distinguir el espíritu de la verdad del espíritu del error: “Nosotros somos de Dios. El que conoce a Dios nos escucha; el que no es de Dios no nos escucha. En esto conocemos el espíritu de la verdad y el espíritu del error” (1 Juan 4:6).\n\nPara Juan, la adhesión al cuerpo vivo de maestros oficiales —es decir, los apóstoles— es el medio seguro para obtener la pureza de la verdad, sin mezcla de error. Además, Juan deja claro que la unión con Dios depende de la unión con la Iglesia y de la obediencia a ella.\n\n¿Magisterio o comunidad de creyentes?\n\nAhora bien, alguien podría objetar: “El nosotros al que se refiere Juan no debe tomarse en sentido distintivo. No significa necesariamente un cuerpo de maestros oficiales. Debe entenderse de manera no distintiva, como referido a toda la comunidad cristiana.”\n\nPero incluso si se toma la interpretación no distintiva, igualmente implica necesariamente al cuerpo de maestros oficiales. ¿Por qué? Según Mateo 18:15-17, uno no forma parte de la comunidad cristiana, de la Iglesia universal en su totalidad, a menos que se adhiera a la enseñanza oficial del magisterio. La predicación y la enseñanza de la Iglesia cristiana en su conjunto dependen de la predicación y la enseñanza de esta autoridad docente viva. Así que, aun si el “nosotros” se refiere a toda la comunidad cristiana, la enseñanza de esa comunidad implica necesariamente al cuerpo de maestros oficiales.\n\nSi Juan no está afirmando la idea protestante de que todo lo que necesitamos para conocer la verdad de Dios es el testimonio del Espíritu, entonces ¿qué quiere decir?\n\nEl contexto revela que Juan advierte a sus lectores contra falsos maestros: “Salieron de nosotros, pero no eran de nosotros” (1 Juan 2:19). Si hay falsos maestros, eso implica que hay maestros verdaderos a los que los cristianos deben escuchar. El Espíritu, o “la unción”, enseña a los cristianos la verdad, pero a través de la autoridad docente viva, y no al margen de ella.",
                original:
                  "For example, he seems to teach the Protestant doctrine of the inner testimony of the Spirit and deny the need for a magisterium (a living, teaching authority): “You have no need that any one should teach you; as his anointing teaches you about everything” (1 John 2:27).\n\nFurther, he apparently affirms the Protestant doctrine that a person can have certain knowledge of his salvation: “I write this to you who believe in the name of the Son of God, that you may know that you have eternal life” (1 John 5:13). Have Catholics been wrong all this time in calling it a Catholic epistle? Should Catholics retract and start calling it a Protestant epistle?\n\nHere’s why not.\n\nJust me and the Holy Spirit\n\nLet’s take 1 John 2:27 for starters.\n\nWe know John can’t be rejecting a living, teaching authority, because three verses earlier he instructed his readers to “let what you heard from the beginning abide in you” and “if what you heard from the beginning abides in you, then you will abide in the Son and in the Father” (1 John 2:24). If John meant for Christians to follow only the testimony of the Spirit—which is what he refers to when he speaks of “the anointing” in verse 27—then he would be contradicting himself here in verse 24. The instruction to let what they’ve heard abide in them implies they received instruction from men.\n\nAnother reason we know John is not rejecting the need for a magisterium is because, two chapters later, he instructs his readers that listening to the apostles is the criterion for discerning the spirit of truth from the spirit of error: “We are of God. Whoever knows God listens to us, and he who is not of God does not listen to us. By this we know the spirit of truth and the spirit of error” (1 John 4:6).\n\nFor John, adherence to the living body of teaching officials—namely, the apostles—is the assured means for obtaining the purity of truth without the admixture of error. Moreover, John makes clear that union with God is contingent on union with and obedience to the Church.\n\nMagisterium or body of believers?\n\nNow, one might object, “The us that John refers to is not to be taken distinctively. It doesn’t necessarily mean a body of teaching officials. It is to be understood in a non-distinctive way as referring to the whole of the Christian community.”\n\nBut even if one takes the non-distinctive interpretation, it still necessarily involves the body of teaching officials. Why? According to Matthew 18:15-17, one is not a part of the Christian community, the whole of the universal Church, unless he adheres to the official teaching of the magisterium. The preaching and teaching of the Christian Church as a whole is contingent upon the preaching and teaching of this living teaching authority. So, even if the “us” refers to the whole Christian community, the teaching of the Christian community necessarily involves the body of teaching officials.\n\nIf John is not affirming the Protestant idea that all we need to know God’s truth is the testimony of the Spirit, then what does he mean?\n\nThe context reveals that John is warning his readers against false teachers: “They went out from us, but they were not of us” (1 John 2:19). If there are false teachers, that implies there are true teachers that Christians ought to listen to. The Spirit, or “the anointing,” teaches Christians the truth, but through the living teaching authority and not apart from them.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Heb.1.1-Heb.1.2"],
      text: "Dios, que habló muchas veces por los profetas, «nos habló por su Hijo»: en Cristo la revelación está completa {c:DV4|Dei Verbum 4} {c:DF2rev|Vaticano I, Dei Filius, cap. 2}.",
      apologists: {
        arguments: [
          {
            title:
              "Dios se reveló de «muchas maneras y de diversos modos», no solo en un libro (Heschmeyer, en dos obras)",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "This Brand New Sola Scriptura Argument Surprised Me...",
                outlet: "Shameless Popery",
                date: "5 de mayo de 2026",
                locator:
                  "4 párrafos: del párrafo que empieza «Over on his Substack, Clues goes further. He claims…» al que termina «…this creates a problem because remember, according to Clues.»",
                url: "https://www.catholic.com/audio/sp/this-brand-new-sola-scriptura-argument-surprised-me",
                text: "En su Substack, Clues va más allá. Afirma que la suficiencia de la Escritura también la exige el amor de Dios. En sus palabras: el texto te da todo lo que necesitas para la salvación porque un Dios amoroso no lo retendría. Así que, para decirlo sin rodeos, Clues sostiene que o bien la Escritura sola tiene todo lo que hay que tener para la salvación, o bien Dios no es wives y amoroso. Y insiste en que esto es verdad en todos los mundos posibles en los que Dios se comunica. Pero si piensas por un momento en el mundo real y en la Biblia real, verás que esto no es verdad y que su razonamiento en realidad no lo lleva a su conclusión. Ahora bien, en una de las defensas que hace de esta postura, Clues cita 2 Timoteo 3:15, un versículo popular que muchos protestantes invocan, en el que san Pablo le recuerda a san Timoteo que desde la infancia has conocido las Sagradas Escrituras, que pueden instruirte para la salvación mediante la fe en Cristo Jesús.\n\nAhora bien, algunos protestantes argumentarán a partir de este versículo que, como Dios nos dio las Escrituras para nuestra salvación, por lo tanto son todo lo que necesitamos para la salvación, o si no, Dios habría fracasado. Pero eso es como decir que, como Dios nos dio latidos para nuestra nutrición, deberíamos poder vivir solo a base de una dieta de latidos, o si no Dios habría fracasado. Esa conclusión no se sigue en absoluto lógicamente. Segundo, fíjate que Pablo habla del Antiguo Testamento, ¿no? Estos son los escritos que Timoteo conocía desde la infancia. Y sabemos por la historia y por la propia Escritura que Dios se reveló progresivamente, que el Antiguo Testamento estaba incompleto por sí solo y nunca estuvo destinado a mantenerse aparte de la predicación de los profetas y, más tarde, del Nuevo Testamento y de la predicación de los apóstoles. La Carta a los Hebreos abre diciendo: en muchas ocasiones y de diversas maneras, Dios habló en otro tiempo a nuestros padres por los profetas, pero en estos últimos días nos ha hablado por medio de un Hijo, a quien designó heredero de todas las cosas, por medio de quien también creó el mundo.\n\nEn esas dos frases, Hebreos nos dice tres cosas importantes. Primero, Dios no revela todo lo que necesitamos de una sola vez. Recuerda que cada uno de los libros que componen nuestra Biblia moderna era originalmente un libro o una carta independiente, un acto único de comunicación divina. Segundo, Dios no revela todo de la misma manera, por ejemplo, todo por escrito. Más bien, se revela de muchas y diversas maneras. El mayor profeta del Antiguo Testamento, Elías, nunca escribió una palabra de la Escritura. Y tercero, la revelación plena de Dios no es un libro, ni siquiera una colección de libros. Es una persona, Jesucristo, la verdadera Palabra de Dios. Así que quiero que imagines por un momento que eres un romano que vive en Judea a mediados del siglo I. Para nuestro ejemplo, hablas hebreo, pero sabes muy poco sobre el judaísmo y no sabes nada sobre el cristianismo.\n\nEs un movimiento nuevo y extraño, que se llama a sí mismo “el Camino” y afirma seguir a un Mesías de Galilea. Y recuerda que en este momento el cristianismo todavía se predica solo oralmente. El Nuevo Testamento aún no se ha puesto por escrito. Así que, en algún momento de tus andanzas por Judea, descubres un rollo que contiene el libro de Deuteronomio. Ahora quiero aplicar aquí la prueba de Clusis. ¿Es Dios la causa eficiente y ejemplar de Deuteronomio? Sí. ¿Está escrito Deuteronomio para ayudar a sus lectores a salvarse? También, sí. Cada uno de los escritos del Antiguo Testamento está escrito para nuestra salvación, como dice san Pablo. ¿Se sigue de eso que puedas confiar solo en Deuteronomio, que tiene todo lo que necesitas para salvarte, y que puedas ignorar el resto del Antiguo Testamento e ignorar a esos predicadores cristianos que proclaman oralmente el evangelio? Absolutamente no, y obviamente no. Pero esto crea un problema, porque recuerda que, según Clues.",
                original:
                  "Over on his Substack, Clues goes further. He claims that the sufficiency of scripture is also required by God’s love. In his words, the text gives you everything you need for salvation because a loving God wouldn’t withhold it. So to put his argument bluntly, Clues is saying that either scripture alone has everything in it you need for salvation or else God is not wives and loving. And he’s insisting on this being true in all possible worlds in which God communicates. But if you think for a moment about the real world and about the actual Bible, you’ll see this is not true and that his reasoning doesn’t actually get him to his conclusion. Now, in one of the defenses he makes of this position, Clues brings up two Timothy 3:15, popular verse raised by many Protestants in which St. Paul reminds Saint Timothy about how from childhood you’ve been acquainted with the sacred writings which are able to instruct you for salvation through faith in Christ Jesus.\n\nNow, Protestants will sometimes argue from this verse that since God gave us the scriptures for our salvation, therefore they’re all that we need for our salvation or else God failed. But that’s like saying since God gave us beats for our nutrition, therefore we should be able to live on a diet of beats alone or else God failed. That conclusion doesn’t logically follow at all. Second, notice that Paul is talking about the Old Testament, right? These are the writings that Timothy knew from childhood. And we know from history and from scripture itself that God revealed himself progressively that the Old Testament was incomplete on his own and was never intended to stand apart from the preaching of the prophets and then later the New Testament and the apostles preaching. The epistle to the Hebrews opens by telling us that in many and various ways, God spoke of old to our fathers by the prophets, but in these last days, he has spoken to us by a son whom he appointed the heir of all things through whom also he created the world.\n\nIn those two verses, Hebrews has told us three important things. First, God doesn’t reveal everything we need all at once. Remember that each of the books that makes up our modern Bible was originally a standalone book or letter, a unique act of divine communication. Second, God doesn’t reveal everything in the same way, for instance, all by writing. Rather, he reveals himself in many and various ways. The greatest Old Testament prophet, Elijah, never wrote a word of scripture. And third, the full revelation of God isn’t a book. It’s not even a collection of books. It’s a person, Jesus Christ, the true word of God. So I want you to imagine for a moment that you’re a Roman living in Judea in the middle of the first century. For our example, you speak Hebrew, but you know very little about Judaism and you know nothing about Christianity.\n\nIt’s this weird new movement, calling itself the way, claiming to follow some Messiah from Galilee. And remember at this point, Christianity is still being preached orally alone. The New Testament hasn’t been written down. So at some point you’re wanderings around Judea, you discover a scroll containing the book of Deuteronomy. Now I want to apply Clusis test here. Is God the efficient and exemplary cause of Deuteronomy? Yes. Is Deuteronomy written to help its readers to salvation? Also, yes. Each of the Old Testament writings are written for our salvation, as St. Paul says. Does it follow from that? That you can just rely on Deuteronomy alone, that it has everything you need to be saved and you can ignore the rest of the Old Testament and ignore those Christian preachers orally proclaiming the gospel. Absolutely not and obviously not. But this creates a problem because remember, according to Clues.",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                work: "What Sola Scriptura Gets Wrong About Revelation",
                outlet: "Catholic Answers Magazine",
                date: "30 de diciembre de 2019",
                locator:
                  "8 párrafos: del párrafo que empieza «This isn’t a semantical point: it speaks to a…» al que termina «…the Lord who is the Spirit” (2 Cor. 3:18).»",
                url: "https://www.catholic.com/magazine/print-edition/what-sola-scriptura-gets-wrong-about-revelation",
                text: "Esto no es un punto semántico: habla de un abismo entre la manera en que los protestantes y la Escritura hablan y piensan sobre la revelación. La lente defectuosa de la sola scriptura hace que los protestantes lean pasajes sobre la autorrevelación de Dios en Cristo como si fueran pasajes sobre la Biblia. Heb. 4:12 habla del Logos como “discernidor de corazones”. En la Iglesia primitiva, esto se veía como un comentario sobre Jesús. Orígenes lo cita como ejemplo de “cosas que él mismo dijo sobre sí mismo”.\n\nJohn MacArthur, en cambio, lo llama “una de las muchas afirmaciones que la Biblia hace sobre sí misma” (Why Believe the Bible?, 113). Tomás de Aquino describe cómo la Escritura se llama “palabra de Dios” de manera análoga a Jesús, la verdadera “Palabra de Dios” (Commentary on the Epistle to the Hebrews, 100). El teólogo protestante Telford Work afirma que Jesús es el Logos solo metafóricamente, mientras que la verdadera palabra de Dios es la Escritura (Living and Active, xiv).\n\nEsta confusión es genuinamente trágica, porque los protestantes se pierden el corazón de la autorrevelación de Dios. La Epístola a los Hebreos comienza diciendo: “En otro tiempo, Dios habló muchas veces y de diversas maneras a nuestros padres por los profetas; pero en estos últimos días nos ha hablado por un Hijo, a quien constituyó heredero de todo, y por medio de quien también hizo el mundo” (Heb. 1:1-2).\n\nDios nunca estuvo confinado a la Escritura. A lo largo de la historia, se ha revelado de “muchas y diversas maneras”. Cuando san Pablo dice de los paganos que “lo que de Dios se puede conocer les es manifiesto, pues Dios se lo ha mostrado” (Rom. 1:19), está hablando en el lenguaje de la revelación.\n\nDios se ha revelado parcialmente incluso a los no creyentes. Lo hace a través de la creación, que da testimonio del Creador (cf. Sal. 19:1-4; Rom. 10:18), y a través de la voz de la conciencia (cf. Rom. 2:14-16). El velo no está totalmente quitado, pero algo se está revelando.\n\nY cuando llega la plenitud de la revelación, no es un libro: es una persona, Jesucristo, “la imagen del Dios invisible” (Col. 1:15). Jesús no vino a traernos el Nuevo Testamento; el Nuevo Testamento existe para llevarnos a Jesús. Y aunque es cierto que gran parte de lo que sabemos de la vida y la enseñanza de Jesús la conocemos por la Escritura, esto de ningún modo es exhaustivo. De hecho, “hay también muchas otras cosas que hizo Jesús; si se escribieran una por una, pienso que ni aun en el mundo cabrían los libros que se escribirían” (Juan 21:25).\n\nAsí que, en lugar de debatir si la “revelación” (como una lista vagamente definida de proposiciones) es la Escritura y la Tradición o la Escritura sola, deberíamos llegar a una comprensión más profunda de lo que la Escritura, la Tradición y la Iglesia tienen que decir, a saber, que Dios se revela de muchas y diversas maneras, y que se revela plenamente en Jesucristo.\n\nEsta revelación es para la Iglesia, para que “todos nosotros, mirando como en un espejo la gloria del Señor con rostro descubierto, somos transformados en la misma imagen de gloria en gloria, pues esto viene del Señor, que es el Espíritu” (2 Cor. 3:18).",
                original:
                  "This isn’t a semantical point: it speaks to a chasm between the way Protestants and Scripture speak and think of revelation. The faulty lens of sola scriptura causes Protestants to read passages about God’s self-revelation in Christ as passages about the Bible. Heb. 4:12 speaks of the Logos as a “discerner of hearts.” In the early Church, this was viewed as a commentary about Jesus. Origen cites it as an example of “things said by himself about himself.”\n\nJohn MacArthur, in contrast, calls it “one of the many statements that the Bible makes concerning itself” (Why Believe the Bible?, 113). Aquinas describes how Scripture is called the “word of God” analogously from Jesus, the true “Word of God” (Commentary on the Epistle to the Hebrews, 100). The Protestant theologian Telford Work claims that Jesus is the Logos only metaphorically, while the true word of God is Scripture (Living and Active, xiv).\n\nThis conflation is genuinely tragic because Protestants are missing the heart of God’s self-revelation. The Epistle to the Hebrews opens by saying, “In many and various ways God spoke of old to our fathers by the prophets; but in these last days he has spoken to us by a Son, whom he appointed the heir of all things, through whom also he created the world” (Heb. 1:1-2).\n\nGod was never confined to Scripture. Throughout history, he has revealed himself in “many and various ways.” When St. Paul says of the pagans that “what can be known about God is plain to them, because God has shown it to them” (Rom. 1:19), he’s speaking in the language of revelation.\n\nGod has revealed himself partially even to unbelievers. He does this through creation, which bears witness to the Creator (cf. Ps. 19:1-4; Rom. 10:18) and through the voice of conscience (cf. Rom. 2:14-16). The veil isn’t totally removed, but something is being revealed.\n\nAnd when the fullness of revelation comes, it’s not a book—it’s a person, Jesus Christ, “the image of the invisible God” (Col. 1:15). Jesus doesn’t come to bring us the New Testament; the New Testament exists to bring us to Jesus. And while it’s true that much of what we know of Jesus’ life and teaching we know through Scripture, this is by no means exhaustive. Indeed, “there are also many other things which Jesus did; were every one of them to be written, I suppose that the world itself could not contain the books that would be written” (John 21:25).\n\nAnd so instead of debating whether “revelation” (as some vaguely defined list of propositions) is Scripture and Tradition or Scripture alone, we should come to a deeper understanding of what Scripture, Tradition, and the Church have to say, namely, that God reveals himself in many and various ways, ultimately revealing himself fully in Jesus Christ.\n\nThis revelation is to the Church so that “we all, with unveiled face, beholding the glory of the Lord, are being changed into his likeness from one degree of glory to another; for this comes from the Lord who is the Spirit” (2 Cor. 3:18).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Dios habla por medio de su Hijo, creador y sustentador, revelando los últimos días",
            quotes: [
              {
                speaker: "Scott Hahn",
                work: "New Song: Scott Hahn Reflects on the Nativity of the Lord",
                outlet: "St. Paul Center",
                date: "Sin fecha indicada",
                locator: "Párrafos que empiezan «Jesus is the new king.»",
                url: "https://stpaulcenter.com/posts/new-song-scott-hahn-reflects-on-the-nativity-of-the-lord",
                text: "Jesús es el nuevo rey. Él es el primogénito real y Hijo de Dios prometido a David, como escuchamos en la Epístola de hoy (ver Salmos 2:7; 2 Samuel 7:14). Y como revela nuestro Evangelio, Él es la Palabra de Dios, aquel por medio del cual fue creado el universo, aquel por medio del cual el universo es sostenido. Al hablarnos por medio de su Hijo, Dios ha revelado una nueva era, los últimos días. La nueva era es una nueva creación. En el principio, Dios habló su Palabra y la luz brilló en las tinieblas. Ahora, en esta nueva era, nos envía la verdadera luz para dispersar las tinieblas de un mundo que se ha exiliado a sí mismo de Dios.",
                original:
                  "Jesus is the new king. He is the royal firstborn son and Son of God promised to David, as we hear in today’s Epistle (see Psalms 2:7; 2 Samuel 7:14). And as our Gospel reveals, He is the Word of God, the one through whom the universe was created, the one through whom the universe is sustained. In speaking to us through His Son, God has unveiled a new age, the last days. The new age is a new creation. In the beginning, God spoke His Word and light shone in the darkness. Now, in this new age, He sends us the true light to scatter the darkness of a world that has exiled itself from God.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Col.3.16"],
      text: "Dei Verbum 8 cita este versículo para decir que, por la Tradición, el Espíritu Santo hace «que la palabra de Cristo habite en ellos abundantemente» {c:DV8|Dei Verbum 8}.",
      apologists: {
        arguments: [
          {
            title:
              "Horn usa Col 3:16 para distinguir la adoración en el canto del entusiasmo por un espectáculo tipo concierto",
            quotes: [
              {
                speaker: "Trent Horn",
                work: "This One Thing Makes Modern Worship Songs Terrible",
                outlet: "Catholic Answers",
                date: "15 de junio de 2026",
                locator: "Ver la página enlazada",
                url: "https://www.catholic.com/audio/cot/this-one-thing-makes-modern-worship-songs-terrible",
                text: "Los servicios de alabanza y adoración pueden tener su lugar, especialmente como alternativa a las cosas malas que suceden en los conciertos seculares. Efesios 5:19-20 dice: “No se emborrachen con vino, porque eso es disipación, sino llénense del Espíritu, cantando salmos, himnos y cánticos espirituales unos a otros, cantando y haciendo melodía al Señor en sus corazones, dando gracias a Dios Padre en todo tiempo y por todo, en el nombre de nuestro Señor Jesucristo.” O Colosenses 3:16: “Que la palabra de Cristo habite en ustedes con abundancia; enséñense y exhórtense unos a otros con toda sabiduría, y canten salmos, himnos y cánticos espirituales con gratitud en sus corazones a Dios.” Mi preocupación es cuando estos servicios dejan de ser momentos para adorar a Dios en el canto y se convierten en espectáculos donde nos emocionamos mucho, en un lugar al estilo de un concierto, para cantar canciones sobre adorar a Dios en lugar de estar centrados en el acto mismo de la adoración.",
                original:
                  "Praise and worship services can have their place, especially as an alternative to the bad things that happen at secular concerts. Ephesians 5:19- 20 says, “Do not get drunk with wine, for that is debauchery, but be filled with the spirit as you sing psalms and hymns and spiritual songs to one another, singing and making melody to the Lord in your hearts, giving thanks to God the Father at all times and for everything in the name of our Lord Jesus Christ.” Or Colossians 3:16, “Let the word of Christ dwell in you richly as you teach and admonish one another in all wisdom and as you sing psalms and hymns and spiritual songs with thankfulness in your hearts to God.” My concern is when these services stop being times to worship God in song and just turn into spectacles where we get really excited in a concert-like venue to sing songs about worshiping God instead of being focused on the act of worship itself.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Phil.3.8"],
      text: "«El sublime conocimiento de Jesucristo» se aprende con la lectura frecuente de la Escritura: «el desconocimiento de las Escrituras es desconocimiento de Cristo» {c:DV25|Dei Verbum 25}.",
      apologists: {
        arguments: [
          {
            title:
              "La comparación devalúa las posesiones frente al conocimiento de Cristo; no declara sin valor a un ser humano",
            quotes: [
              {
                speaker: "Dave Armstrong",
                work: 'Has Martin Luther\'s "Snow-Covered Dunghill" Mystery-Legend Been Solved?!',
                outlet: "Biblical Evidence for Catholicism",
                date: "5 de octubre de 2005",
                locator: "Ver la página enlazada",
                url: "https://socrates58.blogspot.com/2005/10/has-martin-luthers-snow-covered.html",
                text: "Como comentario relacionado, la Escritura (KJV) sí usa la palabra estiércol unas 28 veces, pero nunca, que yo sepa tras revisar una concordancia, como descripción del hombre. San Pablo, por ejemplo, escribe en Filipenses 3:8, en esa misma versión: . . . Y en verdad considero todas las cosas como pérdida por la excelencia del conocimiento de Cristo Jesús, mi Señor, por quien lo he perdido todo, y lo considero estiércol, para ganar a Cristo. Las posesiones son estiércol comparadas con las riquezas de Cristo Jesús: una afirmación muy distinta a llamar “estiércol” al hombre mismo. El hombre está hecho a imagen de Dios, y aunque esté caído, no es un excremento sin valor.",
                original:
                  'As a related aside, Scripture (KJV) does use the word dung some 28 or so times, but never, as far as I can tell from scanning a concordance, as a description of man. St. Paul, for example, writes in Philippians 3:8, in that same version: . . . I count all things but loss for the excellency of the knowledge of Christ Jesus my Lord: for whom I have suffered the loss of all things, and do count them but dung, that I may win Christ. Possessions are dung compared to the riches of Christ Jesus: a far different statement from calling man himself "dung." Man is made in God\'s image, and though he is fallen, he is not worthless excrement.',
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
  ],
  passages: {
    title: "Los pasajes de la posición católica",
    lede: "Los versículos que la Iglesia católica cita sobre la Escritura y la Tradición, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la Iglesia católica.",
    apologistsLabel: "Cómo lo defienden los apologistas católicos.",
  },
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
