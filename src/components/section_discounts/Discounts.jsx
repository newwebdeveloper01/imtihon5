import React from 'react'
import { Container, ButtonIcon } from '../../utils/Container'
import { NavLink } from 'react-router-dom'
import { AiOutlineArrowRight } from "react-icons/ai";
import  IMG1  from '../../assets/1.svg';
import IMG2  from "../../assets/2.svg";
import  IMG3  from "../../assets/3.svg";
import  IMG4  from "../../assets/image.svg";


import "./Discounts.scss"
const Discounts = () => {
  return (
    <section className='discounts__wrapper'>
        <Container>
            <ul className='discounts__wrapper__list d-flex gap-3 justify-content-between'>
                <li className="discounts__wrapper__list__item">
                    <NavLink>Home</NavLink>
                </li>
                <li className="discounts__wrapper__list__item">
                    <NavLink>Saved</NavLink>
                </li>
                <li className="discounts__wrapper__list__item">
                    <NavLink>Motors</NavLink>
                </li>
                <li className="discounts__wrapper__list__item">
                    <NavLink>Electronics</NavLink>
                </li>
                <li className="discounts__wrapper__list__item">
                    <NavLink>Collectibles</NavLink>
                </li>
                <li className="discounts__wrapper__list__item">
                    <NavLink>Home & Garden</NavLink>
                </li>
                <li className="discounts__wrapper__list__item">
                    <NavLink>Fashion</NavLink>
                </li>
                <li className="discounts__wrapper__list__item">
                    <NavLink>Toys</NavLink>
                </li>
                <li className="discounts__wrapper__list__item">
                    <NavLink>Sporting Goods</NavLink>
                </li>
                <li className="discounts__wrapper__list__item">
                    <NavLink>Business & Industrial</NavLink>
                </li>
                <li className="discounts__wrapper__list__item">
                    <NavLink>Jewelry & Watches</NavLink>
                </li>
                <li className="discounts__wrapper__list__item">
                    <NavLink>eBay Live</NavLink>
                </li>
                <li className="discounts__wrapper__list__item">
                    <NavLink>Refurbished</NavLink>
                </li>
            </ul>
            <div className="discounts__wrapper__info d-flex">
                <div>
                    <h3>Super savings at the Brand Outlet</h3>
                    <p>Up to 60% off the brands you love.</p>
                    <ButtonIcon  className="buttonicon" title="Shop Now" icon={<AiOutlineArrowRight/>}/>
                </div>
                <img src={IMG1} alt="f" />
                <img src={IMG2} alt="f" />
                <img src={IMG3} alt="f" />
            </div>
            <img src={IMG4} className="d-flex align-items-center justify-content-center m-auto mt-5 mb-5" alt="f" />
        </Container>
    </section>
  )
}

export default Discounts