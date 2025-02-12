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

  let fotoBeccoFiladonna = []
  let foto7 = {path: 'varie/BeccoFiladonna01.jpg', desc: 'Sentiero di salita dopo il rif. Casarota'}
  let foto8 = {path: 'varie/BeccoFiladonna02.jpg', desc: 'In vista del cocuzzolo terminale'}
  let foto9 = {path: 'varie/BeccoFiladonna03.jpg', desc: 'Croce e placca di vetta'}
  let foto10 = {path: 'varie/BeccoFiladonna04.jpg', desc: 'Scheletri...'}
  fotoBeccoFiladonna.push(foto7)
  fotoBeccoFiladonna.push(foto8)
  fotoBeccoFiladonna.push(foto9)
  fotoBeccoFiladonna.push(foto10)  
  let descBeccoFiladonna = `Partenza dal ristorante Sindech, passando per il Rif. Casarota.`

  let fotoSassBrusai = []
  let foto11 = {path: 'varie/SassBrusai_01.jpg', desc: 'Il M. Boccaor'}
  let foto12 = {path: 'varie/SassBrusai_02.jpg', desc: 'Ponte tibetano'}
  fotoSassBrusai.push(foto11)
  fotoSassBrusai.push(foto12)  
  let descSassBrusai = `Abbiamo
  raggiunto la cima per la ferrata del Sass Brusai. Si arriva all'attacco dopo
  circa 500m di dislivello per bosco anche ripido. C'e' un primo strappo quasi
  verticale di circa 20m abbastanza impegnativo. Poi la ferrata e' piuttosto
  discontinua con tratti di sentiero e altri elementari, ma si incontrano pur
  tuttavia dei passaggi ancora impegnativi ma brevi. Poco prima della cima si
  passa sulla carrareccia che va verso cima grappa attraversando un ponte
  tibetano sospeso della lunghezza di circa 8m. Percorso attrezzato nel
  complesso da non sottovalutare visto anche lo sviluppo.`

  let fotoCornetto = []
  let foto13 = {path: 'varie/cornetto01.jpg', desc: 'Cornetto dalla cima del Baffelan'}
  let foto14 = {path: 'varie/cornetto02.jpg', desc: 'Parapendii verso il Baffelan'}
  let foto15 = {path: 'varie/cornetto03.jpg', desc: 'Gruppo del Carega verso ovest'}
  fotoCornetto.push(foto13)
  fotoCornetto.push(foto14)
  fotoCornetto.push(foto15)  
  let descCornetto = `Le difficoltà sono concentrate nella breve normale al Baffelan, con alcune balze di I/I+ ed un movimento (passaggio chiave) di II.`

  return (
    <div className='row App'>
    <div className='col-sm-2 colLeft'>
      <Sidebar />
        </div>
        <div className='col-sm-10'>          
        <span id="1"></span>
        <Gita title='Gran Paradiso' quota='4061m' dislivello='780+1350m' difficolta='EE/F' descrizione={descGranPa} foto={fotoGranPa} ></Gita>
        <span id="2"></span>
        <Gita title='Becco di Filadonna' quota='2.150m' dislivello='1150m' difficolta='EE' descrizione={descBeccoFiladonna} foto={fotoBeccoFiladonna} ></Gita>
        <span id="3"></span>
        <Gita title='Sass Brusai' quota='1532m' dislivello='950m' difficolta='EEA' descrizione={descSassBrusai} foto={fotoSassBrusai} ></Gita>
        <span id="4"></span>
        <Gita title='Baffelan / Cornetto' quota='1793/1899m' dislivello='750m' difficolta='II-/F+' descrizione={descCornetto} foto={fotoCornetto} ></Gita>
        </div>  
    </div>        
              
  );
}