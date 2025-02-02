import React from "react";
import { FaShopify } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="top-nav">
        <Link to="/">
          <div className="logo">
            <span>E-Shop</span>
            <FaShopify />
          </div>
        </Link>

        <form className="search-box">
          <input type="text" placeholder="Search products.." />
          <button>
            <IoSearchOutline />
          </button>
        </form>
        <div className="cart">
          <FaCartShopping />
          <span>0</span>
        </div>
      </div>
      <div className="bottom-nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
