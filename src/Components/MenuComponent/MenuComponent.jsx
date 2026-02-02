// import React from 'react';
// import './MenuComponent.css';
// import menu from '../../assets/menu.png';
// import search from '../../assets/search.png';
// import shoppingCart from '../../assets/shopping_cart.png';

// const MenuComponent = () => {
//     return (
//         <div className="menu-component">


//             <div className="menu-left">
//                 <img src={menu} alt="Menu" className="menu1" />
//                 <span className="menu-text">Menu</span>
//             </div>


//             <div className="menu-right">
//                 <img src={search} alt="Search" className="search" />
//                 <img src={shoppingCart} alt="Shopping Cart" className="cart1" />
//             </div>

//         </div>
//     );
// };

// export default MenuComponent;\



// import React, { useState } from 'react';
// import './MenuComponent.css';
// import menu from '../../assets/menu.png';
// import search from '../../assets/search.png';
// import shoppingCart from '../../assets/shopping_cart.png';

// const MenuComponent = () => {

//     const [showMenu, setShowMenu] = useState(false);
//     const [showSearch, setShowSearch] = useState(false);

//     return (
//         <>
//             <div className="menu-component">

//                 {/* Left Menu */}
//                 <div
//                     className="menu-left"
//                     onClick={() => setShowMenu(!showMenu)}
//                 >
//                     <img src={menu} alt="Menu" className="menu1" />
//                     <span className="menu-text">Menu</span>
//                 </div>

//                 {/* Right Icons */}
//                 <div className="menu-right">
//                     <img
//                         src={search}
//                         alt="Search"
//                         className="search"
//                         onClick={() => setShowSearch(!showSearch)}
//                     />
//                     <img src={shoppingCart} alt="Shopping Cart" className="cart1" />
//                 </div>

//             </div>

//             {/* SEARCH BAR */}
//             <div className={`search-box ${showSearch ? "active" : "hide"}`}>
//                 <input
//                     type="text"
//                     placeholder="Search products..."
//                 />
//             </div>

//             {/* MENU LIST */}
//             <div className="menu-compo">
//                 <div className={`menu-dropdown ${showMenu ? "active" : "hide"}`}>
//                     <p>Product Options</p>
//                     <p>Features</p>
//                     <p>Specifications</p>
//                     <p>Resources / Downloads</p>
//                     <p className="accesss">Accessories</p>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default MenuComponent;



// import React, { useState } from 'react';
// import './MenuComponent.css';
// import menu from '../../assets/menu.png';
// import search from '../../assets/search.png';
// import shoppingCart from '../../assets/shopping_cart.png';

// const MenuComponent = () => {

//     const [showMenu, setShowMenu] = useState(false);
//     const [showSearch, setShowSearch] = useState(false);
//     const [searchText, setSearchText] = useState("");

//     const menuItems = [
//         "Product Options",
//         "Features",
//         "Specifications",
//         "Resources / Downloads",
//         "Accessories"
//     ];

//     const filteredMenu = menuItems.filter(item =>
//         item.toLowerCase().includes(searchText.toLowerCase())
//     );

//     return (
//         <>
//             <div className="menu-component">

//                 <div
//                     className="menu-left"
//                     onClick={() => setShowMenu(!showMenu)}
//                 >
//                     <img src={menu} alt="Menu" className="menu1" />
//                     <span className="menu-text">Menu</span>
//                 </div>

         
//                 <div className="menu-right">
//                     <img
//                         src={search}
//                         alt="Search"
//                         className="search"
//                         onClick={() => setShowSearch(!showSearch)}
//                     />
//                     <img src={shoppingCart} alt="Cart" className="cart1" />
//                 </div>
//             </div>

        
//             <div className={`search-box ${showSearch ? "active" : "hide"}`}>
//                 <input
//                     type="text"
//                     placeholder="Search menu..."
//                     value={searchText}
//                     onChange={(e) => setSearchText(e.target.value)}
//                 />
//             </div>

        
//             <div className={`menu-dropdown ${setShowSearch ? "active" : "hide"}`}>
//                 {
//                     filteredMenu.length > 0 ? (
//                         filteredMenu.map((item, index) => (
//                             <p key={index}>{item}</p>
//                         ))
//                     ) : (
//                         <p>No results found</p>
//                     )
//                 }
//             </div>
//         </>
//     );
// };

// export default MenuComponent;




import React, { useState } from 'react';
import './MenuComponent.css';
import menu from '../../assets/menu.png';
import search from '../../assets/search.png';
import shoppingCart from '../../assets/shopping_cart.png';

const MenuComponent = () => {
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

  // Filter menu items based on search text
  const filteredMenu = menuItems.filter(item =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      {/* Top bar */}
      <div className="menu-component">

        {/* Left Menu icon */}
        <div
          className="menu-left"
          onClick={() => setShowMenu(!showMenu)} // toggle menu
        >
          <img src={menu} alt="Menu" className="menu1" />
          <span className="menu-text">Menu</span>
        </div>

        {/* Right Icons */}
        <div className="menu-right">
          <img
            src={search}
            alt="Search"
            className="search"
            onClick={() => {
              setShowSearch(!showSearch); // toggle search box
              setShowMenu(true); // always show menu when search opens
            }}
          />
          <img src={shoppingCart} alt="Cart" className="cart1" />
        </div>
      </div>

      {/* Search input */}
      <div className={`search-box ${showSearch ? "active" : "hide"}`}>
        <input
          type="text"
          placeholder="Search menu..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Menu dropdown */}
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
