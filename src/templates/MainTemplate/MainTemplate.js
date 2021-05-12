import React from "react";
import Alert from "../../components/Alert/Alert";
import NavBar from "../../components/Navigation/NavBar";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

const MainTemplate = ({ children }) => (
  <>
    <NavBar />
    <Alert />
    <ShoppingCart />
    <>{children}</>
  </>
);

export default MainTemplate;
