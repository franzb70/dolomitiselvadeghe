import React from 'react'
import Sidebar from '../Components/Sidebar'
import '../App.css';

export default function home() {

return (
    <div className="App">
      <form id="upload_form2" action="/" method="POST" encType="multipart/form-data">
      <div className='row'>
        <div className='col-sm-2'>
          <Sidebar />
        </div>
        <div className='col-sm-10'>
        <img src={require('../img/zoldano/pelmetto.jpg')} alt='Palafavera dal Pelmetto'/>
        </div>  
      </div>        
      </form>         
    </div>
  );
}