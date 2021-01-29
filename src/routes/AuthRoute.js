import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function AuthRoute({ isAuthorized = false, path, ...otherProps }) {
    if(!isAuthorized){
        return ( <Route path={path}>
            <Redirect from={path} to="/login" />
        </Route>)
    }
    return (
        <Route path={path} {...otherProps} />
    )
}
