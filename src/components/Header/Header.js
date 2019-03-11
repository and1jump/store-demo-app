import React from "react";
import "./header.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ items }) => {
  return (
    <header className="header row">
      <Link to="/">
        <div className="logo text-dark">Book Store</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          Cart (
          {items.length
            ? items.reduce((acc, item) => acc + item.count, 0)
            : Number(0)}
          )
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
  return {
    items: cartItems
  };
};

export default connect(mapStateToProps)(Header);
