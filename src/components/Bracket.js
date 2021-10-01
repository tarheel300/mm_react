import React from 'react'
import Column from './Column'

const Bracket = () => {
    const columns = {'r64l': [16, 0] 
                , 'r32l': [8, 0]
                , 's16l': [4, 0]
                , 'e8l': [2, 0]
                , 'f4l': [1, 0]
                , 'champ': [1, 0]
                , 'f4lr': [1, 0]
                , 'e8r': [2, 0]
                , 's16r': [4, 0]
                , 'r32r': [8, 0]
                , 'r64r': [16, 0]
            }

    return (
        <div className = "bracket">
            <Column columns={columns}/>
        </div>
    )
}

export default Bracket
