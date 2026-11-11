import type { DoctrinePage } from "@/content/model/doctrine-page";
import type { CitationId } from "@/content/registry/citations";

export const papacyDoctrine = {
  doctrine: "papacy",
  status: "draft",
  lede: "¿Quién tiene autoridad en la Iglesia, y hasta dónde llega?",
  legend: { witnessId: "pw-irenaeus", citationLabel: "Contra las herejías III.3.2" },
  fingerprint: {
    marks: [
      { year: 107, yearEnd: 110, label: "Ignacio de Antioquía, A los romanos" },
      { year: 180, circa: true, label: "Ireneo de Lyon, Contra las herejías" },
      { year: 251, circa: true, label: "Cipriano de Cartago, Sobre la unidad de la Iglesia" },
      { year: 256, label: "Firmiliano de Cesarea, carta a Cipriano" },
      { year: 325, label: "I Concilio de Nicea" },
      { year: 343, yearEnd: 344, label: "Concilio de Sárdica" },
      { year: 376, yearEnd: 377, label: "Jerónimo, Carta a Dámaso" },
      { year: 440, circa: true, label: "León Magno, Sermón III" },
      { year: 451, label: "Concilio de Calcedonia" },
      { year: 594, yearEnd: 595, label: "Gregorio Magno, Carta a Mauricio" },
      { year: 681, label: "III Concilio de Constantinopla" },
      { year: 1302, label: "Bonifacio VIII, Unam sanctam" },
      { year: 1439, label: "Concilio de Florencia, Laetentur caeli" },
      { year: 1537, label: "Artículos de Esmalcalda" },
      { year: 1537, label: "Tratado sobre el poder y la primacía del papa" },
      { year: 1647, label: "Confesión de Westminster" },
      { year: 1672, label: "Sínodo de Jerusalén (Confesión de Dositeo)" },
      { year: 1848, label: "Encíclica de los patriarcas orientales" },
      { year: 1853, label: "Confesión de New Hampshire" },
      { year: 1870, label: "Concilio Vaticano I, Pastor aeternus" },
      { year: 1895, label: "Encíclica patriarcal y sinodal" },
      { year: 1932, label: "Breve declaración de la Iglesia Luterana, Sínodo de Misuri" },
      { year: 1964, label: "Concilio Vaticano II, Lumen gentium" },
      { year: 1983, label: "Código de Derecho Canónico" },
      { year: 1992, label: "Catecismo de la Iglesia Católica" },
      { year: 1995, label: "Juan Pablo II, Ut unum sint" },
      { year: 1998, label: "Congregación para la Doctrina de la Fe, El primado del sucesor de Pedro" },
      { year: 2000, label: "Fe y Mensaje Bautistas 2000" },
    ],
  },
  common: {
    text: "Las cinco tradiciones ponen a la Iglesia bajo el señorío de Cristo, a quien sus textos llaman su cabeza o su Señor, y describen en ella un ministerio con oficios propios. Entre las tradiciones que se pronuncian sobre ello, discrepan sobre si alguna autoridad humana está por encima de la iglesia local y sobre quién puede definir la doctrina sin error; sobre la roca y las llaves argumentan los textos católicos, luteranos y reformados.",
    questions: [
      "¿Hay en la Iglesia alguna autoridad humana por encima de la iglesia local?",
      "¿Puede una persona o una asamblea definir la doctrina sin error?",
      "¿A quién se dieron las llaves y qué es la roca?",
    ],
  },
  answers: {
    subtitle: "Cada tradición, en sus propias palabras. Debajo de cada una, las objeciones que recibe.",
    items: [
      {
        tradition: "catholic",
        summary:
          "Cristo puso a Pedro al frente de los apóstoles, y ese oficio continúa en el obispo de Roma. El papa tiene sobre toda la Iglesia una potestad plena, suprema e inmediata, y es infalible cuando define solemnemente una doctrina de fe o costumbres.",
        grade: { grade: "dogma", basis: "definido en el Vaticano I (Pastor aeternus, 1870)" },
        objections: [
          { id: "OB-1" },
          { id: "OB-2" },
          { id: "OB-3" },
          { id: "OB-4" },
          { id: "OB-5" },
          { id: "OB-6" },
          { id: "OB-7" },
          { id: "OB-8" },
        ],
      },
      {
        tradition: "orthodox",
        summary:
          "Jesucristo es la cabeza de la Iglesia. La gobiernan los patriarcas y el Santo Sínodo, y un concilio ecuménico es la autoridad que puede actuar sobre toda la Iglesia.",
        grade: {
          basis: "Catecismo extenso de Filareto, preguntas 272 y 278 (1839)",
          definition: {
            label: "Catecismo extenso de Filareto (1839)",
            definition:
              "Catecismo sinodal ruso de 1839, con la numeración de preguntas de Schaff. Su descripción doctrinal no es un relevamiento de todas las Iglesias autocéfalas.",
            source: { citations: ["OPhilaret272"], label: "Filareto, pregunta 272" },
          },
        },
        objections: [
          { title: "Pedro y sus sucesores tienen un primado de verdadera jurisdicción sobre toda la Iglesia" },
          { title: "El Romano Pontífice es infalible cuando define ex cathedra" },
        ],
      },
      {
        tradition: "lutheran",
        summary:
          "Según el Tratado sobre el poder y la primacía del papa, quienes presiden las iglesias tienen el mandato de enseñar el evangelio, perdonar los pecados y administrar los sacramentos, con la misma potestad por derecho divino. El obispo de Roma no es superior a los demás por derecho divino.",
        grade: {
          basis: "Tratado 60 (1537)",
          definition: {
            label: "Confesión (símbolo)",
            definition:
              "Los demás escritos «no son jueces, como la Sagrada Escritura, sino solo testimonio y declaración de la fe», de cómo se entendió la Escritura en los artículos discutidos; y la doctrina común no ha de fundarse en escritos privados, sino en libros «compuestos, aprobados y recibidos en nombre de las iglesias»",
            source: { citations: ["LFCEpRN_8"], label: "Epítome RN 8" },
          },
        },
        objections: [
          {
            title:
              "Pedro y sus sucesores tienen un primado de verdadera jurisdicción (traducción asistida por IA, ver los bloques) sobre toda la Iglesia",
          },
          { title: "El Romano Pontífice es infalible cuando define ex cathedra" },
        ],
      },
      {
        tradition: "reformed",
        summary:
          "No hay otra cabeza de la Iglesia sino el Señor Jesucristo. Él dio a su Iglesia visible el ministerio, los oráculos y las ordenanzas; la gobiernan oficiales distintos del magistrado civil, y los sínodos y concilios pueden errar.",
        grade: {
          basis: "Confesión de Westminster 25.1 y 25.6 (1647)",
          definition: {
            label: "Estándares de Westminster",
            definition:
              "La Confesión y los Catecismos de Westminster son normas subordinadas a la Escritura: los concilios pueden errar y ayudan a la fe sin constituir su regla (Confesión 31.4); sus determinaciones, si concuerdan con la Escritura, se reciben con reverencia y sumisión (Confesión 31.3).",
            source: { citations: ["RWCF31_3_4"], label: "Westminster 31.3–4" },
          },
        },
        objections: [
          { title: "Pedro y sus sucesores tienen un primado de verdadera jurisdicción sobre toda la Iglesia" },
          { title: "El Romano Pontífice es infalible cuando define ex cathedra" },
        ],
      },
      {
        tradition: "baptist",
        summary:
          "La iglesia es una congregación local autónoma de creyentes bautizados, bajo el señorío de Cristo, con dos oficios: pastor y diácono. Los textos leídos no nombran al papa.",
        grade: {
          basis: "Confesión de New Hampshire, art. XIII (1853)",
          definition: {
            label: "Confesiones de la convención",
            definition:
              "La Confesión de New Hampshire es una confesión histórica de la línea de la convención; Fe y Mensaje Bautistas es una declaración de la convención, con versiones fechadas. No se establece que cada cuerpo hispanohablante adopte una versión determinada.",
            source: { citations: ["BNHXIII"], label: "New Hampshire XIII" },
          },
        },
        objections: [
          { title: "Pedro y sus sucesores tienen un primado de verdadera jurisdicción sobre toda la Iglesia" },
          { title: "El Romano Pontífice es infalible cuando define ex cathedra" },
        ],
      },
    ],
  },
  witnesses: {
    subtitle: "Testigos de los primeros siglos, en orden de fecha. Esta sección es neutral.",
    historyLink: {
      label: "La historia completa del papado",
      note: "Concilios, controversias y confesiones de fe, hasta hoy.",
    },
    items: [
      {
        id: "pw-ignatius",
        entity: "ignatius-of-antioch",
        author: "Ignacio de Antioquía",
        work: "Carta a los Romanos",
        locator: "salutación",
        reader: { work: "ignatius-romans", locator: "prologue" },
        date: { year: 107, yearEnd: 110, circa: true },
        quote:
          "que también preside en el lugar de la región de los romanos, digna de Dios, digna de honor, [...] y que preside sobre el amor, que lleva el nombre de Cristo y del Padre",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 1 (Roberts y Donaldson), 1885.",
        note: "No se cotejó la recensión ni el griego «προκαθημένη τῆς ἀγάπης».",
      },
      {
        id: "pw-irenaeus",
        entity: "irenaeus-of-lyon",
        author: "Ireneo de Lyon",
        work: "Contra las herejías",
        locator: "III.3.2",
        reader: { work: "irenaeus-against-heresies", locator: "3.3.2" },
        date: { year: 180, yearEnd: 189, circa: true },
        quote:
          "Pues es necesario que toda Iglesia concuerde con esta Iglesia, a causa de su autoridad preeminente, es decir, los fieles de todas partes, por cuanto la tradición apostólica ha sido conservada continuamente por aquellos [hombres fieles] que existen en todas partes",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 1 (Roberts y Rambaut), 1885.",
        note: "La obra se conserva solo en latín, y los traductores de ANF advierten que el sentido de esta frase no es seguro.",
      },
      {
        id: "pw-cyprian",
        entity: "cyprian-of-carthage",
        author: "Cipriano de Cartago",
        work: "Sobre la unidad de la Iglesia",
        locator: "4",
        reader: { work: "cyprian-de-unitate", locator: "4" },
        date: { year: 251, circa: true },
        quote:
          "Y aunque a todos los apóstoles, después de su resurrección, da un poder igual, [...] sin embargo, para mostrar la unidad, dispuso con su autoridad el origen de esa unidad, comenzando por uno. Ciertamente los demás apóstoles eran también lo que fue Pedro, dotados de una participación semejante de honor y de poder; pero el principio procede de la unidad.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 5, 1888.",
        note: "Se muestra el texto recibido tal como lo imprime ANF. El año no se pudo confirmar en una edición fechada.",
      },
      {
        id: "pw-firmilian",
        author: "Firmiliano de Cesarea",
        work: "Carta a Cipriano",
        locator: "LXXIV (ANF)",
        reader: { work: "cyprian-correspondence", locator: "74.1" },
        date: { year: 256 },
        quote:
          "Con justicia me indigno ante esta necedad tan abierta y manifiesta de Esteban: que quien así se jacta del lugar de su episcopado y sostiene que tiene la sucesión de Pedro, sobre quien se pusieron los fundamentos de la Iglesia, introduzca otras muchas rocas y establezca nuevos edificios de muchas iglesias",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: ANF vol. 5, 1886.",
        note: "Traducción latina de una carta griega perdida.",
      },
      {
        id: "pw-nicaea-6",
        author: "I Concilio de Nicea",
        work: "Cánones",
        locator: "canon 6",
        date: { year: 325 },
        quote:
          "Que prevalezcan las antiguas costumbres de Egipto, Libia y la Pentápolis, de modo que el obispo de Alejandría tenga jurisdicción sobre todas ellas, pues lo mismo es costumbre también para el obispo de Roma. Del mismo modo, en Antioquía y en las demás provincias, conserven las Iglesias sus privilegios.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 14, 1900.",
      },
      {
        id: "pw-sardica",
        author: "Concilio de Sárdica",
        work: "Cánones",
        locator: "canon III",
        date: { year: 343, alsoYears: [344] },
        quote:
          "Pero si acaso se ha dictado sentencia contra un obispo en algún asunto y él supone que su causa no es infundada sino buena, para que se reabra la cuestión, honremos, si parece bien a vuestra caridad, la memoria del apóstol Pedro, y que los que dieron el juicio escriban a Julio, obispo de Roma, para que, si es necesario, la causa sea juzgada de nuevo por los obispos de las provincias vecinas, y que él designe árbitros; pero si no se puede mostrar que su causa es de tal naturaleza que necesite un nuevo juicio, que el juicio una vez dado no sea anulado, sino que quede firme como antes.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 14, 1900.",
        note: "La edición da dos versiones del canon; se muestra la primera.",
      },
      {
        id: "pw-jerome-15",
        entity: "jerome",
        author: "Jerónimo",
        work: "Carta XV a Dámaso",
        locator: "§ 2",
        date: { year: 376, alsoYears: [377] },
        quote:
          "Como no sigo a ningún jefe sino a Cristo, así no estoy en comunión con nadie sino con vuestra beatitud, es decir, con la cátedra de Pedro. ¡Pues sé que esta es la roca sobre la cual está edificada la Iglesia!",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 6, 1893.",
      },
      {
        id: "pw-leo",
        entity: "leo-the-great",
        author: "León Magno",
        work: "Sermón III",
        locator: "cap. III",
        reader: { work: "leo-great-selected-sermons", locator: "3" },
        date: { year: 440, circa: true },
        quote:
          "La dispensación de la Verdad permanece, pues, y el bienaventurado Pedro, perseverando en la fortaleza de la Roca que recibió, no ha abandonado el timón de la Iglesia que tomó a su cargo. [...] Y así, si algo se hace con rectitud y con rectitud se decreta por nosotros, si algo se obtiene de la misericordia de Dios con nuestras súplicas diarias, es por obra y méritos de aquel cuyo poder vive y cuya autoridad prevalece en su Sede.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 12, 1895.",
        note: "Es un sermón del aniversario de su elevación; la edición no imprime el año. Fue ordenado el 29 de septiembre de 440.",
      },
      {
        id: "pw-chalcedon-28",
        author: "Concilio de Calcedonia",
        work: "Cánones",
        locator: "canon 28",
        date: { year: 451 },
        quote:
          "Pues los Padres concedieron con razón privilegios al trono de la antigua Roma, porque era la ciudad regia. Y los ciento cincuenta obispos piadosísimos, movidos por la misma consideración, dieron privilegios iguales […] al santísimo trono de la Nueva Roma, juzgando con justicia que la ciudad honrada con la soberanía y el senado, y que goza de privilegios iguales a los de la antigua Roma imperial, debía también en lo eclesiástico ser engrandecida como ella y ocupar el lugar siguiente después de ella",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 14, 1900.",
      },
      {
        id: "pw-gregory",
        entity: "gregory-the-great",
        author: "Gregorio Magno",
        work: "Carta V.XX al emperador Mauricio",
        locator: "Libro V, carta XX",
        reader: { work: "gregory-great-selected-letters", locator: "5.20" },
        date: { year: 594, yearEnd: 595, circa: true },
        quote:
          "Pues a todos los que conocen el Evangelio les consta que, por la voz del Señor, el cuidado de toda la Iglesia fue confiado al santo Apóstol y Príncipe de todos los Apóstoles, Pedro. [...] He aquí que recibió las llaves del reino celestial, y se le dio el poder de atar y desatar, se le confía el cuidado y el principado de toda la Iglesia, y sin embargo no se le llama apóstol universal; mientras que el santísimo varón, mi compañero en el sacerdocio Juan, intenta que se le llame obispo universal.",
        edition:
          "Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: NPNF2 vol. 12, 1895.",
        note: "La edición fecha el libro V en 594–595; la carta no trae año propio. Se muestran dos pasajes de la misma carta.",
      },
    ],
  },
  practice: {
    subtitle:
      "Lo que dicen de la autoridad en la Iglesia los textos oficiales de cada tradición: quién gobierna, cómo se nombra, cómo se juzgan las controversias y dónde se expresa la unidad.",
    aspects: [
      {
        id: "governs",
        label: "Quién gobierna",
        cells: {
          catholic: {
            text: "El papa con el colegio de los obispos: «junto con su Cabeza, el Romano Pontífice, y nunca sin esta Cabeza»",
            sources: [
              {
                citations: ["LG22", "CIC375", "CIC377"],
                label: "Lumen gentium 22; Código de Derecho Canónico, cáns. 375, 377",
              },
            ],
          },
          orthodox: {
            text: "Los patriarcas y el Santo Sínodo; el obispo gobierna su iglesia particular",
            sources: [
              {
                citations: ["OPhilaret279", "ODositheusX"],
                label:
                  "Catecismo extenso de Filareto, pregunta 279 (forma sinodal rusa del siglo XIX); Confesión de Dositeo, decreto 10 (español de Doctrina asistido por IA)",
              },
            ],
          },
          lutheran: {
            text: "Pastores, presbíteros u obispos con la misma potestad por derecho divino",
            sources: [{ citations: ["LTr61"], label: "Tratado sobre el poder y la primacía del papa 61" }],
          },
          reformed: {
            text: "Oficiales eclesiásticos distintos del magistrado civil: «Rey y Cabeza» es Cristo",
            sources: [{ citations: ["RWCF30_1"], label: "Confesión de Westminster 30.1" }],
          },
          baptist: {
            text: "La congregación local autónoma de creyentes bautizados; pastor y diácono",
            sources: [{ citations: ["BBFMVI"], label: "Fe y Mensaje Bautistas VI" }],
          },
        },
      },
      {
        id: "appointed",
        label: "Cómo se elige o nombra",
        cells: {
          catholic: {
            text: "Los cardenales eligen al papa; el papa nombra libremente a los obispos o confirma a los elegidos (Iglesia latina)",
            sources: [{ citations: ["CIC349", "CIC377"], label: "Código de Derecho Canónico, cáns. 349, 377" }],
          },
          orthodox: {
            text: "La elección se hace en el sínodo propio, y el obispo es ordenado por dos o tres obispos",
            sources: [
              {
                citations: ["ODositheusX"],
                label: "Confesión de Dositeo, decreto 10 (español de Doctrina asistido por IA)",
              },
            ],
          },
          lutheran: {
            text: "La iglesia tiene principalmente el derecho de llamar ministros",
            sources: [{ citations: ["LTr24"], label: "Tratado sobre el poder y la primacía del papa 24" }],
          },
          reformed: {
            text: "Los textos leídos no dan un procedimiento; la Palabra ha de ser predicada solo por quienes son debidamente aprobados y llamados a ese oficio",
            sources: [
              {
                citations: ["RWLC158"],
                label: "Catecismo Mayor de Westminster 158 (español de Doctrina asistido por IA)",
              },
            ],
          },
          baptist: {
            text: "Cada congregación obra bajo el señorío de Cristo por procesos democráticos y nombra dos oficios; ningún texto leído describe un procedimiento",
            sources: [
              {
                citations: ["BBFMVI", "BNHXIII"],
                label:
                  "Fe y Mensaje Bautistas VI; Confesión de New Hampshire XIII (español de Doctrina asistido por IA)",
              },
            ],
          },
        },
      },
      {
        id: "controversies",
        label: "Cómo se juzgan las controversias",
        cells: {
          catholic: {
            text: "El concilio ecuménico ejerce la potestad suprema con el papa, y sus decretos obligan si el papa los aprueba",
            sources: [{ citations: ["CIC337", "CIC341"], label: "Código de Derecho Canónico, cáns. 337, 341" }],
          },
          orthodox: {
            text: "Un concilio ecuménico es la autoridad que puede actuar sobre toda la Iglesia",
            sources: [{ citations: ["OPhilaret278"], label: "Catecismo extenso de Filareto, pregunta 278 (1839)" }],
          },
          lutheran: {
            text: "Los juicios sinodales son juicios de la iglesia, según la Palabra de Dios",
            sources: [
              { citations: ["LTr56"], label: "Tratado sobre el poder y la primacía del papa 56 (resumen de Doctrina)" },
            ],
          },
          reformed: {
            text: "Los sínodos y concilios determinan las controversias; sus decisiones conformes a la Palabra se reciben con sumisión, y pueden errar",
            sources: [
              { citations: [], label: "Confesión de Westminster 31.3–4 (numeración de la edición de Edimburgo, 1894)" },
            ],
          },
          baptist: {
            text: "Las asociaciones y convenciones no tienen autoridad sobre las iglesias; ningún texto leído nombra un órgano que resuelva disputas",
            sources: [
              {
                citations: ["BNHXIII"],
                label:
                  "Fe y Mensaje Bautistas XIV; Confesión de New Hampshire XIII (español de Doctrina asistido por IA)",
              },
            ],
          },
        },
      },
      {
        id: "owed",
        label: "Qué se debe a la enseñanza de los pastores",
        cells: {
          catholic: {
            text: "Asentimiento religioso del entendimiento y de la voluntad a la enseñanza ordinaria del papa; obediencia de la fe a lo definido",
            sources: [
              { citations: ["CIC752", "CEC891"], label: "Código de Derecho Canónico, can. 752; Catecismo 891" },
            ],
          },
          orthodox: {
            text: "La obediencia se aprende de la Escritura, los cánones, los concilios, los Padres y las reglas eclesiásticas",
            sources: [{ citations: ["OPhilaret282"], label: "Catecismo extenso de Filareto, pregunta 282 (1839)" }],
          },
          lutheran: {
            text: "Las congregaciones deben obedecer a los obispos que enseñan el Evangelio; si enseñan algo contra el Evangelio, tienen un mandato de Dios que les prohíbe obedecer",
            sources: [
              {
                citations: ["AC28_21"],
                label:
                  "Confesión de Augsburgo XXVIII.21–23 (Triglot, inglés, 1921; español de Doctrina asistido por IA)",
              },
            ],
          },
          reformed: {
            text: "Recibir con reverencia y sumisión lo que es conforme a la Palabra",
            sources: [
              { citations: [], label: "Confesión de Westminster 31.3 (numeración de la edición de Edimburgo, 1894)" },
            ],
          },
          baptist: {
            text: "Los textos leídos no dicen qué se debe a la enseñanza de los pastores; cada miembro es responsable ante Cristo como Señor",
            sources: [
              {
                citations: ["BBFMVI", "BNHXIII"],
                label: "Fe y Mensaje Bautistas VI y XIV; Confesión de New Hampshire XIII",
              },
            ],
          },
        },
      },
      {
        id: "discipline",
        label: "Disciplina",
        cells: {
          catholic: {
            text: "El cisma es el rechazo de la sujeción al Sumo Pontífice; se exige profesión de fe para ciertos oficios",
            sources: [{ citations: ["CIC751", "CIC833"], label: "Código de Derecho Canónico, cáns. 751, 833" }],
          },
          orthodox: {
            text: "El texto del Catecismo extenso (pregunta 275) no se leyó; solo sus referencias bíblicas",
            sources: [{ citations: [], label: "Catecismo extenso de Filareto, pregunta 275" }],
          },
          lutheran: {
            text: "Jurisdicción para excomulgar a quienes tienen delitos conocidos y absolver a quienes se arrepienten",
            sources: [{ citations: ["LTr60"], label: "Tratado sobre el poder y la primacía del papa 60" }],
          },
          reformed: {
            text: "Amonestación, suspensión de la Cena y excomunión",
            sources: [{ citations: ["RWCF30_4"], label: "Confesión de Westminster 30.4" }],
          },
          baptist: {
            text: "Los textos leídos no tienen una frase sobre la disciplina de la iglesia",
            sources: [
              { citations: ["BBFMVI"], label: "Fe y Mensaje Bautistas VI y XIV; Confesión de New Hampshire XIII–XIV" },
            ],
          },
        },
      },
      {
        id: "unity",
        label: "Dónde se expresa la unidad",
        cells: {
          catholic: {
            text: "En cada Misa se nombra al papa como signo y servidor de la unidad",
            sources: [{ citations: ["CEC1369"], label: "Catecismo 1369" }],
          },
          orthodox: {
            text: "La unidad se expresa por la unidad del Credo y por la comunión en la oración y los sacramentos",
            sources: [{ citations: [], label: "Catecismo extenso de Filareto, pregunta 261 (1839)" }],
          },
          lutheran: {
            text: "Obispos unidos en doctrina, fe, sacramentos, oración y amor, bajo Cristo como cabeza",
            sources: [{ citations: ["LSAII_4_7_9"], label: "Artículos de Esmalcalda II.4.9 (resumen de Doctrina)" }],
          },
          reformed: {
            text: "Los santos están obligados a mantener entre sí una comunión santa en el culto de Dios",
            sources: [
              { citations: ["RWCF25_1"], label: "Confesión de Westminster 25.1 y 26.2 (edición de Monterrey, 1880)" },
            ],
          },
          baptist: {
            text: "Armonía espiritual y cooperación voluntaria para fines comunes entre grupos del pueblo de Cristo",
            sources: [{ citations: ["BNHXIII"], label: "Fe y Mensaje Bautistas XIV; Confesión de New Hampshire XIII" }],
          },
        },
      },
    ],
  },
  connected: {
    subtitle: "Lo que cada tradición responde aquí pesa también en estas doctrinas.",
    items: [
      {
        doctrine: "sola-scriptura",
        text: "Quién juzga las controversias de fe es también la pregunta de Sola Scriptura: los textos católicos ponen en la Iglesia el juicio sobre el sentido de la Escritura ({c:DV10|Dei Verbum 10}); el texto reformado dice que los sínodos y concilios pueden errar y muchos han errado (Confesión de Westminster 31.4, edición de Edimburgo, 1894; traducción de Doctrina asistida por IA).",
      },
      {
        doctrine: "baptism",
        text: "Los textos católicos definen la plena comunión por «los vínculos de la profesión de fe, de los sacramentos y del régimen eclesiástico» ({c:CIC205|Código de Derecho Canónico, can. 205}) y piden que los bautizados en una comunidad no católica no sean bautizados bajo condición salvo duda seria ({c:CIC869|can. 869 §2}); la página de Bautismo muestra qué dice cada tradición sobre la repetición del bautismo.",
      },
    ],
  },
} satisfies DoctrinePage<CitationId>;
