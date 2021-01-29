
import React, { useContext } from 'react'
import { TokenContext } from './TokenProvider'

export default function ShowToken() {
    const [token] = useContext(TokenContext)

    return (
        <div>
            {token}
        </div>
    )
}
