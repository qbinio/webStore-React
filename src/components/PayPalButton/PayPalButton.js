import React, { useContext } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import AppContext from "../../context/context";

const PayPalButton = () => {
  const context = useContext(AppContext);

  const { cartTotal, clearAndCloseCart } = context;

  const onSuccess = (payment) => {
    console.log(payment);
    clearAndCloseCart();
  };

  const onCancel = (res) => {
    console.log(res);
  };

  const onError = (err) => {
    console.log(err);
  };

  const client = {
    sandbox: process.env.REACT_APP_PAYPAL_SANDBOX_KEY,
    production: "",
  };

  return (
    <PaypalExpressBtn
      onSuccess={onSuccess}
      onCancel={onCancel}
      onError={onError}
      currency="USD"
      env="sandbox"
      client={client}
      total={cartTotal}
    />
  );
};

export default PayPalButton;
