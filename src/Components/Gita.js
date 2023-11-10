import React from 'react'
import '../App.css'

export default function Gita(props) {

    return (
        <div className="App">
            <div className='row textDescGita'>
                <div className='col-sm-12'>{props.title}</div>            
            </div>        
            <div className='row textGita border-top'>
                <div className='col-sm-2'><b>Quota: </b>{props.quota}</div>            
                <div className='col-sm-2'><b>Dislivello: </b>{props.dislivello}</div>            
                <div className='col-sm-2'><b>Difficoltà: </b>{props.difficolta}</div>            
            </div>
            <div className='row textGita border-top'>
                <div className='col-sm-12'>{props.descrizione}</div>            
            </div>
            <div className='row border-top textTitleFoto'>
                <div className='col'>
                {props.foto.map((item, index) => (
                  <div key={index}>
                    {item.desc}<br></br>
                    <img src={require('../img/' + item.path)} alt={item.desc}/><p></p>
                  </div>
                ))}                
                </div>
            </div>
            <div className='row border-bottom'></div>
        </div>
    )   
}
