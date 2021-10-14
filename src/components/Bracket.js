import React from 'react'
import Round from './Round'

const Bracket = ({bracket, selectWinner}) => {
    return (
        <div className = "bracket">
           {Array.from(new Set(bracket.map(a => a.round))).map((round) => (
                <Round bracket={bracket} selectWinner={selectWinner} round={round} key={round}/>
            ))}
        </div>
    )
}

export default Bracket
