import React from 'react'
import '../App.css'
import Logo from '../img/logo.jpg'

export default function Header() {

    return (
    <div className='row header'>
        <div className='col-sm-2'></div>
        <div className='col-sm-10'>
            <a href="/"><img src={Logo} alt='Dolomiti Selvadeghe...ma non solo!'/></a>
        </div>  
    </div>
    );    
}
