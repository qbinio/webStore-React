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

    setShoppingCart([...new Set([...filteredProducts])]);
  };

  const addProductQuantityAndPrice = (type) => {
    console.log(shoppingCart);
    let initialProductPrice = 0;

    productDataArray.forEach((product) => {
      if (product.productName === type) {
        console.log(product.productPrice);
        initialProductPrice = product.productPrice;
      }
    });
    console.log(initialProductPrice);

    shoppingCart.forEach((item) => {
      if (item.productName === type) {
        console.log("TAK");
        item.productQuantity = item.productQuantity + 1;
        item.productPrice = initialProductPrice * item.productQuantity;
        console.log(item.productPrice);
      } else {
        console.log("NIe");
      }
      item.productPrice = initialProductPrice;
      console.log(initialProductPrice);
    });
  };

  // const increaseProductQuantity = (type) => {
  //   const copyOfShoppingCart = [...shoppingCart];
  //   console.log(copyOfShoppingCart);

  //   copyOfShoppingCart.forEach((item) => {
  //     if (item.productName === type) {
  //       item.productQuantity = item.productQuantity + 1;
  //       item.productPrice = item.productPrice + 30;
  //       console.log(item.productName);
  //       console.log(type);
  //       console.log(copyOfShoppingCart);
  //     } else {
  //       console.log("ERROR");
  //       console.log(copyOfShoppingCart);
  //     }

  //     setShoppingCart([...copyOfShoppingCart]);
  //   });

  // let selectedProduct = shoppingCart.find(
  //   (item) => item.productName === type
  // );

  // console.log(selectedProduct);

  // let selectedProductQuantity = selectedProduct.productQuantity;
  // let selectedProductPrice = selectedProduct.productPrice;
  // const firstProductPrice = selectedProduct.productPrice;
  // console.log(firstProductPrice);

  // selectedProduct.productQuantity = selectedProductQuantity + 1;
  // selectedProduct.productPrice = selectedProductPrice + firstProductPrice;
  // selectedProduct.productPrice = console.log(selectedProductQuantity);
  // };

  const calculateTotals = () => {
    let total = 0;

    shoppingCart.forEach((item) => {
      total = total + item.productPrice;
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

  useEffect(() => {
    calculateTotals();
  }, [shoppingCart]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [routes.products]);

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
          // increaseProductQuantity,
          errorSearchInput,
          clearErrorAlerts,
        }}
      >
        <MainTemplate>
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
