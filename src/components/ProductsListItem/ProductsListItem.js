import React, { useContext } from "react";
import "./ProductsListItem.css";
import AppContext from "../../context/context";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const ProductListItem = (props) => {
  const context = useContext(AppContext);
  const {
    handleAddCartCounter,
    addProductToCart,
    increaseProductQuantity,
    addProductQuantity,
  } = context;
  return (
    <div className="productListItemWrapper">
      <div className="productImageBox">
        <Link
          to={{
            pathname: `/products/${props.name}`,
            state: {
              productName: props.name,
              productPrice: props.price,
              productImage: props.image,
              productWeight: props.weight,
              productQuantity: props.quantity,
              productDescription: props.desc,
            },
          }}
        >
          <img
            className="productListItemImage"
            src={props.image}
            alt="Product foto "
          />
        </Link>
      </div>

      <div className="productDescSectionWrapper">
        <div className="productListHeaderNameWrapper">
          <h2 className="productListItemName"> {props.name} </h2>
        </div>
        <div>
          <p className="productListItemDesc">
            {" "}
            {props.desc.length < 100
              ? props.desc
              : `${props.desc.substring(0, 100)}...`}
          </p>
        </div>

        <div>
          <p className="productListItemPrice">
            {props.price}$ | {props.weight}
          </p>
        </div>
        <button
          className="productAddToCartButton"
          onClick={() => {
            handleAddCartCounter();
            addProductToCart(props.name);
            // increaseProductQuantity(props.name);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;
