import React from "react";
import NavBar from "../../components/Navigation/NavBar";

const MainTemplate = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

export default MainTemplate;
