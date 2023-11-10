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

return (
  <div className='row App'>
    <div className={`${'col-sm-2'} ${'colLeft'}`}>
          <Sidebar />
        </div>
        <div className='col-sm-10'>
        <Gita title='Monte Brentoni'  quota='2547m' dislivello='800m'  difficolta='I+'  descrizione={descBrentoni}  foto={fotoBrentoni} ></Gita>
        </div>  
    </div>        
  );
}