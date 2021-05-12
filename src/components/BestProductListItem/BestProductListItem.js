import React, { useContext } from "react";
import "./BestProductListItem.css";
import AppContext from "../../context/context";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";

const BestProductListItem = (props) => {
  const context = useContext(AppContext);
  const { handleAddCartCounter, addProductToCart } = context;

  return (
    <div className="bestProductListItem_wrapper">
      <div className="bestProductListItem_imageBox">
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
            className="bestProductListItem_image"
            src={props.image}
            alt="Product foto "
          />
        </Link>
      </div>

      <div className="bestProductListItem_descWrapper">
        <div className="bestProductListItem_headerNameWrapper">
          <h2 className="bestProductListItem_name">
            <Flip cascade> {props.name} </Flip>{" "}
          </h2>
        </div>
        <div>
          <p className="bestProductListItem_desc">
            {" "}
            {props.desc.length < 100
              ? props.desc
              : `${props.desc.substring(0, 100)}...`}
          </p>
        </div>

        <div>
          <p className="bestProductListItem_price">
            {props.price}$ | {props.weight}
          </p>
        </div>
        <button
          className="bestProductListItem_addToCartButton"
          onClick={() => {
            handleAddCartCounter();
            addProductToCart(props.name);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BestProductListItem;
