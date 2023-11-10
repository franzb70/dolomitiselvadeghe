import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Fassa() {

  
  let fotoTooreNord = []
  let foto1 = {path: 'fassa/TorreNordVajolet_01.jpg', desc: 'In vista della cengia'}
  let foto2 = {path: 'fassa/TorreNordVajolet_02.jpg', desc: 'All\'attacco del canale'}
  let foto3 = {path: 'fassa/TorreNordVajolet_03.jpg', desc: 'Cengia, verso Bolzano'}
  let foto4 = {path: 'fassa/TorreNordVajolet_04.jpg', desc: 'Forcella Nord'}
  let foto5 = {path: 'fassa/TorreNordVajolet_05.jpg', desc: 'Croda di Re Laurino'}
  let foto6 = {path: 'fassa/TorreNordVajolet_06.jpg', desc: 'Passaggio sulla normale'}
  let foto7 = {path: 'fassa/TorreNordVajolet_07.jpg', desc: 'Sotto il masso incastrato'}
  let foto8 = {path: 'fassa/TorreNordVajolet_08.jpg', desc: 'Cengia da Forc. Nord'}
  let foto9 = {path: 'fassa/TorreNordVajolet_09.jpg', desc: 'Verso sud dalla cima'}
  let foto10 = {path: 'fassa/TorreNordVajolet_10.jpg', desc: 'Catinaccio d\'Antermoia'}
  fotoTooreNord.push(foto1)
  fotoTooreNord.push(foto2)
  fotoTooreNord.push(foto3)
  fotoTooreNord.push(foto4)
  fotoTooreNord.push(foto5)
  fotoTooreNord.push(foto6)
  fotoTooreNord.push(foto7)
  fotoTooreNord.push(foto8)
  fotoTooreNord.push(foto9)
  fotoTooreNord.push(foto10)

  let descTooreNord = `Via normale Torre nord del Vajolet da Gardeccia.`


return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
          <Sidebar />
        </div>
        <div className='col-sm-10'>          
        <Gita title='Torre Nord del Vajolet'  quota='2810m' dislivello='~900m'  difficolta='II-'  descrizione={descTooreNord}  foto={fotoTooreNord} ></Gita>
        </div>  
    </div>                   
  );
}