import React from "react";
import "./Products.css";
import keyboard from "../../assets/keyboard_arrow_down.png"; // replace with your asset path

function Products() {
  return (
    <div className="mobile-card-wrapper">
      <div className="mobile-card">

      
        <div className="top-row">
          <h1 className="price">$262.23</h1>
          <h1 className="stock">In Stock</h1>
        </div>

       
        <p className="text">
          Deliver to <span>Chris - Huntington 11743</span>
        </p>

        <p className="text">
          Est Delivery Date: <span>11/10/24</span>
        </p>

        <div className="action-row">
          <button className="outline-btn">Quantity: 1</button>
          <button className="outline-btn">
            1/CS <img src={keyboard} alt="Dropdown" />
          </button>
        </div>

    
        <button className="add-btn">Add to Cart</button>

      </div>
    </div>
  );
}


export default Products;
