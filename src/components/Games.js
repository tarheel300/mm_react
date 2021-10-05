import React from 'react'

const Games = ({games}) => {
    return (
        <>
            {games.map((game) => (
                <div key={game.id} className = "game">
                    <p>{game.seed}</p>
                    <p>{game.team}</p>
                </div>
                
            ))}
        </>
    )
}

export default Games
