import React from 'react'

const Teams = ({teams, selectWinner}) => {
    return (
        <>
            {teams.map((team) => (
                <div key={team.id} className = "team">
                    <p>{team.seed}</p>
                    <p onClick={() => selectWinner(team.id)}>{team.team}</p>
                </div>
            ))}
        </>
    )
}

export default Teams
