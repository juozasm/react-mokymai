import { useEffect, } from "react"
import { getProduct } from "../utils/api"
import useDataFlow from './useDataFlow'

export default function useProduct(productId) {
    const {
        data,
        setData,
        error,
        setError,
        isLoading,
        setIsLoading,
        token,
        resetToken
    } = useDataFlow()

    useEffect(() => {
        let mounted = true
        getProduct([token, resetToken], productId)
        .then((product)=>{
            if(mounted){
                if(!product || typeof product !== 'object') throw new Error('product not found')
                setData(product)
                setIsLoading(false)
            }
        })
        .catch(error => {
            if(mounted){
                setError(error instanceof Error 
                    ? error.toString() 
                    : error
                )
                setIsLoading(false)
            }
        })

        return () => {
            mounted = false
        }
    }, [productId, setData, setIsLoading, setError, token, resetToken])

    return {
        product: data,
        error,
        isLoading
    }
}