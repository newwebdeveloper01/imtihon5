import React from "react";
import useFetchData from "../../hooks/useFetchData";
import { shortenProductDescrption } from "../../helpers/product_content";
import { Container } from "../../utils/Container";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./MainCategory.scss";
const MainCategory = () => {
  const [data, isLoding] = useFetchData(`/products/?price_min=${900}&price_max=${1000}&categoryId=${1}`);
 
  return (
    <section className="category__list d-flex">
      <Container>
       

        <div className="category__title d-flex align-items-baseline g-4">
          <h2 className="category__title__h2">Extra 20% off for Presidents' Day</h2>
          <p className="category__title__p">See all <AiOutlineArrowRight/></p>
        </div>
        <div className="category__list__wrapper">
          {!isLoding ? (
            data.map(({ id, title, images }) => (
              <NavLink className="category__item d-flex" key={id}>
                <div className="category__item__wrapper">
                  <img src={images} alt="catigory" />
                  <p>{shortenProductDescrption("wor", 10, title)}</p>
                </div>
              </NavLink>
            ))
          ) : (
            <p>Loding...</p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default MainCategory;
