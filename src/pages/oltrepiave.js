import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Oltrepiave() {

  let fotoEmilia = []
  let foto1 = {path: 'oltrepiave/CimaEmilia01.jpg', desc: 'Ghiaione di Forc. Montanaia'}
  let foto2 = {path: 'oltrepiave/CimaEmilia02.jpg', desc: 'Il Campanile'}
  let foto3 = {path: 'oltrepiave/CimaEmilia03.jpg', desc: 'Sulla normale'}
  let foto4 = {path: 'oltrepiave/CimaEmilia04.jpg', desc: 'Cima Both e il Cridola'}
  fotoEmilia.push(foto1)
  fotoEmilia.push(foto2)
  fotoEmilia.push(foto3)
  fotoEmilia.push(foto4)

  let descEmilia = `Dal rif. Padova a forcella Montanaia (1050m dislivello). Si scende tenendo
  la destra, tracce alla base di Cima Both, fino alla forcella del campanile.
  Qui si prende la cresta nord superando con facili passaggi di
  arrampicata dei saliscendi (passaggi I, esposto in un caso). Percorsa una
  cengia sul versante del campanile si attacca la parete nord-est, salendo per
  una settantina di metri, I abbastanza continuo, alquanto detritico che
  richiede attenzione per la movimentazione di sassi. Si esce su una spalla
  per proseguire in direzione sud per facili creste e canalini fino a
  sbucare nella strettissima sommita' che offre una visuale ottima sul
  circondario degli Spalti di toro-Monfalconi. Cima nel complesso abbastanza
  selvaggia, benche' piuttosto frequentata.`

  let fotoBortolusc = []
  let foto5 = {path: 'oltrepiave/bortolusc_01.jpg', desc: 'Forcella delle Pregoane'}
  let foto6 = {path: 'oltrepiave/bortolusc_02.jpg', desc: 'Canale sbagliato'}
  let foto7 = {path: 'oltrepiave/bortolusc_03.jpg', desc: 'Facili balze rocciose'}
  let foto8 = {path: 'oltrepiave/bortolusc_04.jpg', desc: 'Gendarmi'}
  let foto9 = {path: 'oltrepiave/bortolusc_05.jpg', desc: 'Canale Fradeloni'}
  let foto10 = {path: 'oltrepiave/bortolusc_06.jpg', desc: 'Passaggio II-'}
  let foto11 = {path: 'oltrepiave/bortolusc_07.jpg', desc: 'Laste'}
  let foto12 = {path: 'oltrepiave/bortolusc_08.jpg', desc: 'Ciol in discesa'}
  fotoBortolusc.push(foto5)
  fotoBortolusc.push(foto6)
  fotoBortolusc.push(foto7)
  fotoBortolusc.push(foto8)
  fotoBortolusc.push(foto9)
  fotoBortolusc.push(foto10)
  fotoBortolusc.push(foto11)
  fotoBortolusc.push(foto12)

  let descBortolusc = `Via normale.`

  let fotoVacalizza = []
  let foto13 = {path: 'oltrepiave/vacalizza00.JPG', desc: 'Forcella in lontananza'}
  let foto14 = {path: 'oltrepiave/vacalizza01.JPG', desc: 'Vetta'}
  let foto15 = {path: 'oltrepiave/vacalizza02.JPG', desc: 'Contrapposta Torre Vacalizza'}
  let foto16 = {path: 'oltrepiave/vacalizza03.JPG', desc: 'Cengetta solida'}
  let foto17 = {path: 'oltrepiave/vacalizza04.JPG', desc: 'Cima dei Vieres'}
  let foto18 = {path: 'oltrepiave/vacalizza05.JPG', desc: 'Sua maestà e la Regina'}
  let foto19 = {path: 'oltrepiave/vacalizza06.JPG', desc: 'Muretto iniziale di III'}
  let foto20 = {path: 'oltrepiave/vacalizza07.JPG', desc: 'Cresta in discesa'}
  fotoVacalizza.push(foto13)
  fotoVacalizza.push(foto15)
  fotoVacalizza.push(foto16)
  fotoVacalizza.push(foto17)
  fotoVacalizza.push(foto14)
  fotoVacalizza.push(foto18)
  fotoVacalizza.push(foto20)
  fotoVacalizza.push(foto19)

  let descVacalizza = `Cima isolata in ambiente 
  selvaggio, nonostante il percorso sia segnalato da sbiaditi bolli rossi 
  fino all'anticima principale. Impegno ai limiti dell'escursionismo, con 
  un salto di 5m di III- obbligatorio e 3 brevi tratti di II anche molto 
  esposti nella cresta finale. Salita grandiosa, in grado di appagare i 
  più esigenti amanti del genere.`

  let fotoCimaToro = []
  let foto31 = {path: 'oltrepiave/toro00.JPG', desc: 'Attacco della via per prendere la cengia'}
  let foto21 = {path: 'oltrepiave/toro01.JPG', desc: 'Inizio della cengia'}
  let foto22 = {path: 'oltrepiave/toro02.JPG', desc: 'Piccola interruzione'}
  let foto23 = {path: 'oltrepiave/toro02b.JPG', desc: 'Verso Punta Pia'}
  let foto24 = {path: 'oltrepiave/toro03.JPG', desc: 'Attacco della parete'}
  let foto25 = {path: 'oltrepiave/toro04.JPG', desc: 'Da secondo...'}
  let foto26 = {path: 'oltrepiave/toro05.JPG', desc: 'Sull\'articolata parete sud'}
  let foto27 = {path: 'oltrepiave/toro06.JPG', desc: 'Ultimi 20m di II'}
  let foto28 = {path: 'oltrepiave/toro07.JPG', desc: 'Pareva più facile...'}
  let foto29 = {path: 'oltrepiave/toro08.JPG', desc: 'In discesa su placchette'}
  let foto30 = {path: 'oltrepiave/toro09.JPG', desc: 'Campanile di Val Montanaia'}
  fotoCimaToro.push(foto31)
  fotoCimaToro.push(foto21)
  fotoCimaToro.push(foto22)
  fotoCimaToro.push(foto23)
  fotoCimaToro.push(foto24)
  fotoCimaToro.push(foto25)
  fotoCimaToro.push(foto26)
  fotoCimaToro.push(foto27)
  fotoCimaToro.push(foto28)
  fotoCimaToro.push(foto29)
  fotoCimaToro.push(foto30)

  let descCimaToro = `Stupenda Cima, la maggiore tra gli Spalti di Toro, affiancata a sud dalla sinuosa Punta Pia. Dal Biv. Perugini 
  si prende il sentiero diretto a forcella segnata e lo si abbandona poche decine di metri prima della stessa piegando a 
  sinistra per uno scosceso canale. Superate alcune strettoie e dei saliscendi si attacca la normale sotto la cengia principale, 
  che si guadagna scalando con attenzione 10m appoggiati con detrito (I delicato). La cengia avvolge tutto il versante est e sud del monte, 
  senza particolari difficoltà, dovendo scendere in arrampicata per qualche metro poco prima dell'attacco, già in vista di Punta Pia. 
  La via si svolge con alcuni tiri di corda, inizialmente II poi I su gradoni verso sinistra, quindi sormontando il passaggio chiave, 
  4m III strapiombante. Si prosegue quindi per facili gradoni detritici fino sotto la torretta finale, 
  che si scala con un breve tiro di 15/20m sul II grado. Discesa seguendo la via di salita con alcune doppie nei punti verticali.`



return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
      <Sidebar />
        </div>
        <div className='col-sm-10'>          
        <Gita title='Cima Emilia'  quota='2369m' dislivello='~1300m'  difficolta='I+'  descrizione={descEmilia}  foto={fotoEmilia} ></Gita>
        <Gita title='Cima di Bortolusc'  quota='2160m' dislivello='1150m'  difficolta='I+/II-'  descrizione={descBortolusc}  foto={fotoBortolusc} ></Gita>
        <Gita title='Cima Vacalizza'  quota='2266m' dislivello='1650m'  difficolta='III-/II/PD+'  descrizione={descVacalizza}  foto={fotoVacalizza} ></Gita>
        <Gita title='Cima Toro'  quota='2355m' dislivello='1250m'  difficolta='II/II+/PD+'  descrizione={descCimaToro}  foto={fotoCimaToro} ></Gita>
        </div>  
    </div>                   
  );
}