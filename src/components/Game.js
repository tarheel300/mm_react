import React from 'react'
import Team from './Team'

const Game = ({game, selectWinner}) => {
    return (
        <div className = "game">
            <p>{game.location}</p>
            {game.teams.map((team) => (
                <Team team={team} selectWinner={selectWinner} key={team.team_id}/>
            ))}
        </div>
    )
}

export default Game
