import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const baptismCatholic = {
  doctrine: "baptism",
  tradition: "catholic",
  status: "draft",
  title: "La posición católica",
  lede: "Cómo la Iglesia católica entiende el bautismo, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que la Iglesia católica enseña sobre el bautismo, con el grado de autoridad que le corresponde según las categorías de la Iglesia.",
    definition: {
      text: "Para la Iglesia católica, el bautismo es «el sacramento del nuevo nacimiento por el agua y la palabra» ({c:CEC1213|Catecismo 1213}): por él la persona es liberada del pecado, renace como hijo de Dios, se hace miembro de Cristo y entra en la Iglesia. Es la puerta de la vida cristiana y de los demás sacramentos, y se da una sola vez.",
      grades: [
        {
          kind: "unclassified",
          reason: "taught-by-catechism",
          basis:
            "la definición abre el artículo del Catecismo sobre el bautismo (1213), que une el {c:FLOexs|Concilio de Florencia} y el Catecismo Romano; el {c:CIC849|Código, can. 849} la da en forma legal",
        },
      ],
      sources: [
        {
          citations: ["CEC1213"],
          label: "Catecismo 1213",
        },
        {
          citations: ["CEC1272"],
          label: "Catecismo 1272",
        },
        {
          citations: ["CIC849"],
          label: "Código de Derecho Canónico, can. 849",
        },
        {
          citations: ["FLOexs"],
          label: "Florencia, Exsultate Deo",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "el bautismo como sacramento",
        text: "El bautismo es uno de los siete sacramentos que Cristo instituyó. Como todo sacramento de la Nueva Ley, no es solo un signo exterior de una gracia recibida antes por la fe: contiene la gracia que significa y la confiere a quien no le pone obstáculo. Por eso la Iglesia lo llama «el sacramento del nuevo nacimiento»: lo que el agua significa, el lavado y la vida nueva, el bautismo lo realiza.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis: "así lo clasifica la {c:CDF11|Congregación para la Doctrina de la Fe (1998, §11)}",
          },
        ],
        sources: [
          {
            citations: ["T7sacr1"],
            label: "Trento, ses. VII, De los sacramentos en general, can. 1",
          },
          {
            citations: ["T7sacr6"],
            label: "can. 6",
          },
          {
            citations: ["CEC1127"],
            label: "Catecismo 1127",
          },
          {
            citations: ["CEC1215"],
            label: "Catecismo 1215",
          },
        ],
      },
      {
        id: "QE-2",
        short: "el perdón de los pecados",
        text: "Por el bautismo se perdonan el pecado original y todos los pecados personales, y todas las penas debidas por el pecado. El bautizado es hecho «una nueva creatura», hijo adoptivo de Dios, miembro de Cristo y templo del Espíritu Santo, y recibe la gracia santificante con la fe, la esperanza y la caridad. En él queda una inclinación al pecado, la concupiscencia, «dejada para el combate», que la Iglesia no considera pecado en sentido propio.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "en su núcleo — Trento, ses. V, can. 5 (por la gracia que se confiere en el bautismo se perdona el pecado original y se quita todo lo que es verdadera y propiamente pecado)",
          },
          {
            kind: "unclassified",
            reason: "taught-by-council",
            basis: "la remisión de toda pena, por Florencia; la Iglesia no lo ha clasificado por separado",
          },
          {
            kind: "church",
            grade: "dogma",
            basis: "que la justificación infunde la gracia y la caridad: Trento, ses. VI, can. 11",
          },
          {
            kind: "unclassified",
            reason: "taught-by-council",
            basis:
              "que con ella se infunden la fe, la esperanza y la caridad (ses. VI, cap. 7); que esto vale también para los niños: el Concilio de Vienne (1312) lo eligió como la opinión «más probable» y el Catecismo lo enseña sin restricción (1266); la Iglesia no lo ha clasificado por separado",
          },
        ],
        sources: [
          {
            citations: ["T5can5"],
            label: "Trento, ses. V, can. 5",
          },
          {
            citations: ["FLOexs"],
            label: "Florencia, Exsultate Deo",
          },
          {
            citations: ["VIEN"],
            label: "Vienne, Fidei catholicae",
          },
          {
            citations: ["T6c7"],
            label: "Trento, ses. VI, cap. 7",
          },
          {
            citations: ["T6can11"],
            label: "Trento, ses. VI, can. 11",
          },
          {
            citations: ["CEC1263", "CEC1264", "CEC1265", "CEC1266"],
            label: "Catecismo 1263–1266",
          },
        ],
      },
      {
        id: "QE-11",
        short: "la incorporación a Cristo y a la Iglesia",
        text: "Para la Iglesia católica, el bautismo hace a la persona miembro del Cuerpo de Cristo y la «incorpora a la Iglesia» ({c:CEC1267|Catecismo 1267}), y la hace participar «del sacerdocio de Cristo, de su misión profética y real» ({c:CEC1268|Catecismo 1268}). Es el «sacerdocio común de los fieles», que se distingue del sacerdocio ministerial «esencialmente y no sólo en grado», aunque ambos «se ordenan, sin embargo, el uno al otro» (Concilio Vaticano II, Lumen gentium 10). El bautizado tiene deberes y derechos en la Iglesia, y está obligado a «confesar delante de los hombres la fe» que recibió ({c:CEC1269|Catecismo 1269–1270}).",
        grades: [
          {
            kind: "church",
            grade: "magisterium",
            basis:
              "concilio ecuménico — Vaticano II, Lumen gentium 10–11; el Catecismo lo repite (1267–1270, 1273); que el bautismo nos hace miembros de Cristo y del cuerpo de la Iglesia está también en la definición de Florencia; la Iglesia no lo ha clasificado por separado",
          },
        ],
        sources: [
          {
            citations: ["CEC1267"],
            label: "Catecismo 1267",
          },
          {
            citations: ["CEC1268"],
            label: "Catecismo 1268",
          },
          {
            citations: ["CEC1269"],
            label: "Catecismo 1269–1270",
          },
          {
            citations: ["CEC1273"],
            label: "Catecismo 1273",
          },
          {
            citations: ["LG10"],
            label: "Lumen gentium 10",
          },
          {
            citations: ["LG11"],
            label: "Lumen gentium 11",
          },
        ],
      },
      {
        id: "QE-3",
        short: "la necesidad del bautismo",
        text: "Para la Iglesia católica, el bautismo es necesario para la salvación: el Señor mismo lo afirma («el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios», Juan 3:5). Lo es para quienes han conocido el Evangelio y han tenido la posibilidad de pedirlo. La Iglesia «no conoce otro medio que el Bautismo para asegurar la entrada en la bienaventuranza eterna»; pero «Dios ha vinculado la salvación al sacramento del Bautismo, sin embargo, Él no queda sometido a sus sacramentos» ({c:CEC1257|Catecismo 1257}). El que muere por la fe sin haberse bautizado (el «bautismo de sangre») y el catecúmeno que muere deseándolo reciben sus frutos ({c:CEC1258|Catecismo 1258–1259}). De quien, sin conocer el Evangelio, busca la verdad y hace la voluntad de Dios según la conoce, el Catecismo dice que «puede ser salvado», y añade: «Se puede suponer que semejantes personas habrían deseado explícitamente el Bautismo si hubiesen conocido su necesidad» ({c:CEC1260|Catecismo 1260}). A los niños que mueren sin bautismo la Iglesia los confía a la misericordia de Dios, y el Catecismo dice que la misericordia de Dios y la ternura de Jesús con los niños «nos permiten confiar en que haya un camino de salvación» para ellos; por eso, añade, es «más apremiante aún» la llamada a no impedir que los niños vengan a Cristo por el bautismo ({c:CEC1261|Catecismo 1261}).",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis: "definido por Trento (ses. VII, Del bautismo, can. 5); la Iglesia no lo ha clasificado por separado",
          },
          {
            kind: "unclassified",
            reason: "taught-by-council",
            basis:
              "que el paso a la gracia no se da «sin el Bautismo, ó sin el deseo de él» (ses. VI, cap. 4), recogido en el Código (can. 849) y el Catecismo (1257–1260); la Iglesia no lo ha clasificado por separado",
          },
          {
            kind: "unclassified",
            reason: "taught-by-catechism",
            basis:
              "la salvación de quien no conoce el Evangelio: Catecismo (1260) y Vaticano II ({c:LG16|Lumen gentium 16}); la Iglesia no lo ha clasificado por separado",
          },
          {
            kind: "unclassified",
            reason: "taught-by-catechism",
            basis:
              "la esperanza para los niños que mueren sin bautismo (1261), sin fuente conciliar citada allí; la Iglesia no lo ha clasificado por separado",
          },
        ],
        sources: [
          {
            citations: ["T7b5"],
            label: "Trento, ses. VII, Del bautismo, can. 5",
          },
          {
            citations: ["T7b2"],
            label: "can. 2",
          },
          {
            citations: ["T6c4"],
            label: "Trento, ses. VI, cap. 4",
          },
          {
            citations: ["CEC1257", "CEC1258", "CEC1259", "CEC1260", "CEC1261"],
            label: "Catecismo 1257–1261",
          },
          {
            citations: ["LG14"],
            label: "Lumen gentium 14",
          },
          {
            citations: ["LG16"],
            label: "Lumen gentium 16",
          },
          {
            citations: ["CIC849"],
            label: "Código de Derecho Canónico, can. 849",
          },
        ],
      },
      {
        id: "QE-4",
        short: "el bautismo de los niños",
        text: "La Iglesia bautiza a los niños pequeños. Nacidos con el pecado original, también ellos necesitan el nuevo nacimiento del bautismo; y en ellos se manifiesta «particularmente» que la salvación es pura gracia, porque el bautismo «es una gracia y un don de Dios que no suponen méritos humanos» ({c:CEC1250,CEC1282|Catecismo 1250, 1282}). Son bautizados «en la fe de la Iglesia», y la fe tiene que crecer en ellos después, con la ayuda de los padres y los padrinos. Para la Iglesia es «una tradición inmemorial», que el Catecismo dice «atestiguada explícitamente desde el siglo II» ({c:CEC1252|Catecismo 1252}).",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "Trento, ses. V, can. 4 (que los niños recién nacidos se han de bautizar, y para la remisión de los pecados)",
          },
          {
            kind: "unclassified",
            reason: "taught-by-catechism",
            basis: "lo demás (1250–1253, 1282); la Iglesia no lo ha clasificado por separado",
          },
        ],
        sources: [
          {
            citations: ["T5can4"],
            label: "Trento, ses. V, can. 4",
          },
          {
            citations: ["T7b13"],
            label: "Trento, ses. VII, Del bautismo, can. 13",
          },
          {
            citations: ["CEC1250"],
            label: "Catecismo 1250",
          },
          {
            citations: ["CEC1252"],
            label: "Catecismo 1252",
          },
          {
            citations: ["CEC1253"],
            label: "Catecismo 1253",
          },
          {
            citations: ["CEC1282"],
            label: "Catecismo 1282",
          },
        ],
      },
      {
        id: "QE-5",
        short: "el bautismo y la fe",
        text: "El bautismo es «el sacramento de la fe» ({c:CEC1253|Catecismo 1253}): el adulto llega a él por la fe y el arrepentimiento, y el niño es bautizado en la fe de la Iglesia, que tiene que crecer en él. La Iglesia enseña que los sacramentos obran «ex opere operato», es decir, «en virtud de la obra salvífica de Cristo», de modo que «el sacramento no actúa en virtud de la justicia del hombre que lo da o que lo recibe, sino por el poder de Dios»; pero «los frutos de los sacramentos dependen también de las disposiciones del que los recibe» ({c:CEC1128|Catecismo 1128}).",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "Trento, ses. VII, De los sacramentos en general, can. 6 (así lo clasifica la {c:CDF11|Congregación para la Doctrina de la Fe, 1998}) y can. 8 (definido por Trento; la Iglesia no lo ha clasificado por separado)",
          },
          {
            kind: "unclassified",
            reason: "taught-by-council",
            basis:
              "la preparación de los adultos: fe, esperanza, arrepentimiento y comienzo del amor de Dios (ses. VI, cap. 6)",
          },
        ],
        sources: [
          {
            citations: ["T7sacr8"],
            label: "Trento, ses. VII, De los sacramentos en general, can. 8",
          },
          {
            citations: ["T7sacr6"],
            label: "can. 6",
          },
          {
            citations: ["CEC1128"],
            label: "Catecismo 1128",
          },
          {
            citations: ["CEC1123"],
            label: "Catecismo 1123",
          },
          {
            citations: ["CEC1253"],
            label: "Catecismo 1253–1254",
          },
          {
            citations: ["T6c6"],
            label: "Trento, ses. VI, cap. 6",
          },
        ],
      },
      {
        id: "QE-6",
        short: "la materia y la forma",
        text: "La materia del bautismo es agua verdadera y natural; la forma son las palabras «Yo te bautizo en el nombre del Padre y del Hijo y del Espíritu Santo» (Catecismo 1240, 1284). El bautismo se realiza «de la manera más significativa» por triple inmersión, pero «desde la antigüedad» puede conferirse también derramando agua tres veces sobre la cabeza ({c:CEC1239|Catecismo 1239}). Un cambio en lo esencial de la fórmula hace nulo el bautismo.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "en cuanto al agua verdadera y natural — Trento, ses. VII, Del bautismo, can. 2; la Iglesia no lo ha clasificado por separado",
          },
          {
            kind: "unclassified",
            reason: "taught-by-council",
            basis:
              "la forma trinitaria: IV Concilio de Letrán, const. 1 (una profesión de fe) y Florencia (instrucción para los armenios); la Iglesia no lo ha clasificado por separado",
          },
          {
            kind: "church",
            grade: "discipline",
            basis: "inmersión o infusión (Código, can. 854), con la descripción del Catecismo (1239)",
          },
          {
            kind: "church",
            grade: "discipline",
            basis:
              "que una fórmula alterada hace nulo el bautismo: Código (can. 849) y Nota del Dicasterio para la Doctrina de la Fe (2024)",
          },
        ],
        sources: [
          {
            citations: ["T7b2"],
            label: "Trento, ses. VII, Del bautismo, can. 2",
          },
          {
            citations: ["FLOexs"],
            label: "Florencia, Exsultate Deo",
          },
          {
            citations: ["LAT1"],
            label: "Letrán IV, const. 1",
          },
          {
            citations: ["CEC1239"],
            label: "Catecismo 1239–1240",
          },
          {
            citations: ["CEC1278"],
            label: "Catecismo 1278",
          },
          {
            citations: ["CEC1284"],
            label: "Catecismo 1284",
          },
          {
            citations: ["CIC854"],
            label: "Código de Derecho Canónico, can. 854",
          },
          {
            citations: ["GV"],
            label: "Gestis verbisque (2024)",
          },
        ],
      },
      {
        id: "QE-7",
        short: "quién puede bautizar",
        text: "Los ministros ordinarios del bautismo son el obispo, el presbítero y, en la Iglesia latina, el diácono. En caso de necesidad, cualquier persona, incluso no bautizada, puede bautizar válidamente si usa la fórmula trinitaria y tiene la intención de hacer lo que hace la Iglesia. Por eso la Iglesia reconoce como verdadero bautismo el que dan, con esa fórmula y esa intención, quienes no están en comunión con ella.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "Trento, ses. VII: Del bautismo, can. 4 (es verdadero el bautismo dado por herejes en el nombre de la Trinidad con la intención de hacer lo que hace la Iglesia), y De los sacramentos en general, can. 11 (se requiere en el ministro la intención de hacer lo que hace la Iglesia); la Iglesia no los ha clasificado por separado",
          },
          {
            kind: "unclassified",
            reason: "taught-by-council",
            basis: "que cualquiera puede bautizar en caso de necesidad: Florencia y IV Letrán",
          },
          {
            kind: "church",
            grade: "discipline",
            basis: "los ministros ordinarios (Código, can. 861)",
          },
        ],
        sources: [
          {
            citations: ["FLOexs"],
            label: "Florencia, Exsultate Deo",
          },
          {
            citations: ["T7b4"],
            label: "Trento, ses. VII, Del bautismo, can. 4",
          },
          {
            citations: ["T7sacr10", "T7sacr11", "T7sacr12"],
            label: "De los sacramentos en general, cann. 10–12",
          },
          {
            citations: ["CEC1256"],
            label: "Catecismo 1256",
          },
          {
            citations: ["CIC861"],
            label: "Código de Derecho Canónico, can. 861",
          },
        ],
      },
      {
        id: "QE-8",
        short: "el carácter bautismal",
        text: "El bautismo imprime en el alma un sello espiritual indeleble, el «carácter», por el que el bautizado queda configurado con Cristo y consagrado para el culto. Ningún pecado lo borra, aunque el pecado pueda impedir que el bautismo dé frutos de salvación. Por eso el bautismo no se repite, tampoco a quien negó la fe y vuelve arrepentido.",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "Trento, ses. VII: De los sacramentos en general, can. 9, y Del bautismo, can. 11; la Iglesia no los ha clasificado por separado",
          },
        ],
        sources: [
          {
            citations: ["T7sacr9"],
            label: "Trento, ses. VII, De los sacramentos en general, can. 9",
          },
          {
            citations: ["T7b11"],
            label: "Del bautismo, can. 11",
          },
          {
            citations: ["CEC1272"],
            label: "Catecismo 1272, 1280",
          },
          {
            citations: ["CIC845a"],
            label: "Código de Derecho Canónico, can. 845 §1",
          },
          {
            citations: ["CEC1273", "LG11"],
            label: "Catecismo 1273; Lumen gentium 11",
          },
        ],
      },
      {
        id: "QE-9",
        short: "las obligaciones del bautizado",
        text: "El bautizado queda obligado a toda la ley de Cristo, no solo a la fe. Los pecados graves cometidos después del bautismo no se perdonan con solo recordar el bautismo y creer en él: para ellos Cristo instituyó el sacramento de la Penitencia, distinto del bautismo, que el Catecismo, citando a los Padres, llama «la segunda tabla (de salvación) después del naufragio» ({c:CEC1446|Catecismo 1446}). Por el bautismo, enseña Trento, se recibe «plena y entera remision de los pecados»; a esa misma renovación no se llega por la Penitencia «sin muchas lágrimas y trabajos».",
        grades: [
          {
            kind: "church",
            grade: "dogma",
            basis:
              "Trento, ses. VII, Del bautismo, cann. 7 y 10, y ses. XIV, De la Penitencia, can. 2; la Iglesia no los ha clasificado por separado",
          },
        ],
        sources: [
          {
            citations: ["T7b7"],
            label: "Trento, ses. VII, Del bautismo, can. 7",
          },
          {
            citations: ["T7b10"],
            label: "can. 10",
          },
          {
            citations: ["T14c2"],
            label: "Trento, ses. XIV, cap. 2",
          },
          {
            citations: ["T14can2"],
            label: "ses. XIV, can. 2",
          },
          {
            citations: ["CEC1446"],
            label: "Catecismo 1446",
          },
        ],
      },
      {
        id: "QE-10",
        short: "los bautizados de otras Iglesias",
        text: "Para la Iglesia católica, quienes creen en Cristo y han recibido válidamente el bautismo «están en una cierta comunión, aunque no perfecta, con la Iglesia católica» ({c:CEC1271|Catecismo 1271}), y «justamente son reconocidos como hermanos en el Señor por los hijos de la Iglesia católica» (Concilio Vaticano II, Unitatis redintegratio 3). El bautismo «constituye un poderoso vínculo sacramental de unidad», pero «por sí mismo es tan sólo un principio y un comienzo», ordenado a la plena comunión ({c:UR22|Unitatis redintegratio 22}).",
        grades: [
          {
            kind: "church",
            grade: "magisterium",
            basis: "concilio ecuménico — Vaticano II, Unitatis redintegratio 3 y 22",
          },
        ],
        sources: [
          {
            citations: ["UR3"],
            label: "Unitatis redintegratio 3",
          },
          {
            citations: ["UR22"],
            label: "Unitatis redintegratio 22",
          },
          {
            citations: ["CEC1271"],
            label: "Catecismo 1271",
          },
          {
            citations: ["CIC869"],
            label: "Código de Derecho Canónico, can. 869 §2",
          },
        ],
      },
      {
        id: "QE-12",
        short: "los sacramentos de la iniciación",
        text: "Para la Iglesia católica, el bautismo es el primero de los «sacramentos de la iniciación cristiana» ({c:CEC1212|Catecismo 1212}): «el Bautismo, que es el comienzo de la vida nueva; la Confirmación, que es su afianzamiento; y la Eucaristía, que alimenta al discípulo con el Cuerpo y la Sangre de Cristo» ({c:CEC1275|Catecismo 1275}). Sin la confirmación y la Eucaristía, dice el Catecismo, «el sacramento del Bautismo es ciertamente válido y eficaz, pero la iniciación cristiana queda incompleta» ({c:CEC1306|Catecismo 1306}). Quien no ha recibido el bautismo no puede ser admitido válidamente a los demás sacramentos ({c:CIC842|Código de Derecho Canónico, can. 842}).",
        grades: [
          {
            kind: "unclassified",
            reason: "taught-by-catechism",
            basis: "1212, 1275, 1306; la Iglesia no lo ha clasificado por separado",
          },
          {
            kind: "church",
            grade: "discipline",
            basis: "Código, can. 842",
          },
        ],
        sources: [
          {
            citations: ["CEC1212"],
            label: "Catecismo 1212",
          },
          {
            citations: ["CEC1275"],
            label: "Catecismo 1275",
          },
          {
            citations: ["CEC1306"],
            label: "Catecismo 1306",
          },
          {
            citations: ["CIC842"],
            label: "Código de Derecho Canónico, can. 842",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "La Iglesia católica funda su enseñanza sobre el bautismo en las palabras de Jesús a Nicodemo, «el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios» {v:John.3.5}, que Trento manda no reducir a «algun sentido metafórico» {c:T7b2|ses. VII, Del bautismo, can. 2}, y en el mandato de bautizar a todas las naciones {v:Matt.28.19}. Lee la predicación apostólica, «Arrepentíos, y bautícese cada uno de vosotros […] para perdón de los pecados» {v:Acts.2.38}, como la promesa de un bautismo que hace lo que significa. {c:CEC1223|Catecismo 1223} {c:CEC1226|Catecismo 1226} {c:CEC1257|Catecismo 1257}",
    ],
    fathers: [
      {
        lead: "El Catecismo cita a san Gregorio Nacianceno:",
        quote: [
          "El Bautismo «es el más bello y magnífico de los dones de Dios […] lo llamamos don, gracia, unción, iluminación, vestidura de incorruptibilidad, baño de regeneración, sello y todo lo más precioso que hay. Don, porque es conferido a los que no aportan nada; gracia, porque es dado incluso a culpables; bautismo, porque el pecado es sepultado en el agua».",
        ],
        author: "Gregorio Nacianceno",
        work: "Oratio 40, 3-4",
        date: {
          year: 379,
          yearEnd: 383,
        },
        citedIn: {
          citations: ["CEC1216"],
          label: "Catecismo 1216",
        },
      },
      {
        lead: "El Catecismo cita a san Agustín:",
        quote: [
          "«Accedit verbum ad elementum, et fit sacramentum» («Se une la palabra a la materia, y se hace el sacramento»).",
        ],
        author: "Agustín",
        work: "In Iohannis evangelium tractatus 80, 3",
        date: {
          year: 386,
          yearEnd: 430,
        },
        citedIn: {
          citations: ["CEC1228"],
          label: "Catecismo 1228",
        },
      },
    ],
    note: "Estos textos no se asignan a ninguna tradición de hoy: están en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para la Iglesia católica, el bautismo hace lo que significa, y lo hace también en los niños: por él, enseña Trento, aun los párvulos «recibén con toda verdad el Bautismo en remision de sus pecados, para que purifique la regeneracion en ellos lo que contraxeron por la generacion» {c:T5can4|ses. V, can. 4}.",
  },
  scriptureSubtitle: "Los pasajes que los documentos católicos citan sobre el bautismo, y cómo los leen.",
  videos: {
    subtitle: "Creadores católicos explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  scripture: [
    {
      refs: ["John.3.5"],
      text: "«El que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios.» Para la Iglesia, Jesús habla del agua del bautismo, y no en sentido metafórico {c:T7b2|Trento, ses. VII, Del bautismo, can. 2}; por eso el bautismo es necesario para la salvación {c:CEC1257|Catecismo 1257}.",
      apologists: {
        arguments: [
          {
            title: "«Agua» significa agua física, y la lectura bautismal era la de los Padres",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "“Born of Water”: Does John 3:5 Mean Literal Baptism?",
                outlet: "Jimmy Akin, YouTube",
                date: "Sin fecha indicada",
                locator: "Minutos 2:10 a 2:27",
                url: "https://www.youtube.com/watch?v=WlZEIiaMlJ8&t=130s",
                text: "Hudor es la palabra griega normal para agua. Y lo que hudor normalmente significa es agua, en el sentido de agua física.",
                original:
                  "Hudor is the normal Greek word for water. And what Hudor normally means is water meaning physical water.",
                translation: "ai-assisted",
              },
              {
                speaker: "Jimmy Akin",
                work: "“Born of Water”: Does John 3:5 Mean Literal Baptism?",
                outlet: "Jimmy Akin, YouTube",
                date: "Sin fecha indicada",
                locator: "Minutos 4:57 a 5:24",
                url: "https://www.youtube.com/watch?v=WlZEIiaMlJ8&t=297s",
                text: "lo que encontré fue que todos los padres de la Iglesia, y ciertamente en su gran mayoría los padres de la Iglesia que comentaron sobre whe on qué es el agua en Juan 3:5, la entendieron como agua bautismal, como agua literal y física.",
                original:
                  "what I found was that every church father and certainly overwhelmingly the church fathers who commented on whe on what the water is in John 3:5, they all understood it as baptismal water, as literal physical water.",
                translation: "ai-assisted",
              },
              {
                speaker: "Jimmy Akin",
                work: "Being Born Again in Scripture",
                outlet: "A Daily Defense, catholic.com",
                date: "13 de octubre de 2023",
                locator:
                  "8 párrafos: del párrafo que empieza «Scripture teaches people are born again in baptism.…» al que termina «…is confirmed by the Church Fathers (see Day 287).»",
                url: "https://www.catholic.com/audio/ddp/being-born-again-in-scripture",
                text: "Las Escrituras enseñan que las personas nacen de nuevo en el bautismo.\n\nLa frase traducida como “nacido de nuevo” aparece en Juan 3:3, donde Jesús le dice a Nicodemo: “Si alguno no naciere de nuevo, no puede ver el reino de Dios” (KJV). En griego, la frase encierra un juego de palabras. La palabra para “de nuevo” es anōthen, que puede significar tanto “de nuevo” como “desde arriba”. El punto es que hay que recibir un segundo nacimiento, y este nacimiento debe venir de Dios.\n\nEl contexto revela cómo ocurre el segundo nacimiento. Aclarando su afirmación inicial, Jesús le dice a Nicodemo: “a menos que uno nazca de agua y del Espíritu, no puede entrar en el reino de Dios” (Juan 3:5). La mención del agua y la acción del Espíritu indica el bautismo (Juan 1:33).\n\nJesús espera que Nicodemo ya esté familiarizado con este concepto (Juan 3:10), lo que sugiere un trasfondo del Antiguo Testamento en su enseñanza. Así, Ezequiel 36:25–27 dice que, en la restauración de Israel, Dios rociará agua limpia sobre las personas, les dará un corazón nuevo y pondrá su Espíritu dentro de ellas para que guarden sus mandamientos, todo lo cual apunta al bautismo cristiano.\n\nAdemás, en el versículo inmediatamente posterior a la conversación de Jesús con Nicodemo, Juan nos dice: “Después de esto, Jesús y sus discípulos fueron a la tierra de Judea; allí estuvo con ellos, y bautizaba” (Juan 3:22). Esto, a su vez, va seguido de una controversia provocada por el hecho de que Jesús comenzó a bautizar (Juan 3:23–4:3). La conversación con Nicodemo prepara la controversia.\n\nTodo esto indica que “nacer de nuevo” ocurre en el bautismo. Esto lo confirman otros pasajes, que vinculan la recepción de la nueva vida y la regeneración con el bautismo.\n\nAsí, Pablo les dice a los romanos: “¿O no saben ustedes que todos los que hemos sido bautizados en Cristo Jesús, hemos sido bautizados en su muerte? Porque somos sepultados juntamente con él para muerte por el bautismo; para que como Cristo fue levantado de los muertos por la gloria del Padre, así también nosotros andemos en vida nueva” (Rom. 6:3–4). Y Pablo le dice a Tito que “nos salvó, no por obras de justicia que nosotros hubiéramos hecho, sino por su misericordia, por el lavamiento de la regeneración y renovación en el Espíritu Santo” (Tito 3:5).\n\nEsta misma comprensión la confirman los Padres de la Iglesia (ver Día 287).",
                original:
                  "Scripture teaches people are born again in baptism.\n\nThe phrase translated “born again” occurs in John 3:3, where Jesus tells Nicodemus, “Except a man be born again, he cannot see the kingdom of God” (KJV). In Greek the phrase involves a pun. The word for “again” is anōthen, which can mean either “again” or “from above.” The point is one must receive a second birth and this birth must be from God.\n\nContext reveals how the second birth occurs. Clarifying his initial statement, Jesus tells Nicodemus, “unless one is born of water and the Spirit, he cannot enter the kingdom of God” (John 3:5). The reference to water and the action of the Spirit indicates baptism (John 1:33).\n\nJesus expects Nicodemus to already be familiar with this concept (John 3:10), suggesting an Old Testament background to his teaching. Thus Ezekiel 36:25–27 says that at the restoration of Israel God will sprinkle clean water on people, give them a new heart, and put his Spirit within them so they may keep his commandments, all of which point to Christian baptism.\n\nFurther, in the verse immediately after Jesus’ discussion with Nicodemus, John tells us: “After this Jesus and his disciples went into the land of Judea; there he remained with them and baptized” (John 3:22). This, in turn, is followed by a controversy sparked by Jesus beginning to baptize (John 3:23–4:3). The conversation with Nicodemus sets up the controversy.\n\nAll this indicates being “born again” in baptism. This is confirmed by other passages, which link the reception of new life and regeneration to baptism.\n\nThus Paul tells the Romans: “Do you not know that all of us who have been baptized into Christ Jesus were baptized into his death? We were buried therefore with him by baptism into death, so that as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life” (Rom. 6:3–4). And Paul tells Titus that “he saved us, not because of deeds done by us in righteousness, but in virtue of his own mercy, by the washing of regeneration and renewal in the Holy Spirit” (Titus 3:5).\n\nThis same understanding is confirmed by the Church Fathers (see Day 287).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "«Agua y Espíritu» es un solo nacimiento, no dos; y «nacido del agua» no es como la Escritura habla del nacimiento natural",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "6 Bible Verses PROVING Water Baptism Saves (REBUTTAL to @NeedGodnet)",
                outlet: "Shameless Popery",
                date: "27 de mayo de 2025",
                locator: "Párrafo que empieza «Joe: Ryan’s interpretation separates John three, five…»",
                url: "https://www.catholic.com/audio/sp/6-bible-verses-proving-water-baptism-saves-rebuttal-to-%E2%81%A8needgodnet%E2%81%A9",
                text: "nacer de nuevo, o nacer de arriba del agua en el Espíritu, es claramente un solo acontecimiento en la Biblia, sobre todo a la luz de pasajes del Antiguo Testamento como Isaías 44 versículo 3, donde Dios habla de derramar agua en el espíritu, o Ezequiel 36, donde dice que va a rociar agua limpia sobre nosotros y poner su Espíritu dentro de nosotros.",
                original:
                  "being born again or being born from above of water in the Spirit is clearly one event biblically, particularly in light of Old Testament passages like Isaiah 44 verse three where God talks about pouring out water in the spirit or Ezekiel 36 where he says He is going to sprinkle clean water upon us and put his spirit within us.",
                translation: "ai-assisted",
              },
              {
                speaker: "Karlo Broussard",
                work: "Defending Rebirth by Water",
                outlet: "Catholic Answers Magazine",
                date: "29 de mayo de 2018",
                locator:
                  "16 párrafos: del párrafo que empieza «“Are you born again?”…» al que termina «…associates the second birth with the “word of God.”»",
                url: "https://www.catholic.com/magazine/online-edition/defending-rebirth-by-water",
                text: "“¿Has nacido de nuevo?”\n\nA los protestantes les encanta hacerle esta pregunta a los católicos. Algunos católicos se traban al responder, sin saber cómo contestar. Pero quienes estudian apologética saben responder con un rotundo “Sí”, ya que Jesús enseña que ser bautizado es nacer de nuevo:\n\n“En verdad, en verdad te digo que el que no naciere de nuevo, no puede ver el reino de Dios”. Nicodemo le dijo: “¿Cómo puede nacer un hombre siendo ya viejo? ¿Puede entrar por segunda vez en el vientre de su madre y nacer?”. Jesús respondió: “En verdad, en verdad te digo que el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios” (Juan 3:3-5; énfasis agregado).\n\nPero algunos protestantes no ven el bautismo en este pasaje. Llegan a conclusiones distintas sobre lo que significa “nacer de agua”, y por eso tienen una respuesta lista para los católicos que citan los versículos anteriores. Examinemos algunas de sus explicaciones alternativas y veamos si tienen algún peso. Una explicación ve el “agua” como una referencia al líquido amniótico de la madre, en el que pasamos durante nuestro nacimiento biológico. El segundo nacimiento, según se argumenta, es nacer solo del Espíritu, cuando se confiesa a Jesús como Señor.\n\nPero esta interpretación tiene algunos problemas. Primero, ¿no es bastante obvia? ¿Por qué Jesús tendría que estipular que el nacimiento biológico es una condición para el cielo, si todos los que escuchaban su mensaje ya habían nacido? Parece pedante.\n\nSegundo, el contexto revela que Jesús incluye tanto el Espíritu como el agua en un solo acto del segundo nacimiento. No dice: “Debes nacer del agua, y luego nacer del Espíritu”.\n\nScott Hahn y Curtis Mitch lo explican:\n\nLa sintaxis de este versículo en griego sugiere que Jesús no habla de dos nacimientos separados, uno por el agua y otro por el Espíritu, sino de un único nacimiento por la acción del agua y del Espíritu juntos.\n\nEsta interpretación se confirma además por el hecho de que el Espíritu y el agua juntos constituyen el único acontecimiento del bautismo de Jesús, que Juan insinúa en Juan 1:29-34 y que Mateo relata en Mateo 3:13-17.\n\nPor lo tanto, hay buenas razones para pensar que el agua y el Espíritu juntos constituyen el segundo nacimiento del que habla Jesús en el discurso sobre nacer de nuevo.\n\nUn segundo problema es que “nacido de agua” no es el lenguaje típico que usan Jesús o Juan para el nacimiento biológico. Tomemos a Jesús, por ejemplo. En respuesta a la pregunta de Nicodemo sobre entrar de nuevo en el vientre de su madre (nacimiento natural), Jesús dice: “Lo que es nacido de la carne, carne es; y lo que es nacido del Espíritu, espíritu es” (Juan 3:6). El lenguaje de Jesús para el nacimiento natural es “nacido de la carne”, no “nacido de agua”.\n\nJuan tiene su propia manera de referirse al nacimiento biológico, y tampoco incluye el agua:\n\nPero a todos los que le recibieron, a los que creen en su nombre, les dio potestad de ser hechos hijos de Dios; los cuales no nacieron de sangre, ni de voluntad de carne, ni de voluntad de varón, sino de Dios (Juan 1:12-13; énfasis agregado).\n\nComo Jesús, Juan distingue entre el nuevo nacimiento de Dios y el nacimiento biológico. Pero no describe este último con “agua”. Lo describe como “nacido de sangre”.\n\nDado que nuestro amigo protestante solo hace una afirmación y no nos da ninguna razón para pensar que “nacer de agua” se refiere al nacimiento biológico, y dado que el contexto inmediato del pasaje en cuestión ofrece un lenguaje para el nacimiento biológico que no involucra el agua, es irrazonable interpretar el nacer de agua en Juan 3:3-5 como una referencia a nuestro nacimiento biológico.\n\nOtra explicación propuesta es que el “agua” se refiere a la palabra de Dios. Quienes sostienen esta interpretación usan 1 Pedro 1:23 como apoyo: “Han nacido de nuevo, no de simiente perecedera sino de imperecedera, por medio de la palabra viva y permanente de Dios”. Nótese cómo Pedro asocia el segundo nacimiento con la “palabra de Dios”.",
                original:
                  "“Are you born again?”\n\nProtestants love to ask Catholics this question. Some Catholics fumble their words, not knowing how to respond. But those who study apologetics know to answer with a resounding “Yes,” since Jesus teaches that to be baptized is to be born again:\n\n“Truly, truly, I say to you, unless one is born anew, he cannot see the kingdom of God.” Nicodemus said to him, “How can a man be born when he is old? Can he enter a second time into his mother’s womb and be born?” Jesus answered, “Truly, truly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God (John 3:3-5; emphasis added).\n\nBut some Protestants don’t see baptism in this passage. They arrive at different conclusions about what it means to be “born of water” and so they have a ready comeback to Catholics who cite the above verses. Let’s examine some of their alternative explanations and see if they carry any weight. One explanation sees the “water” as referring to the amniotic fluid of our mother’s womb, through which we passed during our biological birth. The second birth, so it’s argued, is being born only of the Spirit—when you confess Jesus as Lord.\n\nBut there are some problems with this interpretation. First, isn’t it kind of obvious? Why would Jesus need to stipulate that biological birth is a condition for heaven when all those hearing his message were already born? It seems pedantic.\n\nSecond, the context reveals that Jesus includes both spirit and water in the one act of the second birth. He doesn’t say, “You must be born of water, and then born of the Spirit.”\n\nScott Hahn and Curtis Mitch elaborate:\n\nThe syntax of this verse in Greek suggests that Jesus is speaking, not of two separate births, one by water and another by the Spirit, but of a single birth through the working of water and Spirit together.\n\nThis interpretation is further confirmed by the fact that the Spirit and water together constitute the one event of Jesus’ baptism, which John hints at in John 1:29-34 and Matthew chronicles in Matthew 3:13-17.\n\nTherefore, there is good reason to think that the water and spirit together constitute the second birth that Jesus speaks of in the born again discourse.\n\nA second problem is that “born of water” is not the typical language that Jesus or John uses for biological birth. Take Jesus, for example. In response to Nicodemus’s query about entering again into his mother’s womb (natural birth), Jesus says, “That which is born of the flesh is flesh, and that which is born of the Spirit is spirit” (John 3:6). Jesus’ language for natural birth is “born of flesh,” not “born of water.”\n\nJohn has his own way of referring to biological birth, and it also doesn’t involve water:\n\nBut to all who received him, who believed in his name, he gave power to become children of God; who were born, not of blood nor of the will of the flesh nor of the will of man, but of God (John 1:12-13; emphasis added).\n\nLike Jesus, John draws a distinction between the new birth of God and biological birth. But he doesn’t describe the latter with “water.” He speaks of it as “born of blood.”\n\nSince our Protestant friend only makes an assertion and doesn’t give us any reason to think that being “born of water” refers to biological birth, and since the immediate context of the passage in question provides language for biological birth that doesn’t involve water, it’s unreasonable to interpret the birth by water in John 3:3-5 as referring to our biological birth.\n\nAnother proposed explanation is that the “water” refers to the word of God. Proponents of this interpretation use 1 Peter 1:23 for support: “You have been born anew, not of perishable seed but of imperishable, through the living and abiding word of God.” Notice how Peter associates the second birth with the “word of God.”",
                translation: "ai-assisted",
              },
              {
                speaker: "Karlo Broussard",
                work: "Defending Rebirth by Water",
                outlet: "Catholic Answers Magazine",
                date: "29 de mayo de 2018",
                locator: "Párrafo que empieza «A second problem is that…»",
                url: "https://www.catholic.com/magazine/online-edition/defending-rebirth-by-water",
                text: "El lenguaje de Jesús para el nacimiento natural es “nacido de la carne”, no “nacido de agua”.",
                original: "Jesus’ language for natural birth is “born of flesh,” not “born of water.”",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Que el nuevo nacimiento sea espiritual no excluye un medio material",
            quotes: [
              {
                speaker: "Karlo Broussard",
                work: "Spiritual Birth, Physical Things",
                outlet: "Catholic Answers Magazine",
                date: "15 de octubre de 2024",
                locator:
                  "13 párrafos: del párrafo que empieza «Notice that this interpretation reads into Jesus’ words that…» al que termina «…agent for spiritual rebirth; it must mean something else.»",
                url: "https://www.catholic.com/magazine/online-edition/spiritual-birth-physical-things",
                text: "Nótese que esta interpretación introduce en las palabras de Jesús que todo lo material o físico queda excluido de la regeneración espiritual. Pero eso no es lo que dice Jesús.\n\nMás bien, Jesús yuxtapone dos clases de nacimiento: nuestro nacimiento físico o natural, que es “de la carne”, y el renacimiento espiritual o sobrenatural, que es “del Espíritu”. El foco está en la diferencia esencial entre los nacimientos, no en lo que pueda o no pueda intervenir en ellos.\n\nPor ejemplo, nuestro nacimiento físico o natural es “de la carne”, pero eso no significa que todo lo espiritual quede excluido, ya que nuestro nacimiento natural sí involucra algo espiritual, a saber, nuestra alma, que informa la materia. Pero el nacimiento en sí se describe como “de la carne” porque es un modismo que Jesús usa con frecuencia para expresar cosas que pertenecen al orden natural, aparte de la gracia de Dios.\n\nConsidérese lo que dice en Juan 8:15: “Ustedes juzgan según la carne”. Ahí Jesús les dice a los fariseos que juzgan solo desde una perspectiva terrenal.\n\nTambién emplea este modismo en Juan 6:63, cuando dice: “Las palabras que yo les he hablado son espíritu y vida. El Espíritu es el que da vida; la carne no aprovecha para nada”. Según Juan 8:15, Jesús enseña a sus discípulos que si juzgan su enseñanza de comer su carne y beber su sangre solo desde una perspectiva terrenal, no podrán asentir a ella. Su enseñanza va más allá de la razón humana. En consecuencia, necesitan un poder que esté por encima de la razón, que solo el Espíritu puede dar, y ese es el don de la fe.\n\nAsí, el nacimiento “de la carne” del que habla Jesús es nuestro primer nacimiento, que es natural, y ese nacimiento natural no excluye todo lo espiritual, ya que el alma está presente junto con el cuerpo en ese primer nacimiento.\n\nNuestro renacimiento espiritual, en cambio, no es un nacimiento físico. Es un nacimiento espiritual. Por eso Jesús dice que es “espíritu”, “del Espíritu”. Pero que el nacimiento sea espiritual en su naturaleza no excluye necesariamente todo lo material. Puede involucrar algo material, como el agua, que sirve de medio a través del cual se realiza el renacimiento espiritual.\n\nConsidérese de nuevo Juan 6:63. Jesús dice: “Las palabras que yo les he hablado son espíritu y vida. El Espíritu es el que da vida; la carne no aprovecha para nada”. Afirmar que sus palabras son espirituales, y que son discernidas por el Espíritu, no significa que no haya usado sonidos audibles, algo del mundo físico, para comunicar sus palabras.\n\nDe igual manera, que Jesús enseñe que el nuevo nacimiento es espíritu y no carne no significa que todo lo carnal y físico, como el agua, quede excluido. Simplemente se refiere a una clase particular de nacimiento que es distinta de nuestro nacimiento físico.\n\nQue este es el foco lo respalda el hecho de que Jesús establece este contraste en respuesta a Nicodemo, quien pensaba que el nuevo nacimiento implicaba que un hombre adulto entrara en el vientre de su madre por segunda vez (v. 4).\n\nPor lo tanto, no se puede apelar a la naturaleza espiritual del nuevo nacimiento como evidencia de que el agua queda excluida del nuevo nacimiento.\n\nConsideremos un argumento más en contra de nuestra interpretación de que el nuevo nacimiento es una referencia al bautismo. Este lo ofrece Todd Baker, presidente de B’rit Hadashah Ministries y pastor de Shalom, Shalom Messianic Congregation en Dallas, Texas. Al comentar el nuevo nacimiento de “agua y Espíritu”, Baker escribe:\n\nNada en este mundo puede generar el poder del renacimiento espiritual; la carne solo puede producir carne. . . . Incluso al comienzo del Evangelio de Juan, el lector sabe que el poder del renacimiento espiritual, por el cual el creyente en Cristo se convierte en hijo de Dios, no es un acto que pueda ejercerse por voluntad humana, por generación física ni por ninguna clase de práctica, incluido el bautismo sacramental, sino que es un acto soberano y sobrenatural de Dios solo, concedido a quienes creen en Jesucristo. Quienes son bautizados lo hacen por un acto de su propia voluntad. El nuevo nacimiento es completamente distinto de esto; ¡es un acto de Dios! . . . Así que “nacido de agua” en Juan 3:5 no puede significar el rito físico del bautismo como agente del renacimiento espiritual; debe significar otra cosa.",
                original:
                  "Notice that this interpretation reads into Jesus’ words that anything and everything that is material or physical is excluded from being involved in the spiritual rebirth. But that is not what Jesus says.\n\nRather, Jesus juxtaposes two kinds of births: our physical or natural birth, which is “of the flesh,” and the spiritual or supernatural rebirth that is “of the Spirit.” The focus is the essential difference of the births, not what might or might not be involved with those births.\n\nFor example, our physical or natural birth is “of the flesh,” yet that doesn’t mean that anything and everything spiritual is excluded from it, since our natural birth does involve something spiritual—namely, our soul, which is informing the matter. But the birth itself is described as “of the flesh” because that’s an idiom Jesus frequently uses to express things that pertain to the natural order apart from God’s grace.\n\nConsider what he says in John 8:15: “You judge according to the flesh.” There, Jesus is telling the Pharisees that they judge from an earthly perspective alone.\n\nHe also employs this idiom in John 6:63, when he says, “The words that I have spoken to you are spirit and life. The Spirit gives life, the flesh is of no avail.” Per John 8:15, Jesus is teaching his disciples that if they judge his teaching to eat his flesh and drink his blood from an earthly perspective alone, they won’t be able to assent to it. His teaching goes beyond human reason. Consequently, they need a power that is above reason, which only the Spirit can give, and that’s the gift of faith.\n\nSo the birth “of the flesh” that Jesus speaks of is our first birth, which is natural, and that natural birth doesn’t exclude any and all things spiritual, since the soul is present with the body in that first birth.\n\nOur spiritual rebirth, on the other hand, is not a physical birth. It is a spiritual birth. That’s why Jesus says it is “spirit,” “of the Spirit.” But just because the birth is spiritual in nature doesn’t necessarily exclude any and everything material. It may well involve something material, like water, that serves as a means through which the spiritual rebirth takes place.\n\nConsider again John 6:63. Jesus says, “The words that I have spoken to you are spirit and life. The Spirit gives life, the flesh is of no avail.” Affirming that his words are spiritual, and are discerned by the Spirit, doesn’t mean he didn’t use audible sounds, something of the physical world, to communicate his words.\n\nSimilarly, just because Jesus teaches the new birth is spirit and not flesh doesn’t mean all fleshy and physical things, like water, are excluded. It simply refers to a particular kind of birth that is distinct from our physical birth.\n\nThat this is the focus is supported by the fact that Jesus draws this contrast in response to Nicodemus who thought the new birth was to involve a grown man entering into his mother’s womb a second time (v. 4).\n\nTherefore, the spiritual nature of the new birth can’t be appealed to as evidence for water being excluded from the new birth.\n\nLet’s consider one more counter-argument to our interpretation of the new birth being a reference to baptism. This one is offered by Todd Baker, president of B’rit Hadashah Ministries and pastor of Shalom, Shalom Messianic Congregation in Dallas, Texas. In commenting on the new birth of “water and Spirit,” Baker writes,\n\nNothing in this world can generate the power of spiritual rebirth; flesh can produce only flesh. . . . Even in the beginning of John’s Gospel, the reader is told that the power of spiritual rebirth, whereby the believer in Christ becomes a child of God, is not an act that can be exercised by human act of will, or physical generation, or performance of any kind—the act of sacramental baptism included— but is a supernatural, sovereign act of God alone, bestowed upon those who believe in Jesus Christ. Those who are baptized do so by an act of their own will. The new birth is altogether different from this; it is an act of God! . . . So then, “born of water” in John 3:5 cannot mean the physical rite of baptism as the agent for spiritual rebirth; it must mean something else.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.28.19-Matt.28.20", "Mark.16.15-Mark.16.16"],
      text: "«Por tanto, id, y doctrinad á todos los Gentiles, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.» Para el Catecismo, es el mandato del Señor {c:CEC1257|Catecismo 1257}; y por Marcos 16:16, «El que creyere y fuere bautizado, será salvo», llama al bautismo «el sacramento de la fe» {c:CEC1253|Catecismo 1253}.",
      apologists: {
        intro:
          "Sobre Marcos 16:16, los apologistas católicos responden que la primera mitad ya une las dos cosas, «El que creyere y fuere bautizado, será salvo», y que la segunda nombra solo la incredulidad porque quien no creía no pedía el bautismo; nombrar una no anula la otra.",
        arguments: [
          {
            title: "La primera mitad ya une la fe y el bautismo",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                outlet: "Shameless Popery, en YouTube",
                date: "27 de mayo de 2025",
                locator: "Minutos 1:35 a 2:50",
                url: "https://www.youtube.com/watch?v=T5uo7c3WV9c&t=95s",
                text: "si quieres ser salvo, necesitas dos cosas. Necesitas creer y ser bautizado […] la segunda mitad del versículo, en la que él se concentra, no anula la primera mitad",
                work: "6 Bible Verses PROVING Water Baptism Saves (REBUTTAL to @NeedGodnet)",
                original:
                  "if you want to be saved, you need two things. You need to believe and to be baptized […] the second half of the verse that he focuses on, that's not nullifying the first half",
                translation: "ai-assisted",
              },
              {
                speaker: "Alejandro Otálora",
                outlet: "Video en YouTube",
                date: "2020",
                locator: "Minutos 11:00 a 12:10",
                url: "https://www.youtube.com/watch?v=Z9Js8wECyAM&t=660s",
                text: "otra vez la conjunción y la unión de las dos creer y bautizado […] se requieren las dos cosas la fe y el bautismo",
              },
            ],
          },
          {
            title: "La segunda mitad nombra solo la incredulidad",
            quotes: [
              {
                speaker: "Trent Horn",
                outlet: "Bryce Crawford Podcast, en YouTube",
                date: "8 de junio de 2026",
                locator: "Minutos 1:18:58 a 1:19:40",
                url: "https://www.youtube.com/watch?v=oNWseAsfcGM&t=4738s",
                text: "no había nadie que fuera a buscar el bautismo a menos que creyera, porque buscar el bautismo en ese contexto significaba que te echarían de la sinagoga […] los que no se bautizan son personas que no creen",
                work: "A Catholic Apologist Challenged Everything I Believe (EP 198)",
                original:
                  "there wasn't anyone who was going to seek baptism unless they believed because in seeking baptism in that context you're going to be thrown out of the synagogue […] the people who don't get baptized, those are they're going to be people who who don't believe",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.2.38"],
      text: "«Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo.» Para el Catecismo, son los dos efectos del bautismo: el perdón de los pecados y el nuevo nacimiento en el Espíritu {c:CEC1262|Catecismo 1262}.",
      apologists: {
        intro:
          "Los apologistas católicos responden que el texto no dice que la multitud ya estuviera perdonada: preguntan qué deben hacer, Pedro les manda arrepentirse y bautizarse, y solo después de bautizados «fueron añadidas [á ellos] aquel día como tres mil personas» (Hechos 2:41). Señalan el mismo orden en Hechos 22:16: «Levántate, y bautízate, y lava tus pecados».",
        arguments: [
          {
            title: "La multitud no había sido perdonada antes del bautismo",
            quotes: [
              {
                speaker: "Karlo Broussard",
                outlet: "Catholic Answers Magazine",
                date: "21 de mayo de 2020",
                locator: "Artículo en línea",
                url: "https://www.catholic.com/magazine/online-edition/in-baptism-our-sins-are-forgiven",
                text: "en ningún lugar dice que los que escuchaban a Pedro fueran perdonados de sus pecados antes de recibir el bautismo",
                work: "In Baptism Our Sins Are Forgiven",
                original:
                  "nowhere does it say those listening to Peter were forgiven their sins before they received baptism",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                outlet: "Shameless Popery, en YouTube",
                date: "27 de mayo de 2025",
                locator: "Minutos 8:00 a 10:10",
                url: "https://www.youtube.com/watch?v=T5uo7c3WV9c&t=480s",
                text: "le dice a este grupo de gente supuestamente salvada que tiene que arrepentirse. Bueno, eso parece bastante raro […] es solo después de que son bautizados, por cierto, que la Biblia los cuenta entre el rebaño",
                work: "6 Bible Verses PROVING Water Baptism Saves (REBUTTAL to @NeedGodnet)",
                original:
                  "he tells this group of a bunch of saved people that they need to repent. Well, that seems pretty weird […] it's only after they're baptized, by the way, that the Bible numbers them amongst the flock",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title: "Hechos 22:16 muestra el mismo orden",
            quotes: [
              {
                speaker: "Karlo Broussard",
                outlet: "Catholic Answers Magazine",
                date: "21 de mayo de 2020",
                locator: "Artículo en línea",
                url: "https://www.catholic.com/magazine/online-edition/in-baptism-our-sins-are-forgiven",
                text: "Claramente, el bautismo precede a la eliminación del pecado y está ordenado a producir ese efecto",
                work: "In Baptism Our Sins Are Forgiven",
                original:
                  "Clearly, baptism precedes the removal of sin and is ordered to bringing about such an effect",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Rom.6.3-Rom.6.4", "Col.2.12"],
      text: "«Somos bautizados en su muerte… somos sepultados juntamente con él á muerte por el bautismo»: para el Catecismo, la inmersión simboliza esa sepultura y esa resurrección {c:CEC1214|Catecismo 1214}, y por el bautismo el creyente «es sepultado y resucita con Él» {c:CEC1227|Catecismo 1227}.",
      apologists: {
        arguments: [
          {
            title:
              "El bautismo es la forma en que entramos en la muerte y la resurrección de Cristo, y eso es regenerador",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "Does Baptism Save Us?",
                outlet: "Shameless Popery",
                date: "14 de noviembre de 2024",
                locator:
                  "4 párrafos: del párrafo que empieza «That’s not biblical. That’s not what Jesus lays out.…» al que termina «…going all the way back to the Old Testament.»",
                url: "https://www.catholic.com/audio/sp/does-baptism-save-us",
                text: "Eso no es bíblico. Eso no es lo que Jesús expone. ¿Sí? Podrían estar protestando. Veo de dónde saca todo esto, Ezequiel, de Hechos, de Jesús mismo, pero ¿eso no contradice la teología de Pablo? Y la respuesta es no. Espero que lo hayan visto suficientes veces, ¿verdad? Como Ananías, que lo sacamos de San Pablo. Pero también podemos ver muchas veces en que Pablo habla de este importante papel del bautismo en la salvación. Ahora, voy a hacer algo un poco fuera de orden aquí. Quiero mirar Romanos 6, al comienzo del capítulo seis. San Pablo dice: ¿Qué diremos entonces? ¿Seguiremos en el pecado para que abunde la gracia? De ningún modo. ¿Cómo podemos, habiendo muerto al pecado, seguir viviendo en él? Ahora bien, la pregunta debería ser cómo morimos al pecado en la teología de Pablo. Y ahora quiero saltar intencionalmente unos versículos más adelante.\n\nVoy a saltear los versículos tres y cuatro porque vamos a volver a ellos, y voy directo al versículo cinco, donde San Pablo dice: Porque si hemos sido unidos con él en una muerte semejante a la suya, también lo seremos en una resurrección semejante a la suya. Entonces parece realmente importante que muramos con Cristo para poder resucitar a la vida resucitada con Cristo. Así que deberíamos preguntarnos, según la teología de San Pablo, cómo hacemos eso. ¿Es algo que solo logramos por la fe sola, en la concepción protestante? Y la respuesta a eso es que de ninguna manera. Ahora incluyamos los versículos tres y cuatro. Pablo dice: ¿No saben ustedes que todos los que hemos sido bautizados en Cristo Jesús, fuimos bautizados en su muerte? Fuimos sepultados, pues, con él para muerte por el bautismo, a fin de que, como Cristo fue levantado de los muertos por la gloria del Padre, así también nosotros andemos en vida nueva.\n\nAsí que observen que, según San Pablo, entramos en la muerte y la resurrección de Cristo, y lo hacemos a través del bautismo, bastante explícitamente. Y así es como empezamos a andar en vida nueva. Eso suena bastante regenerador. Suena a algo que ha ocurrido. Es un cambio real. Incluso podríamos decir ontológico. Eso es solo Romanos 6, pero no está solo. En Colosenses capítulo dos, San Pablo recuerda a los colosenses: en él también fueron circuncidados con una circuncisión no hecha con manos, al despojarse del cuerpo de la carne, en la circuncisión de Cristo. Entonces, ¿cómo es la circuncisión de Cristo? Él dice: y fueron sepultados con él en el bautismo, en el cual también fueron resucitados con él mediante la fe en el poder de Dios que lo levantó de los muertos. Así que nuestra entrada en la muerte y resurrección de Cristo es por medio de qué? Bueno, por medio del bautismo. De manera semejante, en Tito capítulo tres, dice que Dios nos salvó no por obras de justicia hechas por nosotros, ¿verdad?\n\nNo es una salvación por obras. Sino por su misericordia, por el lavamiento de la regeneración y renovación en el Espíritu Santo. Noten esto, porque es enorme. Está diciendo que no es por obras en el sentido que Pablo lo quiere decir. Es por el bautismo, el lavamiento del nuevo nacimiento o regeneración, y en el Espíritu Santo; si uno lee esto sin las anteojeras, se vuelve bastante claro. ¿Sí? Sí, eso tiene sentido. Que si Pablo piensa que entramos en la muerte y resurrección de Cristo a través del bautismo, como dice repetidamente, esto sería el comienzo de nuestra vida de salvación, y que esto sí nos salva y es así como entramos en esta vida divina con Cristo. Y así es como nos ha salvado, no por ninguna obra que hayamos hecho, sino por medio del bautismo. Bien, ahora quiero pasar de la teología de San Pablo, volviendo todo el camino atrás, al Antiguo Testamento.",
                original:
                  "That’s not biblical. That’s not what Jesus lays out. Okay? You might be protesting. I see where you’re getting all this from, Ezekiel from Acts from Jesus himself, but doesn’t that contradict Paul’s theology? And the answer is no. Hopefully you’ve seen that enough times, right? Like Ananias that we’re getting from St. Paul. But we can also see plenty of time where Paul talks about this important role of baptism in the role of salvation. Now, I’m going to do something a little bit out of order here. I want to look at Romans six at the beginning of chapter six. St. Paul says, what shall we say then? Are we the continue in sin that Grace May abound by no means how can have died to sin still live in it. Now the question should be how do we die to sin in Paul’s theology? And now I want to intentionally jump forward a few verses.\n\nI’m going to skip over verse three and four because we’re going to get back to them and jump all the way down to verse five where St. Paul says, for if we have been united with him in a death like his, we shall certainly be united with him in a resurrection like his. So it seems really important self vally that we die with Christ so we can rise to resurrected life with Christ. So we should be asking according to the theology of St. Paul, how do we do that? Is that something we only achieve by faith alone in the Protestant conception of it? And the answer to that is not at all. Let’s now plug in verses three and four. Paul says, do you not know that all of us who’ve been baptized into Christ Jesus were baptized into his death? We were buried therefore with him by baptism into death so that as Christ was raised from the dead, by the glory of the Father, we too might walk in newness of life.\n\nSo notice according to St. Paul, we enter the death and resurrection of Christ, how well through baptism pretty explicitly. And that’s how we begin to walk in newness of life. That sounds pretty regenerative. That sounds like something that’s happened. That is an actual change. We might even say ontologically. So that’s just Romans six, but it’s not alone. In Colossians chapter two, St. Paul reminds the Colossians in him also, you were circumcised with a circumcision made without hands by putting off the body of flesh in the circumcision of Christ. So what does the circumcision of Christ look like? He says, and you were buried with him in baptism in which you were also raised with him through faith in the working of God who raised him from the dead. So our entrance into the death and resurrection of Christ is through what? Well through baptism. Similarly, in Titus chapter three, he says that God saved us not because of deeds done by us in righteousness, right?\n\nIt’s not work salvation. But in virtue of his own mercy by the washing of regeneration and renewal in the Holy Spirit. Notice this because it is huge. He’s saying it’s not by works in the sense that Paul means it. It’s by baptism, the washing of rebirth or regeneration and in the Holy Spirit that if you just read this without the blinders, it becomes pretty clear. Okay? Yeah, that makes sense. That if Paul thinks that we enter the death and resurrection of Christ through baptism, as he repeatedly says, this would be the beginning of our life of salvation, that this does save us and this is how we enter into this divine life with Christ. And so that’s how he has saved us, not because of any deeds we’ve done, but through baptism. Okay, I want to pivot now from St. Paul’s theology going all the way back to the Old Testament.",
                translation: "ai-assisted",
              },
              {
                speaker: "Karlo Broussard",
                work: "What Good Is Water Baptism?",
                outlet: "Catholic Answers Magazine",
                date: "19 de mayo de 2025",
                locator:
                  "12 párrafos: del párrafo que empieza «Romans 6:3-4 is a go-to passage for many Christians…» al que termina «…which this union with Christ takes becomes a reality.»",
                url: "https://www.catholic.com/magazine/online-edition/what-good-is-water-baptism",
                text: "Romanos 6:3-4 es un pasaje al que recurren muchos cristianos cuando quieren mostrar desde la Biblia que el bautismo realmente hace algo: que salva. Pablo dice que por medio del bautismo “somos sepultados juntamente con [Cristo] . . . para muerte . . . [para que] andemos en vida nueva”. Luego, en el versículo 7, agrega que en esa muerte bautismal somos “libres del pecado”.\n\nAhora bien, aquí hay algo interesante: la palabra griega traducida como “libres” es dikaioō, que en realidad significa “justificar”. En otras palabras, Pablo está diciendo que somos justificados —o salvados— por medio del bautismo. Es una afirmación bastante fuerte. Pero no todos están de acuerdo. En su libro Exodus from Rome: Volume I, el teólogo protestante Todd Baker se opone a esta idea. Sostiene que Pablo ni siquiera está hablando aquí del bautismo en agua. Según Baker, Pablo se refiere a algo meramente espiritual. Da dos razones principales para esta postura, así que veamos ambas.\n\nEl primer argumento de Baker es que Pablo nunca dice la palabra “agua”. Así lo expresa:\n\nEl uso que hace Pablo del bautismo en Romanos 6:3-5 no menciona el agua en ningún lugar, y por lo tanto puede transmitir razonablemente la idea más amplia de identificación con Cristo en su muerte y resurrección para la salvación del pecador, sin señalar necesariamente la idea del rito o acto del bautismo en agua . . . si Pablo se refiere a un bautismo ritual y en agua en Romanos 6, habría incluido claramente el término “agua” como modificador descriptivo del bautismo, cosa que no hace.\n\nPero esto es bastante forzado. Piénsenlo: Pablo escribió Romanos alrededor del año 50 d. C. Eso significa que durante unos veinte años, los cristianos ya practicaban el bautismo en agua, siguiendo el mandato de Jesús en Mateo 28:19 de salir a bautizar. Y tenemos múltiples ejemplos de esto en acción: basta ver Hechos 8:16, 10:48, 11:14, 16:15 y 33, y 18:8, además de 1 Corintios 1:16.\n\nAsí que, para los primeros cristianos, “bautismo” significaba naturalmente bautismo en agua. Era lo normal. Pablo no habría necesitado agregar la palabra “agua” cada vez. Como hoy: si alguien dice que se bautizó, uno supone que fue con agua. No hay confusión.\n\nY seamos realistas: Pablo está describiendo aquí una transformación poderosa: morir y resucitar con Cristo. Es una imagen bastante dramática, y ¿qué mejor manera de simbolizarla que con un lavado ritual? El lavado con agua encaja perfectamente con el mensaje teológico. Quitar el lavado, y se pierde gran parte del significado.\n\nAhora, Baker podría responder diciendo: “Bueno, Pablo debe estar refiriéndose a algo distinto del bautismo en agua, porque el bautismo es solo un símbolo de nuestra unión con Cristo: no hace realmente nada”. Pero eso es dar por supuesto lo que se quiere demostrar. En otras palabras, no se puede argumentar que Romanos 6:3-4 no respalda la salvación por el bautismo solo porque ya se cree que el bautismo no salva. Eso es justamente lo que estamos tratando de averiguar.\n\nBaker también podría contraargumentar diciendo que estoy malinterpretando su argumento, pensando que sostiene que Pablo debería haber mencionado simplemente el término “agua”. Pero las líneas siguientes precisan cómo Pablo habría usado el “agua” como modificador si tuviera en mente el bautismo en agua. Baker escribe (énfasis agregado):\n\nEn consecuencia, el Apóstol habría escrito Romanos 6:3-4, si el bautismo en agua fuera el medio productivo de la salvación y de la unión con Jesucristo, así: “Como muchos de nosotros fuimos sumergidos (bautizados) en agua en Cristo, fuimos sumergidos en agua en su muerte. Por lo tanto, somos sepultados con él por la inmersión en agua en su muerte.\n\nBaker supone que si Pablo hablara del bautismo en agua, debería haber dicho que somos bautizados en agua. Pero eso sería extraño, porque Pablo estaría diciendo que el acto ritual del bautismo en agua nos une con el agua misma, lo cual no tiene sentido.\n\nAdemás, esto desvía de lo que Pablo realmente dice: “Fuimos bautizados en Cristo”. La unión espiritual con Cristo es el resultado del bautismo del que habla Pablo. Esto encaja perfectamente con la lectura sacramental del texto. El agua es solo el medio a través del cual esta unión con Cristo se hace realidad.",
                original:
                  "Romans 6:3-4 is a go-to passage for many Christians when they want to show from the Bible that baptism actually does something—that it saves. Paul tells us that through baptism, we’re “buried therefore with [Christ] . . . into death . . . [so that] we might walk in newness of life.” Then in verse 7, he adds that in this baptismal death, we’re “freed from sin.”\n\nNow, here’s something interesting: The Greek word translated as “freed” is dikaioō, which actually means “to justify.” In other words, Paul is saying we’re justified—or saved—through baptism. That’s a pretty strong claim. But not everyone agrees. In his book Exodus from Rome: Volume I, Protestant theologian Todd Baker pushes back on this idea. He argues that Paul isn’t even talking about water baptism here. According to Baker, Paul is referring to something merely spiritual. He gives two main reasons for this view, so let’s take a look at both.\n\nBaker’s first argument is that Paul never actually says the word “water.” Here’s how he puts it:\n\nPaul’s use of baptism in Romans 6:3-5 does not mention water anywhere, and therefore can conceivably convey the greater idea of identification with Christ in his death and resurrection for the sinner’s salvation, without necessarily pointing to the idea of the rite or act of water baptism . . . if Paul means a water and ritual baptism in Romans 6, he would have clearly included the term “water” as the descriptive modifier to baptism, which he does not.\n\nBut this is kind of a stretch. Think about it: Paul wrote Romans around A.D. 50. That means for about twenty years, Christians had already been practicing water baptism, following Jesus’ command in Matthew 28:19 to go out and baptize. And we have multiple examples of it in action—just look at Acts 8:16, 10:48, 11:14, 16:15 and 33, and 18:8, plus 1 Corinthians 1:16.\n\nSo, for early Christians, “baptism” would have naturally meant water baptism. It was the norm. Paul wouldn’t have needed to tack on the word “water” every time. Just like today—if someone says he got baptized, you assume he means with water. There’s no confusion.\n\nAnd let’s be real—Paul is describing a powerful transformation here: dying and rising with Christ. That’s a pretty dramatic image, and what better way to symbolize that than through a ritual washing? Ritual washing with water fits the theological message perfectly. Take away the washing, and you lose a lot of the meaning.\n\nNow, Baker might respond by saying, “Well, Paul must be referring to something else besides water baptism because baptism is just a symbol of our union with Christ—it doesn’t actually do anything.” But that’s begging the question. In other words, you can’t argue that Romans 6:3-4 doesn’t support salvation by baptism just because you already believe that baptism doesn’t save. That’s the very thing we’re trying to figure out.\n\nBaker may also counter and say that I’m misunderstanding his argument, thinking he’s arguing that Paul should have merely mentioned the term “water.” But the next few lines specify how Paul would have used “water” as a modifier if he envisioned water baptism. Baker writes (emphasis added),\n\nConsequently, the Apostle would have written Romans 6:3-4, if water baptism were the productive means of salvation and union with Jesus Christ, to read: “As many of us were immersed (baptized) into water in Christ were immersed into water into his death. Therefore we are buried with him by immersing in water into his death.\n\nBaker assumes that if Paul were talking about water baptism, Paul should have said we’re baptized into water. But that would be strange, since Paul would be saying the ritual act of water baptism unites us to water itself, which makes no sense.\n\nMoreover, this detracts from what Paul actually says: “We baptized into Christ.” Spiritual union with Christ is the result of the baptism that Paul speaks about. This fits perfectly with the sacramental reading of the text. Water is just the medium through which this union with Christ takes becomes a reality.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Titus.3.5"],
      text: "«Por el lavacro de la regeneración, y de la renovación del Espíritu Santo»: para el Catecismo, el bautismo «significa y realiza» ese nuevo nacimiento {c:CEC1215|Catecismo 1215}.",
      apologists: {
        arguments: [
          {
            title: "«El lavado de la regeneración» es el bautismo, y es obra de Dios, no nuestra",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "Does Baptism Save Us?",
                outlet: "Shameless Popery",
                date: "14 de noviembre de 2024",
                locator:
                  "4 párrafos: del párrafo que empieza «I’m going to skip over verse three and four…» al que termina «…way and by night in a pillar of fire.»",
                url: "https://www.catholic.com/audio/sp/does-baptism-save-us",
                text: "Voy a saltear el versículo tres y cuatro porque vamos a volver a ellos, y saltar hasta el versículo cinco, donde San Pablo dice: “Porque si hemos sido unidos con él en una muerte semejante a la suya, ciertamente también lo seremos en una resurrección semejante a la suya”. Así que parece realmente importante, self vally, que morimos con Cristo para poder resucitar a la vida resucitada con Cristo. Entonces deberíamos preguntarnos, según la teología de San Pablo, ¿cómo hacemos eso? ¿Es algo que sólo logramos por la fe sola, en la concepción protestante de ella? Y la respuesta a eso es que de ningún modo. Veamos ahora los versículos tres y cuatro. Pablo dice: ¿No saben que todos los que fuimos bautizados en Cristo Jesús fuimos bautizados en su muerte? Fuimos, pues, sepultados con él por el bautismo en la muerte, para que así como Cristo fue resucitado de entre los muertos por la gloria del Padre, también nosotros andemos en novedad de vida.\n\nFíjense, entonces, que según San Pablo entramos en la muerte y resurrección de Cristo, y de qué manera: a través del bautismo, bastante explícitamente. Y así es como empezamos a caminar en novedad de vida. Eso suena bastante regenerativo. Suena a algo que ha sucedido. Es un cambio real. Incluso podríamos decir ontológico. Eso es sólo Romanos 6, pero no está solo. En Colosenses capítulo 2, San Pablo recuerda a los colosenses: “en él también fueron circuncidados con una circuncisión no hecha por manos, al despojarse del cuerpo de la carne, en la circuncisión de Cristo”. Entonces, ¿cómo se ve la circuncisión de Cristo? Dice: “y fueron sepultados con él en el bautismo, en el que también fueron resucitados con él mediante la fe en la acción de Dios que lo resucitó de entre los muertos”. Entonces, nuestra entrada en la muerte y resurrección de Cristo es a través de qué? Bueno, a través del bautismo. De manera similar, en Tito capítulo 3, dice que Dios nos salvó no por obras de justicia hechas por nosotros, ¿verdad?\n\nNo es una salvación por obras. Sino en virtud de su propia misericordia, por el lavamiento de la regeneración y renovación en el Espíritu Santo. Fíjense en esto porque es enorme. Está diciendo que no es por obras en el sentido que Pablo lo entiende. Es por el bautismo, el lavamiento del nuevo nacimiento o regeneración y en el Espíritu Santo; si lees esto sin las anteojeras, se vuelve bastante claro. ¿Okay? Sí, eso tiene sentido. Que si Pablo piensa que entramos en la muerte y resurrección de Cristo a través del bautismo, como repite una y otra vez, este sería el comienzo de nuestra vida de salvación, que esto sí nos salva y que así es como entramos en esta vida divina con Cristo. Y así es como nos ha salvado, no por ninguna obra que hayamos hecho, sino a través del bautismo. Okay, quiero pasar ahora de la teología de San Pablo, volviendo todo el camino al Antiguo Testamento.\n\nSé que he hablado un poco del Antiguo Testamento con Ezequiel y un poco con el Arca de Noé también. Pero quiero mirar algunos otros pasajes que son realmente importantes, empezando. Esto va a ser en realidad el punto de inflexión de San Pablo aquí, empezando por la separación del mar Rojo, porque una de las cosas que Pablo dice en 1 Corintios 10 es que quiere que sepamos que nuestros padres estaban todos bajo la nube, y todos pasaron por el mar, y todos fueron bautizados en Moisés, en la nube y en el mar. Okay, fíjense otra vez: tienen dos ingredientes. Tienen agua y tienen nube. Ahora, ¿de qué se trata esto? Bueno, claramente se trata del bautismo en algún sentido. Está entendiendo claramente la separación del mar Rojo usando el motivo del bautismo. ¿Qué quiere decir con esto? Veamos lo que está diciendo volviendo a Éxodo 13 y 14. En Éxodo 13 se nos dice que el Señor iba delante de los israelitas de día en una columna de nube para guiarlos por el camino, y de noche en una columna de fuego.",
                original:
                  "I’m going to skip over verse three and four because we’re going to get back to them and jump all the way down to verse five where St. Paul says, for if we have been united with him in a death like his, we shall certainly be united with him in a resurrection like his. So it seems really important self vally that we die with Christ so we can rise to resurrected life with Christ. So we should be asking according to the theology of St. Paul, how do we do that? Is that something we only achieve by faith alone in the Protestant conception of it? And the answer to that is not at all. Let’s now plug in verses three and four. Paul says, do you not know that all of us who’ve been baptized into Christ Jesus were baptized into his death? We were buried therefore with him by baptism into death so that as Christ was raised from the dead, by the glory of the Father, we too might walk in newness of life.\n\nSo notice according to St. Paul, we enter the death and resurrection of Christ, how well through baptism pretty explicitly. And that’s how we begin to walk in newness of life. That sounds pretty regenerative. That sounds like something that’s happened. That is an actual change. We might even say ontologically. So that’s just Romans six, but it’s not alone. In Colossians chapter two, St. Paul reminds the Colossians in him also, you were circumcised with a circumcision made without hands by putting off the body of flesh in the circumcision of Christ. So what does the circumcision of Christ look like? He says, and you were buried with him in baptism in which you were also raised with him through faith in the working of God who raised him from the dead. So our entrance into the death and resurrection of Christ is through what? Well through baptism. Similarly, in Titus chapter three, he says that God saved us not because of deeds done by us in righteousness, right?\n\nIt’s not work salvation. But in virtue of his own mercy by the washing of regeneration and renewal in the Holy Spirit. Notice this because it is huge. He’s saying it’s not by works in the sense that Paul means it. It’s by baptism, the washing of rebirth or regeneration and in the Holy Spirit that if you just read this without the blinders, it becomes pretty clear. Okay? Yeah, that makes sense. That if Paul thinks that we enter the death and resurrection of Christ through baptism, as he repeatedly says, this would be the beginning of our life of salvation, that this does save us and this is how we enter into this divine life with Christ. And so that’s how he has saved us, not because of any deeds we’ve done, but through baptism. Okay, I want to pivot now from St. Paul’s theology going all the way back to the Old Testament.\n\nI know I’ve talked about the Old Testament somewhat with Ezekiel and somewhat with Noah’s Ark as well. But I want to look at a few other passages that are really important beginning. This is actually going to be St. Paul’s the pivot point here, beginning with the partying of the Red Sea because one of the things Paul says in one Corinthians 10 is that he wants us to know that our fathers were all under the cloud and all passed through the sea and all were baptized into Moses in the cloud and in the sea. Okay, notice again, you got two ingredients. You got water and you’ve got cloud. Now, what is this about? Well, it’s clearly about baptism in some sense. He’s clearly understanding the parting of the Red Sea using the motif of baptism. What does he mean by this? Let’s look at what he’s talking about by going back to Exodus 13 and 14 and Exodus 13 we’re told that the Lord went before the Israelites by day in a pillar of cloud to lead them along the way and by night in a pillar of fire.",
                translation: "ai-assisted",
              },
              {
                speaker: "Jimmy Akin",
                work: "Baptism and Salvation",
                outlet: "A Daily Defense, catholic.com",
                date: "20 de enero de 2023",
                locator:
                  "3 párrafos: del párrafo que empieza «The New Testament links baptism to salvation. Baptism is…» al que termina «…baptized through no fault of their own (CCC 1257–61).»",
                url: "https://www.catholic.com/audio/ddp/baptism-and-salvation-2",
                text: "El Nuevo Testamento vincula el bautismo con la salvación. El bautismo no es sólo un rito. Comunica las gracias de Dios, como el perdón de los pecados y el don del Espíritu Santo. Así, Pedro le dijo a la multitud el día de Pentecostés: “Arrepiéntanse, y bautícese cada uno de ustedes en el nombre de Jesucristo para perdón de sus pecados; y recibirán el don del Espíritu Santo” (Hechos 2:38). De manera similar, cuando se convirtió a la fe, a Pablo se le dijo: “Levántate, bautízate y lava tus pecados, invocando su nombre” (Hechos 22:16). En sus cartas, Pedro conectó explícitamente el bautismo con la salvación. Comparando el bautismo con cómo ocho personas fueron salvadas en el Arca de Noé, escribe: “El bautismo, que corresponde a esto, ahora los salva, no como remoción de la suciedad del cuerpo sino como una apelación a Dios por una conciencia limpia, mediante la resurrección de Jesucristo” (1 Pedro 3:21). El bautismo no salva porque nos haga físicamente más limpios, dice. Más bien, “ahora los salva” porque implica “una apelación a Dios por una conciencia limpia”, que se nos concede “mediante la resurrección de Jesucristo”. El Nuevo Testamento también indica que el bautismo es el medio por el cual somos regenerados o “nacemos de nuevo”. Jesús enseñó: “De cierto, de cierto te digo que el que no nace de nuevo, no puede ver el reino de Dios. . . . El que no nace de agua y del Espíritu, no puede entrar en el reino de Dios” (Juan 3:3, 5). Pablo está de acuerdo, diciendo que “nos salvó, no por obras de justicia que nosotros hubiéramos hecho, sino por su misericordia, por el lavamiento de la regeneración y renovación en el Espíritu Santo” (Tito 3:5). Así, el bautismo nos coloca en el estado de salvación.\n\nCONSEJO\n\nEl bautismo es una necesidad normativa, pero no absoluta. Rechazar deliberadamente el bautismo es rechazar la salvación en los términos que Dios la ofrece, pero Dios puede salvar a quienes no están bautizados sin culpa propia (CCC 1257–61).",
                original:
                  "The New Testament links baptism to salvation. Baptism is not just a ritual. It communicates God’s graces, such as the forgiveness of sins and the gift of the Holy Spirit. Thus Peter told the crowd on the day of Pentecost: “Repent, and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins; and you shall receive the gift of the Holy Spirit” (Acts 2:38). Similarly, when he was converted to the Faith, Paul was told: “Rise and be baptized, and wash away your sins, calling on his name” (Acts 22:16). In his letters, Peter explicitly connected baptism with salvation. Comparing baptism to how eight people were saved in Noah’s Ark, he writes: “Baptism, which corresponds to this, now saves you, not as a removal of dirt from the body but as an appeal to God for a clear conscience, through the resurrection of Jesus Christ” (1 Pet. 3:21). Baptism does not save because it makes us physically cleaner, he says. Rather it “now saves you” because it involves “an appeal to God for a clear conscience,” which is granted to us “through the resurrection of Jesus Christ.” The New Testament also indicates that baptism is the means by which we are regenerated or “born again.” Jesus taught: “Truly, truly, I say to you, unless one is born anew, he cannot see the kingdom of God. . . . Unless one is born of water and the Spirit, he cannot enter the kingdom of God” (John 3:3, 5). Paul agrees, saying that “he saved us, not because of deeds done by us in righteousness, but in virtue of his own mercy, by the washing of regeneration and renewal in the Holy Spirit” (Titus 3:5). Baptism thus places us in the state of salvation.\n\nTIP\n\nBaptism is a normative necessity but not an absolute one. To deliberately refuse baptism is to refuse salvation on the terms God offers it, but God can save those who are not baptized through no fault of their own (CCC 1257–61).",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Gal.3.27"],
      text: "«Todos los que habéis sido bautizados en Cristo, de Cristo estáis vestidos»: el Catecismo lo cita para la vestidura blanca del rito {c:CEC1243|Catecismo 1243}, y Trento, para la «plena y entera remision de los pecados» que atribuye al bautismo {c:T14c2|ses. XIV, cap. 2}.",
      apologists: {
        arguments: [
          {
            title: "«Bautizados en Cristo … revestidos de Cristo»: el bautismo hace realmente algo",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "Does Baptism Save Us?",
                outlet: "Shameless Popery",
                date: "14 de noviembre de 2024",
                locator:
                  "5 párrafos: del párrafo que empieza «It is trusting in God and obeying which the…» al que termina «…just a one and done thing in the past.»",
                url: "https://www.catholic.com/audio/sp/does-baptism-save-us",
                text: "Es confiar en Dios y obedecer, lo que el diablo no hace. Y eso no es solo el primer párrafo de Romanos 1, sino también el último párrafo de Romanos 16, el último de todos. Así que es el principio y el final de la epístola a los Romanos. San Pablo reitera que ahora se ha dado a conocer, y por medio de los escritos proféticos se da a conocer a todas las naciones según el mandato del Dios eterno, para llevar a la obediencia de la fe. Así que la fe, en el sentido bíblico, tanto en el uso de Pablo como en el de Santiago, es algo obediente y algo activo. Entonces, vuelvan a la segunda señal de alarma que mencioné: se basa en la idea de que el bautismo no puede hacer nada. No se le permite hacer nada para la salvación porque es una obra, no en sentido bíblico, es una petición de ayuda, mientras que la fe sí puede hacer algo para la salvación porque es meramente pasiva.\n\nDe nuevo, no bíblicamente: la fe en el sentido bíblico es activa y obediente. Ahora, podemos aplicar todo esto directamente al bautismo. Recuerden que mi queja, después de todo, es que se habla mucho de lo que el bautismo puede y no puede hacer sin mirar los pasajes que de verdad hablan del bautismo. Entonces, ¿no sería estupendo que San Pablo, en medio de hablar de la fe y las obras, también mencionara el papel del bautismo? Y afortunadamente lo hace. En Gálatas capítulo tres, escribe que la ley fue nuestro custodio. Pedago, creo, es una palabra griega ahí. Es como un esclavo instructor, como el que tenía una familia rica para enseñar a sus hijos. Y la idea era que había que obedecerlo como a un niñero, hasta crecer. Así que eso es lo que se quiere decir ahí con custodio. Entonces, la ley fue nuestro custodio hasta que vino Cristo, para que fuésemos justificados por la fe; pero venida la fe, ya no estamos bajo custodio. Porque todos ustedes son hijos de Dios por la fe en Cristo Jesús.\n\nY si eso terminara ahí, podrían decir: bueno, no veo lugar para el bautismo ahí. Pero no termina ahí. El versículo siguiente dice: Porque todos los que han sido bautizados en Cristo se han revestido de Cristo. Entonces, ¿cómo recibimos a Cristo Jesús por la fe? Bueno, por medio del bautismo. Eso es lo que dice Pablo. No parece pensar: si es el bautismo, entonces no la fe. Ve que es por la fe, por medio del bautismo. Y ahí les está mostrando que nos hemos revestido de Cristo, no simplemente por creer, sino específicamente porque, como muchos de nosotros fuimos bautizados en Cristo, nos hemos revestido de Cristo; que el bautismo realmente está haciendo algo. Y lo que hace aquí es que nosotros nos revestimos de Cristo. Bien. Entonces, sugeriría que una buena pregunta para hacerle a alguien que tiene estas anteojeras teológicas es: ¿cuándo fuiste salvado? Y he escuchado distintas respuestas a esto.\n\nUno puede imaginar un número de respuestas diferentes. Podría ser un momento decisivo en tu vida. Podría ser cuando te bautizaste. Podría ser cuando hiciste la oración del pecador. Podría ser cualquiera de muchas cosas. La única respuesta que nunca he oído en todos mis años haciendo esta pregunta: nunca he oído a nadie decir: me salvé el Viernes Santo; que la suficiencia de la muerte de Cristo en la cruz no significó que yo estuviera salvado en el año 33 d. C.; todavía tenía que haber algo en mi vida en el que sucediera lo que sucedió, que la obra que Cristo ha hecho tenía que aplicarse a mi vida de alguna manera. Esa aplicación no dice: Jesús, tu obra no fue suficiente; y sería escandaloso acusar a alguien de decir eso, ya que católicos, protestantes, evangélicos reformados, quien sea que seas, tienes que reconocer que la obra de Cristo en el Viernes Santo necesita ser aplicada en tu vida.\n\nY eso, por cierto, es la manera bíblica de hablarlo y la manera bíblica de hablar de ser salvado. Para dar solo un ejemplo, porque, de nuevo, esto es una digresión, no voy a seguirla por completo. Solo voy a asomarme por ahí. San Pablo, escribiendo a Timoteo, dice: Ten cuidado contigo mismo y con tu enseñanza; persiste en ello, porque haciéndolo te salvarás a ti mismo y a tus héroes. Ahora, noten que San Pablo parece totalmente conforme con la idea de que uno podría tener algo que hacer relacionado con su propia salvación. No conozco otra forma de leer la frase salvarte a ti mismo que no implique que uno tiene algún tipo de papel en algún lugar del proceso. Pero además, noten que en la concepción de Pablo le está hablando a Timoteo, que ya es cristiano. La salvación no es solo algo de una vez y terminado en el pasado.",
                original:
                  "It is trusting in God and obeying which the devil doesn’t do. And that’s not just the first paragraph of Romans one, it’s also the last paragraph of Romans 16, the very last. So it’s the beginning and the end of the epistle to the Romans. St. Paul reiterates that it’s now disclosed and through the prophetic writings is made known to all nations according to the command of the eternal God, to bring about the obedience of faith. So faith in the biblical sense in both Paul and James’s usage is something obedient and something active. So go back to that second warning sign I had that this is based on the idea that baptism can’t do anything. It’s not allowed to do anything for salvation because it’s a work not biblically speaking, it’s an appeal for help and faith can do something for salvation because it’s merely passive.\n\nAgain, not biblically faith in the biblical sense is active and obedient. Now, we can apply all of this to baptism directly. Remember, my complaint after all is there’s a lot of talk about what baptism can and can’t do without looking at the passages, actually talking about baptism. So wouldn’t it be great if St. Paul in the midst of talking about faith and works also mentioned the role of baptism? And fortunately he does. In Galatians chapter three, he writes that the law was our custodian. Pedago, I believe is a Greek word there. It’s like a teaching slave, like a rich family would have a slave who was in charge of teaching their kids. And the idea was you had to obey as like a babysitter you had to obey until you grew up. So that’s what’s meant there by custodian. So the law was our custodian until Christ came that we might be justified by faith, but now that faith has come, we are no longer under a custodian for in Christ Jesus.\n\nYou’re all sons of God through faith. And if it stopped there, you might say, okay, I don’t see any room for baptism there, but it doesn’t stop there. The very next verse says, for as many as you as were baptized Christ have put on Christ. So how do we receive Christ Jesus through faith? Well, through baptism. That’s what Paul says. He doesn’t seem to think well if baptism then not faith. He views by faith through baptism. He’s showing you there that we’ve put on Christ, not simply through belief, but specifically as many of us as we’re baptized into Christ have put on Christ that baptism is actually doing something. And what it’s doing here is it’s us putting on Christ. Alright, so I would suggest that a good question to ask someone who has these theological blinders on is when were you saved? And I’ve heard different answers to this.\n\nYou can imagine any number of different answers. It could be a pivotal moment in your life. It could be when you got baptized. It could be when you prayed the sinner’s prayer. It could be any number of things. The one answer I’ve never heard in all my years asking this question, I’ve never heard anyone say, I got saved on Good Friday that the sufficiency of Christ’s death on the cross didn’t mean that I was saved in 33 ad there still had to be something in my life in which what happened that the work Christ has done had to be applied into my life in some way. That application doesn’t say, Jesus, your work wasn’t enough and it would be outrageous to accuse someone of saying that since Catholics, Protestants, evangelicals reformed, whoever you are, you’ve got to recognize that Christ’s work on good Friday needs to be applied in your life.\n\nAnd that by the way, is the biblical way of speaking about it and the biblical way of speaking about being saved. To give just one example because again, this kind of a rabbit trail, I’m not going to go all the way down it. I’m going to peek that way. St. Paul writing to Timothy says, take heed to yourself and to your teaching. Hold to that for by so doing, you will save both yourself and your heroes. Now notice St. Paul seems totally content with the idea that you might have something to do related to your own salvation. I don’t know another way of reading the phrase, save yourself that doesn’t involve you having some kind of role somewhere in the process. But moreover, notice that in Paul’s conception, he’s running the Timothy who already is a Christian. Salvation isn’t just a one and done thing in the past.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Argumento B (añadido por B5) · Pablo nombra el bautismo, no la fe sola, como la manera de revestirse de Cristo (Gálatas 3:26–28); la circuncisión dio paso al bautismo (Colosenses 2)",
            quotes: [
              {
                speaker: "Trent Horn",
                work: "Answering “Servus Christi” on Salvation by Faith Alone",
                outlet: "The Counsel of Trent",
                date: "30 de julio de 2020",
                locator:
                  "5 párrafos: del párrafo que empieza «Then first, then Peter has a false Jesus. He…» al que termina «…with actual water, not just a metaphor about water.»",
                url: "https://www.catholic.com/audio/cot/answering-servus-christi-on-salvation-by-faith-alone",
                text: "Entonces, primero, Pedro tiene un Jesús falso. Dice que el bautismo ahora te salva, en 1 Pedro 3:21. Pero ¿es acaso que Pablo no está hablando del bautismo en estos versículos? ¿Que Pablo ve el bautismo como una mera confirmación externa de un acto salvífico que ya tuvo lugar? No. Vamos a lo que Pablo dijo realmente aquí. Primero, lo que dice en Gálatas 3:26 al 28. Recuerden lo que hablé aquí: la gran preocupación de Pablo no es creer y hacer buenas obras para llegar a Dios, sino que tienes que ser un buen judío para ser un buen cristiano. Entonces, Pablo está diciendo aquí: “Ahora que ha venido la fe, ya no estamos bajo un ayo”, paidagogos, la ley del Antiguo Testamento, “porque en Cristo Jesús todos ustedes son hijos de Dios por medio de la fe”. No hace falta ser un buen judío para ser un buen cristiano. “Y ¿cómo entran en…?” Recuerden que Colosenses capítulo 2 dice que es el bautismo el que reemplazó la señal de la circuncisión.\n\nEntonces, ¿cuál es la señal? ¿Qué es lo que nos introduce en la Nueva Alianza? Para que todos podamos ser hijos de Dios. No tienes que circuncidarte, ¿qué haces? “Porque cuantos de ustedes fueron bautizados en Cristo, se han revestido de Cristo”. Aquí, si lo que estaba en juego fuera sólo la fe, ya que ha venido la fe ya no estamos bajo un ayo, porque en Cristo Jesús todos ustedes son hijos de Dios por medio de la fe, porque cuantos de ustedes fueron… Si lo que estaba en juego fuera la fe, Pablo podría decir: “Porque cuantos de ustedes creyeron en Cristo se han revestido de Cristo”. Podría haberlo dicho ahí mismo.\n\n¿Por qué dice bautismo? Porque el bautismo es donde nos revestimos de Cristo, de modo que no hay judío ni griego. No hay estas divisiones que fueron creadas por las señales de la Antigua Alianza, como la circuncisión o las leyes dietéticas, o cosas por el estilo. Y sabemos que Pablo quiere decir esto porque queda claramente expuesto en Romanos capítulo 6. Romanos 6, Pablo dice: “¿No saben que todos los que fuimos bautizados en Cristo Jesús fuimos bautizados en su muerte? Fuimos, pues, sepultados con él por el bautismo en la muerte, para que así como Cristo fue resucitado de entre los muertos por la gloria del Padre, también nosotros andemos en novedad de vida”.\n\nDouglas Moo, que es un teólogo protestante en, creo que Wheaten, Wheaten College, dice que algunos eruditos han negado cualquier referencia al bautismo con agua aquí. Y Josh sería una persona que estaría en ese grupo. Sostienen que bautizar significa sumergir en un sentido metafórico, o que Pablo se refiere al bautismo en el Espíritu, o que usa bautizar como metáfora de la incorporación al cuerpo de Cristo. Pero sin descartar la posibilidad de alusiones a una o más de estas ideas, una referencia al bautismo con agua es la primaria.\n\nEntonces, incluso los eruditos protestantes que examinan lo que Pablo dice aquí en Romanos 6, es muy claro. No está hablando del bautismo como una mera metáfora de sumergirse en Cristo, sólo creyendo en él. Uno está realmente sumergido en agua; es a través del agua que somos unidos a Cristo en su muerte, porque el agua, piensen, volvamos a 1 Pedro capítulo 3: el agua es un símbolo tipológico perfecto de nuestra salvación, porque limpia. El agua limpia, quita el pecado. Pero el agua puede matar. El agua puede ahogar a la gente. Ahogó a la gente en el diluvio de Noé. Entonces, el agua mata nuestro viejo yo. Morimos con Cristo. El viejo yo es ahogado, y el nuevo yo entonces surge de ahí, unido a Cristo. Y eso tiene sentido con el agua real, no sólo con una metáfora sobre el agua.",
                original:
                  "Then first, then Peter has a false Jesus. He says baptism now saves you, in First Peter 3:21. But is it the case that Paul is not talking about baptism in these verses. That Paul just sees baptism as a mere outward confirmation of a salvafic act that already took place? No. Let’s go to what Paul actually said here. First what he says in Galatians 3:26 through 28, remember what I talked about here, what Paul’s big concern is about, is not about believing and doing good deeds to get to God, it’s you got to be a good Jew to be a good Christian. So, it was Paul saying here, “Now that faith has come, we are no longer under a custodian,” Paidagogos, the Old Testament law, “For in Christ Jesus you are all sons of God through faith,” Don’t got to be a good Jew to be a good Christian, “And how do you enter into,” Remember Colossians chapter two says that it is baptism which is replaced the sign of circumcision.\n\nSo, what is the sign? What is that which brings you into the New Covenant? So that we all can be sons of God. You don’t have to be circumcised, what do you do? “For as many of you as you were baptized into Christ, have put on Christ.” So, here, if it was just faith, now that faith has come we are no longer under a custodian, for in Christ Jesus you are all sons of God through faith, for as many of you as you were… If faith was issue Paul could just say, “For as many of you believed in Christ have put on Christ.” He could have just said it right there.\n\nWhy does it say baptism? Because baptism is where we put on Christ, so that there is neither Jew nor Greek. You don’t have these divisions that were created by the signs of the Old Covenant like circumcision or the dietary laws, or things like that. And we know that Paul means this because is it clearly driven home in Romans chapter six. Roman six Paul says, “Do you not know that all of us who have been baptized into Christ Jesus were baptized into his death. We’re buried therefore with him by baptism into death, so that as Christ was raised from the dead by the glory of the father, we too might walk in newness of life.”\n\nDouglas Moo who is a Protestant theologian at I think Wheaten, Wheaten College. He says a few scholars have denied any reference to water baptism here. And Josh would be a person who would be in that camp. Arguing that baptize means immerse in a metaphorical sense, or that Paul refers to baptism in the spirit, or that he uses baptize as a metaphor for incorporation into the body of Christ. But without discounting the possibility of allusions to one or more of these ideas, a reference to water baptism is primary.\n\nSo, even Protestant scholars who examine what Paul is saying here in Roman six, it’s very clear. He’s not talking about baptism as a mere metaphor to immersing yourself in Christ, just believing in him. You’re actually immersed in water, it is through water that we are united to Christ in his death, because water, think about, go back to First Peter Three, water is a perfect typological symbol for our salvation, because it cleanses. Water cleanses, it removes sin. But water can kill. Water can drown people. It drowned the people in Noah’s flood. So, water kills our old self. We die to Christ. The old self is drowned, and the new self then rises out from there, united to Christ. And that makes sense with actual water, not just a metaphor about water.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.6.11", "1Cor.12.13"],
      text: "«mas [ya] sois lavados, mas [ya] sois santificados, mas [ya] sois justificados»; «por un Espíritu somos todos bautizados en un cuerpo»: para el Catecismo, el bautismo «es un baño que purifica, santifica y justifica» {c:CEC1227|Catecismo 1227} y nos hace «miembros del Cuerpo de Cristo» {c:CEC1267|Catecismo 1267}.",
      apologists: {
        arguments: [
          {
            title:
              "«por un solo Espíritu fuimos todos bautizados en un solo cuerpo» (1 Corintios 12:13): Heschmeyer dice que la Iglesia católica reconoce el bautismo de ortodoxos y protestantes «siempre que se haga de la manera correcta y con la intención correcta»",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "The Critical Disagreements That Sparked The SSPX Schism...",
                outlet: "Shameless Popery",
                date: "21 de julio de 2026",
                locator:
                  "4 párrafos: del párrafo que empieza «And you’ll see the same argument often being made,…» al que termina «…meant to just be like, okay, you’re good enough.»",
                url: "https://www.catholic.com/audio/sp/the-critical-disagreements-that-sparked-the-sspx-schism",
                text: "Y vas a ver el mismo argumento muy seguido, pero como algo negativo, por algunos católicos tradicionalistas. El término aparece a menudo entre comillas de burla en los escritos de la FSSPX, incluidos los del propio Lefebvre, o encontramos el uso de la frase llamados así – “hermanos separados”. Pero tanto si eres un protestante que piensa que esto fue una buena novedad como si eres un tradicionalista que piensa que es una mala novedad, la verdad es que no fue una novedad en absoluto. Términos como “hermanos separados” para describir a herejes y cismáticos son más antiguos que el Vaticano II. Son incluso más antiguos que el protestantismo. Y se basan en la teología del bautismo. Así que permíteme explicar. El Código de Derecho Canónico de 1917 era muy explícito. Por el bautismo, un hombre queda constituido como persona en la Iglesia de Cristo. Cuando el papa Pío XII pareció contradecir ese punto en Mystici Corporis Christi, aclaró enseguida en Mediator Dei que por las aguas del bautismo, como por derecho común, los cristianos son hechos miembros del cuerpo místico de Cristo, el sacerdote.\n\nSon hechos miembros incluso del sacerdocio de Cristo. Esa es la doctrina cristiana. Está enraizada en las palabras de San Pablo de que en un solo Espíritu fuimos todos bautizados en un solo cuerpo: judíos o griegos, esclavos o libres, y todos fuimos hechos beber de un solo Espíritu. Por eso, la Iglesia católica reconoce la validez del bautismo ortodoxo y protestante siempre que se realice de la manera correcta y con la intención correcta. El Concilio de Florencia es incluso explícito en que los paganos y los herejes bautizan válidamente. Y así existe este sentido en el que consideramos incluso a los herejes y cismáticos bautizados como nuestros hermanos. Este fue un punto que subrayaron los Padres de la Iglesia. San Optato de Molevas reprendió a los cismáticos donatistas diciendo: “No tendrán paz con nosotros, es decir, con sus hermanos. Porque no pueden dejar de ser nuestros hermanos. Yo, a quien junto con nosotros, una sola madre Iglesia, nace de las mismas entrañas de sus misterios, y a quien Dios Padre ha recibido de la misma manera como hijos de adopción.” Y así encontramos al papa León XII hablando de los ortodoxos a finales de 1800 como nuestros hermanos disidentes, y expresando su esperanza de que busquen más fácilmente el abrazo de su madre, la Iglesia.\n\nYa entonces los ortodoxos son entendidos en algún sentido como hermanos e hijos verdaderos de la Santa Madre Iglesia. Al año siguiente, habla de la misma manera de los anglicanos. Termina una encíclica con una oración. Oh, madre dolorosa, intercede por nuestros hermanos separados. Que con nosotros, en el único y verdadero redil, puedan ser unidos al Supremo Pastor, el vicario de tu Hijo. En 1928, el papa Pío XI escribió una encíclica llamada Mortalium animos, que voy a mirar más de cerca porque en ella condena algunas malas formas de ecumenismo. Tenemos una especie de unidad a expensas de la verdad. Pero incluso en ese documento habla de cómo estos hijos separados deberían volver a la Sede Apostólica. Y habla de nuestros hijos tanto como de los que pertenecen a la comunidad católica, pero también de los que están separados de nosotros. Así que es perfectamente tradicional y doctrinalmente ortodoxo reconocer que los ortodoxos y los protestantes están unidos a la Iglesia de una manera por el sacramento del bautismo.\n\nY mucho más que eso en el caso de los ortodoxos, pero esta unión todavía no está completa. ¿Es confuso hablar de comunión plena y de elementos de comunión? Claro. Pero eso es sólo un reflejo del desorden de la situación. Y francamente, la FSSPX debería poder identificarse. Su propia relación con la Iglesia católica es igualmente, digamos, famosamente complicada, pero la doctrina subyacente de la Iglesia es la misma. Por un lado, el Vaticano II reafirma explícitamente en Orientalium Ecclesiarum que la santa Iglesia católica, que es el cuerpo místico de Cristo, está formada por los fieles que están orgánicamente unidos en el Espíritu Santo por la misma fe, los mismos sacramentos y el mismo gobierno. Por otro lado, en Lumen gentium, que se publicó el mismo día, el concilio también reconoce que muchos elementos de santificación y de verdad se encuentran fuera de esta estructura visible de la Iglesia, pero que esos elementos no están pensados para ser simplemente como, bueno, estás bien así.",
                original:
                  "And you’ll see the same argument often being made, but as a negative by some traditional Catholics. The term often appears in scare quotes in SSPX writings, including those of Lephev himself, or we’ll find the use of the phrase so – called separated brethren. But whether you’re a Protestant who thinks this was a good novelty or a traditionalist who thinks it’s a bad novelty, the truth is that it wasn’t a novelty at all. Terms like separated brethren to describe heretics and schismatics are older than Vatican II. They’re even older than Protestantism. And they’re based upon the theology of baptism. So let me explain. The 1917 Code of Canon law is they were very explicit. By baptism, a man has constituted a person in the church of Christ. When Popeis the 12th appeared to contradict that point in Mystici Corporate Christi, he quickly clarified in Mediatra Day that by the waters of baptism, as by common right, Christians are made members of the mystical body of Christ, the priest.\n\nThey’re made members even in the priesthood of Christ. That’s Christian doctrine. It’s rooted in the words of St. Paul that by one spirit, we were all baptized into one body. Jews are Greeks, slaves are free and all were made to drink of one spirit. So the Catholic church recognizes the validity of Orthodox and Protestant baptism so long as they’re done in the proper way and with the proper intention. The Council of Florence is even explicit that pagans and heretics validly baptize. And so there’s this sense in which we regard even baptized heretics and schismatics as our brothers. This was a point that the church father stressed. St. Optatus of Molevas rebuked the Donates schismatics by saying, “You will not have peace with us that is with your brothers. For you cannot escape being our brothers. Yo, whom together with us, one mother church, is born from the same bowels of her mysteries and whom God the Father has received in the same manner as sons of adoption.” And so we find Pope Lou the XII speaking of the Orthodox back in the late 1800s as our dissident brethren and expressing his hope that they may seek out more readily the embrace of their mother, the church.\n\nAlready then the Orthodox are understood in some sense as being brothers and true sons of Holy Mother Church. In the next year, he speaks the same way about the Anglicans. He ends an encyclical with a prayer. Oh, sorrowful mother intercede for our separated brethren. With us in the one true fold they may be united to the Supreme Shepherd, the vicar of thy son. In 1928, Pope Pius XI wrote an encyclical called mortalium animos, which I’m going to look at more closely because in it, he condemns some bad forms of ecumenism. We have a sort of unity of the expense of truth. But even in that document, he talks about how these separated children should return to the Apostolic Sea. And he speaks of our children both as those who belong to the Catholic community, but also those who are separated from us. So it is perfectly traditional and doctrinally Orthodox to recognize that Orthodox and Protestants are united to the church in one way through the sacrament of baptism.\n\nAnd much more than that in the case of the Orthodox, but that this union is not yet complete. So is it messy to talk about full communion and elements of communion? Sure. But that’s just a reflection of the messiness of the situation. And frankly, the SSPX should be able to relate. Their own relationship to the Catholic church is similarly kind of famously messy, but the underlying doctrine of the church is the same. On the one hand, Vatican II explicitly reams an Orientalium Ecclesiorum that the holy Catholic church, which is the mystical body of Christ, made up of the faithful who are organically united in the Holy Spirit by the same faith, the same sacraments and the same government. On the other hand, in Lumenginsium, which was released the same day, the council also recognizes that many elements of sanctification and of truth are found outside of this visible structure of the church, but that those elements aren’t meant to just be like, okay, you’re good enough.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Rom.5.12"],
      text: "«El pecado entró en el mundo por un hombre»: para Trento, este texto, leído como lo leyó siempre la Iglesia, es la razón por la que también los niños se bautizan «en remisión de los pecados» {c:T5can4|ses. V, can. 4}.",
      apologists: {
        arguments: [
          {
            title:
              "El Magisterio lee Romanos 5:12 como pecado original: el decreto de Trento se apoya en él (Broussard); Akin lo incluye entre los pasajes cuyo sentido Trento definió en parte (su introducción está en la línea del recuento, no en la línea citada)",
            quotes: [
              {
                speaker: "Karlo Broussard",
                work: "Using the Bible to Explain Original Sin",
                outlet: "Catholic Answers Magazine",
                date: "10 de enero de 2023",
                locator:
                  "13 párrafos: del párrafo que empieza «Original sin is a topic that divides Christians. But…» al que termina «…can reasonably infer that Aristotle is a corporeal being.»",
                url: "https://www.catholic.com/magazine/online-edition/using-the-bible-to-explain-original-sin",
                text: "El pecado original es un tema que divide a los cristianos. Pero la Iglesia tiene sólidos fundamentos bíblicos para defender la doctrina.\n\nEl pecado original es uno de esos temas que dividen a los cristianos. Quienes creemos en él profesamos que es esencial para la misión salvadora de Jesús. Es la razón por la que necesitamos “nacer de nuevo” para “ver el reino de Dios” (Juan 3:3). Quienes rechazan el pecado original podrían decir que no es justo que Dios nos castigue por algo que no hicimos, o simplemente podrían llamarlo “estúpido”, o negarse a creerlo porque no lo ven como parte de la revelación de Dios.\n\nEl Concilio de Trento definió el pecado original como “la muerte del alma”. El Catecismo de la Iglesia Católica reafirmó esta definición (403) y añadió un matiz clave: el pecado original se llama pecado “sólo en sentido analógico: es un pecado ‘contraído’ y no ‘cometido’, un estado y no un acto” (404).\n\nEl texto bíblico al que el Magisterio ha apelado como evidencia de esta creencia es Romanos 5:12: “Por tanto, como por un hombre entró el pecado en el mundo, y por el pecado la muerte, y así la muerte pasó a todos los hombres, por cuanto todos pecaron”. El Concilio de Trento apela a este versículo en su Decreto sobre el pecado original. El Catecismo de la Iglesia Católica también lo cita, junto con Romanos 5:18-19, en su enseñanza de que el pecado original es una consecuencia del pecado de Adán para toda la humanidad (402). Pero ¿con qué base el Magisterio interpreta Romanos 5:12 como una referencia al pecado original?\n\nPodemos empezar con una afirmación simple de o lo uno o lo otro: Pablo tiene que estar hablando del pecado personal o del pecado original. (El pecado personal son los pecados que nosotros mismos cometemos, ya sean veniales o mortales.) Ahora, si podemos mostrar que no es el pecado personal, entonces se seguiría que está hablando del pecado original.\n\n¿Cómo podríamos establecer que Pablo no está hablando del pecado personal?\n\nBueno, consideremos esta pregunta: ¿qué miembros de la raza humana no pueden posiblemente ser culpables de pecado personal? Claramente, una respuesta son los bebés. Otra son las personas con discapacidad mental severa. Entonces, si podemos mostrar que los bebés y las personas con discapacidad mental severa deben estar incluidos entre los “todos” que pecaron, se seguirá que Pablo está pensando en el pecado original.\n\nLa clave para probar que los bebés y las personas con discapacidad mental severa deben estar incluidos entre los “todos” es la conexión que Pablo establece entre muerte y pecado: “la muerte pasó a todos los hombres, por cuanto todos pecaron”. Fíjense en que Pablo traza un paralelo entre el “todos” que constituye el grupo que “pecó” y el “todos” que constituye el grupo al que “pasó la muerte”. Además, Pablo ve la muerte que se extiende a todos como un efecto del pecado que se extiende a todos.\n\n¿Mueren los bebés y las personas con discapacidad mental severa? Sí.\n\nDado el paralelo entre los dos grupos, se sigue que los bebés y las personas con discapacidad mental están incluidos en la categoría de “todos pecaron”. Y si ese es el caso, entonces Pablo no está pensando en el pecado personal aquí; está pensando en el pecado original.\n\nAhora, alguien podría objetar: “Si decimos que quien muere está incluido en la categoría de ‘todos pecaron’, entonces tenemos que decir que Jesús y María tendrían que estar incluidos allí, porque ambos murieron (o al menos Jesús, si queremos decir que María no murió). Pero decir que Jesús y María están incluidos en la categoría de ‘todos pecaron’ es absurdo.\n\nEn respuesta, esto sería cierto si y sólo si no tuviéramos otra fuente de conocimiento, además de la humanidad de Jesús y de María, para saber que ellos eran excepciones a la regla.\n\nPor ejemplo, podemos decir que pertenece a la naturaleza de un ser humano, como ser corpóreo —un ser con un cuerpo mortal—, morir. Entonces, cuando yo, sabiendo esto, observo que Aristóteles ha muerto, puedo inferir razonablemente que Aristóteles es un ser corpóreo.",
                original:
                  "Original sin is a topic that divides Christians. But the Church has strong biblical grounds to defend the doctrine.\n\nOriginal sin is one of those topics that divide Christians. Those of us who believe in it profess that it’s essential to Jesus’ saving mission. It’s the reason why we need to be “born again” to “see the kingdom of God” (John 3:3). Those who reject original sin might say it’s not fair for God to punish us for something we didn’t do—or they might just call it “stupid,” or refuse to believe it because they don’t see it as part of God’s revelation.\n\nThe Council of Trent defined original sin as “the death of the soul.” The Catechism of the Catholic Church reaffirmed this definition (403) and added a key nuance: original sin is called sin “only in an analogical sense: it is a sin ‘contracted’ and not ‘committed’—a state and not an act” (404).\n\nThe biblical text that the Magisterium has appealed to as evidence for this belief is Romans 5:12: “Therefore as sin came into the world through one man and death through sin, and so death spread to all men because all men sinned.” The Council of Trent appeals to this verse in its Decree Concerning Original Sin. The Catechism of the Catholic Church appeals to it, too, along with Romans 5:18-19, in its teaching that original sin is a consequence of Adam’s sin for all of humanity (402). But where does the Magisterium get off interpreting Romans 5:12 as a reference to original sin?\n\nWe can start by making a simple either-or statement: Paul has to be talking about either personal sin or original sin. (Personal sin means the sins we commit ourselves, whether they’re venial or mortal.) Now, if we can show that it’s not personal sin, then it would follow that he’s talking about original sin.\n\nHow might we establish that Paul is not talking about personal sin?\n\nWell, consider this question: which members of the human race can’t possibly be guilty of personal sin? Clearly, one answer is infants. Another is the severely mentally handicapped. So if we can show that infants and the severely mentally handicapped must be numbered among the “all” who sinned, then it will follow that Paul is thinking of original sin.\n\nThe key for proving that infants and the severely mentally handicapped must be numbered among the “all” is the connection that Paul makes between death and sin: “death spread to all men because all men sinned.” Notice that Paul draws a parallel between the “all” that constitutes the group who “have sinned” and the “all” that constitutes the group to whom “death spread.” Moreover, Paul sees the death that extends to all as an effect of the sin that extends to all.\n\nDo infants and the severely mentally handicapped die? Yes.\n\nGiven the parallel between the two groups, it follows that infants and the mentally handicapped are included within the category of “all have sinned.” And if that’s the case, then Paul is not thinking of personal sin here; he’s thinking of original sin.\n\nNow, someone might counter, “If we say that whoever dies is included within the category of ‘all have sinned,’ then we must say that Jesus and Mary would have to be included there because they both died (or at least Jesus, if we want to say Mary didn’t die). But to say that Jesus and Mary are included in the “all have sinned” category is absurd.\n\nIn response, this would be true if and only if we didn’t have a source of knowledge other than Jesus’ and Mary’s humanity for knowing that they were exceptions to the rule.\n\nFor example, we can say it belongs to the nature of a human being as a corporeal being—a being with a mortal body—to die. So when I, knowing this, observe that Aristotle has died, I can reasonably infer that Aristotle is a corporeal being.",
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
      refs: ["Acts.16.15", "Acts.16.33", "Acts.18.8", "1Cor.1.16"],
      text: "Casas enteras recibieron el bautismo: el Catecismo considera «muy posible» que desde la predicación apostólica se bautizara también a los niños {c:CEC1252|Catecismo 1252}.",
      apologists: {
        arguments: [
          {
            title: "Se bautizaron familias enteras, lo que no excluye a los niños pequeños",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "Infant Baptism and the New Testament",
                outlet: "A Daily Defense, catholic.com",
                date: "16 de marzo de 2023",
                locator:
                  "6 párrafos: del párrafo que empieza «The New Testament nowhere restricts baptism to people who…» al que termina «…been buried with him in baptism” (Col. 2:11–12, LEB).»",
                url: "https://www.catholic.com/audio/ddp/infant-baptism-and-the-new-testament",
                text: "El Nuevo Testamento en ningún lugar restringe el bautismo a personas por encima de cierta edad. De hecho, leemos que se bautizaron hogares enteros, y hay indicios de que el bautismo se daba a los hijos de los creyentes, sin importar su edad.\n\nEl Nuevo Testamento nunca establece un requisito de edad para el bautismo. La mayoría de las personas que vemos bautizadas en sus páginas son adultos, pero esto se debe a que el cristianismo era un movimiento nuevo, y la mayoría de sus conversos naturalmente habrían sido adultos.\n\nEl Nuevo Testamento también registra que hogares enteros fueron bautizados (Hechos 10:47–11:17, 16:15, 30–34, 18:8, 1 Cor. 1:16). Esto establece el principio de que hogares enteros fueron bautizados a la vez, y no excluye a los niños pequeños. De hecho, Lucas registra: “Le traían incluso a los bebés para que los tocara; y viendo esto, los discípulos los reprendían. Mas Jesús, llamándolos, dijo: Dejad que los niños vengan a mí, y no se lo impidáis, porque de los tales es el reino de Dios. De cierto os digo que el que no recibe el reino de Dios como un niño, no entrará en él” (Lucas 18:15–17).\n\nLos cristianos, reflexionando sobre este pasaje, reconocieron que si el reino pertenece a los niños —“incluso los bebés”—, entonces son destinatarios apropiados del bautismo, igual que los adultos que están dispuestos a recibir el reino como un niño y a ser bautizados.\n\nAdemás, la expectativa judía de la época era que los hijos de los creyentes compartieran junto con sus padres las bendiciones de la alianza. Así, en Pentecostés Pedro dijo a la multitud: “Arrepiéntanse, y bautícese cada uno de ustedes en el nombre de Jesucristo para perdón de sus pecados; y recibirán el don del Espíritu Santo. Porque la promesa es para ustedes y para sus hijos” (Hechos 2:38–39).\n\nComo rito de iniciación cristiana, el bautismo es el equivalente cristiano de la circuncisión, el rito de iniciación judío. Pablo identifica explícitamente el bautismo como “la circuncisión de Cristo”, diciendo a sus lectores: “En él también fueron circuncidados con una circuncisión no hecha por manos, por el despojo del cuerpo de la carne, por la circuncisión de Cristo, habiendo sido sepultados con él en el bautismo” (Col. 2:11–12, LEB).",
                original:
                  "The New Testament nowhere restricts baptism to people who are above a certain age. In fact, we read of entire households being baptized, and there are indications that baptism was given to the children of believers, regardless of their age.\n\nThe New Testament never establishes an age requirement for baptism. Most of the people we see being baptized in its pages are adults, but this is because Christianity was a new movement, and most of its converts would naturally have been adults.\n\nThe New Testament also records entire households being baptized (Acts 10:47–11:17, 16:15, 30–34, 18:8, 1 Cor. 1:16). This establishes the principle that whole households were baptized at once, and it does not exclude young children. In fact, Luke records: “Now they were bring-ing even infants to [Jesus] that he might touch them; and when the disciples saw it, they rebuked them. But Jesus called them to him, saying, “Let the children come to me, and do not hinder them; for to such be- longs the kingdom of God. Truly, I say to you, whoever does not receive the kingdom of God like a child shall not enter it” (Luke 18:15–17).\n\nChristians, reflecting on this passage, recognized that if the kingdom belongs to children—“even infants”—then they are appropriate recipients of baptism, just like adults who are willing to receive the kingdom like a child and be baptized.\n\nFurther, the Jewish expectation at the time was that the children of believers would share in the blessings of the covenant along with their parents. Thus on Pentecost Peter told the crowds: “Repent, and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins; and you shall receive the gift of the Holy Spirit. For the promise is to you and to your children” (Acts 2:38–39).\n\nAs the Christian initiation ritual, baptism is the Christian equivalent of circumcision, the Jewish initiation ritual. Paul explicitly identifies baptism as “the circumcision of Christ,” telling his readers: “In [Jesus] also you were circumcised with a circumcision not made by hands, by the removal of the body of the flesh, by the circumcision of Christ, having been buried with him in baptism” (Col. 2:11–12, LEB).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Argumento B (añadido por B5) · Se bautizaron familias enteras (Lidia, el carcelero, Estéfanas); presumiblemente había niños entre ellos",
            quotes: [
              {
                speaker: "Karl Keating",
                work: "Should (or Can) Babies Be Baptized?",
                outlet: "Catholic Answers Magazine",
                date: "24 de agosto de 2015",
                locator:
                  "3 párrafos: del párrafo que empieza «Lydia, identified as “a seller of purple goods” and…» al que termina «…because of intellectual incapacity, why no mention of that?»",
                url: "https://www.catholic.com/magazine/online-edition/should-or-can-babies-be-baptized",
                text: "Lidia, identificada como “vendedora de púrpura” y “adoradora de Dios”, según se relata, “escuchaba lo que decía Pablo. Y cuando fue bautizada, con su casa” (Hechos 16:14-15).\n\nUnos versículos después viene la historia del encarcelamiento de Pablo y Silas. Tras su liberación milagrosa, el carcelero les preguntó: “¿Qué debo hacer para ser salvo?” “Y le hablaron la palabra del Señor, a él y a todos los que estaban en su casa … y él fue bautizado en seguida, con toda su familia” (Hechos 16:30-33).\n\nEn su introducción a los corintios, Pablo señaló: “También bauticé a la familia de Estéfanas” (1 Cor. 1:16). En este caso y en las otras dos ocasiones se bautizó a familias o casas enteras. Presumiblemente, estas incluían niños. Si Pablo hubiera bautizado sólo a los miembros adultos de las familias, esperaríamos que los relatos señalaran, por ejemplo, que Lidia “y su marido” fueron bautizados, o el carcelero “y su mujer”, o Estéfanas “y su hermano”, o alguna expresión similar. Los términos “familia” y “casa” implicaban entonces, como hoy, al menos dos generaciones. Si efectivamente se incluyó a niños en estos bautismos múltiples, y si se excluyó a los niños más pequeños por incapacidad intelectual, ¿por qué no hay ninguna mención de eso?",
                original:
                  "Lydia, identified as “a seller of purple goods” and “a worshiper of God,” is reported to have given “heed to what was said by Paul. And when she was baptized, with her household” (Acts 16:14-15).\n\nA few verses later comes the story of the imprisonment of Paul and Silas. After their miraculous release, their jailer asked them, “What must I do to be saved?” “And they spoke the word of the Lord to him and to all that were in his house . . . and he was baptized at once, with all his family” (Acts 16:30-33).\n\nIn his introductory remarks to the Corinthians, Paul remarked, “I did baptize also the household of Stephanas” (1 Cor. 1:16). In this and the other two instances entire families or households were baptized. Presumably these included children. If Paul had baptized only the adult members of the families, we would have expected the accounts to note, for instance, that Lydia “and her husband” were baptized, or the jailer “and his wife,” or Stephanas “and his brother,” or some such words. The terms “family” and “household” implied then, as they do today, at least two generations. If children indeed were included in these multiple baptisms, and if the youngest children were excluded because of intellectual incapacity, why no mention of that?",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Mark.10.14"],
      text: "«Dejad los niños venir, y no se lo estorbéis»: el Catecismo lo cita para la comunión de los niños en Oriente y para la esperanza sobre los niños que mueren sin bautismo {c:CEC1244|Catecismo 1244} {c:CEC1261|Catecismo 1261}.",
      apologists: {
        arguments: [
          {
            title: "Si el reino pertenece a los niños, el bautismo, la puerta de entrada, no debe negárseles",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "The New Covenant Argument Against Baptist Theology",
                outlet: "Shameless Popery",
                date: "4 de agosto de 2026",
                locator: "Ver la página enlazada",
                url: "https://www.catholic.com/audio/sp/the-new-covenant-argument-against-baptist-theology",
                text: "que la alianza debe estar abierta a los pequeños porque el reino está abierto a los pequeños. Y el bautismo es la puerta por la que entramos en la Iglesia, entramos en el reino. Y por eso, no se lo niegues a los bebés ni a los niños pequeños.",
                original:
                  "that the covenant should be open to little kids because the kingdom is open to little kids. And baptism is the door in which we enter the church, enter the kingdom. And therefore, don’t deny it to infants and small children.",
                translation: "ai-assisted",
              },
              {
                speaker: "Jimmy Akin",
                work: "Infant Baptism and the New Testament",
                outlet: "A Daily Defense, catholic.com",
                date: "16 de marzo de 2023",
                locator:
                  "6 párrafos: del párrafo que empieza «The New Testament nowhere restricts baptism to people who…» al que termina «…been buried with him in baptism” (Col. 2:11–12, LEB).»",
                url: "https://www.catholic.com/audio/ddp/infant-baptism-and-the-new-testament",
                text: "El Nuevo Testamento en ningún lugar restringe el bautismo a personas por encima de cierta edad. De hecho, leemos que se bautizaron hogares enteros, y hay indicios de que el bautismo se daba a los hijos de los creyentes, sin importar su edad.\n\nEl Nuevo Testamento nunca establece un requisito de edad para el bautismo. La mayoría de las personas que vemos bautizadas en sus páginas son adultos, pero esto se debe a que el cristianismo era un movimiento nuevo, y la mayoría de sus conversos naturalmente habrían sido adultos.\n\nEl Nuevo Testamento también registra que hogares enteros fueron bautizados (Hechos 10:47–11:17, 16:15, 30–34, 18:8, 1 Cor. 1:16). Esto establece el principio de que hogares enteros fueron bautizados a la vez, y no excluye a los niños pequeños. De hecho, Lucas registra: “Le traían incluso a los bebés para que los tocara; y viendo esto, los discípulos los reprendían. Mas Jesús, llamándolos, dijo: Dejad que los niños vengan a mí, y no se lo impidáis, porque de los tales es el reino de Dios. De cierto os digo que el que no recibe el reino de Dios como un niño, no entrará en él” (Lucas 18:15–17).\n\nLos cristianos, reflexionando sobre este pasaje, reconocieron que si el reino pertenece a los niños —“incluso los bebés”—, entonces son destinatarios apropiados del bautismo, igual que los adultos que están dispuestos a recibir el reino como un niño y a ser bautizados.\n\nAdemás, la expectativa judía de la época era que los hijos de los creyentes compartieran junto con sus padres las bendiciones de la alianza. Así, en Pentecostés Pedro dijo a la multitud: “Arrepiéntanse, y bautícese cada uno de ustedes en el nombre de Jesucristo para perdón de sus pecados; y recibirán el don del Espíritu Santo. Porque la promesa es para ustedes y para sus hijos” (Hechos 2:38–39).\n\nComo rito de iniciación cristiana, el bautismo es el equivalente cristiano de la circuncisión, el rito de iniciación judío. Pablo identifica explícitamente el bautismo como “la circuncisión de Cristo”, diciendo a sus lectores: “En él también fueron circuncidados con una circuncisión no hecha por manos, por el despojo del cuerpo de la carne, por la circuncisión de Cristo, habiendo sido sepultados con él en el bautismo” (Col. 2:11–12, LEB).",
                original:
                  "The New Testament nowhere restricts baptism to people who are above a certain age. In fact, we read of entire households being baptized, and there are indications that baptism was given to the children of believers, regardless of their age.\n\nThe New Testament never establishes an age requirement for baptism. Most of the people we see being baptized in its pages are adults, but this is because Christianity was a new movement, and most of its converts would naturally have been adults.\n\nThe New Testament also records entire households being baptized (Acts 10:47–11:17, 16:15, 30–34, 18:8, 1 Cor. 1:16). This establishes the principle that whole households were baptized at once, and it does not exclude young children. In fact, Luke records: “Now they were bring-ing even infants to [Jesus] that he might touch them; and when the disciples saw it, they rebuked them. But Jesus called them to him, saying, “Let the children come to me, and do not hinder them; for to such be- longs the kingdom of God. Truly, I say to you, whoever does not receive the kingdom of God like a child shall not enter it” (Luke 18:15–17).\n\nChristians, reflecting on this passage, recognized that if the kingdom belongs to children—“even infants”—then they are appropriate recipients of baptism, just like adults who are willing to receive the kingdom like a child and be baptized.\n\nFurther, the Jewish expectation at the time was that the children of believers would share in the blessings of the covenant along with their parents. Thus on Pentecost Peter told the crowds: “Repent, and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins; and you shall receive the gift of the Holy Spirit. For the promise is to you and to your children” (Acts 2:38–39).\n\nAs the Christian initiation ritual, baptism is the Christian equivalent of circumcision, the Jewish initiation ritual. Paul explicitly identifies baptism as “the circumcision of Christ,” telling his readers: “In [Jesus] also you were circumcised with a circumcision not made by hands, by the removal of the body of the flesh, by the circumcision of Christ, having been buried with him in baptism” (Col. 2:11–12, LEB).",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Pet.3.20"],
      text: "El Catecismo lee el arca de Noé, en la que «unos pocos […] fueron salvados a través del agua», como prefiguración de la salvación por el bautismo {c:CEC1219|Catecismo 1219}.",
      apologists: {
        arguments: [
          {
            title: "El «bautismo … ahora los salva» de Pedro no puede ser un mero símbolo",
            quotes: [
              {
                speaker: "Karlo Broussard",
                work: "Is Baptism Just a Symbol of Our Salvation?",
                outlet: "Catholic Answers Magazine",
                date: "13 de noviembre de 2020",
                locator:
                  "10 párrafos: del párrafo que empieza «Peter states in verse twenty-one the real purpose of…» al que termina «…the flood wouldn’t tell us anything significant about baptism.»",
                url: "https://www.catholic.com/magazine/online-edition/is-baptism-just-a-symbol-of-our-salvation",
                text: "Pedro dice en el versículo veintiuno que el propósito real del bautismo es la “apelación” o “respuesta” de una buena conciencia hacia Dios. El creyente hace la promesa de que ahora seguirá a Jesucristo como su discípulo obediente, unido al Señor en su muerte, sepultura y resurrección. El bautismo es un símbolo apropiado de esta realidad, como confesión pública y como acto en el que la persona bautizada declara abiertamente que ahora confía en Jesucristo para el perdón de los pecados, con una promesa o una apelación a tener una conciencia limpia, ahora purificada de toda culpa, condena y acusación, que da una buena respuesta delante de Dios.\n\nEntonces, ¿esta lectura alternativa de 1 Pedro 3:20-21 socava la creencia cristiana común, sostenida por la Iglesia católica, de que el bautismo salva?\n\nLa afirmación de Pedro, “una apelación a Dios para una conciencia limpia” (v.21), que Baker interpreta como una promesa que hacemos de seguir a Jesús, es una de dos afirmaciones con las que Pedro intenta explicar lo que quiere decir cuando afirma: “El bautismo ahora los salva”. La otra afirmación explicativa, que viene primero y se coloca en oposición a la otra, es “no como una remoción de la suciedad del cuerpo”. Esto crea algunos problemas para la interpretación de Baker de que el bautismo no nos salva y es meramente un símbolo de nuestra promesa de seguir a Jesús. Primero, tal interpretación implicaría que las afirmaciones explicativas de Pedro contradicen directamente su punto principal: “El bautismo ahora los salva”.\n\nEs poco razonable pensar que Pedro haría una afirmación tan explícita sobre la eficacia salvífica del bautismo y que luego, inmediatamente después, negaría esa eficacia en sus observaciones explicativas. Si Pedro quisiera que lo que nos salva fuera la promesa, y no el bautismo, entonces la promesa o apelación no habría aparecido en una afirmación explicativa. Habría sido la afirmación principal, en lugar de la que claramente es: “El bautismo ahora los salva”.\n\nSegundo, la interpretación de Baker nos llevaría a pensar que la afirmación “como una apelación a Dios para una conciencia limpia” está destinada a oponerse a la afirmación “El bautismo ahora nos salva”. Pero eso no es lo que dice Pedro. Pedro contrasta la afirmación “como una apelación a Dios para una conciencia limpia” con la idea de que el bautismo nos salva “como una remoción de la suciedad del cuerpo”.\n\nEsto nos lleva a un tercer problema con la interpretación de Baker. Baker reconoce con razón que la negación por parte de Pedro de una limpieza externa implica la afirmación de una limpieza interna: una “limpieza de la culpa”, como él la llama. Donde Baker se equivoca es en que separa esta limpieza interna del bautismo, diciendo que el bautismo es meramente un símbolo de la limpieza interna. Y ahí está el problema. Pedro no contrasta la limpieza externa con la interna de manera abstracta e independiente del bautismo. Él niega que el bautismo sea “una remoción de la suciedad del cuerpo”, con lo que implica que el bautismo es una limpieza interna.\n\nSi el bautismo fuera meramente un símbolo, como afirma Baker, entonces el contraste de Pedro entre limpieza externa e interna, y cómo ambas se relacionan con el bautismo, no tendría sentido. No habría necesidad de que Pedro planteara tal contraste si el bautismo no implicara una limpieza interna. De hecho, no habría necesidad de asociar la limpieza con el bautismo en absoluto.\n\nOtro problema con la interpretación de Baker, y el último que consideraremos aquí, es que no se corresponde con la lógica de la comparación de Pedro entre el bautismo y la historia de Noé y el diluvio. Pedro introduce sus comentarios sobre el bautismo diciendo: “El bautismo, que corresponde a esto” (v.21). ¿Cuál es el “esto” al que se refiere Pedro?\n\nEs el evento salvador de Noé y su familia en el diluvio. Como se citó arriba, el versículo anterior, que prepara sus comentarios sobre el bautismo, dice: “la paciencia de Dios esperaba en los días de Noé, mientras se construía el arca, en la cual unas pocas personas, es decir, ocho, fueron salvadas por medio del agua” (v.20). Es la salvación por medio del agua a la que Pedro ve que corresponde el bautismo.\n\nAhora bien, si la afirmación de Baker de que Pedro pretende que el bautismo sea meramente un símbolo fuera cierta, perderíamos el paralelo con Noé y su familia salvados por medio del agua. Tener el agua como lo único que conecta el bautismo con la historia de Noé y el diluvio no nos diría nada significativo sobre el bautismo.",
                original:
                  "Peter states in verse twenty-one the real purpose of baptism is the “appeal” or “answer” of a good conscience toward God. The believer makes the pledge that He will now follow Jesus Christ as His obedient disciple united with the Lord in His death, burial, and resurrection. Baptism is an appropriate symbol of this reality for a public confession and act upon the one baptized openly declaring he or she now trusts in Jesus Christ for the forgiveness of sins with a pledge or an appeal to have a clear conscience now, cleansed from all guilt, condemnation, and accusation, that provides a good answer before God.\n\nSo, does this alternative reading of 1 Peter 3:20-21 undermine the common Christian belief, which is held by the Catholic Church, that baptism saves?\n\nPeter’s statement, “an appeal to God for a clear conscience” (v.21), which Baker interprets as a pledge we make to follow Jesus, is one of two statements that Peter intends to explain what he means when he says, “Baptism now saves you.” The other explanatory statement, which comes first and is set in opposition with the other, is “not as a removal of dirt from the body.” This creates a few problems for Baker’s interpretation that baptism doesn’t save us and is merely a symbol of our pledge to follow Jesus. First, such an interpretation would entail Peter’s explanatory statements directly contradicting his principal point: “Baptism now saves you.”\n\nIt’s unreasonable to think Peter would make such an explicit statement about the salvific efficacy of baptism and then immediately afterward deny such efficacy in his explanatory remarks. If Peter meant for the pledge to be what saves us, and not baptism, then the pledge or appeal would not have appeared in an explanatory statement. It would have been the principal statement rather than the one that clearly is: “Baptism now saves you.”\n\nSecond, Baker’s interpretation would have us think that the statement, “as an appeal to God for a clear conscience,” is meant to oppose the statement “Baptism now saves us.” But that’s not what Peter says. Peter contrasts the statement, “as an appeal to God for a clear conscience,” with the idea that baptism saves us “as a removal of dirt from the body.”\n\nThis leads us a third problem with Baker’s interpretation. Baker rightfully recognizes that Peter’s denial of an external cleansing implies the affirmation of an internal cleansing: a “cleansing of guilt,” as he puts it. Where Baker goes wrong is that he divorces this internal cleansing from baptism, saying that baptism is merely a symbol of the internal cleansing. And therein lies the problem. Peter doesn’t contrast external cleansing from internal cleansing in an abstract way independent of baptism. He denies baptism as “a removal of dirt from the body,” thereby implying that baptism is an internal cleansing.\n\nIf baptism were merely a symbol, as Baker asserts, then Peter’s contrast of external cleansing and internal cleansing, and how both relate to baptism, would make no sense. There would be no need for Peter to set up such a contrast if baptism didn’t entail an internal cleansing. In fact, there would be no need to associate cleansing with baptism at all.\n\nAnother problem with Baker’s interpretation, and the last that we’ll consider here, is that it doesn’t correspond with the logic of Peter’s comparison between baptism and the story of Noah and the flood. Peter introduces his comments about baptism by saying, “Baptism, which corresponds to this” (v.21). What is the “this” that Peter is referring to?\n\nIt’s the saving event of Noah and his family in the flood. As quoted above, the preceding verse, which tees up his comments about baptism, reads, “God’s patience waited in the days of Noah, during the building of the ark, in which a few, that is, eight persons, were saved through water” (v.20). It’s the salvation through water to which Peter sees baptism corresponding.\n\nNow, if Baker’s assertion that Peter intends baptism to be merely a symbol were true, then we’d lose the parallel with Noah and his family being saved through water. Having water as the only thing that connects baptism to the story of Noah and the flood wouldn’t tell us anything significant about baptism.",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                work: "Does Baptism Save Us?",
                outlet: "Shameless Popery",
                date: "14 de noviembre de 2024",
                locator:
                  "4 párrafos: del párrafo que empieza «That’s pretty clear from context. If it wasn’t clear…» al que termina «…which is the breath of life from under heaven.»",
                url: "https://www.catholic.com/audio/sp/does-baptism-save-us",
                text: "Eso es bastante claro por el contexto. Si no fuera lo bastante claro, está expresado con bastante explicitud en los versículos 46 y 47, que hablan de la iglesia primitiva: día a día asistían juntos al templo y partían el pan en sus casas, comían con corazones alegres y generosos, alababan a Dios y tenían favor con todo el pueblo, y el Señor añadía cada día a su número a los que iban siendo salvos. Así que el “añadir a su número” aparece en Hechos dos, primero en el versículo 41 y luego en el 47, y en el 47 trata bastante explícitamente de ser añadido a la iglesia, y el 41 también trata bastante obviamente de ser añadido a la iglesia. Entonces, ¿el bautismo es la puerta de la iglesia según Hechos? Sí. Igualmente, san Pablo; volvamos a él. Dice: porque en Cristo Jesús todos ustedes son hijos de Dios por la fe, pues todos los que fueron bautizados en Cristo se han revestido de Cristo.\n\nRecuerden ese pasaje que vimos antes, donde no ve una tensión entre decir que esto sucede por la fe y decir que sucede por el bautismo; pero noten que, según Pablo, nuestra entrada en Cristo es por el bautismo. Volvamos a las cuatro preguntas con las que empezamos. ¿El bautismo nos limpia del pecado? Sí. ¿Nacemos de nuevo en el bautismo? Sí. ¿Recibimos el Espíritu Santo en el bautismo? Sí. ¿Y el bautismo es la entrada al pueblo de Dios? Sí. Entonces parece que las promesas de Ezequiel 36 se cumplen en el bautismo, bastante explícitamente en el Nuevo Testamento. Pero quiero volver a una frase que pasé un poco por alto. Recuerden cuando hablábamos de Hechos dos, versículo 47: el Señor añadía a su número cada día a los que iban siendo salvos. Eso parece decir que el bautismo no es solo la puerta a la iglesia, sino la puerta a la salvación.\n\nQue el bautismo es el comienzo del proceso de salvación, o que el bautismo salva en cierto sentido. Y por supuesto, si son verdaderas las cuatro promesas que vimos a través de Ezequiel, eso tendría mucho sentido: llegar a ser el pueblo de Dios, tener a Dios como Padre y todo lo demás; eso suena a lo que queremos decir cuando hablamos de ser salvados. Entonces deberíamos preguntarnos, lo llamaremos una pregunta extra: ¿el bautismo los salva? El punto de partida obvio está en 1 Pedro, capítulo 3, donde se nos dice explícitamente que sí, en contexto. San Pedro habla de la paciencia de Dios en los días de Noé, durante la construcción del arca, en la que unas pocas personas, es decir, ocho, fueron salvadas por medio del agua. Y luego dice: el bautismo, que corresponde a esto, ahora los salva. ¿Cómo los salva? Ya lo vimos: es una apelación a Dios para una conciencia limpia.\n\nNo es que uno se frote muy fuerte y lave los pecados. Es más bien que, en esta postura del bautismo, ya sea que se trate de un adulto o de un niño (y esta es una de las razones por las que un niño puede ser bautizado), no es algo que uno hace por Dios, sino algo que Dios hace por uno. Por eso cualquiera puede recibirlo. Es una apelación a Dios para una conciencia limpia. Noten que Noé y sus hijos estaban en el arca. Uno no tiene que haber hecho todo el trabajo de construir el arca. Estar en el arca no es lo que normalmente se llamaría una buena obra, pero este es el motivo que san Pedro usa para ayudarnos a entender el bautismo. Volvamos brevemente al Génesis para ver de qué se trataba todo eso. La gente se había vuelto muy perversa. Y así Dios dice en Génesis 6, versículos 17 a 18: he aquí que yo traigo un diluvio de aguas sobre la tierra, para destruir toda carne en la que hay aliento de vida debajo del cielo.",
                original:
                  "That’s pretty clear from context. If it wasn’t clear enough, you have it spelled out pretty explicitly in verses 46 to 47 talking about the early church, how day by day attending the temple together and breaking bread in their homes, they partook of food with glad and generous hearts praising God and having favor with all the people and the Lord added to their number day by day those who are being saved. So the added to their number is used in Acts two, first in verse 41 and then in verse 47 and in verse 47 is pretty explicitly about being added to the church, and verse 41 is also pretty obviously about being added to the church. So is baptism the doorway to the church according to Acts? Yes, likewise St. Paul, let’s go back to him. He says, for in Christ Jesus, you’re all sons of God through faith for as many as you as were baptized into Christ, have put on Christ.\n\nRemember that’s that passage we looked at before where he doesn’t think there’s a tension between saying this happens through faith and that it happens through baptism, but notice that our entry into Christ is through baptism according to Paul. So let’s go back to those four questions we started with. Does baptism cleanse us from sin? Yep. Are we born again in baptism? Yep. Do we receive the Holy Spirit in baptism? Yep. And is baptism or entrances under the people of God? Yeah. So it looks like the Ezekiel 36 promises are fulfilled in baptism pretty explicitly in the New Testament, but I want to go back to a line that I kind of glossed over. Remember when we were talking about Acts two in verse 47, the Lord added to their number day by day those who were being saved. That looks like it’s saying baptism isn’t just the doorway to the church, but it’s the doorway to salvation.\n\nThat baptism is the beginning of the process of being saved or that baptism saves you in some sense. And of course if the four promises that we saw through Ezekiel are true, that would certainly make sense and becoming the people of God and having God as our father and all of this, that sounds like what we mean by becoming saved. So we should ask, we’ll call it a bonus question, does baptism save you? And the obvious starting point is in first Peter chapter three, where we’re explicitly told yes in context. St. Peter is talking about God’s patience in the days of Noah during the building of the ark, in which a few that is eight persons were saved through water. And then he says, baptism, which corresponds to this now saves you. Now we already saw how does it save you? It’s an appeal to God for a clear conscience.\n\nIt’s not you just scrub really hard and you wash the sins away. It’s rather that in this posture of baptism, whether it’s you or a child, this is one of the reasons a child can be baptized. It’s not something you are doing for God, it’s something God is doing for you. And so anyone can receive that. It’s an appeal to God for a clear conscience. Notice Noah and his children were on the arc. You don’t have to have done all of the work of building the arc. Being on the arc is not what one would normally call a good work, but this is the motif that St. Peter uses to help us understand baptism. So let’s go back briefly to Genesis to see what that was all about. People have gotten really wicked. And so God says in Genesis six, verse 17 to 18, behold, I’ll bring a flood of waters upon the earth to destroy all flesh in which is the breath of life from under heaven.",
                translation: "ai-assisted",
              },
              {
                speaker: "Jimmy Akin",
                work: "Baptism and Salvation",
                outlet: "A Daily Defense, catholic.com",
                date: "20 de enero de 2023",
                locator:
                  "3 párrafos: del párrafo que empieza «The New Testament links baptism to salvation. Baptism is…» al que termina «…baptized through no fault of their own (CCC 1257–61).»",
                url: "https://www.catholic.com/audio/ddp/baptism-and-salvation-2",
                text: "El Nuevo Testamento vincula el bautismo con la salvación. El bautismo no es sólo un rito. Comunica las gracias de Dios, como el perdón de los pecados y el don del Espíritu Santo. Así, Pedro le dijo a la multitud el día de Pentecostés: “Arrepiéntanse, y bautícese cada uno de ustedes en el nombre de Jesucristo para perdón de sus pecados; y recibirán el don del Espíritu Santo” (Hechos 2:38). De manera similar, cuando se convirtió a la fe, a Pablo se le dijo: “Levántate, bautízate y lava tus pecados, invocando su nombre” (Hechos 22:16). En sus cartas, Pedro conectó explícitamente el bautismo con la salvación. Comparando el bautismo con cómo ocho personas fueron salvadas en el Arca de Noé, escribe: “El bautismo, que corresponde a esto, ahora los salva, no como remoción de la suciedad del cuerpo sino como una apelación a Dios por una conciencia limpia, mediante la resurrección de Jesucristo” (1 Pedro 3:21). El bautismo no salva porque nos haga físicamente más limpios, dice. Más bien, “ahora los salva” porque implica “una apelación a Dios por una conciencia limpia”, que se nos concede “mediante la resurrección de Jesucristo”. El Nuevo Testamento también indica que el bautismo es el medio por el cual somos regenerados o “nacemos de nuevo”. Jesús enseñó: “De cierto, de cierto te digo que el que no nace de nuevo, no puede ver el reino de Dios. . . . El que no nace de agua y del Espíritu, no puede entrar en el reino de Dios” (Juan 3:3, 5). Pablo está de acuerdo, diciendo que “nos salvó, no por obras de justicia que nosotros hubiéramos hecho, sino por su misericordia, por el lavamiento de la regeneración y renovación en el Espíritu Santo” (Tito 3:5). Así, el bautismo nos coloca en el estado de salvación.\n\nCONSEJO\n\nEl bautismo es una necesidad normativa, pero no absoluta. Rechazar deliberadamente el bautismo es rechazar la salvación en los términos que Dios la ofrece, pero Dios puede salvar a quienes no están bautizados sin culpa propia (CCC 1257–61).",
                original:
                  "The New Testament links baptism to salvation. Baptism is not just a ritual. It communicates God’s graces, such as the forgiveness of sins and the gift of the Holy Spirit. Thus Peter told the crowd on the day of Pentecost: “Repent, and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins; and you shall receive the gift of the Holy Spirit” (Acts 2:38). Similarly, when he was converted to the Faith, Paul was told: “Rise and be baptized, and wash away your sins, calling on his name” (Acts 22:16). In his letters, Peter explicitly connected baptism with salvation. Comparing baptism to how eight people were saved in Noah’s Ark, he writes: “Baptism, which corresponds to this, now saves you, not as a removal of dirt from the body but as an appeal to God for a clear conscience, through the resurrection of Jesus Christ” (1 Pet. 3:21). Baptism does not save because it makes us physically cleaner, he says. Rather it “now saves you” because it involves “an appeal to God for a clear conscience,” which is granted to us “through the resurrection of Jesus Christ.” The New Testament also indicates that baptism is the means by which we are regenerated or “born again.” Jesus taught: “Truly, truly, I say to you, unless one is born anew, he cannot see the kingdom of God. . . . Unless one is born of water and the Spirit, he cannot enter the kingdom of God” (John 3:3, 5). Paul agrees, saying that “he saved us, not because of deeds done by us in righteousness, but in virtue of his own mercy, by the washing of regeneration and renewal in the Holy Spirit” (Titus 3:5). Baptism thus places us in the state of salvation.\n\nTIP\n\nBaptism is a normative necessity but not an absolute one. To deliberately refuse baptism is to refuse salvation on the terms God offers it, but God can save those who are not baptized through no fault of their own (CCC 1257–61).",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Pet.3.21"],
      text: "El Catecismo cita este versículo para decir que «el diluvio y el arca de Noé prefiguraban la salvación por el Bautismo» {c:CEC1094|Catecismo 1094}, y ve la Iglesia «prefigurada por el Arca de Noé que es la única que salva del diluvio» {c:CEC845|Catecismo 845}.",
      apologists: {
        intro:
          "Los apologistas católicos responden que el paréntesis no niega que el bautismo salve, sino que explica cómo salva: no como un baño que quita la suciedad del cuerpo, sino por dentro, «por la resurrección de Jesucristo».",
        arguments: [
          {
            title: "Dice cómo salva el bautismo, no que no salve",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                outlet: "Shameless Popery, en YouTube",
                date: "27 de mayo de 2025",
                locator: "Minutos 17:03 a 18:50",
                url: "https://www.youtube.com/watch?v=T5uo7c3WV9c&t=1023s",
                text: "¿por qué Pedro necesita aclarar eso? Porque claramente está hablando de una acción física, el bautismo con agua, y quiere asegurarse de que no pensemos que lo importante es lo que podemos ver, la eliminación de la suciedad, sino lo que ocurre de manera invisible a través de esta acción visible",
                work: "6 Bible Verses PROVING Water Baptism Saves (REBUTTAL to @NeedGodnet)",
                original:
                  "why does Peter need to clarify that? because he's clearly talking about a physical action, water baptism, and he wants to make sure that we don't get the idea that the important part is what we can see, the removal of dirt, but rather the important part of what's going on is what's happening invisibly through this visible action",
                translation: "ai-assisted",
              },
              {
                speaker: "Trent Horn",
                outlet: "Bryce Crawford Podcast, en YouTube",
                date: "8 de junio de 2026",
                locator: "Minutos 1:16:13 a 1:17:30",
                url: "https://www.youtube.com/watch?v=oNWseAsfcGM&t=4573s",
                text: "lo que Pedro está diciendo aquí es: mira, el bautismo no nos salva de una manera mágica. No es que el agua tenga alguna propiedad mágica que nos limpia de la misma manera en que el agua quita la suciedad de nuestra piel",
                work: "A Catholic Apologist Challenged Everything I Believe (EP 198)",
                original:
                  "what Peter is saying here he's saying look baptism doesn't save us in a magical way. It's not like just that the water is some kind of magical property that makes us clean in the same way that water takes dirt off of our skin",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Eph.4.30", "Eph.1.13-Eph.1.14", "2Cor.1.21-2Cor.1.22"],
      text: "Para el Catecismo, el sello «para el día de la redención» es el carácter bautismal, que no se borra y no se repite {c:CEC1274|Catecismo 1272–1274}.",
      apologists: {
        arguments: [
          {
            title:
              "El bautismo de Judas «se queda, por así decir, y crea esta marca indeleble», mientras que el bautismo simbólico de Juan «tiene que volver a hacerse» (Heschmeyer, parafraseando a Agustín; no se nombra ninguno de los tres versículos)",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "SHOCKINGLY STRONG (and a lil cringe) Moments From the Alex O'Connor vs David Wood DEBATE",
                outlet: "Shameless Popery",
                date: "10 de abril de 2025",
                locator:
                  "4 párrafos: del párrafo que empieza «They can only declare sins forgiven because only God…» al que termina «…and we’re going to see that that’s not true.»",
                url: "https://www.catholic.com/audio/sp/shockingly-strong-and-a-lil-cringe-moments-in-the-alex-oconnor-vs-david-wood-debate",
                text: "Solo pueden declarar pecados perdonados porque solo Dios puede perdonarlos. Y simplemente están negando Mateo 9, 8: que Dios ha dado autoridad divina a los hombres, que hay hombres que operan con autoridad divina. Cuando el sacerdote dice: esto es mi cuerpo, esto es mi sangre, no tiene que decir: este es el cuerpo de Cristo y esta es la sangre de Cristo, porque actúa con autoridad divina. Tanto es así que decimos que actúa en la persona de Cristo. Él pronuncia las palabras de Jesús a través de sí. Esta noción de que la autoridad divina es dada del Padre al Hijo, y del Hijo a nosotros, es perfectamente cristiana. Queremos estar de acuerdo con Alex en esto. San Pablo dice célebremente: ya no vivo yo, sino que Cristo vive en mí. Entonces el Padre envía al Hijo, el Hijo nos envía, y también envía al Espíritu.\n\nAsí que hay que retener algún sentido de eso. Y cuando vemos, y voy a mirar los sacramentos en particular como ejemplo, pero esto no es solo de los sacramentos: cada vez que uno hace cosas buenas, eso viene solo de Dios. Solo Dios es bueno, pero uno también puede ser bueno no aparte de Dios, sino porque Dios obra a través de uno, Cristo viviendo en uno. El ejemplo aquí sería Juan el Bautista y Judas. Ahora bien, son dos figuras radicalmente distintas. Juan el Bautista, obviamente mucho más santo que Judas, el más grande de los nacidos de mujer, que no son parte del reino. Durante su vida terrenal nunca es invitado misteriosamente a unirse a la iglesia. Y Jesús, en cambio, lo elige como parte del reino. Y uno de los apóstoles, Judas Iscariote, que de manera llamativa no es grande, cuando leen el Nuevo Testamento notarán que las personas bautizadas por Juan tienen que ser rebautizadas.\n\nEso se ve explícitamente en Hechos, pero nadie es descrito como alguien que haya tenido que ser rebautizado por haber sido bautizado por Judas. San Agustín habla de esto. Su punto es que ustedes no son mejores que Juan, pero el bautismo dado por medio de ustedes es mejor que el de Juan, porque el uno es Cristo, el otro, Juan el Bautista. Así que ya sea que bautice Pablo, Pedro o incluso Judas, es Cristo quien bautiza. Por eso, Judas bautiza y el bautismo queda, por así decir, y crea esta marca indeleble. Juan hace un bautismo simbólico y hay que rehacerlo. Entonces dice: obviamente no preferimos a Judas antes que a Juan, pero sí preferimos el bautismo de Cristo, incluso cuando lo administra Judas, al bautismo de Juan el Bautista, porque el de Juan era solo simbólico. Así que todo esto quiere decir que, si uno tiene este marco en el que Dios delega autoridad y envía a personas con poder verdaderamente divino, entonces puede entender por qué el bautismo que administra incluso alguien tan pícaro como Judas Iscariote RAs se siente como una subestimación, tan malvado como es Judases harriot, incluso un mal sacerdote, un mal obispo, un mal papa, un mal apóstol puede bautizar, y sigue siendo Cristo obrando a través de ese terrible instrumento, debido a la delegación de autoridad divina.\n\nEsto es cómo funciona. Todo esto está enraizado en este concepto, y si uno se pierde esto, se pierde mucho del Nuevo Testamento, ¿sí? Hasta aquí estoy de acuerdo con toda esa parte con Alex O’Connor, pero creo, bueno, no creo, sé que se equivoca en algo importante. ¿Cómo distinguimos entonces entre el Hijo enviado por el Padre y, digamos, los apóstoles o los cristianos en general enviados por el Hijo? ¿Qué es diferente en esos casos? Y hay una respuesta fácil a eso. Quiero señalar una cosa en la que él se equivoca de manera repetida. Dice que Cathos porque significa tal cual, básicamente va a argumentar que significa que tiene que haber una relación unical: que si X es Cathos a Y, es tal cual Y. Tienen que ser idénticos, y eso no es cierto, y vamos a ver que eso no es cierto.",
                original:
                  "They can only declare sins forgiven because only God can forgive them. And they’re just denying Matthew nine, eight, that God has given divine authority to men, that there are men who operate with divine authority. When the priest says, this is my body, this is my blood. He doesn’t have to say, this is Christ’s body and this is Christ’s blood because he’s acting with divine authority. So much so that we refer to him as acting in the person of Christ. He’s speaking the words of Jesus through him. This notion of divine authority being given from the Father to the Son and from the Son to us is perfectly Christian. We want to agree with Alex on this. St. Paul famously says, it is no longer I who live but Christ who lives in me. So the Father sends the son, the son sends us, he also sends the spirit.\n\nSo some sense of that we have to hold onto. And so when we see, and I’m going to look at the sacraments particularly here as an example, but this isn’t just the sacraments. Anytime you’re doing good things, that’s only from God. God alone is good, but you can also be good not apart from God, but by God working through you, Christ living in you. So example here would be John the Baptist and Judas. Now, those are two starkly different figures. John the Baptist, obviously much holier than Judas, greatest of those born among women who aren’t part of the kingdom. He is never invited during his earthly life to join the church mysteriously. And Jesus instead chooses as part of the kingdom. And one of the apostles, Judas Iscariot, who is not great strikingly, when you read the New Testament, you’ll notice the people who are baptized by John have to get rebaptized.\n\nYou see this in Acts explicitly, but nobody has ever described as being rebaptized who was baptized by Judas. St. Augustine talks about this. His point is that you are not better than John, but the baptism given through you is better than that of John for the one is Christ, the other, John the Baptists. So whether it’s Paul or Peter or even Judas who baptizes it is Christ who baptizes. So as a result, Judas baptizes and it sticks so to speak, it creates this indelible mark. John does this symbolic baptism and it has to be redone. So he says, we don’t prefer Judas to John obviously, but we do prefer the baptism of Christ even when performed at the hands of Judas to the baptism of John the Baptist because his was just symbolic. So all that’s to say, if you have this framework that God delegates authority and that he sends people forth with truly divine power, then you can understand why the baptism that even someone as rascally as Judas Iscariot RAs feels like an understatement as wicked is Judases harriot, even a bad priest, a bad bishop, a bad pope, a bad apostle can baptize and it is still Christ working through that awful instrument because of the delegation of divine authority.\n\nThis is how this works. This is all rooted in this concept, and if you miss this, you miss a lot of the New Testament, okay? So far I agree with all that part with Alex O’Connor, but I think he gets a really, well, I don’t think I know he gets a major thing wrong. How then do we distinguish between the son being sent by the father and say the apostles or Christians more broadly being sent by the sun? What is different about those? And there’s an easy answer to that. I want to flag a thing that he gets wrong pretty repeatedly. He says Cathos because it means just as basically he’s going to argue it means that there has to be a unical relationship, that if X is cathos to Y, it’s just as y. They have to be identical, and that’s not true, and we’re going to see that that’s not true.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Tim.2.4"],
      text: "Dios «quiere que todos los hombres sean salvos»: el Catecismo lo cita como razón de que, en caso de necesidad, cualquiera pueda bautizar, y de su confianza en «un camino de salvación para los niños que mueren sin Bautismo» {c:CEC1256|Catecismo 1256} {c:CEC1261|Catecismo 1261}.",
    },
    {
      refs: ["John.19.34", "Mark.10.38"],
      text: "Para el Catecismo, la sangre y el agua del costado de Cristo son figuras del bautismo y de la Eucaristía: el bautismo viene «de la cruz de Cristo, de la muerte de Cristo» {c:CEC1225|Catecismo 1225, citando a san Ambrosio}.",
      apologists: {
        arguments: [
          {
            title:
              "Desde los primeros tiempos se entendió que la sangre y el agua del costado de Cristo eran el bautismo y la Eucaristía",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "What Protestants Get Wrong about the Temple Veil",
                outlet: "Shameless Popery",
                date: "16 de mayo de 2024",
                locator:
                  "8 párrafos: del párrafo que empieza «foreshadowing of the tearing of the true temple veil,…» al que termina «…participate in the body and blood of Christ? Well,»",
                url: "https://www.catholic.com/audio/sp/what-protestants-get-wrong-about-the-temple-veil",
                text: "prefiguración del rasgado del velo verdadero del templo, que es la carne de Cristo. Ahí es donde encontramos este desgarro del costado de Cristo. Eso es lo que significa decir que él nos abrió este camino vivo a través de su carne. Eso es la cortina: su carne. Y en la segunda mitad de la oración sigue diciendo: “y como tenemos un gran sacerdote sobre la casa de Dios, acerquémonos con corazón sincero y plena seguridad de fe”.\n\n“con nuestros corazones rociados y limpios de una conciencia mala, y nuestros cuerpos lavados con agua pura”. Así que es verdad: ahora podemos acceder a la presencia de Dios de una manera nueva. Podíamos orar así antes, pero ahora experimentamos su presencia real de una manera más profunda. Así que noten que esto va a tener, creo yo, mucho sentido con lo que pasa con el rasgado del velo del templo. Hay que leerlo a través de este lente del templo, que es increíblemente eucarístico, porque todo gira en torno al cuerpo de Cristo.\n\ny cómo ahora podemos recibir el cuerpo de Cristo y entrar en esta relación real con Dios a un nivel que antes no podíamos. Pero no quiero dejar pasar otra dimensión. La voy a mencionar de pasada: si leen esto, el templo como representación de Cristo, entonces hay un sentido en el que podemos ver un desgarro divino de vestiduras. Así que cuando Jacob cree que su hijo José está muerto, ¿qué hace?\n\nse rasga las vestiduras, Génesis 37, 34. Esa es una antigua expresión judía de dolor. Uno rasga las vestiduras. Y así, las vestiduras del templo, por así decirlo, se rasgan porque las vestiduras de Cristo, su carne, están rasgadas. Eso es, creo, una de las dimensiones que están en juego aquí. Pero la más directamente evidenciada, la que es más explícita en Hebreos 10, es que esto trata del desgarro del costado de Cristo.\n\nEn Juan 19, versículo 34, uno de los soldados traspasa el costado de Jesús con una lanza y de inmediato salen sangre y agua. Así que el nuevo acceso que tenemos a Dios es a través del costado abierto de Cristo, la sangre y el agua. ¿Qué representa eso? Bueno, desde los primeros días del cristianismo, esto se entendió como representación del bautismo y de la Eucaristía. Nadie negaba que sí, que sangre y agua salieron literalmente, pero veían en eso un símbolo del hecho de que es a través de las aguas sanadoras y la sangre sanadora de Cristo\n\nque podemos entrar en la comunión con Dios de esa manera profunda y duradera. En 1 Corintios 10, san Pablo señala esto como sacrificio cristiano. Dice: “La copa de bendición que bendecimos, ¿no es acaso participación en la sangre de Cristo? El pan que partimos, ¿no es acaso participación en el cuerpo de Cristo?” Bueno,\n\n¿Cómo participamos los cristianos del cuerpo y la sangre de Cristo? ¿Cómo entramos en esto de una manera tan profunda? Bueno, él usa el lenguaje del sacrificio. Dice primero: “porque hay un solo pan, nosotros, que somos muchos, somos un cuerpo, pues todos participamos de aquel un pan”. De algún modo, al recibir el único pan, la Eucaristía, nos transforma en el cuerpo de Cristo. Esto no es como el templo. Ir al templo no te hacía el templo.\n\nPero ir al cuerpo de Cristo te hace el cuerpo de Cristo. Hay una manera en la que el cuerpo de Cristo, la Eucaristía, hace el cuerpo de Cristo, la Iglesia. Eso es misterioso y es una conversación mucho más profunda, a la que solo voy a aludir sin explicarla adecuadamente, para otra ocasión. Pero ¿cómo tiene sentido eso con la manera en que podemos recibir y participar del cuerpo y la sangre de Cristo? Bueno,",
                original:
                  "foreshadowing of the tearing of the true temple veil, which is the flesh of Christ. That is where we find this ripping open the side of Christ. That is what it means to say, he’s opened up this living way for us through his flesh. That’s what the curtain is, his flesh. And goes on to say in the next half of the sentence, and since we have a great priest over the house of God, let us draw near with a true heart and full assurance of faith.\n\nwith our hearts sprinkled clean from an evil conscience and our bodies washed with pure water. So it’s true, we can now access the presence of God in a new way. We could pray it before, but we now experience his real presence in a deeper way. So note, this is going to make, I think, a lot of sense of what happens with the tearing of the temple veil. It needs to be read through this temple lens, which is incredibly Eucharistic, because it’s all centered around the body of Christ.\n\nand how we can now receive the body of Christ and enter into this real relation with God at a level we couldn’t before. But I don’t want to miss one other dimension as well. I’m going to mention this in passing, that if you read this, the temple as representative of Christ, then there’s a sort of sense in which we can see a divine tearing of garments. So when Jacob thinks that his son Joseph is dead, what does he do?\n\nhe wrings his garments, Genesis 37, 34. That’s an old Jewish expression of sorrow. You tear the garments. And so the garments of the temple, so to speak, are torn because the garments of Christ, his flesh, are torn. That is, I think, one of the dimensions going on here. But the more directly evidenced one, the one that’s more explicit in Hebrews 10, is that this is about the tearing of the side of Christ.\n\nIn John 19 verse 34, one of the soldiers pierces Jesus’ side with a spear and at once there comes out blood and water. So the new access we have to God is through the open side of Christ, the blood and water. What does that represent? Well, from the earliest days of Christianity, this was understood to represent baptism and the Eucharist. Like no one was denying that, yeah, blood and water literally came out, but they saw in that a symbol of the fact that it is through the healing waters and the healing blood of Christ.\n\nthat we’re able to enter into the communion with God in this deep and abiding sort of way. In 1 Corinthians 10, St. Paul points to this as Christian sacrifice. He says, and those of you who follow this channel know I love this passage, so I’m going to go to it one more time. He says, the cup of blessing which we bless, is it not a participation in the blood of Christ? The bread which we break, is it not a participation in the body of Christ? Well,\n\nHow do we as Christians participate in the body and blood of Christ? How do we enter into this in this deep way? Well, he uses the language of sacrifice. He says first, because there is one bread, or literally like one loaf, we who are many are one body for we all partake of the one bread. Somehow receiving the one loaf, the Eucharist, transforms us into the body of Christ. This is unlike the temple. Going to the temple didn’t make you the temple.\n\nBut going to the body of Christ makes you the body of Christ. That there is a way in which the body of Christ, the Eucharist, makes the body of Christ, the Church. And that’s mysterious and that is a much deeper conversation I’m going to just allude to and not explain adequately for another time. But how does that make sense with how we can receive and participate in the body and blood of Christ? Well,",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.3.13-Matt.3.17"],
      text: "Jesús se somete al bautismo de Juan y el Espíritu desciende sobre él: el Catecismo lo lee como «preludio de la nueva creación» {c:CEC1223|Catecismo 1224}.",
      apologists: {
        arguments: [
          {
            title: "Jesús fue bautizado para santificar las aguas, y el Espíritu y el agua son un solo acontecimiento",
            quotes: [
              {
                speaker: "Joe Heschmeyer",
                work: "If Jesus Is Sinless, Why Was He Baptized?",
                outlet: "Shameless Popery",
                date: "13 de enero de 2026",
                locator:
                  "4 párrafos: del párrafo que empieza «Once again, this gets things half right. Jesus is…» al que termina «…waters at the beginning of our first life biologically.»",
                url: "https://www.catholic.com/audio/sp/if-jesus-is-sinless-why-was-he-baptized",
                text: "Una vez más, esto acierta a medias. Jesús se bautiza para cumplir toda justicia. Eso es absolutamente correcto; de hecho, es la respuesta que da Jesús. Sproll tiene razón al ver esto como una expresión de la obediencia radical de Jesús a su Padre. Incluso acierta al ver que esta obediencia perfecta implica cumplir perfectamente la ley mosaica. Pero aquí está la cuestión: los judíos no estaban obligados por la ley mosaica ni por ninguna otra cosa a bautizarse. Así que el error que comete Sproul es común. Está convirtiendo el bautismo de un sacramento en una mera ordenanza. Lo trata como una obra de la ley, como si Cristo hubiera venido a cumplir la ley mosaica solo para darnos un nuevo código legal. Voy a volver a ese punto al final, pero no quiero limitarme a criticar las visiones que creo inexactas. ¿Para qué se bautiza Jesús?\n\n¿Cuáles son las buenas razones? Como dije, hay numerosas buenas respuestas. Así que incluso las respuestas inexactas que hemos visto hasta ahora aciertan a medias. El problema es que les falta este cuadro más grande. Para empezar, Jesús se somete por entero a la voluntad del Padre. Eso es ciertamente lo que significa decir que cumple toda justicia, pero también está inaugurando su ministerio público. Y también su bautismo anticipa su muerte. Y también se deja contar entre nosotros, los pecadores, en nuestro favor: va a morir. Y también se revela como el Cordero de Dios que quita el pecado del mundo. Y también se revela como el Hijo de Dios en quien el Padre se complace, y además prefigura nuestro propio bautismo. Pero hay una razón a la que los primeros cristianos vuelven una y otra vez, y es esta: que se bautiza para santificar las aguas del bautismo.\n\nEs decir, Jesús no solo prefigura el bautismo cristiano: lo hace posible. San Maximist de Turín, que difundió el cristianismo por el norte de Italia en los 300, lo expresó así. Alguien podría preguntar: ¿por qué un hombre santo desearía el bautismo? Escuchen la respuesta. Cristo es bautizado no para ser santificado por el agua, sino para santificar el agua, y con su purificación limpia las aguas que tocó. Pues la consagración de Cristo implica una consagración más significativa del agua. Porque cuando el Salvador es lavado, toda el agua para nuestro bautismo queda limpia, purificada en su fuente para dispensar la gracia bautismal a las personas de las edades futuras. Cristo es el primero en ser bautizado, entonces, para que los cristianos lo sigan con confianza. Jesús nos dice que si queremos entrar en el reino de Dios, necesitamos nacer de nuevo del agua y del Espíritu Santo.\n\nY los primeros cristianos reconocieron en eso una clara referencia al bautismo cristiano. Juan tiene el agua del Jordán, y en el bautismo de Jesús vemos que se une con el Espíritu Santo, que desciende sobre Jesús como una paloma. Esto es crucial para entender el bautismo cristiano. Protestantes y católicos coinciden en general. El bautismo de Juan es solo simbólico. Juan tiene agua, pero no pretende que sea más que un símbolo. Pero en Hechos 19, los que recibieron este bautismo simbólico de Juan tienen que ser rebautizados con el bautismo cristiano para recibir el Espíritu Santo. Y los cristianos del siglo II, personas como Orígenes, señalan esto como evidencia bíblica clara de que el bautismo cristiano realmente hace algo. El bautismo de Juan es inferior precisamente porque en el bautismo cristiano somos engendrados de nuevo espiritualmente por la bestilling del Espíritu Santo. Ahora bien, esta unión del agua y el Espíritu está prefigurada en toda la Biblia, desde Génesis 1, donde el Espíritu de Dios se movía sobre la faz de las aguas al principio, al comienzo de nuestra primera vida biológicamente.",
                original:
                  "Once again, this gets things half right. Jesus is baptized to fulfill all righteousness. That is absolutely correct. That is in fact the answer that Jesus gives. In sproll is right to see this as an expression of Jesus’ radical obedience to his father. He’s even right in seeing that this perfect obedience involves the keeping of the Mosaic law perfectly. But here’s the thing, Jews were not required by the Mosaic law or anything else to get baptized. So the mistake that Sproul is making is a common one. He’s turning baptism from a sacrament into a mere ordinance. Treating baptism as a work of the law as if Christ came to fulfill the Mosaic law only to give us a new legal code. I’m going to return to that point at the end, but I don’t want to just critique the views that I think are inaccurate. What does Jesus get baptized for?\n\nWhat are the good reasons? As I’ve said, there are numerous good answers. And so even the inaccurate answers that we’ve seen so far are getting things half right. The problem is that they’re missing this bigger picture. For starters, Jesus is, as I said, submitting himself entirely to the Father’s will. That is certainly what it means to say that he’s fulfilling all righteousness, but he’s also inaugurating his public ministry. And also his baptism is in anticipation of his death. And also he’s allowing himself to be numbered amongst us sinners on his behalf he’s going to die. And also he’s being revealed as the lamb of God who takes away the sins of the world. And also he’s being revealed as the son of God in whom the Father is well pleased and also he’s prefiguring our own baptism. But there’s one reason that the early Christians return to over and over again, and that’s this, that he is baptized to sanctify the waters of baptism.\n\nThat is, Jesus isn’t just prefiguring Christian baptism, he’s making Christian baptism possible. Saint Maximist of Turin, who spread Christianity throughout Northern Italy in the 300s, put it like this. Someone might ask, why would a holy man desire baptism? Listen to the answer. Christ is baptized not to be made holy by the water, but to make the water holy, and by his cleansing to purify the waters which he touched. For the consecration of Christ involves a more significant consecration of the water. For when the savior is washed, all water for our baptism is made clean, purified at its source for the dispensing of baptismal grace to the people of future ages. Christ is the first to be baptized then so that Christians will follow after him with confidence. Jesus tells us that if we want to enter the kingdom of God, we need to be born again by water in the Holy Spirit.\n\nAnd the early Christians recognized in that a clear reference to Christian baptism. John has the waters of the Jordan and in the baptism of Jesus, we see them united with the Holy Spirit who descends upon Jesus like a dove. This is crucial for understanding Christian baptism. Protestants and Catholics alike typically agree. John’s baptism is just a symbolic one. John has water, but he has no pretense about it being anything more than just a symbol. But in Acts 19, those who received this symbolic baptism of John have to be rebaptized with Christian baptism in order to receive the Holy Spirit. And Christians from the 100s, people like origin, point to this as clear biblical evidence that Christian baptism actually does something. John’s baptism is inferior precisely because in Christian baptism, we are being born again spiritually through the bestilling of the Holy Spirit. Now this union of water in the spirit is prefigured all over the Bible, going all the way back to Genesis one in which the spirit of God was moving over the face of the waters at the beginning of our first life biologically.",
                translation: "ai-assisted",
              },
              {
                speaker: "Karlo Broussard",
                work: "Defending Rebirth by Water",
                outlet: "Catholic Answers Magazine",
                date: "29 de mayo de 2018",
                locator:
                  "15 párrafos: del párrafo que empieza «Protestants love to ask Catholics this question. Some Catholics…» al que termina «…associates the second birth with the “word of God.”»",
                url: "https://www.catholic.com/magazine/online-edition/defending-rebirth-by-water",
                text: "A los protestantes les encanta hacerles esta pregunta a los católicos. Algunos católicos balbucean, sin saber cómo responder. Pero quienes estudian apologética saben responder con un rotundo “Sí”, ya que Jesús enseña que ser bautizado es nacer de nuevo:\n\n“En verdad, en verdad te digo: a menos que uno nazca de nuevo, no puede ver el reino de Dios”. Nicodemo le dijo: “¿Cómo puede nacer un hombre siendo ya viejo? ¿Puede entrar por segunda vez en el vientre de su madre y nacer?”. Jesús respondió: “En verdad, en verdad te digo: a menos que uno nazca de agua y del Espíritu, no puede entrar en el reino de Dios” (Juan 3:3-5; énfasis añadido).\n\nPero algunos protestantes no ven el bautismo en este pasaje. Llegan a conclusiones distintas sobre lo que significa “nacer de agua”, y por eso tienen una respuesta lista para los católicos que citan los versículos de arriba. Examinemos algunas de sus explicaciones alternativas y veamos si tienen algún peso. Una explicación ve el “agua” como el líquido amniótico de la madre, a través del cual pasamos durante nuestro nacimiento biológico. El segundo nacimiento, según se argumenta, es nacer solamente del Espíritu, cuando se confiesa a Jesús como Señor.\n\nPero hay algunos problemas con esta interpretación. Primero, ¿no es bastante obvio? ¿Por qué Jesús tendría que estipular que el nacimiento biológico es una condición para el cielo, si todos los que escuchaban su mensaje ya habían nacido? Parece pedante.\n\nSegundo, el contexto revela que Jesús incluye tanto el Espíritu como el agua en un solo acto del segundo nacimiento. No dice: “Tienes que nacer de agua, y luego nacer del Espíritu”.\n\nScott Hahn y Curtis Mitch lo explican:\n\nLa sintaxis de este versículo en griego sugiere que Jesús no habla de dos nacimientos separados, uno por el agua y otro por el Espíritu, sino de un único nacimiento por la acción del agua y el Espíritu juntos.\n\nEsta interpretación se confirma además por el hecho de que el Espíritu y el agua juntos constituyen el único acontecimiento del bautismo de Jesús, que Juan insinúa en Juan 1:29-34 y que Mateo relata en Mateo 3:13-17.\n\nPor lo tanto, hay buenas razones para pensar que el agua y el Espíritu juntos constituyen el segundo nacimiento del que habla Jesús en el discurso del nuevo nacimiento.\n\nUn segundo problema es que “nacer de agua” no es el lenguaje típico que usan Jesús o Juan para el nacimiento biológico. Tomemos a Jesús, por ejemplo. En respuesta a la pregunta de Nicodemo sobre volver a entrar en el vientre de su madre (nacimiento natural), Jesús dice: “Lo que nace de la carne es carne, y lo que nace del Espíritu es espíritu” (Juan 3:6). El lenguaje de Jesús para el nacimiento natural es “nacer de la carne”, no “nacer de agua”.\n\nJuan tiene su propia manera de referirse al nacimiento biológico, y tampoco involucra agua:\n\nPero a todos los que lo recibieron, a los que creyeron en su nombre, les dio potestad de ser hechos hijos de Dios; los cuales no nacieron de sangre, ni de voluntad de carne, ni de voluntad de varón, sino de Dios (Juan 1:12-13; énfasis añadido).\n\nComo Jesús, Juan traza una distinción entre el nuevo nacimiento de Dios y el nacimiento biológico. Pero no describe este último con “agua”. Lo describe como “nacer de sangre”.\n\nComo nuestro amigo protestante solo hace una afirmación y no nos da ninguna razón para pensar que “nacer de agua” se refiere al nacimiento biológico, y como el contexto inmediato del pasaje en cuestión ofrece un lenguaje para el nacimiento biológico que no involucra agua, es irrazonable interpretar el nacer de agua en Juan 3:3-5 como referido a nuestro nacimiento biológico.\n\nOtra explicación propuesta es que el “agua” se refiere a la palabra de Dios. Quienes sostienen esta interpretación usan 1 Pedro 1:23 como apoyo: “Ustedes han nacido de nuevo, no de semilla perecedera sino de una imperecedera, por medio de la palabra viva y permanente de Dios”. Noten cómo Pedro asocia el segundo nacimiento con la “palabra de Dios”.",
                original:
                  "Protestants love to ask Catholics this question. Some Catholics fumble their words, not knowing how to respond. But those who study apologetics know to answer with a resounding “Yes,” since Jesus teaches that to be baptized is to be born again:\n\n“Truly, truly, I say to you, unless one is born anew, he cannot see the kingdom of God.” Nicodemus said to him, “How can a man be born when he is old? Can he enter a second time into his mother’s womb and be born?” Jesus answered, “Truly, truly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God (John 3:3-5; emphasis added).\n\nBut some Protestants don’t see baptism in this passage. They arrive at different conclusions about what it means to be “born of water” and so they have a ready comeback to Catholics who cite the above verses. Let’s examine some of their alternative explanations and see if they carry any weight. One explanation sees the “water” as referring to the amniotic fluid of our mother’s womb, through which we passed during our biological birth. The second birth, so it’s argued, is being born only of the Spirit—when you confess Jesus as Lord.\n\nBut there are some problems with this interpretation. First, isn’t it kind of obvious? Why would Jesus need to stipulate that biological birth is a condition for heaven when all those hearing his message were already born? It seems pedantic.\n\nSecond, the context reveals that Jesus includes both spirit and water in the one act of the second birth. He doesn’t say, “You must be born of water, and then born of the Spirit.”\n\nScott Hahn and Curtis Mitch elaborate:\n\nThe syntax of this verse in Greek suggests that Jesus is speaking, not of two separate births, one by water and another by the Spirit, but of a single birth through the working of water and Spirit together.\n\nThis interpretation is further confirmed by the fact that the Spirit and water together constitute the one event of Jesus’ baptism, which John hints at in John 1:29-34 and Matthew chronicles in Matthew 3:13-17.\n\nTherefore, there is good reason to think that the water and spirit together constitute the second birth that Jesus speaks of in the born again discourse.\n\nA second problem is that “born of water” is not the typical language that Jesus or John uses for biological birth. Take Jesus, for example. In response to Nicodemus’s query about entering again into his mother’s womb (natural birth), Jesus says, “That which is born of the flesh is flesh, and that which is born of the Spirit is spirit” (John 3:6). Jesus’ language for natural birth is “born of flesh,” not “born of water.”\n\nJohn has his own way of referring to biological birth, and it also doesn’t involve water:\n\nBut to all who received him, who believed in his name, he gave power to become children of God; who were born, not of blood nor of the will of the flesh nor of the will of man, but of God (John 1:12-13; emphasis added).\n\nLike Jesus, John draws a distinction between the new birth of God and biological birth. But he doesn’t describe the latter with “water.” He speaks of it as “born of blood.”\n\nSince our Protestant friend only makes an assertion and doesn’t give us any reason to think that being “born of water” refers to biological birth, and since the immediate context of the passage in question provides language for biological birth that doesn’t involve water, it’s unreasonable to interpret the birth by water in John 3:3-5 as referring to our biological birth.\n\nAnother proposed explanation is that the “water” refers to the word of God. Proponents of this interpretation use 1 Peter 1:23 for support: “You have been born anew, not of perishable seed but of imperishable, through the living and abiding word of God.” Notice how Peter associates the second birth with the “word of God.”",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Pet.2.5", "1Pet.2.9"],
      text: "«Como piedras vivas, sed edificados una casa espiritual, y un sacerdocio santo»; «linaje escogido, real sacerdocio»: el Catecismo lo cita para decir que por el bautismo los fieles «participan del sacerdocio de Cristo» {c:CEC1268|Catecismo 1268}.",
      apologists: {
        arguments: [
          {
            title:
              "«Sacerdocio real» es el sacerdocio que todos los bautizados comparten en el sacerdocio de Cristo (el texto del Día 77 de Akin añade que no excluye el sacerdocio ordenado, en párrafos no citados aquí)",
            quotes: [
              {
                speaker: "Jimmy Akin",
                work: "The Priesthood of All Believers",
                outlet: "A Daily Defense, catholic.com",
                date: "18 de marzo de 2023",
                locator:
                  "6 párrafos: del párrafo que empieza «Christians are priests, but Scripture indicates that there is…» al que termina «…Testament elders or presbyters gave English the word “priest.”»",
                url: "https://www.catholic.com/audio/ddp/the-priesthood-of-all-believers",
                text: "Los cristianos son sacerdotes, pero la Escritura indica que también existe un sacerdocio especial, ministerial.\n\nLa Iglesia coincide en que, por el bautismo, los cristianos participan del sacerdocio de Cristo (CIC 1141, 1268, 1546; cf. 1174, 1322). Esto se llama comúnmente “el sacerdocio común de todos los fieles” (CIC 1535). Sin embargo, ciertos miembros de los fieles son ordenados para una participación mayor en el sacerdocio de Cristo por el sacramento del orden sagrado. Esto se conoce como sacerdocio ministerial (CIC 1547). Cristo, fuente del sacerdocio común y del ministerial, es nuestro sumo sacerdote (CIC 1544). Así, la Iglesia entiende que hay una estructura triple: el sacerdocio común de todos, el sacerdocio ministerial de los ordenados y el sumo sacerdocio de Cristo.\n\nEsto es lo que vemos en el Nuevo Testamento. El sacerdocio común se menciona en 1 Pedro 2:9. El sacerdocio ministerial aparece en Romanos 15:16, donde Pablo habla de cómo es ministro de Cristo “en el servicio sacerdotal del evangelio de Dios”. El sacerdocio ministerial también se menciona en pasajes que hablan de líderes ordenados de la Iglesia llamados “ancianos” (Hechos 14:23; 1 Timoteo 5:17; Tito 1:5; Santiago 5:14). Finalmente, el sumo sacerdocio de Cristo se menciona en pasajes como Hebreos 3:1, 4:14–15, 5:5, 6:20 y 9:11.\n\nEste también era el patrón del Antiguo Testamento. Pedro citaba de la Septuaginta, la versión de Éxodo 19:6, donde Dios les dijo a los israelitas que, si guardaban su pacto, serían para él “un reino de sacerdotes y una nación santa” (griego, basileion hierateuma kai ethnos hagion). Hubo, pues, un sacerdocio común de los israelitas, pero eso no impidió que Dios también designara un sacerdocio ministerial de los hijos de Aarón (Éxodo 28:1), con Aarón como sumo sacerdote (Esdras 7:5). Lejos de socavar la idea de un sacerdocio ministerial, la cita de Éxodo por parte de Pedro la apoya, al invocar para la Iglesia los mismos conceptos sacerdotales que se aplicaban a Israel.\n\nTIP\n\nEs difícil objetar que los católicos llamen “sacerdotes” a sus ministros, ya que este término deriva de la palabra griega presbuteros (“anciano, presbítero”). Los ancianos o presbíteros del Nuevo Testamento le dieron al inglés la palabra “priest”.",
                original:
                  "Christians are priests, but Scripture indicates that there is also a special, ministerial priesthood.\n\nThe Church agrees that, by baptism, Christians have a share in Christ’s priesthood (CCC 1141, 1268, 1546; cf. 1174, 1322). This is commonly referred to as “the common priesthood of all the faithful” (CCC 1535). However, certain members of the faithful are ordained to a greater participation in Christ’s priesthood by the sacrament of holy orders. This is known as the ministerial priesthood (CCC 1547). Christ—the source of the common and ministerial priesthoods—is our high priest (CCC 1544). The Church thus understands there to be a threefold structure: the common priesthood of all, the ministerial priesthood of the ordained, and the high priesthood of Christ.\n\nThis is what we see in the New Testament. The common priesthood is referred to in 1 Peter 2:9. The ministerial priesthood is referred to in Romans 15:16, where Paul speaks of how he is a minister of Christ “in the priestly service of the gospel of God.” The ministerial priesthood is also referred to in passages that speak of ordained Church leaders known as “elders” (Acts 14:23; 1 Tim. 5:17; Titus 1:5; James 5:14). Finally, the high priesthood of Christ is referred to in passages such as Hebrews 3:1, 4:14–15, 5:5, 6:20, and 9:11.\n\nThis was also the pattern in the Old Testament. Peter was quoting from the Septuagint version of Exodus 19:6, where God told the Israelites that, if they kept his covenant, they would be to him “a royal priesthood and a holy nation” (Greek, basileion hierateuma kai ethnos hagion). There was thus a common priesthood of the Israelites, but that did not stop God from also appointing a ministerial priesthood from the sons of Aaron (Exod. 28:1), with Aaron as the high priest (Ezra 7:5). Rather than undermining the idea of a ministerial priesthood, Peter’s citation of Exodus supports it by invoking for the Church the same priestly concepts that applied to Israel.\n\nTIP\n\nIt is hard to object to Catholics calling their ministers “priests” since this term is derived from the Greek word presbuteros (“elder, presbyter”). The New Testament elders or presbyters gave English the word “priest.”",
                translation: "ai-assisted",
              },
              {
                speaker: "Joe Heschmeyer",
                work: "Vlad Savchuk's 10 Catholic Distortions REBUTTED",
                outlet: "Shameless Popery",
                date: "19 de junio de 2025",
                locator:
                  "4 párrafos: del párrafo que empieza «The catechism talks about the priesthood of all believers.…» al que termina «…you all like wheat, but I’ve prayed for you.»",
                url: "https://www.catholic.com/audio/sp/vlad-savchuks-10-catholic-distortions-rebutted",
                text: "El catecismo habla del sacerdocio de todos los creyentes. En el párrafo 1268, por el bautismo participamos del sacerdocio de Cristo, dice, y continúa diciendo que el bautismo da una participación en el sacerdocio común de todos los creyentes. Entonces, si crees que eso es una refutación del catolicismo, y podrías citar literalmente el catecismo y decir: ¡ajá!, ¿y qué pasa con el sacerdocio de todos los creyentes?, la Iglesia católica responde: sí, sí, sí, creemos en eso. Quizás no has encontrado una diferencia importante entre el catolicismo y aquello que llamas cristianismo. Lo que realmente ocurre aquí es que, como muchos protestantes, existe la idea de que si hay un sacerdocio de todos los creyentes, entonces no puede haber órdenes sagradas. Y este es el argumento del pastor Vlad, un argumento tan demostrablemente falso que creo que puedo explicarlo bastante brevemente. El pasaje en el que él y todos los que hacen este argumento se apoyan es 1 Pedro, capítulo 2, versículo 9, donde san\n\nPedro nos recuerda: ustedes son una raza escogida, un sacerdocio real, una nación santa, el pueblo de Dios. Así que todos nosotros éramos una raza escogida, un sacerdocio real, una nación santa, el pueblo de Dios, si hemos sido incorporados a la Iglesia mediante el bautismo. Eso es cierto para todos nosotros. Y entonces el argumento sigue: ¡ajá! Pues, por lo tanto, no debe haber sacerdotes ordenados. Esa conclusión evidentemente no se sigue, pero por si no quedó claro, mucha gente parece no darse cuenta de que Pedro aquí está citando el Éxodo. Es una cita casi literal, quizás una paráfrasis de Éxodo 19, donde Dios dice: “Ahora, pues, si escuchan mi voz y guardan mi pacto, serán mi propiedad exclusiva entre todos los pueblos, porque toda la tierra es mía, y ustedes serán para mí un reino de sacerdotes y una nación santa”. Así que la proclamación de ser una nación de sacerdotes, y el hecho de ser llamados de esa manera, sí, eso fue prometido en el Antiguo Testamento.\n\n¿Eso significaba que no había sacerdotes en el Antiguo Testamento? ¿Has leído el Antiguo Testamento? Por supuesto que sí los había. Así que es posible creer tanto en cierto tipo de sacerdocio de todos los creyentes como en un sacerdocio especial de quienes tienen autoridad. Ahora, el pastor Vlad va a argumentar que no puede haber este tipo de autoridad sobre los laicos. ¿Qué Biblia está leyendo? No me refiero solo al Antiguo Testamento, sino también al Nuevo, porque eso no es bíblico. Puede que suene a algo estadounidense. Nadie manda sobre nosotros, ningún rey, lo que sea. Eso no es cristiano. Para nada es el Reino de Dios. El Reino de Dios tiene autoridad; no solo Cristo como rey, sino que le ha dado autoridad que comparte con los líderes de la Iglesia. Y lo dice en la Última Cena, en Lucas 22, cuando los discípulos discuten sobre quién es el más grande, y él no niega el liderazgo.\n\nDice: “Que el mayor de ustedes sea como el más joven, y el que dirige sea como el que sirve.” Así que habrá un líder, y tendrá que ser como Jesús, que está entre nosotros como el que sirve, entre ellos como el que sirve. En el versículo siguiente continúa diciendo a los doce: “Ustedes son los que han permanecido conmigo en mis pruebas, como mi Padre me asignó un reino. ¿Así que yo les asigno?” Así que comparte autoridad real, no con todos, sino con los doce, para que coman y beban en mi mesa, en mi reino, y se sienten en tronos juzgando a las doce tribus de Israel. Luego señala a uno de los doce y le dice que tendrá la tarea de sostener incluso a los otros once, diciendo: “Simón, Simón, diciendo: ha exigido tenerlos, para zarandearlos como al trigo, pero yo he rogado por ti.”",
                original:
                  "The catechism talks about the priesthood of all believers. In paragraph 1268 by baptism, we share in the priesthood of Christ says, and it goes on to say baptism gives a share in the common priesthood of all believers. So if you think that’s a takedown of Catholicism, and you could literally just quote the catechism, say, aha, what about the priesthood of all believers? And the Catholic church is like, yep, yeah, yeah, we believe in that. Maybe you haven’t found some important difference between Catholicism and the thing you’re calling Christianity. The real thing that’s happening here is like many Protestants, there’s this idea that if there’s a priesthood of all believers, therefore there must not be holy orders. And this is Pastor Vlad’s argument, and this argument is so demonstrably untrue that I think I can explain it pretty shortly here. The passage that he and everyone who makes this argument looks to is first Peter chapter two, verse nine, where St.\n\nPeter reminds us, you are a chosen race, a royal priesthood, a holy nation, God’s own people. So all of us were chosen race a royal priesthood, a holy nation, God’s own people if we’ve been incorporated through baptism into the church. That’s true of all of us. And so the argument goes, aha. Well, therefore there must not be ordained priests. That conclusion pretty obviously doesn’t follow, but just in case that wasn’t clear, a lot of people don’t seem to realize that Peter is quoting from Exodus here. This is a near quotation, maybe a paraphrase of Exodus 19, where God says, now, therefore, if you obey my voice and keep my covenant, you shall be my own possession among all peoples, for all the earth is mine and you shall be to me a kingdom of priests in a holy nation. So the proclamation of being a nation of priests and being called in that way, yeah, that’s something that was promised in the Old Testament.\n\nDid that mean there were no Old Testament priests? Have you read the Old Testament? Of course there were. So it’s possible to both believe in a certain kind of priesthood of all believers and a special kind of priesthood of those in authority. Now, pastor Vlad is going to argue that there can’t be this kind of authority over the laity. What Bible is he reading? I don’t just mean Old Testament, I mean New Testament as well, because that’s not biblical. That might be like American. Nobody’s in charge of us, no kings, whatever. That’s not Christian. It’s not the kingdom of God at all. The kingdom of God has authority, not just Christ as king, but he’s given authority that he shares with the leaders of the church. And he says this at the Last Supper in Luke 22, when the disciples are arguing over greatness, he doesn’t deny leadership.\n\nHe says, let the greatest among you become is the youngest and the leader is one who serves. So there’s going to be a leader, and they’re going to have to be like Jesus, who’s among us as one who serves among them as one who serves. He goes on in the next verse to say to the 12, you are those who continued with me in my trials as my father appointed a kingdom for me. So do I appoint for you? So he’s sharing kingly authority, not with everybody, but with the 12, so that you may eat and drink at my table in my kingdom and sit on thrones judging the 12 tribes of Israel. Then he singles out one of the 12 and tells him that he’s going to have the task of carrying even for the other 11, saying, Simon, Simon saying demanded to have you, that he might have you all like wheat, but I’ve prayed for you.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Eph.4.25"],
      text: "«[…] somos miembros los unos de los otros»: el Catecismo lo cita para decir que el bautismo «hace de nosotros miembros del Cuerpo de Cristo» {c:CEC1267|Catecismo 1267}.",
    },
    {
      refs: ["Gal.5.3"],
      text: "El bautizado queda obligado «a toda la ley de Cristo», no solo a la fe {c:T7b7|Trento, ses. VII, Del bautismo, can. 7}.",
    },
  ],
  passages: {
    title: "Los pasajes de la posición católica",
    lede: "Los versículos que la Iglesia católica cita sobre el bautismo, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la Iglesia católica.",
    apologistsLabel: "Cómo lo defienden los apologistas católicos.",
  },
  objections: {
    subtitle: "Objeciones a la postura católica. Abre cada una para leer en profundidad la respuesta católica.",
    videosSubtitle: "Creadores católicos que responden a esta objeción. Los videos se abren en YouTube.",
    order: ["OB-1", "OB-2", "OB-3", "OB-4", "OB-5", "OB-6a", "OB-6b"],
    themes: [
      {
        id: "gives",
        name: "Qué da el bautismo",
        ids: ["OB-1", "OB-2"],
      },
      {
        id: "after",
        name: "Después del bautismo",
        ids: ["OB-4", "OB-5"],
      },
      {
        id: "who-how",
        name: "Quién bautiza y cómo",
        ids: ["OB-3", "OB-6a", "OB-6b"],
      },
    ],
    silentTraditions:
      "Los textos que hablan por los bautistas en Doctrina definen el bautismo cristiano como «la inmersión de un creyente en agua» (Fe y Mensaje Bautistas, art. VII), y las Asambleas de Dios establecen «la ordenanza del bautismo en agua por inmersión» (Declaración de Verdades Fundamentales, 6). Las objeciones que de ahí se plantean en el debate están en esta misma lista, marcadas «Frecuente en el debate».",
    items: [
      {
        id: "OB-1",
        short: "La gracia y la salvación sin el bautismo",
        layer: "official",
        title:
          "«La gracia y la salvación no están tan unidas al bautismo que nadie pueda salvarse sin él, ni todos los bautizados quedan regenerados»",
        synthesis:
          "El bautismo es «signo y sello» del pacto de gracia, de la incorporación a Cristo, de la regeneración y del perdón de los pecados {c:WCF281|Confesión de Westminster XXVIII.1}. Despreciarlo o descuidarlo es un grave pecado, pero la gracia y la salvación no están tan unidas a él que nadie pueda ser regenerado o salvado sin bautismo, ni todos los bautizados quedan por eso regenerados: Simón el mago fue bautizado y seguía «en hiel de amargura» {v:Acts.8.13,Acts.8.23}. La eficacia del bautismo no está atada al momento en que se administra; el Espíritu da la gracia prometida a quienes pertenece, según el consejo de Dios y en el tiempo que él dispone.",
        raisedBy: {
          traditions: ["reformed"],
          line: "Suelen plantearla reformados.",
        },
        objectorTexts: {
          shown: ["WCF2856"],
          more: ["WCF281", "WLC165", "WLC161"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, el bautismo es «el sacramento del nuevo nacimiento por el agua y la palabra» {c:CEC1213|Catecismo 1213}, y sus «dos efectos principales» son «la purificación de los pecados y el nuevo nacimiento en el Espíritu Santo» {c:CEC1262|Catecismo 1262}.",
          },
          {
            type: "p",
            text: "El Catecismo dice: «El Señor mismo afirma que el Bautismo es necesario para la salvación (cf Jn 3,5)» {c:CEC1257|Catecismo 1257}. Trento manda no torcer esas palabras «á algun sentido metafórico» {c:T7b2|ses. VII, Del bautismo, can. 2}. El Catecismo precisa para quiénes: «El Bautismo es necesario para la salvación en aquellos a los que el Evangelio ha sido anunciado y han tenido la posibilidad de pedir este sacramento»; y añade: «Dios ha vinculado la salvación al sacramento del Bautismo, sin embargo, Él no queda sometido a sus sacramentos» {c:CEC1257|Catecismo 1257}. Trento enseña que el paso a la gracia no se da «sin el Bautismo, ó sin el deseo de él» {c:T6c4|ses. VI, cap. 4}, y el Catecismo enseña el bautismo de sangre y el de deseo, que «produce los frutos del Bautismo sin ser sacramento» {c:CEC1258,CEC1259|Catecismo 1258–1259}. De quien, sin conocer el Evangelio, «busca la verdad y hace la voluntad de Dios según él la conoce», dice que «puede ser salvado» {c:CEC1260|Catecismo 1260}.",
          },
          {
            type: "p",
            text: "Sobre si todos los bautizados quedan regenerados, la Iglesia enseña que los sacramentos contienen la gracia que significan y la confieren «á los que no ponen obstáculo» {c:T7sacr6|Trento, ses. VII, De los sacramentos en general, can. 6}, y condena a quien diga «que no siempre, ni á todos se dá gracia por estos Sacramentos, en quanto está de parte de Dios, aunque los reciban dignamente» {c:T7sacr7|can. 7}. Los frutos «dependen también de las disposiciones del que los recibe» {c:CEC1128|Catecismo 1128}: el pecado puede impedir «al Bautismo dar frutos de salvación», aunque el sello bautismal permanece {c:CEC1272|Catecismo 1272}. Y de los niños dice Trento que «recibén con toda verdad el Bautismo en remision de sus pecados» {c:T5can4|ses. V, can. 4}.",
          },
          {
            type: "p",
            text: "El canon de Trento dice: «Si alguno dixere, que el Bautismo es arbitrario, esto es, no preciso para conseguir la salvacion; sea excomulgado» {c:T7b5|ses. VII, Del bautismo, can. 5}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["T5can4"],
            name: "Concilio de Trento, sesión V, can. 4",
            dates: [
              {
                year: 1546,
                month: 6,
                day: 17,
              },
            ],
          },
          {
            citations: ["T6c4"],
            name: "Concilio de Trento, sesión VI, cap. 4",
            dates: [
              {
                year: 1547,
                month: 1,
                day: 13,
              },
            ],
          },
          {
            citations: ["T7sacr6", "T7sacr7", "T7b2", "T7b5"],
            name: "Concilio de Trento, sesión VII, De los sacramentos en general, cann. 6–7; Del bautismo, cann. 2 y 5",
            dates: [
              {
                year: 1547,
                month: 3,
                day: 3,
              },
            ],
          },
          {
            citations: ["CEC1128", "CEC1213", "CEC1257", "CEC1258", "CEC1259", "CEC1260", "CEC1262", "CEC1272"],
            name: "Catecismo de la Iglesia Católica 1128, 1213, 1257–1260, 1262, 1272",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
        ],
        passages: {
          answer: ["John.3.5"],
          objector: [
            "Acts.8.13",
            "Acts.8.23",
            "Luke.7.30",
            "Exod.4.24-Exod.4.26",
            "Rom.4.11",
            "Acts.10.2",
            "Acts.10.4",
            "Acts.10.22",
            "Acts.10.31",
            "Acts.10.45",
            "Acts.10.47",
            "John.3.5",
            "John.3.8",
            "Gal.3.27",
            "Titus.3.5",
            "Eph.5.25-Eph.5.26",
            "Acts.2.38",
            "Acts.2.41",
            "1Pet.3.21",
            "1Cor.3.6-1Cor.3.7",
            "1Cor.12.13",
            "Matt.28.19-Matt.28.20",
            "Col.2.11-Col.2.12",
            "Rom.6.3-Rom.6.5",
            "Mark.1.4",
          ],
          objectorNote: "Textos de prueba de Westminster XXVIII.1, 5–6 y del Catecismo Mayor 161.",
        },
      },
      {
        id: "OB-2",
        short: "El sacramento y la fe",
        layer: "official",
        title: "«Los sacramentos no dan la gracia por el solo rito realizado: sin la fe no aprovechan»",
        synthesis:
          "Los sacramentos son signos y testimonios de la voluntad de Dios hacia nosotros, dados para despertar y confirmar la fe de quienes los usan: aprovechan cuando la fe cree la promesa que en ellos se ofrece. Enseñar que confieren la gracia «ex opere operato», por el solo hecho de realizarse, a quien no pone obstáculo, aunque no haya en él un buen movimiento del corazón, es creer que el hombre se justifica por una ceremonia, sin fe; Abraham no fue justificado por la circuncisión, que le fue dada como señal {v:Rom.4.9-Rom.4.11}. Los reformados añaden que la gracia no la confiere ningún poder que esté en los sacramentos, sino solo la obra del Espíritu.",
        raisedBy: {
          traditions: ["lutheran", "reformed"],
          line: "Suelen plantearla luteranos y reformados.",
        },
        objectorTexts: {
          shown: ["AC13"],
          more: ["AP13", "WCF273", "LC4373"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, el bautismo es «el sacramento de la fe» {c:CEC1253|Catecismo 1253}, y los sacramentos «no sólo suponen la fe, también la fortalecen, la alimentan y la expresan» {c:CEC1123|Catecismo 1123, citando al Concilio Vaticano II}. «Celebrados dignamente en la fe», dice el Catecismo, «los sacramentos confieren la gracia que significan» {c:CEC1127|Catecismo 1127}. Trento describe cómo se prepara el adulto: «movidos y ayudados por la gracia divina, conciben la fe por el oido, y se inclinan libremente á Dios», esperan en su misericordia, «comienzan á amarle como fuente de toda justicia», se arrepienten «con aquel arrepentimiento que deben tener antes del Bautismo», y se proponen «recibir este sacramento, empezar una vida nueva, y observar los mandamientos de Dios» {c:T6c6|ses. VI, cap. 6} {v:Rom.10.17}.",
          },
          {
            type: "p",
            text: "El Catecismo dice dónde está la eficacia de los sacramentos: «Son eficaces porque en ellos actúa Cristo mismo; Él es quien bautiza, Él quien actúa en sus sacramentos con el fin de comunicar la gracia que el sacramento significa. El Padre escucha siempre la oración de la Iglesia de su Hijo que, en la epíclesis de cada sacramento, expresa su fe en el poder del Espíritu» {c:CEC1127|Catecismo 1127}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, «ex opere operato» quiere decir que el sacramento obra «en virtud de la obra salvífica de Cristo, realizada de una vez por todas», de modo que «el sacramento no actúa en virtud de la justicia del hombre que lo da o que lo recibe, sino por el poder de Dios»; y añade: «Sin embargo, los frutos de los sacramentos dependen también de las disposiciones del que los recibe» {c:CEC1128|Catecismo 1128}. Trento rechaza que los sacramentos sean «solo […] señales extrínsecas de la gracia ó santidad recibida por la fe» {c:T7sacr6|ses. VII, De los sacramentos en general, can. 6}.",
          },
          {
            type: "p",
            text: "El canon de Trento dice: «Si alguno dixere, que por los mismos Sacramentos de la nueva ley no se confiere gracia ex opere operato, sino que basta para conseguirla sola la fe en las divinas promesas; sea excomulgado» {c:T7sacr8|ses. VII, De los sacramentos en general, can. 8}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["T6c6"],
            name: "Concilio de Trento, sesión VI, cap. 6",
            dates: [
              {
                year: 1547,
                month: 1,
                day: 13,
              },
            ],
          },
          {
            citations: ["T7sacr6", "T7sacr8"],
            name: "Concilio de Trento, sesión VII, De los sacramentos en general, cann. 6 y 8",
            dates: [
              {
                year: 1547,
                month: 3,
                day: 3,
              },
            ],
          },
          {
            citations: ["CEC1123", "CEC1127", "CEC1128", "CEC1253"],
            name: "Catecismo de la Iglesia Católica 1123, 1127, 1128, 1253",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["CEC1123"],
            name: "Concilio Vaticano II, Sacrosanctum Concilium 59 (vía Catecismo 1123)",
            dates: [
              {
                year: 1963,
                month: 12,
                day: 4,
              },
            ],
          },
        ],
        passages: {
          answer: ["Rom.10.17", "Mark.16.16"],
          objector: [
            "Rom.4.9-Rom.4.11",
            "Rom.2.28-Rom.2.29",
            "1Pet.3.21",
            "Matt.3.11",
            "1Cor.12.13",
            "Matt.26.27-Matt.26.28",
            "Matt.28.19-Matt.28.20",
            "Mark.16.16",
          ],
          objectorNote:
            "Textos de la Apología XIII.19 y textos de prueba de Westminster XXVII.3; el Catecismo Mayor IV.33 cita Marcos 16:16.",
        },
      },
      {
        id: "OB-3",
        short: "Quién puede bautizar",
        layer: "official",
        title: "«Solo un ministro de la Palabra legítimamente ordenado puede bautizar»",
        synthesis:
          "Ni el bautismo ni la Cena del Señor pueden ser administrados sino por un ministro de la Palabra legítimamente ordenado, porque Cristo dio el mandato de bautizar a quienes envió a enseñar {v:Matt.28.19} y nadie toma para sí este honor si no es llamado por Dios {v:Heb.5.4}. Y la eficacia del sacramento no depende de la piedad ni de la intención de quien lo administra, sino de la obra del Espíritu y de la palabra de la institución.",
        raisedBy: {
          traditions: ["reformed"],
          line: "Suelen plantearla reformados.",
        },
        objectorTexts: {
          shown: ["WCF274"],
          more: ["WCF282", "WCF273"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, no todos los cristianos tienen potestad para administrar todos los sacramentos {c:T7sacr10|Trento, ses. VII, De los sacramentos en general, can. 10}; los ministros ordinarios del bautismo son el obispo, el presbítero y, en la Iglesia latina, el diácono {c:CEC1256|Catecismo 1256}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, en caso de necesidad puede bautizar cualquiera. El Concilio de Florencia lo dijo así: «en caso de necesidad puede bautizar no solo el sacerdote o el diácono, sino también un laico o una mujer, y aun un pagano y un hereje, con tal que observe la forma de la Iglesia y tenga intención de hacer lo que hace la Iglesia» {c:FLOexs|decreto para los armenios, 1439}; y el IV Concilio de Letrán, que el bautismo dado según la forma de la Iglesia «sea quien quiera el Ministro» da la salvación {c:LAT1|1215}. El Catecismo da la razón: «la voluntad salvífica universal de Dios (cf 1 Tm 2,4)» y «la necesidad del Bautismo para la salvación (cf Mc 16,16)» {c:CEC1256|Catecismo 1256}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, «el sacramento no actúa en virtud de la justicia del hombre que lo da o que lo recibe, sino por el poder de Dios» {c:CEC1128|Catecismo 1128} {c:T7sacr12|Trento, ses. VII, De los sacramentos en general, can. 12}; y «la intención requerida consiste en querer hacer lo que hace la Iglesia al bautizar» {c:CEC1256|Catecismo 1256}.",
          },
          {
            type: "p",
            text: "El canon de Trento sobre el ministro dice: «Si alguno dixere, que no se requiere en los ministros quando celebran, ó confieren los Sacramentos, intencion de hacer por lo menos lo mismo que hace la Iglesia; sea excomulgado» {c:T7sacr11|ses. VII, De los sacramentos en general, can. 11}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["T7sacr10", "T7sacr11", "T7sacr12"],
            name: "Concilio de Trento, sesión VII, De los sacramentos en general, cann. 10–12",
            dates: [
              {
                year: 1547,
                month: 3,
                day: 3,
              },
            ],
          },
          {
            citations: ["FLOexs"],
            name: "Concilio de Florencia, decreto para los armenios Exsultate Deo",
            dates: [
              {
                year: 1439,
                month: 11,
                day: 22,
              },
            ],
          },
          {
            citations: ["LAT1"],
            name: "IV Concilio de Letrán, const. 1",
            dates: [
              {
                year: 1215,
              },
            ],
          },
          {
            citations: ["CEC1128", "CEC1256"],
            name: "Catecismo de la Iglesia Católica 1128, 1256",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
        ],
        passages: {
          answer: ["1Tim.2.4", "Mark.16.16"],
          objector: [
            "Matt.28.19-Matt.28.20",
            "1Cor.11.20",
            "1Cor.11.23",
            "1Cor.4.1",
            "Heb.5.4",
            "Matt.3.11",
            "John.1.33",
          ],
          objectorNote: "Textos de prueba de Westminster XXVII.4 y XXVIII.2.",
        },
      },
      {
        id: "OB-4",
        short: "La penitencia como segundo bautismo",
        layer: "official",
        title:
          "«Volver a la penitencia es volver al bautismo: la «segunda tabla» no significa que el barco se haya roto»",
        synthesis:
          "El bautismo no es algo pasado que se pierde al pecar: su poder y su significado abarcan toda la vida, y el arrepentimiento no es otra cosa que volver al bautismo y practicar de nuevo lo que en él se empezó. Por eso no es correcto llamar a la penitencia «segunda tabla» para nadar después del naufragio, como si el bautismo ya no sirviera: el barco no se rompe, porque es obra de Dios; somos nosotros los que caemos de él, y quien cae debe volver a él.",
        raisedBy: {
          traditions: ["lutheran"],
          line: "Suelen plantearla luteranos.",
        },
        objectorTexts: {
          shown: ["LC4"],
          more: [],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, el bautismo deja un sello que ningún pecado borra y que no se repite {c:CEC1272|Catecismo 1272} {c:T7sacr9|Trento, ses. VII, De los sacramentos en general, can. 9}. La conversión del bautizado es «una tarea ininterrumpida para toda la Iglesia», una «segunda conversión» {c:CEC1428|Catecismo 1428}; el bautismo es «el lugar principal de la conversión primera y fundamental» {c:CEC1427|Catecismo 1427} y «el primero y principal sacramento del perdón de los pecados» {c:CEC977|Catecismo 977}. El Catecismo, citando a Trento, también llama a la penitencia, con los Padres, «un bautismo laborioso»: «Los Padres tuvieron razón en llamar a la penitencia 'un bautismo laborioso' (San Gregorio Nacianceno, Oratio 39, 17)» {c:CEC980|Catecismo 980} (el discurso, de 379–383).",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, la Penitencia es un sacramento distinto del bautismo. Trento da las razones: difieren en la materia y la forma; el ministro de la Penitencia es juez, y a los que ya son miembros de su cuerpo Cristo «no quiso que si estos despues se contaminasen con alguna culpa, se purificáran repitiendo el Bautismo», sino que se presentaran ante este tribunal «no sola una vez, sino quantas recurriesen à él arrepentidos»; y «uno es el fruto del Bautismo, y otro el de la Penitencia»: por el bautismo se recibe «plena y entera remision de los pecados», y a esa renovación no se llega por la Penitencia «sin muchas lágrimas y trabajos de nuestra parte» {c:T14c2|ses. XIV, cap. 2}. En otro canon, Trento condena la idea de que los pecados cometidos después del bautismo se perdonen «con solo el recuerdo, y fe del Bautismo recibido» {c:T7b10|ses. VII, Del bautismo, can. 10}. El Catecismo dice: «Los Padres de la Iglesia presentan este sacramento como 'la segunda tabla (de salvación) después del naufragio que es la pérdida de la gracia'» ({c:CEC1446|Catecismo 1446}, que remite a Trento y a Tertuliano, _De paenitentia_ 4, 2, c. 203).",
          },
          {
            type: "p",
            text: "El canon de Trento dice: «Si alguno, confundiendo los Sacramentos, dixere, que el Bautismo es el mismo Sacramento de la Penitencia, como si estos dos Sacramentos no fuesen distintos; y que por lo mismo no se dá con propiedad à la Penitencia el nombre de segunda tabla despues del naufragio; sea excomulgado» {c:T14can2|ses. XIV, De la Penitencia, can. 2}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["T7sacr9", "T7b10"],
            name: "Concilio de Trento, sesión VII, De los sacramentos en general, can. 9; Del bautismo, can. 10",
            dates: [
              {
                year: 1547,
                month: 3,
                day: 3,
              },
            ],
          },
          {
            citations: ["T14c2", "T14can2"],
            name: "Concilio de Trento, sesión XIV, cap. 2, can. 2",
            dates: [
              {
                year: 1551,
                month: 11,
                day: 25,
              },
            ],
          },
          {
            citations: ["CEC977", "CEC980", "CEC1272", "CEC1427", "CEC1428", "CEC1446"],
            name: "Catecismo de la Iglesia Católica 977, 980, 1272, 1427, 1428, 1446",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
        ],
        passages: {
          answer: ["1Cor.5.12"],
          objector: [],
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-5",
        short: "El pecado que queda tras el bautismo",
        layer: "official",
        title: "«Lo que queda en el bautizado es verdadero pecado»",
        synthesis:
          "El bautismo quita la culpa del pecado original, pero la concupiscencia que queda en el bautizado es verdadero pecado, aunque Dios lo perdone y no lo impute: Pablo la llama «pecado» {v:Rom.7.7,Rom.7.17,Rom.7.20,Rom.7.23}. Por eso la corrupción de la naturaleza permanece aun en los regenerados, y ella y todos sus movimientos son, dicen los reformados, «verdadera y propiamente pecado».",
        raisedBy: {
          traditions: ["lutheran", "reformed"],
          line: "Suelen plantearla luteranos y reformados.",
        },
        objectorTexts: {
          shown: ["AP2"],
          more: ["WCF65"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, por la gracia que se confiere en el bautismo se perdona el pecado original y «se quita todo lo que es propia y verdaderamente pecado», porque «Dios por cierto nada aborrece en los que han renacido» {c:T5can5|Trento, ses. V, can. 5} {v:Rom.8.1}. El Catecismo lo dice así: «en los que han sido regenerados no permanece nada que les impida entrar en el Reino de Dios» {c:CEC1263|Catecismo 1263}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, en el bautizado queda la concupiscencia, «dejada para el combate», que «no puede dañar a los que no la consienten y la resisten con coraje por la gracia de Jesucristo» {c:CEC1264|Catecismo 1264, citando a Trento}, y que permanece «a fin de que sirva de prueba en ellos en el combate de la vida cristiana» {c:CEC1426|Catecismo 1426}. El Catecismo lo dice también así: «El Bautismo, dando la vida de la gracia de Cristo, borra el pecado original y devuelve el hombre a Dios, pero las consecuencias para la naturaleza, debilitada e inclinada al mal, persisten en el hombre y lo llaman al combate espiritual» {c:CEC405|Catecismo 405}. Trento explica por qué Pablo la llama pecado: no «porque sea verdadera y propiamente pecado en los renacidos por el Bautismo; sino porque dimana del pecado, é inclina à él» {c:T5can5|ses. V, can. 5}.",
          },
          {
            type: "p",
            text: "El canon de Trento dice: «Si alguno niega que se perdona el reato del pecado original por la gracia de nuestro señor Jesu-Cristo que se confiere en el Bautismo; ó afirma que no se quita todo lo que es propia y verdaderamente pecado; sino dice, que este solamente se rae, ó dexa de imputarse; sea excomulgado» {c:T5can5|ses. V, can. 5}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["T5can5"],
            name: "Concilio de Trento, sesión V, can. 5",
            dates: [
              {
                year: 1546,
                month: 6,
                day: 17,
              },
            ],
          },
          {
            citations: ["CEC405", "CEC1263", "CEC1264", "CEC1426"],
            name: "Catecismo de la Iglesia Católica 405, 1263, 1264, 1426",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
        ],
        passages: {
          answer: ["Rom.8.1", "2Tim.2.5"],
          objector: ["Rom.7.7", "Rom.7.14", "Rom.7.17", "Rom.7.18", "Rom.7.20", "Rom.7.23"],
        },
      },
      {
        id: "OB-6a",
        short: "Rociar o sumergir",
        layer: "official",
        title: "«Rociar o derramar agua no es el bautismo apostólico: el bautismo es por tres inmersiones»",
        synthesis:
          "La Iglesia de los siete concilios ecuménicos bautizaba con tres inmersiones en el agua, y así se practicó también en Occidente durante siglos, como muestran las antiguas pilas bautismales; la aspersión o la infusión, introducidas «a escondidas», son una innovación de la Iglesia papal. Lo esencial del bautismo es la triple inmersión con la invocación del Padre, del Hijo y del Espíritu Santo, figura de la sepultura y la resurrección de tres días.",
        raisedBy: {
          traditions: ["orthodox"],
          line: "El Oros de 1755 de los patriarcas de Constantinopla, Alejandría y Jerusalén recibe «como no bautizados» a quienes vienen bautizados de otro modo. El mapa ortodoxo registra su aplicación como «contested».",
        },
        objectorTexts: {
          shown: ["ENC8"],
          more: ["MOG102", "PHIL290", "OROSa"],
        },
        answer: [
          {
            type: "p",
            text: "El Catecismo dice: «El Bautismo es realizado de la manera más significativa mediante la triple inmersión en el agua bautismal. Pero desde la antigüedad puede ser también conferido derramando tres veces agua sobre la cabeza del candidato» {c:CEC1239|Catecismo 1239}. El Código de Derecho Canónico dice: «El bautismo se ha de administrar por inmersión o por infusión […]» {c:CIC854|can. 854}. El Catecismo describe también el rito de las Iglesias orientales, donde el sacerdote, invocando a cada persona de la Trinidad, sumerge al catecúmeno en el agua y lo saca de ella {c:CEC1239|Catecismo 1240}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, lo esencial del bautismo es el agua verdadera y la invocación de la Trinidad: «sumergir en el agua al candidato o derramar agua sobre su cabeza, pronunciando la invocación de la Santísima Trinidad» {c:CEC1278|Catecismo 1278}. Trento declara necesaria «el agua verdadera y natural» {c:T7b2|ses. VII, Del bautismo, can. 2}, y el IV Concilio de Letrán dice que el bautismo «consagrado por la invocacion de la Trinidad […] sobre el agua» da la salvación a niños y adultos {c:LAT1|1215}.",
          },
          {
            type: "p",
            text: "El canon de Trento sobre la materia del bautismo dice: «Si alguno dixere, que el agua verdadera y natural no es necesaria para el Sacramento del Bautismo, y por este motivo torciere á algun sentido metafórico aquellas palabras de nuestro señor Jesu-Cristo: 'Quien no renaciere del agua, y del Espíritu Santo;' sea excomulgado» {c:T7b2|ses. VII, Del bautismo, can. 2}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["CEC1239", "CEC1278"],
            name: "Catecismo de la Iglesia Católica 1239–1240, 1278",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["CIC854"],
            name: "Código de Derecho Canónico, can. 854",
            dates: [
              {
                year: 1983,
              },
            ],
          },
          {
            citations: ["T7b2"],
            name: "Concilio de Trento, sesión VII, Del bautismo, can. 2",
            dates: [
              {
                year: 1547,
                month: 3,
                day: 3,
              },
            ],
          },
          {
            citations: ["LAT1"],
            name: "IV Concilio de Letrán, const. 1",
            dates: [
              {
                year: 1215,
              },
            ],
          },
        ],
        passages: {
          answer: [],
          objector: ["Matt.28.19", "John.3.5"],
          objectorNote: "Notas del Oros de 1755.",
        },
        apologeticAnswer: "pending",
      },
      {
        id: "OB-6b",
        short: "El bautismo de los herejes",
        layer: "official",
        title: "«Solo es bautismo el de la Iglesia ortodoxa: el de los herejes no santifica ni perdona los pecados»",
        synthesis:
          "Hay una sola Iglesia, santa, católica y apostólica, y solo sus misterios, y por tanto su bautismo, se aceptan. Los ritos no administrados como el Espíritu Santo mandó a los Apóstoles son ajenos a la tradición apostólica: los bautismos de los herejes son «aguas inútiles», que no santifican ni lavan los pecados. Por eso a quienes vienen de ellos se los recibe como no bautizados y se los bautiza.",
        raisedBy: {
          traditions: ["orthodox"],
          line: "El Oros de 1755 de los patriarcas de Constantinopla, Alejandría y Jerusalén recibe «como no bautizados» a quienes vienen bautizados de otro modo. El mapa ortodoxo registra su aplicación como «contested».",
        },
        objectorTexts: {
          shown: ["OROSb"],
          more: ["MOG102r", "DOS16"],
        },
        answer: [
          {
            type: "p",
            text: "Para la Iglesia católica, es verdadero bautismo el que se da con agua y en el nombre del Padre, del Hijo y del Espíritu Santo, con la intención de hacer lo que hace la Iglesia: «En caso de necesidad, cualquier persona, incluso no bautizada, puede bautizar […] si tiene la intención requerida y utiliza la fórmula bautismal trinitaria» {c:CEC1256|Catecismo 1256}. El Concilio de Florencia lo dijo así: «en caso de necesidad puede bautizar no solo el sacerdote o el diácono, sino también un laico o una mujer, y aun un pagano y un hereje, con tal que observe la forma de la Iglesia y tenga intención de hacer lo que hace la Iglesia» {c:FLOexs|decreto para los armenios, 1439}; y el IV Concilio de Letrán, que el bautismo dado según la forma de la Iglesia «sea quien quiera el Ministro» da la salvación {c:LAT1|1215}. El Catecismo da la razón: «la voluntad salvífica universal de Dios (cf 1 Tm 2,4)» y «la necesidad del Bautismo para la salvación (cf Mc 16,16)» {c:CEC1256|Catecismo 1256}.",
          },
          {
            type: "p",
            text: "Para la Iglesia católica, «Los bautizados en una comunidad eclesial no católica no deben ser bautizados bajo condición, a no ser que haya un motivo serio para dudar de la validez de su bautismo» {c:CIC869|Código de Derecho Canónico, can. 869 §2}. El Concilio Vaticano II dice de «quienes creen en Cristo y recibieron el bautismo debidamente» que, «justificados por la fe en el bautismo», «justamente son reconocidos como hermanos en el Señor por los hijos de la Iglesia católica» {c:UR3|Unitatis redintegratio 3}.",
          },
          {
            type: "p",
            text: "El canon de Trento dice: «Si alguno dixere, que el Bautismo, aun el que confieren los hereges en el nombre del Padre, del Hijo y del Espíritu Santo, con intencion de hacer lo que hace la Iglesia, no es verdadero Bautismo; sea excomulgado» {c:T7b4|ses. VII, Del bautismo, can. 4}.",
          },
        ],
        sourcesCited: [
          {
            citations: ["T7b4"],
            name: "Concilio de Trento, sesión VII, Del bautismo, can. 4",
            dates: [
              {
                year: 1547,
                month: 3,
                day: 3,
              },
            ],
          },
          {
            citations: ["FLOexs"],
            name: "Concilio de Florencia, Exsultate Deo",
            dates: [
              {
                year: 1439,
                month: 11,
                day: 22,
              },
            ],
          },
          {
            citations: ["LAT1"],
            name: "IV Concilio de Letrán, const. 1",
            dates: [
              {
                year: 1215,
              },
            ],
          },
          {
            citations: ["CEC1256"],
            name: "Catecismo de la Iglesia Católica 1256",
            dates: [
              {
                year: 1992,
                alsoYears: [1997],
              },
            ],
          },
          {
            citations: ["CIC869"],
            name: "Código de Derecho Canónico, can. 869 §2",
            dates: [
              {
                year: 1983,
              },
            ],
          },
          {
            citations: ["UR3"],
            name: "Concilio Vaticano II, Unitatis redintegratio 3",
            dates: [
              {
                year: 1964,
                month: 11,
                day: 21,
              },
            ],
          },
        ],
        passages: {
          answer: ["1Tim.2.4", "Mark.16.16"],
          objector: ["Matt.28.19"],
          objectorNote: "Nota del Oros de 1755.",
        },
      },
    ],
  },
  life: {
    intro: [
      "Para la Iglesia católica, el bautismo es la puerta de la vida cristiana, y su ley pide a los padres que hagan bautizar a sus hijos «en las primeras semanas» {c:CIC867a|Código de Derecho Canónico, can. 867}. El adulto que pide el bautismo recorre antes un catecumenado y recibe en una sola celebración el bautismo, la confirmación y la Eucaristía {c:CEC1232|Catecismo 1233}.",
      "La Iglesia celebra el bautismo con signos que, según el Catecismo, muestran lo que el sacramento realiza: la señal de la cruz, la Palabra de Dios, la renuncia a Satanás y la profesión de fe, el agua bendecida, la triple inmersión o la infusión con la invocación de la Trinidad, la unción con el crisma, la vestidura blanca y el cirio encendido en el cirio pascual {c:CEC1234|Catecismo 1234–1245}. En caso de necesidad, cualquier persona puede bautizar {c:CIC861|can. 861}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Bautismo de los niños",
        text: "Los padres «tienen obligación de hacer que los hijos sean bautizados en las primeras semanas»; si el niño está en peligro de muerte, «debe ser bautizado sin demora». Para bautizarlo lícitamente se pide el consentimiento de al menos uno de los padres y la «esperanza fundada» de que será educado en la fe católica; si falta por completo, se difiere y se explica a los padres por qué.",
        sources: [
          {
            citations: ["CIC867"],
            label: "Código de Derecho Canónico, cann. 867, 868 §1",
          },
          {
            citations: ["CEC1250", "CEC1251"],
            label: "Catecismo 1250–1251",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Padres y padrinos",
        text: "Antes del bautismo, padres y padrinos han de ser «convenientemente ilustrados sobre el significado de este sacramento». El padrino ayuda al bautizado a llevar «una vida cristiana congruente con el bautismo»; uno o una, o uno y una; ha de tener dieciséis años (salvo otra norma del obispo), ser católico, confirmado y haber recibido la Eucaristía, y no ser el padre o la madre. Un bautizado de otra comunidad cristiana solo puede ser testigo, junto a un padrino católico.",
        sources: [
          {
            citations: ["CIC851"],
            label: "cann. 851 2°, 872–874",
          },
          {
            citations: ["CEC1255"],
            label: "Catecismo 1255",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Adultos: el catecumenado",
        text: "El adulto es admitido al catecumenado y llevado «por pasos sucesivos» a la iniciación; debe manifestar su deseo, estar instruido y «probado en la vida cristiana». Los catecúmenos «están ya unidos a la Iglesia». Bautizado, debe ser confirmado inmediatamente y recibir la comunión en la misma celebración.",
        sources: [
          {
            citations: ["CIC851a"],
            label: "cann. 851 1°, 865 §1, 866",
          },
          {
            citations: ["CEC1232", "CEC1247"],
            label: "Catecismo 1232–1233, 1247–1249",
          },
          {
            citations: ["SC64"],
            label: "Sacrosanctum Concilium 64",
          },
        ],
      },
      {
        id: "CV-4",
        label: "El rito y sus signos",
        text: "La señal de la cruz; la Palabra; uno o varios exorcismos y la unción con el óleo de los catecúmenos; la renuncia a Satanás y la profesión de fe; la bendición del agua con una oración de epíclesis; el bautismo; la unción con el santo crisma; la vestidura blanca y el cirio; el Padre Nuestro; la bendición final.",
        sources: [
          {
            citations: ["CEC1234"],
            label: "Catecismo 1234–1245",
          },
        ],
      },
      {
        id: "CV-5",
        label: "Inmersión o infusión, y la fórmula",
        text: "«El bautismo se ha de administrar por inmersión o por infusión […]»; en la Iglesia latina, con las palabras «N., yo te bautizo en el nombre del Padre, y del Hijo y del Espíritu Santo»; en Oriente, «El siervo de Dios, N., es bautizado…». La fórmula no se cambia: el Dicasterio para la Doctrina de la Fe recordó en 2024 que bautismos celebrados con «nosotros te bautizamos» u otras fórmulas fueron nulos y hubo que repetirlos.",
        sources: [
          {
            citations: ["CIC846"],
            label: "cann. 854, 846 §1",
          },
          {
            citations: ["CEC1239"],
            label: "Catecismo 1239–1240",
          },
          {
            citations: ["GV"],
            label: "Gestis verbisque (2024)",
          },
        ],
      },
      {
        id: "CV-6",
        label: "En caso de necesidad",
        text: "Si falta el ministro ordinario, bautiza un catequista designado y, en caso de necesidad, «cualquier persona que tenga la debida intención»; basta derramar agua sobre la cabeza y decir «Yo te bautizo en el nombre del Padre y del Hijo y del Espíritu Santo». Los párrocos han de procurar que los fieles «sepan bautizar debidamente».",
        sources: [
          {
            citations: ["CIC861"],
            label: "can. 861 §2",
          },
          {
            citations: ["CEC1256"],
            label: "Catecismo 1256",
          },
          {
            citations: ["CEC1284"],
            label: "Catecismo 1284",
          },
        ],
      },
      {
        id: "CV-7",
        label: "Una sola vez",
        text: "El bautismo «no puede reiterarse». Si hay duda razonable de que alguien fue bautizado válidamente, se bautiza «bajo condición»; a quienes fueron bautizados en otra comunidad cristiana no se los bautiza de nuevo, salvo «un motivo serio para dudar» de la materia, la fórmula o la intención.",
        sources: [
          {
            citations: ["CIC845"],
            label: "cann. 845, 869",
          },
          {
            citations: ["CEC1272"],
            label: "Catecismo 1272",
          },
        ],
      },
      {
        id: "CV-8",
        label: "Cuándo y dónde",
        text: "Puede celebrarse cualquier día, pero de ordinario conviene el domingo o, si es posible, la Vigilia Pascual; fuera del caso de necesidad, el lugar propio es «una iglesia u oratorio», y como norma general la iglesia parroquial, que ha de tener pila bautismal; no en casas particulares ni hospitales salvo necesidad o permiso.",
        sources: [
          {
            citations: ["CIC856"],
            label: "cann. 856–860",
          },
        ],
      },
      {
        id: "CV-9",
        label: "Nombre y registro",
        text: "Padres, padrinos y párroco procuran «que no se imponga un nombre ajeno al sentir cristiano»; el párroco anota el bautismo en el libro de bautismo, con ministro, padres, padrinos, lugar y día.",
        sources: [
          {
            citations: ["CIC855"],
            label: "cann. 855, 877",
          },
        ],
      },
      {
        id: "CV-10",
        label: "Renovar las promesas",
        text: "«En todos los bautizados, niños o adultos, la fe debe crecer después del Bautismo. Por eso, la Iglesia celebra cada año en la vigilia pascual la renovación de las promesas del Bautismo.» El bautizado tiene deberes y derechos en la Iglesia: recibir los sacramentos y la palabra de Dios, y confesar la fe.",
        sources: [
          {
            citations: ["CEC1254"],
            label: "Catecismo 1254",
          },
          {
            citations: ["CEC1269"],
            label: "Catecismo 1269–1270",
          },
        ],
      },
      {
        id: "CV-11",
        label: "Confirmación y primera comunión",
        text: "En los ritos orientales, el niño recibe juntos bautismo, confirmación (crismación) y Eucaristía; en el rito romano la iniciación de los niños «se continúa durante unos años de catequesis» y culmina más tarde con la confirmación y la Eucaristía; el bautizado se acerca al altar para el Padre Nuestro.",
        sources: [
          {
            citations: ["CEC1232"],
            label: "Catecismo 1233",
          },
          {
            citations: ["CEC1244"],
            label: "Catecismo 1244",
          },
          {
            citations: ["CIC842"],
            label: "Código de Derecho Canónico, can. 842 §2",
          },
        ],
      },
      {
        id: "CV-12",
        label: "Niños que mueren sin bautismo",
        text: "La Iglesia los confía «a la misericordia divina», también en el rito de exequias por ellos, y la liturgia invita «a orar por su salvación». La misericordia de Dios y la ternura de Jesús con los niños «nos permiten confiar en que haya un camino de salvación para los niños que mueren sin Bautismo»; por eso, dice el Catecismo, es «más apremiante aún» no impedir que los niños vengan a Cristo por el bautismo.",
        sources: [
          {
            citations: ["CEC1261"],
            label: "Catecismo 1261",
          },
          {
            citations: ["CEC1283"],
            label: "Catecismo 1283",
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
          "Se ha de creer con fe divina y católica todo aquello que se contiene en la palabra de Dios escrita o transmitida por tradición […] y que además es propuesto como revelado por Dios, ya sea por el magisterio solemne de la Iglesia, ya por su magisterio ordinario y universal",
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
