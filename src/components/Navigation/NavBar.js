import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBarWrapper">
      <ul className="navBar">
        <li>
          <Link className="navBarElement" to={routes.home}>
            Home
          </Link>
        </li>
        <li>
          <Link className="navBarElement" to={routes.products}>
            Products
          </Link>
        </li>
        <li>
          <Link className="navBarElement" to={routes.about}>
            About
          </Link>
        </li>
        <li>
          <Link className="navBarElement" to={routes.contact}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
