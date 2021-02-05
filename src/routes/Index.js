import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import ShowToken from '../components/ShowToken'
import useProducts from '../hooks/useProducts'

export default function Index() {

    const {
        products,
        error,
        isLoading
    } = useProducts()

    if(error) return <Redirect to={`/error/404/${error}`}/>

    return (
        <div>
            <h1>Home page</h1>
            <ShowToken/>
            <Link to="/logout">Logout</Link>
            { isLoading ? <p>Loading...</p> : <div>
                <p>Products</p>
                <ul>
                    {products.map(({
                        name,
                        description,
                        id
                    })=>(<li key={id}>
                        <h3><Link to={`/products/${id}`}>{name}</Link></h3>
                        <p>{description}</p>
                    </li>))
                    }
                </ul>
            </div>}
        </div>
    )
}
