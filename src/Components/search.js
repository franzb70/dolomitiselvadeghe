import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { HashLink } from 'react-router-hash-link';
import '../App.css';

// Layout principale
const MainLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #0f2755;
  @media (max-width: 1200px) { flex-direction: column; }
`;

// Contenitore della ricerca (Spostato più in alto con padding-top ridotto)
const SearchContainer = styled.div`
  flex-grow: 1;
  padding: 40px 30px; /* Ridotto il padding superiore da 150px a 40px */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Input stilizzato
const StyledInput = styled.input`
  width: 100%;
  max-width: 450px;
  padding: 12px 20px;
  font-size: 1.1rem;
  border-radius: 12px;
  border: 1px solid rgba(160, 232, 250, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  outline: none;
  transition: all 0.3s;

  &:focus {
    background: rgba(255, 255, 255, 0.1);
    border-color: #a0e8fa;
    box-shadow: 0 0 15px rgba(160, 232, 250, 0.2);
  }

  &::placeholder { color: rgba(255,255,255,0.4); }
`;

const ModernButton = styled.button`
  margin-top: 20px;
  padding: 10px 35px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #0f2755;
  background: linear-gradient(135deg, #a0e8fa 0%, #72a3ff 100%);
  border: none;
  border-radius: 50px; /* Arrotondato "pill" */
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(114, 163, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(160, 232, 250, 0.4);
    filter: brightness(1.1);
  }

  &:active { transform: translateY(0); }
`;

const ResultsBox = styled.div`
  margin-top: 40px;
  width: 100%;
  
  .result-item {
    background: rgba(255, 255, 255, 0.03);
    margin-bottom: 10px;
    padding: 12px 15px;
    border-radius: 8px;
    border-left: 4px solid transparent;
    transition: all 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.07);
      border-left: 4px solid #a0e8fa;
      padding-left: 20px;
    }
  }

  a {
    color: #e2e8f0;
    text-decoration: none;
    font-weight: 500;
    display: block;
  }
`;

export default function Search() {
    const [searchstring, setSearchstring] = useState('');
    const [found, setFound] = useState([]);
    const searchMap = require('../searchMap.json');

    const handleSearch = () => {
        if (!searchstring.trim()) { setFound([]); return; }
        const search = searchstring.toLowerCase();
        const results = searchMap.Gite
            .filter(gita => gita.title.toLowerCase().includes(search))
            .map(gita => ({ text: gita.title, link: gita.page + gita.id }));
        setFound(results);
    };

    return (
        <MainLayout>
            <Sidebar />
            <SearchContainer>
                <StyledInput 
                    placeholder="Cerca una cima o un percorso..." 
                    value={searchstring} 
                    onChange={(e) => setSearchstring(e.target.value)} 
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />

                <ModernButton onClick={handleSearch}>
                    Cerca
                </ModernButton>         

                <ResultsBox>
                    {found.map((item, index) => (
                        <div key={index} className="result-item">
                           <HashLink to={item.link}>{item.text}</HashLink>      
                        </div>
                    ))}
                    {found.length === 0 && searchstring && (
                        <p style={{color: '#888', marginLeft: '10px'}}>Nessun percorso trovato con questo nome.</p>
                    )}
                </ResultsBox>
            </SearchContainer>
        </MainLayout>
    );
}
