import right from "../../assets/chevron_right.png";
import backward from "../../assets/chevron_backward.png";

import heells from "../../assets/heelstarp.jpg";
import settings from "../../assets/settings_3.jpg";
import "./Accessories.css";
import { useState } from "react";

const Accessories = () => {
  const [open, setOpen] = useState(false);

  return (


    <div className="accessories">

      <div></div>
      <div className="accessories-header">
        <p className="accessss">Accessories</p>

        <img
          src={right}
          alt="i"
          onClick={() => setOpen(!open)}
          className={open ? "rotate" : ""}
        />
      </div>


      <div className={`productsHiding ${open ? "activing" : "hiding"}`}>
        <div className="products-row">


          <img src={backward} className="arrowing" alt="left" />


          <div className="products">

            <div className="product-card">
              <div className="img-box">
                <img src={heells} alt="Heel Strap" />
              </div>
              <div className="info">
                <h4>Heel Strap</h4>
                <p className="item">Item # STDS831</p>
                <p className="price">$262.23</p>
                <button className="qty">Quantity: 1</button>
                <button className="cart">Add to Cart</button>
              </div>
            </div>

            <div className="product-card">
              <div className="img-box">
                <img src={heells} alt="Heel Strap" />
              </div>
              <div className="info">
                <h4>Heel Strap</h4>
                <p className="item">Item # STDS831</p>
                <p className="price">$262.23</p>
                <button className="qty">Quantity: 1</button>
                <button className="cart">Add to Cart</button>
              </div>
            </div>

          </div>

          <img src={right} className="arrowing" alt="right" />


        </div>
        <div className="view-all">
          View All Accessories
        </div>

        <div className="accessories-header">
          <p className="accessss">You may also like...
          </p>

          <img
            src={right}
            alt="i"
            onClick={() => setOpen(!open)}
            className={open ? "rotate" : ""} />
        </div>


        <div className={`productsHiding ${open ? "activing" : "hiding"}`}>
          <div className="products-row">


            <img src={backward} className="arrowing" alt="left" />


            <div className="products">

              <div className="product-card">
                <div className="img-box">
                  <img src={heells} alt="Heel Strap" />
                </div>
                <div className="info">
                  <h4>Viper Plus GT Wheelchair </h4>
                  <p className="item">Item # STDS831</p>
                  <p className="price">$262.23</p>
                  <button className="qty">Learn More
                  </button>
                  <button className="cart">Add to Cart</button>
                </div>
              </div>

              <div className="product-card">
                <div className="img-box">
                  <img src={heells} alt="Heel Strap" />
                </div>
                <div className="info">
                  <h4>Viper Plus GT
                    Wheelchair </h4>
                  <p className="item">Item # STDS831</p>
                  <p className="price">$262.23</p>
                  <button className="qty">Learn More
                  </button>
                  <button className="cart">Add to Cart</button>
                </div>
              </div>

            </div>

            <img src={right} className="arrowing" alt="right" />


          </div>


        </div>



        {/* <div className="last-button-one">
          <div className="last-page">
            <img className="last-img" src={settings} alt="s"></img>
            <p>To find replacement
              parts or accessories
              for this product,
              visit the Parts Finder
              page.</p>
            </div>
           
              <button className="hi">Search Parts</button>
            
        </div>

 */}
    


    

     <div className="parts-card">
      <div className="parts-row">
        <img src={settings} alt="settings" className="parts-icon" />

        <p className="parts-text">
          To find replacement parts or accessories for this product,
          visit the Parts Finder page.
        </p>
      </div>

      <button className="parts-btn">Search Parts</button>
    </div>



      </div>



    </div>





  );
};

export default Accessories;
