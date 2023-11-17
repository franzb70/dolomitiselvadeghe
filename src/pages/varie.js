import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Varie() {

  let fotoGranPa = []
  let foto1 = {path: 'varie/granPa01.jpg', desc: 'Verso sud, 5 di mattina'}
  let foto2 = {path: 'varie/granPa02.jpg', desc: 'Cordate sul ghiacciaio'}
  let foto3 = {path: 'varie/granPa03.jpg', desc: 'Michele in vetta'}
  let foto4 = {path: 'varie/granPa04.jpg', desc: 'Scendendo la cresta finale'}
  let foto5 = {path: 'varie/granPa05.jpg', desc: 'Di ritorno al rifugio'}
  let foto6 = {path: 'varie/granPa06.jpg', desc: 'Il Cianforon al tramonto'}
  fotoGranPa.push(foto1)
  fotoGranPa.push(foto2)
  fotoGranPa.push(foto3)
  fotoGranPa.push(foto4)
  fotoGranPa.push(foto5)
  fotoGranPa.push(foto6)
  let descGranPa = `Dal rif. Vittorio Emanuele II si seguono le tracce che
  puntano verso nord. Attraversato un vallone con massi (attenzione per la
  carenza di luce) si prende una crestina che si segue lungamente per poi
  abbandonarla quasi alla fine e scendere a destra in direzione del
  ghiacciaio. Montata l'attrezzatura da ghiaccio si risale un primo costone
  piu' ripido per poi seguire lungamente la pista che porta alla base della
  cresta rocciosa finale. La si scala senza difficolta' segnalabili su misto
  ghiaccio roccia incrociando le probabili altre cordate. A 15 metri dalla
  vetta occorre superare un masso di cresta esposto sul ghiacciao della
  Tribolazione, operazione che sarebbe consigliabile fare in sicurezza. Salita
  nel complesso molto faticosa soprattutto per chi non e' abituato alla quota.`

  return (
    <div className='row App'>
    <div className='col-sm-2 colLeft'>
      <Sidebar />
        </div>
        <div className='col-sm-10'>          
        <Gita title='Gran Paradiso'  quota='4061m' dislivello='780+1350m' difficolta='EE/F' descrizione={descGranPa} foto={fotoGranPa} ></Gita>
        </div>  
    </div>        
              
  );
}