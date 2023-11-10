import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Pale() {

  let fotoAgner = []
  let foto1 = {path: 'pale/agner01.jpg', desc: 'Dalla cima dell\'Agner'}
  let foto2 = {path: 'pale/agner02.jpg', desc: 'Dalla cima dell\'Agner II'}
  fotoAgner.push(foto1)
  fotoAgner.push(foto2)

  let descAgner = `Tratti di I sulle placche e prima del Biv. 
  Biasin; corda metallica esposta, poi I e un passaggio di II per la 
  vetta.`

return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
          <Sidebar />
        </div>
        <div className='col-sm-10'>     
        <Gita title='Monte Agner'  quota='2872m' dislivello='1150m'  difficolta='I+/II-'  descrizione={descAgner}  foto={fotoAgner} ></Gita>
        </div>  
    </div>                     
  );
}