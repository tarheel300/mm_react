import React from 'react'
import Round from './Round'
import Champion from './Champion'

const Bracket = ({bracket, selectWinner}) => {
    return (
        <div className = "bracket">
           {Array.from(new Set(bracket.map(a => a.round))).map((round) => (
                round === 'R0' ? <Champion /> : <Round bracket={bracket} selectWinner={selectWinner} round={round} key={round}/>
            ))}
        </div>
    )
}

export default Bracket
