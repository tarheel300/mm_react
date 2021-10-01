import React from 'react'

const Matchup = ({matchups}) => {
    return (
        <>
            {matchups.map((matchup) => (
                <div className = "matchup" key = {matchup}>
                    <p className = "seed">1</p>
                    <p className = "team">Baylor</p>
                    <p className = "score">86</p>
                    <p className = "seed">1</p>
                    <p className = "team">Gonzaga</p>
                    <p className = "score">70</p>
                </div>
            ))}
        </>
    )
}

export default Matchup
