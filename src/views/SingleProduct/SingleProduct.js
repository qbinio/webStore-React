import React, { useContext } from "react";
import "./SingleProduct.css";
import AppContext from "../../context/context";

const SingleProduct = (props) => {
  console.log(props);
  const context = useContext(AppContext);
  const { handleAddCartCounter, addProductToCart } = context;

  return (
    <div className="singleProduct_mainWrapper">
      <div className="singleProduct_wrapper">
        <div className="singleProduct_imageWrapper">
          <img
            className="singleProduct_image"
            src={props.location.state.productImage}
          />
        </div>
        <div className="singleProduct_infoWrapper">
          <h2 className="singleProduct_name">
            {props.location.state.productName}
          </h2>
          <h3 className="singleProduct_price">
            {props.location.state.productPrice}$
          </h3>
          <p className="singleProduct_desc">
            {props.location.state.productDescription}
          </p>
          <button className="singleProduct_weight">
            {props.location.state.productWeight}
          </button>
          <div className="singleProduct_addToCartWrapper">
            <button
              className="singleProduct_addToCartButton"
              onClick={() => {
                handleAddCartCounter();
                addProductToCart(props.location.state.productName);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
