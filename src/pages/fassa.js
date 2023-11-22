import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Fassa() {
  
  let fotoTooreNord = []
  let foto1 = {path: 'fassa/TorreNordVajolet_01.jpg', desc: 'In vista della cengia'}
  let foto2 = {path: 'fassa/TorreNordVajolet_02.jpg', desc: 'All\'attacco del canale'}
  let foto3 = {path: 'fassa/TorreNordVajolet_03.jpg', desc: 'Cengia, verso Bolzano'}
  let foto4 = {path: 'fassa/TorreNordVajolet_04.jpg', desc: 'Forcella Nord'}
  let foto5 = {path: 'fassa/TorreNordVajolet_05.jpg', desc: 'Croda di Re Laurino'}
  let foto6 = {path: 'fassa/TorreNordVajolet_06.jpg', desc: 'Passaggio sulla normale'}
  let foto7 = {path: 'fassa/TorreNordVajolet_07.jpg', desc: 'Sotto il masso incastrato'}
  let foto8 = {path: 'fassa/TorreNordVajolet_08.jpg', desc: 'Cengia da Forc. Nord'}
  let foto9 = {path: 'fassa/TorreNordVajolet_09.jpg', desc: 'Verso sud dalla cima'}
  let foto10 = {path: 'fassa/TorreNordVajolet_10.jpg', desc: 'Catinaccio d\'Antermoia'}
  fotoTooreNord.push(foto1)
  fotoTooreNord.push(foto2)
  fotoTooreNord.push(foto3)
  fotoTooreNord.push(foto4)
  fotoTooreNord.push(foto5)
  fotoTooreNord.push(foto6)
  fotoTooreNord.push(foto7)
  fotoTooreNord.push(foto8)
  fotoTooreNord.push(foto9)
  fotoTooreNord.push(foto10)

  let descTooreNord = `Dal rif. Vajolet si prosegue verso il Passo Principe (nord) fino in corrispondenza del ghiaione che scende
  da sinsitra (est) dal Passo del Vajolet. Lo si risale quasi tutto per prendere la cengia che si genera a sinistra. Si percorre abbastanza lungamente
  la facile cengia sino all'evidente canalone che separa la Torre Nord dalla Torre Est (ometto). Qui si inizia a scalare seguendo gli ometti
  sempre sul I/I+ continuo ma solido. Il tratto chiave è un muretto di circa 5/6m di II a metà del canale e poi il superamento
  di un masso incastrato passando sotto. Giunti alla forcella bisogna subito piegare a destra imboccando un largo canalone, 
  ignorando la bella cengia che svolta nel settore ovest della Torre. Ultime difficoltà alla fine del canale, piegando
  a destra su balze di I+ e sbucando sull'esile e breve crestina finale, tornando a sinistra in direzione delle Torri Winkler e Stabeler.`

  let fotoAutaEst = []
  let foto11 = {path: 'fassa/CimaAutaEst_01.jpg', desc: 'Tratto finale con attrezzature'}
  let foto12 = {path: 'fassa/CimaAutaEst_02.jpg', desc: 'Sud della Marmolada'}
  let foto13 = {path: 'fassa/CimaAutaEst_03.jpg', desc: 'Stambecchi di casa'}
  let foto14 = {path: 'fassa/CimaAutaEst_04.jpg', desc: 'Tratto con corde fisse'}
  fotoAutaEst.push(foto11)
  fotoAutaEst.push(foto12)
  fotoAutaEst.push(foto13)
  fotoAutaEst.push(foto14)

  let descAutaEst = `Via normale alla Cima d'Auta Est da località Colmean.`

  let fotoCiadin = []
  let foto15 = {path: 'fassa/PuntaDelCiadin_01.jpg', desc: 'Cresta finale'}
  let foto16 = {path: 'fassa/PuntaDelCiadin_02.JPG', desc: 'Cime di Auta'}
  fotoCiadin.push(foto15)
  fotoCiadin.push(foto16)

  let descCiadin = `Da Passo S.	Pellegrino (chiesetta) si segue per la normale a cima Uomo fino alla 
	deviazione, poi gli ultimi 100m verso la forcella sono veramente fastidiosi 
	per la	pendenza ed il marciume. Arrivati in vista dei segni dell'alta via Bepi Zac 
	si prende a sinistra seguendo questi per un 2/300m in cengia/sentiero in 
	quota fino a distinguere il canale di salita dopo una forcelletta. Si deve 
	prendere l'intaglio a sinistra del canale per evitare di finire sotto i salti che sbarrano il canale una quarantina di metri sopra. Il canalino 
	è solido sul I discontinuo, qualche passo I+ per una ventina di metri. 
  Poi si esce a destra verso la parte superiore del canale dove si cammina. Ometti, 
  uno anche fuorviante verso sinistra, mentre bisogna puntare il lato destro che sbuca all'esile forcelletta. 
  Da li si identifica un canalino con due staffe in ferro che si imbocca dopo un paio di metri di cengetta leggermente esposta. Fuori dal canale si intravede 
	già la cima che si raggiunge brevemente superata con un po' di attenzione una crestina finale.`

  let fotoMugoniMezzo = []
  let foto17 = {path: 'fassa/MugoniCimaDiMezzo_01.JPG', desc: 'Salendo la normale'}
  let foto18 = {path: 'fassa/MugoniCimaDiMezzo_02.jpg', desc: 'Verso sud dalla cima'}
  fotoMugoniMezzo.push(foto17)
  fotoMugoniMezzo.push(foto18)

  let descMugoniMezzo = `Dalla Busa de Vael si individua il canale che spacca la parete ovest dei Mugoni. Qualche 
	passo di I all'inizio, poi solo ripido e friabile. Nessuna traccia o ometto.
  A metà canale lo troviamo completamente invaso da una lingua di neve. 
  Piuttosto che traversare 30m sul duro si decide di passare al bordo delle rocce superiore con tanto di passo del gatto in un tunnel di neve.
  La forcella della Torre stupenda sia come ambientazione che come vedute.
  La normale alla cima di mezzo si individua più verso il versante di Vael. Da li in 10 minuti si calca la esilissima cima, 
	15m di I all'inizio, poi una bancata con zolle e una breve crestina 
	terminale.`

  let fotoVernale = []
  let foto19 = {path: 'fassa/vernale01.jpg', desc: 'Marmolada dal Vernale'}
  fotoVernale.push(foto19)

  let descVernale = `Un 3000 facile, dal lungo avvicinamento. Cresta finale 
  tra le rovine della grande guerra, sempre max I-.`

  let fotoSassDlaCrusc = []
  let foto20 = {path: 'fassa/sassDlaCrusc01.jpg', desc: 'Verso le Odle'}
  let foto21 = {path: 'fassa/sassDlaCrusc02.jpg', desc: 'Sulla cengia in parete ovest'}
  fotoSassDlaCrusc.push(foto20)
  fotoSassDlaCrusc.push(foto21)

  let descSassDlaCrusc = `La salita si 
  sviluppa per cengia e risalti attrezzati alquanto facili, l'esposizione 
  e' quasi sempre trascurabile. Poi la cresta e' molto semplice e non 
  molto ripida. Per la cima del Sass dle Diesc occorre affrontare un 
  tratto di attrezzata con corda verticale alquanto esposto.`

  let fotoSassRigais = []
  let foto22 = {path: 'fassa/Puez01.jpg', desc: 'Puez'}
  let foto23 = {path: 'fassa/Furcheta01.jpg', desc: 'La Furcheta dal Sass Rigais'}
  fotoSassRigais.push(foto22)
  fotoSassRigais.push(foto23)

  let descSassRigais = `Salita per la ferrata Ovest, discesa per la ferrata sud. Entrambe 
  piuttosto facili. Sulla sud si devono superare dei tratti sul I grado 
  (mai esposti) senza cavo. Giornata splendida con panorama a 360 gradi.`

  let fotoMarmolada = []
  let foto24 = {path: 'fassa/marmolada01.jpg', desc: 'Sassolungo e Roda de Mulon al tramonto'}
  let foto25 = {path: 'fassa/marmolada02.jpg', desc: 'Ghiacciao verso le Tofane'}
  fotoMarmolada.push(foto24)
  fotoMarmolada.push(foto25)

  let descMarmolada = `Ferrata per cresta Ovest a salire, nevaio del Vernel 
  senza problemi. La ferrata e' lunga ma ben attrezzata. A scendere per la 
  normale. Terminata la schiena non ripida occorre scendere arrampicando 
  per circa 200m fino al ghiacciao sottostante; una serie di canalini con 
  tratti di I+ e I continuo, con roccia spesso levigata dall'uso. Il 
  ghiacciao era alquanto molle (neve) e solo in una occasione e' stato 
  necessario saltare un piccolo crepaccetto.`

  let fotoScalieret = []
  let foto26 = {path: 'fassa/scalieret00.jpg', desc: 'Cima Scalieret dal passo delle Scalette'}
  let foto27 = {path: 'fassa/scalieret01.jpg', desc: 'Val del Larsech'}
  let foto28 = {path: 'fassa/scalieret02.jpg', desc: 'Larsech e cima delle Pope sud'}
  let foto29 = {path: 'fassa/scalieret03.jpg', desc: 'Catinaccio e Torri del Vajolet'}
  fotoScalieret.push(foto26)
  fotoScalieret.push(foto27)
  fotoScalieret.push(foto28)
  fotoScalieret.push(foto29)

  let descScalieret = `Partito da Muncion, data la chiusura degli impianti e tagliato da La Regolina a destra verso il sentiero 583 delle Scalette.
  Dal passo si gira a sinistra per la solitaria val del Larsech e poi si prosegue in fondo a destra fino al passo delle Pope, da cui si risale faticosamente la dorsale est della cima.
  A scendere ho preferito la dorsale nord fino al passo d'Antermoia, per poi rientrare al Preuss e a Gardeccia.`

  let fotoRodaDiaol = []
  let foto30 = {path: 'fassa/RodaDiaol01.jpg', desc: 'Approcciando il tratto ferrato'}
  let foto31 = {path: 'fassa/RodaDiaol02.jpg', desc: 'Torre Finestra'}
  let foto32 = {path: 'fassa/RodaDiaol03.jpg', desc: 'Roda di Vael dalla cima'}
  let foto33 = {path: 'fassa/RodaDiaol04.jpg', desc: 'Gruppo del Catinaccio verso est'}
  fotoRodaDiaol.push(foto30)
  fotoRodaDiaol.push(foto31)
  fotoRodaDiaol.push(foto33)
  fotoRodaDiaol.push(foto32)

  let descRodaDiaol = `Dal rif. Roda di Vael si seguono le indicazioni per la ferrata che si superà con modeste difficoltà. 
  In vista della Torre finestra si piega a nord puntando la forcella a destra. 
  Da lì si risale la cresta est della Roda con qualche passaggio massimo di I+ senza esposizione.`

  let fotoCimaUomo = []
  let foto34 = {path: 'fassa/CimaUomo01.jpg', desc: 'Avvicinando la parete est di Cima Uomo'}
  let foto35 = {path: 'fassa/CimaUomo02.jpg', desc: 'Verso il Gran Vernel'}
  let foto36 = {path: 'fassa/CimaUomo03.jpg', desc: 'In cima con mio zio'}
  fotoCimaUomo.push(foto34)
  fotoCimaUomo.push(foto35)
  fotoCimaUomo.push(foto36)

  let descCimaUomo = `Dal Passo San Pellegrino si prendono le indicazioni per la via Attrezzata Bepi Zac, che si abbandonano a 2/3 del ghiaione
  procedendo verso destra e superando le prime balze di roccia fino a raggiungere il basamento della parete. Seguendo gli ometti si procede fino a raggiongere l'inizio
  della dorsale sud che si scala senza difficoltà di rilievo. Salita nel complesso ai limiti dell'escursionismo, da non sottovalutare.`


return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
      <Sidebar />
        </div>
        <div className='col-sm-10'>          
        <Gita title='Torre Nord del Vajolet'  quota='2810m' dislivello='~900m' difficolta='II-' descrizione={descTooreNord} foto={fotoTooreNord} ></Gita>
        <Gita title='Cima di Auta Est'  quota='2624m' dislivello='1350m' difficolta='I+/EEA' descrizione={descAutaEst} foto={fotoAutaEst} ></Gita>
        <Gita title='Punta del Ciadin'  quota='2919m' dislivello='1020m' difficolta='I/I+' descrizione={descCiadin} foto={fotoCiadin} ></Gita>
        <Gita title='Mugoni Cima di Mezzo'  quota='2750m' dislivello='800m' difficolta='I' descrizione={descMugoniMezzo} foto={fotoMugoniMezzo} ></Gita>
        <Gita title='Sasso Vernale'  quota='3058m' dislivello='~1100m' difficolta='I-' descrizione={descVernale} foto={fotoVernale} ></Gita>
        <Gita title='Sass dla Crusc'  quota='2907m' dislivello='~1200m' difficolta='EE' descrizione={descSassDlaCrusc} foto={fotoSassDlaCrusc} ></Gita>
        <Gita title='Sass Rigais'  quota='3025m' dislivello='940m' difficolta='EEA' descrizione={descSassRigais} foto={fotoSassRigais} ></Gita>
        <Gita title='Marmolada'  quota='3343m' dislivello='650+850m' difficolta='EEA' descrizione={descMarmolada} foto={fotoMarmolada} ></Gita>
        <Gita title='Cima Scalieret'  quota='2889m' dislivello='1480m' difficolta='EE' descrizione={descScalieret} foto={fotoScalieret} ></Gita>
        <Gita title='Roda del Diavolo'  quota='2723m' dislivello='600m' difficolta='I+/EEA' descrizione={descRodaDiaol} foto={fotoRodaDiaol} ></Gita>
        <Gita title='Cima Uomo'  quota='3010m' dislivello='1070m' difficolta='I+/F+' descrizione={descCimaUomo} foto={fotoCimaUomo} ></Gita>
        </div>  
    </div>                   
  );
}