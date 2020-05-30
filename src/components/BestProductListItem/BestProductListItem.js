import React, { useContext } from "react";
import "./BestProductListItem.css";
import AppContext from "../../context/context";

const BestProductListItem = (props) => {
  const context = useContext(AppContext);
  const { handleAddCartCounter, addProductToCart } = context;

  return (
    <div className="bestProductListItem_wrapper">
      <div className="bestProductListItem_imageBox">
        <img
          className="bestProductListItem_image"
          src={props.img}
          alt="Product foto "
        />
      </div>

      <div className="bestProductListItem_descWrapper">
        <div className="bestProductListItem_headerNameWrapper">
          <h2 className="bestProductListItem_name"> {props.name} </h2>
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
