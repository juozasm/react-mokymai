import { useState } from "react";
import { register } from "../utils/api";

export default function useRegister() {
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
        const response  = await register(inputs.email, inputs.password)
        console.log(response)
    }


    return {
        handleSubmit,
        handleInput,
        inputs
    }
}