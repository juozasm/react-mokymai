import React from 'react'
import {
    Redirect,
    useParams
} from 'react-router-dom'
import useProduct from '../hooks/useProduct'

export default function Product() {
    const { productId } = useParams()
    const { product, isLoading, error } = useProduct(productId)
    
    if(error) return <Redirect to={`/error/404/${error}`}/>

    return  (
        <div>
        {
            isLoading ?
            <p>Loading ...</p>
            : <>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <div>
                    <p>Price: {product.price}</p>
                    <p>QTY: {product.quantity}</p>
                </div>
            </>
        }
        </div>
    )
}
