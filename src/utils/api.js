import axios from 'axios'

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

export function getProducts(token) {
    return handleResponse(axios.get, base + '/products', {
        headers: getHeaderWithToken(token)
    })
}
