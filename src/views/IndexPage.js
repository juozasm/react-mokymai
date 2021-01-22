import React, { useState } from 'react'
import RandomJoke from '../containers/RandomJoke'

export default function IndexPage() {
    const [isShown, setIsShown] = useState(true)
    const [isError, setIsError] = useState(false)

    console.log('test')
    if(isError) throw(new Error('Ne kazka')) 

    return (
        <div>
        <button onClick={()=>setIsShown(!isShown)}>toggle random joke</button>
        <button onClick={()=>setIsError(true)}>toggle ERROR</button>
        {
          isShown && <RandomJoke/>
        }
      </div>
    )
}
