import React from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'

export default function Login() {
    const { inputs, handleInput, handleSubmit } = useLogin()
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
                <label htmlFor="email">
                    <input onChange={handleInput} value={inputs.email} name="email" id="email" type="email"/>
                </label>
            </div>
            <div>
                <label htmlFor="password">
                    <input onChange={handleInput} value={inputs.password} name="password" id="password" type="password"/>
                </label>
            </div>
            <button type="submit">Submit</button>
            </form>
            <div>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
            }