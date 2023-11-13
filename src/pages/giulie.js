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

return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
      <Sidebar />
        </div>
        <div className='col-sm-10'>    
        <Gita title='Monte Mangart'  quota='2677m' dislivello='680m'  difficolta='I/EEA'  descrizione={descMangart}  foto={fotoMangart} ></Gita>
        <Gita title='Jof Fuart'  quota='2666m' dislivello='800m'  difficolta='I+/EEA'  descrizione={descFuart}  foto={fotoFuart} ></Gita>
        <Gita title='Jof di Montasio'  quota='2666m' dislivello='800m'  difficolta='I+/EEA'  descrizione={descMontasio}  foto={fotoMontasio} ></Gita>
        </div>  
    </div>        
  );
}