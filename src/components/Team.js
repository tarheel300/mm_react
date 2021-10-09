import React from 'react'

const Team = ({team, selectWinner}) => {
    return (
        <div key={team.team_id} className = "team">
            <p>{team.seed}</p>
            <p onClick={selectWinner}>{team.team}</p>
        </div>
    )
}

export default Team
