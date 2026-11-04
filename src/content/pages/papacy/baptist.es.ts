import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const papacyBaptist = {
  doctrine: "papacy",
  tradition: "baptist",
  status: "draft",
  title: "La posición bautista",
  lede: "Cómo la línea de las convenciones bautistas entiende la Iglesia y su gobierno, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan la Confesión de New Hampshire y Fe y Mensaje Bautistas sobre la Iglesia, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "La Confesión de New Hampshire dice de la Iglesia: «una Iglesia visible de Cristo es una congregación de creyentes bautizados, asociados por pacto en la fe y la comunión del Evangelio».",
      grades: [
        {
          kind: "church",
          grade: "confession",
          basis: "Confesión de New Hampshire (1853), art. XIII",
        },
      ],
      sources: [
        {
          citations: ["BNHXIII"],
          label: "New Hampshire XIII",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la iglesia visible",
        text: "La Confesión de New Hampshire enseña: «una Iglesia visible de Cristo es una congregación de creyentes bautizados, asociados por pacto en la fe y la comunión del Evangelio».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de New Hampshire (1853), art. XIII",
          },
        ],
        sources: [
          {
            citations: ["BNHXIII"],
            label: "New Hampshire XIII",
          },
        ],
      },
      {
        id: "QE-2",
        short: "el señorío de Cristo",
        text: "Fe y Mensaje Bautistas habla del «señorío de Cristo». Su artículo VI describe una congregación local autónoma de creyentes bautizados, con comunión de pacto, las ordenanzas y las leyes de Cristo, misión del Evangelio y procesos democráticos bajo Cristo; cada miembro responde ante Cristo, y sus dos oficios bíblicos son pastor, anciano u obispo, y diácono. Nombra también el Cuerpo de Cristo, que incluye a los redimidos de toda edad y pueblo.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Fe y Mensaje Bautistas (2000), art. VI",
          },
        ],
        sources: [
          {
            citations: ["BBFMVI"],
            label: "Fe y Mensaje VI",
          },
        ],
      },
      {
        id: "QE-3",
        short: "lo que los textos no dicen del papa",
        text: "Los pasajes inspeccionados de la Confesión de New Hampshire (art. XIII) y de Fe y Mensaje Bautistas (art. VI y preámbulo) no nombran al papa ni ofrecen una exposición papal desarrollada. Eso no establece el silencio de todos los documentos bautistas ni de toda convención.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de New Hampshire (1853), art. XIII",
          },
          {
            kind: "church",
            grade: "confession",
            basis: "Fe y Mensaje Bautistas (2000), art. VI",
          },
        ],
        sources: [
          {
            citations: ["BNHXIII"],
            label: "New Hampshire XIII",
          },
          {
            citations: ["BBFMVI"],
            label: "Fe y Mensaje VI",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para estos artículos, los fundamentos positivos son el señorío de Cristo y el gobierno por sus leyes y su Palabra (Confesión de New Hampshire XIII; Fe y Mensaje VI) {c:BBFMVI|Fe y Mensaje VI}.",
      "No explican la relación de Pedro con la jurisdicción papal ni con la infalibilidad.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing: "No se aporta ningún argumento de otras familias bautistas ni compuesto por el sitio.",
  },
  scriptureSubtitle: "Los pasajes que los textos bautistas citan sobre la Iglesia y su gobierno, y cómo los leen.",
  scripture: [
    {
      refs: ["Ps.72.17"],
      text: "Segunda Confesión de Londres (1689), 26.3 nota (f) (1719 p. 106; McGlothlin p. 265): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] nevertheless Christ always hath had, and ever shall have a Kingdome, in this world, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "Ortlund sostiene que la roca es Pedro en su confesión de Cristo (la última opinión de Agustín) y que la autoridad para gobernar se dio a los apóstoles en conjunto; Mateo 18:18 se cita en el primer bloque para ese último punto (el segundo dice «dos capítulos después» sin versículo)",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: 'Augustine on the "Rock" of Matthew 16 (This Will Surprise You)',
                outlet: "Gavin Ortlund, YouTube",
                date: "18 de diciembre de 2024",
                locator: "Minutos 0:00 a 11:38",
                url: "https://www.youtube.com/watch?v=Mslw0lS1ZLQ&t=0s",
                text: "Quizá el pasaje bíblico más importante que aparece en las discusiones sobre el papado es Mateo 16, donde Jesús le dice a Pedro: tú eres Pedro, y sobre esta roca edificaré mi iglesia, y le da las llaves para atar y desatar. Pueden leer este pasaje en la pantalla ahora mismo. Hay muchísimo en este pasaje; se han escrito bibliotecas enteras sobre este texto tan importante. Pero una pregunta que podemos plantear es esta: ¿se destaca aquí a Pedro, o se le dan responsabilidades que en última instancia comparte con el resto de los apóstoles? Podrías decir: eh, ¿Pedro exclusivamente frente a Pedro representativamente? Bien, esas ni siquiera son las únicas opciones, pero es una distinción que podemos señalar y trabajar un poco en este video. Y la razón por la que no es una pregunta terca ni algo así, la razón por la que es una pregunta natural y totalmente legítima, es triple. Primero, las responsabilidades que se mencionan aquí en Mateo 16, atar y desatar, con referencia a la tierra y al cielo, se reiteran a todos los discípulos apenas dos capítulos después, en Mateo 18:18. Así que eso plantea la pregunta: espera un momento, ¿es solo Pedro, o son todos los discípulos? Eso parece cierto en el Nuevo Testamento en general, donde las responsabilidades que aquí se vislumbran generalmente aparecen compartidas conjuntamente entre los apóstoles, como en Juan 20. Una segunda razón es que Pedro con frecuencia es el portavoz de los discípulos; incluso aquí en Mateo 16, por ejemplo, Pedro responde a la pregunta de Jesús en el versículo 15, que se dirige a todos los discípulos; la palabra ustedes del versículo 15 está en plural. Una tercera razón es que esto llega justo después no de que a Pedro se le dé un oficio específico (ya lleva bastante tiempo siendo discípulo), sino justo después de su confesión de la identidad de Cristo. Así que el contexto de este pasaje es esa confesión que él hace, y eso plantea la pregunta de cuál es la relación entre la confesión de Pedro sobre Jesús en los versículos 16 y 17, que ven aquí en azul, y lo que ven en rojo, que es la confesión de Jesús a Pedro en los versículos 18 y 19. Eso no resuelve nada, pero hace que la pregunta sea legítima: ¿se le está dando a Pedro aquí una especie de supremacía única que en última instancia lo pone en autoridad sobre los otros apóstoles en algún sentido, o las responsabilidades que se le dan aquí las comparten en última instancia los demás apóstoles? ¿Es Pedro el jefe, o el primero entre iguales? ¿Es Pedro exclusivamente, o Pedro representativamente, o algo más? Bien, es una pregunta enorme, pero una de las cosas que podemos hacer para tener algo de tracción es ver cómo la iglesia primitiva y las generaciones de cristianos anteriores a nosotros trabajaron esto. Así que en este video vamos a trabajar la exit Jesus de Agustín sobre este pasaje y, específicamente, esta pregunta, exclusivamente frente a representativamente, con Mateo 16. Históricamente ha habido tres propuestas sobre cómo entender la roca aquí: a veces se la ve como Cristo, a veces como Pedro, a veces como la confesión de Pedro. Pero lo que podemos reconocer, y lo que está ampliamente reconocido hoy, es que estas no son necesariamente mutuamente excluyentes, y en la iglesia primitiva, por ejemplo, se sostienen las tres opciones, y muchas veces se combinan. Una de las visiones comunes es que la roca es Pedro en su confesión de Cristo, que es la Roca; y esta visión es sorprendentemente común. Creo que esto representa la visión madura de Agustín; la llamaremos visión representativa, y la voy a desarrollar y explicar. Esto es un poco delicado porque Agustín escribe muchísimo y predica muchísimo, así que se pueden encontrar muchas cosas distintas que dice sobre este pasaje a lo largo de su carrera. Pero creo que un enfoque razonable es mirar sus Retractaciones, porque ahí se encuentra su visión final y madura del asunto. Sus retractaciones, o reconsideraciones, están escritas alrededor del 426 o 427, por ahí; es decir, al final de su vida, en sus últimos años. Ahí dice: Pedro, llamado así a partir de esta roca, representó a la persona de la Iglesia, que está edificada sobre esta roca y ha recibido las llaves del Reino de los Cielos, porque tú eres Pedro y no Tú eres la Roca se le dijo a él, pero la Roca era Cristo, a quien confesando, como también confiesa toda la Iglesia, Simón fue llamado Pedro. Voy a dejar esto en pantalla un segundo, para que vean la lógica. Primero, la roca es Cristo: lo ven en rojo aquí; esto es de 1 Corintios 10, que se cita aquí. Y segundo, ven en azul que Pedro confiesa a Cristo, y por eso él es la Roca en esa confesión; eso también explica la frase del medio y la lógica de esta frase que puse en morado: tú eres Pedro y no Tú eres la Roca se le dijo a él. Entonces la idea parece ser algo así: Cristo es la roca, Pedro confiesa a Cristo, por lo tanto Pedro es la Roca en ese acto de confesar la Roca. Es como la roca mayor y la roca menor, o algo así. Hay una interacción entre la confesión de Pedro y Cristo; no es necesariamente mutuamente excluyente. Quizás podamos obtener algo de claridad y progreso si miramos otro de sus lenguajes anteriores en sus sermones: por ejemplo, encontrarán que Agustín habla de Pedro como rocoso, porque dirige nuestra atención a la Roca; y si leen las partes de abajo, donde puse en negrita, pueden ver que en este sermón realmente enfatiza la confesión de Pedro como esa roca sobre la que se edifica la iglesia. Así que esto plantea la pregunta: ¿hasta qué punto Pedro es exclusivamente la Roca, entonces? Y sobre ese punto Agustín parece muy claro: piensa que Pedro funciona en un papel representativo en este pasaje. No es Pedro exclusivamente, es Pedro representativamente, y eso surge de este mismo pasaje en las retractaciones que puse en rojo aquí, así que pueden ver que está afirmado muy explícitamente dos veces: Pedro representa a toda la Iglesia en este acto de confesión. Y eso también ocurre en otros pasajes de los escritos de Agustín. No es Pedro destacado con exclusión del resto de la iglesia; por eso, antes en sus sermones, Agustín puede decir cosas como esta sobre las llaves dadas aquí en Mateo 16: ¿recibió Pedro las llaves y Pablo no las recibió? ¿Recibió Pedro las llaves, y Juan, Santiago y los demás apóstoles no las recibieron? Lo que se le dio a Pedro se le dio a toda la Iglesia. Así que esta es, en términos generales, la visión de Mateo 16 que creo más sensata: es un pasaje difícil, pero probablemente así lo tomaría yo, que Pedro es la Roca en este acto de confesar a Cristo, en la confesión apostólica de Cristo, y no como primer titular de un oficio continuo con exclusión del resto de la iglesia o algo así. Ahora bien, una fortaleza de esta idea es que logra encajar con el resto del Nuevo Testamento. Este es mi enfoque básico para Mateo 16: miren, aquí hay un pasaje difícil; en lugar de cargar todo el peso en este único pasaje para hacer algo único, leámoslo en línea con el resto del Nuevo Testamento, porque ahí aparece la misma imaginería en todas partes, y de forma consistente Cristo es llamado la roca o la piedra angular sobre la que se edifica la iglesia. Ya vimos 1 Corintios 10, que cita Agustín, y tienen esta imaginería del Salmo 118 sobre Cristo como piedra de tropiezo y roca de escándalo; esto proviene de ese lenguaje sobre la piedra que los constructores rechazaron y que llegó a ser la piedra angular. Y luego, en ocasiones en el Nuevo Testamento, los apóstoles participan de esa imaginería: a veces todos los apóstoles, como en Efesios 2:20; a veces algunos de los apóstoles, como en Gálatas 2:9, con el círculo interior de Santiago, Pedro y Juan. Así que parece haber una tensión aquí entre la manera en que Agustín piensa el pasaje y lo que encontramos, por ejemplo, en el Vaticano I, y en la forma en que este pasaje se usa como texto probatorio para un primado de jurisdicción dado inmediata y directamente a Pedro por Cristo. Una de las razones por las que esto es significativo es que Agustín no es excéntrico en esto; es una manera común de pensar en la era patrística. Edmund Hill, un conocido traductor de Agustín, tiene una nota sobre este pasaje donde habla de los grandes textos petrinos; eso incluye, por ejemplo, el final de Juan y el final de Lucas, donde a Pedro se le da una comisión, interpretada de esta manera representativa por prácticamente todos los padres antes de León Magno. Ahora bien, no tengo suficiente conocimiento para verificar si eso es correcto o no. Ed sininsky, Ed suchinsky, que es también un gran estudioso, llega a una conclusión similar: dice que, con pocas excepciones, la exit Jesus patrística de Mateo 16 no tenía nada que ver con la existencia de un ministerio petrino continuo en la iglesia. Es decir, Agustín no está completamente fuera de lugar aquí. Ahora bien, mi objetivo no es necesariamente zanjar esto ni decir que todos tienen que estar de acuerdo con Agustín, sino más bien presentar categorías para la interpretación de este pasaje, porque encuentro que muchas veces la gente se acerca a esto de forma más simple: piensa que si la roca es Pedro eso respalda la visión católica romana, y si la roca es Cristo eso respalda la visión protestante o la ortodoxa oriental, o algo así. Pero la realidad es que los protestantes pueden hablar incluso de una especie de sucesión petrina. Ok, eh, cuando Orígenes dice: sé una roca como Pedro. Así que de nuevo, intento presentar categorías como esta. Permítanme explicarlo mejor. Para terminar, pasando de esta cuestión exegética específica de Mateo 16 a tratar de presentar, otra vez, una categoría sobre cómo piensan los protestantes no solo sobre la sucesión apostólica, sino incluso sobre una especie de sucesión petrina, aquí está cómo lo expresa Carl Bart. Está hablando de la concepción católico-romana de la apostolicidad, y dice: la diferencia entre la visión evangélica y la visión católico-romana no está en el que sino en el cómo. La protesta del protestantismo en esta cuestión de la sucesión se dirige solo y simplemente contra el hecho de que el UR Peter etc. se transfiere mecánicamente por encima de la cabeza de Pedro a cada obispo romano sucesivo, como segundo, tercero y centésimo Pedro, como si la sucesión y la tradición del Pedro de Mateo 16, a quien la carne y la sangre no le habían revelado tales cosas, pudieran relacionarse con cualquier sucesión que no fuera espiritual, o como si ser espiritual pudiera atarse a la circunstancia secular de una lista de obispos de este tipo. La razón de la protesta es que en estas circunstancias la apostolicidad deja necesariamente de ser un don divino y una tarea humana, y se convierte en una posesión humana asegurada, que se entiende sobre todo de manera histórica y mecánicamente legal, de modo que ya no puede ser una norma que enfrente a la iglesia con dirección y juicio; por el contrario, queda por completo bajo el juicio de la iglesia. Eso es lo que significa esa frase latina: el control del segundo, tercero o centésimo Pedro. ¿Ven a dónde va con esto? Está hablando de la naturaleza de la apostolicidad, y dice que no es el tipo de cosa que se puede entregar a alguien en una hoja de papel: aquí está, transferencia mecánica, aquí están los documentos legales que muestran la lista de obispos, todos impusieron las manos y así sucesivamente, por lo tanto eres apostólico. Él dice: no, la apostolicidad no es eso. Ahora bien, esa lista de obispos puede ser útil; puede ser una estructura que apoye y ayude a proteger el evangelio. Pero, ante todo, la apostolicidad es una cuestión de fidelidad al evangelio apostólico, a la confesión petrina de Jesús, y eso siempre debe estar por encima de nosotros y pedirnos cuentas. Nunca estamos en posesión de ella. Así que esa es un poco la visión protestante sobre estas cosas. ¿Qué piensan? Háganmelo saber en los comentarios. Es un video corto, enfocado específicamente en este único tema; ojalá le sirva a alguien. Gracias por ver, a todos.",
                original:
                  "perhaps the most important biblical passage that comes up in discussions about the papacy is Matthew 16 where Jesus says to Peter you are Peter and on this rock I will build my church he gives him keys for binding and loosing you can read through this on the screen now there's so much in this passage we could work through libraries have been written about this important text but one question we can pose is this is Peter being singled out here or is Peter being given responsibilities that he ultimately shares with the rest of the Apostles you might say uh Peter exclusively versus Peter representatively okay those aren't even aren't even the only options but that's one distinction we can draw attention to and kind of work through a little bit in this video and the reason that's not a a stubborn question or something like that the reason that's a natural question that's totally fair to ask is three-fold first the responsibilities that are mentioned here in Matthew 16 The Binding and loosing references to Earth and Heaven are reiterated to all the disciples just two chapters later in Matthew 18:18 so that raises the question here it's like okay wait a second is it just Peter or is it all the uh disciples and that seems true with the broader New Testament where you get you know the responsibilities that seem to be envisioned here generally seem to be shared conjointly among the apostles like in John 20 a second reason is that Peter often is a is the spokesperson for the disciples so even here in Matthew 16 for example G uh Peter is responding to Jesus's question question in verse 15 that is put to all of the disciples the word you in verse 15 is in the plural there a third reason is that this comes right on the heels not of Peter being given a specific office uh he's already been a disciple for some time but rather on the heels of his confession of Christ's identity so the context of this passage is is this confession that he makes and so it raises the question here of what's the relationship between Peter's conf confession of Jesus in verses 16 and 17 you see there in blue versus what you see in red which is Jesus's confession to Peter verses 18 and 19 so that doesn't resolve things but it just makes the question fair you know is Peter being given a kind of unique Supremacy here that ultimately puts him in authority over the other Apostles in some sense or are the responsibilities being given to Peter here ultimately shared by the other Apostles so he's more like a first among equals is Peter the boss or the first among equals is it Peter exclusively or Peter representatively or something else well again huge question but one of the things we can do to try to get some traction is just look at how the church fathers and other generations of Christians prior to us worked through this and so in this video Let's just work through Augustine's uh exit Jesus of this passage and specifically this question this exclusively versus representatively question uh with Matthew 16 historically there have been three proposals for how how to understand the rock here uh sometimes it's seen as Christ sometimes it's seen as Peter sometimes it's seen as Peter's confession of Christ but what we can recognize and what is widely recognized today is that these are not necessarily mutually exclusive and in the early church for example you can find all three options are held and a lot of times they're combined so one of the common views is that it's the the rock is Peter in his confession of Christ who is The Rock and this view is surprisingly common I think this represents Augustine's mature view we'll call it a representational view and I'll unpack it and explain it this is a little tricky because Augustine writes so much and he preaches so much so you can find a lot of different things that he says about this passage throughout his career but I think a fair approach is to look at his retractions because this is going to give you his sort of final mature view of the matter his retractions or reconsiderations are written around 426 or 4 27 somewhere in there so this is at the very end of his life the final years of his life and there he says Peter called after this rock represented the person of the church which is built Upon This Rock and has received the Keys of the Kingdom of Heaven for thou art Peter and not Thou Art The Rock was said to him but The Rock was Christ in confessing whom as also the whole church confesses Simon was called Peter so I'll leave this up for a second you can see the logic here first of all the rock is Christ you see that in red here uh this is from 1 Corinthians 10 which is being quoted here and then second you see in blue Peter confesses Christ and therefore he is The Rock in that confession and that also explains the sentence there in the middle and the logic of this sentence that I put in purple for thou art Peter and not Thou Art The Rock was said to him so the idea seems to be something like this Christ is the rock Peter confesses Christ therefore Peter is The Rock in that act of confessing The Rock it's like the greater Rock and the Lesser rock or something like that you have this interplay between Peter confession and Christ it's not necessarily mutually exclusive uh you can maybe maybe we can get some clarity and progress in understanding this if we look at some of his other language from earlier in his sermons for example you'll find Augustine speaking of Peter as Rocky he's Rocky because he draws our attention to the Rock and if you read the lower parts of this where that I put emboldened here you can see he's really emphasizing in this sermon Peter's conf confession as that rock on which the church is built so this further raises the question okay to what extent is Peter exclusively The Rock then and on that point Augustine seems very clear he thinks Augustine or he thinks Peter is functioning in a representative role In this passage it's not Peter exclusively it's Peter representatively and that from this same passage from the retractions I put in red here so you can see that stated very explicitly twice Peter represents the entire church Church in this act of confession and that's the case in some other passages in Augustine's writings as well uh it's not Peter being singled out to the exclusion of the rest of the church and that's why uh earlier in his sermons Augustine can say things like this with reference to the Keys given here in Matthew 16 did Peter receive the keys and Paul not received them did Peter receive them and John and James and the other Apostles not receive them what was given to Peter was given to the whole church so this is broadly the view of Matthew 16 that I think is most sensible is a tough passage but this is probably how I would take it that Peter is The Rock in this act of confessing Christ in the apostolic confession of Christ uh not not as the first holder of an ongoing office to the exclusion of the rest of the church or something like that now one strength to this idea is that it is able to sort of just fit with the rest of the New Testament this is this is my basic approach to Matthew 16 as I say look here's a tough passage rather than put all the weight on this one passage to do something unique let's just read it in line with the rest of the New Testament because you have the same imagery all throughout the New Testament and consistently Christ is called the rock or the Cornerstone on which the church is built we've already seen 1 Corinthians 10 quoted by Augustine and you have this imagery from Psalm 118 about Christ as the stone of stumbling and rock of offense this is from this language about the stone that the builders rejected becoming the Cornerstone and then at times in the New Testament you have the apostles participating in that imagery sometimes all of the Apostles as in Ephesians 2:20 sometimes certain of the Apostles as in Galatians 2:9 with sort of the inner three of James and Peter and John so there seems to be a tension here between Augustine's way of thinking about the passage and what you'll find for example at Vatican 1 and the way this passage is used as a sort of proof text for a Primacy of jurisdiction being given a uh immediately and directly to Peter by Christ one of the reasons that this is significant is that Augustine is not eccentric in this this is a common way of thinking in the patristic era Edmund Hill who's a well-known translator of Augustine uh has a note on this passage where he talks about the great petran texts so that includes like at the end of John and at the end of Luke where Peter's given a commission uh being interpreted in this representational manner by practically all the fathers before Leo the great now I don't have enough knowledge to verify whether that's correct or not but Ed sininsky Ed suchinsky who's a great scholar as well comes to a similar conclusion he says with few exceptions patristic ex Jesus of Matthew 16 had nothing to do with the existence of an ongoing petran Ministry in the church so in other words Augustine is not completely way out in left field here now my goal is not necessarily to settle this or say everyone has to agree with Augustine but more actually to just U put out categories uh for uh the interpretation of this passage because I find a lot of times people approach this more simply thinking well if the rock is Peter that supports the Roman Catholic View and if the rock is Christ that supports the Protestant view or the Eastern Orthodox view or something like this but the reality is Protestants can speak of even a kind of petrine succession okay uh you know when origin says be a rock like Peter okay the so again I'm trying to put out categories like this let me try to explain so now just to finish off here pivoting from this specific exegetical question with Matthew 16 to try to again put out category for how Protestants think about not just Apostolic succession but even a kind of petrine succession here's how Carl Bart puts it he's talking about the Roman Catholic conception of apostolicity and he says the difference between the Evangelical View and the Roman Catholic view is not in respect of the that but the how the protest of protestantism in this question of succession is directed solely and simply against the fact that the UR Peter Etc is mechanically transferred over Peter's head to every succeeding Roman Bishop as a second third and H 100th Peter as if the succession and tradition of the Peter of Matthew 16 to whom Flesh and Blood had not revealed such things could be related to any succession but a spiritual one or as if being spiritual could be tied to the secular circumstance of a list of Bishops of this kind the reason for the protest is that in these circumstances apostolicity necessarily ceases to be a Divine gift and human task and becomes an assured human possession that it is preeminently understood in a mechanically historical and legal way that it no longer can be a norm which confronts the church with Direction and judgment that in contrast it falls completely under the Judgment of the church that's what that Latin phrase means the control of the second or third or 100th Peter do you see what he's getting into here he's talking about the nature of apostolicity and he's saying apostolicity is not the kind of thing can hand somebody on a sheet of paper and just you know here it is mechanical transfer here's the legal documents that show the list of Bishops they all laid hands and so on so forth therefore you're Apostolic he's saying no apostolicity now now that list of Bishops might be helpful to the end of apostolicity that might be a structure that supports and helps you protect the gospel but first and foremost apostolicity is a matter of fidelity to the apostolic gospel the petrine confession of Jesus and that must always stand above us and hold us accountable to it we are never in possession of it so that's a little bit of a Protestant view on these things what do you think let me know in the comments short video targeted specific on this one issue hopefully it helps somebody thanks for watching everybody",
                translation: "ai-assisted",
              },
              {
                speaker: "Gavin Ortlund",
                work: "The Papacy Is Not From God",
                outlet: "Gavin Ortlund, YouTube",
                date: "15 de octubre de 2025",
                locator: "Minutos 16:06 a 18:49",
                url: "https://www.youtube.com/watch?v=z7zwIN8vEkA&t=966s",
                text: "Un pasaje como este, y la visión de Agustín sobre él, sería un buen ejemplo, pero vamos a tocar los puntos principales. Lo primero que hay que observar es que las responsabilidades de atar y desatar que se le dan a Pedro aquí se reiteran a todos los discípulos dos capítulos después. Igual que en general en todo el Nuevo Testamento, la autoridad para gobernar la iglesia se le da a todos los apóstoles conjuntamente. Y en el contexto de Mateo 16, Pedro habla en nombre de todos los demás apóstoles en respuesta a la pregunta de Jesús a todos ellos: ¿quién dicen ustedes (en plural en griego) que soy yo? Así que eso hace legítimo al menos preguntar: bueno, ¿es esta una supremacía única al estilo de Vaticano I la que se le da a Pedro, que lo pone en una posición de autoridad por encima de los demás, o las responsabilidades que se le dan a Pedro aquí van a ser compartidas en última instancia con los demás apóstoles? Y en la iglesia primitiva, Agustín sostuvo que Pedro funcionaba en un papel representativo en este pasaje. ¿Recibió Pedro las llaves y Pablo no las recibió? ¿Recibió Pedro las llaves, y Juan, Santiago y los demás apóstoles no las recibieron? ¿Lo que se le dio a Pedro se le dio a toda la iglesia? Y de nuevo, el pensamiento de Agustín sobre este pasaje no es excéntrico. No es una visión más marginal que la de Cyprien. Hay muchas visiones distintas, por ejemplo al tomar la roca. Supongamos que Pedro funciona representativamente aquí, como supone Agustín. Eso nos ayuda a entender históricamente la imaginería de la roca aquí. Y se ven las tres en los padres de la iglesia. Hay tres propuestas sobre cuál es el significado de la roca aquí: Cristo, Pedro o la confesión de Pedro. Pero el significado de esto puede ser polivalente. Estas opciones no son necesariamente mutuamente excluyentes. Así que en la iglesia primitiva se ven las tres, y muchos padres de la iglesia las combinan. Así parece pensar Agustín, y creo que es una buena manera de abordar el pasaje. La roca es Pedro en su confesión de Cristo. Bien, así lo expresa Agustín, en su visión final de sus retractaciones: Pedro, llamado así a partir de esta roca, que es Cristo, representó a la persona de la Iglesia, que está edificada sobre esta roca y ha recibido las llaves del Reino de los Cielos, porque tú eres Pedro y no Tú eres la Roca se le dijo a él, pero la Roca era Cristo, a quien confesando, como también confiesa toda la Iglesia, Simón fue llamado Pedro. Así que pueden ver la lógica. Es Pedro: Cristo es la roca, entonces Pedro confiesa a Cristo, y por lo tanto en esa confesión Pedro es la roca. Pero Pedro no es la roca como primer titular de un oficio eclesiástico continuo, sino en cuanto representa la confesión apostólica de Cristo. Y esta interpretación encaja bien con el resto del Nuevo Testamento, donde Cristo es llamado repetidamente la roca sobre la que se edifica la iglesia. Voy a poner tres ejemplos de pasajes donde se ve ese tipo de imaginería, y esto se basa en el Salmo 118, y la roca",
                original:
                  "passage like this one on Augustine's view of this for example would be a good but just to hit the main points here. The first thing to observe is that the responsibilities of binding and loosing given to Peter here are reiterated to all the disciples two chapters later. Just as generally throughout the New Testament, authority to govern the church is given to all the apostles conjointly. And in the context of Matthew 16, Peter is speaking on behalf of all the other apostles in response to Jesus's question to them all. Who do you plural in the Greek say that I am? So that makes it legitimate to at least ask the question, okay, is this a unique Vatican 1 supremacy here that Peter is being given, placing him in a position of authority above the others, or are the responsibilities being given to Peter here ultimately to be shared with the other apostles? And in the early church, Augustine argued that Peter functioned in a representative role in this passage. Did Peter receive the keys and Paul not receive them? Did Peter receive them and John and James and the other apostles not receive them? What was given to Peter was given to the whole church? And again, Augustine's thought on this passage is not eccentric. It's not an outlier view anymore than Cyprien's is. There's lots of different views like taking the rock for example. Let's suppose that Peter is functioning representatively here uh as Augustine supposes. That helps us understand the rock imagery here historically. And you see all three of these in the church fathers. There are three proposals for what is the meaning of the rock here. Christ, Peter or Peter's confession. But the meaning of this is can be polyvalent. These options are not necessarily mutually exclusive. So in the early church you see all three of them and a lot of the church fathers combine them. This is how Augustine seems to think and I think this is a good way to approach the passage. The rock is Peter in his confession of Christ. Okay, here's how Augustine puts it. His final view from his retractions. Peter called after this rock that's Christ represented the person of the church which is built upon this rock and has received the keys of the kingdom of heaven for thou art Peter and not thou art the rock was said to him but the rock was Christ in confessing whom as also the whole church confesses Simon was called Peter. So you can see the logic here. It's Peter Christ is the rock. So Peter confesses Christ and therefore in that confession Peter is the rock. But Peter is not the rock as the first holder of an ongoing ecclesiastical office but as representing the apostolic confession of Christ. And this interpretation fits well with the rest of the New Testament where Christ is repeatedly called the rock on which the church is built. I'll put up three examples of passages where you see that kind of imagery and this is drawing from Psalm 118. and the rock",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Ps.102.28"],
      text: "Segunda Confesión de Londres (1689), 26.3 nota (f) (1719 p. 106; McGlothlin p. 265): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] nevertheless Christ always hath had, and ever shall have a Kingdome, in this world, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "En el concilio de Hechos 15, Pedro es uno de varios apóstoles que hablan; los Padres ven a Santiago con la mayor autoridad",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The Papacy Is Not From God",
                outlet: "Gavin Ortlund, YouTube",
                date: "15 de octubre de 2025",
                locator: "Minutos 13:39 a 15:28",
                url: "https://www.youtube.com/watch?v=z7zwIN8vEkA&t=819s",
                text: 'Lo más cercano sería Hechos 15. Es la primera gran controversia doctrinal de la iglesia primitiva. Los apóstoles y los ancianos de Jerusalén se reúnen para resolverla. Este es exactamente el tipo de escenario para el que supuestamente necesitamos un papa. Y, sin embargo, es una decisión colectiva entre los apóstoles. Pedro es solo uno entre varios apóstoles que hablan, y no parece hablar de manera definitiva. Si alguien tiene un papel superior de algún modo ahí, sería Santiago, que con las palabras por tanto, mi juicio es habla de forma más concluyente hacia la parte final de la discusión. Pero ni siquiera creo que haya que tener una visión muy rígida de que Santiago estuviera en algún tipo de posición superior: ya sabes, es una decisión colectiva. Aun así, en la medida en que se encuentra discusión patrística sobre esto, con más frecuencia se ve a Santiago como quien tiene la mayor autoridad. Así lo expresa John Crosstam en su homilía sobre este pasaje. Cita: Santiago fue investido con la autoridad principal. Pedro, en efecto, habló con más fuerza, pero Santiago aquí con más suavidad, porque así le conviene a quien está en autoridad superior: dejar a otros lo que es desagradable de decir, y aparecer él mismo en la parte más suave. Así que, eh, conozco cómo son estas discusiones y todas las maniobras evasivas que la gente va a usar. Ya saben, van a decir: argumento desde el silencio. Van a decir, eh, que estoy asumiendo solos scriptor, todas estas cosas; que si lo piensan un poco no es así. Eh, yo solo miro los datos y digo: ¿es verdad esto? ¿Jesús instituyó este oficio, o los apóstoles lo concibieron? ¿Es históricamente plausible? Solo mirar los datos y trabajar con ellos, diciendo: no parece. Eh, y en este punto con Hechos 15, la gente normalmente dirá: bueno, Pedro tenía tal autoridad, simplemente no la ejerció aquí. A lo que yo respondería: "Bien, de acuerdo. ¿Dónde, en el Nuevo Testamento, encontramos este oficio?"',
                original:
                  "the most would be Acts 15. This is the first great doctrinal controversy of the early church. The apostles and elders in Jerusalem come together to resolve it. This is exactly the kind of scenario for which we supposedly need a pope. And yet it's a group decision among the apostles. Peter is only one among several apostles who speaks and he does not appear to speak in a definitive matter. If anyone is in a sort of uh higher role there, it would be James who with the words therefore my judgment is speaks more conclusively toward the latter part of the discussion. But I don't even think you have to have a real tight view of James being in some you know it's a group decision to the extent that you do find petristic discussion on this more commonly James is seen as having the greater authority. This is John Crosstam in his sermon on this passage how he puts it. Quote, James was invested with the chief rule. Peter indeed spoke more strongly, but James here more mildly for thus it behooves one in high authority to leave what is unpleasant for others to say while he himself appears in the milder part. So, uh I'm familiar with how these discussions go and all the evasive maneuvers people will have. You know, they'll they'll say argument from silence. They'll say um they'll say I'm assuming solos scriptor all these things that if you just think about it it's like no um I'm just looking at the data and saying is this true. Did Jesus institute this office or was did the apostles envision this? Is this historically plausible? Just looking at the data working through it saying doesn't look like it. Um and on this point with Acts 15 people will typically say well Peter had such an authority he simply didn't exercise it here. to which I would respond by saying, \"Okay, fine. Where does he where in the New Testament do we find this office?\"",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.16.15-Matt.16.19"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Matt.16.18"],
      text: "Segunda Confesión de Londres (1689), 26.3 nota (f) (1719 p. 106; McGlothlin p. 265): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] nevertheless Christ always hath had, and ever shall have a Kingdome, in this world, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Matt.18.15-Matt.18.20"],
      text: "Segunda Confesión de Londres (1689), 26.5 notas (i), (k), (l) (1688 p. 87): este versículo figura como nota al margen junto a la cláusula, en inglés, «In the execution of this Power wherewith he is so intrusted, the Lord Jesus calleth out of the World unto himself, through the Ministry of his Word, by his Spirit, those that are given unto him by his Father, that they may walk before him in all the ways of obedience, which he prescribeth to them in his Word. Those thus called, he commandeth to walk together in particular Societies, or Churches, for their mutual Edification, and the due performance of that publick Worship, which he requireth of them in the World.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Matt.18.18-Matt.18.19"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Matt.18.20"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Matt.28.18-Matt.28.20"],
      text: "Segunda Confesión de Londres (1689), 26.4 nota 7/(g) (1719 p. 106; McGlothlin p. 265): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom by the appointment of the Father, all power for the calling, institution, order, or Government of the Church, is invested in a supream & soveraigne manner, neither can the Pope of Rome in any sense be head thereof, but is that Antichrist, that Man of sin, and Son of perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.4 nota (g) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom, by the appointment of the Father, all Power for the Calling, Institution, Order, or Government of the Church, is invested in a supreme and soveraign manner, neither can the Pope of Rome in any sence be Head thereof, but is that Antichrist, that Man of Sin, and Son of Perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Matt.28.20"],
      text: "Segunda Confesión de Londres (1689), 26.5 notas (i), (k), (l) (1688 p. 87): este versículo figura como nota al margen junto a la cláusula, en inglés, «In the execution of this Power wherewith he is so intrusted, the Lord Jesus calleth out of the World unto himself, through the Ministry of his Word, by his Spirit, those that are given unto him by his Father, that they may walk before him in all the ways of obedience, which he prescribeth to them in his Word. Those thus called, he commandeth to walk together in particular Societies, or Churches, for their mutual Edification, and the due performance of that publick Worship, which he requireth of them in the World.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["John.10.16"],
      text: "Segunda Confesión de Londres (1689), 26.5 notas (i), (k), (l) (1688 p. 87): este versículo figura como nota al margen junto a la cláusula, en inglés, «In the execution of this Power wherewith he is so intrusted, the Lord Jesus calleth out of the World unto himself, through the Ministry of his Word, by his Spirit, those that are given unto him by his Father, that they may walk before him in all the ways of obedience, which he prescribeth to them in his Word. Those thus called, he commandeth to walk together in particular Societies, or Churches, for their mutual Edification, and the due performance of that publick Worship, which he requireth of them in the World.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["John.12.32"],
      text: "Segunda Confesión de Londres (1689), 26.5 notas (i), (k), (l) (1688 p. 87): este versículo figura como nota al margen junto a la cláusula, en inglés, «In the execution of this Power wherewith he is so intrusted, the Lord Jesus calleth out of the World unto himself, through the Ministry of his Word, by his Spirit, those that are given unto him by his Father, that they may walk before him in all the ways of obedience, which he prescribeth to them in his Word. Those thus called, he commandeth to walk together in particular Societies, or Churches, for their mutual Edification, and the due performance of that publick Worship, which he requireth of them in the World.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Acts.2.41-Acts.2.42"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.2.47"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.5.11-Acts.5.14"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.6.3-Acts.6.6"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.11.26"],
      text: "Segunda Confesión de Londres (1689), 26.2 notas (b), (c) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] are and may be called visible Saints; and of such ought all particular Congregations to be constituted.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Acts.13.1-Acts.13.3"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.14.23"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.14.27"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.15.1"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.15.1-Acts.15.30"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.15.11"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.15.30-Acts.15.31"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.16.5"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.17.10"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.18.28"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.20.28"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Rom.1.7"],
      text: "Segunda Confesión de Londres (1689), 26.2 notas (b), (c) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] are and may be called visible Saints; and of such ought all particular Congregations to be constituted.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Segunda Confesión de Londres (1689), 26.6 nota (m) (1688 p. 87): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Members of these Churches are Saints by calling […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Cor.1.2"],
      text: "Segunda Confesión de Londres (1689), 26.2 notas (b), (c) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] are and may be called visible Saints; and of such ought all particular Congregations to be constituted.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Segunda Confesión de Londres (1689), 26.6 nota (m) (1688 p. 87): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Members of these Churches are Saints by calling […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Cor.3.16"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Cor.5.4-1Cor.5.6"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.5.4-1Cor.5.5"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Cor.7.17"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Cor.9.13-1Cor.9.14"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Cor.12"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Cor.15.1"],
      text: "Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Gal.3.28"],
      text: "Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Eph.1.10"],
      text: "Segunda Confesión de Londres (1689), 26.1 nota (a) (1688 p. 85): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Catholick or Universal Church, which (with respect to the internal work of the Spirit, and truth of Grace) may be called Invisible, consists of the whole Number of the Elect, that have been, are, or shall be gathered into one, under Christ, the Head thereof; and is the Spouse, the Body, the Fulness of Him that filleth all in all.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Eph.1.20-Eph.1.22"],
      text: "Segunda Confesión de Londres (1689), 26.2 notas (b), (c) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] are and may be called visible Saints; and of such ought all particular Congregations to be constituted.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Eph.1.22-Eph.1.23"],
      text: "Segunda Confesión de Londres (1689), 26.1 nota (a) (1688 p. 85): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Catholick or Universal Church, which (with respect to the internal work of the Spirit, and truth of Grace) may be called Invisible, consists of the whole Number of the Elect, that have been, are, or shall be gathered into one, under Christ, the Head thereof; and is the Spouse, the Body, the Fulness of Him that filleth all in all.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Eph.1.22"],
      text: "Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Eph.2.19-Eph.2.22"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Eph.3.8-Eph.3.11"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Eph.3.21"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Eph.4.11-Eph.4.12"],
      text: "Segunda Confesión de Londres (1689), 26.4 nota 7/(g) (1719 p. 106; McGlothlin p. 265): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom by the appointment of the Father, all power for the calling, institution, order, or Government of the Church, is invested in a supream & soveraigne manner, neither can the Pope of Rome in any sense be head thereof, but is that Antichrist, that Man of sin, and Son of perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.4 nota (g) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom, by the appointment of the Father, all Power for the Calling, Institution, Order, or Government of the Church, is invested in a supreme and soveraign manner, neither can the Pope of Rome in any sence be Head thereof, but is that Antichrist, that Man of Sin, and Son of Perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Eph.5.22-Eph.5.32"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Eph.5.23"],
      text: "Segunda Confesión de Londres (1689), 26.1 nota (a) (1688 p. 85): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Catholick or Universal Church, which (with respect to the internal work of the Spirit, and truth of Grace) may be called Invisible, consists of the whole Number of the Elect, that have been, are, or shall be gathered into one, under Christ, the Head thereof; and is the Spouse, the Body, the Fulness of Him that filleth all in all.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Eph.5.26-Eph.5.27"],
      text: "Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Eph.5.27"],
      text: "Segunda Confesión de Londres (1689), 26.1 nota (a) (1688 p. 85): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Catholick or Universal Church, which (with respect to the internal work of the Spirit, and truth of Grace) may be called Invisible, consists of the whole Number of the Elect, that have been, are, or shall be gathered into one, under Christ, the Head thereof; and is the Spouse, the Body, the Fulness of Him that filleth all in all.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Eph.5.32"],
      text: "Segunda Confesión de Londres (1689), 26.1 nota (a) (1688 p. 85): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Catholick or Universal Church, which (with respect to the internal work of the Spirit, and truth of Grace) may be called Invisible, consists of the whole Number of the Elect, that have been, are, or shall be gathered into one, under Christ, the Head thereof; and is the Spouse, the Body, the Fulness of Him that filleth all in all.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Phil.1.1"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Col.1.18"],
      text: "Segunda Confesión de Londres (1689), 26.4 nota 7/(g) (1719 p. 106; McGlothlin p. 265): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom by the appointment of the Father, all power for the calling, institution, order, or Government of the Church, is invested in a supream & soveraigne manner, neither can the Pope of Rome in any sense be head thereof, but is that Antichrist, that Man of sin, and Son of perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.1 nota (a) (1688 p. 85): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Catholick or Universal Church, which (with respect to the internal work of the Spirit, and truth of Grace) may be called Invisible, consists of the whole Number of the Elect, that have been, are, or shall be gathered into one, under Christ, the Head thereof; and is the Spouse, the Body, the Fulness of Him that filleth all in all.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Segunda Confesión de Londres (1689), 26.4 nota (g) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom, by the appointment of the Father, all Power for the Calling, Institution, Order, or Government of the Church, is invested in a supreme and soveraign manner, neither can the Pope of Rome in any sence be Head thereof, but is that Antichrist, that Man of Sin, and Son of Perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87. Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["2Thess.2.2-2Thess.2.9"],
      text: "Segunda Confesión de Londres (1689), 26.4 nota (impresa «b» en 1688; (h) en 1677 y 1719) (1688 p. 86–87; 1719 p. 106): este versículo figura como nota al margen (junto a «that Antichrist, that Man of Sin») junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom, by the appointment of the Father, all Power for the Calling, Institution, Order, or Government of the Church, is invested in a supreme and soveraign manner, neither can the Pope of Rome in any sence be Head thereof, but is that Antichrist, that Man of Sin, and Son of Perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["2Thess.2.3-2Thess.2.9"],
      text: "Segunda Confesión de Londres (1689), 26.4 nota 8 (McGlothlin p. 265; 1677): este versículo figura como nota al margen (variante) junto a la cláusula, en inglés, «The Lord Jesus Christ is the Head of the Church, in whom by the appointment of the Father, all power for the calling, institution, order, or Government of the Church, is invested in a supream & soveraigne manner, neither can the Pope of Rome in any sense be head thereof, but is that Antichrist, that Man of sin, and Son of perdition, that exalteth himself in the Church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["2Thess.2.11-2Thess.2.12"],
      text: "Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["1Tim.2.9-1Tim.2.14"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Tim.3.1-1Tim.3.15"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Tim.4.14"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Heb.11.39-Heb.11.40"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Heb.12.22-Heb.12.23"],
      text: "Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Heb.12.23"],
      text: "Segunda Confesión de Londres (1689), 26.1 nota (a) (1688 p. 85): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Catholick or Universal Church, which (with respect to the internal work of the Spirit, and truth of Grace) may be called Invisible, consists of the whole Number of the Elect, that have been, are, or shall be gathered into one, under Christ, the Head thereof; and is the Spouse, the Body, the Fulness of Him that filleth all in all.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["1Pet.5.1-1Pet.5.4"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Rev.2"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Rev.2.1-Rev.3.22"],
      text: "Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Rev.3"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
    {
      refs: ["Rev.12.17"],
      text: "Segunda Confesión de Londres (1689), 26.3 nota (f) (1719 p. 106; McGlothlin p. 265): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] nevertheless Christ always hath had, and ever shall have a Kingdome, in this world, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Rev.13.8"],
      text: "Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rev.14.1"],
      text: "Credo Ortodoxo (1678), XXIX (la iglesia; párrafo sobre la cabeza), p. 145: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rev.18.2"],
      text: "Segunda Confesión de Londres (1689), 26.3 notas (d), (e), (f) (1688 p. 86): este versículo figura como nota al margen junto a la cláusula, en inglés, «The purest Churches under Heaven are subject to mixture, and error; and some have so degenerated as to become no Churches of Christ, but Synagogues of Satan; nevertheless Christ always hath had, and ever shall have a Kingdom in this World, to the end thereof, of such as believe in him, and make profession of his Name.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 85–87.",
    },
    {
      refs: ["Rev.21.2-Rev.21.3"],
      text: "Fe y Mensaje Bautistas (1963 y 2000), VI (la Iglesia), lista de textos de prueba impresa con el artículo: este versículo figura como lista de textos de prueba, sin asignar a una cláusula. Edición: lista impresa con el artículo, tal como la recoge la página. Lectura todavía sin verificar.",
    },
  ],
  passages: {
    title: "Los pasajes de la posición bautista",
    lede: "Los versículos que la tradición bautista cita sobre la Iglesia y su gobierno, completos y con su propia lectura.",
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
      "Los pasajes inspeccionados de la Confesión de New Hampshire (art. XIII) y de Fe y Mensaje Bautistas (art. VI) prescriben la comunión de la iglesia, las ordenanzas, las leyes de Cristo y el ministerio.",
      "No prescriben una observancia específicamente papal.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Comunión y ordenanzas",
        text: "La comunión de la iglesia, las ordenanzas, las leyes de Cristo y el ministerio (Confesión de New Hampshire XIII; Fe y Mensaje VI).",
        sources: [
          {
            citations: ["BNHXIII"],
            label: "New Hampshire XIII",
          },
          {
            citations: ["BBFMVI"],
            label: "Fe y Mensaje VI",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Misión y rendición de cuentas",
        text: "Fe y Mensaje Bautistas describe la misión, los procesos congregacionales y la rendición de cuentas de cada miembro ante Cristo (art. VI).",
        sources: [
          {
            citations: ["BBFMVI"],
            label: "Fe y Mensaje VI",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Una observancia específicamente papal",
        text: "Estos pasajes no prescriben ninguna observancia específicamente papal.",
        sources: [
          {
            citations: ["BNHXIII"],
            label: "New Hampshire XIII",
          },
          {
            citations: ["BBFMVI"],
            label: "Fe y Mensaje VI",
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
          "Según el preámbulo de Fe y Mensaje Bautistas, la autoridad única para la fe y la práctica está en la Escritura; las confesiones no tienen finalidad ni infalibilidad.",
        source: {
          citations: ["BBFMpre_mbulo~pb"],
          label: "Fe y Mensaje, preámbulo",
        },
      },
      confession: {
        label: "Confesiones de la convención",
        definition:
          "La Confesión de New Hampshire es una confesión histórica de la línea de la convención; Fe y Mensaje Bautistas es una declaración de la convención, con versiones fechadas. No se establece que cada cuerpo hispanohablante adopte una versión determinada.",
        source: {
          citations: ["BNHXIII"],
          label: "New Hampshire XIII",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
