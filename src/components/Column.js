import React from 'react'
import Matchup from './Matchup'

const Column = ({columns}) => {
    return (
        <>
            {Object.keys(columns).map((key, idx) => (
                <div key = {key} className = "column">
                    <Matchup matchups = {[...Array(columns[key][0]).keys()]}/>
                </div>
            ))}  
        </>
    )
}

export default Column


/*
{
        Object.keys(vals).map((key, index) => ( 
          <p key={index}> this is my key {key} and this is my value {vals[key]}</p> 
        ))
      }

*/