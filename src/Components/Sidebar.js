import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { Mail, Search } from 'react-feather';
import Logo from '../img/logo.jpg';
import VD from '../img/vd.jpg';

// --- STYLED COMPONENTS ---
const SidebarContainer = styled.aside`
  width: 280px;
  height: 100vh;
  background: #001f3f; /* Blu Navy profondo */
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  position: sticky;
  top: 0;
  box-shadow: 4px 0 15px rgba(0,0,0,0.4);
  
  /* Nascondi scrollbar per Chrome, Safari e Opera */
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  /* Nascondi scrollbar per IE, Edge e Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

const BrandSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  img {
    max-width: 140px;
    border-radius: 50%; /* Opzionale: rende il logo circolare se adatto */
    border: 2px solid rgba(255,255,255,0.1);
    transition: transform 0.3s ease;
    &:hover { transform: rotate(-3deg) scale(1.05); }
  }
`;

const PromoBox = styled.div`
  background: rgba(255, 255, 255, 0.07);
  padding: 1.2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.1);

  img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 0.8rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  }

  p {
    font-size: 0.75rem;
    color: #cbd5e0;
    font-style: italic;
    line-height: 1.4;
    margin: 0;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  color: #e2e8f0;
  text-decoration: none;
  border-radius: 10px;
  margin-bottom: 0.4rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    transform: translateX(8px);
  }

  &.active {
    background: #004080; /* Un blu leggermente più chiaro per l'attivo */
    color: #fff;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1.5rem;
  margin-top: 1rem;
  border-top: 1px solid rgba(255,255,255,0.1);

  svg {
    cursor: pointer;
    color: #cbd5e0;
    transition: all 0.2s;
    &:hover { 
      color: #a0e8fa; 
      transform: scale(1.2);
    }
  }
`;

// --- COMPONENT ---
const Sidebar = () => {
  const navigate = useNavigate();
  const disclaimer = "Questo il libro per voi...se vi piace il nostro approccio alla montagna";

  const menuItems = [
    { path: "/alpago", label: "Alpago" },
    { path: "/cadore", label: "Cadore / Comelico" },
    { path: "/oltrepiave", label: "Dolomiti d'Oltre Piave" },
    { path: "/pale", label: "Pale di San Martino" },
    { path: "/zoldano", label: "Zoldano / Agordino" },
    { path: "/bellunesi", label: "Dolomiti Bellunesi" },
    { path: "/fassa", label: "Fassa / Badia / Gardena" },
    { path: "/brenta", label: "Dolomiti di Brenta" },
    { path: "/giulie", label: "Alpi Giulie e Carniche" },
    { path: "/varie", label: "Varie" },
  ];

  return (
    <SidebarContainer>
      <BrandSection>
        <a href="/"><img src={Logo} alt='Logo ViviDolomiti'/></a>
      </BrandSection>

      <PromoBox>
        <a target="_blank" href="http://www.vividolomiti.it" rel="noreferrer">
          <img src={VD} alt='ViviDolomiti' />
        </a>
        <p>{disclaimer}</p>
      </PromoBox>

      <NavList>
        {menuItems.map((item) => (
          <li key={item.path}>
            <StyledNavLink to={item.path}>
              {item.label}
            </StyledNavLink>
          </li>
        ))}
      </NavList>

      <Actions>
        <Search size={20} onClick={() => navigate('/search')} title="Cerca" />
        <a href="mailto:franzb70@gmail.com" style={{ color: 'inherit' }}>
          <Mail size={20} title="Contattaci" />
        </a>
      </Actions>
    </SidebarContainer>
  );
};

export default Sidebar;
