import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const solaScripturaReformed = {
  doctrine: "sola-scriptura",
  tradition: "reformed",
  status: "draft",
  title: "La posición reformada",
  lede: "Cómo los Estándares de Westminster entienden la Escritura como regla, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan los Estándares de Westminster sobre la Escritura como regla, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "La Confesión de Westminster dice, al enumerar los libros de ambos Testamentos: «Todos estos fueron dados por la inspiracion de Dios para ser la regla de la fé y de la práctica.».",
      grades: [
        {
          kind: "church",
          grade: "standards",
          basis: "Confesión de Westminster 1.2",
        },
      ],
      sources: [
        {
          citations: ["RWCF1_2"],
          label: "Westminster 1.2",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la autoridad divina",
        text: "La Confesión de Westminster enseña: «La autoridad de las Sagradas Escrituras, la que hace que deben creerse y obedecerse, no depende del testimonio de ningun hombre ó iglesia cualquiera que fuera, sino enteramente del de Dios, quien es su autor; porque El es la misma verdad; por esto deben ser recibidas porque son la palabra de Dios.».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 1.4",
          },
        ],
        sources: [
          {
            citations: ["RWCF1_4"],
            label: "Westminster 1.4",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la suficiencia",
        text: "La Confesión de Westminster enseña: «Todo el consejo de Dios, tocante á todas las cosas necesarias para su propia gloria y para la salvacion, fé y vida del hombre; es ó expresamente expuesto en las Escrituras ó se puede deducir de ellas por buena y necesaria consecuencia; y á esta revelacion de su voluntad, nada se puede, ni se debe, añadir nunca, ni por nuevas revelaciones del Espíritu, ni por las tradiciones de los hombres.». Y conserva la iluminación interna del Espíritu: «la iluminacion interna del Espíritu de Dios, es necesaria á fin de que se entiendan de una manera salvadora, las cosas reveladas en la palabra». Y las circunstancias del culto y del gobierno: «hay algunas circunstancias tocante al culto de Dios y al gobierno de la iglesia, comunes á las acciones y sociedades humanas, que deben arreglarse conforme á la luz de la naturaleza y la prudencia cristiana, guardándose siempre las reglas generales de la palabra».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 1.6",
          },
        ],
        sources: [
          {
            citations: ["RWCF1_6"],
            label: "Westminster 1.6",
          },
        ],
      },
      {
        id: "QE-3",
        short: "la claridad",
        text: "La Confesión de Westminster enseña: «Las cosas reveladas en las Escrituras, considerándolas en su naturaleza, no son todas igualmente claras, ni se entienden igualmente por todos». Y añade su cualificación afirmativa: «las cosas que necesariamente tienen que saberse, creerse y guardarse para conseguir la salvacion, son propuestas y declaradas en uno ú otro lugar de las Escrituras, tan claramente, que no solo los eruditos, sino aun los que no lo son, pueden alcanzar un conocimiento suficiente de ellas, por el debido uso de los medios ordinarios».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 1.7",
          },
        ],
        sources: [
          {
            citations: ["RWCF1_7"],
            label: "Westminster 1.7",
          },
        ],
      },
      {
        id: "QE-4",
        short: "la Escritura que se interpreta a sí misma",
        text: "La Confesión de Westminster enseña: «La misma Escritura es la regla infalible para interpretarse á sí misma; y por tanto, cuando hay una cuestion respecto del sentido verdadero y pleno de cualquier pasaje; cuyo significado no es multíplice, sino uno solo, se puede buscar y establecer segun otros textos que hablan con mas claridad.».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 1.9",
          },
        ],
        sources: [
          {
            citations: ["RWCF1_9"],
            label: "Westminster 1.9",
          },
        ],
      },
      {
        id: "QE-5",
        short: "el juez supremo",
        text: "La Confesión de Westminster enseña: «El Espíritu Santo, que habla en las Escrituras, el Juez Supremo, por quien toda controversia religiosa tiene que decidirse y por quien tambien todos los decretos de los concilios, las opiniones de los escritores antiguos, y las doctrinas de los hombres y de los espíritus particulares tienen que determinarse, y en su fallo ó sentencia, podemos descansar confiadamente.».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 1.10",
          },
        ],
        sources: [
          {
            citations: ["RWCF1_10"],
            label: "Westminster 1.10",
          },
        ],
      },
      {
        id: "QE-6",
        short: "el canon y las lenguas originales",
        text: "La Confesión de Westminster enumera los libros del Antiguo y del Nuevo Testamento (1.2) y llama a los libros comúnmente titulados Apócrifos escritos humanos y no parte del canon (1.3). Y dice: «la iglesia tiene que apelar finalmente á los originales en esos idiomas en toda controversia».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 1.2, 1.3 y 1.8",
          },
        ],
        sources: [
          {
            citations: ["RWCF1_2"],
            label: "Westminster 1.2",
          },
          {
            citations: ["RWCF1_3"],
            label: "Westminster 1.3",
          },
          {
            citations: ["RWCF1_8"],
            label: "Westminster 1.8",
          },
        ],
      },
      {
        id: "QE-7",
        short: "la traducción y el acceso",
        text: "La Confesión de Westminster enseña: «la Biblia debe traducirse en la lengua vulgar de todas las naciones á que pueda venir».",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 1.8",
          },
        ],
        sources: [
          {
            citations: ["RWCF1_8"],
            label: "Westminster 1.8",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para la Confesión de Westminster, Dios quiso ponerlo todo por escrito: «para mejor conservar y propagar la verdad, y para el mejor consuelo y establecimiento de la iglesia contra la corrupcion de la carne, la malicia de Satanás y del mundo, le plugo ponerlo todo en escrito» {c:RWCF1_1|Westminster 1.1}.",
      "Y reconoce el testimonio de la iglesia, pero la persuasión viene de otra parte: «El testimonio de la iglesia puede mover é inducirnos á guardar para las Sagradas Escrituras una estimacion alta y reverencial» {c:RWCF1_5|Westminster 1.5}. La Confesión la ubica en «la obra interior del Espíritu Santo, quien dá testimonio juntamente con la palabra divina, y por ella á nuestros corazones» {c:RWCF1_5|Westminster 1.5}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para el Catecismo Menor de Westminster, la Escritura es la única regla: «La palabra de Dios que se contiene en las Escrituras del Antiguo y del Nuevo Testamento, es la única regla que ha dado Dios para enseñarnos como hemos de glorificarle y gozar de El.» {c:RWSC2|Catecismo Menor de Westminster 2}.",
  },
  scriptureSubtitle:
    "Los pasajes que los Estándares de Westminster citan sobre la Escritura como regla, y cómo los leen.",
  scripture: [
    {
      refs: ["Rom.1.19-Rom.1.20", "Rom.1.32", "Rom.2.1", "Rom.2.14-Rom.2.15"],
      text: "La Confesión de Westminster lo cita para los límites de la revelación natural (Confesión 1.1).",
      apologists: {
        arguments: [
          {
            title:
              "Todos conocen que Dios existe por la revelación general (creación, providencia, conciencia): Pablo dice que lo que se puede conocer de Dios es manifiesto a todos (Romanos 1:19–20), y los cielos cuentan la gloria de Dios (Salmo 19:1)",
            quotes: [
              {
                speaker: "Keith Mathison",
                work: "The Heavens Declare",
                outlet: "Ligonier Ministries",
                date: "1 de noviembre de 2004",
                locator:
                  "2 párrafos: del párrafo que empieza «The knowledge of the existence of God is known…» al que termina «…be saved, the special grace of God is required.»",
                url: "https://learn.ligonier.org/articles/heavens-declare",
                text: "The knowledge of the existence of God is known to all through general revelation. Paul says, “What can be known about God is plain to them [all mankind], because God has shown it to them. For his invisible attributes, namely, his eternal power and divine nature, have been clearly perceived, ever since the creation of the world, in the things that have been made” (Rom. 1:19–20). As the Psalmist exclaims, “The heavens declare the glory of God, and the sky above proclaims his handiwork” (Psalm 19:1).\n\nDespite the fact that God’s unmerited favor is extended to all mankind, this common grace must not be confused with special grace (that is, saving grace). God’s common grace leaves man with no excuse (Rom. 1:20), but common grace alone is not salvific. It does not and cannot save. Salvation is found exclusively in Jesus Christ. “There is salvation in no one else, for there is no other name under heaven given among men by which we must be saved” (Acts 4:12). In order for man to be saved, the special grace of God is required.",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.1.21", "1Cor.2.13-1Cor.2.14"],
      text: "La Confesión de Westminster lo cita para el conocimiento salvador (Confesión 1.1).",
    },
    {
      refs: ["Heb.1.1-Heb.1.2"],
      text: "La Confesión de Westminster lo cita para los modos antiguos de hablar Dios y el Hijo (Confesión 1.1).",
    },
    {
      refs: ["Luke.1.3-Luke.1.4", "Rom.15.4"],
      text: "La Confesión de Westminster lo cita para la escritura, la certeza y el consuelo (Confesión 1.1).",
    },
    {
      refs: ["Isa.8.20", "Rev.22.18"],
      text: "La Confesión de Westminster lo cita para el testimonio escrito (Confesión 1.1).",
      apologists: {
        arguments: [
          {
            title:
              "Sola Scriptura significa la suficiencia de la Escritura: nada puede añadirse ni quitarse (Deuteronomio 4:2; 12:32; Apocalipsis 22:18–19), y ella revela infaliblemente todo lo que hay que creer y hacer",
            quotes: [
              {
                speaker: "John MacArthur",
                work: "What Does “Sola Scriptura” Mean?",
                outlet: "Ligonier Ministries",
                date: "27 de agosto de 2021",
                locator:
                  "5 párrafos: del párrafo que empieza «The Reformation principle of sola Scriptura has to do…» al que termina «…God. That—no more, no less—is what sola Scriptura means.»",
                url: "https://learn.ligonier.org/articles/what-does-sola-scriptura-mean",
                text: "The Reformation principle of sola Scriptura has to do with the sufficiency of Scripture as our supreme authority in all spiritual matters. Sola Scriptura simply means that all truth necessary for our salvation and spiritual life is taught either explicitly or implicitly in Scripture. It is not a claim that all truth of every kind is found in Scripture. The most ardent defender of sola Scriptura will concede, for example, that Scripture has little or nothing to say about DNA structures, microbiology, the rules of Chinese grammar, or rocket science. This or that “scientific truth,” for example, may or may not be actually true, whether or not it can be supported by Scripture—but Scripture is a “more sure Word,” standing above all other truth in its authority and certainty. It is “more sure,” according to the Apostle Peter, than the data we gather firsthand through our senses (2 Peter 1:19). Therefore, Scripture is the highest and supreme authority on any matter on which it speaks.\n\nBut there are many important questions on which Scripture is silent. Sola Scriptura makes no claim to the contrary. Nor does sola Scriptura claim that everything Jesus or the Apostles ever taught is preserved in Scripture. It only means that everything necessary, everything binding on our consciences, and everything God requires of us is given to us in Scripture (2 Peter 1:3).\n\nScripture is the perfect and only standard of spiritual truth.\n\nFurthermore, we are forbidden to add to or take away from Scripture (cf. Deut. 4:2; 12:32; Rev. 22:18-19). To add to it is to lay on people a burden that God Himself does not intend for them to bear (cf. Matt. 23:4).\n\nScripture is therefore the perfect and only standard of spiritual truth, revealing infallibly all that we must believe in order to be saved and all that we must do in order to glorify God. That—no more, no less—is what sola Scriptura means.",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["2Tim.3.15", "2Pet.1.19"],
      text: "La Confesión de Westminster lo cita para la necesidad de la Escritura (Confesión 1.1).",
    },
    {
      refs: ["Eph.2.20", "Rev.22.18-Rev.22.19", "2Tim.3.16"],
      text: "La Confesión de Westminster lo cita para la regla escrita inspirada (Confesión 1.2).",
      apologists: {
        arguments: [
          {
            title:
              "Dios «exhala» su Palabra como habló para crear: la Escritura es el propio discurso de Dios, y es el instrumento con el que el hombre de Dios queda equipado",
            quotes: [
              {
                speaker: "Eric Watkins",
                work: "Listening to God’s Word",
                outlet: "Ligonier Ministries",
                date: "22 de mayo de 2025",
                locator:
                  "3 párrafos: del párrafo que empieza «The language of God “breathing out” His Word is…» al que termina «…do with us than it does with God’s Word.»",
                url: "https://learn.ligonier.org/articles/listening-to-gods-word",
                text: "The language of God “breathing out” His Word is noteworthy. It reminds us that God is a speaking God. He does not simply exist, nor is He the ultimate recluse who remains hidden; rather, He is the God who speaks. The Bible is replete with reflection on God speaking. It begins and ends that way, and is filled from cover to cover with God speaking to His people. It was by His speaking that God first created. In Genesis 1 we are told repeatedly that God “spoke. . .and it was so.” When God speaks, things happen. He could have simply created without speaking, and yet He spoke. We should not lose sight of the fact that there is always purpose behind God’s speaking. That purpose is ultimately His own glory. All that He does will ultimately bring glory to Himself, and all that He says will do the same. That is why He spoke creation into existence—for His own glory.\n\nAnother important connection between creation and 2 Timothy 3:16–17 is the creation of Adam in Genesis 2:7: “Then the Lord God formed the man of dust from the ground and breathed into his nostrils the breath of life, and the man became a living creature.” It is a curious thing that when God first created Adam, he was lifeless. He had a body, but no breath. He was like the opening verses of Genesis: creation begun, but not completed. But that changed when God “breathed.” Just as God breathed life into creation by speaking it into existence, He breathed life into Adam personally, filling him with the breath of life. It was so—Adam became a living being, but in a way that rises above the rest of creation. Adam was uniquely created by God to bear God’s image and bring God glory. Man, in the image of God, would glorify and enjoy God in ways that far transcend the rest of creation. In this sense, he was uniquely created and uniquely inspired.\n\nThis brings us back to God’s Word, and to 2 Timothy 3:16–17 in particular. This verse teaches us that God’s Word has also been uniquely inspired. It is “God-breathed,” similar to the creation of the earth in Genesis 1 and similar to the creation of Adam in Genesis 2. The chief end of God’s Word is to bring Him glory. God Himself promises to preserve His Word by the same Holy Spirit through which He first inspired it. It transcends time, space, and history because it is bound to the Spirit of God, who cannot be suffocated by the sands of time, cast out of the world, or changed by the flow of history. In other words, the Bible’s truthfulness and relevance do not depend upon man and his designs. God’s Word is bound to God Himself. Thus, the problem between us and God’s Word has much more to do with us than it does with God’s Word.",
                lang: "en",
              },
            ],
          },
          {
            title:
              "La teología debe estar fundada en la Escritura: la palabra de Dios que da vida, 2 Timoteo 3:15, es la primera de las cinco solas",
            quotes: [
              {
                speaker: "Ryan McGraw",
                work: "What Are the Five Solas?",
                outlet: "Ligonier Ministries",
                date: "21 de octubre de 2025",
                locator:
                  "1 párrafo: del párrafo que empieza «Theology must be Scripturally grounded. God’s life-giving speech reveals…» al que termina «…with the God who is light (1 John 1:7).»",
                url: "https://learn.ligonier.org/articles/what-are-the-five-solas",
                text: "Theology must be Scripturally grounded. God’s life-giving speech reveals to us His salvation and calls us to faith and repentance. We were once darkness, but now we are light in the Lord (Eph. 5:8). Satan blinds the minds of unbelievers, lest they see the light of the gospel of the glory of Christ (2 Cor. 4:4). Yet the God who commands light to shine out of darkness shines in our hearts, giving us the light “of the glory of God in the face of Jesus Christ” (2 Cor. 4:6). God always does this by the Spirit working through the Word. The Holy Spirit is the Author of Scripture, and He speaks through Scripture (Heb. 3:7). The Scriptures teach us everything that we need to make us wise for salvation through faith in Christ and to be thoroughly equipped for every good work (2 Tim. 3:15–17). This is why those who do not speak according to the rule of Scripture have no light in them (Isa. 8:20). Yet without the Spirit, even the Scriptures cannot help us. We are dead in trespasses and sins (Eph. 2:1–2), our minds and hearts are darkened (Eph. 4:18; Rom. 1:21), and we need someone to raise us from the dead and turn on the lights (Eph. 5:14). If Scripture is sufficient to make us wise for faith and life in Christ, then Scripture alone can be our guide to walking with God. Everything else is both useless and superfluous. Yet we must be born of the Spirit in order to see God’s kingdom (John 3:5). Only through the Spirit working by and with the Scriptures in our hearts can we walk in the light with the God who is light (1 John 1:7).",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Luke.24.27", "Luke.24.44", "2Pet.1.21"],
      text: "La Confesión de Westminster lo cita para el límite del canon (Confesión 1.3).",
    },
    {
      refs: ["2Tim.3.16", "1John.5.9", "1Thess.2.13"],
      text: "La Confesión de Westminster lo cita para la autoridad divina (Confesión 1.4).",
      apologists: {
        arguments: [
          {
            title:
              "Dios «exhala» su Palabra como habló para crear: la Escritura es el propio discurso de Dios, y es el instrumento con el que el hombre de Dios queda equipado",
            quotes: [
              {
                speaker: "Eric Watkins",
                work: "Listening to God’s Word",
                outlet: "Ligonier Ministries",
                date: "22 de mayo de 2025",
                locator:
                  "3 párrafos: del párrafo que empieza «The language of God “breathing out” His Word is…» al que termina «…do with us than it does with God’s Word.»",
                url: "https://learn.ligonier.org/articles/listening-to-gods-word",
                text: "The language of God “breathing out” His Word is noteworthy. It reminds us that God is a speaking God. He does not simply exist, nor is He the ultimate recluse who remains hidden; rather, He is the God who speaks. The Bible is replete with reflection on God speaking. It begins and ends that way, and is filled from cover to cover with God speaking to His people. It was by His speaking that God first created. In Genesis 1 we are told repeatedly that God “spoke. . .and it was so.” When God speaks, things happen. He could have simply created without speaking, and yet He spoke. We should not lose sight of the fact that there is always purpose behind God’s speaking. That purpose is ultimately His own glory. All that He does will ultimately bring glory to Himself, and all that He says will do the same. That is why He spoke creation into existence—for His own glory.\n\nAnother important connection between creation and 2 Timothy 3:16–17 is the creation of Adam in Genesis 2:7: “Then the Lord God formed the man of dust from the ground and breathed into his nostrils the breath of life, and the man became a living creature.” It is a curious thing that when God first created Adam, he was lifeless. He had a body, but no breath. He was like the opening verses of Genesis: creation begun, but not completed. But that changed when God “breathed.” Just as God breathed life into creation by speaking it into existence, He breathed life into Adam personally, filling him with the breath of life. It was so—Adam became a living being, but in a way that rises above the rest of creation. Adam was uniquely created by God to bear God’s image and bring God glory. Man, in the image of God, would glorify and enjoy God in ways that far transcend the rest of creation. In this sense, he was uniquely created and uniquely inspired.\n\nThis brings us back to God’s Word, and to 2 Timothy 3:16–17 in particular. This verse teaches us that God’s Word has also been uniquely inspired. It is “God-breathed,” similar to the creation of the earth in Genesis 1 and similar to the creation of Adam in Genesis 2. The chief end of God’s Word is to bring Him glory. God Himself promises to preserve His Word by the same Holy Spirit through which He first inspired it. It transcends time, space, and history because it is bound to the Spirit of God, who cannot be suffocated by the sands of time, cast out of the world, or changed by the flow of history. In other words, the Bible’s truthfulness and relevance do not depend upon man and his designs. God’s Word is bound to God Himself. Thus, the problem between us and God’s Word has much more to do with us than it does with God’s Word.",
                lang: "en",
              },
            ],
          },
          {
            title:
              "La teología debe estar fundada en la Escritura: la palabra de Dios que da vida, 2 Timoteo 3:15, es la primera de las cinco solas",
            quotes: [
              {
                speaker: "Ryan McGraw",
                work: "What Are the Five Solas?",
                outlet: "Ligonier Ministries",
                date: "21 de octubre de 2025",
                locator:
                  "1 párrafo: del párrafo que empieza «Theology must be Scripturally grounded. God’s life-giving speech reveals…» al que termina «…with the God who is light (1 John 1:7).»",
                url: "https://learn.ligonier.org/articles/what-are-the-five-solas",
                text: "Theology must be Scripturally grounded. God’s life-giving speech reveals to us His salvation and calls us to faith and repentance. We were once darkness, but now we are light in the Lord (Eph. 5:8). Satan blinds the minds of unbelievers, lest they see the light of the gospel of the glory of Christ (2 Cor. 4:4). Yet the God who commands light to shine out of darkness shines in our hearts, giving us the light “of the glory of God in the face of Jesus Christ” (2 Cor. 4:6). God always does this by the Spirit working through the Word. The Holy Spirit is the Author of Scripture, and He speaks through Scripture (Heb. 3:7). The Scriptures teach us everything that we need to make us wise for salvation through faith in Christ and to be thoroughly equipped for every good work (2 Tim. 3:15–17). This is why those who do not speak according to the rule of Scripture have no light in them (Isa. 8:20). Yet without the Spirit, even the Scriptures cannot help us. We are dead in trespasses and sins (Eph. 2:1–2), our minds and hearts are darkened (Eph. 4:18; Rom. 1:21), and we need someone to raise us from the dead and turn on the lights (Eph. 5:14). If Scripture is sufficient to make us wise for faith and life in Christ, then Scripture alone can be our guide to walking with God. Everything else is both useless and superfluous. Yet we must be born of the Spirit in order to see God’s kingdom (John 3:5). Only through the Spirit working by and with the Scriptures in our hearts can we walk in the light with the God who is light (1 John 1:7).",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Tim.3.15"],
      text: "La Confesión de Westminster lo cita para el testimonio de la iglesia (Confesión 1.5).",
    },
    {
      refs: ["1John.2.20", "1John.2.27", "John.16.13-John.16.14", "1Cor.2.10-1Cor.2.11"],
      text: "La Confesión de Westminster lo cita para el testimonio del Espíritu (Confesión 1.5).",
    },
    {
      refs: ["2Tim.3.16-2Tim.3.17", "Gal.1.8", "2Thess.2.2"],
      text: "La Confesión de Westminster lo cita para la suficiencia y las adiciones (Confesión 1.6).",
    },
    {
      refs: ["John.6.45", "1Cor.2.9-1Cor.2.10", "1Cor.2.12"],
      text: "La Confesión de Westminster lo cita para la iluminación salvadora (Confesión 1.6).",
    },
    {
      refs: ["1Cor.11.13-1Cor.11.14", "1Cor.14.26", "1Cor.14.40"],
      text: "La Confesión de Westminster lo cita para las circunstancias y el orden (Confesión 1.6).",
    },
    {
      refs: ["2Pet.3.15-2Pet.3.16", "Ps.119.105", "Ps.119.130"],
      text: "La Confesión de Westminster lo cita para la dificultad y la claridad (Confesión 1.7).",
    },
    {
      refs: ["Ps.19.7-Ps.19.8", "Ps.19.11"],
      text: "La Confesión de Westminster lo cita para la sabiduría y el entendimiento (Confesión 1.7).",
      apologists: {
        arguments: [
          {
            title:
              "Las perfecciones de la Palabra de Dios: es viva, perfecta, segura y verdadera; Salmo 19:7–9 indica los rasgos que la hacen instrumento del Espíritu Santo",
            quotes: [
              {
                speaker: "Joel Beeke",
                work: "4 Perfections of God’s Transforming Word",
                outlet: "Ligonier Ministries",
                date: "15 de julio de 2015",
                locator:
                  "3 párrafos: del párrafo que empieza «What are the particular traits or characteristics of God's…» al que termina «…Bible is not antique, or modern. It is eternal.»",
                url: "https://learn.ligonier.org/articles/4-perfections-gods-transforming-word",
                text: 'What are the particular traits or characteristics of God\'s Word that render it so useful a tool and so powerful a weapon in the hand of the Holy Spirit? Hebrews 4:12 and Psalm 19:7–9 address this question directly. From Hebrews 4:12, we learn that God\'s Word is quick and powerful. From Psalm 19:7–9, we learn that God\'s Word is perfect and sure; right, pure, and clean; true and righteous altogether.\n\n1. God\'s Word is quick and powerful.\n\nBy quick is meant "living or imbued with life." This life of the Word is no less than the life of God Himself, for as God is, so must His Word be. This life is also power or energy, power harnessed for work. The life of God\'s Word is ordered and applied to the accomplishment of His purposes: "My word … shall not return unto me void, but it shall accomplish that which I please, and it shall prosper in the thing whereto I sent it" (Isa. 55:11). As living seed, God\'s Word has power to bring forth fruit in the lives of believers, as described in the parable of the sower, where "the seed is the word of God" (Luke 8:11). Because the Word of God "liveth and abideth forever" (1 Peter 1:23), its vitality and potency remain both unexhausted and undiminished through time. Believers discover with Martin Luther that "the Bible is alive, it speaks to me; it has feet, it runs after me; it has hands, it lays hold on me. The Bible is not antique, or modern. It is eternal.',
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.5.18"],
      text: "La Confesión de Westminster lo cita para el texto original (Confesión 1.8).",
    },
    {
      refs: ["Isa.8.20", "Acts.15.15", "John.5.46"],
      text: "La Confesión de Westminster lo cita para la apelación en las controversias (Confesión 1.8).",
    },
    {
      refs: ["John.5.39"],
      text: "La Confesión de Westminster lo cita para leer y escudriñar (Confesión 1.8).",
    },
    {
      refs: ["1Cor.14.6", "1Cor.14.9", "1Cor.14.11-1Cor.14.12", "1Cor.14.24", "1Cor.14.27-1Cor.14.28"],
      text: "La Confesión de Westminster lo cita para la lengua inteligible (Confesión 1.8).",
    },
    {
      refs: ["Col.3.16", "Rom.15.4"],
      text: "La Confesión de Westminster lo cita para el culto y la esperanza (Confesión 1.8).",
    },
    {
      refs: ["Acts.15.15", "John.5.46"],
      text: "La Confesión de Westminster lo cita para la Escritura que interpreta la Escritura (Confesión 1.9).",
    },
    {
      refs: ["Matt.22.29", "Matt.22.31", "Eph.2.20"],
      text: "La Confesión de Westminster lo cita para el juez supremo (Confesión 1.10).",
    },
    {
      refs: ["Acts.28.25"],
      text: "La Confesión de Westminster lo cita para el Espíritu que habla por la Escritura (Confesión 1.10).",
    },
    {
      refs: ["Eph.2.20", "Acts.17.11", "1Cor.2.5", "2Cor.1.24"],
      text: "La Confesión de Westminster lo cita para los concilios como ayuda (Confesión 31.4, numeración histórica).",
    },
    {
      refs: ["Acts.17.11"],
      text: "El Catecismo Mayor lo cita para la lectura diligente (Catecismo Mayor 157).",
    },
  ],
  passages: {
    title: "Los pasajes de la posición reformada",
    lede: "Los versículos que la tradición reformada cita sobre la Escritura como regla, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la tradición reformada.",
    apologistsLabel: "Cómo lo defienden los apologistas reformados.",
  },
  videos: {
    subtitle: "Creadores reformados explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle:
      "Objeciones a la postura reformada. Abre cada una para leer en profundidad la respuesta de los Estándares de Westminster.",
    videosSubtitle: "Creadores reformados que responden a esta objeción. Los videos se abren en YouTube.",
    order: [],
    items: [],
  },
  life: {
    intro: [
      "Para los Estándares de Westminster, las Escrituras se leen «con deseo de conocer, creer y obedecer la voluntad de Dios revelada en ellas» {c:RWLC157|Catecismo Mayor de Westminster 157}.",
      "La palabra de Dios se predica solo por quienes están dotados y llamados a ese oficio: «La palabra de Dios debe ser predicada solamente por quienes están suficientemente dotados y también debidamente aprobados y llamados a ese oficio» {c:RWLC158|Catecismo Mayor de Westminster 158}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Leer la Escritura",
        text: "El pueblo tiene derecho y parte en las Escrituras y debe leerlas y escudriñarlas con temor de Dios (Confesión 1.8); y por sí mismos y con sus familias; para este fin, las Sagradas Escrituras han de traducirse del original a las lenguas comunes (Catecismo Mayor 156).",
        sources: [
          {
            citations: ["RWCF1_8"],
            label: "Westminster 1.8",
          },
          {
            citations: ["RWLC156"],
            label: "Catecismo Mayor de Westminster 156",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Cómo leerla",
        text: "El Catecismo Mayor dice: «Las Sagradas Escrituras deben leerse con alta y reverente estima de ellas».",
        sources: [
          {
            citations: ["RWLC157"],
            label: "Catecismo Mayor de Westminster 157",
          },
        ],
      },
      {
        id: "CV-3",
        label: "La predicación",
        text: "El Catecismo Mayor dice: «La palabra de Dios debe ser predicada solamente por quienes están suficientemente dotados y también debidamente aprobados y llamados a ese oficio».",
        sources: [
          {
            citations: ["RWLC158"],
            label: "Catecismo Mayor de Westminster 158",
          },
        ],
      },
      {
        id: "CV-4",
        label: "Oír y recibir",
        text: "El Catecismo Mayor prescribe oír con diligencia, preparación y oración, examinar lo oído por la Escritura, recibirlo con fe y amor, meditarlo y dar fruto en la vida.",
        sources: [
          {
            citations: ["RWLC160"],
            label: "Catecismo Mayor de Westminster 160",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Las categorías de autoridad que los propios Estándares de Westminster aplican a sus textos, con su definición en palabras de los Estándares.",
    grades: {
      scripture: {
        label: "Escritura: juez supremo",
        definition:
          "El Espíritu Santo, que habla en las Escrituras, es el Juez supremo por quien toda controversia religiosa tiene que decidirse (Confesión 1.10); la Escritura es la única regla (Catecismo Menor 2).",
        source: {
          citations: ["RWCF1_10"],
          label: "Westminster 1.10",
        },
      },
      standards: {
        label: "Estándares de Westminster",
        definition:
          "La Confesión y los Catecismos de Westminster son normas subordinadas a la Escritura: los concilios pueden errar y ayudan a la fe sin constituir su regla (Confesión 31.4); sus determinaciones, si concuerdan con la Escritura, se reciben con reverencia y sumisión (Confesión 31.3).",
        source: {
          citations: ["RWCF31_3_4"],
          label: "Westminster 31.3–4",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
