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

return (
    <div className='row App'>
        <div className='col-sm-2 colLeft'>
        <Sidebar />
        </div>
        <div className='col-sm-10'>Bellunesi          
        <Gita title='Sass de Mura - Cima Ovest'  quota='2520m' dislivello='~1500m'  difficolta='II/II-'  descrizione={descSassMura}  foto={fotoSassMura} ></Gita>
        </div>  
        </div>        
    );
}