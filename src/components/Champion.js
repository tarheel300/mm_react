import React from 'react'
import Team from './Team'

const Champion = ({champion}) => {
    return (
        <div className="round champs">
            <p>{champion.team}</p>
        </div>
    )
}

export default Champion
