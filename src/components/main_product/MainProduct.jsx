import React, { useEffect } from 'react';
import {Container} from '../../utils/Container';
import "./MainProduct.scss"
import Product from '../project/Project';
import useFetchData from '../../hooks/useFetchData';

const MainProduct = () => {
  
    const [data , isLoding]=useFetchData("/products?offset=1&limit=20");
    // console.log(data);
  return (
    <section className='main__productss pt-3 pb-3'>
        <Container>
            
            <div className="main__products__wrapperr card-cotainer">
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

export default MainProduct


