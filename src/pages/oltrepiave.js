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
  Qui si prende la cresta&nbsp;nord superando con facili passaggi di
  arrampicata dei saliscendi (passaggi I, esposto in un caso). Percorsa una
  cengia sul versante del campanile si attacca la parete nord-est, salendo per
  una settantina di metri, I abbastanza continuo, alquanto detritico che
  richiede attenzione per la movimentazione di sassi. Si esce su una spalla
  per proseguire in direzione sud per facili creste&nbsp; e canalini fino a
  sbucare nella strettissima sommita' che offre una visuale ottima sul
  circondario degli Spalti di toro-Monfalconi. Cima nel complesso abbastanza
  selvaggia, benche' piuttosto frequentata.`

return (
    <div className="App">
      <form id="upload_form2" action="/" method="POST" encType="multipart/form-data">
      <div className='row'>
        <div className='col-sm-2'>
          <Sidebar />
        </div>
        <div className='col-sm-10'>          
        <Gita title='Cima Emilia'  quota='2369m' dislivello='~1300m'  difficolta='I+'  descrizione={descEmilia}  foto={fotoEmilia} ></Gita>
        </div>  
      </div>        
      </form>        
    </div>
    );
}