import React, { useContext } from "react";
import AppContext from "../../../context/context";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/index";
import "./NavMobile.css";
import Hamburger from "hamburger-react";
import Zoom from "react-reveal/Zoom";

const NavMobile = () => {
  const context = useContext(AppContext);
  const { showBurgerMenu, toggleBurgerMenu } = context;
  return (
    <>
      <Hamburger
        className="hamburger"
        toggled={showBurgerMenu}
        toggle={toggleBurgerMenu}
      />
      {showBurgerMenu ? (
        <ul className="navMobile">
          <Zoom right cascade>
            <li>
              <NavLink
                className="navBarElement"
                activeClassName="activeNavBarElement"
                exact
                to={routes.home}
                onClick={toggleBurgerMenu}
              >
                {" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navBarElement"
                activeClassName="activeNavBarElement"
                to={routes.products}
                onClick={toggleBurgerMenu}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navBarElement"
                activeClassName="activeNavBarElement"
                to={routes.about}
                onClick={toggleBurgerMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navBarElement"
                activeClassName="activeNavBarElement"
                to={routes.contact}
                onClick={toggleBurgerMenu}
              >
                Contact
              </NavLink>
            </li>
          </Zoom>
        </ul>
      ) : null}
    </>
  );
};

export default NavMobile;
