import { useContext, useState } from "react";
import { register } from "../utils/api";
import { useHistory } from 'react-router-dom'
import { TokenContext } from "../components/TokenProvider";

export default function useRegister(onError = (error)=> console.log(error)) {
    const [, setToken] = useContext(TokenContext)
    const history = useHistory();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        repeatedPassword: ''
    })

    const handleInput = (e) => setInputs(state => ({
        ...state,
        [e.target.name]: e.target.value
    }))

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(inputs.password !== inputs.repeatedPassword) return;
        try {
            const response  = await register(inputs.email, inputs.password)
            if(response?.data?.access_token){
                sessionStorage.setItem('access_token', response.data.access_token)
                setToken(response.data.access_token)
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