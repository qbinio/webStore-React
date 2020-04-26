import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import MainTemplate from "./templates/MainTemplate/MainTemplate";
import Home from "./views/Home/Home";
import About from "./views/Contact/Contact";
import Products from "./views/Products/Products";
import Contact from "./views/Contact/Contact";

const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.about} component={About} />
          <Route path={routes.products} component={Products} />
          <Route path={routes.contact} component={Contact} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
