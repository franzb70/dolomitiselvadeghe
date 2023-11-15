//import useState hook to create menu collapse state
import React from "react";
import { NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../App.css";
import VD from '../img/vd.jpg'

const Sidebar = () => {

    let largeScreen = true
    if (window.innerWidth < 1200)
        largeScreen = false
    
    let disclaimer = `Questo il libro per voi...se vi piace il nostro approccio alla montagna`
    return (
    <>
      <div className={`${'itemLeft'} ${largeScreen ? 'sidebar' : ''}`}>
          <div className="logotext">
              <p></p>
              <a target="_blank" href="http://www.vividolomiti.it/pubblicazioni/wild-dolomiti-3-detail" rel="noreferrer">
		        <img src={VD} alt=''></img></a>
                <p className='textLogo'>{disclaimer}</p>
           </div>
          <nav className="navbar">
            <div>
                <ul className={`navbar-nav mr-auto`}>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/alpago">Alpago</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/cadore">Cadore</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/carniche">Alpi Carniche</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/giulie">Alpi Giulie</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/oltrepiave">Oltre Piave</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/pale">Pale di San Martino</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/zoldano">Zoldano</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/bellunesi">Dolomiti Bellunesi</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/brenta">Dolomiti di Brenta</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/fassa">Fassa e Marmolada</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink className={`${'btn'} ${'btn-primary'} ${'buttonSide'}`} to="/varie">Varie</NavLink>
                    </li>
                </ul>
            </div>
        </nav> 
      </div>
    </>
  );
};

export default Sidebar;