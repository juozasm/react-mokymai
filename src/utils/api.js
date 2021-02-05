import axios from 'axios'
import Error from '../routes/Error'
import handleTokenValidity from './handleTokenValidity'

const headers = {
    'Content-Type': 'application/json',
}

const getHeaderWithToken = (token) => ({
    ...headers,
    authorization: `Bearer ${token}`
})

const base = 'http://localhost:4000'

async function handleResponse(fetchApi, ...args) {
    try {
        const { data } = await fetchApi(...args)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

function handleResponseWithToken(token, resetToken) {
    const isValid = handleTokenValidity(token)
    if(!isValid){
        return ()=> {
            resetToken()
            return Promise.reject('Token expired!')
        }
    }
    return handleResponse
}

export function register(email, password) {
    return axios.post(base + '/auth/register', {
        email,
        password
    }, {
        headers
    })
}

export function login(email, password) {
    return handleResponse(axios.post, base + '/auth/login', {
        email,
        password
    }, {
        headers
    }) 
}

export function getProducts([token, resetToken]) {
    return handleResponseWithToken(token, resetToken)(axios.get, base + '/products', {
        headers: getHeaderWithToken(token)
    })
}

export function getProduct([token, resetToken], id) {
    return handleResponseWithToken(token, resetToken)(axios.get, base + `/products/${id}`, {
        headers: getHeaderWithToken(token)
    })
}

