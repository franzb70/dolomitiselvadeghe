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

  let descBortolusc = `Via normale.`

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
  4m III strapiombante. Si prosegue quindi per facili gradoni detritici fino sotto la torretta finale, 
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


return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
      <Sidebar />
        </div>
        <div className='col-sm-10'>          
        <Gita title='Cima Emilia'  quota='2369m' dislivello='~1300m'  difficolta='I+'  descrizione={descEmilia}  foto={fotoEmilia} ></Gita>
        <Gita title='Cima di Bortolusc'  quota='2160m' dislivello='1150m'  difficolta='I+/II-'  descrizione={descBortolusc}  foto={fotoBortolusc} ></Gita>
        <Gita title='Cima Vacalizza'  quota='2266m' dislivello='1650m'  difficolta='III-/II/PD+'  descrizione={descVacalizza}  foto={fotoVacalizza} ></Gita>
        <Gita title='Cima Toro'  quota='2355m' dislivello='1250m'  difficolta='II/II+/PD+'  descrizione={descCimaToro}  foto={fotoCimaToro} ></Gita>
        <Gita title='Spalla del Duranno/Sent. Zandonella'  quota='2234m' dislivello='1300m'  difficolta='I/EEA'  descrizione={descSpallaDuranno}  foto={fotoSpallaDuranno} ></Gita>
        <Gita title='Cime Postegae'  quota='2313/2358m' dislivello='~1500m'  difficolta='EE'  descrizione={descPostegae}  foto={fotoPostegae} ></Gita>
        <Gita title='Cima di Pino Sud'  quota='2057m' dislivello='~1700m'  difficolta='II/PD'  descrizione={descPinoSudo}  foto={fotoPinoSudo} ></Gita>
        <Gita title='Cima dei Pecoli'  quota='2352m' dislivello='1200m'  difficolta='II-/F+'  descrizione={descPecoli}  foto={fotoPecoli} ></Gita>
        <Gita title='Monfalcon di Montanaia'  quota='2548m' dislivello='1400m'  difficolta='II+/PD'  descrizione={descMonfalconDM}  foto={fotoMonfalconDM} ></Gita>
        <Gita title='Cima Pussa'  quota='2169m' dislivello='1250m'  difficolta='I+/F+'  descrizione={descPussa}  foto={fotoPussa} ></Gita>
        </div>  
    </div>                   
  );
}