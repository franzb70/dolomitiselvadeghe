import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom'
import '../App.css'

// Aggiungi { onSelect } come parametro
export default function SectionList({ onSelect }) { 
    const [found, setFound] = useState([])
    const searchMap = require('../searchMap.json')
    const location = useLocation()

    const handleLoad = () => {
      const currentRoute = location.pathname.replace(/^\//, "").toLowerCase()
      const results = searchMap.Gite
          .filter(gita => gita.page.toLowerCase().includes(currentRoute))
          .map(gita => ({ text: gita.title, link: gita.page + gita.id }))
      setFound(results)
    }

    useEffect(() => {
        handleLoad()
    }, [location.pathname])

    return (
      <div className="section-results-box">
          {found.map((item, index) => (
              <div 
                key={index} 
                className="section-result-item" 
                onClick={onSelect} // Chiude la lista al click
              >
                  <HashLink smooth to={item.link}>
                      {item.text}
                  </HashLink>
              </div>
          ))}
      </div>
    )
}
