import type { TraditionPage } from "@doctrina/core/model/page";
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
      refs: ["Matt.26.26-Matt.26.30", "Mark.14.22-Mark.14.26", "Luke.22.17-Luke.22.20", "1Cor.11.23-1Cor.11.29"],
      text: "Segunda Confesión de Londres (1689), 30.2, pp. 270–271: este versículo figura como nota al margen junto a la cláusula, en inglés, «In this ordinance Christ is not offered up to his Father, nor any real sacrifice made at all, for remission of sin of the quick or dead; but only a memorial of that one offering up of himself, by himself, upon the crosse, once for all […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.2 nota (d) (1688 p. 99): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and a Spiritual Oblation of all possible Praise unto God for the same […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar. Segunda Confesión de Londres (1689), 30.3–4, p. 271: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.4 nota (f) (1688 p. 100): este versículo figura como nota al margen junto a la cláusula, en inglés, «The denyal of the Cup to the People, worshipping the Elements, the lifting them up, or carrying them about for adoration, and reserving them for any pretended religious use, are all contrary to the Nature of this Ordinance, and to the Institution of Christ.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.1, p. 270: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] for the perpetual remembrance, and shewing forth the sacrifice in his death, confirmation of the faith of believers in all the benefits thereof, their spiritual nourishment, and growth in him […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.3–4, p. 271: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.1 nota (a) (1688 p. 99): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Supper of the Lord Jesus, was instituted by him, the same Night wherein he was betrayed, to be observed in his Churches unto the end of the World, for the perpetual remembrance, and shewing forth the Sacrifice of himself in his Death […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Segunda Confesión de Londres (1689), 30.3 nota (e) (1688 p. 100): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Lord Jesus hath in this Ordinance, appointed his Ministers to Pray, and Bless the Elements of Bread and Wine, and thereby to set them apart from a common to an holy use, and to take and break the Bread; to take the Cup, and (they communicating also themselves) to give both to the Communicants.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Segunda Confesión de Londres (1689), 30.7, 1688 impresión p. 102 (margen nota l): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] spiritually receive, and feed upon Christ crucified, (l) and all the benefits of his Death; the Body and Blood of Christ being then not corporally, or carnally, but spiritually present to the Faith of Believers, in that Ordinance, as the Elements themselves are to their outward senses.». Edición: A Confession of Faith, put forth by the Elders and Brethren of many Congregations (Londres, 1688). Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar. Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.2, pp. 270–271: este versículo figura como nota al margen junto a la cláusula, en inglés, «In this ordinance Christ is not offered up to his Father, nor any real sacrifice made at all, for remission of sin of the quick or dead; but only a memorial of that one offering up of himself, by himself, upon the crosse, once for all […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.2 nota (d) (1688 p. 99): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and a Spiritual Oblation of all possible Praise unto God for the same […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.6 nota (k) (1688 p. 101): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] overthroweth the nature of the Ordinance, and hath been and is the cause of manifold Superstitions, yea, of gross Idolatries.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Segunda Confesión de Londres (1689), 28.1, p. 269: este versículo figura como nota al margen junto a la cláusula, en inglés, «Baptism and the Lord's Supper are ordinances of positive, and soveraign institution […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.5 nota (h) (1688 p. 101): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.5 nota (g) (1688 p. 101): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] they are sometimes called by the name of the things they represent, to wit, the Body and Blood of Christ […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.8, p. 272: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.8, 1688 impresión p. 102 (margen nota n): este versículo figura como nota al margen junto a la cláusula, en inglés, «All ignorant and ungodly Persons, as they are unfit to enjoy Communion (m) with Christ, so are they unworthy of the Lord's Table, and cannot, without great sin against him, while they remain such, partake of these Holy Mysteries, (n) or be admitted thereunto: yea, whosoever shall receive unworthily, are guilty of the Body and Blood of the Lord, eating and drinking Judgment to themselves.». Edición: A Confession of Faith, put forth by the Elders and Brethren of many Congregations (Londres, 1688).",
      apologists: {
        arguments: [
          {
            title:
              "Cada celebración de la Cena lleva a la iglesia hacia atrás, a la Última Cena y a la Pascua, y hacia adelante, a la cena de bodas del Cordero; el pan y la copa proclaman la muerte del Señor hasta que él venga",
            quotes: [
              {
                speaker: "Andrew Wilson",
                work: "How the Exodus Connects to Baptism & the Lord’s Supper",
                outlet: "9Marks",
                date: "7 de mayo de 2018",
                locator:
                  "1 párrafo: del párrafo que empieza «Similar things are true of the…» al que termina «…the wine to come (Num. 13:23–24).»",
                url: "https://www.9marks.org/article/how-the-exodus-connects-to-baptism-the-lords-supper/",
                text: "Algo similar ocurre con la Cena del Señor. Cada vez que la celebramos, somos llevados de vuelta a la Última Cena y, más allá de eso, a todos los muchos éxodos y pascuas que la precedieron. No en vano Jesús nos dijo: “Hagan esto, cada vez que la beban, en memoria de mí” (1 Cor. 11:25). Al mismo tiempo, también somos llevados hacia adelante, a lo que nos aguarda en el futuro: la gran cena de bodas, para la cual el pan y el vino son solo la entrada: “No volveré a beber del fruto de la vid hasta aquel día en que lo beba nuevo con ustedes en el reino de mi Padre” (Mat. 26:29). O, como lo expresó Pablo: “Cada vez que comen este pan y beben la copa, proclaman la muerte del Señor hasta que él venga” (1 Cor. 11:26). Cuando partimos el pan y compartimos la copa, somos Josué y Caleb, recordando la comida de la Pascua. Pero también estamos probando las uvas de Escol y deleitándonos con el vino que vendrá (Núm. 13:23–24).",
                original:
                  "Similar things are true of the Lord’s Supper. Every time we celebrate it, we’re drawn back to the Last Supper and, beyond that, to all of the many exoduses and passovers that preceded it. Not for nothing did Jesus tell us, “Do this, as often as you drink it, in remembrance of me” (1 Cor. 11:25). At the same time, we’re also drawn forward to what await us in the future: the great marriage supper, for which the bread and wine are only the entrée: “I will not drink again of the fruit of the vine until that day when I drink it new with you in my Father’s kingdom” (Matt. 26:29). Or, as Paul put it, “As often as you eat this bread and drink the cup, you proclaim the Lord’s death until he comes” (1 Cor. 11:26). As we tear the loaf and share the cup, we are Joshua and Caleb, remembering the Passover meal. But we are also tasting the grapes of Eshcol and reveling in the wine to come (Num. 13:23–24).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "En la mesa del Señor la iglesia recuerda la muerte del Señor por nosotros; la Cena es personal pero no privada, y el recuerdo sucede en comunidad, primero con Cristo y luego con los hermanos y hermanas",
            quotes: [
              {
                speaker: "Caleb Batchelor",
                work: "Reservations for Two: Remembering the Lord’s Death at the Lord’s Table Together",
                outlet: "9Marks",
                date: "7 de agosto de 2020",
                locator:
                  "2 párrafos: del párrafo que empieza «At the Lord’s Table, we remember…» al que termina «…old covenant meal was communal, too.»",
                url: "https://www.9marks.org/article/reservations-for-two-remembering-the-lords-death-at-the-lords-table-together/",
                text: "En la mesa del Señor, recordamos la muerte del Señor por nosotros (1 Cor. 11:23–25). Pero aunque la Cena es personal, no es privada. Como escribió Guy Waters: “El significado de la Cena no es la suma total de nuestros poderes de reflexión sin ayuda. . . . Ocupamos nuestra mente para que en la Cena podamos tener comunión con el Salvador.”\n\nLa Cena no es como hojear álbumes de fotos viejos tú solo, meditando recuerdos entrañables de tu juventud. Recordar sucede en comunidad: primero con Cristo y luego con tus hermanos y hermanas en Cristo (1 Cor. 10:16, 25). La comida del nuevo pacto es comunitaria en su esencia. Y eso no debería sorprendernos. La comida del antiguo pacto también era comunitaria.",
                original:
                  "At the Lord’s Table, we remember the Lord’s death for us (1 Cor. 11:23–25). But while the Supper is personal, it is not private. As Guy Waters has written, “The meaning of the Supper is not the sum total of our unaided powers of reflection. . . . We engage our minds so that in the Supper we may commune with the Savior.”\n\nThe Supper isn’t like flipping through old photo albums by yourself, pondering fond memories from your youth. Remembering happens in community—first with Christ and then with your brothers and sisters in Christ (1 Cor. 10:16, 25). The new covenant meal is communal to its core. And that shouldn’t surprise us. The old covenant meal was communal, too.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "En la Cena la iglesia comparte por la fe los beneficios del sacrificio de Cristo y gusta de antemano el banquete que prometen Isaías y Apocalipsis: un aperitivo para la cena de bodas del Cordero",
            quotes: [
              {
                speaker: "Bobby Jamieson",
                work: "The Lord’s Supper: A Foretaste of the Heavenly Banquet",
                outlet: "9Marks",
                date: "22 de diciembre de 2020",
                locator:
                  "13 párrafos: del párrafo que empieza «In the Lord’s Supper, we remember…» al que termina «…from all peoples. A feast forever.»",
                url: "https://www.9marks.org/article/the-lords-supper-a-foretaste-of-the-heavenly-banquet/",
                text: "En la Cena del Señor, recordamos y proclamamos la muerte de Jesús (1 Cor. 11:25–26). En la Cena del Señor, compartimos juntos por fe los beneficios salvadores del sacrificio de Cristo por nosotros (1 Cor. 10:16–17). Y en la Cena del Señor, experimentamos un anticipo del banquete celestial. La Cena del Señor es un aperitivo para el festín que comenzará el día en que Cristo reúna nuevamente el cielo y la tierra.\n\nConsideren las promesas de Dios en Isaías 25:6–8:\n\nEn este monte el SEÑOR de los ejércitos preparará para todos los pueblos\n\nun banquete de manjares suculentos, un banquete de vinos añejos,\n\nde manjares sustanciosos llenos de tuétano, de vinos añejos bien refinados.\n\nY en este monte destruirá\n\nel velo que cubre a todos los pueblos,\n\nel manto que se extiende sobre todas las naciones.\n\nDestruirá a la muerte para siempre;\n\ny el Señor DIOS enjugará las lágrimas de todos los rostros,\n\ny quitará de toda la tierra el oprobio de su pueblo,\n\nporque el SEÑOR lo ha dicho.\n\nEse día, las lágrimas y la vergüenza serán olvidadas para siempre. Ese día, la sábana asfixiante y estranguladora de la muerte que hoy nos ahoga a todos no solo será levantada sino consumida. Ese día, la muerte no será postergada ni desviada sino devorada. Si todas estas miserias serán removidas, ¿qué ocupará su lugar? Un banquete. Un banquete de lo mejor. Un banquete para personas de todos los pueblos. Un banquete para siempre.",
                original:
                  "In the Lord’s Supper, we remember and proclaim Jesus’ death (1 Cor. 11:25–26). In the Lord’s Supper, we share together by faith the saving benefits of Christ’s sacrifice for us (1 Cor. 10:16–17). And in the Lord’s Supper, we experience a foretaste of the heavenly banquet. The Lord’s Supper is an appetizer for the feast that will commence on the day when Christ reunites heaven and earth.\n\nConsider God’s promises in Isaiah 25:6–8:\n\nOn this mountain the LORD of hosts will make for all peoples\n\na feast of rich food, a feast of well-aged wine,\n\nof rich food full of marrow, of aged wine well refined.\n\nAnd he will swallow up on this mountain\n\nthe covering that is cast over all peoples,\n\nthe veil that is spread over all nations.\n\nHe will swallow up death forever;\n\nand the Lord GOD will wipe away tears from all faces,\n\nand the reproach of his people he will take away from all the earth,\n\nfor the LORD has spoken.\n\nOn that day, tears and shame will be forgotten forever. On that day, the smothering, strangling sheet of death that now suffocates us all will not just be lifted but consumed. On that day, death won’t be deferred or deflected but devoured. If all these miseries will be removed, what will take their place? A feast. A feast of the best. A feast for people from all peoples. A feast forever.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund ofrece un caso bíblico para la presencia real: las palabras de Jesús «este es mi cuerpo, esta es mi sangre» plantean la cuestión del verbo «es»; el juicio sobre quienes comen indignamente en Corinto pregunta si está pasando algo más; 1 Cor 10:16 habla de participación (koinonía), no de mero recuerdo, lo que él sitúa dentro de la unión con Cristo",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "Why Believe in Real Presence in the Eucharist?",
                outlet: "Truth Unites",
                date: "25 de mayo de 2023",
                locator: "Minutos 2:07 a 3:58",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/Why-Believe-in-Real-Presence-in-the-Eucharist-e24lcl7#t=127",
                text: "Número uno, la Escritura. No se encuentra una teoría completa de la Eucaristía en el Nuevo Testamento. Pero lo que sí se encuentra es lenguaje y descripción de la Eucaristía que parece implicar que tiene una sacralidad y una orientación a Cristo que va más allá de un mero recuerdo. Por supuesto, en la institución, Jesús usa estas frases: esto es mi cuerpo, esta es mi sangre. Eso no es determinante. El verbo ser, es, debe interpretarse, pero al menos plantea la pregunta: ¿qué significa exactamente eso? Luego encuentran detalles fascinantes como que personas en la iglesia de Corinto morían por participar de la Cena del Señor de manera indigna. Ahora bien, eso podría explicarse quizás con un modelo memorialista que niega la presencia real, pero al menos plantea la pregunta de si hay algo más que está sucediendo aquí. Después llegan pasajes como 1 Corintios 10, 16. La copa de bendición que bendecimos, ¿no es una participación en la sangre de Cristo? El pan que partimos, ¿no es una participación en el cuerpo de Cristo? Participar en Cristo no es lo mismo que una conmemoración o un recuerdo de Cristo. La palabra participación es la palabra koinonía, a veces traducida comunión, como en Hechos 2.42 o 2 Corintios 6.14, qué comunión tiene la luz con las tinieblas. Esta palabra comunión realmente capta la intimidad con Cristo que ha de disfrutarse en la participación en la Eucaristía. En la tradición reformada hablamos de la Eucaristía como un aspecto de nuestra unión con Cristo. Hay un vínculo espiritual místico que los creyentes tienen con Cristo, y la Eucaristía es como la expresión culminante de esto. Piénsenlo así. Es intimidad con Cristo más allá de toda expresión. Charles Spurgeon, un bautista, solía decir que esto es lo más cerca que se llega del cielo en este mundo, participar de la Eucaristía.",
                original:
                  "Number one, scripture. You don't find a full-blown theory of the Eucharist in the New Testament. But what you do find is language about and description of the Eucharist that seems to imply it has a sacredness and an orientation to Christ that goes beyond a mere remembrance. Of course, at the institution, Jesus uses these phrases, this is my body, this is my blood. That's not determinative. The verb to be, is, needs to be interpreted, but at least raises the question, you know, what does that mean exactly? Then you find fascinating little details like people in the church in Corinth dying for partaking of the Lord's Supper unworthily. Now, you could account for that maybe on a memorialist model that denies real presence, but at least raises the question of what is there something more going on here. Then you get to passages like 1 Corinthians 10, 16. The cup of blessing that we bless, is it not a participation in the blood of Christ? The bread that we break, is it not a participation in the body of Christ? A participation in Christ is not the same thing as a commemoration or remembrance of Christ. The word participation is the word koinonia, sometimes translated fellowship, as in Acts 2.42 or 2 Corinthians 6.14, what fellowship has light with darkness. This word fellowship really gets at the intimacy with Christ that is to be enjoyed in participation in the Eucharist. In the Reformed tradition, we talk about the Eucharist as one aspect of our union with Christ. There's this mystical spiritual bond that believers have with Christ, and the Eucharist is sort of the pinnacle expression of this. Think of it like this. It's intimacy with Christ beyond expression. Charles Spurgeon, a Baptist, used to say that this is as close as you get to heaven in this world, partaking of the Eucharist.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "White lee Mt 26:26–27 en su contexto pascual: Jesús toma pan sin levadura, lo bendice, lo parte y dice «tomen, coman, esto es mi cuerpo»; sostiene que un oyente judío del siglo primero no habría oído en esas palabras las categorías de la transubstanciación católico-romana, y que las palabras son un mandato que debe obedecerse",
            quotes: [
              {
                speaker: "James White",
                work: "Meaning & History of the Lord's Supper",
                outlet: "Apologia Studios",
                date: "22 de mayo de 2019",
                locator: "Minutos 50:29 a 53:22",
                url: "https://www.youtube.com/watch?v=3PlnXl6Cqsc&t=3029s",
                text: "Así que versículo 26, mientras ellos estaban comiendo, la comida de la Pascua ya ha tenido lugar en cierto modo, y así todo el simbolismo ya está ahí, no se hace de antemano, pero dice que mientras estaban comiendo, Jesús tomó pan, solo pan, pero por supuesto, qué pan habría en una mesa de la Pascua: pan sin levadura, lo que llamamos matzá, pan sin levadura, y lo bendijo, lo partió y se lo dio a sus discípulos, y así hay un trozo de pan que él parte, lo bendice y se lo da a sus discípulos, y dice: tomen, coman, esto es mi cuerpo. Ahora bien, el apologista que hay en mí me exige detenerme un momento para enfatizar cómo cualquier judío del siglo primero sentado allí habría entendido estas palabras. No eran filósofos aristotélicos. Nunca habían oído hablar de sustancia y accidentes. No pensaban en esas categorías. Y si se preguntan: espera, ¿cómo podría funcionar la versión romana aquí, porque Jesús todavía no ha muerto, créanlo o no, ellos todavía creen que Jesús realizó el milagro de la transubstanciación aquí mismo, incluso antes de morir, en anticipación de su muerte, de modo que el cuerpo, de modo que lo que les dio fue transubstanciado, y que al hacerlo ordenó a los apóstoles como sacerdotes del nuevo pacto. Eso es mucho para meter dentro de esas palabras, pero recuerden que Roma no cree en la Sola Scriptura, así que miren todo lo que Roma mete en las palabras sobre María en el Nuevo Testamento. Pueden poner montañas enteras de teología en palabritas diminutas cuando no son su autoridad última, y Roma niega la Sola Scriptura, así que no es su autoridad última. Entonces él toma pan, se lo dio a sus discípulos diciendo: tomen, coman, esto es mi cuerpo. Eso es un mandato.",
                original:
                  "So verse 26, so while they were eating and so the Passover meal has sort of taken place and so it's all the symbolism is already there it's not done beforehand but it says while they were eating Jesus took bread just bread but of course what bread would be on a Passover table unleavened bread what we call matzah but unleavened bread and blessing it he broke it and gave it to his disciples and so there's one chunk of bread that he breaks he blesses it and he gives it to his disciples and he says take eat this is my body now the apologist in me requires me to take the moment to emphasize how any Jewish person in the first century sitting there would have understood these words. They were not Aristotelian philosophers. They had never heard of substance and accidents. They didn't think in those categories. And if you're wondering, wait a minute, how could the Roman version work here because Jesus hasn't died yet believe it or not they still believe that Jesus performed the miracle of transubstantiation right here even before he died in anticipation of his death so that the body so that what he gave them was transubstantiated and that in so doing he ordained the apostles as priests of the new covenant that's a whole lot to stick inside those words but remember rome doesn't believe in sola scriptura so look at everything rome is crammed in the words about mary in the new testament you can put entire mountains of theology on teeny tiny little words when they're not your ultimate authority and Rome denies Sola Scriptura, so it's not their ultimate authority. So he takes bread, he gave it to his disciples saying, take, eat, this is my body. That's a command.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "White lee 1 Cor 11:23–24: habiendo dado gracias, lo partió y dijo «esto es mi cuerpo, que es por ustedes», y «hagan esto en memoria de mí» (literalmente, para mi recuerdo); quiere recuperar la palabra eucaristía, «dar gracias», para la Cena del Señor",
            quotes: [
              {
                speaker: "James White",
                work: "Meaning & History of the Lord's Supper (Part 2)",
                outlet: "Apologia Studios",
                date: "4 de junio de 2019",
                locator: "Minutos 45:45 a 48:12",
                url: "https://www.youtube.com/watch?v=CK8r3rh-1Vo&t=2745s",
                text: "pero el «tomó pan» probablemente ya les había explicado, si no sabían de qué trataba la cena de la Pascua, por qué habría pan allí, por qué habría vino allí, etc., etc., pero tomó pan y, habiendo dado gracias otra vez, hace dos semanas Eucaristía a O, la Eucaristía para dar gracias, dar gracias, es un concepto hermoso que nos ha sido robado porque se ha aplicado a algo que es antibíblico. Personalmente la quiero recuperar porque es una palabra hermosa, hermosa. Habiendo dado gracias, la partió y dijo: esto es mi cuerpo, y luego literalmente es en favor de ustedes, esto es mi cuerpo en favor de ustedes; hagan esto en memoria de mí, o literalmente hagan esto para mi recuerdo. Así que toma el pan, da gracias por él, lo parte una vez más para representar el hecho de que su cuerpo va a ser partido. No está entero, está partido, así como su cuerpo va a ser partido en su autosacrificio, y les dice: esto es mi cuerpo. Y en la versión de Pablo aquí, y no van a entrar en el tema de hoy de todos modos, la variante textual en el texto: muchos escribas, porque este era un pasaje muy, muy conocido, lo que pasa es que cuando tienes la misma historia contada en la Escritura de múltiples maneras por múltiples personas, los escribas que quizás habían memorizado el relato de Mateo quieren armonizar las palabras de Pablo con las de Mateo, a veces a propósito, a veces simplemente porque así es como lo memoricé yo, y entonces ni siquiera te das cuenta de que estás haciendo un cambio. Así que eso está en la historia de los manuscritos, y ahí tienen eso sucediendo, y entonces hay algunas de esas cosas para mirar, pero aquí tienen: esto es mi cuerpo en favor de ustedes.",
                original:
                  "but the he took bread probably had already explained to them if they had not known what the Passover supper was about why bread would have been there why wine would have been there etc etc but he took bread and having given thanks again two weeks ago Eucharist to O the Eucharist to give thanksgiving to give thanks it's a beautiful concept that has been stolen from us because it has been applied to something that is unbiblical I want it back personally because it's a beautiful beautiful word having given thanks he broke it and said this is my body and then literally it's in behalf of you this is my body in behalf of you do this in remembrance of me or literally do this unto my remembrance and so he takes the bread he gives thanks for it he breaks it once again to represent the fact that his body is going to be broken it is not whole it is broken just as his body is going to be broken in his self-sacrifice and he says to them this is my body and in Paul's version here and they're not going to go into the issue of today anyways the textual variance in the text many scribes because this was a very very well-known passage what happens is when you have the same story told in scripture in multiple ways by multiple people scribes who had memorized maybe Matthew's account want to harmonize Paul's words with Matthew's sometimes purposely sometimes just because that's how I memorized it and so you're not even aware that you're making a change so there is that in in the history of the manuscripts you have that happening and so So there are some of those things to look at, but here you have, this is my body in behalf of you.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "White lee 1 Cor 11:26–28: la cena proclama la muerte del Señor hasta que él venga, así que quien come o bebe de manera indigna es culpable del cuerpo y la sangre; el pasaje pide una actitud apropiada y que cada uno se examine a sí mismo, y él objeta a las iglesias que tratan la cena como una herramienta evangelística para no creyentes",
            quotes: [
              {
                speaker: "James White",
                work: "James White on the Lord's Supper (Pt. 3)",
                outlet: "Apologia Studios",
                date: "29 de julio de 2019",
                locator: "Minutos 26:02 a 28:12",
                url: "https://www.youtube.com/watch?v=w65AV2fiHQ0&t=1562s",
                text: "Estamos proclamando la muerte del Señor hasta que Él venga. Por lo tanto, puesto que esto es una proclamación de su muerte, estos elementos representan su autosacrificio. Quien coma el pan o beba la copa del Señor de manera indigna será culpable del cuerpo y de la sangre del Señor. Ahora llegamos a por qué esto es importante, porque en el contexto de 1 Corintios 11, esto tiene que ver con juzgar, con los problemas dentro de la iglesia, los problemas que la iglesia enfrenta. Esto está justo en la última sección, antes de que transicione a la discusión de los dones espirituales y algunos de los abusos que están ocurriendo en esa área. Problemas en la iglesia. Y entonces él quiere enfatizar el hecho de que tiene que haber una actitud apropiada de parte de la persona que participa de la cena. Por eso me asombra que haya tantas iglesias hoy que de ninguna manera, forma ni modo buscan amonestar o advertir a los no creyentes para que no participen de la cena. Cuando yo estaba en el seminario terminé discutiendo una vez con uno de mis profesores porque él decía que la Cena del Señor es una gran herramienta evangelística, traigamos a todos los no creyentes que podamos porque les gusta el jugo de uva y el pan, entonces ¿por qué no? Y yo le dije: pero, pero cada hombre debe examinarse a sí mismo, y ustedes deben comer de manera digna. Tiene que haber un examen que debe tener lugar. ¿Quieren hacer que la gente sea culpable del cuerpo y la sangre del Señor? En cambio, se nos dice: pero que el hombre, versículo 28, se examine a sí mismo, y así coma del pan y beba de la copa. Esto no es algo que deba tomarse a la ligera por lo que representa.",
                original:
                  "We are proclaiming the Lord's death until He comes. Therefore, since this is a proclamation of His death, these elements represent His self-sacrifice. Whoever eats the bread or drinks the cup of the Lord in an unworthy manner shall be guilty of the body and the blood of the Lord. So now we get into why this is important because in the context of 1 Corinthians 11, this has to do with judging, with the issues within the church, the problems that the church is facing. This is right in the last section, right before he transitions into discussion of the spiritual gifts and some of the abuses that are going on in that area. problems in the church. And so he wants to emphasize the fact that there needs to be an appropriate attitude on the part of the person who is partaking of the supper. That's why it is amazing to me that there are so many churches today that do not in any way, shape, or form seek to admonish or warn unbelievers from partaking of the supper when i was when i was in seminary i ended up in an argument with one of my professors once because he was saying that the lord's supper is a great evangelistic tool let's try to get all the unbelievers we can because they like grape juice and bread so why not and i was like but but every man is to is to examine himself and and you are to eat in a worthy manner. There is to be examination that is to take place. Do you want to make people to be guilty of the body and blood of the Lord? Instead, we are told, but let a man, verse 28, examine himself and so let him eat of the bread and drink of the cup. This is not something to be engaged in lightly because of what it represents.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Murr cita el «con intenso deseo he deseado comer esta Pascua antes de padecer» de Jesús y las palabras «este es mi cuerpo, dado por ustedes… hagan esto en memoria de mí», dice que la Cena del Señor es una Pascua, promete aclarar el sentido de «este es mi cuerpo» en las próximas semanas, y afirma que la Cena fue una celebración de la Pascua judía",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Creencias Erradas Sobre La Eucaristía - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "26 de marzo de 2023",
                locator: "Minutos 41:43 a 42:19",
                url: "https://www.youtube.com/watch?v=3ypIjraXGLw&t=2503s",
                text: "dice Jesús intensamente he deseado comer esta Pascua antes de padecer la cena del Señor es una Pascua este pan que dijo Jesús es mi cuerpo y vamos a aclarar eso porque Jesús dijo esto es mi cuerpo entregado por ustedes que dijo hagan esto en memoria de mi primera verdad que sabemos la cena del Señor, la Santa Cena fue una celebración de la Pascua Judía y vamos a ver eso en los siguientes dos domingos y va a ser algo fascinante, importante para nuestra fe. No se",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.10.16-1Cor.10.17"],
      text: "Segunda Confesión de Londres (1689), 30.1, p. 270: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] for the perpetual remembrance, and shewing forth the sacrifice in his death, confirmation of the faith of believers in all the benefits thereof, their spiritual nourishment, and growth in him […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.1 nota (b) (1688 p. 99): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and to be a Bond and Pledge of their Communion with him, and with each other.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar. Segunda Confesión de Londres (1689), 30.7, 1688 impresión p. 102 (margen nota l): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] spiritually receive, and feed upon Christ crucified, (l) and all the benefits of his Death; the Body and Blood of Christ being then not corporally, or carnally, but spiritually present to the Faith of Believers, in that Ordinance, as the Elements themselves are to their outward senses.». Edición: A Confession of Faith, put forth by the Elders and Brethren of many Congregations (Londres, 1688).",
      apologists: {
        arguments: [
          {
            title:
              "En la mesa del Señor la iglesia recuerda la muerte del Señor por nosotros; la Cena es personal pero no privada, y el recuerdo sucede en comunidad, primero con Cristo y luego con los hermanos y hermanas",
            quotes: [
              {
                speaker: "Caleb Batchelor",
                work: "Reservations for Two: Remembering the Lord’s Death at the Lord’s Table Together",
                outlet: "9Marks",
                date: "7 de agosto de 2020",
                locator:
                  "2 párrafos: del párrafo que empieza «At the Lord’s Table, we remember…» al que termina «…old covenant meal was communal, too.»",
                url: "https://www.9marks.org/article/reservations-for-two-remembering-the-lords-death-at-the-lords-table-together/",
                text: "En la mesa del Señor, recordamos la muerte del Señor por nosotros (1 Cor. 11:23–25). Pero aunque la Cena es personal, no es privada. Como escribió Guy Waters: “El significado de la Cena no es la suma total de nuestros poderes de reflexión sin ayuda. . . . Ocupamos nuestra mente para que en la Cena podamos tener comunión con el Salvador.”\n\nLa Cena no es como hojear álbumes de fotos viejos tú solo, meditando recuerdos entrañables de tu juventud. Recordar sucede en comunidad: primero con Cristo y luego con tus hermanos y hermanas en Cristo (1 Cor. 10:16, 25). La comida del nuevo pacto es comunitaria en su esencia. Y eso no debería sorprendernos. La comida del antiguo pacto también era comunitaria.",
                original:
                  "At the Lord’s Table, we remember the Lord’s death for us (1 Cor. 11:23–25). But while the Supper is personal, it is not private. As Guy Waters has written, “The meaning of the Supper is not the sum total of our unaided powers of reflection. . . . We engage our minds so that in the Supper we may commune with the Savior.”\n\nThe Supper isn’t like flipping through old photo albums by yourself, pondering fond memories from your youth. Remembering happens in community—first with Christ and then with your brothers and sisters in Christ (1 Cor. 10:16, 25). The new covenant meal is communal to its core. And that shouldn’t surprise us. The old covenant meal was communal, too.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "El pan y la copa son signos visibles y materiales; cuando los miembros de una iglesia local participan, se convierten en el medio por el cual tienen comunión con Cristo y unos con otros, y no se puede participar de la mesa del Señor y de la mesa de los demonios",
            quotes: [
              {
                speaker: "Tiago Oliveira",
                work: "Yes, the Ordinances Really Do Change People",
                outlet: "9Marks",
                date: "26 de julio de 2021",
                locator:
                  "2 párrafos: del párrafo que empieza «Concerning the Lord’s Supper, Paul asks…» al que termina «…rightly, we’re communing with something else.»",
                url: "https://www.9marks.org/article/yes-the-ordinances-really-do-change-people/",
                text: "Acerca de la Cena del Señor, Pablo pregunta a los corintios: “La copa de bendición que bendecimos, ¿no es una participación en la sangre de Cristo? El pan que partimos, ¿no es una participación en el cuerpo de Cristo? Porque hay un solo pan, nosotros, que somos muchos, somos un cuerpo, pues todos participamos de aquel un pan” (1 Cor. 10:16–17; cf. Juan 6:53–58).\n\nEl pan y la copa son signos visibles y materiales. Pero cuando los miembros de una iglesia local participan de estos elementos, se convierten en algo más. Se convierten en el medio por el cual tenemos comunión con Cristo y entre nosotros. Por eso Pablo luego dice que “no pueden participar de la mesa del Señor y de la mesa de los demonios” (1 Cor. 10:21). Cuando participamos correctamente, hay verdadera comunión con Dios y entre nosotros. Cuando no participamos correctamente, estamos en comunión con otra cosa.",
                original:
                  "Concerning the Lord’s Supper, Paul asks the Corinthians: “The cup of blessing that we bless, is it not a participation in the blood of Christ? The bread that we break, is it not a participation in the body of Christ? Because there is one bread, we who are many are one body, for we all partake of the one bread” (1 Cor. 10:16–17; cf. John 6:53–58).\n\nThe cup and the bread are visible, material signs. But when the members of a local church partake of these elements, they become something more. They become the means by which we fellowship with Christ and one another. That’s why Paul later says that “you cannot partake in the table of the Lord and the table of demons” (1 Cor. 10:21). When we’re participating rightly, there’s true communion with God and with one another. When we’re not participating rightly, we’re communing with something else.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "En la Cena la iglesia comparte por la fe los beneficios del sacrificio de Cristo y gusta de antemano el banquete que prometen Isaías y Apocalipsis: un aperitivo para la cena de bodas del Cordero",
            quotes: [
              {
                speaker: "Bobby Jamieson",
                work: "The Lord’s Supper: A Foretaste of the Heavenly Banquet",
                outlet: "9Marks",
                date: "22 de diciembre de 2020",
                locator:
                  "13 párrafos: del párrafo que empieza «In the Lord’s Supper, we remember…» al que termina «…from all peoples. A feast forever.»",
                url: "https://www.9marks.org/article/the-lords-supper-a-foretaste-of-the-heavenly-banquet/",
                text: "En la Cena del Señor, recordamos y proclamamos la muerte de Jesús (1 Cor. 11:25–26). En la Cena del Señor, compartimos juntos por fe los beneficios salvadores del sacrificio de Cristo por nosotros (1 Cor. 10:16–17). Y en la Cena del Señor, experimentamos un anticipo del banquete celestial. La Cena del Señor es un aperitivo para el festín que comenzará el día en que Cristo reúna nuevamente el cielo y la tierra.\n\nConsideren las promesas de Dios en Isaías 25:6–8:\n\nEn este monte el SEÑOR de los ejércitos preparará para todos los pueblos\n\nun banquete de manjares suculentos, un banquete de vinos añejos,\n\nde manjares sustanciosos llenos de tuétano, de vinos añejos bien refinados.\n\nY en este monte destruirá\n\nel velo que cubre a todos los pueblos,\n\nel manto que se extiende sobre todas las naciones.\n\nDestruirá a la muerte para siempre;\n\ny el Señor DIOS enjugará las lágrimas de todos los rostros,\n\ny quitará de toda la tierra el oprobio de su pueblo,\n\nporque el SEÑOR lo ha dicho.\n\nEse día, las lágrimas y la vergüenza serán olvidadas para siempre. Ese día, la sábana asfixiante y estranguladora de la muerte que hoy nos ahoga a todos no solo será levantada sino consumida. Ese día, la muerte no será postergada ni desviada sino devorada. Si todas estas miserias serán removidas, ¿qué ocupará su lugar? Un banquete. Un banquete de lo mejor. Un banquete para personas de todos los pueblos. Un banquete para siempre.",
                original:
                  "In the Lord’s Supper, we remember and proclaim Jesus’ death (1 Cor. 11:25–26). In the Lord’s Supper, we share together by faith the saving benefits of Christ’s sacrifice for us (1 Cor. 10:16–17). And in the Lord’s Supper, we experience a foretaste of the heavenly banquet. The Lord’s Supper is an appetizer for the feast that will commence on the day when Christ reunites heaven and earth.\n\nConsider God’s promises in Isaiah 25:6–8:\n\nOn this mountain the LORD of hosts will make for all peoples\n\na feast of rich food, a feast of well-aged wine,\n\nof rich food full of marrow, of aged wine well refined.\n\nAnd he will swallow up on this mountain\n\nthe covering that is cast over all peoples,\n\nthe veil that is spread over all nations.\n\nHe will swallow up death forever;\n\nand the Lord GOD will wipe away tears from all faces,\n\nand the reproach of his people he will take away from all the earth,\n\nfor the LORD has spoken.\n\nOn that day, tears and shame will be forgotten forever. On that day, the smothering, strangling sheet of death that now suffocates us all will not just be lifted but consumed. On that day, death won’t be deferred or deflected but devoured. If all these miseries will be removed, what will take their place? A feast. A feast of the best. A feast for people from all peoples. A feast forever.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "El bautismo es un distintivo de pertenencia que señala al creyente como propiedad del Dios trino y hace de los creyentes una familia entre sí; la Cena representa la comunión con Cristo y, por tanto, unos con otros",
            quotes: [
              {
                speaker: "Bobby Jamieson",
                work: "The Ordinances: A True and Better Identity Politics",
                outlet: "9Marks",
                date: "18 de marzo de 2022",
                locator:
                  "2 párrafos: del párrafo que empieza «Both baptism and the Lord’s Supper…» al que termina «…the one bread” (1 Cor 10:17).»",
                url: "https://www.9marks.org/article/the-ordinances-a-true-and-better-identity-politics/",
                text: "Tanto el bautismo como la Cena del Señor proclaman que pertenecemos a Dios, y, porque pertenecemos a Dios, también pertenecemos unos a otros. Cuando Jesús manda a sus discípulos bautizar a los nuevos creyentes “en el nombre” del Padre, del Hijo y del Espíritu Santo, está diciendo que el bautismo es una insignia de pertenencia (Mat. 28:19). El bautismo marca a un creyente como propiedad personal del Dios Trino. Y porque el bautismo nos hace propiedad de Dios, también nos hace familia unos de otros. Los que fueron bautizados en Pentecostés fueron, por ese acto, “añadidos a la iglesia” (Hech. 2:41). El bautismo crea un nuevo cuerpo político, definido no por algún criterio previo de membresía grupal, sino por el arrepentimiento y la fe en Cristo.\n\nY la Cena del Señor escenifica de forma colectiva nuestra comunión con Cristo y, por lo tanto, nuestra comunión unos con otros. Es decir, en la Cena del Señor, una iglesia local, por la fe, comparte juntos los beneficios de Cristo (1 Cor. 10:16). Y al compartir así en Cristo, llegamos a compartir una sola vida común. Al participar del pan que representa su cuerpo, nosotros mismos nos solidificamos en solidaridad: “Porque hay un solo pan, nosotros, que somos muchos, somos un cuerpo, pues todos participamos del mismo pan” (1 Cor 10:17).",
                original:
                  "Both baptism and the Lord’s Supper proclaim that we belong to God, and, because we belong to God, we also belong to each other. When Jesus commands his disciples to baptize new believers “in the name” of the Father and Son and Holy Spirit, he is saying that baptism is a badge of belonging (Matt. 28:19). Baptism marks off a believer as the personal property of the Triune God. And because baptism makes us God’s property, it also makes us each other’s family. Those who were baptized at Pentecost were, by that act, “added to the church” (Acts 2:41). Baptism creates a new body politic, one defined not by any prior criterion of group membership, but by repentance and faith in Christ.\n\nAnd the Lord’s Supper corporately enacts our communion with Christ and thereby our communion with each other. That is, in the Lord’s Supper, a local church, by faith, shares in the benefits of Christ together (1 Cor. 10:16). And by so sharing in Christ, we come to share a single common life. By partaking of the bread that stands for his body, we ourselves solidify into solidarity: “Because there is one bread, we who are many are one body, for we all partake of the one bread” (1 Cor 10:17).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund ofrece un caso bíblico para la presencia real: las palabras de Jesús «este es mi cuerpo, esta es mi sangre» plantean la cuestión del verbo «es»; el juicio sobre quienes comen indignamente en Corinto pregunta si está pasando algo más; 1 Cor 10:16 habla de participación (koinonía), no de mero recuerdo, lo que él sitúa dentro de la unión con Cristo",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "Why Believe in Real Presence in the Eucharist?",
                outlet: "Truth Unites",
                date: "25 de mayo de 2023",
                locator: "Minutos 2:07 a 3:58",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/Why-Believe-in-Real-Presence-in-the-Eucharist-e24lcl7#t=127",
                text: "Número uno, la Escritura. No se encuentra una teoría completa de la Eucaristía en el Nuevo Testamento. Pero lo que sí se encuentra es lenguaje y descripción de la Eucaristía que parece implicar que tiene una sacralidad y una orientación a Cristo que va más allá de un mero recuerdo. Por supuesto, en la institución, Jesús usa estas frases: esto es mi cuerpo, esta es mi sangre. Eso no es determinante. El verbo ser, es, debe interpretarse, pero al menos plantea la pregunta: ¿qué significa exactamente eso? Luego encuentran detalles fascinantes como que personas en la iglesia de Corinto morían por participar de la Cena del Señor de manera indigna. Ahora bien, eso podría explicarse quizás con un modelo memorialista que niega la presencia real, pero al menos plantea la pregunta de si hay algo más que está sucediendo aquí. Después llegan pasajes como 1 Corintios 10, 16. La copa de bendición que bendecimos, ¿no es una participación en la sangre de Cristo? El pan que partimos, ¿no es una participación en el cuerpo de Cristo? Participar en Cristo no es lo mismo que una conmemoración o un recuerdo de Cristo. La palabra participación es la palabra koinonía, a veces traducida comunión, como en Hechos 2.42 o 2 Corintios 6.14, qué comunión tiene la luz con las tinieblas. Esta palabra comunión realmente capta la intimidad con Cristo que ha de disfrutarse en la participación en la Eucaristía. En la tradición reformada hablamos de la Eucaristía como un aspecto de nuestra unión con Cristo. Hay un vínculo espiritual místico que los creyentes tienen con Cristo, y la Eucaristía es como la expresión culminante de esto. Piénsenlo así. Es intimidad con Cristo más allá de toda expresión. Charles Spurgeon, un bautista, solía decir que esto es lo más cerca que se llega del cielo en este mundo, participar de la Eucaristía.",
                original:
                  "Number one, scripture. You don't find a full-blown theory of the Eucharist in the New Testament. But what you do find is language about and description of the Eucharist that seems to imply it has a sacredness and an orientation to Christ that goes beyond a mere remembrance. Of course, at the institution, Jesus uses these phrases, this is my body, this is my blood. That's not determinative. The verb to be, is, needs to be interpreted, but at least raises the question, you know, what does that mean exactly? Then you find fascinating little details like people in the church in Corinth dying for partaking of the Lord's Supper unworthily. Now, you could account for that maybe on a memorialist model that denies real presence, but at least raises the question of what is there something more going on here. Then you get to passages like 1 Corinthians 10, 16. The cup of blessing that we bless, is it not a participation in the blood of Christ? The bread that we break, is it not a participation in the body of Christ? A participation in Christ is not the same thing as a commemoration or remembrance of Christ. The word participation is the word koinonia, sometimes translated fellowship, as in Acts 2.42 or 2 Corinthians 6.14, what fellowship has light with darkness. This word fellowship really gets at the intimacy with Christ that is to be enjoyed in participation in the Eucharist. In the Reformed tradition, we talk about the Eucharist as one aspect of our union with Christ. There's this mystical spiritual bond that believers have with Christ, and the Eucharist is sort of the pinnacle expression of this. Think of it like this. It's intimacy with Christ beyond expression. Charles Spurgeon, a Baptist, used to say that this is as close as you get to heaven in this world, partaking of the Eucharist.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Heb.9.25-Heb.9.28"],
      text: "Segunda Confesión de Londres (1689), 30.2, pp. 270–271: este versículo figura como nota al margen junto a la cláusula, en inglés, «In this ordinance Christ is not offered up to his Father, nor any real sacrifice made at all, for remission of sin of the quick or dead; but only a memorial of that one offering up of himself, by himself, upon the crosse, once for all […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.2 nota (c) (1688 p. 99): este versículo figura como nota al margen junto a la cláusula, en inglés, «In this Ordinance Christ is not offered up to his Father, nor any real Sacrifice made at all, for Remission of Sin of the Quick or Dead, but only a Memorial of that one offering up of himself, by himself, upon the Cross, once for all […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["Acts.2.41-Acts.2.42"],
      text: "Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar. Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "Los bautismos registrados en Hechos son en gran medida inmediatos, y el autor expone cinco que podrían servir de modelo para el bautismo espontáneo; nombra tres rasgos de los bautismos de Hechos (primeros conversos, actos sobrenaturales del Espíritu, respuesta al mensaje apostólico) y desarrolla el primero en la parte citada",
            quotes: [
              {
                speaker: "Caleb Morell",
                work: "Does the Book of Acts Teach Spontaneous Baptisms?",
                outlet: "9Marks",
                date: "10 de marzo de 2020",
                locator:
                  "19 párrafos: del párrafo que empieza «Of the nine instances of baptism…» al que termina «…the gospel advances to new regions.»",
                url: "https://www.9marks.org/article/does-the-book-of-acts-teach-spontaneous-baptisms/",
                text: "De las nueve veces que aparece el bautismo en Hechos, dos son ambiguas en cuanto al momento: el bautismo de Lidia y su casa en Filipos, en Hechos 16:14–15, y los corintios que “creyeron y fueron bautizados”, en Hechos 18:8. Dos implican la recepción demorada del Espíritu Santo hasta después del bautismo: los samaritanos de Hechos 8, y el bautismo de los doce discípulos de Juan el Bautista en Éfeso, en Hechos 19:5. Nos quedan cinco casos de bautismo como posibles modelos de bautismos espontáneos. (Para una lista completa de los bautismos en Hechos, ver la Tabla 1 más abajo.)\n\nEstos son los cinco casos espontáneos de bautismo:\n\nPentecostés (Hechos 2:38, 41)\n\nEl eunuco etíope (Hechos 8:36–38)\n\nSaulo (Hechos 9:18)\n\nCornelio y su casa (Hechos 10:34–46)\n\nEl carcelero de Filipos y su familia (Hechos 16:33)\n\nLos propósitos de los bautismos en Hechos\n\nEl patrón de los bautismos inmediatos es relativamente claro. La pregunta, sin embargo, es si estos ejemplos de espontaneidad son normativos para las iglesias de hoy. ¿Podemos sacar de ellos una base positiva para afirmar que los bautismos espontáneos son permisibles o incluso exigidos?\n\nLucas registra sorprendentemente pocos bautismos en Hechos. En un libro donde miles se convierten y decenas de iglesias se fundan, menciona solo nueve casos de bautismo. De hecho, todo el primer viaje misionero de Pablo transcurre sin una sola mención de bautismo (ver Hechos 13–14). Esto sugiere que los bautismos efectivamente registrados son inusuales o incluso inimitables. Surge la pregunta: ¿qué tienen de especial los bautismos registrados en Hechos?\n\nTres rasgos caracterizan los bautismos en Hechos:\n\nLos bautismos registrados involucran todos a “primeros conversos” en un escenario histórico-redentivamente significativo.\n\nCasi todos los bautismos están acompañados de actos sobrenaturales del Espíritu Santo.\n\nCada bautismo ocurre en respuesta a creer en el mensaje apostólico.\n\nVeamos cada uno de estos puntos por separado.\n\nEl bautismo de “primeros conversos”\n\nEl tema dominante de los bautismos en Hechos es que todos involucran a los llamados “primeros conversos”, es decir, las primeras personas que creen en nuevas regiones que siguen la trayectoria hacia afuera de la comisión de Jesús: “serán mis testigos en Jerusalén y en toda Judea y Samaria, y hasta lo último de la tierra” (Hech. 1:8). Así, en Pentecostés, 3000 son bautizados cuando la iglesia se establece en Jerusalén. Así como el éxodo marcó la creación del pueblo de Dios en el Antiguo Testamento y estuvo acompañado de señales sobrenaturales de juicio, así el pueblo del nuevo pacto de Dios es creado en Pentecostés con señales y maravillas semejantes.\n\nEn Hechos 8, el evangelio llega a los enemigos históricos de los judíos, los samaritanos, y son bautizados (Hech. 8:12–13). Más adelante en el mismo capítulo, el evangelio alcanza a un prosélito etíope (Hech. 8:36–38). Continuando el tema de la expansión del evangelio, Hechos 10 registra la primera instancia de conversiones y bautismos de gentiles (Hech. 10:34–46).\n\nEn este punto, sin embargo, los bautismos en Hechos prácticamente se detienen. Con las notables excepciones de los bautismos en Filipos (Hech. 16:14–15; 16:31–34) y en Corinto, que señalan el movimiento hacia afuera hasta los confines de la tierra, Lucas guarda en gran medida silencio. ¿Por qué? Porque una de las razones principales por las que se registran bautismos en Hechos es resaltar la obra de Dios en escenarios pioneros, a medida que el evangelio avanza hacia nuevas regiones.",
                original:
                  "Of the nine instances of baptism in Acts, two are ambiguous about the timing: the baptism of Lydia and her household in Philippi in Acts 16:14–15, and the Corinthians who “believed and were baptized” in Acts 18:8. Two involve the delayed reception of the Holy Spirit until after baptism: the Samaritans in Acts 8, and the baptism of the twelve disciples of John the Baptist at Ephesus in Acts 19:5. We’re left with five instances of baptism as possible models for spontaneous baptisms. (For a comprehensive list of baptisms in Acts see Table 1 below.)\n\nHere are the five spontaneous instances of baptism:\n\nPentecost (Acts 2:38, 41)\n\nThe Ethiopian Eunuch (Acts 8:36–38)\n\nSaul (Acts 9:18)\n\nCornelius and his household (Acts 10:34–46)\n\nThe Philippian jailer and his family (Acts 16:33)\n\nThe Purposes of Baptisms in Acts\n\nThe pattern of immediate baptisms is relatively clear. The question, however, is whether or not these examples of spontaneity are normative for churches today. Can we draw a positive warrant from them that spontaneous baptisms are permissible or even required?\n\nLuke records surprisingly few baptisms in Acts. In a book where thousands are converted and dozens of churches are started, he mentions only nine instances of baptism. In fact, Paul’s entire first missionary journey goes by without a single mention of baptism (see Acts 13–14). This suggests that the baptisms actually recorded are unusual or even inimitable. It raises the question: what’s so special about the recorded baptisms in Acts?\n\nThree features characterize the baptisms in Acts:\n\nThe baptisms recorded all involve “first converts” in a historically-redemptively significant setting.\n\nNearly every baptism is accompanied by supernatural acts of the Holy Spirit.\n\nEach baptism takes place in response to believing the Apostolic message.\n\nLet’s look at each of these in turn.\n\nThe Baptism of “First Converts”\n\nThe dominant theme of the baptisms in Acts is that they all involve so-called “first converts”—that is, the first people to believe in new regions that follow the outward trajectory of Jesus’ commission: “you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth” (Acts 1:8). So on Pentecost, 3000 are baptized as the church is established in Jerusalem. Just as the Exodus marked the creation of the people of God in the Old Testament and was accompanied by supernatural signs of judgment, so the New Covenant people of God is created at Pentecost with similar signs and wonders.\n\nIn Acts 8, the gospel comes to the historic enemies of the Jews—the Samaritans—and they are baptized (Acts 8:12–13). Later in the same chapter, the gospel reaches an Ethiopian proselyte (Acts 8:36–38). Continuing the theme of gospel expansion, Acts 10 records the first instance of Gentile conversions and baptisms (Acts 10:34–46).\n\nAt this point, however, the baptisms in Acts basically stop. With the notable exceptions of the baptisms in Philippi (Acts 16:14–15; 16:31–34) and Corinth, which signal the move outward to the ends of the earth, Luke largely goes silent. Why? Because one of the main reasons baptisms are recorded in Acts is to highlight God’s work in pioneer settings as the gospel advances to new regions.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "El bautismo es un distintivo de pertenencia que señala al creyente como propiedad del Dios trino y hace de los creyentes una familia entre sí; la Cena representa la comunión con Cristo y, por tanto, unos con otros",
            quotes: [
              {
                speaker: "Bobby Jamieson",
                work: "The Ordinances: A True and Better Identity Politics",
                outlet: "9Marks",
                date: "18 de marzo de 2022",
                locator:
                  "2 párrafos: del párrafo que empieza «Both baptism and the Lord’s Supper…» al que termina «…the one bread” (1 Cor 10:17).»",
                url: "https://www.9marks.org/article/the-ordinances-a-true-and-better-identity-politics/",
                text: "Tanto el bautismo como la Cena del Señor proclaman que pertenecemos a Dios, y, porque pertenecemos a Dios, también pertenecemos unos a otros. Cuando Jesús manda a sus discípulos bautizar a los nuevos creyentes “en el nombre” del Padre, del Hijo y del Espíritu Santo, está diciendo que el bautismo es una insignia de pertenencia (Mat. 28:19). El bautismo marca a un creyente como propiedad personal del Dios Trino. Y porque el bautismo nos hace propiedad de Dios, también nos hace familia unos de otros. Los que fueron bautizados en Pentecostés fueron, por ese acto, “añadidos a la iglesia” (Hech. 2:41). El bautismo crea un nuevo cuerpo político, definido no por algún criterio previo de membresía grupal, sino por el arrepentimiento y la fe en Cristo.\n\nY la Cena del Señor escenifica de forma colectiva nuestra comunión con Cristo y, por lo tanto, nuestra comunión unos con otros. Es decir, en la Cena del Señor, una iglesia local, por la fe, comparte juntos los beneficios de Cristo (1 Cor. 10:16). Y al compartir así en Cristo, llegamos a compartir una sola vida común. Al participar del pan que representa su cuerpo, nosotros mismos nos solidificamos en solidaridad: “Porque hay un solo pan, nosotros, que somos muchos, somos un cuerpo, pues todos participamos del mismo pan” (1 Cor 10:17).",
                original:
                  "Both baptism and the Lord’s Supper proclaim that we belong to God, and, because we belong to God, we also belong to each other. When Jesus commands his disciples to baptize new believers “in the name” of the Father and Son and Holy Spirit, he is saying that baptism is a badge of belonging (Matt. 28:19). Baptism marks off a believer as the personal property of the Triune God. And because baptism makes us God’s property, it also makes us each other’s family. Those who were baptized at Pentecost were, by that act, “added to the church” (Acts 2:41). Baptism creates a new body politic, one defined not by any prior criterion of group membership, but by repentance and faith in Christ.\n\nAnd the Lord’s Supper corporately enacts our communion with Christ and thereby our communion with each other. That is, in the Lord’s Supper, a local church, by faith, shares in the benefits of Christ together (1 Cor. 10:16). And by so sharing in Christ, we come to share a single common life. By partaking of the bread that stands for his body, we ourselves solidify into solidarity: “Because there is one bread, we who are many are one body, for we all partake of the one bread” (1 Cor 10:17).",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.20.7"],
      text: "Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["Matt.28.18-Matt.28.20"],
      text: "Segunda Confesión de Londres (1689), 28.1, p. 269: este versículo figura como nota al margen junto a la cláusula, en inglés, «Baptism and the Lord's Supper are ordinances of positive, and soveraign institution […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar. Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "El bautismo es un distintivo de pertenencia que señala al creyente como propiedad del Dios trino y hace de los creyentes una familia entre sí; la Cena representa la comunión con Cristo y, por tanto, unos con otros",
            quotes: [
              {
                speaker: "Bobby Jamieson",
                work: "The Ordinances: A True and Better Identity Politics",
                outlet: "9Marks",
                date: "18 de marzo de 2022",
                locator:
                  "2 párrafos: del párrafo que empieza «Both baptism and the Lord’s Supper…» al que termina «…the one bread” (1 Cor 10:17).»",
                url: "https://www.9marks.org/article/the-ordinances-a-true-and-better-identity-politics/",
                text: "Tanto el bautismo como la Cena del Señor proclaman que pertenecemos a Dios, y, porque pertenecemos a Dios, también pertenecemos unos a otros. Cuando Jesús manda a sus discípulos bautizar a los nuevos creyentes “en el nombre” del Padre, del Hijo y del Espíritu Santo, está diciendo que el bautismo es una insignia de pertenencia (Mat. 28:19). El bautismo marca a un creyente como propiedad personal del Dios Trino. Y porque el bautismo nos hace propiedad de Dios, también nos hace familia unos de otros. Los que fueron bautizados en Pentecostés fueron, por ese acto, “añadidos a la iglesia” (Hech. 2:41). El bautismo crea un nuevo cuerpo político, definido no por algún criterio previo de membresía grupal, sino por el arrepentimiento y la fe en Cristo.\n\nY la Cena del Señor escenifica de forma colectiva nuestra comunión con Cristo y, por lo tanto, nuestra comunión unos con otros. Es decir, en la Cena del Señor, una iglesia local, por la fe, comparte juntos los beneficios de Cristo (1 Cor. 10:16). Y al compartir así en Cristo, llegamos a compartir una sola vida común. Al participar del pan que representa su cuerpo, nosotros mismos nos solidificamos en solidaridad: “Porque hay un solo pan, nosotros, que somos muchos, somos un cuerpo, pues todos participamos del mismo pan” (1 Cor 10:17).",
                original:
                  "Both baptism and the Lord’s Supper proclaim that we belong to God, and, because we belong to God, we also belong to each other. When Jesus commands his disciples to baptize new believers “in the name” of the Father and Son and Holy Spirit, he is saying that baptism is a badge of belonging (Matt. 28:19). Baptism marks off a believer as the personal property of the Triune God. And because baptism makes us God’s property, it also makes us each other’s family. Those who were baptized at Pentecost were, by that act, “added to the church” (Acts 2:41). Baptism creates a new body politic, one defined not by any prior criterion of group membership, but by repentance and faith in Christ.\n\nAnd the Lord’s Supper corporately enacts our communion with Christ and thereby our communion with each other. That is, in the Lord’s Supper, a local church, by faith, shares in the benefits of Christ together (1 Cor. 10:16). And by so sharing in Christ, we come to share a single common life. By partaking of the bread that stands for his body, we ourselves solidify into solidarity: “Because there is one bread, we who are many are one body, for we all partake of the one bread” (1 Cor 10:17).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Murr lee el mandato del bautismo como exigencia de discipulado y apela a la profesión de fe del eunuco",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Sobre el Bautismo, sobre la Biblia, y otros temas - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "26 de enero de 2026",
                locator: "Minutos 20:52 a 21:24",
                url: "https://www.youtube.com/watch?v=cTuYpH8AzSw&t=1252s",
                text: "¿Por qué no darse cuenta que el bautismo es una ordenanza de Jesús? Jesús dijo vayan y hagan discípulos de todas las naciones bautizándolos. Para bautizarlos tienes que ser un discípulo, un bebé no es un discípulo. Y constantemente la escritura dice arrepentíos y creed en el evangelio. Hay un llamado al arrepentimiento y a creer y eran bautizados hombres y mujeres como con el eunuco en Hechos 8. Dijo aquí hay agua que impide que sea bautizado y le dijo Felipe si crees bien puedes.",
              },
            ],
          },
          {
            title:
              "Murr conecta la enseñanza de la obediencia con hacer discípulos, y sostiene que los recién nacidos no pueden recibir esa instrucción",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿Qué Significa Bautizarse? - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "4 de mayo de 2025",
                locator: "Minutos 9:30 a 10:28",
                url: "https://www.youtube.com/watch?v=2xNdjcUKsyE&t=570s",
                text: "Y dice, enseñándoles a obedecer todo lo que les he mandado y estaré con ustedes siempre hasta el fin del mundo. ¿cuántos de ustedes cuando leen este pasaje donde Jesús nos comisiona a ir a ser discípulos, a bautizarles y enseñarles, ¿cuántos de ustedes toman la idea de una lectura sencilla de este texto que Jesús está hablando de el sacramento del bautismo bautizando bebés infantes recién nacidos? ¿cuántos de ustedes en una lectura de esta orden de Jesús dicen ah sí claro, ahí está hablando de que tenemos que bautizar a los bebés, ¿alguno de ustedes? está hablando de ir de hacer discípulos puede un bebé recién nacido formarse recién nacido y decir soy un discípulo de Cristo puede un bebé recién nacido ser enseñado en ese momento sobre la fe para obedecer a Jesús no, está hablando de personas adultas",
              },
            ],
          },
          {
            title: "Wellum fundamenta la comisión de hacer discípulos en la autoridad del Hijo encarnado y resucitado",
            quotes: [
              {
                speaker: "Stephen J. Wellum",
                work: "The Waters That Divide [Session 1] with Dr. Stephen Wellum",
                outlet: "The Church at Pecan Creek, By Pastor Trey Talley",
                date: "17 de abril de 2024",
                locator: "Minutos 1:27 a 2:22",
                url: "https://www.youtube.com/watch?v=twukMzJ18-U&t=87s",
                text: "y enseñándoles a obedecer todo lo que les he mandado; y ciertamente yo estoy con ustedes siempre, hasta el fin de la era. Así que ahí está la Gran Comisión. La tienen dada en varios lugares del Nuevo Testamento. Esta es probablemente la más famosa, donde nuestro Señor habla de su autoridad como resultado de su obra. Toda autoridad le ha sido dada. Bueno, él es el Hijo eterno que tiene toda autoridad, y sin embargo, como el Hijo encarnado que vino, vivió, murió, resucitó y luego ascenderá y derramará el Espíritu, ha puesto todas las cosas bajo sus pies. Ha actuado como el último Adán, Dios Hijo encarnado que ha logrado todo eso. Y a la luz de eso, bien, dice: se me ha dado toda autoridad. Y dice que, como Rey de reyes, nos encomienda ir al mundo, hacer discípulos, llevar el evangelio a todas las naciones para que de esas naciones",
                original:
                  "and teaching them to obey everything I have commanded you, and surely I am with you always, even to the end of the age. So there's the Great Commission. You have that given in a number of places in the New Testament. This is probably the most famous, where our Lord speaks of his authority as a result of his work. All authority has been given to him. Well, he's the eternal son who has all authority, yet as the incarnate son who has come and lived and died and been raised and then will now ascend and pour out the spirit, he has put all things under his feet. He has acted as the last Adam, God the son incarnate who has achieved all of that. And in light of that, right, he says all authority has been given to me. And he says as the king of kings, he commissions us to go into the world, to make disciples, to take the gospel to all nations so that out of those nations",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.10.21"],
      text: "Segunda Confesión de Londres (1689), 30.1, p. 270: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] for the perpetual remembrance, and shewing forth the sacrifice in his death, confirmation of the faith of believers in all the benefits thereof, their spiritual nourishment, and growth in him […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.1 nota (b) (1688 p. 99): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and to be a Bond and Pledge of their Communion with him, and with each other.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
      apologists: {
        arguments: [
          {
            title:
              "El pan y la copa son signos visibles y materiales; cuando los miembros de una iglesia local participan, se convierten en el medio por el cual tienen comunión con Cristo y unos con otros, y no se puede participar de la mesa del Señor y de la mesa de los demonios",
            quotes: [
              {
                speaker: "Tiago Oliveira",
                work: "Yes, the Ordinances Really Do Change People",
                outlet: "9Marks",
                date: "26 de julio de 2021",
                locator:
                  "2 párrafos: del párrafo que empieza «Concerning the Lord’s Supper, Paul asks…» al que termina «…rightly, we’re communing with something else.»",
                url: "https://www.9marks.org/article/yes-the-ordinances-really-do-change-people/",
                text: "Acerca de la Cena del Señor, Pablo pregunta a los corintios: “La copa de bendición que bendecimos, ¿no es una participación en la sangre de Cristo? El pan que partimos, ¿no es una participación en el cuerpo de Cristo? Porque hay un solo pan, nosotros, que somos muchos, somos un cuerpo, pues todos participamos de aquel un pan” (1 Cor. 10:16–17; cf. Juan 6:53–58).\n\nEl pan y la copa son signos visibles y materiales. Pero cuando los miembros de una iglesia local participan de estos elementos, se convierten en algo más. Se convierten en el medio por el cual tenemos comunión con Cristo y entre nosotros. Por eso Pablo luego dice que “no pueden participar de la mesa del Señor y de la mesa de los demonios” (1 Cor. 10:21). Cuando participamos correctamente, hay verdadera comunión con Dios y entre nosotros. Cuando no participamos correctamente, estamos en comunión con otra cosa.",
                original:
                  "Concerning the Lord’s Supper, Paul asks the Corinthians: “The cup of blessing that we bless, is it not a participation in the blood of Christ? The bread that we break, is it not a participation in the body of Christ? Because there is one bread, we who are many are one body, for we all partake of the one bread” (1 Cor. 10:16–17; cf. John 6:53–58).\n\nThe cup and the bread are visible, material signs. But when the members of a local church partake of these elements, they become something more. They become the means by which we fellowship with Christ and one another. That’s why Paul later says that “you cannot partake in the table of the Lord and the table of demons” (1 Cor. 10:21). When we’re participating rightly, there’s true communion with God and with one another. When we’re not participating rightly, we’re communing with something else.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Exod.20.4-Exod.20.5"],
      text: "Segunda Confesión de Londres (1689), 30.3–4, p. 271: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.4 nota (f) (1688 p. 100): este versículo figura como nota al margen junto a la cláusula, en inglés, «The denyal of the Cup to the People, worshipping the Elements, the lifting them up, or carrying them about for adoration, and reserving them for any pretended religious use, are all contrary to the Nature of this Ordinance, and to the Institution of Christ.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["Matt.7.6"],
      text: "Segunda Confesión de Londres (1689), 30.8, p. 272: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.8, 1688 impresión p. 102 (margen nota n): este versículo figura como nota al margen junto a la cláusula, en inglés, «All ignorant and ungodly Persons, as they are unfit to enjoy Communion (m) with Christ, so are they unworthy of the Lord's Table, and cannot, without great sin against him, while they remain such, partake of these Holy Mysteries, (n) or be admitted thereunto: yea, whosoever shall receive unworthily, are guilty of the Body and Blood of the Lord, eating and drinking Judgment to themselves.». Edición: A Confession of Faith, put forth by the Elders and Brethren of many Congregations (Londres, 1688).",
    },
    {
      refs: ["Matt.15.9"],
      text: "Segunda Confesión de Londres (1689), 30.3–4, p. 271: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.4 nota (f) (1688 p. 100): este versículo figura como nota al margen junto a la cláusula, en inglés, «The denyal of the Cup to the People, worshipping the Elements, the lifting them up, or carrying them about for adoration, and reserving them for any pretended religious use, are all contrary to the Nature of this Ordinance, and to the Institution of Christ.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["Luke.24.6"],
      text: "Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.6 nota (i) (1688 p. 101): este versículo figura como nota al margen junto a la cláusula, en inglés, «That Doctrine which maintains a change of the substance of Bread and Wine, into the substance of Christ's Body and Blood (commonly called Transubstantiation) by consecration of a Priest, or by any other way, is repugnant not to Scripture alone, but even to common sence and reason […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["Luke.24.39"],
      text: "Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.6 nota (i) (1688 p. 101): este versículo figura como nota al margen junto a la cláusula, en inglés, «That Doctrine which maintains a change of the substance of Bread and Wine, into the substance of Christ's Body and Blood (commonly called Transubstantiation) by consecration of a Priest, or by any other way, is repugnant not to Scripture alone, but even to common sence and reason […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["Acts.3.21"],
      text: "Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.6 nota (i) (1688 p. 101): este versículo figura como nota al margen junto a la cláusula, en inglés, «That Doctrine which maintains a change of the substance of Bread and Wine, into the substance of Christ's Body and Blood (commonly called Transubstantiation) by consecration of a Priest, or by any other way, is repugnant not to Scripture alone, but even to common sence and reason […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["1Cor.4.1"],
      text: "Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276.",
    },
    {
      refs: ["2Cor.6.14-2Cor.6.15"],
      text: "Segunda Confesión de Londres (1689), 30.8, p. 272: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.8, 1688 impresión p. 102 (margen nota m): este versículo figura como nota al margen junto a la cláusula, en inglés, «All ignorant and ungodly Persons, as they are unfit to enjoy Communion (m) with Christ, so are they unworthy of the Lord's Table, and cannot, without great sin against him, while they remain such, partake of these Holy Mysteries, (n) or be admitted thereunto: yea, whosoever shall receive unworthily, are guilty of the Body and Blood of the Lord, eating and drinking Judgment to themselves.». Edición: A Confession of Faith, put forth by the Elders and Brethren of many Congregations (Londres, 1688).",
    },
    {
      refs: ["Gal.3.1"],
      text: "Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
  ],
  passages: {
    title: "Los pasajes de la posición bautista",
    lede: "Los versículos que la tradición bautista cita sobre la Cena del Señor, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la tradición bautista.",
    apologistsLabel: "Cómo lo defienden los apologistas bautistas.",
  },
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
