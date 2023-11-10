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


return (
    <div className='row App'>
        <div className='col-sm-2 colLeft'>
        <Sidebar />
        </div>
        <div className='col-sm-10'>         
        <Gita title='Sass de Mura - Cima Ovest'  quota='2520m' dislivello='~1500m'  difficolta='II/II-'  descrizione={descSassMura}  foto={fotoSassMura} ></Gita>
        <Gita title='Monte Tre Pietre'  quota='1965m' dislivello='1670m'  difficolta='II-'  descrizione={desc3Pietre}  foto={foto3Pietre} ></Gita>
        <Gita title='Boca de Rosp'  quota='1635m' dislivello='600m'  difficolta='F-'  descrizione={descBocaRosp}  foto={fotoBocaRosp} ></Gita>
        </div>  
        </div>        
    );
}