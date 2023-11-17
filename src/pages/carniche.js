import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Carniche() {

  let fotoBrentoni = []
  let foto1 = {path: 'carniche/Brentoni01.jpg', desc: 'Dalla normale al Monte Brentoni'}
  let foto2 = {path: 'carniche/Brentoni02.jpg', desc: 'Diedro del Monte Brentoni'}
  fotoBrentoni.push(foto1)
  fotoBrentoni.push(foto2)

  let descBrentoni = `Prima di forcella Brentoni 10m di I, passaggio I+. Dalla forcella parte 
  una rampa di circa 100m, sulla prima parte ben articolata I grado, nel 
  tratto finale più liscia (II-). Tre chiodi già in loco per eventuali 
  manovre di corda. Salita nel complesso molto varia e divertente, senza 
  eccessivi rischi oggettivi.`

  let fotoTerzaGrande = []
  let foto3 = {path: 'carniche/TerzaGrande01.jpg', desc: 'Ultimo canale'}
  let foto4 = {path: 'carniche/TerzaGrande02.jpg', desc: 'Gino Buscaini in vetta'}
  let foto5 = {path: 'carniche/TerzaGrande03.jpg', desc: 'Con Gino e Silvia'}
  fotoTerzaGrande.push(foto3)
  fotoTerzaGrande.push(foto4)
  fotoTerzaGrande.push(foto5)

  let descTerzaGrande = `Dopo un lungo avvicinamento la via si 
  sviluppa per 350m di dislivello sul versante sud orientale della 
  montagna. Si tratta quasi sempre di sentiero con un paio di passaggi sul 
  I grado. Prima della cresta finale si supera un canale di 40/50m di II- 
  discontinuo con gli ultimi 5m di II. Segue una breve cresta finale con 
  alcuni passi di I friabile; l'esposizione è praticamente assente su 
  tutto il percorso. Impressiona l'imponenza della montagna percorrendo il 
  tratto da Casera Razzo al passo di Ciampigotto.`

  let fotoTerzaPiccola = []
  let foto6 = {path: 'carniche/TerzaPiccola_01.jpg', desc: 'Forcella terza Piccola'}
  let foto7 = {path: 'carniche/TerzaPiccola_02.jpg', desc: 'Imbocco del canale'}
  let foto8 = {path: 'carniche/TerzaPiccola_03.jpg', desc: 'Il masso incastrato'}
  let foto9 = {path: 'carniche/TerzaPiccola_04.jpg', desc: 'La crestina esposta'}
  fotoTerzaPiccola.push(foto6)
  fotoTerzaPiccola.push(foto7)
  fotoTerzaPiccola.push(foto8)
  fotoTerzaPiccola.push(foto9)

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
  let foto10 = {path: 'carniche/Zermula01.jpg', desc: 'In ferrata sul bagnato'}
  fotoZermula.push(foto10)

  let descZermula = `Ferrata per la parete nord, su placche 
  inclinate, resa scivolosa dalla pioggia, altrimenti decisamente facile.`

  return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
      <Sidebar />
        </div>
        <div className='col-sm-10'>
        <Gita title='Monte Brentoni'  quota='2547m' dislivello='800m' difficolta='I+' descrizione={descBrentoni} foto={fotoBrentoni} ></Gita>
        <Gita title='Terza Grande'  quota='2583m' dislivello='1200m' difficolta='II-' descrizione={descTerzaGrande} foto={fotoTerzaGrande} ></Gita>
        <Gita title='Terza Piccola'  quota='2334m' dislivello='1150m' difficolta='I+' descrizione={descTerzaPiccola} foto={fotoTerzaPiccola} ></Gita>
        <Gita title='Monte Zermula'  quota='2145m' dislivello='590m' difficolta='EEA' descrizione={descZermula} foto={fotoZermula} ></Gita>
        </div>  
    </div>        
  );
}