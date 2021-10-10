import React from 'react'
import Game from './Game'

const Bracket = ({bracket, selectWinner}) => {
    return (
        <div className = "bracket">
            {bracket.map((game) => (
                <Game game={game} selectWinner={selectWinner} key={game.id}/>
            ))}
        </div>
    )
}

export default Bracket
