import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Container } from '../../utils/Container';
import MainProduct from '../main_product/MainProduct';

const Main__product__2 = () => {
  return (
    <section>
      <Container>
      <div className="category__title d-flex align-items-baseline g-4">
          <h2 className="category__title__h2">Extra 20% off for Presidents' Day</h2>
          <p className="category__title__p">See all <AiOutlineArrowRight/></p>
        </div>
        <MainProduct/>
      </Container>
    </section>
  )
}

export default Main__product__2