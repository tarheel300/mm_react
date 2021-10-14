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

/*
const Round = ({bracket, round, selectWinner}) => {
    return (
        <div className="round">
           {bracket.map((game) => {
                console.log('round', round)
                console.log('gameRound', game.round)
                console.log(game.round === round)
                if (game.round === round) {
                    console.log('Here');
                    <Game game={game} selectWinner={selectWinner} key={game.id}/>
                }
            })}
        </div>
    )
}
*/