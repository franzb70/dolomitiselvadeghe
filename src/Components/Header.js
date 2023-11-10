import React from 'react'
import '../App.css';

export default function Header() {

    return (
        <div>
            <div className='row App'>
                <div className='col-sm-12'>
                    <img src={require('../img/logo.jpg')} alt='Logo'/>
                </div>  
            </div>
        </div>
    );    
}
