import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import MainTemplate from "./templates/MainTemplate/MainTemplate";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Products from "./views/Products/Products";
import SingleProduct from "./views/SingleProduct/SingleProduct";
import Contact from "./views/Contact/Contact";
import AppContext from "./context/context";
import { productDataArray } from "./localDate/productDataArray";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const Root = () => {
  const initalProductsState = [...productDataArray];

  const [isCartOpen, setCartVisibility] = useState(false);
  const [cartCounter, setCartCounter] = useState(0);
  const [products, setProducts] = useState([...initalProductsState]);
  const [shoppingCart, setShoppingCart] = useState([...new Set([])]);
  const [productQuantityCount, setProductQuantityCount] = useState(1);
  const [cartTotal, setCartTotal] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [errorSearchInput, setErrorSearchInput] = useState("");

  const handleCartOpen = () => {
    setCartVisibility(true);
  };
  const handleCartClose = () => {
    setCartVisibility(false);
  };

  const handleAddCartCounter = () => {
    setCartCounter(cartCounter + 1);
  };

  const addProductQuantity = (type) => {
    console.log(shoppingCart.productQuantity);
    shoppingCart.forEach((item) => {
      if (item.productName === type) {
        item.productQuantity = item.productQuantity + 1;
        calculateTotals(type);
      }
      console.log(item.productQuantity);
    });
    setCartCounter(cartCounter + 1);
  };

  const deleteProductQuantity = (type) => {
    shoppingCart.forEach((item) => {
      if (item.productName === type) {
        if (item.productQuantity > 1)
          item.productQuantity = item.productQuantity - 1;
        else {
          deleteFn(type);
        }
      }
      calculateTotals(type);
    });
    setCartCounter(cartCounter - 1);
  };

  const addProductToCart = (productName) => {
    const filteredProduct = products.filter(
      (product) => product.productName === productName
    );

    setShoppingCart([...new Set([...shoppingCart, ...filteredProduct])]);

    addProductQuantityAndPrice(productName);
  };

  const deleteFn = (type) => {
    const filteredProducts = shoppingCart.filter(
      (product) => product.productName !== type
    );

    const deletedProduct = shoppingCart.find(
      (item) => item.productName === type
    );

    console.log(deletedProduct);

    setCartCounter(cartCounter - deletedProduct.productQuantity);
    deletedProduct.productQuantity = 1;
    setShoppingCart([...new Set([...filteredProducts])]);
  };

  const addProductQuantityAndPrice = (type) => {
    shoppingCart.forEach((item) => {
      if (item.productName === type) {
        console.log("TAK");
        item.productQuantity = item.productQuantity + 1;
      } else {
        console.log("NIe");
      }
    });
  };

  const calculateTotals = () => {
    let total = 0;

    shoppingCart.forEach((item) => {
      total = total + item.productPrice * item.productQuantity;
    });

    setCartTotal(total);
  };

  const searchProductFn = (e) => {
    e.preventDefault();
    let tempProducts = [...products];

    const searchInputValue = e.target.search.value;

    if (searchInputValue.length > 0) {
      tempProducts = tempProducts.filter((item) => {
        let tempSearch = searchInputValue.toLowerCase();
        let tempName = item.productName
          .toLowerCase()
          .slice(0, searchInputValue.length);

        if (tempSearch === tempName) {
          return item;
        }
      });
    } else if (searchInputValue.length === 0) {
      setErrorSearchInput("Input nie moze być pusty");
    }

    if (searchInputValue.length > 0) {
      setSearchProducts(tempProducts);

      if (tempProducts.length === 0) {
        setErrorSearchInput("Nie ma takiego produktu");
      }
    }

    e.target.reset();
  };

  const resetSearchInputProducts = () => {
    setSearchProducts([]);
  };
  const clearErrorAlerts = () => {
    setErrorSearchInput("");
  };

  useEffect(
    () => {
      calculateTotals();
    },
    [shoppingCart],
    addProductQuantity
  );

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          handleCartOpen,
          handleCartClose,
          isCartOpen,
          cartCounter,
          handleAddCartCounter,
          shoppingCart,
          products,
          deleteFn,
          addProductToCart,
          productQuantityCount,
          addProductQuantityAndPrice,
          cartTotal,
          filteredProducts,
          searchProductFn,
          searchProducts,
          resetSearchInputProducts,
          errorSearchInput,
          clearErrorAlerts,
          addProductQuantity,
          deleteProductQuantity,
        }}
      >
        <MainTemplate>
          <ScrollToTop />
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.about} component={About} />
            <Route exact path={routes.products} component={Products} />
            <Route path={routes.contact} component={Contact} />
            <Route path={routes.singleProduct} component={SingleProduct} />
          </Switch>
        </MainTemplate>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
