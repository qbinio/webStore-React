import React, { useState, useEffect, useLayoutEffect } from "react";
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
import { client } from "./contentful/contentfulConfig";

const Root = () => {
  const [initalProductsState, setInitalProductsState] = useState([]);
  const cartFromLocalStorage = JSON.parse(
    localStorage.getItem("itemsInCart") || "[]"
  );
  const cartCounterValue = JSON.parse(localStorage.getItem("cartCounter") || 0);

  const [isCartOpen, setCartVisibility] = useState(false);
  const [cartCounter, setCartCounter] = useState(cartCounterValue);
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([
    ...new Set(cartFromLocalStorage),
  ]);
  const [cartTotal, setCartTotal] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [errorSearchInput, setErrorSearchInput] = useState("");
  const [filterPrice, setFilterPrice] = useState(0);
  const [maxProductPrice, setMaxProductPrice] = useState(0);
  const [freeDelivery, setFreeDelivery] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [searchProductByName, setSearchProductByName] = useState("");
  const [widthPage, setWidthPage] = useState(window.innerWidth);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  useEffect(() => {
    const updateSize = () => {
      setWidthPage(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
  }, []);

  const setContentfulData = (data) => {
    const contentfulProducts = data.map((item) => {
      const id = item.sys.id;

      const formatedProductImage = item.fields.productImage.fields.file.url;

      const product = {
        id,
        ...item.fields,
        productImage: formatedProductImage,
      };

      console.log(product);

      return product;
    });
    setInitalProductsState([...contentfulProducts]);
    setProducts([...contentfulProducts]);
  };

  const getContentfulData = () => {
    client
      .getEntries({
        content_type: "product",
      })
      .then((res) => {
        console.log(res);
        setContentfulData(res.items);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getContentfulData();
  }, []);

  const handleAlertOpen = () => {
    setAlertOpen(true);
  };
  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  const handleSearchProductByNameChange = (e) => {
    setSearchProductByName(e.target.value);
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filterProducts = () => {
    let tempProducts = [...initalProductsState];

    if (searchProductByName.length > 0) {
      tempProducts = tempProducts.filter((product) => {
        return (
          product.productName
            .toLowerCase()
            .slice(0, searchProductByName.length) ===
          searchProductByName.toLowerCase()
        );
      });
    }

    if (categoryFilter !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.productCategory === categoryFilter;
      });
    }

    let tempPrice = parseInt(filterPrice);
    tempProducts = tempProducts.filter(
      (product) => product.productPrice <= tempPrice
    );

    if (freeDelivery) {
      tempProducts = tempProducts.filter(
        (product) => product.freeDelivery === true
      );
    }

    setProducts([...tempProducts]);
  };
  useEffect(() => {
    filterProducts();
  }, [categoryFilter, filterPrice, freeDelivery, searchProductByName]);

  const showAndCloseAlertAfterTimeWithContent = (time, content) => {
    handleAlertOpen();
    setAlertContent(content);
    setTimeout(() => {
      handleAlertClose();
    }, time);
  };

  const clearAndCloseCart = () => {
    setShoppingCart([]);
    setCartCounter(0);
    handleCartClose();
    showAndCloseAlertAfterTimeWithContent(5000, "Payment succeed!");
  };

  const handleFreeDelivery = (e) => {
    setFreeDelivery(e.target.checked);
  };

  const getMaxProductPrice = () => {
    const productsPrices = productDataArray.map((product) => {
      return product.productPrice;
    });

    console.log(productsPrices);

    const highestPrice = Math.max(...productsPrices);
    setMaxProductPrice(highestPrice);
    setFilterPrice(highestPrice);
  };

  useEffect(() => {
    getMaxProductPrice();
  }, []);

  const handleFilterPriceChange = (e) => {
    setFilterPrice(e.target.value);
  };

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

    let isProductAlreadyInCart;

    shoppingCart.forEach((product) => {
      if (product.productName === productName) {
        isProductAlreadyInCart = true;
      }
    });

    if (isProductAlreadyInCart) {
      setShoppingCart([...new Set([...shoppingCart])]);
    } else {
      setShoppingCart([...new Set([...shoppingCart, ...filteredProduct])]);
    }

    addProductQuantityAndPrice(productName);
    showAndCloseAlertAfterTimeWithContent(3500, "Product added to cart!");
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
        item.productQuantity = item.productQuantity + 1;
      } else {
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

  const resetSearchInputProducts = () => {
    setProducts([...initalProductsState]);
    setSearchProductByName("");
    setFreeDelivery(false);
    setCategoryFilter("all");
    getMaxProductPrice();
  };
  const clearErrorAlerts = () => {
    setErrorSearchInput("");
  };

  useEffect(
    () => {
      calculateTotals();
      localStorage.setItem("itemsInCart", JSON.stringify(shoppingCart));
      localStorage.setItem("cartCounter", JSON.stringify(cartCounter));
    },
    [shoppingCart, cartCounter],
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
          addProductQuantityAndPrice,
          cartTotal,
          filteredProducts,
          resetSearchInputProducts,
          errorSearchInput,
          clearErrorAlerts,
          addProductQuantity,
          deleteProductQuantity,
          filterPrice,
          handleFilterPriceChange,
          maxProductPrice,
          handleFreeDelivery,
          freeDelivery,
          clearAndCloseCart,
          handleAlertClose,
          alertOpen,
          alertContent,
          initalProductsState,
          handleCategoryFilterChange,
          categoryFilter,
          handleSearchProductByNameChange,
          searchProductByName,
          showAndCloseAlertAfterTimeWithContent,
          widthPage,
          toggleBurgerMenu,
          showBurgerMenu,
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
