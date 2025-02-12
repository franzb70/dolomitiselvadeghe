import React from 'react'
import '../App.css'
import { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { HashLink  } from 'react-router-hash-link'

class Finding {
    constructor(text, link) {
        this.text = text
        this.link = link
    }
}

export default function Search() {
    const [searchstring, setSearchstring] = useState('')
    const [found, setFound] = useState([])

    let searchMap = require('../searchMap.json')
    let findings = []

    const StartSearch = () => {
        for (let i = 0; i < searchMap.Gite.length; i++) {
            let search = searchstring.toLocaleLowerCase()
            let title = searchMap.Gite[i].title.toLocaleLowerCase()
            if (title.includes(search)) {
                let finding = new Finding(searchMap.Gite[i].title, searchMap.Gite[i].page+searchMap.Gite[i].id)
                findings.push(finding)
            }
        }
        setFound(findings)
    }

    return (
        <>
            <Sidebar />
            <div className='row App'>
                <div className='fieldSearch col'>
                    <input type="text" className="textSearch" placeholder="" value={searchstring} id={searchstring} onChange={(e) => setSearchstring(e.target.value)} />
                </div>
            </div>
            <div className='row App pt-3'>
                <div className='fieldButtonSearch col'>
                    <button className={`${'btn'} ${'btn-outline-primary'} ${'buttonSearch'}`} type="submit" onClick={StartSearch}>Cerca...</button>         
                </div>
            </div>
            <div className='row App pt-3'>
                <div className='col textFound ps-5'>
                {found.map((item, index) => (
                    <div key={index}>
                       <HashLink to={item.link}>{item.text}</HashLink><p></p>      
                    </div>
                    ))}                    
                </div>
            </div>
        </>
    )   
}
