import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../Pages";
import "./app.css";
import Header from "../Header";

const App = () => {
  return (
    <main role="main" className="container">
      <Header numItem={5} total={210} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;
