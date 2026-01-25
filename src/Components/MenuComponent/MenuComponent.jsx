import React from 'react';
import './MenuComponent.css';
import menu from '../../assets/menu.png';
import search from '../../assets/search.png';
import shoppingCart from '../../assets/shopping_cart.png';

const MenuComponent = () => {
    return (
        <div className="menu-component">

          
            <div className="menu-left">
                <img src={menu} alt="Menu" className="menu1" />
                <span className="menu-text">Menu</span>
            </div>

            
            <div className="menu-right">
                <img src={search} alt="Search" className="search" />
                <img src={shoppingCart} alt="Shopping Cart" className="cart1" />
            </div>

        </div>
    );
};

export default MenuComponent;
