import React from 'react'
import CategoryList from '../../components/category_list/CategoryList'
import Search from '../../components/search/Search';
import Product__plp from "../../components/plpproduct/Productplp";
import Baner from '../../components/plp__baner/Baner';

const Plp = () => {
  return (
    <>
        <Search/>
        <Baner/>
        <CategoryList/>
        <Product__plp/>
    </>
  )
}

export default Plp