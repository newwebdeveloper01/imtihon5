import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { Container } from '../../utils/Container';
import Product from "../project/ProductPLP.jsx"
import "./Product__plp.scss"
const Product__plp = () => {
    const [data , isLoding]=useFetchData("/products?offset=1&limit=20")
    console.log(data);
  return (
    <section className="main__products">
        <Container>
        <div className="main__products__wrapper">
                { !isLoding ?
                    data.map(product =>
                        
                        <Product key={product.id} product={product} />
                    )
                    :
                    <p className='loding'>Loding...</p>
                }
            </div>
        </Container>
    </section>
  )
}

export default Product__plp