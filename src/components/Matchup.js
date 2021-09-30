import React from 'react'

const Matchup = () => {
    let matchup_arr = [...Array(10).keys()]
    
    return (
        <div>
            {matchup_arr.map((matchup) => (
                <p> Number in my array: {matchup}</p>
            ))}
        </div>
    )
}

export default Matchup
