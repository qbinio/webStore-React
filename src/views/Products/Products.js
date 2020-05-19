import React, { useContext } from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import SearchInput from "../../components/SearchInput/SearchInput";
import "./Products.css";

const Products = () => {
  return (
    <>
      <SearchInput />
      <ProductsList />
    </>
  );
};

export default Products;
