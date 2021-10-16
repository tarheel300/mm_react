import React from 'react'

const Team = ({team, selectWinner}) => {
    return (
        <div key={team.team_id} className = "team">
            <p className="seed">{team.seed}</p>
            <p onClick={() => selectWinner(team.team_id)}>{team.team}</p>
        </div>
    )
}

export default Team
