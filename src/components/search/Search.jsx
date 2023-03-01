import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../../utils/Container";
import useFetchData from "../../hooks/useFetchData";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Search.scss";
import { GoChevronDown, GoSearch } from "react-icons/go";
import { ButtonIcon } from "../../utils/Container";
import { instanse } from "../../api/instanse";
const Search = () => {
  // const {t} = useTranslation();
  const [searchDataResults, setSearchDataResults] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [data, isLoding] = useFetchData("/categories") ;  
  // console.log(data);
  const getProductSuggestions=(e)=>{
    setSearchInputValue(e.target.value);
    
   
      instanse.get(`/products/?title=${e.target.value}&offset=10&limit=10`)
            .then( response => setSearchDataResults(response.data))
            
            .catch(err => console.log(err))
         
  }
  const getSearchResults=(e)=>{
    e.preventDefault();
    window.location.href=`/search/${searchInputValue}`
}

  return (
    <section>
      <Container>
        <div className="search__wrapper d-flex align-items-center pb-3 pt-3">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <ButtonIcon
            className="button__icon"
            title="Shop by category"
            icon={<GoChevronDown />}
          />

          <form action="" className="d-flex search__form align-items-center" onSubmit={getSearchResults}>
            <div className="search__form__input">
              <GoSearch className="search__icon" />
              <input onChange={getProductSuggestions} type="text" placeholder="Search for anything" />
              <select className="form-select search__form__select" aria-label="Default select example" >
                <option defaultValue="0">All Categories</option>
                {
                  data.map(categoryName =>
                    <option key={categoryName.id}>{categoryName.name}</option>
                  )
                }
              </select> 
              {
          searchDataResults.length > 0 && searchInputValue.length>=3  ? 
          <div className='search-suggestions'>
                        {searchDataResults.map( e=>
                            <NavLink to={`/product/${e.id}`} key={e.id} className='transarent__link search__result__item'>
                                <p>{e.title}</p>
                            </NavLink>
                        )}
                    </div> :
           <></> }
            </div>
            <button className="search__button" type="submit">Qidirish</button>
            <p className="ps-3 pe-3">Advanced</p>
            
          </form>
         
        </div>
      </Container>
    </section>
  );
};

export default Search;
