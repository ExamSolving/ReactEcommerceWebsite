import React from "react";
import { FaShopify } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import "../Nav/Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="top-nav">
        <div className="logo">
          <span>E-Shop</span>
          <FaShopify />
        </div>
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
        <li>Home</li>
        <li>Shop</li>
        <li>Cart</li>
        <li>Contact</li>
      </div>
    </div>
  );
};

export default Nav;
