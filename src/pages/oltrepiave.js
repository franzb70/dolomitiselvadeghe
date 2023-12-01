import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Oltrepiave() {

  let fotoEmilia = []
  let foto1 = {path: 'oltrepiave/CimaEmilia01.jpg', desc: 'Ghiaione di Forc. Montanaia'}
  let foto2 = {path: 'oltrepiave/CimaEmilia02.jpg', desc: 'Il Campanile'}
  let foto3 = {path: 'oltrepiave/CimaEmilia03.jpg', desc: 'Sulla normale'}
  let foto4 = {path: 'oltrepiave/CimaEmilia04.jpg', desc: 'Cima Both e il Cridola'}
  fotoEmilia.push(foto1)
  fotoEmilia.push(foto2)
  fotoEmilia.push(foto3)
  fotoEmilia.push(foto4)  
  let descEmilia = `Dal rif. Padova a forcella Montanaia (1050m dislivello). Si scende tenendo
  la destra, tracce alla base di Cima Both, fino alla forcella del campanile.
  Qui si prende la cresta nord superando con facili passaggi di
  arrampicata dei saliscendi (passaggi I, esposto in un caso). Percorsa una
  cengia sul versante del campanile si attacca la parete nord-est, salendo per
  una settantina di metri, I abbastanza continuo, alquanto detritico che
  richiede attenzione per la movimentazione di sassi. Si esce su una spalla
  per proseguire in direzione sud per facili creste e canalini fino a
  sbucare nella strettissima sommita' che offre una visuale ottima sul
  circondario degli Spalti di toro-Monfalconi. Cima nel complesso abbastanza
  selvaggia, benche' piuttosto frequentata.`

  let fotoBortolusc = []
  let foto5 = {path: 'oltrepiave/bortolusc_01.jpg', desc: 'Forcella delle Pregoane'}
  let foto6 = {path: 'oltrepiave/bortolusc_02.jpg', desc: 'Canale sbagliato'}
  let foto7 = {path: 'oltrepiave/bortolusc_03.jpg', desc: 'Facili balze rocciose'}
  let foto8 = {path: 'oltrepiave/bortolusc_04.jpg', desc: 'Gendarmi'}
  let foto9 = {path: 'oltrepiave/bortolusc_05.jpg', desc: 'Canale Fradeloni'}
  let foto10 = {path: 'oltrepiave/bortolusc_06.jpg', desc: 'Passaggio II-'}
  let foto11 = {path: 'oltrepiave/bortolusc_07.jpg', desc: 'Laste'}
  let foto12 = {path: 'oltrepiave/bortolusc_08.jpg', desc: 'Ciol in discesa'}
  fotoBortolusc.push(foto5)
  fotoBortolusc.push(foto6)
  fotoBortolusc.push(foto7)
  fotoBortolusc.push(foto8)
  fotoBortolusc.push(foto9)
  fotoBortolusc.push(foto10)
  fotoBortolusc.push(foto11)
  fotoBortolusc.push(foto12)  
  let descBortolusc = `Via normale, per il canale Fradeloni, con difficoltà che non arrivano mai al II.`

  let fotoVacalizza = []
  let foto13 = {path: 'oltrepiave/vacalizza00.JPG', desc: 'Forcella in lontananza'}
  let foto14 = {path: 'oltrepiave/vacalizza01.JPG', desc: 'Vetta'}
  let foto15 = {path: 'oltrepiave/vacalizza02.JPG', desc: 'Contrapposta Torre Vacalizza'}
  let foto16 = {path: 'oltrepiave/vacalizza03.JPG', desc: 'Cengetta solida'}
  let foto17 = {path: 'oltrepiave/vacalizza04.JPG', desc: 'Cima dei Vieres'}
  let foto18 = {path: 'oltrepiave/vacalizza05.JPG', desc: 'Sua maestà e la Regina'}
  let foto19 = {path: 'oltrepiave/vacalizza06.JPG', desc: 'Muretto iniziale di III'}
  let foto20 = {path: 'oltrepiave/vacalizza07.JPG', desc: 'Cresta in discesa'}
  fotoVacalizza.push(foto13)
  fotoVacalizza.push(foto15)
  fotoVacalizza.push(foto16)
  fotoVacalizza.push(foto17)
  fotoVacalizza.push(foto14)
  fotoVacalizza.push(foto18)
  fotoVacalizza.push(foto20)
  fotoVacalizza.push(foto19)  
  let descVacalizza = `Cima isolata in ambiente 
  selvaggio, nonostante il percorso sia segnalato da sbiaditi bolli rossi 
  fino all'anticima principale. Impegno ai limiti dell'escursionismo, con 
  un salto di 5m di III- obbligatorio e 3 brevi tratti di II anche molto 
  esposti nella cresta finale. Salita grandiosa, in grado di appagare i 
  più esigenti amanti del genere.`

  let fotoCimaToro = []
  let foto31 = {path: 'oltrepiave/toro00.JPG', desc: 'Attacco della via per prendere la cengia'}
  let foto21 = {path: 'oltrepiave/toro01.JPG', desc: 'Inizio della cengia'}
  let foto22 = {path: 'oltrepiave/toro02.JPG', desc: 'Piccola interruzione'}
  let foto23 = {path: 'oltrepiave/toro02b.JPG', desc: 'Verso Punta Pia'}
  let foto24 = {path: 'oltrepiave/toro03.JPG', desc: 'Attacco della parete'}
  let foto25 = {path: 'oltrepiave/toro04.JPG', desc: 'Da secondo...'}
  let foto26 = {path: 'oltrepiave/toro05.JPG', desc: 'Sull\'articolata parete sud'}
  let foto27 = {path: 'oltrepiave/toro06.JPG', desc: 'Ultimi 20m di II'}
  let foto28 = {path: 'oltrepiave/toro07.JPG', desc: 'Pareva più facile...'}
  let foto29 = {path: 'oltrepiave/toro08.JPG', desc: 'In discesa su placchette'}
  let foto30 = {path: 'oltrepiave/toro09.JPG', desc: 'Campanile di Val Montanaia'}
  fotoCimaToro.push(foto31)
  fotoCimaToro.push(foto21)
  fotoCimaToro.push(foto22)
  fotoCimaToro.push(foto23)
  fotoCimaToro.push(foto24)
  fotoCimaToro.push(foto25)
  fotoCimaToro.push(foto26)
  fotoCimaToro.push(foto27)
  fotoCimaToro.push(foto28)
  fotoCimaToro.push(foto29)
  fotoCimaToro.push(foto30)  
  let descCimaToro = `Stupenda Cima, la maggiore tra gli Spalti di Toro, affiancata a sud dalla sinuosa Punta Pia. Dal Biv. Perugini 
  si prende il sentiero diretto a forcella segnata e lo si abbandona poche decine di metri prima della stessa piegando a 
  sinistra per uno scosceso canale. Superate alcune strettoie e dei saliscendi si attacca la normale sotto la cengia principale, 
  che si guadagna scalando con attenzione 10m appoggiati con detrito (I delicato). La cengia avvolge tutto il versante est e sud del monte, 
  senza particolari difficoltà, dovendo scendere in arrampicata per qualche metro poco prima dell'attacco, già in vista di Punta Pia. 
  La via si svolge con alcuni tiri di corda, inizialmente II poi I su gradoni verso sinistra, quindi sormontando il passaggio chiave, 
  4m III- strapiombante. Si prosegue quindi per facili gradoni detritici fino sotto la torretta finale, 
  che si scala con un breve tiro di 15/20m sul II grado. Discesa seguendo la via di salita con alcune doppie nei punti verticali.`

  let fotoSpallaDuranno = []
  let foto32 = {path: 'oltrepiave/SpallaDuranno_00.jpg', desc: 'Duranno e Spalla molto lontani'}
  let foto33 = {path: 'oltrepiave/SpallaDuranno_01.jpg', desc: 'Val Zemola'}
  let foto34 = {path: 'oltrepiave/SpallaDuranno_02.jpg', desc: 'Sentiero Zandonella'}
  let foto35 = {path: 'oltrepiave/SpallaDuranno_03.jpg', desc: 'Stambecco curioso'}
  fotoSpallaDuranno.push(foto32)
  fotoSpallaDuranno.push(foto33)
  fotoSpallaDuranno.push(foto34)
  fotoSpallaDuranno.push(foto35)  
  let descSpallaDuranno = `Per il sentiero attrezzato Zandonella in Val Zemola.`

  let fotoPostegae = []
  let foto36 = {path: 'oltrepiave/Postegae_01.jpg', desc: 'Cima Cadin'}
  let foto37 = {path: 'oltrepiave/Postegae_02.jpg', desc: 'Breve salto in arrampicata'}
  let foto38 = {path: 'oltrepiave/Postegae_03.jpg', desc: 'Cima Postegae'}
  let foto39 = {path: 'oltrepiave/Postegae_04.jpg', desc: 'Torri Postegae'}
  fotoPostegae.push(foto36)
  fotoPostegae.push(foto37)
  fotoPostegae.push(foto38)
  fotoPostegae.push(foto39)  
  let descPostegae = `Dal parcheggio 
	in Val Cimoliana sotto il Rif. Pordenone si prosegue per il facile sentiero 
	diretto al Passo Pramaggiore. Giunti sull'ampia insellatura erbosa si 
	prosegue a sinistra per facile cresta ed in breve si risale l'appicco 
	terminale, più ripido, della panoramica Cima Cadin. La traversata prosegue 
	per cresta, scendendo ora su ripido pendio erboso e poi in continuo 
	saliscendi per facile percorso spesso sabbioso. In questo tratto si 
	arrampicano 3 m di I solido prima di arrivare in vista dell'ultimo erto 
	tratto che risale il dorso settentrionale della Cima Postegae più elevata. 
	La discesa, a chiudere un percorso ad anello, prosegue per un buon tratto 
	ancora in cresta, aggirando una elevazione minore delle Postegae, con bella 
	visione diretta delle slanciate Torri Postegae. Si scende poi per un tratto 
	più ripido che richiede un po' di attenzione prima di risalire in breve 
	all'intaglio di forcella S'ciol de Mont. Non resta che discendere il 
	ghiaione detritico che ci ricongiunge, qualche centinaio di metri più in 
	basso, al sentiero diretto a Casera Bregolina grande e poi in falsopiano al `

  let fotoPinoSudo = []
  let foto40 = {path: 'oltrepiave/PinoSud01.jpg', desc: 'Cima di Pino sud'}
  let foto42 = {path: 'oltrepiave/PinoSud03.jpg', desc: 'Forcella sempre lontana'}
  let foto43 = {path: 'oltrepiave/PinoSud04.jpg', desc: 'Cresta'}
  let foto44 = {path: 'oltrepiave/PinoSud05.jpg', desc: 'Traccia tra i mughi'}
  let foto41 = {path: 'oltrepiave/PinoSud02.jpg', desc: 'Risalita all\'ultima forcella'}
  let foto46 = {path: 'oltrepiave/PinoSud07.jpg', desc: 'Si attacca la piramide finale'}
  fotoPinoSudo.push(foto40)
  fotoPinoSudo.push(foto42)
  fotoPinoSudo.push(foto43)
  fotoPinoSudo.push(foto44)
  fotoPinoSudo.push(foto41)
  fotoPinoSudo.push(foto46)  
  let descPinoSudo = `Le selvagge cime di Pino coronano a nord l'imponente Col Nudo. 
  Lungamente vagheggiata la cima Sud si approccia da Casera Ditta. La salita è molto lunga, 
  circa 1700m di dislivello inclusi i frequenti sali-scendi. L'orientamento non è facile e 
  rischia di far perdere tempo ed energie. La traccia è pochissimo segnata e solo i tagli di mughi, 
  nella parte finale, aiutano a destreggiarsi in ambiente selvaggio. Le uniche vere difficoltà si 
  accentrano in prossimità del cocuzzolo verde finale. Serve scendere sul versante ovest per una 
  cinquantina di metri per imboccare il canalone che scende dalla stretta forcella ai piedi della cima. 
  Risalendo il canale con attenzione si devono affrontare, verso la fine, 4m di II, 
  meglio con sicura di corda sia a salire che a scendere. La piramide finale, invasa dai mughi, 
  si risale stando ben attenti ai tagli, e in frequente arrampicata vegetale.`

  let fotoPecoli = []
  let foto45 = {path: 'oltrepiave/Pecoli_01.jpg', desc: 'Canali nella parte mediana della salita'}
  let foto50 = {path: 'oltrepiave/Pecoli_02.jpg', desc: ' Arco naturale'}
  let foto47 = {path: 'oltrepiave/Pecoli_03.jpg', desc: 'L\'attacco della cengia'}
  let foto48 = {path: 'oltrepiave/Pecoli_04.jpg', desc: 'In discesa'}
  let foto49 = {path: 'oltrepiave/Pecoli_05.jpg', desc:  'Sulla cengia'}
  let foto51 = {path: 'oltrepiave/Pecoli_06.jpg', desc: 'Urtisiel Ovest'}
  let foto52 = {path: 'oltrepiave/Pecoli_07.jpg', desc: 'Il salto di II'}
  fotoPecoli.push(foto50)
  fotoPecoli.push(foto47)
  fotoPecoli.push(foto49)
  fotoPecoli.push(foto45)
  fotoPecoli.push(foto48)
  fotoPecoli.push(foto51)
  fotoPecoli.push(foto52)  
  let descPecoli = `Interessante salita di media difficoltà, affrontabile senza l&#39;utilizzo di materiale 
  con la giusta dose di accortezza. Si abbandona il sentiero che porta al biv. Marchi Granzotto quando, in 
  prossimità di due laghetti alla sinistra, si nota ben stagliata la finestra naturale che segna l'inizio della via normale. 
  Raggiunto l'arco con dura salita per ghiaione non segnato si individua subito la cengia di attacco, che merita attenzione 
  nei primi 5/10 metri. Si entra quindi in un canale franoso e si supera il passaggio chiave con un masso strapiombante, 
  scalando la paretina di destra (II-, 4m) comunque non esposta. Il resto del percorso, un po&#39; da cercare ma con limitati 
  pericoli, oppone solo qualche ulteriore passo sul I grado.`

  let fotoMonfalconDM = []
  let foto53 = {path: 'oltrepiave/MonfalconDM_00.JPG', desc: 'Cadin'}
  let foto54 = {path: 'oltrepiave/MonfalconDM_01.JPG', desc: 'Camino Coassa'}
  let foto55 = {path: 'oltrepiave/MonfalconDM_02.JPG', desc: 'Discesa'}
  let foto56 = {path: 'oltrepiave/MonfalconDM_03.JPG', desc: 'Cima'}
  fotoMonfalconDM.push(foto53)
  fotoMonfalconDM.push(foto54)
  fotoMonfalconDM.push(foto55)
  fotoMonfalconDM.push(foto56)  
  let descMonfalconDM = `Salita remunerativa ma che 
  richiede impegno fisico e determinazione. Dal rif. Pordenone si prende 
  il sentiero che conduce alla forc. del Leone, prima nel bosco in 
  falsopiano, poi più faticosamente su ghiaione. Quando il 
  sentiero migliora e si accosta al torrentino, prima del bivio per forc. 
  Cimoliana, conviene risalire direttamente il conoide detritico a 
  sinistra del sentiero, costeggiando i mughi che lo delimitano a destra. 
  Guadagnando velocemente quota si aggira un grande masso bianco verso 
  destra e si sbuca su erba nell'isolato cadin di Cimoliana. Si risale la 
  pala erbosa che delimita a sinistra il cadin (sasso con 2 frecce rosse) 
  e si va ad infilare il canale morenico all'estrema sinistra del cadin, 
  individuando già la cima, qualche centinaio di metri sopra una parete 
  nerastra. Si segue il canale fino al suo termine per attaccare a destra 
  la normale. Si salgono le prime balze per poi inoltrarsi in un canale 
  che va stringendosi (I discontinuo). I bolli rossi sono molto radi e gli 
  ometti spesso franati, data la diffusa friabilità. All'uscita di questo 
  canale le relazioni porterebbero ad affrontare un risalto leggermente 
  strapiombante sulla sinistra (II), mentre è possibile aggirare 
  tranquillamente a destra e rimontare la spalla con difficoltà 
  elementari. Si esce su di una cengetta da seguire per una decina di 
  metri in direzione del prossimo canale che già si inquadra davanti. 
  Imboccatolo si sale facilmente, ma su terreno franoso, per qualche 
  decina di metri, fin dove
  le pareti si stringono a camino. Circa 8 metri di II, da affrontare 
  evitando di incassarsi troppo nel fondo marcio. L'uscita è leggermente 
  strapiombante (II+ per 2m) con chiodo munito di moschettone Cassin per 
  la discesa. Attenzione nell'uscita alle malsicure ghiaie inclinate. Si 
  guadagna quindi un'evidente cengia che corre lungamente sul versante 
  est, inizialmente da non sottovalutare per esposizione, poi molto 
  comoda. Questa parte alta della normale è più facile con solo alcuni 
  tratti di I. Un po' più complicato invece l'orientamento. La salita si 
  conclude uscendo in versante ovest in vista del rif. Padova. Qui si 
  supera un 5m di cengia alquanto esposta per poi infilare il canale 
  finale che si mantiene su difficoltà di I+, II-, però su roccia 
  malsicura ed in discreta esposizione. Scarse le possibilità di 
  assicurazione anche per la discesa. Dopo una decina di metri si esce 
  nell'esile vetta. Nella discesa si può attrezzare una doppia nel camino 
  intermedio sfruttando il moschettone in loco. `

  let fotoPussa = []
  let foto57 = {path: 'oltrepiave/pussa01.jpg', desc: 'Il Torrione di forcella Pussa'}
  let foto58 = {path: 'oltrepiave/pussa02.jpg', desc: 'Su placche inclinate'}
  let foto59 = {path: 'oltrepiave/pussa03.jpg', desc: 'Passaggio in cresta'}
  let foto60 = {path: 'oltrepiave/pussa04.jpg', desc: 'Cima di San Francesco'}
  let foto61 = {path: 'oltrepiave/pussa05.jpg', desc: 'Verso Cima di Bortolusc'}
  fotoPussa.push(foto57)
  fotoPussa.push(foto58)
  fotoPussa.push(foto59)
  fotoPussa.push(foto60)
  fotoPussa.push(foto61)  
  let descPussa = `Salita in ambiente isolato, con difficoltà ed esposizione limitate, affrontabile in assetto escursionistico.`

  let fotoPostegaeSud = []
  let foto62 = {path: 'oltrepiave/postegaeSud03.jpg', desc: 'Risalita tra sfaciumi a Forc. Sciol de Mont'}
  let foto63 = {path: 'oltrepiave/postegaeSud00.jpg', desc: 'Si punta il canalone di attacco'}
  let foto64 = {path: 'oltrepiave/postegaeSud01.jpg', desc: 'Risalita del canalone molto franoso'}
  let foto65 = {path: 'oltrepiave/postegaeSud02.jpg', desc: 'Passaggio poco sotto la vetta'}
  fotoPostegaeSud.push(foto62)
  fotoPostegaeSud.push(foto63)
  fotoPostegaeSud.push(foto64)
  fotoPostegaeSud.push(foto65)  
  let descPostegaeSud = `La via più breve risale lo Sciol de Mont. Si piega poi verso est in direzione delle Cime Postegae. Poco sotto la spalla si piega a sinistra (est)
  fino a giungere in vista del canalone detritico che separa le due sommità della Torre Postegae sud. La principale è quella di destra che si raggiunge con alcuni metri sul I+ nel finale.`

  let fotoBorsat = []
  let foto66 = {path: 'oltrepiave/Borsat-03.jpg', desc: 'Ciol Tramontin'}
  let foto67 = {path: 'oltrepiave/Borsat-06.jpg', desc: 'Uscita dal Ciol'}
  let foto68 = {path: 'oltrepiave/Borsat-07.jpg', desc: 'Placca'}
  let foto69 = {path: 'oltrepiave/Borsat-08.jpg', desc: 'Placca'}
  let foto70 = {path: 'oltrepiave/Borsat-09.jpg', desc: 'Placca'}
  let foto71 = {path: 'oltrepiave/Borsat-10.jpg', desc: 'Canalino finale'}
  let foto72 = {path: 'oltrepiave/Borsat-11.jpg', desc: 'Spia dei Camosci'}
  let foto73 = {path: 'oltrepiave/Borsat-12.jpg', desc: 'Cima Preti'}
  let foto74 = {path: 'oltrepiave/Borsat-14.jpg', desc: 'Paretina versante ovest'}
  fotoBorsat.push(foto66)
  fotoBorsat.push(foto67)
  fotoBorsat.push(foto68)
  fotoBorsat.push(foto69)
  fotoBorsat.push(foto70)
  fotoBorsat.push(foto71)
  fotoBorsat.push(foto72)
  fotoBorsat.push(foto73)
  fotoBorsat.push(foto74)  
  let descBorsat = `  La piramide del Borsat 
  incombe fin dalla partenza.
  Invece di attaccare il ciol Tramontin alla sua base, si può seguire una 
  traccia che porta a risalire una ripida faggeta, che a un certo punto si 
  trasforma in muro di baranci simil-verticali. Il ciol Tramontin risulta 
  decisamente abbordabile, pochi passi sul I grado e con una pendenza che 
  non affatica troppo. Giunti al secondo serbatoio occorre prendere la 
  diramazione di destra. Qui la pendenza aumenta progressivamente, anche 
  su ghiaione. La vista della base della Spia dei Camosci preannuncia la 
  ormai imminente forcella che si affaccia sulla placca inclinata, punto 
  chiave della salita. L'assicurazione dalla 
  forcella risulta praticamente inutile in caso di pendolo. Soprattutto 
  non si vede neppure un modo affidabile di assicurarsi al ritorno. Si 
  decide di seguire pertanto un'esile traccia che scende dalla forcella 
  sul versante ovest (val Cimoliana) contornando il basamento della Spia 
  dei Camosci. Percorsi un 200m in leggera salita, la parete sembra 
  abbordabile e si intravede pure qualche ometto malridotto. Si può 
  attaccare la paretina di I grado, roccia buona, però con 
  esposizione che cresce guadagnando metri dalla base. Affrontata qualche 
  cengetta un po' sporca di detrito dopo i primi 50 m la parete si 
  appoggia con alcune balze/placche da non sottovalutare ancora per il 
  detrito. Il resto della variante risulta più elementare, con rampe 
  erbose che permettono di evitare alcune placche anche umide. In vista 
  della cuspide terminale si punta ad un canale marcissimo con fondo 
  terroso, circa 40m da sudare in salita, molto meglio la discesa. Si esce 
  quindi finalmente in cresta, congiungendosi con la normale classica, 
  quando però si è già a 20m dall'ometto di vetta. Salita nel complesso di 
  grande soddisfazione escursionistica, con pochi problemi di orientamento 
  ma decisamente perseverante.`

  let fotoBrica = []
  let foto75 = {path: 'oltrepiave/brica01.jpg', desc: 'Alta val Brica'}
  let foto76 = {path: 'oltrepiave/brica02.jpg', desc: ' Cima Brica'}
  fotoBrica.push(foto75)
  fotoBrica.push(foto76)  
  let descBrica = `Dal parcheggio sotto il rif. Pordenone (quota 1160) si prosegue in
  piano per quasi 1h lungo la val Meluzzo (dir. Nord). Quindi si sale a destra
  (indicazioni Cason di Brica) che si raggiunge dopo 500m dislivello. Da qui
  il percorso si fa parecchio selvaggio. Occorre salire per un centinaio di
  metri dietro il cason tra mughi fitti praticamente senza traccia. Pervenuti
  in un ampia e suggestiva conca alla fine di val Brica ci si tiene sulla
  destra e si inizia a risalire ancora senza traccia su terreno ripido, fino
  ad imboccare il canale che porta a f.lla Brica. Percorso ripido, faticoso e
  delicato soprattutto per le pericolose scariche di sassi che si possono
  creare. Dalla forcella si vede la cima sulla destra (ovest). Si punta
  l'insellatura erbosa alla base del castello finale. Da qui si prende una
  cengia in direzione sud (50m qualche ometto fin nei pressi di un banco di
  mughi, da dove si deve salire un gradone di 3m circa, II- solido. Poi con
  zig-zag abbastanza libero si perviene in cima, con qualche passo di I e
  terreno comunque friabile che richiede attenzione soprattutto in discesa.
  Bella vista sui Monfalconi e Pramaggiore.`

  let fotoCentenere = []
  let foto77 = {path: 'oltrepiave/centenere_01.jpg', desc: 'Duranno dalla forcella'}
  let foto78 = {path: 'oltrepiave/centenere_01a.jpg', desc: 'Duranno da Sud'}
  let foto79 = {path: 'oltrepiave/centenere_02.jpg', desc: 'Piccolo di stambecco'}
  let foto80 = {path: 'oltrepiave/centenere_03.jpg', desc: 'Gruppo dei cima Preti'}
  fotoCentenere.push(foto77)
  fotoCentenere.push(foto78)
  fotoCentenere.push(foto79)
  fotoCentenere.push(foto80)
  let descCentenere = `Dal Rif. Maniago si sale alla forcella Duranno (2220), superando qualche breve passaggio di I nel tratto conclusivo. 
  Quindi per portarsi sulla prima quota (la piu' elevata) delle cime Centenere si risale la cresta erbosa a destra che in pochi minuti porta alla vetta (palo con ometto). 
  Si  può a questo punto anche raggiungere l'altra quota leggermente inferiore 
  più a sud. Occorre scendere con cautela fino al sentiero che porta a casera Lodina (2m I+ forse evitabili) per poi rimontare 
  l'evidente cresta stavolta per lo piu' rocciosa senza 
  Difficoltà alcuna (15 min). La zona è popolata da molti stambecchi (per lo 
  più femmine con cuccioli), che si lasciano avvicinare senza timore.`

  let fotoCiazze = []
  let foto81 = {path: 'oltrepiave/ciazze.jpg', desc: 'Verso cima Preti'}
  let foto82 = {path: 'oltrepiave/ciazze2.jpg', desc: 'La cresta finale'}
  fotoCiazze.push(foto81)
  fotoCiazze.push(foto82)  
  let descCiazze = `Dal ponte Scandoler in Val montanaia (m. 950) si risale il 
  vallone dello s'ciol de Tarsia fino a quota 1330, poco dopo evidenti 
  cascate sulla sinistra. Si risalta su una bancata di mughi e poi per 
  canalone di sfasciumi. Si incontra quindi una prima zona rocciosa con 
  colatoi e marmitte (attraversamento delicato con piedi in aderenza, I+ 
  8m in orizzontale). Si guadagna poi qualche centinaio di metri fino alla 
  fine degli scivoli rocciosi, tenedosi a destra. Per accedere al cadin 
  alto si attraversa a destra il piccolo ruscello e ci si alza per mughi 
  fino in vista dell'affilata cima dei Cantoni. Da qui inizia un tratto 
  piu' facile, misto ghiaioni, puntando una bancata di mughi che fa da 
  cappello ad un costone roccioso. Da li (1930m) si piega a sinistra 
  infilando un canalone articolato in roccia (I frequante con qualche 
  passaggio I+), puntando ormai l'evidente cresta. Giunti in vista della 
  val Compol si piega a sinistra seguendo la cresta fino all'anticima 
  (2240) ove iniziano le difficolta su massi seghettati, verso la Cima 
  delle Ciazze alte (sud-est). Noi ci siamo fermati qui, vista la 
  esposizione elevatissima del tratto finale, che consigliava sicurezza di 
  corda...ma ormai si faceva pure tardi. Nel complesso la salita è molto 
  avventurosa e richiede parecchia attenzione nel tenere la traccia, 
  peraltro quasi assente. Gli ometti talora potrebbero portare fuori via. 
  Anche l'impegno fisico è notevole, con circa 1000m di dislivello 
  praticamente senza sentiero. Le fatiche sono ripagate da 
  un'ambientazione grandiosa, sin da quando si accede al cadin delle 
  Ciazze Alte.`

  let fotoCiolSass = []
  let foto83 = {path: 'oltrepiave/Cima_Ciol_Sass01.jpg', desc: 'Salti nel Ciol'}
  let foto84 = {path: 'oltrepiave/Cima_Ciol_Sass02.jpg', desc: 'Risalendo il Ciol'}
  let foto85 = {path: 'oltrepiave/Cima_Ciol_Sass03.jpg', desc: 'Barriere da aggirare'}
  let foto86 = {path: 'oltrepiave/Cima_Ciol_Sass04.jpg', desc: 'Landro'}
  let foto87 = {path: 'oltrepiave/Cima_Ciol_Sass05.jpg', desc: 'In vista della stretta forcella di Val Piovin'}
  let foto88 = {path: 'oltrepiave/Cima_Ciol_Sass06.jpg', desc: 'Ultimi pendii'}
  let foto89 = {path: 'oltrepiave/Cima_Ciol_Sass07.jpg', desc: 'Forcella'}
  let foto90 = {path: 'oltrepiave/Cima_Ciol_Sass08.jpg', desc: 'Si risale la cresta'}
  let foto91 = {path: 'oltrepiave/Cima_Ciol_Sass09.jpg', desc: 'Cima'}
  let foto92 = {path: 'oltrepiave/Cima_Ciol_Sass10.jpg', desc: 'Discesa in Val Piovin'}
  fotoCiolSass.push(foto83)
  fotoCiolSass.push(foto84)
  fotoCiolSass.push(foto85)
  fotoCiolSass.push(foto86)
  fotoCiolSass.push(foto87)
  fotoCiolSass.push(foto88)
  fotoCiolSass.push(foto89)
  fotoCiolSass.push(foto90)
  fotoCiolSass.push(foto91)
  fotoCiolSass.push(foto92)  
  let descCiolSass = `Partiti da C.ra Settefontane verso c.ra Ciol de Sass. Salita la cima e ridiscesi per la Val Piovin. 
  Ambiente preservato e ricerca del percorso che richiede la giusta attenzione.`

  let fotoLaste = []
  let foto93 = {path: 'oltrepiave/cimaLaste01.jpg', desc: 'Verso cima Preti'}
  let foto94 = {path: 'oltrepiave/cimaLaste02.jpg', desc: 'La cresta finale'}
  fotoLaste.push(foto93)
  fotoLaste.push(foto94)
  let descLaste = `La via e' breve, 
  facilmente individuabile con gli ometti, con alcuni passaggi di I grado 
  ed alcune rampe/cenge piuttosto detritiche che richiedono molta 
  attenzione in discesa.`

  let fotoBocciardata = []
  let foto95 = {path: 'oltrepiave/bocciardata_VC_01.JPG', desc: 'Testata Val del Drap'}
  let foto96 = {path: 'oltrepiave/bocciardata_VC_02.JPG', desc: 'Placche'}
  let foto97 = {path: 'oltrepiave/bocciardata_VC_03.JPG', desc: 'Verso est'}
  let foto98 = {path: 'oltrepiave/bocciardata_VC_04.JPG', desc: 'La Bocciarda'}
  fotoBocciardata.push(foto95)
  fotoBocciardata.push(foto96)
  fotoBocciardata.push(foto97)
  fotoBocciardata.push(foto98)
  let descBocciardata = `Uscita lavorativa in 
  ottima compagnia. Divertente la paretina che porta a f.lla dei 
  Cacciatori, buon I/I+ continuo, più ripido nella zona basale sopra il 
  nevaio.`

  let fotoCimaSpe = []
  let foto99  = {path: 'oltrepiave/cimaSpe_01.JPG', desc: 'Sent. Marini, cengia'}
  let foto100 = {path: 'oltrepiave/cimaSpe_02.JPG', desc: 'Sent. Marini, esposizione'}
  let foto101 = {path: 'oltrepiave/cimaSpe_03.JPG', desc: 'Sent. Marini, frana'}
  let foto102 = {path: 'oltrepiave/cimaSpe_04.JPG', desc: 'Cima Spe'}
  let foto103 = {path: 'oltrepiave/cimaSpe_05.JPG', desc: 'Canalone finale'}
  let foto104 = {path: 'oltrepiave/cimaSpe_06.JPG', desc: 'Spunta il Cadin degli Elmi'}
  fotoCimaSpe.push(foto99)
  fotoCimaSpe.push(foto100)
  fotoCimaSpe.push(foto101)
  fotoCimaSpe.push(foto102)
  fotoCimaSpe.push(foto103)
  fotoCimaSpe.push(foto104)
  let descCimaSpe = `Sentiero A. 
	Marini dal parcheggio del Rif. Pordenone. Il sentiero presenta alcuni brevi 
	passaggi in cengia un po' esposti, ma il tratto più scabroso è in 
	corrispondenza dei canali franati di sabbia cementata che scendono dai 
	Cadini, nella parte finale del percorso già prossimi al biv. Gervasutti. Da 
	forcella Spe la salita alla cima non presenta ne problemi di orientamento, 
	sempre in cresta fino al testone finale, ne difficoltà di rilievo. 
	Arrivati in prossimità della cupola terminale ci si sposta a destra sul 
	versante nord per una facile cengetta fino ad imboccare un canalone di massi 
	rotti che porta in cima senza percorso obbligato (passi I pure evitabili).`

  let fotoCimaStalla = []
  let foto105 = {path: 'oltrepiave/cimaStalla-01.JPG', desc: 'Ambiente, dopo la forcella'}
  let foto106 = {path: 'oltrepiave/cimaStalla-02.JPG', desc: 'Mughi'}
  fotoCimaStalla.push(foto105)
  fotoCimaStalla.push(foto106)
  let descCimaStalla = `Dal rif. Pordenone si prende 
  il sentiero che conduce alla forc. del Leone e lo si abbandona quando si 
  apre a destra il canale di forcella Stalla. La risalita del canalone è 
  alquanto selvaggia e pericolosa per le scariche di sassi, più evitabili 
  costeggiando il versante sinistro. Giunti alla forcella occorre 
  spostarsi sulla destra per guadagnare il successivo intaglio, circa 40m 
  molto ripidi, da affrontare tenendosi alla parete. La discesa sul 
  versante est diventa subito esposta dopo i primi 10m. Possibilità di far 
  sicura sui mughi fino a raggiungere il colletto con ometto ben visibile. 
  Da li si fa un tiro tra i mughi spostandosi a sinistra in direzione 
  della parete nord-est, per poi uscire su un ulteriore ballatoio sempre 
  tra la vegetazione. Segue un ulteriore tiro più ripido, circa 50m con 
  passaggi di I... ma da qui non è certa la bontà della descrizione. Si 
  finisce sotto un gradino di circa 3m (II+ almeno) su una bancata che fa 
  da cengia erbosa, aggirante ancora verso la direzione della forcella 
  (ovest). Qui abbiamo individuato un nut alcuni metri dalla base, 
  provando così la risalita in cordata. Superati alcuni metri sul II- le 
  difficoltà poi però aumentavano considerevolmente dopo un secondo chiodo 
  (III+, IV-), pertanto, nella quasi certezza di aver sbagliato via siamo 
  discesi per la via appena percorsa in salita.`

  let fotoForni = []
  let foto107 = {path: 'oltrepiave/Forni01.jpg', desc: 'Spigolo vivo del Sigaro'}
  let foto108 = {path: 'oltrepiave/Forni02.jpg', desc: 'Sulla paretina finale'}
  let foto109 = {path: 'oltrepiave/Forni03.jpg', desc: 'Coston di Giaf'}
  let foto110 = {path: 'oltrepiave/Forni04.jpg', desc: 'Monfalcon di Forni'}
  fotoForni.push(foto110)
  fotoForni.push(foto107)
  fotoForni.push(foto108)
  fotoForni.push(foto109)
  let descForni = `Dal rif. Pordenone si perviene a Forcella Cimoliana seguendo
  il sentiero per il biv. Marchi-Granzotto. Da qui a sinistra verso il
  Monfalcon di Cimoliana si sale un 50 m, per poi ridiscendere e puntare la
  forc. del Leone. Quindi si scende verso nord-ovest in versante d'Arade,
  seguendo le tracce che costeggiano la parete del Monfalcon di Forni. Si
  imbocca l'evidente canale verso destra e da qui, saliti per un 70 m (1
  passaggio II-) due possibilita': 
   a) una trentina di metri prima della fine del canale si sale
  a destra per un ulteriore canale detritico fino ad una paretina di 5m (bolli
  rossi). Si supera il salto di II pieno e si prosegue verso la parete
  appoggiata finale.
   b) si risale tutto il canale e si affronta la parete
  appoggiata a destra (segnalazione rossa) che si mantiene sul I+ costante
  (attenzione ai sassi), per poi sbucare allo stesso punto della
  variante precedente.
  Quindi si sale liberamente verso la torretta terminale
  (sentiero e I). Qui attenzione che ad una quindicina di metri dalla vetta si
  presentano difficolta' superiori a quelle descritte in letteratura. I segni
  rossi portano verso sinistra ad infilare un canalino, 7m di I friablie fin
  dove si chiude e si deve arrampicare una fessura per 3m di III-. In
  alternativa si puo' scalare direttamente la crestina con un 4/5m iniziali di
  II abbondante e poi comunque sbucare in vetta. Nel ritorno, prima della
  forc. del Leone abbiamo tagliato in quota per i ghiaioni in direzione di
  forcella Montanaia, per poi risalire la forcella Ferrucci tra Punta Koegel e Cima
  d'Arade (solo qualche traccia, molto faticoso, 150m di salita con qualche
  metro di I+ nel finale) per infine ridiscendere in Val Cimoliana.`

  let fotoCimaGea = []
  let foto111 = {path: 'oltrepiave/gea01.jpg', desc: 'La parte finale (Desc. 1)'}
  let foto112 = {path: 'oltrepiave/gea02.jpg', desc: 'Cima Gea e Antelao'}
  let foto113 = {path: 'oltrepiave/gea03.jpg', desc: 'Cima Sella'}
  let foto114 = {path: 'oltrepiave/gea04.jpg', desc: 'Il Cadin di Gea'}
  fotoCimaGea.push(foto112)
  fotoCimaGea.push(foto111)
  fotoCimaGea.push(foto113)
  fotoCimaGea.push(foto114)
  let descCimaGea = `Dalla Val montanaia si sale alla casera Laghet de Sora, e
  poi alla forcella Val de Frassin. Quindi si prende una traccia in quota
  verso sinistra (ovest). Arrivati gia' in vista della cima Gea si deve
  scendere per un 80m nel cadin sotto la porta di Gea, per poi risalire il
  ripido pendio erboso che porta alla base della roccia terminale. Da qui
  parte l'arrampicata su misto roccia/erba abbastanza malsicura, con due
  possibilita':
   1- praticamente dritti verso la cresta con circa 20m sul II
  grado, eventualmente proteggibile dall'alto su dei mughi
   2- tagliando obliquamente verso sinistra con prevalenza di
  erba e scarse possibilita' di appigli (I+ piuttosto problematico in
  esposizione). Io mi sono fermato alla base, gli altri in vetta.`

  let fotoCridola = []
  let foto115 = {path: 'oltrepiave/uovoCridola.jpg', desc: 'Uovo del Cridola'}
  let foto116 = {path: 'oltrepiave/cridola.jpg', desc: 'Discesa normale al Cridola'}
  fotoCridola.push(foto115)
  fotoCridola.push(foto116)
  let descCridola = `Neve sulla 
  cengia iniziale rivolta ai Gendarmi della Val Cridola. Neve anche in 
  corrispondenza del muretto di II grado nei pressi dell'uovo. Nel 
  complesso i 300md della via si mantengono attorno al I grado con brevi 
  traversate elementari e tre tratti di 4-6 m attorno al II grado, dei 
  quali l'ultimo anche superiore ed abbastanza esposto.`

  let fotoFerrara = []
  let foto117 = {path: 'oltrepiave/ferrara01.jpg', desc: 'Antecima sud e cima principale del Monte Ferrara'}
  let foto118 = {path: 'oltrepiave/ferrara02.jpg', desc: 'Il Turlon'}
  fotoFerrara.push(foto117)
  fotoFerrara.push(foto118)
  let descFerrara = `Dalla forcella che precede f.lla Savalons si prende a sinistra, 
  indicazioni in rosso, risalendo facilmente prima far mughi e poi su terreno a zig zag per raggiungerel'anti-cima sud. 
  Ancora pochi minuti per la cima principale. Per abbreviare il ritorno si può proseguire sccendendo verso la cresta nord 
  in direzione della fisibile f.lla S'ciol de Mont. Dopo alcune decine di metri si abbandona la linea di cresta e 
  ci si districa tra mughi anche fitti indovinando i passaggi pi� convenienti. Talora si incrocia qualche confortante ometto, 
  benchè la forcella di destinazione resti quasi sempre visibile il che riduce i patemi di sbagliare completamente percorso. 
  Guadagnata la forcella si torna a pian di Meluzzo discendendo il dissestato vallone, parzialmente invaso da nevaio, 
  senza grandi opportunità di accelerare i movimenti.`

  let fotoPorgeit = []
  let foto119 = {path: 'oltrepiave/porgeit01.jpg', desc: 'Duranno e Preti'}
  let foto120 = {path: 'oltrepiave/porgeit02.jpg', desc: 'Il Borgà'}
  fotoPorgeit.push(foto119)
  fotoPorgeit.push(foto120)
  let descPorgeit = `Da casera Galvana si va alla forcella (5 min) e si prende a destra risalendo
  il cono terminale per ripida loppa. Al ritorno, 50m sotto la forcella ho
  preso il sentiero che in costa, con ripetuti sali-scendi anche consistenti, porta al rif.
  Maniago (1720 m).`

  let fotoZerten = []
  let foto121 = {path: 'oltrepiave/Zerten01.jpg', desc: 'Erto'}
  let foto122 = {path: 'oltrepiave/Zerten02.jpg', desc: 'Ultimi metri'}
  let foto123 = {path: 'oltrepiave/Zerten03.jpg', desc: 'Col Nudo da nord'}
  let foto124 = {path: 'oltrepiave/Zerten04.jpg', desc: 'Zerten'}
  fotoZerten.push(foto121)
  fotoZerten.push(foto122)
  fotoZerten.push(foto123)
  fotoZerten.push(foto124)
  let descZerten = `La parte finale della salita nel van esposto a nord si 
  è svolta in parte su neve anche fonda. La leggera foschia ha pregiudicato in
  parte la visione delle imponenti bastionate nord del Col Nudo.`

  let fotoZita = []
  let foto125 = {path: 'oltrepiave/Zita01.jpg', desc: 'Il Duranno'}
  let foto126 = {path: 'oltrepiave/Zita02.jpg', desc: 'Parete della Palazza'}
  fotoZita.push(foto125)
  fotoZita.push(foto126)
  let descZita = `Si segue la strada/sentiero che porta a casera Bedin, 
  fino ad evidenti segnalazioni verso forcella Zita (sinistra) che si raggiunge dopo 
  faticoso pendio erboso - m 1960. Dalla forcella si prosegue a destra per lo 
  più in cresta, con la traccia che si incanala tra i mughi. La cima è solitaria ed isolata, 
  offrendo un bel colpo d'occhio verso le dolomiti di sinistra Piave da un lato, Bosconero, Sfornioi e Cibiana dall'altro.`

  let fotoUrtisielEst = []
  let foto127 = {path: 'oltrepiave/UrtisielEst-01.JPG', desc: 'La cima'}
  let foto128 = {path: 'oltrepiave/UrtisielEst-02.JPG', desc: 'Rampa di salita'}
  fotoUrtisielEst.push(foto127)
  fotoUrtisielEst.push(foto128)
  let descUrtisielEst = `Dal parcheggio 
	del rif. Pordenone in Val Montanaia si segue in piano verso Casera Valmenon. 
	Quindi, sempre per sentiero CAI (361) si giunge in prossimità di f.lla 
	Urtisiel. Abbandonare il sentiero circa 50m sotto la forcella e salire a 
	destra per una banca di zolle contornata da mughi. Si punta verso destra una 
	insellatura che, valicata, conduce brevemente alla rampa finale senza 
	difficoltà alcuna.`

  let fotoUrtisielOvest = []
  let foto129 = {path: 'oltrepiave/UrtisielOvest01.jpg', desc: 'Su ripido detrito'}
  let foto130 = {path: 'oltrepiave/UrtisielOvest02.jpg', desc: 'Campanile Gambet'}
  fotoUrtisielOvest.push(foto129)
  fotoUrtisielOvest.push(foto130)
  let descUrtisielOvest = `La salita dal 
	versante sud, per un lungo e diramato canalone detritico non ha portato alla 
	vetta. Si abbandona il sentiero diretto a Casera Val Binon (o Val Menon) 
	appena usciti dal bosco, in corrispondenza di un ripido pendio misto di 
	mughi, oltre il quale si identifica l'ampio svaso detritico che sale 
	all'articolato castello della cima Urtisiel Ovest. Tenendo sempre la 
	sinistra alle successive diramazioni, su ghiaione ripido ma non infido, si 
	dovrebbe potersi collegare alla via normale che sale da Forcella Pecoli.`

  let fotoTurlon = []
  let foto131 = {path: 'oltrepiave/TurlonTent01.JPG', desc: 'Placca inclinata'}
  let foto132 = {path: 'oltrepiave/TurlonTent02.JPG', desc: 'Alti sulla Val Settimana'}
  let foto133 = {path: 'oltrepiave/TurlonTent03.JPG', desc: 'Profili in controluce'}
  let foto134 = {path: 'oltrepiave/TurlonTent04.JPG', desc: 'La cresta del Turlon'}
  fotoTurlon.push(foto131)
  fotoTurlon.push(foto132)
  fotoTurlon.push(foto133)
  fotoTurlon.push(foto134)
  let descTurlon = `Dalla Stai de 
	Nuci in Val Settimana si prende il ripidissimo sentiero che sale dietro la 
	stalla e per diverse centinaia di metri di dislivello si arranca su bosco 
	quasi verticale. Superato un passaggio di I, alcuni metri su placca rocciosa 
	in discesa si riprende la salita ora su bosco più rado per poi guadagnare un 
	primo filo di cresta con vista sulla sella del Turlon. Traversato in quota 
	con leggera pendenza tra i mughi si accede alla sella da ripidi prati. Ora 
	ci si sposta sulla cresta prativa in saliscendi e conviene abbandonarla, 
	scendendo sul versante ovest prima di imbattersi in due torrioni rocciosi 
	meno agibili. (to be continued).`

  let fotoToc = []
  let foto135 = {path: 'oltrepiave/Toc_01.jpg', desc: 'Detriti'}
  let foto136 = {path: 'oltrepiave/Toc_02.jpg', desc: 'Placche'}
  let foto137 = {path: 'oltrepiave/Toc_03.jpg', desc: 'Crolli'}
  let foto138 = {path: 'oltrepiave/Toc_04.jpg', desc: 'Cima Mora dal Toc'}
  fotoToc.push(foto135)
  fotoToc.push(foto136)
  fotoToc.push(foto137)
  fotoToc.push(foto138)
  let descToc = `Lasciata l'auto poco dopo l'imbocco della 
  strada che porta in val Mesaz (dopo la diga del Vajont) abbiamo risalito 
  il fianco destro detritico delle ultime placche della frana verso ovest. 
  Alla fine dei blocchi franati siamo saliti per un 20m su placche per poi 
  entrare nel bosco evitando inutili pericoli. Ripreso poi il sentiero 
  principale in vetta, aggirando anche un po' di neve nel cadin tra cima 
  Mora e Toc. Numerosi crolli recenti di alberi anche lungo il sentiero e 
  sciami di zanzare tigre nel bosco, consigliatissimo del repellente.`

  let fotoSFrancesco = []
  let foto139 = {path: 'oltrepiave/SFrancesco00.jpg', desc: 'Cima di San Francesco col recente distacco'}
  let foto140 = {path: 'oltrepiave/SFrancesco01.jpg', desc: 'Il remoto Ciadin di Gasparin'}
  let foto141 = {path: 'oltrepiave/SFrancesco02.jpg', desc: 'Inizio delle  Inizio delle placconate'}
  let foto142 = {path: 'oltrepiave/SFrancesco03.jpg', desc: 'Verso Cima Pussa'}
  fotoSFrancesco.push(foto139)
  fotoSFrancesco.push(foto140)
  fotoSFrancesco.push(foto141)
  fotoSFrancesco.push(foto142)
  let descSFrancesco = `Cima dirimpettaia alle Caserine, remota e per nulla frequentata.
  Salendo dal Ciadin di Gasparin risulta obbligatorio scalare una paretina detritica per raggingere le placconate del distacco. 
  Ci siamo fermati a metà della suddetta per mancanza di attrezzatura da assicurazione.`

  let fotoPalazzaZemola = []
  let foto143 = {path: 'oltrepiave/PalazzaZemola01.jpg', desc: 'Borgà'}
  let foto144 = {path: 'oltrepiave/PalazzaZemola02.jpg', desc: 'Duranno e Cima Preti'}
  fotoPalazzaZemola.push(foto143)
  fotoPalazzaZemola.push(foto144)
  let descPalazzaZemola = `Dopo la galleria verso Casera Bedin si prende a destra
  ripidamente su per la pala erbosa puntando i massi bianchi dell'anticima.
  Giunti li si scende per un 20 metri e poi si aggira a sinstra (ovest) la
  piramide finale, passando per una brevissima cengetta.`

  let fotoFrati = []
  let foto145 = {path: 'oltrepiave/Frati01.jpg', desc: 'In cima Frati, col Duranno alle spalle e un po\' di preoccupazione per la discesa'}
  fotoFrati.push(foto145)
  let descFrati = `Splendida via da 
  trovare, si risolve con un canale inizialmente II, poi I+ molto 
  friabile, infine una costa rocciosa alquanto instabile porta in vetta. 
  Consigliabile corda da almeno 35/40 m.`

  let fotoSent50esimo = []
  let foto146 = {path: 'oltrepiave/sent50esimo01.jpg', desc: 'Discesa chiave nel sentiero del 50°'}
  let foto147 = {path: 'oltrepiave/sent50esimo02.jpg', desc: 'Ago del Cridola'}
  let foto148 = {path: 'oltrepiave/sent50esimo03.jpg', desc: 'Cima principale del Cridola'}
  let foto149 = {path: 'oltrepiave/sent50esimo04.jpg', desc: 'In discesa sotto cima Herberg'}
  fotoSent50esimo.push(foto146)
  fotoSent50esimo.push(foto147)
  fotoSent50esimo.push(foto148)
  fotoSent50esimo.push(foto149)
  let descSent50esimo = `Dal Rif. Padova si sale fin quasi alla Tacca del Cridola per ghiaione ripido. Poco prima della forcella si 
  volge a sinistra per imboccare la cengia che costituisce Il Sentiero del Cinquantesimo. Il tratto chiave si incontra presto, 
  dovendo scalare in discesa un 8m sul II-. Abbiamo pi tentato di salire all'Ago del Cridola, con rarissimi ometti di traccia,
  passaggi di I e I+, fino alla base della torretta finale, dove l'esposizione estrema e la roccia in pessimo stato ha consigliato
  di lasciar perdere. Rientrati poi al Padova per ripidi ghiaioni sotto Cima Herbert e Crodon di Scodavacca.` 

  let fotoMontanel = []
  let foto150 = {path: 'oltrepiave/Montanel01.jpg', desc: 'Sui ripidi prati sottostanti il Montanel'}
  let foto151 = {path: 'oltrepiave/Montanel02.jpg', desc: 'Cengia'}
  let foto152 = {path: 'oltrepiave/Montanel03.jpg', desc: 'Montagne del Cadore'}
  let foto153 = {path: 'oltrepiave/Montanel04.jpg', desc: 'Verso il Cridola'}
  fotoMontanel.push(foto150)
  fotoMontanel.push(foto151)
  fotoMontanel.push(foto152)
  fotoMontanel.push(foto153)
  let descMontanel = `Dal Rif. Cercenà si prende per il Biv. Montanel, e superato questo si prosegue a nord nell'anfiteatro tra Montanel e Cima Herberg.
  Risalito lo spallone puntando a sinistra si raggiungono i ripidi prati che danno sulla val del Piave, e al termine degli stessi si volge a destra per cengia
  facile fino alla frastagliata serie di torrette finali, da scalare con qualche passo di I e I+.` 

  let fotoVedorcia = []
  let foto154 = {path: 'oltrepiave/Vedorcia01.jpg', desc: 'Salto di II al termine del canalone di accesso a f.lla Vedorcia'}
  let foto155 = {path: 'oltrepiave/Vedorcia02.jpg', desc: 'Sulla paretina di II+ alla fine della cengia'}
  let foto156 = {path: 'oltrepiave/Vedorcia03.jpg', desc: 'La cengia col masso da superare in aderenza'}
  let foto157 = {path: 'oltrepiave/Vedorcia04.jpg', desc: 'Il camino di III'}
  let foto158 = {path: 'oltrepiave/Vedorcia05.jpg', desc: 'Cridola in distanza'}
  let foto159 = {path: 'oltrepiave/Vedorcia06.jpg', desc: 'Discesa in doppia'}
  let foto160 = {path: 'oltrepiave/Vedorcia07.jpg', desc: 'Il Cadin degli Elmi'}
  let foto161 = {path: 'oltrepiave/Vedorcia08.jpg', desc: 'Castello di Vedorcia e Spalti di Toro'}
  fotoVedorcia.push(foto154)
  fotoVedorcia.push(foto156)
  fotoVedorcia.push(foto155)
  fotoVedorcia.push(foto157)
  fotoVedorcia.push(foto158)
  fotoVedorcia.push(foto159)
  fotoVedorcia.push(foto160)
  fotoVedorcia.push(foto161)
  let descVedorcia = `Dal Rif. Padova al Rif. Tita Barba, dove abbiamo pernottato.
  La prima difficoltà si trova nel rimontare la paretina prima di forcella Vedorcia, II delicato, 5m.
  La cengia poi è facile, se si esclude il passaggio su un masso inclinato dove ci siamo assicurati. 
  All'uscita della cengia si deve iniziare a scalare su balze fino a una paretina di II/II+, per poi muoversi verso la cuspide finale
  tagliata dal canalone che si scala con 4 tiri fino al III°. La roccia nel camino diventa migliore. A scendere si sfruttano
  gli ancoraggi per alcune doppie. Cima poco frequentata da affrontare in assetto alpinistico.` 

  let fotoCollalto = []
  let foto162 = {path: 'oltrepiave/Collalto00.jpg', desc: 'La forcella da salire dopo attraversamento di nevaio'}
  let foto163 = {path: 'oltrepiave/Collalto01.jpg', desc: 'Torrioni da aggirare'}
  let foto164 = {path: 'oltrepiave/Collalto02.jpg', desc: 'Spalti di Toro dalla cima'}
  let foto165 = {path: 'oltrepiave/Collalto03.jpg', desc: 'Facendosi largo tra i mughi'}
  fotoCollalto.push(foto162)
  fotoCollalto.push(foto165)
  fotoCollalto.push(foto163)
  fotoCollalto.push(foto164)
  let descCollalto = `Dal Rif. Maniago si sale alla forcella Duranno (2220), superando qualche breve passaggio di I nel tratto conclusivo. 
  Quindi per portarsi sulla prima quota (la piu' elevata) delle cime Centenere si risale la cresta erbosa a destra che in pochi minuti porta alla vetta (palo con ometto). 
  Si  può a questo punto anche raggiungere l'altra quota leggermente inferiore 
  più a sud. Occorre scendere con cautela fino al sentiero che porta a casera Lodina (2m I+ forse evitabili) per poi rimontare 
  l'evidente cresta stavolta per lo piu' rocciosa senza 
  Difficoltà alcuna (15 min). La zona è popolata da molti stambecchi (per lo 
  più femmine con cuccioli), che si lasciano avvicinare senza timore.`

  
return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
      <Sidebar />
        </div>
        <div className='col-sm-10'>          
        <Gita title='Cima Toro'  quota='2355m' dislivello='1250m' difficolta='II/II+/PD+' descrizione={descCimaToro} foto={fotoCimaToro} ></Gita>
        <Gita title='Cima Emilia'  quota='2369m' dislivello='~1300m' difficolta='I+' descrizione={descEmilia} foto={fotoEmilia} ></Gita>
        <Gita title='Cima di Bortolusc'  quota='2160m' dislivello='1150m' difficolta='I+/II-' descrizione={descBortolusc} foto={fotoBortolusc} ></Gita>
        <Gita title='Cima Vacalizza'  quota='2266m' dislivello='1650m' difficolta='III-/II/PD+' descrizione={descVacalizza} foto={fotoVacalizza} ></Gita>
        <Gita title='Spalla del Duranno/Sent. Zandonella'  quota='2234m' dislivello='1300m' difficolta='I/EEA' descrizione={descSpallaDuranno} foto={fotoSpallaDuranno} ></Gita>
        <Gita title='Cime Postegae'  quota='2313/2358m' dislivello='~1500m' difficolta='EE' descrizione={descPostegae} foto={fotoPostegae} ></Gita>
        <Gita title='Cadin di Vedorcia'  quota='2403m' dislivello='1250m' difficolta='III/AD-' descrizione={descVedorcia} foto={fotoVedorcia} ></Gita>
        <Gita title='Cima di Pino Sud'  quota='2057m' dislivello='~1700m' difficolta='II/PD' descrizione={descPinoSudo} foto={fotoPinoSudo} ></Gita>
        <Gita title='Cima dei Pecoli'  quota='2352m' dislivello='1200m' difficolta='II-/F+' descrizione={descPecoli} foto={fotoPecoli} ></Gita>
        <Gita title='Monfalcon di Montanaia'  quota='2548m' dislivello='1400m' difficolta='II+/PD' descrizione={descMonfalconDM} foto={fotoMonfalconDM} ></Gita>
        <Gita title='Cima Pussa'  quota='2169m' dislivello='1250m' difficolta='I+/F+' descrizione={descPussa} foto={fotoPussa} ></Gita>
        <Gita title='Torre Postegae sud'  quota='2346m' dislivello='1250m' difficolta='I+/F+' descrizione={descPostegaeSud} foto={fotoPostegaeSud} ></Gita>
        <Gita title='Punta del Borsat'  quota='2220m' dislivello='1400m' difficolta='I+/F+' descrizione={descBorsat} foto={fotoBorsat} ></Gita>
        <Gita title='Cima Brica'  quota='2362m' dislivello='1200m' difficolta='I+/II-/F' descrizione={descBrica} foto={fotoBrica} ></Gita>
        <Gita title='Cime Centenere'  quota='2295/2275m' dislivello='~1150m' difficolta='EE' descrizione={descCentenere} foto={fotoCentenere} ></Gita>
        <Gita title='Cima delle Ciazze Alte (Tentativo)'  quota='~2240m' dislivello='1530m' difficolta='I+/II-/PD' descrizione={descCiazze} foto={fotoCiazze} ></Gita>
        <Gita title='Cima di Ciol de Sass'  quota='2072m' dislivello='1250' difficolta='I/F' descrizione={descCiolSass} foto={fotoCiolSass} ></Gita>
        <Gita title='Cima Laste (gruppo Duranno Cima Preti)'  quota='2555m' dislivello='950+700m' difficolta='I/F' descrizione={descLaste} foto={fotoLaste} ></Gita>
        <Gita title='Bocciardata F.lla dei Cacciatori (Alta via nr.6)'  quota='2173m' dislivello='1270m' difficolta='I+/F+' descrizione={descBocciardata} foto={fotoBocciardata} ></Gita>
        <Gita title='Cima Spe'  quota='2314m' dislivello='~1300m' difficolta='I/F' descrizione={descCimaSpe} foto={fotoCimaSpe} ></Gita>
        <Gita title='Cima Stalla (Tentativo)'  quota='~1950m' dislivello='~800m' difficolta='II+/PD+' descrizione={descCimaStalla} foto={fotoCimaStalla} ></Gita>
        <Gita title='Monfalcon di Forni'  quota='2453m' dislivello='~1500m' difficolta='II-/II+/F+' descrizione={descForni} foto={fotoForni} ></Gita>
        <Gita title='Cima Gea'  quota='2265m' dislivello='~1400m' difficolta='II/PD-' descrizione={descCimaGea} foto={fotoCimaGea} ></Gita>
        <Gita title='Cridola'  quota='2581m' dislivello='1300m' difficolta='II/II+/PD' descrizione={descCridola} foto={fotoCridola} ></Gita>
        <Gita title='Monte Ferrara'  quota='2258m' dislivello='1100m' difficolta='EE' descrizione={descFerrara} foto={fotoFerrara} ></Gita>
        <Gita title='Monte Porgeit'  quota='1864m' dislivello='650m' difficolta='E' descrizione={descPorgeit} foto={fotoPorgeit} ></Gita>
        <Gita title='Cima Frati'  quota='2355m' dislivello='1650m' difficolta='II/PD+' descrizione={descFrati} foto={fotoFrati} ></Gita>
        <Gita title='Monte Zerten'  quota='1864m' dislivello='650m' difficolta='E' descrizione={descZerten} foto={fotoZerten} ></Gita>
        <Gita title='Monte Zita (Val Zemola)'  quota='2190m' dislivello='1000m' difficolta='E' descrizione={descZita} foto={fotoZita} ></Gita>
        <Gita title='Cima Urtisiel Est'  quota='2119m' dislivello='1000m' difficolta='E' descrizione={descUrtisielEst} foto={fotoUrtisielEst} ></Gita>
        <Gita title='Cima Urtisiel Ovest (Tentativo)'  quota='~2100m' dislivello='950m' difficolta='I+/F+' descrizione={descUrtisielOvest} foto={fotoUrtisielOvest} ></Gita>
        <Gita title='Monte Turlon (Tentativo)'  quota='~2160m' dislivello='1950m' difficolta='I+/F+' descrizione={descTurlon} foto={fotoTurlon} ></Gita>
        <Gita title='Monte Toc'  quota='1920m' dislivello='1180m' difficolta='EE' descrizione={descToc} foto={fotoToc} ></Gita>
        <Gita title='Cima di San Francesco (Tentativo)'  quota='~2160m' dislivello='1950m' difficolta='I/F' descrizione={descSFrancesco} foto={fotoSFrancesco} ></Gita>
        <Gita title='Cima della Palazza (Val Zemola)'  quota='2210m' dislivello='1050m' difficolta='E' descrizione={descPalazzaZemola} foto={fotoPalazzaZemola} ></Gita>
        <Gita title='Ago del Cridola (Tentativo) Sentiero del 50esimo'  quota='~2370m' dislivello='1250m' difficolta='II-/F+' descrizione={descSent50esimo} foto={fotoSent50esimo} ></Gita>
        <Gita title='Montanel'  quota='2461m' dislivello='1410m' difficolta='I+/F+' descrizione={descMontanel} foto={fotoMontanel} ></Gita>
        <Gita title='Collalto'  quota='2100m' dislivello='800m' difficolta='EE' descrizione={descCollalto} foto={fotoCollalto} ></Gita>
        </div>  
    </div>                   
  );
}