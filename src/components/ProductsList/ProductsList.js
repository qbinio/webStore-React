import React, { useContext } from "react";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import "./ProductList.css";
import AppContext from "../../context/context";
import BackIcon from "../../assets/icons/multimedia-option.svg";

const ProductList = () => {
  const context = useContext(AppContext);
  const { products, searchProducts, resetSearchInputProducts } = context;

  console.log(searchProducts);
  return (
    <div className="productList_wrapper">
      {searchProducts.length === 0 ? (
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
          <div className="productList_buttonWrapper">
            <button
              className="productList_returnButton"
              onClick={resetSearchInputProducts}
            >
              <img
                className="productList_backIcon"
                src={BackIcon}
                alt="Back Icon"
              />
              <p>Back</p>
            </button>
          </div>
          <ul className="productList">
            {searchProducts.map((product) => {
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
        </>
      )}
    </div>
  );
};

export default ProductList;
