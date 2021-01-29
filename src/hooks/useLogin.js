import { useContext, useState } from "react";
import { login } from "../utils/api";
import { useHistory } from 'react-router-dom'
import { TokenContext } from "../components/TokenProvider";

export default function useLogin(onError = (error)=> console.log(error)) {
    const [, setToken] = useContext(TokenContext)
    const history = useHistory();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })

    const handleInput = (e) => setInputs(state => ({
        ...state,
        [e.target.name]: e.target.value
    }))

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data  = await login(inputs.email, inputs.password)
            if(data.access_token){
                sessionStorage.setItem('access_token', data.access_token)
                setToken(data.access_token)
                history.push('/')
            } else {
                throw(new Error('Token does not exist!'))
            }

        } catch (error) {
            onError(error)
        }
    }


    return {
        handleSubmit,
        handleInput,
        inputs
    }
}