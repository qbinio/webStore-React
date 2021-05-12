import React from "react";
import FilterMenu from "../../components/ProductsFilters/FilterMenu";
import ProductsList from "../../components/ProductsList/ProductsList";
import "./Products.css";

const Products = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <div className="productsContainer">
        <FilterMenu />
        <ProductsList />
      </div>
    </>
  );
};

export default Products;
