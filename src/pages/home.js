import React from 'react'
import Sidebar from '../Components/Sidebar'
import '../App.css'

export default function home() {

  let largeScreen = true
  if (window.innerWidth < 1200)
      largeScreen = false

return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
      <Sidebar />
    </div>
    <div className='col-sm-10 pictureHome'>
      <img src={require('../img/zoldano/pelmetto.jpg')} alt='Palafavera dal Pelmetto' className={`${largeScreen ? '' : 'pictureResize'}`}/>
    </div>  
  </div>                      
  );
}