import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Bellunesi() {

    let fotoSassMura = []
    let foto1 = {path: 'bellunesi/SassDeMura01.jpg', desc: 'Verso cima Est'}
    let foto2 = {path: 'bellunesi/SassDeMura02.jpg', desc: 'Camino di II'}
    let foto3 = {path: 'bellunesi/SassDeMura03.jpg', desc: 'Piz de Sagron e Piz de Mez'}
    let foto4 = {path: 'bellunesi/SassDeMura04.jpg', desc: 'Parete iniziale'}
    let foto5 = {path: 'bellunesi/SassDeMura05.jpg', desc: 'Dal Pass de Mura'}
    let foto6 = {path: 'bellunesi/SassDeMura06.jpg', desc: 'L\'amico Damiano'}
    fotoSassMura.push(foto1)
    fotoSassMura.push(foto2)
    fotoSassMura.push(foto3)
    fotoSassMura.push(foto4)
    fotoSassMura.push(foto5)
    fotoSassMura.push(foto6)
  
    let descSassMura = `Si perviene a 
    forcella Neva senza Difficoltà. Presa la cresta verso il monte si supera 
    un intaglio (3m II-), poi lungamente con modesta pendenza fino alla 
    spalla che volge verso la parete sud (veduta della finestra). Qui si 
    prende una cengia verso sinistra che porta all'attacco. Si deve superare 
    una parete di 10m, verticale, roccia solida, II, un passo II+. Quindi 
    verso destra (sud) per cengia pochi metri, fino ad un camino (8m II- e 
    II). Piu' oltre lungo la cresta sud si deve superare una paretina di 5m 
    I+ e poi lungamente per cresta aerea, ma mai esposta, fino alla cima 
    (libretto in un contenitore metallico). La prosecuzione verso cima Est 
    e' sembrata molto delicata (osservando un alpinista che l'ha percorsa).`

    let foto3Pietre = []
    let foto7 = {path: 'bellunesi/3Pietre01.jpg', desc: 'Il Pizzocco'}
    let foto8 = {path: 'bellunesi/3Pietre02.jpg', desc: 'Casera Bosc dei Buoi'}
    foto3Pietre.push(foto7)
    foto3Pietre.push(foto8)
  
    let desc3Pietre = `Partiti dalle Marianne si sale verso il Palmar, lasciandolo pero' a sinistra per poi
    risalire in van erboso ripido che porta alla cresta del Cimone. Si giunge in
    cima senza difficolta' ma su pendenze rispettabili (1330 dislivello fin qui,
    2h e mezza). Poi in direzione del Tre Pietre per cresta senza difficolta'. Occorre perdere
    circa 100m sempre sul versante sud e poi si risale per facili canali misto
    erba-roccia. Ci si cala per 2m nel versante nord poco prima della vetta
    macchiata di mughi nei paraggi (3h e 10min). Grande visione su Pizzocco e
    Sass de Mura/Comedon. Il ritorno l'abbiam fatto seguendo la cresta verso
    ovest. Non lontano ancora dalla cima si scalano 5m di I fino un intaglio ove
    si trova un anello metallico che permette di far una calata di corda sui 7/8
    m della parete sottostante (altrimenti II e III in arrampicata).
    Altrenativamente si scende in piena esposizione sul versante nord per questi
    pochi metri (II-). Quindi si guadagna la forcella prativa con 3
    caratteristici gendarmi e poi a casera Bosc dei Buoi su traccia molto
    incerta tra mughi e faggeto. Per chiudere il giro siamo risaliti al Palmar e
    poi giu' alle Marianne tagliando nel bosco.`

    let fotoBocaRosp = []
    let foto9 = {path: 'bellunesi/BocaDelRosp_01.jpg', desc: 'Sulle loppe'}
    let foto10 = {path: 'bellunesi/BocaDelRosp_02.jpg', desc: 'In cima'}
    fotoBocaRosp.push(foto9)
    fotoBocaRosp.push(foto10)
  
    let descBocaRosp = `Abbiamo
    raggiunto la cima seguendo la cresta ovest dei pendii rivolti a sud. Si
    incontrano tratti alquanto ripidi, sui 45% che sconsigliano assolutamente
    la caduta. Personalmente nella discesa ho indossato i ramponi per un tratto.`

    let fotoBurel = []
    let foto11 = {path: 'bellunesi/cimaBurel01.jpg', desc: 'Ore 9 in cima al Burel'}
    let foto12 = {path: 'bellunesi/burel1.jpg', desc: 'Il Burel'}
    fotoBurel.push(foto11)
    fotoBurel.push(foto12)
  
    let descBurel = `Dal Bianchet, forcella del Balcon (tratti di I) poi attraverso ghiaioni al van del 
    Burel. Primo canalino a sx 4m con passaggio di II, poi traversata su 
    cengia e secondo canalino (I e 3m II), si esce in cresta prossimi alla 
    cima. A scendere risalita a forcella Sperti e poi ferrata Sperti fino al 
    VII Alpini.`

    let fotoFratta = []
    let foto13 = {path: 'bellunesi/frattaDelMoro01.jpg', desc: 'In vista del Burel'}
    let foto14 = {path: 'bellunesi/frattaDelMoro02.jpg', desc: 'Sulla cengia in Val Ru da Molin'}
    fotoFratta.push(foto13)
    fotoFratta.push(foto14)
  
    let descFratta = `Percorsa tutta Val Ru da Molin, poi a 
    destra verso il Forzelon. Giunti in vista dela forcella prima di 
    traversare un torrente si piega a sinistra. Salita molto faticosa, 
    ultimi 200m con neve alta. Visione paurosa dalla sommità est verso la 
    parete ovest del Burel e verso Val de Piero. La Val Ru da Molin 
    presenta una cengia molto aerea in alcuni tratti, e nella zona centrale 
    un paio di passaggi sempre su cengia abbastanza impegnativi per 
    l'esposizione.`

    let fotoNeva = []
    let foto15 = {path: 'bellunesi/MonteNeva-01.jpg', desc: 'Inizio del canale'}
    let foto16 = {path: 'bellunesi/MonteNeva-02.jpg', desc: 'Balze'}
    let foto17 = {path: 'bellunesi/MonteNeva-03.jpg', desc: 'Passo del gatto'}
    let foto18 = {path: 'bellunesi/MonteNeva-04.jpg', desc: 'Piz de Mez'}
    fotoNeva.push(foto15)
    fotoNeva.push(foto16)
    fotoNeva.push(foto17)
    fotoNeva.push(foto18)
    let descNeva = `Il percorso doveva essere 
    teoricamente segnato ma, pure avevo un ricordo di una deviazione 
    segnalata tornando dalla cima ovest del Sass de mura, proseguiamo troppo 
    oltre verso la forcella Neva senza trovare il punto di scarto. 
    Consultiamo la Tabacco e l'indicazione ci porta a ridiscendere un tratto 
    ed attaccare un ampio canalone senza traccia di passaggio/ometti. 
    Evitiamo un primo colatoio piuttosto ripido tenendoci sulle loppe alla 
    destra e poi traversiamo un 50m tra baranci per riportarci nel greto, 
    ora più abbordabile. L'idea che non possa essere la via normale di 
    salita prende corpo, nondimeno guadagniamo quota mirando alla forcella 
    che intaglia la cresta sommitale. Alcuni passaggi risultano un po' 
    scabrosetti con abbondante detrito sotto le suole (I, qualche passo I+). 
    Ad un possible bivio notiamo qualcosa somigliante ad un ometto giusto 
    all'uscita di un'esile cengetta (destra salendo). Superatala con passo 
    del gatto e bagnato, si accede velocemente alla calotta finale, dove 
    finalmente si torna in posizione bipede. Ancora una occhiata alla 
    cartina e ci convinciamo che deve esserci un altra via per scendere. 
    Infatti proseguendo in direzione ovest sulla cresta ci si trova subito a 
    percorrere una traccia di sentiero ben evidente. Il giro sarà quindi ad 
    anello, ma con una curva verso ovest molto più pronunciata di quella 
    indicata sulla Tabacco, per poi rientrare sul segnavia CAI in 
    corrispondenza della malga già incontrata all'andata.`

    let fotoCajada = []
    let foto19 = {path: 'bellunesi/pelfDaCajada.jpg', desc: 'Il Pelf da Cajada'}
    let foto20 = {path: 'bellunesi/moschesinDaCajada.jpg', desc: 'Moschesin/Pramper da Cajada'}
    fotoCajada.push(foto19)
    fotoCajada.push(foto20)
  
    let descCajada = `Arrivati fino nei pressi delle rampe finali. Ritirati per raffiche di 
    vento e pendio nevoso molto ripido con esposizione a nord (senza ramponi 
    e piccozza). A scendere percorso libero prima di arrivare alle selle di 
    Gravedel su erba bagnata e canali innevati.`

    let fotoPinei = []
    let foto21 = {path: 'bellunesi/pinei01.jpg', desc: 'Discesa attrezzata'}
    let foto22 = {path: 'bellunesi/pinei02.jpg', desc: 'Su placche'}
    fotoPinei.push(foto21)
    fotoPinei.push(foto22)
  
    let descPinei = `Da forcella Mompiana spostandosi verso il 
    Tiron si perviene ad un'ulteriore forcella da dove parte il troi de 
    panza (cartello in legno). Il percorso e' piuttosto selvaggio e segnato 
    a vernice gialla, ma richiede un po' di attenzione per non perdere la 
    traccia. Si devono effettuare parecchi sali-scendi e superare un tratto 
    attrezzato. Dopo 4 ore da forcella mompiana e superati alcuni passaggi 
    un po' esposti, ci siamo fermati in una delle svariate gole che 
    scendono dalle pale dei Pinei. Occorreva scendere una rampa molto ripida 
    e friabile senza alcuna possibilita' di assicurazione e con circa 100m 
    di salto sotto. Probabilmente affrontando il giro dal lato opposto si 
    alleviano le difficolta' (partendo dal VII Alpini). Al ritorno siamo 
    scesi direttamente per bosco in val d'Art, trovando una gola che ha 
    consentito di evitare dei salti rocciosi. Dieci ore di cammino quasi 
    ininterrotte.`

    let fotoPizzocco = []
    let foto23 = {path: 'bellunesi/pizocco01.jpg', desc: '3 Pietre'}
    let foto24 = {path: 'bellunesi/pizocco02.jpg', desc: 'Schiara'}
    fotoPizzocco.push(foto23)
    fotoPizzocco.push(foto24)
  
    let descPizzocco = `Saliti dalla chiesetta di S. Felice. Usciti dalle nuvole 
    quasi al rifugio Ere, poi giornata stupenda e visuale importante dalla 
    cima, con le Pale schierate a nord e tutta la val Belluna sotto di noi.`


return (
    <div className='row App'>
        <div className='col-sm-2 colLeft'>
        <Sidebar />
        </div>
        <div className='col-sm-10'>         
        <Gita title='Sass de Mura - Cima Ovest'  quota='2520m' dislivello='~1500m'  difficolta='II/II-'  descrizione={descSassMura}  foto={fotoSassMura} ></Gita>
        <Gita title='Monte Tre Pietre'  quota='1965m' dislivello='1670m'  difficolta='II-'  descrizione={desc3Pietre}  foto={foto3Pietre} ></Gita>
        <Gita title='Boca de Rosp'  quota='1635m' dislivello='600m'  difficolta='F-'  descrizione={descBocaRosp}  foto={fotoBocaRosp} ></Gita>
        <Gita title='Burel'  quota='2281m' dislivello='~1800m'  difficolta='I/II-/F+'  descrizione={descBurel}  foto={fotoBurel} ></Gita>
        <Gita title='Fratta del Moro'  quota='1673m' dislivello='1380m'  difficolta='EE'  descrizione={descFratta}  foto={fotoFratta} ></Gita>
        <Gita title='Monte Neva'  quota='2228m' dislivello='1110m'  difficolta='I+/EE'  descrizione={descNeva}  foto={fotoNeva} ></Gita>
        <Gita title='Tentativo al Zimon (Cajada)'  quota='1750m' dislivello='~700m'  difficolta='EE'  descrizione={descCajada}  foto={fotoCajada} ></Gita>
        <Gita title='Forcella Mompiana e troi de panza Gruppo della Schiara, pale dei Pinei - tentativo'  quota='~1700m' dislivello='~1400m'  difficolta='I+/II-'  descrizione={descPinei}  foto={fotoPinei} ></Gita>
        <Gita title='Pizzocco'  quota='2186m' dislivello='1350m'  difficolta='I+/II-'  descrizione={descPizzocco}  foto={fotoPizzocco} ></Gita>
        </div>  
    </div>        
    );
}