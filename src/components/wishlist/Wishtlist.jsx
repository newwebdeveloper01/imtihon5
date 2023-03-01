import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from '../../utils/Container';
import { NavLink } from 'react-router-dom';
// import Searchcom from "../../components/search/Search"
const Wishtlist = () => {
    const dataInStore=useSelector(data=> data)
    console.log(dataInStore);
  return (
    <main className='products'>
        
    <Container>
         {/* <Searchcom/> */}
    <div className="search__filters">
      
    </div>
    <div className="search__result__wrapper">
      {
        dataInStore.like.likedProducts.map((product) => (
          <article className="product-item" key={product.id}>
            <NavLink to={`/product/${product.id}`}>
              <img src={product.images.at(0)} alt="" />
            </NavLink>
            <div>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <strong>${product.price}</strong>
            </div>
          </article>
        ))
      
      
      }
    </div>
    </Container>
</main>
  )
}

export default Wishtlist