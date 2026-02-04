import React, { useState } from "react";
import "./WheelChair.css";

import wheelchair1 from "../../assets/Untitleddesign_33.webp";
import wheelchair2 from "../../assets/5249.jpg";
import wheelchair3 from "../../assets/Boxer_Pro_A_-1.webp";

import like1 from "../../assets/white-image.png";
import like2 from "../../assets/red-image.png";
import share from "../../assets/share.png";

const wheelchaires = [wheelchair1, wheelchair2, wheelchair3];

const WheelChair = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [liked, setLiked] = useState(true);

  
  const handleShare = async () => {
    const shareData = {
      title: "Silver Sport 2 Wheelchair",
      text: "Check out this Silver Sport 2 Wheelchair!",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log("Share cancelled");
      }
    } else {
      alert("Sharing not supported on this browser");
    }
  };

  return (
    <div className="sports">

      <h1 className="w">Silver Sport 2</h1>
      <h1>Wheelchair</h1>

     
      <div className="wheelchair-image-container">
        <img
          src={wheelchaires[activeIndex]}
          alt="Wheelchair"
          className="wheelchair-image"
        />
      </div>

      
      <div className="dots">
        {wheelchaires.map((_, index) => (
          <p
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <h1 className="price">$262.23</h1>

      {/* Item + Like / Share */}
      <div className="item-row">
        <p className="item-text">Item # SSP218DDA-ELR</p>

        <div className="item-actions">
          {/* LIKE */}
          <img
            src={liked ? like1 : like2}
            alt="Like"
            className="like-icon"
            onClick={() => setLiked(!liked)}
          />

          {/* SHARE */}
          <img
            src={share}
            alt="Share"
            className="share"
            onClick={handleShare}
          />
        </div>
      </div>

      <div className="final-one">
        <p>UPC # 822383140414</p>
        <p>HCPCS # E4002</p>
      </div>
    </div>
  );
};

export default WheelChair;



// 🔹 What is handleShare?
// const handleShare = async () => {


// ➡️ This is a function that runs when you click the Share icon.
// ➡️ async means: this function may wait for something to finish (non-blocking).

// 🔹 Step 1: What is shareData?
// const shareData = {
//   title: "Silver Sport 2 Wheelchair",
//   text: "Check out this Silver Sport 2 Wheelchair!",
//   url: window.location.href,
// };


// This object tells the browser WHAT to share.

// Property	Meaning
// title	Title shown in share apps
// text	Message content
// url	Current page link

// 📌 window.location.href
// 👉 Automatically gets the current page URL

// 🔹 Step 2: What is navigator.share?
// if (navigator.share) {


// ✔ Checks whether the browser supports sharing

// ✅ Mobile Chrome → supports

// ❌ Old desktop browsers → may not

// This avoids crashes.

// 🔹 Step 3: Sharing action
// await navigator.share(shareData);


// ➡️ Opens native mobile share popup
// ➡️ User selects:

// WhatsApp

// Email

// Messages

// Telegram, etc.

// 📌 await means:

// “Wait until user finishes sharing or cancels”

// 🔹 Step 4: Why try / catch?
// try {
//   await navigator.share(shareData);
// } catch (error) {
//   console.log("Share cancelled");
// }


// User may:

// Close popup

// Press back

// Cancel sharing

// ⚠️ That causes an error internally
// 👉 catch prevents app crash

// ✔ Safe UX

// 🔹 Step 5: Fallback for unsupported browsers
// else {
//   alert("Sharing not supported on this browser");
// }


// If browser does NOT support sharing:

// Shows a message

// App still works

// No error

// 🔄 Full Flow in Simple Words

// 1️⃣ User clicks Share icon
// 2️⃣ Browser checks support
// 3️⃣ Mobile share popup opens
// 4️⃣ User selects app
// 5️⃣ Link + text is shared