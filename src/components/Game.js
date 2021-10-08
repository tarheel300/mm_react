import React from 'react'
import Team from './Team'

const Game = ({game, selectWinner}) => {
    return (
        <div key={game.id} className = "game">
            <p>{game.location}</p>
            {game.teams.map((team) => (
                <Team team={team} selectWinner={selectWinner} />
            ))}
        </div>
    )
}

export default Game
