import React from "react";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import { productDataArray } from "../../localDate/productDataArray";
import "./ProductList.css";

const ProductList = () => {
  return (
    <ul className="productList">
      {productDataArray.map((product) => {
        return (
          <ProductsListItem
            name={product.productName}
            img={product.productImage}
            price={product.productPrice}
            weight={product.productWeight}
            quantity={product.productQuantity}
            desc={product.productDescription}
          />
        );
      })}
    </ul>
  );
};

export default ProductList;
