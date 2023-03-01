import React from 'react'
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import { Container } from '../../utils/Container';
import { NavLink } from 'react-router-dom';
import Searchcom from "../../components/search/Search"
import "./Search.scss"
const Search = () => {
    const {productTitle}=useParams();
    const [data , isLoading]=useFetchData(`/products/?title=${productTitle}`)
    
    console.log(data);
  return (
    <main className='products'>
        
        <Container>
             <Searchcom/>
        <div className="search__filters">
          
        </div>
        <div className="search__result__wrapper">
          {!isLoading ? (
            data.map((product) => (
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
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        </Container>
    </main>
  )
}

export default Search