import type { Locale } from "@/lib/locale";

type WorkLink = { fatherId: string; names: Record<Locale, string> };

const workLinks: Record<string, WorkLink> = {
  "1-clement": { fatherId: "clement-of-rome", names: { es: "1 Clemente", en: "1 Clement" } },
  barnabas: { fatherId: "epistle-of-barnabas", names: { es: "Carta de Bernabé", en: "Epistle of Barnabas" } },
  didache: { fatherId: "didache", names: { es: "Didajé", en: "Didache" } },
  "epistle-diognetus": {
    fatherId: "epistle-to-diognetus",
    names: { es: "Carta a Diogneto", en: "Epistle to Diognetus" },
  },
  "ignatius-ephesians": { fatherId: "ignatius-of-antioch", names: { es: "A los Efesios", en: "To the Ephesians" } },
  "ignatius-magnesians": { fatherId: "ignatius-of-antioch", names: { es: "A los Magnesios", en: "To the Magnesians" } },
  "ignatius-trallians": { fatherId: "ignatius-of-antioch", names: { es: "A los Tralianos", en: "To the Trallians" } },
  "ignatius-romans": { fatherId: "ignatius-of-antioch", names: { es: "A los Romanos", en: "To the Romans" } },
  "ignatius-philadelphians": {
    fatherId: "ignatius-of-antioch",
    names: { es: "A los Filadelfios", en: "To the Philadelphians" },
  },
  "ignatius-smyrnaeans": {
    fatherId: "ignatius-of-antioch",
    names: { es: "A los Esmirniotas", en: "To the Smyrnaeans" },
  },
  "ignatius-polycarp": { fatherId: "ignatius-of-antioch", names: { es: "A Policarpo", en: "To Polycarp" } },
  "papias-fragments": {
    fatherId: "papias-of-hierapolis",
    names: { es: "Fragmentos", en: "Fragments" },
  },
  "polycarp-philippians": {
    fatherId: "polycarp-of-smyrna",
    names: { es: "A los Filipenses", en: "To the Philippians" },
  },
  "2-clement": {
    fatherId: "clement-of-rome",
    names: { es: "2 Clemente (autor desconocido)", en: "2 Clement (author unknown)" },
  },
  "martyrdom-polycarp": {
    fatherId: "polycarp-of-smyrna",
    names: { es: "Martirio de Policarpo", en: "Martyrdom of Polycarp" },
  },
  "justin-first-apology": { fatherId: "justin-martyr", names: { es: "Primera Apología", en: "First Apology" } },
  "justin-second-apology": { fatherId: "justin-martyr", names: { es: "Segunda Apología", en: "Second Apology" } },
  "justin-dialogue-trypho": {
    fatherId: "justin-martyr",
    names: { es: "Diálogo con Trifón", en: "Dialogue with Trypho" },
  },
  "irenaeus-against-heresies": {
    fatherId: "irenaeus-of-lyon",
    names: { es: "Contra las herejías", en: "Against Heresies" },
  },
  "irenaeus-demonstration": {
    fatherId: "irenaeus-of-lyon",
    names: { es: "Demostración de la predicación apostólica", en: "The Demonstration of the Apostolic Preaching" },
  },
  "clement-alexandria-protrepticus": {
    fatherId: "clement-of-alexandria",
    names: { es: "Exhortación a los paganos", en: "Exhortation to the Heathen" },
  },
  "clement-alexandria-paedagogus": {
    fatherId: "clement-of-alexandria",
    names: { es: "El Pedagogo", en: "The Instructor" },
  },
  "clement-alexandria-stromata": { fatherId: "clement-of-alexandria", names: { es: "Stromata", en: "The Stromata" } },
  "clement-alexandria-quis-dives-salvetur": {
    fatherId: "clement-of-alexandria",
    names: { es: "¿Qué rico se salva?", en: "Who Is the Rich Man That Shall Be Saved?" },
  },
  "tertullian-apologeticus": { fatherId: "tertullian", names: { es: "Apologético", en: "Apologeticus" } },
  "tertullian-ad-nationes": { fatherId: "tertullian", names: { es: "A las naciones", en: "Ad Nationes" } },
  "tertullian-de-praescriptione": {
    fatherId: "tertullian",
    names: { es: "Prescripción contra los herejes", en: "The Prescription Against Heretics" },
  },
  "tertullian-against-marcion": { fatherId: "tertullian", names: { es: "Contra Marción", en: "Against Marcion" } },
  "tertullian-against-praxeas": { fatherId: "tertullian", names: { es: "Contra Praxeas", en: "Against Praxeas" } },
  "tertullian-against-hermogenes": {
    fatherId: "tertullian",
    names: { es: "Contra Hermógenes", en: "Against Hermogenes" },
  },
  "tertullian-against-valentinians": {
    fatherId: "tertullian",
    names: { es: "Contra los valentinianos", en: "Against the Valentinians" },
  },
  "tertullian-scorpiace": { fatherId: "tertullian", names: { es: "Escorpiaco", en: "Scorpiace" } },
  "tertullian-de-baptismo": { fatherId: "tertullian", names: { es: "Sobre el bautismo", en: "On Baptism" } },
  "tertullian-de-oratione": { fatherId: "tertullian", names: { es: "Sobre la oración", en: "On Prayer" } },
  "tertullian-de-paenitentia": { fatherId: "tertullian", names: { es: "Sobre la penitencia", en: "On Repentance" } },
  "tertullian-de-pudicitia": { fatherId: "tertullian", names: { es: "Sobre el pudor", en: "On Modesty" } },
  "tertullian-de-anima": { fatherId: "tertullian", names: { es: "Sobre el alma", en: "On the Soul" } },
  "tertullian-de-carne-christi": {
    fatherId: "tertullian",
    names: { es: "Sobre la carne de Cristo", en: "On the Flesh of Christ" },
  },
  "tertullian-de-resurrectione-carnis": {
    fatherId: "tertullian",
    names: { es: "Sobre la resurrección de la carne", en: "On the Resurrection of the Flesh" },
  },
  "tertullian-de-testimonio-animae": {
    fatherId: "tertullian",
    names: { es: "Sobre el testimonio del alma", en: "On the Testimony of the Soul" },
  },
  "tertullian-de-spectaculis": { fatherId: "tertullian", names: { es: "Sobre los espectáculos", en: "On the Shows" } },
  "tertullian-de-idololatria": { fatherId: "tertullian", names: { es: "Sobre la idolatría", en: "On Idolatry" } },
  "tertullian-de-corona": { fatherId: "tertullian", names: { es: "Sobre la corona", en: "On the Chaplet" } },
  "tertullian-de-fuga": {
    fatherId: "tertullian",
    names: { es: "Sobre la huida en la persecución", en: "On Flight in Persecution" },
  },
  "tertullian-de-patientia": { fatherId: "tertullian", names: { es: "Sobre la paciencia", en: "On Patience" } },
  "tertullian-de-ieiunio": { fatherId: "tertullian", names: { es: "Sobre el ayuno", en: "On Fasting" } },
  "tertullian-de-monogamia": { fatherId: "tertullian", names: { es: "Sobre la monogamia", en: "On Monogamy" } },
  "tertullian-de-exhortatione-castitatis": {
    fatherId: "tertullian",
    names: { es: "Exhortación a la castidad", en: "On Exhortation to Chastity" },
  },
  "tertullian-de-cultu-feminarum": {
    fatherId: "tertullian",
    names: { es: "Sobre el atavío de las mujeres", en: "On the Apparel of Women" },
  },
  "tertullian-de-virginibus-velandis": {
    fatherId: "tertullian",
    names: { es: "Sobre el velo de las vírgenes", en: "On the Veiling of Virgins" },
  },
  "tertullian-ad-uxorem": { fatherId: "tertullian", names: { es: "A su esposa", en: "To His Wife" } },
  "tertullian-ad-martyras": { fatherId: "tertullian", names: { es: "A los mártires", en: "To the Martyrs" } },
  "tertullian-ad-scapulam": { fatherId: "tertullian", names: { es: "A Escápula", en: "To Scapula" } },
  "tertullian-de-pallio": { fatherId: "tertullian", names: { es: "Sobre el palio", en: "On the Pallium" } },
  "hippolytus-refutation": {
    fatherId: "hippolytus-of-rome",
    names: { es: "Refutación de todas las herejías", en: "Refutation of All Heresies" },
  },
  "hippolytus-christ-antichrist": {
    fatherId: "hippolytus-of-rome",
    names: { es: "Sobre Cristo y el Anticristo", en: "Treatise on Christ and Antichrist" },
  },
  "hippolytus-against-noetus": {
    fatherId: "hippolytus-of-rome",
    names: { es: "Contra la herejía de Noeto", en: "Against the Heresy of Noetus" },
  },
  "origen-against-celsus": { fatherId: "origen", names: { es: "Contra Celso", en: "Against Celsus" } },
  "origen-de-principiis": { fatherId: "origen", names: { es: "Sobre los principios", en: "On First Principles" } },
  "origen-letter-africanus": { fatherId: "origen", names: { es: "Carta a Africano", en: "Letter to Africanus" } },
  "origen-letter-gregory": { fatherId: "origen", names: { es: "Carta a Gregorio", en: "Letter to Gregory" } },
  "cyprian-de-unitate": {
    fatherId: "cyprian-of-carthage",
    names: { es: "Sobre la unidad de la Iglesia", en: "On the Unity of the Church" },
  },
  "cyprian-de-lapsis": { fatherId: "cyprian-of-carthage", names: { es: "Sobre los caídos", en: "On the Lapsed" } },
  "cyprian-de-dominica-oratione": {
    fatherId: "cyprian-of-carthage",
    names: { es: "Sobre la oración del Señor", en: "On the Lord's Prayer" },
  },
  "cyprian-de-habitu-virginum": {
    fatherId: "cyprian-of-carthage",
    names: { es: "Sobre el atuendo de las vírgenes", en: "On the Dress of Virgins" },
  },
  "cyprian-de-mortalitate": {
    fatherId: "cyprian-of-carthage",
    names: { es: "Sobre la mortalidad", en: "On the Mortality" },
  },
  "cyprian-de-opere-et-eleemosynis": {
    fatherId: "cyprian-of-carthage",
    names: { es: "Sobre las obras y la limosna", en: "On Works and Alms" },
  },
  "cyprian-de-bono-patientiae": {
    fatherId: "cyprian-of-carthage",
    names: { es: "Sobre el bien de la paciencia", en: "On the Advantage of Patience" },
  },
  "cyprian-de-zelo-et-livore": {
    fatherId: "cyprian-of-carthage",
    names: { es: "Sobre los celos y la envidia", en: "On Jealousy and Envy" },
  },
  "cyprian-ad-demetrianum": { fatherId: "cyprian-of-carthage", names: { es: "A Demetriano", en: "To Demetrianus" } },
  "cyprian-ad-fortunatum": {
    fatherId: "cyprian-of-carthage",
    names: { es: "Exhortación al martirio", en: "Exhortation to Martyrdom" },
  },
  "cyprian-quod-idola-dii-non-sint": {
    fatherId: "cyprian-of-carthage",
    names: { es: "Sobre la vanidad de los ídolos", en: "On the Vanity of Idols" },
  },
  "cyprian-testimonia-ad-quirinum": {
    fatherId: "cyprian-of-carthage",
    names: { es: "Testimonios a Quirino", en: "Testimonies to Quirinus" },
  },
  "cyprian-correspondence": { fatherId: "cyprian-of-carthage", names: { es: "Cartas", en: "Epistles" } },
  "eusebius-church-history": {
    fatherId: "eusebius-of-caesarea",
    names: { es: "Historia eclesiástica", en: "Church History" },
  },
  "athanasius-de-incarnatione": {
    fatherId: "athanasius-of-alexandria",
    names: { es: "Sobre la encarnación del Verbo", en: "On the Incarnation of the Word" },
  },
  "athanasius-against-arians": {
    fatherId: "athanasius-of-alexandria",
    names: { es: "Discursos contra los arrianos", en: "Discourses Against the Arians" },
  },
  "athanasius-life-antony": {
    fatherId: "athanasius-of-alexandria",
    names: { es: "Vida de Antonio", en: "Life of Antony" },
  },
  "basil-de-spiritu-sancto": {
    fatherId: "basil-of-caesarea",
    names: { es: "Sobre el Espíritu Santo", en: "On the Holy Spirit" },
  },
  "basil-hexaemeron": { fatherId: "basil-of-caesarea", names: { es: "Hexamerón", en: "Hexaemeron" } },
  "basil-letters": { fatherId: "basil-of-caesarea", names: { es: "Cartas", en: "Letters" } },
  "cyril-jerusalem-catechetical-lectures": {
    fatherId: "cyril-of-jerusalem",
    names: { es: "Catequesis", en: "Catechetical Lectures" },
  },
  "gregory-nyssa-great-catechism": {
    fatherId: "gregory-of-nyssa",
    names: { es: "Gran catequesis", en: "The Great Catechism" },
  },
  "gregory-nyssa-making-man": {
    fatherId: "gregory-of-nyssa",
    names: { es: "Sobre la creación del hombre", en: "On the Making of Man" },
  },
  "gregory-nyssa-soul-resurrection": {
    fatherId: "gregory-of-nyssa",
    names: { es: "Sobre el alma y la resurrección", en: "On the Soul and the Resurrection" },
  },
  "gregory-nyssa-against-eunomius": {
    fatherId: "gregory-of-nyssa",
    names: { es: "Contra Eunomio", en: "Against Eunomius" },
  },
  "gregory-nyssa-answer-eunomius-second-book": {
    fatherId: "gregory-of-nyssa",
    names: { es: "Respuesta al segundo libro de Eunomio", en: "Answer to Eunomius' Second Book" },
  },
  "gregory-nyssa-virginity": { fatherId: "gregory-of-nyssa", names: { es: "Sobre la virginidad", en: "On Virginity" } },
  "gregory-nyssa-baptism-christ": {
    fatherId: "gregory-of-nyssa",
    names: { es: "Sobre el bautismo de Cristo", en: "On the Baptism of Christ" },
  },
  "gregory-nyssa-faith": { fatherId: "gregory-of-nyssa", names: { es: "Sobre la fe", en: "On the Faith" } },
  "gregory-nyssa-holy-spirit": {
    fatherId: "gregory-of-nyssa",
    names: { es: "Sobre el Espíritu Santo", en: "On the Holy Spirit" },
  },
  "gregory-nyssa-holy-trinity": {
    fatherId: "gregory-of-nyssa",
    names: { es: "Sobre la Santa Trinidad", en: "On the Holy Trinity" },
  },
  "gregory-nyssa-not-three-gods": {
    fatherId: "gregory-of-nyssa",
    names: { es: "Sobre «no tres dioses»", en: "On Not Three Gods" },
  },
  "gregory-nyssa-infants-early-deaths": {
    fatherId: "gregory-of-nyssa",
    names: { es: "Sobre los niños muertos prematuramente", en: "On Infants' Early Deaths" },
  },
  "gregory-nyssa-meletius": {
    fatherId: "gregory-of-nyssa",
    names: { es: "Oración fúnebre por Melecio", en: "Funeral Oration on Meletius" },
  },
  "gregory-nyssa-pilgrimages": {
    fatherId: "gregory-of-nyssa",
    names: { es: "Sobre las peregrinaciones", en: "On Pilgrimages" },
  },
  "gregory-nyssa-letters": { fatherId: "gregory-of-nyssa", names: { es: "Cartas escogidas", en: "Selected Letters" } },
  "ambrose-de-mysteriis": {
    fatherId: "ambrose-of-milan",
    names: { es: "Sobre los misterios", en: "On the Mysteries" },
  },
  "ambrose-de-fide": {
    fatherId: "ambrose-of-milan",
    names: { es: "Exposición de la fe cristiana", en: "Exposition of the Christian Faith" },
  },
  "ambrose-de-spiritu-sancto": {
    fatherId: "ambrose-of-milan",
    names: { es: "Sobre el Espíritu Santo", en: "On the Holy Spirit" },
  },
  "ambrose-de-officiis": {
    fatherId: "ambrose-of-milan",
    names: { es: "Sobre los deberes del clero", en: "On the Duties of the Clergy" },
  },
  "ambrose-de-paenitentia": {
    fatherId: "ambrose-of-milan",
    names: { es: "Sobre la penitencia", en: "Concerning Repentance" },
  },
  "ambrose-de-virginibus": {
    fatherId: "ambrose-of-milan",
    names: { es: "Sobre las vírgenes", en: "Concerning Virgins" },
  },
  "ambrose-de-viduis": { fatherId: "ambrose-of-milan", names: { es: "Sobre las viudas", en: "Concerning Widows" } },
  "ambrose-de-excessu-fratris": {
    fatherId: "ambrose-of-milan",
    names: { es: "Sobre la muerte de su hermano Sátiro", en: "On the Decease of His Brother Satyrus" },
  },
  "ambrose-selected-letters": {
    fatherId: "ambrose-of-milan",
    names: {
      es: "Cartas escogidas y el sermón contra Auxencio",
      en: "Selected Letters and the Sermon Against Auxentius",
    },
  },
  "chrysostom-homilies-matthew": {
    fatherId: "john-chrysostom",
    names: { es: "Homilías sobre Mateo", en: "Homilies on Matthew" },
  },
  "chrysostom-homilies-romans": {
    fatherId: "john-chrysostom",
    names: { es: "Homilías sobre Romanos", en: "Homilies on Romans" },
  },
  "chrysostom-homilies-1-corinthians": {
    fatherId: "john-chrysostom",
    names: { es: "Homilías sobre 1 Corintios", en: "Homilies on First Corinthians" },
  },
  "chrysostom-homilies-hebrews": {
    fatherId: "john-chrysostom",
    names: { es: "Homilías sobre Hebreos", en: "Homilies on Hebrews" },
  },
  "augustine-confessions": { fatherId: "augustine-of-hippo", names: { es: "Confesiones", en: "Confessions" } },
  "augustine-city-of-god": {
    fatherId: "augustine-of-hippo",
    names: { es: "La ciudad de Dios", en: "The City of God" },
  },
  "augustine-tractates-john": {
    fatherId: "augustine-of-hippo",
    names: { es: "Tratados sobre el Evangelio de Juan", en: "Tractates on the Gospel of John" },
  },
  "augustine-de-doctrina-christiana": {
    fatherId: "augustine-of-hippo",
    names: { es: "Sobre la doctrina cristiana", en: "On Christian Doctrine" },
  },
  "augustine-enchiridion": { fatherId: "augustine-of-hippo", names: { es: "Enquiridión", en: "The Enchiridion" } },
  "augustine-sermon-on-the-mount": {
    fatherId: "augustine-of-hippo",
    names: { es: "Sermón del Señor en el monte", en: "Our Lord's Sermon on the Mount" },
  },
  "augustine-de-catechizandis-rudibus": {
    fatherId: "augustine-of-hippo",
    names: { es: "Sobre la catequesis de los principiantes", en: "On the Catechising of the Uninstructed" },
  },
  "augustine-de-fide-et-symbolo": {
    fatherId: "augustine-of-hippo",
    names: { es: "Sobre la fe y el credo", en: "On Faith and the Creed" },
  },
  "shepherd-hermas": { fatherId: "shepherd-of-hermas", names: { es: "El Pastor", en: "The Shepherd" } },
};

