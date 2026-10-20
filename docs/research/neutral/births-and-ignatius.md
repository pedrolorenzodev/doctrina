# Birth estimates and Ignatius dossier

## Progress

- Status: done
- Research date: 2026-10-20
- Scope: the seven `born: null` person records named below; four published proposals for dating Ignatius; and the place, addressee, and subject of the seven letters in the middle recension.
- Method: scholarly editions and studies were preferred; Wikipedia and unsourced tertiary summaries were excluded. A date is not supplied merely by subtracting a plausible age from a death or floruit.
- Data consequence: this report does not edit `data/raw/history.json`. Only one modern numerical estimate was found, for Optatus, and its article does not disclose the basis for the number; it is not strong enough to replace `null` without a second independent scholarly source.

## 1. Missing birth years

| Record | Result | Evidence reviewed | Data recommendation |
|---|---|---|---|
| `clement-of-rome` | **No estimate found.** | Kirsopp Lake writes that “nothing certain is known of Clement” and discusses the possible identifications without proposing a birth date: *The Apostolic Fathers*, vol. 1 (London: William Heinemann; New York: Macmillan, 1912), pp. 4–5 ([scan](https://archive.org/details/apostolicfathers0001kirs/page/4/mode/2up)). | Keep `born: null`. |
| `ignatius-of-antioch` | **No estimate found.** | Lake's biographical and textual introduction dates the journey and letters but gives no birth estimate: *The Apostolic Fathers*, vol. 1 (1912), pp. 165–171 ([scan](https://archive.org/details/apostolicfathers0001kirs/page/164/mode/2up)). William R. Schoedel's modern commentary likewise begins from the letters and later testimonia rather than a recoverable birth year: *Ignatius of Antioch: A Commentary on the Letters of Ignatius of Antioch*, Hermeneia (Philadelphia: Fortress Press, 1985), pp. 1–7 ([catalogue record](https://books.google.com/books?id=tJxQAQAAIAAJ)). | Keep `born: null`; do not use the common but unsourced `c. 35–50`. |
| `melito-of-sardis` | **No estimate found.** | Alistair Stewart-Sykes explicitly concludes: “A birth date can only be guessed at”: *The Lamb's High Feast: Melito, Peri Pascha and the Quartodeciman Paschal Liturgy at Sardis*, Supplements to Vigiliae Christianae 42 (Leiden: Brill, 1998), p. 3 ([publisher preview](https://brill.com/previewpdf/book/9789004313095/B9789004313095-s002.xml)). | Keep `born: null`. |
| `theophilus-of-antioch` | A conjecture of **c. 115** exists, but it is an unsupported nineteenth-century editorial placement rather than a source-derived estimate. | A. Cleveland Coxe adds the bracketed conjecture in *Ante-Nicene Fathers*, vol. 2, ed. Alexander Roberts and James Donaldson (Buffalo: Christian Literature Publishing, 1885), p. 93 in the original pagination, digital p. 173 ([scan](https://ccel.org/ccel/s/schaff/anf02/cache/anf02.pdf)). The modern biographical study is Rick Rogers, *Theophilus of Antioch: The Life and Thought of a Second-Century Bishop* (Lanham, MD: Lexington Books, 2000), “Theophilus' Life,” pp. 3–14 ([catalogue and contents](https://books.google.com/books?id=6W5ADtF12qIC)); no numerical birth estimate was found there. | Keep `born: null`; retain `c. 115` only as history of scholarship, not as data. |
| `methodius-of-olympus` | **No year estimate found.** A scholarly summary only places his activity in the last quarter of the third century; a doctoral study says merely that he was born in the third century and that the exact date is unknown. | Frederick W. Norris, “Methodius of Olympus, St.,” *New Catholic Encyclopedia*, 2nd ed., vol. 9 (Detroit: Gale, 2003), pp. 514–515, states that the most that can be said is that he exercised his ministry in the last quarter of the third century ([entry scan](https://cur.ac.rw/mis/main/library/documents/book_file/digital-67ee3e41d4abd7.14966077.pdf)). Dmitry B. Kashkin, “The Apostolic Decree and Its Textual Development” (PhD diss., University of Edinburgh, 2017), p. 121, says “born in the 3rd century (the exact date is not known)” ([repository PDF](https://era.ed.ac.uk/server/api/core/bitstreams/76d99382-f83c-4435-8d80-f6406cce4dca/content)). | Keep `born: null`; do not adopt the uncited `230` used by some repositories. |
| `optatus-of-milevis` | One recent theological article prints **c. 320**, but gives no source or argument for it. The standard modern edition's introduction supplies no birth estimate. | Marcel Mukadi, “Optatus of Milevis and the Sacraments: Controversy between Catholics and Donatists,” *Africa Tomorrow* 23, nos. 1–2 (2021): 205–239, at p. 221 ([issue PDF](https://www.juco.ac.tz/jslabtec/documents/publications/Africa%20Tomorrow%202021%20No%2023_1-2.pdf)); Mark Edwards, trans. and ed., *Optatus: Against the Donatists*, Translated Texts for Historians 27 (Liverpool: Liverpool University Press, 1997), chronology pp. viii–x and introduction pp. xi–xxxii ([JSTOR book record](https://www.jstor.org/stable/jj.38238810)). | Keep `born: null` pending independent support. If the product later needs a display-only estimate, `c. 320` must be labelled low-confidence and attributed to Mukadi. |
| `vincent-of-lerins` | **No estimate found.** | Thomas G. Guarino notes that little is known beyond Vincent's residence at Lérins and Gennadius's description: “St. Vincent of Lérins and the Development of Christian Doctrine,” *Logos* 17, no. 3 (2014): 103–117, at pp. 103–104, DOI [10.1353/log.2014.0029](https://doi.org/10.1353/log.2014.0029). See also Guarino, *Vincent of Lérins and the Development of Christian Doctrine* (Grand Rapids: Baker Academic, 2013), “The Life and Works of Vincent of Lérins,” pp. 1–16 ([catalogue and contents](https://books.google.com/books?id=QsOtD8Q0rYAC)). | Keep `born: null`. |

### Result

There is no defensible batch fill for these seven `born` fields. `c. 320` for Optatus is the only modern numerical candidate located, but its evidentiary basis is not stated. Theophilus's `c. 115` is explicitly an editor's conjecture from 1885. The neutral data choice is therefore to keep all seven fields null and make the uncertainty visible in their notes if the interface needs to explain it.

## 2. Four dating proposals for Ignatius

These proposals do not all date the same object. Decrept dates the historical circumstances of Ignatius's arrest; Pervo and Barnes date the letters/person; Vinzent separates an earlier three-letter collection from the expanded seven-letter collection. They must not be flattened into a single four-value range.

| Scholar | Full bibliography | Proposed date | One-line grounds |
|---|---|---|---|
| Étienne Decrept | “Circonstances et interprétations du voyage d'Ignace d'Antioche,” *Revue des Sciences Religieuses* 82, no. 4 (2008): 389–399, DOI [10.4000/rsr.433](https://doi.org/10.4000/rsr.433). | **July 116** for the Antiochene persecution that supplies the proposed setting for Ignatius's condemnation and journey. | The apocryphal *Acts of Drosis* preserve names, places, and dates that Decrept reads as traces of persecution after the Antioch earthquake of 13 December 115; the reconstruction supplies a concrete setting for the journey. This is a proposal, not a secure external attestation. |
| Richard I. Pervo | *The Making of Paul: Constructions of the Apostle in Early Christianity* (Minneapolis: Fortress Press, 2010), pp. 134–135. | **c. 135–140**, described as the preferable date. | Pervo treats Eusebius's Trajanic placement as chronographically motivated and situates the Ignatian corpus within the developed second-century reception and construction of Paul. |
| Timothy D. Barnes | “The Date of Ignatius,” *The Expository Times* 120, no. 3 (December 2008): 119–130, DOI [10.1177/0014524608098730](https://doi.org/10.1177/0014524608098730). | **Probably the 140s**. | Barnes argues that Ignatius knew the writings and terminology of the Valentinian Ptolemaeus and that Eusebius's dating to Trajan is not authoritative; an Antonine date avoids the false choice between pre-120 authenticity and a post-160 forgery. |
| Markus Vinzent | *Christ's Torah: The Making of the New Testament in the Second Century* (Abingdon and New York: Routledge, 2024), pp. 28–31, DOI [10.4324/9781003378303](https://doi.org/10.4324/9781003378303). | Earlier **three-letter collection after 150**; expanded **seven-letter collection after 170 and by c. 170–177 at the latest**. | Vinzent argues from differential reception: Eusebius, Origen, and Irenaeus directly use only the three-letter collection, while the Lyon martyrs' letter of 177 and Theophilus know both; he therefore treats the seven-letter form as a later expansion, probably near Smyrna. |

### Neutral synthesis

- The traditional `c. 107–110` value in `history.json` is one reconstruction based on Eusebius, not an undisputed date.
- Decrept offers a historically specific Trajanic setting in 116.
- Pervo and Barnes move the corpus into c. 135–140 or the 140s.
- Vinzent's proposal is more radical and recension-specific: it dates literary collections rather than simply moving the martyrdom date.
- A neutral product should expose this as a dated scholarly dispute and identify the object being dated. It should not rewrite all four proposals as if they were estimates of one event.

## 3. The seven middle-recension letters

### Edition and method

The evidence below comes from Kirsopp Lake, ed. and trans., *The Apostolic Fathers*, vol. 1, Loeb Classical Library (London: William Heinemann; New York: Macmillan, 1912), pp. 172–277 ([complete scan](https://archive.org/details/apostolicfathers0001kirs/page/172/mode/2up)). Place and addressee are taken from the letter's own salutation or closing, not from a modern itinerary. “From Smyrna” and “from Troas” are therefore internal claims of the collection whose historicity depends on the authenticity and dating question above.

| Letter | Place of writing from the letter | Addressee from the salutation | Neutral subject summary | Locators in Lake 1912 |
|---|---|---|---|---|
| **Ephesians** | **Smyrna**: Eph. 21.1, “to Smyrna, whence I also write.” | “The church which is at Ephesus in Asia.” | Thanks the Ephesians for their delegation; urges concord around bishop and presbytery; warns against false teaching; affirms Christ's embodied birth and passion and refers to Eucharistic unity. | Salutation pp. 172–173; Eph. 1–6, 7–9, 18–21, pp. 172–195. |
| **Magnesians** | **Smyrna**: Mag. 15.1 sends greetings from Ephesians present at Smyrna, “whence also I am writing.” | “The church which is in Magnesia on the Maeander.” | Commends the delegation and the young bishop Damas; urges unity with bishop, presbytery, and deacons; contrasts Christian practice with “Judaizing”; closes with an appeal to concord. | Salutation pp. 196–197; Mag. 2–10, 13–15, pp. 198–211. |
| **Trallians** | **Smyrna**: Trall. 12.1, “I greet you from Smyrna.” | “The holy church which is at Tralles in Asia.” | Thanks the church through its bishop Polybius; urges respect for bishop, presbyters, and deacons; warns against alien teaching; insists that Jesus's passion and resurrection were real rather than apparent. | Salutation pp. 212–213; Trall. 2–3, 6–10, 12–13, pp. 214–223. |
| **Romans** | **Smyrna**: Rom. 10.1, “I write this to you from Smyrna”; Rom. 10.3 dates the letter to 24 August in Lake's translation. | The church “which presides in the country of the district of the Romans.” | Asks the Roman Christians not to intervene to prevent the writer's anticipated martyrdom and requests their prayers; the letter does not address a prior delegation from its recipient. | Salutation pp. 224–225; Rom. 1–10, pp. 226–238. |
| **Philadelphians** | **Troas**: Philad. 11.2 says that the brethren at Troas send greetings and that he is writing from there. | “The church of God the Father and of Jesus Christ which is in Philadelphia in Asia.” | Urges unity around the bishop and one Eucharistic assembly; recalls a dispute involving Judaism and “archives”; asks the church to send a deacon after peace has returned to Antioch. | Salutation pp. 238–239; Philad. 2–8, 10–11, pp. 240–250. |
| **Smyrnaeans** | **Troas**: Smyrn. 12.1, greetings from the brethren at Troas “whence I am writing.” | “The church of God the Father and of Jesus Christ the beloved, which has obtained every gift, which is at Smyrna in Asia.” | Affirms Jesus's real flesh, suffering, and resurrection against docetic claims; connects Eucharistic and communal order with the bishop; reports peace in Antioch and asks for an envoy. | Salutation pp. 250–251; Smyrn. 1–8, 11–12, pp. 252–266. |
| **Polycarp** | **Troas**: Poly. 8.1 says the writer must sail suddenly from Troas to Neapolis. | “Polycarp, bishop of the church of the Smyrnaeans.” | Gives pastoral counsel to Polycarp and the community on endurance, widows, slaves, marriage, and church officers; asks Polycarp to appoint a messenger and circulate the Antioch request. | Salutation pp. 266–267; Poly. 1–8, pp. 268–277. |

### Route represented by the letters

The collection itself groups four letters at Smyrna—Ephesians, Magnesians, Trallians, Romans—and three at Troas—Philadelphians, Smyrnaeans, Polycarp. This is a description of the internal literary itinerary, not independent proof that every letter was written at the named stop.

## Sources

- Barnes, Timothy D. “The Date of Ignatius.” *The Expository Times* 120, no. 3 (2008): 119–130. DOI [10.1177/0014524608098730](https://doi.org/10.1177/0014524608098730).
- Decrept, Étienne. “Circonstances et interprétations du voyage d'Ignace d'Antioche.” *Revue des Sciences Religieuses* 82, no. 4 (2008): 389–399. DOI [10.4000/rsr.433](https://doi.org/10.4000/rsr.433).
- Edwards, Mark, trans. and ed. *Optatus: Against the Donatists*. Translated Texts for Historians 27. Liverpool: Liverpool University Press, 1997.
- Guarino, Thomas G. *Vincent of Lérins and the Development of Christian Doctrine*. Grand Rapids: Baker Academic, 2013.
- Lake, Kirsopp, ed. and trans. *The Apostolic Fathers*. Vol. 1. Loeb Classical Library. London: William Heinemann; New York: Macmillan, 1912.
- Pervo, Richard I. *The Making of Paul: Constructions of the Apostle in Early Christianity*. Minneapolis: Fortress Press, 2010.
- Rogers, Rick. *Theophilus of Antioch: The Life and Thought of a Second-Century Bishop*. Lanham, MD: Lexington Books, 2000.
- Schoedel, William R. *Ignatius of Antioch: A Commentary on the Letters of Ignatius of Antioch*. Hermeneia. Philadelphia: Fortress Press, 1985.
- Stewart-Sykes, Alistair. *The Lamb's High Feast: Melito, Peri Pascha and the Quartodeciman Paschal Liturgy at Sardis*. Supplements to Vigiliae Christianae 42. Leiden: Brill, 1998.
- Vinzent, Markus. *Christ's Torah: The Making of the New Testament in the Second Century*. Abingdon and New York: Routledge, 2024.
