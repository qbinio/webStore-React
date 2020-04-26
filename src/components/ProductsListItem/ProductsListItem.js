import React from "react";
import "./ProductsListItem.css";

const ProductListItem = (props) => {
  return (
    <div className="productListItemWrapper">
      <div className="div1">
        <img
          className="productListItemImage"
          src={props.img}
          alt="Product Image "
        />
      </div>
      <div className="div2">
        <h2 className="productListItemName"> {props.name} </h2>
        <p className="productListItemPrice"> {props.price} $ </p>
        <p className="productListItemWeight"> {props.weight} </p>
        <p className="productListItemQuantity"> {props.quantity} </p>
        <p className="productListItemDesc"> {props.desc}</p>
        <button>add new cart</button>
      </div>
    </div>
  );
};

export default ProductListItem;
