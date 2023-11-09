import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Zoldano() {

  let fotoForzelete = []
  let foto1 = {path: 'zoldano/forzelete-01.jpg', desc: 'Il canale giusto'}
  let foto2 = {path: 'zoldano/forzelete-02.jpg', desc: 'Su ghiaione ripido'}
  let foto3 = {path: 'zoldano/forzelete-03.jpg', desc: 'La Gardesana dalla vetta'}
  let foto4 = {path: 'zoldano/forzelete-04.jpg', desc: 'Passo esposto in vetta'}
  fotoForzelete.push(foto1)
  fotoForzelete.push(foto2)
  fotoForzelete.push(foto3)
  fotoForzelete.push(foto4)

  let descForzelete = `Da Ponte di Caleda si segue il sentiero diretto al Pramperet fino ad evidente segnalazione a sinistra per F.lla Larga (di Moschesin), 1h circa. 
  Risalire faticosamente tutto il ghiaione, tenendosi prevalentemente sulla destra negli ultimi 100m, 1h circa. 
  Da qui si attacca decisamente il ghiaione a sinistra che scende dalle Forzelete. Si prosegue duramente accanto alla barriera rocciosa fin quando si apre una conca. 
  A questo punto NON bisogna seguire troppo a sinistra la prosecuzione del ghiaione e NON bisogna puntare troppo a destra una evidente forcella che porterebbe verso il van del Tamer. 
  Il canale giusto e quello centrale, spostato leggermente a sinistra, roccioso fin dalla base. 
  Raggiunto l'attacco si risale il canale: due alternative, tutto a sinistra per terriccio ripido adiacente le rocce, oppure verso destra con facili passi di I grado. 
  In pochi minuti si raggiunge lo stretto intaglio di forcella da dove si attacca la breve via normale, 0,45h da F.lla Larga. 
  Superato un muretto iniziale si aggira verso sinistra un'anticima fino in vista del conoide detritico finale che si risale su traccia mantenendosi al centro, lontani dall'esposizione. 
  Preoccupano un po' gli ultimi metri, aggirando a destra il blocco di vetta, dovendo passare in esposizione su terreno ripido. Conviene stare ben attaccati alla roccia, I. 
  La vetta e' molto stretta, ci stanno al massimo 3/4 persone. Discesa per la stessa via, senza 
  possibilità di guadagnare gran che sul tempo di salita (poco meno di 6h complessive).`


return (
    <div className="App">
      <form id="upload_form2" action="/" method="POST" encType="multipart/form-data">
      <div className='row'>
        <div className='col-sm-2'>
          <Sidebar />
        </div>
        <div className='col-sm-10'>          
        <Gita title='Cima delle Forzelete'  quota='2448m' dislivello='~1100m'  difficolta='I+'  descrizione={descForzelete}  foto={fotoForzelete} ></Gita>
        </div>  
      </div>        
      </form>         
    </div>
    );
}