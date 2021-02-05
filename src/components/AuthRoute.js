import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { TokenContext } from '../components/TokenProvider'

export default function AuthRoute({ path, to="/login", ...otherProps }) {
    const [token] = useContext(TokenContext)
    if(!token){
        return ( <Route path={path}>
            <Redirect from={path} to={to} />
        </Route>)
    }
    return (
        <Route path={path} {...otherProps} />
    )
}
