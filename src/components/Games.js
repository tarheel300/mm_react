import React from 'react'
import Teams from './Teams'

const Games = ({games, selectWinner}) => {
    return (
        <>
            {games.map((game) => (
                <div key={game.id} className = "game">
                    <p>{game.location}</p>
                    <Teams teams={game.teams} selectWinner={selectWinner}/>
                </div>
                
            ))}
        </>
    )
}

export default Games
