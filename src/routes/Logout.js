import { useContext, useEffect } from 'react'
import { TokenContext } from '../components/TokenProvider'

export default function Logout() {
    const [, setToken] = useContext(TokenContext)

    useEffect(()=>{
        setToken(null)
        sessionStorage.removeItem('access_token')
    }, [setToken])

    return null
}
