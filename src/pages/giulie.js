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

return (
  <div className='row App'>
    <div className={`${'col-sm-2'} ${'colLeft'}`}>
          <Sidebar />
        </div>
        <div className='col-sm-10'>    
        <Gita title='Monte Mangart'  quota='2677m' dislivello='680m'  difficolta='I/EEA'  descrizione={descMangart}  foto={fotoMangart} ></Gita>
        </div>  
    </div>        
  );
}