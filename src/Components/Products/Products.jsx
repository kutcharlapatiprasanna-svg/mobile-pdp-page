// // 

// import React, { useState } from "react";
// import "./Products.css";
// import keyboard from "../../assets/keyboard_arrow_down.png";

// function Products() {
//   const [activeBtn, setActiveBtn] = useState(null); 

//   return (
//     <div className="mobile-card-wrapper">
//       <div className="mobile-card">

//         <div className="top-row">
//           <h1 className="price">$262.23</h1>
//           <h1 className="stock">In Stock</h1>
//         </div>

//         <p className="text">
//           Deliver to <span>Chris - Huntington 11743</span>
//         </p>

//         <p className="text">
//           Est Delivery Date: <span>11/10/24</span>
//         </p>

//         <div className="action-row">

//           <button
//             className={`outline-btn ${activeBtn === "qty" ? "active" : ""}`}
//             onClick={() => setActiveBtn("qty")}
//           >
//             Quantity: 1
//           </button>

//           <button
//             className={`outline-btn ${activeBtn === "cs" ? "active" : ""}`}
//             onClick={() => setActiveBtn("cs")}
//           >
//             1/CS <img src={keyboard} alt="Dropdown" />
//           </button>
//         </div>

//         <button className="add-btn">Add to Cart</button>

//       </div>
//     </div>
//   );
// }

// export default Products;




// import React from "react";
// import "./Products.css";

// function Products() {
//   return (
//     <div className="mobile-card-wrapper">
//       <div className="mobile-card">

//         <div className="top-row">
//           <h1 className="price">$262.23</h1>
//           <h1 className="stock">In Stock</h1>
//         </div>

//         <p className="text">
//           Deliver to <span>Chris - Huntington 11743</span>
//         </p>

//         <p className="text">
//           Est Delivery Date: <span>11/10/24</span>
//         </p>

//         <div className="action-row">
//           <select className="select">
//             <option>Quantity: 1</option>
//             <option>Quantity: 2</option>
//             <option>Quantity: 3</option>
//           </select>

//           <select className="select">
//             <option>1 / CS</option>
//             <option>2 / CS</option>
//             <option>3 / CS</option>
//           </select>
//         </div>

//         <button className="add-btn">Add to Cart</button>

//       </div>
//     </div>
//   );
// }

// export default Products;





// import React, { useState } from "react";
// import "./Products.css";

// function Products() {
//   const [active, setActive] = useState(null);

//   return (
//     <div className="mobile-card-wrapper">
//       <div className="mobile-card">

//         <div className="top-row">
//           <h1 className="price">$262.23</h1>
//           <h1 className="stock">In Stock</h1>
//         </div>

//         <p className="text">
//           Deliver to <span>Chris - Huntington 11743</span>
//         </p>

//         <p className="text">
//           Est Delivery Date: <span>11/10/24</span>
//         </p>

//         <div className="action-row">
//           <select
//             className={`select qty ${active === "qty" ? "active" : ""}`}
//             onClick={() => setActive("qty")}
//           >
//             <option>Quantity: 1</option>
//             <option>Quantity: 2</option>
//             <option>Quantity: 3</option>
//           </select>

//           <select
//             className={`select cs ${active === "cs" ? "active" : ""}`}
//             onClick={() => setActive("cs")}
//           >
//             <option>1 / CS</option>
//             <option>2 / CS</option>
//             <option>3 / CS</option>
//           </select>
//         </div>

//         <button className="add-btn">Add to Cart</button>

//       </div>
//     </div>
//   );
// }

// export default Products;






import React, { useState } from "react";
import "./Products.css";

function Products() {
  const [active, setActive] = useState(null);

  return (
    <div className="mobile-card-wrapper">
      <div className="mobile-card">

        {/* Top row */}
        <div className="top-row">
          <h1 className="price"><strong>$262.23</strong></h1>
          <h1 className="stock"><strong>In Stock</strong></h1>
        </div>

        {/* Delivery info */}
        <p className="text">
          Deliver to <span>Chris - Huntington<span className="zip">11743</span></span>
        </p>

        <p className="text">
          Est Delivery Date: <span>11/10/24</span>
        </p>

        {/* Action row */}
        <div className="action-row">
          <select
            className={`select qty ${active === "qty" ? "active" : ""}`}
            onClick={() => setActive("qty")}
          >
            <option>Quantity: 1</option>
            <option>Quantity: 2</option>
            <option>Quantity: 3</option>
          </select>

          <select
            className={`select cs ${active === "cs" ? "active" : ""}`}
            onClick={() => setActive("cs")}
          >
            <option>1 / CS</option>
            <option>2 / CS</option>
            <option>3 / CS</option>
          </select>
        </div>

        {/* Add to cart */}
        <button className="add-btn">Add to Cart</button>

      </div>
    </div>
  );
}

export default Products;
