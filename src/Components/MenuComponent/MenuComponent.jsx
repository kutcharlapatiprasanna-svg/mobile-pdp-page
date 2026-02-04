



import React, { useState } from 'react';
import './MenuComponent.css';
import menu from '../../assets/menu.png';
import search from '../../assets/search.png';
import shoppingCart from '../../assets/shopping_cart.png';
import { useNavigate } from 'react-router-dom';

const MenuComponent = () => {

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const menuItems = [
    "Product Options",
    "Features",
    "Specifications",
    "Resources / Downloads",
    "Accessories"
  ];

  const filteredMenu = menuItems.filter(item =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>

      <div className="menu-component">


        <div
          className="menu-left"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img src={menu} alt="Menu" className="menu1" />
          <span className="menu-text">Menu</span>
        </div>


        <div className="menu-right">
          <img
            src={search}
            alt="Search"
            className="search"
            onClick={() => {
              setShowSearch(!showSearch);
              setShowMenu(true);
            }}
          />

          <img
            src={shoppingCart}
            alt="Cart"
            className="cart1"

            onClick={() => {
              console.log("Cart clicked")
              navigate("/cart")
            }}
          />
        </div>
      </div>


      <div className={`search-box ${showSearch ? "active" : "hide"}`}>
        <input
          type="text"
          placeholder="Search menu..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>


      <div className={`menu-dropdown ${showMenu ? "active" : "hide"}`}>
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>No results found</p>
        )}
      </div>
    </>
  );
};

export default MenuComponent;



