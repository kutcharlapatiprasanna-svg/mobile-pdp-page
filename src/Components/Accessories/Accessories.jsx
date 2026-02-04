



import { useState } from "react";
import "./Accessories.css";

import right from "../../assets/chevron_right.png";
import backward from "../../assets/chevron_backward.png";
import heells from "../../assets/heelstarp.jpg";
import settings from "../../assets/settings_3.jpg";
import Wheelchair from "../../assets/wheelechair.jpg";

const Accessories = () => {
  // States
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);

  
  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} added to cart`);
  };

 
  const handleSearchParts = () => {
    alert("Search Parts button clicked!"); // simplest action
  };

  return (
    <div className="accessories">
      {/* Accessories Header */}
      <div className="accessories-header">
        <p className="accessss">Accessories</p>
        <img
          src={right}
          alt="toggle"
          onClick={() => setOpen(!open)}
          className={open ? "rotate" : ""}
        />
      </div>

      <div className={`productsHiding ${open ? "activing" : "hiding"}`}>
        <div className="products-row">
          <img src={backward} className="arrowing" alt="left" />

          <div className="products">
            {/* Product 1 */}
            <div className="product-card">
              <div className="img-box">
                <img src={heells} alt="Heel Strap" />
              </div>
              <div className="info">
                <h4>Heel Strap</h4>
                <p className="item">Item # STDS831</p>
                <p className="price">$262.23</p>
                <button className="qty">Quantity: 1</button>
                <button
                  className="cart"
                  onClick={() =>
                    handleAddToCart({
                      name: "Heel Strap",
                      price: 262.23,
                      item: "STDS831",
                    })
                  }
                >
                  Add to Cart
                </button>
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
                <button
                  className="cart"
                  onClick={() =>
                    handleAddToCart({
                      name: "Heel Strap",
                      price: 262.23,
                      item: "STDS831",
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <img src={right} className="arrowing" alt="right" />
        </div>

        <div className="view-all">View All Accessories</div>

        <div className="accessories-header1">
          <p className="accessss">You may also like...</p>
          <img
            src={right}
            alt="toggle"
            onClick={() => setOpen(!open)}
            className={open ? "rotate" : ""}
          />
        </div>

        <div className={`productsHiding ${open ? "activing" : "hiding"}`}>
          <div className="products-row">
            <img src={backward} className="arrowing" alt="left" />

            <div className="products">
              {/* Wheelchair 1 */}
              <div className="product-card">
                <div className="img-box">
                  <img src={Wheelchair} alt="Wheelchair" />
                </div>
                <div className="info">
                  <h4>Viper Plus GT Wheelchair</h4>
                  <p className="item">Item # STDS831</p>
                  <p className="price">$262.23</p>
                  <button className="qty">Learn More</button>
                  <button
                    className="cart"
                    onClick={() =>
                      handleAddToCart({
                        name: "WheelChair",
                        price: 262.23,
                        item: "STDS831",
                      })
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="product-card">
                <div className="img-box">
                  <img src={Wheelchair} alt="Wheelchair" />
                </div>
                <div className="info">
                  <h4>Viper Plus GT Wheelchair</h4>
                  <p className="item">Item # STDS831</p>
                  <p className="price">$262.23</p>
                  <button className="qty">Learn More</button>
                  <button
                    className="cart"
                    onClick={() =>
                      handleAddToCart({
                        name: "WheelChair",
                        price: 262.23,
                        item: "STDS831",
                      })
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <img src={right} className="arrowing" alt="right" />
          </div>
        </div>

       
        <div className="parts-card">
          <div className="parts-row">
            <img src={settings} alt="settings" className="parts-icon" />
            <p className="parts-text">
              To find replacement parts or accessories for this product, visit
              the Parts Finder page.
            </p>
          </div>

       
          <button className="parts-btn" onClick={handleSearchParts}>
            Search Parts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accessories;





// // import right from "../../assets/chevron_right.png";
// // import backward from "../../assets/chevron_backward.png";

// // import heells from "../../assets/heelstarp.jpg";
// // import settings from "../../assets/settings_3.jpg";
// // import Wheelchair from "../../assets/wheelechair.jpg";
// // import "./Accessories.css";
// // import { useState } from "react";

// // const Accessories = () => {
// //   const [open, setOpen] = useState(false);


// //   const [cart, setCart] = useState([]);


// //   const handleAddToCart = (product) => {
// //     setCart((prev) => [...prev, product]);
// //     alert(`${product.name} Cart has ben added`);
// //   };

// //   return (
// //     <div className="accessories">
// //       {/* Accessories Header */}
// //       <div className="accessories-header">
// //         <p className="accessss">Accessories</p>

// //         <img
// //           src={right}
// //           alt="toggle"
// //           onClick={() => setOpen(!open)}
// //           className={open ? "rotate" : ""}
// //         />
// //       </div>

// //       {/* Accessories Products */}
// //       <div className={`productsHiding ${open ? "activing" : "hiding"}`}>
// //         <div className="products-row">
// //           <img src={backward} className="arrowing" alt="left" />

// //           <div className="products">
// //             {/* Product 1 */}
// //             <div className="product-card">
// //               <div className="img-box">
// //                 <img src={heells} alt="Heel Strap" />
// //               </div>
// //               <div className="info">
// //                 <h4>Heel Strap</h4>
// //                 <p className="item">Item # STDS831</p>
// //                 <p className="price">$262.23</p>
// //                 <button className="qty">Quantity: 1</button>

// //                 <button
// //                   className="cart"
// //                   onClick={() =>
// //                     handleAddToCart({
// //                       name: "Heel Strap",
// //                       price: 262.23,
// //                       item: "STDS831",
// //                     })
// //                   }
// //                 >
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Product 2 */}
// //             <div className="product-card">
// //               <div className="img-box">
// //                 <img src={heells} alt="Heel Strap" />
// //               </div>
// //               <div className="info">
// //                 <h4>Heel Strap</h4>
// //                 <p className="item">Item # STDS831</p>
// //                 <p className="price">$262.23</p>
// //                 <button className="qty">Quantity: 1</button>

// //                 <button
// //                   className="cart"
// //                   onClick={() =>
// //                     handleAddToCart({
// //                       name: "Heel Strap",
// //                       price: 262.23,
// //                       item: "STDS831",
// //                     })
// //                   }
// //                 >
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //           <img src={right} className="arrowing" alt="right" />
// //         </div>

// //         <div className="view-all">View All Accessories</div>

// //         {/* You may also like */}
// //         <div className="accessories-header1">
// //           <p className="accessss">You may also like...</p>
// //         </div>

// //         <div className="products-row">
// //           <img src={backward} className="arrowing" alt="left" />

// //           <div className="products">
// //             {/* Wheelchair 1 */}
// //             <div className="product-card">
// //               <div className="img-box">
// //                 <img src={Wheelchair} alt="Wheelchair" />
// //               </div>
// //               <div className="info">
// //                 <h4>Viper Plus GT Wheelchair</h4>
// //                 <p className="item">Item # STDS831</p>
// //                 <p className="price">$262.23</p>
// //                 <button className="qty">Learn More</button>

// //                 <button
// //                   className="cart"
// //                   onClick={() =>
// //                     handleAddToCart({
// //                       name: "Viper Plus GT Wheelchair",
// //                       price: 262.23,
// //                       item: "STDS831",
// //                     })
// //                   }
// //                 >
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Wheelchair 2 */}
// //             <div className="product-card">
// //               <div className="img-box">
// //                 <img src={Wheelchair} alt="Wheelchair" />
// //               </div>
// //               <div className="info">
// //                 <h4>Viper Plus GT Wheelchair</h4>
// //                 <p className="item">Item # STDS831</p>
// //                 <p className="price">$262.23</p>
// //                 <button className="qty">Learn More</button>

// //                 <button
// //                   className="cart"
// //                   onClick={() =>
// //                     handleAddToCart({
// //                       name: "Viper Plus GT Wheelchair",
// //                       price: 262.23,
// //                       item: "STDS831",
// //                     })
// //                   }
// //                 >
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //           <img src={right} className="arrowing" alt="right" />
// //         </div>

// //         {/* Parts Finder */}
// //         <div className="parts-card">
// //           <div className="parts-row">
// //             <img src={settings} alt="settings" className="parts-icon" />
// //             <p className="parts-text">
// //               To find replacement parts or accessories for this product, visit
// //               the Parts Finder page.
// //             </p>
// //           </div>

// //           <button className="parts-btn">Search Parts</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Accessories;




// // import { useState } from "react";
// // import right from "../../assets/chevron_right.png";
// // import backward from "../../assets/chevron_backward.png";
// // import heells from "../../assets/heelstarp.jpg";
// // import Wheelchair from "../../assets/wheelechair.jpg";
// // import settings from "../../assets/settings_3.jpg";
// // import "./Accessories.css";

// // const Accessories = () => {
// //   const [openAccessories, setOpenAccessories] = useState(false);
// //   const [openYouMayLike, setOpenYouMayLike] = useState(false);

// //   const handleAddToCart = (name) => {
// //     alert(`${name} added to cart`);
// //   };

// //   return (
// //     <div className="accessories">

// //       {/* ===== Accessories Header ===== */}
// //       <div className="accessories-header">
// //         <p className="accessss">Accessories</p>

// //         <img
// //           src={right}
// //           alt="arrow"
// //           onClick={() => setOpenAccessories(!openAccessories)}
// //           className={openAccessories ? "rotate" : ""}
// //         />
// //       </div>

// //       {/* ===== Accessories Products ===== */}
// //       <div className={`productsHiding ${openAccessories ? "activing" : "hiding"}`}>
// //         <div className="products-row">
// //           <img src={backward} className="arrowing" alt="left" />

// //           <div className="products">
// //             {[1, 2].map((_, i) => (
// //               <div className="product-card" key={i}>
// //                 <div className="img-box">
// //                   <img src={heells} alt="Heel Strap" />
// //                 </div>
// //                 <div className="info">
// //                   <h4>Heel Strap</h4>
// //                   <p className="item">Item # STDS831</p>
// //                   <p className="price">$262.23</p>
// //                   <button className="qty">Quantity: 1</button>
// //                   <button
// //                     className="cart"
// //                     onClick={() => handleAddToCart("Heel Strap")}
// //                   >
// //                     Add to Cart
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           <img src={right} className="arrowing" alt="right" />
// //         </div>

// //         <div className="view-all">View All Accessories</div>
// //       </div>

// //       {/* ===== You May Also Like Header ===== */}
// //       <div className="accessories-header1">
// //         <p className="accessss">You may also like...</p>

// //         <img
// //           src={right}
// //           alt="arrow"
// //           onClick={() => setOpenYouMayLike(!openYouMayLike)}
// //           className={openYouMayLike ? "rotate" : ""}
// //         />
// //       </div>

// //       {/* ===== You May Also Like Products ===== */}
// //       <div className={`productsHiding ${openYouMayLike ? "activing" : "hiding"}`}>
// //         <div className="products-row">
// //           <img src={backward} className="arrowing" alt="left" />

// //           <div className="products">
// //             {[1, 2].map((_, i) => (
// //               <div className="product-card" key={i}>
// //                 <div className="img-box">
// //                   <img src={Wheelchair} alt="Wheelchair" />
// //                 </div>
// //                 <div className="info">
// //                   <h4>Viper Plus GT Wheelchair</h4>
// //                   <p className="item">Item # STDS831</p>
// //                   <p className="price">$262.23</p>
// //                   <button className="qty">Learn More</button>
// //                   <button
// //                     className="cart"
// //                     onClick={() => handleAddToCart("Wheelchair")}
// //                   >
// //                     Add to Cart
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           <img src={right} className="arrowing" alt="right" />
// //         </div>
// //       </div>

// //       {/* ===== Parts Section ===== */}
// //       <div className="parts-card">
// //         <div className="parts-row">
// //           <img src={settings} alt="settings" className="parts-icon" />
// //           <p className="parts-text">
// //             To find replacement parts or accessories for this product,
// //             visit the Parts Finder page.
// //           </p>
// //         </div>

// //         <button className="parts-btn">Search Parts</button>
// //       </div>

// //     </div>
// //   );
// // };

// // export default Accessories;




