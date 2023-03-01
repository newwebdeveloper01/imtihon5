import React from 'react'
import Header from "../components/header/Header.jsx"
import Footer from "../components/footer/Footer.jsx"
import { Route, Routes } from 'react-router-dom'
import Home from "./home/Home.jsx"
import Plp from "./plp/Plp.jsx"
import SingleProduct from './pdp/SingleProduct.jsx'
import Search from '../routes/search/Search'
import Register from './auth/register/Register.jsx'
import Signin from './auth/signin/Signin'
import Wishtlist from "../components/wishlist/Wishtlist"



function AllRoutes() {
  return (
    <>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/plp' element={<Plp/>}  />
          <Route path='/product/:id' element={<SingleProduct/>}  />
          <Route path='/wishtlist' element={ <Wishtlist/> }  />
          <Route path='/search/:productTitle' element={<Search/>}  />
          <Route  path='/register'element={<Register/>} />
          <Route  path='/signin'element={<Signin/>} />

        </Routes>

        <Footer/>
    </>
  )
}

export default AllRoutes