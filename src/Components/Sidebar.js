import React from "react";
import { NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import "react-pro-sidebar/dist/css/styles.css";
import "../App.css";
import VD from '../img/vd.jpg'
import Logo from '../img/logo.jpg'
import { Mail } from 'react-feather'
import { Search } from 'react-feather'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

const StyledSearch = styled.button`
  position: absolute;
  top: -5%;
  right: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
`

const Sidebar = () => {
    let navigate = useNavigate()  

    let largeScreen = true
    if (window.innerWidth < 1200)
        largeScreen = false
    
    let disclaimer = `Questo il libro per voi...se vi piace il nostro approccio alla montagna`
    return (
    <>
      <div className={`${'itemLeft'} ${'App'} ${largeScreen ? 'sidebar' : ''}`}>
      <a href="/"><img src={Logo} alt='Dolomiti Selvadeghe...ma non solo!'/></a>
        <div className="logotext pb-3">
            <p></p>
            <a target="_blank" href="http://www.vividolomiti.it/pubblicazioni/wild-dolomiti-3-detail" rel="noreferrer">
            <img src={VD} alt='ViviDolomiti'></img></a>
            <p className='textLogo'>{disclaimer}</p>
        </div>
          <nav className="navbar">
            <div className="textCenter">
                <ul className={`navbar-nav mr-auto`}>
                    <li className={`nav-item active`}>
                    <StyledSearch>
                        <Search color="#a0e8fa" size={50} onClick={() => navigate('/search')}/>
                    </StyledSearch>                       
                    </li>
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