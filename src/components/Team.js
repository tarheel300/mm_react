import React from 'react'

const Team = ({team, selectWinner}) => {
    return (
        <div key={team.team_id} className = {team.selected === true ? "team selected" : "team "} onClick={() => selectWinner(team.team_id)}>
            <p className="seed">{team.seed}</p>
            <p>{team.team}</p>
        </div>
    )
}

export default Team
