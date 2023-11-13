import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Alpago() {

    let fotoAntander = []
    let foto1 = {path: 'alpago/antander01.jpg', desc: 'Bivacco Toffolon'}
    let foto2 = {path: 'alpago/antander02.jpg', desc: 'Duranno e Cima Preti'}
    let foto3 = {path: 'alpago/antander03.jpg', desc: 'Ultimi metri in cresta'}
    let foto4 = {path: 'alpago/antander04.jpg', desc: 'Pelmo'}
    fotoAntander.push(foto1)
    fotoAntander.push(foto2)
    fotoAntander.push(foto3)
    fotoAntander.push(foto4)
    let descAntander = `Prima del 
    biv.Toffolon si prende l'ampio ghiaione sulla sinistra. Si risale fino 
    in cresta, puntando leggermente a destra della cima per ripidi pendii 
    erbosi intervallati da qualche roccetta. Poi brevemente in cima sulla 
    cresta (50m). Salita facile ma incontaminata. Qualche passaggio di I 
    grado evitabile.`

    let fotoColNudo = []
    let foto5 = {path: 'alpago/ColNudo01.jpg', desc: 'Cresta del Col Nudo'}
    fotoColNudo.push(foto5)
    let descColNudo = `Percorso faticoso ed elementare sino all'anticima. Dopo bisogna 
    percorrere un centinaio di metri in cresta (roccia martoriata dai 
    fulmini). C'e' un passaggio di 3m da fare in arrampicata scendendo in 
    una fessura (I+) e dopo la cresta presenta tratti aerei con in 
    particolare un passaggio alquanto esposto (sconsigliabile a chi soffre 
    di vertigini).`

    let fotoColombera = []
    let foto6 = {path: 'alpago/Colombera01.jpg', desc: 'Da casera Palantina'}
    let foto7 = {path: 'alpago/Colombera02.jpg', desc: 'Verso il Cavallo'}
    fotoColombera.push(foto6)
    fotoColombera.push(foto7)
    let descColombera = `Percorso elementare, Tentativo di cresta nord verso il Cimon di Palantina.
    Tornato indietro a metà perchè troppo esposta da farsi in solitaria.`

    let fotoSestier = []
    let foto8 = {path: 'alpago/Sestier_2012-a.jpg', desc: 'Discesa dal Sestier'}
    let foto9 = {path: 'alpago/Sestier_2012-b.jpg', desc: 'Cresta affilata'}
    let foto10 = {path: 'alpago/Sestier_2012-c.jpg', desc: 'Vento che spazza'}
    let foto11 = {path: 'alpago/Sestier_2012-d.jpg', desc: 'Alta via Nr 7'}
    fotoSestier.push(foto8)
    fotoSestier.push(foto9)
    fotoSestier.push(foto10)
    fotoSestier.push(foto11)

    let descSestier = `Da Malga Cate si percorre 
    tutta la lunga Val Salatis, puntando la testata a destra del Monte 
    Sestier. Si abbandona quindi il sentiero che conduce al Rif. Semenza e, 
    attraversando anche un po' di mughi, si perviene 
    in cresta incrociando l'Alta via Nr 7. Si prosegue in direzione nord 
    ovest, abbassandosi ove la cresta non risulta percorribile. Si raggiunge 
    così in breve la sommità arrotondata del Sestier. La discesa diventa più 
    interessante, con tratti di cresta veramente affilati. Necessaria 
    attenzione e condizioni meteo buone.`

    let fotoTeverone = []
    let foto12 = {path: 'alpago/teverone01.jpg', desc: 'Attraversamento di nevaio'}
    let foto13 = {path: 'alpago/teverone02.jpg', desc: 'Ultimi metri'}
    fotoTeverone.push(foto12)
    fotoTeverone.push(foto13)
    let descTeverone = `Molto faticoso. Sbagliato percorso dopo la prima ripida 
    pala boschiva, abbiamo seguito vecchi bolli rossi verso sinistra 
    fermandoci dopo 50m. Seguire segnavia bianco-rossi verso destra.`

    let fotoVenal = []
    let foto14 = {path: 'alpago/Venal01.jpg', desc: 'Carcassa in cima al Venal'}
    fotoVenal.push(foto14)
    let descVenal = `Elegante cima a 
    nord di Messer e Antander. Dall'alta via N.6 ci si stacca in 
    corrispondenza di un canale erboso che appare facilmente percorribile. 
    Si perviene in cima dopo circa 250md con nessuna difficolta', prestando 
    pero' attenzione alle &quot;loppe&quot; ripide pensili sopra i saltini rocciosi 
    appena aggirati.`

    let fotoCresteColNudo = []
    let foto15 = {path: 'alpago/CresteColNudo01.jpg', desc: 'Il Teverone tra le nuvole'}
    let foto16 = {path: 'alpago/CresteColNudo03.jpg', desc: 'Parete ovest del Col Nudo'}
    fotoCresteColNudo.push(foto15)
    fotoCresteColNudo.push(foto16)
    let descCresteColNudo = `Dal parcheggio del rifugio Dolomieu al Dolada si prende 
    il sentiero naturalistico in direzione nord-est. Prima del Col Mat si 
    guadagna la cresta che si segue su sentiero segnato (alta via Nr. 6). 
    Abbiamo evitato di salire il Cimon di Basilighe prediligendo le ultime 
    due cime prima della forcella bassa del Col Nudo (discesa un po' 
    avventurosa da cima Secca alla forcella stessa). Impressionanti visioni 
    sulla maestosa parete ovest del Col Nudo e sulle cime di Pino. Quindi 
    rientro interminabile per la normale del Col Nudo fino in Carota 
    (usare 2 auto!).`

    return (
        <div className='row App'>
            <div className='col-sm-2 colLeft'>
            <Sidebar />
            </div>
            <div className='col-sm-10'>          
            <Gita title='Monte Antander'  quota='1987m' dislivello='920m'  difficolta='EE'  descrizione={descAntander}  foto={fotoAntander} ></Gita>
            <Gita title='Col Nudo'  quota='2472m' dislivello='1470m'  difficolta='EE'  descrizione={descColNudo}   foto={fotoColNudo} ></Gita>
            <Gita title='Colombera'  quota='2066m' dislivello='~900m'  difficolta='EE'  descrizione={descColombera}  foto={fotoColombera} ></Gita>
            <Gita title='Monte Sestier'  quota='2084m' dislivello='1200m'  difficolta='EE'  descrizione={descSestier}  foto={fotoSestier} ></Gita>
            <Gita title='Monte Teverone'  quota='2328m' dislivello='1300m'  difficolta='EE'  descrizione={descTeverone}  foto={fotoTeverone} ></Gita>
            <Gita title='Monte Venal'  quota='2212m' dislivello='1070m'  difficolta='EE'  descrizione={descVenal}  foto={fotoVenal} ></Gita>
            <Gita title='Col Mat / Cima sora il Ciot / Cima Secca'  quota='1981/2318/2350m' dislivello='~1300m'  difficolta='EE'  descrizione={descCresteColNudo}  foto={fotoCresteColNudo} ></Gita>
            </div>  
        </div>         
    );
}