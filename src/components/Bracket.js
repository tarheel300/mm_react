import React from 'react'
import Round from './Round'
import Champion from './Champion'

const Bracket = ({bracket, selectWinner}) => {
    let champRound = 'R0'
    
    return (
        <div className = "bracket">
           {Array.from(new Set(bracket.map(a => a.round))).map((round) => (
                round === champRound
                ? bracket.map((game) => game.round === champRound
                    ? game.teams.map((team) => 
                        <Champion champion={team} key={team.team_id}/>
                        )
                    : null
                    )
                : <Round bracket={bracket} selectWinner={selectWinner} round={round} key={round}/>
            ))}
        </div>
    )
}

export default Bracket
