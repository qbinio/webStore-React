import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/index";
import "./BestProductList.css";
import BestProductListItem from "../BestProductListItem/BestProductListItem";
import AppContext from "../../context/context";
import Flip from "react-reveal/Flip";

const BestProductList = () => {
  const context = useContext(AppContext);
  const { products } = context;

  return (
    <div className="bestProductList_wrapper">
      <h2 className="bestProductList_title">
        {" "}
        <Flip cascade> Bestsellery </Flip>{" "}
      </h2>
      <ul className="bestProductList">
        {products.slice(2, 6).map((item) => {
          return (
            <li key={item.productName}>
              <BestProductListItem
                name={item.productName}
                image={item.productImage}
                price={item.productPrice}
                weight={item.productWeight}
                quantity={item.productQuantity}
                desc={item.productDescription}
              />
            </li>
          );
        })}
      </ul>

      <div className="bestProductList_linkWrapper">
        <Link className="bestProductList_link" to={routes.products}>
          See more products
        </Link>
      </div>
    </div>
  );
};

export default BestProductList;
