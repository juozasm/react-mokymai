import axios from 'axios'

const headers = {
    'Content-Type': 'application/json',
}

const base = 'http://localhost:4000'

export function register(email, password) {
    return axios.post(base + '/auth/register', {
        email,
        password
    }, {
        headers
    })
}