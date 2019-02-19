import React from "react";
import "./header.css";

const Header = ({ numItems, total }) => {
  return (
    <header className="header row">
      <a href="#" className="logo text-dark" href="#">
        Book Store
      </a>
      <a href="#" className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </a>
    </header>
  );
};

export default Header;
