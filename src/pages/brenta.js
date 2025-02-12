import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Brenta() {

  let fotoTosa = []
  let foto1 = {path: 'brenta/cimaTosa01.jpg', desc: 'Verso l\'attacco a Cima Tosa'}
  let foto2 = {path: 'brenta/cimaTosa02.jpg', desc: 'Il camino sulla normale'}
  let foto3 = {path: 'brenta/cimaTosa03.jpg', desc: 'Cima Tosa'}
  let foto4 = {path: 'brenta/cimaTosa04.jpg', desc: 'Il camino sulla normale'}
  let foto7 = {path: 'brenta/campanilBasso01.jpg', desc: 'Il Campanil Basso da est'}
  let foto8 = {path: 'brenta/campanilBasso02.jpg', desc: 'Il Campanil Basso da sud-ovest'}
  let foto9 = {path: 'brenta/crozAltissimo.jpg', desc: 'Il Croz dell\'Altissimo'}
  let foto10 = {path: 'brenta/crozzonBrenta.jpg', desc: 'Il Crozzon di Brenta'}
  fotoTosa.push(foto1)
  fotoTosa.push(foto2)
  fotoTosa.push(foto3)
  fotoTosa.push(foto4)
  fotoTosa.push(foto7)
  fotoTosa.push(foto8)
  fotoTosa.push(foto9)
  fotoTosa.push(foto10)
  let descTosa = `Lo zoccolo prima del camino I grado un 
  passaggio II, poi il camino/spigolo 25 metri II e passaggi II+ sul 
  verticale, appigli abbondanti ma lisciati dall'uso. Sopra solo passi di 
  I divertenti, calotta di neve innocua (non portare i ramponi). A 
  scendere 2 calate in doppia da 10/15 metri.`

  let fotoBrenta = []
  let foto5 = {path: 'brenta/cimaBrenta01.jpg', desc: 'Dalla Cima Brenta'}
  let foto6 = {path: 'brenta/cimaBrenta02.jpg', desc: 'Via normale alla Cima Brenta'}
  fotoBrenta.push(foto5)
  fotoBrenta.push(foto6)
  let descBrenta = `Ottima via 
  facile su roccia stupenda nel primo canale (I+, II-), piu' delicato 
  l'attraversamento della forcella che da sullo scivolo ghiacciato a nord. 
  Nell'avvicinamento tratto di ferrata Bocchette.`

  let fotoGroste = []
  let foto11 = {path: 'brenta/Groste01.jpg', desc: 'Cima Faulkner da cima Grostè'}
  fotoGroste.push(foto11)
  let descGroste = `Si lascia il sentiero che porta alla ferrata 
  Benini, salendo a destra per banche rocciose e cenge anche mediamente 
  esposte. Si sale un primo camino di 20 metri, molto chiuso, con salti di 
  I e II- intervallati da comodi ballatoi. Più sopra ancora una paretina 
  appoggiata di I e un risalto di 15 metri con passaggi di I+ mai 
  esposti. Bella veduta a sud verso Cima Faulkner e Cima Brenta.`


  return (
    <div className='row App'>
    <div className='col-sm-2 colLeft'>
      <Sidebar />
        </div>
        <div className='col-sm-10'>          
        <span id="1"></span>
        <Gita title='Cima Tosa' quota='3172m' dislivello='750m' difficolta='II+/II' descrizione={descTosa} foto={fotoTosa} ></Gita>
        <span id="2"></span>
        <Gita title='Cima Brenta' quota='3572m' dislivello='700m' difficolta='I+/II-' descrizione={descBrenta} foto={fotoBrenta} ></Gita>
        <span id="3"></span>
        <Gita title='Cima Grostè' quota='2905m' dislivello='1350m' difficolta='I+/II-' descrizione={descGroste} foto={fotoGroste} ></Gita>
        </div>  
    </div>        
              
  );
}