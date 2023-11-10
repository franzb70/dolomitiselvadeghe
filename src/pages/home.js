import React from 'react'
import Sidebar from '../Components/Sidebar'
import '../App.css';

export default function home() {

return (
  <div className='row App'>
    <div className={`${'col-sm-2'} ${'colLeft'}`}>
          <Sidebar />
        </div>
        <div className='col-sm-10 pictureHome'>
        <img src={require('../img/zoldano/pelmetto.jpg')} alt='Palafavera dal Pelmetto'/>
        </div>  
    </div>                      
  );
}