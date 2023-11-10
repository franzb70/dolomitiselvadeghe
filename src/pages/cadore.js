import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Cadore() {

  let fotoAiarnola = []
  let foto1 = {path: 'cadore/Aiarnola_01.jpg', desc: 'Dolomiti di Sesto'}
  let foto2 = {path: 'cadore/Aiarnola_02.jpg', desc: 'Facili canalini'}
  let foto3 = {path: 'cadore/Aiarnola_03.jpg', desc: 'Tofane'}
  let foto4 = {path: 'cadore/Aiarnola_04.jpg', desc: 'Duranno e Preti'}
  fotoAiarnola.push(foto1)
  fotoAiarnola.push(foto2)
  fotoAiarnola.push(foto3)
  fotoAiarnola.push(foto4)

  let fotoBelPra = []
  let foto7 = {path: 'cadore/BelPra03.JPG', desc: 'Cengia ghiacciata'}
  let foto9 = {path: 'cadore/BelPra05.JPG', desc: 'Cengia'}
  let foto10 = {path: 'cadore/BelPra06.JPG', desc: 'Torretta finale'}
  let foto13 = {path: 'cadore/BelPra09.JPG', desc: 'Antelao'}
  let foto14 = {path: 'cadore/BelPra10.JPG', desc: 'Torretta finale'}
  let foto16 = {path: 'cadore/BelPra12.JPG', desc: 'Torre Sabbioni'}
  fotoBelPra.push(foto7)
  fotoBelPra.push(foto9)
  fotoBelPra.push(foto10)
  fotoBelPra.push(foto14)
  fotoBelPra.push(foto13)
  fotoBelPra.push(foto16)
  let descBelpra = `Il rifugio S. Marco serve come punto di partenza per la Forcella Grande. Si cammina quindi 
	in falsopiano per una traccia che corre lungo i ghiaioni alla base della 
	Torre Sabbioni, fino ad aggirarla completamente sul lato nord. Risulta a 
	questo punto evidente la cengia che sale verso sinistra (1h 20min), senza 
	alcuna difficoltà, lungo le bastionate di cima Bel Pra. Aggirato il tornante 
	la cengia prosegue ora verso destra (sud-est), dovendo risalire alcuni metri 
	per riprenderla (I) per arrivare dopo poco al passaggio chiave, con un 
	restringimento su colatoio (possibilmente vetrato), e calata di circa 4m, I 
	e 2m II. Un altro punto ostico della lunga cengia si presenta nel finale 
	dovendo aggirare uno spigoletto con poco spazio per i piedi. Risalite alcune 
	placche in aderenza si sbocca nel faticosissimo ghiaione, circa 300m di 
	estenuante risalita per affacciarsi sul versante di S. Vito. Da qui si può 
	già attrezzare una sicura per affrontare una rampa in lieve salita piuttosto 
	esposta. Pervenuti ad un terrazzo si arrampica per 5m in verticale (II-) e 
	poi ancora a destra con roccia sempre più friabile (passi di I, vari 
	spuntoni per assicurazione). L'aggiramento di un ultimo risalto in cengia 
	costituisce il passaggio più esposto con appigli malsicuri per le mani. 
	Infilato un facile canale in direzione nord si affronta un risalto di II in 
	spaccata per approdare alla cresta finale che porta in vetta con un giro a 
	ferro di cavallo su roccia rotta (3h dall'attacco). Salita bellissima ed 
	appagante.`
/*  fotoBelPra.push(foto5)
  fotoBelPra.push(foto6)
  fotoBelPra.push(foto8)
  fotoBelPra.push(foto11)
  fotoBelPra.push(foto12)
  fotoBelPra.push(foto15)*/

return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
          <Sidebar />
        </div>
        <div className='col-sm-10'>
        <Gita title='Monte Aiarnola'  quota='2456m' dislivello='1050m'  difficolta='EE/F'  descrizione='Salita al Monte Aiarnola.'  foto={fotoAiarnola} ></Gita>
        <Gita title='Cima Belprà'  quota='2917m' dislivello='150+1150m'  difficolta='II-'  descrizione={descBelpra}  foto={fotoBelPra} ></Gita>
        </div>  
    </div>        
  );
}