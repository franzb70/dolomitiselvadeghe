import React from "react";
import { NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import "react-pro-sidebar/dist/css/styles.css";
import "../App.css";
import VD from '../img/vd.jpg'
import Logo from '../img/logo.jpg'
import { Mail } from 'react-feather'


const Sidebar = () => {

    let largeScreen = true
    if (window.innerWidth < 1200)
        largeScreen = false
    
    let disclaimer = `Questo il libro per voi...se vi piace il nostro approccio alla montagna`
    return (
    <>
      <div className={`${'itemLeft'} ${'App'} ${largeScreen ? 'sidebar' : ''}`}>
      <a href="/"><img src={Logo} alt='Dolomiti Selvadeghe...ma non solo!'/></a>

          <div className="logotext">
              <p></p>
              <a target="_blank" href="http://www.vividolomiti.it/pubblicazioni/wild-dolomiti-3-detail" rel="noreferrer">
		        <img src={VD} alt='ViviDolomiti'></img></a>
                <p className='textLogo'>{disclaimer}</p>
           </div>
          <nav className="navbar">
            <div className="textCenter">
                <ul className={`navbar-nav mr-auto`}>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/alpago">Alpago</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/cadore">Cadore/Comelico</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/oltrepiave">Dolomiti d'Oltre Piave</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/pale">Pale di San Martino</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/zoldano">Zoldano/Agordino</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/bellunesi">Dolomiti Bellunesi</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/fassa">Fassa/Badia/Gardena</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/brenta">Dolomiti di Brenta</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/giulie">Alpi Giulie e Carniche</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/varie">Varie</NavLink>
                    </li><p></p>
                    <li>
                        <a href="mailto:franzb70@gmail.com"><Mail/></a>
                    </li>
                </ul>
            </div>
        </nav> 
      </div>
    </>
  );
};

export default Sidebar;