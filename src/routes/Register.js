import React from 'react'
import useRegister  from '../hooks/useRegister'

export default function Register() {
    const { inputs, handleInput, handleSubmit } = useRegister()
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Register</h1>
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
            <div>
                <label htmlFor="repeatedPassword">
                    <input onChange={handleInput} value={inputs.repeatedPassword} name="repeatedPassword" id="repeatedPassword" type="password"/>
                </label>
            </div>
            {inputs.password !== inputs.repeatedPassword && <div>
                Passwords do not match!
            </div>}
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

