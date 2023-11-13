import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Pale() {

  let fotoBeta = []
  let foto0 = {path: 'pale/Beta00.jpg', desc: 'Attacco'}
  let foto1 = {path: 'pale/Beta01.jpg', desc: 'Nevaio perenne'}
  let foto2 = {path: 'pale/Beta02.jpg', desc: 'La Dolada'}
  let foto3 = {path: 'pale/Beta03.jpg', desc: 'Uscita dalla Dolada'}
  let foto4 = {path: 'pale/Beta04.jpg', desc: 'Appare Croda Granda'}
  let foto5 = {path: 'pale/Beta05.jpg', desc: 'Spostamenti in quota'}
  let foto6 = {path: 'pale/Beta06.jpg', desc: 'La vetta'}
  let foto7 = {path: 'pale/Beta07.jpg', desc: 'Sass de le Snare'}
  let foto9 = {path: 'pale/Beta09.jpg', desc: 'Delicato traverso'}
  let foto10 = {path: 'pale/Beta10.jpg', desc: 'Su cengia esposta'}
  let foto13 = {path: 'pale/CimaBeta13.jpg', desc: 'Paretina iniziale alla Dolada'}
  fotoBeta.push(foto0)
  fotoBeta.push(foto1)
  fotoBeta.push(foto2)
  fotoBeta.push(foto13)
  fotoBeta.push(foto3)
  fotoBeta.push(foto4)
  fotoBeta.push(foto5)
  fotoBeta.push(foto6)
  fotoBeta.push(foto7)
  fotoBeta.push(foto9)
  fotoBeta.push(foto10)

  let descBeta = `Seguendo il 
	sentiero CAI 771 si giunge alla stazione sommitale della ormai dismessa 
	seggiovia e in breve alla sella erbosa sopra Malga Losch, lasciando sulla 
	sinistra il Rifugio Scarpa-Gurekian. Si asseconda in quota verso occidente 
	l'unica traccia senza indicazioni ma ben marcata, che conduce alla base di 
	un primo canalone dove si scorgono delle opere per una presa d'acqua. Si 
	mantiene la direzione fino a superare lo sbocco di un successivo canale 
	caratterizzato dalla presenza di grossi massi erratici. Si risale subito il 
	primo pendio erboso indovinando l'inizio di una cengia sopra un nero risalto 
	roccioso poco prima dell'incombere delle pareti. Ci si alza tra mughi e 
	ripide erbe, si supera un friabile antro caratterizzato da un abete 
	rinsecchito e si prosegue verso ovest su pale sempre erbose fino a entrare 
	nel fondo di un largo canale che ospita la Dolada: si tratta di un ripido 
	pendio di circa 200 m caratterizzato da placche levigate frammiste ad erbe 
	che costituisce il tratto più insidioso dell'intera salita. Si asseconda la 
	costola erbosa di sinistra fin sotto le rocce a ridosso di ombrosi antri. Il 
	passaggio chiave inizia pochi metri sulla destra, dove le rocce appaiono più 
	cedevoli e una fettuccia su uno spuntone 5 m più in alto segnala il 
	percorso. I primi movimenti sfiorano il III grado, ma subito le difficoltà 
	calano e, superata la citata fettuccia, si raggiunge un buon ancoraggio su 
	clessidra pochi metri più in alto. Si prosegue ora per delicato terreno di 
	zolle erbose interrotto da rocce affioranti, cercando il passaggio più 
	conveniente, puntando alla fascia rocciosa sotto l'evidente torrione che 
	segnala l'uscita dalla Dolada. Gli ultimi 40 metri, decisamente più ripidi e 
	insidiosi non lascerebbero spazio ad errori, ma una clessidra in uscita e un 
	chiodo alla base della fascia di rocce prima raggiunte, permettono di 
	affrontare in sicurezza questo tratto. Si insiste salendo verso sinistra su 
	prati divenuti più docili, si attraversa un ampio canale e se ne risale il 
	suo lato sinistro fino a un intaglio da cui appare la maestosa Croda Granda. 
	Si piega verso destra e per un ripido canalino si esce dalla parte erbosa in 
	corrispondenza di una più alta forcelletta. Si prosegue nell'opposto 
	versante salendo verso destra, portandosi così fin sotto le rocce da dove si 
	inizia ad affrontare un lungo traverso in quota verso sinistra, ricercando 
	con attenzione gli sporadici ometti, lungo un frastagliato versante che 
	alterna svariate costole e rientranze, I/I+. Dopo un ultimo spigolo si 
	accede a una delicata cengia che si affaccia sul profondo canalone che 
	discende direttamente dalla cima. La si percorre per buon tratto e con 
	andamento ascendente fino a toccare il fondo detritico del canalone, I/I+ 
	con passi di II-, esposto ma sempre ben appigliato. Si risale ora senza 
	difficoltà il canale via via sempre più ampio che termina su un'aerea e 
	panoramica terrazza ormai in vista della cupola finale che si affronta 
	centralmente con divertente arrampicata di I grado. Si guadagna 
	finalmente l'isolata cima che sul versante nord precipita vertiginosamente 
	nella profonda Valle d'Angheraz.`

  let fotoAgner = []
  let foto11 = {path: 'pale/agner01.jpg', desc: 'Dalla cima dell\'Agner'}
  let foto12 = {path: 'pale/agner02.jpg', desc: 'Dalla cima dell\'Agner II'}
  fotoAgner.push(foto11)
  fotoAgner.push(foto12)

  let descAgner = `Tratti di I sulle placche e prima del Biv. 
  Biasin; corda metallica esposta, poi I e un passaggio di II per la 
  vetta.`

  let fotoOrtiga = []
  let foto14 = {path: 'pale/SassOrtiga01.JPG', desc: 'Rampa iniziale'}
  let foto15 = {path: 'pale/SassOrtiga02.JPG', desc: 'Paretina di II'}
  let foto16 = {path: 'pale/SassOrtiga03.JPG', desc: 'Calata di doppia finale'}
  let foto17 = {path: 'pale/SassOrtiga04.JPG', desc: 'Verso Croda Grande'}
  fotoOrtiga.push(foto14)
  fotoOrtiga.push(foto15)
  fotoOrtiga.push(foto17)
  fotoOrtiga.push(foto16)

  let descOrtiga = `La via normale presenta subito il tratto chiave con 2m di II+ e 
	una rampa esposta che finisce ad una sosta con catena. Consigliata la doppia 
	a scendere per circa 15m. Il resto della salita comporta vari passaggi di I 
	ed un ulteriore risalto di II, su roccia comunque buona e senza esposizione. 
	La cima consegna un ripagante panorama sul versante sud delle Pale.`

  
return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
          <Sidebar />
        </div>
        <div className='col-sm-10'>     
        <Gita title='Cima della Beta'  quota='2723m' dislivello='1600m'  difficolta='II+/III-/PD+'  descrizione={descBeta}  foto={fotoBeta} ></Gita>
        <Gita title='Monte Agner'  quota='2872m' dislivello='1150m'  difficolta='I+/II-'  descrizione={descAgner}  foto={fotoAgner} ></Gita>
        <Gita title='Sass di Ortiga'  quota='2649m' dislivello='1350m'  difficolta='II+/II/PD'  descrizione={descOrtiga}  foto={fotoOrtiga} ></Gita>
        </div>  
    </div>                     
  );
}