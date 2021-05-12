import React, { useContext } from "react";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import "./ProductList.css";
import AppContext from "../../context/context";

const ProductList = () => {
  const context = useContext(AppContext);
  const { products, resetSearchInputProducts } = context;

  return (
    <div className="productList_wrapper">
      {products.length !== 0 ? (
        <ul className="productList">
          {products.map((product) => {
            return (
              <li key={product.productName}>
                <ProductsListItem
                  name={product.productName}
                  image={product.productImage}
                  price={product.productPrice}
                  weight={product.productWeight}
                  quantity={product.productQuantity}
                  desc={product.productDescription}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <>
          <button class="backToAll_btn" onClick={resetSearchInputProducts}>
            X
          </button>
          <p className="productList_alert">No results :(</p>
        </>
      )}
    </div>
  );
};

export default ProductList;
