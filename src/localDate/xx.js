import React from "react";
import NavBar from "../components/Navigation/NavBar";

const MainTemplate = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
