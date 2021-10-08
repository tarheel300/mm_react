import React from 'react'
import Game from './Game'

const Bracket = ({bracket, selectWinner}) => {
    return (
        <div className = "bracket">
            {bracket.map((game) => (
                <Game game={game} selectWinner={selectWinner}/>
            ))}
        </div>
    )
}

export default Bracket
