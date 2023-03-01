import React from 'react';
import CategoryList from '../../components/category_list/CategoryList';
import Featured from '../../components/featured__section/Featured';
import MainProduct from '../../components/main_product/MainProduct';
import MainCategory from '../../components/main__category/MainCategory';
import Main__product__2 from '../../components/Main__product__2/Main__product__2';
import Search from '../../components/search/Search.jsx';
import Discounts from '../../components/section_discounts/Discounts';
const Home = () => {
  return (
    <>
      <Search/>
      <Discounts/>
      <MainProduct/>
      <CategoryList/>
      <MainCategory/>
      <Featured/>
      <Main__product__2/>
    </>
  )
}

export default Home