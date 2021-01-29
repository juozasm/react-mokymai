import React, { useContext, useEffect, useState } from 'react'
import ShowToken from '../components/ShowToken'
import { TokenContext } from '../components/TokenProvider'
import { getProducts } from '../utils/api'

export default function Index() {

    const [products, setProducts] = useState([])
    const [token] = useContext(TokenContext)

    useEffect(() => {
        let mounted = true
        getProducts(token).then((products)=>mounted && products && setProducts(products))
        return () => {
            mounted = false
        }
    }, [token])

    return (
        <div>
            <h1>Home page</h1>
            <ShowToken/>
            <div>
                <p>Products</p>
                <ul>
                    {products.map(({
                        name,
                        description,
                        id
                    })=>(<li key={id}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </li>))
                    }
                </ul>
            </div>
        </div>
    )
}
