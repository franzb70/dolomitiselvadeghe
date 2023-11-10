import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Brenta() {

  let fotoTosa = []
  let foto1 = {path: 'brenta/cimaTosa01.jpg', desc: 'Verso l\'attacco a Cima Tosa'}
  let foto2 = {path: 'brenta/cimaTosa02.jpg', desc: 'Il camino sulla normale'}
  let foto3 = {path: 'brenta/cimaTosa03.jpg', desc: 'Cima Tosa'}
  let foto4 = {path: 'brenta/cimaTosa04.jpg', desc: 'Il camino sulla normale'}
  fotoTosa.push(foto1)
  fotoTosa.push(foto2)
  fotoTosa.push(foto3)
  fotoTosa.push(foto4)

  let descTosa = `Lo zoccolo prima del camino I grado un 
  passaggio II, poi il camino/spigolo 25 metri II e passaggi II+ sul 
  verticale, appigli abbondanti ma lisciati dall'uso. Sopra solo passi di 
  I divertenti, calotta di neve innocua (non portare i ramponi). A 
  scendere 2 calate in doppia da 10/15 metri.`

return (
    <div className='row App'>
    <div className='col-sm-2 colLeft'>
          <Sidebar />
        </div>
        <div className='col-sm-10'>          
        <Gita title='Cima Tosa'  quota='3172m' dislivello='750m'  difficolta='II+/II'  descrizione={descTosa}  foto={fotoTosa} ></Gita>
        </div>  
    </div>        
              
  );
}