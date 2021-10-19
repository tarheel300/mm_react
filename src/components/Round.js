import React from 'react'
import Game from './Game'

const Round = ({bracket, round, selectWinner}) => {
    return (
        <div className="round">
           {bracket.map((game) =>
                game.round === round ? 
                    <Game game={game} selectWinner={selectWinner} key={game.id}/>
                    :null
           )}
        </div>
    )
}

export default Round