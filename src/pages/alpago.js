import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Alpago() {

    let fotoToffolon = []
    let foto1 = {path: 'alpago/antander01.jpg', desc: 'Bivacco Toffolon'}
    let foto2 = {path: 'alpago/antander02.jpg', desc: 'Duranno e Cima Preti'}
    let foto3 = {path: 'alpago/antander03.jpg', desc: 'Ultimi metri in cresta'}
    let foto4 = {path: 'alpago/antander04.jpg', desc: 'Pelmo'}
    fotoToffolon.push(foto1)
    fotoToffolon.push(foto2)
    fotoToffolon.push(foto3)
    fotoToffolon.push(foto4)

    let fotoColNudo = []
    let foto5 = {path: 'alpago/ColNudo01.jpg', desc: 'Cresta del Col Nudo'}
 
    fotoColNudo.push(foto5)

    return (
    <div className="App">
        <form id="upload_form2" action="/" method="POST" encType="multipart/form-data">
        <div className='row'>
        <div className='col-sm-2'>
        <Sidebar />
        </div>
        <div className='col-sm-10'>          
        <Gita title='Monte Antander'  quota='1987m' dislivello='920m'  difficolta='EE'  descrizione='Salita al bivacco Toffolon in Alpago.'  foto={fotoToffolon} ></Gita>
        <Gita title='Col Nudo'  quota='2472m' dislivello='1470m'  difficolta='EE'  descrizione='Percorso faticoso ed elemntare fino alla anticima'  foto={fotoColNudo} ></Gita>
        </div>  
        </div>        
        </form>       
    </div>
    );
}