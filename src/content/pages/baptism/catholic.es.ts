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
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
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
    },
    {
      refs: ["Matt.28.19-Matt.28.20", "Mark.16.15-Mark.16.16"],
      text: "«Por tanto, id, y doctrinad á todos los Gentiles, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.» Para el Catecismo, es el mandato del Señor {c:CEC1257|Catecismo 1257}; y por Marcos 16:16, «El que creyere y fuere bautizado, será salvo», llama al bautismo «el sacramento de la fe» {c:CEC1253|Catecismo 1253}.",
    },
    {
      refs: ["Acts.2.38"],
      text: "«Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo.» Para el Catecismo, son los dos efectos del bautismo: el perdón de los pecados y el nuevo nacimiento en el Espíritu {c:CEC1262|Catecismo 1262}.",
    },
    {
      refs: ["Rom.6.3-Rom.6.4", "Col.2.12"],
      text: "«Somos bautizados en su muerte… somos sepultados juntamente con él á muerte por el bautismo»: para el Catecismo, la inmersión simboliza esa sepultura y esa resurrección {c:CEC1214|Catecismo 1214}, y por el bautismo el creyente «es sepultado y resucita con Él» {c:CEC1227|Catecismo 1227}.",
    },
    {
      refs: ["Titus.3.5"],
      text: "«Por el lavacro de la regeneración, y de la renovación del Espíritu Santo»: para el Catecismo, el bautismo «significa y realiza» ese nuevo nacimiento {c:CEC1215|Catecismo 1215}.",
    },
    {
      refs: ["Gal.3.27"],
      text: "«Todos los que habéis sido bautizados en Cristo, de Cristo estáis vestidos»: el Catecismo lo cita para la vestidura blanca del rito {c:CEC1243|Catecismo 1243}, y Trento, para la «plena y entera remision de los pecados» que atribuye al bautismo {c:T14c2|ses. XIV, cap. 2}.",
    },
    {
      refs: ["1Cor.6.11", "1Cor.12.13"],
      text: "«mas [ya] sois lavados, mas [ya] sois santificados, mas [ya] sois justificados»; «por un Espíritu somos todos bautizados en un cuerpo»: para el Catecismo, el bautismo «es un baño que purifica, santifica y justifica» {c:CEC1227|Catecismo 1227} y nos hace «miembros del Cuerpo de Cristo» {c:CEC1267|Catecismo 1267}.",
    },
    {
      refs: ["Rom.5.12"],
      text: "«El pecado entró en el mundo por un hombre»: para Trento, este texto, leído como lo leyó siempre la Iglesia, es la razón por la que también los niños se bautizan «en remisión de los pecados» {c:T5can4|ses. V, can. 4}.",
    },
    {
      refs: ["Acts.16.15", "Acts.16.33", "Acts.18.8", "1Cor.1.16"],
      text: "Casas enteras recibieron el bautismo: el Catecismo considera «muy posible» que desde la predicación apostólica se bautizara también a los niños {c:CEC1252|Catecismo 1252}.",
    },
    {
      refs: ["Mark.10.14"],
      text: "«Dejad los niños venir, y no se lo estorbéis»: el Catecismo lo cita para la comunión de los niños en Oriente y para la esperanza sobre los niños que mueren sin bautismo {c:CEC1244|Catecismo 1244} {c:CEC1261|Catecismo 1261}.",
    },
    {
      refs: ["1Pet.3.20"],
      text: "El Catecismo lee el arca de Noé, en la que «unos pocos […] fueron salvados a través del agua», como prefiguración de la salvación por el bautismo {c:CEC1219|Catecismo 1219}.",
    },
    {
      refs: ["1Pet.3.21"],
      text: "El Catecismo cita este versículo para decir que «el diluvio y el arca de Noé prefiguraban la salvación por el Bautismo» {c:CEC1094|Catecismo 1094}, y ve la Iglesia «prefigurada por el Arca de Noé que es la única que salva del diluvio» {c:CEC845|Catecismo 845}.",
    },
    {
      refs: ["Eph.4.30", "Eph.1.13-Eph.1.14", "2Cor.1.21-2Cor.1.22"],
      text: "Para el Catecismo, el sello «para el día de la redención» es el carácter bautismal, que no se borra y no se repite {c:CEC1274|Catecismo 1272–1274}.",
    },
    {
      refs: ["1Tim.2.4"],
      text: "Dios «quiere que todos los hombres sean salvos»: el Catecismo lo cita como razón de que, en caso de necesidad, cualquiera pueda bautizar, y de su confianza en «un camino de salvación para los niños que mueren sin Bautismo» {c:CEC1256|Catecismo 1256} {c:CEC1261|Catecismo 1261}.",
    },
    {
      refs: ["John.19.34", "Mark.10.38"],
      text: "Para el Catecismo, la sangre y el agua del costado de Cristo son figuras del bautismo y de la Eucaristía: el bautismo viene «de la cruz de Cristo, de la muerte de Cristo» {c:CEC1225|Catecismo 1225, citando a san Ambrosio}.",
    },
    {
      refs: ["Matt.3.13-Matt.3.17"],
      text: "Jesús se somete al bautismo de Juan y el Espíritu desciende sobre él: el Catecismo lo lee como «preludio de la nueva creación» {c:CEC1223|Catecismo 1224}.",
    },
    {
      refs: ["1Pet.2.5", "1Pet.2.9"],
      text: "«Como piedras vivas, sed edificados una casa espiritual, y un sacerdocio santo»; «linaje escogido, real sacerdocio»: el Catecismo lo cita para decir que por el bautismo los fieles «participan del sacerdocio de Cristo» {c:CEC1268|Catecismo 1268}.",
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
  objections: {
    subtitle: "Objeciones a la postura católica. Abre cada una para leer en profundidad la respuesta católica.",
    order: ["OB-1", "OB-2", "OB-3", "OB-4", "OB-5", "OB-6a", "OB-6b"],
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
