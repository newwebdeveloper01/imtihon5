import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Container } from "../../utils/Container";
import "./Footer.scss";
const Footer = () => {
  const location = useLocation();

  return (
    location.pathname != "/signin" &&
    location.pathname != "/register" && (
      <Container>
        <div className="footer">
          <ul className="footer__list d-flex gap-3">
            <li><NavLink>About eBay</NavLink></li>
            <li><NavLink>Announcements</NavLink></li>
            <li><NavLink>Community</NavLink></li>
            <li><NavLink>Security Center</NavLink></li>
            <li><NavLink>Seller Center</NavLink></li>
            <li><NavLink>Policies</NavLink></li>
            <li><NavLink>Affiliates</NavLink></li>
            <li><NavLink>Help & Contact</NavLink></li>
            <li><NavLink>Site Map</NavLink></li>
          </ul>
          <p>Copyright © 1995-2023 eBay Inc. All Rights Reserved.
Accessibility
,
User Agreement
,
Privacy
,
Payments Terms of Use
,
Cookies
,
Your Privacy Choices
and
AdChoice</p>
        </div>
      </Container>
    )
  );
};

export default Footer;
