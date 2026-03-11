import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom'
import '../App.css'

// Riceviamo la prop onSelect per la chiusura automatica
export default function SectionList({ onSelect }) {
    const [found, setFound] = useState([])
    const location = useLocation()

    useEffect(() => {
        // Definiamo la logica internamente
        const searchMap = require('../searchMap.json')
        const currentRoute = location.pathname.replace(/^\//, "").toLowerCase()

        const results = searchMap.Gite
            .filter(gita => {
                return gita.page.toLowerCase().includes(currentRoute)
            })
            .map(gita => ({ text: gita.title, link: gita.page + gita.id }))

        setFound(results)
        
    }, [location.pathname]) // location.pathname è l'unica dipendenza esterna necessaria

    return (
      <div className="section-results-box">
          {found.map((item, index) => (
              <div 
                key={index} 
                className="section-result-item" 
                onClick={onSelect} // La funzione passata dal padre
              >
                  <HashLink smooth to={item.link}>
                      {item.text}
                  </HashLink>
              </div>
          ))}
      </div>
    )
}
