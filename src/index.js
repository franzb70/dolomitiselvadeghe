import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./Components/Header.js"
import Home from "./pages/home.js"
import Alpago from "./pages/alpago.js"
import Cadore from "./pages/cadore.js"
import Giulie from "./pages/giulie.js"
import Oltrepiave from "./pages/oltrepiave.js"
import Pale from "./pages/pale.js"
import Zoldano from "./pages/zoldano.js"
import Bellunesi from "./pages/bellunesi.js"
import Brenta from "./pages/brenta.js"
import Fassa from "./pages/fassa.js"
import Varie from "./pages/varie.js"
import Search from "./pages/search.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/alpago" element={ <Alpago /> } />
        <Route path="/cadore" element={ <Cadore /> } />
        <Route path="/giulie" element={<Giulie />} />
        <Route path="/oltrepiave" element={<Oltrepiave />} />
        <Route path="/pale" element={<Pale />} />
        <Route path="/zoldano" element={<Zoldano />} />
        <Route path="/bellunesi" element={<Bellunesi />} />
        <Route path="/brenta" element={<Brenta />} />
        <Route path="/fassa" element={<Fassa />} />
        <Route path="/varie" element={<Varie />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

