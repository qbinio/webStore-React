import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AppContext from "../../context/context";
import "./ShoppingCart.css";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "400px",
    width: "700px",
    overflow: "hidden",
  },
}));

const ShoppingCart = () => {
  const classes = useStyles();

  const context = useContext(AppContext);

  const {
    isCartOpen,
    handleCartClose,
    shoppingCart,
    addProductQuantity,
    productQuantityCount,
    deleteProductFromCart,
    deleteFn,
    cartTotal,
  } = context;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isCartOpen}
        onClose={handleCartClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isCartOpen}>
          <div className={classes.paper}>
            <div className="shoppingCart_totalWrapper">
              <h2 style={{ textAlign: "center" }}>Your Shopping Cart</h2>
              <h2 className="shoppingCart_total">Total: {cartTotal}$</h2>
            </div>
            <div className="shoppingCart_titlesWrapper">
              <p className="shoppingCart_titleName">Product</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            <ul>
              {shoppingCart.map((item) => {
                return (
                  <div className="shoppingCart__wrapper">
                    <li
                      className="shoppingCart_listItem"
                      key={item.productName}
                    >
                      <div>
                        <img
                          src={item.productImage}
                          alt="product foto"
                          className="shoppingCart__image"
                        />
                      </div>
                      <p className="shoppingCart__name">{item.productName}</p>
                      <div className="shoppingCart__quntityWrapper">
                        <button className="shoppingCart_buttonMinus">-</button>
                        <p className="shoppingCart__quantity">
                          {item.productQuantity}
                        </p>
                        <button
                          onClick={() => {
                            addProductQuantity(item.productName);
                          }}
                          className="shopingCart_buttonPlus"
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>

                      <p className="shoppingCart_price">{item.productPrice}$</p>

                      <button
                        onClick={() => deleteFn(item.productName)}
                        className="shoppingCart__deleteButton"
                      >
                        X
                      </button>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ShoppingCart;
