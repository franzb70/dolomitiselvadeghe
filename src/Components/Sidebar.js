//import useState hook to create menu collapse state
import React from "react";
import { NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../App.css";
import Logo from '../img/Pale.jpg'
import VD from '../img/vd.jpg'

const Sidebar = () => {

  return (
    <>
      <div className="itemLeft">
          <div className="logotext">
              <p></p>
              <p><img src={Logo} alt=''/></p>
              <p className='textGita'>Se vi piace il nostro approccio alla montagna acquistate il libro</p>
              <a target="_blank" href="http://www.vividolomiti.it/pubblicazioni/wild-dolomiti-3-detail" rel="noreferrer">
		        <img src={VD} alt=''></img></a>
            </div>
          <nav className={`navbar`}>
            <div>
                <ul className={`navbar-nav mr-auto`}>
                    <li className={`nav-item active`}>
                        <NavLink id="home" className={`${'btn'} ${'buttonSide'} ${'btn-secondary'}`} to="/alpago">Alpago</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink id="loadlog" className={`${'btn'} ${'btn-secondary'} ${'buttonSide'}`} to="/cadore">Cadore</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink id="requestlog" className={`${'btn'} ${'btn-secondary'} ${'buttonSide'}`} to="/carniche">Alpi Carniche</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink id="requestlog" className={`${'btn'} ${'btn-secondary'} ${'buttonSide'}`} to="/giulie">Alpi Giulie</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink id="runtest" className={`${'btn'} ${'btn-secondary'} ${'buttonSide'}`} to="/oltrepiave">Oltre Piave</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink id="runtest" className={`${'btn'} ${'btn-secondary'} ${'buttonSide'}`} to="/pale">Pale di San Martino</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink id="runtest" className={`${'btn'} ${'btn-secondary'} ${'buttonSide'}`} to="/zoldano">Zoldano</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink id="runtest" className={`${'btn'} ${'btn-secondary'} ${'buttonSide'}`} to="/bellunesi">Dolomiti Bellunesi</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink id="runtest" className={`${'btn'} ${'btn-secondary'} ${'buttonSide'}`} to="/brenta">Dolomiti di Brenta</NavLink>
                    </li><p></p>
                    <li className={`nav-item active`}>
                        <NavLink id="runtest" className={`${'btn'} ${'btn-secondary'} ${'buttonSide'}`} to="/fassa">Fassa e Marmolada</NavLink>
                    </li>
                </ul>
            </div>
        </nav> 
      </div>
    </>
  );
};

export default Sidebar;