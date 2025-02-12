import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Giulie() {

  let fotoMangart = []
  let foto1 = {path: 'giulie/mangart01.jpg', desc: 'Jalovec'}
  let foto2 = {path: 'giulie/mangart02.jpg', desc: 'Mangart'}
  let foto3 = {path: 'giulie/mangart03.jpg', desc: 'Cupola finale'}
  let foto4 = {path: 'giulie/mangart04.jpg', desc: 'Il Tricorno'}
  fotoMangart.push(foto1)
  fotoMangart.push(foto2)
  fotoMangart.push(foto3)
  fotoMangart.push(foto4)
  let descMangart = `Al termine della strada carrozzabile del Mangart si risale
  la cresta con orride visioni sulla ferrata italiana che sale da nord. Al
  bivio abbiam preso a destra verso la ferrata slovena che si sviluppa
  seguendo un canale che taglia tutta la piramide del monte. La ferrata e'
  facile ma le condizioni di innevamento han reso insidiosi alcuni gradoni di
  I non attrezzati. Dalla vetta immenso panorama a 360 gradi, con il Jalovec
  che si staglia di fianco verso sud-est. La discesa per la normale e'
  elementare con solo alcuni tratti appoggiati provvisti di fune metallica.`

  let fotoFuart = []
  let foto5 = {path: 'giulie/fuart01.jpg', desc: 'Dal Jof Fuart'}
  let foto6 = {path: 'giulie/fuart02.jpg', desc: 'Jof Fuart dal sentiero A. Goitan'}
  fotoFuart.push(foto5)
  fotoFuart.push(foto6)
  let descFuart = `Salita dal Corsi, normale e poi Anita Goitan a scendere. Tutti i punti piu 
  impegnativi sono attrezzati. Nel nostro caso nevicava e le cengette del 
  castello sommitale erano ghiacciate.`

  let fotoMontasio = []
  let foto7 = {path: 'giulie/montasio01.jpg', desc: 'Via normale da Brazzà al Montasio'}
  let foto8 = {path: 'giulie/montasio02.jpg', desc: 'Parete sud del Montasio'}
  fotoMontasio.push(foto7)
  fotoMontasio.push(foto8)
  let descMontasio = `Salita del 14-ottobre, neanche una nuvola caldo quasi fastidioso (!). Si è 
  preferito fare la via dei Verts da Brazzà sia in salita che in discesa, 
  visto l'affollamento e le scariche di sassi che si verificavano in 
  corrispondenza della scala Pipan. Superati alcuni passaggi di I e un 
  paio di I+, oltre a una cengia un po' esposta nella deviazione dei Verts.`

  let fotoBrentoni = []
  let foto9 = {path: 'giulie/Brentoni01.jpg', desc: 'Dalla normale al Monte Brentoni'}
  let foto10 = {path: 'giulie/Brentoni02.jpg', desc: 'Diedro del Monte Brentoni'}
  fotoBrentoni.push(foto9)
  fotoBrentoni.push(foto10)
  let descBrentoni = `Prima di forcella Brentoni 10m di I, passaggio I+. Dalla forcella parte 
  una rampa di circa 100m, sulla prima parte ben articolata I grado, nel 
  tratto finale più liscia (II-). Tre chiodi già in loco per eventuali 
  manovre di corda. Salita nel complesso molto varia e divertente, senza 
  eccessivi rischi oggettivi.`

  let fotoTerzaGrande = []
  let foto11 = {path: 'giulie/TerzaGrande01.jpg', desc: 'Ultimo canale'}
  let foto12 = {path: 'giulie/TerzaGrande02.jpg', desc: 'Gino Buscaini in vetta'}
  let foto13 = {path: 'giulie/TerzaGrande03.jpg', desc: 'Con Gino e Silvia'}
  fotoTerzaGrande.push(foto11)
  fotoTerzaGrande.push(foto12)
  fotoTerzaGrande.push(foto13)
  let descTerzaGrande = `Dopo un lungo avvicinamento la via si 
  sviluppa per 350m di dislivello sul versante sud orientale della 
  montagna. Si tratta quasi sempre di sentiero con un paio di passaggi sul 
  I grado. Prima della cresta finale si supera un canale di 40/50m di II- 
  discontinuo con gli ultimi 5m di II. Segue una breve cresta finale con 
  alcuni passi di I friabile; l'esposizione è praticamente assente su 
  tutto il percorso. Impressiona l'imponenza della montagna percorrendo il 
  tratto da Casera Razzo al passo di Ciampigotto.`

  let fotoTerzaPiccola = []
  let foto14 = {path: 'giulie/TerzaPiccola_01.jpg', desc: 'Forcella terza Piccola'}
  let foto15 = {path: 'giulie/TerzaPiccola_02.jpg', desc: 'Imbocco del canale'}
  let foto16 = {path: 'giulie/TerzaPiccola_03.jpg', desc: 'Il masso incastrato'}
  let foto17 = {path: 'giulie/TerzaPiccola_04.jpg', desc: 'La crestina esposta'}
  fotoTerzaPiccola.push(foto14)
  fotoTerzaPiccola.push(foto15)
  fotoTerzaPiccola.push(foto16)
  fotoTerzaPiccola.push(foto17)
  let descTerzaPiccola = `Via normale 
	per il canalone est da Lerpa. Dopo lungo percorso su strada sterrata nel 
	bosco si percorre l'ampio cadin che conduce a Forc. Terza Piccola. La via 
	inizia aggirando a destra un caratteristico dente roccioso per poi infilarsi 
	in un canale detritico che va risalito per un centinaio di metri, solo un 
	passaggio di I in una strozzatura a metà. Si perviene quindi al masso 
	incastrato che chiude il canale, da superarsi passando sotto dello stesso 
	con facile arrampicata, 4m di I+. Pochi metri sopra inizia una breve 
	crestina esposta, circa 30m con un paio di passaggi molto delicati per 
	l'esposizione ma non difficili, in sostanza si cammina usando le mani solo 
	per equilibrio. La vetta è a portata di mano, risalendo neanche 50m di 
	prato. Spettacolare visione sulle montagne di Sappada e sulle altre due 
	Terze.`

  let fotoZermula = []
  let foto18 = {path: 'giulie/Zermula01.jpg', desc: 'In ferrata sul bagnato'}
  fotoZermula.push(foto18)
  let descZermula = `Ferrata per la parete nord, su placche 
  inclinate, resa scivolosa dalla pioggia, altrimenti decisamente facile.`

  let fotoPeralba = []
  let foto19 = {path: 'giulie/peralba01.jpg', desc: 'Effetti di Vaja'}
  let foto20 = {path: 'giulie/peralba02.jpg', desc: 'Sulla normale spallone W'}
  let foto21 = {path: 'giulie/peralba03.jpg', desc: 'Panorama verso le Carniche dalla vetta'}
  let foto22 = {path: 'giulie/peralba04.jpg', desc: 'Scaletta sulla ferrata Sartor'}
  fotoPeralba.push(foto19)
  fotoPeralba.push(foto20)
  fotoPeralba.push(foto21)
  fotoPeralba.push(foto22)
  let descPeralba = `Salita la via normale per lo spallone ovest che presenta frequenti tratti di I, mai esposti. Discesa per la facile ferrata Sartor.`

return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
      <Sidebar />
        </div>
        <div className='col-sm-10'>    
        <span id="1"></span>
        <Gita title='Monte Mangart' quota='2677m' dislivello='680m' difficolta='I/EEA' descrizione={descMangart} foto={fotoMangart} ></Gita>
        <span id="2"></span>
        <Gita title='Jof Fuart' quota='2666m' dislivello='800m' difficolta='I+/EEA' descrizione={descFuart} foto={fotoFuart} ></Gita>
        <span id="3"></span>
        <Gita title='Jof di Montasio' quota='2666m' dislivello='800m' difficolta='I+/EEA' descrizione={descMontasio} foto={fotoMontasio} ></Gita>
        <span id="4"></span>
        <Gita title='Monte Brentoni' quota='2547m' dislivello='800m' difficolta='I+' descrizione={descBrentoni} foto={fotoBrentoni} ></Gita>
        <span id="5"></span>
        <Gita title='Terza Grande' quota='2583m' dislivello='1200m' difficolta='II-' descrizione={descTerzaGrande} foto={fotoTerzaGrande} ></Gita>
        <span id="6"></span>
        <Gita title='Terza Piccola' quota='2334m' dislivello='1150m' difficolta='I+' descrizione={descTerzaPiccola} foto={fotoTerzaPiccola} ></Gita>
        <span id="7"></span>
        <Gita title='Monte Zermula' quota='2145m' dislivello='590m' difficolta='EEA' descrizione={descZermula} foto={fotoZermula} ></Gita>
        <span id="8"></span>
        <Gita title='Monte Peralba' quota='2694m' dislivello='870m' difficolta='I/EEA' descrizione={descPeralba} foto={fotoPeralba} ></Gita>
        </div>  
    </div>        
  );
}