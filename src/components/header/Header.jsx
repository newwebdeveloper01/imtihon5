import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../../utils/Container.jsx";
import { useLocation } from "react-router-dom";
import {GoChevronDown} from "react-icons/go";
import {IoMdNotificationsOutline} from "react-icons/io";
import {BiCartAlt} from "react-icons/bi";
import "./Header.scss"
import { useSelector } from "react-redux";
const Header = () => {

  const {email}=useSelector(data=>data);
  // console.log(email);
  const location = useLocation();
  return (
    location.pathname != "/signin" &&
    location.pathname != "/register" && (
      <header>
        <Container>
          <div className="header__wrapper d-flex ">
            <ul className="header__nav d-flex gap-4">
              <li className="header__nav__link1">
                Hi! 
                 <NavLink to="/signin"> Sign in</NavLink> or
                <NavLink to="/register"> register</NavLink>
              </li>
              <li className="header__nav__link">
                <NavLink to="/plp">PLP</NavLink>
              </li>
              <li className="header__nav__link">
                <NavLink to="/">Brand Outlet</NavLink>
              </li>
              <li className="header__nav__link">
                <NavLink to="/">Help & Contact</NavLink>
              </li>
            </ul>
            <div className="header__nav__end d-flex  ">
              <ul className="header__nav__end__list d-flex gap-4">
                <li className="header__nav__end__list__item">{email?email:"user"}</li>
                <li className="header__nav__end__list__item">Watchlist<GoChevronDown/></li>
                <li className="header__nav__end__list__item">My eBay<GoChevronDown/></li>
              </ul>
              <IoMdNotificationsOutline  className="header__icons" />
              <NavLink to="/wishtlist">
              <BiCartAlt className="header__icons" />
              </NavLink>
            </div>
          </div>
          <div className="header__search">
            
          </div>
        </Container>
      </header>
    )
  );
};

export default Header;