export type FatherWorkRow = { id: string; label: string };

export type WorkRef = { id: string; author: string; title: string };

const fatherOfAuthor: Record<string, string> = { hippolytus: "hippolytus-of-rome" };

function linkOf(work: WorkRef, locale: Locale): { fatherId: string; label: string } | null {
  const link = workLinks[work.id];
  if (link) return { fatherId: link.fatherId, label: link.names[locale] };
  if (work.author === "anonymous") return null;
  return { fatherId: fatherOfAuthor[work.author] ?? work.author, label: work.title };
}

export function worksByFather(works: WorkRef[], locale: Locale): Record<string, FatherWorkRow[]> {
  const grouped: Record<string, FatherWorkRow[]> = {};
  const order = Object.keys(workLinks);
  const sorted = [...works].sort((a, b) => {
    const left = order.indexOf(a.id);
    const right = order.indexOf(b.id);
    return (left === -1 ? order.length : left) - (right === -1 ? order.length : right);
  });
  for (const work of sorted) {
    const link = linkOf(work, locale);
    if (link) (grouped[link.fatherId] ??= []).push({ id: work.id, label: link.label });
  }
  return grouped;
}

export function neighborsOfWork(
  id: string,
  works: WorkRef[],
  locale: Locale,
): { previous: FatherWorkRow | null; next: FatherWorkRow | null } {
  const work = works.find((entry) => entry.id === id);
  const link = work ? linkOf(work, locale) : null;
  if (!link) return { previous: null, next: null };
  const siblings = worksByFather(works, locale)[link.fatherId] ?? [];
  const index = siblings.findIndex((entry) => entry.id === id);
  return { previous: siblings[index - 1] ?? null, next: siblings[index + 1] ?? null };
}

export function workName(id: string, locale: Locale, fallback: string): string {
  return workLinks[id]?.names[locale] ?? fallback;
}
