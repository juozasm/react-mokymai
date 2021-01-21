import React, { useState } from 'react'

export default function Text({ onClick  }) {
    const [inputVal, setInputVal] = useState('')
    return (
        <div>
            TEKSTAS
            <input onChange={(e)=>setInputVal(e.target.value)} value={inputVal} type="number" />
            <button onClick={()=>onClick(Number(inputVal))}>change vh</button>
        </div>
    )
}
