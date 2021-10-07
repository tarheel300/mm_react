import React from 'react'

const Teams = ({teams, selectWinner}) => {
    return (
        <>
            {teams.map((team) => (
                <div key={team.team_id} className = "team">
                    <p>{team.seed}</p>
                    <p onClick={() => selectWinner(team.team_id)}>{team.team}</p>
                </div>
            ))}
        </>
    )
}

export default Teams
