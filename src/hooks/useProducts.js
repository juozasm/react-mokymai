import { useEffect } from "react"
import Error from "../routes/Error"
import { getProducts } from "../utils/api"
import useDataFlow from "./useDataFlow"

export default function useProducts() {
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
        getProducts([token, resetToken]).then((products)=>{
            if(mounted){
                if(products){
                    setData(products)
                    
                } else {
                    throw new Error('No products')
                }
            }
        })
        .catch(error => {
            // console.log(error)
            if(mounted){
                setError(error instanceof Error 
                    ? error.toString() 
                    : error
                )
            }
        })
        .finally(()=>{
            if(mounted) setIsLoading(false)
        })
        return () => {
            mounted = false
        }
    }, [resetToken, setData, setError, setIsLoading, token])

    return {
        products: data,
        error,
        isLoading
    }
}