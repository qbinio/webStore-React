import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import "./NavBar.css";
import cartIcon from "../../assets/icons/shopping-bags.svg";
import AppContext from "../../context/context";
import NavMobile from "./NavMobile/NavMobile";

const NavBar = () => {
  const context = useContext(AppContext);
  const {
    handleCartOpen,
    cartCounter,
    resetSearchInputProducts,
    widthPage,
    showBurgerMenu,
    toggleBurgerMenu,
  } = context;

  return (
    <div className="navBarWrapper">
      <NavLink className="logo" exact to={routes.home}>
        {" "}
        Jakub Korzeń
      </NavLink>

      {widthPage > 780 ? (
        <ul className="navBar">
          <li>
            <NavLink
              className="navBarElement"
              activeClassName="activeNavBarElement"
              to={routes.products}
              onClick={resetSearchInputProducts}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navBarElement"
              activeClassName="activeNavBarElement"
              to={routes.about}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navBarElement"
              activeClassName="activeNavBarElement"
              to={routes.contact}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      ) : (
        <NavMobile />
      )}

      <button className="cartButton" onClick={handleCartOpen}>
        <img src={cartIcon} alt="cart icon" className="cartIcon" />
        <span className="cartCounter">{cartCounter}</span>
      </button>
    </div>
  );
};

export default NavBar;
