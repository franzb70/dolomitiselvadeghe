import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const MainLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #0f2755;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden; /* Importante per gestire lo scroll solo nell'area gite */
`;

// --- HEADER FISSO ---
const FixedHeader = styled.header`
  height: 60px; /* Ridotto leggermente da 70px per un look più sottile */
  background: rgba(15, 39, 85, 0.95);
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid rgba(160, 232, 250, 0.2);
  z-index: 100;
  flex-shrink: 0;
`;

const ScrollableContent = styled.main`
  flex-grow: 1;
  overflow-y: auto;
  /* RIDUCIAMO IL PADDING SUPERIORE QUI */
  padding: 15px 30px 30px 30px; /* 15px sopra invece di 30px o 40px */
  
  &::-webkit-scrollbar { display: none; }
  scrollbar-width: none;
`;

const HeaderTitle = styled.h2`
  color: #a0e8fa;
  font-size: 1.5rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
`;

const Layout = ({ children }) => {
  const location = useLocation();

  // Mappatura dei percorsi con i nomi reali da visualizzare nell'header
  const routeNames = {
    "/": "Home",
    "/alpago": "Alpago",
    "/cadore": "Cadore / Comelico",
    "/oltrepiave": "Dolomiti d'Oltre Piave",
    "/pale": "Pale di San Martino",
    "/zoldano": "Zoldano / Agordino",
    "/bellunesi": "Dolomiti Bellunesi",
    "/fassa": "Fassa / Badia / Gardena",
    "/brenta": "Dolomiti di Brenta",
    "/giulie": "Alpi Giulie e Carniche",
    "/varie": "Varie",
    "/search": "Ricerca Percorsi"
  };

  const currentTitle = routeNames[location.pathname] || "ViviDolomiti";

  return (
    <MainLayout>
      <Sidebar />
      <ContentWrapper>
        <FixedHeader>
          <HeaderTitle>{currentTitle}</HeaderTitle>
        </FixedHeader>
        <ScrollableContent>
          {children}
        </ScrollableContent>
      </ContentWrapper>
    </MainLayout>
  );
};

export default Layout;
