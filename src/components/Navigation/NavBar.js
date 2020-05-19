import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import "./NavBar.css";
import cartIcon from "../../assets/icons/shopping-bags.svg";
import AppContext from "../../context/context";

const NavBar = () => {
  const context = useContext(AppContext);
  const { handleCartOpen, cartCounter, resetSearchInputProducts } = context;
  return (
    <div className="navBarWrapper">
      <ul className="navBar">
        <li>
          <Link className="navBarElement" to={routes.home}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className="navBarElement"
            to={routes.products}
            onClick={resetSearchInputProducts}
          >
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
        <li>
          <button className="cartButton" onClick={handleCartOpen}>
            <img src={cartIcon} alt="cart icon" className="cartIcon" />
            <span className="cartCounter">{cartCounter}</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
