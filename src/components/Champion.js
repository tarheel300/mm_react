import React from 'react'

const Champion = ({champion}) => {
    return (
        <div className="round champs">
            <p>{champion.team}</p>
        </div>
    )
}

export default Champion
