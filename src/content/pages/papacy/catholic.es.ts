import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const papacyCatholic = {
  doctrine: "papacy",
  tradition: "catholic",
  status: "draft",
  title: "La posición católica",
  lede: "Cómo la Iglesia católica entiende el primado y la infalibilidad del papa, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que la Iglesia católica enseña sobre el primado y la infalibilidad del papa, con el grado de autoridad que le corresponde según las categorías de la Iglesia.",
    definition: {
      text: "Para la Iglesia católica, Cristo puso a Pedro al frente de los apóstoles como «principio y fundamento, perpetuo y visible, de la unidad de fe y de comunión» (Lumen gentium 18), y ese oficio continúa en el obispo de Roma, su sucesor. El papa tiene sobre toda la Iglesia una potestad plena, suprema e inmediata, que no anula la de los obispos sino que la confirma; y cuando define solemnemente una doctrina de fe o de costumbres para toda la Iglesia, la define sin error, por la asistencia del Espíritu Santo prometida a Pedro.",
      grades: [],
      sources: [
        {
          citations: ["PA1", "PA2", "PA3a", "PA4def"],
          label: "Pastor aeternus, caps. 1–4",
        },
        {
          citations: ["LG18"],
          label: "Lumen gentium 18",
        },
        {
          citations: ["LG22"],
          label: "Lumen gentium 22",
        },
        {
          citations: ["LG25"],
          label: "Lumen gentium 25",
        },
        {
          citations: ["CEC882"],
          label: "Catecismo 882",
        },
        {
          citations: ["CEC891"],
          label: "Catecismo 891",
        },
        {
          citations: ["CEC895"],
          label: "Catecismo 895",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "el primado de Pedro",
        text: "«Según los testimonios del Evangelio» (Vaticano I), Cristo prometió y dio directamente a Pedro, y solo a él, el primado de jurisdicción sobre toda la Iglesia: le llamó «Piedra», le dio las llaves del Reino y le encargó apacentar todo su rebaño. Pedro no recibió ese primado de la Iglesia, como si fuera su delegado, sino de Cristo; y no es solo un primado de honor, sino de verdadera jurisdicción.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "definido por el Vaticano I (Pastor aeternus, cap. 1 y su canon, con anatema); el Vaticano II lo propone «como objeto de fe inconmovible» ({c:LG18|Lumen gentium 18})",
          },
        ],
        sources: [
          {
            citations: ["PA1"],
            label: "Pastor aeternus, cap. 1",
          },
          {
            citations: ["PA1can"],
            label: "Pastor aeternus, cap. 1, canon",
          },
          {
            citations: ["LG22"],
            label: "Lumen gentium 22",
          },
          {
            citations: ["CEC552", "CEC553"],
            label: "Catecismo 552–553",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la sucesión de Pedro",
        text: "Lo que Cristo instituyó en Pedro para el bien de la Iglesia tiene que durar mientras dure la Iglesia. Por eso, quien sucede a Pedro en la sede de Roma recibe por institución de Cristo, es decir, por derecho divino, el primado de Pedro sobre toda la Iglesia. La Iglesia sitúa la muerte de Pedro en Roma por «la tradición literaria y arqueológica más antigua» (Congregación para la Doctrina de la Fe, 1998, n. 3); el Vaticano I habla de la sede romana «consagrada por su sangre» (cap. 2).",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "definido por el Vaticano I (Pastor aeternus, cap. 2 y su canon); la {c:CDFP4|Congregación para la Doctrina de la Fe} lo llama «doctrina de fe» (El primado del Sucesor de Pedro, 1998, n. 4)",
          },
        ],
        sources: [
          {
            citations: ["PA2"],
            label: "Pastor aeternus, cap. 2",
          },
          {
            citations: ["PA2can"],
            label: "Pastor aeternus, cap. 2, canon",
          },
          {
            citations: ["CDFP3", "CDFP4"],
            label: "El primado del Sucesor de Pedro 3–4",
          },
          {
            citations: ["LG20"],
            label: "Lumen gentium 20",
          },
          {
            citations: ["CIC331"],
            label: "Código de Derecho Canónico, can. 331",
          },
        ],
      },
      {
        id: "QE-3",
        short: "la jurisdicción del papa",
        text: "El papa, como sucesor de Pedro, verdadero vicario de Cristo y cabeza de toda la Iglesia, tiene sobre ella una potestad plena y suprema, verdaderamente episcopal, ordinaria e inmediata: sobre todas las Iglesias y sobre cada pastor y cada fiel, no solo en materia de fe y costumbres, sino también de disciplina y gobierno. Es el juez supremo de los fieles, y contra sus sentencias no cabe apelación, ni siquiera a un concilio ecuménico. El Concilio de Florencia lo había definido en 1439, y el Vaticano I renovó esa definición.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "así lo clasifica la {c:CDF98|Congregación para la Doctrina de la Fe} («la doctrina sobre el primado y la infalibilidad del Romano Pontífice», 1998, citando DS 3059-3075); definido por el Vaticano I (Pastor aeternus, cap. 3 y su canon), que renueva la definición de Florencia (1439)",
          },
        ],
        sources: [
          {
            citations: ["FLO"],
            label: "Florencia, Laetentur caeli",
          },
          {
            citations: ["PA3a", "PA3b"],
            label: "Pastor aeternus, cap. 3",
          },
          {
            citations: ["PA3can"],
            label: "Pastor aeternus, cap. 3, canon",
          },
          {
            citations: ["LG22"],
            label: "Lumen gentium 22",
          },
          {
            citations: ["CIC331", "CIC333", "CIC1404"],
            label: "Código de Derecho Canónico, cann. 331, 333 §3, 1404",
          },
          {
            citations: ["CDF98"],
            label: "Congregación para la Doctrina de la Fe (1998), §11",
          },
        ],
      },
      {
        id: "QE-4",
        short: "la infalibilidad del papa",
        text: "El papa goza de la infalibilidad que Cristo quiso dar a su Iglesia cuando habla «ex cathedra»: es decir, cuando, como pastor y maestro de todos los cristianos y con su suprema autoridad apostólica, define que una doctrina de fe o de costumbres debe ser sostenida por toda la Iglesia. Esas definiciones son irreformables «por sí mismas y no por el consentimiento de la Iglesia», es decir, porque se proclaman «bajo la asistencia del Espíritu Santo» y no necesitan «de ninguna aprobación de otros» ni admiten «apelación a otro tribunal»; y a esas definiciones «nunca puede faltar el asenso de la Iglesia por la acción del mismo Espíritu Santo» (Lumen gentium 25). Para la Iglesia, Cristo quiso dar a toda su Iglesia «una participación en su propia infalibilidad» (Catecismo 889): la tiene el conjunto de los fieles, que «no puede equivocarse cuando cree» (Lumen gentium 12), y la tienen los obispos unidos al papa, sobre todo en el concilio ecuménico; el papa la ejerce de modo personal cuando define. No se extiende a todo lo que dice el papa, sino a lo que define de ese modo, y no le da una revelación nueva: es una asistencia del Espíritu Santo para custodiar el depósito de la fe.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "definido por el Vaticano I como «dogma divinamente revelado» (Pastor aeternus, cap. 4), y así lo clasifica la {c:CDF98|Congregación para la Doctrina de la Fe} (1998, DS 3059-3075)",
          },
        ],
        sources: [
          {
            citations: ["PA4def"],
            label: "Pastor aeternus, cap. 4",
          },
          {
            citations: ["LG25"],
            label: "Lumen gentium 25",
          },
          {
            citations: ["LG12"],
            label: "Lumen gentium 12",
          },
          {
            citations: ["CEC889", "CEC891"],
            label: "Catecismo 889, 891",
          },
          {
            citations: ["ME2"],
            label: "Mysterium Ecclesiae 2",
          },
          {
            citations: ["CIC749"],
            label: "Código de Derecho Canónico, can. 749",
          },
        ],
      },
      {
        id: "QE-5",
        short: "el papa y los obispos",
        text: "Como Pedro y los demás apóstoles formaban un solo colegio, así el papa y los obispos. Los obispos no son vicarios del papa: gobiernan sus Iglesias con potestad propia, como «vicarios y legados de Cristo», y el primado del papa no anula esa potestad, sino que la afirma y la defiende. El colegio de los obispos, unido a su cabeza y nunca sin ella, es también sujeto de la potestad suprema sobre toda la Iglesia, que ejerce de modo solemne en el concilio ecuménico.",
        grades: [
          {
            kind: "unclassified",
            reason: "taught-by-council",
            basis:
              "(cap. 3) y reafirmado por el Catecismo (895: la autoridad del papa «no anula la de ellos, sino que, al contrario, la confirma y tutela»); la Congregación para la Doctrina de la Fe remite a ese capítulo (Denz-Hün 3061) al decir que el primado y los obispos están «en una originaria y esencial armonía» ({c:CDFP5|El primado del Sucesor de Pedro, n. 5 y nota 21})",
          },
          {
            kind: "church",
            grade: "magisterium",
            basis:
              "el colegio de los obispos como sujeto de la potestad suprema, con su cabeza y nunca sin ella (Lumen gentium 22; concilio ecuménico); la Nota explicativa previa dice cómo leer el cap. III de Lumen gentium",
          },
        ],
        sources: [
          {
            citations: ["PA3c"],
            label: "Pastor aeternus, cap. 3",
          },
          {
            citations: ["LG22"],
            label: "Lumen gentium 22",
          },
          {
            citations: ["CEC895"],
            label: "Catecismo 895",
          },
          {
            citations: ["CIC333", "CIC336"],
            label: "Código de Derecho Canónico, cann. 333 §1, 336",
          },
          {
            citations: ["NEP"],
            label: "Lumen gentium, Nota explicativa previa",
          },
        ],
      },
      {
        id: "QE-6",
        short: "lo que custodia el papa",
        text: "El Espíritu Santo no fue prometido a los sucesores de Pedro para revelar doctrinas nuevas, sino para custodiar y exponer fielmente lo que los apóstoles transmitieron. Esa infalibilidad «se extiende tanto cuanto abarca el depósito de la Revelación» (Lumen gentium 25); y como no es fruto de nuevas revelaciones, al papa y a los obispos «no se les dispensa de la necesidad de escrutar con los medios apropiados el tesoro de la divina Revelación» (Congregación para la Doctrina de la Fe, Mysterium Ecclesiae, 1973, n. 3). Una doctrina solo se tiene por definida infaliblemente si consta de modo manifiesto. A la enseñanza ordinaria del papa que no es una definición, los católicos le deben un «asentimiento religioso del entendimiento y de la voluntad», que no es todavía asentimiento de fe.",
        grades: [
          {
            kind: "unclassified",
            reason: "taught-by-council",
            basis:
              "en el capítulo de la definición (DS 3070, citado así por {c:LG25|Lumen gentium 25}, nota 83, y {c:ME3|Mysterium Ecclesiae}, nota 24); la definición misma es DS 3074",
          },
        ],
        sources: [
          {
            citations: ["PA4neque"],
            label: "Pastor aeternus, cap. 4",
          },
          {
            citations: ["LG25"],
            label: "Lumen gentium 25",
          },
          {
            citations: ["ME3"],
            label: "Mysterium Ecclesiae 3",
          },
          {
            citations: ["CIC749", "CIC752"],
            label: "Código de Derecho Canónico, cann. 749 §3 y 752",
          },
          {
            citations: ["CEC86", "CEC891", "CEC892"],
            label: "Catecismo 86, 891, 892",
          },
          {
            citations: ["CEC2035"],
            label: "Catecismo 2035",
          },
        ],
      },
      {
        id: "QE-7",
        short: "la unidad de la Iglesia",
        text: "Para la Iglesia católica, el papa es «el principio y fundamento perpetuo y visible de unidad, así de los obispos como de la multitud de los fieles». Por eso sostiene que la comunión de las Iglesias con la Iglesia de Roma, y de sus obispos con el obispo de Roma, es, «en el designio de Dios», un requisito esencial de la comunión plena y visible. A la vez reconoce una comunión real, aunque imperfecta, con los demás bautizados.",
        grades: [
          {
            kind: "unclassified",
            reason: "taught-by-council",
            basis:
              "(proemio) y propuesto de nuevo por el Vaticano II «como objeto de fe inconmovible», junto con la institución, perpetuidad y poder del primado ({c:LG18|Lumen gentium 18})",
          },
          {
            kind: "church",
            grade: "magisterium",
            basis:
              "el requisito de la comunión con Roma: encíclica ({c:UUS97|Ut unum sint 97}; la cita {c:CDFP15|El primado del Sucesor de Pedro, n. 15})",
          },
        ],
        sources: [
          {
            citations: ["PAproem"],
            label: "Pastor aeternus, proemio",
          },
          {
            citations: ["LG23"],
            label: "Lumen gentium 23",
          },
          {
            citations: ["UUS97"],
            label: "Ut unum sint 97",
          },
          {
            citations: ["CIC205"],
            label: "Código de Derecho Canónico, can. 205",
          },
          {
            citations: ["CEC838"],
            label: "Catecismo 838",
          },
        ],
      },
      {
        id: "QE-8",
        short: "el orden de los patriarcas",
        text: "El Concilio de Florencia, al definir el primado del papa, renovó también el orden de los patriarcas de Oriente, «quedando a salvo todos sus privilegios y derechos». Para la Iglesia católica, el episcopado y el primado son de institución divina, mientras que los patriarcados surgieron «por institución de la Iglesia», en un sistema que «pertenece a la guía de la Providencia ordinaria de Dios sobre la Iglesia» y que comporta «desde los inicios, el nexo con la tradición petrina»; y el sucesor de Pedro es «garante de la legítima diversidad de ritos, disciplinas y estructuras eclesiásticas entre Oriente y Occidente».",
        grades: [
          {
            kind: "unclassified",
            reason: "undeclared",
            basis: "la cláusula de Florencia sobre los patriarcas, decreto de un concilio ecuménico",
          },
          {
            kind: "church",
            grade: "magisterium",
            basis: "{c:LG23|Lumen gentium 23}",
          },
          {
            kind: "unclassified",
            reason: "no-own-grade",
            basis: "El primado del Sucesor de Pedro (Congregación para la Doctrina de la Fe, 1998)",
          },
        ],
        sources: [
          {
            citations: ["FLOpat"],
            label: "Florencia, Laetentur caeli",
          },
          {
            citations: ["CDFP68"],
            label: "El primado del Sucesor de Pedro 6 y 8",
          },
          {
            citations: ["LG23"],
            label: "Lumen gentium 23",
          },
        ],
      },
      {
        id: "QE-9",
        short: "el servicio del papa",
        text: "El papa se llama a sí mismo «servus servorum Dei», siervo de los siervos de Dios (Ut unum sint 88). Para la Iglesia católica, el primado no es una monarquía política ni un simple primado de honor, sino un servicio a la unidad, sometido como todo fiel a la Palabra de Dios. En 1995 Juan Pablo II llamó al obispo de Roma «el primero entre los servidores de la unidad», que debe asegurar la comunión de todas las Iglesias «con el poder y la autoridad sin los cuales esta función sería ilusoria» (Ut unum sint 94); en la misma encíclica pidió ayuda a las demás Iglesias para «encontrar una forma de ejercicio del primado que, sin renunciar de ningún modo a lo esencial de su misión, se abra a una situación nueva», y reconoció que la convicción católica sobre el papado «constituye una dificultad para la mayoría de los demás cristianos».",
        grades: [
          {
            kind: "church",
            grade: "magisterium",
            basis: "encíclica (Ut unum sint 88, 94–96)",
          },
          {
            kind: "unclassified",
            reason: "no-own-grade",
            basis:
              "El primado del Sucesor de Pedro (1998): consideraciones de la Congregación, sin fórmula de aprobación en el texto leído",
          },
        ],
        sources: [
          {
            citations: ["UUS88"],
            label: "Ut unum sint 88",
          },
          {
            citations: ["UUS94"],
            label: "Ut unum sint 94",
          },
          {
            citations: ["UUS95", "UUS96"],
            label: "Ut unum sint 95–96",
          },
          {
            citations: ["CDFP7"],
            label: "El primado del Sucesor de Pedro 7",
          },
          {
            citations: ["CDFP12"],
            label: "El primado del Sucesor de Pedro 12–13",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "La Iglesia católica funda esta enseñanza en las palabras de Cristo a Pedro, «doctrina tan manifiesta de las Sagradas Escrituras», «tal como siempre la entendió la Iglesia católica» {c:PA1perv|Vaticano I, Pastor aeternus, cap. 1}, en la necesidad de que dure lo que Cristo instituyó para el bien de la Iglesia, en la necesidad de que la fe pueda profesarse sin error {c:CEC890|Catecismo 890}, y en el testimonio de los concilios antiguos. La explica, sobre todo, como un servicio a la unidad: el papa es «el principio y fundamento perpetuo y visible de unidad» {c:LG23|Lumen gentium 23}.",
    ],
    fathers: [
      {
        lead: "El Catecismo cita a san Ireneo:",
        quote: [
          "Porque con esta Iglesia en razón de su origen más excelente debe necesariamente acomodarse toda Iglesia, es decir, los fieles de todas partes",
        ],
        author: "Ireneo de Lyon",
        work: "Adversus haereses 3, 3, 2",
        date: {
          year: 180,
          yearEnd: 189,
          circa: true,
        },
        citedIn: {
          citations: ["CEC834", "PA2"],
          label: "Catecismo 834",
        },
      },
      {
        lead: "El Catecismo cita a san Ignacio de Antioquía:",
        quote: ["«que preside en la caridad»"],
        author: "Ignacio de Antioquía",
        work: "A los Romanos, saludo",
        date: {
          year: 107,
          yearEnd: 110,
          circa: true,
          attribution: "fecha tradicional; discutida",
        },
        citedIn: {
          citations: ["CEC834"],
          label: "Catecismo 834",
        },
      },
    ],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para la Iglesia católica, el oficio de Pedro forma parte de la Iglesia tal como Cristo la fundó: «El Señor estableció solamente a Simón como roca y portador de las llaves de la Iglesia (Mt 16,18-19) y le constituyó Pastor de toda su grey (cf. Jn 21, 15 ss)» {c:LG22|Lumen gentium 22}, y lo que instituyó en él para el bien de la Iglesia «es necesario que dure» hasta el fin de los siglos {c:PA2|Vaticano I, Pastor aeternus, cap. 2}.",
  },
  scriptureSubtitle:
    "Los pasajes que los documentos católicos citan sobre el primado y la infalibilidad del papa, y cómo los leen.",
  scripture: [
    {
      refs: ["Matt.16.16-Matt.16.19"],
      text: "«Tú eres Pedro, y sobre esta piedra edificaré mi iglesia… Y á ti daré las llaves del reino de los cielos.» Para la Iglesia católica, Cristo dijo estas palabras a Simón solo, después de su confesión: Pedro, «a causa de la fe confesada por él», es la roca, y las llaves significan «la autoridad para gobernar la casa de Dios» {c:CEC552,CEC553|Catecismo 552–553}.",
    },
    {
      refs: ["John.1.42"],
      text: "«Tú serás llamado Cephas (que quiere decir, Piedra)»: el Vaticano I lo cita como el primer paso: Jesús ya había dado a Simón el nombre de «Piedra» antes de prometerle las llaves {c:PA1|Pastor aeternus, cap. 1}.",
    },
    {
      refs: ["John.21.15-John.21.17"],
      text: "«Apacienta mis ovejas»: el Vaticano I lee aquí que Cristo, después de la resurrección, confió a Pedro todo el rebaño {c:PA1|cap. 1}. Juan Pablo II subraya que la triple profesión de amor responde a la triple negación {c:UUS91|Ut unum sint 91}.",
    },
    {
      refs: ["Luke.22.31-Luke.22.32"],
      text: "«Mas yo he rogado por ti que tu fe no falte: y tú, una vez vuelto, confirma á tus hermanos»: el Vaticano I lee aquí la promesa que funda el carisma de «verdad y de fe que nunca falla» dado a Pedro y a sus sucesores {c:PA4char|cap. 4}.",
    },
    {
      refs: ["Matt.18.18", "Matt.28.16-Matt.28.20"],
      text: "Para {c:LG22|Lumen gentium 22}, el poder de «atar y desatar» se dio también al colegio de los apóstoles, pero «unido a su Cabeza»; el Catecismo añade que Pedro es «el único a quien Él confió explícitamente las llaves» {c:CEC553|553}.",
    },
    {
      refs: ["John.20.21"],
      text: "«Como me envió el Padre, así también yo os envío»: para {c:LG18|Lumen gentium 18}, Cristo edificó la Iglesia enviando a los apóstoles y quiso que sus sucesores, los obispos, fueran «los pastores en su Iglesia hasta la consumación de los siglos».",
    },
    {
      refs: ["Matt.10.2", "Mark.3.16", "Luke.6.14", "Acts.1.13"],
      text: "«Primero Simón, llamado Pedro»: todas las listas de los Doce empiezan por él {c:CDFP3|Congregación para la Doctrina de la Fe, 1998}.",
    },
    {
      refs: ["Acts.2.14", "Acts.2.37", "Acts.5.29"],
      text: "En los primeros capítulos de los Hechos, Pedro aparece «como cabeza y portavoz del colegio apostólico»: «Pedro… con los Once» {c:UUS90|Ut unum sint 90}.",
    },
    {
      refs: ["1Cor.15.5"],
      text: "Cristo resucitado se aparece «a Cefas y luego a los Doce» {c:UUS91|Ut unum sint 91}.",
    },
    {
      refs: ["Matt.16.23", "John.13.38", "Luke.5.8"],
      text: "Pedro es reprendido («¡Escándalo eres par[a] mí!», como imprime la página) y niega tres veces. Juan Pablo II escribe: «Es precisamente como si, desde la debilidad humana de Pedro, se manifestara de un modo pleno que su ministerio particular en la Iglesia procede totalmente de la gracia» {c:UUS91|Ut unum sint 91}.",
    },
    {
      refs: ["Luke.22.26-Luke.22.27", "Matt.20.25"],
      text: "«Yo estoy en medio de vosotros como el que sirve»: Juan Pablo II cita estas palabras para decir que la potestad, «y en particular el primado», no puede separarse del ministerio; por eso su ministerio es el del «servus servorum Dei», siervo de los siervos de Dios {c:UUS88,UUS94|Ut unum sint 88; cf. 94}.",
    },
    {
      refs: ["Eph.2.20", "Rev.21.14", "1Pet.2.4"],
      text: "La Iglesia está edificada «sobre el bienaventurado Pedro, su cabeza, siendo el propio Cristo Jesús la piedra angular» {c:LG19|Lumen gentium 19}; Cristo es la «Piedra viva» que asegura a la Iglesia edificada sobre Pedro {c:CEC552|Catecismo 552}.",
    },
    {
      refs: ["John.17.21"],
      text: "«Para que todos sean una cosa»: el Vaticano I abre con esta oración de Cristo, y Juan Pablo II la propone como horizonte del diálogo sobre el primado {c:UUS96|Ut unum sint 96}.",
    },
    {
      refs: ["2Cor.11.28"],
      text: "«La preocupación por todas las Iglesias»: todos los obispos la comparten; en el obispo de Roma «adquiere una fuerza particular» {c:CDFP6|Congregación para la Doctrina de la Fe, 1998}.",
    },
  ],
  videos: {
    subtitle: "Creadores católicos explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle: "Objeciones a la postura católica. Abre cada una para leer en profundidad la respuesta católica.",
    videosSubtitle: "Creadores católicos que responden a esta objeción. Los videos se abren en YouTube.",
    order: ["OB-1", "OB-2", "OB-3", "OB-4", "OB-5", "OB-6", "OB-7", "OB-8"],
    silentTraditions:
      "Los textos que hablan por los bautistas en Doctrina (Fe y Mensaje Bautistas 2000, art. VI; Confesión de New Hampshire 1853, art. XIII) no se pronuncian sobre el papado.",
    items: [
      {
        id: "OB-1",
        layer: "official",
        short: "Cristo es la cabeza de la Iglesia",
        title: "Cristo es «la cabeza del cuerpo que es la iglesia»: ningún hombre puede serlo",
        synthesis:
          "La Escritura dice de Cristo: «él es la cabeza del cuerpo que es la iglesia» {v:Col.1.18}; para la Confesión de Westminster no hay otra cabeza de la Iglesia, y entre sus textos de prueba está el mandato «vuestro padre no llaméis á nadie en la tierra… Ni seáis llamados maestros; porque uno es vuestro Maestro, el Cristo» {v:Matt.23.9-Matt.23.10}. Los ortodoxos añaden que un hombre mortal no puede ser cabeza universal y perpetua de la Iglesia: Cristo mismo la gobierna {c:DOS10|Dositeo, decreto X}. Los luteranos sostienen que el obispo de Roma es solo obispo y pastor de la iglesia de Roma, y que los demás obispos son sus hermanos, no sus súbditos {c:SA241,SA249|Artículos de Esmalcalda II.4}.",
        raisedBy: {
          traditions: ["orthodox", "lutheran", "reformed"],
          line: "Suelen plantearla reformados, luteranos y ortodoxos.",
        },
        objectorTexts: {
          shown: ["WCF256", "STWCF~p"],
          more: ["SA241", "SA249", "STLUT~p", "DOS10", "ENC95_14h", "ST1895~p"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, Cristo es la única Cabeza de la Iglesia, y el ministerio de Pedro existe para servirla; Juan Pablo II escribe: «Esta función de Pedro debe permanecer en la Iglesia para que, bajo su única Cabeza, que es Cristo Jesús, sea visiblemente en el mundo la comunión de todos sus discípulos» {c:UUS97|Ut unum sint 97}. El Concilio Vaticano II enseña que la Iglesia está edificada «sobre el bienaventurado Pedro, su cabeza, siendo el propio Cristo Jesús la piedra angular» {c:LG19|Lumen gentium 19} {v:Eph.2.20}. El Catecismo dice que es Cristo quien la gobierna «por medio de Pedro y los demás Apóstoles, presentes en sus sucesores, el Papa y el colegio de los obispos» {c:CEC869|Catecismo 869}.",
          },
          {
            type: "p",
            text: "El Catecismo explica qué recibió Pedro: «El Señor hizo de Simón, al que dio el nombre de Pedro, y solamente de él, la piedra de su Iglesia. Le entregó las llaves de ella (cf. Mt 16, 18-19); lo instituyó pastor de todo el rebaño (cf. Jn 21, 15-17)»; y añade: «Este oficio pastoral de Pedro y de los demás Apóstoles pertenece a los cimientos de la Iglesia. Se continúa por los obispos bajo el primado del Papa» {c:CEC881|Catecismo 881}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, el papa es «Vicario de Cristo» y «cabeza visible de toda la Iglesia» {c:LG22,LG18|Lumen gentium 22 y 18}, El Vaticano II dice además que el Romano Pontífice es «el principio y fundamento perpetuo y visible de unidad así de los Obispos como de la multitud de los fieles» {c:LG23|Lumen gentium 23}. Juan Pablo II escribe que la Iglesia católica no separa esa función «de la misión confiada a todos los Obispos, también ellos «vicarios y legados de Cristo»», y que «el Obispo de Roma pertenece a su «colegio» y ellos son sus hermanos en el ministerio» {c:UUS95|Ut unum sint 95}.",
          },
          {
            type: "p",
            text: "El canon del Vaticano I sobre este punto dice: «Si alguno, pues, dijere que el bienaventurado apóstol Pedro no fue constituido por Cristo el Señor príncipe de todos los apóstoles y cabeza visible de toda la Iglesia militante; o que recibió directa e inmediatamente del mismo Señor nuestro Jesucristo solo un primado de honor, y no de verdadera y propia jurisdicción: sea anatema» {c:PA1can|Pastor aeternus, cap. 1, canon}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["UUS95", "UUS97"],
            name: "Juan Pablo II, Ut unum sint 95, 97",
            dates: [
              {
                year: 1995,
                month: 5,
                day: 25,
              },
            ],
          },
          {
            citations: ["LG18", "LG19", "LG22", "LG23"],
            name: "Concilio Vaticano II, Lumen gentium 18, 19, 22, 23",
            dates: [
              {
                year: 1964,
                month: 11,
                day: 21,
              },
            ],
          },
          {
            citations: ["CEC869", "CEC881"],
            name: "Catecismo de la Iglesia Católica 869, 881",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["PA1can"],
            name: "Concilio Vaticano I, Pastor aeternus, cap. 1, canon",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
        ],
        passages: {
          answer: ["Eph.2.20", "Matt.16.18-Matt.16.19", "John.21.15-John.21.17"],
          objector: ["Col.1.18", "Eph.1.22", "Matt.23.8-Matt.23.10", "Matt.28.20"],
          objectorNote:
            "Confesión de Westminster XXV.6, Encíclica de 1895 §XIV; 2 Tesalonicenses 2 y Apocalipsis 13:6, en la objeción OB-7.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-2",
        layer: "official",
        short: "La roca es la confesión de Pedro",
        title:
          "«Sobre esta roca edificaré mi iglesia»: la roca es la confesión de Pedro, y las llaves se dieron a todos los apóstoles",
        synthesis:
          "Cuando Cristo dice «sobre esta piedra edificaré mi iglesia», la piedra es la fe que Pedro confesó: «Tú eres el Cristo, el Hijo del Dios viviente». Pedro respondió en nombre de todos, y lo que se le dice a él en singular se dice después a todos en plural: «todo lo que ligareis en la tierra» {v:Matt.18.18}, «a los que remitiereis los pecados» {v:John.20.23}. Las llaves son de toda la Iglesia; y «apacienta mis ovejas» fue para Pedro la restitución de su apostolado después de negar al Señor, no una superioridad sobre los demás.",
        raisedBy: {
          traditions: ["orthodox", "lutheran"],
          line: "Suelen plantearla luteranos y ortodoxos.",
        },
        objectorTexts: {
          shown: ["TR25", "TR23", "TR24", "TR30", "STLUT~p"],
          more: ["ENC48_11r", "ST1848~p", "ENC95_14r", "ST1895~p"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, Pedro no se separa de su confesión: «Pedro, a causa de la fe confesada por él, será la roca inquebrantable de la Iglesia» {c:CEC552|Catecismo 552}. El Vaticano I subraya que Cristo habló así «a Simón solo», al que ya había llamado «Cefas», después de que él confesara: «Tú eres el Cristo, el Hijo de Dios vivo» {c:PA1|Pastor aeternus, cap. 1} {v:John.1.42} {v:Matt.16.16-Matt.16.19}. La Congregación para la Doctrina de la Fe escribe que en la Iglesia «la imagen de Pedro quedó fijada como la del Apóstol que, a pesar de su debilidad humana, fue constituido expresamente por Cristo en el primer lugar entre los Doce y llamado a desempeñar en la Iglesia una función propia y específica. Él es la roca sobre la que Cristo edificará su Iglesia» {c:CDFP3|El primado del Sucesor de Pedro, n. 3}.",
          },
          {
            type: "p",
            text: "El Catecismo enseña también que Jesús, «en virtud de su autoridad divina», «confiere este poder a los hombres (cf Jn 20,21-23) para que lo ejerzan en su nombre» {c:CEC1441|Catecismo 1441}, y que «consta que también el colegio de los Apóstoles, unido a su cabeza, recibió la función de atar y desatar dada a Pedro (cf Mt 18,18; 28,16-20)» {c:CEC1444|Catecismo 1444, citando Lumen gentium 22}. Lumen gentium añade: «el Señor estableció solamente a Simón como roca y portador de las llaves de la Iglesia (Mt 16,18-19) y le constituyó Pastor de toda su grey (cf. Jn 21, 15 ss)» {c:LG22|Lumen gentium 22}; Pedro es «el único a quien Él confió explícitamente las llaves del Reino» {c:CEC553|Catecismo 553}.",
          },
          {
            type: "p",
            text: "Sobre «Apacienta mis ovejas» {v:John.21.16-John.21.17}, Juan Pablo II escribe que la triple profesión de amor de Pedro «se corresponde con su triple traición», y que «es precisamente como si, desde la debilidad humana de Pedro, se manifestara de un modo pleno que su ministerio particular en la Iglesia procede totalmente de la gracia» {c:UUS91|Ut unum sint 91}. Para el Vaticano I, es allí donde Jesús resucitado confirió «solo a Simón Pedro» la jurisdicción de pastor supremo sobre todo su rebaño {c:PA1|Pastor aeternus, cap. 1} {v:John.21.15-John.21.17}.",
          },
          {
            type: "p",
            text: "El Vaticano I rechaza expresamente la lectura de que el primado se dio a la Iglesia y a Pedro solo como ministro de ella: a la doctrina de la Escritura «tal como siempre la entendió la Iglesia católica, se oponen abiertamente las perversas opiniones de quienes […] afirman que ese mismo primado no fue conferido inmediata y directamente al mismo bienaventurado Pedro, sino a la Iglesia, y por medio de ella a él como ministro de la misma Iglesia» {c:PA1perv|Pastor aeternus, cap. 1}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["CEC552", "CEC553", "CEC1441", "CEC1444"],
            name: "Catecismo de la Iglesia Católica 552–553, 1441, 1444",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["CDFP3"],
            name: "Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro 3",
            dates: [
              {
                year: 1998,
                month: 10,
                day: 31,
              },
            ],
          },
          {
            citations: ["LG22"],
            name: "Concilio Vaticano II, Lumen gentium 22",
            dates: [
              {
                year: 1964,
                month: 11,
                day: 21,
              },
            ],
          },
          {
            citations: ["UUS91"],
            name: "Juan Pablo II, Ut unum sint 91",
            dates: [
              {
                year: 1995,
                month: 5,
                day: 25,
              },
            ],
          },
          {
            citations: ["PA1", "PA1perv"],
            name: "Concilio Vaticano I, Pastor aeternus, cap. 1",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
        ],
        passages: {
          answer: [
            "John.1.42",
            "Matt.16.16-Matt.16.19",
            "Matt.18.18",
            "Matt.28.16-Matt.28.20",
            "John.20.21-John.20.23",
            "John.21.15-John.21.17",
          ],
          objector: [
            "Matt.16.15-Matt.16.19",
            "Matt.18.18-Matt.18.19",
            "John.20.21-John.20.23",
            "John.21.15-John.21.17",
            "1Cor.3.10-1Cor.3.11",
            "Eph.2.19-Eph.2.20",
          ],
          objectorNote:
            "Textos que citan el Tratado sobre el poder y el primado del papa 22–30 y las encíclicas ortodoxas de 1848, §11, y 1895, §XIV.",
        },
      },
      {
        id: "OB-3",
        layer: "official",
        short: "Un primado de honor y de derecho humano",
        title: "El primado de Roma es de honor y de derecho humano, no una jurisdicción de derecho divino",
        synthesis:
          "Cristo prohibió el señorío entre los apóstoles («Los reyes de las gentes se enseñorean de ellas… Mas vosotros, no así») {v:Luke.22.25-Luke.22.26} y los envió a todos por igual {v:John.20.21}. Para los luteranos, Pablo no fue ordenado ni confirmado por Pedro {v:Gal.2}, y la autoridad del obispo de Roma creció «por derecho humano», por disposición de los concilios {c:TR12|Tratado 12}; Melanchthon, al firmar los Artículos de Esmalcalda, admitió concederle por derecho humano una superioridad sobre los obispos si admitiera el Evangelio. Para los ortodoxos, los Padres dieron al obispo de Roma una presidencia de honor por ser obispo de la capital del imperio, «primero entre iguales», como después a Constantinopla (canon 28 de Calcedonia); cada Iglesia se gobernaba con sus propios sínodos, y durante nueve siglos Oriente no reconoció a Roma una jurisdicción sobre toda la Iglesia {c:ENC95_15,ENC95_16,ENC95_17|Encíclica de 1895, XV–XVII}.",
        raisedBy: {
          traditions: ["orthodox", "lutheran"],
          line: "Suelen plantearla luteranos y ortodoxos.",
        },
        objectorTexts: {
          shown: ["ENC95_15", "ENC95_17", "ST1895~p"],
          more: ["TR14", "TR8", "TR12", "STLUT~p", "SAMEL", "ENC48_13", "ST1848~p"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, Lucas 22 dice cómo debe ejercerse el primado: Juan Pablo II se presenta como «servus servorum Dei» y cita a Cristo: «Yo estoy en medio de vosotros como el que sirve» {c:UUS88|Ut unum sint 88} {v:Luke.22.27}; el primado se confía a uno de los obispos «no de ejercer el poder sobre el pueblo —como hacen los jefes de las naciones y los poderosos (cf. Mt 20, 25; Mc 10,42)—, sino de guiarlo» {c:UUS94|Ut unum sint 94} {v:Matt.20.25}. La Congregación para la Doctrina de la Fe dice que el primado «no es un oficio de coordinación o de presidencia, ni se reduce a un Primado de honor, ni puede concebirse como una monarquía de tipo político» {c:CDFP7|El primado del Sucesor de Pedro, 1998, n. 7}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, unas formas son de institución divina y otras nacieron de la Iglesia: «El Episcopado y el Primado, recíprocamente vinculados e inseparables, son de institución divina. Históricamente, por institución de la Iglesia, han surgido formas de organización eclesiástica en las que se ejerce también un principio de primacía», como el sistema de los patriarcados {c:CDFP6|n. 6}. El Concilio de Florencia, al definir el primado, renovó el orden de los patriarcas «quedando a salvo todos sus privilegios y derechos» {c:FLOpat|Laetentur caeli, 1439}.",
          },
          {
            type: "p",
            text: "Sobre el primer milenio, el Vaticano I sostiene que la suprema potestad de enseñar está comprendida en el primado, y que «lo declararon los mismos concilios ecuménicos, sobre todo aquellos en que Oriente y Occidente se reunían en la unión de la fe y de la caridad»; cita la profesión del IV Concilio de Constantinopla: «en la Sede Apostólica siempre se ha conservado inmaculada la religión católica» {c:PA4open|Pastor aeternus, cap. 4}. Sobre el canon 28 de Calcedonia, Pío XII, en la encíclica por los 1500 años de aquel concilio, sostiene que, «si bien nada se hubiera hecho contra el divino primado de jurisdicción, que era por todos reconocido, con todo aquel canon, redactado en ausencia y contra la voluntad de los Legados Pontificios, y por consiguiente clandestino y subrepticio, está destituido de todo valor jurídico y fue reprobado y condenado por San León en muchas cartas» {c:SRX|Sempiternus Rex Christus, 1951}. Juan Pablo II escribe que durante un milenio los cristianos estuvieron unidos «por la comunión fraterna de fe y vida sacramental, siendo la Sede Romana, con el consentimiento común, la que moderaba cuando surgían disensiones entre ellas en materia de fe o de disciplina» {c:UUS95|Ut unum sint 95, citando Unitatis redintegratio 14}; y admitió que, «contra la voluntad de unos y otros, lo que debía ser un servicio pudo manifestarse bajo una luz bastante distinta», y pidió perdón «por aquello de lo que somos responsables» {c:UUS95,UUS88|Ut unum sint 95 y 88}.",
          },
          {
            type: "p",
            text: "El canon del Vaticano I sobre este punto dice: «Si alguno, pues, dijere que el Romano Pontífice tiene solo un oficio de inspección o de dirección, y no la potestad plena y suprema de jurisdicción sobre toda la Iglesia […]; o que esta potestad suya no es ordinaria e inmediata, tanto sobre todas y cada una de las iglesias como sobre todos y cada uno de los pastores y fieles: sea anatema» {c:PA3can|Pastor aeternus, cap. 3, canon}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["UUS88", "UUS94", "UUS95"],
            name: "Juan Pablo II, Ut unum sint 88, 94, 95",
            dates: [
              {
                year: 1995,
                month: 5,
                day: 25,
              },
            ],
          },
          {
            citations: ["CDFP6", "CDFP7"],
            name: "Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro en el misterio de la Iglesia 6–7",
            dates: [
              {
                year: 1998,
                month: 10,
                day: 31,
              },
            ],
          },
          {
            citations: ["FLOpat"],
            name: "Concilio de Florencia, Laetentur caeli",
            dates: [
              {
                year: 1439,
                month: 7,
                day: 6,
              },
            ],
          },
          {
            citations: ["PA4open"],
            name: "Concilio Vaticano I, Pastor aeternus, cap. 4",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
          {
            citations: ["SRX"],
            name: "Pío XII, Sempiternus Rex Christus",
            dates: [
              {
                year: 1951,
                month: 9,
                day: 8,
              },
            ],
          },
          {
            citations: ["PA3can"],
            name: "Concilio Vaticano I, Pastor aeternus, cap. 3, canon",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
        ],
        passages: {
          answer: ["Luke.22.27", "Matt.20.25"],
          objector: [
            "Luke.22.24-Luke.22.26",
            "Matt.18.1-Matt.18.4",
            "John.20.21",
            "Gal.2.6-Gal.2.9",
            "1Cor.3.6",
            "1Cor.3.21-1Cor.3.22",
          ],
          objectorNote: "Textos que cita el Tratado sobre el poder y el primado del papa, 8–11.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-4",
        layer: "official",
        short: "La sede de Roma y Pedro",
        title: "La sede de Roma no es la de Pedro por la Escritura",
        synthesis:
          "Que la sede de Roma sea la de Pedro se apoya en una tradición, no en la Escritura, que habla más bien de Antioquía. La Iglesia de Roma fue fundada sobre todo por Pablo, por medio de sus discípulos; la acción apostólica de Pedro en Roma no consta en la historia. En la Escritura, Pedro discute como igual entre iguales en el concilio de Jerusalén y es reprendido por Pablo.",
        raisedBy: {
          traditions: ["orthodox"],
          line: "Suelen plantearla ortodoxos.",
        },
        objectorTexts: {
          shown: ["ENC48_11a", "ST1848~p"],
          more: ["ENC95_14p", "ST1895~p"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, la presencia y la muerte de Pedro en Roma están «atestiguadas por la tradición literaria y arqueológica más antigua»; y entiende que el ministerio de unidad confiado a Pedro «pertenece a la estructura perenne de la Iglesia de Cristo y que esta sucesión está fijada en la sede de su martirio» {c:CDFP3|Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro, 1998, n. 3}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, Pablo está unido a Pedro en la Iglesia de Roma: su preeminencia está «enriquecida también con la predicación y el martirio de San Pablo» {c:CDFP4|n. 4}, y Juan Pablo II la llama «la Iglesia de Pedro y de Pablo» {c:UUS90|Ut unum sint 90}. El Catecismo cita a san Ignacio de Antioquía (Carta a los Romanos, hacia 107–110, fecha tradicional; discutida) y a san Ireneo (Contra las herejías, hacia 180–189): «Las Iglesias particulares son plenamente católicas gracias a la comunión con una de ellas: la Iglesia de Roma 'que preside en la caridad' […]. 'Porque con esta Iglesia en razón de su origen más excelente debe necesariamente acomodarse toda Iglesia, es decir, los fieles de todas partes'» {c:CEC834|Catecismo 834}. Sobre Antioquía, la Iglesia católica dice que «es plenamente consciente de la función de las sedes apostólicas en la Iglesia antigua, especialmente de las consideradas petrinas –Antioquía y Alejandría–» {c:CDFP6|n. 6}.",
          },
          {
            type: "p",
            text: "El canon del Vaticano I sobre este punto dice: «Si alguno, pues, dijere que no es por institución del mismo Cristo el Señor, es decir, por derecho divino, que el bienaventurado Pedro tenga perpetuos sucesores en el primado sobre toda la Iglesia; o que el Romano Pontífice no es sucesor del bienaventurado Pedro en este mismo primado: sea anatema» {c:PA2can|Pastor aeternus, cap. 2, canon}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["CDFP3", "CDFP4", "CDFP6"],
            name: "Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro 3, 4, 6",
            dates: [
              {
                year: 1998,
                month: 10,
                day: 31,
              },
            ],
          },
          {
            citations: ["UUS90"],
            name: "Juan Pablo II, Ut unum sint 90",
            dates: [
              {
                year: 1995,
                month: 5,
                day: 25,
              },
            ],
          },
          {
            citations: ["CEC834"],
            name: "Catecismo de la Iglesia Católica 834",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["PA2can"],
            name: "Concilio Vaticano I, Pastor aeternus, cap. 2, canon",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: ["Gal.2.11-Gal.2.14", "Acts.15"],
          objectorNote: "Encíclicas ortodoxas de 1848, §11, y 1895, §XIV; ninguna da versículos de Hechos 15.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-5",
        layer: "official",
        short: "El concilio y el papa",
        title: "El concilio ecuménico, no el papa, es el tribunal supremo de la Iglesia",
        synthesis:
          "Para los ortodoxos, en la Iglesia antigua las cuestiones que tocaban a toda la Iglesia se llevaban a un concilio ecuménico, «el único tribunal supremo en la Iglesia universal», y el obispo de Roma estaba sujeto a sus decretos como los demás {c:ENC95_16|Encíclica de 1895, XVI}. Lo apoyan en Calcedonia, que no aceptó la carta del papa León porque fuera del papa, sino después de examinarla y comprobar que concordaba con los concilios anteriores {c:ENC48_15|Encíclica de 1848, 15}. Los luteranos añaden que un papa que no acepta ser juzgado por la Iglesia ni por un concilio quita a la Iglesia el juicio que le pertenece {c:TR4956|Tratado 49, 56}.",
        raisedBy: {
          traditions: ["orthodox", "lutheran"],
          line: "Suelen plantearla ortodoxos y luteranos.",
        },
        objectorTexts: {
          shown: ["ENC95_16", "ST1895~p"],
          more: ["ENC48_15", "ST1848~p", "TR4956", "STLUT~p"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, el concilio ecuménico es la forma solemne en que el colegio de los obispos ejerce la potestad suprema: «La potestad del colegio de los Obispos sobre toda la Iglesia se ejerce de modo solemne en el Concilio Ecuménico» {c:CEC884|Catecismo 884}. Lumen gentium enseña que ese colegio no existe sin su cabeza: «No hay concilio ecuménico si no es aprobado o, al menos, aceptado como tal por el sucesor de Pedro. Y es prerrogativa del Romano Pontífice convocar estos concilios ecuménicos, presidirlos y confirmarlos» {c:LG22|Lumen gentium 22}. El Vaticano I recuerda que los papas, antes de definir, «unas veces convocando concilios ecuménicos, otras consultando el parecer de la Iglesia dispersa por el orbe», definieron lo que habían reconocido «conforme a las Sagradas Escrituras y a las tradiciones apostólicas» {c:PA4conv|Pastor aeternus, cap. 4}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, que nadie pueda juzgar a la Primera Sede no hace ilimitado el poder del papa: «eso no significa que el Papa tenga un poder absoluto. En efecto, escuchar la voz de las Iglesias es una característica propia del ministerio de la unidad» {c:CDFP10|Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro, n. 10}. Lumen gentium enseña que a las definiciones «nunca puede faltar el asenso de la Iglesia por la acción del mismo Espíritu Santo» {c:LG25|Lumen gentium 25}.",
          },
          {
            type: "p",
            text: "Sobre Calcedonia, Pío XII, en la encíclica por los 1500 años de aquel concilio, sostiene que allí «no sólo los Legados Pontificios han ejercitado la autoridad de presidir, sino que también les fue reconocido por todos los Padres del Concilio sin alguna oposición el derecho y el honor de la presidencia»; que, leída la carta de León, «todos los Padres gritaron unánimemente: Esta es la fe de los Padres, ésta la fe de los Apóstoles. […] Pedro ha hablado por boca de León»; y que «después de esto, con pleno consentimiento, todos dijeron que el documento del Romano Pontífice concordaba perfectamente con los Símbolos Niceno y Constantinopolitano» {c:SRX|Sempiternus Rex Christus, 1951}.",
          },
          {
            type: "p",
            text: "El Vaticano I enseña: «se apartan del recto camino de la verdad quienes afirman que es lícito apelar de los juicios de los Romanos Pontífices al concilio ecuménico como a una autoridad superior al Romano Pontífice» {c:PA3b|Pastor aeternus, cap. 3}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["CEC884"],
            name: "Catecismo de la Iglesia Católica 884",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["LG22", "LG25"],
            name: "Concilio Vaticano II, Lumen gentium 22, 25",
            dates: [
              {
                year: 1964,
                month: 11,
                day: 21,
              },
            ],
          },
          {
            citations: ["PA3b", "PA4conv"],
            name: "Concilio Vaticano I, Pastor aeternus, caps. 3–4",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
          {
            citations: ["CDFP10"],
            name: "Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro 10",
            dates: [
              {
                year: 1998,
                month: 10,
                day: 31,
              },
            ],
          },
          {
            citations: ["SRX"],
            name: "Pío XII, Sempiternus Rex Christus",
            dates: [
              {
                year: 1951,
                month: 9,
                day: 8,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: [],
        },
      },
      {
        id: "OB-6",
        layer: "official",
        short: "La infalibilidad humana",
        title: "Ningún hombre en la tierra es infalible; solo la Escritura juzga las controversias",
        synthesis:
          "Para los ortodoxos, fuera de Cristo nadie en la tierra ha sido infalible: el mismo Pedro negó tres veces al Señor y fue reprendido por Pablo, y papas como Honorio fueron condenados como herejes por un concilio ecuménico; la infalibilidad del papa, proclamada en 1870, es una novedad que los primeros nueve siglos no conocieron {c:ENC95_14i,ENC95_18,ENC95_19|Encíclica de 1895, XIV, XVIII–XIX}, y el guardián de la fe es el cuerpo entero de la Iglesia, el pueblo mismo {c:ENC48_17|Encíclica de 1848, 17}. Los reformados sostienen además que el juez supremo de toda controversia es solo el Espíritu Santo que habla en la Escritura. Para los luteranos, la única regla para juzgar toda doctrina son los escritos de los profetas y de los apóstoles.",
        raisedBy: {
          traditions: ["orthodox", "lutheran", "reformed"],
          line: "Suelen plantearla ortodoxos, reformados y luteranos, desde lugares distintos: los ortodoxos tienen por infalibles las decisiones sinodales de la Iglesia universal y ponen la custodia de la fe en todo el cuerpo de la Iglesia; los reformados y los luteranos, solo la Escritura.",
        },
        objectorTexts: {
          shown: ["ENC95_18", "ENC95_14i", "ENC95_19", "ST1895~p"],
          more: ["ENC48_17", "ST1848~p", "WCF110", "FCEPRN"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, el papa no recibe una revelación nueva; el Vaticano I enseña: «el Espíritu Santo no fue prometido a los sucesores de Pedro para que, por revelación suya, dieran a conocer una doctrina nueva, sino para que, con su asistencia, custodiaran santamente y expusieran fielmente la revelación transmitida por los apóstoles, es decir, el depósito de la fe» {c:PA4neque|Pastor aeternus, cap. 4}. La Congregación para la Doctrina de la Fe lo explica así: «En el cumplimiento de su misión, los Pastores de la Iglesia gozan de la asistencia providencial del Espíritu Santo, que alcanza su cumbre cuando instruyen al Pueblo de Dios, de tal modo que transmiten una doctrina necesariamente libre de error» {c:ME3|Mysterium Ecclesiae, 1973, n. 3}. Lumen gentium enseña que, cuando define, el papa «no da una sentencia como persona privada», y que lo hace «siempre de acuerdo con la misma Revelación, a la cual deben atenerse y conformarse todos» {c:LG25|Lumen gentium 25}. El Código de Derecho Canónico dice: «Ninguna doctrina se considera definida infaliblemente si no consta así de modo manifiesto» {c:CIC749|can. 749 §3}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la debilidad de Pedro y de sus sucesores es real: «No han faltado en la historia del Papado errores humanos y faltas, incluso graves: Pedro mismo se reconocía pecador. Pedro, hombre débil, fue elegido como roca, precisamente para que quedara de manifiesto que la victoria es sólo de Cristo» {c:CDFP15|Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro, n. 15}. El Concilio Vaticano II enseña que Cristo llama a la Iglesia «hacia una perenne reforma, de la que la Iglesia misma, en cuanto institución humana y terrena, tiene siempre necesidad», también en las «formas de exponer la doctrina —que debe cuidadosamente distinguirse del mismo depósito de la fe—» {c:UR6|Unitatis redintegratio 6}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la Escritura se interpreta con autoridad en la Iglesia: el Catecismo enseña que «el oficio de interpretar auténticamente la palabra de Dios, oral o escrita, ha sido encomendado sólo al Magisterio vivo de la Iglesia, el cual lo ejercita en nombre de Jesucristo», «es decir, a los obispos en comunión con el sucesor de Pedro, el obispo de Roma» {c:CEC85|Catecismo 85, citando Dei Verbum 10}; y que ese Magisterio «no está por encima de la palabra de Dios, sino a su servicio» {c:CEC86|Catecismo 86, citando Dei Verbum 10}. Lumen gentium enseña que la infalibilidad prometida a la Iglesia «reside también en el Cuerpo de los Obispos cuando ejerce el supremo magisterio en unión con el sucesor de Pedro» {c:LG25|Lumen gentium 25}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la fe la guarda también todo el pueblo de Dios: «La totalidad de los fieles, que tienen la unción del Santo (cf. 1 Jn 2,20 y 27), no puede equivocarse cuando cree» {c:LG12|Lumen gentium 12}. La Congregación para la Doctrina de la Fe dice que Dios «ha querido dotar a su nuevo Pueblo, que es la Iglesia, de una cierta infalibilidad participada», y que la función del Magisterio «no se reduce a sancionar el consentimiento expresado por ellos, sino que incluso, al interpretar y explicar la palabra de Dios escrita o transmitida, puede prevenir tal consentimiento y exigirlo» {c:ME2|Mysterium Ecclesiae 2}. Lumen gentium añade que a las definiciones «nunca puede faltar el asenso de la Iglesia por la acción del mismo Espíritu Santo» {c:LG25|Lumen gentium 25}.",
          },
          {
            type: "p",
            text: "Lumen gentium explica por qué esas definiciones son irreformables «por sí mismas»: porque se proclaman «bajo la asistencia del Espíritu Santo, prometida a él en la persona de San Pedro», y no necesitan «de ninguna aprobación de otros ni admitir tampoco apelación a otro tribunal» {c:LG25|Lumen gentium 25}.",
          },
          {
            type: "p",
            text: "El Vaticano I lo definió así: «enseñamos y definimos que es dogma divinamente revelado: que el Romano Pontífice, cuando habla ex cathedra […], goza […] de aquella infalibilidad de la que el divino Redentor quiso que estuviera dotada su Iglesia al definir la doctrina sobre la fe o las costumbres; y que, por tanto, tales definiciones del Romano Pontífice son irreformables por sí mismas, y no por el consentimiento de la Iglesia. Y si alguno […] presumiere contradecir esta nuestra definición: sea anatema» {c:PA4def|Pastor aeternus, cap. 4}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["PA4neque", "PA4def"],
            name: "Concilio Vaticano I, Pastor aeternus, cap. 4",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
          {
            citations: ["CEC85", "CEC86"],
            name: "Catecismo de la Iglesia Católica 85, 86 (Dei Verbum 10)",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["LG12", "LG25"],
            name: "Concilio Vaticano II, Lumen gentium 12, 25",
            dates: [
              {
                year: 1964,
                month: 11,
                day: 21,
              },
            ],
          },
          {
            citations: ["UR6"],
            name: "Concilio Vaticano II, Unitatis redintegratio 6",
            dates: [
              {
                year: 1964,
                month: 11,
                day: 21,
              },
            ],
          },
          {
            citations: ["ME2", "ME3"],
            name: "Congregación para la Doctrina de la Fe, Mysterium Ecclesiae 2–3",
            dates: [
              {
                year: 1973,
                month: 6,
                day: 24,
              },
            ],
          },
          {
            citations: ["CIC749"],
            name: "Código de Derecho Canónico, can. 749 §3",
            dates: [
              {
                year: 1983,
              },
            ],
          },
          {
            citations: ["CDFP15"],
            name: "Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro 15",
            dates: [
              {
                year: 1998,
                month: 10,
                day: 31,
              },
            ],
          },
        ],
        passages: {
          answer: ["1John.2.20", "1John.2.27"],
          objector: ["Gal.2.11-Gal.2.14", "Matt.22.29", "Matt.22.31", "Eph.2.20", "Acts.28.25"],
          objectorNote:
            "Gálatas 2:11-14: Encíclica de 1895, §XVIII, sin versículo. Mateo 22:29, 31; Efesios 2:20; Hechos 28:25: Confesión de Westminster I.10.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-7",
        layer: "official",
        short: "El papa y la Palabra de Dios",
        title: "El papa se pone por encima de la Palabra de Dios y ata la salvación a su obediencia: es el Anticristo",
        synthesis:
          "Para los luteranos, el papa pretende ser cabeza de la Iglesia por derecho divino y enseña que nadie puede salvarse sin someterse a él, aunque crea en Cristo {c:SA244|Artículos de Esmalcalda II.4} {c:TR36|Tratado 36}. Se arroga cambiar la doctrina y el culto que Dios instituyó y no acepta ser juzgado por nadie {c:TR3940|Tratado 39–40}. Eso es lo que Pablo describe del «hombre de pecado», «oponiéndose, y levantándose contra todo lo que se llama Dios», «tanto que se asiente en el templo de Dios como Dios» {v:2Thess.2.3-2Thess.2.4}; por eso, aun si tuviera el primado por derecho divino, no se le debería obediencia {c:TR38,TR57|Tratado 38, 57}. La Confesión de Westminster, en su texto de 1647, llama al papa «aquel anti-cristo, aquel inícuo, é hijo de perdicion» {c:WCF256|XXV.6}.",
        raisedBy: {
          traditions: ["lutheran", "reformed"],
          line: "Suelen plantearla los luteranos, y la Confesión de Westminster en su texto de 1647.",
        },
        objectorTexts: {
          shown: ["SA244", "SA2410", "STLUTAC~p"],
          more: ["TR38", "TR3940", "TR57", "STLUTAC~p", "TR36", "STLUT~p", "WCF256", "STWCF~p"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, «el oficio de interpretar auténticamente la palabra de Dios, oral o escrita, ha sido encomendado sólo al Magisterio vivo de la Iglesia» {c:CEC85|Catecismo 85, citando Dei Verbum 10}; y el Catecismo añade: «El Magisterio no está por encima de la palabra de Dios, sino a su servicio, para enseñar puramente lo transmitido» {c:CEC86|Catecismo 86, citando Dei Verbum 10}. La Congregación para la Doctrina de la Fe dice: «El Romano Pontífice, como todos los fieles, está subordinado a la Palabra de Dios, a la fe católica […]. No decide según su arbitrio, sino que es portavoz de la voluntad del Señor», y su potestad «tiene los límites que proceden de la ley divina y de la inviolable constitución divina de la Iglesia contenida en la Revelación» {c:CDFP7|Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro, n. 7}.",
          },
          {
            type: "p",
            text: "El Vaticano I cierra el capítulo 3 con una frase que llama «doctrina de la verdad católica, de la cual nadie puede apartarse sin menoscabo de la fe y de la salvación» a lo que ha enseñado en él {c:PA3a|Pastor aeternus, cap. 3}. El Vaticano II enseña también: «no podrían salvarse aquellos hombres que, conociendo que la Iglesia católica fue instituida por Dios a través de Jesucristo como necesaria, sin embargo, se negasen a entrar o a perseverar en ella» {c:LG14|Lumen gentium 14}. El Catecismo enseña a la vez que «los que creen en Cristo y han recibido ritualmente el bautismo están en una cierta comunión, aunque no perfecta, con la Iglesia católica» {c:CEC838|Catecismo 838, citando Unitatis redintegratio 3}, y el Concilio, que las Iglesias y comunidades separadas «no están desprovistas de sentido y de valor en el misterio de la salvación, porque el Espíritu de Cristo no ha rehusado servirse de ellas como medios de salvación» {c:UR3|Unitatis redintegratio 3}.",
          },
          {
            type: "p",
            text: "Juan Pablo II reconoció que la convicción católica sobre el papa «constituye una dificultad para la mayoría de los demás cristianos, cuya memoria está marcada por ciertos recuerdos dolorosos», pidió perdón «por aquello de lo que somos responsables» e invitó a un diálogo «más allá de estériles polémicas» {c:UUS88,UUS96|Ut unum sint 88 y 96}.",
          },
          {
            type: "p",
            text: "El Vaticano I enseña: «el Espíritu Santo no fue prometido a los sucesores de Pedro para que, por revelación suya, dieran a conocer una doctrina nueva, sino para que, con su asistencia, custodiaran santamente y expusieran fielmente la revelación transmitida por los apóstoles» {c:PA4neque|Pastor aeternus, cap. 4}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["CEC85", "CEC86", "CEC838"],
            name: "Catecismo de la Iglesia Católica 85, 86, 838",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["LG14", "UR3"],
            name: "Concilio Vaticano II, Lumen gentium 14 y Unitatis redintegratio 3",
            dates: [
              {
                year: 1964,
                month: 11,
                day: 21,
              },
            ],
          },
          {
            citations: ["CDFP7"],
            name: "Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro 7",
            dates: [
              {
                year: 1998,
                month: 10,
                day: 31,
              },
            ],
          },
          {
            citations: ["PA3a", "PA4neque"],
            name: "Concilio Vaticano I, Pastor aeternus, caps. 3–4",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
          {
            citations: ["UUS88", "UUS96"],
            name: "Juan Pablo II, Ut unum sint 88, 96",
            dates: [
              {
                year: 1995,
                month: 5,
                day: 25,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: [
            "2Thess.2.3-2Thess.2.4",
            "2Thess.2.8-2Thess.2.9",
            "Rev.13.6",
            "Rev.12",
            "Gal.1.8",
            "Acts.5.29",
            "Matt.7.15",
            "Titus.3.10",
            "2Cor.6.14",
          ],
          objectorNote:
            "Textos que citan los Artículos de Esmalcalda II.4 (Apocalipsis 12: II.4.4), el Tratado 38–41 y la Confesión de Westminster XXV.6, texto de 1647 (la edición de 1880 solo 2 Tesalonicenses 2:3-5).",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-8",
        layer: "official",
        short: "El poder temporal",
        title: "«Mi reino no es de este mundo»: Cristo no dio a los apóstoles la espada ni el poder de dar reinos",
        synthesis:
          "Cristo dio a los apóstoles solo una potestad espiritual: enseñar el Evangelio, anunciar el perdón de los pecados, administrar los sacramentos y excluir a los impíos sin fuerza física. «Mi reino no es de este mundo» {v:John.18.36}. Pretender que el papa tiene por derecho divino las dos espadas y el poder de dar y quitar reinos, y que creerlo es necesario para la salvación, convierte las llaves en un reino de este mundo.",
        raisedBy: {
          traditions: ["lutheran"],
          line: "Suelen plantearla luteranos.",
        },
        objectorTexts: {
          shown: ["TR31", "TR33", "TR35", "TR36w", "STLUT~p"],
          more: [],
        },
        answer: [
          {
            type: "p",
            text: "El Vaticano I enseña que la potestad del papa abarca «las cosas que pertenecen a la fe y a las costumbres» y las que pertenecen a «la disciplina y al régimen de la Iglesia extendida por todo el orbe» {c:PA3a|Pastor aeternus, cap. 3}. El Concilio Vaticano II enseña: «La misión propia que Cristo confió a su Iglesia no es de orden político, económico o social. El fin que le asignó es de orden religioso» {c:GS42|Gaudium et spes 42}. El Catecismo enseña, citando al mismo Concilio, que pertenece a la misión de la Iglesia «emitir un juicio moral incluso sobre cosas que afectan al orden político cuando lo exijan los derechos fundamentales de la persona o la salvación de las almas, aplicando todos y sólo aquellos medios que sean conformes al Evangelio […]» {c:CEC2246|Catecismo 2246, citando Gaudium et spes 76}.",
          },
          {
            type: "p",
            text: "La Congregación para la Doctrina de la Fe dice que el primado no «puede concebirse como una monarquía de tipo político», y que, «como demuestra la historia, ha constituido también una defensa de la libertad de los Obispos y de las Iglesias particulares frente a las injerencias del poder político» {c:CDFP7,CDFP2|El primado del Sucesor de Pedro, nn. 7 y 2}.",
          },
          {
            type: "p",
            text: "El Concilio Vaticano II enseña: «La Iglesia, que por razón de su misión y de su competencia no se confunde en modo alguno con la comunidad política ni está ligada a sistema político alguno, es a la vez signo y salvaguardia del carácter trascendente de la persona humana» {c:GS76|Gaudium et spes 76}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["PA3a"],
            name: "Concilio Vaticano I, Pastor aeternus, cap. 3",
            dates: [
              {
                year: 1870,
                month: 7,
                day: 18,
              },
            ],
          },
          {
            citations: ["GS42", "GS76"],
            name: "Concilio Vaticano II, Gaudium et spes 42, 76",
            dates: [
              {
                year: 1965,
                month: 12,
                day: 7,
              },
            ],
          },
          {
            citations: ["CEC2246"],
            name: "Catecismo de la Iglesia Católica 2246",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["CDFP2", "CDFP7"],
            name: "Congregación para la Doctrina de la Fe, El primado del Sucesor de Pedro 2, 7",
            dates: [
              {
                year: 1998,
                month: 10,
                day: 31,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: ["Matt.28.19-Matt.28.20", "John.20.21", "John.18.36", "2Cor.1.24", "2Cor.10.4"],
          objectorNote: "Textos que cita el Tratado sobre el poder y el primado del papa, 31.",
        },
        apologeticAnswer: "pending",
      },
    ],
  },
  life: {
    intro: [
      "En cada Misa se nombra al papa. Para la Iglesia católica, «el Papa es asociado a toda celebración de la Eucaristía en la que es nombrado como signo y servidor de la unidad de la Iglesia universal» {c:CEC1369|Catecismo 1369}. Para el Código, están en plena comunión los bautizados que se unen a Cristo dentro de su estructura visible «por los vínculos de la profesión de fe, de los sacramentos y del régimen eclesiástico» {c:CIC205|can. 205}, y el Código llama cisma «el rechazo de la sujeción al Sumo Pontífice» {c:CIC751|can. 751}; a la vez, el Catecismo enseña que quienes nacen hoy en las comunidades separadas «y son instruidos en la fe de Cristo, no pueden ser acusados del pecado de la separación y la Iglesia católica los abraza con respeto y amor fraternos» {c:CEC818|Catecismo 818, citando Unitatis redintegratio 3}.",
      "Para la Iglesia católica, a la enseñanza ordinaria del papa el católico le debe «un asentimiento religioso del entendimiento y de la voluntad, sin que llegue a ser de fe» {c:CIC752|can. 752}. El papa nombra a los obispos, es elegido por los cardenales y puede renunciar libremente; mientras la sede está vacante, «nada se ha de innovar en el régimen de la Iglesia universal» {c:CIC335|can. 335}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "En cada Misa",
        text: "El papa «es asociado a toda celebración de la Eucaristía en la que es nombrado como signo y servidor de la unidad de la Iglesia universal»; también se nombra al obispo del lugar. Para la Iglesia católica, toda celebración válida de la Eucaristía «expresa esta comunión universal con Pedro y con la Iglesia entera, o la reclama objetivamente».",
        sources: [
          {
            citations: ["CEC1369"],
            label: "Catecismo 1369",
          },
          {
            citations: ["CDFP11"],
            label: "El primado del Sucesor de Pedro 11",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Plena comunión",
        text: "Están en plena comunión «los bautizados que se unen a Cristo dentro de la estructura visible de aquélla, es decir, por los vínculos de la profesión de fe, de los sacramentos y del régimen eclesiástico»; el «rechazo de la sujeción al Sumo Pontífice o de la comunión con los miembros de la Iglesia a él sometidos» es, para el Código, cisma. El Catecismo añade que quienes nacen hoy en las comunidades separadas «y son instruidos en la fe de Cristo, no pueden ser acusados del pecado de la separación y la Iglesia católica los abraza con respeto y amor fraternos» (y que las separaciones ocurrieron «a veces, no sin culpa de los hombres de ambas partes», 817).",
        sources: [
          {
            citations: ["CIC205", "CIC751"],
            label: "cann. 205 y 751",
          },
          {
            citations: ["CEC817", "CEC818"],
            label: "Catecismo 817–818",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Ante una definición",
        text: "A lo que el papa define ex cathedra, o el concilio con él, se adhiere el católico «con la obediencia de la fe»; pero «ninguna doctrina se considera definida infaliblemente si no consta así de modo manifiesto».",
        sources: [
          {
            citations: ["CEC891"],
            label: "Catecismo 891",
          },
          {
            citations: ["CIC749"],
            label: "can. 749 §3",
          },
        ],
      },
      {
        id: "CV-4",
        label: "Ante la enseñanza ordinaria",
        text: "A la enseñanza ordinaria del papa se le debe «un asentimiento religioso del entendimiento y de la voluntad, sin que llegue a ser de fe»; su peso se conoce «por la índole de los documentos», «la frecuente proposición de la misma doctrina» o «la forma de decirlo».",
        sources: [
          {
            citations: ["CIC752"],
            label: "can. 752",
          },
          {
            citations: ["LG25"],
            label: "Lumen gentium 25",
          },
          {
            citations: ["CEC892"],
            label: "Catecismo 892",
          },
        ],
      },
      {
        id: "CV-5",
        label: "Obediencia y palabra",
        text: "Los fieles están obligados a seguir «todo aquello que los Pastores sagrados, en cuanto representantes de Cristo, declaran como maestros de la fe o establecen como rectores de la Iglesia»; y tienen «el derecho, y a veces incluso el deber», de manifestar su opinión a los pastores sobre el bien de la Iglesia.",
        sources: [
          {
            citations: ["CIC212"],
            label: "can. 212 §§1 y 3",
          },
        ],
      },
      {
        id: "CV-6",
        label: "Elección y renuncia",
        text: "Los cardenales eligen al papa; el elegido obtiene la potestad plena «mediante la elección legítima por él aceptada juntamente con la consagración episcopal»; si renuncia, la renuncia debe ser «libre» y manifestarse formalmente, «pero no que sea aceptada por nadie».",
        sources: [
          {
            citations: ["CIC349"],
            label: "can. 349",
          },
          {
            citations: ["CIC332"],
            label: "can. 332",
          },
        ],
      },
      {
        id: "CV-7",
        label: "Sede vacante",
        text: "Al quedar vacante la sede romana, «nada se ha de innovar en el régimen de la Iglesia universal».",
        sources: [
          {
            citations: ["CIC335"],
            label: "can. 335",
          },
        ],
      },
      {
        id: "CV-8",
        label: "Los obispos",
        text: "«El Sumo Pontífice nombra libremente a los Obispos, o confirma a los que han sido legítimamente elegidos»; los obispos solo ejercen sus funciones de enseñar y regir «en comunión jerárquica con la cabeza y con los miembros del Colegio».",
        sources: [
          {
            citations: ["CIC377"],
            label: "can. 377 §1",
          },
          {
            citations: ["CIC375"],
            label: "can. 375 §2",
          },
        ],
      },
      {
        id: "CV-9",
        label: "Profesión de fe",
        text: "Quienes asumen ciertos oficios en la Iglesia deben emitir personalmente la profesión de fe «según la fórmula aprobada por la Sede Apostólica».",
        sources: [
          {
            citations: ["CIC833"],
            label: "can. 833",
          },
        ],
      },
      {
        id: "CV-10",
        label: "El concilio",
        text: "El concilio ecuménico es la forma solemne en que el colegio de los obispos ejerce la potestad suprema; sus decretos obligan solo si el papa los aprueba, confirma y promulga.",
        sources: [
          {
            citations: ["CIC337"],
            label: "can. 337 §1",
          },
          {
            citations: ["CIC341"],
            label: "can. 341 §1",
          },
          {
            citations: ["LG22"],
            label: "Lumen gentium 22",
          },
        ],
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
        definition:
          "Se ha de prestar un asentimiento religioso del entendimiento y de la voluntad, sin que llegue a ser de fe, a la doctrina que el Sumo Pontífice o el Colegio de los Obispos, en el ejercicio de su magisterio auténtico, enseñan acerca de la fe y de las costumbres",
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
          citations: ["DV17"],
          label: "Donum veritatis 17",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
