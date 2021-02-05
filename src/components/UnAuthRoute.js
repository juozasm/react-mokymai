import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { TokenContext } from './TokenProvider'

export default function AuthRoute({ path, ...otherProps }) {
    const [token] = useContext(TokenContext)
    if(token){
        return ( 
        <Route exact path={path}>
            <Redirect from={path} to="/" />
        </Route>)
    }
    return (
        <Route path={path} {...otherProps} >
        </Route>
    )
}
