import React, { useState } from 'react'

import { createContext } from "react"

export const TokenContext = createContext()

export default function TokenProvider({ children }) {
    const value = useState(sessionStorage.getItem('access_token'))
    return (
        <TokenContext.Provider value={value}>
            {children}
        </TokenContext.Provider>
    )
}
