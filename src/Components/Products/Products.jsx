






// import React, { useState } from "react";
// import "./Products.css";

// function Products() {
//   const [active, setActive] = useState(null);

//   return (
//     <div className="mobile-card-wrapper">
//       <div className="mobile-card">

//         {/* Top row */}
//         <div className="top-row">
//           <h1 className="price"><strong>$262.23</strong></h1>
//           <h1 className="stock"><strong>In Stock</strong></h1>
//         </div>

//         {/* Delivery info */}
//         <p className="text">
//           Deliver to <span>Chris - Huntington<span className="zip">11743</span></span>
//         </p>

//         <p className="text">
//           Est Delivery Date: <span>11/10/24</span>
//         </p>

//         {/* Action row */}
//         <div className="action-row">
//           <select
//             className={`select  ${active === "qty" ? "active" : ""}`}
//             onClick={() => setActive("qty")}
//           >
//             <option>Quantity: 1</option>
//             <option>Quantity: 2</option>
//             <option>Quantity: 3</option>
//           </select>

//           <select
//             className={`select  ${active === "cs" ? "active" : ""}`}
//             onClick={() => setActive("cs")}
//           >
//             <option>1 / CS</option>
//             <option>2 / CS</option>
//             <option>3 / CS</option>
//           </select>
//         </div>

//         {/* Add to cart */}
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
//   const [status, setStatus] = useState("idle"); 
//   // idle | loading | success | error

//   const handleAddToCart = async () => {
//     setStatus("loading");

//     try {
//       const response = await fetch("https://fakestoreapi.com/carts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           userId: 1,
//           date: new Date(),
//           products: [{ productId: 1, quantity: 1 }],
//         }),
//       });

//       if (!response.ok) throw new Error("Failed");

//       const data = await response.json();
//       console.log("Added to cart:", data);

//       setStatus("success");
//     } catch (error) {
//       console.error(error);
//       setStatus("error");
//     }
//   };

//   return (
//     <div className="mobile-card-wrapper">
//       <div className="mobile-card">

//         <div className="top-row">
//           <h1 className="price"><strong>$262.23</strong></h1>
//           <h1 className="stock"><strong>In Stock</strong></h1>
//         </div>

//         <p className="text">
//           Deliver to <span>Chris - Huntington <span className="zip">11743</span></span>
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

//         <button
//           className={`add-btn ${status === "success" ? "added" : ""}`}
//           onClick={handleAddToCart}
//           disabled={status === "loading" || status === "success"}
//         >
//           {status === "loading" && "Adding..."}
//           {status === "idle" && "Add to Cart"}
//           {status === "success" && "Added ✔"}
//           {status === "error" && "Try Again"}
//         </button>

//       </div>
//     </div>
//   );
// }

// export default Products;



// // 🎯 What You Learned (Important for Interviews)

// // ✔ Using API with fetch
// // ✔ Handling loading / success / error states
// // ✔ Disabling button properly
// // ✔ Real-world UX behavior





import React, { useState } from "react";
import "./Products.css";

function Products() {
  const [active, setActive] = useState(null);
  const [status, setStatus] = useState("idle"); 
  // idle | loading | success | error

  // 🔹 NEW: quantity state
  const [quantity, setQuantity] = useState(1);
  const [cs, setCs] = useState(1);

  const handleAddToCart = async () => {
    setStatus("loading");

    try {
      const response = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1,
          date: new Date(),
          products: [
            {
              productId: 1,
              quantity: quantity, // ✅ using selected quantity
            },
          ],
        }),
      });

      if (!response.ok) throw new Error("Failed");

      const data = await response.json();
      console.log("Added to cart:", data);

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="mobile-card-wrapper">
      <div className="mobile-card">

        <div className="top-row">
          <h1 className="price"><strong>$262.23</strong></h1>
          <h1 className="stock"><strong>In Stock</strong></h1>
        </div>

        <p className="text">
          Deliver to <span>Chris - Huntington <span className="zip">11743</span></span>
        </p>

        <p className="text">
          Est Delivery Date: <span>11/10/24</span>
        </p>

        <div className="action-row">

          {/* ✅ Quantity Select */}
          <select
            className={`select qty ${active === "qty" ? "active" : ""}`}
            onClick={() => setActive("qty")}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            <option value={1}>Quantity: 1</option>
            <option value={2}>Quantity: 2</option>
            <option value={3}>Quantity: 3</option>
            <option value={4}>Quantity: 4</option>
          </select>

          {/* ✅ CS Select */}
          <select
            className={`select cs ${active === "cs" ? "active" : ""}`}
            onClick={() => setActive("cs")}
            value={cs}
            onChange={(e) => setCs(Number(e.target.value))}
          >
            <option value={1}>1 / CS</option>
            <option value={2}>2 / CS</option>
            <option value={3}>3 / CS</option>
          </select>

        </div>

        <button
          className={`add-btn ${status === "success" ? "added" : ""}`}
          onClick={handleAddToCart}
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" && "Adding..."}
          {status === "idle" && "Add to Cart"}
          {status === "success" && "Added ✔"}
          {status === "error" && "Try Again"}
        </button>

      </div>
    </div>
  );
}

export default Products;
