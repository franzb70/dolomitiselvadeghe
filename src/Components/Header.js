import React from 'react'
import '../App.css'
import Logo from '../img/logo.jpg'

export default function Header() {

    return (
    <div className='row'>
        <div className='col-sm-12 App'>
            <a target="_blank" href="/"><img src={Logo} alt=''/></a>
        </div>  
    </div>
    );    
}
