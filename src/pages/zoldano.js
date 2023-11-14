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

  let fotoPramperet = []
  let foto5 = {path: 'zoldano/Pramperet_00.jpg', desc: 'Cadin di Cornia'}
  let foto6 = {path: 'zoldano/Pramperet_00b.jpg', desc: 'Accesso alla forcella tra Pramper e Pramperet'}
  let foto7 = {path: 'zoldano/Pramperet_01.jpg', desc: 'Tratto esposto in cengia'}
  let foto8 = {path: 'zoldano/Pramperet_02.jpg', desc: 'Su detriti'}
  let foto9 = {path: 'zoldano/Pramperet_03.jpg', desc: 'Uscita della cengia'}
  let foto10 = {path: 'zoldano/Pramperet_04.jpg', desc: 'In cresta tra massi instabili'}
  let foto11 = {path: 'zoldano/Pramperet_05.jpg', desc: 'Di ritorno sul tratto esposto'}
  let foto12 = {path: 'zoldano/Pramperet_06.jpg', desc: 'Pramper sullo sfondo'}
  fotoPramperet.push(foto5)
  fotoPramperet.push(foto6)
  fotoPramperet.push(foto7)
  fotoPramperet.push(foto8)
  fotoPramperet.push(foto9)
  fotoPramperet.push(foto10)
  fotoPramperet.push(foto11)
  fotoPramperet.push(foto12)

  let descPramperet = `Via normale al Pramperet.`

  let fotoToanella = []
  let foto13 = {path: 'zoldano/toanella01.jpg', desc: 'Sul ripido verso forc. Toanella'}
  let foto14 = {path: 'zoldano/toanella02.jpg', desc: 'Il canale da affrontare'}
  let foto15 = {path: 'zoldano/toanella03.jpg', desc: 'Gendarmi lungo la via di salita'}
  let foto16 = {path: 'zoldano/toanella04.jpg', desc: 'Verso gli Sfornioi'}
  fotoToanella.push(foto13)
  fotoToanella.push(foto14)
  fotoToanella.push(foto15)
  fotoToanella.push(foto16)

  let descToanella = `Escursione fantastica. Da Pontesei si punta al il rifugio Bosconero e oltrepassatolo si
  procede alla forcella della Toanella (m 2100 circa, 1300 dislivello). Da qui
  si scende verso destra, abbandonando subito il sentiero che porterebbe al
  Biv. Toanella, costeggiando le pareti ed ignorando un primo canale che sale
  alla cima. Si sceglie invece il secondo, prima largo e ghiaioso, poi per
  massi fino a che si stringe in un primo salto di 3m II-. La salita e' sempre
  avvincente con tratti discontinui di I e I+ sempre pero' chiusi nel canale.
  Ad una diramazione si segue per il ramo di sinistra, ometto alla base.
  Guadagnando quota, con difficolta' paragonabili, la roccia si fa
  moderatamente piu' friabile. Usciti su un'aerea forcelletta si prosegue per
  una cengia di una cinquantina di metri, stretta ed abbastanza esposta, in
  vista della cima. Qui il percorso si fa articolato per cenge ed occorre
  anche saltare su una spaccatura di circa 1m. Un ultimo canale porta alla
  cima (un passo breve di II in una strettoia) piuttosto esigua e
  frastagliata, con una visione a 360 gradi memorabile su dolomiti e prealpi
  bellunesi.`

  let fotoDenteFopa = []
  let foto17 = {path: 'zoldano/denteFopa01.jpg', desc: 'Il Moschesin'}
  let foto18 = {path: 'zoldano/denteFopa02.jpg', desc: 'Il Dente'}
  let foto19 = {path: 'zoldano/denteFopa03.jpg', desc: 'Biv. Carnielli'}
  let foto20 = {path: 'zoldano/denteFopa04.jpg', desc: 'Nel canale'}
  fotoDenteFopa.push(foto17)
  fotoDenteFopa.push(foto18)
  fotoDenteFopa.push(foto19)
  fotoDenteFopa.push(foto20)

  let descDenteFopa = `Si
  lascia l'auto in val Pramper al parcheggio a 1200m e si prende il ripido
  sentiero che va al biv. Carnielli. La nostra cima e' ben visibile col suo
  profilo triangolare a chiudere la valle verso est. Si perviene alla base
  della parete che porta al Carnielli (un passaggio di I un centinaio di
  metri piu' sotto). Si prende quindi una cengia verso destra che conduce
  all'imbocco del canalone alla sinistra del Dent dela Fopa. Subito occorre
  superare una difficolta' sul I+ o a sinistra scivolando su un masso lisciato
  o piu' a destra su paretina scalinata e poi cengetta friabile. Poi si risale
  lungamente il canale per massi senza difficolta' e, ad una biforcazione, si
  prende la strettoia di desta. Qui con qualche passo di I si perviene a un piccolo
  intaglio di forcella (alternativamente salire direttamente a destra per
  gradoni pochi metri prima della forcella (I+). La cima e' in vista sulla
  destra e la si raggiunge facilmente senza percorso obbligato, magari usando le mani su qualche placca appoggiata.
  Salita nel complesso abbordabile anche perche' breve, ma in ambiente
  abbastanza vergine una volta lasciato il sentiero che del biv. Carnielli. Bella
  visione d'infilata verso le cime che a sud-est vanno verso il Pramper e
  ottimo balcone panoramico per le pareti degli Spiz.`



return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
      <Sidebar />
        </div>
        <div className='col-sm-10'>          
        <Gita title='Cima delle Forzelete'  quota='2448m' dislivello='~1100m'  difficolta='I+'  descrizione={descForzelete}  foto={fotoForzelete} ></Gita>
        <Gita title='Pramperet'  quota='2337m' dislivello='1300m'  difficolta='II-/F+'  descrizione={descPramperet}  foto={fotoPramperet} ></Gita>
        <Gita title='Sasso di Toanella'  quota='2430m' dislivello='1720m'  difficolta='II-/F+'  descrizione={descToanella}  foto={fotoToanella} ></Gita>
        <Gita title='Dente de la Fopa'  quota='2161m' dislivello='960m'  difficolta='I+/F'  descrizione={descDenteFopa}  foto={fotoDenteFopa} ></Gita>
        </div>  
    </div>        
  );
}