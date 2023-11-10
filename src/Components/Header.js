import React from 'react'
import '../App.css';
import Logo from '../img/logo.jpg'

export default function Header() {

    return (
        <div>
            <div className='row App'>
                <div className='col-sm-12'>
                <img src={Logo} alt=''/>
                </div>  
            </div>
        </div>
    );    
}
