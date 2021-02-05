import { useContext, useState, useCallback } from 'react'
import { TokenContext } from '../components/TokenProvider'
import useIsMounted from './useIsMounted'

export default function useDataFlow() {
    const [token, setToken] = useContext(TokenContext)
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const mounted = useIsMounted()

    const resetToken = useCallback(()=>{
        mounted.current && setToken(null)
            sessionStorage.removeItem(
                'access_token'
            )
    }, [mounted, setToken])

    return {
        data,
        setData,
        isLoading,
        setIsLoading,
        error,
        setError,
        token,
        resetToken
    }
}
