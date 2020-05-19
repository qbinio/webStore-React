import React from "react";
import NavBar from "../../components/Navigation/NavBar";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

const MainTemplate = ({ children }) => (
  <>
    <NavBar />
    <ShoppingCart />
    <>{children}</>
  </>
);

export default MainTemplate;
