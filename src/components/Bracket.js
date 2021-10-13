import React from 'react'
import Game from './Game'

const Bracket = ({bracket, selectWinner, rounds}) => {
    return (
        <div className = "bracket">
           {bracket.map((game) => (
                <Game game={game} selectWinner={selectWinner} key={game.id}/>
            ))}
        </div>
    )
}

export default Bracket
