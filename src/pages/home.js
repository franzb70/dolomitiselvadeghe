import React from 'react'
import Sidebar from '../Components/Sidebar'
import styled from 'styled-components'
import '../App.css'

const MainLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #0f2755;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

// Modificato: allineamento a sinistra e padding
const ContentArea = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start; /* Sposta il contenuto a sinistra */
  align-items: flex-start;
  padding-top: 50px;
  padding-left: 30px; /* Il padding di 30px che hai richiesto */
  overflow-x: hidden;

  @media (max-width: 1200px) {
    padding-left: 15px; /* Ridotto per schermi piccoli */
    padding-right: 15px;
  }
`;

const HomeImage = styled.img`
  max-width: 100%; /* Permette all'immagine di occupare lo spazio necessario */
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  
  /* Se l'immagine è troppo grande, evita che esca dallo schermo */
  max-height: 85vh; 
  object-fit: contain;
`;

export default function Home() {
  return (
    <MainLayout>
      <Sidebar />
      <ContentArea>
        <HomeImage 
          src={require('../img/zoldano/pelmetto.jpg')} 
          alt='Palafavera dal Pelmetto' 
        />
      </ContentArea>
    </MainLayout>
  );
}
