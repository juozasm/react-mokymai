import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { TokenContext } from '../components/TokenProvider'

export default function AuthRoute({ path, ...otherProps }) {
    const [token] = useContext(TokenContext)
    if(!token){
        return ( <Route path={path}>
            <Redirect from={path} to="/login" />
        </Route>)
    }
    return (
        <Route path={path} {...otherProps} />
    )
}
