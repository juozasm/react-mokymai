import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Modal from '../../components/Modal'
import ShowToken from '../../components/ShowToken'
import useProducts from '../../hooks/useProducts'
import { H1 } from '../../styled/texts'
import * as S from './styled'

export default function Index() {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalIsOpen2, setModalIsOpen2] = useState(false)
    const [bgColor, setBgColor] = useState(null)

    const {
        products,
        error,
        isLoading
    } = useProducts()

    if(error) return <Redirect to={`/error/404/${error}`}/>

    return (
        <S.Container fluid>
            <H1>Home page</H1>
            <button onClick={()=>{
                setModalIsOpen(true)
                setModalIsOpen2(true)
            }}>OPEN MODAL</button>
            <Modal text="PIRMAS"  bgColor={bgColor} setBgColor={()=>setBgColor('black')} onClose={()=>setModalIsOpen(false)} isOpen={modalIsOpen}/>
            <Modal text="ANTRAS" bgColor={bgColor} setBgColor={(color)=>setBgColor(color)} onClose={()=>setModalIsOpen2(false)} isOpen={modalIsOpen2}/>
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
       
        </S.Container>
    )
}
